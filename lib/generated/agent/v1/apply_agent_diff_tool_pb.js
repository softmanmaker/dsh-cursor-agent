import { Message, proto3 } from "@bufbuild/protobuf";
var AppliedAgentChange_ChangeType;
var ApplyAgentDiffToolCall$Runtime = (()=>class _ApplyAgentDiffToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ApplyAgentDiffToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ApplyAgentDiffToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ApplyAgentDiffToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ApplyAgentDiffToolCall, a, b2);
        }
    })();
var ApplyAgentDiffToolCall = ApplyAgentDiffToolCall$Runtime;
ApplyAgentDiffToolCall.runtime = proto3;
ApplyAgentDiffToolCall.typeName = "agent.v1.ApplyAgentDiffToolCall";
ApplyAgentDiffToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ApplyAgentDiffArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: ApplyAgentDiffResult
        }
    ]);
var ApplyAgentDiffArgs$Runtime = (()=>class _ApplyAgentDiffArgs extends Message {
        constructor(data){
            super();
            this.agentId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ApplyAgentDiffArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ApplyAgentDiffArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ApplyAgentDiffArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ApplyAgentDiffArgs, a, b2);
        }
    })();
var ApplyAgentDiffArgs = ApplyAgentDiffArgs$Runtime;
ApplyAgentDiffArgs.runtime = proto3;
ApplyAgentDiffArgs.typeName = "agent.v1.ApplyAgentDiffArgs";
ApplyAgentDiffArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        }
    ]);
var ApplyAgentDiffResult$Runtime = (()=>class _ApplyAgentDiffResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ApplyAgentDiffResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ApplyAgentDiffResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ApplyAgentDiffResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ApplyAgentDiffResult, a, b2);
        }
    })();
var ApplyAgentDiffResult = ApplyAgentDiffResult$Runtime;
ApplyAgentDiffResult.runtime = proto3;
ApplyAgentDiffResult.typeName = "agent.v1.ApplyAgentDiffResult";
ApplyAgentDiffResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ApplyAgentDiffSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: ApplyAgentDiffError,
            oneof: "result"
        }
    ]);
var ApplyAgentDiffSuccess$Runtime = (()=>class _ApplyAgentDiffSuccess extends Message {
        constructor(data){
            super();
            this.appliedChanges = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ApplyAgentDiffSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ApplyAgentDiffSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ApplyAgentDiffSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ApplyAgentDiffSuccess, a, b2);
        }
    })();
var ApplyAgentDiffSuccess = ApplyAgentDiffSuccess$Runtime;
ApplyAgentDiffSuccess.runtime = proto3;
ApplyAgentDiffSuccess.typeName = "agent.v1.ApplyAgentDiffSuccess";
ApplyAgentDiffSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "applied_changes",
            kind: "message",
            T: AppliedAgentChange,
            repeated: true
        }
    ]);
var AppliedAgentChange$Runtime = (()=>class _AppliedAgentChange extends Message {
        constructor(data){
            super();
            this.path = "";
            this.changeType = AppliedAgentChange_ChangeType.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AppliedAgentChange().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AppliedAgentChange().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AppliedAgentChange().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AppliedAgentChange, a, b2);
        }
    })();
var AppliedAgentChange = AppliedAgentChange$Runtime;
AppliedAgentChange.runtime = proto3;
AppliedAgentChange.typeName = "agent.v1.AppliedAgentChange";
AppliedAgentChange.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "change_type",
            kind: "enum",
            T: proto3.getEnumType(AppliedAgentChange_ChangeType)
        },
        {
            no: 3,
            name: "before_content",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "after_content",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "error",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "message_for_model",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
(function(AppliedAgentChange_ChangeType2) {
    AppliedAgentChange_ChangeType2[AppliedAgentChange_ChangeType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    AppliedAgentChange_ChangeType2[AppliedAgentChange_ChangeType2["CREATED"] = 1] = "CREATED";
    AppliedAgentChange_ChangeType2[AppliedAgentChange_ChangeType2["MODIFIED"] = 2] = "MODIFIED";
    AppliedAgentChange_ChangeType2[AppliedAgentChange_ChangeType2["DELETED"] = 3] = "DELETED";
})(AppliedAgentChange_ChangeType || (AppliedAgentChange_ChangeType = {}));
proto3.util.setEnumType(AppliedAgentChange_ChangeType, "agent.v1.AppliedAgentChange.ChangeType", [
    {
        no: 0,
        name: "CHANGE_TYPE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "CHANGE_TYPE_CREATED"
    },
    {
        no: 2,
        name: "CHANGE_TYPE_MODIFIED"
    },
    {
        no: 3,
        name: "CHANGE_TYPE_DELETED"
    }
]);
var ApplyAgentDiffError$Runtime = (()=>class _ApplyAgentDiffError extends Message {
        constructor(data){
            super();
            this.error = "";
            this.appliedChanges = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ApplyAgentDiffError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ApplyAgentDiffError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ApplyAgentDiffError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ApplyAgentDiffError, a, b2);
        }
    })();
var ApplyAgentDiffError = ApplyAgentDiffError$Runtime;
ApplyAgentDiffError.runtime = proto3;
ApplyAgentDiffError.typeName = "agent.v1.ApplyAgentDiffError";
ApplyAgentDiffError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "applied_changes",
            kind: "message",
            T: AppliedAgentChange,
            repeated: true
        }
    ]);
export { AppliedAgentChange, AppliedAgentChange_ChangeType, ApplyAgentDiffArgs, ApplyAgentDiffError, ApplyAgentDiffResult, ApplyAgentDiffSuccess, ApplyAgentDiffToolCall };
