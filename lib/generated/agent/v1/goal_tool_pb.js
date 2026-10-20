import { Message, proto3 } from "@bufbuild/protobuf";
var GoalStatus;
(function(GoalStatus2) {
    GoalStatus2[GoalStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    GoalStatus2[GoalStatus2["ACTIVE"] = 1] = "ACTIVE";
    GoalStatus2[GoalStatus2["PAUSED"] = 2] = "PAUSED";
    GoalStatus2[GoalStatus2["COMPLETE"] = 3] = "COMPLETE";
    GoalStatus2[GoalStatus2["CLEARED"] = 4] = "CLEARED";
})(GoalStatus || (GoalStatus = {}));
proto3.util.setEnumType(GoalStatus, "agent.v1.GoalStatus", [
    {
        no: 0,
        name: "GOAL_STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "GOAL_STATUS_ACTIVE"
    },
    {
        no: 2,
        name: "GOAL_STATUS_PAUSED"
    },
    {
        no: 3,
        name: "GOAL_STATUS_COMPLETE"
    },
    {
        no: 4,
        name: "GOAL_STATUS_CLEARED"
    }
]);
var CreateGoalArgs$Runtime = (()=>class _CreateGoalArgs extends Message {
        constructor(data){
            super();
            this.objective = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CreateGoalArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CreateGoalArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CreateGoalArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CreateGoalArgs, a, b2);
        }
    })();
var CreateGoalArgs = CreateGoalArgs$Runtime;
CreateGoalArgs.runtime = proto3;
CreateGoalArgs.typeName = "agent.v1.CreateGoalArgs";
CreateGoalArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "objective",
            kind: "scalar",
            T: 9
        }
    ]);
var CreateGoalSuccess$Runtime = (()=>class _CreateGoalSuccess extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CreateGoalSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CreateGoalSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CreateGoalSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CreateGoalSuccess, a, b2);
        }
    })();
var CreateGoalSuccess = CreateGoalSuccess$Runtime;
CreateGoalSuccess.runtime = proto3;
CreateGoalSuccess.typeName = "agent.v1.CreateGoalSuccess";
CreateGoalSuccess.fields = proto3.util.newFieldList(()=>[]);
var GoalError$Runtime = (()=>class _GoalError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GoalError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GoalError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GoalError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GoalError, a, b2);
        }
    })();
var GoalError = GoalError$Runtime;
GoalError.runtime = proto3;
GoalError.typeName = "agent.v1.GoalError";
GoalError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var CreateGoalResult$Runtime = (()=>class _CreateGoalResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CreateGoalResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CreateGoalResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CreateGoalResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CreateGoalResult, a, b2);
        }
    })();
var CreateGoalResult = CreateGoalResult$Runtime;
CreateGoalResult.runtime = proto3;
CreateGoalResult.typeName = "agent.v1.CreateGoalResult";
CreateGoalResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: CreateGoalSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: GoalError,
            oneof: "result"
        }
    ]);
var CreateGoalToolCall$Runtime = (()=>class _CreateGoalToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CreateGoalToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CreateGoalToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CreateGoalToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CreateGoalToolCall, a, b2);
        }
    })();
var CreateGoalToolCall = CreateGoalToolCall$Runtime;
CreateGoalToolCall.runtime = proto3;
CreateGoalToolCall.typeName = "agent.v1.CreateGoalToolCall";
CreateGoalToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: CreateGoalArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: CreateGoalResult
        }
    ]);
var UpdateGoalArgs$Runtime = (()=>class _UpdateGoalArgs extends Message {
        constructor(data){
            super();
            this.status = GoalStatus.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UpdateGoalArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UpdateGoalArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UpdateGoalArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UpdateGoalArgs, a, b2);
        }
    })();
var UpdateGoalArgs = UpdateGoalArgs$Runtime;
UpdateGoalArgs.runtime = proto3;
UpdateGoalArgs.typeName = "agent.v1.UpdateGoalArgs";
UpdateGoalArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(GoalStatus)
        }
    ]);
var UpdateGoalSuccess$Runtime = (()=>class _UpdateGoalSuccess extends Message {
        constructor(data){
            super();
            this.status = GoalStatus.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UpdateGoalSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UpdateGoalSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UpdateGoalSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UpdateGoalSuccess, a, b2);
        }
    })();
var UpdateGoalSuccess = UpdateGoalSuccess$Runtime;
UpdateGoalSuccess.runtime = proto3;
UpdateGoalSuccess.typeName = "agent.v1.UpdateGoalSuccess";
UpdateGoalSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(GoalStatus)
        }
    ]);
var UpdateGoalResult$Runtime = (()=>class _UpdateGoalResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UpdateGoalResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UpdateGoalResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UpdateGoalResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UpdateGoalResult, a, b2);
        }
    })();
var UpdateGoalResult = UpdateGoalResult$Runtime;
UpdateGoalResult.runtime = proto3;
UpdateGoalResult.typeName = "agent.v1.UpdateGoalResult";
UpdateGoalResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: UpdateGoalSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: GoalError,
            oneof: "result"
        }
    ]);
var UpdateGoalToolCall$Runtime = (()=>class _UpdateGoalToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UpdateGoalToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UpdateGoalToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UpdateGoalToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UpdateGoalToolCall, a, b2);
        }
    })();
var UpdateGoalToolCall = UpdateGoalToolCall$Runtime;
UpdateGoalToolCall.runtime = proto3;
UpdateGoalToolCall.typeName = "agent.v1.UpdateGoalToolCall";
UpdateGoalToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: UpdateGoalArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: UpdateGoalResult
        }
    ]);
export { CreateGoalArgs, CreateGoalResult, CreateGoalSuccess, CreateGoalToolCall, GoalError, GoalStatus, UpdateGoalArgs, UpdateGoalResult, UpdateGoalSuccess, UpdateGoalToolCall };
