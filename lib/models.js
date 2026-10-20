import { Reader, Writer } from "./proto.js";
const DEFAULT_EFFORT_ID = "default";
const FALLBACK_CONTEXT_WINDOW = 200000;
const OFF_VALUES = new Set([
    "",
    "false",
    "none",
    "off",
    "0"
]);
function encodeAvailableModelsRequest() {
    return new Writer().varint(5, 1).varint(7, 1).finish();
}
function encodeRequestedModel({ modelId, maxMode = false, parameters = [] }) {
    const writer = new Writer();
    if (modelId) writer.string(1, modelId);
    if (maxMode) writer.varint(2, 1);
    for (const parameter of parameters)if (parameter?.id) writer.message(3, new Writer().string(1, parameter.id).string(2, parameter.value ?? "").finish());
    return writer.finish();
}
function decodeAvailableModels(bytes) {
    const reader = new Reader(bytes);
    const models = [];
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (2 === field && 2 === wireType) {
            const model = decodeAvailableModel(reader.bytes());
            if (model?.name) models.push(model);
        } else reader.skip(wireType);
    }
    return models;
}
function decodeAvailableModel(bytes) {
    const reader = new Reader(bytes);
    const model = {
        name: "",
        clientDisplayName: "",
        isHidden: false,
        onlySupportsCmdK: false,
        supportsImages: false,
        legacySlugs: [],
        idAliases: [],
        parameterDefinitions: [],
        variants: []
    };
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (2 === wireType) if (1 === field) model.name = reader.string();
        else if (17 === field) model.clientDisplayName = reader.string();
        else if (18 === field) model.serverModelName = reader.string();
        else if (29 === field) model.parameterDefinitions.push(decodeParameterDefinition(reader.bytes()));
        else if (30 === field) model.variants.push(decodeVariant(reader.bytes()));
        else if (36 === field) model.legacySlugs.push(reader.string());
        else if (37 === field) model.idAliases.push(reader.string());
        else reader.bytes();
        else if (0 === wireType) {
            const raw = reader.varint();
            if (10 === field) model.supportsImages = 0 !== raw;
            else if (15 === field) model.contextTokenLimit = raw;
            else if (16 === field) model.contextTokenLimitForMaxMode = raw;
            else if (27 === field) model.onlySupportsCmdK = 0 !== raw;
            else if (35 === field) model.isHidden = 0 !== raw;
        } else reader.skip(wireType);
    }
    return model;
}
function decodeVariant(bytes) {
    const reader = new Reader(bytes);
    const variant = {
        parameters: [],
        displayName: "",
        displayNameOutsidePicker: "",
        isMaxMode: false,
        isDefaultNonMax: false,
        isDefaultMax: false,
        variantStringRepresentation: "",
        legacySlug: ""
    };
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (2 === wireType) if (1 === field) variant.parameters.push(decodeParameter(reader.bytes()));
        else if (2 === field) variant.displayName = reader.string();
        else if (8 === field) variant.displayNameOutsidePicker = reader.string();
        else if (9 === field) variant.variantStringRepresentation = reader.string();
        else if (11 === field) variant.legacySlug = reader.string();
        else reader.bytes();
        else if (0 === wireType) {
            const value = 0 !== reader.varint();
            if (3 === field) variant.isMaxMode = value;
            else if (4 === field) variant.isDefaultMax = value;
            else if (5 === field) variant.isDefaultNonMax = value;
        } else reader.skip(wireType);
    }
    return variant;
}
function decodeParameter(bytes) {
    const reader = new Reader(bytes);
    const parameter = {
        id: "",
        value: ""
    };
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 2 === wireType) parameter.id = reader.string();
        else if (2 === field && 2 === wireType) parameter.value = reader.string();
        else reader.skip(wireType);
    }
    return parameter;
}
function decodeParameterDefinition(bytes) {
    const reader = new Reader(bytes);
    const definition = {
        id: "",
        name: "",
        kind: "",
        values: []
    };
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 2 === wireType) definition.id = reader.string();
        else if (2 === field && 2 === wireType) definition.name = reader.string();
        else if (4 === field && 2 === wireType) Object.assign(definition, decodeParameterType(reader.bytes()));
        else reader.skip(wireType);
    }
    return definition;
}
function decodeParameterType(bytes) {
    const reader = new Reader(bytes);
    const type = {
        kind: "",
        values: []
    };
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 2 === wireType) {
            type.kind = "boolean";
            type.values = decodeNamedValues(reader.bytes(), 1);
        } else if (2 === field && 2 === wireType) {
            type.kind = "enum";
            type.values = decodeNamedValues(reader.bytes(), 1);
        } else reader.skip(wireType);
    }
    return type;
}
function decodeNamedValues(bytes, valuesField) {
    const reader = new Reader(bytes);
    const values = [];
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (field === valuesField && 2 === wireType) {
            const inner = new Reader(reader.bytes());
            const entry = {
                value: "",
                displayName: ""
            };
            while(!inner.done){
                const tag = inner.tag();
                if (1 === tag.field && 2 === tag.wireType) entry.value = inner.string();
                else if (2 === tag.field && 2 === tag.wireType) entry.displayName = inner.string();
                else inner.skip(tag.wireType);
            }
            if (entry.value) values.push(entry);
        } else reader.skip(wireType);
    }
    return values;
}
function finiteTokenLimit(value) {
    return Number.isFinite(value) && value > 0 ? value : void 0;
}
function aliasesOf(model) {
    return [
        model.serverModelName,
        ...model.legacySlugs ?? [],
        ...model.idAliases ?? []
    ].filter((value)=>"string" == typeof value && value.length > 0 && value !== model.name);
}
function stripModelPrefix(raw, prefixes) {
    if ("string" != typeof raw) return "";
    const value = raw.trim();
    if (!value) return "";
    for (const prefix of prefixes){
        if (value === prefix) return "";
        if (value.startsWith(`${prefix}-`)) return value.slice(prefix.length + 1);
    }
    return value;
}
function isOffValue(value) {
    return OFF_VALUES.has(String(value ?? "").trim().toLowerCase());
}
function synthesizeEffortId(parameters = []) {
    const map = Object.fromEntries(parameters.filter((parameter)=>parameter?.id).map((parameter)=>[
            parameter.id,
            parameter.value ?? ""
        ]));
    const parts = [];
    const thinking = map.thinking;
    if ("true" === thinking) parts.push("thinking");
    else if (thinking && !isOffValue(thinking)) parts.push(thinking);
    for (const key of [
        "reasoning",
        "effort",
        "reasoning_effort"
    ]){
        const value = map[key];
        if (!(!value || isOffValue(value)) && "true" !== value) {
            if ("reasoning" !== key || !thinking || "true" === thinking) {
                parts.push(value);
                break;
            }
        }
    }
    if ("true" === map.fast) parts.push("fast");
    return parts.join("-");
}
function titleCaseToken(value) {
    const text = String(value ?? "").trim();
    if (!text) return "";
    if (/^\d+m$/i.test(text)) return `${text.slice(0, -1)}M`;
    if (/^\d+k$/i.test(text)) return `${text.slice(0, -1)}K`;
    return text.charAt(0).toUpperCase() + text.slice(1);
}
function formatParamSummary(parameters = [], definitions = []) {
    const selected = new Map(parameters.filter((parameter)=>parameter?.id).map((parameter)=>[
            parameter.id,
            parameter.value ?? ""
        ]));
    const parts = [];
    if (definitions.length > 0) for (const definition of definitions){
        const value = selected.get(definition.id);
        if ("boolean" === definition.kind) {
            if ("thinking" === definition.id) continue;
            if ("true" === value) parts.push(definition.name || titleCaseToken(definition.id));
            continue;
        }
        if ("enum" === definition.kind) {
            if ((definition.values?.length ?? 0) <= 1) continue;
            const match = definition.values.find((entry)=>entry.value === value);
            const label = match?.displayName || value;
            if (label && !isOffValue(label)) parts.push(label);
        }
    }
    else {
        const intensity = selected.get("reasoning") ?? selected.get("effort") ?? selected.get("reasoning_effort");
        if (intensity && !isOffValue(intensity) && "true" !== intensity) parts.push(titleCaseToken(intensity));
        const context = selected.get("context");
        if (context && !isOffValue(context)) parts.push(titleCaseToken(context));
        if ("true" === selected.get("fast")) parts.push("Fast");
    }
    if ("false" === selected.get("thinking")) parts.push("No Thinking");
    return parts.join(" ").trim();
}
function containsModelName(label, modelName, displayName) {
    const haystack = String(label ?? "").toLowerCase();
    if (!haystack) return false;
    for (const token of [
        modelName,
        displayName
    ])if ("string" == typeof token && token.length > 0 && haystack.includes(token.toLowerCase())) return true;
    return false;
}
function variantEffortLabel(modelName, variant, definitions = [], displayName = "") {
    const summary = formatParamSummary(variant.parameters, definitions);
    if (summary) return summary;
    const outside = variant.displayNameOutsidePicker?.trim();
    if (outside && !containsModelName(outside, modelName, displayName)) return outside;
    return "Default";
}
function variantEffortId(modelName, variant, aliases = []) {
    const prefixes = [
        modelName,
        ...aliases
    ].filter((value)=>"string" == typeof value && value.length > 0).sort((left, right)=>right.length - left.length);
    const fromRepresentation = stripModelPrefix(variant.variantStringRepresentation, prefixes);
    if (fromRepresentation) return fromRepresentation;
    const fromLegacy = stripModelPrefix(variant.legacySlug, prefixes);
    if (fromLegacy) return fromLegacy;
    return synthesizeEffortId(variant.parameters) || DEFAULT_EFFORT_ID;
}
function catalogFromAvailableModels(models = []) {
    const catalog = [];
    for (const model of models){
        if (!model?.name || true === model.isHidden || true === model.onlySupportsCmdK) continue;
        const aliases = aliasesOf(model);
        const definitions = model.parameterDefinitions ?? [];
        const efforts = [];
        const seen = new Set();
        const ranked = [
            ...model.variants ?? []
        ].sort((left, right)=>Number(left.isMaxMode) - Number(right.isMaxMode));
        for (const variant of ranked){
            const effortId = variantEffortId(model.name, variant, aliases);
            if (seen.has(effortId)) continue;
            seen.add(effortId);
            const name = variantEffortLabel(model.name, variant, definitions, model.clientDisplayName);
            efforts.push({
                id: effortId,
                name,
                parameters: variant.parameters.filter((parameter)=>parameter.id),
                maxMode: true === variant.isMaxMode,
                isDefault: true === variant.isDefaultNonMax || true === variant.isDefaultMax && true === variant.isMaxMode,
                legacySlug: variant.legacySlug || "",
                variantStringRepresentation: variant.variantStringRepresentation || ""
            });
        }
        const defaultEffort = efforts.find((effort)=>effort.isDefault && !effort.maxMode)?.id ?? efforts.find((effort)=>effort.isDefault)?.id ?? efforts[0]?.id;
        catalog.push({
            id: model.name,
            name: model.clientDisplayName || model.name,
            aliases,
            efforts,
            parameterized: true,
            contextWindow: finiteTokenLimit(model.contextTokenLimit) ?? FALLBACK_CONTEXT_WINDOW,
            ...void 0 === finiteTokenLimit(model.contextTokenLimitForMaxMode) ? {} : {
                contextWindowMaxMode: model.contextTokenLimitForMaxMode
            },
            supportsImages: true === model.supportsImages,
            ...void 0 === defaultEffort ? {} : {
                defaultEffort
            }
        });
    }
    return catalog;
}
function inputModalitiesFromCatalog(entry) {
    return entry?.supportsImages === true ? [
        "text",
        "image"
    ] : [
        "text"
    ];
}
function reasoningFromCatalogEntry(entry) {
    if (entry?.efforts?.length) return {
        efforts: entry.efforts.map((effort)=>({
                id: effort.id,
                name: effort.name,
                ...void 0 === effort.description ? {} : {
                    description: effort.description
                }
            })),
        ...void 0 === entry.defaultEffort ? {} : {
            defaultEffort: entry.defaultEffort
        }
    };
}
function effortMatchesToken(effort, token) {
    return effort.id === token || effort.legacySlug === token || effort.variantStringRepresentation === token;
}
function findCatalogEntry(catalog, modelId) {
    if ("string" != typeof modelId || 0 === modelId.length) return;
    const exact = catalog.find((entry)=>entry.id === modelId || entry.aliases.includes(modelId));
    if (exact) return {
        entry: exact,
        impliedEffort: void 0
    };
    for (const entry of catalog){
        const implied = entry.efforts.find((effort)=>effortMatchesToken(effort, modelId));
        if (implied) return {
            entry,
            impliedEffort: implied.id
        };
        if (modelId.startsWith(`${entry.id}-`)) {
            const suffix = modelId.slice(entry.id.length + 1);
            const bySuffix = entry.efforts.find((effort)=>effort.id === suffix);
            if (bySuffix) return {
                entry,
                impliedEffort: bySuffix.id
            };
        }
    }
}
function contextWindowForEffort(entry, effort) {
    const usesMaxContext = effort?.maxMode === true || effort?.parameters.some((parameter)=>"context" === parameter.id && /^1m$/i.test(parameter.value)) === true;
    if (usesMaxContext && void 0 !== finiteTokenLimit(entry?.contextWindowMaxMode)) return entry.contextWindowMaxMode;
    return finiteTokenLimit(entry?.contextWindow) ?? FALLBACK_CONTEXT_WINDOW;
}
function resolveCursorModelSelection(catalog, modelId, reasoningEffort) {
    const match = findCatalogEntry(catalog ?? [], modelId);
    if (void 0 === match) return {
        modelId,
        parameters: [],
        maxMode: false,
        fromCatalog: false,
        contextWindow: FALLBACK_CONTEXT_WINDOW
    };
    const { entry, impliedEffort } = match;
    const wanted = "string" == typeof reasoningEffort && reasoningEffort.length > 0 ? reasoningEffort : impliedEffort ?? entry.defaultEffort;
    const effort = entry.efforts.find((item)=>item.id === wanted) ?? entry.efforts.find((item)=>item.id === entry.defaultEffort) ?? entry.efforts[0];
    return {
        modelId: entry.id,
        parameters: effort?.parameters ?? [],
        maxMode: effort?.maxMode === true,
        fromCatalog: true === entry.parameterized,
        contextWindow: contextWindowForEffort(entry, effort)
    };
}
export { DEFAULT_EFFORT_ID, FALLBACK_CONTEXT_WINDOW, catalogFromAvailableModels, decodeAvailableModels, encodeAvailableModelsRequest, encodeRequestedModel, formatParamSummary, inputModalitiesFromCatalog, reasoningFromCatalogEntry, resolveCursorModelSelection, synthesizeEffortId, variantEffortId, variantEffortLabel };
