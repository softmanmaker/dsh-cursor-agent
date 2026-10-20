import { Message, Struct, proto3 } from "@bufbuild/protobuf";
var SmartModeClassifierDecision;
(function(SmartModeClassifierDecision2) {
    SmartModeClassifierDecision2[SmartModeClassifierDecision2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    SmartModeClassifierDecision2[SmartModeClassifierDecision2["ALLOW"] = 1] = "ALLOW";
    SmartModeClassifierDecision2[SmartModeClassifierDecision2["BLOCK"] = 2] = "BLOCK";
})(SmartModeClassifierDecision || (SmartModeClassifierDecision = {}));
proto3.util.setEnumType(SmartModeClassifierDecision, "agent.v1.SmartModeClassifierDecision", [
    {
        no: 0,
        name: "SMART_MODE_CLASSIFIER_DECISION_UNSPECIFIED"
    },
    {
        no: 1,
        name: "SMART_MODE_CLASSIFIER_DECISION_ALLOW"
    },
    {
        no: 2,
        name: "SMART_MODE_CLASSIFIER_DECISION_BLOCK"
    }
]);
var SmartModeClassifierConversationMessage$Runtime = (()=>class _SmartModeClassifierConversationMessage extends Message {
        constructor(data){
            super();
            this.role = "";
            this.content = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SmartModeClassifierConversationMessage().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SmartModeClassifierConversationMessage().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SmartModeClassifierConversationMessage().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SmartModeClassifierConversationMessage, a, b2);
        }
    })();
var SmartModeClassifierConversationMessage = SmartModeClassifierConversationMessage$Runtime;
SmartModeClassifierConversationMessage.runtime = proto3;
SmartModeClassifierConversationMessage.typeName = "agent.v1.SmartModeClassifierConversationMessage";
SmartModeClassifierConversationMessage.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "role",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]);
var SmartModeClassifierArgs$Runtime = (()=>class _SmartModeClassifierArgs extends Message {
        constructor(data){
            super();
            this.toolCallId = "";
            this.conversationContext = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SmartModeClassifierArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SmartModeClassifierArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SmartModeClassifierArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SmartModeClassifierArgs, a, b2);
        }
    })();
var SmartModeClassifierArgs = SmartModeClassifierArgs$Runtime;
SmartModeClassifierArgs.runtime = proto3;
SmartModeClassifierArgs.typeName = "agent.v1.SmartModeClassifierArgs";
SmartModeClassifierArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "parent_conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "target",
            kind: "message",
            T: SmartModeRiskTarget
        },
        {
            no: 4,
            name: "conversation_context",
            kind: "message",
            T: SmartModeClassifierConversationMessage,
            repeated: true
        }
    ]);
var SmartModeRiskTarget$Runtime = (()=>class _SmartModeRiskTarget extends Message {
        constructor(data){
            super();
            this.action = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SmartModeRiskTarget().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SmartModeRiskTarget().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SmartModeRiskTarget().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SmartModeRiskTarget, a, b2);
        }
    })();
var SmartModeRiskTarget = SmartModeRiskTarget$Runtime;
SmartModeRiskTarget.runtime = proto3;
SmartModeRiskTarget.typeName = "agent.v1.SmartModeRiskTarget";
SmartModeRiskTarget.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "action",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "arguments",
            kind: "message",
            T: Struct
        }
    ]);
var SmartModeClassifierResult$Runtime = (()=>class _SmartModeClassifierResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SmartModeClassifierResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SmartModeClassifierResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SmartModeClassifierResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SmartModeClassifierResult, a, b2);
        }
    })();
var SmartModeClassifierResult = SmartModeClassifierResult$Runtime;
SmartModeClassifierResult.runtime = proto3;
SmartModeClassifierResult.typeName = "agent.v1.SmartModeClassifierResult";
SmartModeClassifierResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: SmartModeClassifierSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: SmartModeClassifierError,
            oneof: "result"
        }
    ]);
var SmartModeClassifierSuccess$Runtime = (()=>class _SmartModeClassifierSuccess extends Message {
        constructor(data){
            super();
            this.decision = SmartModeClassifierDecision.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SmartModeClassifierSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SmartModeClassifierSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SmartModeClassifierSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SmartModeClassifierSuccess, a, b2);
        }
    })();
var SmartModeClassifierSuccess = SmartModeClassifierSuccess$Runtime;
SmartModeClassifierSuccess.runtime = proto3;
SmartModeClassifierSuccess.typeName = "agent.v1.SmartModeClassifierSuccess";
SmartModeClassifierSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "decision",
            kind: "enum",
            T: proto3.getEnumType(SmartModeClassifierDecision)
        },
        {
            no: 2,
            name: "block_reason",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "proposed_allow_rule",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var SmartModeClassifierError$Runtime = (()=>class _SmartModeClassifierError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SmartModeClassifierError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SmartModeClassifierError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SmartModeClassifierError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SmartModeClassifierError, a, b2);
        }
    })();
var SmartModeClassifierError = SmartModeClassifierError$Runtime;
SmartModeClassifierError.runtime = proto3;
SmartModeClassifierError.typeName = "agent.v1.SmartModeClassifierError";
SmartModeClassifierError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
export { SmartModeClassifierArgs, SmartModeClassifierConversationMessage, SmartModeClassifierDecision, SmartModeClassifierError, SmartModeClassifierResult, SmartModeClassifierSuccess, SmartModeRiskTarget };
