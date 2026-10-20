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

/** Global registry key shared by every evaluation of this module. */
const REGISTRY_KEY = Symbol.for("dsh-cursor-agent.joins.v1");
/** Keep a settled result this long so a repeated dispatch can rejoin it. */
const SETTLED_TTL_MS = 5 * 60 * 1000;
/**
 * Grace period for a consumer that finds no producer yet. Exec/display
 * frames always open their join before the tool-call block is emitted, so
 * this only absorbs an ordering race; after it expires with no producer the
 * call really is orphaned and fails with an actionable diagnostic.
 */
const MISSING_JOIN_GRACE_MS = 2_000;
/** Drop a join nothing ever settled or consumed (reload/abort leak). */
const PENDING_TTL_MS = 60 * 60 * 1000;
/** Upper bound so a long-lived process cannot grow the table without limit. */
const MAX_JOINS = 1024;

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

/** The process-wide join table, created once per process. */
function joinTable(): Map<string, CursorJoin> {
	const holder = globalThis as any;
	const existing = holder[REGISTRY_KEY];
	if (existing instanceof Map) return existing;
	const created = new Map<string, CursorJoin>();
	Object.defineProperty(holder, REGISTRY_KEY, {
		value: created,
		configurable: true,
		writable: true,
	});
	return created;
}

function createJoin(callId: string, producer: boolean): CursorJoin {
	let settle;
	let fail;
	const promise = new Promise((resolve, reject) => {
		settle = resolve;
		fail = reject;
	});
	// A consumer that never awaits must not surface as unhandled.
	promise.catch(() => {});
	return {
		callId,
		promise,
		settle,
		fail,
		settled: false,
		settledAt: 0,
		consumedAt: 0,
		createdAt: Date.now(),
		producer,
	};
}

function consume(entry: CursorJoin) {
	if (entry.consumedAt === 0) entry.consumedAt = Date.now();
}

/** Drop expired entries and enforce the hard cap (oldest settled first). */
function pruneJoins(now = Date.now()) {
	const table = joinTable();
	if (table.size === 0) return;
	for (const [callId, entry] of table) {
		if (entry.settled) {
			if (now - entry.settledAt > SETTLED_TTL_MS) table.delete(callId);
		} else if (now - entry.createdAt > PENDING_TTL_MS) {
			table.delete(callId);
		}
	}
	if (table.size <= MAX_JOINS) return;
	for (const [callId, entry] of table) {
		if (table.size <= MAX_JOINS) break;
		if (entry.settled) table.delete(callId);
	}
	for (const callId of table.keys()) {
		if (table.size <= MAX_JOINS) break;
		table.delete(callId);
	}
}

/**
 * Open (or return) the join for one DSH call id.
 *
 * A pending join is shared so a duplicate frame cannot split the table. A
 * settled join that no consumer has awaited yet is shared too (the result
 * raced ahead of the DSH call id). A settled join that was already consumed
 * belongs to an earlier dispatch, so a new producer starts a fresh entry.
 */
export function openCursorJoin(callId: string) {
	if (typeof callId !== "string" || callId.length === 0) {
		throw new Error("cursor-agent: join id is required");
	}
	const table = joinTable();
	const existing = table.get(callId);
	if (existing !== undefined && (!existing.settled || existing.consumedAt === 0)) {
		// A consumer may have raced ahead and created the entry; adopting it
		// tells that waiter a real producer is on the way.
		existing.producer = true;
		return existing;
	}
	pruneJoins();
	const entry = createJoin(callId, true);
	table.set(callId, entry);
	return entry;
}

/** Resolve one join. Later settles are ignored. */
export function settleCursorJoin(callId: string, result : any = {}) {
	if (typeof callId !== "string" || callId.length === 0) return;
	const table = joinTable();
	let entry = table.get(callId);
	if (entry === undefined) {
		// The result can land before the adapter opens the join (display
		// completion racing the call-id binding). Keep it for the consumer.
		pruneJoins();
		entry = createJoin(callId, false);
		table.set(callId, entry);
	}
	if (entry.settled) return;
	entry.settled = true;
	entry.settledAt = Date.now();
	entry.settle({
		text: String(result.text ?? ""),
		isError: result.isError === true,
		...result.meta !== undefined ? { meta: result.meta } : {},
	});
	pruneJoins();
}

/** Reject one join. Later fails/settles are ignored. */
export function failCursorJoin(callId: string, error) {
	if (typeof callId !== "string" || callId.length === 0) return;
	const table = joinTable();
	let entry = table.get(callId);
	if (entry === undefined) {
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

/** Drop a join that will never be awaited (paired probe-read). */
export function dropCursorJoin(callId: string) {
	if (typeof callId !== "string" || callId.length === 0) return;
	joinTable().delete(callId);
}

function abortError(signal) {
	return signal?.reason instanceof Error ? signal.reason : new Error("Cursor join aborted");
}

/**
 * Grace timer for an awaited promise. Deliberately ref'd: the caller is
 * waiting on this sleep, and an unref'd timer would let a process with an
 * otherwise idle event loop exit with an unsettled top-level await instead
 * of delivering the orphan diagnostic.
 */
function sleep(ms: number) {
	return new Promise<void>((resolve) => {
		setTimeout(resolve, ms);
	});
}

/**
 * Wait for a settle that has no producer yet: either the adapter binds the
 * same entry within the grace window (then wait for its real result), or the
 * call is orphaned and fails with the original diagnostic. The deadline is
 * measured from the entry's creation so concurrent consumers agree.
 */
async function waitForProducer(entry: CursorJoin) {
	const deadline = entry.createdAt + MISSING_JOIN_GRACE_MS;
	for (;;) {
		if (entry.settled) return undefined;
		if (entry.producer) return await entry.promise;
		const remaining = deadline - Date.now();
		if (remaining <= 0) {
			throw new Error(`cursor-agent: no in-flight join for ${entry.callId}`);
		}
		const outcome = await Promise.race([
			entry.promise.then((value) => ({ value })),
			sleep(remaining).then(() => undefined),
		]);
		if (outcome !== undefined) return outcome.value;
	}
}

/** Race one join wait against the tool-call cancellation signal. */
function withAbort<T>(promise: Promise<T>, signal): Promise<T> {
	if (signal === undefined) return promise;
	return new Promise((resolve, reject) => {
		const onAbort = () => {
			signal.removeEventListener("abort", onAbort);
			reject(abortError(signal));
		};
		if (signal.aborted) {
			reject(abortError(signal));
			return;
		}
		signal.addEventListener("abort", onAbort, { once: true });
		promise.then(
			(value) => {
				signal.removeEventListener("abort", onAbort);
				resolve(value);
			},
			(error) => {
				signal.removeEventListener("abort", onAbort);
				reject(error);
			},
		);
	});
}

/**
 * Await the exec-plane / display result for this call.
 *
 * Missing joins no longer throw immediately: a consumer can arrive before
 * the adapter opens the entry (reload or frame ordering), and a repeated
 * dispatch must receive the result it already produced instead of failing.
 */
export async function awaitCursorJoin(callId: string, signal) {
	if (typeof callId !== "string" || callId.length === 0) {
		throw new Error("cursor-agent: join id is required");
	}
	const table = joinTable();
	let entry = table.get(callId);
	if (entry === undefined) {
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
		// An entry no producer ever opened is the orphan case; a producer may
		// still be about to adopt it (frame ordering), so wait the grace first.
		if (!joined.settled && !joined.producer) return await withAbort(waitForProducer(joined), signal);
		return await withAbort(joined.promise, signal);
	} finally {
		consume(joined);
		pruneJoins();
	}
}

/** Test helper: forget every join. */
export function resetCursorJoins() {
	joinTable().clear();
}
