import { Message, proto3 } from "@bufbuild/protobuf";
var StartGrindExecutionArgs$Runtime = (()=>class _StartGrindExecutionArgs extends Message {
        constructor(data){
            super();
            this.toolCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _StartGrindExecutionArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _StartGrindExecutionArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _StartGrindExecutionArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_StartGrindExecutionArgs, a, b2);
        }
    })();
var StartGrindExecutionArgs = StartGrindExecutionArgs$Runtime;
StartGrindExecutionArgs.runtime = proto3;
StartGrindExecutionArgs.typeName = "agent.v1.StartGrindExecutionArgs";
StartGrindExecutionArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "explanation",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
var StartGrindExecutionResult$Runtime = (()=>class _StartGrindExecutionResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _StartGrindExecutionResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _StartGrindExecutionResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _StartGrindExecutionResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_StartGrindExecutionResult, a, b2);
        }
    })();
var StartGrindExecutionResult = StartGrindExecutionResult$Runtime;
StartGrindExecutionResult.runtime = proto3;
StartGrindExecutionResult.typeName = "agent.v1.StartGrindExecutionResult";
StartGrindExecutionResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: StartGrindExecutionSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: StartGrindExecutionError,
            oneof: "result"
        }
    ]);
var StartGrindExecutionSuccess$Runtime = (()=>class _StartGrindExecutionSuccess extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _StartGrindExecutionSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _StartGrindExecutionSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _StartGrindExecutionSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_StartGrindExecutionSuccess, a, b2);
        }
    })();
var StartGrindExecutionSuccess = StartGrindExecutionSuccess$Runtime;
StartGrindExecutionSuccess.runtime = proto3;
StartGrindExecutionSuccess.typeName = "agent.v1.StartGrindExecutionSuccess";
StartGrindExecutionSuccess.fields = proto3.util.newFieldList(()=>[]);
var StartGrindExecutionError$Runtime = (()=>class _StartGrindExecutionError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _StartGrindExecutionError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _StartGrindExecutionError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _StartGrindExecutionError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_StartGrindExecutionError, a, b2);
        }
    })();
var StartGrindExecutionError = StartGrindExecutionError$Runtime;
StartGrindExecutionError.runtime = proto3;
StartGrindExecutionError.typeName = "agent.v1.StartGrindExecutionError";
StartGrindExecutionError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var StartGrindExecutionToolCall$Runtime = (()=>class _StartGrindExecutionToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _StartGrindExecutionToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _StartGrindExecutionToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _StartGrindExecutionToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_StartGrindExecutionToolCall, a, b2);
        }
    })();
var StartGrindExecutionToolCall = StartGrindExecutionToolCall$Runtime;
StartGrindExecutionToolCall.runtime = proto3;
StartGrindExecutionToolCall.typeName = "agent.v1.StartGrindExecutionToolCall";
StartGrindExecutionToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: StartGrindExecutionArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: StartGrindExecutionResult
        }
    ]);
export { StartGrindExecutionArgs, StartGrindExecutionError, StartGrindExecutionResult, StartGrindExecutionSuccess, StartGrindExecutionToolCall };
