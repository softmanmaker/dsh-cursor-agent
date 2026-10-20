import { Message, proto3 } from "@bufbuild/protobuf";
var RecordCiInvestigationFinding$Runtime = (()=>class _RecordCiInvestigationFinding extends Message {
        constructor(data){
            super();
            this.checkName = "";
            this.tldr = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RecordCiInvestigationFinding().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RecordCiInvestigationFinding().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RecordCiInvestigationFinding().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RecordCiInvestigationFinding, a, b2);
        }
    })();
var RecordCiInvestigationFinding = RecordCiInvestigationFinding$Runtime;
RecordCiInvestigationFinding.runtime = proto3;
RecordCiInvestigationFinding.typeName = "agent.v1.RecordCiInvestigationFinding";
RecordCiInvestigationFinding.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "check_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "details_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "tldr",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "root_cause",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "failing_signal",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "suggested_next_step",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "diff_relation",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "diff_relation_evidence",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "flake_assessment",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "flake_evidence",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "rerun_available",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 12,
            name: "rerun_evidence",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 13,
            name: "recommended_action",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 14,
            name: "recommended_action_evidence",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 15,
            name: "confidence",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var RecordCiInvestigationOverall$Runtime = (()=>class _RecordCiInvestigationOverall extends Message {
        constructor(data){
            super();
            this.summary = "";
            this.themes = [];
            this.checkKeys = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RecordCiInvestigationOverall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RecordCiInvestigationOverall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RecordCiInvestigationOverall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RecordCiInvestigationOverall, a, b2);
        }
    })();
var RecordCiInvestigationOverall = RecordCiInvestigationOverall$Runtime;
RecordCiInvestigationOverall.runtime = proto3;
RecordCiInvestigationOverall.typeName = "agent.v1.RecordCiInvestigationOverall";
RecordCiInvestigationOverall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "themes",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "recommended_action",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "recommended_action_evidence",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "check_keys",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var RecordCiInvestigationFindingsArgs$Runtime = (()=>class _RecordCiInvestigationFindingsArgs extends Message {
        constructor(data){
            super();
            this.findings = [];
            this.toolCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RecordCiInvestigationFindingsArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RecordCiInvestigationFindingsArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RecordCiInvestigationFindingsArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RecordCiInvestigationFindingsArgs, a, b2);
        }
    })();
var RecordCiInvestigationFindingsArgs = RecordCiInvestigationFindingsArgs$Runtime;
RecordCiInvestigationFindingsArgs.runtime = proto3;
RecordCiInvestigationFindingsArgs.typeName = "agent.v1.RecordCiInvestigationFindingsArgs";
RecordCiInvestigationFindingsArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "findings",
            kind: "message",
            T: RecordCiInvestigationFinding,
            repeated: true
        },
        {
            no: 2,
            name: "overall",
            kind: "message",
            T: RecordCiInvestigationOverall,
            opt: true
        },
        {
            no: 3,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
var RecordCiInvestigationFindingsSuccess$Runtime = (()=>class _RecordCiInvestigationFindingsSuccess extends Message {
        constructor(data){
            super();
            this.message = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RecordCiInvestigationFindingsSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RecordCiInvestigationFindingsSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RecordCiInvestigationFindingsSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RecordCiInvestigationFindingsSuccess, a, b2);
        }
    })();
var RecordCiInvestigationFindingsSuccess = RecordCiInvestigationFindingsSuccess$Runtime;
RecordCiInvestigationFindingsSuccess.runtime = proto3;
RecordCiInvestigationFindingsSuccess.typeName = "agent.v1.RecordCiInvestigationFindingsSuccess";
RecordCiInvestigationFindingsSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);
var RecordCiInvestigationFindingsError$Runtime = (()=>class _RecordCiInvestigationFindingsError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RecordCiInvestigationFindingsError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RecordCiInvestigationFindingsError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RecordCiInvestigationFindingsError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RecordCiInvestigationFindingsError, a, b2);
        }
    })();
var RecordCiInvestigationFindingsError = RecordCiInvestigationFindingsError$Runtime;
RecordCiInvestigationFindingsError.runtime = proto3;
RecordCiInvestigationFindingsError.typeName = "agent.v1.RecordCiInvestigationFindingsError";
RecordCiInvestigationFindingsError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var RecordCiInvestigationFindingsResult$Runtime = (()=>class _RecordCiInvestigationFindingsResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RecordCiInvestigationFindingsResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RecordCiInvestigationFindingsResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RecordCiInvestigationFindingsResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RecordCiInvestigationFindingsResult, a, b2);
        }
    })();
var RecordCiInvestigationFindingsResult = RecordCiInvestigationFindingsResult$Runtime;
RecordCiInvestigationFindingsResult.runtime = proto3;
RecordCiInvestigationFindingsResult.typeName = "agent.v1.RecordCiInvestigationFindingsResult";
RecordCiInvestigationFindingsResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: RecordCiInvestigationFindingsSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: RecordCiInvestigationFindingsError,
            oneof: "result"
        }
    ]);
var RecordCiInvestigationFindingsToolCall$Runtime = (()=>class _RecordCiInvestigationFindingsToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RecordCiInvestigationFindingsToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RecordCiInvestigationFindingsToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RecordCiInvestigationFindingsToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RecordCiInvestigationFindingsToolCall, a, b2);
        }
    })();
var RecordCiInvestigationFindingsToolCall = RecordCiInvestigationFindingsToolCall$Runtime;
RecordCiInvestigationFindingsToolCall.runtime = proto3;
RecordCiInvestigationFindingsToolCall.typeName = "agent.v1.RecordCiInvestigationFindingsToolCall";
RecordCiInvestigationFindingsToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: RecordCiInvestigationFindingsArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: RecordCiInvestigationFindingsResult
        }
    ]);
export { RecordCiInvestigationFinding, RecordCiInvestigationFindingsArgs, RecordCiInvestigationFindingsError, RecordCiInvestigationFindingsResult, RecordCiInvestigationFindingsSuccess, RecordCiInvestigationFindingsToolCall, RecordCiInvestigationOverall };
