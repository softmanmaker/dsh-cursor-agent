import schemastery from "@deepseek-ai/schemastery";
import { CURSOR_BASE_URL, resolveCursorApiBaseUrl } from "./api-url.js";
import { DEFAULT_REQUIRE_CURSOR_PRESET, DEFAULT_RETRY_COUNT, DEFAULT_RETRY_HTTP_STATUS_CODES, DEFAULT_RETRY_INTERVAL_MS, MAX_TOOL_ROUNDS, PARKED_BRIDGE_TIMEOUT_MS } from "./constants.js";
const Config = schemastery.object({
    maxToolRounds: schemastery.number().step(1).min(1).max(1000).default(MAX_TOOL_ROUNDS),
    apiBaseUrl: schemastery.string().default(CURSOR_BASE_URL),
    retryCount: schemastery.number().step(1).min(0).max(10).default(DEFAULT_RETRY_COUNT),
    retryIntervalMs: schemastery.number().step(1).min(0).max(300000).default(DEFAULT_RETRY_INTERVAL_MS),
    retryHttpStatusCodes: schemastery.array(schemastery.number().step(1).min(400).max(599)).default([
        ...DEFAULT_RETRY_HTTP_STATUS_CODES
    ]),
    requireCursorPreset: schemastery.boolean().default(DEFAULT_REQUIRE_CURSOR_PRESET),
    parkedBridgeTimeoutMs: schemastery.number().step(1).min(30000).max(3600000).default(PARKED_BRIDGE_TIMEOUT_MS)
});
function resolveCursorSettings(input = {}) {
    const maxToolRounds = input.maxToolRounds ?? MAX_TOOL_ROUNDS;
    const apiBaseUrl = resolveCursorApiBaseUrl(input.apiBaseUrl);
    const retryCount = input.retryCount ?? DEFAULT_RETRY_COUNT;
    const retryIntervalMs = input.retryIntervalMs ?? DEFAULT_RETRY_INTERVAL_MS;
    const retryHttpStatusCodes = input.retryHttpStatusCodes ?? DEFAULT_RETRY_HTTP_STATUS_CODES;
    const parkedBridgeTimeoutMs = input.parkedBridgeTimeoutMs ?? PARKED_BRIDGE_TIMEOUT_MS;
    if (!Number.isSafeInteger(parkedBridgeTimeoutMs) || parkedBridgeTimeoutMs < 30000 || parkedBridgeTimeoutMs > 3600000) throw new Error("cursor-agent: parkedBridgeTimeoutMs must be an integer between 30000 and 3600000");
    if (!Number.isSafeInteger(maxToolRounds) || maxToolRounds < 1 || maxToolRounds > 1000) throw new Error("cursor-agent: maxToolRounds must be an integer between 1 and 1000");
    if (!Number.isSafeInteger(retryCount) || retryCount < 0 || retryCount > 10) throw new Error("cursor-agent: retryCount must be an integer between 0 and 10");
    if (!Number.isSafeInteger(retryIntervalMs) || retryIntervalMs < 0 || retryIntervalMs > 300000) throw new Error("cursor-agent: retryIntervalMs must be an integer between 0 and 300000");
    if (!Array.isArray(retryHttpStatusCodes) || retryHttpStatusCodes.some((status)=>!Number.isSafeInteger(status) || status < 400 || status > 599)) throw new Error("cursor-agent: retryHttpStatusCodes must contain only HTTP status integers from 400 to 599");
    if (new Set(retryHttpStatusCodes).size !== retryHttpStatusCodes.length) throw new Error("cursor-agent: retryHttpStatusCodes must not contain duplicates");
    return Object.freeze({
        maxToolRounds,
        apiBaseUrl,
        retryCount,
        retryIntervalMs,
        retryHttpStatusCodes: Object.freeze([
            ...retryHttpStatusCodes
        ]),
        requireCursorPreset: input.requireCursorPreset ?? DEFAULT_REQUIRE_CURSOR_PRESET,
        parkedBridgeTimeoutMs
    });
}
function shouldRetryHttpStatus(status, retriesUsed, settings) {
    return retriesUsed < settings.retryCount && settings.retryHttpStatusCodes.includes(status);
}
function isSuccessfulAgentResponse(status, contentType) {
    return 200 === status && /^application\/connect\+proto(?:\s*;|\s*$)/i.test(contentType ?? "");
}
function abortableDelay(ms, signal) {
    if (signal.aborted) return Promise.reject(signal.reason ?? new Error("Cursor retry aborted"));
    if (0 === ms) return Promise.resolve();
    return new Promise((resolve, reject)=>{
        const timer = setTimeout(done, ms);
        timer.unref?.();
        function done() {
            signal.removeEventListener("abort", aborted);
            resolve();
        }
        function aborted() {
            clearTimeout(timer);
            signal.removeEventListener("abort", aborted);
            reject(signal.reason ?? new Error("Cursor retry aborted"));
        }
        signal.addEventListener("abort", aborted, {
            once: true
        });
    });
}
export { Config, abortableDelay, isSuccessfulAgentResponse, resolveCursorApiBaseUrl, resolveCursorSettings, shouldRetryHttpStatus };
