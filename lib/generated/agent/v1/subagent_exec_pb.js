import { Message, proto3 } from "@bufbuild/protobuf";
import { ApiKeyCredentials, AzureCredentials, BedrockCredentials, RequestedModel_ModelParameterValue, SubagentBackgroundReason, SubagentExecutionEnvironment } from "./agent_pb.js";
import { SelectedContext } from "./selected_context_pb.js";
import { TaskMode } from "./subagents_pb.js";
var ForceBackgroundSubagentStatus;
(function(ForceBackgroundSubagentStatus2) {
    ForceBackgroundSubagentStatus2[ForceBackgroundSubagentStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    ForceBackgroundSubagentStatus2[ForceBackgroundSubagentStatus2["ACCEPTED"] = 1] = "ACCEPTED";
    ForceBackgroundSubagentStatus2[ForceBackgroundSubagentStatus2["NOT_FOUND"] = 2] = "NOT_FOUND";
})(ForceBackgroundSubagentStatus || (ForceBackgroundSubagentStatus = {}));
proto3.util.setEnumType(ForceBackgroundSubagentStatus, "agent.v1.ForceBackgroundSubagentStatus", [
    {
        no: 0,
        name: "FORCE_BACKGROUND_SUBAGENT_STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "FORCE_BACKGROUND_SUBAGENT_STATUS_ACCEPTED"
    },
    {
        no: 2,
        name: "FORCE_BACKGROUND_SUBAGENT_STATUS_NOT_FOUND"
    }
]);
var SubagentArgs$Runtime = (()=>class _SubagentArgs extends Message {
        constructor(data){
            super();
            this.toolCallId = "";
            this.subagentType = "";
            this.modelId = "";
            this.prompt = "";
            this.readonly = false;
            this.credentials = {
                case: void 0
            };
            this.mode = TaskMode.UNSPECIFIED;
            this.environment = SubagentExecutionEnvironment.UNSPECIFIED;
            this.modelParameters = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _SubagentArgs().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _SubagentArgs().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _SubagentArgs().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubagentArgs, a, b2);
        }
    })();
var SubagentArgs = SubagentArgs$Runtime;
SubagentArgs.runtime = proto3;
SubagentArgs.typeName = "agent.v1.SubagentArgs";
SubagentArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "subagent_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "model_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "readonly",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "resume_agent_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "run_in_background",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 8,
            name: "continuation_config",
            kind: "message",
            T: ClientContinuationConfig
        },
        {
            no: 9,
            name: "parent_conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "api_key_credentials",
            kind: "message",
            T: ApiKeyCredentials,
            oneof: "credentials"
        },
        {
            no: 11,
            name: "azure_credentials",
            kind: "message",
            T: AzureCredentials,
            oneof: "credentials"
        },
        {
            no: 12,
            name: "bedrock_credentials",
            kind: "message",
            T: BedrockCredentials,
            oneof: "credentials"
        },
        {
            no: 13,
            name: "interrupt",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 14,
            name: "mode",
            kind: "enum",
            T: proto3.getEnumType(TaskMode)
        },
        {
            no: 15,
            name: "fork_agent_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 16,
            name: "root_parent_conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 17,
            name: "selected_context",
            kind: "message",
            T: SelectedContext,
            opt: true
        },
        {
            no: 18,
            name: "direct_meta_parent_child_subagent",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 19,
            name: "environment",
            kind: "enum",
            T: proto3.getEnumType(SubagentExecutionEnvironment)
        },
        {
            no: 20,
            name: "cloud_base_branch",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 21,
            name: "model_parameters",
            kind: "message",
            T: RequestedModel_ModelParameterValue,
            repeated: true
        }
    ]);
var ClientContinuationConfig$Runtime = (()=>class _ClientContinuationConfig extends Message {
        constructor(data){
            super();
            this.idleThreshold = 0;
            this.maxLoops = 0;
            this.nudgeMessage = "";
            this.escapeMessageTemplate = "";
            this.collectBackgroundChildren = false;
            this.childrenCompletedMessageTemplate = "";
            this.continuationRoundDelayMs = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ClientContinuationConfig().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ClientContinuationConfig().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ClientContinuationConfig().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ClientContinuationConfig, a, b2);
        }
    })();
var ClientContinuationConfig = ClientContinuationConfig$Runtime;
ClientContinuationConfig.runtime = proto3;
ClientContinuationConfig.typeName = "agent.v1.ClientContinuationConfig";
ClientContinuationConfig.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "idle_threshold",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "max_loops",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "nudge_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "escape_message_template",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "collect_background_children",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "children_completed_message_template",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "continuation_round_delay_ms",
            kind: "scalar",
            T: 5
        }
    ]);
var SubagentResult$Runtime = (()=>class _SubagentResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _SubagentResult().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _SubagentResult().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _SubagentResult().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubagentResult, a, b2);
        }
    })();
var SubagentResult = SubagentResult$Runtime;
SubagentResult.runtime = proto3;
SubagentResult.typeName = "agent.v1.SubagentResult";
SubagentResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: SubagentSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: SubagentError,
            oneof: "result"
        }
    ]);
var SubagentAwaitArgs$Runtime = (()=>class _SubagentAwaitArgs extends Message {
        constructor(data){
            super();
            this.agentId = "";
            this.timeoutMs = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _SubagentAwaitArgs().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _SubagentAwaitArgs().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _SubagentAwaitArgs().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubagentAwaitArgs, a, b2);
        }
    })();
var SubagentAwaitArgs = SubagentAwaitArgs$Runtime;
SubagentAwaitArgs.runtime = proto3;
SubagentAwaitArgs.typeName = "agent.v1.SubagentAwaitArgs";
SubagentAwaitArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "timeout_ms",
            kind: "scalar",
            T: 13
        }
    ]);
var SubagentAwaitResult$Runtime = (()=>class _SubagentAwaitResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _SubagentAwaitResult().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _SubagentAwaitResult().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _SubagentAwaitResult().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubagentAwaitResult, a, b2);
        }
    })();
var SubagentAwaitResult = SubagentAwaitResult$Runtime;
SubagentAwaitResult.runtime = proto3;
SubagentAwaitResult.typeName = "agent.v1.SubagentAwaitResult";
SubagentAwaitResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "complete",
            kind: "message",
            T: SubagentAwaitComplete,
            oneof: "result"
        },
        {
            no: 2,
            name: "still_running",
            kind: "message",
            T: SubagentAwaitStillRunning,
            oneof: "result"
        },
        {
            no: 3,
            name: "not_found",
            kind: "message",
            T: SubagentAwaitNotFound,
            oneof: "result"
        },
        {
            no: 4,
            name: "error",
            kind: "message",
            T: SubagentAwaitError,
            oneof: "result"
        }
    ]);
var SubagentAwaitComplete$Runtime = (()=>class _SubagentAwaitComplete extends Message {
        constructor(data){
            super();
            this.agentId = "";
            this.toolCallCount = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _SubagentAwaitComplete().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _SubagentAwaitComplete().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _SubagentAwaitComplete().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubagentAwaitComplete, a, b2);
        }
    })();
var SubagentAwaitComplete = SubagentAwaitComplete$Runtime;
SubagentAwaitComplete.runtime = proto3;
SubagentAwaitComplete.typeName = "agent.v1.SubagentAwaitComplete";
SubagentAwaitComplete.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "transcript_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "tool_call_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "final_message",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var SubagentAwaitStillRunning$Runtime = (()=>class _SubagentAwaitStillRunning extends Message {
        constructor(data){
            super();
            this.agentId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _SubagentAwaitStillRunning().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _SubagentAwaitStillRunning().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _SubagentAwaitStillRunning().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubagentAwaitStillRunning, a, b2);
        }
    })();
var SubagentAwaitStillRunning = SubagentAwaitStillRunning$Runtime;
SubagentAwaitStillRunning.runtime = proto3;
SubagentAwaitStillRunning.typeName = "agent.v1.SubagentAwaitStillRunning";
SubagentAwaitStillRunning.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "transcript_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var SubagentAwaitNotFound$Runtime = (()=>class _SubagentAwaitNotFound extends Message {
        constructor(data){
            super();
            this.agentId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _SubagentAwaitNotFound().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _SubagentAwaitNotFound().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _SubagentAwaitNotFound().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubagentAwaitNotFound, a, b2);
        }
    })();
var SubagentAwaitNotFound = SubagentAwaitNotFound$Runtime;
SubagentAwaitNotFound.runtime = proto3;
SubagentAwaitNotFound.typeName = "agent.v1.SubagentAwaitNotFound";
SubagentAwaitNotFound.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        }
    ]);
var SubagentAwaitError$Runtime = (()=>class _SubagentAwaitError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _SubagentAwaitError().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _SubagentAwaitError().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _SubagentAwaitError().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubagentAwaitError, a, b2);
        }
    })();
var SubagentAwaitError = SubagentAwaitError$Runtime;
SubagentAwaitError.runtime = proto3;
SubagentAwaitError.typeName = "agent.v1.SubagentAwaitError";
SubagentAwaitError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var SubagentSuccess$Runtime = (()=>class _SubagentSuccess extends Message {
        constructor(data){
            super();
            this.agentId = "";
            this.toolCallCount = 0;
            this.backgroundReason = SubagentBackgroundReason.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _SubagentSuccess().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _SubagentSuccess().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _SubagentSuccess().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubagentSuccess, a, b2);
        }
    })();
var SubagentSuccess = SubagentSuccess$Runtime;
SubagentSuccess.runtime = proto3;
SubagentSuccess.typeName = "agent.v1.SubagentSuccess";
SubagentSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "final_message",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "tool_call_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "background_reason",
            kind: "enum",
            T: proto3.getEnumType(SubagentBackgroundReason)
        },
        {
            no: 5,
            name: "transcript_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var SubagentError$Runtime = (()=>class _SubagentError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _SubagentError().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _SubagentError().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _SubagentError().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubagentError, a, b2);
        }
    })();
var SubagentError = SubagentError$Runtime;
SubagentError.runtime = proto3;
SubagentError.typeName = "agent.v1.SubagentError";
SubagentError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var ForceBackgroundSubagentArgs$Runtime = (()=>class _ForceBackgroundSubagentArgs extends Message {
        constructor(data){
            super();
            this.toolCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ForceBackgroundSubagentArgs().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ForceBackgroundSubagentArgs().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ForceBackgroundSubagentArgs().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ForceBackgroundSubagentArgs, a, b2);
        }
    })();
var ForceBackgroundSubagentArgs = ForceBackgroundSubagentArgs$Runtime;
ForceBackgroundSubagentArgs.runtime = proto3;
ForceBackgroundSubagentArgs.typeName = "agent.v1.ForceBackgroundSubagentArgs";
ForceBackgroundSubagentArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
var ForceBackgroundSubagentResult$Runtime = (()=>class _ForceBackgroundSubagentResult extends Message {
        constructor(data){
            super();
            this.status = ForceBackgroundSubagentStatus.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ForceBackgroundSubagentResult().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ForceBackgroundSubagentResult().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ForceBackgroundSubagentResult().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ForceBackgroundSubagentResult, a, b2);
        }
    })();
var ForceBackgroundSubagentResult = ForceBackgroundSubagentResult$Runtime;
ForceBackgroundSubagentResult.runtime = proto3;
ForceBackgroundSubagentResult.typeName = "agent.v1.ForceBackgroundSubagentResult";
ForceBackgroundSubagentResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(ForceBackgroundSubagentStatus)
        }
    ]);
export { ClientContinuationConfig, ForceBackgroundSubagentArgs, ForceBackgroundSubagentResult, ForceBackgroundSubagentStatus, SubagentArgs, SubagentAwaitArgs, SubagentAwaitComplete, SubagentAwaitError, SubagentAwaitNotFound, SubagentAwaitResult, SubagentAwaitStillRunning, SubagentError, SubagentResult, SubagentSuccess };
