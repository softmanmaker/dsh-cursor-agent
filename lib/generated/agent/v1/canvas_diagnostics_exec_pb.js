import { Message, proto3 } from "@bufbuild/protobuf";
import { Diagnostic } from "./diagnostics_exec_pb.js";
var CanvasDiagnosticsArgs$Runtime = (()=>class _CanvasDiagnosticsArgs extends Message {
        constructor(data){
            super();
            this.path = "";
            this.toolCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _CanvasDiagnosticsArgs().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _CanvasDiagnosticsArgs().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _CanvasDiagnosticsArgs().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CanvasDiagnosticsArgs, a, b2);
        }
    })();
var CanvasDiagnosticsArgs = CanvasDiagnosticsArgs$Runtime;
CanvasDiagnosticsArgs.runtime = proto3;
CanvasDiagnosticsArgs.typeName = "agent.v1.CanvasDiagnosticsArgs";
CanvasDiagnosticsArgs.fields = proto3.util.newFieldList(()=>[
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
var CanvasDiagnosticsResult$Runtime = (()=>class _CanvasDiagnosticsResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _CanvasDiagnosticsResult().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _CanvasDiagnosticsResult().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _CanvasDiagnosticsResult().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CanvasDiagnosticsResult, a, b2);
        }
    })();
var CanvasDiagnosticsResult = CanvasDiagnosticsResult$Runtime;
CanvasDiagnosticsResult.runtime = proto3;
CanvasDiagnosticsResult.typeName = "agent.v1.CanvasDiagnosticsResult";
CanvasDiagnosticsResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: CanvasDiagnosticsSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: CanvasDiagnosticsError,
            oneof: "result"
        }
    ]);
var CanvasDiagnosticsSuccess$Runtime = (()=>class _CanvasDiagnosticsSuccess extends Message {
        constructor(data){
            super();
            this.path = "";
            this.diagnostics = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _CanvasDiagnosticsSuccess().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _CanvasDiagnosticsSuccess().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _CanvasDiagnosticsSuccess().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CanvasDiagnosticsSuccess, a, b2);
        }
    })();
var CanvasDiagnosticsSuccess = CanvasDiagnosticsSuccess$Runtime;
CanvasDiagnosticsSuccess.runtime = proto3;
CanvasDiagnosticsSuccess.typeName = "agent.v1.CanvasDiagnosticsSuccess";
CanvasDiagnosticsSuccess.fields = proto3.util.newFieldList(()=>[
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
        }
    ]);
var CanvasDiagnosticsError$Runtime = (()=>class _CanvasDiagnosticsError extends Message {
        constructor(data){
            super();
            this.path = "";
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _CanvasDiagnosticsError().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _CanvasDiagnosticsError().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _CanvasDiagnosticsError().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CanvasDiagnosticsError, a, b2);
        }
    })();
var CanvasDiagnosticsError = CanvasDiagnosticsError$Runtime;
CanvasDiagnosticsError.runtime = proto3;
CanvasDiagnosticsError.typeName = "agent.v1.CanvasDiagnosticsError";
CanvasDiagnosticsError.fields = proto3.util.newFieldList(()=>[
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
export { CanvasDiagnosticsArgs, CanvasDiagnosticsError, CanvasDiagnosticsResult, CanvasDiagnosticsSuccess };
