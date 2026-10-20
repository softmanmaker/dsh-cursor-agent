import { Message, proto3 } from "@bufbuild/protobuf";
var UpdatePrCodeTourExecutionMode;
(function(UpdatePrCodeTourExecutionMode2) {
    UpdatePrCodeTourExecutionMode2[UpdatePrCodeTourExecutionMode2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    UpdatePrCodeTourExecutionMode2[UpdatePrCodeTourExecutionMode2["SERVER_SCHEDULED"] = 1] = "SERVER_SCHEDULED";
    UpdatePrCodeTourExecutionMode2[UpdatePrCodeTourExecutionMode2["CLIENT_REQUIRED"] = 2] = "CLIENT_REQUIRED";
    UpdatePrCodeTourExecutionMode2[UpdatePrCodeTourExecutionMode2["SKIPPED"] = 3] = "SKIPPED";
})(UpdatePrCodeTourExecutionMode || (UpdatePrCodeTourExecutionMode = {}));
proto3.util.setEnumType(UpdatePrCodeTourExecutionMode, "agent.v1.UpdatePrCodeTourExecutionMode", [
    {
        no: 0,
        name: "UPDATE_PR_CODE_TOUR_EXECUTION_MODE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "UPDATE_PR_CODE_TOUR_EXECUTION_MODE_SERVER_SCHEDULED"
    },
    {
        no: 2,
        name: "UPDATE_PR_CODE_TOUR_EXECUTION_MODE_CLIENT_REQUIRED"
    },
    {
        no: 3,
        name: "UPDATE_PR_CODE_TOUR_EXECUTION_MODE_SKIPPED"
    }
]);
var UpdatePrCodeTourArgs$Runtime = (()=>class _UpdatePrCodeTourArgs extends Message {
        constructor(data){
            super();
            this.feedback = "";
            this.toolCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UpdatePrCodeTourArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UpdatePrCodeTourArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UpdatePrCodeTourArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UpdatePrCodeTourArgs, a, b2);
        }
    })();
var UpdatePrCodeTourArgs = UpdatePrCodeTourArgs$Runtime;
UpdatePrCodeTourArgs.runtime = proto3;
UpdatePrCodeTourArgs.typeName = "agent.v1.UpdatePrCodeTourArgs";
UpdatePrCodeTourArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "feedback",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
var UpdatePrCodeTourResult$Runtime = (()=>class _UpdatePrCodeTourResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UpdatePrCodeTourResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UpdatePrCodeTourResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UpdatePrCodeTourResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UpdatePrCodeTourResult, a, b2);
        }
    })();
var UpdatePrCodeTourResult = UpdatePrCodeTourResult$Runtime;
UpdatePrCodeTourResult.runtime = proto3;
UpdatePrCodeTourResult.typeName = "agent.v1.UpdatePrCodeTourResult";
UpdatePrCodeTourResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: UpdatePrCodeTourSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: UpdatePrCodeTourError,
            oneof: "result"
        }
    ]);
var UpdatePrCodeTourSuccess$Runtime = (()=>class _UpdatePrCodeTourSuccess extends Message {
        constructor(data){
            super();
            this.revisionId = "";
            this.message = "";
            this.executionMode = UpdatePrCodeTourExecutionMode.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UpdatePrCodeTourSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UpdatePrCodeTourSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UpdatePrCodeTourSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UpdatePrCodeTourSuccess, a, b2);
        }
    })();
var UpdatePrCodeTourSuccess = UpdatePrCodeTourSuccess$Runtime;
UpdatePrCodeTourSuccess.runtime = proto3;
UpdatePrCodeTourSuccess.typeName = "agent.v1.UpdatePrCodeTourSuccess";
UpdatePrCodeTourSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "revision_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "execution_mode",
            kind: "enum",
            T: proto3.getEnumType(UpdatePrCodeTourExecutionMode)
        }
    ]);
var UpdatePrCodeTourError$Runtime = (()=>class _UpdatePrCodeTourError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UpdatePrCodeTourError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UpdatePrCodeTourError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UpdatePrCodeTourError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UpdatePrCodeTourError, a, b2);
        }
    })();
var UpdatePrCodeTourError = UpdatePrCodeTourError$Runtime;
UpdatePrCodeTourError.runtime = proto3;
UpdatePrCodeTourError.typeName = "agent.v1.UpdatePrCodeTourError";
UpdatePrCodeTourError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var UpdatePrCodeTourToolCall$Runtime = (()=>class _UpdatePrCodeTourToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UpdatePrCodeTourToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UpdatePrCodeTourToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UpdatePrCodeTourToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UpdatePrCodeTourToolCall, a, b2);
        }
    })();
var UpdatePrCodeTourToolCall = UpdatePrCodeTourToolCall$Runtime;
UpdatePrCodeTourToolCall.runtime = proto3;
UpdatePrCodeTourToolCall.typeName = "agent.v1.UpdatePrCodeTourToolCall";
UpdatePrCodeTourToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: UpdatePrCodeTourArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: UpdatePrCodeTourResult
        }
    ]);
export { UpdatePrCodeTourArgs, UpdatePrCodeTourError, UpdatePrCodeTourExecutionMode, UpdatePrCodeTourResult, UpdatePrCodeTourSuccess, UpdatePrCodeTourToolCall };
