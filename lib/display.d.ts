export declare function parseCursorWebSearchChunk(text: any): {
    links: any[];
    synthesis: string;
};
/**
 * web_search renderer: the server already ran the search (approved
 * interaction); this tool echoes the display-frame result in the OFFICIAL
 * dsh-tool-web shape so the DSH search card renders it.
 */
/**
 * Map a decoded display frame onto the renderer tool's OFFICIAL argument
 * shape; `undefined` = nothing to render (error, filtered/partial todo read).
 */
export declare function rendererToolArgs(display: any): {
    todos: any[];
    queries?: undefined;
    url?: undefined;
} | {
    queries: any[];
    todos?: undefined;
    url?: undefined;
} | {
    url: any;
    todos?: undefined;
    queries?: undefined;
};
/**
 * Display completed can land on the pump before this stream() binds a DSH
 * call id (drain-closed, then parked frames). Stash until bind, then settle.
 */
export declare function rememberDisplayCompletion(persisted: any, display: any): void;
export declare function bindDisplayCallId(persisted: any, display: any, id: any, { runEnded }?: any): void;
/** Join payload for a server-resolved display frame (web search/fetch, todos). */
export declare function displayJoinResult(display: any): {
    text: string;
    isError: boolean;
    meta: {
        answer?: string;
        sources: any;
        truncated: boolean;
        url?: undefined;
        statusCode?: undefined;
    };
} | {
    text: string;
    isError: boolean;
    meta: {
        url: any;
        statusCode: any;
        truncated: boolean;
    };
} | {
    text: string;
    isError: boolean;
    meta?: undefined;
};
