import { Message, proto3 } from "@bufbuild/protobuf";
var SwitchModeArgs$Runtime = (()=>class _SwitchModeArgs extends Message {
        constructor(data){
            super();
            this.targetModeId = "";
            this.toolCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SwitchModeArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SwitchModeArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SwitchModeArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SwitchModeArgs, a, b2);
        }
    })();
var SwitchModeArgs = SwitchModeArgs$Runtime;
SwitchModeArgs.runtime = proto3;
SwitchModeArgs.typeName = "agent.v1.SwitchModeArgs";
SwitchModeArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "target_mode_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "explanation",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
var SwitchModeResult$Runtime = (()=>class _SwitchModeResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SwitchModeResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SwitchModeResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SwitchModeResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SwitchModeResult, a, b2);
        }
    })();
var SwitchModeResult = SwitchModeResult$Runtime;
SwitchModeResult.runtime = proto3;
SwitchModeResult.typeName = "agent.v1.SwitchModeResult";
SwitchModeResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: SwitchModeSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: SwitchModeError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: SwitchModeRejected,
            oneof: "result"
        }
    ]);
var SwitchModeSuccess$Runtime = (()=>class _SwitchModeSuccess extends Message {
        constructor(data){
            super();
            this.fromModeId = "";
            this.toModeId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SwitchModeSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SwitchModeSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SwitchModeSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SwitchModeSuccess, a, b2);
        }
    })();
var SwitchModeSuccess = SwitchModeSuccess$Runtime;
SwitchModeSuccess.runtime = proto3;
SwitchModeSuccess.typeName = "agent.v1.SwitchModeSuccess";
SwitchModeSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "from_mode_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "to_mode_id",
            kind: "scalar",
            T: 9
        }
    ]);
var SwitchModeError$Runtime = (()=>class _SwitchModeError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SwitchModeError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SwitchModeError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SwitchModeError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SwitchModeError, a, b2);
        }
    })();
var SwitchModeError = SwitchModeError$Runtime;
SwitchModeError.runtime = proto3;
SwitchModeError.typeName = "agent.v1.SwitchModeError";
SwitchModeError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var SwitchModeRejected$Runtime = (()=>class _SwitchModeRejected extends Message {
        constructor(data){
            super();
            this.reason = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SwitchModeRejected().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SwitchModeRejected().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SwitchModeRejected().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SwitchModeRejected, a, b2);
        }
    })();
var SwitchModeRejected = SwitchModeRejected$Runtime;
SwitchModeRejected.runtime = proto3;
SwitchModeRejected.typeName = "agent.v1.SwitchModeRejected";
SwitchModeRejected.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
var SwitchModeToolCall$Runtime = (()=>class _SwitchModeToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SwitchModeToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SwitchModeToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SwitchModeToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SwitchModeToolCall, a, b2);
        }
    })();
var SwitchModeToolCall = SwitchModeToolCall$Runtime;
SwitchModeToolCall.runtime = proto3;
SwitchModeToolCall.typeName = "agent.v1.SwitchModeToolCall";
SwitchModeToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: SwitchModeArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: SwitchModeResult
        }
    ]);
var SwitchModeRequestQuery$Runtime = (()=>class _SwitchModeRequestQuery extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SwitchModeRequestQuery().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SwitchModeRequestQuery().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SwitchModeRequestQuery().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SwitchModeRequestQuery, a, b2);
        }
    })();
var SwitchModeRequestQuery = SwitchModeRequestQuery$Runtime;
SwitchModeRequestQuery.runtime = proto3;
SwitchModeRequestQuery.typeName = "agent.v1.SwitchModeRequestQuery";
SwitchModeRequestQuery.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: SwitchModeArgs
        }
    ]);
var SwitchModeRequestResponse$Runtime = (()=>class _SwitchModeRequestResponse extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SwitchModeRequestResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SwitchModeRequestResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SwitchModeRequestResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SwitchModeRequestResponse, a, b2);
        }
    })();
var SwitchModeRequestResponse = SwitchModeRequestResponse$Runtime;
SwitchModeRequestResponse.runtime = proto3;
SwitchModeRequestResponse.typeName = "agent.v1.SwitchModeRequestResponse";
SwitchModeRequestResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "approved",
            kind: "message",
            T: SwitchModeRequestResponse_Approved,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: SwitchModeRequestResponse_Rejected,
            oneof: "result"
        }
    ]);
var SwitchModeRequestResponse_Approved$Runtime = (()=>class _SwitchModeRequestResponse_Approved extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SwitchModeRequestResponse_Approved().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SwitchModeRequestResponse_Approved().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SwitchModeRequestResponse_Approved().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SwitchModeRequestResponse_Approved, a, b2);
        }
    })();
var SwitchModeRequestResponse_Approved = SwitchModeRequestResponse_Approved$Runtime;
SwitchModeRequestResponse_Approved.runtime = proto3;
SwitchModeRequestResponse_Approved.typeName = "agent.v1.SwitchModeRequestResponse.Approved";
SwitchModeRequestResponse_Approved.fields = proto3.util.newFieldList(()=>[]);
var SwitchModeRequestResponse_Rejected$Runtime = (()=>class _SwitchModeRequestResponse_Rejected extends Message {
        constructor(data){
            super();
            this.reason = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SwitchModeRequestResponse_Rejected().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SwitchModeRequestResponse_Rejected().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SwitchModeRequestResponse_Rejected().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SwitchModeRequestResponse_Rejected, a, b2);
        }
    })();
var SwitchModeRequestResponse_Rejected = SwitchModeRequestResponse_Rejected$Runtime;
SwitchModeRequestResponse_Rejected.runtime = proto3;
SwitchModeRequestResponse_Rejected.typeName = "agent.v1.SwitchModeRequestResponse.Rejected";
SwitchModeRequestResponse_Rejected.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
export { SwitchModeArgs, SwitchModeError, SwitchModeRejected, SwitchModeRequestQuery, SwitchModeRequestResponse, SwitchModeRequestResponse_Approved, SwitchModeRequestResponse_Rejected, SwitchModeResult, SwitchModeSuccess, SwitchModeToolCall };
