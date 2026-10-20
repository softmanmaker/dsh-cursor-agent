export declare const SEARCH_TIMEOUT_MS = 30000;
export declare const SEARCH_GRACE_MS = 3000;
export declare const CURSOR_GREP_MAX_BYTES: number;
export declare const CURSOR_GREP_STDERR_MAX_BYTES: number;
export declare const CURSOR_GLOB_MAX_FILES = 1000;
export declare const CURSOR_GLOB_VCS_EXCLUDES: string[];
/** Collect the execution-world seams from a live agent. Missing seams stay undefined. */
export declare function worldFromAgent(agent: any): {
    agent: any;
    ctx?: undefined;
    fs?: undefined;
    subprocess?: undefined;
    shell?: undefined;
    jobs?: undefined;
    approval?: undefined;
    sandboxPolicy?: undefined;
} | {
    agent: any;
    ctx: any;
    fs: any;
    subprocess: any;
    shell: any;
    jobs: any;
    approval: any;
    sandboxPolicy: any;
};
/**
 * Pre-judged sandbox escalation for atomic write/delete. Cursor's mutation
 * frames have no sandbox fields; the plane stands in for the client's dialog.
 */
export declare function escalateSandboxMutation(world: any, { verb, path, operation, signal, callId }: {
    verb: any;
    path: any;
    operation: any;
    signal: any;
    callId: any;
}): Promise<any>;
export declare function cursorSandboxTypeToMode(requested: any): "workspace-write" | "danger-full-access" | "read-only";
export declare function resolveShellSandboxPolicy(world: any, requested: any, command: any, { signal, callId }?: any): Promise<any>;
export declare function execRead(world: any, { path, signal }: {
    path: any;
    signal: any;
}): Promise<{
    kind: string;
    path: any;
    content: any;
    bytes: number;
    data?: undefined;
    mime?: undefined;
    fileSize?: undefined;
    width?: undefined;
    height?: undefined;
    originalDimensions?: undefined;
} | {
    kind: string;
    path: any;
    data: Uint8Array<ArrayBufferLike>;
    mime: string;
    bytes: number;
    fileSize: any;
    width: number;
    height: number;
    originalDimensions: unknown;
    content?: undefined;
}>;
export declare function execWrite(world: any, { path, content, signal, callId }: {
    path: any;
    content: any;
    signal: any;
    callId: any;
}): Promise<{
    path: any;
    operation: string;
}>;
export declare function execDelete(world: any, { path, signal, callId }: {
    path: any;
    signal: any;
    callId: any;
}): Promise<{
    path: any;
    fileSize: any;
}>;
export declare function resolveRgPath(): Promise<any>;
/**
 * Run packaged ripgrep. Prefer `subprocess` (session execution world); fall
 * back to host `spawn` only when no seam is mounted (unit tests).
 */
export declare function runPackagedRipgrep({ cwd, signal, argv, subprocess, graceMs }?: any): Promise<any>;
export declare function runCursorSearch(classified: any, { cwd, signal, subprocess, timeoutMs }?: any): Promise<{
    mode: string;
    files: any;
    totalFiles: any;
    truncated: any;
    counts?: undefined;
    totalMatches?: undefined;
    matches?: undefined;
    totalMatchedLines?: undefined;
} | {
    mode: string;
    counts: any[];
    totalFiles: number;
    totalMatches: number;
    truncated: any;
    files?: undefined;
    matches?: undefined;
    totalMatchedLines?: undefined;
} | {
    mode: string;
    matches: any[];
    totalMatchedLines: number;
    truncated: any;
    files?: undefined;
    totalFiles?: undefined;
    counts?: undefined;
    totalMatches?: undefined;
}>;
export declare function execSearch(world: any, classified: any, { signal }?: any): Promise<{
    mode: string;
    files: any;
    totalFiles: any;
    truncated: any;
    counts?: undefined;
    totalMatches?: undefined;
    matches?: undefined;
    totalMatchedLines?: undefined;
} | {
    mode: string;
    counts: any[];
    totalFiles: number;
    totalMatches: number;
    truncated: any;
    files?: undefined;
    matches?: undefined;
    totalMatchedLines?: undefined;
} | {
    mode: string;
    matches: any[];
    totalMatchedLines: number;
    truncated: any;
    files?: undefined;
    totalFiles?: undefined;
    counts?: undefined;
    totalMatches?: undefined;
}>;
export declare const BACKGROUND_PID_PROLOGUE = "echo \"CURSOR_BG_PID=$(awk '/^NSpid:/ {print $2}' /proc/$$/status)\"";
export declare function parseJobIdN(jobId: any): number;
/**
 * Spawn a shell in the session world and return a live channel the adapter
 * forwarder already understands. Does not register DSH tools.
 */
export declare function startCursorShell(world: any, { command, workdir, timeoutMs, timeoutBehavior, background, sandboxPolicy, signal, callId, }?: any): Promise<{
    channel: {
        chunks: any[];
        stdout: string;
        done: boolean;
        exitCode: any;
        error: any;
        policy: any;
        backgrounded: boolean;
        proc: any;
        pid: any;
        jobId: any;
    };
    proc: any;
    jobId: any;
    shellId: number;
    workdir: any;
    command: any;
    timeoutMs: any;
    timeoutBehavior: any;
    background: any;
}>;
/**
 * Fill a live shell channel until the process exits or is backgrounded.
 * The adapter's stream forwarder polls the same channel.
 */
export declare function pumpCursorShell(started: any, { sleep: sleepFn, createPidProbe }?: any): Promise<any>;
export declare function noteProbeRead(store: any, rawId: any, entry: any): void;
export declare function takeProbeRead(store: any, rawId: any): any;
