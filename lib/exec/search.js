import { encodeGrepContentResult, encodeGrepCountResult, encodeGrepErrorResult, encodeGrepFilesResult, encodeGrepSuccessResult } from "../wire/codec.js";
import { dirname } from "node:path";
import { Writer } from "../proto.js";
function classifyCursorSearch(args = {}) {
    const pattern = "string" == typeof args.pattern ? args.pattern : "";
    const path = "string" == typeof args.path ? args.path : "";
    const glob = "string" == typeof args.glob ? args.glob : "";
    const outputMode = args.outputMode || "content";
    const offset = Number.isSafeInteger(args.offset) ? args.offset : 0;
    if ("files_with_matches" === outputMode && 0 === pattern.length && glob.length > 0) {
        const displayArgs = {
            pattern: glob
        };
        if (path.length > 0) displayArgs.path = path;
        return {
            kind: "glob",
            displayName: "glob",
            displayArgs,
            wirePattern: pattern,
            wirePath: path,
            outputMode,
            offset,
            search: {
                mode: "glob",
                pattern: glob,
                path
            }
        };
    }
    const displayArgs = {
        pattern
    };
    if (path.length > 0) displayArgs.path = path;
    if (glob.length > 0) displayArgs.glob = glob;
    if (true === args.caseInsensitive) displayArgs.case_insensitive = true;
    if (Number.isSafeInteger(args.headLimit) && args.headLimit > 0) displayArgs.head_limit = args.headLimit;
    displayArgs.output_mode = outputMode;
    return {
        kind: "grep",
        displayName: "grep",
        displayArgs,
        wirePattern: pattern,
        wirePath: path,
        outputMode,
        offset,
        search: {
            mode: outputMode,
            pattern,
            path,
            glob,
            caseInsensitive: true === args.caseInsensitive,
            headLimit: Number.isSafeInteger(args.headLimit) && args.headLimit > 0 ? args.headLimit : void 0
        }
    };
}
function encodeGrepSearchResult(classified, result) {
    if (result?.error) return encodeGrepErrorResult(String(result.error));
    const offset = classified.offset > 0 ? classified.offset : 0;
    const offsetApplied = offset > 0 ? offset : void 0;
    const { wirePattern: pattern, wirePath: path, outputMode } = classified;
    if ("files_with_matches" === result.mode || "glob" === result.mode) {
        const files = (result.files ?? []).slice(offset);
        return encodeGrepSuccessResult({
            pattern,
            path,
            outputMode,
            unionBytes: new Writer().message(2, encodeGrepFilesResult({
                files,
                totalFiles: result.totalFiles,
                clientTruncated: true === result.truncated,
                offsetApplied
            })).finish()
        });
    }
    if ("count" === result.mode) {
        const counts = (result.counts ?? []).slice(offset);
        return encodeGrepSuccessResult({
            pattern,
            path,
            outputMode,
            unionBytes: new Writer().message(1, encodeGrepCountResult({
                counts,
                totalFiles: result.totalFiles,
                totalMatches: result.totalMatches,
                clientTruncated: true === result.truncated,
                offsetApplied
            })).finish()
        });
    }
    const matches = (result.matches ?? []).slice(offset);
    return encodeGrepSuccessResult({
        pattern,
        path,
        outputMode,
        unionBytes: new Writer().message(3, encodeGrepContentResult({
            matches,
            totalLines: result.totalMatchedLines,
            totalMatchedLines: result.totalMatchedLines,
            clientTruncated: true === result.truncated,
            ripgrepTruncated: true === result.ripgrepTruncated,
            offsetApplied
        })).finish()
    });
}
function searchMetaFromResult(classified, result) {
    if (result?.error) return;
    const offset = classified.offset > 0 ? classified.offset : 0;
    if ("content" === result.mode) {
        const files = [];
        for (const group of (result.matches ?? []).slice(offset)){
            const matches = [];
            for (const match of group.matches ?? []){
                const lineNumber = Number(match.lineNumber);
                if (Number.isSafeInteger(lineNumber) && !(lineNumber < 1)) matches.push({
                    lineNumber,
                    line: String(match.content ?? "").replace(/\n$/, "")
                });
            }
            if (matches.length > 0) files.push({
                path: group.file,
                matches
            });
        }
        return {
            shape: "matches",
            files,
            truncated: true === result.truncated,
            total: result.totalMatchedLines ?? 0
        };
    }
    if ("count" === result.mode) {
        const paths = (result.counts ?? []).slice(offset).map((entry)=>entry.file);
        return {
            shape: "paths",
            paths,
            truncated: true === result.truncated,
            total: result.totalFiles ?? paths.length
        };
    }
    const paths = (result.files ?? []).slice(offset);
    return {
        shape: "paths",
        paths,
        truncated: true === result.truncated,
        total: result.totalFiles ?? paths.length
    };
}
function searchResultSummary(classified, result) {
    if (result?.error) return String(result.error);
    if ("content" === result.mode) {
        const n = result.totalMatchedLines ?? 0;
        return 0 === n ? "No matches found" : `${n} match${1 === n ? "" : "es"}`;
    }
    if ("count" === result.mode) {
        const matches = result.totalMatches ?? 0;
        const files = result.totalFiles ?? 0;
        return `${matches} match${1 === matches ? "" : "es"} in ${files} file${1 === files ? "" : "s"}`;
    }
    const n = result.totalFiles ?? (result.files ?? []).length;
    return 0 === n ? "No files found" : `${n} file${1 === n ? "" : "s"}`;
}
function encodeDeleteSuccessInner({ path, deletedFile, fileSize }) {
    const writer = new Writer();
    writer.string(1, path ?? "");
    writer.string(2, deletedFile ?? path ?? "");
    if (Number.isSafeInteger(fileSize) && fileSize >= 0) writer.varint(3, fileSize);
    return writer.finish();
}
function encodeDeleteSuccess(args) {
    return new Writer().message(1, encodeDeleteSuccessInner(args)).finish();
}
function encodeDeleteErrorInner({ path, error }) {
    const writer = new Writer();
    writer.string(1, path ?? "");
    writer.string(2, String(error ?? ""));
    return writer.finish();
}
function encodeDeleteError(args) {
    return new Writer().message(7, encodeDeleteErrorInner(args)).finish();
}
function encodeWritePermissionDenied({ path, error }) {
    const inner = new Writer();
    inner.string(1, path ?? "");
    inner.string(2, dirname(path ?? ""));
    inner.string(3, "write");
    inner.string(4, String(error ?? ""));
    return new Writer().message(3, inner.finish()).finish();
}
function encodeDeletePermissionDenied({ path, error }) {
    const inner = new Writer();
    inner.string(1, path ?? "");
    inner.string(2, String(error ?? ""));
    return new Writer().message(4, inner.finish()).finish();
}
function splitRawLines(text) {
    const value = String(text ?? "");
    if (0 === value.length) return [];
    const lines = value.split("\n");
    if (value.endsWith("\n")) lines.pop();
    return lines;
}
const READ_CONTENT_CHAR_CAP = 8388608;
function countCursorLines(text) {
    if ("" === text) return 1;
    let lines = 1;
    for(let i = 0; i < text.length; i++)if (10 === text.charCodeAt(i)) lines++;
    return lines;
}
function readPresentationMeta(path, text, extras = {}) {
    const lines = splitRawLines(text);
    const offset = Number.isSafeInteger(extras.offset) && extras.offset > 0 ? extras.offset : 1;
    const totalLines = Number.isSafeInteger(extras.totalLines) ? extras.totalLines : lines.length;
    return {
        path: String(path ?? ""),
        offset,
        lines: lines.map((line, index)=>({
                number: offset + index,
                text: line
            })),
        totalLines
    };
}
function formatReadJoinText(path, window) {
    const name = String(path ?? "").trim() || "file";
    const lines = Number.isSafeInteger(window?.totalLines) ? window.totalLines : 0;
    return `${name} (${lines} lines)`;
}
function composeReadWindow(text, { offset, limit } = {}) {
    const raw = String(text ?? "");
    const totalLines = countCursorLines(raw);
    let content = raw;
    let rangeApplied = false;
    let startLine = 1;
    if ((void 0 !== offset || void 0 !== limit) && "" !== raw) {
        const startOffset = offset ?? 1;
        const windowLimit = limit ?? (startOffset < 0 ? Math.abs(startOffset) : totalLines);
        const start = startOffset < 0 ? Math.max(0, totalLines + startOffset) : Math.max(0, startOffset - 1);
        if (start < totalLines) {
            const end = Math.min(totalLines, start + windowLimit);
            content = raw.split("\n").slice(start, end).join("\n");
            rangeApplied = true;
            startLine = start + 1;
        }
    }
    let truncated = false;
    if (content.length > READ_CONTENT_CHAR_CAP) {
        content = content.substring(0, READ_CONTENT_CHAR_CAP);
        truncated = true;
    }
    return {
        content,
        totalLines,
        truncated,
        rangeApplied,
        startLine
    };
}
const WRITE_USER_REJECTED = /^(?:Error: )?cannot write ".*": permission denied \((?:the user rejected|approval was cancelled)/;
const WRITE_DENIED = /^(?:Error: )?cannot write ".*": permission denied/;
const DELETE_USER_REJECTED = /^(?:Error: )?cannot delete ".*": permission denied \((?:the user rejected|approval was cancelled)/;
const DELETE_DENIED = /^(?:Error: )?cannot delete ".*": permission denied/;
const SANDBOX_MODE_DENIED = /file access denied under (?:read-only|workspace-write|danger-full-access) mode/;
const EXEC_REPLY_FIELDS = Object.freeze({
    readArgs: 7,
    writeArgs: 3,
    grepArgs: 5,
    deleteArgs: 4
});
export { DELETE_DENIED, DELETE_USER_REJECTED, EXEC_REPLY_FIELDS, READ_CONTENT_CHAR_CAP, SANDBOX_MODE_DENIED, WRITE_DENIED, WRITE_USER_REJECTED, classifyCursorSearch, composeReadWindow, encodeDeleteError, encodeDeletePermissionDenied, encodeDeleteSuccess, encodeGrepSearchResult, encodeWritePermissionDenied, formatReadJoinText, readPresentationMeta, searchMetaFromResult, searchResultSummary };
