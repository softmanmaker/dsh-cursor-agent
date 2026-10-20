const joins = new Map();
function createJoin(callId) {
    let settle;
    let fail;
    const promise = new Promise((resolve, reject)=>{
        settle = resolve;
        fail = reject;
    });
    promise.catch(()=>{});
    return {
        callId,
        promise,
        settle,
        fail,
        settled: false
    };
}
function openCursorJoin(callId) {
    if ("string" != typeof callId || 0 === callId.length) throw new Error("cursor-agent: join id is required");
    const existing = joins.get(callId);
    if (void 0 !== existing) return existing;
    const entry = createJoin(callId);
    joins.set(callId, entry);
    return entry;
}
function settleCursorJoin(callId, result = {}) {
    if ("string" != typeof callId || 0 === callId.length) return;
    const entry = joins.get(callId) ?? openCursorJoin(callId);
    if (entry.settled) return;
    entry.settled = true;
    entry.settle({
        text: String(result.text ?? ""),
        isError: true === result.isError,
        ...void 0 !== result.meta ? {
            meta: result.meta
        } : {}
    });
}
function failCursorJoin(callId, error) {
    if ("string" != typeof callId || 0 === callId.length) return;
    const entry = joins.get(callId) ?? openCursorJoin(callId);
    if (entry.settled) return;
    entry.settled = true;
    entry.fail(error instanceof Error ? error : new Error(String(error ?? "Cursor join failed")));
}
function dropCursorJoin(callId) {
    if ("string" != typeof callId || 0 === callId.length) return;
    joins.delete(callId);
}
async function awaitCursorJoin(callId, signal) {
    const entry = joins.get(callId);
    if (void 0 === entry) throw new Error(`cursor-agent: no in-flight join for ${callId}`);
    if (signal?.aborted) throw signal.reason instanceof Error ? signal.reason : new Error("Cursor join aborted");
    try {
        if (void 0 === signal) return await entry.promise;
        return await new Promise((resolve, reject)=>{
            const onAbort = ()=>{
                signal.removeEventListener("abort", onAbort);
                reject(signal.reason instanceof Error ? signal.reason : new Error("Cursor join aborted"));
            };
            signal.addEventListener("abort", onAbort, {
                once: true
            });
            entry.promise.then((value)=>{
                signal.removeEventListener("abort", onAbort);
                resolve(value);
            }, (error)=>{
                signal.removeEventListener("abort", onAbort);
                reject(error);
            });
        });
    } finally{
        joins.delete(callId);
    }
}
function resetCursorJoins() {
    joins.clear();
}
export { awaitCursorJoin, dropCursorJoin, failCursorJoin, openCursorJoin, resetCursorJoins, settleCursorJoin };
