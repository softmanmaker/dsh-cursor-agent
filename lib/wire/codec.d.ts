export declare function encodeUserMessage({ text, messageId, images }: any): any;
export declare function encodeAssistantMessage(text: any): any;
/** ConversationStep { assistant_message = 1 } */
export declare function encodeAssistantStep(text: any): any;
/** AgentConversationTurnStructure { user_message = 1, steps = 2 } */
export declare function encodeAgentTurn(userBytes: any, stepBytes: any): any;
/** ConversationTurnStructure { agent_conversation_turn = 1 } */
export declare function encodeTurnStructure(turnBytes: any): any;
/** ModelDetails { model_id = 1, display_model_id = 3, display_name = 4 } */
export declare function encodeModelDetails(modelId: any): any;
/** ConversationAction { user_message_action = 1 } → UserMessageAction { user_message = 1 } */
export declare function encodeUserMessageAction(userBytes: any): any;
/** ConversationStateStructure — the durable conversation payload. */
export declare function encodeConversationState({ rootPromptBlobIds, turns }: any): any;
/** AgentRunRequest { conversation_state=1, action=2, model_details=3, requested_model=9, conversation_id=5, run_id=25 }.
 * Cursor CLI sends exactly one of `requested_model` or `model_details`. When
 * both are present the server validates `model_details.model_id` against the
 * exploded usable-model slugs and rejects canonical ids like `grok-4.6`.
 * `run_id` is the client-minted generation UUID that `InjectContextAction.expected_run_id` must match. */
export declare function encodeRunRequest({ conversationState, action, modelDetails, conversationId, requestedModel, runId }: any): Uint8Array<ArrayBuffer>;
/** AgentClientMessage { run_request = 1 } */
export declare function encodeRunMessage(runRequestBytes: any): Uint8Array<ArrayBuffer>;
/**
 * Store a client-side blob under its SHA-256 id and return the id bytes.
 * Cursor's KV handshake fetches blobs by exactly the ids embedded in
 * `ConversationStateStructure.turns` entries, so the id must be reproducible.
 */
export declare function storeBlob(blobStore: any, data: any): Uint8Array<ArrayBuffer>;
/**
 * ConversationAction { resume_action = 2 } — resume a conversation from its
 * checkpoint without a new user message.
 */
export declare function encodeResumeAction(): any;
/** AgentClientMessage { conversation_action = 4 } — mid-run steer / inject. */
export declare function encodeConversationActionMessage(actionBytes: any): Uint8Array<ArrayBuffer>;
/** UserContextInjection { user_message = 1 } */
export declare function encodeUserContextInjection({ text, messageId, images }: any): any;
/** SystemContextInjection { producer = 1, content = 2 } */
export declare function encodeSystemContextInjection({ producer, content }: any): any;
/**
 * ConversationAction { inject_context_action = 19 }
 * InjectContextAction { injection_id=1, expected_run_id=2, user_context=3 | system_context=4 }
 */
export declare function encodeInjectContextAction({ injectionId, expectedRunId, userContext, systemContext }: any): any;
/**
 * ConversationAction { async_ask_question_completion_action = 8 }
 * AsyncAskQuestionCompletionAction { original_tool_call_id=1, original_args=2,
 * result=3 } — the protocol-native way to deliver a question answer after the
 * original run is gone ("Contains the original tool call ID and the result
 * from the user").
 */
export declare function encodeAsyncAskQuestionCompletionAction({ originalToolCallId, originalArgsBytes, resultBytes }: any): Uint8Array<ArrayBuffer>;
/**
 * ConversationStep { tool_call = 2 } with the MCP variant
 * (ToolCall { mcp_tool_call = 15 } → McpToolCall { args=1, result=2 }).
 * `argsBytes` is the raw McpArgs captured from the exec frame; `resultBytes`
 * is a McpToolResult (McpSuccess/McpError).
 */
export declare function encodeMcpToolCallStep(argsBytes: any, resultBytes: any): Uint8Array<ArrayBuffer>;
/**
 * Build one replayed turn whose steps carry paired tool calls + results, and
 * return the blob id to append to `ConversationStateStructure.turns` (field 8).
 * Wire chain: turns entry = blob id of ConversationTurnStructure {
 * agent_conversation_turn = 1 { user_message = 1 (blob id), steps = 2 (blob ids) } }.
 */
export declare function encodeReplayTurnBlob(blobStore: any, { userText, stepBlobs }: {
    userText?: string;
    stepBlobs?: any[];
}): Uint8Array<ArrayBuffer>;
/**
 * Append replayed turn blob ids to a server checkpoint byte-for-byte:
 * every field is re-emitted verbatim except field 8 (turns), which gains the
 * new ids at the end. This preserves todos/fileStates/pendingToolCalls exactly
 * while adding the turns that pair pending calls with their late results.
 */
export declare function appendTurnsToCheckpoint(checkpointBytes: any, turnBlobIds: any): Uint8Array<ArrayBuffer>;
/** AgentClientMessage { client_heartbeat = 7 } */
export declare function encodeHeartbeat(): any;
/**
 * KvClientMessage { id=1, get_blob_result=2 { blob_data=1 } }.
 * A miss must omit `blob_data` (opencodex / official client): encoding an
 * empty bytes field looks like a hit with a 0-byte payload, and the server
 * then tries to decode that as a conversation turn and stalls on heartbeats.
 */
export declare function encodeGetBlobResult(id: any, blobData: any): Uint8Array<ArrayBuffer>;
/**
 * Fold `source` into `target` and return the surviving map. Request-time
 * blobs (user/turn ids minted by `storeBlob`) and server `setBlob` writes
 * must share one map: a resume that swaps in a snapshot missing the
 * request-time ids answers getBlob with a miss and the Run heartbeats
 * until the progress timeout.
 */
export declare function adoptBlobStore(target: any, source: any): any;
/** AgentClientMessage { kv_client_message = 3 } */
export declare function encodeKvClientMessage(kvBytes: any): Uint8Array<ArrayBuffer>;
/** KvClientMessage { id=1, set_blob_result=3 } — acknowledge a server blob write. */
export declare function encodeSetBlobResult(id: any): Uint8Array<ArrayBuffer>;
/** McpResult.success with one text content item. */
export declare function encodeMcpResult({ content, isError }: any): Uint8Array<ArrayBuffer>;
/** ExecClientMessage { id=1, exec_id=15, message=... } */
export declare function encodeExecClientMessage(id: any, execId: any, messageField: any, messageBytes: any): Uint8Array<ArrayBuffer>;
/** AgentClientMessage { exec_client_message = 2 } */
export declare function encodeExecClientMessageEnvelope(execBytes: any): Uint8Array<ArrayBuffer>;
/** RequestContextResult { success=1 { request_context=1 } } with tools and Cursor rules. */
export declare function encodeRequestContextResult(tools: any, rules?: any[]): Uint8Array<ArrayBuffer>;
/** McpToolDefinition { name=1, description=2, input_schema=3, provider_identifier=4, tool_name=5 } */
export declare function encodeMcpToolDefinition({ name, description, inputSchema, providerIdentifier, toolName }: any): Uint8Array<ArrayBuffer>;
export declare function encodeMcpError(error: any): Uint8Array<ArrayBuffer>;
/** ReadResult { rejected=3 { path=1, reason=2 } } */
export declare function encodeReadRejected(path: any, reason: any): Uint8Array<ArrayBuffer>;
/** LsResult { rejected=3 { path=1, reason=2 } } */
export declare function encodeLsRejected(path: any, reason: any): Uint8Array<ArrayBuffer>;
/** GrepResult { error=2 { error=1 } } */
export declare function encodeGrepError(error: any): Uint8Array<ArrayBuffer>;
/** WriteRejected { path=1, reason=2 } → WriteResult { rejected = 6 } — the user said no to the escalation prompt (oneof: success=1, permission_denied=3, no_space=4, error=5, rejected=6). */
export declare function encodeWriteRejected({ path, reason }: any): Uint8Array<ArrayBuffer>;
/** DeleteRejected { path=1, reason=2 } → DeleteResult { rejected = 6 } (oneof: success=1, file_not_found=2, not_file=3, permission_denied=4, file_busy=5, rejected=6). */
export declare function encodeDeleteRejected({ path, reason }: any): Uint8Array<ArrayBuffer>;
/** ShellResult { rejected = 4 } (oneof: success=1, failure=2, timeout=3, rejected=4) */
export declare function encodeShellRejectedResult(command: any, workingDirectory: any, reason: any): Uint8Array<ArrayBuffer>;
/**
 * ShellStream { rejected = 5 } — the reply type for `shellStreamArgs` execs
 * (streaming shell), carried by ExecClientMessage.shell_stream (field 14).
 */
export declare function encodeShellStreamRejected(command: any, workingDirectory: any, reason: any): Uint8Array<ArrayBuffer>;
/** BackgroundShellSpawnResult { rejected = 3 } (oneof: success=1, error=2, rejected=3, permission_denied=4) */
export declare function encodeBackgroundShellRejectedResult(command: any, workingDirectory: any, reason: any): Uint8Array<ArrayBuffer>;
/** FetchResult { error=2 { url=1, error=2 } } */
export declare function encodeFetchError(url: any, error: any): Uint8Array<ArrayBuffer>;
/** WriteShellStdinResult { error=2 { error=1 } } */
export declare function encodeWriteShellStdinError(error: any): Uint8Array<ArrayBuffer>;
/** WriteShellStdinSuccess { shell_id=1, terminal_file_length_before_input_written=2 } → WriteShellStdinResult { success=1 } */
export declare function encodeWriteShellStdinSuccess({ shellId, terminalFileLengthBeforeInputWritten }: any): Uint8Array<ArrayBuffer>;
/**
 * ShellStream { event oneof: stdout=1, stderr=2, exit=3, start=4 } — the
 * field-14 payload streamed for `shellStreamArgs` execs. The frame sequence
 * contract (confirmed by oh-my-pi and opencodex): start → stdout/stderr
 * deltas → exit, then the final structured shellResult (field 2) + stream
 * close. Missing the last two frames leaves the server-side turn pending
 * forever (heartbeat stall → upstream watchdog → 502).
 */
export declare function encodeShellStreamStart(sandboxPolicyType: any): Uint8Array<ArrayBuffer>;
export declare function encodeShellStreamStdout(data: any): Uint8Array<ArrayBuffer>;
export declare function encodeShellStreamStderr(data: any): Uint8Array<ArrayBuffer>;
/** OutputLocation { file_path=1, size_bytes=2, line_count=3 } */
export declare function encodeOutputLocation({ filePath, sizeBytes, lineCount }: any): Uint8Array<ArrayBuffer>;
/** ShellStreamExit { code=1, cwd=2, output_location=3, aborted=4 } */
export declare function encodeShellStreamExit({ code, cwd, aborted, outputLocation }: any): Uint8Array<ArrayBuffer>;
/**
 * ShellStreamBackgrounded { shell_id=1, command=2, working_directory=3,
 * pid=4, ms_to_wait=5, reason=6 } → ShellStream { backgrounded=7 } — the
 * block deadline expired with timeout_behavior=BACKGROUND: the command keeps
 * running and the model monitors the terminal file.
 */
export declare function encodeShellStreamBackgrounded({ shellId, command, workingDirectory, pid, msToWait, reason }: any): Uint8Array<ArrayBuffer>;
/** ShellSuccess { command=1, working_directory=2, exit_code=3, signal=4, stdout=5, stderr=6, execution_time=7, shell_id=9, ms_to_wait=12 } */
export declare function encodeShellSuccess({ command, workingDirectory, exitCode, stdout, stderr, executionTime, terminalsFolder, isBackground, pid, shellId, msToWait }: any): Uint8Array<ArrayBuffer>;
/** ShellFailure { command=1, working_directory=2, exit_code=3, signal=4, stdout=5, stderr=6, execution_time=7, aborted=11 } */
export declare function encodeShellFailure({ command, workingDirectory, exitCode, stdout, stderr, executionTime, aborted, terminalsFolder, isBackground, pid }: any): Uint8Array<ArrayBuffer>;
/** ShellTimeout { command=1, working_directory=2, timeout_ms=3 } → ShellResult { timeout=3 } */
export declare function encodeShellTimeout({ command, workingDirectory, timeoutMs }: any): Uint8Array<ArrayBuffer>;
/** ShellSpawnError { command=1, working_directory=2, error=3 } → ShellResult { spawn_error=5 } */
export declare function encodeShellSpawnError({ command, workingDirectory, error }: any): Uint8Array<ArrayBuffer>;
/** ShellPermissionDenied { command=1, working_directory=2, error=3, is_readonly=4 } → ShellResult { permission_denied=7 } */
export declare function encodeShellPermissionDenied({ command, workingDirectory, error, isReadonly }: any): Uint8Array<ArrayBuffer>;
/** BackgroundShellSpawnSuccess { shell_id=1, command=2, working_directory=3, pid=4 opt } → BackgroundShellSpawnResult { success=1 } */
export declare function encodeBackgroundShellSpawnSuccess({ shellId, command, workingDirectory, pid }: any): Uint8Array<ArrayBuffer>;
/** BackgroundShellSpawnError { command=1, working_directory=2, error=3 } → BackgroundShellSpawnResult { error=2 } */
export declare function encodeBackgroundShellSpawnError({ command, workingDirectory, error }: any): Uint8Array<ArrayBuffer>;
/** DiagnosticsResult { success = 1 } — empty success keeps the exec well-formed. */
export declare function encodeDiagnosticsResult(): Uint8Array<ArrayBuffer>;
/** ReadResult { success=1 ReadSuccess } — the full field-7 payload. */
export declare function encodeReadSuccess(args: any): Uint8Array<ArrayBuffer>;
export declare function encodeReadError(args: any): Uint8Array<ArrayBuffer>;
export declare function encodeReadFileNotFound(args: any): Uint8Array<ArrayBuffer>;
export declare function encodeReadInvalidFile(args: any): Uint8Array<ArrayBuffer>;
/** WriteResult { success=1 WriteSuccess } — the full field-3 payload. */
export declare function encodeWriteSuccess(args: any): Uint8Array<ArrayBuffer>;
export declare function encodeWriteError(args: any): Uint8Array<ArrayBuffer>;
/** GrepContentResult { matches=1 repeated, total_lines=2, total_matched_lines=3, client_truncated=4, ripgrep_truncated=5, offset_applied=7 opt } */
export declare function encodeGrepContentResult({ matches, totalLines, totalMatchedLines, clientTruncated, ripgrepTruncated, offsetApplied }: any): Uint8Array<ArrayBuffer>;
/** GrepCountResult { counts=1 repeated, total_files=2, total_matches=3, client_truncated=4, ripgrep_truncated=5, offset_applied=7 opt } */
export declare function encodeGrepCountResult({ counts, totalFiles, totalMatches, clientTruncated, ripgrepTruncated, offsetApplied }: any): Uint8Array<ArrayBuffer>;
/** GrepFilesResult { files=1 repeated, total_files=2, client_truncated=3, ripgrep_truncated=4, offset_applied=6 opt } */
export declare function encodeGrepFilesResult({ files, totalFiles, clientTruncated, ripgrepTruncated, offsetApplied }: any): Uint8Array<ArrayBuffer>;
/**
 * GrepSuccess { pattern=1, path=2, output_mode=3, workspace_results=4
 * MAP<string, GrepUnionResult> — each map entry is { key=1 string, value=2
 * GrepUnionResult { count=1 | files=2 | content=3 } }, active_editor_result=5 }
 * wrapped in GrepResult { success=1 | error=2 }.
 *
 * A bare union submessage at field 4 decodes as a map entry with neither key
 * nor value: the server sees an empty result and the model re-asks until the
 * turn stalls (the observed grep/glob hang). Real clients key the map by the
 * search path (oh-my-pi: `args.path || "."`).
 */
export declare function encodeGrepSuccessResult({ pattern, path, outputMode, unionBytes }: any): Uint8Array<ArrayBuffer>;
export declare function encodeGrepErrorResult(error: any): Uint8Array<ArrayBuffer>;
/**
 * Classify a Cursor GrepArgs frame: a glob-shaped call (empty pattern +
 * files_with_matches + glob) becomes the DSH `glob` card; everything else
 * stays `grep`. Display args keep Cursor keys (`glob`, not official `include`).
 */
export declare function encodeInteractionResponseEnvelope(responseBytes: any): Uint8Array<ArrayBuffer>;
/**
 * AgentClientMessage { exec_client_control_message = 5 } →
 * ExecClientControlMessage { stream_close = 1 } → ExecClientStreamClose { id = 1 }.
 * The server waits for this close after every exec result before continuing
 * the run (CCursor execRuntime: waitForExecClientMessageWithHeartbeat then
 * waitForExecStreamCloseWithHeartbeat).
 */
export declare function encodeExecStreamClose(id: any): Uint8Array<ArrayBuffer>;
/**
 * AgentClientMessage { exec_client_control_message = 5 { throw = 2
 * ExecClientThrow { id=1, error=2, stack_trace=3, error_code=4 } } } — the
 * protocol's in-band failure channel for an exec frame this client cannot
 * answer at all (opencodex T05): the server unblocks with a known failure
 * instead of waiting forever on silence.
 */
export declare function encodeExecThrow(id: any, error: any, errorCode: any): Uint8Array<ArrayBuffer>;
/** AskQuestionSuccess { answers=1 repeated } */
export declare function encodeAskQuestionSuccess(answers: any): Uint8Array<ArrayBuffer>;
/** AskQuestionResult { success=1 | error=2 { error_message=1 } | rejected=3 { reason=1 } } */
export declare function encodeAskQuestionResultSuccess(answers: any): Uint8Array<ArrayBuffer>;
export declare function encodeAskQuestionResultError(message: any): Uint8Array<ArrayBuffer>;
/**
 * InteractionResponse { id=1, ask_question_interaction_response=3
 * { result=1 AskQuestionResult } }.
 */
export declare function encodeAskQuestionInteractionResponse({ id, resultBytes }: any): Uint8Array<ArrayBuffer>;
/**
 * Build the AskQuestionResult bytes from a DSH ask_user_question tool result.
 *
 * The DSH result text is `JSON.stringify({ answers: [{ id, selected: [label],
 * custom? }] })`; option picks carry LABELS and are reverse-mapped onto the
 * Cursor option ids. Duplicate labels resolve to the first option id.
 */
export declare function buildAskQuestionResultBytes(questions: any, result: any): Uint8Array<ArrayBuffer>;
/**
 * InteractionResponse { id=1, <field> { approved=1 {} } } for the
 * webFetch/webSearch approval handshakes (the server performs the work
 * itself after the client approves).
 */
export declare function encodeInteractionApproved(id: any, field: any): Uint8Array<ArrayBuffer>;
/** InteractionResponse { id=1, <field> { rejected=2 { reason=1 } } }. */
export declare function encodeInteractionRejected(id: any, field: any, reason: any): Uint8Array<ArrayBuffer>;
/** Message shown for interaction queries that have no DSH counterpart. */
export declare const INTERACTION_UNAVAILABLE = "Not available in DeepSeek Harness.";
/**
 * Build the in-band rejection reply for interaction queries beyond
 * askQuestion/webFetch/webSearch. Returns undefined for query kinds without a
 * rejection variant (setupVmEnvironmentArgs — today's behavior is the same
 * hang these all had before the bridge, documented limitation).
 */
export declare function rejectionForInteraction(query: any): {
    field: number;
    payload: Uint8Array<ArrayBuffer>;
};
/**
 * Map one Cursor todo item onto the DSH todo shape ({content, status});
 * UNSPECIFIED/CANCELLED items are dropped (DSH has no cancelled state).
 */
export declare function normalizeCursorTodos(items: any): any[];
/** AskQuestionInteractionQuery { args=1 AskQuestionArgs, tool_call_id=2 } */
export declare function decodeAskQuestionInteractionQuery(bytes: any): any;
/**
 * InteractionQuery { id=1, oneof: web_search=2, ask_question=3, switch_mode=4,
 * create_plan=7, setup_vm=8, web_fetch=9, pr_management=10, mcp_auth=11,
 * generate_image=12, replace_env=13, connect_scm=14 }.
 */
export declare function decodeInteractionQuery(bytes: any): any;
/** ReadArgs { path=1, tool_call_id=2, offset=4 int32, limit=5 uint32, encoding_hint=6 } */
export declare function decodeReadArgs(bytes: any): any;
/** WriteArgs { path=1, file_text=2, tool_call_id=3, return_file_content_after_write=4, file_bytes=5, encoding_hint=6 } */
export declare function decodeWriteArgs(bytes: any): any;
/** GrepArgs { pattern=1, path=2, glob=3, output_mode=4, case_insensitive=8, type=9, tool_call_id=14, offset=16, ... } */
export declare function decodeGrepArgs(bytes: any): any;
/** DeleteArgs { path=1, tool_call_id=2 } */
export declare function decodeDeleteArgs(bytes: any): any;
/** SandboxPolicy { type=1 int32, network_access=2 bool, additional_readwrite_paths=3 repeated string, block_git_writes=6 bool } — the shell frame's policy request. */
export declare function decodeSandboxPolicy(bytes: any): any;
/** ShellArgs { command=1, working_directory=2, timeout=3 (MILLISECONDS), tool_call_id=4, requested_sandbox_policy=9, is_background=11, skip_approval=12, timeout_behavior=13 (0=UNSPECIFIED/1=CANCEL/2=BACKGROUND), hard_timeout=14, description=15 } — the streaming shell channel. */
export declare function decodeShellArgs(bytes: any): any;
/** BackgroundShellSpawnArgs { command=1, working_directory=2, tool_call_id=3, sandbox_policy=5, enable_write_shell_stdin_tool=6 } */
export declare function decodeBackgroundShellSpawnArgs(bytes: any): any;
/** WriteShellStdinArgs { shell_id=1, chars=2 } */
export declare function decodeWriteShellStdinArgs(bytes: any): any;
/**
 * ConversationStateStructure.todos (field 3, repeated bytes): each entry is a
 * JSON-serialized Cursor todo item ({id?, content, status, ...}).
 * @returns { present: boolean, items: object[] } — `present` distinguishes an
 * absent todos field (the model never wrote todos) from an empty list.
 */
export declare function decodeConversationStateTodos(bytes: any): any;
/**
 * ConversationStateStructure.token_details (field 5): Cursor's own context
 * meter (`used_tokens` / `max_tokens`). Present on checkpoint frames.
 */
export declare function decodeConversationTokenDetails(bytes: any): any;
/** AgentServerMessage { interaction_update=1, exec_server_message=2, conversation_checkpoint_update=3, ... } */
export declare function decodeAgentServerMessage(bytes: any): any;
/** InteractionUpdate { text_delta=1, thinking_delta=4, token_delta=8, turn_ended=14, ... } */
export declare function decodeInteractionUpdate(bytes: any): any;
/** ContextInjectionStateUpdate { injection_id=1, state=2 } */
export declare function decodeContextInjectionStateUpdate(bytes: any): any;
/**
 * ToolCallCompletedUpdate / ToolCallStartedUpdate { call_id=1, tool_call=2
 * ToolCall, model_call_id=3 } — the DISPLAY frames for server-resolved tools.
 * Decodes the tool-call union cases the DSH renderers mirror: update_todos=9,
 * read_todos=10, web_search_tool_call=18, fetch_tool_call=24,
 * web_fetch_tool_call=37. Unknown cases return undefined (dropped).
 */
export declare function decodeToolCallDisplay(bytes: any): any;
/**
 * TurnEndedUpdate { input_tokens=1, output_tokens=2, cache_read_tokens=3,
 * cache_write_tokens=4, reasoning_tokens=5 } — all optional int64.
 */
export declare function decodeTurnEndedUpdate(bytes: any): any;
/**
 * Project Cursor's per-turn / checkpoint token fields onto DSH TokenUsage.
 *
 * DSH occupancy is `input + cacheRead + cacheWrite` of the last sample, then
 * plus the assistant surface of this step (`projectedTokens`). Cursor's own
 * meter is checkpoint `token_details.used_tokens` (post-response context).
 * Using `turn_ended`'s billed prompt+cache as the sample overcounts: cache
 * write often overlaps the prompt, and DSH then adds this step's assistant
 * on top. When `used_tokens` is present, the sample is that gauge minus this
 * step's output so the host projection lands back near Cursor's meter.
 */
export declare function projectCursorTokenUsage({ turnEnded, outputTokens, tokenDetails }?: any): any;
/** KvServerMessage { id=1, get_blob_args=2 { blob_id=1 } | set_blob_args=3 { blob_id=1, blob_data=2 } } */
export declare function decodeKvServerMessage(bytes: any): any;
/** ExecServerMessage { id=1, exec_id=15, request_context_args=10, mcp_args=11, ... } */
export declare function decodeExecServerMessage(bytes: any): any;
/** McpArgs { name=1, args=2 (map<string,bytes>), tool_call_id=3, provider_identifier=4, tool_name=5 } */
export declare function decodeMcpArgs(bytes: any): any;
/** GetUsableModelsResponse { models = 1: repeated ModelDetails } */
export declare function decodeUsableModels(bytes: any): any;
/** NameAgentRequest { string user_message = 1 } */
export declare function encodeNameAgentRequest(userMessage: any): any;
/** NameAgentResponse { string name = 1 } */
export declare function decodeNameAgentResponse(bytes: any): any;
/**
 * Pull the first human `text` out of a DSH session-title-llm framed prompt,
 * or return the raw text when the caller did not frame it.
 */
export declare function unwrapSessionTitleFrame(text: any): any;
/** First non-empty user text from a title GenerateOptions, unwrapped if framed. */
export declare function extractSessionTitleUserMessage(options: any): any;
