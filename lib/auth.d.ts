import { nativeFetch } from "./fetch.js";
/**
 * Adapt DSH's managed string credential service to Cursor's typed OAuth
 * credential. Write operations are serialized so an older refresh response
 * cannot overwrite a newer rotated token.
 */
export declare class CursorCredentialStore {
    #private;
    credentials: any;
    ref: any;
    constructor(credentials: any, ref: any);
    read(): Promise<any>;
    write(credential: any): Promise<any>;
    modify(update: any): Promise<any>;
    clear(): Promise<void>;
}
/**
 * Extract a JWT expiry (ms epoch) with a safety margin.
 * Falls back to a default lifetime when the token cannot be parsed.
 */
export declare function classifyCursorSecret(value: any): "api-key" | "token";
/** JWT `exp` in ms, or undefined when the value is not a JWT with exp. */
export declare function readJwtExpiry(token: any): number;
export declare function getTokenExpiry(token: any, now?: () => number): number;
/** Mask an API key for display in the settings page (first 7 + last 2). */
export declare function maskApiKey(value: any): string;
/** Build the browser login URL for the PKCE flow. */
export declare function buildLoginUrl({ challenge, uuid }: any): string;
/** Validate the only external origin this plugin may launch. */
export declare function assertCursorAuthUrl(value: any): any;
/** Return a shell-free native opener command for the current desktop. */
export declare function commandForCursorAuthUrl(value: any, platform?: NodeJS.Platform): {
    file: string;
    args: any[];
    shell: boolean;
};
export declare function openCursorAuthUrl(value: any, options?: any): Promise<void>;
/**
 * Owns the Cursor credential lifecycle: PKCE browser login, API key exchange
 * login, refresh, and status. Tokens live in the DSH credential store; the
 * browser client only ever sees `{ authenticated, provider, type, method,
 * apiKeyLabel, expiresAt }` — the raw API key and tokens never leave the host.
 */
export declare class CursorAuthService {
    #private;
    store: any;
    fetch: typeof nativeFetch | ((...args: any[]) => any);
    now: () => number;
    logger: any;
    resolveBaseUrl: () => string;
    constructor(store: any, options?: any);
    status({ signal }?: any): Promise<{
        authenticated: boolean;
        provider: string;
    } | {
        expiresAt?: undefined;
        tokenLabel?: string;
        apiKeyLabel?: string;
        authenticated: boolean;
        provider: string;
        type: any;
        method: any;
    } | {
        expiresAt: any;
        tokenLabel?: string;
        apiKeyLabel?: string;
        authenticated: boolean;
        provider: string;
        type: any;
        method: any;
    }>;
    /**
     * Resolve a usable access token, refreshing first when the stored token is
     * missing, expired, or about to expire.
     * @returns {Promise<string>} the bearer token.
     */
    accessToken({ signal }?: any): Promise<any>;
    /**
     * Resolve the stored credential, refreshing first when its token is
     * missing, expired, or about to expire.
     * @returns {Promise<{access: string, refresh: string, expires: number}>}
     */
    credential({ signal }?: any): Promise<any>;
    refresh(current: any, { signal }?: any): Promise<any>;
    /** Paste box: `crsr_*` exchanges as an API key; anything else is stored as an access token. */
    loginWithSecret(secret: any, { signal }?: any): Promise<{
        authenticated: boolean;
        provider: string;
    } | {
        expiresAt?: undefined;
        tokenLabel?: string;
        apiKeyLabel?: string;
        authenticated: boolean;
        provider: string;
        type: any;
        method: any;
    } | {
        expiresAt: any;
        tokenLabel?: string;
        apiKeyLabel?: string;
        authenticated: boolean;
        provider: string;
        type: any;
        method: any;
    }>;
    /** Store a pasted access token as-is. JWT `exp` becomes the displayed expiry. */
    loginWithAccessToken(token: any, { signal }?: any): Promise<{
        authenticated: boolean;
        provider: string;
    } | {
        expiresAt?: undefined;
        tokenLabel?: string;
        apiKeyLabel?: string;
        authenticated: boolean;
        provider: string;
        type: any;
        method: any;
    } | {
        expiresAt: any;
        tokenLabel?: string;
        apiKeyLabel?: string;
        authenticated: boolean;
        provider: string;
        type: any;
        method: any;
    }>;
    /** Sign in with a Cursor API key: one exchange, no browser flow. */
    loginWithApiKey(apiKey: any, { signal }?: any): Promise<{
        authenticated: boolean;
        provider: string;
    } | {
        expiresAt?: undefined;
        tokenLabel?: string;
        apiKeyLabel?: string;
        authenticated: boolean;
        provider: string;
        type: any;
        method: any;
    } | {
        expiresAt: any;
        tokenLabel?: string;
        apiKeyLabel?: string;
        authenticated: boolean;
        provider: string;
        type: any;
        method: any;
    }>;
    /** Start a login and resolve once the browser flow completes. */
    login({ interaction, signal }: {
        interaction: any;
        signal: any;
    }): Promise<void>;
    logout({ signal }?: any): Promise<{
        authenticated: boolean;
        provider: string;
    } | {
        expiresAt?: undefined;
        tokenLabel?: string;
        apiKeyLabel?: string;
        authenticated: boolean;
        provider: string;
        type: any;
        method: any;
    } | {
        expiresAt: any;
        tokenLabel?: string;
        apiKeyLabel?: string;
        authenticated: boolean;
        provider: string;
        type: any;
        method: any;
    }>;
}
/** Own one host-side login without exposing tokens to the browser client. */
export declare class CursorLoginCoordinator {
    #private;
    auth: any;
    createId: any;
    logger: any;
    constructor(auth: any, options?: any);
    accountStatus(options: any): Promise<any>;
    start(): Promise<unknown>;
    read(id: any): any;
    cancel(id: any): Promise<any>;
    logout(options: any): Promise<any>;
}
/** Map the loopback-only DSH Connection channel onto the coordinator. */
export declare function createCursorRpcHandler(coordinator: any, options?: any): (endpoint: any, payload: any, signal: any) => Promise<{
    ok: boolean;
    value: any;
} | {
    ok: boolean;
    error: {
        code: any;
        message: any;
        details: {
            issues: any[];
        };
    };
}>;
/**
 * HTTP adapter for the `/cursor-agent/*` Connection channel. Beta
 * `rpc.handle` still binds `owner.webServer` through the caller fiber; if
 * that prefix never lands, frontend-static answers POST with 405. Mounting
 * the route on the injected `webServer` keeps the settings page on the
 * same envelope the browser already posts.
 */
export declare function createCursorRpcHttpHandler(handler: any, { requestRejection }?: any): (req: any, res: any) => Promise<void>;
