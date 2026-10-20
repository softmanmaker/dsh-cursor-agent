import { DELETE_DENIED, DELETE_USER_REJECTED, EXEC_REPLY_FIELDS, SANDBOX_MODE_DENIED, WRITE_DENIED, WRITE_USER_REJECTED, composeReadWindow, encodeDeleteError, encodeDeletePermissionDenied, encodeDeleteSuccess, encodeWritePermissionDenied } from "./search.js";
import { encodeDeleteRejected, encodeReadError, encodeReadFileNotFound, encodeReadInvalidFile, encodeReadSuccess, encodeWriteError, encodeWriteRejected, encodeWriteSuccess } from "../wire/codec.js";
function translateNativeExec(exec) {
    switch(exec.case){
        case "readArgs":
            {
                const args = exec.args ?? {};
                const path = args.path ?? "";
                const offset = "number" == typeof args.offset ? args.offset : void 0;
                const limit = "number" == typeof args.limit ? args.limit : void 0;
                return {
                    tool: "read",
                    args: {
                        file_path: path
                    },
                    field: EXEC_REPLY_FIELDS.readArgs,
                    encode: (content, isError, extras = {})=>{
                        if (isError) {
                            const text = String(content ?? "");
                            if (/^(?:Error: )?cannot read ".*": not found$/.test(text)) return encodeReadFileNotFound({
                                path
                            });
                            if (true === extras.invalidFile || /not supported by the read executor/.test(text)) return encodeReadInvalidFile({
                                path,
                                reason: extras.reason ?? text
                            });
                            return encodeReadError({
                                path,
                                error: text
                            });
                        }
                        if (extras.data instanceof Uint8Array) return encodeReadSuccess({
                            path,
                            data: extras.data,
                            totalLines: 0,
                            fileSize: Number.isSafeInteger(extras.fileSize) ? extras.fileSize : extras.data.length,
                            truncated: false,
                            rangeApplied: false
                        });
                        const window = composeReadWindow(content, {
                            offset,
                            limit
                        });
                        return encodeReadSuccess({
                            path,
                            content: window.content,
                            totalLines: window.totalLines,
                            fileSize: Number.isSafeInteger(extras.fileSize) ? extras.fileSize : 0,
                            truncated: window.truncated,
                            rangeApplied: window.rangeApplied
                        });
                    }
                };
            }
        case "writeArgs":
            {
                const args = exec.args ?? {};
                const path = args.path ?? "";
                if (void 0 !== args.fileBytes && args.fileBytes.length > 0) return {
                    field: EXEC_REPLY_FIELDS.writeArgs,
                    reject: encodeWriteError({
                        path,
                        error: "binary file writes (file_bytes) are not supported"
                    })
                };
                const content = args.fileText ?? "";
                return {
                    tool: "write",
                    args: {
                        file_path: path,
                        content
                    },
                    field: EXEC_REPLY_FIELDS.writeArgs,
                    encode: (result, isError)=>{
                        if (isError) {
                            const text = String(result ?? "");
                            if (WRITE_USER_REJECTED.test(text)) return encodeWriteRejected({
                                path,
                                reason: text
                            });
                            if (WRITE_DENIED.test(text) || SANDBOX_MODE_DENIED.test(text)) return encodeWritePermissionDenied({
                                path,
                                error: text
                            });
                            return encodeWriteError({
                                path,
                                error: text
                            });
                        }
                        return encodeWriteSuccess({
                            path,
                            content,
                            returnFileContentAfterWrite: true === args.returnFileContentAfterWrite
                        });
                    }
                };
            }
        case "deleteArgs":
            {
                const args = exec.args ?? {};
                const path = args.path ?? "";
                return {
                    tool: "delete",
                    args: {
                        file_path: path
                    },
                    field: EXEC_REPLY_FIELDS.deleteArgs,
                    encode: (content, isError)=>{
                        if (isError) {
                            const text = String(content ?? "");
                            if (DELETE_USER_REJECTED.test(text)) return encodeDeleteRejected({
                                path,
                                reason: text
                            });
                            if (DELETE_DENIED.test(text) || SANDBOX_MODE_DENIED.test(text)) return encodeDeletePermissionDenied({
                                path,
                                error: text
                            });
                            return encodeDeleteError({
                                path,
                                error: text
                            });
                        }
                        const sizeMatch = / \((\d+) bytes\)$/.exec(String(content ?? ""));
                        const fileSize = null === sizeMatch ? void 0 : Number(sizeMatch[1]);
                        return encodeDeleteSuccess({
                            path,
                            deletedFile: path,
                            fileSize
                        });
                    }
                };
            }
        default:
            return;
    }
}
export { translateNativeExec };
