import { Message, proto3 } from "@bufbuild/protobuf";
import { DeleteArgs, DeleteResult } from "./delete_exec_pb.js";
var DeleteToolCall$Runtime = (()=>class _DeleteToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _DeleteToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _DeleteToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _DeleteToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_DeleteToolCall, a, b2);
        }
    })();
var DeleteToolCall = DeleteToolCall$Runtime;
DeleteToolCall.runtime = proto3;
DeleteToolCall.typeName = "agent.v1.DeleteToolCall";
DeleteToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: DeleteArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: DeleteResult
        }
    ]);
export { DeleteToolCall };
