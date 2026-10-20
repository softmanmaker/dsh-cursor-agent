import { Message, proto3 } from "@bufbuild/protobuf";
import { McpArgs, McpPermissionDenied, McpRejected, McpSuccess } from "./mcp_exec_pb.js";
var McpToolError$Runtime = (()=>class _McpToolError extends Message {
        constructor(data){
            super();
            this.error = "";
            this.readToolDefReminder = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpToolError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpToolError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpToolError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpToolError, a, b2);
        }
    })();
var McpToolError = McpToolError$Runtime;
McpToolError.runtime = proto3;
McpToolError.typeName = "agent.v1.McpToolError";
McpToolError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "read_tool_def_reminder",
            kind: "scalar",
            T: 9
        }
    ]);
var McpToolResult$Runtime = (()=>class _McpToolResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpToolResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpToolResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpToolResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpToolResult, a, b2);
        }
    })();
var McpToolResult = McpToolResult$Runtime;
McpToolResult.runtime = proto3;
McpToolResult.typeName = "agent.v1.McpToolResult";
McpToolResult.fields = proto3.util.newFieldList(()=>[
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
            T: McpToolError,
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
        }
    ]);
var McpToolCall$Runtime = (()=>class _McpToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpToolCall, a, b2);
        }
    })();
var McpToolCall = McpToolCall$Runtime;
McpToolCall.runtime = proto3;
McpToolCall.typeName = "agent.v1.McpToolCall";
McpToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: McpArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: McpToolResult
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
export { McpToolCall, McpToolError, McpToolResult };
