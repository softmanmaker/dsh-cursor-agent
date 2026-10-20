import { basename, dirname } from "node:path";
import { mkdirSync } from "node:fs";
import { spawn } from "node:child_process";
import node_os from "node:os";
import { READ_IMAGE_MAX_BYTES, binaryUnsupportedReason, imageMimeFromPath, isNotTextError, resizeReadImage, sniffImageMime } from "./images.js";
const SEARCH_TIMEOUT_MS = 30000;
const SEARCH_GRACE_MS = 3000;
const CURSOR_GREP_MAX_BYTES = 10485760;
const CURSOR_GREP_STDERR_MAX_BYTES = 65536;
const CURSOR_GLOB_MAX_FILES = 1000;
const CURSOR_GLOB_VCS_EXCLUDES = [
    ".git",
    ".svn",
    ".hg",
    ".bzr",
    ".jj",
    ".sl"
];
const SANDBOX_WIDER_MODES = Object.freeze({
    "read-only": [
        "workspace-write",
        "danger-full-access"
    ],
    "workspace-write": [
        "danger-full-access"
    ]
});
const DSH_MODE_RANK = Object.freeze({
    "read-only": 0,
    "workspace-write": 1,
    "danger-full-access": 2
});
const CURSOR_SANDBOX_TYPES = Object.freeze({
    UNSPECIFIED: 0,
    INSECURE_NONE: 1,
    WORKSPACE_READWRITE: 2,
    WORKSPACE_READONLY: 3
});
function worldFromAgent(agent) {
    const ctx = agent?.ctx;
    if (void 0 === ctx) return {
        agent
    };
    return {
        agent,
        ctx,
        fs: ctx.get?.("fs") ?? ctx.fs,
        subprocess: ctx.get?.("subprocess") ?? ctx.subprocess,
        shell: ctx.get?.("shell") ?? ctx.shell,
        jobs: ctx.get?.("jobs") ?? ctx.jobs,
        approval: ctx.get?.("approval") ?? ctx.approval,
        sandboxPolicy: ctx.get?.("sandboxPolicy") ?? ctx.sandboxPolicy
    };
}
function resolveOptions(agent) {
    const cwd = agent?.session?.header?.cwd;
    return void 0 === cwd ? void 0 : {
        cwd
    };
}
function displayError(error) {
    return error instanceof Error ? error.message : String(error);
}
async function escalateSandboxMutation(world, { verb, path, operation, signal, callId }) {
    const policyService = world.sandboxPolicy;
    if (void 0 === policyService) return;
    const policy = policyService.resolve(void 0 === world.agent ? {} : {
        session: world.agent.session
    });
    if ("danger-full-access" === policy.mode) return policy;
    if (void 0 === world.fs) throw new Error(`cannot ${verb} "${path}": permission denied (no filesystem service is composed)`);
    const roots = [
        ...new Set([
            policy.workspaceRoot,
            "/tmp",
            node_os.tmpdir()
        ].filter((value)=>"string" == typeof value && value.length > 0))
    ];
    let contained = false;
    const target = await world.fs.resolve(path, resolveOptions(world.agent));
    for (const root of roots)try {
        if (await world.fs.contains(await world.fs.resolve(root), target)) {
            contained = true;
            break;
        }
    } catch  {}
    if ("workspace-write" === policy.mode && contained) return policy;
    const requested = contained ? "workspace-write" : "danger-full-access";
    const wider = SANDBOX_WIDER_MODES[policy.mode] ?? [];
    if (!wider.includes(requested)) throw new Error(`cannot ${verb} "${target.displayPath}": permission denied (no wider sandbox mode is available)`);
    if (void 0 === world.approval) throw new Error(`cannot ${verb} "${target.displayPath}": permission denied (no approval service is composed)`);
    if (void 0 === world.agent) throw new Error(`cannot ${verb} "${target.displayPath}": permission denied (no owning agent session)`);
    const outcome = await world.approval.request({
        agent: world.agent,
        toolName: `cursor_${verb}`,
        callId,
        reason: `escalate sandbox to ${requested}: ${operation} "${target.displayPath}"`,
        signal
    });
    if ("allowed-once" === outcome) return {
        ...policy,
        mode: requested
    };
    if ("cancelled" === outcome) throw new Error(`cannot ${verb} "${target.displayPath}": permission denied (approval was cancelled)`);
    if ("unavailable" === outcome) throw new Error(`cannot ${verb} "${target.displayPath}": permission denied (no approval channel is available)`);
    throw new Error(`cannot ${verb} "${target.displayPath}": permission denied (the user rejected the sandbox escalation)`);
}
function cursorSandboxTypeToMode(requested) {
    const type = Number(requested?.type ?? 0);
    const extras = Array.isArray(requested?.additionalReadwritePaths) ? requested.additionalReadwritePaths.filter((path)=>String(path ?? "").length > 0) : [];
    if (extras.length > 0) return "danger-full-access";
    if (type === CURSOR_SANDBOX_TYPES.INSECURE_NONE) return "danger-full-access";
    if (type === CURSOR_SANDBOX_TYPES.WORKSPACE_READWRITE) return "workspace-write";
    if (type === CURSOR_SANDBOX_TYPES.WORKSPACE_READONLY) return "read-only";
}
async function resolveShellSandboxPolicy(world, requested, command, { signal, callId } = {}) {
    const policyService = world.sandboxPolicy;
    if (void 0 === policyService) return;
    const standing = policyService.resolve(void 0 === world.agent ? {} : {
        session: world.agent.session
    });
    if (null == requested) return standing;
    const requestedMode = cursorSandboxTypeToMode(requested);
    if (void 0 === requestedMode) return standing;
    if (DSH_MODE_RANK[requestedMode] <= DSH_MODE_RANK[standing.mode]) return {
        ...standing,
        mode: requestedMode
    };
    if (void 0 === world.approval) throw new Error(`command "${command.slice(0, 80)}" requires sandbox escalation to ${requestedMode}, but no approval service is composed`);
    if (void 0 === world.agent) throw new Error(`command "${command.slice(0, 80)}" requires sandbox escalation to ${requestedMode}, but the call has no owning agent session`);
    const outcome = await world.approval.request({
        agent: world.agent,
        toolName: "bash",
        callId,
        reason: `escalate sandbox to ${requestedMode}: the model requested it for the shell command "${command.slice(0, 80)}"`,
        signal
    });
    if ("allowed-once" === outcome) return {
        ...standing,
        mode: requestedMode
    };
    if ("cancelled" === outcome) throw new Error(`command "${command.slice(0, 80)}" was not executed: the sandbox escalation approval was cancelled`);
    if ("unavailable" === outcome) throw new Error(`command "${command.slice(0, 80)}" was not executed: no approval channel is available for the sandbox escalation`);
    throw new Error(`command "${command.slice(0, 80)}" was not executed: the user rejected the sandbox escalation to ${requestedMode}`);
}
async function execRead(world, { path, signal }) {
    if (void 0 === world.fs) throw new Error("read requires the session filesystem service");
    const filePath = String(path ?? "");
    if (0 === filePath.trim().length) throw new Error("file_path must be a non-empty string");
    const target = await world.fs.resolve(filePath, resolveOptions(world.agent));
    const info = await world.fs.stat(target, signal);
    if (void 0 === info) throw new Error(`cannot read "${target.displayPath}": not found`);
    if ("file" !== info.type) throw new Error(`cannot read "${target.displayPath}": not a regular file`);
    try {
        const content = await world.fs.readText(target, signal);
        return {
            kind: "text",
            path: target.displayPath,
            content,
            bytes: new TextEncoder().encode(content).length
        };
    } catch (error) {
        if (!isNotTextError(error)) throw error;
        if ("function" != typeof world.fs.readBytes) throw error;
        const data = await world.fs.readBytes(target, signal, READ_IMAGE_MAX_BYTES);
        const mime = sniffImageMime(data) ?? imageMimeFromPath(target.displayPath);
        if (void 0 !== mime) {
            const resized = await resizeReadImage(data, mime, basename(target.displayPath));
            return {
                kind: "image",
                path: target.displayPath,
                data: resized.data,
                mime: resized.mime,
                bytes: resized.bytes,
                fileSize: data.length,
                width: resized.width,
                height: resized.height,
                originalDimensions: resized.originalDimensions
            };
        }
        const reason = binaryUnsupportedReason(target.displayPath);
        const invalid = new Error(reason);
        invalid.code = "READ_INVALID_FILE";
        invalid.path = target.displayPath;
        throw invalid;
    }
}
async function execWrite(world, { path, content, signal, callId }) {
    if (void 0 === world.fs) throw new Error("write requires the session filesystem service");
    const filePath = String(path ?? "");
    if (0 === filePath.trim().length) throw new Error("file_path must be a non-empty string");
    const target = await world.fs.resolve(filePath, resolveOptions(world.agent));
    const info = await world.fs.stat(target, signal);
    const policy = await escalateSandboxMutation(world, {
        verb: "write",
        path: filePath,
        operation: `write ${void 0 === info ? "new file" : "file"}`,
        signal,
        callId
    });
    if (void 0 === info && "function" == typeof world.fs.processPath) try {
        mkdirSync(dirname(world.fs.processPath(target)), {
            recursive: true
        });
    } catch  {}
    await world.fs.writeText(target, content, void 0, signal, policy);
    return {
        path: target.displayPath,
        operation: void 0 === info ? "create" : "update"
    };
}
async function execDelete(world, { path, signal, callId }) {
    if (void 0 === world.fs) throw new Error("delete requires the session filesystem service");
    if (void 0 === world.shell) throw new Error("delete requires the session shell service");
    const filePath = String(path ?? "");
    if (0 === filePath.trim().length) throw new Error("file_path must be a non-empty string");
    const target = await world.fs.resolve(filePath, resolveOptions(world.agent));
    const info = await world.fs.stat(target, signal);
    if (void 0 === info) throw new Error(`cannot delete "${target.displayPath}": not found`);
    const fileSize = info.size;
    const policy = await escalateSandboxMutation(world, {
        verb: "delete",
        path: filePath,
        operation: "delete file",
        signal,
        callId
    });
    const quoted = `'${target.displayPath.replace(/'/g, "'\\''")}'`;
    const request = {
        command: `rm -f -- ${quoted}`,
        timeoutMs: 30000,
        signal
    };
    if (void 0 !== policy) request.sandboxPolicy = policy;
    const result = await world.shell.run(world.shell.resolve(request));
    if (0 !== result.exitCode) {
        const detail = (result.stderr?.text ?? "").trim();
        throw new Error(`rm failed with exit code ${result.exitCode}${detail.length > 0 ? `: ${detail}` : ""}`);
    }
    return {
        path: target.displayPath,
        fileSize
    };
}
let rgPathPromise;
async function resolveRgPath() {
    rgPathPromise ??= import("@vscode/ripgrep").then((mod)=>mod.rgPath);
    return rgPathPromise;
}
async function runPackagedRipgrep({ cwd, signal, argv, subprocess, graceMs = SEARCH_GRACE_MS } = {}) {
    if (signal?.aborted) throw new Error("search was aborted before completion");
    const rgPath = await resolveRgPath().catch((error)=>{
        throw new Error(`could not resolve the packaged ripgrep binary: ${displayError(error)}`);
    });
    if (void 0 !== subprocess) {
        const handle = subprocess.spawn({
            argv: [
                rgPath,
                "--no-config",
                ...argv ?? []
            ],
            cwd: cwd ?? process.cwd(),
            stdio: {
                stdin: "ignore",
                stdout: {
                    maxBytes: CURSOR_GREP_MAX_BYTES
                },
                stderr: {
                    maxBytes: CURSOR_GREP_STDERR_MAX_BYTES
                }
            },
            graceMs,
            signal
        });
        const outcome = await handle.done;
        if (signal?.aborted) throw new Error("search was aborted before completion");
        const stdout = handle.collected?.stdout?.readFrom(0);
        const stderr = handle.collected?.stderr?.readFrom(0);
        if (void 0 === stdout) throw new Error("search command produced no collected stdout");
        if (null !== outcome.signal && !stdout.lossy) throw new Error(`search was killed by signal ${outcome.signal}`);
        if (0 !== outcome.exitCode && 1 !== outcome.exitCode && !stdout.lossy) {
            const detail = String(stderr?.text ?? "").trim();
            throw new Error(`search failed${detail.length > 0 ? `: ${detail}` : ` (exit ${outcome.exitCode})`}`);
        }
        return {
            text: stdout.text ?? "",
            lossy: true === stdout.lossy,
            noMatches: 1 === outcome.exitCode && true !== stdout.lossy
        };
    }
    return await new Promise((resolve, reject)=>{
        const child = spawn(rgPath, [
            "--no-config",
            ...argv ?? []
        ], {
            cwd: cwd ?? process.cwd(),
            stdio: [
                "ignore",
                "pipe",
                "pipe"
            ],
            windowsHide: true
        });
        const stdoutChunks = [];
        const stderrChunks = [];
        let stdoutBytes = 0;
        let stderrBytes = 0;
        let truncated = false;
        const onAbort = ()=>{
            try {
                child.kill("SIGTERM");
            } catch  {}
        };
        if (void 0 !== signal) if (signal.aborted) onAbort();
        else signal.addEventListener("abort", onAbort, {
            once: true
        });
        child.stdout.on("data", (chunk)=>{
            if (truncated) return;
            stdoutBytes += chunk.length;
            if (stdoutBytes > CURSOR_GREP_MAX_BYTES) {
                truncated = true;
                try {
                    child.kill("SIGTERM");
                } catch  {}
                return;
            }
            stdoutChunks.push(chunk);
        });
        child.stderr.on("data", (chunk)=>{
            if (stderrBytes >= CURSOR_GREP_STDERR_MAX_BYTES) return;
            const room = CURSOR_GREP_STDERR_MAX_BYTES - stderrBytes;
            stderrChunks.push(chunk.length > room ? chunk.subarray(0, room) : chunk);
            stderrBytes += Math.min(chunk.length, room);
        });
        child.once("error", (error)=>{
            signal?.removeEventListener("abort", onAbort);
            reject(error);
        });
        child.once("close", (exitCode, killedSignal)=>{
            signal?.removeEventListener("abort", onAbort);
            if (signal?.aborted) return void reject(new Error("search was aborted before completion"));
            if (null !== killedSignal && !truncated) return void reject(new Error(`search was killed by signal ${killedSignal}`));
            if (0 !== exitCode && 1 !== exitCode && !truncated) {
                const detail = Buffer.concat(stderrChunks).toString("utf8").trim();
                reject(new Error(`search failed${detail.length > 0 ? `: ${detail}` : ` (exit ${exitCode})`}`));
                return;
            }
            resolve({
                text: Buffer.concat(stdoutChunks).toString("utf8"),
                lossy: truncated,
                noMatches: 1 === exitCode && !truncated
            });
        });
    });
}
function mergeSearchSignal(signal, timeoutMs = SEARCH_TIMEOUT_MS) {
    const timeout = Number.isFinite(timeoutMs) && timeoutMs > 0 && "function" == typeof AbortSignal.timeout ? AbortSignal.timeout(timeoutMs) : void 0;
    if (void 0 === signal) return timeout;
    if (void 0 === timeout) return signal;
    return "function" == typeof AbortSignal.any ? AbortSignal.any([
        signal,
        timeout
    ]) : signal;
}
async function runCursorSearch(classified, { cwd, signal, subprocess, timeoutMs = SEARCH_TIMEOUT_MS } = {}) {
    const search = classified?.search ?? {};
    const combined = mergeSearchSignal(signal, timeoutMs);
    if ("glob" === search.mode) {
        if ("string" != typeof search.pattern || 0 === search.pattern.length) throw new Error("pattern must be a non-empty string");
        const argv = [
            "--files",
            `--glob=${search.pattern}`,
            "--sort=modified",
            "--no-ignore",
            "--hidden",
            ...CURSOR_GLOB_VCS_EXCLUDES.flatMap((name)=>[
                    `--glob=!**/${name}`,
                    `--glob=!**/${name}/**`
                ])
        ];
        if ("string" == typeof search.path && search.path.length > 0) argv.push("--", search.path);
        const run = await runPackagedRipgrep({
            cwd,
            signal: combined,
            argv,
            subprocess
        });
        const all = run.noMatches ? [] : run.text.split("\n").filter((line)=>line.length > 0);
        const files = all.slice(0, CURSOR_GLOB_MAX_FILES);
        return {
            mode: "glob",
            files,
            totalFiles: all.length,
            truncated: run.lossy || files.length < all.length
        };
    }
    if ("string" != typeof search.pattern || 0 === search.pattern.length) throw new Error("pattern must be a non-empty string");
    const argv = [];
    if (true === search.caseInsensitive) argv.push("-i");
    if ("string" == typeof search.glob && search.glob.length > 0) argv.push(`--glob=${search.glob}`);
    if (Number.isSafeInteger(search.headLimit) && search.headLimit > 0) argv.push(`--max-count=${search.headLimit}`);
    const target = "string" == typeof search.path && search.path.length > 0 ? search.path : ".";
    if ("files_with_matches" === search.mode) {
        argv.push("--files-with-matches", "--", search.pattern, target);
        const run = await runPackagedRipgrep({
            cwd,
            signal: combined,
            argv,
            subprocess
        });
        const files = run.noMatches ? [] : run.text.split("\n").filter((line)=>line.length > 0);
        return {
            mode: "files_with_matches",
            files,
            totalFiles: files.length,
            truncated: run.lossy
        };
    }
    if ("count" === search.mode) {
        argv.push("--count-matches", "--", search.pattern, target);
        const run = await runPackagedRipgrep({
            cwd,
            signal: combined,
            argv,
            subprocess
        });
        const counts = [];
        let totalMatches = 0;
        if (!run.noMatches) for (const line of run.text.split("\n")){
            const cut = line.lastIndexOf(":");
            if (cut <= 0) continue;
            const count = Number(line.slice(cut + 1));
            if (Number.isSafeInteger(count)) {
                counts.push({
                    file: line.slice(0, cut),
                    count
                });
                totalMatches += count;
            }
        }
        return {
            mode: "count",
            counts,
            totalFiles: counts.length,
            totalMatches,
            truncated: run.lossy
        };
    }
    argv.push("--json", "--", search.pattern, target);
    const run = await runPackagedRipgrep({
        cwd,
        signal: combined,
        argv,
        subprocess
    });
    const matches = [];
    const byFile = new Map();
    let totalMatchedLines = 0;
    if (!run.noMatches) for (const line of run.text.split("\n")){
        if (0 === line.length) continue;
        let event;
        try {
            event = JSON.parse(line);
        } catch  {
            continue;
        }
        if (event?.type !== "match") continue;
        const file = event.data?.path?.text ?? "";
        const content = event.data?.lines?.text ?? "";
        const rawLine = event.data?.line_number ?? event.data?.lines?.line_number;
        const lineNumber = Number.isSafeInteger(rawLine) ? rawLine : 0;
        let group = byFile.get(file);
        if (void 0 === group) {
            group = {
                file,
                matches: []
            };
            byFile.set(file, group);
            matches.push(group);
        }
        group.matches.push({
            lineNumber,
            content
        });
        totalMatchedLines += 1;
    }
    return {
        mode: "content",
        matches,
        totalMatchedLines,
        truncated: run.lossy
    };
}
async function execSearch(world, classified, { signal } = {}) {
    const cwd = world.agent?.session?.header?.cwd ?? process.cwd();
    return await runCursorSearch(classified, {
        cwd,
        signal,
        subprocess: world.subprocess
    });
}
const BACKGROUND_PID_PROLOGUE = 'echo "CURSOR_BG_PID=$(awk \'/^NSpid:/ {print $2}\' /proc/$$/status)"';
function parseJobIdN(jobId) {
    const match = /^bash-(\d+)$/.exec(String(jobId ?? ""));
    return null === match ? void 0 : Number(match[1]);
}
function startOwnedJob(world, { command, request }) {
    if (void 0 === world.jobs) return {
        proc: world.shell.start(world.shell.resolve(request)),
        jobId: void 0
    };
    let proc;
    const jobId = world.jobs.start({
        kind: "bash",
        label: command,
        ...void 0 !== world.agent ? {
            owner: world.agent
        } : {},
        run: ()=>{
            proc = world.shell.start(world.shell.resolve(request));
            return {
                cancel: ()=>void proc.kill(),
                done: proc.done.then(()=>({
                        status: "completed" === proc.status ? "completed" : "killed",
                        detail: `exit code: ${proc.exitCode ?? "signal"}`
                    }), ()=>({
                        status: "failed",
                        detail: "spawn or run failed"
                    })),
                readOutput: ()=>proc.readOutput().delta
            };
        }
    });
    return {
        proc,
        jobId
    };
}
async function startCursorShell(world, { command, workdir, timeoutMs = 120000, timeoutBehavior = 0, background = false, sandboxPolicy, signal, callId } = {}) {
    if (void 0 === world.shell) throw new Error("bash requires the session shell service");
    const cwd = "string" == typeof workdir && workdir.length > 0 ? workdir : world.agent?.session?.header?.cwd ?? process.cwd();
    const policy = await resolveShellSandboxPolicy(world, sandboxPolicy, command, {
        signal,
        callId
    });
    const mayBackground = true === background || 2 === timeoutBehavior;
    const bgCommand = mayBackground ? `${BACKGROUND_PID_PROLOGUE}\n${command}` : command;
    const request = {
        command: bgCommand,
        workdir: cwd,
        stdoutMaxBytes: 4194304
    };
    if (true !== background) request.timeoutMs = timeoutMs;
    if (void 0 !== policy) request.sandboxPolicy = policy;
    if (void 0 !== signal && true !== background) request.signal = signal;
    let proc;
    let jobId;
    if (mayBackground) ({ proc, jobId } = startOwnedJob(world, {
        command,
        request
    }));
    else proc = world.shell.start(world.shell.resolve(request));
    const shellId = void 0 === jobId ? void 0 : parseJobIdN(jobId);
    const channel = {
        chunks: [],
        stdout: "",
        done: true === background,
        exitCode: null,
        error: void 0,
        policy,
        backgrounded: true === background,
        proc: true === background ? proc : void 0,
        pid: void 0,
        jobId
    };
    return {
        channel,
        proc,
        jobId,
        shellId,
        workdir: cwd,
        command,
        timeoutMs,
        timeoutBehavior,
        background
    };
}
async function pumpCursorShell(started, { sleep: sleepFn, createPidProbe } = {}) {
    const wait = sleepFn ?? ((ms)=>new Promise((resolve)=>setTimeout(resolve, ms)));
    const { channel, proc, timeoutMs = 120000, timeoutBehavior = 0, background } = started;
    if (true === background) {
        channel.proc = proc;
        channel.backgrounded = true;
        channel.done = true;
        return started;
    }
    const mayBackground = 2 === timeoutBehavior;
    let backgrounded = false;
    const timeoutTimer = setTimeout(()=>{
        if (2 === timeoutBehavior) backgrounded = true;
        else try {
            proc.kill();
        } catch  {}
    }, timeoutMs);
    timeoutTimer.unref?.();
    const pidProbe = mayBackground && "function" == typeof createPidProbe ? createPidProbe() : void 0;
    try {
        for(;;){
            const read = proc.readOutput();
            const probed = void 0 === pidProbe ? {
                pid: void 0,
                rest: read.delta
            } : pidProbe.consume(read.delta);
            if (void 0 !== probed.pid && void 0 === channel.pid) channel.pid = probed.pid;
            if (probed.rest.length > 0) {
                channel.chunks.push(probed.rest);
                channel.stdout += probed.rest;
            }
            if (read.lossy) {
                const note = "\n[output truncated by the shell capture cap]";
                channel.chunks.push(note);
                channel.stdout += note;
            }
            if (backgrounded) {
                channel.proc = proc;
                channel.backgrounded = true;
                channel.jobId = started.jobId;
                channel.done = true;
                return started;
            }
            if ("running" !== proc.status) break;
            await wait(50);
        }
        const tail = proc.readOutput();
        const tailProbed = void 0 === pidProbe ? {
            pid: void 0,
            rest: tail.delta
        } : pidProbe.consume(tail.delta);
        if (void 0 !== tailProbed.pid && void 0 === channel.pid) channel.pid = tailProbed.pid;
        if (tailProbed.rest.length > 0) {
            channel.chunks.push(tailProbed.rest);
            channel.stdout += tailProbed.rest;
        }
        channel.exitCode = proc.exitCode ?? 1;
        channel.done = true;
        return started;
    } catch (error) {
        channel.error = error instanceof Error ? error.message : String(error);
        channel.exitCode = 1;
        channel.done = true;
        throw error;
    } finally{
        clearTimeout(timeoutTimer);
    }
}
function noteProbeRead(store, rawId, entry) {
    if ("string" != typeof rawId || 0 === rawId.length) return;
    store.set(rawId, entry);
}
function takeProbeRead(store, rawId) {
    if ("string" != typeof rawId || 0 === rawId.length) return;
    const entry = store.get(rawId);
    if (void 0 === entry) return;
    store.delete(rawId);
    return entry;
}
export { BACKGROUND_PID_PROLOGUE, CURSOR_GLOB_MAX_FILES, CURSOR_GLOB_VCS_EXCLUDES, CURSOR_GREP_MAX_BYTES, CURSOR_GREP_STDERR_MAX_BYTES, SEARCH_GRACE_MS, SEARCH_TIMEOUT_MS, cursorSandboxTypeToMode, escalateSandboxMutation, execDelete, execRead, execSearch, execWrite, noteProbeRead, parseJobIdN, pumpCursorShell, resolveRgPath, resolveShellSandboxPolicy, runCursorSearch, runPackagedRipgrep, startCursorShell, takeProbeRead, worldFromAgent };
