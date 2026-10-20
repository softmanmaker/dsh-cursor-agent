import { dshHomePath } from "@deepseek-ai/dsh-home-paths";
import { LlmAdapter, LlmError, ToolCallId } from "@deepseek-ai/dsh-llm";
import { createHash, randomUUID } from "node:crypto";
import node_os from "node:os";
import { join } from "node:path";
import node_http2 from "node:http2";
import { decodeValue, encodeValue } from "./proto.js";
import { catalogFromAvailableModels, decodeAvailableModels, encodeAvailableModelsRequest, encodeRequestedModel, inputModalitiesFromCatalog, reasoningFromCatalogEntry, resolveCursorModelSelection } from "./models.js";
import { execDelete, execRead, execSearch, execWrite, noteProbeRead, pumpCursorShell, startCursorShell, takeProbeRead, worldFromAgent } from "./exec-plane.js";
import { failCursorJoin, openCursorJoin, settleCursorJoin } from "./joins.js";
import { registerCursorShims } from "./shims.js";
import { collectCursorRules, mergeDshSystemRule } from "./rules.js";
import { collectImageBlocks, contentHasImages, formatImageReadJoinText, resolveSelectedImages } from "./images.js";
import { CHECKPOINT_OBJECTS_SEGMENTS, createCheckpointStore, createLocalObjectStore } from "./checkpoint-store.js";
import { CURSOR_CHECKPOINT_SCHEMA_VERSION, appendCursorCheckpointEvent, listCursorCheckpointEvents, pickCursorCheckpointEvent } from "./checkpoint-log.js";
import { flattenBlocks, injectionProducer, isInjectionMessage, isToolResultMessage, toolResultsOf } from "./messages.js";
import { ACP_SYSTEM_SECTION, applyCursorCompaction, applySummaryFromPump, decodeConversationStateSummary, encodeSummarizeAction, isDeniedCursorMcpTool, pickCheckpointSummaryCommit, registerCursorSummarize, shouldDropCursorInject } from "./compaction.js";
import { createStreamBlocks, emitToolCall } from "./stream.js";
import { nativeFetch } from "./fetch.js";
import { CHANNEL, CREDENTIAL_REF, CURSOR_AGENT_DEBUG_ENV, CURSOR_AUTH_ORIGIN, CURSOR_AVAILABLE_MODELS_PATH, CURSOR_BASE_URL, CURSOR_CLIENT_VERSION, CURSOR_DASHBOARD_RPC, CURSOR_DASHBOARD_SERVICE, CURSOR_GET_CURRENT_PERIOD_USAGE_PATH, CURSOR_GET_ME_PATH, CURSOR_GET_PLAN_INFO_PATH, CURSOR_GET_SAND_USAGE_STATUS_PATH, CURSOR_LOGIN_URL, CURSOR_MODELS_PATH, CURSOR_NAME_AGENT_PATH, CURSOR_NATIVE_TOOL_NAMES, CURSOR_POLL_PATH, CURSOR_PRESET_ID, CURSOR_REFRESH_PATH, CURSOR_RUN_PATH, DEFAULT_CONTEXT_WINDOW, DEFAULT_MAX_TOKENS, DEFAULT_REQUIRE_CURSOR_PRESET, DEFAULT_RETRY_COUNT, DEFAULT_RETRY_HTTP_STATUS_CODES, DEFAULT_RETRY_INTERVAL_MS, DEFAULT_TOKEN_LIFETIME_MS, DSH_SESSION_TITLE_FRAME_PREFIX, FALLBACK_MODELS, HEARTBEAT_INTERVAL_MS, MAX_TOOL_ROUNDS, PARKED_BRIDGE_TIMEOUT_MS, PROVIDER, REFRESH_AHEAD_MS, SESSION_STATE_TTL_MS, SETTINGS_NAMESPACE, STREAM_IDLE_TIMEOUT_MS, STREAM_PROGRESS_TIMEOUT_MS, USAGE_TTL_MS, cursorAgentDebug, inject, isCursorAgentDebugEnabled, isCursorNativeTool, name as external_constants_js_name } from "./constants.js";
import { Config, abortableDelay, isSuccessfulAgentResponse, resolveCursorApiBaseUrl, resolveCursorSettings, shouldRetryHttpStatus } from "./settings.js";
import { CursorAuthService, CursorCredentialStore, CursorLoginCoordinator, assertCursorAuthUrl, buildLoginUrl, classifyCursorSecret, commandForCursorAuthUrl, createCursorRpcHandler, createCursorRpcHttpHandler, getTokenExpiry, maskApiKey, openCursorAuthUrl, readJwtExpiry } from "./auth.js";
import { INTERACTION_UNAVAILABLE, adoptBlobStore, appendTurnsToCheckpoint, buildAskQuestionResultBytes, decodeAgentServerMessage, decodeAskQuestionInteractionQuery, decodeBackgroundShellSpawnArgs, decodeContextInjectionStateUpdate, decodeConversationStateTodos, decodeConversationTokenDetails, decodeDeleteArgs, decodeExecServerMessage, decodeGrepArgs, decodeInteractionQuery, decodeInteractionUpdate, decodeKvServerMessage, decodeMcpArgs, decodeNameAgentResponse, decodeReadArgs, decodeSandboxPolicy, decodeShellArgs, decodeToolCallDisplay, decodeTurnEndedUpdate, decodeUsableModels, decodeWriteArgs, decodeWriteShellStdinArgs, encodeAgentTurn, encodeAskQuestionInteractionResponse, encodeAskQuestionResultError, encodeAskQuestionResultSuccess, encodeAskQuestionSuccess, encodeAssistantStep, encodeAsyncAskQuestionCompletionAction, encodeBackgroundShellSpawnError, encodeBackgroundShellSpawnSuccess, encodeConversationActionMessage, encodeConversationState, encodeDeleteRejected, encodeExecClientMessage, encodeExecClientMessageEnvelope, encodeExecStreamClose, encodeExecThrow, encodeGetBlobResult, encodeHeartbeat, encodeInjectContextAction, encodeInteractionApproved, encodeInteractionRejected, encodeInteractionResponseEnvelope, encodeKvClientMessage, encodeMcpResult, encodeMcpToolCallStep, encodeMcpToolDefinition, encodeModelDetails, encodeNameAgentRequest, encodeOutputLocation, encodeReadError, encodeReadFileNotFound, encodeReadInvalidFile, encodeReadSuccess, encodeReplayTurnBlob, encodeRequestContextResult, encodeResumeAction, encodeRunMessage, encodeRunRequest, encodeSetBlobResult, encodeShellFailure, encodeShellPermissionDenied, encodeShellSpawnError, encodeShellStreamBackgrounded, encodeShellStreamExit, encodeShellStreamStart, encodeShellStreamStderr, encodeShellStreamStdout, encodeShellSuccess, encodeShellTimeout, encodeSystemContextInjection, encodeTurnStructure, encodeUserContextInjection, encodeUserMessage, encodeUserMessageAction, encodeWriteError, encodeWriteRejected, encodeWriteShellStdinError, encodeWriteShellStdinSuccess, encodeWriteSuccess, extractSessionTitleUserMessage, normalizeCursorTodos, projectCursorTokenUsage, rejectionForInteraction, storeBlob, unwrapSessionTitleFrame } from "./wire/codec.js";
import { AGENT_HEADERS, CONNECT_COMPRESSED_FLAG, CONNECT_END_STREAM_FLAG, ConnectFrameReader, MAX_CONNECT_FRAME_BYTES, frameEncode } from "./wire/frames.js";
import { BACKGROUND_PID_MARKER, BACKGROUND_PID_PROLOGUE, createCursorTerminalLog, createPidProbe, formatCursorTerminalFooter, formatCursorTerminalHeader, parseJobIdN, splitShellDelta } from "./exec/shell.js";
import { EXEC_REPLY_FIELDS, READ_CONTENT_CHAR_CAP, classifyCursorSearch, composeReadWindow, encodeDeleteError, encodeDeletePermissionDenied, encodeDeleteSuccess, encodeGrepSearchResult, encodeWritePermissionDenied, formatReadJoinText, readPresentationMeta, searchMetaFromResult, searchResultSummary } from "./exec/search.js";
import { translateNativeExec } from "./exec/translate.js";
import { rejectionFor } from "./exec/rejection.js";
import { CursorUsageReader, callDashboardRpc, decodeCurrentPeriodUsage, decodeGetMe, decodeGetPlanInfo, decodeSandUsageStatus, projectCurrentPeriodUsage, projectGetMe, projectGetPlanInfo, projectSandUsageStatus } from "./usage.js";
import { classifyCursorError, finishChunkForStreamError, parseEndStream } from "./errors.js";
import { bindDisplayCallId, displayJoinResult, parseCursorWebSearchChunk, rememberDisplayCompletion, rendererToolArgs } from "./display.js";
function sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
class AgentRun {
    accessToken;
    baseUrl;
    session;
    frames;
    responseStatus;
    responseContentType;
    trailers;
    finished;
    originalRequestId;
    responsePromise;
    resolveResponse;
    rejectResponse;
    stream;
    heartbeat;
    constructor(accessToken, options = {}){
        this.accessToken = accessToken;
        this.baseUrl = options.baseUrl ?? CURSOR_BASE_URL;
        this.session = void 0;
        this.frames = new ConnectFrameReader();
        this.responseStatus = void 0;
        this.responseContentType = void 0;
        this.trailers = {};
        this.finished = false;
    }
    async start() {
        const url = new URL(CURSOR_RUN_PATH, this.baseUrl);
        const requestId = randomUUID();
        const headers = {
            ":method": "POST",
            ":path": url.pathname,
            authorization: `Bearer ${this.accessToken}`,
            ...AGENT_HEADERS,
            "x-request-id": requestId,
            "x-original-request-id": this.originalRequestId ?? requestId
        };
        this.responsePromise = new Promise((resolve, reject)=>{
            this.resolveResponse = resolve;
            this.rejectResponse = reject;
        });
        this.responsePromise.catch(()=>{});
        this.session = node_http2.connect(this.baseUrl);
        this.stream = this.session.request(headers);
        this.stream.on("response", (headers)=>{
            this.responseStatus = Number(headers[":status"]);
            this.responseContentType = "string" == typeof headers["content-type"] ? headers["content-type"] : void 0;
            this.#resolveResponse(this.responseStatus);
        });
        this.stream.on("data", (chunk)=>this.frames.push(Buffer.from(chunk)));
        this.stream.on("trailers", (trailers)=>{
            this.trailers = trailers;
        });
        this.stream.on("end", ()=>this.frames.finish());
        this.stream.on("close", ()=>{
            if (void 0 === this.responseStatus) this.#rejectResponse(new Error("Cursor HTTP stream closed before response"));
        });
        this.stream.on("error", (error)=>{
            this.#rejectResponse(error);
            this.frames.fail(error);
        });
        this.session.on("error", (error)=>{
            this.#rejectResponse(error);
            this.frames.fail(error);
        });
    }
    #resolveResponse(status) {
        const resolve = this.resolveResponse;
        this.resolveResponse = void 0;
        this.rejectResponse = void 0;
        resolve?.(status);
    }
    #rejectResponse(error) {
        const reject = this.rejectResponse;
        this.resolveResponse = void 0;
        this.rejectResponse = void 0;
        reject?.(error);
    }
    waitForResponse(timeoutMs) {
        if (void 0 === this.responsePromise) throw new Error("Cursor AgentRun has not started");
        if (void 0 === timeoutMs) return this.responsePromise;
        return new Promise((resolve, reject)=>{
            const timer = setTimeout(()=>reject(new Error("Cursor HTTP response timeout")), timeoutMs);
            timer.unref?.();
            this.responsePromise.then(resolve, reject).finally(()=>clearTimeout(timer));
        });
    }
    write(payload) {
        if (this.finished || void 0 === this.stream || this.stream.destroyed) return false;
        try {
            this.stream.write(Buffer.from(payload));
            return true;
        } catch  {
            return false;
        }
    }
    writeMessage(bytes) {
        return this.write(frameEncode(bytes));
    }
    startHeartbeat() {
        this.heartbeat = setInterval(()=>{
            this.writeMessage(encodeHeartbeat());
        }, HEARTBEAT_INTERVAL_MS);
        this.heartbeat.unref?.();
    }
    abort(error) {
        if (this.finished) return;
        this.#rejectResponse(error);
        this.frames.fail(error);
        this.close();
    }
    close() {
        if (this.finished) return;
        this.#rejectResponse(new Error("Cursor AgentRun closed before response"));
        this.finished = true;
        if (void 0 !== this.heartbeat) clearInterval(this.heartbeat);
        if (!this.frames.ended) this.frames.finish();
        try {
            this.stream?.close();
        } catch  {}
        try {
            this.session.destroy();
        } catch  {}
    }
}
class CursorRunPump {
    run;
    persisted;
    sessionKey;
    mcpTools;
    parkedTimeoutMs;
    syncTodos;
    debug;
    shellService;
    jobs;
    terminalsFolder;
    sessionCwd;
    sandboxPolicy;
    agent;
    generationId;
    systemText;
    attachments;
    persistCheckpoint;
    summarizeKeepTail;
    summaryBuffer;
    summarySeen;
    injectedIds;
    inboxDispose;
    stopped;
    terminalError;
    bridge;
    blobStore;
    activityHook;
    consumerFrames;
    consumerWaiters;
    parkedTimer;
    constructor({ run, persisted, sessionKey, mcpTools, parkedTimeoutMs, syncTodos, debug, shellService, jobs, terminalsFolder, sessionCwd, sandboxPolicy, agent, systemText, generationId, attachments, persistCheckpoint }){
        this.run = run;
        this.persisted = persisted;
        this.sessionKey = sessionKey;
        this.mcpTools = mcpTools;
        this.parkedTimeoutMs = parkedTimeoutMs;
        this.syncTodos = syncTodos;
        this.debug = debug;
        this.shellService = shellService;
        this.jobs = jobs;
        this.terminalsFolder = terminalsFolder;
        this.sessionCwd = sessionCwd;
        this.sandboxPolicy = sandboxPolicy;
        this.agent = agent;
        this.generationId = generationId ?? persisted?.generationId;
        this.systemText = systemText ?? "";
        this.attachments = attachments;
        this.persistCheckpoint = persistCheckpoint;
        this.summarizeKeepTail = true;
        this.summaryBuffer = "";
        this.summarySeen = false;
        this.injectedIds = new Set();
        this.inboxDispose = void 0;
        this.stopped = false;
        this.terminalError = void 0;
        this.bridge = void 0;
        this.blobStore = new Map();
        this.activityHook = void 0;
        this.consumerFrames = [];
        this.consumerWaiters = [];
        this.parkedTimer = void 0;
        this.#bindInbox();
        this.run.stream?.once?.("close", ()=>{
            if (!this.stopped && void 0 !== this.run.responseStatus && !this.run.frames.ended) this.#terminate(new Error("Cursor agent stream closed unexpectedly"));
        });
        this.#loop();
    }
    async next() {
        for(;;){
            if (this.consumerFrames.length > 0) return this.consumerFrames.shift();
            if (void 0 !== this.terminalError) throw this.terminalError;
            if (this.stopped) return;
            const frame = await new Promise((resolve, reject)=>this.consumerWaiters.push({
                    resolve,
                    reject
                }));
            if (void 0 !== frame) return frame;
        }
    }
    unread(frame) {
        if (void 0 === frame) return;
        this.consumerFrames.unshift(frame);
    }
    attach() {
        this.bridge = void 0;
        this.#clearParkedTimer();
    }
    detach() {
        if (void 0 === this.bridge || 0 === this.bridge.pendingExecs.length) return;
        if (!this.bridge.pendingExecs.every((entry)=>"mcp" === entry.kind)) return;
        this.#clearParkedTimer();
        this.parkedTimer = setTimeout(()=>{
            this.parkedTimer = void 0;
            if (this.stopped) return;
            this.debug(`parked bridge timeout after ${this.parkedTimeoutMs}ms: closing run (late results will replay)`);
            this.#terminate(new Error("Cursor parked bridge timeout"));
        }, this.parkedTimeoutMs);
        this.parkedTimer.unref?.();
    }
    terminate(error) {
        this.#terminate(error);
    }
    #terminate(error) {
        if (this.stopped) return;
        this.stopped = true;
        this.terminalError = error;
        this.#clearParkedTimer();
        this.#unbindInbox();
        this.#failOpenDisplayJoins(error);
        for (const waiter of this.consumerWaiters.splice(0))waiter.resolve();
        try {
            this.run.close();
        } catch  {}
    }
    #failOpenDisplayJoins(error) {
        const detail = error instanceof Error && error.message.length > 0 ? error.message : "";
        const text = detail.length > 0 ? `Cursor run ended before this tool completed: ${detail}` : "Cursor run ended before this tool completed";
        for (const id of this.persisted?.displayCallIds?.values() ?? [])settleCursorJoin(id, {
            text,
            isError: true
        });
    }
    #bindInbox() {
        const ctx = this.agent?.ctx;
        if (void 0 === ctx || "function" != typeof ctx.on) return;
        try {
            this.inboxDispose = ctx.on("agent/inbox/inserted", (payload)=>{
                const message = payload?.message;
                if (void 0 === message || this.stopped) return;
                if (this.#isFollowup(message)) return;
                this.injectDshMessage(message);
            });
        } catch (error) {
            this.debug(`inbox bind failed: ${error instanceof Error ? error.message : String(error)}`);
        }
    }
    #unbindInbox() {
        try {
            this.inboxDispose?.();
        } catch  {}
        this.inboxDispose = void 0;
    }
    #isFollowup(message) {
        const nextTurn = this.agent?.inbox?.nextTurn;
        if (!Array.isArray(nextTurn) || message?.id === void 0) return false;
        return nextTurn.some((entry)=>entry.id === message.id);
    }
    async injectDshMessage(message) {
        if (this.stopped || null == message) return false;
        if (isToolResultMessage(message)) return false;
        const text = flattenBlocks(message.content).trim();
        const injection = isInjectionMessage(message);
        const imageBlocks = injection ? [] : collectImageBlocks([
            message
        ]);
        if (0 === text.length && 0 === imageBlocks.length) return false;
        const id = "string" == typeof message.id ? message.id : "";
        const imageKey = imageBlocks.map((block)=>block.attachment?.attachmentId).filter(Boolean).join(",");
        const key = id.length > 0 ? id : text.length > 0 ? `anon:${text}` : `anon-img:${imageKey}`;
        if (this.injectedIds.has(key)) return false;
        this.injectedIds.add(key);
        let images = [];
        if (imageBlocks.length > 0) try {
            images = await resolveSelectedImages(imageBlocks, this.attachments?.());
        } catch (error) {
            this.debug(`inject images failed: ${error instanceof Error ? error.message : String(error)}`);
        }
        const injectionId = randomUUID();
        const action = injection ? encodeInjectContextAction({
            injectionId,
            expectedRunId: this.generationId,
            systemContext: {
                producer: injectionProducer(message),
                content: text
            }
        }) : encodeInjectContextAction({
            injectionId,
            expectedRunId: this.generationId,
            userContext: {
                text,
                messageId: id.length > 0 ? id : randomUUID(),
                images
            }
        });
        const ok = this.run.writeMessage(encodeConversationActionMessage(action));
        this.debug(`inject ${injection ? "system" : "user"} key=${key} images=${images.length} ok=${ok}`);
        return ok;
    }
    async injectTurnIngress(ingress, { includeUsers = false } = {}) {
        if (includeUsers) for (const entry of ingress.users ?? [])await this.injectDshMessage(entry.message);
        for (const entry of ingress.injections ?? [])await this.injectDshMessage(entry.message);
    }
    #clearParkedTimer() {
        if (void 0 !== this.parkedTimer) {
            clearTimeout(this.parkedTimer);
            this.parkedTimer = void 0;
        }
    }
    #route(frame) {
        if (this.consumerWaiters.length > 0) {
            const waiter = this.consumerWaiters.shift();
            waiter.resolve(frame);
        } else this.consumerFrames.push(frame);
    }
    #answerKv(kv) {
        if ("getBlobArgs" === kv.case) {
            const key = Buffer.from(kv.blobId).toString("hex");
            const blob = this.blobStore.get(key);
            this.debug(`pump kv getBlob ${key.slice(0, 16)}… hit=${void 0 !== blob} bytes=${blob?.length ?? 0}`);
            this.run.writeMessage(encodeKvClientMessage(encodeGetBlobResult(kv.id, blob)));
        } else if ("setBlobArgs" === kv.case) {
            if (void 0 !== kv.blobId && void 0 !== kv.blobData) {
                const key = Buffer.from(kv.blobId).toString("hex");
                const data = Uint8Array.from(kv.blobData);
                this.blobStore.set(key, data);
                this.persisted.blobs.set(key, data);
            }
            this.run.writeMessage(encodeKvClientMessage(encodeSetBlobResult(kv.id)));
        }
    }
    #answerInteraction(query) {
        if ("webFetchRequestQuery" === query.case || "webSearchRequestQuery" === query.case) {
            const field = "webFetchRequestQuery" === query.case ? 9 : 2;
            this.run.writeMessage(encodeInteractionResponseEnvelope(encodeInteractionApproved(query.id, field)));
            return;
        }
        const reply = rejectionForInteraction(query);
        if (void 0 !== reply) this.run.writeMessage(encodeInteractionResponseEnvelope(reply.payload));
    }
    static BACKGROUND_SHELL_MAX_LIVE = 16;
    static BACKGROUND_SHELL_IDLE_MS = 1800000;
    static BACKGROUND_SHELL_ABSOLUTE_MS = 7200000;
    #settleDisplayJoin(display) {
        rememberDisplayCompletion(this.persisted, display);
        if ("update_todos" === display.displayKind && display.call?.error === void 0 && display.call?.todos !== void 0 && void 0 !== this.sessionKey && void 0 !== this.syncTodos) this.syncTodos(this.sessionKey, normalizeCursorTodos(display.call.todos));
    }
    #schedulePersist() {
        if (void 0 === this.persistCheckpoint) return;
        Promise.resolve(this.persistCheckpoint(this.persisted)).catch((error)=>{
            this.debug(`checkpoint persist failed: ${error instanceof Error ? error.message : String(error)}`);
        });
    }
    #noteSummary(update) {
        if ("summaryStarted" === update.type) {
            this.summaryBuffer = "";
            this.summarySeen = true;
            this.debug("summary started");
            return;
        }
        if ("summary" === update.type) {
            this.summarySeen = true;
            this.summaryBuffer += update.text ?? "";
            return;
        }
        if ("summaryCompleted" === update.type) {
            this.summarySeen = true;
            this.debug(`summary completed chars=${this.summaryBuffer.length}`);
            this.#commitSummary(this.summaryBuffer, this.persisted?.cursorSummary?.windowTail);
        }
    }
    #commitSummary(text, windowTail) {
        try {
            const result = applySummaryFromPump(this.agent, text, {
                keepTail: false !== this.summarizeKeepTail,
                windowTail,
                model: this.agent?.options?.model
            });
            if (null !== result) this.debug(`summary wrote DSH bracket shadowed=${result.shadowedSeqs.length}`);
        } catch (error) {
            this.debug(`summary write-back failed: ${error instanceof Error ? error.message : String(error)}`);
        }
    }
    #answerWriteShellStdin(exec) {
        const args = exec.args ?? {};
        const shellId = Number(args.shellId ?? 0);
        this.debug(`pump writeShellStdin id=${exec.id} shellId=${shellId}`);
        const entry = this.persisted.shells?.get(shellId);
        if (void 0 === entry) this.run.writeMessage(encodeExecClientMessageEnvelope(encodeExecClientMessage(exec.id, exec.execId, 23, encodeWriteShellStdinError(`Unknown shell id ${shellId}`))));
        else this.run.writeMessage(encodeExecClientMessageEnvelope(encodeExecClientMessage(exec.id, exec.execId, 23, encodeWriteShellStdinError("stdin is not writable after the shell starts; include any stdin in the command (heredoc or pipe)"))));
        this.run.writeMessage(encodeExecStreamClose(exec.id));
    }
    async #loop() {
        try {
            for(;;){
                const frame = await this.run.frames.next();
                if (void 0 === frame) return void this.#terminate(void 0);
                this.activityHook?.();
                if ((frame.flags & CONNECT_END_STREAM_FLAG) !== 0) {
                    this.debug("pump frame end-stream");
                    this.#route(frame);
                    continue;
                }
                const message = decodeAgentServerMessage(frame.payload);
                if ("kvServerMessage" === message.case) {
                    this.#answerKv(message.value);
                    continue;
                }
                if ("interactionQuery" === message.case && message.value?.case !== "askQuestionInteractionQuery") {
                    this.debug(`pump interaction ${message.value?.case} id=${message.value?.id} (answered in pump)`);
                    this.#answerInteraction(message.value);
                    continue;
                }
                if ("execServerMessage" === message.case && message.value?.case === "requestContextArgs") {
                    const exec = message.value;
                    let rules = [];
                    try {
                        rules = mergeDshSystemRule(await collectCursorRules({
                            cwd: this.sessionCwd
                        }), this.systemText);
                    } catch (error) {
                        this.debug(`requestContext rules failed: ${error instanceof Error ? error.message : String(error)}`);
                        rules = mergeDshSystemRule([], this.systemText);
                    }
                    this.debug(`pump requestContextArgs tools=${this.mcpTools?.length ?? 0} rules=${rules.length}`);
                    this.run.writeMessage(encodeExecClientMessageEnvelope(encodeExecClientMessage(exec.id, exec.execId, 10, encodeRequestContextResult(this.mcpTools, rules))));
                    continue;
                }
                if ("interactionUpdate" === message.case && message.value?.type === "contextInjectionState") this.debug(`inject ${message.value.injectionId} ${message.value.state}`);
                if ("execServerMessage" === message.case && message.value?.case === "writeShellStdinArgs") {
                    this.#answerWriteShellStdin(message.value);
                    continue;
                }
                if ("interactionUpdate" === message.case && message.value?.type === "toolCallCompleted" && message.value.display?.displayKind !== void 0) this.#settleDisplayJoin(message.value.display);
                if ("interactionUpdate" === message.case && (message.value?.type === "summary" || message.value?.type === "summaryStarted" || message.value?.type === "summaryCompleted")) this.#noteSummary(message.value);
                if ("conversationCheckpointUpdate" === message.case) {
                    this.persisted.checkpoint = Uint8Array.from(message.value);
                    try {
                        const details = decodeConversationTokenDetails(message.value);
                        if (void 0 !== details) this.persisted.tokenDetails = details;
                    } catch  {}
                    try {
                        const decoded = decodeConversationStateSummary(message.value, this.blobStore);
                        if (void 0 !== decoded) {
                            this.persisted.cursorSummary = decoded;
                            const text = pickCheckpointSummaryCommit({
                                summarySeen: this.summarySeen,
                                summarizeKeepTail: this.summarizeKeepTail,
                                buffer: this.summaryBuffer,
                                checkpointSummary: decoded.summary
                            });
                            if (void 0 !== text) this.#commitSummary(text, decoded.windowTail);
                        }
                    } catch  {}
                    if (void 0 !== this.sessionKey && void 0 !== this.syncTodos) try {
                        const decoded = decodeConversationStateTodos(message.value);
                        if (decoded.present) {
                            const todos = normalizeCursorTodos(decoded.items);
                            const fingerprint = JSON.stringify(todos);
                            if (fingerprint !== this.persisted.todosFingerprint) {
                                this.syncTodos(this.sessionKey, todos);
                                this.persisted.todosFingerprint = fingerprint;
                            }
                        }
                    } catch  {}
                    this.#schedulePersist();
                }
                this.debug(`pump frame ${message.case}${message.value?.type !== void 0 ? `:${message.value.type}` : ""} (routed)`);
                this.#route(frame);
            }
        } catch (error) {
            this.#terminate(error);
        }
    }
}
function renderAssistant(content) {
    let text = "";
    for (const block of content ?? [])if ("text" === block.type) text += block.text;
    else if ("tool-call" === block.type) text += `\n<tool_call id="${block.id}" name="${block.name}">${block.arguments}</tool_call>`;
    else if ("reasoning" === block.type) text += `\n<thinking>${block.text}</thinking>`;
    return text.trim();
}
function actionBoundary(messages) {
    for(let index = messages.length - 1; index >= 0; index--)if ("assistant" === messages[index].role) return index + 1;
    return 0;
}
function collectDshSystemText(options) {
    const systemParts = [
        options.system ?? ""
    ];
    for (const message of options.messages ?? [])if ("system" === message.role) systemParts.push(flattenBlocks(message.content));
    return systemParts.filter((part)=>part.length > 0).join("\n").trim();
}
function classifyTurnIngress(options) {
    const messages = options.messages ?? [];
    const boundary = actionBoundary(messages);
    const users = [];
    const injections = [];
    for(let index = boundary; index < messages.length; index++){
        const message = messages[index];
        if ("user" !== message.role) continue;
        if (isToolResultMessage(message)) continue;
        const text = flattenBlocks(message.content).trim();
        if (0 !== text.length || contentHasImages(message.content)) if (isInjectionMessage(message)) {
            if (shouldDropCursorInject(injectionProducer(message))) continue;
            injections.push({
                id: message.id,
                producer: injectionProducer(message),
                content: text,
                message
            });
        } else users.push({
            id: message.id,
            text,
            message
        });
    }
    return {
        users,
        injections,
        systemText: collectDshSystemText(options)
    };
}
function currentActionText(options) {
    const { users } = classifyTurnIngress(options);
    return users.map((entry)=>entry.text).filter((text)=>text.length > 0).join("\n\n");
}
function allocateLocalToolCallId(raw, used) {
    const base = String(raw ?? "").replace(/\s+/g, "-");
    if (0 === base.length) return crypto.randomUUID();
    let candidate = base;
    for(let n = 2; used.has(candidate); n++)candidate = `${base}-${n}`;
    used.add(candidate);
    return candidate;
}
function collectToolResults(options) {
    const results = [];
    for (const message of options.messages ?? [])results.push(...toolResultsOf(message));
    return results;
}
function partitionPendingExecs(pendingExecs, toolResults) {
    const byId = new Map();
    for (const result of toolResults ?? [])if (result?.toolCallId !== void 0) byId.set(result.toolCallId, result);
    const ready = [];
    const leftover = [];
    for (const pending of pendingExecs ?? []){
        const result = byId.get(pending.toolCallId);
        if (void 0 === result) leftover.push(pending);
        else ready.push({
            pending,
            result
        });
    }
    return {
        ready,
        leftover
    };
}
function decodeXmlText(value) {
    return String(value ?? "").replace(/&quot;/gi, '"').replace(/&apos;/gi, "'").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&amp;/gi, "&");
}
function parseTagAttributes(source) {
    const attributes = {};
    const pattern = /([A-Za-z_][\w-]*)\s*=\s*"([\s\S]*?)"/g;
    for(let match; null !== (match = pattern.exec(source));)attributes[match[1]] = decodeXmlText(match[2]);
    return attributes;
}
function resolveTextTool(candidate, tools) {
    const available = tools ?? [];
    const normalized = String(candidate ?? "").toLowerCase();
    let tool = available.find((entry)=>{
        const name = String(entry.name).toLowerCase();
        return normalized === name || normalized.endsWith(`_${name}`);
    });
    if (void 0 !== tool) return tool;
    const aliases = {
        shell: [
            "pwsh",
            "bash"
        ],
        read: [
            "read"
        ],
        glob: [
            "glob"
        ],
        grep: [
            "grep"
        ],
        write: [
            "write"
        ],
        edit: [
            "edit"
        ]
    };
    for (const name of aliases[normalized] ?? []){
        tool = available.find((entry)=>String(entry.name).toLowerCase() === name);
        if (void 0 !== tool) return tool;
    }
}
function normalizeTextToolArguments(tool, raw) {
    const args = {
        ...raw
    };
    if ("read" === tool.name && void 0 === args.file_path && void 0 !== args.path) {
        args.file_path = args.path;
        delete args.path;
    }
    if ("glob" === tool.name) {
        if (void 0 === args.pattern && void 0 !== args.glob_pattern) args.pattern = args.glob_pattern;
        if (void 0 === args.path && void 0 !== args.target_directory) args.path = args.target_directory;
        delete args.glob_pattern;
        delete args.target_directory;
    }
    for (const [key, value] of Object.entries(args)){
        const type = tool.parameters?.properties?.[key]?.type;
        if (("number" === type || "integer" === type) && "string" == typeof value && "" !== value.trim()) {
            const number = Number(value);
            if (Number.isFinite(number)) args[key] = number;
        } else if ("boolean" === type && "string" == typeof value) {
            if ("true" === value.toLowerCase()) args[key] = true;
            else if ("false" === value.toLowerCase()) args[key] = false;
        } else if (("object" === type || "array" === type) && "string" == typeof value) try {
            args[key] = JSON.parse(value);
        } catch  {}
    }
    return args;
}
function parseTextToolCalls(text, tools) {
    const calls = [];
    const pattern = /<tool_call\b([^>]*)>([\s\S]*?)<\/tool_call>/gi;
    for(let match; null !== (match = pattern.exec(String(text ?? "")));){
        const attributes = parseTagAttributes(match[1]);
        const tool = resolveTextTool(attributes.name ?? attributes.id, tools);
        if (void 0 === tool) continue;
        const rawArgs = {};
        const parameterPattern = /<parameter\s+name="([^"]+)"\s*>([\s\S]*?)<\/parameter>/gi;
        for(let parameter; null !== (parameter = parameterPattern.exec(match[2]));)rawArgs[parameter[1]] = decodeXmlText(parameter[2].trim());
        for (const [key, value] of Object.entries(attributes))if ("id" !== key && "name" !== key) rawArgs[key] = value;
        if (0 === Object.keys(rawArgs).length) {
            const body = decodeXmlText(match[2]).trim();
            if (body.startsWith("{")) try {
                Object.assign(rawArgs, JSON.parse(body));
            } catch  {}
        }
        calls.push({
            id: `text-tool-${crypto.randomUUID()}`,
            name: tool.name,
            arguments: JSON.stringify(normalizeTextToolArguments(tool, rawArgs))
        });
    }
    return calls;
}
function buildInitialConversationState(options) {
    return {
        conversationState: encodeConversationState({
            rootPromptBlobIds: [],
            turns: []
        }),
        blobStore: new Map(),
        systemText: collectDshSystemText(options)
    };
}
function buildConversationState(options) {
    const systemParts = [
        options.system ?? ""
    ];
    const turns = [];
    let currentUser = null;
    let currentSteps = [];
    const flushTurn = ()=>{
        if (null !== currentUser) {
            const userBytes = encodeUserMessage({
                text: currentUser,
                messageId: randomUUID()
            });
            const turnBytes = encodeAgentTurn(userBytes, currentSteps);
            turns.push(encodeTurnStructure(turnBytes));
        }
        currentUser = null;
        currentSteps = [];
    };
    for (const message of options.messages ?? []){
        if ("system" === message.role) {
            systemParts.push(flattenBlocks(message.content));
            continue;
        }
        if ("user" === message.role) {
            flushTurn();
            currentUser = flattenBlocks(message.content);
            continue;
        }
        if ("tool" === message.role) {
            flushTurn();
            const callId = message.toolCallId ? ` for ${message.toolCallId}` : "";
            currentUser = `[TOOL RESULT${callId}]\n${flattenBlocks(message.content)}`.trim();
            continue;
        }
        if ("assistant" === message.role) {
            const text = renderAssistant(message.content);
            if (null === currentUser) currentUser = "";
            if (text.length > 0) currentSteps.push(encodeAssistantStep(text));
        }
    }
    let actionText = "";
    if (null !== currentUser) actionText = currentUser;
    currentUser = null;
    currentSteps = [];
    const systemText = systemParts.filter((part)=>part.length > 0).join("\n").trim();
    const conversationState = encodeConversationState({
        rootPromptBlobIds: [],
        turns,
        systemText
    });
    const userBytes = encodeUserMessage({
        text: actionText,
        messageId: randomUUID()
    });
    const action = encodeUserMessageAction(userBytes);
    return {
        conversationState,
        action,
        blobStore: new Map(),
        systemText
    };
}
function buildRunPayload(options, modelId, persisted, conversationId) {
    const ingress = classifyTurnIngress(options);
    const images = Array.isArray(options.selectedImages) ? options.selectedImages : [];
    let conversationState;
    let blobStore;
    let action;
    const actionText = currentActionText(options);
    if (persisted?.checkpoint !== void 0) {
        conversationState = persisted.checkpoint;
        blobStore = persisted.blobs ?? new Map();
        action = actionText.length > 0 || images.length > 0 ? encodeUserMessageAction(encodeUserMessage({
            text: actionText,
            messageId: randomUUID(),
            images
        })) : encodeResumeAction();
    } else {
        const built = buildInitialConversationState(options);
        conversationState = built.conversationState;
        blobStore = built.blobStore;
        action = encodeUserMessageAction(encodeUserMessage({
            text: actionText,
            messageId: randomUUID(),
            images
        }));
    }
    const requestedModel = encodeRequestedModelForRun(modelId, options);
    const modelDetails = requestedModel ? void 0 : encodeModelDetails(modelId);
    const runRequest = encodeRunRequest({
        conversationState,
        action,
        modelDetails,
        requestedModel,
        conversationId: conversationId ?? randomUUID(),
        runId: persisted?.generationId
    });
    return {
        payload: encodeRunMessage(runRequest),
        blobStore,
        systemText: ingress.systemText,
        injections: ingress.injections,
        users: ingress.users
    };
}
function buildCustomRunPayload({ conversationState, actionBytes, modelId, conversationId, blobStore, requestedModel, runId }) {
    const runRequest = encodeRunRequest({
        conversationState,
        action: actionBytes,
        modelDetails: requestedModel ? void 0 : encodeModelDetails(modelId),
        requestedModel,
        conversationId,
        runId
    });
    return {
        payload: encodeRunMessage(runRequest),
        blobStore: blobStore ?? new Map()
    };
}
function encodeRequestedModelForRun(modelId, options = {}) {
    if (options.requestedModel instanceof Uint8Array) return options.requestedModel;
    if (true !== options.useRequestedModel && !Array.isArray(options.requestedModelParameters)) return;
    const parameters = Array.isArray(options.requestedModelParameters) ? options.requestedModelParameters : [];
    return encodeRequestedModel({
        modelId,
        maxMode: true === options.requestedMaxMode,
        parameters
    });
}
async function fetchUsableModels(accessToken, options = {}) {
    const fetchImpl = options.fetch ?? nativeFetch;
    const response = await fetchImpl(`${options.baseUrl ?? CURSOR_BASE_URL}${CURSOR_MODELS_PATH}`, {
        method: "POST",
        redirect: "error",
        headers: {
            "content-type": "application/proto",
            authorization: `Bearer ${accessToken}`,
            "x-ghost-mode": "true",
            "x-cursor-client-version": CURSOR_CLIENT_VERSION,
            "x-cursor-client-type": "cli",
            "user-agent": "dsh-cursor-agent/0.1.0"
        },
        body: new Uint8Array(0),
        signal: options.signal
    });
    if (!response.ok) throw new Error(`Cursor model discovery failed (HTTP ${response.status})`);
    const bytes = new Uint8Array(await response.arrayBuffer());
    if (0 === bytes.length) throw new Error("Cursor model discovery returned an empty response");
    const models = decodeUsableModels(bytes);
    if (models.length > 0) return models;
    const frameReader = new ConnectFrameReader();
    frameReader.push(bytes);
    frameReader.finish();
    const framed = [];
    for(;;){
        const frame = await frameReader.next();
        if (void 0 === frame) break;
        if ((frame.flags & CONNECT_END_STREAM_FLAG) !== 0) break;
        framed.push(...decodeUsableModels(frame.payload));
    }
    return framed;
}
async function fetchAvailableModels(accessToken, options = {}) {
    const fetchImpl = options.fetch ?? nativeFetch;
    const body = encodeAvailableModelsRequest();
    const response = await fetchImpl(`${options.baseUrl ?? CURSOR_BASE_URL}${CURSOR_AVAILABLE_MODELS_PATH}`, {
        method: "POST",
        redirect: "error",
        headers: {
            "content-type": "application/proto",
            authorization: `Bearer ${accessToken}`,
            "x-ghost-mode": "true",
            "x-cursor-client-version": CURSOR_CLIENT_VERSION,
            "x-cursor-client-type": "cli",
            "user-agent": "dsh-cursor-agent/0.1.0"
        },
        body,
        signal: options.signal
    });
    if (!response.ok) throw new Error(`Cursor AvailableModels failed (HTTP ${response.status})`);
    const bytes = new Uint8Array(await response.arrayBuffer());
    if (0 === bytes.length) throw new Error("Cursor AvailableModels returned an empty response");
    const models = decodeAvailableModels(bytes);
    if (models.length > 0) return models;
    const frameReader = new ConnectFrameReader();
    frameReader.push(bytes);
    frameReader.finish();
    const framed = [];
    for(;;){
        const frame = await frameReader.next();
        if (void 0 === frame) break;
        if ((frame.flags & CONNECT_END_STREAM_FLAG) !== 0) break;
        framed.push(...decodeAvailableModels(frame.payload));
    }
    return framed;
}
async function fetchNameAgent(accessToken, userMessage, options = {}) {
    const fetchImpl = options.fetch ?? nativeFetch;
    const response = await fetchImpl(`${options.baseUrl ?? CURSOR_BASE_URL}${CURSOR_NAME_AGENT_PATH}`, {
        method: "POST",
        redirect: "error",
        headers: {
            "content-type": "application/proto",
            authorization: `Bearer ${accessToken}`,
            "x-ghost-mode": "true",
            "x-cursor-client-version": CURSOR_CLIENT_VERSION,
            "x-cursor-client-type": "cli",
            "user-agent": "dsh-cursor-agent/0.1.0"
        },
        body: encodeNameAgentRequest(userMessage),
        signal: options.signal
    });
    if (!response.ok) throw new Error(`Cursor NameAgent failed (HTTP ${response.status})`);
    const bytes = new Uint8Array(await response.arrayBuffer());
    if (0 === bytes.length) throw new Error("Cursor NameAgent returned an empty response");
    try {
        const name = decodeNameAgentResponse(bytes);
        if (name.length > 0) return name;
    } catch  {}
    const frameReader = new ConnectFrameReader();
    frameReader.push(bytes);
    frameReader.finish();
    for(;;){
        const frame = await frameReader.next();
        if (void 0 === frame) break;
        if ((frame.flags & CONNECT_END_STREAM_FLAG) !== 0) break;
        try {
            const framed = decodeNameAgentResponse(frame.payload);
            if (framed.length > 0) return framed;
        } catch  {}
    }
    throw new Error("Cursor NameAgent returned an empty title");
}
function pointerMatchesCheckpoint(ref, bytes) {
    if (null == ref || null == bytes) return false;
    const digest = createHash("sha256").update(bytes).digest("hex");
    const id = String(ref.attachmentId ?? "");
    return id === digest || id === `sha256:${digest}`;
}
const shellStreamChannels = new Map();
const bgShellSpawns = new Map();
let nextBgShellId = 1;
function isJoinBatchFrame(message) {
    if ("execServerMessage" === message.case) {
        const kind = message.value?.case;
        return "readArgs" === kind || "writeArgs" === kind || "deleteArgs" === kind || "grepArgs" === kind || "shellStreamArgs" === kind || "backgroundShellSpawnArgs" === kind;
    }
    if ("interactionUpdate" !== message.case) return false;
    const type = message.value?.type;
    if ("tokenDelta" === type || "turnEnded" === type || "partialToolCall" === type || "toolCallDelta" === type) return true;
    if ("heartbeat" === type || "contextInjectionState" === type || "userMessageAppended" === type) return true;
    if ("summary" === type || "summaryStarted" === type || "summaryCompleted" === type) return true;
    if ("toolCallStarted" === type || "toolCallCompleted" === type) return message.value.display?.displayKind !== void 0;
    return false;
}
function isNextRoundContent(message) {
    if ("interactionUpdate" !== message.case) return false;
    const type = message.value?.type;
    return ("textDelta" === type || "thinkingDelta" === type) && String(message.value.text ?? "").length > 0;
}
class CursorAdapter extends LlmAdapter {
    auth;
    fetchModels;
    fetchAvailableModels;
    nameAgent;
    fallbackModels;
    idleTimeoutMs;
    progressTimeoutMs;
    idleCheckIntervalMs;
    modelsCacheTtlMs;
    sessionStateTtlMs;
    settings;
    createAgentRun;
    sleep;
    now;
    gate;
    syncTodos;
    logger;
    shellService;
    terminalsRoot;
    agents;
    agent;
    sandboxPolicy;
    jobs;
    attachments;
    checkpointStore;
    publishSessionEvent;
    sessions;
    modelsCache;
    availableModelsCache;
    constructor(options){
        super();
        this.auth = options.auth;
        this.fetchModels = options.fetchModels ?? fetchUsableModels;
        this.fetchAvailableModels = options.fetchAvailableModels ?? fetchAvailableModels;
        this.nameAgent = options.nameAgent ?? fetchNameAgent;
        this.fallbackModels = options.fallbackModels ?? FALLBACK_MODELS;
        this.idleTimeoutMs = options.idleTimeoutMs ?? STREAM_IDLE_TIMEOUT_MS;
        this.progressTimeoutMs = options.progressTimeoutMs ?? STREAM_PROGRESS_TIMEOUT_MS;
        this.idleCheckIntervalMs = options.idleCheckIntervalMs ?? 15000;
        this.modelsCacheTtlMs = options.modelsCacheTtlMs ?? 300000;
        this.sessionStateTtlMs = options.sessionStateTtlMs ?? SESSION_STATE_TTL_MS;
        const fallbackSettings = resolveCursorSettings({
            maxToolRounds: options.maxToolRounds,
            apiBaseUrl: options.apiBaseUrl,
            retryCount: options.retryCount,
            retryIntervalMs: options.retryIntervalMs,
            retryHttpStatusCodes: options.retryHttpStatusCodes
        });
        this.settings = options.settings ?? (()=>fallbackSettings);
        this.createAgentRun = options.createAgentRun ?? ((access)=>new AgentRun(access, {
                baseUrl: this.settings().apiBaseUrl
            }));
        this.sleep = options.sleep ?? abortableDelay;
        this.now = options.now ?? Date.now;
        this.gate = options.gate;
        this.syncTodos = options.syncTodos;
        this.logger = options.logger;
        this.shellService = options.shellService;
        this.terminalsRoot = options.terminalsRoot;
        this.agents = options.agents;
        this.sandboxPolicy = options.sandboxPolicy;
        this.jobs = options.jobs;
        this.attachments = options.attachments;
        this.checkpointStore = options.checkpointStore;
        this.publishSessionEvent = options.publishSessionEvent;
        this.#modelsCache = {
            at: 0,
            models: void 0,
            catalog: void 0
        };
        this.#shellForwarders = new Map();
        this.#contextWindowByModel = new Map();
    }
    #modelsCache;
    #shellForwarders;
    #contextWindowByModel;
    #sessions = new Map();
    #killSessionShells(state) {
        for (const entry of state.shells?.values() ?? []){
            try {
                if (void 0 !== entry.absoluteTimer) clearTimeout(entry.absoluteTimer);
            } catch  {}
            try {
                entry.log?.dispose();
            } catch  {}
            if (entry.proc?.status === "running") try {
                entry.proc.kill();
            } catch  {}
        }
    }
    #forwardShellStream(exec, id, run, debug, persisted, terminalsFolder, signal) {
        const task = (async ()=>{
            const args = exec.args ?? {};
            const command = args.command ?? "";
            const cwd = args.workingDirectory ?? "";
            const title = "string" == typeof args.description && args.description.length > 0 ? args.description : void 0;
            const write = (bytes)=>{
                if (!run.writeMessage(bytes)) throw new Error("Cursor shell-stream bridge closed before accepting a frame");
            };
            const openTerminal = (shellId, startedAt)=>{
                if ("string" != typeof terminalsFolder || 0 === terminalsFolder.length) return;
                return createCursorTerminalLog(join(terminalsFolder, `${shellId}.txt`), {
                    cwd,
                    command,
                    title,
                    startedAtMs: startedAt
                });
            };
            try {
                debug(`shellStream id=${exec.id} command=${JSON.stringify(command.slice(0, 100))}`);
                write(encodeExecClientMessageEnvelope(encodeExecClientMessage(exec.id, exec.execId, 14, encodeShellStreamStart(args.sandboxPolicy?.type))));
                const started = Date.now();
                let holder = shellStreamChannels.get(id);
                const deadline = Date.now() + 1800000;
                while(void 0 === holder && !signal?.aborted && Date.now() < deadline){
                    await sleep(50);
                    holder = shellStreamChannels.get(id);
                }
                let channel = holder?.channel;
                while(void 0 === channel && !signal?.aborted && Date.now() < deadline){
                    await sleep(50);
                    channel = holder?.channel;
                }
                if (void 0 === channel) {
                    shellStreamChannels.delete(id);
                    const terminal = openTerminal(exec.id, started);
                    terminal?.finish({
                        exitCode: 1,
                        aborted: true
                    });
                    write(encodeExecClientMessageEnvelope(encodeExecClientMessage(exec.id, exec.execId, 2, encodeShellFailure({
                        command,
                        workingDirectory: cwd,
                        exitCode: 1,
                        stderr: "the shell call never started",
                        executionTime: Date.now() - started,
                        aborted: true,
                        terminalsFolder
                    }))));
                    write(encodeExecStreamClose(exec.id));
                    return;
                }
                const fileShellId = void 0 !== channel.jobId ? parseJobIdN(channel.jobId) ?? exec.id : exec.id;
                const terminal = openTerminal(fileShellId, started);
                let stdout = "";
                let stderr = "";
                let sent = 0;
                for(;;){
                    if (void 0 !== channel.pid) terminal?.setPid(channel.pid);
                    while(sent < channel.chunks.length){
                        const split = splitShellDelta(channel.chunks[sent++]);
                        if (split.stdout.length > 0) {
                            stdout += split.stdout;
                            terminal?.append(split.stdout);
                            write(encodeExecClientMessageEnvelope(encodeExecClientMessage(exec.id, exec.execId, 14, encodeShellStreamStdout(split.stdout))));
                        }
                        if (split.stderr.length > 0) {
                            stderr += split.stderr;
                            terminal?.append(split.stderr);
                            write(encodeExecClientMessageEnvelope(encodeExecClientMessage(exec.id, exec.execId, 14, encodeShellStreamStderr(split.stderr))));
                        }
                    }
                    if (channel.done) break;
                    await sleep(100);
                }
                shellStreamChannels.delete(id);
                const error = channel.error;
                const elapsed = Date.now() - started;
                if (true === channel.backgrounded && void 0 !== channel.proc) {
                    const proc = channel.proc;
                    const shellId = fileShellId;
                    if (void 0 !== channel.pid) terminal?.setPid(channel.pid);
                    write(encodeExecClientMessageEnvelope(encodeExecClientMessage(exec.id, exec.execId, 14, encodeShellStreamBackgrounded({
                        shellId,
                        command,
                        workingDirectory: cwd,
                        ...void 0 !== channel.pid ? {
                            pid: channel.pid
                        } : {},
                        reason: 1
                    }))));
                    write(encodeExecClientMessageEnvelope(encodeExecClientMessage(exec.id, exec.execId, 2, encodeShellSuccess({
                        command,
                        workingDirectory: cwd,
                        exitCode: 0,
                        stdout,
                        stderr,
                        executionTime: elapsed,
                        isBackground: true,
                        shellId,
                        ...void 0 !== channel.pid ? {
                            pid: channel.pid
                        } : {},
                        terminalsFolder
                    }))));
                    write(encodeExecStreamClose(exec.id));
                    debug(`shellStream id=${exec.id} backgrounded (shellId=${shellId} job=${channel.jobId ?? "none"} pid=${channel.pid ?? "none"})`);
                    persisted.shells ??= new Map();
                    persisted.shells.set(shellId, {
                        shellId,
                        ...void 0 !== channel.jobId ? {
                            jobId: String(channel.jobId)
                        } : {},
                        pid: channel.pid,
                        command,
                        cwd,
                        title,
                        proc,
                        filePath: terminal?.filePath ?? join(terminalsFolder ?? node_os.tmpdir(), `${shellId}.txt`),
                        log: terminal,
                        startedAt: started,
                        lastActivityAt: started,
                        absoluteTimer: setTimeout(()=>{
                            try {
                                proc.kill();
                            } catch  {}
                        }, CursorRunPump.BACKGROUND_SHELL_ABSOLUTE_MS),
                        bytes: terminal?.bytes ?? 0
                    });
                    this.#ensureBackgroundDrain(shellId, persisted, debug);
                    return;
                }
                const exitCode = void 0 === error ? channel.exitCode ?? 1 : 1;
                if (void 0 !== channel.pid) terminal?.setPid(channel.pid);
                terminal?.finish({
                    exitCode,
                    aborted: void 0 !== error
                });
                write(encodeExecClientMessageEnvelope(encodeExecClientMessage(exec.id, exec.execId, 14, encodeShellStreamExit({
                    code: exitCode,
                    cwd,
                    aborted: void 0 !== error,
                    ...void 0 !== terminal ? {
                        outputLocation: terminal.stats()
                    } : {}
                }))));
                if (void 0 !== error) {
                    stderr = stderr.length > 0 ? `${stderr}\n${error}` : error;
                    write(encodeExecClientMessageEnvelope(encodeExecClientMessage(exec.id, exec.execId, 2, encodeShellFailure({
                        command,
                        workingDirectory: cwd,
                        exitCode,
                        stdout,
                        stderr,
                        executionTime: elapsed,
                        aborted: true,
                        terminalsFolder
                    }))));
                } else write(0 === exitCode ? encodeExecClientMessageEnvelope(encodeExecClientMessage(exec.id, exec.execId, 2, encodeShellSuccess({
                    command,
                    workingDirectory: cwd,
                    exitCode,
                    stdout,
                    stderr,
                    executionTime: elapsed,
                    terminalsFolder
                }))) : encodeExecClientMessageEnvelope(encodeExecClientMessage(exec.id, exec.execId, 2, encodeShellFailure({
                    command,
                    workingDirectory: cwd,
                    exitCode,
                    stdout,
                    stderr,
                    executionTime: elapsed,
                    terminalsFolder
                }))));
                write(encodeExecStreamClose(exec.id));
                debug(`shellStream id=${exec.id} done code=${exitCode} bytes=${stdout.length + stderr.length}`);
            } catch (forwardError) {
                shellStreamChannels.delete(id);
                debug(`shellStream id=${exec.id} forwarder failed: ${forwardError instanceof Error ? forwardError.message : String(forwardError)}`);
            }
        })();
        this.#shellForwarders.set(exec.id, task);
        task.finally(()=>{
            if (this.#shellForwarders.get(exec.id) === task) this.#shellForwarders.delete(exec.id);
        });
        return task;
    }
    #ensureBackgroundDrain(shellId, persisted, debug) {
        const entry = persisted.shells?.get(shellId);
        if (void 0 === entry) return;
        entry.drain ??= this.#drainBackgroundedShell(shellId, persisted, debug);
        return entry.drain;
    }
    async #waitForBackgroundPid(entry, timeoutMs = 2000) {
        const deadline = Date.now() + timeoutMs;
        while(void 0 === entry.pid && Date.now() < deadline){
            if (entry.proc?.status !== "running" && entry.proc?.status !== void 0) break;
            await sleep(50);
        }
    }
    async #drainBackgroundedShell(shellId, persisted, debug) {
        const entry = persisted.shells?.get(shellId);
        if (void 0 === entry) return;
        const readDelta = ()=>{
            if (void 0 !== entry.jobId && void 0 !== this.jobs) try {
                return this.jobs.read(entry.jobId, this.agent).text;
            } catch  {}
            return entry.proc.readOutput().delta;
        };
        const settled = ()=>{
            if (void 0 !== entry.jobId && void 0 !== this.jobs) try {
                const snapshot = this.jobs.get(entry.jobId, this.agent);
                if (void 0 !== snapshot && "running" !== snapshot.status && "stopping" !== snapshot.status) return true;
            } catch  {}
            return "running" !== entry.proc.status;
        };
        const probe = entry.pidProbe ?? createPidProbe();
        entry.pidProbe = probe;
        try {
            for(;;){
                const delta = readDelta();
                const probed = probe.consume(delta);
                if (void 0 !== probed.pid && void 0 === entry.pid) entry.pid = probed.pid;
                if (probed.rest.length > 0) this.#appendTerminalFile(entry, probed.rest);
                if (settled()) break;
                await sleep(100);
            }
        } catch  {}
        const tail = entry.proc.readOutput();
        const tailProbed = probe.consume(tail.delta);
        if (void 0 !== tailProbed.pid && void 0 === entry.pid) entry.pid = tailProbed.pid;
        if (tailProbed.rest.length > 0) this.#appendTerminalFile(entry, tailProbed.rest);
        const code = entry.proc.exitCode;
        this.#finishTerminalFile(entry, {
            exitCode: code ?? 1,
            aborted: null === code
        });
        debug(`backgrounded shell ${shellId} done code=${code} bytes=${entry.bytes} pid=${entry.pid ?? "none"}`);
    }
    async #waitForShellForwarders(pendingExecs, debug) {
        const tasks = [];
        for (const pending of pendingExecs ?? []){
            const task = this.#shellForwarders.get(pending.id);
            if (void 0 !== task) tasks.push(task);
        }
        if (0 === tasks.length) return;
        debug(`waiting for ${tasks.length} shell forwarder(s) before replacing the run`);
        await Promise.allSettled(tasks);
    }
    #ensureTerminalLog(entry) {
        if (void 0 !== entry.log) return entry.log;
        if (void 0 === entry.filePath) return;
        entry.log = createCursorTerminalLog(entry.filePath, {
            pid: entry.pid,
            cwd: entry.cwd,
            command: entry.command,
            title: entry.title,
            startedAtMs: entry.startedAt
        });
        return entry.log;
    }
    #appendTerminalFile(entry, text) {
        if (0 === text.length) return;
        const log = this.#ensureTerminalLog(entry);
        if (void 0 === log) return;
        if (void 0 !== entry.pid) log.setPid(entry.pid);
        log.append(text);
        entry.bytes = log.bytes;
    }
    #finishTerminalFile(entry, { exitCode, aborted = false } = {}) {
        const log = this.#ensureTerminalLog(entry);
        if (void 0 === log) return;
        if (void 0 !== entry.pid) log.setPid(entry.pid);
        log.finish({
            exitCode,
            aborted
        });
        entry.bytes = log.bytes;
    }
    #writeExecReply(run, exec, field, payload) {
        if (!run.writeMessage(encodeExecClientMessageEnvelope(encodeExecClientMessage(exec.id, exec.execId, field, payload)))) throw new Error("Cursor tool continuation bridge closed before accepting the result");
        run.writeMessage(encodeExecStreamClose(exec.id));
    }
    async #answerNativeSearch({ world, exec, classified, id, run, debug, signal }) {
        let result;
        try {
            result = await execSearch(world, classified, {
                signal
            });
        } catch (error) {
            result = {
                error: error instanceof Error ? error.message : String(error)
            };
        }
        this.#writeExecReply(run, exec, EXEC_REPLY_FIELDS.grepArgs, encodeGrepSearchResult(classified, result));
        const meta = searchMetaFromResult(classified, result);
        settleCursorJoin(id, {
            text: searchResultSummary(classified, result),
            isError: result?.error !== void 0,
            ...void 0 !== meta ? {
                meta
            } : {}
        });
        debug(`exec grepArgs id=${exec.id} → ${classified.displayName} (exec-plane)`);
    }
    async #answerNativeFs({ world, exec, id, rawId, run, persisted, debug, signal }) {
        const translated = translateNativeExec(exec);
        if (void 0 === translated) return void failCursorJoin(id, new Error("Cursor exec could not be translated"));
        if (void 0 !== translated.reject) {
            this.#writeExecReply(run, exec, translated.field, translated.reject);
            settleCursorJoin(id, {
                text: "binary file writes (file_bytes) are not supported",
                isError: true
            });
            return;
        }
        persisted.probeReads ??= new Map();
        if ("readArgs" === exec.case) {
            try {
                const value = await execRead(world, {
                    path: exec.args?.path,
                    signal
                });
                const joinPath = exec.args?.path ?? value.path;
                if ("image" === value.kind) {
                    this.#writeExecReply(run, exec, translated.field, translated.encode("", false, {
                        data: value.data,
                        fileSize: Number.isSafeInteger(value.fileSize) ? value.fileSize : value.bytes
                    }));
                    settleCursorJoin(id, {
                        text: formatImageReadJoinText(joinPath, value.mime, value.bytes, {
                            width: value.width,
                            height: value.height,
                            originalDimensions: value.originalDimensions
                        }),
                        meta: {
                            path: joinPath,
                            offset: 1,
                            lines: [],
                            totalLines: 0
                        }
                    });
                    return;
                }
                const offset = "number" == typeof exec.args?.offset ? exec.args.offset : void 0;
                const limit = "number" == typeof exec.args?.limit ? exec.args.limit : void 0;
                const window = composeReadWindow(value.content, {
                    offset,
                    limit
                });
                this.#writeExecReply(run, exec, translated.field, translated.encode(value.content, false, {
                    fileSize: value.bytes
                }));
                noteProbeRead(persisted.probeReads, rawId, {
                    localId: id,
                    path: exec.args?.path ?? value.path,
                    content: value.content
                });
                settleCursorJoin(id, {
                    text: formatReadJoinText(joinPath, window),
                    meta: readPresentationMeta(joinPath, window.content, {
                        offset: window.startLine,
                        totalLines: window.totalLines
                    })
                });
            } catch (error) {
                const text = error instanceof Error ? error.message : String(error);
                const invalidFile = error?.code === "READ_INVALID_FILE";
                this.#writeExecReply(run, exec, translated.field, translated.encode(text, true, {
                    invalidFile,
                    reason: text
                }));
                if (/^(?:Error: )?cannot read ".*": not found$/.test(text)) noteProbeRead(persisted.probeReads, rawId, {
                    localId: id,
                    path: exec.args?.path ?? "",
                    content: "",
                    error: text
                });
                settleCursorJoin(id, {
                    text,
                    isError: true
                });
            }
            return;
        }
        if ("writeArgs" === exec.case) {
            const probe = takeProbeRead(persisted.probeReads, rawId);
            const newText = exec.args?.fileText ?? "";
            try {
                const value = await execWrite(world, {
                    path: exec.args?.path,
                    content: newText,
                    signal,
                    callId: id
                });
                this.#writeExecReply(run, exec, translated.field, translated.encode("ok", false));
                const paired = void 0 !== probe && void 0 === probe.error;
                settleCursorJoin(id, {
                    text: `${"create" === value.operation ? "Created" : paired ? "Edited" : "Updated"} ${value.path}`,
                    meta: {
                        path: value.path,
                        oldText: paired ? String(probe.content ?? "") : null,
                        newText
                    }
                });
            } catch (error) {
                const text = error instanceof Error ? error.message : String(error);
                this.#writeExecReply(run, exec, translated.field, translated.encode(text, true));
                settleCursorJoin(id, {
                    text,
                    isError: true
                });
            }
            return;
        }
        if ("deleteArgs" === exec.case) try {
            const value = await execDelete(world, {
                path: exec.args?.path,
                signal,
                callId: id
            });
            const text = `Deleted ${value.path} (${value.fileSize} bytes)`;
            this.#writeExecReply(run, exec, translated.field, translated.encode(text, false));
            settleCursorJoin(id, {
                text
            });
        } catch (error) {
            const text = error instanceof Error ? error.message : String(error);
            this.#writeExecReply(run, exec, translated.field, translated.encode(text, true));
            settleCursorJoin(id, {
                text,
                isError: true
            });
        }
    }
    async #answerNativeShell({ world, exec, id, run, persisted, terminalsFolder, debug, signal }) {
        const args = exec.args ?? {};
        const command = args.command ?? "";
        const workdir = args.workingDirectory ?? "";
        const timeoutMs = Number.isSafeInteger(args.timeout) && args.timeout > 0 ? args.timeout : 120000;
        const timeoutBehavior = Number.isSafeInteger(args.timeoutBehavior) ? args.timeoutBehavior : 0;
        const holder = {
            channel: void 0
        };
        shellStreamChannels.set(id, holder);
        try {
            const started = await startCursorShell(world, {
                command,
                workdir,
                timeoutMs,
                timeoutBehavior,
                sandboxPolicy: args.sandboxPolicy,
                signal,
                callId: id
            });
            holder.channel = started.channel;
            pumpCursorShell(started, {
                sleep: sleep,
                createPidProbe: createPidProbe
            }).catch((error)=>{
                started.channel.error = error instanceof Error ? error.message : String(error);
                started.channel.exitCode = 1;
                started.channel.done = true;
            });
            this.#forwardShellStream(exec, id, run, debug, persisted, terminalsFolder, signal).then(()=>{
                const channel = started.channel;
                const failed = void 0 !== channel.error || 0 !== channel.exitCode && null !== channel.exitCode && true !== channel.backgrounded;
                const text = true === channel.backgrounded ? `${channel.stdout}\nstarted background job ${channel.jobId ?? `bash-${channel.pid ?? id}`}` : `${channel.stdout}${0 === channel.exitCode ? "" : `\n[exit code: ${channel.exitCode}]`}`;
                settleCursorJoin(id, {
                    text,
                    isError: failed
                });
            }, (forwardError)=>{
                settleCursorJoin(id, {
                    text: forwardError instanceof Error ? forwardError.message : String(forwardError),
                    isError: true
                });
            });
        } catch (error) {
            const text = error instanceof Error ? error.message : String(error);
            holder.channel = {
                chunks: [],
                stdout: "",
                done: true,
                exitCode: 1,
                error: text
            };
            this.#forwardShellStream(exec, id, run, debug, persisted, terminalsFolder, signal).then(()=>settleCursorJoin(id, {
                    text,
                    isError: true
                }), ()=>settleCursorJoin(id, {
                    text,
                    isError: true
                }));
        }
    }
    async #answerNativeBgShell({ world, exec, id, run, persisted, terminalsFolder, debug, signal }) {
        const args = exec.args ?? {};
        const command = args.command ?? "";
        const workdir = args.workingDirectory ?? "";
        try {
            const started = await startCursorShell(world, {
                command,
                workdir,
                background: true,
                sandboxPolicy: args.sandboxPolicy,
                signal,
                callId: id
            });
            const shellId = started.shellId ?? nextBgShellId++;
            persisted.shells ??= new Map();
            const startedAt = Date.now();
            const filePath = join(terminalsFolder ?? node_os.tmpdir(), `${shellId}.txt`);
            const entry = {
                shellId,
                ...void 0 !== started.jobId ? {
                    jobId: String(started.jobId)
                } : {},
                pid: void 0,
                pidProbe: createPidProbe(),
                command,
                cwd: workdir,
                title: args.description,
                proc: started.proc,
                filePath,
                log: "string" == typeof terminalsFolder && terminalsFolder.length > 0 ? createCursorTerminalLog(filePath, {
                    cwd: workdir,
                    command,
                    title: args.description,
                    startedAtMs: startedAt
                }) : void 0,
                startedAt,
                lastActivityAt: startedAt,
                absoluteTimer: setTimeout(()=>{
                    try {
                        started.proc.kill();
                    } catch  {}
                }, CursorRunPump.BACKGROUND_SHELL_ABSOLUTE_MS),
                bytes: 0
            };
            entry.absoluteTimer.unref?.();
            persisted.shells.set(shellId, entry);
            this.#ensureBackgroundDrain(shellId, persisted, debug);
            await this.#waitForBackgroundPid(entry);
            this.#writeExecReply(run, exec, 16, encodeBackgroundShellSpawnSuccess({
                shellId,
                command,
                workingDirectory: workdir,
                ...void 0 !== entry.pid ? {
                    pid: entry.pid
                } : {}
            }));
            settleCursorJoin(id, {
                text: `started background job ${started.jobId ?? `bash-${shellId}`}`
            });
            debug(`exec backgroundShellSpawnArgs id=${exec.id} shellId=${shellId} job=${started.jobId ?? "none"}`);
        } catch (error) {
            const text = error instanceof Error ? error.message : String(error);
            this.#writeExecReply(run, exec, 16, encodeBackgroundShellSpawnError({
                command,
                workingDirectory: workdir,
                error: text
            }));
            settleCursorJoin(id, {
                text,
                isError: true
            });
        }
    }
    async #waitForAllShellForwarders(debug) {
        const tasks = [
            ...this.#shellForwarders.values()
        ];
        if (0 === tasks.length) return;
        debug?.(`waiting for ${tasks.length} shell forwarder(s)`);
        await Promise.allSettled(tasks);
    }
    #evictStaleSessions() {
        const now = this.now();
        for (const [key, state] of this.#sessions)if (!(now - (state.lastAccessMs ?? now) <= this.sessionStateTtlMs)) {
            state.bridge?.pump?.terminate(new Error("Cursor session state expired"));
            state.bridge?.run.close();
            this.#killSessionShells(state);
            this.#sessions.delete(key);
        }
    }
    #sessionIdentity(sessionId) {
        if (void 0 === sessionId) return;
        try {
            const header = this.agents?.get(sessionId)?.session?.header;
            if (null == header || !Number.isInteger(header.createdAt) || header.createdAt < 0) return;
            return {
                createdAt: header.createdAt,
                ..."string" == typeof header.cwd && header.cwd.length > 0 ? {
                    cwd: header.cwd
                } : {}
            };
        } catch  {
            return;
        }
    }
    #liveSession(sessionKey) {
        if (void 0 === sessionKey) return;
        try {
            return this.agents?.get(sessionKey)?.session;
        } catch  {
            return;
        }
    }
    #appendCheckpointMarker(sessionKey, record) {
        const session = this.#liveSession(sessionKey);
        if (null == session) return;
        try {
            appendCursorCheckpointEvent(session, {
                schemaVersion: CURSOR_CHECKPOINT_SCHEMA_VERSION,
                conversationId: record.conversationId,
                checkpoint: record.checkpoint,
                blobs: record.blobs ?? {},
                ...void 0 === record.tokenDetails ? {} : {
                    tokenDetails: record.tokenDetails
                }
            }, this.publishSessionEvent);
        } catch (error) {
            cursorAgentDebug(`checkpoint log event failed: ${error instanceof Error ? error.message : String(error)}`);
        }
    }
    #persistCheckpoint(sessionKey, persisted) {
        if (void 0 === sessionKey || void 0 === this.checkpointStore) return;
        return this.checkpointStore.persist(sessionKey, persisted, this.#sessionIdentity(sessionKey)).then((record)=>{
            if (null != record) this.#appendCheckpointMarker(sessionKey, record);
            return record;
        });
    }
    #sessionEvents(sessionKey) {
        const session = this.#liveSession(sessionKey);
        if (null == session) return {
            session,
            events: []
        };
        const events = "function" == typeof session.snapshotEvents ? session.snapshotEvents() : Array.isArray(session.log) ? session.log : [];
        return {
            session,
            events
        };
    }
    #copyPersisted(source, prior, keepLive) {
        return {
            checkpoint: source?.checkpoint === void 0 ? void 0 : Uint8Array.from(source.checkpoint),
            blobs: new Map(source?.blobs ?? (keepLive ? prior?.blobs : void 0) ?? []),
            todosFingerprint: keepLive ? prior?.todosFingerprint : void 0,
            conversationId: source?.conversationId ?? (keepLive ? prior?.conversationId : void 0) ?? randomUUID(),
            generationId: randomUUID(),
            pendingQuestions: keepLive && prior?.pendingQuestions !== void 0 ? [
                ...prior.pendingQuestions
            ] : [],
            shells: keepLive ? prior?.shells : void 0,
            probeReads: new Map(),
            tokenDetails: source?.tokenDetails ?? (keepLive ? prior?.tokenDetails : void 0)
        };
    }
    async #hydratePersisted(sessionKey, prior) {
        let loaded;
        let logDecided = false;
        if (void 0 !== this.checkpointStore) try {
            const { session, events } = this.#sessionEvents(sessionKey);
            if (null != session && listCursorCheckpointEvents(events).length > 0) {
                logDecided = true;
                const picked = pickCursorCheckpointEvent(events, session.surface?.nodes);
                if (null != picked && prior?.checkpoint !== void 0 && pointerMatchesCheckpoint(picked.data.checkpoint, prior.checkpoint)) return this.#copyPersisted(prior, prior, true);
                if (null != picked) loaded = await this.checkpointStore.loadPointers(picked.data);
            } else if (prior?.checkpoint === void 0 && void 0 !== sessionKey) loaded = await this.checkpointStore.load(sessionKey, this.#sessionIdentity(sessionKey));
        } catch (error) {
            cursorAgentDebug(`checkpoint load failed: ${error instanceof Error ? error.message : String(error)}`);
        }
        if (logDecided) return this.#copyPersisted(loaded, void 0, false);
        const source = prior?.checkpoint !== void 0 ? prior : loaded ?? prior;
        return this.#copyPersisted(source, prior, true);
    }
    invalidateDiscovery() {
        this.#modelsCache = {
            at: 0,
            models: void 0,
            catalog: void 0
        };
    }
    async #discoverModels(force = false) {
        const now = this.now();
        if (!force && void 0 !== this.#modelsCache.models && now - this.#modelsCache.at < this.modelsCacheTtlMs) return this.#modelsCache.models;
        let catalog = [];
        try {
            const access = await this.auth.accessToken();
            try {
                catalog = catalogFromAvailableModels(await this.fetchAvailableModels(access, {
                    baseUrl: this.settings().apiBaseUrl
                }));
            } catch  {}
            if (0 === catalog.length) {
                let models = [];
                try {
                    models = await this.fetchModels(access, {
                        baseUrl: this.settings().apiBaseUrl
                    });
                } catch  {
                    models = [];
                }
                const source = models.length > 0 ? models : this.fallbackModels;
                catalog = source.map((model)=>({
                        id: model.id,
                        name: model.name || model.id,
                        aliases: [],
                        efforts: [],
                        contextWindow: Number.isFinite(model.contextWindow) && model.contextWindow > 0 ? model.contextWindow : DEFAULT_CONTEXT_WINDOW,
                        supportsImages: false
                    }));
            }
        } catch  {
            catalog = this.fallbackModels.map((model)=>({
                    id: model.id,
                    name: model.name || model.id,
                    aliases: [],
                    efforts: [],
                    contextWindow: model.contextWindow,
                    supportsImages: false
                }));
        }
        const result = catalog.map((entry)=>({
                id: entry.id,
                name: entry.name || entry.id,
                inputModalities: inputModalitiesFromCatalog(entry),
                contextWindow: Number.isFinite(entry.contextWindow) && entry.contextWindow > 0 ? entry.contextWindow : DEFAULT_CONTEXT_WINDOW
            }));
        this.#modelsCache = {
            at: now,
            models: result,
            catalog
        };
        return result;
    }
    async #resolveActionImages(options, persisted, selection, signal) {
        const blocks = collectImageBlocks(classifyTurnIngress(options).users.map((entry)=>entry.message));
        if (0 === blocks.length) return [];
        const entry = (this.#modelsCache.catalog ?? []).find((candidate)=>candidate.id === selection.modelId);
        if (void 0 !== entry && true !== entry.supportsImages) throw new LlmError(`Cursor model "${selection.modelId}" does not accept image input`, "UNSUPPORTED_CONTENT");
        return resolveSelectedImages(blocks, this.attachments?.(), signal);
    }
    #runSelection(options) {
        return resolveCursorModelSelection(this.#modelsCache.catalog ?? [], options.model, options.reasoningEffort);
    }
    #runModelOptions(options, selection = this.#runSelection(options)) {
        if (true !== selection.fromCatalog) return options;
        return {
            ...options,
            useRequestedModel: true,
            requestedModelParameters: selection.parameters,
            requestedMaxMode: selection.maxMode
        };
    }
    providerInfo(provider) {
        return {
            id: provider,
            name: "Cursor Agent"
        };
    }
    async listModels(provider) {
        const models = await this.#discoverModels();
        return models.map((model)=>({
                provider,
                ...model
            }));
    }
    async listModelsForRpc({ force = false, signal } = {}) {
        const models = await this.#discoverModels(force);
        if (signal?.aborted) throw new LlmError("Cursor model listing aborted", "ABORTED");
        return models;
    }
    async resolveModel(provider, model, _signal) {
        let name = model;
        let reasoning;
        let catalog = [];
        try {
            await this.#discoverModels();
            catalog = this.#modelsCache.catalog ?? [];
            const listed = this.#modelsCache.models ?? [];
            const found = listed.find((entry)=>entry.id === model);
            if (void 0 !== found) name = found.name;
            const match = catalog.find((entry)=>entry.id === model) ?? catalog.find((entry)=>entry.aliases.includes(model)) ?? catalog.find((entry)=>entry.efforts.some((effort)=>effort.id === model || effort.legacySlug === model || effort.variantStringRepresentation === model || model === `${entry.id}-${effort.id}`));
            if (void 0 !== match) {
                if (void 0 === found) name = match.name || match.id;
                reasoning = reasoningFromCatalogEntry(match);
            }
        } catch  {}
        const selection = resolveCursorModelSelection(catalog, model);
        const catalogEntry = catalog.find((entry)=>entry.id === selection.modelId);
        const catalogWindow = Number.isFinite(selection.contextWindow) && selection.contextWindow > 0 ? selection.contextWindow : void 0;
        return {
            provider,
            id: model,
            name,
            inputModalities: inputModalitiesFromCatalog(catalogEntry),
            context: {
                contextWindow: this.#contextWindowByModel.get(model) ?? catalogWindow ?? DEFAULT_CONTEXT_WINDOW
            },
            defaultMaxTokens: DEFAULT_MAX_TOKENS,
            ...void 0 === reasoning ? {} : {
                reasoning
            }
        };
    }
    async *#emitSessionTitle(options, upstream) {
        const userMessage = extractSessionTitleUserMessage(options);
        if (0 === userMessage.length) throw new LlmError("Cursor NameAgent requires a non-empty user message", "INVALID_REQUEST");
        const access = await this.auth.accessToken({
            signal: upstream
        });
        const named = await this.nameAgent(access, userMessage, {
            signal: upstream,
            baseUrl: this.settings().apiBaseUrl
        });
        const title = "string" == typeof named ? named.trim() : "";
        if (0 === title.length) throw new LlmError("Cursor NameAgent returned an empty title", "CURSOR_ERROR");
        yield {
            type: "block-start",
            index: 0,
            blockType: "text"
        };
        yield {
            type: "text-delta",
            index: 0,
            text: title
        };
        yield {
            type: "block-end",
            index: 0,
            block: {
                type: "text",
                text: title
            }
        };
        yield {
            type: "finish",
            reason: {
                kind: "stop"
            }
        };
    }
    async summarizeConversation({ sessionId, model, signal } = {}) {
        let summary = "";
        for await (const chunk of this.stream({
            purpose: "cursor-summarize",
            sessionId,
            model,
            provider: PROVIDER,
            signal,
            messages: []
        })){
            if ("text-delta" === chunk.type) summary += chunk.text;
            if ("finish" === chunk.type && chunk.reason?.kind === "error") {
                const failure = chunk.reason.failure ?? {};
                throw new LlmError(failure.message ?? "Cursor summarize failed", failure.code ?? "CURSOR_ERROR");
            }
        }
        return {
            summary
        };
    }
    async *stream(options) {
        const consumer = new AbortController();
        const upstream = void 0 === options.signal ? consumer.signal : AbortSignal.any([
            options.signal,
            consumer.signal
        ]);
        const sessionKey = void 0 === options.sessionId ? void 0 : String(options.sessionId);
        if ("session-title" === options.purpose) {
            try {
                this.gate?.(sessionKey);
                if (void 0 !== options.stop) throw new LlmError("cursor-agent does not support GenerateOptions.stop", "UNSUPPORTED_OPTION");
                yield* this.#emitSessionTitle(options, upstream);
            } catch (error) {
                yield finishChunkForStreamError(error, upstream);
            } finally{
                consumer.abort("cursor stream consumer stopped");
            }
            return;
        }
        if ("compaction" === options.purpose) {
            try {
                throw new LlmError("cursor-agent does not support GenerateOptions.purpose \"compaction\"; Cursor summarizes on the server.", "UNSUPPORTED_OPTION");
            } catch (error) {
                yield finishChunkForStreamError(error, upstream);
            } finally{
                consumer.abort("cursor stream consumer stopped");
            }
            return;
        }
        let run;
        let abortRun;
        let pump;
        let bridgeStored = false;
        let leftoverPending = [];
        let waitWork = async ()=>{};
        const terminalsFolder = void 0 !== this.terminalsRoot && void 0 !== sessionKey ? join(this.terminalsRoot, sessionKey) : void 0;
        this.#evictStaleSessions();
        const prior = void 0 === sessionKey ? void 0 : this.#sessions.get(sessionKey);
        const liveBridge = prior?.bridge;
        const livePump = liveBridge?.pump;
        const bridgeAlive = void 0 !== liveBridge && void 0 !== livePump && !livePump.stopped && !liveBridge.run.finished && !liveBridge.run.stream?.destroyed;
        const toolResults = collectToolResults(options);
        const ingress = classifyTurnIngress(options);
        const summarizeOnly = "cursor-summarize" === options.purpose;
        const canResume = bridgeAlive && toolResults.length > 0 && !summarizeOnly;
        const writeSummarizeOnLive = summarizeOnly && bridgeAlive;
        let persisted = canResume && void 0 !== livePump.persisted ? livePump.persisted : await this.#hydratePersisted(sessionKey, prior);
        persisted.pendingQuestions ??= [];
        persisted.probeReads ??= new Map();
        persisted.displayCallIds ??= liveBridge?.displayCallIds ?? prior?.displayCallIds ?? new Map();
        persisted.pendingDisplayCalls ??= liveBridge?.pendingDisplayCalls ?? prior?.pendingDisplayCalls ?? new Map();
        const debug = cursorAgentDebug;
        try {
            this.gate?.(sessionKey);
            if (void 0 !== options.stop) throw new LlmError("cursor-agent does not support GenerateOptions.stop", "UNSUPPORTED_OPTION");
            const requestSettings = resolveCursorSettings(this.settings());
            const mcpTools = (options.tools ?? []).filter((tool)=>!isCursorNativeTool(tool.name) && !isDeniedCursorMcpTool(tool.name)).map((tool)=>encodeMcpToolDefinition({
                    name: tool.name,
                    description: tool.description,
                    inputSchema: encodeValue(tool.parameters ?? {})
                }));
            const usedToolCallIds = liveBridge?.usedToolCallIds ?? new Set();
            const displayCallIds = persisted.displayCallIds;
            const pendingDisplayCalls = persisted.pendingDisplayCalls;
            const questionMatch = (()=>{
                for (const question of persisted.pendingQuestions){
                    const result = toolResults.find((entry)=>entry.toolCallId === question.toolCallId);
                    if (void 0 !== result) return {
                        question,
                        result
                    };
                }
            })();
            let toolRoundCount = canResume || writeSummarizeOnLive ? liveBridge.toolRoundCount ?? 0 : 0;
            let blobStore;
            let parkForLeftovers = false;
            if (writeSummarizeOnLive) {
                run = liveBridge.run;
                pump = livePump;
                blobStore = livePump.blobStore;
                persisted.blobs = livePump.blobStore;
                abortRun = ()=>run.abort(new Error("Cursor request aborted by caller"));
                upstream.addEventListener("abort", abortRun, {
                    once: true
                });
                if (upstream.aborted) abortRun();
                if (!run.writeMessage(encodeConversationActionMessage(encodeSummarizeAction()))) throw new Error("Cursor agent bridge closed before accepting summarize");
                debug("summarize on live run");
            } else if (canResume) {
                run = liveBridge.run;
                pump = livePump;
                blobStore = livePump.blobStore;
                persisted.blobs = livePump.blobStore;
                abortRun = ()=>run.abort(new Error("Cursor request aborted by caller"));
                upstream.addEventListener("abort", abortRun, {
                    once: true
                });
                if (upstream.aborted) abortRun();
                const partitioned = partitionPendingExecs(liveBridge.pendingExecs, toolResults);
                leftoverPending = partitioned.leftover;
                parkForLeftovers = leftoverPending.some((entry)=>"shell" !== entry.kind && "join" !== entry.kind);
                if (leftoverPending.length > 0) debug(`resume leftover ${leftoverPending.length} exec(s) (${leftoverPending.map((entry)=>entry.kind).join(",")}); park=${parkForLeftovers}`);
                for (const { pending, result } of partitioned.ready){
                    if ("join" === pending.kind) {
                        debug(`resume join toolCallId=${pending.toolCallId} (wire already answered)`);
                        continue;
                    }
                    if ("shell" === pending.kind) {
                        const forwarded = this.#shellForwarders.get(pending.id);
                        if (void 0 !== forwarded) {
                            debug(`resume shell id=${pending.id} waiting for stream task`);
                            await forwarded;
                        } else debug(`resume shell id=${pending.id} (result already forwarded by the stream task)`);
                        continue;
                    }
                    if ("bgshell" === pending.kind) {
                        let bg = bgShellSpawns.get(pending.toolCallId);
                        if (void 0 === bg) {
                            const deadline = Date.now() + 2000;
                            while(void 0 === bg && Date.now() < deadline){
                                await sleep(20);
                                bg = bgShellSpawns.get(pending.toolCallId);
                            }
                        }
                        bgShellSpawns.delete(pending.toolCallId);
                        if (bg?.proc !== void 0) {
                            const shellId = bg.shellId;
                            persisted.shells ??= new Map();
                            const startedAt = Date.now();
                            const filePath = join(terminalsFolder ?? node_os.tmpdir(), `${shellId}.txt`);
                            const entry = {
                                shellId,
                                ...void 0 !== bg.jobId ? {
                                    jobId: String(bg.jobId)
                                } : {},
                                pid: void 0,
                                pidProbe: createPidProbe(),
                                command: pending.command,
                                cwd: pending.cwd,
                                title: pending.description,
                                proc: bg.proc,
                                filePath,
                                log: "string" == typeof terminalsFolder && terminalsFolder.length > 0 ? createCursorTerminalLog(filePath, {
                                    cwd: pending.cwd,
                                    command: pending.command,
                                    title: pending.description,
                                    startedAtMs: startedAt
                                }) : void 0,
                                startedAt,
                                lastActivityAt: startedAt,
                                absoluteTimer: setTimeout(()=>{
                                    try {
                                        bg.proc.kill();
                                    } catch  {}
                                }, CursorRunPump.BACKGROUND_SHELL_ABSOLUTE_MS),
                                bytes: 0
                            };
                            entry.absoluteTimer.unref?.();
                            persisted.shells.set(shellId, entry);
                            this.#ensureBackgroundDrain(shellId, persisted, debug);
                            await this.#waitForBackgroundPid(entry);
                            debug(`resume bgshell id=${pending.id} shellId=${shellId} job=${bg.jobId ?? "none"} pid=${entry.pid ?? "none"} spawned`);
                            run.writeMessage(encodeExecClientMessageEnvelope(encodeExecClientMessage(pending.id, pending.execId, 16, encodeBackgroundShellSpawnSuccess({
                                shellId,
                                command: pending.command,
                                workingDirectory: pending.cwd,
                                ...void 0 !== entry.pid ? {
                                    pid: entry.pid
                                } : {}
                            }))));
                        } else {
                            debug(`resume bgshell id=${pending.id} failed: ${bg?.error ?? "spawn failed"}`);
                            run.writeMessage(encodeExecClientMessageEnvelope(encodeExecClientMessage(pending.id, pending.execId, 16, encodeBackgroundShellSpawnError({
                                command: pending.command,
                                workingDirectory: pending.cwd,
                                error: bg?.error ?? "spawn failed"
                            }))));
                        }
                        run.writeMessage(encodeExecStreamClose(pending.id));
                        continue;
                    }
                    if ("exec" === pending.kind) {
                        debug(`resume exec id=${pending.id} toolCallId=${pending.toolCallId} result=${result.isError ? "error" : "ok"}:${result.content.length} chars`);
                        const payload = pending.encode(result.content, result.isError);
                        if (!run.writeMessage(encodeExecClientMessageEnvelope(encodeExecClientMessage(pending.id, pending.execId, pending.field, payload)))) throw new Error("Cursor tool continuation bridge closed before accepting the result");
                        debug(`stream_close id=${pending.id}`);
                        run.writeMessage(encodeExecStreamClose(pending.id));
                    } else if ("mcp" === pending.kind) {
                        debug(`resume mcp id=${pending.id} toolCallId=${pending.toolCallId} result=${result.isError ? "error" : "ok"}:${result.content.length} chars`);
                        const payload = encodeMcpResult(result);
                        if (!run.writeMessage(encodeExecClientMessageEnvelope(encodeExecClientMessage(pending.id, pending.execId, 11, payload)))) throw new Error("Cursor tool continuation bridge closed before accepting the result");
                        debug(`stream_close id=${pending.id}`);
                        run.writeMessage(encodeExecStreamClose(pending.id));
                    }
                }
            } else {
                if (void 0 !== liveBridge) {
                    await this.#waitForShellForwarders(liveBridge.pendingExecs, debug);
                    livePump?.terminate(new Error("Cursor conversation bridge replaced by a new turn"));
                    liveBridge.run.close();
                }
                const access = await this.auth.accessToken({
                    signal: upstream
                });
                await this.#discoverModels();
                const selection = this.#runSelection(options);
                const selectedImages = await this.#resolveActionImages(options, persisted, selection, upstream);
                const runOptions = {
                    ...this.#runModelOptions(options, selection),
                    selectedImages
                };
                const requestedModel = true === selection.fromCatalog ? encodeRequestedModel(selection) : void 0;
                let built;
                let replayingQuestion = false;
                if (summarizeOnly) {
                    const conversationState = persisted.checkpoint ?? encodeConversationState({
                        rootPromptBlobIds: [],
                        turns: []
                    });
                    built = buildCustomRunPayload({
                        conversationState,
                        actionBytes: encodeSummarizeAction(),
                        modelId: selection.modelId,
                        conversationId: persisted.conversationId,
                        blobStore: persisted.blobs,
                        requestedModel,
                        runId: persisted.generationId
                    });
                    debug(`summarize run checkpoint=${void 0 !== persisted.checkpoint} conversation=${persisted.conversationId}`);
                } else if (void 0 !== questionMatch) {
                    const { question, result } = questionMatch;
                    replayingQuestion = true;
                    debug(`async ask-question completion toolCallId=${question.toolCallId} result=${result.isError ? "error" : "ok"}`);
                    const resultBytes = buildAskQuestionResultBytes(question.questions, result);
                    const actionBytes = encodeAsyncAskQuestionCompletionAction({
                        originalToolCallId: question.toolCallId,
                        originalArgsBytes: question.rawArgs,
                        resultBytes
                    });
                    const conversationState = persisted.checkpoint ?? encodeConversationState({
                        rootPromptBlobIds: [],
                        turns: []
                    });
                    built = buildCustomRunPayload({
                        conversationState,
                        actionBytes,
                        modelId: selection.modelId,
                        conversationId: persisted.conversationId,
                        blobStore: persisted.blobs,
                        requestedModel,
                        runId: persisted.generationId
                    });
                } else if (void 0 !== liveBridge && (liveBridge.pendingExecs?.length ?? 0) > 0 && toolResults.length > 0) {
                    persisted.blobs = adoptBlobStore(persisted.blobs, livePump?.blobStore);
                    const stepBlobs = [];
                    for (const pending of liveBridge.pendingExecs){
                        if ("mcp" !== pending.kind) {
                            debug(`replay skip ${pending.kind} id=${pending.id} (no replay channel)`);
                            continue;
                        }
                        const result = toolResults.find((entry)=>entry.toolCallId === pending.toolCallId);
                        if (void 0 === result) {
                            debug(`replay skip mcp id=${pending.id} (result not yet available)`);
                            continue;
                        }
                        stepBlobs.push(encodeMcpToolCallStep(pending.rawArgs, encodeMcpResult(result)));
                    }
                    if (0 === stepBlobs.length) built = buildRunPayload(runOptions, selection.modelId, persisted, persisted.conversationId);
                    else {
                        debug(`replay run: ${stepBlobs.length} MCP step(s)`);
                        blobStore = persisted.blobs;
                        const turnId = encodeReplayTurnBlob(blobStore, {
                            stepBlobs
                        });
                        const conversationState = void 0 !== persisted.checkpoint ? appendTurnsToCheckpoint(persisted.checkpoint, [
                            turnId
                        ]) : encodeConversationState({
                            rootPromptBlobIds: [],
                            turns: [
                                turnId
                            ]
                        });
                        built = buildCustomRunPayload({
                            conversationState,
                            actionBytes: encodeResumeAction(),
                            modelId: selection.modelId,
                            conversationId: persisted.conversationId,
                            blobStore,
                            requestedModel,
                            runId: persisted.generationId
                        });
                    }
                } else {
                    built = buildRunPayload(runOptions, selection.modelId, persisted, persisted.conversationId);
                    debug(`new run checkpoint=${void 0 !== persisted.checkpoint} conversation=${persisted.conversationId}`);
                }
                blobStore = adoptBlobStore(persisted.blobs, built.blobStore);
                persisted.blobs = blobStore;
                let retriesUsed = 0;
                for(;;){
                    run = this.createAgentRun(access);
                    await run.start();
                    abortRun = ()=>run.abort(new Error("Cursor request aborted by caller"));
                    upstream.addEventListener("abort", abortRun, {
                        once: true
                    });
                    if (upstream.aborted) abortRun();
                    if (!run.writeMessage(built.payload)) throw new Error("Cursor agent bridge closed before accepting the request");
                    const status = await run.waitForResponse(this.idleTimeoutMs);
                    if (isSuccessfulAgentResponse(status, run.responseContentType)) {
                        run.startHeartbeat();
                        break;
                    }
                    upstream.removeEventListener("abort", abortRun);
                    abortRun = void 0;
                    run.close();
                    if (200 === status) throw new LlmError(`Cursor agent returned an unexpected content type: ${run.responseContentType ?? "missing"}`, "CURSOR_PROTOCOL");
                    if (!shouldRetryHttpStatus(status, retriesUsed, requestSettings)) {
                        const message = `Cursor agent returned HTTP ${status}`;
                        throw new LlmError(message, classifyCursorError(message));
                    }
                    retriesUsed++;
                    await this.sleep(requestSettings.retryIntervalMs, upstream);
                }
                if (replayingQuestion) persisted.pendingQuestions = persisted.pendingQuestions.filter((entry)=>entry.toolCallId !== questionMatch.question.toolCallId);
            }
            if (void 0 === pump) pump = new CursorRunPump({
                run,
                persisted,
                sessionKey,
                mcpTools,
                parkedTimeoutMs: requestSettings.parkedBridgeTimeoutMs,
                syncTodos: void 0 !== this.syncTodos ? this.syncTodos.bind(this) : void 0,
                debug,
                shellService: this.shellService,
                jobs: this.jobs,
                terminalsFolder,
                sessionCwd: this.agents?.get(sessionKey)?.session?.header?.cwd,
                sandboxPolicy: this.sandboxPolicy,
                agent: this.agents?.get(sessionKey),
                systemText: ingress.systemText,
                generationId: persisted.generationId,
                attachments: this.attachments,
                persistCheckpoint: void 0 === sessionKey || void 0 === this.checkpointStore ? void 0 : (state)=>this.#persistCheckpoint(sessionKey, state)
            });
            pump.mcpTools = mcpTools;
            pump.blobStore = blobStore;
            pump.systemText = ingress.systemText;
            pump.generationId = persisted.generationId ?? pump.generationId;
            pump.summarizeKeepTail = !summarizeOnly;
            if (pump.persisted !== persisted) pump.persisted = persisted;
            if (!summarizeOnly) await pump.injectTurnIngress(ingress, {
                includeUsers: canResume
            });
            const started = this.now();
            let lastActivity = started;
            let lastProgress = started;
            let workInFlight = 0;
            const workTasks = [];
            const trackWork = (promise)=>{
                workInFlight += 1;
                const tracked = Promise.resolve(promise).finally(()=>{
                    workInFlight -= 1;
                    lastProgress = this.now();
                    lastActivity = this.now();
                });
                workTasks.push(tracked);
                return tracked;
            };
            waitWork = async ()=>{
                if (0 === workTasks.length) return;
                await Promise.allSettled(workTasks.splice(0, workTasks.length));
            };
            const hasNativeWork = ()=>workInFlight > 0 || this.#shellForwarders.size > 0;
            const idleCheck = setInterval(()=>{
                const now = this.now();
                if (now - lastActivity > this.idleTimeoutMs) run.abort(new Error("Cursor stream idle timeout"));
                else if (!hasNativeWork() && now - lastProgress > this.progressTimeoutMs) run.abort(new Error(`Cursor stream progress timeout: no content for ${this.progressTimeoutMs}ms`));
            }, this.idleCheckIntervalMs);
            idleCheck.unref?.();
            pump.activityHook = ()=>{
                lastActivity = this.now();
            };
            pump.attach();
            let emittedToolCall = false;
            let toolCallBuffer;
            let textOutput = "";
            let outputTokens = 0;
            let turnUsage;
            let streamClosed = false;
            let terminalErrorEmitted = false;
            let toolCallPending = false;
            let toolRoundCounted = false;
            const pendingExecs = [];
            const streamBlocks = createStreamBlocks();
            let execBatchPending = false;
            const beginJoin = (id, execId)=>{
                openCursorJoin(id);
                pendingExecs.push({
                    kind: "join",
                    toolCallId: id,
                    ...void 0 !== execId ? {
                        id: execId
                    } : {}
                });
                emittedToolCall = true;
                toolCallPending = true;
                execBatchPending = true;
            };
            try {
                if (parkForLeftovers) {
                    debug("resume parked for leftover execs (partial tool results)");
                    emittedToolCall = true;
                    toolCallPending = true;
                    streamClosed = true;
                }
                for(;;){
                    if (parkForLeftovers) break;
                    const frame = await pump.next();
                    if (void 0 === frame) break;
                    lastActivity = this.now();
                    if ((frame.flags & CONNECT_END_STREAM_FLAG) !== 0) {
                        debug("frame end-stream");
                        const end = parseEndStream(frame.payload);
                        if (void 0 !== end) {
                            terminalErrorEmitted = true;
                            yield {
                                type: "finish",
                                reason: {
                                    kind: "error",
                                    failure: {
                                        message: end.message,
                                        code: classifyCursorError(`${end.code} ${end.debugCode ?? ""} ${end.message}`)
                                    }
                                }
                            };
                            streamClosed = true;
                        }
                        break;
                    }
                    const message = decodeAgentServerMessage(frame.payload);
                    debug(`frame ${message.case}${message.value?.type !== void 0 ? `:${message.value.type}` : ""}${"unknown" === message.case ? " (unparsed)" : ""}`);
                    if (!("interactionUpdate" === message.case && message.value?.type === "heartbeat")) lastProgress = this.now();
                    if (execBatchPending && isNextRoundContent(message)) {
                        debug("drain closed by next-round content");
                        pump.unread(frame);
                        streamClosed = true;
                        break;
                    }
                    if ("conversationCheckpointUpdate" === message.case) {
                        debug(`checkpoint bytes=${message.value.length}`);
                        if (toolCallPending) {
                            streamClosed = true;
                            break;
                        }
                    } else if ("interactionUpdate" === message.case) {
                        const update = message.value;
                        if ("textDelta" === update.type) {
                            if (update.text.length > 0) {
                                textOutput += update.text;
                                for (const chunk of streamBlocks.text(update.text))yield chunk;
                            }
                        } else if ("thinkingDelta" === update.type) {
                            if (update.text.length > 0) for (const chunk of streamBlocks.reasoning(update.text))yield chunk;
                        } else if ("tokenDelta" === update.type) {
                            if (Number.isFinite(update.tokens) && update.tokens > 0) outputTokens = update.tokens;
                        } else if ("turnEnded" === update.type) {
                            turnUsage = {
                                inputTokens: update.inputTokens,
                                outputTokens: update.outputTokens,
                                cacheReadTokens: update.cacheReadTokens,
                                cacheWriteTokens: update.cacheWriteTokens,
                                reasoningTokens: update.reasoningTokens
                            };
                            debug(`turnEnded tokens in=${update.inputTokens ?? 0} out=${update.outputTokens ?? 0} cacheRead=${update.cacheReadTokens ?? 0} cacheWrite=${update.cacheWriteTokens ?? 0}`);
                        } else if ("partialToolCall" === update.type) {
                            if (void 0 === toolCallBuffer || toolCallBuffer.id !== update.callId) toolCallBuffer = {
                                id: update.callId,
                                name: "",
                                arguments: ""
                            };
                            if (update.argsTextDelta.length > 0) toolCallBuffer.arguments += update.argsTextDelta;
                        } else if ("toolCallCompleted" === update.type && void 0 !== update.display && void 0 !== update.display.displayKind) {
                            const display = update.display;
                            rememberDisplayCompletion(persisted, display);
                            if ("update_todos" === display.displayKind && display.call?.error === void 0 && display.call?.todos !== void 0) this.syncTodos?.(sessionKey, normalizeCursorTodos(display.call.todos));
                            debug(`display ${display.displayKind} completed id=${displayCallIds.get(display.callId) ?? display.callId}`);
                        } else if ("toolCallStarted" === update.type && void 0 !== update.display && void 0 !== update.display.displayKind) {
                            const display = update.display;
                            const toolArgs = rendererToolArgs(display);
                            if (void 0 !== toolArgs && !displayCallIds.has(display.callId)) {
                                const id = allocateLocalToolCallId(display.callId, usedToolCallIds);
                                beginJoin(id);
                                bindDisplayCallId(persisted, display, id, {
                                    runEnded: pump.stopped
                                });
                                for (const chunk of emitToolCall(streamBlocks, {
                                    id,
                                    name: display.name,
                                    args: toolArgs
                                }))yield chunk;
                                debug(`display ${display.displayKind} → join ${display.name} id=${id}`);
                            }
                        } else if ("toolCallStarted" === update.type || "toolCallCompleted" === update.type || "toolCallDelta" === update.type) emittedToolCall = true;
                        else if ("summary" === update.type) {
                            if (summarizeOnly && update.text.length > 0) for (const chunk of streamBlocks.text(update.text))yield chunk;
                        } else if ("summaryStarted" === update.type || "summaryCompleted" === update.type) debug(`summary ${update.type}`);
                    } else if ("interactionQuery" === message.case) {
                        const query = message.value;
                        debug(`interaction ${query.case} id=${query.id}`);
                        if ("askQuestionInteractionQuery" === query.case) {
                            if (!toolRoundCounted) {
                                toolRoundCount++;
                                toolRoundCounted = true;
                            }
                            if (toolRoundCount > requestSettings.maxToolRounds) throw new LlmError(`Cursor tool-call safety limit reached after ${requestSettings.maxToolRounds} rounds. The run was stopped to prevent an infinite loop; send a new message to continue if needed.`, "TOOL_LIMIT");
                            const interaction = query.value ?? {};
                            const questions = interaction.args?.questions ?? [];
                            const dshQuestions = questions.map((question)=>{
                                const mapped = {
                                    id: String(question.id ?? ""),
                                    question: String(question.prompt ?? "")
                                };
                                if (interaction.args?.title) mapped.header = interaction.args.title;
                                if (Array.isArray(question.options) && question.options.length > 0) mapped.options = question.options.map((option)=>({
                                        label: String(option.label ?? "")
                                    }));
                                if (true === question.allowMultiple) mapped.multi_select = true;
                                return mapped;
                            });
                            if (0 === dshQuestions.length) {
                                run.writeMessage(encodeInteractionResponseEnvelope(encodeAskQuestionInteractionResponse({
                                    id: query.id,
                                    resultBytes: encodeAskQuestionResultError("The AskQuestion query carried no questions")
                                })));
                                continue;
                            }
                            await waitWork();
                            emittedToolCall = true;
                            const id = interaction.toolCallId || crypto.randomUUID();
                            const argsText = JSON.stringify({
                                questions: dshQuestions
                            });
                            const blockIndex = streamBlocks.toolCall();
                            yield {
                                type: "block-start",
                                index: blockIndex,
                                blockType: "tool-call"
                            };
                            yield {
                                type: "tool-call-delta",
                                index: blockIndex,
                                id: ToolCallId(id),
                                name: "ask_user_question",
                                argumentsDelta: argsText
                            };
                            yield {
                                type: "block-end",
                                index: blockIndex,
                                block: {
                                    type: "tool-call",
                                    id: ToolCallId(id),
                                    name: "ask_user_question",
                                    arguments: argsText
                                }
                            };
                            persisted.pendingQuestions.push({
                                id: query.id,
                                toolCallId: id,
                                rawArgs: interaction.rawArgs,
                                questions
                            });
                            toolCallPending = true;
                            streamClosed = true;
                            break;
                        }
                    } else if ("execServerMessage" === message.case) {
                        const exec = message.value;
                        if ("mcpArgs" === exec.case) {
                            if (!toolRoundCounted) {
                                toolRoundCount++;
                                toolRoundCounted = true;
                            }
                            if (toolRoundCount > requestSettings.maxToolRounds) throw new LlmError(`Cursor tool-call safety limit reached after ${requestSettings.maxToolRounds} rounds. The run was stopped to prevent an infinite loop; send a new message to continue if needed.`, "TOOL_LIMIT");
                            await waitWork();
                            emittedToolCall = true;
                            const mcp = exec.args ?? {};
                            const args = {};
                            for (const [key, value] of Object.entries(mcp.args ?? {}))try {
                                args[key] = decodeValue(value);
                            } catch  {
                                args[key] = null;
                            }
                            const id = allocateLocalToolCallId(mcp.toolCallId || exec.execId, usedToolCallIds);
                            const name = mcp.toolName || mcp.name;
                            const blockIndex = streamBlocks.toolCall();
                            yield {
                                type: "block-start",
                                index: blockIndex,
                                blockType: "tool-call"
                            };
                            yield {
                                type: "tool-call-delta",
                                index: blockIndex,
                                id: ToolCallId(id),
                                name,
                                argumentsDelta: JSON.stringify(args)
                            };
                            yield {
                                type: "block-end",
                                index: blockIndex,
                                block: {
                                    type: "tool-call",
                                    id: ToolCallId(id),
                                    name,
                                    arguments: JSON.stringify(args)
                                }
                            };
                            pendingExecs.push({
                                id: exec.id,
                                execId: exec.execId,
                                toolCallId: id,
                                kind: "mcp",
                                rawArgs: exec.rawArgs
                            });
                            toolCallPending = true;
                            streamClosed = true;
                        } else if ("shellStreamArgs" === exec.case) {
                            toolRoundCount++;
                            if (toolRoundCount > requestSettings.maxToolRounds) throw new LlmError(`Cursor tool-call safety limit reached after ${requestSettings.maxToolRounds} rounds. The run was stopped to prevent an infinite loop; send a new message to continue if needed.`, "TOOL_LIMIT");
                            const shellArgs = exec.args ?? {};
                            const id = allocateLocalToolCallId(shellArgs.toolCallId || exec.execId, usedToolCallIds);
                            const world = worldFromAgent(this.agents?.get(sessionKey));
                            const toolArgs = {
                                command: shellArgs.command ?? ""
                            };
                            if (shellArgs.workingDirectory) toolArgs.workdir = shellArgs.workingDirectory;
                            if ("string" == typeof shellArgs.description && shellArgs.description.length > 0) toolArgs.description = shellArgs.description;
                            beginJoin(id, exec.id);
                            for (const chunk of emitToolCall(streamBlocks, {
                                id,
                                name: "bash",
                                args: toolArgs
                            }))yield chunk;
                            debug(`exec shellStreamArgs id=${exec.id} → exec-plane bash`);
                            trackWork(this.#answerNativeShell({
                                world,
                                exec,
                                id,
                                run,
                                persisted,
                                terminalsFolder,
                                debug,
                                signal: upstream
                            }));
                            continue;
                        } else if ("backgroundShellSpawnArgs" === exec.case) {
                            toolRoundCount++;
                            if (toolRoundCount > requestSettings.maxToolRounds) throw new LlmError(`Cursor tool-call safety limit reached after ${requestSettings.maxToolRounds} rounds. The run was stopped to prevent an infinite loop; send a new message to continue if needed.`, "TOOL_LIMIT");
                            const bgArgs = exec.args ?? {};
                            const bgId = allocateLocalToolCallId(bgArgs.toolCallId || exec.execId, usedToolCallIds);
                            const world = worldFromAgent(this.agents?.get(sessionKey));
                            const toolArgs = {
                                command: bgArgs.command ?? "",
                                background: true
                            };
                            if (bgArgs.workingDirectory) toolArgs.workdir = bgArgs.workingDirectory;
                            beginJoin(bgId, exec.id);
                            for (const chunk of emitToolCall(streamBlocks, {
                                id: bgId,
                                name: "bash",
                                args: toolArgs
                            }))yield chunk;
                            debug(`exec backgroundShellSpawnArgs id=${exec.id} → exec-plane bash(background)`);
                            trackWork(this.#answerNativeBgShell({
                                world,
                                exec,
                                id: bgId,
                                run,
                                persisted,
                                terminalsFolder,
                                debug,
                                signal: upstream
                            }));
                            continue;
                        } else if ("grepArgs" === exec.case) {
                            toolRoundCount++;
                            if (toolRoundCount > requestSettings.maxToolRounds) throw new LlmError(`Cursor tool-call safety limit reached after ${requestSettings.maxToolRounds} rounds. The run was stopped to prevent an infinite loop; send a new message to continue if needed.`, "TOOL_LIMIT");
                            const classified = classifyCursorSearch(exec.args ?? {});
                            const id = allocateLocalToolCallId(exec.args?.toolCallId || exec.execId, usedToolCallIds);
                            const world = worldFromAgent(this.agents?.get(sessionKey));
                            beginJoin(id);
                            for (const chunk of emitToolCall(streamBlocks, {
                                id,
                                name: classified.displayName,
                                args: classified.displayArgs
                            }))yield chunk;
                            trackWork(this.#answerNativeSearch({
                                world,
                                exec,
                                classified,
                                id,
                                run,
                                debug,
                                signal: upstream
                            }));
                            continue;
                        } else if ("readArgs" === exec.case || "writeArgs" === exec.case || "deleteArgs" === exec.case) {
                            toolRoundCount++;
                            if (toolRoundCount > requestSettings.maxToolRounds) throw new LlmError(`Cursor tool-call safety limit reached after ${requestSettings.maxToolRounds} rounds. The run was stopped to prevent an infinite loop; send a new message to continue if needed.`, "TOOL_LIMIT");
                            const translated = translateNativeExec(exec);
                            if (void 0 === translated || void 0 !== translated.reject) {
                                const reply = translated?.reject !== void 0 ? {
                                    field: translated.field,
                                    payload: translated.reject
                                } : rejectionFor(exec);
                                if (void 0 !== reply) run.writeMessage(encodeExecClientMessageEnvelope(encodeExecClientMessage(exec.id, exec.execId, reply.field, reply.payload)));
                                continue;
                            }
                            const rawId = exec.args?.toolCallId || exec.execId;
                            persisted.probeReads ??= new Map();
                            const id = allocateLocalToolCallId(rawId, usedToolCallIds);
                            const world = worldFromAgent(this.agents?.get(sessionKey));
                            beginJoin(id);
                            for (const chunk of emitToolCall(streamBlocks, {
                                id,
                                name: translated.tool,
                                args: translated.args
                            }))yield chunk;
                            debug(`exec ${exec.case} id=${exec.id} → exec-plane ${translated.tool}`);
                            trackWork(this.#answerNativeFs({
                                world,
                                exec,
                                id,
                                rawId,
                                run,
                                persisted,
                                debug,
                                signal: upstream
                            }));
                            continue;
                        } else {
                            const reply = rejectionFor(exec);
                            if (void 0 !== reply) run.writeMessage(encodeExecClientMessageEnvelope(encodeExecClientMessage(exec.id, exec.execId, reply.field, reply.payload)));
                            else {
                                debug(`exec ${exec.case} unsupported → throw+close id=${exec.id}`);
                                run.writeMessage(encodeExecThrow(exec.id, "Unknown exec message variant; this client does not implement it.", "exec_variant_unsupported"));
                                run.writeMessage(encodeExecStreamClose(exec.id));
                            }
                        }
                    }
                    if (execBatchPending && !isJoinBatchFrame(message)) {
                        debug(`drain closed by ${message.case}${message.value?.type !== void 0 ? `:${message.value.type}` : ""}`);
                        streamClosed = true;
                        break;
                    }
                }
            } finally{
                clearInterval(idleCheck);
            }
            await waitWork();
            if (!toolCallPending) await this.#waitForAllShellForwarders(debug);
            leftoverPending = leftoverPending.filter((entry)=>"shell" !== entry.kind);
            if (!terminalErrorEmitted && !toolCallPending) {
                const textToolCalls = parseTextToolCalls(textOutput, options.tools ?? []);
                for (const call of textToolCalls){
                    const blockIndex = streamBlocks.toolCall();
                    yield {
                        type: "block-start",
                        index: blockIndex,
                        blockType: "tool-call"
                    };
                    yield {
                        type: "tool-call-delta",
                        index: blockIndex,
                        id: ToolCallId(call.id),
                        name: call.name,
                        argumentsDelta: call.arguments
                    };
                    yield {
                        type: "block-end",
                        index: blockIndex,
                        block: {
                            type: "tool-call",
                            id: ToolCallId(call.id),
                            name: call.name,
                            arguments: call.arguments
                        }
                    };
                }
                if (textToolCalls.length > 0) {
                    emittedToolCall = true;
                    streamClosed = true;
                }
            }
            const pendingExecsToStore = 0 === leftoverPending.length ? pendingExecs : [
                ...leftoverPending,
                ...pendingExecs
            ];
            const liveToolBridge = !run.finished && pendingExecsToStore.length > 0 && (toolCallPending || leftoverPending.length > 0);
            if (void 0 !== sessionKey) {
                persisted.lastAccessMs = this.now();
                if (liveToolBridge) {
                    persisted.bridge = {
                        run,
                        pump,
                        pendingExecs: pendingExecsToStore,
                        toolRoundCount,
                        usedToolCallIds,
                        displayCallIds,
                        pendingDisplayCalls
                    };
                    pump.bridge = persisted.bridge;
                    bridgeStored = true;
                } else persisted.bridge = void 0;
                this.#sessions.delete(sessionKey);
                this.#sessions.set(sessionKey, persisted);
                while(this.#sessions.size > 100){
                    const oldest = this.#sessions.keys().next().value;
                    if (void 0 === oldest) break;
                    const evicted = this.#sessions.get(oldest);
                    evicted?.bridge?.pump?.terminate(new Error("Cursor session evicted"));
                    evicted?.bridge?.run.close();
                    this.#killSessionShells(evicted ?? {});
                    this.#sessions.delete(oldest);
                }
            }
            if (!terminalErrorEmitted) {
                debug(`finish decision: toolCallPending=${toolCallPending} streamClosed=${streamClosed} emitted=${emittedToolCall} trailers=${JSON.stringify(run.trailers ?? {})}`);
                const tokenDetails = persisted.tokenDetails;
                const maxTokens = tokenDetails?.maxTokens;
                if (Number.isFinite(maxTokens) && maxTokens > 0) this.#contextWindowByModel.set(options.model, maxTokens);
                const usage = projectCursorTokenUsage({
                    turnEnded: turnUsage,
                    outputTokens,
                    tokenDetails
                });
                debug(`usage in=${usage.inputTokens} out=${usage.outputTokens} cacheRead=${usage.cacheReadTokens ?? 0} cacheWrite=${usage.cacheWriteTokens ?? 0} used=${tokenDetails?.usedTokens ?? 0} max=${maxTokens ?? 0}`);
                yield {
                    type: "usage",
                    usage
                };
                if (streamClosed && emittedToolCall) {
                    debug("finish → tool-calls");
                    yield {
                        type: "finish",
                        reason: {
                            kind: "tool-calls"
                        }
                    };
                } else if (run.trailers && Number(run.trailers["grpc-status"]) > 0) {
                    debug("finish → grpc error");
                    const message = run.trailers["grpc-message"] ?? "Cursor agent run failed";
                    yield {
                        type: "finish",
                        reason: {
                            kind: "error",
                            failure: {
                                message,
                                code: classifyCursorError(message)
                            }
                        }
                    };
                } else {
                    debug("finish → stop");
                    yield {
                        type: "finish",
                        reason: {
                            kind: "stop"
                        }
                    };
                }
            }
        } catch (error) {
            debug(`stream() error: ${error instanceof Error ? error.message : String(error)}`);
            yield finishChunkForStreamError(error, upstream);
        } finally{
            if (void 0 !== abortRun) upstream.removeEventListener("abort", abortRun);
            consumer.abort("cursor stream consumer stopped");
            if (!bridgeStored) {
                await waitWork();
                await this.#waitForAllShellForwarders(cursorAgentDebug);
            }
            pump?.detach();
            if (!bridgeStored) run?.close();
            if (void 0 !== this.checkpointStore) try {
                await this.checkpointStore.flush();
            } catch  {}
        }
    }
}
function makePresetGate(ctx, readSettings) {
    return (sessionId)=>{
        if (!readSettings().requireCursorPreset) return;
        if (void 0 === sessionId) return;
        const agents = ctx.get("agents");
        const agentPresets = ctx.get("agentPresets");
        if (void 0 === agents || void 0 === agentPresets) return;
        const agent = agents.get(sessionId);
        if (void 0 === agent) throw new LlmError(`Cursor Agent requires the "${CURSOR_PRESET_ID}" agent preset, but the session is not registered.`, "CURSOR_PRESET_MISMATCH");
        const presetId = agentPresets.composedPreset(agent.ctx);
        if (presetId !== CURSOR_PRESET_ID) {
            const current = void 0 === presetId ? "no preset" : `the "${presetId}" preset`;
            throw new LlmError(`Cursor Agent requires the "${CURSOR_PRESET_ID}" agent preset. This session uses ${current}; switch the session's preset to use a Cursor model.`, "CURSOR_PRESET_MISMATCH");
        }
    };
}
function makeTodoSync(ctx) {
    const agents = ctx.get("agents");
    if (void 0 === agents) return;
    return (sessionId, todos)=>{
        const agent = agents.get(sessionId);
        if (void 0 === agent) return;
        agent.session.append("todo/write", {
            todos
        });
    };
}
async function applyCursorPresetTools(ctx) {
    const systemPrompt = ctx.get("systemPrompt");
    if (void 0 !== systemPrompt) {
        ctx.effect(()=>systemPrompt.section({
                name: "harness:identity",
                order: systemPrompt.getSectionOrder("HARNESS_IDENTITY"),
                text: "You are an AI Agent running in Cursor managed by DeepSeek Harness."
            }), "cursor-agent: harness identity section");
        ctx.effect(()=>systemPrompt.section({
                name: ACP_SYSTEM_SECTION,
                order: 0,
                text: ""
            }), "cursor-agent: hide ACP system section");
    }
    ctx.effect(()=>ctx.jobs.attachController("cursor-agent"), "cursor-agent: jobs controller");
    registerCursorShims(ctx);
    let zod;
    try {
        ({ z: zod } = await import("zod"));
    } catch (error) {
        ctx.logger?.warn(`cursor-agent: the preset branch could not load zod: ${error instanceof Error ? error.message : String(error)}`);
        return;
    }
    const todosProjectionSchema = zod.union([
        zod.array(zod.object({
            content: zod.string(),
            status: zod.union([
                zod.literal("pending"),
                zod.literal("in_progress"),
                zod.literal("completed")
            ])
        })),
        zod.null()
    ]);
    ctx.sessionProjections.register({
        key: "todos",
        stateSchema: todosProjectionSchema,
        init: ()=>null,
        apply: (state, event)=>{
            if ("todo/write" === event.type) return event.data.todos;
            if ("turn/start" === event.type) return null;
            return state;
        },
        wire: {
            viewSchema: todosProjectionSchema,
            view: (state)=>state
        },
        stateVersion: 2
    });
}
function apply(ctx, config = {}) {
    if ("preset" === config.plane) return applyCursorPresetTools(ctx);
    if ("compaction" === config.plane) return applyCursorCompaction(ctx);
    cursorAgentDebug("plugin loaded");
    const settingsService = ctx.get("settings");
    const settingsEntry = ()=>{
        try {
            return settingsService?.describe?.({
                redactSecrets: true
            })?.find((entry)=>entry.ns === SETTINGS_NAMESPACE);
        } catch  {
            return;
        }
    };
    let currentSettings = ()=>config;
    let refreshRuntime = ()=>{};
    if (void 0 !== settingsService && "function" == typeof settingsService.configure) ctx.effect(()=>{
        try {
            return settingsService.configure({
                auto: false
            });
        } catch (error) {
            ctx.logger?.warn(`cursor-agent: settings page policy unavailable: ${error instanceof Error ? error.message : String(error)}`);
            return ()=>{};
        }
    }, "cursor-agent: settings page policy");
    ctx.effect(()=>"function" == typeof ctx.on ? ctx.on("settings/document-updated", (ns)=>{
            if (ns === SETTINGS_NAMESPACE) refreshRuntime();
        }) : ()=>{}, "cursor-agent: settings refresh");
    const readLiveSettings = ()=>settingsEntry()?.value ?? currentSettings();
    const readSettings = ()=>resolveCursorSettings(readLiveSettings());
    const readSettingsView = ()=>{
        const value = readSettings();
        const descriptor = settingsEntry();
        return {
            ...value,
            revision: descriptor?.revision ?? 0
        };
    };
    const settingsController = {
        read: readSettingsView,
        update: async (patch, expectedRevision)=>{
            resolveCursorSettings({
                ...readSettings(),
                ...patch
            });
            const service = ctx.get("settings");
            if (void 0 === service) throw new Error("Cursor settings storage is unavailable");
            await service.update(SETTINGS_NAMESPACE, patch, expectedRevision);
            return readSettingsView();
        }
    };
    const store = new CursorCredentialStore(ctx.credentials, CREDENTIAL_REF);
    const auth = new CursorAuthService(store, {
        logger: ctx.logger,
        resolveBaseUrl: ()=>readSettings().apiBaseUrl
    });
    const checkpointStore = createCheckpointStore({
        storageDomain: ctx.get("storageDomain"),
        files: createLocalObjectStore(dshHomePath(...CHECKPOINT_OBJECTS_SEGMENTS))
    });
    ctx.effect(()=>()=>{
            checkpointStore.close();
        }, "cursor-agent: checkpoint domain");
    const adapter = new CursorAdapter({
        auth,
        settings: readSettings,
        gate: makePresetGate(ctx, readSettings),
        syncTodos: makeTodoSync(ctx),
        logger: ctx.logger,
        shellService: ctx.get("shell"),
        jobs: ctx.get("jobs"),
        terminalsRoot: dshHomePath("terminals"),
        agents: ctx.get("agents"),
        sandboxPolicy: ctx.get("sandboxPolicy"),
        attachments: ()=>ctx.get("attachments"),
        checkpointStore,
        publishSessionEvent: (session, event)=>{
            ctx.emit("session/event", session, event);
        }
    });
    ctx.llm.registerAdapter([
        PROVIDER
    ], adapter);
    registerCursorSummarize((args)=>adapter.summarizeConversation(args));
    ctx.effect(()=>()=>registerCursorSummarize(void 0), "cursor-agent: summarize hand-off");
    const usageReader = new CursorUsageReader(auth, {
        logger: ctx.logger,
        resolveBaseUrl: ()=>readSettings().apiBaseUrl
    });
    refreshRuntime = ()=>{
        adapter.invalidateDiscovery();
        usageReader.forget();
    };
    const coordinator = new CursorLoginCoordinator(auth, {
        logger: ctx.logger
    });
    const handler = createCursorRpcHandler(coordinator, {
        openExternal: openCursorAuthUrl,
        usageReader,
        modelsProvider: adapter,
        settings: settingsController,
        auth
    });
    ctx.effect(()=>ctx.webServer.register({
            kind: "prefix",
            path: CHANNEL,
            handler: createCursorRpcHttpHandler(handler, {
                requestRejection: (req)=>ctx.connection.requestRejection?.(req)
            })
        }), "cursor-agent: loopback account RPC");
}
export { AGENT_HEADERS, AgentRun, BACKGROUND_PID_MARKER, BACKGROUND_PID_PROLOGUE, CHANNEL, CONNECT_COMPRESSED_FLAG, CONNECT_END_STREAM_FLAG, CREDENTIAL_REF, CURSOR_AGENT_DEBUG_ENV, CURSOR_AUTH_ORIGIN, CURSOR_AVAILABLE_MODELS_PATH, CURSOR_BASE_URL, CURSOR_CLIENT_VERSION, CURSOR_DASHBOARD_RPC, CURSOR_DASHBOARD_SERVICE, CURSOR_GET_CURRENT_PERIOD_USAGE_PATH, CURSOR_GET_ME_PATH, CURSOR_GET_PLAN_INFO_PATH, CURSOR_GET_SAND_USAGE_STATUS_PATH, CURSOR_LOGIN_URL, CURSOR_MODELS_PATH, CURSOR_NAME_AGENT_PATH, CURSOR_NATIVE_TOOL_NAMES, CURSOR_POLL_PATH, CURSOR_PRESET_ID, CURSOR_REFRESH_PATH, CURSOR_RUN_PATH, Config, ConnectFrameReader, CursorAdapter, CursorAuthService, CursorCredentialStore, CursorLoginCoordinator, CursorRunPump, CursorUsageReader, DEFAULT_CONTEXT_WINDOW, DEFAULT_MAX_TOKENS, DEFAULT_REQUIRE_CURSOR_PRESET, DEFAULT_RETRY_COUNT, DEFAULT_RETRY_HTTP_STATUS_CODES, DEFAULT_RETRY_INTERVAL_MS, DEFAULT_TOKEN_LIFETIME_MS, DSH_SESSION_TITLE_FRAME_PREFIX, EXEC_REPLY_FIELDS, FALLBACK_MODELS, HEARTBEAT_INTERVAL_MS, INTERACTION_UNAVAILABLE, MAX_CONNECT_FRAME_BYTES, MAX_TOOL_ROUNDS, PARKED_BRIDGE_TIMEOUT_MS, PROVIDER, READ_CONTENT_CHAR_CAP, REFRESH_AHEAD_MS, SESSION_STATE_TTL_MS, SETTINGS_NAMESPACE, STREAM_IDLE_TIMEOUT_MS, STREAM_PROGRESS_TIMEOUT_MS, USAGE_TTL_MS, abortableDelay, adoptBlobStore, allocateLocalToolCallId, appendTurnsToCheckpoint, apply, assertCursorAuthUrl, bindDisplayCallId, buildAskQuestionResultBytes, buildConversationState, buildCustomRunPayload, buildInitialConversationState, buildLoginUrl, buildRunPayload, callDashboardRpc, classifyCursorError, classifyCursorSearch, classifyCursorSecret, classifyTurnIngress, collectDshSystemText, commandForCursorAuthUrl, composeReadWindow, createCursorRpcHandler, createCursorRpcHttpHandler, createCursorTerminalLog, createPidProbe, createStreamBlocks, cursorAgentDebug, decodeAgentServerMessage, decodeAskQuestionInteractionQuery, decodeBackgroundShellSpawnArgs, decodeContextInjectionStateUpdate, decodeConversationStateTodos, decodeConversationTokenDetails, decodeCurrentPeriodUsage, decodeDeleteArgs, decodeExecServerMessage, decodeGetMe, decodeGetPlanInfo, decodeGrepArgs, decodeInteractionQuery, decodeInteractionUpdate, decodeKvServerMessage, decodeMcpArgs, decodeNameAgentResponse, decodeReadArgs, decodeSandUsageStatus, decodeSandboxPolicy, decodeShellArgs, decodeToolCallDisplay, decodeTurnEndedUpdate, decodeUsableModels, decodeWriteArgs, decodeWriteShellStdinArgs, displayJoinResult, emitToolCall, encodeAskQuestionInteractionResponse, encodeAskQuestionResultError, encodeAskQuestionResultSuccess, encodeAskQuestionSuccess, encodeAsyncAskQuestionCompletionAction, encodeBackgroundShellSpawnError, encodeBackgroundShellSpawnSuccess, encodeConversationActionMessage, encodeDeleteError, encodeDeletePermissionDenied, encodeDeleteRejected, encodeDeleteSuccess, encodeExecClientMessage, encodeExecClientMessageEnvelope, encodeExecStreamClose, encodeExecThrow, encodeGetBlobResult, encodeGrepSearchResult, encodeInjectContextAction, encodeInteractionApproved, encodeInteractionRejected, encodeInteractionResponseEnvelope, encodeKvClientMessage, encodeMcpResult, encodeMcpToolCallStep, encodeMcpToolDefinition, encodeNameAgentRequest, encodeOutputLocation, encodeReadError, encodeReadFileNotFound, encodeReadInvalidFile, encodeReadSuccess, encodeReplayTurnBlob, encodeRequestContextResult, encodeResumeAction, encodeSetBlobResult, encodeShellFailure, encodeShellPermissionDenied, encodeShellSpawnError, encodeShellStreamBackgrounded, encodeShellStreamExit, encodeShellStreamStart, encodeShellStreamStderr, encodeShellStreamStdout, encodeShellSuccess, encodeShellTimeout, encodeSystemContextInjection, encodeUserContextInjection, encodeWriteError, encodeWritePermissionDenied, encodeWriteRejected, encodeWriteShellStdinError, encodeWriteShellStdinSuccess, encodeWriteSuccess, external_constants_js_name as name, extractSessionTitleUserMessage, fetchAvailableModels, fetchNameAgent, fetchUsableModels, finishChunkForStreamError, formatCursorTerminalFooter, formatCursorTerminalHeader, formatReadJoinText, frameEncode, getTokenExpiry, inject, isCursorAgentDebugEnabled, isCursorNativeTool, isSuccessfulAgentResponse, isToolResultMessage, maskApiKey, nativeFetch, normalizeCursorTodos, openCursorAuthUrl, parseCursorWebSearchChunk, parseEndStream, parseJobIdN, parseTextToolCalls, partitionPendingExecs, projectCurrentPeriodUsage, projectCursorTokenUsage, projectGetMe, projectGetPlanInfo, projectSandUsageStatus, readJwtExpiry, readPresentationMeta, rejectionFor, rejectionForInteraction, rememberDisplayCompletion, rendererToolArgs, resolveCursorApiBaseUrl, resolveCursorSettings, searchMetaFromResult, searchResultSummary, shouldRetryHttpStatus, splitShellDelta, storeBlob, translateNativeExec, unwrapSessionTitleFrame };
