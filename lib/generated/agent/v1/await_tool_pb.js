import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
var AwaitArgs$Runtime = (()=>class _AwaitArgs extends Message {
        constructor(data){
            super();
            this.taskId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AwaitArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AwaitArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AwaitArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AwaitArgs, a, b2);
        }
    })();
var AwaitArgs = AwaitArgs$Runtime;
AwaitArgs.runtime = proto3;
AwaitArgs.typeName = "agent.v1.AwaitArgs";
AwaitArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "task_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "block_until_ms",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 3,
            name: "regex",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var AwaitTaskComplete$Runtime = (()=>class _AwaitTaskComplete extends Message {
        constructor(data){
            super();
            this.taskId = "";
            this.runtimeMs = protoInt64.zero;
            this.outputFilePath = "";
            this.outputLength = protoInt64.zero;
            this.regexRequested = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AwaitTaskComplete().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AwaitTaskComplete().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AwaitTaskComplete().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AwaitTaskComplete, a, b2);
        }
    })();
var AwaitTaskComplete = AwaitTaskComplete$Runtime;
AwaitTaskComplete.runtime = proto3;
AwaitTaskComplete.typeName = "agent.v1.AwaitTaskComplete";
AwaitTaskComplete.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "task_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "runtime_ms",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "output_file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "output_length",
            kind: "scalar",
            T: 4
        },
        {
            no: 5,
            name: "regex_requested",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "regex_match",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "exit_code",
            kind: "scalar",
            T: 17,
            opt: true
        },
        {
            no: 8,
            name: "wake_reason",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var AwaitTaskStillRunning$Runtime = (()=>class _AwaitTaskStillRunning extends Message {
        constructor(data){
            super();
            this.taskId = "";
            this.runtimeMs = protoInt64.zero;
            this.outputFilePath = "";
            this.outputLength = protoInt64.zero;
            this.regexRequested = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AwaitTaskStillRunning().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AwaitTaskStillRunning().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AwaitTaskStillRunning().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AwaitTaskStillRunning, a, b2);
        }
    })();
var AwaitTaskStillRunning = AwaitTaskStillRunning$Runtime;
AwaitTaskStillRunning.runtime = proto3;
AwaitTaskStillRunning.typeName = "agent.v1.AwaitTaskStillRunning";
AwaitTaskStillRunning.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "task_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "runtime_ms",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "output_file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "output_length",
            kind: "scalar",
            T: 4
        },
        {
            no: 5,
            name: "regex_requested",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "regex_match",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "wake_reason",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var AwaitError$Runtime = (()=>class _AwaitError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AwaitError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AwaitError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AwaitError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AwaitError, a, b2);
        }
    })();
var AwaitError = AwaitError$Runtime;
AwaitError.runtime = proto3;
AwaitError.typeName = "agent.v1.AwaitError";
AwaitError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var AwaitSuccess$Runtime = (()=>class _AwaitSuccess extends Message {
        constructor(data){
            super();
            this.awaitResult = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AwaitSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AwaitSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AwaitSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AwaitSuccess, a, b2);
        }
    })();
var AwaitSuccess = AwaitSuccess$Runtime;
AwaitSuccess.runtime = proto3;
AwaitSuccess.typeName = "agent.v1.AwaitSuccess";
AwaitSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "complete",
            kind: "message",
            T: AwaitTaskComplete,
            oneof: "await_result"
        },
        {
            no: 2,
            name: "still_running",
            kind: "message",
            T: AwaitTaskStillRunning,
            oneof: "await_result"
        }
    ]);
var AwaitResult$Runtime = (()=>class _AwaitResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AwaitResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AwaitResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AwaitResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AwaitResult, a, b2);
        }
    })();
var AwaitResult = AwaitResult$Runtime;
AwaitResult.runtime = proto3;
AwaitResult.typeName = "agent.v1.AwaitResult";
AwaitResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "complete",
            kind: "message",
            T: AwaitTaskComplete,
            oneof: "result"
        },
        {
            no: 2,
            name: "still_running",
            kind: "message",
            T: AwaitTaskStillRunning,
            oneof: "result"
        },
        {
            no: 3,
            name: "error",
            kind: "message",
            T: AwaitError,
            oneof: "result"
        },
        {
            no: 4,
            name: "success",
            kind: "message",
            T: AwaitSuccess,
            oneof: "result"
        }
    ]);
var AwaitToolCall$Runtime = (()=>class _AwaitToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AwaitToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AwaitToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AwaitToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AwaitToolCall, a, b2);
        }
    })();
var AwaitToolCall = AwaitToolCall$Runtime;
AwaitToolCall.runtime = proto3;
AwaitToolCall.typeName = "agent.v1.AwaitToolCall";
AwaitToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: AwaitArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: AwaitResult
        }
    ]);
export { AwaitArgs, AwaitError, AwaitResult, AwaitSuccess, AwaitTaskComplete, AwaitTaskStillRunning, AwaitToolCall };
