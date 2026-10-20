import { LlmError } from "@deepseek-ai/dsh-llm";
const record = (value)=>null !== value && "object" == typeof value && !Array.isArray(value);
function parseEndStream(payload) {
    try {
        const json = JSON.parse(new TextDecoder().decode(payload));
        const error = json?.error;
        if (!error) return;
        const code = "string" == typeof error.code ? error.code : "unknown";
        let debugCode;
        let title;
        let detail;
        if (Array.isArray(error.details)) for (const entry of error.details){
            if (!record(entry) || !record(entry.debug)) continue;
            if ("string" == typeof entry.debug.error) debugCode = entry.debug.error;
            const details = record(entry.debug.details) ? entry.debug.details : void 0;
            if (void 0 !== details) {
                if ("string" == typeof details.title) title = details.title;
                if ("string" == typeof details.detail) detail = details.detail;
            }
        }
        const fallback = "string" == typeof error.message && error.message.length > 0 ? error.message : void 0;
        const message = [
            title,
            detail
        ].filter((part)=>"string" == typeof part && part.length > 0).join(" ") || (void 0 !== debugCode ? `Cursor: ${debugCode}` : void 0) || (void 0 !== fallback ? `Cursor agent error ${code}: ${fallback}` : `Cursor agent error ${code}`);
        return {
            code,
            debugCode,
            message
        };
    } catch  {
        return;
    }
}
function classifyCursorError(message) {
    if (/\b(?:401|403)\b|unauth|invalid.*(?:key|token|credential)/i.test(message)) return "AUTH";
    if (/rate.?limit|\b429\b|quota|resource_exhausted|spend.?limit|usage limit|exceeded/i.test(message)) return "RATE_LIMIT";
    if (/\b400\b|invalid.?request/i.test(message)) return "INVALID_REQUEST";
    if (/\b408\b|timeout|timed out/i.test(message)) return "TIMEOUT";
    if (/\b5\d\d\b|internal/i.test(message)) return "SERVER";
    if (/\b(?:network|connection|socket|fetch|ECONN|http2)/i.test(message)) return "TRANSPORT";
    return "CURSOR_ERROR";
}
function finishChunkForStreamError(error, upstream) {
    if (upstream.aborted) return {
        type: "finish",
        reason: {
            kind: "aborted",
            failure: {
                message: "Cursor request aborted by caller",
                code: "ABORTED"
            }
        }
    };
    if (error instanceof LlmError) return {
        type: "finish",
        reason: {
            kind: "error",
            failure: {
                message: error.message,
                code: error.code
            }
        }
    };
    const message = error instanceof Error ? error.message : String(error);
    return {
        type: "finish",
        reason: {
            kind: "error",
            failure: {
                message,
                code: classifyCursorError(message)
            }
        }
    };
}
export { classifyCursorError, finishChunkForStreamError, parseEndStream };
