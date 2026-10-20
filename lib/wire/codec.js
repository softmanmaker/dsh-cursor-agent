import { createHash, randomUUID } from "node:crypto";
import { Reader as external_proto_js_Reader, Writer } from "../proto.js";
import { DSH_SESSION_TITLE_FRAME_PREFIX } from "../constants.js";
import { AgentConversationTurnStructure, AssistantMessage, ConversationAction, ConversationStateStructure, ConversationStep, ConversationTurnStructure, InjectContextAction, InteractionUpdate, ModelDetails2, ResumeAction, SystemContextInjection, UserContextInjection, UserMessage, UserMessageAction } from "../generated/agent/v1/agent_pb.js";
import { SelectedContext } from "../generated/agent/v1/selected_context_pb.js";
import { AgentClientMessage, ClientHeartbeat, GetUsableModelsResponse, NameAgentRequest, NameAgentResponse } from "../generated/agent/v1/agent_service_pb.js";
import { ExecServerMessage } from "../generated/agent/v1/exec_pb.js";
import { encodeCursorRule } from "../rules.js";
import { encodeSelectedContext } from "../images.js";
import { decodeSummaryUpdate, sanitizeConversationStateForSend } from "../compaction.js";
new TextEncoder();
function bytesOf(value) {
    return value instanceof Uint8Array ? value : new Uint8Array(value);
}
function optionalString(value) {
    return "string" == typeof value && value.length > 0 ? value : void 0;
}
function encodeUserMessage({ text, messageId, images = [] }) {
    const data = {};
    if ("string" == typeof text && text.length > 0) data.text = text;
    if ("string" == typeof messageId && messageId.length > 0) data.messageId = messageId;
    if (images.length > 0) data.selectedContext = SelectedContext.fromBinary(encodeSelectedContext(images));
    return new UserMessage(data).toBinary();
}
function encodeAssistantMessage(text) {
    return new AssistantMessage({
        text
    }).toBinary();
}
function encodeAssistantStep(text) {
    return new ConversationStep({
        message: {
            case: "assistantMessage",
            value: new AssistantMessage({
                text
            })
        }
    }).toBinary();
}
function encodeAgentTurn(userBytes, stepBytes) {
    return new AgentConversationTurnStructure({
        ...userBytes.length > 0 ? {
            userMessage: userBytes
        } : {},
        steps: stepBytes
    }).toBinary();
}
function encodeTurnStructure(turnBytes) {
    return new ConversationTurnStructure({
        turn: {
            case: "agentConversationTurn",
            value: AgentConversationTurnStructure.fromBinary(turnBytes)
        }
    }).toBinary();
}
function encodeModelDetails(modelId) {
    return new ModelDetails2({
        modelId,
        displayModelId: modelId,
        displayName: modelId
    }).toBinary();
}
function encodeUserMessageAction(userBytes) {
    return new ConversationAction({
        action: {
            case: "userMessageAction",
            value: new UserMessageAction({
                userMessage: UserMessage.fromBinary(userBytes)
            })
        }
    }).toBinary();
}
function encodeConversationState({ rootPromptBlobIds, turns }) {
    return new ConversationStateStructure({
        rootPromptMessagesJson: rootPromptBlobIds,
        turns
    }).toBinary();
}
function encodeRunRequest({ conversationState, action, modelDetails, conversationId, requestedModel, runId }) {
    const writer = new Writer();
    writer.message(1, sanitizeConversationStateForSend(conversationState) ?? conversationState);
    writer.message(2, action);
    if (requestedModel) writer.message(9, requestedModel);
    else if (modelDetails) writer.message(3, modelDetails);
    if (conversationId) writer.string(5, conversationId);
    if ("string" == typeof runId && runId.length > 0) writer.string(25, runId);
    return writer.finish();
}
function encodeRunMessage(runRequestBytes) {
    return new Writer().message(1, runRequestBytes).finish();
}
function storeBlob(blobStore, data) {
    const bytes = bytesOf(data);
    const id = new Uint8Array(createHash("sha256").update(bytes).digest());
    blobStore.set(Buffer.from(id).toString("hex"), bytes);
    return id;
}
function encodeResumeAction() {
    return new ConversationAction({
        action: {
            case: "resumeAction",
            value: new ResumeAction()
        }
    }).toBinary();
}
function encodeConversationActionMessage(actionBytes) {
    return new Writer().message(4, actionBytes).finish();
}
function encodeUserContextInjection({ text, messageId, images = [] }) {
    return new UserContextInjection({
        userMessage: UserMessage.fromBinary(encodeUserMessage({
            text,
            messageId,
            images
        }))
    }).toBinary();
}
function encodeSystemContextInjection({ producer, content }) {
    return new SystemContextInjection({
        producer: optionalString(producer),
        content: optionalString(content)
    }).toBinary();
}
function encodeInjectContextAction({ injectionId, expectedRunId, userContext, systemContext }) {
    const action = {
        injectionId: optionalString(injectionId),
        expectedRunId: optionalString(expectedRunId)
    };
    if (void 0 !== userContext) action.payload = {
        case: "userContext",
        value: UserContextInjection.fromBinary(encodeUserContextInjection(userContext))
    };
    else if (void 0 !== systemContext) action.payload = {
        case: "systemContext",
        value: SystemContextInjection.fromBinary(encodeSystemContextInjection(systemContext))
    };
    return new ConversationAction({
        action: {
            case: "injectContextAction",
            value: new InjectContextAction(action)
        }
    }).toBinary();
}
function encodeAsyncAskQuestionCompletionAction({ originalToolCallId, originalArgsBytes, resultBytes }) {
    const inner = new Writer();
    if ("string" == typeof originalToolCallId && originalToolCallId.length > 0) inner.string(1, originalToolCallId);
    if (void 0 !== originalArgsBytes && originalArgsBytes.length > 0) inner.bytes(2, originalArgsBytes);
    inner.bytes(3, resultBytes);
    return new Writer().message(8, inner.finish()).finish();
}
function encodeMcpToolCallStep(argsBytes, resultBytes) {
    const call = new Writer();
    if (void 0 !== argsBytes && argsBytes.length > 0) call.bytes(1, argsBytes);
    if (void 0 !== resultBytes && resultBytes.length > 0) call.bytes(2, resultBytes);
    const tool = new Writer().message(15, call.finish()).finish();
    return new Writer().message(2, tool).finish();
}
function encodeReplayTurnBlob(blobStore, { userText = "", stepBlobs = [] }) {
    const userBlobId = storeBlob(blobStore, encodeUserMessage({
        text: userText,
        messageId: randomUUID()
    }));
    const stepIds = stepBlobs.map((step)=>storeBlob(blobStore, step));
    return storeBlob(blobStore, encodeTurnStructure(encodeAgentTurn(userBlobId, stepIds)));
}
function appendTurnsToCheckpoint(checkpointBytes, turnBlobIds) {
    const reader = new external_proto_js_Reader(checkpointBytes);
    const writer = new Writer();
    const ids = [];
    while(!reader.done){
        const start = reader.pos;
        const { field, wireType } = reader.tag();
        if (8 === field && 2 === wireType) ids.push(bytesOf(reader.bytes()));
        else {
            reader.skip(wireType);
            writer.parts.push(reader.data.subarray(start, reader.pos));
        }
    }
    for (const id of [
        ...ids,
        ...turnBlobIds
    ])writer.bytes(8, id);
    return writer.finish();
}
function encodeHeartbeat() {
    return new AgentClientMessage({
        message: {
            case: "clientHeartbeat",
            value: new ClientHeartbeat()
        }
    }).toBinary();
}
function encodeGetBlobResult(id, blobData) {
    const result = void 0 === blobData ? new Uint8Array(0) : new Writer().bytes(1, blobData).finish();
    const writer = new Writer();
    writer.varint(1, id);
    writer.message(2, result);
    return writer.finish();
}
function adoptBlobStore(target, source) {
    if (void 0 === source || source === target) return target ?? new Map();
    const out = target ?? new Map();
    for (const [key, value] of source)out.set(key, value);
    return out;
}
function encodeKvClientMessage(kvBytes) {
    return new Writer().message(3, kvBytes).finish();
}
function encodeSetBlobResult(id) {
    const writer = new Writer();
    writer.varint(1, id);
    writer.message(3, new Uint8Array(0));
    return writer.finish();
}
function encodeMcpResult({ content, isError = false }) {
    return encodeMcpResultSuccess(String(content ?? ""), isError);
}
function encodeExecClientMessage(id, execId, messageField, messageBytes) {
    const writer = new Writer();
    writer.varint(1, id);
    if ("string" == typeof execId && execId.length > 0) writer.string(15, execId);
    if (void 0 !== messageBytes) writer.message(messageField, messageBytes);
    return writer.finish();
}
function encodeExecClientMessageEnvelope(execBytes) {
    return new Writer().message(2, execBytes).finish();
}
function encodeRequestContextResult(tools, rules = []) {
    const context = new Writer();
    for (const rule of rules)context.message(2, encodeCursorRule(rule));
    for (const tool of tools)context.message(7, tool);
    const success = new Writer().message(1, context.finish()).finish();
    return new Writer().message(1, success).finish();
}
function encodeMcpToolDefinition({ name, description, inputSchema, providerIdentifier, toolName }) {
    const writer = new Writer();
    writer.string(1, name);
    writer.string(2, description ?? "");
    writer.bytes(3, bytesOf(inputSchema));
    writer.string(4, providerIdentifier ?? "dsh");
    writer.string(5, toolName ?? name);
    return writer.finish();
}
function encodeMcpTextContent(text) {
    return new Writer().string(1, text).finish();
}
function encodeMcpToolResultContentItem(text) {
    return new Writer().message(1, encodeMcpTextContent(text)).finish();
}
function encodeMcpSuccess(text, isError) {
    const writer = new Writer();
    writer.message(1, encodeMcpToolResultContentItem(text));
    writer.varint(2, isError ? 1 : 0);
    return writer.finish();
}
function encodeMcpResultSuccess(text, isError) {
    return new Writer().message(1, encodeMcpSuccess(text, isError)).finish();
}
function encodeMcpError(error) {
    return new Writer().message(2, new Writer().string(1, error).finish()).finish();
}
function encodeReadRejected(path, reason) {
    const rejected = new Writer().string(1, path ?? "").string(2, reason).finish();
    return new Writer().message(3, rejected).finish();
}
function encodeLsRejected(path, reason) {
    const rejected = new Writer().string(1, path ?? "").string(2, reason).finish();
    return new Writer().message(3, rejected).finish();
}
function encodeGrepError(error) {
    return new Writer().message(2, new Writer().string(1, error).finish()).finish();
}
function encodeWriteRejected({ path, reason }) {
    const rejected = new Writer().string(1, path ?? "").string(2, String(reason ?? "")).finish();
    return new Writer().message(6, rejected).finish();
}
function encodeDeleteRejected({ path, reason }) {
    const rejected = new Writer().string(1, path ?? "").string(2, String(reason ?? "")).finish();
    return new Writer().message(6, rejected).finish();
}
function encodeShellRejected(command, workingDirectory, reason) {
    const writer = new Writer();
    writer.string(1, command ?? "");
    writer.string(2, workingDirectory ?? "");
    writer.string(3, reason);
    writer.varint(4, 0);
    return writer.finish();
}
function encodeShellRejectedResult(command, workingDirectory, reason) {
    return new Writer().message(4, encodeShellRejected(command, workingDirectory, reason)).finish();
}
function encodeShellStreamRejected(command, workingDirectory, reason) {
    return new Writer().message(5, encodeShellRejected(command, workingDirectory, reason)).finish();
}
function encodeBackgroundShellRejectedResult(command, workingDirectory, reason) {
    return new Writer().message(3, encodeShellRejected(command, workingDirectory, reason)).finish();
}
function encodeFetchError(url, error) {
    const inner = new Writer().string(1, url ?? "").string(2, error).finish();
    return new Writer().message(2, inner).finish();
}
function encodeWriteShellStdinError(error) {
    return new Writer().message(2, new Writer().string(1, error).finish()).finish();
}
function encodeWriteShellStdinSuccess({ shellId, terminalFileLengthBeforeInputWritten }) {
    const inner = new Writer();
    inner.varint(1, shellId >>> 0);
    inner.varint(2, terminalFileLengthBeforeInputWritten >>> 0);
    return new Writer().message(1, inner.finish()).finish();
}
function encodeShellStreamStart(sandboxPolicyType) {
    const inner = new Writer();
    if (Number.isSafeInteger(sandboxPolicyType) && sandboxPolicyType > 0) inner.message(1, new Writer().varint(1, sandboxPolicyType).finish());
    return new Writer().message(4, inner.finish()).finish();
}
function encodeShellStreamStdout(data) {
    return new Writer().message(1, new Writer().string(1, String(data ?? "")).finish()).finish();
}
function encodeShellStreamStderr(data) {
    return new Writer().message(2, new Writer().string(1, String(data ?? "")).finish()).finish();
}
function encodeOutputLocation({ filePath, sizeBytes, lineCount }) {
    const inner = new Writer();
    inner.string(1, filePath ?? "");
    if (Number.isSafeInteger(sizeBytes)) inner.varint(2, sizeBytes);
    if (Number.isSafeInteger(lineCount)) inner.varint(3, lineCount);
    return inner.finish();
}
function encodeShellStreamExit({ code, cwd, aborted = false, outputLocation }) {
    const inner = new Writer();
    inner.varint(1, code >>> 0);
    inner.string(2, cwd ?? "");
    if (void 0 !== outputLocation) inner.message(3, encodeOutputLocation(outputLocation));
    if (aborted) inner.varint(4, 1);
    return new Writer().message(3, inner.finish()).finish();
}
function encodeShellStreamBackgrounded({ shellId, command, workingDirectory, pid, msToWait, reason }) {
    const inner = new Writer();
    inner.varint(1, shellId >>> 0);
    inner.string(2, command ?? "");
    inner.string(3, workingDirectory ?? "");
    if (void 0 !== pid && Number.isSafeInteger(pid) && pid > 0) inner.varint(4, pid >>> 0);
    if (Number.isSafeInteger(msToWait)) inner.varint(5, msToWait);
    if (Number.isSafeInteger(reason)) inner.varint(6, reason);
    return new Writer().message(7, inner.finish()).finish();
}
function encodeShellResult(resultField, inner, { terminalsFolder, isBackground, pid } = {}) {
    const writer = new Writer();
    writer.message(resultField, inner);
    if (true === isBackground) writer.varint(102, 1);
    if (void 0 !== terminalsFolder) writer.string(103, terminalsFolder);
    if (void 0 !== pid) writer.varint(104, pid >>> 0);
    return writer.finish();
}
function encodeShellSuccess({ command, workingDirectory, exitCode, stdout = "", stderr = "", executionTime = 0, terminalsFolder, isBackground, pid, shellId, msToWait }) {
    const inner = new Writer();
    inner.string(1, command ?? "");
    inner.string(2, workingDirectory ?? "");
    inner.varint(3, 0 | exitCode);
    inner.string(4, "");
    inner.string(5, stdout);
    inner.string(6, stderr);
    inner.varint(7, 0 | executionTime);
    if (void 0 !== shellId) inner.varint(9, shellId >>> 0);
    if (Number.isSafeInteger(msToWait)) inner.varint(12, msToWait);
    return encodeShellResult(1, inner.finish(), {
        terminalsFolder,
        isBackground,
        pid
    });
}
function encodeShellFailure({ command, workingDirectory, exitCode, stdout = "", stderr = "", executionTime = 0, aborted = false, terminalsFolder, isBackground, pid }) {
    const inner = new Writer();
    inner.string(1, command ?? "");
    inner.string(2, workingDirectory ?? "");
    inner.varint(3, 0 | exitCode);
    inner.string(4, "");
    inner.string(5, stdout);
    inner.string(6, stderr);
    inner.varint(7, 0 | executionTime);
    if (aborted) inner.varint(11, 1);
    return encodeShellResult(2, inner.finish(), {
        terminalsFolder,
        isBackground,
        pid
    });
}
function encodeShellTimeout({ command, workingDirectory, timeoutMs }) {
    const inner = new Writer();
    inner.string(1, command ?? "");
    inner.string(2, workingDirectory ?? "");
    inner.varint(3, 0 | timeoutMs);
    return encodeShellResult(3, inner.finish());
}
function encodeShellSpawnError({ command, workingDirectory, error }) {
    const inner = new Writer();
    inner.string(1, command ?? "");
    inner.string(2, workingDirectory ?? "");
    inner.string(3, String(error ?? ""));
    return encodeShellResult(5, inner.finish());
}
function encodeShellPermissionDenied({ command, workingDirectory, error, isReadonly = false }) {
    const inner = new Writer();
    inner.string(1, command ?? "");
    inner.string(2, workingDirectory ?? "");
    inner.string(3, String(error ?? ""));
    inner.varint(4, isReadonly ? 1 : 0);
    return encodeShellResult(7, inner.finish());
}
function encodeBackgroundShellSpawnSuccess({ shellId, command, workingDirectory, pid }) {
    const inner = new Writer();
    inner.varint(1, shellId >>> 0);
    inner.string(2, command ?? "");
    inner.string(3, workingDirectory ?? "");
    if (void 0 !== pid) inner.varint(4, pid >>> 0);
    return new Writer().message(1, inner.finish()).finish();
}
function encodeBackgroundShellSpawnError({ command, workingDirectory, error }) {
    const inner = new Writer();
    inner.string(1, command ?? "");
    inner.string(2, workingDirectory ?? "");
    inner.string(3, String(error ?? ""));
    return new Writer().message(2, inner.finish()).finish();
}
function encodeDiagnosticsResult() {
    return new Writer().message(1, new Uint8Array(0)).finish();
}
function encodeReadSuccessInner({ path, content, data, totalLines = 0, fileSize = 0, truncated = false, rangeApplied = false }) {
    const writer = new Writer();
    writer.string(1, path ?? "");
    if (data instanceof Uint8Array) writer.bytes(5, data);
    else writer.string(2, content ?? "");
    writer.varint(3, totalLines);
    if (fileSize > 0) writer.varint(4, fileSize);
    if (truncated) writer.varint(6, 1);
    if (rangeApplied) writer.varint(8, 1);
    return writer.finish();
}
function encodeReadSuccess(args) {
    return new Writer().message(1, encodeReadSuccessInner(args)).finish();
}
function encodeReadErrorInner({ path, error }) {
    const writer = new Writer();
    writer.string(1, path ?? "");
    writer.string(2, String(error ?? ""));
    return writer.finish();
}
function encodeReadError(args) {
    return new Writer().message(2, encodeReadErrorInner(args)).finish();
}
function encodeReadFileNotFoundInner({ path }) {
    const writer = new Writer();
    writer.string(1, path ?? "");
    return writer.finish();
}
function encodeReadFileNotFound(args) {
    return new Writer().message(4, encodeReadFileNotFoundInner(args)).finish();
}
function encodeReadInvalidFileInner({ path, reason }) {
    const writer = new Writer();
    writer.string(1, path ?? "");
    writer.string(2, String(reason ?? ""));
    return writer.finish();
}
function encodeReadInvalidFile(args) {
    return new Writer().message(6, encodeReadInvalidFileInner(args)).finish();
}
function countLines(content) {
    const text = String(content ?? "");
    if (0 === text.length) return 0;
    return text.split("\n").length;
}
function encodeWriteSuccessInner({ path, content, returnFileContentAfterWrite = false }) {
    const writer = new Writer();
    writer.string(1, path ?? "");
    writer.varint(2, countLines(content));
    writer.varint(3, new TextEncoder().encode(content ?? "").length);
    if (returnFileContentAfterWrite) writer.string(4, content ?? "");
    return writer.finish();
}
function encodeWriteSuccess(args) {
    return new Writer().message(1, encodeWriteSuccessInner(args)).finish();
}
function encodeWriteErrorInner({ path, error }) {
    const writer = new Writer();
    writer.string(1, path ?? "");
    writer.string(2, String(error ?? ""));
    return writer.finish();
}
function encodeWriteError(args) {
    return new Writer().message(5, encodeWriteErrorInner(args)).finish();
}
function encodeGrepInnerError(error) {
    return new Writer().string(1, String(error ?? "")).finish();
}
function encodeGrepContentMatch({ lineNumber, content, contentTruncated = false, isContextLine = false }) {
    const writer = new Writer();
    writer.varint(1, lineNumber);
    writer.string(2, content ?? "");
    if (contentTruncated) writer.varint(3, 1);
    if (isContextLine) writer.varint(4, 1);
    return writer.finish();
}
function encodeGrepFileMatch({ file, matches }) {
    const writer = new Writer();
    writer.string(1, file ?? "");
    for (const match of matches ?? [])writer.message(2, encodeGrepContentMatch(match));
    return writer.finish();
}
function encodeGrepContentResult({ matches, totalLines = 0, totalMatchedLines = 0, clientTruncated = false, ripgrepTruncated = false, offsetApplied }) {
    const writer = new Writer();
    for (const file of matches ?? [])writer.message(1, encodeGrepFileMatch(file));
    writer.varint(2, totalLines);
    writer.varint(3, totalMatchedLines);
    if (clientTruncated) writer.varint(4, 1);
    if (ripgrepTruncated) writer.varint(5, 1);
    if (Number.isSafeInteger(offsetApplied)) writer.varint(7, offsetApplied);
    return writer.finish();
}
function encodeGrepFileCount({ file, count }) {
    const writer = new Writer();
    writer.string(1, file ?? "");
    writer.varint(2, count);
    return writer.finish();
}
function encodeGrepCountResult({ counts, totalFiles = 0, totalMatches = 0, clientTruncated = false, ripgrepTruncated = false, offsetApplied }) {
    const writer = new Writer();
    for (const entry of counts ?? [])writer.message(1, encodeGrepFileCount(entry));
    writer.varint(2, totalFiles);
    writer.varint(3, totalMatches);
    if (clientTruncated) writer.varint(4, 1);
    if (ripgrepTruncated) writer.varint(5, 1);
    if (Number.isSafeInteger(offsetApplied)) writer.varint(7, offsetApplied);
    return writer.finish();
}
function encodeGrepFilesResult({ files, totalFiles = 0, clientTruncated = false, ripgrepTruncated = false, offsetApplied }) {
    const writer = new Writer();
    for (const file of files ?? [])writer.string(1, file);
    writer.varint(2, totalFiles);
    if (clientTruncated) writer.varint(3, 1);
    if (ripgrepTruncated) writer.varint(4, 1);
    if (Number.isSafeInteger(offsetApplied)) writer.varint(6, offsetApplied);
    return writer.finish();
}
function encodeGrepSuccessResult({ pattern, path, outputMode, unionBytes }) {
    const entry = new Writer();
    entry.string(1, "string" == typeof path && path.length > 0 ? path : ".");
    entry.message(2, unionBytes);
    const success = new Writer();
    success.string(1, pattern ?? "");
    success.string(2, path ?? "");
    success.string(3, outputMode || "content");
    success.message(4, entry.finish());
    return new Writer().message(1, success.finish()).finish();
}
function encodeGrepErrorResult(error) {
    return new Writer().message(2, encodeGrepInnerError(error)).finish();
}
function encodeInteractionResponseEnvelope(responseBytes) {
    return new Writer().message(6, responseBytes).finish();
}
function encodeExecStreamClose(id) {
    const close = new Writer().varint(1, id).finish();
    const control = new Writer().message(1, close).finish();
    return new Writer().message(5, control).finish();
}
function encodeExecThrow(id, error, errorCode) {
    const thrown = new Writer();
    thrown.varint(1, id);
    thrown.string(2, String(error ?? ""));
    if ("string" == typeof errorCode && errorCode.length > 0) thrown.string(4, errorCode);
    const control = new Writer().message(2, thrown.finish()).finish();
    return new Writer().message(5, control).finish();
}
function encodeAskQuestionAnswer({ questionId, selectedOptionIds, freeformText }) {
    const writer = new Writer();
    writer.string(1, questionId ?? "");
    for (const optionId of selectedOptionIds ?? [])writer.string(2, optionId);
    if (void 0 !== freeformText) writer.string(3, freeformText);
    return writer.finish();
}
function encodeAskQuestionSuccess(answers) {
    const writer = new Writer();
    for (const answer of answers ?? [])writer.message(1, encodeAskQuestionAnswer(answer));
    return writer.finish();
}
function encodeAskQuestionResultSuccess(answers) {
    return new Writer().message(1, encodeAskQuestionSuccess(answers)).finish();
}
function encodeAskQuestionResultError(message) {
    return new Writer().message(2, new Writer().string(1, String(message ?? "")).finish()).finish();
}
function encodeAskQuestionInteractionResponse({ id, resultBytes }) {
    const inner = new Writer().message(1, resultBytes).finish();
    const writer = new Writer();
    writer.varint(1, id);
    writer.message(3, inner);
    return writer.finish();
}
function buildAskQuestionResultBytes(questions, result) {
    if (void 0 === result || result.isError) return encodeAskQuestionResultError(String(result?.content ?? "The AskQuestion answer was not provided"));
    let parsed;
    try {
        parsed = JSON.parse(result.content);
    } catch  {
        return encodeAskQuestionResultError("The AskQuestion answer could not be parsed");
    }
    const answers = Array.isArray(parsed?.answers) ? parsed.answers : [];
    const mapped = [];
    for (const question of questions ?? []){
        const questionId = String(question.id ?? "");
        const answer = answers.find((entry)=>null !== entry && "object" == typeof entry && String(entry.id ?? "") === questionId);
        const labels = Array.isArray(answer?.selected) ? answer.selected.map((value)=>String(value)) : [];
        const selectedOptionIds = [];
        for (const label of labels){
            const option = (question.options ?? []).find((candidate)=>candidate.label === label);
            if (void 0 !== option) selectedOptionIds.push(String(option.id));
        }
        const entry = {
            questionId,
            selectedOptionIds
        };
        if (void 0 !== answer && "string" == typeof answer.custom && answer.custom.length > 0) entry.freeformText = answer.custom;
        mapped.push(entry);
    }
    return encodeAskQuestionResultSuccess(mapped);
}
function encodeApprovedResult() {
    return new Writer().message(1, new Uint8Array(0)).finish();
}
function encodeInteractionApproved(id, field) {
    const writer = new Writer();
    writer.varint(1, id);
    writer.message(field, encodeApprovedResult());
    return writer.finish();
}
function encodeInteractionRejected(id, field, reason) {
    const writer = new Writer();
    writer.varint(1, id);
    writer.message(field, new Writer().message(2, new Writer().string(1, String(reason ?? "")).finish()).finish());
    return writer.finish();
}
const INTERACTION_UNAVAILABLE = "Not available in DeepSeek Harness.";
function rejectionForInteraction(query) {
    switch(query.case){
        case "switchModeRequestQuery":
            return {
                field: 4,
                payload: encodeInteractionRejected(query.id, 4, INTERACTION_UNAVAILABLE)
            };
        case "createPlanRequestQuery":
            {
                const result = new Writer().message(2, new Writer().string(1, INTERACTION_UNAVAILABLE).finish()).finish();
                const writer = new Writer();
                writer.varint(1, query.id);
                writer.message(7, new Writer().message(1, result).finish());
                return {
                    field: 7,
                    payload: writer.finish()
                };
            }
        case "prManagementRequestQuery":
            {
                const result = new Writer().message(3, new Writer().string(1, INTERACTION_UNAVAILABLE).finish()).finish();
                const writer = new Writer();
                writer.varint(1, query.id);
                writer.message(10, result);
                return {
                    field: 10,
                    payload: writer.finish()
                };
            }
        case "mcpAuthRequestQuery":
            return {
                field: 11,
                payload: encodeInteractionRejected(query.id, 11, INTERACTION_UNAVAILABLE)
            };
        case "generateImageRequestQuery":
            return {
                field: 12,
                payload: encodeInteractionRejected(query.id, 12, INTERACTION_UNAVAILABLE)
            };
        case "replaceEnvArgs":
            {
                const result = new Writer().message(2, new Writer().string(1, INTERACTION_UNAVAILABLE).finish()).finish();
                const writer = new Writer();
                writer.varint(1, query.id);
                writer.message(13, result);
                return {
                    field: 13,
                    payload: writer.finish()
                };
            }
        case "connectScmRequestQuery":
            return {
                field: 14,
                payload: encodeInteractionRejected(query.id, 14, INTERACTION_UNAVAILABLE)
            };
        case "setupVmEnvironmentArgs":
            return;
        default:
            return;
    }
}
function normalizeCursorTodos(items) {
    const todos = [];
    for (const item of items ?? []){
        if (null === item || "object" != typeof item) continue;
        const content = "string" == typeof item.content ? item.content : void 0;
        if (void 0 === content || 0 === content.trim().length) continue;
        const status = normalizeTodoStatus(item.status);
        if (void 0 !== status) todos.push({
            content,
            status
        });
    }
    return todos;
}
function normalizeTodoStatus(status) {
    if ("number" == typeof status) return ({
        0: void 0,
        1: "pending",
        2: "in_progress",
        3: "completed",
        4: void 0
    })[status];
    if ("string" != typeof status) return;
    switch(status.toLowerCase()){
        case "pending":
            return "pending";
        case "in_progress":
            return "in_progress";
        case "completed":
            return "completed";
        default:
            return;
    }
}
function decodeAskQuestionArgs(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    const args = {
        title: "",
        questions: [],
        runAsync: false
    };
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 2 === wireType) args.title = reader.string();
        else if (2 === field && 2 === wireType) {
            const inner = new external_proto_js_Reader(reader.bytes());
            const question = {
                id: "",
                prompt: "",
                options: [],
                allowMultiple: false
            };
            while(!inner.done){
                const tag = inner.tag();
                if (1 === tag.field && 2 === tag.wireType) question.id = inner.string();
                else if (2 === tag.field && 2 === tag.wireType) question.prompt = inner.string();
                else if (3 === tag.field && 2 === tag.wireType) {
                    const optionReader = new external_proto_js_Reader(inner.bytes());
                    const option = {
                        id: "",
                        label: ""
                    };
                    while(!optionReader.done){
                        const optionTag = optionReader.tag();
                        if (1 === optionTag.field && 2 === optionTag.wireType) option.id = optionReader.string();
                        else if (2 === optionTag.field && 2 === optionTag.wireType) option.label = optionReader.string();
                        else optionReader.skip(optionTag.wireType);
                    }
                    question.options.push(option);
                } else if (4 === tag.field && 0 === tag.wireType) question.allowMultiple = 0 !== inner.varint();
                else inner.skip(tag.wireType);
            }
            args.questions.push(question);
        } else if (5 === field && 0 === wireType) args.runAsync = 0 !== reader.varint();
        else if (6 === field && 2 === wireType) args.asyncOriginalToolCallId = reader.string();
        else reader.skip(wireType);
    }
    return args;
}
function decodeAskQuestionInteractionQuery(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    const value = {
        args: void 0,
        rawArgs: void 0,
        toolCallId: ""
    };
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 2 === wireType) {
            const payload = reader.bytes();
            value.rawArgs = Uint8Array.from(payload);
            value.args = decodeAskQuestionArgs(payload);
        } else if (2 === field && 2 === wireType) value.toolCallId = reader.string();
        else reader.skip(wireType);
    }
    return value;
}
function decodeInteractionQuery(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    let id = 0;
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 0 === wireType) id = reader.varint();
        else if (2 === wireType) {
            const payload = reader.bytes();
            if (2 === field) return {
                id,
                case: "webSearchRequestQuery",
                value: void 0
            };
            if (3 === field) return {
                id,
                case: "askQuestionInteractionQuery",
                value: decodeAskQuestionInteractionQuery(payload)
            };
            if (4 === field) return {
                id,
                case: "switchModeRequestQuery",
                value: void 0
            };
            if (7 === field) return {
                id,
                case: "createPlanRequestQuery",
                value: void 0
            };
            if (8 === field) return {
                id,
                case: "setupVmEnvironmentArgs",
                value: void 0
            };
            if (9 === field) return {
                id,
                case: "webFetchRequestQuery",
                value: void 0
            };
            if (10 === field) return {
                id,
                case: "prManagementRequestQuery",
                value: void 0
            };
            if (11 === field) return {
                id,
                case: "mcpAuthRequestQuery",
                value: void 0
            };
            if (12 === field) return {
                id,
                case: "generateImageRequestQuery",
                value: void 0
            };
            if (13 === field) return {
                id,
                case: "replaceEnvArgs",
                value: void 0
            };
            if (14 === field) return {
                id,
                case: "connectScmRequestQuery",
                value: void 0
            };
        } else reader.skip(wireType);
    }
    return {
        id,
        case: "unknown",
        value: void 0
    };
}
function decodeReadArgs(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    const args = {
        path: "",
        toolCallId: ""
    };
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 2 === wireType) args.path = reader.string();
        else if (2 === field && 2 === wireType) args.toolCallId = reader.string();
        else if (4 === field && 0 === wireType) args.offset = 0 | reader.varint();
        else if (5 === field && 0 === wireType) args.limit = reader.varint();
        else if (6 === field && 2 === wireType) args.encodingHint = reader.string();
        else reader.skip(wireType);
    }
    return args;
}
function decodeWriteArgs(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    const args = {
        path: "",
        fileText: "",
        toolCallId: ""
    };
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 2 === wireType) args.path = reader.string();
        else if (2 === field && 2 === wireType) args.fileText = reader.string();
        else if (3 === field && 2 === wireType) args.toolCallId = reader.string();
        else if (4 === field && 0 === wireType) args.returnFileContentAfterWrite = 0 !== reader.varint();
        else if (5 === field && 2 === wireType) args.fileBytes = reader.bytes();
        else if (6 === field && 2 === wireType) args.encodingHint = reader.string();
        else reader.skip(wireType);
    }
    return args;
}
function decodeGrepArgs(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    const args = {
        pattern: "",
        path: "",
        glob: "",
        outputMode: "",
        toolCallId: ""
    };
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 2 === wireType) args.pattern = reader.string();
        else if (2 === field && 2 === wireType) args.path = reader.string();
        else if (3 === field && 2 === wireType) args.glob = reader.string();
        else if (4 === field && 2 === wireType) args.outputMode = reader.string();
        else if (8 === field && 0 === wireType) args.caseInsensitive = 0 !== reader.varint();
        else if (9 === field && 2 === wireType) args.type = reader.string();
        else if (10 === field && 0 === wireType) args.headLimit = reader.varint();
        else if (14 === field && 2 === wireType) args.toolCallId = reader.string();
        else if (16 === field && 0 === wireType) args.offset = 0 | reader.varint();
        else reader.skip(wireType);
    }
    return args;
}
function decodeDeleteArgs(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    const args = {
        path: "",
        toolCallId: ""
    };
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 2 === wireType) args.path = reader.string();
        else if (2 === field && 2 === wireType) args.toolCallId = reader.string();
        else reader.skip(wireType);
    }
    return args;
}
function decodeSandboxPolicy(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    const policy = {
        type: 0,
        networkAccess: false,
        additionalReadwritePaths: []
    };
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 0 === wireType) policy.type = reader.varint();
        else if (2 === field && 0 === wireType) policy.networkAccess = 0 !== reader.varint();
        else if (3 === field && 2 === wireType) policy.additionalReadwritePaths.push(reader.string());
        else if (6 === field && 0 === wireType) policy.blockGitWrites = 0 !== reader.varint();
        else reader.skip(wireType);
    }
    return policy;
}
Object.freeze({
    UNSPECIFIED: 0,
    INSECURE_NONE: 1,
    WORKSPACE_READWRITE: 2,
    WORKSPACE_READONLY: 3
});
function decodeShellArgs(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    const args = {
        command: "",
        workingDirectory: "",
        timeout: void 0,
        toolCallId: "",
        skipApproval: false,
        sandboxPolicy: void 0,
        isBackground: false,
        timeoutBehavior: 0,
        hardTimeout: void 0,
        description: void 0
    };
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 2 === wireType) args.command = reader.string();
        else if (2 === field && 2 === wireType) args.workingDirectory = reader.string();
        else if (3 === field && 0 === wireType) args.timeout = reader.varint();
        else if (4 === field && 2 === wireType) args.toolCallId = reader.string();
        else if (9 === field && 2 === wireType) args.sandboxPolicy = decodeSandboxPolicy(reader.bytes());
        else if (11 === field && 0 === wireType) args.isBackground = 0 !== reader.varint();
        else if (12 === field && 0 === wireType) args.skipApproval = 0 !== reader.varint();
        else if (13 === field && 0 === wireType) args.timeoutBehavior = reader.varint();
        else if (14 === field && 0 === wireType) args.hardTimeout = reader.varint();
        else if (15 === field && 2 === wireType) args.description = reader.string();
        else reader.skip(wireType);
    }
    return args;
}
function decodeBackgroundShellSpawnArgs(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    const args = {
        command: "",
        workingDirectory: "",
        toolCallId: "",
        enableWriteShellStdinTool: false,
        sandboxPolicy: void 0
    };
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 2 === wireType) args.command = reader.string();
        else if (2 === field && 2 === wireType) args.workingDirectory = reader.string();
        else if (3 === field && 2 === wireType) args.toolCallId = reader.string();
        else if (5 === field && 2 === wireType) args.sandboxPolicy = decodeSandboxPolicy(reader.bytes());
        else if (6 === field && 0 === wireType) args.enableWriteShellStdinTool = 0 !== reader.varint();
        else reader.skip(wireType);
    }
    return args;
}
function decodeWriteShellStdinArgs(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    const args = {
        shellId: 0,
        chars: ""
    };
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 0 === wireType) args.shellId = reader.varint();
        else if (2 === field && 2 === wireType) args.chars = reader.string();
        else reader.skip(wireType);
    }
    return args;
}
function decodeConversationStateTodos(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    let present = false;
    const items = [];
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (3 === field && 2 === wireType) {
            present = true;
            try {
                const item = JSON.parse(new TextDecoder().decode(reader.bytes()));
                if (null !== item && "object" == typeof item) items.push(item);
            } catch  {}
        } else reader.skip(wireType);
    }
    return {
        present,
        items
    };
}
function decodeConversationTokenDetails(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (5 === field && 2 === wireType) return decodeTokenDetailsMessage(reader.bytes());
        reader.skip(wireType);
    }
}
function decodeTokenDetailsMessage(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    const details = {};
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 0 === wireType) details.usedTokens = reader.varint();
        else if (2 === field && 0 === wireType) details.maxTokens = reader.varint();
        else reader.skip(wireType);
    }
    return details;
}
new TextDecoder();
function decodeAgentServerMessage(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (2 !== wireType) {
            reader.skip(wireType);
            continue;
        }
        const payload = reader.bytes();
        if (1 === field) return {
            case: "interactionUpdate",
            value: decodeInteractionUpdate(payload)
        };
        if (2 === field) return {
            case: "execServerMessage",
            value: decodeExecServerMessage(payload)
        };
        if (3 === field) return {
            case: "conversationCheckpointUpdate",
            value: payload
        };
        if (4 === field) return {
            case: "kvServerMessage",
            value: decodeKvServerMessage(payload)
        };
        if (5 === field) return {
            case: "execServerControlMessage",
            value: payload
        };
        if (7 === field) return {
            case: "interactionQuery",
            value: decodeInteractionQuery(payload)
        };
    }
    return {
        case: "unknown",
        value: void 0
    };
}
function projectInteractionPayload(kind, payload) {
    if ("textDelta" === kind) return {
        type: "textDelta",
        text: decodeTextDelta(payload)
    };
    if ("thinkingDelta" === kind) return {
        type: "thinkingDelta",
        text: decodeTextDelta(payload)
    };
    if ("tokenDelta" === kind) return {
        type: "tokenDelta",
        tokens: decodeTokenDelta(payload)
    };
    if ("turnEnded" === kind) return {
        type: "turnEnded",
        ...decodeTurnEndedUpdate(payload)
    };
    if ("toolCallStarted" === kind) return {
        type: "toolCallStarted",
        display: decodeToolCallDisplay(payload)
    };
    if ("toolCallCompleted" === kind) return {
        type: "toolCallCompleted",
        display: decodeToolCallDisplay(payload)
    };
    if ("partialToolCall" === kind) return {
        type: "partialToolCall",
        ...decodePartialToolCall(payload)
    };
    if ("toolCallDelta" === kind) return {
        type: "toolCallDelta"
    };
    if ("heartbeat" === kind) return {
        type: "heartbeat"
    };
    if ("userMessageAppended" === kind) return {
        type: "userMessageAppended"
    };
    if ("contextInjectionState" === kind) return {
        type: "contextInjectionState",
        ...decodeContextInjectionStateUpdate(payload)
    };
    if ("summary" === kind) return {
        type: "summary",
        text: decodeSummaryUpdate(payload)
    };
    if ("summaryStarted" === kind) return {
        type: "summaryStarted"
    };
    if ("summaryCompleted" === kind) return {
        type: "summaryCompleted"
    };
    return {
        type: kind
    };
}
function decodeInteractionUpdate(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (2 !== wireType) {
            reader.skip(wireType);
            continue;
        }
        const payload = reader.bytes();
        const kind = oneofCaseByField(InteractionUpdate, field);
        if (kind) return projectInteractionPayload(kind, payload);
    }
    return {
        type: "unknown"
    };
}
function decodeContextInjectionStateUpdate(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    let injectionId = "";
    let state = "unknown";
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 2 === wireType) injectionId = reader.string();
        else if (2 === field && 2 === wireType) state = decodeContextInjectionState(reader.bytes());
        else reader.skip(wireType);
    }
    return {
        injectionId,
        state
    };
}
function decodeContextInjectionState(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    while(!reader.done){
        const { field, wireType } = reader.tag();
        reader.skip(wireType);
        if (1 === field) return "queued";
        if (2 === field) return "delivered";
        if (3 === field) return "queued_for_next_turn";
        if (4 === field) return "cancelled";
        if (5 === field) return "rejected";
    }
    return "unknown";
}
function decodeTextDelta(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 2 === wireType) return reader.string();
        reader.skip(wireType);
    }
    return "";
}
function decodeTodoItem(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    const item = {
        id: "",
        content: "",
        status: 0
    };
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 2 === wireType) item.id = reader.string();
        else if (2 === field && 2 === wireType) item.content = reader.string();
        else if (3 === field && 0 === wireType) item.status = reader.varint();
        else reader.skip(wireType);
    }
    return item;
}
function decodeTodoItemsList(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    const items = [];
    let totalCount;
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 2 === wireType) items.push(decodeTodoItem(reader.bytes()));
        else if (2 === field && 0 === wireType) totalCount = reader.varint();
        else reader.skip(wireType);
    }
    return {
        items,
        totalCount
    };
}
function decodeUpdateTodosCall(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (2 === field && 2 === wireType) {
            const result = new external_proto_js_Reader(reader.bytes());
            while(!result.done){
                const tag = result.tag();
                if (1 === tag.field && 2 === tag.wireType) {
                    const success = decodeTodoItemsList(result.bytes());
                    return {
                        kind: "update",
                        todos: success.items,
                        totalCount: success.totalCount,
                        error: void 0
                    };
                }
                if (2 === tag.field && 2 === tag.wireType) {
                    const error = decodeErrorMessage(result.bytes());
                    return {
                        kind: "update",
                        todos: void 0,
                        totalCount: void 0,
                        error
                    };
                }
                result.skip(tag.wireType);
            }
            break;
        }
        reader.skip(wireType);
    }
}
function decodeReadTodosCall(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    let filtered = false;
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 2 === wireType) {
            const args = new external_proto_js_Reader(reader.bytes());
            while(!args.done){
                const tag = args.tag();
                if (1 === tag.field || 2 === tag.field) filtered = true;
                args.skip(tag.wireType);
            }
        } else if (2 === field && 2 === wireType) {
            const result = new external_proto_js_Reader(reader.bytes());
            while(!result.done){
                const tag = result.tag();
                if (1 === tag.field && 2 === tag.wireType) {
                    const success = decodeTodoItemsList(result.bytes());
                    return {
                        kind: "read",
                        filtered,
                        todos: success.items,
                        totalCount: success.totalCount,
                        error: void 0
                    };
                }
                if (2 === tag.field && 2 === tag.wireType) {
                    const error = decodeErrorMessage(result.bytes());
                    return {
                        kind: "read",
                        filtered,
                        todos: void 0,
                        totalCount: void 0,
                        error
                    };
                }
                result.skip(tag.wireType);
            }
            break;
        } else reader.skip(wireType);
    }
}
function decodeWebSearchCall(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    const call = {
        searchTerm: "",
        references: [],
        error: void 0
    };
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 2 === wireType) {
            const args = new external_proto_js_Reader(reader.bytes());
            while(!args.done){
                const tag = args.tag();
                if (1 === tag.field && 2 === tag.wireType) call.searchTerm = args.string();
                else args.skip(tag.wireType);
            }
        } else if (2 === field && 2 === wireType) {
            const result = new external_proto_js_Reader(reader.bytes());
            while(!result.done){
                const tag = result.tag();
                if (1 === tag.field && 2 === tag.wireType) {
                    const success = new external_proto_js_Reader(result.bytes());
                    while(!success.done){
                        const ref = success.tag();
                        if (1 === ref.field && 2 === ref.wireType) {
                            const reference = new external_proto_js_Reader(success.bytes());
                            const entry = {
                                title: "",
                                url: "",
                                chunk: ""
                            };
                            while(!reference.done){
                                const r = reference.tag();
                                if (1 === r.field && 2 === r.wireType) entry.title = reference.string();
                                else if (2 === r.field && 2 === r.wireType) entry.url = reference.string();
                                else if (3 === r.field && 2 === r.wireType) entry.chunk = reference.string();
                                else reference.skip(r.wireType);
                            }
                            call.references.push(entry);
                        } else success.skip(ref.wireType);
                    }
                } else if (2 === tag.field || 3 === tag.field) call.error = decodeErrorMessage(result.bytes());
                else result.skip(tag.wireType);
            }
        } else reader.skip(wireType);
    }
    return call;
}
function decodeFetchCall(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    const call = {
        url: "",
        content: "",
        statusCode: 0,
        error: void 0
    };
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 2 === wireType) {
            const args = new external_proto_js_Reader(reader.bytes());
            while(!args.done){
                const tag = args.tag();
                if (1 === tag.field && 2 === tag.wireType) call.url = args.string();
                else args.skip(tag.wireType);
            }
        } else if (2 === field && 2 === wireType) {
            const result = new external_proto_js_Reader(reader.bytes());
            while(!result.done){
                const tag = result.tag();
                if (1 === tag.field && 2 === tag.wireType) {
                    const success = new external_proto_js_Reader(result.bytes());
                    while(!success.done){
                        const f = success.tag();
                        if (1 === f.field && 2 === f.wireType) call.url = success.string();
                        else if (2 === f.field && 2 === f.wireType) call.content = success.string();
                        else if (3 === f.field && 0 === f.wireType) call.statusCode = success.varint();
                        else success.skip(f.wireType);
                    }
                } else if (2 === tag.field && 2 === tag.wireType) call.error = decodeErrorMessage(result.bytes());
                else result.skip(tag.wireType);
            }
        } else reader.skip(wireType);
    }
    return call;
}
function decodeErrorMessage(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 2 === wireType) return reader.string();
        reader.skip(wireType);
    }
    return "unknown error";
}
function decodeToolCallDisplay(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    let callId = "";
    let toolCall;
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 2 === wireType) callId = reader.string();
        else if (2 === field && 2 === wireType) toolCall = Uint8Array.from(reader.bytes());
        else reader.skip(wireType);
    }
    if (void 0 === toolCall) return;
    const inner = new external_proto_js_Reader(toolCall);
    while(!inner.done){
        const tag = inner.tag();
        if (2 !== tag.wireType) {
            inner.skip(tag.wireType);
            continue;
        }
        const payload = inner.bytes();
        if (9 === tag.field) return {
            callId,
            name: "todo_write",
            displayKind: "update_todos",
            call: decodeUpdateTodosCall(payload)
        };
        if (10 === tag.field) return {
            callId,
            name: "todo_write",
            displayKind: "read_todos",
            call: decodeReadTodosCall(payload)
        };
        if (18 === tag.field) return {
            callId,
            name: "web_search",
            displayKind: "web_search",
            call: decodeWebSearchCall(payload)
        };
        if (24 === tag.field || 37 === tag.field) return {
            callId,
            name: "web_fetch",
            displayKind: "web_fetch",
            call: decodeFetchCall(payload)
        };
    }
}
function decodeTokenDelta(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 0 === wireType) return reader.varint();
        reader.skip(wireType);
    }
    return 0;
}
function decodeTurnEndedUpdate(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    const usage = {};
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (0 === wireType) {
            const value = reader.varint();
            if (1 === field) usage.inputTokens = value;
            else if (2 === field) usage.outputTokens = value;
            else if (3 === field) usage.cacheReadTokens = value;
            else if (4 === field) usage.cacheWriteTokens = value;
            else if (5 === field) usage.reasoningTokens = value;
        } else reader.skip(wireType);
    }
    return usage;
}
function finiteTokenCount(value) {
    return "number" == typeof value && Number.isFinite(value) && value >= 0 ? value : void 0;
}
function projectCursorTokenUsage({ turnEnded, outputTokens = 0, tokenDetails } = {}) {
    const ended = turnEnded ?? {};
    const output = finiteTokenCount(ended.outputTokens) ?? finiteTokenCount(outputTokens) ?? 0;
    const reasoning = finiteTokenCount(ended.reasoningTokens);
    const used = finiteTokenCount(tokenDetails?.usedTokens);
    if (void 0 !== used && used > 0) {
        const inputTokens = Math.max(0, used - output);
        const usage = {
            inputTokens,
            outputTokens: output,
            totalTokens: used
        };
        if (void 0 !== reasoning && reasoning > 0) usage.reasoningTokens = reasoning;
        return usage;
    }
    const input = finiteTokenCount(ended.inputTokens) ?? 0;
    const cacheRead = finiteTokenCount(ended.cacheReadTokens) ?? 0;
    const usage = {
        inputTokens: input,
        outputTokens: output
    };
    if (cacheRead > 0) usage.cacheReadTokens = cacheRead;
    if (void 0 !== reasoning && reasoning > 0) usage.reasoningTokens = reasoning;
    const total = input + output + cacheRead;
    if (total > 0) usage.totalTokens = total;
    return usage;
}
function decodePartialToolCall(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    let callId = "";
    let argsTextDelta = "";
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 2 === wireType) callId = reader.string();
        else if (3 === field && 2 === wireType) argsTextDelta = reader.string();
        else reader.skip(wireType);
    }
    return {
        callId,
        argsTextDelta
    };
}
function decodeKvServerMessage(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    let id = 0;
    let blobId;
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 0 === wireType) id = reader.varint();
        else if (2 === field && 2 === wireType) blobId = decodeBlobId(reader.bytes());
        else {
            if (3 === field && 2 === wireType) return {
                id,
                case: "setBlobArgs",
                ...decodeSetBlobArgs(reader.bytes())
            };
            reader.skip(wireType);
        }
    }
    return void 0 === blobId ? {
        id,
        case: "unknown"
    } : {
        id,
        case: "getBlobArgs",
        blobId
    };
}
function decodeSetBlobArgs(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    let blobId;
    let blobData;
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 2 === wireType) blobId = reader.bytes();
        else if (2 === field && 2 === wireType) blobData = reader.bytes();
        else reader.skip(wireType);
    }
    return {
        blobId,
        blobData
    };
}
function decodeBlobId(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 2 === wireType) return reader.bytes();
        reader.skip(wireType);
    }
}
function oneofCaseByField(type, field) {
    for (const info of type.fields.list())if (info.no === field && info.oneof) return info.jsonName ?? info.name.replace(/_([a-z0-9])/g, (_, ch)=>ch.toUpperCase());
}
function decodeExecServerMessage(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    let id = 0;
    let execId = "";
    let kind;
    let payload;
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 0 === wireType) id = reader.varint();
        else if (15 === field && 2 === wireType) execId = reader.string();
        else if (2 === wireType) {
            const name = oneofCaseByField(ExecServerMessage, field);
            const data = reader.bytes();
            if (name && void 0 === kind) {
                kind = name;
                payload = data;
            }
        } else reader.skip(wireType);
    }
    return projectExecServerMessage(id, execId, kind, payload);
}
function projectExecServerMessage(id, execId, kind, payload) {
    if (void 0 === kind) return {
        id,
        execId,
        case: "unknown"
    };
    if ("requestContextArgs" === kind) return {
        id,
        execId,
        case: "requestContextArgs"
    };
    if ("mcpArgs" === kind) return {
        id,
        execId,
        case: "mcpArgs",
        args: decodeMcpArgs(payload),
        rawArgs: Uint8Array.from(payload)
    };
    if ("shellArgs" === kind) return {
        id,
        execId,
        case: "shellArgs",
        path: decodeSinglePathArg(payload)
    };
    if ("writeArgs" === kind) return {
        id,
        execId,
        case: "writeArgs",
        path: decodeSinglePathArg(payload),
        args: decodeWriteArgs(payload)
    };
    if ("deleteArgs" === kind) return {
        id,
        execId,
        case: "deleteArgs",
        path: decodeSinglePathArg(payload),
        args: decodeDeleteArgs(payload)
    };
    if ("grepArgs" === kind) return {
        id,
        execId,
        case: "grepArgs",
        args: decodeGrepArgs(payload)
    };
    if ("readArgs" === kind) return {
        id,
        execId,
        case: "readArgs",
        path: decodeReadArgsPath(payload),
        args: decodeReadArgs(payload)
    };
    if ("lsArgs" === kind) return {
        id,
        execId,
        case: "lsArgs",
        path: decodeSinglePathArg(payload)
    };
    if ("diagnosticsArgs" === kind) return {
        id,
        execId,
        case: "diagnosticsArgs"
    };
    if ("shellStreamArgs" === kind) return {
        id,
        execId,
        case: "shellStreamArgs",
        path: decodeSinglePathArg(payload),
        args: decodeShellArgs(payload),
        rawArgs: Uint8Array.from(payload)
    };
    if ("backgroundShellSpawnArgs" === kind) return {
        id,
        execId,
        case: "backgroundShellSpawnArgs",
        args: decodeBackgroundShellSpawnArgs(payload),
        rawArgs: Uint8Array.from(payload)
    };
    if ("listMcpResourcesExecArgs" === kind) return {
        id,
        execId,
        case: "listMcpResourcesExecArgs"
    };
    if ("readMcpResourceExecArgs" === kind) return {
        id,
        execId,
        case: "readMcpResourceExecArgs"
    };
    if ("fetchArgs" === kind) return {
        id,
        execId,
        case: "fetchArgs",
        url: decodeFetchUrl(payload)
    };
    if ("recordScreenArgs" === kind) return {
        id,
        execId,
        case: "recordScreenArgs"
    };
    if ("computerUseArgs" === kind) return {
        id,
        execId,
        case: "computerUseArgs"
    };
    if ("writeShellStdinArgs" === kind) return {
        id,
        execId,
        case: "writeShellStdinArgs",
        args: decodeWriteShellStdinArgs(payload),
        rawArgs: Uint8Array.from(payload)
    };
    return {
        id,
        execId,
        case: kind
    };
}
function decodeSinglePathArg(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 2 === wireType) return reader.string();
        reader.skip(wireType);
    }
    return "";
}
function decodeReadArgsPath(bytes) {
    return decodeSinglePathArg(bytes);
}
function decodeFetchUrl(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 2 === wireType) return reader.string();
        reader.skip(wireType);
    }
    return "";
}
function decodeMcpArgs(bytes) {
    const reader = new external_proto_js_Reader(bytes);
    let name = "";
    let toolCallId = "";
    let providerIdentifier = "";
    let toolName = "";
    const args = {};
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 2 === wireType) name = reader.string();
        else if (2 === field && 2 === wireType) {
            const entry = new external_proto_js_Reader(reader.bytes());
            let key = "";
            let value;
            while(!entry.done){
                const tag = entry.tag();
                if (1 === tag.field && 2 === tag.wireType) key = entry.string();
                else if (2 === tag.field && 2 === tag.wireType) value = entry.bytes();
                else entry.skip(tag.wireType);
            }
            if (key) args[key] = value;
        } else if (3 === field && 2 === wireType) toolCallId = reader.string();
        else if (4 === field && 2 === wireType) providerIdentifier = reader.string();
        else if (5 === field && 2 === wireType) toolName = reader.string();
        else reader.skip(wireType);
    }
    return {
        name,
        toolCallId,
        providerIdentifier,
        toolName,
        args
    };
}
function decodeUsableModels(bytes) {
    const models = [];
    for (const model of GetUsableModelsResponse.fromBinary(bytes).models ?? []){
        const id = model.modelId || model.displayModelId;
        if (id) models.push({
            id,
            displayModelId: model.displayModelId || void 0,
            name: model.displayName || void 0,
            displayNameShort: model.displayNameShort || void 0
        });
    }
    return models;
}
function encodeNameAgentRequest(userMessage) {
    return new NameAgentRequest({
        userMessage: userMessage ?? ""
    }).toBinary();
}
function decodeNameAgentResponse(bytes) {
    return NameAgentResponse.fromBinary(bytes).name ?? "";
}
function unwrapSessionTitleFrame(text) {
    const trimmed = "string" == typeof text ? text.trim() : "";
    if (0 === trimmed.length) return "";
    let payload = trimmed;
    if (trimmed.startsWith(DSH_SESSION_TITLE_FRAME_PREFIX)) payload = trimmed.slice(DSH_SESSION_TITLE_FRAME_PREFIX.length).trim();
    if (payload.startsWith("[")) try {
        const parsed = JSON.parse(payload);
        if (Array.isArray(parsed)) {
            for (const item of parsed)if (null !== item && "object" == typeof item && "string" == typeof item.text && item.text.trim().length > 0) return item.text;
        }
    } catch  {}
    return trimmed;
}
function extractSessionTitleUserMessage(options) {
    for (const message of options.messages ?? []){
        if ("user" !== message.role) continue;
        const content = Array.isArray(message.content) ? message.content : [];
        const text = content.filter((block)=>"text" === block.type && "string" == typeof block.text).map((block)=>block.text).join("\n");
        const userMessage = unwrapSessionTitleFrame(text);
        if (userMessage.length > 0) return userMessage;
    }
    return "";
}
export { INTERACTION_UNAVAILABLE, adoptBlobStore, appendTurnsToCheckpoint, buildAskQuestionResultBytes, decodeAgentServerMessage, decodeAskQuestionInteractionQuery, decodeBackgroundShellSpawnArgs, decodeContextInjectionStateUpdate, decodeConversationStateTodos, decodeConversationTokenDetails, decodeDeleteArgs, decodeExecServerMessage, decodeGrepArgs, decodeInteractionQuery, decodeInteractionUpdate, decodeKvServerMessage, decodeMcpArgs, decodeNameAgentResponse, decodeReadArgs, decodeSandboxPolicy, decodeShellArgs, decodeToolCallDisplay, decodeTurnEndedUpdate, decodeUsableModels, decodeWriteArgs, decodeWriteShellStdinArgs, encodeAgentTurn, encodeAskQuestionInteractionResponse, encodeAskQuestionResultError, encodeAskQuestionResultSuccess, encodeAskQuestionSuccess, encodeAssistantMessage, encodeAssistantStep, encodeAsyncAskQuestionCompletionAction, encodeBackgroundShellRejectedResult, encodeBackgroundShellSpawnError, encodeBackgroundShellSpawnSuccess, encodeConversationActionMessage, encodeConversationState, encodeDeleteRejected, encodeDiagnosticsResult, encodeExecClientMessage, encodeExecClientMessageEnvelope, encodeExecStreamClose, encodeExecThrow, encodeFetchError, encodeGetBlobResult, encodeGrepContentResult, encodeGrepCountResult, encodeGrepError, encodeGrepErrorResult, encodeGrepFilesResult, encodeGrepSuccessResult, encodeHeartbeat, encodeInjectContextAction, encodeInteractionApproved, encodeInteractionRejected, encodeInteractionResponseEnvelope, encodeKvClientMessage, encodeLsRejected, encodeMcpError, encodeMcpResult, encodeMcpToolCallStep, encodeMcpToolDefinition, encodeModelDetails, encodeNameAgentRequest, encodeOutputLocation, encodeReadError, encodeReadFileNotFound, encodeReadInvalidFile, encodeReadRejected, encodeReadSuccess, encodeReplayTurnBlob, encodeRequestContextResult, encodeResumeAction, encodeRunMessage, encodeRunRequest, encodeSetBlobResult, encodeShellFailure, encodeShellPermissionDenied, encodeShellRejectedResult, encodeShellSpawnError, encodeShellStreamBackgrounded, encodeShellStreamExit, encodeShellStreamRejected, encodeShellStreamStart, encodeShellStreamStderr, encodeShellStreamStdout, encodeShellSuccess, encodeShellTimeout, encodeSystemContextInjection, encodeTurnStructure, encodeUserContextInjection, encodeUserMessage, encodeUserMessageAction, encodeWriteError, encodeWriteRejected, encodeWriteShellStdinError, encodeWriteShellStdinSuccess, encodeWriteSuccess, extractSessionTitleUserMessage, normalizeCursorTodos, projectCursorTokenUsage, rejectionForInteraction, storeBlob, unwrapSessionTitleFrame };
