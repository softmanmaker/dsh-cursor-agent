import { randomUUID } from "node:crypto";
import { createUserMessage } from "@deepseek-ai/dsh-llm";
import { Reader, Writer } from "./proto.js";
const PROVIDER = "cursor-agent";
const DENIED_MCP_TOOLS = new Set([
    "compress",
    "decompress",
    "search_context",
    "acp_status"
]);
const DENIED_INJECT_PLUGINS = new Set([
    "acp-nudge",
    "billion-context-dsh",
    "compact",
    "compact-checkpoint"
]);
const ACP_SYSTEM_SECTION = "billion-context-dsh";
const SUMMARY_OPEN_TAG = "<compacted-summary>";
const SUMMARY_CLOSE_TAG = "</compacted-summary>";
const CHECKPOINT_PREAMBLE = "This is an automatically generated checkpoint condensing an earlier span of the conversation to free up context. Treat the captured context as established background and build on it without restating it. Continue the task directly from the messages that follow, without acknowledging this checkpoint.";
const COMPACT_CHECKPOINT_MARKER = Object.freeze({
    kind: "compact-checkpoint"
});
let cursorSummarize;
function registerCursorSummarize(fn) {
    cursorSummarize = fn;
}
function getCursorSummarize() {
    return cursorSummarize;
}
function normalizeCursorToolName(name) {
    if ("string" != typeof name || 0 === name.length) return "";
    return name.toLowerCase().replace(/-/g, "_");
}
function isDeniedCursorMcpTool(name) {
    return DENIED_MCP_TOOLS.has(normalizeCursorToolName(name));
}
function shouldDropCursorInject(plugin) {
    return DENIED_INJECT_PLUGINS.has(String(plugin ?? ""));
}
function encodeSummarizeAction() {
    return new Writer().message(4, new Uint8Array(0)).finish();
}
function decodeSummaryUpdate(bytes) {
    const reader = new Reader(bytes);
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 2 === wireType) return reader.string();
        reader.skip(wireType);
    }
    return "";
}
function decodeConversationSummaryArchive(bytes) {
    const reader = new Reader(bytes);
    const archive = {
        summarizedMessages: [],
        summary: "",
        windowTail: 0
    };
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 2 === wireType) archive.summarizedMessages.push(reader.bytes());
        else if (2 === field && 2 === wireType) archive.summary = reader.string();
        else if (3 === field && 0 === wireType) archive.windowTail = reader.varint();
        else if (4 === field && 2 === wireType) reader.bytes();
        else reader.skip(wireType);
    }
    return archive;
}
function decodeConversationSummary(bytes) {
    const reader = new Reader(bytes);
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 2 === wireType) return reader.string();
        reader.skip(wireType);
    }
    return "";
}
function blobIdHex(id) {
    return Buffer.from(id).toString("hex");
}
function readBlob(blobs, id) {
    if (null == blobs || null == id || 0 === id.length) return;
    const data = blobs.get?.(blobIdHex(id));
    return data instanceof Uint8Array ? data : void 0;
}
function summaryTextFromBytes(raw, blobs) {
    const inline = decodeConversationSummary(raw);
    if (inline.length > 0) return inline;
    const stored = readBlob(blobs, raw);
    return void 0 === stored ? "" : decodeConversationSummary(stored);
}
function decodeConversationStateSummary(bytes, blobs) {
    const reader = new Reader(bytes);
    let summary = "";
    let windowTail;
    const archiveIds = [];
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (6 === field && 2 === wireType) {
            const text = summaryTextFromBytes(reader.bytes(), blobs);
            if (text.length > 0) summary = text;
        } else if ((11 === field || 13 === field) && 2 === wireType) archiveIds.push(reader.bytes());
        else reader.skip(wireType);
    }
    for (const id of archiveIds){
        const stored = readBlob(blobs, id);
        if (void 0 === stored) continue;
        const archive = decodeConversationSummaryArchive(stored);
        if (archive.summary.length > 0) summary = archive.summary;
        if (Number.isFinite(archive.windowTail) && archive.windowTail > 0) windowTail = archive.windowTail;
    }
    if (0 === summary.length && void 0 === windowTail) return;
    return {
        summary,
        windowTail
    };
}
function stripTokenDetailsUsageTree(bytes) {
    const reader = new Reader(bytes);
    const writer = new Writer();
    while(!reader.done){
        const start = reader.pos;
        const { field, wireType } = reader.tag();
        if (4 === field) {
            reader.skip(wireType);
            continue;
        }
        reader.skip(wireType);
        writer.parts.push(reader.data.subarray(start, reader.pos));
    }
    return writer.finish();
}
function sanitizeSubagentPersistedState(bytes) {
    const reader = new Reader(bytes);
    const writer = new Writer();
    while(!reader.done){
        const start = reader.pos;
        const { field, wireType } = reader.tag();
        if (1 === field && 2 === wireType) writer.message(1, sanitizeConversationStateForSend(reader.bytes()));
        else {
            reader.skip(wireType);
            writer.parts.push(reader.data.subarray(start, reader.pos));
        }
    }
    return writer.finish();
}
function sanitizeSubagentMapEntry(bytes) {
    const reader = new Reader(bytes);
    const writer = new Writer();
    while(!reader.done){
        const start = reader.pos;
        const { field, wireType } = reader.tag();
        if (2 === field && 2 === wireType) writer.message(2, sanitizeSubagentPersistedState(reader.bytes()));
        else {
            reader.skip(wireType);
            writer.parts.push(reader.data.subarray(start, reader.pos));
        }
    }
    return writer.finish();
}
function sanitizeConversationStateForSend(bytes) {
    if (!(bytes instanceof Uint8Array) || 0 === bytes.length) return bytes;
    const reader = new Reader(bytes);
    const writer = new Writer();
    while(!reader.done){
        const start = reader.pos;
        const { field, wireType } = reader.tag();
        if (5 === field && 2 === wireType) writer.message(5, stripTokenDetailsUsageTree(reader.bytes()));
        else if (16 === field && 2 === wireType) writer.message(16, sanitizeSubagentMapEntry(reader.bytes()));
        else {
            reader.skip(wireType);
            writer.parts.push(reader.data.subarray(start, reader.pos));
        }
    }
    return writer.finish();
}
function compactCheckpointSource(compactionId, sourceCommandId) {
    return Object.freeze({
        ...COMPACT_CHECKPOINT_MARKER,
        compactionId,
        ...void 0 === sourceCommandId ? {} : {
            sourceCommandId
        }
    });
}
function frameCursorSummary(text) {
    return `${CHECKPOINT_PREAMBLE}\n\n${SUMMARY_OPEN_TAG}\n${text}\n${SUMMARY_CLOSE_TAG}`;
}
function sessionEventAt(session, seq) {
    if ("function" == typeof session?.eventAt) return session.eventAt(seq);
    return session?.events?.[seq];
}
function sessionSeqCount(session) {
    if (Number.isSafeInteger(session?.seq)) return session.seq;
    return session?.events?.length ?? 0;
}
function eventToolDelta(event) {
    if (event?.type === "assistant/message") return (event.data?.message?.content ?? []).filter((block)=>"tool-call" === block.type).length;
    if (event?.type === "tool/result") return -1;
    return 0;
}
function inProgressBefore(session, index) {
    const nodes = session.surface?.nodes ?? [];
    let count = 0;
    for(let i = 0; i < index; i++)count += eventToolDelta(sessionEventAt(session, nodes[i]));
    return count;
}
function toolPairingBalancedBefore(session, seq) {
    const nodes = session.surface?.nodes ?? [];
    const index = nodes.indexOf(seq);
    if (-1 === index) return false;
    return 0 === inProgressBefore(session, index);
}
function toolPairingBalancedAfter(session, seq) {
    const nodes = session.surface?.nodes ?? [];
    const index = nodes.indexOf(seq);
    if (-1 === index) return false;
    return inProgressBefore(session, index) + eventToolDelta(sessionEventAt(session, nodes[index])) === 0;
}
function flattenEventText(event) {
    const content = event?.data?.message?.content ?? event?.data?.content ?? [];
    if (!Array.isArray(content)) return "";
    let text = "";
    for (const block of content)if (block?.type === "text") text += block.text ?? "";
    else if ("string" == typeof block?.text) text += block.text;
    return text;
}
function estimateSeqTokens(session, seq) {
    const text = flattenEventText(sessionEventAt(session, seq));
    return 0 === text.length ? 0 : Math.ceil(text.length / 4);
}
function selectCompactableHead(session, { keepTail = true, windowTail } = {}) {
    const nodes = session?.surface?.nodes ?? [];
    if (0 === nodes.length) return null;
    let keepFrom = nodes.length;
    if (keepTail) {
        let lastAssistant = -1;
        for(let index = nodes.length - 1; index >= 0; index--)if (sessionEventAt(session, nodes[index])?.type === "assistant/message") {
            lastAssistant = index;
            break;
        }
        keepFrom = -1 === lastAssistant ? nodes.length : lastAssistant;
        if (Number.isFinite(windowTail) && windowTail > 0) keepFrom = Math.min(keepFrom, Math.max(0, nodes.length - windowTail));
    }
    if (keepFrom <= 0) return null;
    let endIdx = keepFrom - 1;
    while(endIdx >= 0 && !toolPairingBalancedAfter(session, nodes[endIdx]))endIdx--;
    if (endIdx < 0) return null;
    let startIdx = 0;
    while(startIdx <= endIdx && !toolPairingBalancedBefore(session, nodes[startIdx]))startIdx++;
    if (startIdx > endIdx) return null;
    const shadowedSeqs = nodes.slice(startIdx, endIdx + 1);
    return {
        start: nodes[startIdx],
        end: nodes[endIdx],
        shadowedSeqs
    };
}
function inspectCompactionEntryState(session) {
    let openTurn = null;
    let openTurnStateKnown = false;
    let unmatchedCompactionStart;
    let compactionEntryStateKnown = false;
    let latestEndSeedSeq;
    for(let seq = sessionSeqCount(session) - 1; seq >= 0; seq--){
        const event = sessionEventAt(session, seq);
        if (void 0 !== event) {
            if (void 0 === latestEndSeedSeq && "session/end-seed" === event.type) latestEndSeedSeq = event.seq;
            if (!compactionEntryStateKnown) {
                if ("compaction/start" === event.type) {
                    unmatchedCompactionStart = event;
                    compactionEntryStateKnown = true;
                } else if ("compaction/end" === event.type) compactionEntryStateKnown = true;
            }
            if (!openTurnStateKnown) {
                if ("turn/start" === event.type) {
                    openTurn = event.data?.turn ?? null;
                    openTurnStateKnown = true;
                } else if ("turn/end" === event.type) openTurnStateKnown = true;
            }
            if (openTurnStateKnown && compactionEntryStateKnown && void 0 !== latestEndSeedSeq) break;
        }
    }
    return {
        openTurn,
        unmatchedCompactionStart,
        latestEndSeedSeq
    };
}
function lockIsActive(entry) {
    if (void 0 === entry.unmatchedCompactionStart) return false;
    if (void 0 !== entry.latestEndSeedSeq && entry.latestEndSeedSeq > entry.unmatchedCompactionStart.seq) return false;
    return true;
}
function summaryBlocksOf(event) {
    const blocks = event?.data?.summary;
    if (!Array.isArray(blocks)) return "";
    return blocks.map((block)=>block?.type === "text" ? block.text ?? "" : "").join("");
}
function findLatestCursorSummaryResult(session, text) {
    const needle = String(text ?? "").trim();
    if (0 === needle.length) return;
    let startEvent;
    let summaryEvent;
    let endEvent;
    const n = sessionSeqCount(session);
    for(let seq = 0; seq < n; seq++){
        const event = sessionEventAt(session, seq);
        if (event?.type === "compaction/start") startEvent = event;
        else if (event?.type === "compaction/summary" && summaryBlocksOf(event).trim() === needle) summaryEvent = event;
        else if (event?.type === "compaction/end" && event.data?.error === void 0 && void 0 !== startEvent && void 0 !== summaryEvent) endEvent = event;
    }
    if (void 0 === startEvent || void 0 === summaryEvent || void 0 === endEvent) return;
    return {
        compactionId: startEvent.data.compactionId,
        ...void 0 === startEvent.data.sourceCommandId ? {} : {
            sourceCommandId: startEvent.data.sourceCommandId
        },
        startSeq: startEvent.seq,
        summarySeq: summaryEvent.seq,
        endSeq: endEvent.seq,
        summary: summaryEvent.data.summary,
        shadowedRange: summaryEvent.data.shadowedRange,
        shadowedSeqs: summaryEvent.data.shadowedSeqs,
        shadowedTokenCount: summaryEvent.data.shadowedTokenCount
    };
}
function applyCursorSummaryToSession({ session, summary, keepTail = true, owner = "current-turn", provider = PROVIDER, model = "", sourceCommandId, windowTail } = {}) {
    const text = String(summary ?? "").trim();
    if (0 === text.length || void 0 === session) return null;
    const existing = findLatestCursorSummaryResult(session, text);
    if (void 0 !== existing) return existing;
    const entry = inspectCompactionEntryState(session);
    if (lockIsActive(entry)) return null;
    let turn = null;
    if ("current-turn" === owner) {
        if (null === entry.openTurn) return null;
        turn = entry.openTurn;
    } else if (null !== entry.openTurn) return null;
    const range = selectCompactableHead(session, {
        keepTail,
        windowTail
    });
    if (null === range) return null;
    const compactionId = randomUUID();
    const lifecycle = {
        compactionId,
        ...void 0 === sourceCommandId ? {} : {
            sourceCommandId
        },
        turn
    };
    const summaryContent = [
        {
            type: "text",
            text
        }
    ];
    const shadowedTokenCount = range.shadowedSeqs.reduce((total, seq)=>total + estimateSeqTokens(session, seq), 0);
    const startEvent = session.append("compaction/start", lifecycle);
    try {
        const summaryEvent = session.append("compaction/summary", {
            compactionId,
            ...void 0 === sourceCommandId ? {} : {
                sourceCommandId
            },
            summary: summaryContent,
            shadowedRange: {
                start: range.start,
                end: range.end
            },
            shadowedSeqs: [
                ...range.shadowedSeqs
            ],
            shadowedTokenCount,
            provider,
            model
        });
        const checkpointMessage = createUserMessage({
            content: [
                {
                    type: "text",
                    text: frameCursorSummary(text)
                }
            ],
            source: compactCheckpointSource(compactionId, sourceCommandId)
        });
        session.append("user/message", checkpointMessage, {
            surfaceOp: {
                op: "replace",
                start: range.start,
                end: range.end
            },
            sourceEventSeqs: [
                startEvent.seq,
                summaryEvent.seq,
                ...range.shadowedSeqs
            ]
        });
        const endEvent = session.append("compaction/end", lifecycle);
        return {
            compactionId,
            ...void 0 === sourceCommandId ? {} : {
                sourceCommandId
            },
            startSeq: startEvent.seq,
            summarySeq: summaryEvent.seq,
            endSeq: endEvent.seq,
            summary: summaryContent,
            shadowedRange: {
                start: range.start,
                end: range.end
            },
            shadowedSeqs: [
                ...range.shadowedSeqs
            ],
            shadowedTokenCount
        };
    } catch (error) {
        try {
            session.append("compaction/end", {
                ...lifecycle,
                error: error instanceof Error ? error.message : String(error)
            });
        } catch  {}
        throw error;
    }
}
function applySummaryFromPump(agent, text, { keepTail = true, windowTail, model } = {}) {
    const session = agent?.session;
    if (void 0 === session) return null;
    try {
        return applyCursorSummaryToSession({
            session,
            summary: text,
            keepTail,
            owner: keepTail ? "current-turn" : null,
            provider: PROVIDER,
            model: model ?? agent.options?.model ?? "",
            windowTail
        });
    } catch  {
        return null;
    }
}
function pickCheckpointSummaryCommit({ summarySeen, summarizeKeepTail = true, buffer, checkpointSummary } = {}) {
    if (true !== summarySeen && false !== summarizeKeepTail) return;
    const fromBuffer = String(buffer ?? "").trim();
    const fromCheckpoint = String(checkpointSummary ?? "").trim();
    const text = fromBuffer || fromCheckpoint;
    return text.length > 0 ? text : void 0;
}
async function executeCursorCompactNow(agent, signal, sourceCommandId) {
    signal?.throwIfAborted?.();
    const { ManualCompactionError } = await loadCompactionSeam();
    const summarize = getCursorSummarize();
    if (void 0 === summarize) throw new ManualCompactionError("summary", "cursor-agent summarize is not registered");
    let outcome;
    try {
        outcome = await summarize({
            sessionId: agent.session.id,
            model: agent.options?.model,
            signal
        });
    } catch (error) {
        if (error instanceof ManualCompactionError) throw error;
        throw new ManualCompactionError("summary", error instanceof Error ? error.message : "Cursor summarize failed", {
            cause: error
        });
    }
    const summary = String(outcome?.summary ?? "").trim();
    if (0 === summary.length) throw new ManualCompactionError("summary", "Cursor summarize returned an empty summary");
    if (outcome?.result !== void 0) return outcome.result;
    try {
        return applyCursorSummaryToSession({
            session: agent.session,
            summary,
            keepTail: false,
            owner: null,
            provider: PROVIDER,
            model: agent.options?.model ?? "",
            sourceCommandId
        });
    } catch (error) {
        if (error instanceof ManualCompactionError) throw error;
        throw new ManualCompactionError("commit", error instanceof Error ? error.message : "Cursor summary did not commit to the DSH session", {
            cause: error
        });
    }
}
async function loadCompactionSeam() {
    const mod = await import("@deepseek-ai/dsh-compaction");
    if (void 0 === mod.CompactionEngine || void 0 === mod.ManualCompactionError) throw new Error("cursor-agent: @deepseek-ai/dsh-compaction is incomplete");
    return mod;
}
async function applyCursorCompaction(ctx) {
    let CompactionEngine;
    let ManualCompactionError;
    try {
        ({ CompactionEngine, ManualCompactionError } = await loadCompactionSeam());
    } catch (error) {
        ctx.logger?.warn(`cursor-agent: compaction engine unavailable: ${error instanceof Error ? error.message : String(error)}`);
        return;
    }
    class CursorCompactionEngine extends CompactionEngine {
        constructor(ctx){
            super(ctx);
        }
        async compactIfNeeded() {
            return null;
        }
        async compactRegion() {
            throw new ManualCompactionError("summary", "cursor-agent does not support compactRegion; use /compact to trigger Cursor summarize");
        }
        async compactNow(agent, signal, sourceCommandId) {
            return agent.runMaintenance(async (inner)=>{
                const merged = void 0 === signal ? inner : "function" == typeof AbortSignal.any ? AbortSignal.any([
                    signal,
                    inner
                ]) : inner;
                return executeCursorCompactNow(agent, merged, sourceCommandId);
            });
        }
    }
    new CursorCompactionEngine(ctx);
}
export { ACP_SYSTEM_SECTION, applyCursorCompaction, applyCursorSummaryToSession, applySummaryFromPump, compactCheckpointSource, decodeConversationStateSummary, decodeConversationSummary, decodeConversationSummaryArchive, decodeSummaryUpdate, encodeSummarizeAction, executeCursorCompactNow, findLatestCursorSummaryResult, frameCursorSummary, getCursorSummarize, inspectCompactionEntryState, isDeniedCursorMcpTool, normalizeCursorToolName, pickCheckpointSummaryCommit, registerCursorSummarize, sanitizeConversationStateForSend, selectCompactableHead, shouldDropCursorInject, toolPairingBalancedAfter, toolPairingBalancedBefore };
