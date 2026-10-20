import { Message, proto3 } from "@bufbuild/protobuf";
var McpAuthArgs$Runtime = (()=>class _McpAuthArgs extends Message {
        constructor(data){
            super();
            this.serverIdentifier = "";
            this.toolCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpAuthArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpAuthArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpAuthArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpAuthArgs, a, b2);
        }
    })();
var McpAuthArgs = McpAuthArgs$Runtime;
McpAuthArgs.runtime = proto3;
McpAuthArgs.typeName = "agent.v1.McpAuthArgs";
McpAuthArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "server_identifier",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
var McpAuthResult$Runtime = (()=>class _McpAuthResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpAuthResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpAuthResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpAuthResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpAuthResult, a, b2);
        }
    })();
var McpAuthResult = McpAuthResult$Runtime;
McpAuthResult.runtime = proto3;
McpAuthResult.typeName = "agent.v1.McpAuthResult";
McpAuthResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: McpAuthSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: McpAuthError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: McpAuthRejected,
            oneof: "result"
        }
    ]);
var McpAuthSuccess$Runtime = (()=>class _McpAuthSuccess extends Message {
        constructor(data){
            super();
            this.serverIdentifier = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpAuthSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpAuthSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpAuthSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpAuthSuccess, a, b2);
        }
    })();
var McpAuthSuccess = McpAuthSuccess$Runtime;
McpAuthSuccess.runtime = proto3;
McpAuthSuccess.typeName = "agent.v1.McpAuthSuccess";
McpAuthSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "server_identifier",
            kind: "scalar",
            T: 9
        }
    ]);
var McpAuthError$Runtime = (()=>class _McpAuthError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpAuthError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpAuthError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpAuthError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpAuthError, a, b2);
        }
    })();
var McpAuthError = McpAuthError$Runtime;
McpAuthError.runtime = proto3;
McpAuthError.typeName = "agent.v1.McpAuthError";
McpAuthError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var McpAuthRejected$Runtime = (()=>class _McpAuthRejected extends Message {
        constructor(data){
            super();
            this.reason = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpAuthRejected().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpAuthRejected().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpAuthRejected().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpAuthRejected, a, b2);
        }
    })();
var McpAuthRejected = McpAuthRejected$Runtime;
McpAuthRejected.runtime = proto3;
McpAuthRejected.typeName = "agent.v1.McpAuthRejected";
McpAuthRejected.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
var McpAuthToolCall$Runtime = (()=>class _McpAuthToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpAuthToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpAuthToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpAuthToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpAuthToolCall, a, b2);
        }
    })();
var McpAuthToolCall = McpAuthToolCall$Runtime;
McpAuthToolCall.runtime = proto3;
McpAuthToolCall.typeName = "agent.v1.McpAuthToolCall";
McpAuthToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: McpAuthArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: McpAuthResult
        }
    ]);
var McpAuthRequestQuery$Runtime = (()=>class _McpAuthRequestQuery extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpAuthRequestQuery().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpAuthRequestQuery().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpAuthRequestQuery().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpAuthRequestQuery, a, b2);
        }
    })();
var McpAuthRequestQuery = McpAuthRequestQuery$Runtime;
McpAuthRequestQuery.runtime = proto3;
McpAuthRequestQuery.typeName = "agent.v1.McpAuthRequestQuery";
McpAuthRequestQuery.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: McpAuthArgs
        }
    ]);
var McpAuthRequestResponse$Runtime = (()=>class _McpAuthRequestResponse extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpAuthRequestResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpAuthRequestResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpAuthRequestResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpAuthRequestResponse, a, b2);
        }
    })();
var McpAuthRequestResponse = McpAuthRequestResponse$Runtime;
McpAuthRequestResponse.runtime = proto3;
McpAuthRequestResponse.typeName = "agent.v1.McpAuthRequestResponse";
McpAuthRequestResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "approved",
            kind: "message",
            T: McpAuthRequestResponse_Approved,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: McpAuthRequestResponse_Rejected,
            oneof: "result"
        }
    ]);
var McpAuthRequestResponse_Approved$Runtime = (()=>class _McpAuthRequestResponse_Approved extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpAuthRequestResponse_Approved().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpAuthRequestResponse_Approved().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpAuthRequestResponse_Approved().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpAuthRequestResponse_Approved, a, b2);
        }
    })();
var McpAuthRequestResponse_Approved = McpAuthRequestResponse_Approved$Runtime;
McpAuthRequestResponse_Approved.runtime = proto3;
McpAuthRequestResponse_Approved.typeName = "agent.v1.McpAuthRequestResponse.Approved";
McpAuthRequestResponse_Approved.fields = proto3.util.newFieldList(()=>[]);
var McpAuthRequestResponse_Rejected$Runtime = (()=>class _McpAuthRequestResponse_Rejected extends Message {
        constructor(data){
            super();
            this.reason = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpAuthRequestResponse_Rejected().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpAuthRequestResponse_Rejected().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpAuthRequestResponse_Rejected().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpAuthRequestResponse_Rejected, a, b2);
        }
    })();
var McpAuthRequestResponse_Rejected = McpAuthRequestResponse_Rejected$Runtime;
McpAuthRequestResponse_Rejected.runtime = proto3;
McpAuthRequestResponse_Rejected.typeName = "agent.v1.McpAuthRequestResponse.Rejected";
McpAuthRequestResponse_Rejected.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
export { McpAuthArgs, McpAuthError, McpAuthRejected, McpAuthRequestQuery, McpAuthRequestResponse, McpAuthRequestResponse_Approved, McpAuthRequestResponse_Rejected, McpAuthResult, McpAuthSuccess, McpAuthToolCall };
