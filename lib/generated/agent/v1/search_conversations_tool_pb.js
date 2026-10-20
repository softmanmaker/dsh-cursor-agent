import { Message, proto3 } from "@bufbuild/protobuf";
import { ConversationSearchArgs, ConversationSearchResult } from "./conversation_search_exec_pb.js";
var SearchConversationsToolCall$Runtime = (()=>class _SearchConversationsToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SearchConversationsToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SearchConversationsToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SearchConversationsToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SearchConversationsToolCall, a, b2);
        }
    })();
var SearchConversationsToolCall = SearchConversationsToolCall$Runtime;
SearchConversationsToolCall.runtime = proto3;
SearchConversationsToolCall.typeName = "agent.v1.SearchConversationsToolCall";
SearchConversationsToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ConversationSearchArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: ConversationSearchResult
        }
    ]);
export { SearchConversationsToolCall };
