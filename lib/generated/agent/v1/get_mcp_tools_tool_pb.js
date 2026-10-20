import { Message, proto3 } from "@bufbuild/protobuf";
var GetMcpToolsArgs$Runtime = (()=>class _GetMcpToolsArgs extends Message {
        constructor(data){
            super();
            this.toolCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetMcpToolsArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetMcpToolsArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetMcpToolsArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetMcpToolsArgs, a, b2);
        }
    })();
var GetMcpToolsArgs = GetMcpToolsArgs$Runtime;
GetMcpToolsArgs.runtime = proto3;
GetMcpToolsArgs.typeName = "agent.v1.GetMcpToolsArgs";
GetMcpToolsArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "server",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "tool_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "pattern",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
var GetMcpToolsAgentResult$Runtime = (()=>class _GetMcpToolsAgentResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetMcpToolsAgentResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetMcpToolsAgentResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetMcpToolsAgentResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetMcpToolsAgentResult, a, b2);
        }
    })();
var GetMcpToolsAgentResult = GetMcpToolsAgentResult$Runtime;
GetMcpToolsAgentResult.runtime = proto3;
GetMcpToolsAgentResult.typeName = "agent.v1.GetMcpToolsAgentResult";
GetMcpToolsAgentResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: GetMcpToolsSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: GetMcpToolsError,
            oneof: "result"
        }
    ]);
var GetMcpToolsSuccess$Runtime = (()=>class _GetMcpToolsSuccess extends Message {
        constructor(data){
            super();
            this.content = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetMcpToolsSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetMcpToolsSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetMcpToolsSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetMcpToolsSuccess, a, b2);
        }
    })();
var GetMcpToolsSuccess = GetMcpToolsSuccess$Runtime;
GetMcpToolsSuccess.runtime = proto3;
GetMcpToolsSuccess.typeName = "agent.v1.GetMcpToolsSuccess";
GetMcpToolsSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "output_file_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var GetMcpToolsError$Runtime = (()=>class _GetMcpToolsError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetMcpToolsError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetMcpToolsError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetMcpToolsError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetMcpToolsError, a, b2);
        }
    })();
var GetMcpToolsError = GetMcpToolsError$Runtime;
GetMcpToolsError.runtime = proto3;
GetMcpToolsError.typeName = "agent.v1.GetMcpToolsError";
GetMcpToolsError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var GetMcpToolsToolCall$Runtime = (()=>class _GetMcpToolsToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetMcpToolsToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetMcpToolsToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetMcpToolsToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetMcpToolsToolCall, a, b2);
        }
    })();
var GetMcpToolsToolCall = GetMcpToolsToolCall$Runtime;
GetMcpToolsToolCall.runtime = proto3;
GetMcpToolsToolCall.typeName = "agent.v1.GetMcpToolsToolCall";
GetMcpToolsToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: GetMcpToolsArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: GetMcpToolsAgentResult
        }
    ]);
export { GetMcpToolsAgentResult, GetMcpToolsArgs, GetMcpToolsError, GetMcpToolsSuccess, GetMcpToolsToolCall };
