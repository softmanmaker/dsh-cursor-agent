import { Message, proto3 } from "@bufbuild/protobuf";
import { OutputLocation, SmartModeApproval } from "./utils_pb.js";
var WebFetchArgs$Runtime = (()=>class _WebFetchArgs extends Message {
        constructor(data){
            super();
            this.url = "";
            this.toolCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _WebFetchArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _WebFetchArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _WebFetchArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WebFetchArgs, a, b2);
        }
    })();
var WebFetchArgs = WebFetchArgs$Runtime;
WebFetchArgs.runtime = proto3;
WebFetchArgs.typeName = "agent.v1.WebFetchArgs";
WebFetchArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "url",
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
var WebFetchResult$Runtime = (()=>class _WebFetchResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _WebFetchResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _WebFetchResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _WebFetchResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WebFetchResult, a, b2);
        }
    })();
var WebFetchResult = WebFetchResult$Runtime;
WebFetchResult.runtime = proto3;
WebFetchResult.typeName = "agent.v1.WebFetchResult";
WebFetchResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: WebFetchSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: WebFetchError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: WebFetchRejected,
            oneof: "result"
        }
    ]);
var WebFetchSuccess$Runtime = (()=>class _WebFetchSuccess extends Message {
        constructor(data){
            super();
            this.url = "";
            this.markdown = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _WebFetchSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _WebFetchSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _WebFetchSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WebFetchSuccess, a, b2);
        }
    })();
var WebFetchSuccess = WebFetchSuccess$Runtime;
WebFetchSuccess.runtime = proto3;
WebFetchSuccess.typeName = "agent.v1.WebFetchSuccess";
WebFetchSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "markdown",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "output_location",
            kind: "message",
            T: OutputLocation,
            opt: true
        }
    ]);
var WebFetchError$Runtime = (()=>class _WebFetchError extends Message {
        constructor(data){
            super();
            this.url = "";
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _WebFetchError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _WebFetchError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _WebFetchError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WebFetchError, a, b2);
        }
    })();
var WebFetchError = WebFetchError$Runtime;
WebFetchError.runtime = proto3;
WebFetchError.typeName = "agent.v1.WebFetchError";
WebFetchError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "url",
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
var WebFetchRejected$Runtime = (()=>class _WebFetchRejected extends Message {
        constructor(data){
            super();
            this.reason = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _WebFetchRejected().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _WebFetchRejected().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _WebFetchRejected().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WebFetchRejected, a, b2);
        }
    })();
var WebFetchRejected = WebFetchRejected$Runtime;
WebFetchRejected.runtime = proto3;
WebFetchRejected.typeName = "agent.v1.WebFetchRejected";
WebFetchRejected.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
var WebFetchToolCall$Runtime = (()=>class _WebFetchToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _WebFetchToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _WebFetchToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _WebFetchToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WebFetchToolCall, a, b2);
        }
    })();
var WebFetchToolCall = WebFetchToolCall$Runtime;
WebFetchToolCall.runtime = proto3;
WebFetchToolCall.typeName = "agent.v1.WebFetchToolCall";
WebFetchToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: WebFetchArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: WebFetchResult
        }
    ]);
var WebFetchRequestQuery$Runtime = (()=>class _WebFetchRequestQuery extends Message {
        constructor(data){
            super();
            this.skipApproval = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _WebFetchRequestQuery().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _WebFetchRequestQuery().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _WebFetchRequestQuery().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WebFetchRequestQuery, a, b2);
        }
    })();
var WebFetchRequestQuery = WebFetchRequestQuery$Runtime;
WebFetchRequestQuery.runtime = proto3;
WebFetchRequestQuery.typeName = "agent.v1.WebFetchRequestQuery";
WebFetchRequestQuery.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: WebFetchArgs
        },
        {
            no: 2,
            name: "skip_approval",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "smart_mode_approval",
            kind: "message",
            T: SmartModeApproval
        }
    ]);
var WebFetchRequestResponse$Runtime = (()=>class _WebFetchRequestResponse extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _WebFetchRequestResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _WebFetchRequestResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _WebFetchRequestResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WebFetchRequestResponse, a, b2);
        }
    })();
var WebFetchRequestResponse = WebFetchRequestResponse$Runtime;
WebFetchRequestResponse.runtime = proto3;
WebFetchRequestResponse.typeName = "agent.v1.WebFetchRequestResponse";
WebFetchRequestResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "approved",
            kind: "message",
            T: WebFetchRequestResponse_Approved,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: WebFetchRequestResponse_Rejected,
            oneof: "result"
        }
    ]);
var WebFetchRequestResponse_Approved$Runtime = (()=>class _WebFetchRequestResponse_Approved extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _WebFetchRequestResponse_Approved().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _WebFetchRequestResponse_Approved().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _WebFetchRequestResponse_Approved().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WebFetchRequestResponse_Approved, a, b2);
        }
    })();
var WebFetchRequestResponse_Approved = WebFetchRequestResponse_Approved$Runtime;
WebFetchRequestResponse_Approved.runtime = proto3;
WebFetchRequestResponse_Approved.typeName = "agent.v1.WebFetchRequestResponse.Approved";
WebFetchRequestResponse_Approved.fields = proto3.util.newFieldList(()=>[]);
var WebFetchRequestResponse_Rejected$Runtime = (()=>class _WebFetchRequestResponse_Rejected extends Message {
        constructor(data){
            super();
            this.reason = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _WebFetchRequestResponse_Rejected().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _WebFetchRequestResponse_Rejected().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _WebFetchRequestResponse_Rejected().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WebFetchRequestResponse_Rejected, a, b2);
        }
    })();
var WebFetchRequestResponse_Rejected = WebFetchRequestResponse_Rejected$Runtime;
WebFetchRequestResponse_Rejected.runtime = proto3;
WebFetchRequestResponse_Rejected.typeName = "agent.v1.WebFetchRequestResponse.Rejected";
WebFetchRequestResponse_Rejected.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
export { WebFetchArgs, WebFetchError, WebFetchRejected, WebFetchRequestQuery, WebFetchRequestResponse, WebFetchRequestResponse_Approved, WebFetchRequestResponse_Rejected, WebFetchResult, WebFetchSuccess, WebFetchToolCall };
