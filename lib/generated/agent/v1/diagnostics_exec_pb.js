import { Message, proto3 } from "@bufbuild/protobuf";
import { Range } from "./utils_pb.js";
var DiagnosticSeverity;
(function(DiagnosticSeverity2) {
    DiagnosticSeverity2[DiagnosticSeverity2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    DiagnosticSeverity2[DiagnosticSeverity2["ERROR"] = 1] = "ERROR";
    DiagnosticSeverity2[DiagnosticSeverity2["WARNING"] = 2] = "WARNING";
    DiagnosticSeverity2[DiagnosticSeverity2["INFORMATION"] = 3] = "INFORMATION";
    DiagnosticSeverity2[DiagnosticSeverity2["HINT"] = 4] = "HINT";
})(DiagnosticSeverity || (DiagnosticSeverity = {}));
proto3.util.setEnumType(DiagnosticSeverity, "agent.v1.DiagnosticSeverity", [
    {
        no: 0,
        name: "DIAGNOSTIC_SEVERITY_UNSPECIFIED"
    },
    {
        no: 1,
        name: "DIAGNOSTIC_SEVERITY_ERROR"
    },
    {
        no: 2,
        name: "DIAGNOSTIC_SEVERITY_WARNING"
    },
    {
        no: 3,
        name: "DIAGNOSTIC_SEVERITY_INFORMATION"
    },
    {
        no: 4,
        name: "DIAGNOSTIC_SEVERITY_HINT"
    }
]);
var DiagnosticsArgs$Runtime = (()=>class _DiagnosticsArgs extends Message {
        constructor(data){
            super();
            this.path = "";
            this.toolCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _DiagnosticsArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _DiagnosticsArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _DiagnosticsArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_DiagnosticsArgs, a, b2);
        }
    })();
var DiagnosticsArgs = DiagnosticsArgs$Runtime;
DiagnosticsArgs.runtime = proto3;
DiagnosticsArgs.typeName = "agent.v1.DiagnosticsArgs";
DiagnosticsArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
var DiagnosticsResult$Runtime = (()=>class _DiagnosticsResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _DiagnosticsResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _DiagnosticsResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _DiagnosticsResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_DiagnosticsResult, a, b2);
        }
    })();
var DiagnosticsResult = DiagnosticsResult$Runtime;
DiagnosticsResult.runtime = proto3;
DiagnosticsResult.typeName = "agent.v1.DiagnosticsResult";
DiagnosticsResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: DiagnosticsSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: DiagnosticsError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: DiagnosticsRejected,
            oneof: "result"
        },
        {
            no: 4,
            name: "file_not_found",
            kind: "message",
            T: DiagnosticsFileNotFound,
            oneof: "result"
        },
        {
            no: 5,
            name: "permission_denied",
            kind: "message",
            T: DiagnosticsPermissionDenied,
            oneof: "result"
        }
    ]);
var DiagnosticsSuccess$Runtime = (()=>class _DiagnosticsSuccess extends Message {
        constructor(data){
            super();
            this.path = "";
            this.diagnostics = [];
            this.totalDiagnostics = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _DiagnosticsSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _DiagnosticsSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _DiagnosticsSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_DiagnosticsSuccess, a, b2);
        }
    })();
var DiagnosticsSuccess = DiagnosticsSuccess$Runtime;
DiagnosticsSuccess.runtime = proto3;
DiagnosticsSuccess.typeName = "agent.v1.DiagnosticsSuccess";
DiagnosticsSuccess.fields = proto3.util.newFieldList(()=>[
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
            T: Diagnostic,
            repeated: true
        },
        {
            no: 3,
            name: "total_diagnostics",
            kind: "scalar",
            T: 5
        }
    ]);
var Diagnostic$Runtime = (()=>class _Diagnostic extends Message {
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
            return new _Diagnostic().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _Diagnostic().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _Diagnostic().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_Diagnostic, a, b2);
        }
    })();
var Diagnostic = Diagnostic$Runtime;
Diagnostic.runtime = proto3;
Diagnostic.typeName = "agent.v1.Diagnostic";
Diagnostic.fields = proto3.util.newFieldList(()=>[
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
            T: Range
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
var DiagnosticsError$Runtime = (()=>class _DiagnosticsError extends Message {
        constructor(data){
            super();
            this.path = "";
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _DiagnosticsError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _DiagnosticsError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _DiagnosticsError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_DiagnosticsError, a, b2);
        }
    })();
var DiagnosticsError = DiagnosticsError$Runtime;
DiagnosticsError.runtime = proto3;
DiagnosticsError.typeName = "agent.v1.DiagnosticsError";
DiagnosticsError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var DiagnosticsRejected$Runtime = (()=>class _DiagnosticsRejected extends Message {
        constructor(data){
            super();
            this.path = "";
            this.reason = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _DiagnosticsRejected().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _DiagnosticsRejected().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _DiagnosticsRejected().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_DiagnosticsRejected, a, b2);
        }
    })();
var DiagnosticsRejected = DiagnosticsRejected$Runtime;
DiagnosticsRejected.runtime = proto3;
DiagnosticsRejected.typeName = "agent.v1.DiagnosticsRejected";
DiagnosticsRejected.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
var DiagnosticsFileNotFound$Runtime = (()=>class _DiagnosticsFileNotFound extends Message {
        constructor(data){
            super();
            this.path = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _DiagnosticsFileNotFound().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _DiagnosticsFileNotFound().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _DiagnosticsFileNotFound().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_DiagnosticsFileNotFound, a, b2);
        }
    })();
var DiagnosticsFileNotFound = DiagnosticsFileNotFound$Runtime;
DiagnosticsFileNotFound.runtime = proto3;
DiagnosticsFileNotFound.typeName = "agent.v1.DiagnosticsFileNotFound";
DiagnosticsFileNotFound.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]);
var DiagnosticsPermissionDenied$Runtime = (()=>class _DiagnosticsPermissionDenied extends Message {
        constructor(data){
            super();
            this.path = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _DiagnosticsPermissionDenied().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _DiagnosticsPermissionDenied().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _DiagnosticsPermissionDenied().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_DiagnosticsPermissionDenied, a, b2);
        }
    })();
var DiagnosticsPermissionDenied = DiagnosticsPermissionDenied$Runtime;
DiagnosticsPermissionDenied.runtime = proto3;
DiagnosticsPermissionDenied.typeName = "agent.v1.DiagnosticsPermissionDenied";
DiagnosticsPermissionDenied.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]);
export { Diagnostic, DiagnosticSeverity, DiagnosticsArgs, DiagnosticsError, DiagnosticsFileNotFound, DiagnosticsPermissionDenied, DiagnosticsRejected, DiagnosticsResult, DiagnosticsSuccess };
