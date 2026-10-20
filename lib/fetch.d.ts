/**
 * DSH web replaces the ambient `fetch` with an MCP `createFetchWithInit`
 * wrapper whose `baseFetch` is undefined in the host process, so any consumer
 * of the global `fetch` throws `baseFetch is not a function`. Cursor usage /
 * refresh / model discovery go through HTTP, so this module uses Node's own
 * `http`/`https` to talk to the upstream directly instead of trusting the
 * host-injected `fetch`. It exposes the small Fetch subset these callers use.
 */
export declare function nativeFetch(url: any, init?: any): Promise<any>;
