import { Message, proto3 } from "@bufbuild/protobuf";
var SendFinalSummaryArgs$Runtime = (()=>class _SendFinalSummaryArgs extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SendFinalSummaryArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SendFinalSummaryArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SendFinalSummaryArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SendFinalSummaryArgs, a, b2);
        }
    })();
var SendFinalSummaryArgs = SendFinalSummaryArgs$Runtime;
SendFinalSummaryArgs.runtime = proto3;
SendFinalSummaryArgs.typeName = "agent.v1.SendFinalSummaryArgs";
SendFinalSummaryArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "final_summary",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var SendFinalSummarySuccess$Runtime = (()=>class _SendFinalSummarySuccess extends Message {
        constructor(data){
            super();
            this.finalSummary = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SendFinalSummarySuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SendFinalSummarySuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SendFinalSummarySuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SendFinalSummarySuccess, a, b2);
        }
    })();
var SendFinalSummarySuccess = SendFinalSummarySuccess$Runtime;
SendFinalSummarySuccess.runtime = proto3;
SendFinalSummarySuccess.typeName = "agent.v1.SendFinalSummarySuccess";
SendFinalSummarySuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "final_summary",
            kind: "scalar",
            T: 9
        }
    ]);
var SendFinalSummaryError$Runtime = (()=>class _SendFinalSummaryError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SendFinalSummaryError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SendFinalSummaryError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SendFinalSummaryError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SendFinalSummaryError, a, b2);
        }
    })();
var SendFinalSummaryError = SendFinalSummaryError$Runtime;
SendFinalSummaryError.runtime = proto3;
SendFinalSummaryError.typeName = "agent.v1.SendFinalSummaryError";
SendFinalSummaryError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var SendFinalSummaryResult$Runtime = (()=>class _SendFinalSummaryResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SendFinalSummaryResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SendFinalSummaryResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SendFinalSummaryResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SendFinalSummaryResult, a, b2);
        }
    })();
var SendFinalSummaryResult = SendFinalSummaryResult$Runtime;
SendFinalSummaryResult.runtime = proto3;
SendFinalSummaryResult.typeName = "agent.v1.SendFinalSummaryResult";
SendFinalSummaryResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: SendFinalSummarySuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: SendFinalSummaryError,
            oneof: "result"
        }
    ]);
var SendFinalSummaryToolCall$Runtime = (()=>class _SendFinalSummaryToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SendFinalSummaryToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SendFinalSummaryToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SendFinalSummaryToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SendFinalSummaryToolCall, a, b2);
        }
    })();
var SendFinalSummaryToolCall = SendFinalSummaryToolCall$Runtime;
SendFinalSummaryToolCall.runtime = proto3;
SendFinalSummaryToolCall.typeName = "agent.v1.SendFinalSummaryToolCall";
SendFinalSummaryToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: SendFinalSummaryArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: SendFinalSummaryResult
        }
    ]);
export { SendFinalSummaryArgs, SendFinalSummaryError, SendFinalSummaryResult, SendFinalSummarySuccess, SendFinalSummaryToolCall };
