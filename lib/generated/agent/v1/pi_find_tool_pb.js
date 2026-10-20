import { Message, proto3 } from "@bufbuild/protobuf";
import { PiTruncation } from "./pi_common_pb.js";
var PiFindToolCall$Runtime = (()=>class _PiFindToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiFindToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiFindToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiFindToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiFindToolCall, a, b2);
        }
    })();
var PiFindToolCall = PiFindToolCall$Runtime;
PiFindToolCall.runtime = proto3;
PiFindToolCall.typeName = "agent.v1.PiFindToolCall";
PiFindToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: PiFindToolArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: PiFindToolResult
        }
    ]);
var PiFindToolArgs$Runtime = (()=>class _PiFindToolArgs extends Message {
        constructor(data){
            super();
            this.pattern = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiFindToolArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiFindToolArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiFindToolArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiFindToolArgs, a, b2);
        }
    })();
var PiFindToolArgs = PiFindToolArgs$Runtime;
PiFindToolArgs.runtime = proto3;
PiFindToolArgs.typeName = "agent.v1.PiFindToolArgs";
PiFindToolArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "pattern",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
var PiFindToolResult$Runtime = (()=>class _PiFindToolResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiFindToolResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiFindToolResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiFindToolResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiFindToolResult, a, b2);
        }
    })();
var PiFindToolResult = PiFindToolResult$Runtime;
PiFindToolResult.runtime = proto3;
PiFindToolResult.typeName = "agent.v1.PiFindToolResult";
PiFindToolResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: PiFindToolSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: PiFindToolError,
            oneof: "result"
        }
    ]);
var PiFindToolSuccess$Runtime = (()=>class _PiFindToolSuccess extends Message {
        constructor(data){
            super();
            this.output = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiFindToolSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiFindToolSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiFindToolSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiFindToolSuccess, a, b2);
        }
    })();
var PiFindToolSuccess = PiFindToolSuccess$Runtime;
PiFindToolSuccess.runtime = proto3;
PiFindToolSuccess.typeName = "agent.v1.PiFindToolSuccess";
PiFindToolSuccess.fields = proto3.util.newFieldList(()=>[
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
            name: "result_limit_reached",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
var PiFindToolError$Runtime = (()=>class _PiFindToolError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiFindToolError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiFindToolError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiFindToolError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiFindToolError, a, b2);
        }
    })();
var PiFindToolError = PiFindToolError$Runtime;
PiFindToolError.runtime = proto3;
PiFindToolError.typeName = "agent.v1.PiFindToolError";
PiFindToolError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
export { PiFindToolArgs, PiFindToolCall, PiFindToolError, PiFindToolResult, PiFindToolSuccess };
