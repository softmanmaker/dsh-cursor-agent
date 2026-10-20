import { Message, proto3 } from "@bufbuild/protobuf";
var GenerateImageArgs$Runtime = (()=>class _GenerateImageArgs extends Message {
        constructor(data){
            super();
            this.description = "";
            this.referenceImagePaths = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GenerateImageArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GenerateImageArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GenerateImageArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GenerateImageArgs, a, b2);
        }
    })();
var GenerateImageArgs = GenerateImageArgs$Runtime;
GenerateImageArgs.runtime = proto3;
GenerateImageArgs.typeName = "agent.v1.GenerateImageArgs";
GenerateImageArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "reference_image_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 6,
            name: "aspect_ratio",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var GenerateImageResult$Runtime = (()=>class _GenerateImageResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GenerateImageResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GenerateImageResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GenerateImageResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GenerateImageResult, a, b2);
        }
    })();
var GenerateImageResult = GenerateImageResult$Runtime;
GenerateImageResult.runtime = proto3;
GenerateImageResult.typeName = "agent.v1.GenerateImageResult";
GenerateImageResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: GenerateImageSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: GenerateImageError,
            oneof: "result"
        }
    ]);
var GenerateImageSuccess$Runtime = (()=>class _GenerateImageSuccess extends Message {
        constructor(data){
            super();
            this.filePath = "";
            this.imageData = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GenerateImageSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GenerateImageSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GenerateImageSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GenerateImageSuccess, a, b2);
        }
    })();
var GenerateImageSuccess = GenerateImageSuccess$Runtime;
GenerateImageSuccess.runtime = proto3;
GenerateImageSuccess.typeName = "agent.v1.GenerateImageSuccess";
GenerateImageSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "image_data",
            kind: "scalar",
            T: 9
        }
    ]);
var GenerateImageError$Runtime = (()=>class _GenerateImageError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GenerateImageError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GenerateImageError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GenerateImageError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GenerateImageError, a, b2);
        }
    })();
var GenerateImageError = GenerateImageError$Runtime;
GenerateImageError.runtime = proto3;
GenerateImageError.typeName = "agent.v1.GenerateImageError";
GenerateImageError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var GenerateImageToolCall$Runtime = (()=>class _GenerateImageToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GenerateImageToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GenerateImageToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GenerateImageToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GenerateImageToolCall, a, b2);
        }
    })();
var GenerateImageToolCall = GenerateImageToolCall$Runtime;
GenerateImageToolCall.runtime = proto3;
GenerateImageToolCall.typeName = "agent.v1.GenerateImageToolCall";
GenerateImageToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: GenerateImageArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: GenerateImageResult
        }
    ]);
var GenerateImageRequestQuery$Runtime = (()=>class _GenerateImageRequestQuery extends Message {
        constructor(data){
            super();
            this.toolCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GenerateImageRequestQuery().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GenerateImageRequestQuery().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GenerateImageRequestQuery().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GenerateImageRequestQuery, a, b2);
        }
    })();
var GenerateImageRequestQuery = GenerateImageRequestQuery$Runtime;
GenerateImageRequestQuery.runtime = proto3;
GenerateImageRequestQuery.typeName = "agent.v1.GenerateImageRequestQuery";
GenerateImageRequestQuery.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: GenerateImageArgs
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
var GenerateImageRequestResponse$Runtime = (()=>class _GenerateImageRequestResponse extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GenerateImageRequestResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GenerateImageRequestResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GenerateImageRequestResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GenerateImageRequestResponse, a, b2);
        }
    })();
var GenerateImageRequestResponse = GenerateImageRequestResponse$Runtime;
GenerateImageRequestResponse.runtime = proto3;
GenerateImageRequestResponse.typeName = "agent.v1.GenerateImageRequestResponse";
GenerateImageRequestResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "approved",
            kind: "message",
            T: GenerateImageRequestResponse_Approved,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: GenerateImageRequestResponse_Rejected,
            oneof: "result"
        }
    ]);
var GenerateImageRequestResponse_Approved$Runtime = (()=>class _GenerateImageRequestResponse_Approved extends Message {
        constructor(data){
            super();
            this.description = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GenerateImageRequestResponse_Approved().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GenerateImageRequestResponse_Approved().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GenerateImageRequestResponse_Approved().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GenerateImageRequestResponse_Approved, a, b2);
        }
    })();
var GenerateImageRequestResponse_Approved = GenerateImageRequestResponse_Approved$Runtime;
GenerateImageRequestResponse_Approved.runtime = proto3;
GenerateImageRequestResponse_Approved.typeName = "agent.v1.GenerateImageRequestResponse.Approved";
GenerateImageRequestResponse_Approved.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "description",
            kind: "scalar",
            T: 9
        }
    ]);
var GenerateImageRequestResponse_Rejected$Runtime = (()=>class _GenerateImageRequestResponse_Rejected extends Message {
        constructor(data){
            super();
            this.reason = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GenerateImageRequestResponse_Rejected().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GenerateImageRequestResponse_Rejected().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GenerateImageRequestResponse_Rejected().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GenerateImageRequestResponse_Rejected, a, b2);
        }
    })();
var GenerateImageRequestResponse_Rejected = GenerateImageRequestResponse_Rejected$Runtime;
GenerateImageRequestResponse_Rejected.runtime = proto3;
GenerateImageRequestResponse_Rejected.typeName = "agent.v1.GenerateImageRequestResponse.Rejected";
GenerateImageRequestResponse_Rejected.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
export { GenerateImageArgs, GenerateImageError, GenerateImageRequestQuery, GenerateImageRequestResponse, GenerateImageRequestResponse_Approved, GenerateImageRequestResponse_Rejected, GenerateImageResult, GenerateImageSuccess, GenerateImageToolCall };
