import { Message, proto3 } from "@bufbuild/protobuf";
var BlameByFilePathArgs$Runtime = (()=>class _BlameByFilePathArgs extends Message {
        constructor(data){
            super();
            this.filePath = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _BlameByFilePathArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _BlameByFilePathArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _BlameByFilePathArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_BlameByFilePathArgs, a, b2);
        }
    })();
var BlameByFilePathArgs = BlameByFilePathArgs$Runtime;
BlameByFilePathArgs.runtime = proto3;
BlameByFilePathArgs.typeName = "agent.v1.BlameByFilePathArgs";
BlameByFilePathArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 3,
            name: "end_line",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
var BlameByFilePathSuccess$Runtime = (()=>class _BlameByFilePathSuccess extends Message {
        constructor(data){
            super();
            this.content = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _BlameByFilePathSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _BlameByFilePathSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _BlameByFilePathSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_BlameByFilePathSuccess, a, b2);
        }
    })();
var BlameByFilePathSuccess = BlameByFilePathSuccess$Runtime;
BlameByFilePathSuccess.runtime = proto3;
BlameByFilePathSuccess.typeName = "agent.v1.BlameByFilePathSuccess";
BlameByFilePathSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]);
var BlameByFilePathError$Runtime = (()=>class _BlameByFilePathError extends Message {
        constructor(data){
            super();
            this.errorMessage = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _BlameByFilePathError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _BlameByFilePathError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _BlameByFilePathError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_BlameByFilePathError, a, b2);
        }
    })();
var BlameByFilePathError = BlameByFilePathError$Runtime;
BlameByFilePathError.runtime = proto3;
BlameByFilePathError.typeName = "agent.v1.BlameByFilePathError";
BlameByFilePathError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]);
var BlameByFilePathResult$Runtime = (()=>class _BlameByFilePathResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _BlameByFilePathResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _BlameByFilePathResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _BlameByFilePathResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_BlameByFilePathResult, a, b2);
        }
    })();
var BlameByFilePathResult = BlameByFilePathResult$Runtime;
BlameByFilePathResult.runtime = proto3;
BlameByFilePathResult.typeName = "agent.v1.BlameByFilePathResult";
BlameByFilePathResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: BlameByFilePathSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: BlameByFilePathError,
            oneof: "result"
        }
    ]);
var BlameByFilePathToolCall$Runtime = (()=>class _BlameByFilePathToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _BlameByFilePathToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _BlameByFilePathToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _BlameByFilePathToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_BlameByFilePathToolCall, a, b2);
        }
    })();
var BlameByFilePathToolCall = BlameByFilePathToolCall$Runtime;
BlameByFilePathToolCall.runtime = proto3;
BlameByFilePathToolCall.typeName = "agent.v1.BlameByFilePathToolCall";
BlameByFilePathToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: BlameByFilePathArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: BlameByFilePathResult
        }
    ]);
export { BlameByFilePathArgs, BlameByFilePathError, BlameByFilePathResult, BlameByFilePathSuccess, BlameByFilePathToolCall };
