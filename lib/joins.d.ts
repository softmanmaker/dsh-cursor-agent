/**
 * In-flight Cursor exec/display results keyed by the DSH tool-call id.
 * The adapter settles these when exec-plane or a display-completed frame
 * finishes; shim `execute()` only joins that promise.
 *
 * The table lives on `globalThis` under a registered symbol instead of in a
 * module-local variable. DSH can re-evaluate a plugin module (HMR reload, a
 * second resolved copy of the package, a versioned install path), and a
 * module-local table made every already-running tool call — a slow `bash`
 * call is the usual one — fail with `no in-flight join for <callId>` because
 * the shim saw a brand-new empty table while the old adapter still held the
 * result. One process-wide table keeps producers and consumers on the same
 * entries across those boundaries.
 *
 * Entries are retained briefly after they settle. A re-dispatched tool call
 * (DSH replay/retry, duplicate exec frame) then receives the settled result
 * instead of throwing for a join that already completed.
 */
type CursorJoin = {
    callId: string;
    promise: Promise<any>;
    settle: (value: any) => void;
    fail: (error: Error) => void;
    settled: boolean;
    settledAt: number;
    consumedAt: number;
    createdAt: number;
    /** Opened by the adapter (`openCursorJoin`), not by a waiting consumer. */
    producer: boolean;
};
/**
 * Open (or return) the join for one DSH call id.
 *
 * A pending join is shared so a duplicate frame cannot split the table. A
 * settled join that no consumer has awaited yet is shared too (the result
 * raced ahead of the DSH call id). A settled join that was already consumed
 * belongs to an earlier dispatch, so a new producer starts a fresh entry.
 */
export declare function openCursorJoin(callId: string): CursorJoin;
/** Resolve one join. Later settles are ignored. */
export declare function settleCursorJoin(callId: string, result?: any): void;
/** Reject one join. Later fails/settles are ignored. */
export declare function failCursorJoin(callId: string, error: any): void;
/** Drop a join that will never be awaited (paired probe-read). */
export declare function dropCursorJoin(callId: string): void;
/**
 * Await the exec-plane / display result for this call.
 *
 * Missing joins no longer throw immediately: a consumer can arrive before
 * the adapter opens the entry (reload or frame ordering), and a repeated
 * dispatch must receive the result it already produced instead of failing.
 */
export declare function awaitCursorJoin(callId: string, signal: any): Promise<any>;
/** Test helper: forget every join. */
export declare function resetCursorJoins(): void;
export {};
