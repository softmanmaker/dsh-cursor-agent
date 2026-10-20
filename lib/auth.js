import { LlmError } from "@deepseek-ai/dsh-llm";
import { randomUUID } from "node:crypto";
import { spawn } from "node:child_process";
import { CHANNEL, CURSOR_AUTH_ORIGIN, CURSOR_BASE_URL, CURSOR_LOGIN_URL, CURSOR_POLL_PATH, CURSOR_REFRESH_PATH, DEFAULT_TOKEN_LIFETIME_MS, PROVIDER, REFRESH_AHEAD_MS } from "./constants.js";
import { nativeFetch } from "./fetch.js";
const clone = (value)=>void 0 === value ? void 0 : structuredClone(value);
function assertCursorCredential(value) {
    if (void 0 === value) return;
    if (null === value || "object" != typeof value || "oauth" !== value.type && "api-key" !== value.type && "token" !== value.type || "string" != typeof value.access || 0 === value.access.length || "string" != typeof value.refresh || "number" != typeof value.expires || !Number.isFinite(value.expires)) throw new Error("Cursor credential store received a malformed Cursor credential");
    if ("api-key" === value.type && ("string" != typeof value.apiKey || 0 === value.apiKey.length)) throw new Error("Cursor credential store received a malformed Cursor credential");
    return clone(value);
}
function parseCursorCredential(raw) {
    try {
        return assertCursorCredential(JSON.parse(raw));
    } catch (error) {
        if (error?.message === "Cursor credential store received a malformed Cursor credential") throw error;
        throw new Error("Cursor credential store contains malformed Cursor JSON", {
            cause: error
        });
    }
}
class CursorCredentialStore {
    #chain = Promise.resolve();
    credentials;
    ref;
    constructor(credentials, ref){
        if (null == credentials) throw new Error("Cursor auth requires the DSH credentials service");
        this.credentials = credentials;
        this.ref = ref;
    }
    #enqueue(operation) {
        const current = this.#chain.catch(()=>void 0).then(operation);
        const tail = current.catch(()=>void 0);
        this.#chain = tail;
        return current;
    }
    async read() {
        const hit = await this.credentials.resolve(this.ref);
        if (hit?.value === void 0 || "" === hit.value) return;
        return parseCursorCredential(hit.value);
    }
    async write(credential) {
        const validated = assertCursorCredential(credential);
        if (void 0 === validated) throw new Error("Cursor credential store cannot write an empty credential");
        await this.credentials.set(this.ref, JSON.stringify(validated));
        return clone(validated);
    }
    modify(update) {
        return this.#enqueue(async ()=>{
            const current = await this.read();
            const next = await update(clone(current));
            if (void 0 === next) return current;
            return this.write(next);
        });
    }
    async clear() {
        await this.#enqueue(async ()=>{
            await this.credentials.unset(this.ref);
        });
    }
}
function classifyCursorSecret(value) {
    const raw = "string" == typeof value ? value.trim() : "";
    if (0 === raw.length) return;
    return /^crsr_/i.test(raw) ? "api-key" : "token";
}
function readJwtExpiry(token) {
    if ("string" != typeof token) return;
    const parts = token.split(".");
    if (3 !== parts.length || !parts[0] || !parts[1] || !parts[2]) return;
    try {
        const decoded = JSON.parse(Buffer.from(parts[1].replace(/-/g, "+").replace(/_/g, "/"), "base64").toString("utf8"));
        if (decoded && "object" == typeof decoded && "number" == typeof decoded.exp) return 1000 * decoded.exp;
    } catch  {}
}
function getTokenExpiry(token, now = Date.now) {
    return readJwtExpiry(token) ?? now() + DEFAULT_TOKEN_LIFETIME_MS;
}
function statusExpiresAt(current) {
    if ("token" === current.type) {
        const exp = readJwtExpiry(current.access);
        return void 0 === exp ? {} : {
            expiresAt: exp
        };
    }
    return {
        expiresAt: current.expires
    };
}
function maskApiKey(value) {
    if ("string" != typeof value || 0 === value.length) return;
    if (value.length <= 10) return `${value.slice(0, 2)}…${value.slice(-1)}`;
    return `${value.slice(0, 7)}…${value.slice(-2)}`;
}
async function generatePkce() {
    const verifierBytes = new Uint8Array(96);
    globalThis.crypto.getRandomValues(verifierBytes);
    const verifier = Buffer.from(verifierBytes).toString("base64url");
    const digest = await globalThis.crypto.subtle.digest("SHA-256", new TextEncoder().encode(verifier));
    const challenge = Buffer.from(digest).toString("base64url");
    return {
        verifier,
        challenge
    };
}
function buildLoginUrl({ challenge, uuid }) {
    const params = new URLSearchParams({
        challenge,
        uuid,
        mode: "login",
        redirectTarget: "cli"
    });
    return `${CURSOR_LOGIN_URL}?${params.toString()}`;
}
function assertCursorAuthUrl(value) {
    let url;
    try {
        url = new URL(value);
    } catch  {
        throw new Error("Cursor auth URL is invalid");
    }
    if ("https:" !== url.protocol) throw new Error("Cursor auth URL must use HTTPS");
    if (url.origin !== CURSOR_AUTH_ORIGIN || "" !== url.username || "" !== url.password) throw new Error("Cursor auth URL must use the cursor.com origin");
    return url.href;
}
function commandForCursorAuthUrl(value, platform = process.platform) {
    const url = assertCursorAuthUrl(value);
    if ("win32" === platform) return {
        file: "rundll32.exe",
        args: [
            "url.dll,FileProtocolHandler",
            url
        ],
        shell: false
    };
    if ("darwin" === platform) return {
        file: "open",
        args: [
            url
        ],
        shell: false
    };
    if ("linux" === platform) return {
        file: "xdg-open",
        args: [
            url
        ],
        shell: false
    };
    throw new Error(`Cursor auth URL opener is unsupported on ${platform}`);
}
function openCursorAuthUrl(value, options = {}) {
    const command = commandForCursorAuthUrl(value, options.platform);
    const spawnProcess = options.spawn ?? spawn;
    return new Promise((resolve, reject)=>{
        const child = spawnProcess(command.file, command.args, {
            detached: true,
            stdio: "ignore",
            windowsHide: true,
            shell: command.shell
        });
        child.once("error", reject);
        child.once("spawn", ()=>{
            child.unref();
            resolve();
        });
    });
}
class CursorAuthService {
    store;
    fetch;
    now;
    logger;
    resolveBaseUrl;
    constructor(store, options = {}){
        this.store = store;
        this.fetch = options.fetch ?? nativeFetch;
        this.now = options.now ?? Date.now;
        this.logger = options.logger;
        this.resolveBaseUrl = options.resolveBaseUrl ?? (()=>options.baseUrl ?? CURSOR_BASE_URL);
    }
    #apiUrl(path) {
        return `${this.resolveBaseUrl()}${path}`;
    }
    #log(level, message, ...args) {
        try {
            this.logger?.[level]?.(`cursor-agent: ${message}`, ...args);
        } catch  {}
    }
    async status({ signal } = {}) {
        signal?.throwIfAborted();
        const current = await this.store.read();
        if (void 0 === current) return {
            authenticated: false,
            provider: PROVIDER
        };
        return {
            authenticated: true,
            provider: PROVIDER,
            type: current.type,
            method: current.type,
            ..."api-key" === current.type ? {
                apiKeyLabel: maskApiKey(current.apiKey)
            } : {},
            ..."token" === current.type ? {
                tokenLabel: maskApiKey(current.access)
            } : {},
            ...statusExpiresAt(current)
        };
    }
    async accessToken({ signal } = {}) {
        const credential = await this.credential({
            signal
        });
        return credential.access;
    }
    async credential({ signal } = {}) {
        signal?.throwIfAborted();
        const current = await this.store.read();
        if (void 0 === current) throw new LlmError("Cursor Agent is not signed in", "MISSING_CREDENTIAL");
        if ("token" === current.type) return current;
        if (current.expires - this.now() > REFRESH_AHEAD_MS) return current;
        const refreshed = await this.refresh(current, {
            signal
        });
        return refreshed;
    }
    async #exchange(bearer, { localCliMode = false, signal } = {}) {
        const response = await this.fetch(`${this.#apiUrl(CURSOR_REFRESH_PATH)}`, {
            method: "POST",
            redirect: "error",
            headers: {
                authorization: `Bearer ${bearer}`,
                "content-type": "application/json",
                accept: "application/json",
                "user-agent": "dsh-cursor-agent/0.1.0",
                ...localCliMode ? {
                    "local-cli-mode": "true"
                } : {}
            },
            body: "{}",
            signal
        });
        if (!response.ok) {
            this.#log("warn", "token exchange failed (HTTP %s)", response.status);
            if (401 === response.status || 403 === response.status) throw new LlmError("Cursor sign-in needs to be renewed", "INVALID_CREDENTIAL");
            throw new LlmError(`Cursor token exchange failed (HTTP ${response.status})`, "AUTH_FAILED");
        }
        let data;
        try {
            data = await response.json();
        } catch (error) {
            throw new LlmError("Cursor returned an unreadable token response", "AUTH_FAILED", {
                cause: error
            });
        }
        if ("string" != typeof data?.accessToken || 0 === data.accessToken.length) throw new LlmError("Cursor sign-in needs to be renewed", "INVALID_CREDENTIAL");
        return {
            accessToken: data.accessToken,
            refreshToken: "string" == typeof data.refreshToken ? data.refreshToken : void 0
        };
    }
    async refresh(current, { signal } = {}) {
        if ("token" === current.type) throw new LlmError("Cursor sign-in needs to be renewed", "INVALID_CREDENTIAL");
        if ("api-key" === current.type) {
            const tokens = await this.#exchange(current.apiKey, {
                localCliMode: true,
                signal
            });
            const next = {
                type: "api-key",
                apiKey: current.apiKey,
                access: tokens.accessToken,
                refresh: tokens.refreshToken ?? "",
                expires: getTokenExpiry(tokens.accessToken, this.now)
            };
            const stored = await this.store.modify((latest)=>{
                if (void 0 === latest || latest.apiKey !== current.apiKey) return latest;
                return next;
            });
            return stored ?? next;
        }
        const tokens = await this.#exchange(current.refresh, {
            signal
        });
        const next = {
            type: "oauth",
            access: tokens.accessToken,
            refresh: "string" == typeof tokens.refreshToken && tokens.refreshToken.length > 0 ? tokens.refreshToken : current.refresh,
            expires: getTokenExpiry(tokens.accessToken, this.now)
        };
        const stored = await this.store.modify((latest)=>{
            if (void 0 === latest || latest.refresh !== current.refresh) return latest;
            return next;
        });
        return stored ?? next;
    }
    async loginWithSecret(secret, { signal } = {}) {
        const kind = classifyCursorSecret(secret);
        if ("api-key" === kind) return this.loginWithApiKey(secret, {
            signal
        });
        if ("token" === kind) return this.loginWithAccessToken(secret, {
            signal
        });
        throw new LlmError("Cursor API key or auth token is required", "INVALID_CREDENTIAL");
    }
    async loginWithAccessToken(token, { signal } = {}) {
        signal?.throwIfAborted();
        if ("string" != typeof token || 0 === token.trim().length) throw new LlmError("Cursor auth token is required", "INVALID_CREDENTIAL");
        const access = token.trim();
        const jwtExp = readJwtExpiry(access);
        await this.store.modify(()=>({
                type: "token",
                access,
                refresh: "",
                expires: jwtExp ?? Number.MAX_SAFE_INTEGER
            }));
        return this.status({
            signal
        });
    }
    async loginWithApiKey(apiKey, { signal } = {}) {
        signal?.throwIfAborted();
        if ("string" != typeof apiKey || 0 === apiKey.trim().length) throw new LlmError("Cursor API key is required", "INVALID_CREDENTIAL");
        const key = apiKey.trim();
        let tokens;
        try {
            tokens = await this.#exchange(key, {
                localCliMode: true,
                signal
            });
        } catch (error) {
            if (error instanceof LlmError && "INVALID_CREDENTIAL" === error.code) throw new LlmError("Cursor API key is invalid", "INVALID_CREDENTIAL", {
                cause: error
            });
            throw error;
        }
        await this.store.modify(()=>({
                type: "api-key",
                apiKey: key,
                access: tokens.accessToken,
                refresh: tokens.refreshToken ?? "",
                expires: getTokenExpiry(tokens.accessToken, this.now)
            }));
        return this.status({
            signal
        });
    }
    async login({ interaction, signal }) {
        signal?.throwIfAborted();
        const { verifier, challenge } = await generatePkce();
        const uuid = randomUUID();
        const loginUrl = buildLoginUrl({
            challenge,
            uuid
        });
        interaction.notify?.({
            type: "auth_url",
            url: assertCursorAuthUrl(loginUrl),
            instructions: "在浏览器中登录 Cursor 并授权后，此页面会自动完成登录。"
        });
        interaction.prompt?.({
            type: "text",
            message: "等待浏览器登录完成…"
        }).catch(()=>{});
        interaction.signal?.throwIfAborted();
        let delay = 1000;
        for(let attempt = 0; attempt < 150; attempt++){
            await sleep(delay);
            signal?.throwIfAborted();
            interaction.signal?.throwIfAborted();
            let response;
            try {
                response = await this.fetch(`${this.#apiUrl(CURSOR_POLL_PATH)}?uuid=${encodeURIComponent(uuid)}&verifier=${encodeURIComponent(verifier)}`, {
                    redirect: "error",
                    headers: {
                        accept: "application/json",
                        "user-agent": "dsh-cursor-agent/0.1.0"
                    },
                    signal
                });
            } catch (error) {
                this.#log("warn", "login poll request failed on attempt %d: %s", attempt, error?.cause?.code ?? error?.message);
                throw new LlmError("Cursor login poll request failed", "AUTH_FAILED", {
                    cause: error
                });
            }
            if (404 === response.status) {
                delay = Math.min(1.2 * delay, 10000);
                continue;
            }
            if (!response.ok) {
                this.#log("warn", "login poll returned HTTP %s on attempt %d", response.status, attempt);
                throw new LlmError(`Cursor login poll failed (HTTP ${response.status})`, "AUTH_FAILED");
            }
            const text = await response.text().catch(()=>"");
            this.#log("info", "login poll succeeded after %d attempts", attempt);
            let data;
            try {
                data = JSON.parse(text);
            } catch (error) {
                this.#log("warn", "login poll returned unreadable JSON: %s", text.slice(0, 200));
                throw new LlmError("Cursor login returned an unreadable response", "AUTH_FAILED", {
                    cause: error
                });
            }
            if ("string" != typeof data?.accessToken || 0 === data.accessToken.length) {
                this.#log("warn", "login poll response had no accessToken");
                throw new LlmError("Cursor login returned no access token", "AUTH_FAILED");
            }
            const credential = {
                type: "oauth",
                access: data.accessToken,
                refresh: "string" == typeof data.refreshToken && data.refreshToken.length > 0 ? data.refreshToken : "",
                expires: getTokenExpiry(data.accessToken, this.now)
            };
            try {
                await this.store.modify(()=>credential);
            } catch (error) {
                this.#log("error", "failed to store Cursor credential: %s", error?.message);
                throw new LlmError("Cursor login could not store the credential", "AUTH_FAILED", {
                    cause: error
                });
            }
            return;
        }
        this.#log("warn", "login timed out after 150 poll attempts");
        throw new LlmError("Cursor login timed out", "AUTH_FAILED");
    }
    async logout({ signal } = {}) {
        signal?.throwIfAborted();
        await this.store.clear();
        return this.status({
            signal
        });
    }
}
function sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
const TERMINAL_PHASES = new Set([
    "authenticated",
    "failed",
    "cancelled"
]);
const publicClone = (value)=>structuredClone(value);
const asObject = (value)=>null !== value && "object" == typeof value ? value : {};
const ok = (value)=>({
        ok: true,
        value
    });
const badRequest = (message)=>({
        ok: false,
        error: {
            code: "bad-request",
            message,
            details: {
                issues: []
            }
        }
    });
const deferred = ()=>{
    let resolve;
    let reject;
    return {
        promise: new Promise((onResolve, onReject)=>{
            resolve = onResolve;
            reject = onReject;
        }),
        resolve,
        reject
    };
};
class CursorLoginCoordinator {
    #sessions = new Map();
    #activeId;
    auth;
    createId;
    logger;
    constructor(auth, options = {}){
        this.auth = auth;
        this.createId = options.createId ?? (()=>randomUUID());
        this.logger = options.logger;
    }
    #log(level, message, ...args) {
        try {
            this.logger?.[level]?.(`cursor-agent: ${message}`, ...args);
        } catch  {}
    }
    async accountStatus(options) {
        return publicClone(await this.auth.status(options));
    }
    async start() {
        const active = void 0 === this.#activeId ? void 0 : this.#sessions.get(this.#activeId);
        if (void 0 !== active && !TERMINAL_PHASES.has(active.view.phase)) throw new Error("a Cursor login is already active");
        if (void 0 !== active) this.#sessions.delete(active.view.id);
        const id = this.createId();
        const ready = deferred();
        const controller = new AbortController();
        const session = {
            controller,
            ready,
            view: {
                id,
                provider: PROVIDER,
                method: "browser",
                phase: "starting",
                authenticated: false
            }
        };
        this.#sessions.set(id, session);
        this.#activeId = id;
        const publishReady = ()=>ready.resolve(this.read(id));
        const interaction = {
            signal: controller.signal,
            prompt: async (prompt)=>{
                controller.signal.throwIfAborted();
                const answer = deferred();
                session.prompt = answer;
                session.view = {
                    ...session.view,
                    phase: "waiting_input",
                    prompt: publicPrompt(prompt)
                };
                const abortPrompt = ()=>answer.reject(controller.signal.reason ?? new Error("login cancelled"));
                controller.signal.addEventListener("abort", abortPrompt, {
                    once: true
                });
                prompt.signal?.addEventListener("abort", abortPrompt, {
                    once: true
                });
                publishReady();
                try {
                    return await answer.promise;
                } finally{
                    controller.signal.removeEventListener("abort", abortPrompt);
                    prompt.signal?.removeEventListener("abort", abortPrompt);
                    if (session.prompt === answer) session.prompt = void 0;
                }
            },
            notify: (event)=>{
                if (controller.signal.aborted) return;
                if ("auth_url" === event.type) session.view = {
                    ...session.view,
                    phase: "waiting_browser",
                    authUrl: assertCursorAuthUrl(event.url),
                    ..."string" == typeof event.instructions ? {
                        instructions: event.instructions
                    } : {}
                };
                else session.view = {
                    ...session.view,
                    message: String(event.message ?? "")
                };
                publishReady();
            }
        };
        session.run = Promise.resolve().then(()=>this.auth.login({
                interaction,
                signal: controller.signal
            })).then(async ()=>{
            if (controller.signal.aborted) return;
            const status = await this.auth.status();
            session.view = {
                id,
                provider: PROVIDER,
                method: "browser",
                phase: "authenticated",
                authenticated: true === status.authenticated,
                ..."number" == typeof status.expiresAt ? {
                    expiresAt: status.expiresAt
                } : {}
            };
        }).catch((error)=>{
            if (controller.signal.aborted) {
                session.view = {
                    id,
                    provider: PROVIDER,
                    method: "browser",
                    phase: "cancelled",
                    authenticated: false
                };
                return;
            }
            const message = error instanceof Error ? error.message : String(error);
            this.#log("warn", "login failed: %s", message);
            session.view = {
                id,
                provider: PROVIDER,
                method: "browser",
                phase: "failed",
                authenticated: false,
                error: "Cursor login failed",
                ...message ? {
                    detail: message.slice(0, 500)
                } : {}
            };
            session.hostError = error;
        }).finally(publishReady);
        return ready.promise;
    }
    read(id) {
        const session = this.#sessions.get(id);
        if (void 0 === session) throw new Error("unknown Cursor login");
        return publicClone(session.view);
    }
    async cancel(id) {
        const session = this.#sessions.get(id);
        if (void 0 === session) throw new Error("unknown Cursor login");
        if (!TERMINAL_PHASES.has(session.view.phase)) {
            session.view = {
                id,
                provider: PROVIDER,
                method: "browser",
                phase: "cancelled",
                authenticated: false
            };
            session.controller.abort(new Error("Cursor login cancelled"));
        }
        await Promise.resolve(session.run).catch(()=>void 0);
        return this.read(id);
    }
    async logout(options) {
        if (void 0 !== this.#activeId) {
            const active = this.#sessions.get(this.#activeId);
            if (void 0 !== active && !TERMINAL_PHASES.has(active.view.phase)) await this.cancel(active.view.id);
        }
        await this.auth.logout(options);
        return this.accountStatus(options);
    }
}
const publicPrompt = (prompt)=>({
        type: prompt.type,
        message: String(prompt.message ?? ""),
        ..."string" == typeof prompt.placeholder ? {
            placeholder: prompt.placeholder
        } : {}
    });
function createCursorRpcHandler(coordinator, options = {}) {
    const openExternal = options.openExternal;
    const usageReader = options.usageReader;
    const modelsProvider = options.modelsProvider;
    const settingsController = options.settings;
    const auth = options.auth;
    const publicError = (code, message)=>({
            ok: false,
            error: {
                code,
                message,
                details: {
                    issues: []
                }
            }
        });
    return async (endpoint, payload, signal)=>{
        try {
            signal.throwIfAborted();
            const input = asObject(payload);
            if ("settings" === endpoint) return ok(settingsController.read());
            if ("settings/update" === endpoint) {
                if (!Number.isSafeInteger(input.revision) || input.revision < 0) throw new Error("invalid Cursor settings revision");
                const patch = {};
                for (const key of [
                    "maxToolRounds",
                    "apiBaseUrl",
                    "retryCount",
                    "retryIntervalMs",
                    "retryHttpStatusCodes",
                    "parkedBridgeTimeoutMs"
                ])if (Object.hasOwn(input, key)) patch[key] = input[key];
                return ok(await settingsController.update(patch, input.revision));
            }
            if ("status" === endpoint) return ok(await coordinator.accountStatus({
                signal
            }));
            if ("usage" === endpoint) try {
                return ok(await usageReader.read({
                    force: true === input.force,
                    signal
                }));
            } catch (error) {
                const known = new Set([
                    "Cursor Agent is not signed in",
                    "Cursor sign-in needs to be renewed"
                ]);
                if (error instanceof Error && known.has(error.message)) return publicError("internal", error.message);
                const raw = error instanceof Error ? error.message : "";
                const http = raw.match(/^HTTP (\d{3})\b/);
                const message = http ? `Could not read Cursor usage (HTTP ${http[1]})` : `Could not read Cursor usage: ${raw}`;
                return publicError("internal", message);
            }
            if ("models" === endpoint) try {
                return ok({
                    models: await modelsProvider.listModelsForRpc({
                        force: true === input.force,
                        signal
                    }),
                    fetchedAt: Date.now()
                });
            } catch (error) {
                return publicError("internal", error instanceof Error ? error.message : "Could not list Cursor models");
            }
            if ("login/start" === endpoint) {
                const started = await coordinator.start();
                if (true !== input.openExternal) return ok(started);
                const url = started.authUrl;
                if ("string" != typeof url || void 0 === openExternal) return ok({
                    ...started,
                    externalOpened: false
                });
                try {
                    await openExternal(url);
                    return ok({
                        ...started,
                        externalOpened: true
                    });
                } catch  {
                    return ok({
                        ...started,
                        externalOpened: false
                    });
                }
            }
            if ("login/status" === endpoint) return ok(coordinator.read(input.id));
            if ("login/cancel" === endpoint) return ok(await coordinator.cancel(input.id));
            if ("login/apikey" === endpoint) {
                const secret = "string" == typeof input.apiKey ? input.apiKey : "string" == typeof input.token ? input.token : "";
                if ("" === secret.trim()) return badRequest("Cursor API key or auth token is required");
                const status = await auth.loginWithSecret(secret, {
                    signal
                });
                usageReader?.clear();
                return ok(status);
            }
            if ("logout" === endpoint) {
                const result = await coordinator.logout({
                    signal
                });
                usageReader?.clear();
                return ok(result);
            }
            return badRequest(`unknown Cursor auth endpoint: ${endpoint}`);
        } catch (error) {
            if (signal.aborted) throw error;
            const message = error instanceof Error && /^(unknown|unsupported|a Cursor|Cursor login|Cursor auth URL|Cursor API key)/.test(error.message) ? error.message : "Cursor request failed";
            return badRequest(message);
        }
    };
}
const CURSOR_RPC_MAX_BODY_BYTES = 1048576;
function createCursorRpcHttpHandler(handler, { requestRejection } = {}) {
    return async (req, res)=>{
        const rejection = "function" == typeof requestRejection ? requestRejection(req) : void 0;
        if (void 0 !== rejection) {
            res.writeHead(rejection);
            res.end(401 === rejection ? "unauthorized" : "forbidden");
            return;
        }
        if ((req.method ?? "GET") !== "POST") {
            res.writeHead(405, {
                allow: "POST"
            });
            res.end("method not allowed");
            return;
        }
        const mediaType = String(req.headers?.["content-type"] ?? "").split(";", 1)[0].trim().toLowerCase();
        if ("application/json" !== mediaType) {
            res.writeHead(415);
            res.end("content type must be application/json");
            return;
        }
        let raw;
        try {
            raw = await readCursorRpcBody(req, CURSOR_RPC_MAX_BODY_BYTES);
        } catch (error) {
            const status = error instanceof Error && "payload-too-large" === error.message ? 413 : 400;
            if (413 === status) res.writeHead(413, {
                connection: "close"
            });
            else res.writeHead(400);
            res.end(413 === status ? "" : "body is not readable");
            return;
        }
        let envelope;
        try {
            envelope = JSON.parse(0 === raw.length ? "{}" : raw.toString("utf8"));
        } catch  {
            res.writeHead(400);
            res.end("body is not JSON");
            return;
        }
        const rpcId = "string" == typeof envelope?.rpcId ? envelope.rpcId : "invalid-request";
        const pathname = String(req.url ?? "/").split("?")[0];
        const prefix = `${CHANNEL}/`;
        const endpoint = pathname.startsWith(prefix) ? pathname.slice(prefix.length) : "";
        if (envelope?.type !== "client-request" || envelope.method !== endpoint || 0 === endpoint.length) return void writeCursorRpcJson(res, rpcId, {
            ok: false,
            error: {
                code: "gateway/bad-request",
                message: "invalid client-request message",
                details: {
                    issues: []
                }
            }
        });
        const abort = new AbortController();
        res.on?.("close", ()=>{
            if (!res.writableEnded) abort.abort();
        });
        try {
            writeCursorRpcJson(res, rpcId, await handler(endpoint, envelope.payload, abort.signal));
        } catch (error) {
            res.writeHead(500);
            res.end(`handler failure: ${String(error)}`);
        }
    };
}
function writeCursorRpcJson(res, rpcId, result) {
    res.writeHead(200, {
        "content-type": "application/json"
    });
    res.end(JSON.stringify({
        type: "server-response",
        rpcId,
        result
    }));
}
async function readCursorRpcBody(req, maxBytes) {
    if ("function" != typeof req[Symbol.asyncIterator]) {
        if (Buffer.isBuffer(req.body)) return req.body;
        if ("string" == typeof req.body) return Buffer.from(req.body);
        throw new Error("unreadable");
    }
    const declared = req.headers?.["content-length"];
    if (void 0 !== declared && Number(declared) > maxBytes) {
        req.destroy?.();
        throw new Error("payload-too-large");
    }
    const chunks = [];
    let received = 0;
    for await (const chunk of req){
        const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
        received += buffer.byteLength;
        if (received > maxBytes) {
            req.destroy?.();
            throw new Error("payload-too-large");
        }
        chunks.push(buffer);
    }
    return Buffer.concat(chunks);
}
export { CursorAuthService, CursorCredentialStore, CursorLoginCoordinator, assertCursorAuthUrl, buildLoginUrl, classifyCursorSecret, commandForCursorAuthUrl, createCursorRpcHandler, createCursorRpcHttpHandler, getTokenExpiry, maskApiKey, openCursorAuthUrl, readJwtExpiry };
