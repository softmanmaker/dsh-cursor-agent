import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
var DeleteArgs$Runtime = (()=>class _DeleteArgs extends Message {
        constructor(data){
            super();
            this.path = "";
            this.toolCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _DeleteArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _DeleteArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _DeleteArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_DeleteArgs, a, b2);
        }
    })();
var DeleteArgs = DeleteArgs$Runtime;
DeleteArgs.runtime = proto3;
DeleteArgs.typeName = "agent.v1.DeleteArgs";
DeleteArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
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
var DeleteResult$Runtime = (()=>class _DeleteResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _DeleteResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _DeleteResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _DeleteResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_DeleteResult, a, b2);
        }
    })();
var DeleteResult = DeleteResult$Runtime;
DeleteResult.runtime = proto3;
DeleteResult.typeName = "agent.v1.DeleteResult";
DeleteResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: DeleteSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "file_not_found",
            kind: "message",
            T: DeleteFileNotFound,
            oneof: "result"
        },
        {
            no: 3,
            name: "not_file",
            kind: "message",
            T: DeleteNotFile,
            oneof: "result"
        },
        {
            no: 4,
            name: "permission_denied",
            kind: "message",
            T: DeletePermissionDenied,
            oneof: "result"
        },
        {
            no: 5,
            name: "file_busy",
            kind: "message",
            T: DeleteFileBusy,
            oneof: "result"
        },
        {
            no: 6,
            name: "rejected",
            kind: "message",
            T: DeleteRejected,
            oneof: "result"
        },
        {
            no: 7,
            name: "error",
            kind: "message",
            T: DeleteError,
            oneof: "result"
        }
    ]);
var DeleteSuccess$Runtime = (()=>class _DeleteSuccess extends Message {
        constructor(data){
            super();
            this.path = "";
            this.deletedFile = "";
            this.fileSize = protoInt64.zero;
            this.prevContent = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _DeleteSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _DeleteSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _DeleteSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_DeleteSuccess, a, b2);
        }
    })();
var DeleteSuccess = DeleteSuccess$Runtime;
DeleteSuccess.runtime = proto3;
DeleteSuccess.typeName = "agent.v1.DeleteSuccess";
DeleteSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "deleted_file",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "file_size",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "prev_content",
            kind: "scalar",
            T: 9
        }
    ]);
var DeleteFileNotFound$Runtime = (()=>class _DeleteFileNotFound extends Message {
        constructor(data){
            super();
            this.path = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _DeleteFileNotFound().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _DeleteFileNotFound().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _DeleteFileNotFound().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_DeleteFileNotFound, a, b2);
        }
    })();
var DeleteFileNotFound = DeleteFileNotFound$Runtime;
DeleteFileNotFound.runtime = proto3;
DeleteFileNotFound.typeName = "agent.v1.DeleteFileNotFound";
DeleteFileNotFound.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]);
var DeleteNotFile$Runtime = (()=>class _DeleteNotFile extends Message {
        constructor(data){
            super();
            this.path = "";
            this.actualType = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _DeleteNotFile().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _DeleteNotFile().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _DeleteNotFile().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_DeleteNotFile, a, b2);
        }
    })();
var DeleteNotFile = DeleteNotFile$Runtime;
DeleteNotFile.runtime = proto3;
DeleteNotFile.typeName = "agent.v1.DeleteNotFile";
DeleteNotFile.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "actual_type",
            kind: "scalar",
            T: 9
        }
    ]);
var DeletePermissionDenied$Runtime = (()=>class _DeletePermissionDenied extends Message {
        constructor(data){
            super();
            this.path = "";
            this.clientVisibleError = "";
            this.isReadonly = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _DeletePermissionDenied().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _DeletePermissionDenied().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _DeletePermissionDenied().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_DeletePermissionDenied, a, b2);
        }
    })();
var DeletePermissionDenied = DeletePermissionDenied$Runtime;
DeletePermissionDenied.runtime = proto3;
DeletePermissionDenied.typeName = "agent.v1.DeletePermissionDenied";
DeletePermissionDenied.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "client_visible_error",
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
var DeleteFileBusy$Runtime = (()=>class _DeleteFileBusy extends Message {
        constructor(data){
            super();
            this.path = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _DeleteFileBusy().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _DeleteFileBusy().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _DeleteFileBusy().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_DeleteFileBusy, a, b2);
        }
    })();
var DeleteFileBusy = DeleteFileBusy$Runtime;
DeleteFileBusy.runtime = proto3;
DeleteFileBusy.typeName = "agent.v1.DeleteFileBusy";
DeleteFileBusy.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]);
var DeleteRejected$Runtime = (()=>class _DeleteRejected extends Message {
        constructor(data){
            super();
            this.path = "";
            this.reason = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _DeleteRejected().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _DeleteRejected().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _DeleteRejected().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_DeleteRejected, a, b2);
        }
    })();
var DeleteRejected = DeleteRejected$Runtime;
DeleteRejected.runtime = proto3;
DeleteRejected.typeName = "agent.v1.DeleteRejected";
DeleteRejected.fields = proto3.util.newFieldList(()=>[
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
var DeleteError$Runtime = (()=>class _DeleteError extends Message {
        constructor(data){
            super();
            this.path = "";
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _DeleteError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _DeleteError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _DeleteError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_DeleteError, a, b2);
        }
    })();
var DeleteError = DeleteError$Runtime;
DeleteError.runtime = proto3;
DeleteError.typeName = "agent.v1.DeleteError";
DeleteError.fields = proto3.util.newFieldList(()=>[
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
        }
    ]);
export { DeleteArgs, DeleteError, DeleteFileBusy, DeleteFileNotFound, DeleteNotFile, DeletePermissionDenied, DeleteRejected, DeleteResult, DeleteSuccess };
