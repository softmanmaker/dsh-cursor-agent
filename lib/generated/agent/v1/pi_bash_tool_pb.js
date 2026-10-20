import { Message, proto3 } from "@bufbuild/protobuf";
import { PiTruncation } from "./pi_common_pb.js";
var PiBashToolCall$Runtime = (()=>class _PiBashToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiBashToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiBashToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiBashToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiBashToolCall, a, b2);
        }
    })();
var PiBashToolCall = PiBashToolCall$Runtime;
PiBashToolCall.runtime = proto3;
PiBashToolCall.typeName = "agent.v1.PiBashToolCall";
PiBashToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: PiBashToolArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: PiBashToolResult
        }
    ]);
var PiBashToolArgs$Runtime = (()=>class _PiBashToolArgs extends Message {
        constructor(data){
            super();
            this.command = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiBashToolArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiBashToolArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiBashToolArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiBashToolArgs, a, b2);
        }
    })();
var PiBashToolArgs = PiBashToolArgs$Runtime;
PiBashToolArgs.runtime = proto3;
PiBashToolArgs.typeName = "agent.v1.PiBashToolArgs";
PiBashToolArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "timeout",
            kind: "scalar",
            T: 1,
            opt: true
        }
    ]);
var PiBashToolResult$Runtime = (()=>class _PiBashToolResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiBashToolResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiBashToolResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiBashToolResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiBashToolResult, a, b2);
        }
    })();
var PiBashToolResult = PiBashToolResult$Runtime;
PiBashToolResult.runtime = proto3;
PiBashToolResult.typeName = "agent.v1.PiBashToolResult";
PiBashToolResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: PiBashToolSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: PiBashToolError,
            oneof: "result"
        }
    ]);
var PiBashToolSuccess$Runtime = (()=>class _PiBashToolSuccess extends Message {
        constructor(data){
            super();
            this.output = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiBashToolSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiBashToolSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiBashToolSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiBashToolSuccess, a, b2);
        }
    })();
var PiBashToolSuccess = PiBashToolSuccess$Runtime;
PiBashToolSuccess.runtime = proto3;
PiBashToolSuccess.typeName = "agent.v1.PiBashToolSuccess";
PiBashToolSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "output",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "truncation",
            kind: "message",
            T: PiTruncation,
            opt: true
        },
        {
            no: 3,
            name: "full_output_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var PiBashToolError$Runtime = (()=>class _PiBashToolError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiBashToolError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiBashToolError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiBashToolError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiBashToolError, a, b2);
        }
    })();
var PiBashToolError = PiBashToolError$Runtime;
PiBashToolError.runtime = proto3;
PiBashToolError.typeName = "agent.v1.PiBashToolError";
PiBashToolError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "truncation",
            kind: "message",
            T: PiTruncation,
            opt: true
        },
        {
            no: 3,
            name: "full_output_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
export { PiBashToolArgs, PiBashToolCall, PiBashToolError, PiBashToolResult, PiBashToolSuccess };
