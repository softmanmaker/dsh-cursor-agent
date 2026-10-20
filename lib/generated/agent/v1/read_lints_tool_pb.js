import { Message, proto3 } from "@bufbuild/protobuf";
import { DiagnosticSeverity } from "./diagnostics_exec_pb.js";
import { Position } from "./utils_pb.js";
var ReadLintsToolCall$Runtime = (()=>class _ReadLintsToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReadLintsToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReadLintsToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReadLintsToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadLintsToolCall, a, b2);
        }
    })();
var ReadLintsToolCall = ReadLintsToolCall$Runtime;
ReadLintsToolCall.runtime = proto3;
ReadLintsToolCall.typeName = "agent.v1.ReadLintsToolCall";
ReadLintsToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ReadLintsToolArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: ReadLintsToolResult
        }
    ]);
var ReadLintsToolArgs$Runtime = (()=>class _ReadLintsToolArgs extends Message {
        constructor(data){
            super();
            this.paths = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReadLintsToolArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReadLintsToolArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReadLintsToolArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadLintsToolArgs, a, b2);
        }
    })();
var ReadLintsToolArgs = ReadLintsToolArgs$Runtime;
ReadLintsToolArgs.runtime = proto3;
ReadLintsToolArgs.typeName = "agent.v1.ReadLintsToolArgs";
ReadLintsToolArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "paths",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var ReadLintsToolResult$Runtime = (()=>class _ReadLintsToolResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReadLintsToolResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReadLintsToolResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReadLintsToolResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadLintsToolResult, a, b2);
        }
    })();
var ReadLintsToolResult = ReadLintsToolResult$Runtime;
ReadLintsToolResult.runtime = proto3;
ReadLintsToolResult.typeName = "agent.v1.ReadLintsToolResult";
ReadLintsToolResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ReadLintsToolSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: ReadLintsToolError,
            oneof: "result"
        }
    ]);
var ReadLintsToolSuccess$Runtime = (()=>class _ReadLintsToolSuccess extends Message {
        constructor(data){
            super();
            this.fileDiagnostics = [];
            this.totalFiles = 0;
            this.totalDiagnostics = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReadLintsToolSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReadLintsToolSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReadLintsToolSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadLintsToolSuccess, a, b2);
        }
    })();
var ReadLintsToolSuccess = ReadLintsToolSuccess$Runtime;
ReadLintsToolSuccess.runtime = proto3;
ReadLintsToolSuccess.typeName = "agent.v1.ReadLintsToolSuccess";
ReadLintsToolSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "file_diagnostics",
            kind: "message",
            T: FileDiagnostics,
            repeated: true
        },
        {
            no: 2,
            name: "total_files",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "total_diagnostics",
            kind: "scalar",
            T: 5
        }
    ]);
var FileDiagnostics$Runtime = (()=>class _FileDiagnostics extends Message {
        constructor(data){
            super();
            this.path = "";
            this.diagnostics = [];
            this.diagnosticsCount = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FileDiagnostics().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FileDiagnostics().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FileDiagnostics().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FileDiagnostics, a, b2);
        }
    })();
var FileDiagnostics = FileDiagnostics$Runtime;
FileDiagnostics.runtime = proto3;
FileDiagnostics.typeName = "agent.v1.FileDiagnostics";
FileDiagnostics.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "diagnostics",
            kind: "message",
            T: DiagnosticItem,
            repeated: true
        },
        {
            no: 3,
            name: "diagnostics_count",
            kind: "scalar",
            T: 5
        }
    ]);
var DiagnosticItem$Runtime = (()=>class _DiagnosticItem extends Message {
        constructor(data){
            super();
            this.severity = DiagnosticSeverity.UNSPECIFIED;
            this.message = "";
            this.source = "";
            this.code = "";
            this.isStale = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _DiagnosticItem().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _DiagnosticItem().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _DiagnosticItem().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_DiagnosticItem, a, b2);
        }
    })();
var DiagnosticItem = DiagnosticItem$Runtime;
DiagnosticItem.runtime = proto3;
DiagnosticItem.typeName = "agent.v1.DiagnosticItem";
DiagnosticItem.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "severity",
            kind: "enum",
            T: proto3.getEnumType(DiagnosticSeverity)
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: DiagnosticRange
        },
        {
            no: 3,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "source",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "code",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "is_stale",
            kind: "scalar",
            T: 8
        }
    ]);
var DiagnosticRange$Runtime = (()=>class _DiagnosticRange extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _DiagnosticRange().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _DiagnosticRange().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _DiagnosticRange().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_DiagnosticRange, a, b2);
        }
    })();
var DiagnosticRange = DiagnosticRange$Runtime;
DiagnosticRange.runtime = proto3;
DiagnosticRange.typeName = "agent.v1.DiagnosticRange";
DiagnosticRange.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "start",
            kind: "message",
            T: Position
        },
        {
            no: 2,
            name: "end",
            kind: "message",
            T: Position
        }
    ]);
var ReadLintsToolError$Runtime = (()=>class _ReadLintsToolError extends Message {
        constructor(data){
            super();
            this.errorMessage = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReadLintsToolError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReadLintsToolError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReadLintsToolError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadLintsToolError, a, b2);
        }
    })();
var ReadLintsToolError = ReadLintsToolError$Runtime;
ReadLintsToolError.runtime = proto3;
ReadLintsToolError.typeName = "agent.v1.ReadLintsToolError";
ReadLintsToolError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]);
export { DiagnosticItem, DiagnosticRange, FileDiagnostics, ReadLintsToolArgs, ReadLintsToolCall, ReadLintsToolError, ReadLintsToolResult, ReadLintsToolSuccess };
