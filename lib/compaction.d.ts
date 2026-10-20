/** ACP system-prompt section shadowed empty on the cursor-agent preset. */
export declare const ACP_SYSTEM_SECTION = "billion-context-dsh";
export declare function registerCursorSummarize(fn: any): void;
export declare function getCursorSummarize(): any;
export declare function normalizeCursorToolName(name: any): string;
export declare function isDeniedCursorMcpTool(name: any): boolean;
export declare function shouldDropCursorInject(plugin: any): boolean;
/**
 * ConversationAction { summarize_action = 4 } — empty SummarizeAction.
 * New Run: pass this as AgentRunRequest.action. Live Run: wrap with
 * encodeConversationActionMessage.
 */
export declare function encodeSummarizeAction(): Uint8Array<ArrayBuffer>;
/** SummaryUpdate { summary = 1 }. */
export declare function decodeSummaryUpdate(bytes: any): any;
/**
 * ConversationSummaryArchive { summarized_messages=1, summary=2, window_tail=3, summary_message=4 }.
 */
export declare function decodeConversationSummaryArchive(bytes: any): any;
/** ConversationSummary { summary = 1 }. */
export declare function decodeConversationSummary(bytes: any): any;
/**
 * ConversationStateStructure summary fields (SDK 1.0.31):
 * field 6 `summary` — inline ConversationSummary bytes (or a blob id);
 * field 11 `summary_archive` / field 13 `summary_archives` — blob ids.
 * Field 9 is `previous_workspace_uris`, not an archive.
 */
export declare function decodeConversationStateSummary(bytes: any, blobs: any): any;
/**
 * SDK `nJ1`: drop `token_details.prompt_context_usage_tree` (field 4) and
 * recurse into `subagent_states` (field 16) before a Run sees the checkpoint.
 */
export declare function sanitizeConversationStateForSend(bytes: any): any;
export declare function compactCheckpointSource(compactionId: any, sourceCommandId: any): Readonly<{
    sourceCommandId?: any;
    compactionId: any;
    kind: "compact-checkpoint";
}>;
export declare function frameCursorSummary(text: any): string;
export declare function toolPairingBalancedBefore(session: any, seq: any): boolean;
export declare function toolPairingBalancedAfter(session: any, seq: any): boolean;
/**
 * Conservative head before the retained tail. Prefer under-shadowing: keep
 * the last assistant and everything after it on auto; manual replaces the
 * whole balanced surface. `windowTail` (archive) can only grow the kept tail.
 */
export declare function selectCompactableHead(session: any, { keepTail, windowTail }?: any): {
    start: any;
    end: any;
    shadowedSeqs: any;
};
export declare function inspectCompactionEntryState(session: any): {
    openTurn: any;
    unmatchedCompactionStart: any;
    latestEndSeedSeq: any;
};
export declare function findLatestCursorSummaryResult(session: any, text: any): {
    startSeq: any;
    summarySeq: any;
    endSeq: any;
    summary: any;
    shadowedRange: any;
    shadowedSeqs: any;
    shadowedTokenCount: any;
    sourceCommandId?: any;
    compactionId: any;
};
/**
 * Official DSH compaction bracket: start → summary → replace user/message → end.
 * No `llmStreamCall`. Idempotent on the Cursor summary fingerprint.
 */
export declare function applyCursorSummaryToSession({ session, summary, keepTail, owner, provider, model, sourceCommandId, windowTail, }?: any): {
    startSeq: any;
    summarySeq: any;
    endSeq: any;
    summary: any;
    shadowedRange: any;
    shadowedSeqs: any;
    shadowedTokenCount: any;
    sourceCommandId?: any;
    compactionId: any;
};
export declare function applySummaryFromPump(agent: any, text: any, { keepTail, windowTail, model }?: any): {
    startSeq: any;
    summarySeq: any;
    endSeq: any;
    summary: any;
    shadowedRange: any;
    shadowedSeqs: any;
    shadowedTokenCount: any;
    sourceCommandId?: any;
    compactionId: any;
};
/**
 * Checkpoint bytes always carry the last Cursor summary. Only project it
 * onto DSH when this Run asked for summarize, or interaction frames already
 * said a summary is in flight.
 */
export declare function pickCheckpointSummaryCommit({ summarySeen, summarizeKeepTail, buffer, checkpointSummary, }?: any): string;
export declare function executeCursorCompactNow(agent: any, signal: any, sourceCommandId: any): Promise<any>;
/**
 * Isolated `ctx.compaction` for the cursor-agent preset. compactIfNeeded is a
 * no-op (Cursor auto-compacts; we only observe). compactNow triggers
 * summarize_action. compactRegion is rejected.
 */
export declare function applyCursorCompaction(ctx: any): Promise<void>;
