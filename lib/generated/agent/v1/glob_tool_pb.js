import { Message, proto3 } from "@bufbuild/protobuf";
var GlobToolArgs$Runtime = (()=>class _GlobToolArgs extends Message {
        constructor(data){
            super();
            this.globPattern = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GlobToolArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GlobToolArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GlobToolArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GlobToolArgs, a, b2);
        }
    })();
var GlobToolArgs = GlobToolArgs$Runtime;
GlobToolArgs.runtime = proto3;
GlobToolArgs.typeName = "agent.v1.GlobToolArgs";
GlobToolArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "target_directory",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "glob_pattern",
            kind: "scalar",
            T: 9
        }
    ]);
var GlobToolResult$Runtime = (()=>class _GlobToolResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GlobToolResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GlobToolResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GlobToolResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GlobToolResult, a, b2);
        }
    })();
var GlobToolResult = GlobToolResult$Runtime;
GlobToolResult.runtime = proto3;
GlobToolResult.typeName = "agent.v1.GlobToolResult";
GlobToolResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: GlobToolSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: GlobToolError,
            oneof: "result"
        }
    ]);
var GlobToolError$Runtime = (()=>class _GlobToolError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GlobToolError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GlobToolError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GlobToolError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GlobToolError, a, b2);
        }
    })();
var GlobToolError = GlobToolError$Runtime;
GlobToolError.runtime = proto3;
GlobToolError.typeName = "agent.v1.GlobToolError";
GlobToolError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var GlobToolSuccess$Runtime = (()=>class _GlobToolSuccess extends Message {
        constructor(data){
            super();
            this.pattern = "";
            this.path = "";
            this.files = [];
            this.totalFiles = 0;
            this.clientTruncated = false;
            this.ripgrepTruncated = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GlobToolSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GlobToolSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GlobToolSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GlobToolSuccess, a, b2);
        }
    })();
var GlobToolSuccess = GlobToolSuccess$Runtime;
GlobToolSuccess.runtime = proto3;
GlobToolSuccess.typeName = "agent.v1.GlobToolSuccess";
GlobToolSuccess.fields = proto3.util.newFieldList(()=>[
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
            T: 9
        },
        {
            no: 3,
            name: "files",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 4,
            name: "total_files",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "client_truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "ripgrep_truncated",
            kind: "scalar",
            T: 8
        }
    ]);
var GlobToolCall$Runtime = (()=>class _GlobToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GlobToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GlobToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GlobToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GlobToolCall, a, b2);
        }
    })();
var GlobToolCall = GlobToolCall$Runtime;
GlobToolCall.runtime = proto3;
GlobToolCall.typeName = "agent.v1.GlobToolCall";
GlobToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: GlobToolArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: GlobToolResult
        }
    ]);
export { GlobToolArgs, GlobToolCall, GlobToolError, GlobToolResult, GlobToolSuccess };
