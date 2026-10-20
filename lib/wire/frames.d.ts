export declare function frameEncode(payload: any, flags?: number): Uint8Array<any>;
export declare const CONNECT_END_STREAM_FLAG = 2;
export declare const CONNECT_COMPRESSED_FLAG = 1;
/** Upper bound for a decompressed Connect frame; guards against zip bombs. */
export declare const MAX_CONNECT_FRAME_BYTES: number;
/**
 * Incremental Connect frame parser fed by response chunks.
 * Yields { flags, payload } objects. Frames flagged compressed (bit 0) are
 * gzip-decompressed here so consumers only ever see plain payloads.
 */
export declare class ConnectFrameReader {
    #private;
    buffer: Uint8Array;
    frames: Array<{
        flags: number;
        payload: Uint8Array;
    }>;
    waiters: Array<{
        resolve: (frame?: {
            flags: number;
            payload: Uint8Array;
        }) => void;
        reject: (error: unknown) => void;
    }>;
    ended: boolean;
    error: unknown;
    constructor();
    push(chunk: any): void;
    finish(): void;
    fail(error: any): void;
    next(): Promise<any>;
}
export declare const AGENT_HEADERS: {
    "content-type": string;
    "connect-protocol-version": string;
    "connect-accept-encoding": string;
    te: string;
    "x-ghost-mode": string;
    "x-cursor-client-version": string;
    "x-cursor-client-type": string;
};
