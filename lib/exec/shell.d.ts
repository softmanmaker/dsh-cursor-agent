export declare function splitShellDelta(delta: any): {
    stdout: string;
    stderr: string;
};
/** Marker prefix of the NSpid probe line the background prologue echoes. */
export declare const BACKGROUND_PID_MARKER = "CURSOR_BG_PID=";
/**
 * Prologue prepended to commands that may run in the background: it echoes the
 * process's OUTER-namespace pid (NSpid's first field — the host pid under
 * bwrap, the process's own pid under landlock/unconfined execution) as one
 * marker line. The bridge parses and strips it; the model receives the pid
 * through the protocol's pid fields.
 *
 * The probe MUST read /proc/$$/status (the background bash itself), never
 * /proc/self/status: inside the $(...) command substitution `self` is the
 * transient awk process, whose pid dies with the echo — the model would kill
 * a pid that no longer exists.
 */
export declare const BACKGROUND_PID_PROLOGUE = "echo \"CURSOR_BG_PID=$(awk '/^NSpid:/ {print $2}' /proc/$$/status)\"";
/**
 * Stateful marker-line stripper for one ShellProcess output stream. Feed every
 * output delta; it returns the pid (once parsed) and the delta with the marker
 * line removed. Deltas may split the marker anywhere; unrelated leading output
 * disables the probe permanently and passes everything through.
 */
export declare function createPidProbe(): {
    consume: (delta: any) => {
        pid: number;
        rest: string;
    };
};
/**
 * YAML front matter Cursor writes at the top of each agent terminal file.
 * Matches the local Cursor project terminals/*.txt samples:
 * pid, quoted cwd/command/title, status, started_at, padded running_for_ms.
 */
export declare function formatCursorTerminalHeader({ pid, cwd, command, title, status, startedAt, runningForMs, }: any): string;
/** Trailer Cursor appends after the body once the command settles. */
export declare function formatCursorTerminalFooter({ exitCode, elapsedMs, endedAt }: any): string;
/**
 * One Cursor-format terminal file: header, append-only body, footer on settle.
 * `running_for_ms` is patched in place every 5s while the command is live.
 */
export declare function createCursorTerminalLog(filePath: any, initial?: any): {
    filePath: any;
    readonly bytes: number;
    stats: () => {
        filePath: any;
        sizeBytes: number;
        lineCount: any;
    };
    append(text: any): void;
    setPid(pid: any): void;
    finish({ exitCode, aborted, now }?: any): void;
    dispose(): void;
};
export declare function parseJobIdN(jobId: any): number;
