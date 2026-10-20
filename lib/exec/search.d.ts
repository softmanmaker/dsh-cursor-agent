export declare function classifyCursorSearch(args?: any): {
    kind: string;
    displayName: string;
    displayArgs: any;
    wirePattern: any;
    wirePath: any;
    outputMode: any;
    offset: any;
    search: {
        mode: string;
        pattern: any;
        path: any;
        glob?: undefined;
        caseInsensitive?: undefined;
        headLimit?: undefined;
    };
} | {
    kind: string;
    displayName: string;
    displayArgs: any;
    wirePattern: any;
    wirePath: any;
    outputMode: any;
    offset: any;
    search: {
        mode: any;
        pattern: any;
        path: any;
        glob: any;
        caseInsensitive: boolean;
        headLimit: any;
    };
};
/** Encode a structured search result as the Cursor GrepResult wire payload. */
export declare function encodeGrepSearchResult(classified: any, result: any): Uint8Array<ArrayBuffer>;
/**
 * DSH Web search-card meta. `lineNumber` must be >= 1; `include` is never set
 * (Cursor's glob filter stays on the call args as `glob`).
 */
export declare function searchMetaFromResult(classified: any, result: any): {
    shape: string;
    files: any[];
    truncated: boolean;
    total: any;
    paths?: undefined;
} | {
    shape: string;
    paths: any;
    truncated: boolean;
    total: any;
    files?: undefined;
};
/** Short generic-fallback text; never the wire JSON contract. */
export declare function searchResultSummary(classified: any, result: any): string;
/** DeleteResult { success=1 DeleteSuccess } — the full field-4 payload. */
export declare function encodeDeleteSuccess(args: any): Uint8Array<ArrayBuffer>;
export declare function encodeDeleteError(args: any): Uint8Array<ArrayBuffer>;
/** WritePermissionDenied { path=1, directory=2, operation=3, error=4, is_readonly=5 } → WriteResult { permission_denied=3 } — every field the server might render is filled. */
export declare function encodeWritePermissionDenied({ path, error }: any): Uint8Array<ArrayBuffer>;
/** DeletePermissionDenied { path=1, client_visible_error=2 } → DeleteResult { permission_denied=4 }. */
export declare function encodeDeletePermissionDenied({ path, error }: any): Uint8Array<ArrayBuffer>;
/**
 * LocalReadExecutor hard cap (`Y3` in `@cursor/sdk`). `ReadSuccess.truncated`
 * is only this character cut — not "the model asked for a range".
 */
export declare const READ_CONTENT_CHAR_CAP = 8388608;
/**
 * Line-window meta for the DSH read card. Join `text` is a short occupancy
 * stub (the upload is not model-visible on the DSH surface); the card reads
 * these numbered lines.
 */
export declare function readPresentationMeta(path: any, text: any, extras?: any): {
    path: string;
    offset: any;
    lines: {
        number: any;
        text: string;
    }[];
    totalLines: any;
};
/**
 * Short DSH-priced join text. Cursor already received the file on the
 * ReadSuccess wire; identity-rendering that upload would make token-meter
 * treat server-side prompt truncation as local occupancy.
 */
export declare function formatReadJoinText(path: any, window: any): string;
/**
 * Agent.v1 LocalReadExecutor window (`oK8` + `Y3` in `@cursor/sdk`).
 *
 * - No offset/limit → whole file, `range_applied=false`.
 * - Offset/limit actually sliced → `range_applied=true`. Past-EOF offset
 *   leaves the whole file and does not set the flag.
 * - `truncated` is only the 8 MiB character cap. A model-requested range
 *   does not set it.
 * - No footer / continuation copy (that text is the Pi read tool, not
 *   `ReadSuccess.content`).
 *
 * @returns { content, totalLines, truncated, rangeApplied, startLine }
 */
export declare function composeReadWindow(text: any, { offset, limit }?: any): {
    content: string;
    totalLines: number;
    truncated: boolean;
    rangeApplied: boolean;
    startLine: number;
};
/**
 * Canonical failure texts from the escalation tools, mapped to three wire
 * tiers so the model can tell a human "no" from an environment denial:
 *   user rejection → the `rejected` variant,
 *   sandbox/approval-channel denial → the `permission_denied` variant,
 *   everything else → the generic `error` variant.
 */
export declare const WRITE_USER_REJECTED: RegExp;
export declare const WRITE_DENIED: RegExp;
export declare const DELETE_USER_REJECTED: RegExp;
export declare const DELETE_DENIED: RegExp;
export declare const SANDBOX_MODE_DENIED: RegExp;
/** The exec-client reply field for each whitelisted native exec frame. */
export declare const EXEC_REPLY_FIELDS: Readonly<{
    readArgs: 7;
    writeArgs: 3;
    grepArgs: 5;
    deleteArgs: 4;
}>;
