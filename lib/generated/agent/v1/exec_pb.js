import { Message, proto3 } from "@bufbuild/protobuf";
import { AdoptArgs, AdoptResult } from "./adopt_tool_pb.js";
import { AfterAgentResponseRequestQuery, AfterAgentResponseRequestResponse, AfterAgentThoughtRequestQuery, AfterAgentThoughtRequestResponse, BeforeSubmitPromptRequestQuery, BeforeSubmitPromptRequestResponse, PostToolUseFailureRequestQuery, PostToolUseFailureRequestResponse, PostToolUseRequestQuery, PostToolUseRequestResponse, PreCompactRequestQuery, PreCompactRequestResponse, PreToolUseRequestQuery, PreToolUseRequestResponse, StopRequestQuery, StopRequestResponse, SubagentStartRequestQuery, SubagentStartRequestResponse, SubagentStopRequestQuery, SubagentStopRequestResponse } from "./agent_pb.js";
import { AgentStoreConflictArgs, AgentStoreConflictResult } from "./agent_store_conflict_exec_pb.js";
import { BackgroundShellSpawnArgs, BackgroundShellSpawnResult, WriteShellStdinArgs, WriteShellStdinResult } from "./background_shell_exec_pb.js";
import { CanvasDiagnosticsArgs, CanvasDiagnosticsResult } from "./canvas_diagnostics_exec_pb.js";
import { ComputerUseArgs, ComputerUseResult } from "./computer_use_tool_pb.js";
import { ConversationSearchArgs, ConversationSearchResult } from "./conversation_search_exec_pb.js";
import { DeleteArgs, DeleteResult } from "./delete_exec_pb.js";
import { DiagnosticsArgs, DiagnosticsResult } from "./diagnostics_exec_pb.js";
import { FetchArgs, FetchResult } from "./fetch_exec_pb.js";
import { GrepArgs, GrepResult } from "./grep_exec_pb.js";
import { HookAdditionalContext } from "./hook_additional_context_pb.js";
import { LsArgs, LsResult } from "./ls_exec_pb.js";
import { McpAllowlistPrecheckArgs, McpAllowlistPrecheckResult } from "./mcp_allowlist_precheck_exec_pb.js";
import { ListMcpResourcesExecArgs, ListMcpResourcesExecResult, McpArgs, McpResult, McpStateExecArgs, McpStateExecResult, ReadMcpResourceExecArgs, ReadMcpResourceExecResult } from "./mcp_exec_pb.js";
import { PiBashExecArgs, PiBashExecResult } from "./pi_bash_exec_pb.js";
import { PiEditExecArgs, PiEditExecResult } from "./pi_edit_exec_pb.js";
import { PiFindExecArgs, PiFindExecResult } from "./pi_find_exec_pb.js";
import { PiGrepExecArgs, PiGrepExecResult } from "./pi_grep_exec_pb.js";
import { PiLsExecArgs, PiLsExecResult } from "./pi_ls_exec_pb.js";
import { PiReadExecArgs, PiReadExecResult } from "./pi_read_exec_pb.js";
import { PiWriteExecArgs, PiWriteExecResult } from "./pi_write_exec_pb.js";
import { ReadArgs, ReadResult } from "./read_exec_pb.js";
import { RecordScreenArgs, RecordScreenResult } from "./record_screen_exec_pb.js";
import { RequestContextArgs, RequestContextResult } from "./request_context_exec_pb.js";
import { ShellAllowlistPrecheckArgs, ShellAllowlistPrecheckResult } from "./shell_allowlist_precheck_exec_pb.js";
import { ForceBackgroundShellArgs, ForceBackgroundShellResult, ShellArgs, ShellResult, ShellStream } from "./shell_exec_pb.js";
import { SmartModeClassifierArgs, SmartModeClassifierResult } from "./smart_mode_classifier_exec_pb.js";
import { ForceBackgroundSubagentArgs, ForceBackgroundSubagentResult, SubagentArgs, SubagentAwaitArgs, SubagentAwaitResult, SubagentResult } from "./subagent_exec_pb.js";
import { WebFetchAllowlistPrecheckArgs, WebFetchAllowlistPrecheckResult } from "./web_fetch_allowlist_precheck_exec_pb.js";
import { WriteArgs, WriteResult } from "./write_exec_pb.js";
import { GetDiffRequest, GetDiffResponse } from "../../aiserver/v1/utils_pb.js";
var ExecClientStreamClose$Runtime = (()=>class _ExecClientStreamClose extends Message {
        constructor(data){
            super();
            this.id = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ExecClientStreamClose().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ExecClientStreamClose().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ExecClientStreamClose().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ExecClientStreamClose, a, b2);
        }
    })();
var ExecClientStreamClose = ExecClientStreamClose$Runtime;
ExecClientStreamClose.runtime = proto3;
ExecClientStreamClose.typeName = "agent.v1.ExecClientStreamClose";
ExecClientStreamClose.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 13
        }
    ]);
var ExecClientThrow$Runtime = (()=>class _ExecClientThrow extends Message {
        constructor(data){
            super();
            this.id = 0;
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ExecClientThrow().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ExecClientThrow().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ExecClientThrow().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ExecClientThrow, a, b2);
        }
    })();
var ExecClientThrow = ExecClientThrow$Runtime;
ExecClientThrow.runtime = proto3;
ExecClientThrow.typeName = "agent.v1.ExecClientThrow";
ExecClientThrow.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "stack_trace",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "error_code",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var ExecClientHeartbeat$Runtime = (()=>class _ExecClientHeartbeat extends Message {
        constructor(data){
            super();
            this.id = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ExecClientHeartbeat().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ExecClientHeartbeat().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ExecClientHeartbeat().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ExecClientHeartbeat, a, b2);
        }
    })();
var ExecClientHeartbeat = ExecClientHeartbeat$Runtime;
ExecClientHeartbeat.runtime = proto3;
ExecClientHeartbeat.typeName = "agent.v1.ExecClientHeartbeat";
ExecClientHeartbeat.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 13
        }
    ]);
var ExecClientControlMessage$Runtime = (()=>class _ExecClientControlMessage extends Message {
        constructor(data){
            super();
            this.message = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ExecClientControlMessage().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ExecClientControlMessage().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ExecClientControlMessage().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ExecClientControlMessage, a, b2);
        }
    })();
var ExecClientControlMessage = ExecClientControlMessage$Runtime;
ExecClientControlMessage.runtime = proto3;
ExecClientControlMessage.typeName = "agent.v1.ExecClientControlMessage";
ExecClientControlMessage.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "stream_close",
            kind: "message",
            T: ExecClientStreamClose,
            oneof: "message"
        },
        {
            no: 2,
            name: "throw",
            kind: "message",
            T: ExecClientThrow,
            oneof: "message"
        },
        {
            no: 3,
            name: "heartbeat",
            kind: "message",
            T: ExecClientHeartbeat,
            oneof: "message"
        }
    ]);
var SpanContext$Runtime = (()=>class _SpanContext extends Message {
        constructor(data){
            super();
            this.traceId = "";
            this.spanId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _SpanContext().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _SpanContext().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _SpanContext().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SpanContext, a, b2);
        }
    })();
var SpanContext = SpanContext$Runtime;
SpanContext.runtime = proto3;
SpanContext.typeName = "agent.v1.SpanContext";
SpanContext.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "trace_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "span_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "trace_flags",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 4,
            name: "trace_state",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var AbortArgs$Runtime = (()=>class _AbortArgs extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _AbortArgs().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _AbortArgs().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _AbortArgs().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AbortArgs, a, b2);
        }
    })();
var AbortArgs = AbortArgs$Runtime;
AbortArgs.runtime = proto3;
AbortArgs.typeName = "agent.v1.AbortArgs";
AbortArgs.fields = proto3.util.newFieldList(()=>[]);
var AbortResult$Runtime = (()=>class _AbortResult extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _AbortResult().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _AbortResult().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _AbortResult().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AbortResult, a, b2);
        }
    })();
var AbortResult = AbortResult$Runtime;
AbortResult.runtime = proto3;
AbortResult.typeName = "agent.v1.AbortResult";
AbortResult.fields = proto3.util.newFieldList(()=>[]);
var ExecServerMessage$Runtime = (()=>class _ExecServerMessage extends Message {
        constructor(data){
            super();
            this.id = 0;
            this.execId = "";
            this.message = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ExecServerMessage().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ExecServerMessage().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ExecServerMessage().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ExecServerMessage, a, b2);
        }
    })();
var ExecServerMessage = ExecServerMessage$Runtime;
ExecServerMessage.runtime = proto3;
ExecServerMessage.typeName = "agent.v1.ExecServerMessage";
ExecServerMessage.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 13
        },
        {
            no: 15,
            name: "exec_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "shell_args",
            kind: "message",
            T: ShellArgs,
            oneof: "message"
        },
        {
            no: 3,
            name: "write_args",
            kind: "message",
            T: WriteArgs,
            oneof: "message"
        },
        {
            no: 4,
            name: "delete_args",
            kind: "message",
            T: DeleteArgs,
            oneof: "message"
        },
        {
            no: 5,
            name: "grep_args",
            kind: "message",
            T: GrepArgs,
            oneof: "message"
        },
        {
            no: 7,
            name: "read_args",
            kind: "message",
            T: ReadArgs,
            oneof: "message"
        },
        {
            no: 29,
            name: "redacted_read_args",
            kind: "message",
            T: ReadArgs,
            oneof: "message"
        },
        {
            no: 8,
            name: "ls_args",
            kind: "message",
            T: LsArgs,
            oneof: "message"
        },
        {
            no: 9,
            name: "diagnostics_args",
            kind: "message",
            T: DiagnosticsArgs,
            oneof: "message"
        },
        {
            no: 10,
            name: "request_context_args",
            kind: "message",
            T: RequestContextArgs,
            oneof: "message"
        },
        {
            no: 11,
            name: "mcp_args",
            kind: "message",
            T: McpArgs,
            oneof: "message"
        },
        {
            no: 14,
            name: "shell_stream_args",
            kind: "message",
            T: ShellArgs,
            oneof: "message"
        },
        {
            no: 16,
            name: "background_shell_spawn_args",
            kind: "message",
            T: BackgroundShellSpawnArgs,
            oneof: "message"
        },
        {
            no: 17,
            name: "list_mcp_resources_exec_args",
            kind: "message",
            T: ListMcpResourcesExecArgs,
            oneof: "message"
        },
        {
            no: 18,
            name: "read_mcp_resource_exec_args",
            kind: "message",
            T: ReadMcpResourceExecArgs,
            oneof: "message"
        },
        {
            no: 36,
            name: "mcp_state_exec_args",
            kind: "message",
            T: McpStateExecArgs,
            oneof: "message"
        },
        {
            no: 20,
            name: "fetch_args",
            kind: "message",
            T: FetchArgs,
            oneof: "message"
        },
        {
            no: 21,
            name: "record_screen_args",
            kind: "message",
            T: RecordScreenArgs,
            oneof: "message"
        },
        {
            no: 22,
            name: "computer_use_args",
            kind: "message",
            T: ComputerUseArgs,
            oneof: "message"
        },
        {
            no: 23,
            name: "write_shell_stdin_args",
            kind: "message",
            T: WriteShellStdinArgs,
            oneof: "message"
        },
        {
            no: 27,
            name: "execute_hook_args",
            kind: "message",
            T: ExecuteHookArgs,
            oneof: "message"
        },
        {
            no: 28,
            name: "subagent_args",
            kind: "message",
            T: SubagentArgs,
            oneof: "message"
        },
        {
            no: 30,
            name: "force_background_shell_args",
            kind: "message",
            T: ForceBackgroundShellArgs,
            oneof: "message"
        },
        {
            no: 31,
            name: "force_background_subagent_args",
            kind: "message",
            T: ForceBackgroundSubagentArgs,
            oneof: "message"
        },
        {
            no: 37,
            name: "subagent_await_args",
            kind: "message",
            T: SubagentAwaitArgs,
            oneof: "message"
        },
        {
            no: 38,
            name: "smart_mode_classifier_args",
            kind: "message",
            T: SmartModeClassifierArgs,
            oneof: "message"
        },
        {
            no: 40,
            name: "canvas_diagnostics_args",
            kind: "message",
            T: CanvasDiagnosticsArgs,
            oneof: "message"
        },
        {
            no: 41,
            name: "shell_allowlist_precheck_args",
            kind: "message",
            T: ShellAllowlistPrecheckArgs,
            oneof: "message"
        },
        {
            no: 42,
            name: "mcp_allowlist_precheck_args",
            kind: "message",
            T: McpAllowlistPrecheckArgs,
            oneof: "message"
        },
        {
            no: 43,
            name: "web_fetch_allowlist_precheck_args",
            kind: "message",
            T: WebFetchAllowlistPrecheckArgs,
            oneof: "message"
        },
        {
            no: 44,
            name: "git_diff_request",
            kind: "message",
            T: GetDiffRequest,
            oneof: "message"
        },
        {
            no: 45,
            name: "pi_read_args",
            kind: "message",
            T: PiReadExecArgs,
            oneof: "message"
        },
        {
            no: 46,
            name: "pi_bash_args",
            kind: "message",
            T: PiBashExecArgs,
            oneof: "message"
        },
        {
            no: 47,
            name: "pi_edit_args",
            kind: "message",
            T: PiEditExecArgs,
            oneof: "message"
        },
        {
            no: 48,
            name: "pi_write_args",
            kind: "message",
            T: PiWriteExecArgs,
            oneof: "message"
        },
        {
            no: 49,
            name: "pi_grep_args",
            kind: "message",
            T: PiGrepExecArgs,
            oneof: "message"
        },
        {
            no: 50,
            name: "pi_find_args",
            kind: "message",
            T: PiFindExecArgs,
            oneof: "message"
        },
        {
            no: 51,
            name: "pi_ls_args",
            kind: "message",
            T: PiLsExecArgs,
            oneof: "message"
        },
        {
            no: 52,
            name: "mini_swe_agent_bash_args",
            kind: "message",
            T: ShellArgs,
            oneof: "message"
        },
        {
            no: 53,
            name: "conversation_search_args",
            kind: "message",
            T: ConversationSearchArgs,
            oneof: "message"
        },
        {
            no: 54,
            name: "agent_store_conflict_args",
            kind: "message",
            T: AgentStoreConflictArgs,
            oneof: "message"
        },
        {
            no: 56,
            name: "adopt_args",
            kind: "message",
            T: AdoptArgs,
            oneof: "message"
        },
        {
            no: 19,
            name: "span_context",
            kind: "message",
            T: SpanContext,
            opt: true
        },
        {
            no: 55,
            name: "accept_hook_additional_contexts",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
var ExecClientMessage$Runtime = (()=>class _ExecClientMessage extends Message {
        constructor(data){
            super();
            this.id = 0;
            this.execId = "";
            this.hookAdditionalContexts = [];
            this.message = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ExecClientMessage().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ExecClientMessage().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ExecClientMessage().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ExecClientMessage, a, b2);
        }
    })();
var ExecClientMessage = ExecClientMessage$Runtime;
ExecClientMessage.runtime = proto3;
ExecClientMessage.typeName = "agent.v1.ExecClientMessage";
ExecClientMessage.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 13
        },
        {
            no: 15,
            name: "exec_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 39,
            name: "local_execution_time_ms",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 45,
            name: "hook_additional_contexts",
            kind: "message",
            T: HookAdditionalContext,
            repeated: true
        },
        {
            no: 2,
            name: "shell_result",
            kind: "message",
            T: ShellResult,
            oneof: "message"
        },
        {
            no: 3,
            name: "write_result",
            kind: "message",
            T: WriteResult,
            oneof: "message"
        },
        {
            no: 4,
            name: "delete_result",
            kind: "message",
            T: DeleteResult,
            oneof: "message"
        },
        {
            no: 5,
            name: "grep_result",
            kind: "message",
            T: GrepResult,
            oneof: "message"
        },
        {
            no: 7,
            name: "read_result",
            kind: "message",
            T: ReadResult,
            oneof: "message"
        },
        {
            no: 29,
            name: "redacted_read_result",
            kind: "message",
            T: ReadResult,
            oneof: "message"
        },
        {
            no: 8,
            name: "ls_result",
            kind: "message",
            T: LsResult,
            oneof: "message"
        },
        {
            no: 9,
            name: "diagnostics_result",
            kind: "message",
            T: DiagnosticsResult,
            oneof: "message"
        },
        {
            no: 10,
            name: "request_context_result",
            kind: "message",
            T: RequestContextResult,
            oneof: "message"
        },
        {
            no: 11,
            name: "mcp_result",
            kind: "message",
            T: McpResult,
            oneof: "message"
        },
        {
            no: 14,
            name: "shell_stream",
            kind: "message",
            T: ShellStream,
            oneof: "message"
        },
        {
            no: 16,
            name: "background_shell_spawn_result",
            kind: "message",
            T: BackgroundShellSpawnResult,
            oneof: "message"
        },
        {
            no: 17,
            name: "list_mcp_resources_exec_result",
            kind: "message",
            T: ListMcpResourcesExecResult,
            oneof: "message"
        },
        {
            no: 18,
            name: "read_mcp_resource_exec_result",
            kind: "message",
            T: ReadMcpResourceExecResult,
            oneof: "message"
        },
        {
            no: 36,
            name: "mcp_state_exec_result",
            kind: "message",
            T: McpStateExecResult,
            oneof: "message"
        },
        {
            no: 20,
            name: "fetch_result",
            kind: "message",
            T: FetchResult,
            oneof: "message"
        },
        {
            no: 21,
            name: "record_screen_result",
            kind: "message",
            T: RecordScreenResult,
            oneof: "message"
        },
        {
            no: 22,
            name: "computer_use_result",
            kind: "message",
            T: ComputerUseResult,
            oneof: "message"
        },
        {
            no: 23,
            name: "write_shell_stdin_result",
            kind: "message",
            T: WriteShellStdinResult,
            oneof: "message"
        },
        {
            no: 27,
            name: "execute_hook_result",
            kind: "message",
            T: ExecuteHookResult,
            oneof: "message"
        },
        {
            no: 28,
            name: "subagent_result",
            kind: "message",
            T: SubagentResult,
            oneof: "message"
        },
        {
            no: 30,
            name: "force_background_shell_result",
            kind: "message",
            T: ForceBackgroundShellResult,
            oneof: "message"
        },
        {
            no: 31,
            name: "force_background_subagent_result",
            kind: "message",
            T: ForceBackgroundSubagentResult,
            oneof: "message"
        },
        {
            no: 37,
            name: "subagent_await_result",
            kind: "message",
            T: SubagentAwaitResult,
            oneof: "message"
        },
        {
            no: 38,
            name: "smart_mode_classifier_result",
            kind: "message",
            T: SmartModeClassifierResult,
            oneof: "message"
        },
        {
            no: 40,
            name: "canvas_diagnostics_result",
            kind: "message",
            T: CanvasDiagnosticsResult,
            oneof: "message"
        },
        {
            no: 41,
            name: "shell_allowlist_precheck_result",
            kind: "message",
            T: ShellAllowlistPrecheckResult,
            oneof: "message"
        },
        {
            no: 42,
            name: "mcp_allowlist_precheck_result",
            kind: "message",
            T: McpAllowlistPrecheckResult,
            oneof: "message"
        },
        {
            no: 43,
            name: "web_fetch_allowlist_precheck_result",
            kind: "message",
            T: WebFetchAllowlistPrecheckResult,
            oneof: "message"
        },
        {
            no: 44,
            name: "git_diff_response",
            kind: "message",
            T: GetDiffResponse,
            oneof: "message"
        },
        {
            no: 46,
            name: "pi_read_result",
            kind: "message",
            T: PiReadExecResult,
            oneof: "message"
        },
        {
            no: 47,
            name: "pi_bash_result",
            kind: "message",
            T: PiBashExecResult,
            oneof: "message"
        },
        {
            no: 48,
            name: "pi_edit_result",
            kind: "message",
            T: PiEditExecResult,
            oneof: "message"
        },
        {
            no: 49,
            name: "pi_write_result",
            kind: "message",
            T: PiWriteExecResult,
            oneof: "message"
        },
        {
            no: 50,
            name: "pi_grep_result",
            kind: "message",
            T: PiGrepExecResult,
            oneof: "message"
        },
        {
            no: 51,
            name: "pi_find_result",
            kind: "message",
            T: PiFindExecResult,
            oneof: "message"
        },
        {
            no: 52,
            name: "pi_ls_result",
            kind: "message",
            T: PiLsExecResult,
            oneof: "message"
        },
        {
            no: 53,
            name: "conversation_search_result",
            kind: "message",
            T: ConversationSearchResult,
            oneof: "message"
        },
        {
            no: 54,
            name: "agent_store_conflict_result",
            kind: "message",
            T: AgentStoreConflictResult,
            oneof: "message"
        },
        {
            no: 55,
            name: "mini_swe_agent_bash_result",
            kind: "message",
            T: ShellResult,
            oneof: "message"
        },
        {
            no: 56,
            name: "adopt_result",
            kind: "message",
            T: AdoptResult,
            oneof: "message"
        }
    ]);
var ExecuteHookArgs$Runtime = (()=>class _ExecuteHookArgs extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ExecuteHookArgs().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ExecuteHookArgs().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ExecuteHookArgs().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ExecuteHookArgs, a, b2);
        }
    })();
var ExecuteHookArgs = ExecuteHookArgs$Runtime;
ExecuteHookArgs.runtime = proto3;
ExecuteHookArgs.typeName = "agent.v1.ExecuteHookArgs";
ExecuteHookArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "request",
            kind: "message",
            T: ExecuteHookRequest
        }
    ]);
var ExecuteHookResult$Runtime = (()=>class _ExecuteHookResult extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ExecuteHookResult().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ExecuteHookResult().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ExecuteHookResult().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ExecuteHookResult, a, b2);
        }
    })();
var ExecuteHookResult = ExecuteHookResult$Runtime;
ExecuteHookResult.runtime = proto3;
ExecuteHookResult.typeName = "agent.v1.ExecuteHookResult";
ExecuteHookResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "response",
            kind: "message",
            T: ExecuteHookResponse
        }
    ]);
var ExecuteHookRequest$Runtime = (()=>class _ExecuteHookRequest extends Message {
        constructor(data){
            super();
            this.request = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ExecuteHookRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ExecuteHookRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ExecuteHookRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ExecuteHookRequest, a, b2);
        }
    })();
var ExecuteHookRequest = ExecuteHookRequest$Runtime;
ExecuteHookRequest.runtime = proto3;
ExecuteHookRequest.typeName = "agent.v1.ExecuteHookRequest";
ExecuteHookRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "pre_compact",
            kind: "message",
            T: PreCompactRequestQuery,
            oneof: "request"
        },
        {
            no: 2,
            name: "subagent_start",
            kind: "message",
            T: SubagentStartRequestQuery,
            oneof: "request"
        },
        {
            no: 3,
            name: "subagent_stop",
            kind: "message",
            T: SubagentStopRequestQuery,
            oneof: "request"
        },
        {
            no: 4,
            name: "pre_tool_use",
            kind: "message",
            T: PreToolUseRequestQuery,
            oneof: "request"
        },
        {
            no: 5,
            name: "post_tool_use",
            kind: "message",
            T: PostToolUseRequestQuery,
            oneof: "request"
        },
        {
            no: 6,
            name: "post_tool_use_failure",
            kind: "message",
            T: PostToolUseFailureRequestQuery,
            oneof: "request"
        },
        {
            no: 7,
            name: "before_submit_prompt",
            kind: "message",
            T: BeforeSubmitPromptRequestQuery,
            oneof: "request"
        },
        {
            no: 8,
            name: "after_agent_response",
            kind: "message",
            T: AfterAgentResponseRequestQuery,
            oneof: "request"
        },
        {
            no: 9,
            name: "after_agent_thought",
            kind: "message",
            T: AfterAgentThoughtRequestQuery,
            oneof: "request"
        },
        {
            no: 11,
            name: "stop",
            kind: "message",
            T: StopRequestQuery,
            oneof: "request"
        }
    ]);
var ExecuteHookResponse$Runtime = (()=>class _ExecuteHookResponse extends Message {
        constructor(data){
            super();
            this.response = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ExecuteHookResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ExecuteHookResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ExecuteHookResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ExecuteHookResponse, a, b2);
        }
    })();
var ExecuteHookResponse = ExecuteHookResponse$Runtime;
ExecuteHookResponse.runtime = proto3;
ExecuteHookResponse.typeName = "agent.v1.ExecuteHookResponse";
ExecuteHookResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "pre_compact",
            kind: "message",
            T: PreCompactRequestResponse,
            oneof: "response"
        },
        {
            no: 2,
            name: "subagent_start",
            kind: "message",
            T: SubagentStartRequestResponse,
            oneof: "response"
        },
        {
            no: 3,
            name: "subagent_stop",
            kind: "message",
            T: SubagentStopRequestResponse,
            oneof: "response"
        },
        {
            no: 4,
            name: "pre_tool_use",
            kind: "message",
            T: PreToolUseRequestResponse,
            oneof: "response"
        },
        {
            no: 5,
            name: "post_tool_use",
            kind: "message",
            T: PostToolUseRequestResponse,
            oneof: "response"
        },
        {
            no: 6,
            name: "post_tool_use_failure",
            kind: "message",
            T: PostToolUseFailureRequestResponse,
            oneof: "response"
        },
        {
            no: 7,
            name: "before_submit_prompt",
            kind: "message",
            T: BeforeSubmitPromptRequestResponse,
            oneof: "response"
        },
        {
            no: 8,
            name: "after_agent_response",
            kind: "message",
            T: AfterAgentResponseRequestResponse,
            oneof: "response"
        },
        {
            no: 9,
            name: "after_agent_thought",
            kind: "message",
            T: AfterAgentThoughtRequestResponse,
            oneof: "response"
        },
        {
            no: 11,
            name: "stop",
            kind: "message",
            T: StopRequestResponse,
            oneof: "response"
        }
    ]);
export { AbortArgs, AbortResult, ExecClientControlMessage, ExecClientHeartbeat, ExecClientMessage, ExecClientStreamClose, ExecClientThrow, ExecServerMessage, ExecuteHookArgs, ExecuteHookRequest, ExecuteHookResponse, ExecuteHookResult, SpanContext };
