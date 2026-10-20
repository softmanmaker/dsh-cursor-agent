import { Message, proto3 } from "@bufbuild/protobuf";
var AskQuestionToolCall$Runtime = (()=>class _AskQuestionToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AskQuestionToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AskQuestionToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AskQuestionToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AskQuestionToolCall, a, b2);
        }
    })();
var AskQuestionToolCall = AskQuestionToolCall$Runtime;
AskQuestionToolCall.runtime = proto3;
AskQuestionToolCall.typeName = "agent.v1.AskQuestionToolCall";
AskQuestionToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: AskQuestionArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: AskQuestionResult
        }
    ]);
var AskQuestionArgs$Runtime = (()=>class _AskQuestionArgs extends Message {
        constructor(data){
            super();
            this.title = "";
            this.questions = [];
            this.runAsync = false;
            this.asyncOriginalToolCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AskQuestionArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AskQuestionArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AskQuestionArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AskQuestionArgs, a, b2);
        }
    })();
var AskQuestionArgs = AskQuestionArgs$Runtime;
AskQuestionArgs.runtime = proto3;
AskQuestionArgs.typeName = "agent.v1.AskQuestionArgs";
AskQuestionArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "questions",
            kind: "message",
            T: AskQuestionArgs_Question,
            repeated: true
        },
        {
            no: 5,
            name: "run_async",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "async_original_tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
var AskQuestionArgs_Question$Runtime = (()=>class _AskQuestionArgs_Question extends Message {
        constructor(data){
            super();
            this.id = "";
            this.prompt = "";
            this.options = [];
            this.allowMultiple = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AskQuestionArgs_Question().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AskQuestionArgs_Question().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AskQuestionArgs_Question().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AskQuestionArgs_Question, a, b2);
        }
    })();
var AskQuestionArgs_Question = AskQuestionArgs_Question$Runtime;
AskQuestionArgs_Question.runtime = proto3;
AskQuestionArgs_Question.typeName = "agent.v1.AskQuestionArgs.Question";
AskQuestionArgs_Question.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: AskQuestionArgs_Option,
            repeated: true
        },
        {
            no: 4,
            name: "allow_multiple",
            kind: "scalar",
            T: 8
        }
    ]);
var AskQuestionArgs_Option$Runtime = (()=>class _AskQuestionArgs_Option extends Message {
        constructor(data){
            super();
            this.id = "";
            this.label = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AskQuestionArgs_Option().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AskQuestionArgs_Option().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AskQuestionArgs_Option().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AskQuestionArgs_Option, a, b2);
        }
    })();
var AskQuestionArgs_Option = AskQuestionArgs_Option$Runtime;
AskQuestionArgs_Option.runtime = proto3;
AskQuestionArgs_Option.typeName = "agent.v1.AskQuestionArgs.Option";
AskQuestionArgs_Option.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "label",
            kind: "scalar",
            T: 9
        }
    ]);
var AskQuestionAsync$Runtime = (()=>class _AskQuestionAsync extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AskQuestionAsync().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AskQuestionAsync().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AskQuestionAsync().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AskQuestionAsync, a, b2);
        }
    })();
var AskQuestionAsync = AskQuestionAsync$Runtime;
AskQuestionAsync.runtime = proto3;
AskQuestionAsync.typeName = "agent.v1.AskQuestionAsync";
AskQuestionAsync.fields = proto3.util.newFieldList(()=>[]);
var AskQuestionResult$Runtime = (()=>class _AskQuestionResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AskQuestionResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AskQuestionResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AskQuestionResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AskQuestionResult, a, b2);
        }
    })();
var AskQuestionResult = AskQuestionResult$Runtime;
AskQuestionResult.runtime = proto3;
AskQuestionResult.typeName = "agent.v1.AskQuestionResult";
AskQuestionResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: AskQuestionSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: AskQuestionError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: AskQuestionRejected,
            oneof: "result"
        },
        {
            no: 4,
            name: "async",
            kind: "message",
            T: AskQuestionAsync,
            oneof: "result"
        }
    ]);
var AskQuestionSuccess$Runtime = (()=>class _AskQuestionSuccess extends Message {
        constructor(data){
            super();
            this.answers = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AskQuestionSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AskQuestionSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AskQuestionSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AskQuestionSuccess, a, b2);
        }
    })();
var AskQuestionSuccess = AskQuestionSuccess$Runtime;
AskQuestionSuccess.runtime = proto3;
AskQuestionSuccess.typeName = "agent.v1.AskQuestionSuccess";
AskQuestionSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "answers",
            kind: "message",
            T: AskQuestionSuccess_Answer,
            repeated: true
        }
    ]);
var AskQuestionSuccess_Answer$Runtime = (()=>class _AskQuestionSuccess_Answer extends Message {
        constructor(data){
            super();
            this.questionId = "";
            this.selectedOptionIds = [];
            this.freeformText = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AskQuestionSuccess_Answer().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AskQuestionSuccess_Answer().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AskQuestionSuccess_Answer().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AskQuestionSuccess_Answer, a, b2);
        }
    })();
var AskQuestionSuccess_Answer = AskQuestionSuccess_Answer$Runtime;
AskQuestionSuccess_Answer.runtime = proto3;
AskQuestionSuccess_Answer.typeName = "agent.v1.AskQuestionSuccess.Answer";
AskQuestionSuccess_Answer.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "question_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "selected_option_ids",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "freeform_text",
            kind: "scalar",
            T: 9
        }
    ]);
var AskQuestionError$Runtime = (()=>class _AskQuestionError extends Message {
        constructor(data){
            super();
            this.errorMessage = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AskQuestionError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AskQuestionError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AskQuestionError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AskQuestionError, a, b2);
        }
    })();
var AskQuestionError = AskQuestionError$Runtime;
AskQuestionError.runtime = proto3;
AskQuestionError.typeName = "agent.v1.AskQuestionError";
AskQuestionError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]);
var AskQuestionRejected$Runtime = (()=>class _AskQuestionRejected extends Message {
        constructor(data){
            super();
            this.reason = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AskQuestionRejected().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AskQuestionRejected().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AskQuestionRejected().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AskQuestionRejected, a, b2);
        }
    })();
var AskQuestionRejected = AskQuestionRejected$Runtime;
AskQuestionRejected.runtime = proto3;
AskQuestionRejected.typeName = "agent.v1.AskQuestionRejected";
AskQuestionRejected.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
export { AskQuestionArgs, AskQuestionArgs_Option, AskQuestionArgs_Question, AskQuestionAsync, AskQuestionError, AskQuestionRejected, AskQuestionResult, AskQuestionSuccess, AskQuestionSuccess_Answer, AskQuestionToolCall };
