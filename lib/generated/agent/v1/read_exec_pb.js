import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
var ReadArgs$Runtime = (()=>class _ReadArgs extends Message {
        constructor(data){
            super();
            this.path = "";
            this.toolCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ReadArgs().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ReadArgs().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ReadArgs().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadArgs, a, b2);
        }
    })();
var ReadArgs = ReadArgs$Runtime;
ReadArgs.runtime = proto3;
ReadArgs.typeName = "agent.v1.ReadArgs";
ReadArgs.fields = proto3.util.newFieldList(()=>[
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
        },
        {
            no: 4,
            name: "offset",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 5,
            name: "limit",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 6,
            name: "encoding_hint",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var ReadResult$Runtime = (()=>class _ReadResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ReadResult().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ReadResult().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ReadResult().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadResult, a, b2);
        }
    })();
var ReadResult = ReadResult$Runtime;
ReadResult.runtime = proto3;
ReadResult.typeName = "agent.v1.ReadResult";
ReadResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ReadSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: ReadError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: ReadRejected,
            oneof: "result"
        },
        {
            no: 4,
            name: "file_not_found",
            kind: "message",
            T: ReadFileNotFound,
            oneof: "result"
        },
        {
            no: 5,
            name: "permission_denied",
            kind: "message",
            T: ReadPermissionDenied,
            oneof: "result"
        },
        {
            no: 6,
            name: "invalid_file",
            kind: "message",
            T: ReadInvalidFile,
            oneof: "result"
        }
    ]);
var ReadSuccess$Runtime = (()=>class _ReadSuccess extends Message {
        constructor(data){
            super();
            this.path = "";
            this.output = {
                case: void 0
            };
            this.totalLines = 0;
            this.fileSize = protoInt64.zero;
            this.truncated = false;
            this.rangeApplied = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ReadSuccess().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ReadSuccess().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ReadSuccess().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadSuccess, a, b2);
        }
    })();
var ReadSuccess = ReadSuccess$Runtime;
ReadSuccess.runtime = proto3;
ReadSuccess.typeName = "agent.v1.ReadSuccess";
ReadSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9,
            oneof: "output"
        },
        {
            no: 5,
            name: "data",
            kind: "scalar",
            T: 12,
            oneof: "output"
        },
        {
            no: 3,
            name: "total_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "file_size",
            kind: "scalar",
            T: 3
        },
        {
            no: 6,
            name: "truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "output_blob_id",
            kind: "scalar",
            T: 12,
            opt: true
        },
        {
            no: 8,
            name: "range_applied",
            kind: "scalar",
            T: 8
        }
    ]);
var ReadError$Runtime = (()=>class _ReadError extends Message {
        constructor(data){
            super();
            this.path = "";
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ReadError().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ReadError().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ReadError().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadError, a, b2);
        }
    })();
var ReadError = ReadError$Runtime;
ReadError.runtime = proto3;
ReadError.typeName = "agent.v1.ReadError";
ReadError.fields = proto3.util.newFieldList(()=>[
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
var ReadRejected$Runtime = (()=>class _ReadRejected extends Message {
        constructor(data){
            super();
            this.path = "";
            this.reason = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ReadRejected().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ReadRejected().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ReadRejected().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadRejected, a, b2);
        }
    })();
var ReadRejected = ReadRejected$Runtime;
ReadRejected.runtime = proto3;
ReadRejected.typeName = "agent.v1.ReadRejected";
ReadRejected.fields = proto3.util.newFieldList(()=>[
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
var ReadFileNotFound$Runtime = (()=>class _ReadFileNotFound extends Message {
        constructor(data){
            super();
            this.path = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ReadFileNotFound().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ReadFileNotFound().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ReadFileNotFound().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadFileNotFound, a, b2);
        }
    })();
var ReadFileNotFound = ReadFileNotFound$Runtime;
ReadFileNotFound.runtime = proto3;
ReadFileNotFound.typeName = "agent.v1.ReadFileNotFound";
ReadFileNotFound.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]);
var ReadPermissionDenied$Runtime = (()=>class _ReadPermissionDenied extends Message {
        constructor(data){
            super();
            this.path = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ReadPermissionDenied().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ReadPermissionDenied().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ReadPermissionDenied().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadPermissionDenied, a, b2);
        }
    })();
var ReadPermissionDenied = ReadPermissionDenied$Runtime;
ReadPermissionDenied.runtime = proto3;
ReadPermissionDenied.typeName = "agent.v1.ReadPermissionDenied";
ReadPermissionDenied.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]);
var ReadInvalidFile$Runtime = (()=>class _ReadInvalidFile extends Message {
        constructor(data){
            super();
            this.path = "";
            this.reason = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ReadInvalidFile().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ReadInvalidFile().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ReadInvalidFile().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadInvalidFile, a, b2);
        }
    })();
var ReadInvalidFile = ReadInvalidFile$Runtime;
ReadInvalidFile.runtime = proto3;
ReadInvalidFile.typeName = "agent.v1.ReadInvalidFile";
ReadInvalidFile.fields = proto3.util.newFieldList(()=>[
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
export { ReadArgs, ReadError, ReadFileNotFound, ReadInvalidFile, ReadPermissionDenied, ReadRejected, ReadResult, ReadSuccess };
