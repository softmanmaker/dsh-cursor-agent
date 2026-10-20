import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { AgentRunRequest, ClientLlmGatewayCredential, ConversationAction, ConversationStateStructure, InteractionQuery, InteractionResponse, InteractionUpdate, ModelDetails2, PreFetchedBlob, PromptContextUsageSnapshot, RequestedModel, SubagentModelOverride } from "./agent_pb.js";
import { McpFileSystemOptions, McpTools } from "./mcp_pb.js";
import { ExecClientControlMessage, ExecClientMessage, ExecServerMessage } from "./exec_pb.js";
import { KvClientMessage, KvServerMessage } from "./kv_pb.js";
var LocalPromptQualityInvocationStatus;
(function(LocalPromptQualityInvocationStatus2) {
    LocalPromptQualityInvocationStatus2[LocalPromptQualityInvocationStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    LocalPromptQualityInvocationStatus2[LocalPromptQualityInvocationStatus2["SUCCESS"] = 1] = "SUCCESS";
    LocalPromptQualityInvocationStatus2[LocalPromptQualityInvocationStatus2["ERRORED"] = 2] = "ERRORED";
    LocalPromptQualityInvocationStatus2[LocalPromptQualityInvocationStatus2["ABORTED"] = 3] = "ABORTED";
})(LocalPromptQualityInvocationStatus || (LocalPromptQualityInvocationStatus = {}));
proto3.util.setEnumType(LocalPromptQualityInvocationStatus, "agent.v1.LocalPromptQualityInvocationStatus", [
    {
        no: 0,
        name: "LOCAL_PROMPT_QUALITY_INVOCATION_STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "LOCAL_PROMPT_QUALITY_INVOCATION_STATUS_SUCCESS"
    },
    {
        no: 2,
        name: "LOCAL_PROMPT_QUALITY_INVOCATION_STATUS_ERRORED"
    },
    {
        no: 3,
        name: "LOCAL_PROMPT_QUALITY_INVOCATION_STATUS_ABORTED"
    }
]);
var ClientHeartbeat$Runtime = (()=>class _ClientHeartbeat extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ClientHeartbeat().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ClientHeartbeat().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ClientHeartbeat().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ClientHeartbeat, a, b2);
        }
    })();
var ClientHeartbeat = ClientHeartbeat$Runtime;
ClientHeartbeat.runtime = proto3;
ClientHeartbeat.typeName = "agent.v1.ClientHeartbeat";
ClientHeartbeat.fields = proto3.util.newFieldList(()=>[]);
var PrewarmRequest$Runtime = (()=>class _PrewarmRequest extends Message {
        constructor(data){
            super();
            this.selectedSubagentModels = [];
            this.selectedSubagentModelDetails = [];
            this.preFetchedBlobs = [];
            this.subagentModelOverrides = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PrewarmRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PrewarmRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PrewarmRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PrewarmRequest, a, b2);
        }
    })();
var PrewarmRequest = PrewarmRequest$Runtime;
PrewarmRequest.runtime = proto3;
PrewarmRequest.typeName = "agent.v1.PrewarmRequest";
PrewarmRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "model_details",
            kind: "message",
            T: ModelDetails2
        },
        {
            no: 9,
            name: "requested_model",
            kind: "message",
            T: RequestedModel,
            opt: true
        },
        {
            no: 2,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "conversation_state",
            kind: "message",
            T: ConversationStateStructure
        },
        {
            no: 4,
            name: "mcp_tools",
            kind: "message",
            T: McpTools
        },
        {
            no: 5,
            name: "mcp_file_system_options",
            kind: "message",
            T: McpFileSystemOptions,
            opt: true
        },
        {
            no: 6,
            name: "best_of_n_group_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "try_use_best_of_n_promotion",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 8,
            name: "custom_system_prompt",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "suggest_next_prompt",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 11,
            name: "subagent_type_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 12,
            name: "exclude_workspace_context",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 13,
            name: "harness",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 14,
            name: "selected_subagent_models",
            kind: "message",
            T: RequestedModel,
            repeated: true
        },
        {
            no: 15,
            name: "selected_subagent_model_details",
            kind: "message",
            T: ModelDetails2,
            repeated: true
        },
        {
            no: 16,
            name: "conversation_group_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 17,
            name: "pre_fetched_blobs",
            kind: "message",
            T: PreFetchedBlob,
            repeated: true
        },
        {
            no: 18,
            name: "client_supports_inline_images",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 19,
            name: "subagent_model_overrides",
            kind: "message",
            T: SubagentModelOverride,
            repeated: true
        },
        {
            no: 20,
            name: "can_create_cloud_subagents",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 21,
            name: "suppress_subagent_progress_update_tool",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 22,
            name: "client_supports_send_to_user",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 23,
            name: "computer_use_coordinate_mode",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 24,
            name: "agent_session_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 25,
            name: "client_supports_prompt_context_usage_rpc",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 26,
            name: "client_supports_routed_model_update",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 27,
            name: "client_llm_gateway_credential",
            kind: "message",
            T: ClientLlmGatewayCredential,
            opt: true
        }
    ]);
var ExecServerAbort$Runtime = (()=>class _ExecServerAbort extends Message {
        constructor(data){
            super();
            this.id = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ExecServerAbort().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ExecServerAbort().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ExecServerAbort().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ExecServerAbort, a, b2);
        }
    })();
var ExecServerAbort = ExecServerAbort$Runtime;
ExecServerAbort.runtime = proto3;
ExecServerAbort.typeName = "agent.v1.ExecServerAbort";
ExecServerAbort.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 13
        }
    ]);
var ExecServerControlMessage$Runtime = (()=>class _ExecServerControlMessage extends Message {
        constructor(data){
            super();
            this.message = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ExecServerControlMessage().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ExecServerControlMessage().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ExecServerControlMessage().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ExecServerControlMessage, a, b2);
        }
    })();
var ExecServerControlMessage = ExecServerControlMessage$Runtime;
ExecServerControlMessage.runtime = proto3;
ExecServerControlMessage.typeName = "agent.v1.ExecServerControlMessage";
ExecServerControlMessage.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "abort",
            kind: "message",
            T: ExecServerAbort,
            oneof: "message"
        }
    ]);
var AgentClientMessage$Runtime = (()=>class _AgentClientMessage extends Message {
        constructor(data){
            super();
            this.message = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _AgentClientMessage().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _AgentClientMessage().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _AgentClientMessage().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AgentClientMessage, a, b2);
        }
    })();
var AgentClientMessage = AgentClientMessage$Runtime;
AgentClientMessage.runtime = proto3;
AgentClientMessage.typeName = "agent.v1.AgentClientMessage";
AgentClientMessage.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "run_request",
            kind: "message",
            T: AgentRunRequest,
            oneof: "message"
        },
        {
            no: 2,
            name: "exec_client_message",
            kind: "message",
            T: ExecClientMessage,
            oneof: "message"
        },
        {
            no: 5,
            name: "exec_client_control_message",
            kind: "message",
            T: ExecClientControlMessage,
            oneof: "message"
        },
        {
            no: 3,
            name: "kv_client_message",
            kind: "message",
            T: KvClientMessage,
            oneof: "message"
        },
        {
            no: 4,
            name: "conversation_action",
            kind: "message",
            T: ConversationAction,
            oneof: "message"
        },
        {
            no: 6,
            name: "interaction_response",
            kind: "message",
            T: InteractionResponse,
            oneof: "message"
        },
        {
            no: 7,
            name: "client_heartbeat",
            kind: "message",
            T: ClientHeartbeat,
            oneof: "message"
        },
        {
            no: 8,
            name: "prewarm_request",
            kind: "message",
            T: PrewarmRequest,
            oneof: "message"
        }
    ]);
var TtftBreakdown$Runtime = (()=>class _TtftBreakdown extends Message {
        constructor(data){
            super();
            this.serverFirstTokenMs = 0;
            this.preStreamSetupMs = 0;
            this.waitForFirstEventMs = 0;
            this.slowPoolWaitMs = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _TtftBreakdown().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _TtftBreakdown().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _TtftBreakdown().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_TtftBreakdown, a, b2);
        }
    })();
var TtftBreakdown = TtftBreakdown$Runtime;
TtftBreakdown.runtime = proto3;
TtftBreakdown.typeName = "agent.v1.TtftBreakdown";
TtftBreakdown.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "server_first_token_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 2,
            name: "pre_stream_setup_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 3,
            name: "wait_for_first_event_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 4,
            name: "provider_ttft_ms",
            kind: "scalar",
            T: 1,
            opt: true
        },
        {
            no: 5,
            name: "slow_pool_wait_ms",
            kind: "scalar",
            T: 1
        }
    ]);
var AgentServerMessage$Runtime = (()=>class _AgentServerMessage extends Message {
        constructor(data){
            super();
            this.message = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _AgentServerMessage().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _AgentServerMessage().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _AgentServerMessage().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AgentServerMessage, a, b2);
        }
    })();
var AgentServerMessage = AgentServerMessage$Runtime;
AgentServerMessage.runtime = proto3;
AgentServerMessage.typeName = "agent.v1.AgentServerMessage";
AgentServerMessage.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "interaction_update",
            kind: "message",
            T: InteractionUpdate,
            oneof: "message"
        },
        {
            no: 2,
            name: "exec_server_message",
            kind: "message",
            T: ExecServerMessage,
            oneof: "message"
        },
        {
            no: 5,
            name: "exec_server_control_message",
            kind: "message",
            T: ExecServerControlMessage,
            oneof: "message"
        },
        {
            no: 3,
            name: "conversation_checkpoint_update",
            kind: "message",
            T: ConversationStateStructure,
            oneof: "message"
        },
        {
            no: 4,
            name: "kv_server_message",
            kind: "message",
            T: KvServerMessage,
            oneof: "message"
        },
        {
            no: 7,
            name: "interaction_query",
            kind: "message",
            T: InteractionQuery,
            oneof: "message"
        },
        {
            no: 8,
            name: "ttft_breakdown",
            kind: "message",
            T: TtftBreakdown
        }
    ]);
var NameAgentRequest$Runtime = (()=>class _NameAgentRequest extends Message {
        constructor(data){
            super();
            this.userMessage = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _NameAgentRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _NameAgentRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _NameAgentRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_NameAgentRequest, a, b2);
        }
    })();
var NameAgentRequest = NameAgentRequest$Runtime;
NameAgentRequest.runtime = proto3;
NameAgentRequest.typeName = "agent.v1.NameAgentRequest";
NameAgentRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "user_message",
            kind: "scalar",
            T: 9
        }
    ]);
var NameAgentResponse$Runtime = (()=>class _NameAgentResponse extends Message {
        constructor(data){
            super();
            this.name = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _NameAgentResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _NameAgentResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _NameAgentResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_NameAgentResponse, a, b2);
        }
    })();
var NameAgentResponse = NameAgentResponse$Runtime;
NameAgentResponse.runtime = proto3;
NameAgentResponse.typeName = "agent.v1.NameAgentResponse";
NameAgentResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]);
var UpdateConversationMetadataRequest$Runtime = (()=>class _UpdateConversationMetadataRequest extends Message {
        constructor(data){
            super();
            this.conversationId = "";
            this.workspacePaths = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _UpdateConversationMetadataRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _UpdateConversationMetadataRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _UpdateConversationMetadataRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UpdateConversationMetadataRequest, a, b2);
        }
    })();
var UpdateConversationMetadataRequest = UpdateConversationMetadataRequest$Runtime;
UpdateConversationMetadataRequest.runtime = proto3;
UpdateConversationMetadataRequest.typeName = "agent.v1.UpdateConversationMetadataRequest";
UpdateConversationMetadataRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "only_set_name_if_empty",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 4,
            name: "workspace_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var UpdateConversationMetadataResponse$Runtime = (()=>class _UpdateConversationMetadataResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _UpdateConversationMetadataResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _UpdateConversationMetadataResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _UpdateConversationMetadataResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UpdateConversationMetadataResponse, a, b2);
        }
    })();
var UpdateConversationMetadataResponse = UpdateConversationMetadataResponse$Runtime;
UpdateConversationMetadataResponse.runtime = proto3;
UpdateConversationMetadataResponse.typeName = "agent.v1.UpdateConversationMetadataResponse";
UpdateConversationMetadataResponse.fields = proto3.util.newFieldList(()=>[]);
var GetPromptContextUsageRequest$Runtime = (()=>class _GetPromptContextUsageRequest extends Message {
        constructor(data){
            super();
            this.conversationId = "";
            this.snapshotBlobId = new Uint8Array(0);
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _GetPromptContextUsageRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _GetPromptContextUsageRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _GetPromptContextUsageRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetPromptContextUsageRequest, a, b2);
        }
    })();
var GetPromptContextUsageRequest = GetPromptContextUsageRequest$Runtime;
GetPromptContextUsageRequest.runtime = proto3;
GetPromptContextUsageRequest.typeName = "agent.v1.GetPromptContextUsageRequest";
GetPromptContextUsageRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "snapshot_blob_id",
            kind: "scalar",
            T: 12
        }
    ]);
var GetPromptContextUsageResponse$Runtime = (()=>class _GetPromptContextUsageResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _GetPromptContextUsageResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _GetPromptContextUsageResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _GetPromptContextUsageResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetPromptContextUsageResponse, a, b2);
        }
    })();
var GetPromptContextUsageResponse = GetPromptContextUsageResponse$Runtime;
GetPromptContextUsageResponse.runtime = proto3;
GetPromptContextUsageResponse.typeName = "agent.v1.GetPromptContextUsageResponse";
GetPromptContextUsageResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "snapshot",
            kind: "message",
            T: PromptContextUsageSnapshot
        }
    ]);
var CreateTranscriptOverviewRequest$Runtime = (()=>class _CreateTranscriptOverviewRequest extends Message {
        constructor(data){
            super();
            this.formattedConversation = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _CreateTranscriptOverviewRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _CreateTranscriptOverviewRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _CreateTranscriptOverviewRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CreateTranscriptOverviewRequest, a, b2);
        }
    })();
var CreateTranscriptOverviewRequest = CreateTranscriptOverviewRequest$Runtime;
CreateTranscriptOverviewRequest.runtime = proto3;
CreateTranscriptOverviewRequest.typeName = "agent.v1.CreateTranscriptOverviewRequest";
CreateTranscriptOverviewRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "formatted_conversation",
            kind: "scalar",
            T: 9
        }
    ]);
var CreateTranscriptOverviewResponse$Runtime = (()=>class _CreateTranscriptOverviewResponse extends Message {
        constructor(data){
            super();
            this.overview = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _CreateTranscriptOverviewResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _CreateTranscriptOverviewResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _CreateTranscriptOverviewResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CreateTranscriptOverviewResponse, a, b2);
        }
    })();
var CreateTranscriptOverviewResponse = CreateTranscriptOverviewResponse$Runtime;
CreateTranscriptOverviewResponse.runtime = proto3;
CreateTranscriptOverviewResponse.typeName = "agent.v1.CreateTranscriptOverviewResponse";
CreateTranscriptOverviewResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "overview",
            kind: "scalar",
            T: 9
        }
    ]);
var GetUsableModelsRequest$Runtime = (()=>class _GetUsableModelsRequest extends Message {
        constructor(data){
            super();
            this.customModelIds = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _GetUsableModelsRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _GetUsableModelsRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _GetUsableModelsRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetUsableModelsRequest, a, b2);
        }
    })();
var GetUsableModelsRequest = GetUsableModelsRequest$Runtime;
GetUsableModelsRequest.runtime = proto3;
GetUsableModelsRequest.typeName = "agent.v1.GetUsableModelsRequest";
GetUsableModelsRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "custom_model_ids",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var GetUsableModelsResponse$Runtime = (()=>class _GetUsableModelsResponse extends Message {
        constructor(data){
            super();
            this.models = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _GetUsableModelsResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _GetUsableModelsResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _GetUsableModelsResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetUsableModelsResponse, a, b2);
        }
    })();
var GetUsableModelsResponse = GetUsableModelsResponse$Runtime;
GetUsableModelsResponse.runtime = proto3;
GetUsableModelsResponse.typeName = "agent.v1.GetUsableModelsResponse";
GetUsableModelsResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "models",
            kind: "message",
            T: ModelDetails2,
            repeated: true
        }
    ]);
var GetDefaultModelForCliRequest$Runtime = (()=>class _GetDefaultModelForCliRequest extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _GetDefaultModelForCliRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _GetDefaultModelForCliRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _GetDefaultModelForCliRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetDefaultModelForCliRequest, a, b2);
        }
    })();
var GetDefaultModelForCliRequest = GetDefaultModelForCliRequest$Runtime;
GetDefaultModelForCliRequest.runtime = proto3;
GetDefaultModelForCliRequest.typeName = "agent.v1.GetDefaultModelForCliRequest";
GetDefaultModelForCliRequest.fields = proto3.util.newFieldList(()=>[]);
var GetDefaultModelForCliResponse$Runtime = (()=>class _GetDefaultModelForCliResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _GetDefaultModelForCliResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _GetDefaultModelForCliResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _GetDefaultModelForCliResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetDefaultModelForCliResponse, a, b2);
        }
    })();
var GetDefaultModelForCliResponse = GetDefaultModelForCliResponse$Runtime;
GetDefaultModelForCliResponse.runtime = proto3;
GetDefaultModelForCliResponse.typeName = "agent.v1.GetDefaultModelForCliResponse";
GetDefaultModelForCliResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "model",
            kind: "message",
            T: ModelDetails2
        }
    ]);
var GetAllowedModelIntentsRequest$Runtime = (()=>class _GetAllowedModelIntentsRequest extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _GetAllowedModelIntentsRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _GetAllowedModelIntentsRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _GetAllowedModelIntentsRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetAllowedModelIntentsRequest, a, b2);
        }
    })();
var GetAllowedModelIntentsRequest = GetAllowedModelIntentsRequest$Runtime;
GetAllowedModelIntentsRequest.runtime = proto3;
GetAllowedModelIntentsRequest.typeName = "agent.v1.GetAllowedModelIntentsRequest";
GetAllowedModelIntentsRequest.fields = proto3.util.newFieldList(()=>[]);
var GetAllowedModelIntentsResponse$Runtime = (()=>class _GetAllowedModelIntentsResponse extends Message {
        constructor(data){
            super();
            this.modelIntents = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _GetAllowedModelIntentsResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _GetAllowedModelIntentsResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _GetAllowedModelIntentsResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetAllowedModelIntentsResponse, a, b2);
        }
    })();
var GetAllowedModelIntentsResponse = GetAllowedModelIntentsResponse$Runtime;
GetAllowedModelIntentsResponse.runtime = proto3;
GetAllowedModelIntentsResponse.typeName = "agent.v1.GetAllowedModelIntentsResponse";
GetAllowedModelIntentsResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "model_intents",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var IdeEditorsStateFile$Runtime = (()=>class _IdeEditorsStateFile extends Message {
        constructor(data){
            super();
            this.relativePath = "";
            this.absolutePath = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _IdeEditorsStateFile().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _IdeEditorsStateFile().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _IdeEditorsStateFile().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_IdeEditorsStateFile, a, b2);
        }
    })();
var IdeEditorsStateFile = IdeEditorsStateFile$Runtime;
IdeEditorsStateFile.runtime = proto3;
IdeEditorsStateFile.typeName = "agent.v1.IdeEditorsStateFile";
IdeEditorsStateFile.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "absolute_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "is_currently_focused",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 4,
            name: "current_line_number",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 5,
            name: "current_line_text",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "line_count",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
var IdeEditorsStateLite$Runtime = (()=>class _IdeEditorsStateLite extends Message {
        constructor(data){
            super();
            this.recentlyViewedFiles = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _IdeEditorsStateLite().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _IdeEditorsStateLite().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _IdeEditorsStateLite().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_IdeEditorsStateLite, a, b2);
        }
    })();
var IdeEditorsStateLite = IdeEditorsStateLite$Runtime;
IdeEditorsStateLite.runtime = proto3;
IdeEditorsStateLite.typeName = "agent.v1.IdeEditorsStateLite";
IdeEditorsStateLite.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "recently_viewed_files",
            kind: "message",
            T: IdeEditorsStateFile,
            repeated: true
        }
    ]);
var BlobEntry$Runtime = (()=>class _BlobEntry extends Message {
        constructor(data){
            super();
            this.id = new Uint8Array(0);
            this.value = new Uint8Array(0);
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _BlobEntry().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _BlobEntry().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _BlobEntry().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_BlobEntry, a, b2);
        }
    })();
var BlobEntry = BlobEntry$Runtime;
BlobEntry.runtime = proto3;
BlobEntry.typeName = "agent.v1.BlobEntry";
BlobEntry.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 12
        }
    ]);
var UploadConversationBlobsRequest$Runtime = (()=>class _UploadConversationBlobsRequest extends Message {
        constructor(data){
            super();
            this.conversationId = "";
            this.blobs = [];
            this.chunkIndex = 0;
            this.totalChunks = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _UploadConversationBlobsRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _UploadConversationBlobsRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _UploadConversationBlobsRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UploadConversationBlobsRequest, a, b2);
        }
    })();
var UploadConversationBlobsRequest = UploadConversationBlobsRequest$Runtime;
UploadConversationBlobsRequest.runtime = proto3;
UploadConversationBlobsRequest.typeName = "agent.v1.UploadConversationBlobsRequest";
UploadConversationBlobsRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "blobs",
            kind: "message",
            T: BlobEntry,
            repeated: true
        },
        {
            no: 3,
            name: "chunk_index",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "total_chunks",
            kind: "scalar",
            T: 5
        }
    ]);
var UploadConversationBlobsResponse$Runtime = (()=>class _UploadConversationBlobsResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _UploadConversationBlobsResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _UploadConversationBlobsResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _UploadConversationBlobsResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UploadConversationBlobsResponse, a, b2);
        }
    })();
var UploadConversationBlobsResponse = UploadConversationBlobsResponse$Runtime;
UploadConversationBlobsResponse.runtime = proto3;
UploadConversationBlobsResponse.typeName = "agent.v1.UploadConversationBlobsResponse";
UploadConversationBlobsResponse.fields = proto3.util.newFieldList(()=>[]);
var LocalPromptQualityInvocation$Runtime = (()=>class _LocalPromptQualityInvocation extends Message {
        constructor(data){
            super();
            this.invocationId = "";
            this.attemptRequestId = "";
            this.attempt = 0;
            this.startedAt = "";
            this.completedAt = "";
            this.modelId = "";
            this.providerName = "";
            this.status = LocalPromptQualityInvocationStatus.UNSPECIFIED;
            this.messages = [];
            this.responseMessages = [];
            this.toolsJson = "";
            this.promptTokens = protoInt64.zero;
            this.completionTokens = protoInt64.zero;
            this.totalTokens = protoInt64.zero;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _LocalPromptQualityInvocation().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _LocalPromptQualityInvocation().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _LocalPromptQualityInvocation().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_LocalPromptQualityInvocation, a, b2);
        }
    })();
var LocalPromptQualityInvocation = LocalPromptQualityInvocation$Runtime;
LocalPromptQualityInvocation.runtime = proto3;
LocalPromptQualityInvocation.typeName = "agent.v1.LocalPromptQualityInvocation";
LocalPromptQualityInvocation.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "invocation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "attempt_request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "attempt",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "started_at",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "completed_at",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "model_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "provider_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(LocalPromptQualityInvocationStatus)
        },
        {
            no: 9,
            name: "messages",
            kind: "scalar",
            T: 12,
            repeated: true
        },
        {
            no: 10,
            name: "response_messages",
            kind: "scalar",
            T: 12,
            repeated: true
        },
        {
            no: 11,
            name: "tools_json",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "prompt_tokens",
            kind: "scalar",
            T: 3
        },
        {
            no: 13,
            name: "completion_tokens",
            kind: "scalar",
            T: 3
        },
        {
            no: 14,
            name: "total_tokens",
            kind: "scalar",
            T: 3
        },
        {
            no: 15,
            name: "token_limit",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 16,
            name: "error_message",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var UploadLocalAgentRunToPromptQualityRequest$Runtime = (()=>class _UploadLocalAgentRunToPromptQualityRequest extends Message {
        constructor(data){
            super();
            this.schemaVersion = 0;
            this.generationUuid = "";
            this.conversationId = "";
            this.payloadDigest = "";
            this.invocations = [];
            this.terminalStatus = LocalPromptQualityInvocationStatus.UNSPECIFIED;
            this.createdAt = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _UploadLocalAgentRunToPromptQualityRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _UploadLocalAgentRunToPromptQualityRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _UploadLocalAgentRunToPromptQualityRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UploadLocalAgentRunToPromptQualityRequest, a, b2);
        }
    })();
var UploadLocalAgentRunToPromptQualityRequest = UploadLocalAgentRunToPromptQualityRequest$Runtime;
UploadLocalAgentRunToPromptQualityRequest.runtime = proto3;
UploadLocalAgentRunToPromptQualityRequest.typeName = "agent.v1.UploadLocalAgentRunToPromptQualityRequest";
UploadLocalAgentRunToPromptQualityRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "schema_version",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "generation_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "payload_digest",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "invocations",
            kind: "message",
            T: LocalPromptQualityInvocation,
            repeated: true
        },
        {
            no: 6,
            name: "terminal_status",
            kind: "enum",
            T: proto3.getEnumType(LocalPromptQualityInvocationStatus)
        },
        {
            no: 7,
            name: "created_at",
            kind: "scalar",
            T: 9
        }
    ]);
var UploadLocalAgentRunToPromptQualityResponse$Runtime = (()=>class _UploadLocalAgentRunToPromptQualityResponse extends Message {
        constructor(data){
            super();
            this.requestId = "";
            this.primaryInvocationId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _UploadLocalAgentRunToPromptQualityResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _UploadLocalAgentRunToPromptQualityResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _UploadLocalAgentRunToPromptQualityResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UploadLocalAgentRunToPromptQualityResponse, a, b2);
        }
    })();
var UploadLocalAgentRunToPromptQualityResponse = UploadLocalAgentRunToPromptQualityResponse$Runtime;
UploadLocalAgentRunToPromptQualityResponse.runtime = proto3;
UploadLocalAgentRunToPromptQualityResponse.typeName = "agent.v1.UploadLocalAgentRunToPromptQualityResponse";
UploadLocalAgentRunToPromptQualityResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "primary_invocation_id",
            kind: "scalar",
            T: 9
        }
    ]);
var GetSignedUrlForAttachedMediaRequest$Runtime = (()=>class _GetSignedUrlForAttachedMediaRequest extends Message {
        constructor(data){
            super();
            this.conversationId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _GetSignedUrlForAttachedMediaRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _GetSignedUrlForAttachedMediaRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _GetSignedUrlForAttachedMediaRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetSignedUrlForAttachedMediaRequest, a, b2);
        }
    })();
var GetSignedUrlForAttachedMediaRequest = GetSignedUrlForAttachedMediaRequest$Runtime;
GetSignedUrlForAttachedMediaRequest.runtime = proto3;
GetSignedUrlForAttachedMediaRequest.typeName = "agent.v1.GetSignedUrlForAttachedMediaRequest";
GetSignedUrlForAttachedMediaRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 3,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 1,
            name: "key",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "mime_type",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "content_length_bytes",
            kind: "scalar",
            T: 3,
            opt: true
        }
    ]);
var GetSignedUrlForAttachedMediaResponse$Runtime = (()=>class _GetSignedUrlForAttachedMediaResponse extends Message {
        constructor(data){
            super();
            this.key = "";
            this.postUrl = "";
            this.getUrl = "";
            this.expiresAtUnixMs = protoInt64.zero;
            this.refreshAfterUnixMs = protoInt64.zero;
            this.postFields = {};
            this.putUrl = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _GetSignedUrlForAttachedMediaResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _GetSignedUrlForAttachedMediaResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _GetSignedUrlForAttachedMediaResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetSignedUrlForAttachedMediaResponse, a, b2);
        }
    })();
var GetSignedUrlForAttachedMediaResponse = GetSignedUrlForAttachedMediaResponse$Runtime;
GetSignedUrlForAttachedMediaResponse.runtime = proto3;
GetSignedUrlForAttachedMediaResponse.typeName = "agent.v1.GetSignedUrlForAttachedMediaResponse";
GetSignedUrlForAttachedMediaResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "post_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "get_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "expires_at_unix_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "refresh_after_unix_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 6,
            name: "post_fields",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 7,
            name: "put_url",
            kind: "scalar",
            T: 9
        }
    ]);
var NotifyConversationCloneRequest$Runtime = (()=>class _NotifyConversationCloneRequest extends Message {
        constructor(data){
            super();
            this.conversationId = "";
            this.sourceConversationId = "";
            this.sourceRequestId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _NotifyConversationCloneRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _NotifyConversationCloneRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _NotifyConversationCloneRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_NotifyConversationCloneRequest, a, b2);
        }
    })();
var NotifyConversationCloneRequest = NotifyConversationCloneRequest$Runtime;
NotifyConversationCloneRequest.runtime = proto3;
NotifyConversationCloneRequest.typeName = "agent.v1.NotifyConversationCloneRequest";
NotifyConversationCloneRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "source_conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "source_request_id",
            kind: "scalar",
            T: 9
        }
    ]);
var NotifyConversationCloneResponse$Runtime = (()=>class _NotifyConversationCloneResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _NotifyConversationCloneResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _NotifyConversationCloneResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _NotifyConversationCloneResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_NotifyConversationCloneResponse, a, b2);
        }
    })();
var NotifyConversationCloneResponse = NotifyConversationCloneResponse$Runtime;
NotifyConversationCloneResponse.runtime = proto3;
NotifyConversationCloneResponse.typeName = "agent.v1.NotifyConversationCloneResponse";
NotifyConversationCloneResponse.fields = proto3.util.newFieldList(()=>[]);
var GetNewChatNudgeLegacyModelPickerRequest$Runtime = (()=>class _GetNewChatNudgeLegacyModelPickerRequest extends Message {
        constructor(data){
            super();
            this.currentModel = "";
            this.maxMode = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _GetNewChatNudgeLegacyModelPickerRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _GetNewChatNudgeLegacyModelPickerRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _GetNewChatNudgeLegacyModelPickerRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetNewChatNudgeLegacyModelPickerRequest, a, b2);
        }
    })();
var GetNewChatNudgeLegacyModelPickerRequest = GetNewChatNudgeLegacyModelPickerRequest$Runtime;
GetNewChatNudgeLegacyModelPickerRequest.runtime = proto3;
GetNewChatNudgeLegacyModelPickerRequest.typeName = "agent.v1.GetNewChatNudgeLegacyModelPickerRequest";
GetNewChatNudgeLegacyModelPickerRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "current_model",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "max_mode",
            kind: "scalar",
            T: 8
        }
    ]);
var GetNewChatNudgeLegacyModelPickerResponse$Runtime = (()=>class _GetNewChatNudgeLegacyModelPickerResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _GetNewChatNudgeLegacyModelPickerResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _GetNewChatNudgeLegacyModelPickerResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _GetNewChatNudgeLegacyModelPickerResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetNewChatNudgeLegacyModelPickerResponse, a, b2);
        }
    })();
var GetNewChatNudgeLegacyModelPickerResponse = GetNewChatNudgeLegacyModelPickerResponse$Runtime;
GetNewChatNudgeLegacyModelPickerResponse.runtime = proto3;
GetNewChatNudgeLegacyModelPickerResponse.typeName = "agent.v1.GetNewChatNudgeLegacyModelPickerResponse";
GetNewChatNudgeLegacyModelPickerResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "nudge",
            kind: "message",
            T: NewChatNudge,
            opt: true
        }
    ]);
var NudgeBumpVariant$Runtime = (()=>class _NudgeBumpVariant extends Message {
        constructor(data){
            super();
            this.bannerMessage = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _NudgeBumpVariant().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _NudgeBumpVariant().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _NudgeBumpVariant().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_NudgeBumpVariant, a, b2);
        }
    })();
var NudgeBumpVariant = NudgeBumpVariant$Runtime;
NudgeBumpVariant.runtime = proto3;
NudgeBumpVariant.typeName = "agent.v1.NudgeBumpVariant";
NudgeBumpVariant.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "banner_message",
            kind: "scalar",
            T: 9
        }
    ]);
var NudgeAskVariant$Runtime = (()=>class _NudgeAskVariant extends Message {
        constructor(data){
            super();
            this.popupMessage = "";
            this.acceptLabel = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _NudgeAskVariant().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _NudgeAskVariant().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _NudgeAskVariant().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_NudgeAskVariant, a, b2);
        }
    })();
var NudgeAskVariant = NudgeAskVariant$Runtime;
NudgeAskVariant.runtime = proto3;
NudgeAskVariant.typeName = "agent.v1.NudgeAskVariant";
NudgeAskVariant.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "popup_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "accept_label",
            kind: "scalar",
            T: 9
        }
    ]);
var NudgeSilentSwitchVariant$Runtime = (()=>class _NudgeSilentSwitchVariant extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _NudgeSilentSwitchVariant().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _NudgeSilentSwitchVariant().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _NudgeSilentSwitchVariant().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_NudgeSilentSwitchVariant, a, b2);
        }
    })();
var NudgeSilentSwitchVariant = NudgeSilentSwitchVariant$Runtime;
NudgeSilentSwitchVariant.runtime = proto3;
NudgeSilentSwitchVariant.typeName = "agent.v1.NudgeSilentSwitchVariant";
NudgeSilentSwitchVariant.fields = proto3.util.newFieldList(()=>[]);
var NewChatNudge$Runtime = (()=>class _NewChatNudge extends Message {
        constructor(data){
            super();
            this.nudgeId = "";
            this.targetModel = "";
            this.experimentName = "";
            this.variant = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _NewChatNudge().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _NewChatNudge().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _NewChatNudge().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_NewChatNudge, a, b2);
        }
    })();
var NewChatNudge = NewChatNudge$Runtime;
NewChatNudge.runtime = proto3;
NewChatNudge.typeName = "agent.v1.NewChatNudge";
NewChatNudge.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "nudge_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "target_model",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "experiment_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "bump",
            kind: "message",
            T: NudgeBumpVariant,
            oneof: "variant"
        },
        {
            no: 5,
            name: "ask",
            kind: "message",
            T: NudgeAskVariant,
            oneof: "variant"
        },
        {
            no: 6,
            name: "silent_switch",
            kind: "message",
            T: NudgeSilentSwitchVariant,
            oneof: "variant"
        }
    ]);
var GetNewChatNudgeParameterizedModelPickerRequest$Runtime = (()=>class _GetNewChatNudgeParameterizedModelPickerRequest extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _GetNewChatNudgeParameterizedModelPickerRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _GetNewChatNudgeParameterizedModelPickerRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _GetNewChatNudgeParameterizedModelPickerRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetNewChatNudgeParameterizedModelPickerRequest, a, b2);
        }
    })();
var GetNewChatNudgeParameterizedModelPickerRequest = GetNewChatNudgeParameterizedModelPickerRequest$Runtime;
GetNewChatNudgeParameterizedModelPickerRequest.runtime = proto3;
GetNewChatNudgeParameterizedModelPickerRequest.typeName = "agent.v1.GetNewChatNudgeParameterizedModelPickerRequest";
GetNewChatNudgeParameterizedModelPickerRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "current_model",
            kind: "message",
            T: RequestedModel
        }
    ]);
var GetNewChatNudgeParameterizedModelPickerResponse$Runtime = (()=>class _GetNewChatNudgeParameterizedModelPickerResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _GetNewChatNudgeParameterizedModelPickerResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _GetNewChatNudgeParameterizedModelPickerResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _GetNewChatNudgeParameterizedModelPickerResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetNewChatNudgeParameterizedModelPickerResponse, a, b2);
        }
    })();
var GetNewChatNudgeParameterizedModelPickerResponse = GetNewChatNudgeParameterizedModelPickerResponse$Runtime;
GetNewChatNudgeParameterizedModelPickerResponse.runtime = proto3;
GetNewChatNudgeParameterizedModelPickerResponse.typeName = "agent.v1.GetNewChatNudgeParameterizedModelPickerResponse";
GetNewChatNudgeParameterizedModelPickerResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "nudge",
            kind: "message",
            T: NewChatNudgeV2,
            opt: true
        }
    ]);
var NewChatNudgeV2$Runtime = (()=>class _NewChatNudgeV2 extends Message {
        constructor(data){
            super();
            this.nudgeId = "";
            this.experimentName = "";
            this.variant = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _NewChatNudgeV2().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _NewChatNudgeV2().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _NewChatNudgeV2().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_NewChatNudgeV2, a, b2);
        }
    })();
var NewChatNudgeV2 = NewChatNudgeV2$Runtime;
NewChatNudgeV2.runtime = proto3;
NewChatNudgeV2.typeName = "agent.v1.NewChatNudgeV2";
NewChatNudgeV2.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "nudge_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "target_model",
            kind: "message",
            T: RequestedModel
        },
        {
            no: 3,
            name: "experiment_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "bump",
            kind: "message",
            T: NudgeBumpVariant,
            oneof: "variant"
        },
        {
            no: 5,
            name: "ask",
            kind: "message",
            T: NudgeAskVariant,
            oneof: "variant"
        },
        {
            no: 6,
            name: "silent_switch",
            kind: "message",
            T: NudgeSilentSwitchVariant,
            oneof: "variant"
        }
    ]);
export { AgentClientMessage, AgentServerMessage, BlobEntry, ClientHeartbeat, CreateTranscriptOverviewRequest, CreateTranscriptOverviewResponse, ExecServerAbort, ExecServerControlMessage, GetAllowedModelIntentsRequest, GetAllowedModelIntentsResponse, GetDefaultModelForCliRequest, GetDefaultModelForCliResponse, GetNewChatNudgeLegacyModelPickerRequest, GetNewChatNudgeLegacyModelPickerResponse, GetNewChatNudgeParameterizedModelPickerRequest, GetNewChatNudgeParameterizedModelPickerResponse, GetPromptContextUsageRequest, GetPromptContextUsageResponse, GetSignedUrlForAttachedMediaRequest, GetSignedUrlForAttachedMediaResponse, GetUsableModelsRequest, GetUsableModelsResponse, IdeEditorsStateFile, IdeEditorsStateLite, LocalPromptQualityInvocation, LocalPromptQualityInvocationStatus, NameAgentRequest, NameAgentResponse, NewChatNudge, NewChatNudgeV2, NotifyConversationCloneRequest, NotifyConversationCloneResponse, NudgeAskVariant, NudgeBumpVariant, NudgeSilentSwitchVariant, PrewarmRequest, TtftBreakdown, UpdateConversationMetadataRequest, UpdateConversationMetadataResponse, UploadConversationBlobsRequest, UploadConversationBlobsResponse, UploadLocalAgentRunToPromptQualityRequest, UploadLocalAgentRunToPromptQualityResponse };
