import { Message, proto3 } from "@bufbuild/protobuf";
import { CursorRule } from "./cursor_rules_pb.js";
var ReadToolCall$Runtime = (()=>class _ReadToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReadToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReadToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReadToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadToolCall, a, b2);
        }
    })();
var ReadToolCall = ReadToolCall$Runtime;
ReadToolCall.runtime = proto3;
ReadToolCall.typeName = "agent.v1.ReadToolCall";
ReadToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ReadToolArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: ReadToolResult
        }
    ]);
var ReadToolArgs$Runtime = (()=>class _ReadToolArgs extends Message {
        constructor(data){
            super();
            this.path = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReadToolArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReadToolArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReadToolArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadToolArgs, a, b2);
        }
    })();
var ReadToolArgs = ReadToolArgs$Runtime;
ReadToolArgs.runtime = proto3;
ReadToolArgs.typeName = "agent.v1.ReadToolArgs";
ReadToolArgs.fields = proto3.util.newFieldList(()=>[
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
        },
        {
            no: 5,
            name: "include_line_numbers",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
var ReadToolResult$Runtime = (()=>class _ReadToolResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReadToolResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReadToolResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReadToolResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadToolResult, a, b2);
        }
    })();
var ReadToolResult = ReadToolResult$Runtime;
ReadToolResult.runtime = proto3;
ReadToolResult.typeName = "agent.v1.ReadToolResult";
ReadToolResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ReadToolSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: ReadToolError,
            oneof: "result"
        }
    ]);
var ReadRange$Runtime = (()=>class _ReadRange extends Message {
        constructor(data){
            super();
            this.startLine = 0;
            this.endLine = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReadRange().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReadRange().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReadRange().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadRange, a, b2);
        }
    })();
var ReadRange = ReadRange$Runtime;
ReadRange.runtime = proto3;
ReadRange.typeName = "agent.v1.ReadRange";
ReadRange.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "start_line",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "end_line",
            kind: "scalar",
            T: 13
        }
    ]);
var ReadToolSuccess$Runtime = (()=>class _ReadToolSuccess extends Message {
        constructor(data){
            super();
            this.output = {
                case: void 0
            };
            this.isEmpty = false;
            this.exceededLimit = false;
            this.totalLines = 0;
            this.fileSize = 0;
            this.path = "";
            this.relatedCursorRulePaths = [];
            this.relatedCursorRules = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReadToolSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReadToolSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReadToolSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadToolSuccess, a, b2);
        }
    })();
var ReadToolSuccess = ReadToolSuccess$Runtime;
ReadToolSuccess.runtime = proto3;
ReadToolSuccess.typeName = "agent.v1.ReadToolSuccess";
ReadToolSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9,
            oneof: "output"
        },
        {
            no: 6,
            name: "data",
            kind: "scalar",
            T: 12,
            oneof: "output"
        },
        {
            no: 9,
            name: "data_blob_id",
            kind: "scalar",
            T: 12,
            oneof: "output"
        },
        {
            no: 10,
            name: "content_blob_id",
            kind: "scalar",
            T: 12,
            oneof: "output"
        },
        {
            no: 2,
            name: "is_empty",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "exceeded_limit",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "total_lines",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "file_size",
            kind: "scalar",
            T: 13
        },
        {
            no: 7,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "read_range",
            kind: "message",
            T: ReadRange,
            opt: true
        },
        {
            no: 11,
            name: "include_line_numbers",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 12,
            name: "related_cursor_rule_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 13,
            name: "related_cursor_rules",
            kind: "message",
            T: CursorRule,
            repeated: true
        }
    ]);
var ReadToolError$Runtime = (()=>class _ReadToolError extends Message {
        constructor(data){
            super();
            this.errorMessage = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReadToolError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReadToolError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReadToolError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadToolError, a, b2);
        }
    })();
var ReadToolError = ReadToolError$Runtime;
ReadToolError.runtime = proto3;
ReadToolError.typeName = "agent.v1.ReadToolError";
ReadToolError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]);
export { ReadRange, ReadToolArgs, ReadToolCall, ReadToolError, ReadToolResult, ReadToolSuccess };
