export declare const DEFAULT_EFFORT_ID = "default";
/** Assumed when AvailableModels omits `context_token_limit`. */
export declare const FALLBACK_CONTEXT_WINDOW = 200000;
/** AvailableModelsRequest { use_model_parameters=5, do_not_use_markdown=7 }. */
export declare function encodeAvailableModelsRequest(): Uint8Array<ArrayBuffer>;
/** RequestedModel { model_id=1, max_mode=2, parameters=3 }. */
export declare function encodeRequestedModel({ modelId, maxMode, parameters }: any): Uint8Array<ArrayBuffer>;
export declare function decodeAvailableModels(bytes: any): any;
/** Build a suffix from parameter values when the server omitted a representation. */
export declare function synthesizeEffortId(parameters?: any[]): string;
/**
 * Cursor CLI's param summary: definition display names, no model id.
 * `reasoning=max, context=1m, fast=true` → "Max 1M Fast".
 */
export declare function formatParamSummary(parameters?: any[], definitions?: any[]): string;
export declare function variantEffortLabel(modelName: any, variant: any, definitions?: any[], displayName?: string): any;
export declare function variantEffortId(modelName: any, variant: any, aliases?: any[]): string;
/**
 * Collapse AvailableModels into one catalog row per canonical model.
 * Max-mode-only duplicates of the same suffix are dropped when a non-max
 * sibling exists — DSH has one effort axis, not a separate Max toggle.
 */
export declare function catalogFromAvailableModels(models?: any[]): any[];
/** DSH modalities from the catalog flag. Absent or false is text-only. */
export declare function inputModalitiesFromCatalog(entry: any): string[];
export declare function reasoningFromCatalogEntry(entry: any): {
    defaultEffort?: any;
    efforts: any;
};
export declare function resolveCursorModelSelection(catalog: any, modelId: any, reasoningEffort?: any): {
    modelId: any;
    parameters: any;
    maxMode: boolean;
    fromCatalog: boolean;
    contextWindow: any;
};
