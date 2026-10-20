import { Message, proto3 } from "@bufbuild/protobuf";
import { TodoItem } from "./todo_tool_pb.js";
var CreatePlanToolCall$Runtime = (()=>class _CreatePlanToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CreatePlanToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CreatePlanToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CreatePlanToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CreatePlanToolCall, a, b2);
        }
    })();
var CreatePlanToolCall = CreatePlanToolCall$Runtime;
CreatePlanToolCall.runtime = proto3;
CreatePlanToolCall.typeName = "agent.v1.CreatePlanToolCall";
CreatePlanToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: CreatePlanArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: CreatePlanResult
        }
    ]);
var Phase$Runtime = (()=>class _Phase extends Message {
        constructor(data){
            super();
            this.name = "";
            this.todos = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _Phase().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _Phase().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _Phase().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_Phase, a, b2);
        }
    })();
var Phase = Phase$Runtime;
Phase.runtime = proto3;
Phase.typeName = "agent.v1.Phase";
Phase.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "todos",
            kind: "message",
            T: TodoItem,
            repeated: true
        }
    ]);
var CreatePlanArgs$Runtime = (()=>class _CreatePlanArgs extends Message {
        constructor(data){
            super();
            this.plan = "";
            this.todos = [];
            this.overview = "";
            this.name = "";
            this.isProject = false;
            this.phases = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CreatePlanArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CreatePlanArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CreatePlanArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CreatePlanArgs, a, b2);
        }
    })();
var CreatePlanArgs = CreatePlanArgs$Runtime;
CreatePlanArgs.runtime = proto3;
CreatePlanArgs.typeName = "agent.v1.CreatePlanArgs";
CreatePlanArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "plan",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "todos",
            kind: "message",
            T: TodoItem,
            repeated: true
        },
        {
            no: 3,
            name: "overview",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "is_project",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "phases",
            kind: "message",
            T: Phase,
            repeated: true
        }
    ]);
var CreatePlanResult$Runtime = (()=>class _CreatePlanResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            this.planUri = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CreatePlanResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CreatePlanResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CreatePlanResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CreatePlanResult, a, b2);
        }
    })();
var CreatePlanResult = CreatePlanResult$Runtime;
CreatePlanResult.runtime = proto3;
CreatePlanResult.typeName = "agent.v1.CreatePlanResult";
CreatePlanResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: CreatePlanSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: CreatePlanError,
            oneof: "result"
        },
        {
            no: 3,
            name: "plan_uri",
            kind: "scalar",
            T: 9
        }
    ]);
var CreatePlanSuccess$Runtime = (()=>class _CreatePlanSuccess extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CreatePlanSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CreatePlanSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CreatePlanSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CreatePlanSuccess, a, b2);
        }
    })();
var CreatePlanSuccess = CreatePlanSuccess$Runtime;
CreatePlanSuccess.runtime = proto3;
CreatePlanSuccess.typeName = "agent.v1.CreatePlanSuccess";
CreatePlanSuccess.fields = proto3.util.newFieldList(()=>[]);
var CreatePlanError$Runtime = (()=>class _CreatePlanError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CreatePlanError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CreatePlanError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CreatePlanError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CreatePlanError, a, b2);
        }
    })();
var CreatePlanError = CreatePlanError$Runtime;
CreatePlanError.runtime = proto3;
CreatePlanError.typeName = "agent.v1.CreatePlanError";
CreatePlanError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var CreatePlanRequestQuery$Runtime = (()=>class _CreatePlanRequestQuery extends Message {
        constructor(data){
            super();
            this.toolCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CreatePlanRequestQuery().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CreatePlanRequestQuery().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CreatePlanRequestQuery().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CreatePlanRequestQuery, a, b2);
        }
    })();
var CreatePlanRequestQuery = CreatePlanRequestQuery$Runtime;
CreatePlanRequestQuery.runtime = proto3;
CreatePlanRequestQuery.typeName = "agent.v1.CreatePlanRequestQuery";
CreatePlanRequestQuery.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: CreatePlanArgs
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
var CreatePlanRequestResponse$Runtime = (()=>class _CreatePlanRequestResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CreatePlanRequestResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CreatePlanRequestResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CreatePlanRequestResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CreatePlanRequestResponse, a, b2);
        }
    })();
var CreatePlanRequestResponse = CreatePlanRequestResponse$Runtime;
CreatePlanRequestResponse.runtime = proto3;
CreatePlanRequestResponse.typeName = "agent.v1.CreatePlanRequestResponse";
CreatePlanRequestResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "result",
            kind: "message",
            T: CreatePlanResult
        }
    ]);
export { CreatePlanArgs, CreatePlanError, CreatePlanRequestQuery, CreatePlanRequestResponse, CreatePlanResult, CreatePlanSuccess, CreatePlanToolCall, Phase };
