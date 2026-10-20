import { Message, proto3 } from "@bufbuild/protobuf";
var PiEditReplacement$Runtime = (()=>class _PiEditReplacement extends Message {
        constructor(data){
            super();
            this.oldText = "";
            this.newText = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiEditReplacement().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiEditReplacement().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiEditReplacement().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiEditReplacement, a, b2);
        }
    })();
var PiEditReplacement = PiEditReplacement$Runtime;
PiEditReplacement.runtime = proto3;
PiEditReplacement.typeName = "agent.v1.PiEditReplacement";
PiEditReplacement.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "old_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "new_text",
            kind: "scalar",
            T: 9
        }
    ]);
var PiEditToolCall$Runtime = (()=>class _PiEditToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiEditToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiEditToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiEditToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiEditToolCall, a, b2);
        }
    })();
var PiEditToolCall = PiEditToolCall$Runtime;
PiEditToolCall.runtime = proto3;
PiEditToolCall.typeName = "agent.v1.PiEditToolCall";
PiEditToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: PiEditToolArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: PiEditToolResult
        }
    ]);
var PiEditToolArgs$Runtime = (()=>class _PiEditToolArgs extends Message {
        constructor(data){
            super();
            this.path = "";
            this.edits = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiEditToolArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiEditToolArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiEditToolArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiEditToolArgs, a, b2);
        }
    })();
var PiEditToolArgs = PiEditToolArgs$Runtime;
PiEditToolArgs.runtime = proto3;
PiEditToolArgs.typeName = "agent.v1.PiEditToolArgs";
PiEditToolArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "edits",
            kind: "message",
            T: PiEditReplacement,
            repeated: true
        }
    ]);
var PiEditToolResult$Runtime = (()=>class _PiEditToolResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiEditToolResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiEditToolResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiEditToolResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiEditToolResult, a, b2);
        }
    })();
var PiEditToolResult = PiEditToolResult$Runtime;
PiEditToolResult.runtime = proto3;
PiEditToolResult.typeName = "agent.v1.PiEditToolResult";
PiEditToolResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: PiEditToolSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: PiEditToolError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: PiEditToolRejected,
            oneof: "result"
        }
    ]);
var PiEditToolSuccess$Runtime = (()=>class _PiEditToolSuccess extends Message {
        constructor(data){
            super();
            this.output = "";
            this.diff = "";
            this.patch = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiEditToolSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiEditToolSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiEditToolSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiEditToolSuccess, a, b2);
        }
    })();
var PiEditToolSuccess = PiEditToolSuccess$Runtime;
PiEditToolSuccess.runtime = proto3;
PiEditToolSuccess.typeName = "agent.v1.PiEditToolSuccess";
PiEditToolSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "output",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "diff",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "patch",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "first_changed_line",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
var PiEditToolError$Runtime = (()=>class _PiEditToolError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiEditToolError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiEditToolError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiEditToolError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiEditToolError, a, b2);
        }
    })();
var PiEditToolError = PiEditToolError$Runtime;
PiEditToolError.runtime = proto3;
PiEditToolError.typeName = "agent.v1.PiEditToolError";
PiEditToolError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var PiEditToolRejected$Runtime = (()=>class _PiEditToolRejected extends Message {
        constructor(data){
            super();
            this.reason = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiEditToolRejected().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiEditToolRejected().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiEditToolRejected().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiEditToolRejected, a, b2);
        }
    })();
var PiEditToolRejected = PiEditToolRejected$Runtime;
PiEditToolRejected.runtime = proto3;
PiEditToolRejected.typeName = "agent.v1.PiEditToolRejected";
PiEditToolRejected.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
export { PiEditReplacement, PiEditToolArgs, PiEditToolCall, PiEditToolError, PiEditToolRejected, PiEditToolResult, PiEditToolSuccess };
