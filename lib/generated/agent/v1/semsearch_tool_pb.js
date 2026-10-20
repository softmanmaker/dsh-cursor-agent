import { Message, proto3 } from "@bufbuild/protobuf";
import { CodeResult } from "../../aiserver/v1/repository_pb.js";
var SemSearchToolCall$Runtime = (()=>class _SemSearchToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SemSearchToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SemSearchToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SemSearchToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SemSearchToolCall, a, b2);
        }
    })();
var SemSearchToolCall = SemSearchToolCall$Runtime;
SemSearchToolCall.runtime = proto3;
SemSearchToolCall.typeName = "agent.v1.SemSearchToolCall";
SemSearchToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: SemSearchToolArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: SemSearchToolResult
        }
    ]);
var SemSearchToolArgs$Runtime = (()=>class _SemSearchToolArgs extends Message {
        constructor(data){
            super();
            this.query = "";
            this.targetDirectories = [];
            this.explanation = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SemSearchToolArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SemSearchToolArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SemSearchToolArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SemSearchToolArgs, a, b2);
        }
    })();
var SemSearchToolArgs = SemSearchToolArgs$Runtime;
SemSearchToolArgs.runtime = proto3;
SemSearchToolArgs.typeName = "agent.v1.SemSearchToolArgs";
SemSearchToolArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "target_directories",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "explanation",
            kind: "scalar",
            T: 9
        }
    ]);
var SemSearchToolResult$Runtime = (()=>class _SemSearchToolResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SemSearchToolResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SemSearchToolResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SemSearchToolResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SemSearchToolResult, a, b2);
        }
    })();
var SemSearchToolResult = SemSearchToolResult$Runtime;
SemSearchToolResult.runtime = proto3;
SemSearchToolResult.typeName = "agent.v1.SemSearchToolResult";
SemSearchToolResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: SemSearchToolSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: SemSearchToolError,
            oneof: "result"
        }
    ]);
var SemSearchToolSuccess$Runtime = (()=>class _SemSearchToolSuccess extends Message {
        constructor(data){
            super();
            this.results = "";
            this.codeResults = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SemSearchToolSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SemSearchToolSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SemSearchToolSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SemSearchToolSuccess, a, b2);
        }
    })();
var SemSearchToolSuccess = SemSearchToolSuccess$Runtime;
SemSearchToolSuccess.runtime = proto3;
SemSearchToolSuccess.typeName = "agent.v1.SemSearchToolSuccess";
SemSearchToolSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "results",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "code_results",
            kind: "message",
            T: CodeResult,
            repeated: true
        }
    ]);
var SemSearchToolError$Runtime = (()=>class _SemSearchToolError extends Message {
        constructor(data){
            super();
            this.errorMessage = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SemSearchToolError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SemSearchToolError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SemSearchToolError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SemSearchToolError, a, b2);
        }
    })();
var SemSearchToolError = SemSearchToolError$Runtime;
SemSearchToolError.runtime = proto3;
SemSearchToolError.typeName = "agent.v1.SemSearchToolError";
SemSearchToolError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]);
export { SemSearchToolArgs, SemSearchToolCall, SemSearchToolError, SemSearchToolResult, SemSearchToolSuccess };
