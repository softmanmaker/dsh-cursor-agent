import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
var SendMessageText$Runtime = (()=>class _SendMessageText extends Message {
        constructor(data){
            super();
            this.content = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SendMessageText().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SendMessageText().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SendMessageText().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SendMessageText, a, b2);
        }
    })();
var SendMessageText = SendMessageText$Runtime;
SendMessageText.runtime = proto3;
SendMessageText.typeName = "agent.v1.SendMessageText";
SendMessageText.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]);
var SendMessageAttachment$Runtime = (()=>class _SendMessageAttachment extends Message {
        constructor(data){
            super();
            this.url = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SendMessageAttachment().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SendMessageAttachment().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SendMessageAttachment().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SendMessageAttachment, a, b2);
        }
    })();
var SendMessageAttachment = SendMessageAttachment$Runtime;
SendMessageAttachment.runtime = proto3;
SendMessageAttachment.typeName = "agent.v1.SendMessageAttachment";
SendMessageAttachment.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "alt",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var SendMessageArgs$Runtime = (()=>class _SendMessageArgs extends Message {
        constructor(data){
            super();
            this.message = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SendMessageArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SendMessageArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SendMessageArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SendMessageArgs, a, b2);
        }
    })();
var SendMessageArgs = SendMessageArgs$Runtime;
SendMessageArgs.runtime = proto3;
SendMessageArgs.typeName = "agent.v1.SendMessageArgs";
SendMessageArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "text",
            kind: "message",
            T: SendMessageText,
            oneof: "message"
        },
        {
            no: 2,
            name: "attachment",
            kind: "message",
            T: SendMessageAttachment,
            oneof: "message"
        }
    ]);
var SendMessageSuccess$Runtime = (()=>class _SendMessageSuccess extends Message {
        constructor(data){
            super();
            this.timestamp = protoInt64.zero;
            this.messageId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SendMessageSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SendMessageSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SendMessageSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SendMessageSuccess, a, b2);
        }
    })();
var SendMessageSuccess = SendMessageSuccess$Runtime;
SendMessageSuccess.runtime = proto3;
SendMessageSuccess.typeName = "agent.v1.SendMessageSuccess";
SendMessageSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "timestamp",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "message_id",
            kind: "scalar",
            T: 9
        }
    ]);
var SendMessageError$Runtime = (()=>class _SendMessageError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SendMessageError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SendMessageError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SendMessageError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SendMessageError, a, b2);
        }
    })();
var SendMessageError = SendMessageError$Runtime;
SendMessageError.runtime = proto3;
SendMessageError.typeName = "agent.v1.SendMessageError";
SendMessageError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var SendMessageResult$Runtime = (()=>class _SendMessageResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SendMessageResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SendMessageResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SendMessageResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SendMessageResult, a, b2);
        }
    })();
var SendMessageResult = SendMessageResult$Runtime;
SendMessageResult.runtime = proto3;
SendMessageResult.typeName = "agent.v1.SendMessageResult";
SendMessageResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: SendMessageSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: SendMessageError,
            oneof: "result"
        }
    ]);
var SendMessageToolCall$Runtime = (()=>class _SendMessageToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SendMessageToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SendMessageToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SendMessageToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SendMessageToolCall, a, b2);
        }
    })();
var SendMessageToolCall = SendMessageToolCall$Runtime;
SendMessageToolCall.runtime = proto3;
SendMessageToolCall.typeName = "agent.v1.SendMessageToolCall";
SendMessageToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: SendMessageArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: SendMessageResult
        }
    ]);
export { SendMessageArgs, SendMessageAttachment, SendMessageError, SendMessageResult, SendMessageSuccess, SendMessageText, SendMessageToolCall };
