import { Message, proto3 } from "@bufbuild/protobuf";
var StartGrindPlanningArgs$Runtime = (()=>class _StartGrindPlanningArgs extends Message {
        constructor(data){
            super();
            this.toolCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _StartGrindPlanningArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _StartGrindPlanningArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _StartGrindPlanningArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_StartGrindPlanningArgs, a, b2);
        }
    })();
var StartGrindPlanningArgs = StartGrindPlanningArgs$Runtime;
StartGrindPlanningArgs.runtime = proto3;
StartGrindPlanningArgs.typeName = "agent.v1.StartGrindPlanningArgs";
StartGrindPlanningArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "explanation",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
var StartGrindPlanningResult$Runtime = (()=>class _StartGrindPlanningResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _StartGrindPlanningResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _StartGrindPlanningResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _StartGrindPlanningResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_StartGrindPlanningResult, a, b2);
        }
    })();
var StartGrindPlanningResult = StartGrindPlanningResult$Runtime;
StartGrindPlanningResult.runtime = proto3;
StartGrindPlanningResult.typeName = "agent.v1.StartGrindPlanningResult";
StartGrindPlanningResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: StartGrindPlanningSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: StartGrindPlanningError,
            oneof: "result"
        }
    ]);
var StartGrindPlanningSuccess$Runtime = (()=>class _StartGrindPlanningSuccess extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _StartGrindPlanningSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _StartGrindPlanningSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _StartGrindPlanningSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_StartGrindPlanningSuccess, a, b2);
        }
    })();
var StartGrindPlanningSuccess = StartGrindPlanningSuccess$Runtime;
StartGrindPlanningSuccess.runtime = proto3;
StartGrindPlanningSuccess.typeName = "agent.v1.StartGrindPlanningSuccess";
StartGrindPlanningSuccess.fields = proto3.util.newFieldList(()=>[]);
var StartGrindPlanningError$Runtime = (()=>class _StartGrindPlanningError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _StartGrindPlanningError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _StartGrindPlanningError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _StartGrindPlanningError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_StartGrindPlanningError, a, b2);
        }
    })();
var StartGrindPlanningError = StartGrindPlanningError$Runtime;
StartGrindPlanningError.runtime = proto3;
StartGrindPlanningError.typeName = "agent.v1.StartGrindPlanningError";
StartGrindPlanningError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var StartGrindPlanningToolCall$Runtime = (()=>class _StartGrindPlanningToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _StartGrindPlanningToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _StartGrindPlanningToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _StartGrindPlanningToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_StartGrindPlanningToolCall, a, b2);
        }
    })();
var StartGrindPlanningToolCall = StartGrindPlanningToolCall$Runtime;
StartGrindPlanningToolCall.runtime = proto3;
StartGrindPlanningToolCall.typeName = "agent.v1.StartGrindPlanningToolCall";
StartGrindPlanningToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: StartGrindPlanningArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: StartGrindPlanningResult
        }
    ]);
export { StartGrindPlanningArgs, StartGrindPlanningError, StartGrindPlanningResult, StartGrindPlanningSuccess, StartGrindPlanningToolCall };
