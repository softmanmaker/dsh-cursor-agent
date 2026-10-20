import { Message, proto3 } from "@bufbuild/protobuf";
import { RecordScreenArgs, RecordScreenResult } from "./record_screen_exec_pb.js";
var RecordScreenToolCall$Runtime = (()=>class _RecordScreenToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RecordScreenToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RecordScreenToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RecordScreenToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RecordScreenToolCall, a, b2);
        }
    })();
var RecordScreenToolCall = RecordScreenToolCall$Runtime;
RecordScreenToolCall.runtime = proto3;
RecordScreenToolCall.typeName = "agent.v1.RecordScreenToolCall";
RecordScreenToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: RecordScreenArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: RecordScreenResult
        }
    ]);
export { RecordScreenToolCall };
