import { Message, proto3 } from "@bufbuild/protobuf";
import { PiTruncation } from "./pi_common_pb.js";
var PiReadToolCall$Runtime = (()=>class _PiReadToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiReadToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiReadToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiReadToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiReadToolCall, a, b2);
        }
    })();
var PiReadToolCall = PiReadToolCall$Runtime;
PiReadToolCall.runtime = proto3;
PiReadToolCall.typeName = "agent.v1.PiReadToolCall";
PiReadToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: PiReadToolArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: PiReadToolResult
        }
    ]);
var PiReadToolArgs$Runtime = (()=>class _PiReadToolArgs extends Message {
        constructor(data){
            super();
            this.path = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiReadToolArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiReadToolArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiReadToolArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiReadToolArgs, a, b2);
        }
    })();
var PiReadToolArgs = PiReadToolArgs$Runtime;
PiReadToolArgs.runtime = proto3;
PiReadToolArgs.typeName = "agent.v1.PiReadToolArgs";
PiReadToolArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "offset",
            kind: "scalar",
            T: 5,
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
var PiReadToolResult$Runtime = (()=>class _PiReadToolResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiReadToolResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiReadToolResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiReadToolResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiReadToolResult, a, b2);
        }
    })();
var PiReadToolResult = PiReadToolResult$Runtime;
PiReadToolResult.runtime = proto3;
PiReadToolResult.typeName = "agent.v1.PiReadToolResult";
PiReadToolResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: PiReadToolSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: PiReadToolError,
            oneof: "result"
        }
    ]);
var PiReadToolSuccess$Runtime = (()=>class _PiReadToolSuccess extends Message {
        constructor(data){
            super();
            this.output = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiReadToolSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiReadToolSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiReadToolSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiReadToolSuccess, a, b2);
        }
    })();
var PiReadToolSuccess = PiReadToolSuccess$Runtime;
PiReadToolSuccess.runtime = proto3;
PiReadToolSuccess.typeName = "agent.v1.PiReadToolSuccess";
PiReadToolSuccess.fields = proto3.util.newFieldList(()=>[
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
        }
    ]);
var PiReadToolError$Runtime = (()=>class _PiReadToolError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiReadToolError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiReadToolError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiReadToolError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiReadToolError, a, b2);
        }
    })();
var PiReadToolError = PiReadToolError$Runtime;
PiReadToolError.runtime = proto3;
PiReadToolError.typeName = "agent.v1.PiReadToolError";
PiReadToolError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
export { PiReadToolArgs, PiReadToolCall, PiReadToolError, PiReadToolResult, PiReadToolSuccess };
