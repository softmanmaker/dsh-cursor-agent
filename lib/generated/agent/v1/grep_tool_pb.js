import { Message, proto3 } from "@bufbuild/protobuf";
import { GrepArgs, GrepResult } from "./grep_exec_pb.js";
var GrepToolCall$Runtime = (()=>class _GrepToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GrepToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GrepToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GrepToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GrepToolCall, a, b2);
        }
    })();
var GrepToolCall = GrepToolCall$Runtime;
GrepToolCall.runtime = proto3;
GrepToolCall.typeName = "agent.v1.GrepToolCall";
GrepToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: GrepArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: GrepResult
        }
    ]);
export { GrepToolCall };
