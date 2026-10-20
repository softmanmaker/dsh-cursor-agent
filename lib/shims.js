import { awaitCursorJoin } from "./joins.js";
const ANY_OBJECT = Object.freeze({
    type: "object",
    additionalProperties: true,
    properties: {}
});
const ANY_JSON = Object.freeze({});
function identityRender(_args, value) {
    return [
        {
            type: "text",
            text: String(value?.text ?? "")
        }
    ];
}
function identityMeta(_args, value) {
    const meta = value?.meta;
    return void 0 !== meta ? meta : null;
}
async function joinExecute(_args, exec) {
    const result = await awaitCursorJoin(exec.callId, exec.signal);
    if (result.isError) throw new Error(result.text || "Cursor tool failed");
    return {
        text: result.text,
        ...void 0 !== result.meta ? {
            meta: result.meta
        } : {}
    };
}
function isSearchLineMatch(value) {
    if ("object" != typeof value || null === value || Array.isArray(value)) return false;
    return "number" == typeof value.lineNumber && "string" == typeof value.line;
}
function isSearchFileMatches(value) {
    if ("object" != typeof value || null === value || Array.isArray(value)) return false;
    return "string" == typeof value.path && Array.isArray(value.matches) && value.matches.every(isSearchLineMatch);
}
function searchViewFromMeta(meta) {
    if ("object" != typeof meta || null === meta || Array.isArray(meta)) return;
    if ("boolean" != typeof meta.truncated || "number" != typeof meta.total) return;
    if ("matches" === meta.shape) {
        if (!Array.isArray(meta.files) || !meta.files.every(isSearchFileMatches)) return;
        return {
            card: "search",
            shape: "matches",
            files: meta.files,
            truncated: meta.truncated,
            total: meta.total
        };
    }
    if ("paths" === meta.shape) {
        if (!Array.isArray(meta.paths) || !meta.paths.every((path)=>"string" == typeof path)) return;
        return {
            card: "search",
            shape: "paths",
            paths: meta.paths,
            truncated: meta.truncated,
            total: meta.total
        };
    }
}
function presentSearchCall(title, rawInput, kind = "search") {
    return {
        card: "generic",
        title,
        kind,
        rawInput
    };
}
function presentSearchResult(_args, result) {
    if (result.isError) return;
    return searchViewFromMeta(result.meta);
}
function presentReadCall(args) {
    const path = String(args?.file_path ?? "");
    return {
        card: "generic",
        title: path.length > 0 ? `Read ${path}` : "Read",
        kind: "read",
        ...path.length > 0 ? {
            locations: [
                {
                    path,
                    line: 1
                }
            ]
        } : {}
    };
}
function presentReadResult(args, result) {
    if (result.isError) return;
    const meta = result.meta;
    if ("object" != typeof meta || null === meta || !Array.isArray(meta.lines)) return;
    const path = "string" == typeof meta.path ? meta.path : String(args?.file_path ?? "");
    return {
        card: "read",
        path,
        offset: Number.isSafeInteger(meta.offset) ? meta.offset : 1,
        lines: meta.lines,
        totalLines: Number.isSafeInteger(meta.totalLines) ? meta.totalLines : meta.lines.length,
        content: result.content
    };
}
function presentWriteCall(args) {
    const path = String(args?.file_path ?? "");
    const next = String(args?.content ?? "");
    return {
        card: "diff",
        title: path.length > 0 ? `Write ${path}` : "Write",
        diffs: [
            {
                path,
                oldText: null,
                newText: next
            }
        ],
        ...path.length > 0 ? {
            locations: [
                {
                    path
                }
            ]
        } : {}
    };
}
function presentWriteResult(args, result) {
    if (result.isError) return;
    const path = "string" == typeof result.meta?.path ? result.meta.path : String(args?.file_path ?? "");
    const newText = "string" == typeof result.meta?.newText ? result.meta.newText : String(args?.content ?? "");
    const oldText = result.meta?.oldText;
    return {
        card: "diff",
        title: path.length > 0 ? `Write ${path}` : "Write",
        diffs: [
            {
                path,
                oldText: "string" == typeof oldText ? oldText : null,
                newText
            }
        ]
    };
}
function presentDeleteCall(args) {
    const path = String(args?.file_path ?? "");
    return {
        card: "generic",
        title: path.length > 0 ? `Delete ${path}` : "Delete",
        kind: "other",
        ...path.length > 0 ? {
            locations: [
                {
                    path
                }
            ]
        } : {}
    };
}
function presentBashCall(args) {
    const command = String(args?.command ?? "");
    const view = {
        card: "terminal",
        title: command.length > 0 ? command : "bash"
    };
    if ("string" == typeof args?.description && args.description.length > 0) view.description = args.description;
    if ("string" == typeof args?.workdir && args.workdir.length > 0) view.cwd = args.workdir;
    return view;
}
function presentWebSearchCall(args) {
    const queries = Array.isArray(args?.queries) ? args.queries.map(String) : [
        String(args?.search_term ?? args?.query ?? "")
    ];
    const title = queries.filter((part)=>part.length > 0).join(", ") || "Web search";
    return {
        card: "generic",
        title,
        kind: "search",
        rawInput: title
    };
}
function presentWebSearchResult(args, result) {
    if (result.isError) return;
    const meta = result.meta;
    if ("object" != typeof meta || null === meta || !Array.isArray(meta.sources)) return;
    const queries = Array.isArray(args?.queries) ? args.queries.map(String) : [];
    return {
        card: "web",
        kind: "search",
        title: queries.join(", ") || void 0,
        sources: meta.sources,
        truncated: true === meta.truncated,
        ..."string" == typeof meta.answer ? {
            answer: meta.answer
        } : {}
    };
}
function presentWebFetchCall(args) {
    const url = String(args?.url ?? "");
    return {
        card: "generic",
        title: url.length > 0 ? url : "Fetch",
        kind: "fetch",
        rawInput: url
    };
}
function presentWebFetchResult(_args, result) {
    if (result.isError) return;
    const meta = result.meta;
    if ("object" != typeof meta || null === meta || "string" != typeof meta.url) return;
    return {
        card: "web",
        kind: "fetch",
        url: meta.url,
        statusCode: Number.isSafeInteger(meta.statusCode) ? meta.statusCode : 0,
        truncated: true === meta.truncated
    };
}
function presentTodoCall() {
    return {
        card: "generic",
        title: "Update todos",
        kind: "other"
    };
}
function joinShim({ name, description, timeoutMs, parallel, presentCall, presentResult }) {
    return {
        name,
        description,
        parameters: ANY_OBJECT,
        timeoutMs,
        output: {
            schema: ANY_JSON,
            render: identityRender,
            presentationMeta: identityMeta
        },
        ...true === parallel ? {
            isConcurrencySafe: ()=>true
        } : {},
        execute: joinExecute,
        ...void 0 !== presentCall ? {
            presentCall
        } : {},
        ...void 0 !== presentResult ? {
            presentResult
        } : {}
    };
}
function cursorJoinShims() {
    return [
        joinShim({
            name: "read",
            description: "Read a file (Cursor-native).",
            timeoutMs: 120000,
            parallel: true,
            presentCall: presentReadCall,
            presentResult: presentReadResult
        }),
        joinShim({
            name: "write",
            description: "Write a file (Cursor-native).",
            timeoutMs: 120000,
            presentCall: presentWriteCall,
            presentResult: presentWriteResult
        }),
        joinShim({
            name: "delete",
            description: "Delete a file (Cursor-native).",
            timeoutMs: 120000,
            presentCall: presentDeleteCall
        }),
        joinShim({
            name: "grep",
            description: "Search file contents (Cursor-native).",
            timeoutMs: 120000,
            parallel: true,
            presentCall: (args)=>presentSearchCall(`Grep ${args?.pattern ?? ""}${args?.path ? ` in ${args.path}` : ""}${args?.glob ? ` (${args.glob})` : ""}`.trim(), args?.pattern ?? ""),
            presentResult: presentSearchResult
        }),
        joinShim({
            name: "glob",
            description: "Find files by glob (Cursor-native).",
            timeoutMs: 120000,
            parallel: true,
            presentCall: (args)=>presentSearchCall(`Glob ${args?.pattern ?? ""}${args?.path ? ` in ${args.path}` : ""}`.trim(), args?.pattern ?? ""),
            presentResult: presentSearchResult
        }),
        joinShim({
            name: "bash",
            description: "Run a shell command (Cursor-native).",
            timeoutMs: 1800000,
            presentCall: presentBashCall
        }),
        joinShim({
            name: "web_search",
            description: "Search the web (Cursor-native).",
            timeoutMs: 300000,
            parallel: true,
            presentCall: presentWebSearchCall,
            presentResult: presentWebSearchResult
        }),
        joinShim({
            name: "web_fetch",
            description: "Fetch a URL (Cursor-native).",
            timeoutMs: 300000,
            parallel: true,
            presentCall: presentWebFetchCall,
            presentResult: presentWebFetchResult
        }),
        joinShim({
            name: "todo_write",
            description: "Update the session todo list (Cursor-native).",
            timeoutMs: 60000,
            presentCall: presentTodoCall
        })
    ];
}
function registerCursorShims(ctx) {
    const tools = ctx.get("tools");
    if (void 0 === tools) return void ctx.logger?.warn("cursor-agent: preset tools service missing; join shims were not registered");
    for (const shim of cursorJoinShims())ctx.effect(()=>tools.register(shim), `cursor-agent: shim ${shim.name}`);
}
export { cursorJoinShims, registerCursorShims, searchViewFromMeta };
