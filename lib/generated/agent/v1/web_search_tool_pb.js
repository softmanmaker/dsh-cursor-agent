import { Message, proto3 } from "@bufbuild/protobuf";
var WebSearchArgs$Runtime = (()=>class _WebSearchArgs extends Message {
        constructor(data){
            super();
            this.searchTerm = "";
            this.toolCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _WebSearchArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _WebSearchArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _WebSearchArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WebSearchArgs, a, b2);
        }
    })();
var WebSearchArgs = WebSearchArgs$Runtime;
WebSearchArgs.runtime = proto3;
WebSearchArgs.typeName = "agent.v1.WebSearchArgs";
WebSearchArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "search_term",
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
var WebSearchResult$Runtime = (()=>class _WebSearchResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _WebSearchResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _WebSearchResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _WebSearchResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WebSearchResult, a, b2);
        }
    })();
var WebSearchResult = WebSearchResult$Runtime;
WebSearchResult.runtime = proto3;
WebSearchResult.typeName = "agent.v1.WebSearchResult";
WebSearchResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: WebSearchSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: WebSearchError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: WebSearchRejected,
            oneof: "result"
        }
    ]);
var WebSearchSuccess$Runtime = (()=>class _WebSearchSuccess extends Message {
        constructor(data){
            super();
            this.references = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _WebSearchSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _WebSearchSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _WebSearchSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WebSearchSuccess, a, b2);
        }
    })();
var WebSearchSuccess = WebSearchSuccess$Runtime;
WebSearchSuccess.runtime = proto3;
WebSearchSuccess.typeName = "agent.v1.WebSearchSuccess";
WebSearchSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "references",
            kind: "message",
            T: WebSearchReference,
            repeated: true
        }
    ]);
var WebSearchError$Runtime = (()=>class _WebSearchError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _WebSearchError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _WebSearchError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _WebSearchError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WebSearchError, a, b2);
        }
    })();
var WebSearchError = WebSearchError$Runtime;
WebSearchError.runtime = proto3;
WebSearchError.typeName = "agent.v1.WebSearchError";
WebSearchError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var WebSearchRejected$Runtime = (()=>class _WebSearchRejected extends Message {
        constructor(data){
            super();
            this.reason = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _WebSearchRejected().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _WebSearchRejected().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _WebSearchRejected().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WebSearchRejected, a, b2);
        }
    })();
var WebSearchRejected = WebSearchRejected$Runtime;
WebSearchRejected.runtime = proto3;
WebSearchRejected.typeName = "agent.v1.WebSearchRejected";
WebSearchRejected.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
var WebSearchReference$Runtime = (()=>class _WebSearchReference extends Message {
        constructor(data){
            super();
            this.title = "";
            this.url = "";
            this.chunk = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _WebSearchReference().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _WebSearchReference().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _WebSearchReference().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WebSearchReference, a, b2);
        }
    })();
var WebSearchReference = WebSearchReference$Runtime;
WebSearchReference.runtime = proto3;
WebSearchReference.typeName = "agent.v1.WebSearchReference";
WebSearchReference.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "chunk",
            kind: "scalar",
            T: 9
        }
    ]);
var WebSearchToolCall$Runtime = (()=>class _WebSearchToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _WebSearchToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _WebSearchToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _WebSearchToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WebSearchToolCall, a, b2);
        }
    })();
var WebSearchToolCall = WebSearchToolCall$Runtime;
WebSearchToolCall.runtime = proto3;
WebSearchToolCall.typeName = "agent.v1.WebSearchToolCall";
WebSearchToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: WebSearchArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: WebSearchResult
        }
    ]);
var WebSearchRequestQuery$Runtime = (()=>class _WebSearchRequestQuery extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _WebSearchRequestQuery().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _WebSearchRequestQuery().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _WebSearchRequestQuery().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WebSearchRequestQuery, a, b2);
        }
    })();
var WebSearchRequestQuery = WebSearchRequestQuery$Runtime;
WebSearchRequestQuery.runtime = proto3;
WebSearchRequestQuery.typeName = "agent.v1.WebSearchRequestQuery";
WebSearchRequestQuery.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: WebSearchArgs
        }
    ]);
var WebSearchRequestResponse$Runtime = (()=>class _WebSearchRequestResponse extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _WebSearchRequestResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _WebSearchRequestResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _WebSearchRequestResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WebSearchRequestResponse, a, b2);
        }
    })();
var WebSearchRequestResponse = WebSearchRequestResponse$Runtime;
WebSearchRequestResponse.runtime = proto3;
WebSearchRequestResponse.typeName = "agent.v1.WebSearchRequestResponse";
WebSearchRequestResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "approved",
            kind: "message",
            T: WebSearchRequestResponse_Approved,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: WebSearchRequestResponse_Rejected,
            oneof: "result"
        }
    ]);
var WebSearchRequestResponse_Approved$Runtime = (()=>class _WebSearchRequestResponse_Approved extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _WebSearchRequestResponse_Approved().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _WebSearchRequestResponse_Approved().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _WebSearchRequestResponse_Approved().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WebSearchRequestResponse_Approved, a, b2);
        }
    })();
var WebSearchRequestResponse_Approved = WebSearchRequestResponse_Approved$Runtime;
WebSearchRequestResponse_Approved.runtime = proto3;
WebSearchRequestResponse_Approved.typeName = "agent.v1.WebSearchRequestResponse.Approved";
WebSearchRequestResponse_Approved.fields = proto3.util.newFieldList(()=>[]);
var WebSearchRequestResponse_Rejected$Runtime = (()=>class _WebSearchRequestResponse_Rejected extends Message {
        constructor(data){
            super();
            this.reason = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _WebSearchRequestResponse_Rejected().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _WebSearchRequestResponse_Rejected().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _WebSearchRequestResponse_Rejected().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WebSearchRequestResponse_Rejected, a, b2);
        }
    })();
var WebSearchRequestResponse_Rejected = WebSearchRequestResponse_Rejected$Runtime;
WebSearchRequestResponse_Rejected.runtime = proto3;
WebSearchRequestResponse_Rejected.typeName = "agent.v1.WebSearchRequestResponse.Rejected";
WebSearchRequestResponse_Rejected.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
export { WebSearchArgs, WebSearchError, WebSearchReference, WebSearchRejected, WebSearchRequestQuery, WebSearchRequestResponse, WebSearchRequestResponse_Approved, WebSearchRequestResponse_Rejected, WebSearchResult, WebSearchSuccess, WebSearchToolCall };
