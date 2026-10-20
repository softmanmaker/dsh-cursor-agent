import { Reader } from "./proto.js";
import { CURSOR_BASE_URL, CURSOR_CLIENT_VERSION, CURSOR_GET_CURRENT_PERIOD_USAGE_PATH, CURSOR_GET_ME_PATH, CURSOR_GET_PLAN_INFO_PATH, CURSOR_GET_SAND_USAGE_STATUS_PATH, USAGE_TTL_MS } from "./constants.js";
import { nativeFetch } from "./fetch.js";
import { CONNECT_END_STREAM_FLAG, ConnectFrameReader, frameEncode } from "./wire/frames.js";
const record = (value)=>null !== value && "object" == typeof value && !Array.isArray(value);
function usageDaysLeft(billingCycleEnd, now) {
    const end = new Date(billingCycleEnd).getTime();
    if (!Number.isFinite(end)) return;
    return Math.max(0, Math.ceil((end - now) / 86400000));
}
function finiteNumber(value) {
    if ("number" == typeof value && Number.isFinite(value)) return value;
    if ("string" == typeof value && "" !== value.trim()) {
        const n = Number(value);
        if (Number.isFinite(n)) return n;
    }
}
function centsToDollars(cents) {
    const n = finiteNumber(cents);
    return void 0 === n ? void 0 : Math.round(n / 100 * 100) / 100;
}
function percentValue(value) {
    const n = finiteNumber(value);
    return void 0 === n ? void 0 : Math.round(10 * n) / 10;
}
const boolish = (value)=>"boolean" == typeof value ? value : void 0;
function normalizeEpoch(value) {
    if (null == value) return;
    if ("string" == typeof value) {
        const trimmed = value.trim();
        if ("" === trimmed) return;
        if (!/^-?\d+(\.\d+)?$/.test(trimmed)) {
            const iso = new Date(trimmed).getTime();
            return Number.isFinite(iso) ? iso : void 0;
        }
    }
    const n = finiteNumber(value);
    if (void 0 === n) return;
    return n < 1e12 ? 1000 * n : n;
}
function readMessage(bytes) {
    if (void 0 === bytes) return;
    try {
        const reader = new Reader(bytes);
        const fields = {};
        while(!reader.done){
            const { field, wireType } = reader.tag();
            if (0 === wireType) fields[field] = reader.varint();
            else if (1 === wireType) fields[field] = reader.double();
            else if (2 === wireType) fields[field] = reader.bytes();
            else reader.skip(wireType);
        }
        return fields;
    } catch  {
        return;
    }
}
function decodeTimestamp(bytes) {
    const d = readMessage(bytes);
    if (void 0 === d) return;
    const seconds = "number" == typeof d[1] ? d[1] : void 0;
    return void 0 === seconds ? void 0 : 1000 * seconds;
}
function textOrUndefined(bytes) {
    if (void 0 === bytes) return;
    try {
        return new TextDecoder().decode(bytes);
    } catch  {
        return;
    }
}
const numberish = (value)=>"number" == typeof value ? value : void 0;
function decodeCurrentPeriodUsage(bytes) {
    const d = readMessage(bytes);
    if (void 0 === d) return;
    const planRaw = void 0 === d[3] ? void 0 : readMessage(d[3]);
    const spendRaw = void 0 === d[4] ? void 0 : readMessage(d[4]);
    const plan = void 0 === planRaw ? void 0 : {
        totalSpend: numberish(planRaw[1]),
        includedSpend: numberish(planRaw[2]),
        bonusSpend: numberish(planRaw[3]),
        remaining: numberish(planRaw[4]),
        limit: numberish(planRaw[5]),
        remainingBonus: void 0 === planRaw[6] ? void 0 : 0 !== numberish(planRaw[6]),
        bonusTooltip: textOrUndefined(planRaw[7]),
        autoSpend: numberish(planRaw[8]),
        apiSpend: numberish(planRaw[9]),
        autoLimit: numberish(planRaw[10]),
        apiLimit: numberish(planRaw[11]),
        autoPercentUsed: numberish(planRaw[12]),
        apiPercentUsed: numberish(planRaw[13]),
        totalPercentUsed: numberish(planRaw[14])
    };
    const spendLimit = void 0 === spendRaw ? void 0 : {
        totalSpend: numberish(spendRaw[1]),
        pooledLimit: numberish(spendRaw[2]),
        pooledUsed: numberish(spendRaw[3]),
        pooledRemaining: numberish(spendRaw[4]),
        individualLimit: numberish(spendRaw[5]),
        individualUsed: numberish(spendRaw[6]),
        individualRemaining: numberish(spendRaw[7]),
        limitType: textOrUndefined(spendRaw[8]),
        overallLimit: numberish(spendRaw[9]),
        overallUsed: numberish(spendRaw[10]),
        overallRemaining: numberish(spendRaw[11])
    };
    return {
        billingCycleStart: void 0 === d[1] ? void 0 : normalizeEpoch(numberish(d[1])),
        billingCycleEnd: void 0 === d[2] ? void 0 : normalizeEpoch(numberish(d[2])),
        enabled: void 0 === d[6] ? void 0 : 0 !== numberish(d[6]),
        displayMessage: textOrUndefined(d[7]),
        planUsage: plan,
        spendLimitUsage: spendLimit
    };
}
function decodeSandUsageStatus(bytes) {
    const d = readMessage(bytes);
    if (void 0 === d) return;
    const count = d[5];
    return {
        usagePercent: numberish(d[3]),
        currentPeriodStart: void 0 === d[1] ? void 0 : decodeTimestamp(d[1]),
        nextResetTimestampUtc: void 0 === d[2] ? void 0 : decodeTimestamp(d[2]),
        includedLimitZero: void 0 === d[4] ? void 0 : 0 !== numberish(d[4]),
        availableBankedResetCount: void 0 === count ? void 0 : "number" == typeof count ? String(count) : textOrUndefined(count),
        usesPooledEnterpriseAllowance: void 0 === d[6] ? void 0 : 0 !== numberish(d[6]),
        hasAvailableUsage: void 0 === d[7] ? void 0 : 0 !== numberish(d[7]),
        hasNonZeroIncludedLimit: void 0 === d[8] ? void 0 : 0 !== numberish(d[8])
    };
}
function decodeGetMe(bytes) {
    const d = readMessage(bytes);
    if (void 0 === d) return;
    return {
        email: textOrUndefined(d[3])
    };
}
function decodeGetPlanInfo(bytes) {
    const d = readMessage(bytes);
    if (void 0 === d) return;
    const planInfo = void 0 === d[1] ? void 0 : readMessage(d[1]);
    return {
        planInfo: void 0 === planInfo ? void 0 : {
            planName: textOrUndefined(planInfo[1])
        }
    };
}
function deriveTotalLimitCents(plan, limitCents) {
    const totalSpend = finiteNumber(plan.totalSpend);
    const totalPercent = finiteNumber(plan.totalPercentUsed);
    if (void 0 === totalSpend || totalSpend <= 0 || void 0 === totalPercent || totalPercent <= 0) return;
    const derived = Math.round(100 * totalSpend / totalPercent);
    return void 0 === limitCents ? derived : Math.max(limitCents, derived);
}
function projectCurrentPeriodUsage(input) {
    if (!record(input)) return;
    const plan = record(input.planUsage) ? input.planUsage : void 0;
    const spendLimit = record(input.spendLimitUsage) ? input.spendLimitUsage : void 0;
    const limitCents = void 0 === plan ? void 0 : finiteNumber(plan.limit);
    const includedCents = void 0 === plan ? void 0 : finiteNumber(plan.includedSpend);
    const totalSpendCents = void 0 === plan ? void 0 : finiteNumber(plan.totalSpend);
    const totalLimitCents = void 0 === plan ? void 0 : deriveTotalLimitCents(plan, limitCents);
    const bonusLimitCents = void 0 === totalLimitCents || void 0 === limitCents ? void 0 : Math.max(0, totalLimitCents - limitCents);
    const remainingCents = void 0 === plan ? void 0 : void 0 !== totalLimitCents && void 0 !== totalSpendCents ? Math.max(0, totalLimitCents - totalSpendCents) : finiteNumber(plan.remaining) ?? (void 0 !== limitCents && void 0 !== includedCents ? limitCents - includedCents : void 0);
    return {
        billingCycleStart: normalizeEpoch(input.billingCycleStart),
        billingCycleEnd: normalizeEpoch(input.billingCycleEnd),
        enabled: boolish(input.enabled),
        displayMessage: "string" == typeof input.displayMessage ? input.displayMessage : void 0,
        plan: void 0 === plan ? void 0 : {
            totalSpend: centsToDollars(plan.totalSpend),
            includedSpend: centsToDollars(plan.includedSpend),
            bonusSpend: centsToDollars(plan.bonusSpend),
            remaining: centsToDollars(remainingCents),
            totalLimit: centsToDollars(totalLimitCents ?? limitCents),
            limit: centsToDollars(plan.limit),
            bonusLimit: centsToDollars(bonusLimitCents),
            remainingBonus: boolish(plan.remainingBonus),
            bonusTooltip: "string" == typeof plan.bonusTooltip ? plan.bonusTooltip : void 0,
            autoSpend: centsToDollars(plan.autoSpend),
            apiSpend: centsToDollars(plan.apiSpend),
            autoLimit: centsToDollars(plan.autoLimit),
            apiLimit: centsToDollars(plan.apiLimit),
            autoPercentUsed: percentValue(plan.autoPercentUsed),
            apiPercentUsed: percentValue(plan.apiPercentUsed),
            totalPercentUsed: percentValue(plan.totalPercentUsed)
        },
        spendLimit: void 0 === spendLimit ? void 0 : {
            individualUsed: centsToDollars(spendLimit.individualUsed),
            individualLimit: centsToDollars(spendLimit.individualLimit),
            individualRemaining: centsToDollars(spendLimit.individualRemaining),
            pooledUsed: centsToDollars(spendLimit.pooledUsed),
            pooledLimit: centsToDollars(spendLimit.pooledLimit),
            pooledRemaining: centsToDollars(spendLimit.pooledRemaining),
            totalSpend: centsToDollars(spendLimit.totalSpend),
            limitType: "string" == typeof spendLimit.limitType ? spendLimit.limitType : void 0,
            overallUsed: centsToDollars(spendLimit.overallUsed),
            overallLimit: centsToDollars(spendLimit.overallLimit),
            overallRemaining: centsToDollars(spendLimit.overallRemaining)
        }
    };
}
function projectSandUsageStatus(input) {
    if (!record(input)) return;
    const count = input.availableBankedResetCount;
    return {
        usagePercent: percentValue(input.usagePercent),
        currentPeriodStart: normalizeEpoch(input.currentPeriodStart),
        nextReset: normalizeEpoch(input.nextResetTimestampUtc),
        includedLimitZero: boolish(input.includedLimitZero),
        hasAvailableUsage: boolish(input.hasAvailableUsage),
        hasNonZeroIncludedLimit: boolish(input.hasNonZeroIncludedLimit),
        availableBankedResetCount: void 0 === count ? void 0 : "string" == typeof count ? count : String(count),
        usesPooledEnterpriseAllowance: boolish(input.usesPooledEnterpriseAllowance)
    };
}
function projectGetMe(input) {
    if (!record(input)) return;
    return {
        email: "string" == typeof input.email && input.email.length > 0 ? input.email : void 0
    };
}
function projectGetPlanInfo(input) {
    if (!record(input) || !record(input.planInfo)) return;
    return {
        planName: "string" == typeof input.planInfo.planName && input.planInfo.planName.length > 0 ? input.planInfo.planName : void 0
    };
}
async function callDashboardRpc(fetchImpl, url, token, options = {}) {
    const headers = {
        "connect-protocol-version": "1",
        authorization: `Bearer ${token}`,
        "x-ghost-mode": "true",
        "x-cursor-client-version": CURSOR_CLIENT_VERSION,
        "x-cursor-client-type": "cli",
        "user-agent": "dsh-cursor-agent/0.2.0",
        ...options.headers
    };
    let response = await fetchImpl(url, {
        method: "POST",
        redirect: "error",
        headers: {
            ...headers,
            "content-type": "application/json",
            accept: "application/json"
        },
        body: "{}",
        signal: options.signal
    });
    let contentType = "function" == typeof response.headers?.get ? String(response.headers.get("content-type") ?? "") : "";
    if (415 === response.status || /proto/i.test(contentType)) {
        response = await fetchImpl(url, {
            method: "POST",
            redirect: "error",
            headers: {
                ...headers,
                "content-type": "application/proto",
                accept: "application/proto"
            },
            body: frameEncode(new Uint8Array(0)),
            signal: options.signal
        });
        contentType = "function" == typeof response.headers?.get ? String(response.headers.get("content-type") ?? "") : "";
    }
    if (!response.ok) throw new Error(`HTTP ${response.status} from ${url}`);
    const bytes = new Uint8Array(await response.arrayBuffer());
    if (/json/i.test(contentType)) {
        let text = new TextDecoder().decode(bytes);
        if (bytes.length >= 5 && !text.trimStart().startsWith("{")) {
            const view = new DataView(bytes.buffer, bytes.byteOffset, 5);
            const length = view.getUint32(1, false);
            if (length <= bytes.length - 5) text = new TextDecoder().decode(bytes.subarray(5, 5 + length));
        }
        if ("" === text.trim()) return;
        try {
            return {
                json: JSON.parse(text)
            };
        } catch (error) {
            throw new Error(`unreadable JSON from ${url}`, {
                cause: error
            });
        }
    }
    try {
        const frames = new ConnectFrameReader();
        frames.push(bytes);
        frames.finish();
        const frame = await frames.next();
        if (void 0 === frame || (frame.flags & CONNECT_END_STREAM_FLAG) !== 0) return;
        return {
            bytes: frame.payload
        };
    } catch  {
        return {
            bytes
        };
    }
}
class CursorUsageReader {
    auth;
    fetch;
    now;
    ttlMs;
    baseUrl;
    resolveBaseUrl;
    logger;
    constructor(auth, options = {}){
        this.auth = auth;
        this.fetch = options.fetch ?? nativeFetch;
        this.now = options.now ?? Date.now;
        this.ttlMs = options.ttlMs ?? USAGE_TTL_MS;
        this.baseUrl = options.baseUrl ?? CURSOR_BASE_URL;
        this.resolveBaseUrl = options.resolveBaseUrl ?? (()=>this.baseUrl);
        this.logger = options.logger;
        this.#cache = {
            at: 0,
            value: void 0
        };
    }
    forget() {
        this.#cache = {
            at: 0,
            value: void 0
        };
    }
    #cache;
    #log(level, message, ...args) {
        try {
            this.logger?.[level]?.(`cursor-agent: ${message}`, ...args);
        } catch  {}
    }
    #mergeSignals(signal, timeoutMs) {
        const timeout = Number.isFinite(timeoutMs) && timeoutMs > 0 && "function" == typeof AbortSignal.timeout ? AbortSignal.timeout(timeoutMs) : void 0;
        if (void 0 === signal) return timeout;
        if (void 0 === timeout) return signal;
        return "function" == typeof AbortSignal.any ? AbortSignal.any([
            signal,
            timeout
        ]) : signal;
    }
    #rpc(path, token, { signal, timeoutMs } = {}) {
        return callDashboardRpc(this.fetch, `${this.resolveBaseUrl()}${path}`, token, {
            signal: this.#mergeSignals(signal, timeoutMs)
        });
    }
    async #tryRpc(path, token, options = {}) {
        try {
            return {
                ok: true,
                value: await this.#rpc(path, token, options)
            };
        } catch (error) {
            this.#log("warn", "usage RPC failed: %s", error instanceof Error ? error.message : error);
            return {
                ok: false,
                error
            };
        }
    }
    async read({ force = false, signal } = {}) {
        const now = this.now();
        if (!force && void 0 !== this.#cache.value && now - this.#cache.at < this.ttlMs) return structuredClone(this.#cache.value);
        const credential = await this.auth.credential({
            signal
        });
        const token = credential.access;
        const [usageResult, planResult, meResult, grokResult] = await Promise.all([
            this.#tryRpc(CURSOR_GET_CURRENT_PERIOD_USAGE_PATH, token, {
                signal,
                timeoutMs: 8000
            }),
            this.#tryRpc(CURSOR_GET_PLAN_INFO_PATH, token, {
                signal,
                timeoutMs: 8000
            }),
            this.#tryRpc(CURSOR_GET_ME_PATH, token, {
                signal,
                timeoutMs: 8000
            }),
            this.#tryRpc(CURSOR_GET_SAND_USAGE_STATUS_PATH, token, {
                signal,
                timeoutMs: 8000
            })
        ]);
        if (!usageResult.ok) {
            const failed = usageResult.error;
            throw failed instanceof Error ? failed : new Error("Could not read Cursor usage");
        }
        const rawOf = (result, decode)=>result?.value?.json !== void 0 ? result.value.json : decode(result?.value?.bytes);
        const usage = projectCurrentPeriodUsage(rawOf(usageResult, decodeCurrentPeriodUsage));
        if (void 0 === usage) throw new Error("Cursor usage response was unreadable");
        const me = projectGetMe(meResult.ok ? rawOf(meResult, decodeGetMe) : void 0);
        const planName = projectGetPlanInfo(planResult.ok ? rawOf(planResult, decodeGetPlanInfo) : void 0)?.planName;
        const grokRaw = projectSandUsageStatus(grokResult.ok ? rawOf(grokResult, decodeSandUsageStatus) : void 0);
        const grok = grokRaw?.hasAvailableUsage === true ? grokRaw : void 0;
        const value = {
            fetchedAt: now,
            email: me?.email,
            planName,
            enabled: usage.enabled,
            displayMessage: usage.displayMessage,
            billingCycle: void 0 === usage.billingCycleEnd ? void 0 : {
                start: usage.billingCycleStart,
                end: usage.billingCycleEnd,
                daysLeft: usageDaysLeft(usage.billingCycleEnd, now)
            },
            plan: usage.plan,
            spendLimit: usage.spendLimit,
            grok
        };
        this.#cache = {
            at: now,
            value
        };
        this.#log("info", "usage read: %s", JSON.stringify({
            email: value.email,
            planName: value.planName,
            apiPercentUsed: value.plan?.apiPercentUsed,
            grokAvailable: value.grok?.hasAvailableUsage
        }));
        return structuredClone(value);
    }
    clear() {
        this.#cache = {
            at: 0,
            value: void 0
        };
    }
}
export { CursorUsageReader, callDashboardRpc, decodeCurrentPeriodUsage, decodeGetMe, decodeGetPlanInfo, decodeSandUsageStatus, projectCurrentPeriodUsage, projectGetMe, projectGetPlanInfo, projectSandUsageStatus };
