import { Message, proto3 } from "@bufbuild/protobuf";
import { OutputLocation } from "./utils_pb.js";
var AiAttributionArgs$Runtime = (()=>class _AiAttributionArgs extends Message {
        constructor(data){
            super();
            this.filePaths = [];
            this.commitHashes = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AiAttributionArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AiAttributionArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AiAttributionArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AiAttributionArgs, a, b2);
        }
    })();
var AiAttributionArgs = AiAttributionArgs$Runtime;
AiAttributionArgs.runtime = proto3;
AiAttributionArgs.typeName = "agent.v1.AiAttributionArgs";
AiAttributionArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 5,
            name: "file_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "start_line",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 3,
            name: "end_line",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 6,
            name: "commit_hashes",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 7,
            name: "output_mode",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "max_commits",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 10,
            name: "include_line_ranges",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
var AiAttributionResult$Runtime = (()=>class _AiAttributionResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AiAttributionResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AiAttributionResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AiAttributionResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AiAttributionResult, a, b2);
        }
    })();
var AiAttributionResult = AiAttributionResult$Runtime;
AiAttributionResult.runtime = proto3;
AiAttributionResult.typeName = "agent.v1.AiAttributionResult";
AiAttributionResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: AiAttributionSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: AiAttributionError,
            oneof: "result"
        }
    ]);
var AiAttributionSuccess$Runtime = (()=>class _AiAttributionSuccess extends Message {
        constructor(data){
            super();
            this.attributionText = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AiAttributionSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AiAttributionSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AiAttributionSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AiAttributionSuccess, a, b2);
        }
    })();
var AiAttributionSuccess = AiAttributionSuccess$Runtime;
AiAttributionSuccess.runtime = proto3;
AiAttributionSuccess.typeName = "agent.v1.AiAttributionSuccess";
AiAttributionSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "attribution_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "output_location",
            kind: "message",
            T: OutputLocation,
            opt: true
        }
    ]);
var AiAttributionError$Runtime = (()=>class _AiAttributionError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AiAttributionError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AiAttributionError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AiAttributionError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AiAttributionError, a, b2);
        }
    })();
var AiAttributionError = AiAttributionError$Runtime;
AiAttributionError.runtime = proto3;
AiAttributionError.typeName = "agent.v1.AiAttributionError";
AiAttributionError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var AiAttributionToolCall$Runtime = (()=>class _AiAttributionToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AiAttributionToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AiAttributionToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AiAttributionToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AiAttributionToolCall, a, b2);
        }
    })();
var AiAttributionToolCall = AiAttributionToolCall$Runtime;
AiAttributionToolCall.runtime = proto3;
AiAttributionToolCall.typeName = "agent.v1.AiAttributionToolCall";
AiAttributionToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: AiAttributionArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: AiAttributionResult
        }
    ]);
export { AiAttributionArgs, AiAttributionError, AiAttributionResult, AiAttributionSuccess, AiAttributionToolCall };
