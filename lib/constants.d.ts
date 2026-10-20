export { CURSOR_BASE_URL, resolveCursorApiBaseUrl } from "./api-url.js";
export declare const name = "cursor-agent";
/** `connection.rpc.handle` mounts the loopback channel on the owner `webServer`. */
export declare const inject: string[];
export declare const PROVIDER = "cursor-agent";
export declare const CREDENTIAL_REF: import("@deepseek-ai/dsh-credentials").CredentialRef;
export declare const CHANNEL = "/cursor-agent";
/** Set to `1` / `true` / `yes` / `on` to write `[cursor-agent]` diagnostics to stderr. */
export declare const CURSOR_AGENT_DEBUG_ENV = "CURSOR_AGENT_DEBUG";
export declare function isCursorAgentDebugEnabled(env?: NodeJS.ProcessEnv): boolean;
export declare function cursorAgentDebug(message: string): void;
export declare const CURSOR_LOGIN_URL = "https://cursor.com/loginDeepControl";
export declare const CURSOR_AUTH_ORIGIN = "https://cursor.com";
export declare const CURSOR_POLL_PATH = "/auth/poll";
export declare const CURSOR_REFRESH_PATH = "/auth/exchange_user_api_key";
export declare const CURSOR_RUN_PATH = "/agent.v1.AgentService/Run";
export declare const CURSOR_MODELS_PATH = "/agent.v1.AgentService/GetUsableModels";
export declare const CURSOR_NAME_AGENT_PATH = "/agent.v1.AgentService/NameAgent";
export declare const CURSOR_AVAILABLE_MODELS_PATH = "/aiserver.v1.AiService/AvailableModels";
/**
 * Prefix `dsh-session-title-llm` puts in front of the JSON-framed user prompt.
 * The adapter unwraps this so NameAgent sees the raw first human message,
 * matching cursor-agent's `nameAgent({ userMessage })`.
 */
export declare const DSH_SESSION_TITLE_FRAME_PREFIX = "Generate the session title from this JSON array of human messages:";
/** Cursor dashboard usage RPCs on the Agent API base (Connect unary). */
export declare const CURSOR_DASHBOARD_SERVICE = "aiserver.v1.DashboardService";
export declare const CURSOR_DASHBOARD_RPC: (method: any) => string;
export declare const CURSOR_GET_ME_PATH: string;
export declare const CURSOR_GET_PLAN_INFO_PATH: string;
export declare const CURSOR_GET_CURRENT_PERIOD_USAGE_PATH: string;
export declare const CURSOR_GET_SAND_USAGE_STATUS_PATH: string;
export declare const USAGE_TTL_MS: number;
/** Client version reported to the Agent service; bump when Cursor requires it. */
export declare const CURSOR_CLIENT_VERSION = "cli-2026.02.13-41ac335";
/** Keep-alive heartbeats while an agent run is streaming. */
export declare const HEARTBEAT_INTERVAL_MS = 5000;
/** How long an agent run may stay completely silent before we abort. */
export declare const STREAM_IDLE_TIMEOUT_MS: number;
/** How long a run may keep sending heartbeats without any real content. */
export declare const STREAM_PROGRESS_TIMEOUT_MS: number;
/** Retain checkpoints/live tool bridges for inactive DSH sessions. */
export declare const SESSION_STATE_TTL_MS: number;
/** Stop one Cursor Run before an unconstrained agent can loop forever. */
export declare const MAX_TOOL_ROUNDS = 1000;
export declare const DEFAULT_RETRY_COUNT = 0;
export declare const DEFAULT_RETRY_INTERVAL_MS = 1000;
export declare const DEFAULT_RETRY_HTTP_STATUS_CODES: readonly number[];
/** Hard cap on a parked exec bridge (MCP tool execution only); questions never park. */
export declare const PARKED_BRIDGE_TIMEOUT_MS: number;
export declare const SETTINGS_NAMESPACE = "cursor-agent";
/**
 * The agent preset a session must run for `cursor-agent` calls to be
 * accepted. The provider stays globally registered (the model catalog is one
 * Host-level object shared by every session), so the picker shows it
 * everywhere; the preset check happens in `stream()` before any network I/O.
 */
export declare const CURSOR_PRESET_ID = "cursor-agent";
export declare const DEFAULT_REQUIRE_CURSOR_PRESET = true;
export declare const REFRESH_AHEAD_MS: number;
/** Default access-token lifetime when the JWT has no usable exp claim. */
export declare const DEFAULT_TOKEN_LIFETIME_MS: number;
export declare const DEFAULT_CONTEXT_WINDOW = 200000;
export declare const DEFAULT_MAX_TOKENS = 64000;
/**
 * Tools excluded from the injected request-context catalog. Besides exact
 * Cursor-native names, this covers DSH tools bridged through other channels:
 * `ask_user_question` (answered via the AskQuestion interaction bridge) and
 * the subagent family (mapped to Cursor's Task later; excluded until then so
 * Cursor never sees a conflicting duplicate).
 */
export declare const CURSOR_NATIVE_TOOL_NAMES: Readonly<Set<string>>;
/** `true` when a DSH tool name collides with a Cursor-native tool name. */
export declare function isCursorNativeTool(name: any): boolean;
export declare const FALLBACK_MODELS: readonly {
    id: string;
    name: string;
    contextWindow: number;
}[];
