import { Message, proto3 } from "@bufbuild/protobuf";
var EditPrLabelsArgs$Runtime = (()=>class _EditPrLabelsArgs extends Message {
        constructor(data){
            super();
            this.toolCallId = "";
            this.prUrl = "";
            this.addLabels = [];
            this.removeLabels = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _EditPrLabelsArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _EditPrLabelsArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _EditPrLabelsArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_EditPrLabelsArgs, a, b2);
        }
    })();
var EditPrLabelsArgs = EditPrLabelsArgs$Runtime;
EditPrLabelsArgs.runtime = proto3;
EditPrLabelsArgs.typeName = "agent.v1.EditPrLabelsArgs";
EditPrLabelsArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "add_labels",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "remove_labels",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var EditPrLabelsResult$Runtime = (()=>class _EditPrLabelsResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _EditPrLabelsResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _EditPrLabelsResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _EditPrLabelsResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_EditPrLabelsResult, a, b2);
        }
    })();
var EditPrLabelsResult = EditPrLabelsResult$Runtime;
EditPrLabelsResult.runtime = proto3;
EditPrLabelsResult.typeName = "agent.v1.EditPrLabelsResult";
EditPrLabelsResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: EditPrLabelsSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: EditPrLabelsError,
            oneof: "result"
        }
    ]);
var EditPrLabelsSuccess$Runtime = (()=>class _EditPrLabelsSuccess extends Message {
        constructor(data){
            super();
            this.prUrl = "";
            this.prNumber = 0;
            this.message = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _EditPrLabelsSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _EditPrLabelsSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _EditPrLabelsSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_EditPrLabelsSuccess, a, b2);
        }
    })();
var EditPrLabelsSuccess = EditPrLabelsSuccess$Runtime;
EditPrLabelsSuccess.runtime = proto3;
EditPrLabelsSuccess.typeName = "agent.v1.EditPrLabelsSuccess";
EditPrLabelsSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "pr_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);
var EditPrLabelsError$Runtime = (()=>class _EditPrLabelsError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _EditPrLabelsError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _EditPrLabelsError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _EditPrLabelsError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_EditPrLabelsError, a, b2);
        }
    })();
var EditPrLabelsError = EditPrLabelsError$Runtime;
EditPrLabelsError.runtime = proto3;
EditPrLabelsError.typeName = "agent.v1.EditPrLabelsError";
EditPrLabelsError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var EditPrLabelsToolCall$Runtime = (()=>class _EditPrLabelsToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _EditPrLabelsToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _EditPrLabelsToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _EditPrLabelsToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_EditPrLabelsToolCall, a, b2);
        }
    })();
var EditPrLabelsToolCall = EditPrLabelsToolCall$Runtime;
EditPrLabelsToolCall.runtime = proto3;
EditPrLabelsToolCall.typeName = "agent.v1.EditPrLabelsToolCall";
EditPrLabelsToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: EditPrLabelsArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: EditPrLabelsResult
        }
    ]);
export { EditPrLabelsArgs, EditPrLabelsError, EditPrLabelsResult, EditPrLabelsSuccess, EditPrLabelsToolCall };
