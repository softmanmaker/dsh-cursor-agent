import { Message, proto3 } from "@bufbuild/protobuf";
import { FetchArgs, FetchResult } from "./fetch_exec_pb.js";
var FetchToolCall$Runtime = (()=>class _FetchToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FetchToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FetchToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FetchToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FetchToolCall, a, b2);
        }
    })();
var FetchToolCall = FetchToolCall$Runtime;
FetchToolCall.runtime = proto3;
FetchToolCall.typeName = "agent.v1.FetchToolCall";
FetchToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: FetchArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: FetchResult
        }
    ]);
export { FetchToolCall };
