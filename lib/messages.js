function flattenBlocks(content) {
    let text = "";
    for (const block of content ?? [])if (block?.type === "text") text += block.text;
    else if (block?.type === "tool-result") {
        const callId = block.toolCallId ? ` for ${block.toolCallId}` : "";
        text += `\n[TOOL RESULT${callId}]\n${flattenBlocks(block.content)}`;
    }
    return text;
}
function isToolResultMessage(message) {
    if (message?.role === "tool") return true;
    return (message?.content ?? []).some((block)=>block?.type === "tool-result");
}
function toolResultsOf(message) {
    const results = [];
    if (message?.role === "tool") {
        results.push({
            toolCallId: message.toolCallId ?? message.source?.callId,
            content: flattenBlocks(message.content).trim(),
            isError: true === message.isError
        });
        return results;
    }
    for (const block of message?.content ?? [])if (block?.type === "tool-result") results.push({
        toolCallId: block.toolCallId ?? message.source?.callId,
        content: flattenBlocks(block.content).trim(),
        isError: true === block.isError
    });
    return results;
}
function isHumanUserMessage(message) {
    if (message?.role !== "user" || isToolResultMessage(message)) return false;
    return (message?.source?.kind ?? "user") === "user";
}
function isInjectionMessage(message) {
    if (null == message || isToolResultMessage(message)) return false;
    const role = message.role;
    if ("assistant" === role || "system" === role || "developer" === role || "tool" === role) return false;
    const kind = message?.source?.kind;
    return void 0 !== kind && "user" !== kind;
}
function injectionProducer(message) {
    return String(message?.source?.plugin ?? message?.source?.kind ?? "plugin");
}
export { flattenBlocks, injectionProducer, isHumanUserMessage, isInjectionMessage, isToolResultMessage, toolResultsOf };
