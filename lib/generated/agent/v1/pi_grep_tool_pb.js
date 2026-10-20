import { Message, proto3 } from "@bufbuild/protobuf";
import { PiTruncation } from "./pi_common_pb.js";
var PiGrepToolCall$Runtime = (()=>class _PiGrepToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiGrepToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiGrepToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiGrepToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiGrepToolCall, a, b2);
        }
    })();
var PiGrepToolCall = PiGrepToolCall$Runtime;
PiGrepToolCall.runtime = proto3;
PiGrepToolCall.typeName = "agent.v1.PiGrepToolCall";
PiGrepToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: PiGrepToolArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: PiGrepToolResult
        }
    ]);
var PiGrepToolArgs$Runtime = (()=>class _PiGrepToolArgs extends Message {
        constructor(data){
            super();
            this.pattern = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiGrepToolArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiGrepToolArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiGrepToolArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiGrepToolArgs, a, b2);
        }
    })();
var PiGrepToolArgs = PiGrepToolArgs$Runtime;
PiGrepToolArgs.runtime = proto3;
PiGrepToolArgs.typeName = "agent.v1.PiGrepToolArgs";
PiGrepToolArgs.fields = proto3.util.newFieldList(()=>[
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
            name: "glob",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "ignore_case",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 5,
            name: "literal",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 6,
            name: "context",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 7,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
var PiGrepToolResult$Runtime = (()=>class _PiGrepToolResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiGrepToolResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiGrepToolResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiGrepToolResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiGrepToolResult, a, b2);
        }
    })();
var PiGrepToolResult = PiGrepToolResult$Runtime;
PiGrepToolResult.runtime = proto3;
PiGrepToolResult.typeName = "agent.v1.PiGrepToolResult";
PiGrepToolResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: PiGrepToolSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: PiGrepToolError,
            oneof: "result"
        }
    ]);
var PiGrepToolSuccess$Runtime = (()=>class _PiGrepToolSuccess extends Message {
        constructor(data){
            super();
            this.output = "";
            this.linesTruncated = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiGrepToolSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiGrepToolSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiGrepToolSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiGrepToolSuccess, a, b2);
        }
    })();
var PiGrepToolSuccess = PiGrepToolSuccess$Runtime;
PiGrepToolSuccess.runtime = proto3;
PiGrepToolSuccess.typeName = "agent.v1.PiGrepToolSuccess";
PiGrepToolSuccess.fields = proto3.util.newFieldList(()=>[
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
            name: "match_limit_reached",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 4,
            name: "lines_truncated",
            kind: "scalar",
            T: 8
        }
    ]);
var PiGrepToolError$Runtime = (()=>class _PiGrepToolError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiGrepToolError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiGrepToolError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiGrepToolError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiGrepToolError, a, b2);
        }
    })();
var PiGrepToolError = PiGrepToolError$Runtime;
PiGrepToolError.runtime = proto3;
PiGrepToolError.typeName = "agent.v1.PiGrepToolError";
PiGrepToolError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
export { PiGrepToolArgs, PiGrepToolCall, PiGrepToolError, PiGrepToolResult, PiGrepToolSuccess };
