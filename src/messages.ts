/**
 * Message-shape compatibility for DSH 0.2.x.
 *
 * DSH 0.2 replaced in-message `tool-result` blocks with first-class
 * `role: "tool"` messages (`toolCallId`, `isError`) and replaced the single
 * `source.kind: "plugin"` with a merge-extensible per-producer vocabulary
 * (`runtime-context`, `compact-checkpoint`, `tool-registry`, `ptc-mode`, ...).
 * The adapter keeps projecting history into the 0.1 conversational shape for
 * Cursor, so every reader funnels through these helpers instead of testing
 * either shape inline.
 */

/** Flatten model-facing blocks to plain text, keeping tool results labeled. */
export function flattenBlocks(content : any) : string {
	let text = "";
	for (const block of content ?? []) {
		if (block?.type === "text") text += block.text;
		else if (block?.type === "tool-result") {
			const callId = block.toolCallId ? ` for ${block.toolCallId}` : "";
			text += `\n[TOOL RESULT${callId}]\n${flattenBlocks(block.content)}`;
		}
	}
	return text;
}

/**
 * Whether one message carries a tool result: a 0.2 `tool` message or a 0.1
 * user message holding `tool-result` blocks.
 */
export function isToolResultMessage(message : any) : boolean {
	if (message?.role === "tool") return true;
	return (message?.content ?? []).some((block) => block?.type === "tool-result");
}

/**
 * Normalize the tool results carried by one message. Both shapes may carry
 * more than one result; a 0.2 `tool` message carries exactly one.
 */
export function toolResultsOf(message : any) : Array<any> {
	const results = [];
	if (message?.role === "tool") {
		results.push({
			toolCallId: message.toolCallId ?? message.source?.callId,
			content: flattenBlocks(message.content).trim(),
			isError: message.isError === true,
		});
		return results;
	}
	for (const block of message?.content ?? []) {
		if (block?.type !== "tool-result") continue;
		results.push({
			toolCallId: block.toolCallId ?? message.source?.callId,
			content: flattenBlocks(block.content).trim(),
			isError: block.isError === true,
		});
	}
	return results;
}

/**
 * A human-authored user turn. Any other user-role message is a producer
 * inject, whether it names a 0.1 `plugin` or a 0.2 producer kind.
 */
export function isHumanUserMessage(message : any) : boolean {
	if (message?.role !== "user" || isToolResultMessage(message)) return false;
	return (message?.source?.kind ?? "user") === "user";
}

/** A user-role message produced by a plugin, context source, or compaction. */
export function isInjectionMessage(message : any) : boolean {
	if (message == null || isToolResultMessage(message)) return false;
	const role = message.role;
	if (role === "assistant" || role === "system" || role === "developer" || role === "tool") return false;
	const kind = message?.source?.kind;
	return kind !== undefined && kind !== "user";
}

/** Producer label used by the mid-turn InjectContext denylist. */
export function injectionProducer(message : any) : string {
	return String(message?.source?.plugin ?? message?.source?.kind ?? "plugin");
}
