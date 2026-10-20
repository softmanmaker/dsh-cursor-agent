export declare function decodeCurrentPeriodUsage(bytes: any): any;
/** Decode the `GetSandUsageStatus` (Grok allowance) response. */
export declare function decodeSandUsageStatus(bytes: any): any;
/** Decode the `GetMe` response down to the account email (field 3). */
export declare function decodeGetMe(bytes: any): any;
/** Decode the `GetPlanInfo` response down to `planInfo.planName`. */
export declare function decodeGetPlanInfo(bytes: any): any;
/** Project a (JSON or decoded-proto) `GetCurrentPeriodUsage` value. */
export declare function projectCurrentPeriodUsage(input: any): {
    billingCycleStart: number;
    billingCycleEnd: number;
    enabled: boolean;
    displayMessage: any;
    plan: {
        totalSpend: number;
        includedSpend: number;
        bonusSpend: number;
        remaining: number;
        limit: number;
        remainingBonus: boolean;
        bonusTooltip: any;
        autoSpend: number;
        apiSpend: number;
        autoLimit: number;
        apiLimit: number;
        autoPercentUsed: number;
        apiPercentUsed: number;
        totalPercentUsed: number;
    };
    spendLimit: {
        individualUsed: number;
        individualLimit: number;
        individualRemaining: number;
        pooledUsed: number;
        pooledLimit: number;
        pooledRemaining: number;
        totalSpend: number;
        limitType: any;
        overallUsed: number;
        overallLimit: number;
        overallRemaining: number;
    };
};
/** Project a (JSON or decoded-proto) `GetSandUsageStatus` value. */
export declare function projectSandUsageStatus(input: any): {
    usagePercent: number;
    currentPeriodStart: number;
    nextReset: number;
    includedLimitZero: boolean;
    hasAvailableUsage: boolean;
    hasNonZeroIncludedLimit: boolean;
    availableBankedResetCount: string;
    usesPooledEnterpriseAllowance: boolean;
};
/** Project a (JSON or decoded-proto) `GetMe` value. */
export declare function projectGetMe(input: any): {
    email: any;
};
/** Project a (JSON or decoded-proto) `GetPlanInfo` value. */
export declare function projectGetPlanInfo(input: any): {
    planName: any;
};
/**
 * Call one unary `aiserver.v1.DashboardService` RPC over Connect. Tries the
 * JSON encoding first and falls back to protobuf framing on 415/proto
 * responses, mirroring what the reference CLI client does.
 * @returns {Promise<{json?: unknown, bytes?: Uint8Array} | undefined>}
 */
export declare function callDashboardRpc(fetchImpl: any, url: any, token: any, options?: any): Promise<{
    json: any;
    bytes?: undefined;
} | {
    bytes: any;
    json?: undefined;
}>;
/**
 * Read usage from Cursor's `aiserver.v1.DashboardService` RPCs using the
 * credential's access token (works for both OAuth and API key credentials).
 * The browser receives only the parsed projection; tokens stay host-local.
 * Successful reads are cached for a short TTL.
 */
export declare class CursorUsageReader {
    #private;
    auth: any;
    fetch: any;
    now: any;
    ttlMs: any;
    baseUrl: any;
    resolveBaseUrl: any;
    logger: any;
    constructor(auth: any, options?: any);
    forget(): void;
    read({ force, signal }?: any): Promise<any>;
    clear(): void;
}
