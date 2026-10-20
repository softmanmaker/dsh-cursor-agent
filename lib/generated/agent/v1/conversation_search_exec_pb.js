import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
var ConversationSearchSource;
(function(ConversationSearchSource2) {
    ConversationSearchSource2[ConversationSearchSource2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    ConversationSearchSource2[ConversationSearchSource2["LOCAL"] = 1] = "LOCAL";
    ConversationSearchSource2[ConversationSearchSource2["CLOUD_CACHE"] = 2] = "CLOUD_CACHE";
})(ConversationSearchSource || (ConversationSearchSource = {}));
proto3.util.setEnumType(ConversationSearchSource, "agent.v1.ConversationSearchSource", [
    {
        no: 0,
        name: "CONVERSATION_SEARCH_SOURCE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "CONVERSATION_SEARCH_SOURCE_LOCAL"
    },
    {
        no: 2,
        name: "CONVERSATION_SEARCH_SOURCE_CLOUD_CACHE"
    }
]);
var ConversationSearchArgs$Runtime = (()=>class _ConversationSearchArgs extends Message {
        constructor(data){
            super();
            this.query = "";
            this.toolCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConversationSearchArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConversationSearchArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConversationSearchArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConversationSearchArgs, a, b2);
        }
    })();
var ConversationSearchArgs = ConversationSearchArgs$Runtime;
ConversationSearchArgs.runtime = proto3;
ConversationSearchArgs.typeName = "agent.v1.ConversationSearchArgs";
ConversationSearchArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "query",
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
            no: 3,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
var ConversationSearchResult$Runtime = (()=>class _ConversationSearchResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConversationSearchResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConversationSearchResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConversationSearchResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConversationSearchResult, a, b2);
        }
    })();
var ConversationSearchResult = ConversationSearchResult$Runtime;
ConversationSearchResult.runtime = proto3;
ConversationSearchResult.typeName = "agent.v1.ConversationSearchResult";
ConversationSearchResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ConversationSearchSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: ConversationSearchError,
            oneof: "result"
        }
    ]);
var ConversationSearchSuccess$Runtime = (()=>class _ConversationSearchSuccess extends Message {
        constructor(data){
            super();
            this.hits = [];
            this.truncated = false;
            this.partial = false;
            this.rebuilding = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConversationSearchSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConversationSearchSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConversationSearchSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConversationSearchSuccess, a, b2);
        }
    })();
var ConversationSearchSuccess = ConversationSearchSuccess$Runtime;
ConversationSearchSuccess.runtime = proto3;
ConversationSearchSuccess.typeName = "agent.v1.ConversationSearchSuccess";
ConversationSearchSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "hits",
            kind: "message",
            T: ConversationSearchHit,
            repeated: true
        },
        {
            no: 2,
            name: "truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "partial",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "rebuilding",
            kind: "scalar",
            T: 8
        }
    ]);
var ConversationSearchHit$Runtime = (()=>class _ConversationSearchHit extends Message {
        constructor(data){
            super();
            this.conversationId = "";
            this.title = "";
            this.source = ConversationSearchSource.UNSPECIFIED;
            this.updatedAtMs = protoInt64.zero;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConversationSearchHit().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConversationSearchHit().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConversationSearchHit().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConversationSearchHit, a, b2);
        }
    })();
var ConversationSearchHit = ConversationSearchHit$Runtime;
ConversationSearchHit.runtime = proto3;
ConversationSearchHit.typeName = "agent.v1.ConversationSearchHit";
ConversationSearchHit.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "source",
            kind: "enum",
            T: proto3.getEnumType(ConversationSearchSource)
        },
        {
            no: 4,
            name: "updated_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "snippet",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var ConversationSearchError$Runtime = (()=>class _ConversationSearchError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConversationSearchError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConversationSearchError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConversationSearchError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConversationSearchError, a, b2);
        }
    })();
var ConversationSearchError = ConversationSearchError$Runtime;
ConversationSearchError.runtime = proto3;
ConversationSearchError.typeName = "agent.v1.ConversationSearchError";
ConversationSearchError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
export { ConversationSearchArgs, ConversationSearchError, ConversationSearchHit, ConversationSearchResult, ConversationSearchSource, ConversationSearchSuccess };
