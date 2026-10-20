const REGISTRY_KEY = Symbol.for("dsh-cursor-agent.joins.v1");
const SETTLED_TTL_MS = 300000;
const MISSING_JOIN_GRACE_MS = 2000;
const PENDING_TTL_MS = 3600000;
const MAX_JOINS = 1024;
function joinTable() {
    const holder = globalThis;
    const existing = holder[REGISTRY_KEY];
    if (existing instanceof Map) return existing;
    const created = new Map();
    Object.defineProperty(holder, REGISTRY_KEY, {
        value: created,
        configurable: true,
        writable: true
    });
    return created;
}
function createJoin(callId, producer) {
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
        settled: false,
        settledAt: 0,
        consumedAt: 0,
        createdAt: Date.now(),
        producer
    };
}
function consume(entry) {
    if (0 === entry.consumedAt) entry.consumedAt = Date.now();
}
function pruneJoins(now = Date.now()) {
    const table = joinTable();
    if (0 === table.size) return;
    for (const [callId, entry] of table)if (entry.settled) {
        if (now - entry.settledAt > SETTLED_TTL_MS) table.delete(callId);
    } else if (now - entry.createdAt > PENDING_TTL_MS) table.delete(callId);
    if (table.size <= MAX_JOINS) return;
    for (const [callId, entry] of table){
        if (table.size <= MAX_JOINS) break;
        if (entry.settled) table.delete(callId);
    }
    for (const callId of table.keys()){
        if (table.size <= MAX_JOINS) break;
        table.delete(callId);
    }
}
function openCursorJoin(callId) {
    if ("string" != typeof callId || 0 === callId.length) throw new Error("cursor-agent: join id is required");
    const table = joinTable();
    const existing = table.get(callId);
    if (void 0 !== existing && (!existing.settled || 0 === existing.consumedAt)) {
        existing.producer = true;
        return existing;
    }
    pruneJoins();
    const entry = createJoin(callId, true);
    table.set(callId, entry);
    return entry;
}
function settleCursorJoin(callId, result = {}) {
    if ("string" != typeof callId || 0 === callId.length) return;
    const table = joinTable();
    let entry = table.get(callId);
    if (void 0 === entry) {
        pruneJoins();
        entry = createJoin(callId, false);
        table.set(callId, entry);
    }
    if (entry.settled) return;
    entry.settled = true;
    entry.settledAt = Date.now();
    entry.settle({
        text: String(result.text ?? ""),
        isError: true === result.isError,
        ...void 0 !== result.meta ? {
            meta: result.meta
        } : {}
    });
    pruneJoins();
}
function failCursorJoin(callId, error) {
    if ("string" != typeof callId || 0 === callId.length) return;
    const table = joinTable();
    let entry = table.get(callId);
    if (void 0 === entry) {
        pruneJoins();
        entry = createJoin(callId, false);
        table.set(callId, entry);
    }
    if (entry.settled) return;
    entry.settled = true;
    entry.settledAt = Date.now();
    entry.fail(error instanceof Error ? error : new Error(String(error ?? "Cursor join failed")));
    pruneJoins();
}
function dropCursorJoin(callId) {
    if ("string" != typeof callId || 0 === callId.length) return;
    joinTable().delete(callId);
}
function abortError(signal) {
    return signal?.reason instanceof Error ? signal.reason : new Error("Cursor join aborted");
}
function sleep(ms) {
    return new Promise((resolve)=>{
        const timer = setTimeout(resolve, ms);
        timer.unref?.();
    });
}
async function waitForProducer(entry) {
    const deadline = entry.createdAt + MISSING_JOIN_GRACE_MS;
    for(;;){
        if (entry.settled) return;
        if (entry.producer) return await entry.promise;
        const remaining = deadline - Date.now();
        if (remaining <= 0) throw new Error(`cursor-agent: no in-flight join for ${entry.callId}`);
        const outcome = await Promise.race([
            entry.promise.then((value)=>({
                    value
                })),
            sleep(remaining).then(()=>void 0)
        ]);
        if (void 0 !== outcome) return outcome.value;
    }
}
function withAbort(promise, signal) {
    if (void 0 === signal) return promise;
    return new Promise((resolve, reject)=>{
        const onAbort = ()=>{
            signal.removeEventListener("abort", onAbort);
            reject(abortError(signal));
        };
        if (signal.aborted) return void reject(abortError(signal));
        signal.addEventListener("abort", onAbort, {
            once: true
        });
        promise.then((value)=>{
            signal.removeEventListener("abort", onAbort);
            resolve(value);
        }, (error)=>{
            signal.removeEventListener("abort", onAbort);
            reject(error);
        });
    });
}
async function awaitCursorJoin(callId, signal) {
    if ("string" != typeof callId || 0 === callId.length) throw new Error("cursor-agent: join id is required");
    const table = joinTable();
    let entry = table.get(callId);
    if (void 0 === entry) {
        pruneJoins();
        entry = createJoin(callId, false);
        table.set(callId, entry);
    }
    const joined = entry;
    if (signal?.aborted) {
        consume(joined);
        throw abortError(signal);
    }
    try {
        if (!joined.settled && !joined.producer) return await withAbort(waitForProducer(joined), signal);
        return await withAbort(joined.promise, signal);
    } finally{
        consume(joined);
        pruneJoins();
    }
}
function resetCursorJoins() {
    joinTable().clear();
}
export { awaitCursorJoin, dropCursorJoin, failCursorJoin, openCursorJoin, resetCursorJoins, settleCursorJoin };
