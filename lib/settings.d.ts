import z from "@deepseek-ai/schemastery";
export declare const Config: z<Schemastery.ObjectS<NoInfer<{
    maxToolRounds: z<number, number, "defined">;
    apiBaseUrl: z<string, string, "defined">;
    retryCount: z<number, number, "defined">;
    retryIntervalMs: z<number, number, "defined">;
    retryHttpStatusCodes: z<number[], number[], "defined">;
    requireCursorPreset: z<boolean, boolean, "defined">;
    parkedBridgeTimeoutMs: z<number, number, "defined">;
}>>, Schemastery.ObjectT<NoInfer<{
    maxToolRounds: z<number, number, "defined">;
    apiBaseUrl: z<string, string, "defined">;
    retryCount: z<number, number, "defined">;
    retryIntervalMs: z<number, number, "defined">;
    retryHttpStatusCodes: z<number[], number[], "defined">;
    requireCursorPreset: z<boolean, boolean, "defined">;
    parkedBridgeTimeoutMs: z<number, number, "defined">;
}>>, "plain">;
export { resolveCursorApiBaseUrl } from "./api-url.js";
/** Refresh the access token this early before its JWT expiry. */
export declare function resolveCursorSettings(input?: any): Readonly<{
    maxToolRounds: any;
    apiBaseUrl: any;
    retryCount: any;
    retryIntervalMs: any;
    retryHttpStatusCodes: readonly any[];
    requireCursorPreset: any;
    parkedBridgeTimeoutMs: any;
}>;
export declare function shouldRetryHttpStatus(status: any, retriesUsed: any, settings: any): any;
export declare function isSuccessfulAgentResponse(status: any, contentType: any): boolean;
export declare function abortableDelay(ms: any, signal: any): Promise<void>;
