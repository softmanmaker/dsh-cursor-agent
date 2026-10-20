import { Message, proto3 } from "@bufbuild/protobuf";
var ReportBugArgs$Runtime = (()=>class _ReportBugArgs extends Message {
        constructor(data){
            super();
            this.title = "";
            this.file = "";
            this.startLine = 0;
            this.endLine = 0;
            this.description = "";
            this.severity = "";
            this.category = "";
            this.rationale = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReportBugArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReportBugArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReportBugArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReportBugArgs, a, b2);
        }
    })();
var ReportBugArgs = ReportBugArgs$Runtime;
ReportBugArgs.runtime = proto3;
ReportBugArgs.typeName = "agent.v1.ReportBugArgs";
ReportBugArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "end_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "severity",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "category",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "rationale",
            kind: "scalar",
            T: 9
        }
    ]);
var ReportBugSuccess$Runtime = (()=>class _ReportBugSuccess extends Message {
        constructor(data){
            super();
            this.output = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReportBugSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReportBugSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReportBugSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReportBugSuccess, a, b2);
        }
    })();
var ReportBugSuccess = ReportBugSuccess$Runtime;
ReportBugSuccess.runtime = proto3;
ReportBugSuccess.typeName = "agent.v1.ReportBugSuccess";
ReportBugSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "output",
            kind: "scalar",
            T: 9
        }
    ]);
var ReportBugError$Runtime = (()=>class _ReportBugError extends Message {
        constructor(data){
            super();
            this.errorMessage = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReportBugError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReportBugError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReportBugError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReportBugError, a, b2);
        }
    })();
var ReportBugError = ReportBugError$Runtime;
ReportBugError.runtime = proto3;
ReportBugError.typeName = "agent.v1.ReportBugError";
ReportBugError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]);
var ReportBugResult$Runtime = (()=>class _ReportBugResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReportBugResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReportBugResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReportBugResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReportBugResult, a, b2);
        }
    })();
var ReportBugResult = ReportBugResult$Runtime;
ReportBugResult.runtime = proto3;
ReportBugResult.typeName = "agent.v1.ReportBugResult";
ReportBugResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ReportBugSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: ReportBugError,
            oneof: "result"
        }
    ]);
var ReportBugToolCall$Runtime = (()=>class _ReportBugToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReportBugToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReportBugToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReportBugToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReportBugToolCall, a, b2);
        }
    })();
var ReportBugToolCall = ReportBugToolCall$Runtime;
ReportBugToolCall.runtime = proto3;
ReportBugToolCall.typeName = "agent.v1.ReportBugToolCall";
ReportBugToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ReportBugArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: ReportBugResult
        }
    ]);
export { ReportBugArgs, ReportBugError, ReportBugResult, ReportBugSuccess, ReportBugToolCall };
