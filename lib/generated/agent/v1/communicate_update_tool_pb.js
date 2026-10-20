import { Message, proto3 } from "@bufbuild/protobuf";
var CommunicateUpdateArgs$Runtime = (()=>class _CommunicateUpdateArgs extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CommunicateUpdateArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CommunicateUpdateArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CommunicateUpdateArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CommunicateUpdateArgs, a, b2);
        }
    })();
var CommunicateUpdateArgs = CommunicateUpdateArgs$Runtime;
CommunicateUpdateArgs.runtime = proto3;
CommunicateUpdateArgs.typeName = "agent.v1.CommunicateUpdateArgs";
CommunicateUpdateArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "current_step",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "final_summary",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "completed_subtitle",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var CommunicateUpdateSuccess$Runtime = (()=>class _CommunicateUpdateSuccess extends Message {
        constructor(data){
            super();
            this.currentStep = "";
            this.messageIndex = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CommunicateUpdateSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CommunicateUpdateSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CommunicateUpdateSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CommunicateUpdateSuccess, a, b2);
        }
    })();
var CommunicateUpdateSuccess = CommunicateUpdateSuccess$Runtime;
CommunicateUpdateSuccess.runtime = proto3;
CommunicateUpdateSuccess.typeName = "agent.v1.CommunicateUpdateSuccess";
CommunicateUpdateSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "current_step",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "message_index",
            kind: "scalar",
            T: 13
        }
    ]);
var CommunicateUpdateError$Runtime = (()=>class _CommunicateUpdateError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CommunicateUpdateError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CommunicateUpdateError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CommunicateUpdateError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CommunicateUpdateError, a, b2);
        }
    })();
var CommunicateUpdateError = CommunicateUpdateError$Runtime;
CommunicateUpdateError.runtime = proto3;
CommunicateUpdateError.typeName = "agent.v1.CommunicateUpdateError";
CommunicateUpdateError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var CommunicateUpdateResult$Runtime = (()=>class _CommunicateUpdateResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CommunicateUpdateResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CommunicateUpdateResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CommunicateUpdateResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CommunicateUpdateResult, a, b2);
        }
    })();
var CommunicateUpdateResult = CommunicateUpdateResult$Runtime;
CommunicateUpdateResult.runtime = proto3;
CommunicateUpdateResult.typeName = "agent.v1.CommunicateUpdateResult";
CommunicateUpdateResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: CommunicateUpdateSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: CommunicateUpdateError,
            oneof: "result"
        }
    ]);
var CommunicateUpdateToolCall$Runtime = (()=>class _CommunicateUpdateToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CommunicateUpdateToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CommunicateUpdateToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CommunicateUpdateToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CommunicateUpdateToolCall, a, b2);
        }
    })();
var CommunicateUpdateToolCall = CommunicateUpdateToolCall$Runtime;
CommunicateUpdateToolCall.runtime = proto3;
CommunicateUpdateToolCall.typeName = "agent.v1.CommunicateUpdateToolCall";
CommunicateUpdateToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: CommunicateUpdateArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: CommunicateUpdateResult
        }
    ]);
export { CommunicateUpdateArgs, CommunicateUpdateError, CommunicateUpdateResult, CommunicateUpdateSuccess, CommunicateUpdateToolCall };
