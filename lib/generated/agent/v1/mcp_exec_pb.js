import { Message, Struct, Value, proto3 } from "@bufbuild/protobuf";
import { OutputLocation, SmartModeApproval } from "./utils_pb.js";
import { McpInstructions, McpToolDefinition } from "./mcp_pb.js";
var McpArgs$Runtime = (()=>class _McpArgs extends Message {
        constructor(data){
            super();
            this.name = "";
            this.args = {};
            this.toolCallId = "";
            this.providerIdentifier = "";
            this.toolName = "";
            this.smartModeApprovalOnly = false;
            this.skipApproval = false;
            this.serverIdentifier = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpArgs, a, b2);
        }
    })();
var McpArgs = McpArgs$Runtime;
McpArgs.runtime = proto3;
McpArgs.typeName = "agent.v1.McpArgs";
McpArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "args",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: Value
            }
        },
        {
            no: 3,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "provider_identifier",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "smart_mode_approval",
            kind: "message",
            T: SmartModeApproval,
            opt: true
        },
        {
            no: 7,
            name: "smart_mode_approval_only",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "skip_approval",
            kind: "scalar",
            T: 8
        },
        {
            no: 9,
            name: "server_identifier",
            kind: "scalar",
            T: 9
        }
    ]);
var McpResult$Runtime = (()=>class _McpResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpResult, a, b2);
        }
    })();
var McpResult = McpResult$Runtime;
McpResult.runtime = proto3;
McpResult.typeName = "agent.v1.McpResult";
McpResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: McpSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: McpError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: McpRejected,
            oneof: "result"
        },
        {
            no: 4,
            name: "permission_denied",
            kind: "message",
            T: McpPermissionDenied,
            oneof: "result"
        },
        {
            no: 5,
            name: "tool_not_found",
            kind: "message",
            T: McpToolNotFound,
            oneof: "result"
        },
        {
            no: 6,
            name: "server_not_found",
            kind: "message",
            T: McpServerNotFound,
            oneof: "result"
        },
        {
            no: 7,
            name: "approved",
            kind: "message",
            T: McpApproved,
            oneof: "result"
        }
    ]);
var McpApproved$Runtime = (()=>class _McpApproved extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpApproved().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpApproved().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpApproved().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpApproved, a, b2);
        }
    })();
var McpApproved = McpApproved$Runtime;
McpApproved.runtime = proto3;
McpApproved.typeName = "agent.v1.McpApproved";
McpApproved.fields = proto3.util.newFieldList(()=>[]);
var McpToolNotFound$Runtime = (()=>class _McpToolNotFound extends Message {
        constructor(data){
            super();
            this.name = "";
            this.availableTools = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpToolNotFound().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpToolNotFound().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpToolNotFound().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpToolNotFound, a, b2);
        }
    })();
var McpToolNotFound = McpToolNotFound$Runtime;
McpToolNotFound.runtime = proto3;
McpToolNotFound.typeName = "agent.v1.McpToolNotFound";
McpToolNotFound.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "available_tools",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var McpServerNotFound$Runtime = (()=>class _McpServerNotFound extends Message {
        constructor(data){
            super();
            this.name = "";
            this.availableServers = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpServerNotFound().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpServerNotFound().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpServerNotFound().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpServerNotFound, a, b2);
        }
    })();
var McpServerNotFound = McpServerNotFound$Runtime;
McpServerNotFound.runtime = proto3;
McpServerNotFound.typeName = "agent.v1.McpServerNotFound";
McpServerNotFound.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "available_servers",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var McpTextContent$Runtime = (()=>class _McpTextContent extends Message {
        constructor(data){
            super();
            this.text = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpTextContent().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpTextContent().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpTextContent().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpTextContent, a, b2);
        }
    })();
var McpTextContent = McpTextContent$Runtime;
McpTextContent.runtime = proto3;
McpTextContent.typeName = "agent.v1.McpTextContent";
McpTextContent.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "output_location",
            kind: "message",
            T: OutputLocation,
            opt: true
        }
    ]);
var McpImageContent$Runtime = (()=>class _McpImageContent extends Message {
        constructor(data){
            super();
            this.data = new Uint8Array(0);
            this.mimeType = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpImageContent().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpImageContent().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpImageContent().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpImageContent, a, b2);
        }
    })();
var McpImageContent = McpImageContent$Runtime;
McpImageContent.runtime = proto3;
McpImageContent.typeName = "agent.v1.McpImageContent";
McpImageContent.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "mime_type",
            kind: "scalar",
            T: 9
        }
    ]);
var McpToolResultContentItem$Runtime = (()=>class _McpToolResultContentItem extends Message {
        constructor(data){
            super();
            this.content = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpToolResultContentItem().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpToolResultContentItem().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpToolResultContentItem().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpToolResultContentItem, a, b2);
        }
    })();
var McpToolResultContentItem = McpToolResultContentItem$Runtime;
McpToolResultContentItem.runtime = proto3;
McpToolResultContentItem.typeName = "agent.v1.McpToolResultContentItem";
McpToolResultContentItem.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "text",
            kind: "message",
            T: McpTextContent,
            oneof: "content"
        },
        {
            no: 2,
            name: "image",
            kind: "message",
            T: McpImageContent,
            oneof: "content"
        }
    ]);
var McpSuccess$Runtime = (()=>class _McpSuccess extends Message {
        constructor(data){
            super();
            this.content = [];
            this.isError = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpSuccess, a, b2);
        }
    })();
var McpSuccess = McpSuccess$Runtime;
McpSuccess.runtime = proto3;
McpSuccess.typeName = "agent.v1.McpSuccess";
McpSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "content",
            kind: "message",
            T: McpToolResultContentItem,
            repeated: true
        },
        {
            no: 2,
            name: "is_error",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "structured_content",
            kind: "message",
            T: Struct
        }
    ]);
var McpError$Runtime = (()=>class _McpError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpError, a, b2);
        }
    })();
var McpError = McpError$Runtime;
McpError.runtime = proto3;
McpError.typeName = "agent.v1.McpError";
McpError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var McpRejected$Runtime = (()=>class _McpRejected extends Message {
        constructor(data){
            super();
            this.reason = "";
            this.isReadonly = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpRejected().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpRejected().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpRejected().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpRejected, a, b2);
        }
    })();
var McpRejected = McpRejected$Runtime;
McpRejected.runtime = proto3;
McpRejected.typeName = "agent.v1.McpRejected";
McpRejected.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_readonly",
            kind: "scalar",
            T: 8
        }
    ]);
var McpPermissionDenied$Runtime = (()=>class _McpPermissionDenied extends Message {
        constructor(data){
            super();
            this.error = "";
            this.isReadonly = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpPermissionDenied().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpPermissionDenied().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpPermissionDenied().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpPermissionDenied, a, b2);
        }
    })();
var McpPermissionDenied = McpPermissionDenied$Runtime;
McpPermissionDenied.runtime = proto3;
McpPermissionDenied.typeName = "agent.v1.McpPermissionDenied";
McpPermissionDenied.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_readonly",
            kind: "scalar",
            T: 8
        }
    ]);
var McpStateExecArgs$Runtime = (()=>class _McpStateExecArgs extends Message {
        constructor(data){
            super();
            this.serverIdentifiers = [];
            this.kickOnly = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpStateExecArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpStateExecArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpStateExecArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpStateExecArgs, a, b2);
        }
    })();
var McpStateExecArgs = McpStateExecArgs$Runtime;
McpStateExecArgs.runtime = proto3;
McpStateExecArgs.typeName = "agent.v1.McpStateExecArgs";
McpStateExecArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "server_identifiers",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "kick_only",
            kind: "scalar",
            T: 8
        }
    ]);
var McpStateExecResult$Runtime = (()=>class _McpStateExecResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpStateExecResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpStateExecResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpStateExecResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpStateExecResult, a, b2);
        }
    })();
var McpStateExecResult = McpStateExecResult$Runtime;
McpStateExecResult.runtime = proto3;
McpStateExecResult.typeName = "agent.v1.McpStateExecResult";
McpStateExecResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: McpStateSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: McpStateError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: McpStateRejected,
            oneof: "result"
        }
    ]);
var McpStateServer$Runtime = (()=>class _McpStateServer extends Message {
        constructor(data){
            super();
            this.serverName = "";
            this.serverIdentifier = "";
            this.tools = [];
            this.instructions = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpStateServer().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpStateServer().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpStateServer().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpStateServer, a, b2);
        }
    })();
var McpStateServer = McpStateServer$Runtime;
McpStateServer.runtime = proto3;
McpStateServer.typeName = "agent.v1.McpStateServer";
McpStateServer.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "server_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "server_identifier",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "plugin",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "marketplace",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "tools",
            kind: "message",
            T: McpToolDefinition,
            repeated: true
        },
        {
            no: 6,
            name: "instructions",
            kind: "message",
            T: McpInstructions,
            repeated: true
        },
        {
            no: 7,
            name: "status",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "error_message",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var McpStateSuccess$Runtime = (()=>class _McpStateSuccess extends Message {
        constructor(data){
            super();
            this.servers = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpStateSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpStateSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpStateSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpStateSuccess, a, b2);
        }
    })();
var McpStateSuccess = McpStateSuccess$Runtime;
McpStateSuccess.runtime = proto3;
McpStateSuccess.typeName = "agent.v1.McpStateSuccess";
McpStateSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "servers",
            kind: "message",
            T: McpStateServer,
            repeated: true
        }
    ]);
var McpStateError$Runtime = (()=>class _McpStateError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpStateError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpStateError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpStateError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpStateError, a, b2);
        }
    })();
var McpStateError = McpStateError$Runtime;
McpStateError.runtime = proto3;
McpStateError.typeName = "agent.v1.McpStateError";
McpStateError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var McpStateRejected$Runtime = (()=>class _McpStateRejected extends Message {
        constructor(data){
            super();
            this.reason = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpStateRejected().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpStateRejected().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpStateRejected().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpStateRejected, a, b2);
        }
    })();
var McpStateRejected = McpStateRejected$Runtime;
McpStateRejected.runtime = proto3;
McpStateRejected.typeName = "agent.v1.McpStateRejected";
McpStateRejected.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
var ListMcpResourcesExecArgs$Runtime = (()=>class _ListMcpResourcesExecArgs extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ListMcpResourcesExecArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ListMcpResourcesExecArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ListMcpResourcesExecArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ListMcpResourcesExecArgs, a, b2);
        }
    })();
var ListMcpResourcesExecArgs = ListMcpResourcesExecArgs$Runtime;
ListMcpResourcesExecArgs.runtime = proto3;
ListMcpResourcesExecArgs.typeName = "agent.v1.ListMcpResourcesExecArgs";
ListMcpResourcesExecArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "server",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var ListMcpResourcesExecResult$Runtime = (()=>class _ListMcpResourcesExecResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ListMcpResourcesExecResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ListMcpResourcesExecResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ListMcpResourcesExecResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ListMcpResourcesExecResult, a, b2);
        }
    })();
var ListMcpResourcesExecResult = ListMcpResourcesExecResult$Runtime;
ListMcpResourcesExecResult.runtime = proto3;
ListMcpResourcesExecResult.typeName = "agent.v1.ListMcpResourcesExecResult";
ListMcpResourcesExecResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ListMcpResourcesSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: ListMcpResourcesError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: ListMcpResourcesRejected,
            oneof: "result"
        }
    ]);
var ListMcpResourcesExecResult_McpResource$Runtime = (()=>class _ListMcpResourcesExecResult_McpResource extends Message {
        constructor(data){
            super();
            this.uri = "";
            this.server = "";
            this.annotations = {};
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ListMcpResourcesExecResult_McpResource().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ListMcpResourcesExecResult_McpResource().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ListMcpResourcesExecResult_McpResource().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ListMcpResourcesExecResult_McpResource, a, b2);
        }
    })();
var ListMcpResourcesExecResult_McpResource = ListMcpResourcesExecResult_McpResource$Runtime;
ListMcpResourcesExecResult_McpResource.runtime = proto3;
ListMcpResourcesExecResult_McpResource.typeName = "agent.v1.ListMcpResourcesExecResult.McpResource";
ListMcpResourcesExecResult_McpResource.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "uri",
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
            name: "description",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "mime_type",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "server",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "annotations",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ]);
var ListMcpResourcesSuccess$Runtime = (()=>class _ListMcpResourcesSuccess extends Message {
        constructor(data){
            super();
            this.resources = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ListMcpResourcesSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ListMcpResourcesSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ListMcpResourcesSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ListMcpResourcesSuccess, a, b2);
        }
    })();
var ListMcpResourcesSuccess = ListMcpResourcesSuccess$Runtime;
ListMcpResourcesSuccess.runtime = proto3;
ListMcpResourcesSuccess.typeName = "agent.v1.ListMcpResourcesSuccess";
ListMcpResourcesSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "resources",
            kind: "message",
            T: ListMcpResourcesExecResult_McpResource,
            repeated: true
        }
    ]);
var ListMcpResourcesError$Runtime = (()=>class _ListMcpResourcesError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ListMcpResourcesError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ListMcpResourcesError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ListMcpResourcesError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ListMcpResourcesError, a, b2);
        }
    })();
var ListMcpResourcesError = ListMcpResourcesError$Runtime;
ListMcpResourcesError.runtime = proto3;
ListMcpResourcesError.typeName = "agent.v1.ListMcpResourcesError";
ListMcpResourcesError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var ListMcpResourcesRejected$Runtime = (()=>class _ListMcpResourcesRejected extends Message {
        constructor(data){
            super();
            this.reason = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ListMcpResourcesRejected().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ListMcpResourcesRejected().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ListMcpResourcesRejected().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ListMcpResourcesRejected, a, b2);
        }
    })();
var ListMcpResourcesRejected = ListMcpResourcesRejected$Runtime;
ListMcpResourcesRejected.runtime = proto3;
ListMcpResourcesRejected.typeName = "agent.v1.ListMcpResourcesRejected";
ListMcpResourcesRejected.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
var ReadMcpResourceExecArgs$Runtime = (()=>class _ReadMcpResourceExecArgs extends Message {
        constructor(data){
            super();
            this.server = "";
            this.uri = "";
            this.toolCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReadMcpResourceExecArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReadMcpResourceExecArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReadMcpResourceExecArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadMcpResourceExecArgs, a, b2);
        }
    })();
var ReadMcpResourceExecArgs = ReadMcpResourceExecArgs$Runtime;
ReadMcpResourceExecArgs.runtime = proto3;
ReadMcpResourceExecArgs.typeName = "agent.v1.ReadMcpResourceExecArgs";
ReadMcpResourceExecArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "server",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "download_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "smart_mode_approval",
            kind: "message",
            T: SmartModeApproval,
            opt: true
        }
    ]);
var ReadMcpResourceExecResult$Runtime = (()=>class _ReadMcpResourceExecResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReadMcpResourceExecResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReadMcpResourceExecResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReadMcpResourceExecResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadMcpResourceExecResult, a, b2);
        }
    })();
var ReadMcpResourceExecResult = ReadMcpResourceExecResult$Runtime;
ReadMcpResourceExecResult.runtime = proto3;
ReadMcpResourceExecResult.typeName = "agent.v1.ReadMcpResourceExecResult";
ReadMcpResourceExecResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ReadMcpResourceSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: ReadMcpResourceError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: ReadMcpResourceRejected,
            oneof: "result"
        },
        {
            no: 4,
            name: "not_found",
            kind: "message",
            T: ReadMcpResourceNotFound,
            oneof: "result"
        }
    ]);
var ReadMcpResourceSuccess$Runtime = (()=>class _ReadMcpResourceSuccess extends Message {
        constructor(data){
            super();
            this.uri = "";
            this.content = {
                case: void 0
            };
            this.annotations = {};
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReadMcpResourceSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReadMcpResourceSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReadMcpResourceSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadMcpResourceSuccess, a, b2);
        }
    })();
var ReadMcpResourceSuccess = ReadMcpResourceSuccess$Runtime;
ReadMcpResourceSuccess.runtime = proto3;
ReadMcpResourceSuccess.typeName = "agent.v1.ReadMcpResourceSuccess";
ReadMcpResourceSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "uri",
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
            name: "description",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "mime_type",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "text",
            kind: "scalar",
            T: 9,
            oneof: "content"
        },
        {
            no: 6,
            name: "blob",
            kind: "scalar",
            T: 12,
            oneof: "content"
        },
        {
            no: 7,
            name: "annotations",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 8,
            name: "download_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "output_location",
            kind: "message",
            T: OutputLocation,
            opt: true
        }
    ]);
var ReadMcpResourceError$Runtime = (()=>class _ReadMcpResourceError extends Message {
        constructor(data){
            super();
            this.uri = "";
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReadMcpResourceError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReadMcpResourceError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReadMcpResourceError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadMcpResourceError, a, b2);
        }
    })();
var ReadMcpResourceError = ReadMcpResourceError$Runtime;
ReadMcpResourceError.runtime = proto3;
ReadMcpResourceError.typeName = "agent.v1.ReadMcpResourceError";
ReadMcpResourceError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var ReadMcpResourceRejected$Runtime = (()=>class _ReadMcpResourceRejected extends Message {
        constructor(data){
            super();
            this.uri = "";
            this.reason = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReadMcpResourceRejected().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReadMcpResourceRejected().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReadMcpResourceRejected().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadMcpResourceRejected, a, b2);
        }
    })();
var ReadMcpResourceRejected = ReadMcpResourceRejected$Runtime;
ReadMcpResourceRejected.runtime = proto3;
ReadMcpResourceRejected.typeName = "agent.v1.ReadMcpResourceRejected";
ReadMcpResourceRejected.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
var ReadMcpResourceNotFound$Runtime = (()=>class _ReadMcpResourceNotFound extends Message {
        constructor(data){
            super();
            this.uri = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReadMcpResourceNotFound().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReadMcpResourceNotFound().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReadMcpResourceNotFound().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadMcpResourceNotFound, a, b2);
        }
    })();
var ReadMcpResourceNotFound = ReadMcpResourceNotFound$Runtime;
ReadMcpResourceNotFound.runtime = proto3;
ReadMcpResourceNotFound.typeName = "agent.v1.ReadMcpResourceNotFound";
ReadMcpResourceNotFound.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9
        }
    ]);
export { ListMcpResourcesError, ListMcpResourcesExecArgs, ListMcpResourcesExecResult, ListMcpResourcesExecResult_McpResource, ListMcpResourcesRejected, ListMcpResourcesSuccess, McpApproved, McpArgs, McpError, McpImageContent, McpPermissionDenied, McpRejected, McpResult, McpServerNotFound, McpStateError, McpStateExecArgs, McpStateExecResult, McpStateRejected, McpStateServer, McpStateSuccess, McpSuccess, McpTextContent, McpToolNotFound, McpToolResultContentItem, ReadMcpResourceError, ReadMcpResourceExecArgs, ReadMcpResourceExecResult, ReadMcpResourceNotFound, ReadMcpResourceRejected, ReadMcpResourceSuccess };
