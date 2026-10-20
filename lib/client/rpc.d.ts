import type { CursorRpc, RpcEnvelope } from './types';
export declare function unwrap<T>(response: RpcEnvelope<T> | unknown): T;
export declare function callRpc<T>(rpc: CursorRpc, channel: string, endpoint: string, payload?: Record<string, unknown>): Promise<T>;
export declare function validDate(value: unknown): Date;
export declare function percent(value: unknown): string;
export declare function money(value: unknown): string;
