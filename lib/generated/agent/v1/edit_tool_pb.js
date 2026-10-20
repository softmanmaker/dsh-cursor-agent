import { Message, proto3 } from "@bufbuild/protobuf";
var EditArgs$Runtime = (()=>class _EditArgs extends Message {
        constructor(data){
            super();
            this.path = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _EditArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _EditArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _EditArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_EditArgs, a, b2);
        }
    })();
var EditArgs = EditArgs$Runtime;
EditArgs.runtime = proto3;
EditArgs.typeName = "agent.v1.EditArgs";
EditArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "stream_content",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var EditResult$Runtime = (()=>class _EditResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _EditResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _EditResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _EditResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_EditResult, a, b2);
        }
    })();
var EditResult = EditResult$Runtime;
EditResult.runtime = proto3;
EditResult.typeName = "agent.v1.EditResult";
EditResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: EditSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "file_not_found",
            kind: "message",
            T: EditFileNotFound,
            oneof: "result"
        },
        {
            no: 3,
            name: "read_permission_denied",
            kind: "message",
            T: EditReadPermissionDenied,
            oneof: "result"
        },
        {
            no: 4,
            name: "write_permission_denied",
            kind: "message",
            T: EditWritePermissionDenied,
            oneof: "result"
        },
        {
            no: 6,
            name: "rejected",
            kind: "message",
            T: EditRejected,
            oneof: "result"
        },
        {
            no: 7,
            name: "error",
            kind: "message",
            T: EditError,
            oneof: "result"
        }
    ]);
var EditSuccess$Runtime = (()=>class _EditSuccess extends Message {
        constructor(data){
            super();
            this.path = "";
            this.afterFullFileContent = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _EditSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _EditSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _EditSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_EditSuccess, a, b2);
        }
    })();
var EditSuccess = EditSuccess$Runtime;
EditSuccess.runtime = proto3;
EditSuccess.typeName = "agent.v1.EditSuccess";
EditSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "lines_added",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 4,
            name: "lines_removed",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 5,
            name: "diff_string",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "before_full_file_content",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "after_full_file_content",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "message",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var EditFileNotFound$Runtime = (()=>class _EditFileNotFound extends Message {
        constructor(data){
            super();
            this.path = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _EditFileNotFound().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _EditFileNotFound().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _EditFileNotFound().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_EditFileNotFound, a, b2);
        }
    })();
var EditFileNotFound = EditFileNotFound$Runtime;
EditFileNotFound.runtime = proto3;
EditFileNotFound.typeName = "agent.v1.EditFileNotFound";
EditFileNotFound.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]);
var EditReadPermissionDenied$Runtime = (()=>class _EditReadPermissionDenied extends Message {
        constructor(data){
            super();
            this.path = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _EditReadPermissionDenied().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _EditReadPermissionDenied().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _EditReadPermissionDenied().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_EditReadPermissionDenied, a, b2);
        }
    })();
var EditReadPermissionDenied = EditReadPermissionDenied$Runtime;
EditReadPermissionDenied.runtime = proto3;
EditReadPermissionDenied.typeName = "agent.v1.EditReadPermissionDenied";
EditReadPermissionDenied.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]);
var EditWritePermissionDenied$Runtime = (()=>class _EditWritePermissionDenied extends Message {
        constructor(data){
            super();
            this.path = "";
            this.error = "";
            this.isReadonly = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _EditWritePermissionDenied().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _EditWritePermissionDenied().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _EditWritePermissionDenied().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_EditWritePermissionDenied, a, b2);
        }
    })();
var EditWritePermissionDenied = EditWritePermissionDenied$Runtime;
EditWritePermissionDenied.runtime = proto3;
EditWritePermissionDenied.typeName = "agent.v1.EditWritePermissionDenied";
EditWritePermissionDenied.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "is_readonly",
            kind: "scalar",
            T: 8
        }
    ]);
var EditRejected$Runtime = (()=>class _EditRejected extends Message {
        constructor(data){
            super();
            this.path = "";
            this.reason = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _EditRejected().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _EditRejected().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _EditRejected().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_EditRejected, a, b2);
        }
    })();
var EditRejected = EditRejected$Runtime;
EditRejected.runtime = proto3;
EditRejected.typeName = "agent.v1.EditRejected";
EditRejected.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
var EditError$Runtime = (()=>class _EditError extends Message {
        constructor(data){
            super();
            this.path = "";
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _EditError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _EditError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _EditError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_EditError, a, b2);
        }
    })();
var EditError = EditError$Runtime;
EditError.runtime = proto3;
EditError.typeName = "agent.v1.EditError";
EditError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "model_visible_error",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var EditToolCall$Runtime = (()=>class _EditToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _EditToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _EditToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _EditToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_EditToolCall, a, b2);
        }
    })();
var EditToolCall = EditToolCall$Runtime;
EditToolCall.runtime = proto3;
EditToolCall.typeName = "agent.v1.EditToolCall";
EditToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: EditArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: EditResult
        }
    ]);
var EditToolCallDelta$Runtime = (()=>class _EditToolCallDelta extends Message {
        constructor(data){
            super();
            this.streamContentDelta = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _EditToolCallDelta().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _EditToolCallDelta().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _EditToolCallDelta().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_EditToolCallDelta, a, b2);
        }
    })();
var EditToolCallDelta = EditToolCallDelta$Runtime;
EditToolCallDelta.runtime = proto3;
EditToolCallDelta.typeName = "agent.v1.EditToolCallDelta";
EditToolCallDelta.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "stream_content_delta",
            kind: "scalar",
            T: 9
        }
    ]);
export { EditArgs, EditError, EditFileNotFound, EditReadPermissionDenied, EditRejected, EditResult, EditSuccess, EditToolCall, EditToolCallDelta, EditWritePermissionDenied };
