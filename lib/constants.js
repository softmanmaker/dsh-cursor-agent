import { credentialRef } from "@deepseek-ai/dsh-credentials";
import { FALLBACK_CONTEXT_WINDOW } from "./models.js";
const constants_name = "cursor-agent";
const inject = [
    "llm",
    "credentials",
    "connection",
    "webServer"
];
const PROVIDER = "cursor-agent";
const CREDENTIAL_REF = credentialRef("CURSOR_SUBSCRIPTION_OAUTH");
const CHANNEL = "/cursor-agent";
const CURSOR_AGENT_DEBUG_ENV = "CURSOR_AGENT_DEBUG";
function isCursorAgentDebugEnabled(env = process.env) {
    const raw = env[CURSOR_AGENT_DEBUG_ENV];
    if ("string" != typeof raw) return false;
    return /^(1|true|yes|on)$/i.test(raw.trim());
}
function cursorAgentDebug(message) {
    if (!isCursorAgentDebugEnabled()) return;
    process.stderr.write(`[cursor-agent] ${message}\n`);
}
const CURSOR_LOGIN_URL = "https://cursor.com/loginDeepControl";
const CURSOR_AUTH_ORIGIN = "https://cursor.com";
const CURSOR_POLL_PATH = "/auth/poll";
const CURSOR_REFRESH_PATH = "/auth/exchange_user_api_key";
const CURSOR_RUN_PATH = "/agent.v1.AgentService/Run";
const CURSOR_MODELS_PATH = "/agent.v1.AgentService/GetUsableModels";
const CURSOR_NAME_AGENT_PATH = "/agent.v1.AgentService/NameAgent";
const CURSOR_AVAILABLE_MODELS_PATH = "/aiserver.v1.AiService/AvailableModels";
const DSH_SESSION_TITLE_FRAME_PREFIX = "Generate the session title from this JSON array of human messages:";
const CURSOR_DASHBOARD_SERVICE = "aiserver.v1.DashboardService";
const CURSOR_DASHBOARD_RPC = (method)=>`/${CURSOR_DASHBOARD_SERVICE}/${method}`;
const CURSOR_GET_ME_PATH = CURSOR_DASHBOARD_RPC("GetMe");
const CURSOR_GET_PLAN_INFO_PATH = CURSOR_DASHBOARD_RPC("GetPlanInfo");
const CURSOR_GET_CURRENT_PERIOD_USAGE_PATH = CURSOR_DASHBOARD_RPC("GetCurrentPeriodUsage");
const CURSOR_GET_SAND_USAGE_STATUS_PATH = CURSOR_DASHBOARD_RPC("GetSandUsageStatus");
const USAGE_TTL_MS = 60000;
const CURSOR_CLIENT_VERSION = "cli-2026.02.13-41ac335";
const HEARTBEAT_INTERVAL_MS = 5000;
const STREAM_IDLE_TIMEOUT_MS = 120000;
const STREAM_PROGRESS_TIMEOUT_MS = 60000;
const SESSION_STATE_TTL_MS = 1800000;
const MAX_TOOL_ROUNDS = 1000;
const DEFAULT_RETRY_COUNT = 0;
const DEFAULT_RETRY_INTERVAL_MS = 1000;
const DEFAULT_RETRY_HTTP_STATUS_CODES = Object.freeze([
    408,
    425,
    429,
    500,
    502,
    503,
    504
]);
const PARKED_BRIDGE_TIMEOUT_MS = 600000;
const SETTINGS_NAMESPACE = "cursor-agent";
const CURSOR_PRESET_ID = "cursor-agent";
const DEFAULT_REQUIRE_CURSOR_PRESET = true;
const REFRESH_AHEAD_MS = 300000;
const DEFAULT_TOKEN_LIFETIME_MS = 86400000;
const DEFAULT_CONTEXT_WINDOW = FALLBACK_CONTEXT_WINDOW;
const DEFAULT_MAX_TOKENS = 64000;
const CURSOR_NATIVE_TOOL_NAMES = Object.freeze(new Set([
    "read",
    "write",
    "edit",
    "apply_patch",
    "edit_notebook",
    "generate_image",
    "grep",
    "glob",
    "ls",
    "delete",
    "read_lints",
    "shell",
    "task",
    "call_mcp_tool",
    "todo_write",
    "read_todos",
    "update_current_step",
    "semantic_search",
    "get_dynamic_tools",
    "await",
    "ask_question",
    "web_fetch",
    "web_search",
    "switch_mode",
    "create_plan",
    "mcp_auth",
    "connect_scm",
    "setup_vm_environment",
    "pr_management",
    "replace_env",
    "computer_use",
    "record_screen",
    "write_shell_stdin",
    "background_shell",
    "ask_user_question",
    "subagent",
    "subagent_cursor",
    "subagent_fork",
    "bash"
]));
function isCursorNativeTool(name) {
    if ("string" != typeof name || 0 === name.length) return false;
    return CURSOR_NATIVE_TOOL_NAMES.has(name.toLowerCase().replace(/-/g, "_"));
}
const FALLBACK_MODELS = Object.freeze([
    {
        id: "composer-2",
        name: "Composer 2",
        contextWindow: 200000
    },
    {
        id: "claude-4-sonnet",
        name: "Claude 4 Sonnet",
        contextWindow: 200000
    },
    {
        id: "claude-3.5-sonnet",
        name: "Claude 3.5 Sonnet",
        contextWindow: 200000
    },
    {
        id: "claude-sonnet-4",
        name: "Claude Sonnet 4",
        contextWindow: 200000
    },
    {
        id: "gpt-4o",
        name: "GPT-4o",
        contextWindow: 128000
    },
    {
        id: "gpt-4.1",
        name: "GPT-4.1",
        contextWindow: 1000000
    },
    {
        id: "o3",
        name: "o3",
        contextWindow: 200000
    },
    {
        id: "o4-mini",
        name: "o4-mini",
        contextWindow: 200000
    },
    {
        id: "gemini-2.5-pro",
        name: "Gemini 2.5 Pro",
        contextWindow: 1000000
    },
    {
        id: "cursor-small",
        name: "Cursor Small",
        contextWindow: 200000
    }
]);
export { CURSOR_BASE_URL, resolveCursorApiBaseUrl } from "./api-url.js";
export { CHANNEL, CREDENTIAL_REF, CURSOR_AGENT_DEBUG_ENV, CURSOR_AUTH_ORIGIN, CURSOR_AVAILABLE_MODELS_PATH, CURSOR_CLIENT_VERSION, CURSOR_DASHBOARD_RPC, CURSOR_DASHBOARD_SERVICE, CURSOR_GET_CURRENT_PERIOD_USAGE_PATH, CURSOR_GET_ME_PATH, CURSOR_GET_PLAN_INFO_PATH, CURSOR_GET_SAND_USAGE_STATUS_PATH, CURSOR_LOGIN_URL, CURSOR_MODELS_PATH, CURSOR_NAME_AGENT_PATH, CURSOR_NATIVE_TOOL_NAMES, CURSOR_POLL_PATH, CURSOR_PRESET_ID, CURSOR_REFRESH_PATH, CURSOR_RUN_PATH, DEFAULT_CONTEXT_WINDOW, DEFAULT_MAX_TOKENS, DEFAULT_REQUIRE_CURSOR_PRESET, DEFAULT_RETRY_COUNT, DEFAULT_RETRY_HTTP_STATUS_CODES, DEFAULT_RETRY_INTERVAL_MS, DEFAULT_TOKEN_LIFETIME_MS, DSH_SESSION_TITLE_FRAME_PREFIX, FALLBACK_MODELS, HEARTBEAT_INTERVAL_MS, MAX_TOOL_ROUNDS, PARKED_BRIDGE_TIMEOUT_MS, PROVIDER, REFRESH_AHEAD_MS, SESSION_STATE_TTL_MS, SETTINGS_NAMESPACE, STREAM_IDLE_TIMEOUT_MS, STREAM_PROGRESS_TIMEOUT_MS, USAGE_TTL_MS, constants_name as name, cursorAgentDebug, inject, isCursorAgentDebugEnabled, isCursorNativeTool };
