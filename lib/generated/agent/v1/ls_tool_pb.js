import { Message, proto3 } from "@bufbuild/protobuf";
import { LsArgs, LsResult } from "./ls_exec_pb.js";
var LsToolCall$Runtime = (()=>class _LsToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _LsToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _LsToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _LsToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_LsToolCall, a, b2);
        }
    })();
var LsToolCall = LsToolCall$Runtime;
LsToolCall.runtime = proto3;
LsToolCall.typeName = "agent.v1.LsToolCall";
LsToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: LsArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: LsResult
        }
    ]);
export { LsToolCall };
