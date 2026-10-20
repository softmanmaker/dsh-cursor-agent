import { encodeBackgroundShellRejectedResult, encodeDeleteRejected, encodeDiagnosticsResult, encodeFetchError, encodeGrepError, encodeLsRejected, encodeMcpError, encodeReadRejected, encodeShellRejectedResult, encodeShellStreamRejected, encodeWriteRejected, encodeWriteShellStdinError } from "../wire/codec.js";
const TOOL_REJECT_REASON = "Tool not available in this environment. Use the MCP tools provided instead.";
function rejectionFor(exec) {
    switch(exec.case){
        case "readArgs":
            return {
                field: 7,
                payload: encodeReadRejected(exec.path, TOOL_REJECT_REASON)
            };
        case "lsArgs":
            return {
                field: 8,
                payload: encodeLsRejected(exec.path, TOOL_REJECT_REASON)
            };
        case "grepArgs":
            return {
                field: 5,
                payload: encodeGrepError(TOOL_REJECT_REASON)
            };
        case "writeArgs":
            return {
                field: 3,
                payload: encodeWriteRejected({
                    path: exec.path,
                    reason: TOOL_REJECT_REASON
                })
            };
        case "deleteArgs":
            return {
                field: 4,
                payload: encodeDeleteRejected({
                    path: exec.path,
                    reason: TOOL_REJECT_REASON
                })
            };
        case "shellArgs":
            return {
                field: 2,
                payload: encodeShellRejectedResult(void 0, void 0, TOOL_REJECT_REASON)
            };
        case "shellStreamArgs":
            return {
                field: 14,
                payload: encodeShellStreamRejected(void 0, void 0, TOOL_REJECT_REASON)
            };
        case "backgroundShellSpawnArgs":
            return {
                field: 16,
                payload: encodeBackgroundShellRejectedResult(void 0, void 0, TOOL_REJECT_REASON)
            };
        case "fetchArgs":
            return {
                field: 20,
                payload: encodeFetchError(exec.url, TOOL_REJECT_REASON)
            };
        case "writeShellStdinArgs":
            return {
                field: 23,
                payload: encodeWriteShellStdinError(TOOL_REJECT_REASON)
            };
        case "diagnosticsArgs":
            return {
                field: 9,
                payload: encodeDiagnosticsResult()
            };
        case "recordScreenArgs":
            return {
                field: 21,
                payload: encodeMcpError("Screen recording is not available")
            };
        case "computerUseArgs":
            return {
                field: 22,
                payload: encodeMcpError("Computer use is not available")
            };
        case "listMcpResourcesExecArgs":
            return {
                field: 17,
                payload: encodeMcpError("MCP resources are not available")
            };
        case "readMcpResourceExecArgs":
            return {
                field: 18,
                payload: encodeMcpError("MCP resources are not available")
            };
        default:
            return;
    }
}
export { rejectionFor };
