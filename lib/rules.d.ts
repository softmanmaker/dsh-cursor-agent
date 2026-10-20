/** Description cap (`AZ6` in `@cursor/sdk`). */
export declare const RULE_DESCRIPTION_CAP = 1536;
/** Skip one source file larger than this (DSH `maxSourceBytes` / Cursor sanity). */
export declare const MAX_RULE_SOURCE_BYTES = 1048576;
/** Bound the RequestContext payload. */
export declare const MAX_RULES = 256;
export declare function normalizeRuleGlobs(value: any): any[];
/**
 * Cursor's `Jo0` .mdc frontmatter parser (not full YAML).
 * @returns {{ frontmatter: Record<string, unknown>, rawFrontmatter: string, body: string } | undefined}
 */
export declare function parseCursorRuleFrontmatter(text: any): {
    frontmatter: any;
    rawFrontmatter: string;
    body: string;
};
/** Cursor `x31` type selection from parsed frontmatter. */
export declare function cursorRuleKindFromFrontmatter(frontmatter?: any): {
    kind: string;
    globs?: undefined;
    description?: undefined;
} | {
    kind: string;
    globs: any[];
    description?: undefined;
} | {
    kind: string;
    description: any;
    globs?: undefined;
};
/** Virtual path for the DSH-assembled system prompt uploaded as a Cursor rule. */
export declare const DSH_SYSTEM_RULE_PATH = "dsh://system-prompt";
/**
 * DSH's composed system prompt (persona, harness identity, plugin sections)
 * as an always-apply Cursor rule. The official `root_prompt` / custom-system
 * slots replace Cursor's built-in agent prompt; rules append beside it.
 */
export declare function dshSystemPromptRule(text: any): any;
/** Prepend the DSH system prompt rule when the assembled text is non-empty. */
export declare function mergeDshSystemRule(rules: any, systemText: any): any;
export declare function encodeCursorRuleType(rule: any): Uint8Array<ArrayBuffer>;
export declare function encodeCursorRule(rule: any): Uint8Array<ArrayBuffer>;
/**
 * Collect Cursor rules for one workspace cwd.
 *
 * @param {{ cwd?: string, includeClaude?: boolean, userRulesDir?: string | false, fs?: typeof defaultIo }} [options]
 */
export declare function collectCursorRules(options?: any): Promise<any[]>;
