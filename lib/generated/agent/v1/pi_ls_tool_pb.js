import { Message, proto3 } from "@bufbuild/protobuf";
import { PiTruncation } from "./pi_common_pb.js";
var PiLsToolCall$Runtime = (()=>class _PiLsToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiLsToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiLsToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiLsToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiLsToolCall, a, b2);
        }
    })();
var PiLsToolCall = PiLsToolCall$Runtime;
PiLsToolCall.runtime = proto3;
PiLsToolCall.typeName = "agent.v1.PiLsToolCall";
PiLsToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: PiLsToolArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: PiLsToolResult
        }
    ]);
var PiLsToolArgs$Runtime = (()=>class _PiLsToolArgs extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiLsToolArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiLsToolArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiLsToolArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiLsToolArgs, a, b2);
        }
    })();
var PiLsToolArgs = PiLsToolArgs$Runtime;
PiLsToolArgs.runtime = proto3;
PiLsToolArgs.typeName = "agent.v1.PiLsToolArgs";
PiLsToolArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
var PiLsToolResult$Runtime = (()=>class _PiLsToolResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiLsToolResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiLsToolResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiLsToolResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiLsToolResult, a, b2);
        }
    })();
var PiLsToolResult = PiLsToolResult$Runtime;
PiLsToolResult.runtime = proto3;
PiLsToolResult.typeName = "agent.v1.PiLsToolResult";
PiLsToolResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: PiLsToolSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: PiLsToolError,
            oneof: "result"
        }
    ]);
var PiLsToolSuccess$Runtime = (()=>class _PiLsToolSuccess extends Message {
        constructor(data){
            super();
            this.output = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiLsToolSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiLsToolSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiLsToolSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiLsToolSuccess, a, b2);
        }
    })();
var PiLsToolSuccess = PiLsToolSuccess$Runtime;
PiLsToolSuccess.runtime = proto3;
PiLsToolSuccess.typeName = "agent.v1.PiLsToolSuccess";
PiLsToolSuccess.fields = proto3.util.newFieldList(()=>[
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
            name: "entry_limit_reached",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
var PiLsToolError$Runtime = (()=>class _PiLsToolError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiLsToolError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiLsToolError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiLsToolError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiLsToolError, a, b2);
        }
    })();
var PiLsToolError = PiLsToolError$Runtime;
PiLsToolError.runtime = proto3;
PiLsToolError.typeName = "agent.v1.PiLsToolError";
PiLsToolError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
export { PiLsToolArgs, PiLsToolCall, PiLsToolError, PiLsToolResult, PiLsToolSuccess };
