import { Message, proto3 } from "@bufbuild/protobuf";
var ReflectArgs$Runtime = (()=>class _ReflectArgs extends Message {
        constructor(data){
            super();
            this.unexpectedActionOutcomes = "";
            this.relevantInstructions = "";
            this.scenarioAnalysis = "";
            this.criticalSynthesis = "";
            this.nextSteps = "";
            this.toolCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReflectArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReflectArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReflectArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReflectArgs, a, b2);
        }
    })();
var ReflectArgs = ReflectArgs$Runtime;
ReflectArgs.runtime = proto3;
ReflectArgs.typeName = "agent.v1.ReflectArgs";
ReflectArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "unexpected_action_outcomes",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "relevant_instructions",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "scenario_analysis",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "critical_synthesis",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "next_steps",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
var ReflectResult$Runtime = (()=>class _ReflectResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReflectResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReflectResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReflectResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReflectResult, a, b2);
        }
    })();
var ReflectResult = ReflectResult$Runtime;
ReflectResult.runtime = proto3;
ReflectResult.typeName = "agent.v1.ReflectResult";
ReflectResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ReflectSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: ReflectError,
            oneof: "result"
        }
    ]);
var ReflectSuccess$Runtime = (()=>class _ReflectSuccess extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReflectSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReflectSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReflectSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReflectSuccess, a, b2);
        }
    })();
var ReflectSuccess = ReflectSuccess$Runtime;
ReflectSuccess.runtime = proto3;
ReflectSuccess.typeName = "agent.v1.ReflectSuccess";
ReflectSuccess.fields = proto3.util.newFieldList(()=>[]);
var ReflectError$Runtime = (()=>class _ReflectError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReflectError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReflectError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReflectError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReflectError, a, b2);
        }
    })();
var ReflectError = ReflectError$Runtime;
ReflectError.runtime = proto3;
ReflectError.typeName = "agent.v1.ReflectError";
ReflectError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var ReflectToolCall$Runtime = (()=>class _ReflectToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReflectToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReflectToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReflectToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReflectToolCall, a, b2);
        }
    })();
var ReflectToolCall = ReflectToolCall$Runtime;
ReflectToolCall.runtime = proto3;
ReflectToolCall.typeName = "agent.v1.ReflectToolCall";
ReflectToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ReflectArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: ReflectResult
        }
    ]);
export { ReflectArgs, ReflectError, ReflectResult, ReflectSuccess, ReflectToolCall };
