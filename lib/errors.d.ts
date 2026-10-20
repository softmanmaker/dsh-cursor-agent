export declare function parseEndStream(payload: any): {
    code: any;
    debugCode: any;
    message: string;
};
export declare function classifyCursorError(message: any): "INVALID_REQUEST" | "AUTH" | "RATE_LIMIT" | "TIMEOUT" | "SERVER" | "TRANSPORT" | "CURSOR_ERROR";
/** Map a thrown stream failure onto the terminal finish chunk DSH assemblers expect. */
export declare function finishChunkForStreamError(error: any, upstream: any): {
    type: string;
    reason: {
        kind: string;
        failure: {
            message: string;
            code: string;
        };
    };
};
