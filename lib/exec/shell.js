import { appendFileSync, closeSync, mkdirSync, openSync, writeFileSync, writeSync } from "node:fs";
import { dirname } from "node:path";
function splitShellDelta(delta) {
    const parts = String(delta ?? "").split("\n[stderr]\n");
    return {
        stdout: parts.shift() ?? "",
        stderr: parts.join("\n[stderr]\n")
    };
}
const BACKGROUND_PID_MARKER = "CURSOR_BG_PID=";
const BACKGROUND_PID_PROLOGUE = 'echo "CURSOR_BG_PID=$(awk \'/^NSpid:/ {print $2}\' /proc/$$/status)"';
function createPidProbe() {
    let buf = "";
    let resolved = false;
    let failed = false;
    const consume = (delta)=>{
        if (resolved || failed) return {
            pid: void 0,
            rest: String(delta ?? "")
        };
        const text = String(delta ?? "");
        if (0 === text.length) return {
            pid: void 0,
            rest: ""
        };
        buf += text;
        const newline = buf.indexOf("\n");
        if (buf.startsWith(BACKGROUND_PID_MARKER) && -1 !== newline) {
            const raw = buf.slice(BACKGROUND_PID_MARKER.length, newline).trim();
            const rest = buf.slice(newline + 1);
            buf = "";
            resolved = true;
            const pid = /^\d+$/.test(raw) ? Number(raw) : void 0;
            return {
                pid,
                rest
            };
        }
        if (BACKGROUND_PID_MARKER.startsWith(buf) || buf.startsWith(BACKGROUND_PID_MARKER) && -1 === newline) return {
            pid: void 0,
            rest: ""
        };
        failed = true;
        const rest = buf;
        buf = "";
        return {
            pid: void 0,
            rest
        };
    };
    return {
        consume
    };
}
const CURSOR_TERMINAL_RUNNING_FOR_WIDTH = 9;
const CURSOR_TERMINAL_RUNNING_FOR_KEY = "running_for_ms: ";
function yamlQuoted(value) {
    return JSON.stringify(String(value ?? ""));
}
function padRunningForMs(ms) {
    return String(Math.max(0, Math.trunc(ms) || 0)).padEnd(CURSOR_TERMINAL_RUNNING_FOR_WIDTH);
}
function countTextLines(text) {
    if (0 === text.length) return 0;
    const endsWithNl = text.endsWith("\n");
    const parts = text.split(/\r?\n/);
    return endsWithNl ? parts.length - 1 : parts.length;
}
function formatCursorTerminalHeader({ pid = -1, cwd = "", command = "", title, status = "running", startedAt, runningForMs = 0 }) {
    const lines = [
        "---",
        `pid: ${Number.isSafeInteger(pid) ? pid : -1}`,
        `cwd: ${yamlQuoted(cwd)}`,
        `command: ${yamlQuoted(command)}`
    ];
    if ("string" == typeof title && title.length > 0) lines.push(`title: ${yamlQuoted(title)}`);
    lines.push(`status: ${status}`);
    lines.push(`started_at: ${startedAt}`);
    lines.push(`running_for_ms: ${padRunningForMs(runningForMs)}`);
    lines.push("---");
    return `${lines.join("\n")}\n`;
}
function formatCursorTerminalFooter({ exitCode, elapsedMs, endedAt }) {
    return `\n---\nexit_code: ${exitCode}\nelapsed_ms: ${elapsedMs}\nended_at: ${endedAt}\n---\n`;
}
function createCursorTerminalLog(filePath, initial = {}) {
    const startedAtMs = Number.isFinite(initial.startedAtMs) ? initial.startedAtMs : Date.now();
    const meta = {
        pid: Number.isSafeInteger(initial.pid) && initial.pid > 0 ? initial.pid : -1,
        cwd: initial.cwd ?? "",
        command: initial.command ?? "",
        title: initial.title,
        status: initial.status ?? "running",
        startedAt: initial.startedAt ?? new Date(startedAtMs).toISOString(),
        startedAtMs,
        runningForMs: 0
    };
    let body = "";
    let footer = "";
    let header = "";
    let finished = false;
    const snapshot = ()=>header + body + footer;
    const stats = ()=>{
        const text = snapshot();
        return {
            filePath,
            sizeBytes: Buffer.byteLength(text),
            lineCount: countTextLines(text)
        };
    };
    const writeAll = ()=>{
        mkdirSync(dirname(filePath), {
            recursive: true
        });
        header = formatCursorTerminalHeader(meta);
        writeFileSync(filePath, snapshot());
    };
    const patchRunningFor = (now = Date.now())=>{
        if (finished || 0 === header.length) return;
        const next = Math.max(0, now - meta.startedAtMs);
        const padded = padRunningForMs(next);
        if (padded.length > CURSOR_TERMINAL_RUNNING_FOR_WIDTH) {
            meta.runningForMs = next;
            try {
                writeAll();
            } catch  {}
            return;
        }
        const idx = header.indexOf(CURSOR_TERMINAL_RUNNING_FOR_KEY);
        if (idx < 0) return;
        meta.runningForMs = next;
        const offset = idx + CURSOR_TERMINAL_RUNNING_FOR_KEY.length;
        try {
            const fd = openSync(filePath, "r+");
            try {
                writeSync(fd, padded, offset);
            } finally{
                closeSync(fd);
            }
            header = formatCursorTerminalHeader(meta);
        } catch  {
            try {
                writeAll();
            } catch  {}
        }
    };
    try {
        writeAll();
    } catch  {}
    const ticker = setInterval(()=>patchRunningFor(), 5000);
    ticker.unref?.();
    return {
        filePath,
        get bytes () {
            return Buffer.byteLength(body);
        },
        stats,
        append (text) {
            if (finished || null == text || 0 === text.length) return;
            body += text;
            try {
                appendFileSync(filePath, text);
            } catch  {}
        },
        setPid (pid) {
            if (finished || !Number.isSafeInteger(pid) || pid <= 0 || meta.pid === pid) return;
            meta.pid = pid;
            meta.runningForMs = Math.max(0, Date.now() - meta.startedAtMs);
            try {
                writeAll();
            } catch  {}
        },
        finish ({ exitCode = 1, aborted = false, now = Date.now() } = {}) {
            if (finished) return;
            finished = true;
            clearInterval(ticker);
            const elapsed = Math.max(0, now - meta.startedAtMs);
            meta.runningForMs = elapsed;
            meta.status = true !== aborted && 0 === exitCode ? "succeeded" : "failed";
            footer = formatCursorTerminalFooter({
                exitCode: exitCode ?? 1,
                elapsedMs: elapsed,
                endedAt: new Date(now).toISOString()
            });
            try {
                writeAll();
            } catch  {}
        },
        dispose () {
            clearInterval(ticker);
        }
    };
}
function parseJobIdN(jobId) {
    const match = /^bash-(\d+)$/.exec(String(jobId ?? ""));
    return null === match ? void 0 : Number(match[1]);
}
export { BACKGROUND_PID_MARKER, BACKGROUND_PID_PROLOGUE, createCursorTerminalLog, createPidProbe, formatCursorTerminalFooter, formatCursorTerminalHeader, parseJobIdN, splitShellDelta };
