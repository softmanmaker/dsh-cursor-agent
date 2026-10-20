import { Message, proto3 } from "@bufbuild/protobuf";
var SendToUserArgs$Runtime = (()=>class _SendToUserArgs extends Message {
        constructor(data){
            super();
            this.message = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SendToUserArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SendToUserArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SendToUserArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SendToUserArgs, a, b2);
        }
    })();
var SendToUserArgs = SendToUserArgs$Runtime;
SendToUserArgs.runtime = proto3;
SendToUserArgs.typeName = "agent.v1.SendToUserArgs";
SendToUserArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);
var SendToUserSuccess$Runtime = (()=>class _SendToUserSuccess extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SendToUserSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SendToUserSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SendToUserSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SendToUserSuccess, a, b2);
        }
    })();
var SendToUserSuccess = SendToUserSuccess$Runtime;
SendToUserSuccess.runtime = proto3;
SendToUserSuccess.typeName = "agent.v1.SendToUserSuccess";
SendToUserSuccess.fields = proto3.util.newFieldList(()=>[]);
var SendToUserError$Runtime = (()=>class _SendToUserError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SendToUserError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SendToUserError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SendToUserError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SendToUserError, a, b2);
        }
    })();
var SendToUserError = SendToUserError$Runtime;
SendToUserError.runtime = proto3;
SendToUserError.typeName = "agent.v1.SendToUserError";
SendToUserError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var SendToUserResult$Runtime = (()=>class _SendToUserResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SendToUserResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SendToUserResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SendToUserResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SendToUserResult, a, b2);
        }
    })();
var SendToUserResult = SendToUserResult$Runtime;
SendToUserResult.runtime = proto3;
SendToUserResult.typeName = "agent.v1.SendToUserResult";
SendToUserResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: SendToUserSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: SendToUserError,
            oneof: "result"
        }
    ]);
var SendToUserToolCall$Runtime = (()=>class _SendToUserToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SendToUserToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SendToUserToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SendToUserToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SendToUserToolCall, a, b2);
        }
    })();
var SendToUserToolCall = SendToUserToolCall$Runtime;
SendToUserToolCall.runtime = proto3;
SendToUserToolCall.typeName = "agent.v1.SendToUserToolCall";
SendToUserToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: SendToUserArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: SendToUserResult
        }
    ]);
export { SendToUserArgs, SendToUserError, SendToUserResult, SendToUserSuccess, SendToUserToolCall };
