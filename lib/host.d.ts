import { LlmAdapter } from "@deepseek-ai/dsh-llm";
export { isToolResultMessage } from "./messages.js";
export { createStreamBlocks, emitToolCall } from "./stream.js";
export { nativeFetch } from "./fetch.js";
export { name, inject, PROVIDER, CREDENTIAL_REF, CHANNEL, CURSOR_BASE_URL, CURSOR_LOGIN_URL, CURSOR_AUTH_ORIGIN, CURSOR_POLL_PATH, CURSOR_REFRESH_PATH, CURSOR_RUN_PATH, CURSOR_MODELS_PATH, CURSOR_NAME_AGENT_PATH, CURSOR_AVAILABLE_MODELS_PATH, DSH_SESSION_TITLE_FRAME_PREFIX, CURSOR_DASHBOARD_SERVICE, CURSOR_DASHBOARD_RPC, CURSOR_GET_ME_PATH, CURSOR_GET_PLAN_INFO_PATH, CURSOR_GET_CURRENT_PERIOD_USAGE_PATH, CURSOR_GET_SAND_USAGE_STATUS_PATH, USAGE_TTL_MS, CURSOR_CLIENT_VERSION, HEARTBEAT_INTERVAL_MS, STREAM_IDLE_TIMEOUT_MS, STREAM_PROGRESS_TIMEOUT_MS, SESSION_STATE_TTL_MS, MAX_TOOL_ROUNDS, DEFAULT_RETRY_COUNT, DEFAULT_RETRY_INTERVAL_MS, DEFAULT_RETRY_HTTP_STATUS_CODES, PARKED_BRIDGE_TIMEOUT_MS, SETTINGS_NAMESPACE, CURSOR_PRESET_ID, DEFAULT_REQUIRE_CURSOR_PRESET, REFRESH_AHEAD_MS, DEFAULT_TOKEN_LIFETIME_MS, DEFAULT_CONTEXT_WINDOW, DEFAULT_MAX_TOKENS, CURSOR_NATIVE_TOOL_NAMES, isCursorNativeTool, FALLBACK_MODELS, CURSOR_AGENT_DEBUG_ENV, isCursorAgentDebugEnabled, cursorAgentDebug } from "./constants.js";
export { Config, resolveCursorSettings, resolveCursorApiBaseUrl, shouldRetryHttpStatus, isSuccessfulAgentResponse, abortableDelay } from "./settings.js";
export { CursorCredentialStore, classifyCursorSecret, getTokenExpiry, readJwtExpiry, maskApiKey, buildLoginUrl, assertCursorAuthUrl, commandForCursorAuthUrl, openCursorAuthUrl, CursorAuthService, CursorLoginCoordinator, createCursorRpcHandler, createCursorRpcHttpHandler } from "./auth.js";
export { storeBlob, encodeResumeAction, encodeConversationActionMessage, encodeUserContextInjection, encodeSystemContextInjection, encodeInjectContextAction, encodeAsyncAskQuestionCompletionAction, encodeMcpToolCallStep, encodeReplayTurnBlob, appendTurnsToCheckpoint, encodeGetBlobResult, adoptBlobStore, encodeKvClientMessage, encodeSetBlobResult, encodeMcpResult, encodeExecClientMessage, encodeExecClientMessageEnvelope, encodeRequestContextResult, encodeMcpToolDefinition, encodeWriteRejected, encodeDeleteRejected, encodeWriteShellStdinError, encodeWriteShellStdinSuccess, encodeShellStreamStart, encodeShellStreamStdout, encodeShellStreamStderr, encodeOutputLocation, encodeShellStreamExit, encodeShellStreamBackgrounded, encodeShellSuccess, encodeShellFailure, encodeShellTimeout, encodeShellSpawnError, encodeShellPermissionDenied, encodeBackgroundShellSpawnSuccess, encodeBackgroundShellSpawnError, encodeReadSuccess, encodeReadError, encodeReadFileNotFound, encodeReadInvalidFile, encodeWriteSuccess, encodeWriteError, encodeInteractionResponseEnvelope, encodeExecStreamClose, encodeExecThrow, encodeAskQuestionSuccess, encodeAskQuestionResultSuccess, encodeAskQuestionResultError, encodeAskQuestionInteractionResponse, buildAskQuestionResultBytes, encodeInteractionApproved, encodeInteractionRejected, INTERACTION_UNAVAILABLE, rejectionForInteraction, normalizeCursorTodos, decodeAskQuestionInteractionQuery, decodeInteractionQuery, decodeReadArgs, decodeWriteArgs, decodeGrepArgs, decodeDeleteArgs, decodeSandboxPolicy, decodeShellArgs, decodeBackgroundShellSpawnArgs, decodeWriteShellStdinArgs, decodeConversationStateTodos, decodeConversationTokenDetails, decodeAgentServerMessage, decodeInteractionUpdate, decodeContextInjectionStateUpdate, decodeToolCallDisplay, decodeTurnEndedUpdate, projectCursorTokenUsage, decodeKvServerMessage, decodeExecServerMessage, decodeMcpArgs, decodeUsableModels, encodeNameAgentRequest, decodeNameAgentResponse, unwrapSessionTitleFrame, extractSessionTitleUserMessage } from "./wire/codec.js";
export { frameEncode, CONNECT_END_STREAM_FLAG, CONNECT_COMPRESSED_FLAG, MAX_CONNECT_FRAME_BYTES, ConnectFrameReader, AGENT_HEADERS } from "./wire/frames.js";
export { splitShellDelta, BACKGROUND_PID_MARKER, BACKGROUND_PID_PROLOGUE, createPidProbe, formatCursorTerminalHeader, formatCursorTerminalFooter, createCursorTerminalLog, parseJobIdN } from "./exec/shell.js";
export { classifyCursorSearch, encodeGrepSearchResult, searchMetaFromResult, searchResultSummary, encodeDeleteSuccess, encodeDeleteError, encodeWritePermissionDenied, encodeDeletePermissionDenied, READ_CONTENT_CHAR_CAP, readPresentationMeta, formatReadJoinText, composeReadWindow, EXEC_REPLY_FIELDS } from "./exec/search.js";
export { translateNativeExec } from "./exec/translate.js";
export { rejectionFor } from "./exec/rejection.js";
export { decodeCurrentPeriodUsage, decodeSandUsageStatus, decodeGetMe, decodeGetPlanInfo, projectCurrentPeriodUsage, projectSandUsageStatus, projectGetMe, projectGetPlanInfo, callDashboardRpc, CursorUsageReader } from "./usage.js";
export { parseEndStream, classifyCursorError, finishChunkForStreamError } from "./errors.js";
export { parseCursorWebSearchChunk, displayJoinResult, rememberDisplayCompletion, bindDisplayCallId, rendererToolArgs } from "./display.js";
export declare class AgentRun {
    #private;
    accessToken: any;
    baseUrl: any;
    session: any;
    frames: any;
    responseStatus: any;
    responseContentType: any;
    trailers: any;
    finished: any;
    originalRequestId: any;
    responsePromise: any;
    resolveResponse: any;
    rejectResponse: any;
    stream: any;
    heartbeat: any;
    constructor(accessToken: any, options?: any);
    start(): Promise<void>;
    waitForResponse(timeoutMs: any): any;
    write(payload: any): boolean;
    writeMessage(bytes: any): boolean;
    startHeartbeat(): void;
    /** Fail the run with a terminal error and tear down the connection. */
    abort(error: any): void;
    close(): void;
}
/**
 * A background frame pump owning one live AgentRun across `stream()` calls.
 *
 * The Cursor protocol expects a client whose frame-processing loop never
 * stops while the run is open: housekeeping requests (KV blobs, request
 * context, interaction approvals) must be answered as they arrive, even while
 * DSH executes a tool between two `stream()` invocations. The pump keeps
 * reading and answering for the run's whole lifetime; content frames
 * (checkpoints, updates, exec calls, question queries) are routed to the
 * consumer queue the active `stream()` drains.
 */
/**
 * Split a ShellProcess output delta on the shell service's stderr marker
 * (`\n[stderr]\n`, bash-local/src/index.ts:304). Segments before the first
 * marker are stdout; everything after is stderr (a delta may carry several
 * stderr sections — they re-join as stderr text).
 */
export declare class CursorRunPump {
    #private;
    run: any;
    persisted: any;
    sessionKey: any;
    mcpTools: any;
    parkedTimeoutMs: any;
    syncTodos: any;
    debug: any;
    shellService: any;
    jobs: any;
    terminalsFolder: any;
    sessionCwd: any;
    sandboxPolicy: any;
    agent: any;
    generationId: any;
    systemText: any;
    attachments: any;
    persistCheckpoint: any;
    summarizeKeepTail: any;
    summaryBuffer: any;
    summarySeen: any;
    injectedIds: any;
    inboxDispose: any;
    stopped: any;
    terminalError: any;
    bridge: any;
    blobStore: any;
    activityHook: any;
    consumerFrames: any;
    consumerWaiters: any;
    parkedTimer: any;
    constructor({ run, persisted, sessionKey, mcpTools, parkedTimeoutMs, syncTodos, debug, shellService, jobs, terminalsFolder, sessionCwd, sandboxPolicy, agent, systemText, generationId, attachments, persistCheckpoint }: any);
    /** The consumer side of the routed frame queue: yields frames until the run ends. */
    next(): Promise<any>;
    /** Push a frame back so the next `stream()` sees the next-round content. */
    unread(frame: any): void;
    /**
     * A stream() started consuming; cancel the parked hard cap if armed and
     * drop the previous bridge so a finished resume cannot re-arm its cap.
     */
    attach(): void;
    /**
     * A stream() stopped consuming. If a bridge with pending MCP work was
     * stored, arm the parked hard cap; it fires silently (no error replies —
     * late results are delivered through the replay path instead).
     */
    detach(): void;
    /** Stop the pump and tear the run down; idempotent, safe on any path. */
    terminate(error: any): void;
    /**
     * Mid-run steer (`user_context`) or plugin inject (`system_context`).
     * Deduped by message id so inbox events and the next `stream()` agree.
     */
    injectDshMessage(message: any): Promise<any>;
    /** Send every current-turn ingress that is not already on the wire. */
    injectTurnIngress(ingress: any, { includeUsers }?: any): Promise<void>;
    /** Live background shells admitted per session (opencodex gates these). */
    static BACKGROUND_SHELL_MAX_LIVE: number;
    /** Idle (no output activity) and absolute lifetime for one background shell. */
    static BACKGROUND_SHELL_IDLE_MS: number;
    static BACKGROUND_SHELL_ABSOLUTE_MS: number;
}
/** DSH system slot plus any system-role history messages. */
export declare function collectDshSystemText(options: any): string;
/**
 * Split the current DSH turn (after the last assistant) into human steers
 * and plugin injects. Tool-result cards are neither.
 */
export declare function classifyTurnIngress(options: any): {
    users: any[];
    injections: any[];
    systemText: string;
};
/**
 * Local DSH tool-call ids are display/match keys only: the wire result
 * frames are matched by exec id and never echo the toolCallId. Cursor's ids
 * embed a literal "\n" (`call-<uuid>-<n>\nfc_oz..._<m>`) which breaks the UI
 * pairing, and the StrReplace flow reuses ONE id for the probe read and its
 * write — so sanitize, then de-duplicate per conversation via `used`.
 */
export declare function allocateLocalToolCallId(raw: any, used: any): string;
/**
 * Split a parked exec batch into those this resume can answer and those
 * still running. A half-delivered DSH step used to fake-fail the missing
 * ids (`Tool result not provided` / `spawn failed`) and stream_close them,
 * which left the server waiting on a closed exec.
 */
export declare function partitionPendingExecs(pendingExecs: any, toolResults: any): {
    ready: any[];
    leftover: any[];
};
/**
 * Recover Cursor models that print tool-call XML as text instead of emitting
 * an execServerMessage.mcpArgs frame. This is a fallback for contaminated or
 * compacted conversations; protocol-native MCP calls remain the primary path.
 */
export declare function parseTextToolCalls(text: any, tools: any): any[];
/**
 * Build a fresh state with no root prompt blobs. Current Cursor servers reject
 * hand-encoded field-8 turns; the SDK likewise starts from an empty
 * ConversationStateStructure plus only this send's text/images.
 *
 * The client system prompt slot (root_prompt_messages_json) REPLACES Cursor's
 * built-in agent prompt — there is no append mode (Cursor SDK semantics). The
 * DSH system text is therefore NOT sent through that slot: it is uploaded as
 * an always-apply RequestContext rule (`dsh://system-prompt`). Workspace
 * AGENTS.md files use the same rules channel. Mid-turn plugin injects use
 * InjectContextAction.system_context, not a user-message wrapper.
 */
export declare function buildInitialConversationState(options: any): {
    conversationState: any;
    blobStore: Map<any, any>;
    systemText: string;
};
/**
 * Fold DSH history into Cursor's turn-based conversation state.
 *
 * The last user message becomes the new `ConversationAction`; everything
 * before it is the durable turn history. Tool results are rendered as user
 * messages so a follow-up run after DSH executes a tool carries the result
 * back to the model. The system prompt travels as a blob referenced by
 * `rootPromptMessagesJson`; the server fetches it through the KV handshake.
 */
export declare function buildConversationState(options: any): {
    conversationState: any;
    action: any;
    blobStore: Map<any, any>;
    systemText: string;
};
/**
 * Build the full `AgentClientMessage` payload for one run.
 *
 * When a persisted checkpoint for this conversation exists (captured from a
 * previous run's `conversation_checkpoint_update`), it becomes the
 * conversation state and its referenced blobs are served from the persisted
 * blob store. Otherwise the state is built from the DSH message history.
 */
export declare function buildRunPayload(options: any, modelId: any, persisted: any, conversationId?: any): {
    payload: Uint8Array<ArrayBuffer>;
    blobStore: any;
    systemText: string;
    injections: any[];
    users: any[];
};
/**
 * Build a run payload with a prebuilt conversation state and a non-default
 * action (async ask-question completion, resume-with-replay). The blob store
 * is the caller's (checkpoint blobs + any replayed turn blobs).
 */
export declare function buildCustomRunPayload({ conversationState, actionBytes, modelId, conversationId, blobStore, requestedModel, runId }: any): {
    payload: Uint8Array<ArrayBuffer>;
    blobStore: any;
};
/**
 * Fetch usable models from Cursor's unary `GetUsableModels` endpoint.
 * The request body is the raw (unframed) empty protobuf message.
 */
export declare function fetchUsableModels(accessToken: any, options?: any): Promise<any>;
/**
 * Fetch the parameterized catalog from `aiserver.v1.AiService/AvailableModels`.
 * Uses the same access token as GetUsableModels (OAuth or API-key exchange).
 */
export declare function fetchAvailableModels(accessToken: any, options?: any): Promise<any>;
/**
 * Ask Cursor to name a session from the first user message.
 * Unary `agent.v1.AgentService/NameAgent`, same auth as GetUsableModels.
 * @throws {Error} when the HTTP status is not 2xx, the body is empty, or neither a raw nor Connect-framed payload yields a name.
 */
export declare function fetchNameAgent(accessToken: any, userMessage: any, options?: any): Promise<any>;
export declare class CursorAdapter extends LlmAdapter {
    #private;
    auth: any;
    fetchModels: any;
    fetchAvailableModels: any;
    nameAgent: any;
    fallbackModels: any;
    idleTimeoutMs: any;
    progressTimeoutMs: any;
    idleCheckIntervalMs: any;
    modelsCacheTtlMs: any;
    sessionStateTtlMs: any;
    settings: any;
    createAgentRun: any;
    sleep: any;
    now: any;
    gate: any;
    syncTodos: any;
    logger: any;
    shellService: any;
    terminalsRoot: any;
    agents: any;
    agent: any;
    sandboxPolicy: any;
    jobs: any;
    attachments: any;
    checkpointStore: any;
    publishSessionEvent: any;
    sessions: any;
    modelsCache: any;
    availableModelsCache: any;
    constructor(options: any);
    invalidateDiscovery(): void;
    providerInfo(provider: any): {
        id: any;
        name: string;
    };
    listModels(provider: any): Promise<any>;
    /** RPC-facing model listing; `force` bypasses the discovery cache. */
    listModelsForRpc({ force, signal }?: any): Promise<any>;
    resolveModel(provider: any, model: any, _signal?: any): Promise<any>;
    /**
     * Idle `/compact`: a summarize_action Run (or a live-run write) that
     * collects Cursor's summary text. Pump write-back is the DSH bracket.
     */
    summarizeConversation({ sessionId, model, signal }?: any): Promise<{
        summary: string;
    }>;
    stream(options: any): AsyncGenerator<any>;
}
export declare function apply(ctx: any, config?: any): Promise<void>;
