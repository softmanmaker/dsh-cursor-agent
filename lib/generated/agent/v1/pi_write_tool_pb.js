import { Message, proto3 } from "@bufbuild/protobuf";
var PiWriteToolCall$Runtime = (()=>class _PiWriteToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiWriteToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiWriteToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiWriteToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiWriteToolCall, a, b2);
        }
    })();
var PiWriteToolCall = PiWriteToolCall$Runtime;
PiWriteToolCall.runtime = proto3;
PiWriteToolCall.typeName = "agent.v1.PiWriteToolCall";
PiWriteToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: PiWriteToolArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: PiWriteToolResult
        }
    ]);
var PiWriteToolArgs$Runtime = (()=>class _PiWriteToolArgs extends Message {
        constructor(data){
            super();
            this.path = "";
            this.content = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiWriteToolArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiWriteToolArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiWriteToolArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiWriteToolArgs, a, b2);
        }
    })();
var PiWriteToolArgs = PiWriteToolArgs$Runtime;
PiWriteToolArgs.runtime = proto3;
PiWriteToolArgs.typeName = "agent.v1.PiWriteToolArgs";
PiWriteToolArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]);
var PiWriteToolResult$Runtime = (()=>class _PiWriteToolResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiWriteToolResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiWriteToolResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiWriteToolResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiWriteToolResult, a, b2);
        }
    })();
var PiWriteToolResult = PiWriteToolResult$Runtime;
PiWriteToolResult.runtime = proto3;
PiWriteToolResult.typeName = "agent.v1.PiWriteToolResult";
PiWriteToolResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: PiWriteToolSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: PiWriteToolError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: PiWriteToolRejected,
            oneof: "result"
        }
    ]);
var PiWriteToolSuccess$Runtime = (()=>class _PiWriteToolSuccess extends Message {
        constructor(data){
            super();
            this.output = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiWriteToolSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiWriteToolSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiWriteToolSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiWriteToolSuccess, a, b2);
        }
    })();
var PiWriteToolSuccess = PiWriteToolSuccess$Runtime;
PiWriteToolSuccess.runtime = proto3;
PiWriteToolSuccess.typeName = "agent.v1.PiWriteToolSuccess";
PiWriteToolSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "output",
            kind: "scalar",
            T: 9
        }
    ]);
var PiWriteToolError$Runtime = (()=>class _PiWriteToolError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiWriteToolError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiWriteToolError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiWriteToolError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiWriteToolError, a, b2);
        }
    })();
var PiWriteToolError = PiWriteToolError$Runtime;
PiWriteToolError.runtime = proto3;
PiWriteToolError.typeName = "agent.v1.PiWriteToolError";
PiWriteToolError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var PiWriteToolRejected$Runtime = (()=>class _PiWriteToolRejected extends Message {
        constructor(data){
            super();
            this.reason = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiWriteToolRejected().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiWriteToolRejected().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiWriteToolRejected().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiWriteToolRejected, a, b2);
        }
    })();
var PiWriteToolRejected = PiWriteToolRejected$Runtime;
PiWriteToolRejected.runtime = proto3;
PiWriteToolRejected.typeName = "agent.v1.PiWriteToolRejected";
PiWriteToolRejected.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
export { PiWriteToolArgs, PiWriteToolCall, PiWriteToolError, PiWriteToolRejected, PiWriteToolResult, PiWriteToolSuccess };
