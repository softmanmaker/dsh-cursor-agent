/**
 * In-flight Cursor exec/display results keyed by the DSH tool-call id.
 * The adapter settles these when exec-plane or a display-completed frame
 * finishes; shim `execute()` only joins that promise.
 */
/** Open (or return) the join for one DSH call id. */
export declare function openCursorJoin(callId: any): any;
/** Resolve one join. Later settles are ignored. */
export declare function settleCursorJoin(callId: any, result?: any): void;
/** Reject one join. Later fails/settles are ignored. */
export declare function failCursorJoin(callId: any, error: any): void;
/** Drop a join that will never be awaited (paired probe-read). */
export declare function dropCursorJoin(callId: any): void;
/** Await the exec-plane / display result for this call. */
export declare function awaitCursorJoin(callId: any, signal: any): Promise<any>;
/** Test helper: forget every join. */
export declare function resetCursorJoins(): void;
