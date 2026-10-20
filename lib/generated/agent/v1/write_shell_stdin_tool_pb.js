import { Message, proto3 } from "@bufbuild/protobuf";
import { WriteShellStdinArgs, WriteShellStdinResult } from "./background_shell_exec_pb.js";
var WriteShellStdinToolCall$Runtime = (()=>class _WriteShellStdinToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _WriteShellStdinToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _WriteShellStdinToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _WriteShellStdinToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WriteShellStdinToolCall, a, b2);
        }
    })();
var WriteShellStdinToolCall = WriteShellStdinToolCall$Runtime;
WriteShellStdinToolCall.runtime = proto3;
WriteShellStdinToolCall.typeName = "agent.v1.WriteShellStdinToolCall";
WriteShellStdinToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: WriteShellStdinArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: WriteShellStdinResult
        }
    ]);
export { WriteShellStdinToolCall };
