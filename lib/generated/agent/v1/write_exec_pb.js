import { Message, proto3 } from "@bufbuild/protobuf";
var WriteArgs$Runtime = (()=>class _WriteArgs extends Message {
        constructor(data){
            super();
            this.path = "";
            this.fileText = "";
            this.toolCallId = "";
            this.returnFileContentAfterWrite = false;
            this.fileBytes = new Uint8Array(0);
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _WriteArgs().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _WriteArgs().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _WriteArgs().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WriteArgs, a, b2);
        }
    })();
var WriteArgs = WriteArgs$Runtime;
WriteArgs.runtime = proto3;
WriteArgs.typeName = "agent.v1.WriteArgs";
WriteArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "return_file_content_after_write",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "file_bytes",
            kind: "scalar",
            T: 12
        },
        {
            no: 6,
            name: "encoding_hint",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var WriteResult$Runtime = (()=>class _WriteResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _WriteResult().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _WriteResult().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _WriteResult().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WriteResult, a, b2);
        }
    })();
var WriteResult = WriteResult$Runtime;
WriteResult.runtime = proto3;
WriteResult.typeName = "agent.v1.WriteResult";
WriteResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: WriteSuccess,
            oneof: "result"
        },
        {
            no: 3,
            name: "permission_denied",
            kind: "message",
            T: WritePermissionDenied,
            oneof: "result"
        },
        {
            no: 4,
            name: "no_space",
            kind: "message",
            T: WriteNoSpace,
            oneof: "result"
        },
        {
            no: 5,
            name: "error",
            kind: "message",
            T: WriteError,
            oneof: "result"
        },
        {
            no: 6,
            name: "rejected",
            kind: "message",
            T: WriteRejected,
            oneof: "result"
        }
    ]);
var WriteSuccess$Runtime = (()=>class _WriteSuccess extends Message {
        constructor(data){
            super();
            this.path = "";
            this.linesCreated = 0;
            this.fileSize = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _WriteSuccess().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _WriteSuccess().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _WriteSuccess().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WriteSuccess, a, b2);
        }
    })();
var WriteSuccess = WriteSuccess$Runtime;
WriteSuccess.runtime = proto3;
WriteSuccess.typeName = "agent.v1.WriteSuccess";
WriteSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "lines_created",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "file_size",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "file_content_after_write",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var WritePermissionDenied$Runtime = (()=>class _WritePermissionDenied extends Message {
        constructor(data){
            super();
            this.path = "";
            this.directory = "";
            this.operation = "";
            this.error = "";
            this.isReadonly = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _WritePermissionDenied().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _WritePermissionDenied().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _WritePermissionDenied().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WritePermissionDenied, a, b2);
        }
    })();
var WritePermissionDenied = WritePermissionDenied$Runtime;
WritePermissionDenied.runtime = proto3;
WritePermissionDenied.typeName = "agent.v1.WritePermissionDenied";
WritePermissionDenied.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "directory",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "operation",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "is_readonly",
            kind: "scalar",
            T: 8
        }
    ]);
var WriteNoSpace$Runtime = (()=>class _WriteNoSpace extends Message {
        constructor(data){
            super();
            this.path = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _WriteNoSpace().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _WriteNoSpace().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _WriteNoSpace().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WriteNoSpace, a, b2);
        }
    })();
var WriteNoSpace = WriteNoSpace$Runtime;
WriteNoSpace.runtime = proto3;
WriteNoSpace.typeName = "agent.v1.WriteNoSpace";
WriteNoSpace.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]);
var WriteError$Runtime = (()=>class _WriteError extends Message {
        constructor(data){
            super();
            this.path = "";
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _WriteError().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _WriteError().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _WriteError().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WriteError, a, b2);
        }
    })();
var WriteError = WriteError$Runtime;
WriteError.runtime = proto3;
WriteError.typeName = "agent.v1.WriteError";
WriteError.fields = proto3.util.newFieldList(()=>[
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
var WriteRejected$Runtime = (()=>class _WriteRejected extends Message {
        constructor(data){
            super();
            this.path = "";
            this.reason = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _WriteRejected().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _WriteRejected().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _WriteRejected().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WriteRejected, a, b2);
        }
    })();
var WriteRejected = WriteRejected$Runtime;
WriteRejected.runtime = proto3;
WriteRejected.typeName = "agent.v1.WriteRejected";
WriteRejected.fields = proto3.util.newFieldList(()=>[
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
export { WriteArgs, WriteError, WriteNoSpace, WritePermissionDenied, WriteRejected, WriteResult, WriteSuccess };
