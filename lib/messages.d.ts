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
export declare function flattenBlocks(content: any): string;
/**
 * Whether one message carries a tool result: a 0.2 `tool` message or a 0.1
 * user message holding `tool-result` blocks.
 */
export declare function isToolResultMessage(message: any): boolean;
/**
 * Normalize the tool results carried by one message. Both shapes may carry
 * more than one result; a 0.2 `tool` message carries exactly one.
 */
export declare function toolResultsOf(message: any): Array<any>;
/**
 * A human-authored user turn. Any other user-role message is a producer
 * inject, whether it names a 0.1 `plugin` or a 0.2 producer kind.
 */
export declare function isHumanUserMessage(message: any): boolean;
/** A user-role message produced by a plugin, context source, or compaction. */
export declare function isInjectionMessage(message: any): boolean;
/** Producer label used by the mid-turn InjectContext denylist. */
export declare function injectionProducer(message: any): string;
