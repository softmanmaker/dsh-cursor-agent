import { Message, proto3 } from "@bufbuild/protobuf";
import { ExecClientControlMessage, ExecClientMessage } from "./exec_pb.js";
var ExecStreamElement$Runtime = (()=>class _ExecStreamElement extends Message {
        constructor(data){
            super();
            this.element = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ExecStreamElement().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ExecStreamElement().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ExecStreamElement().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ExecStreamElement, a, b2);
        }
    })();
var ExecStreamElement = ExecStreamElement$Runtime;
ExecStreamElement.runtime = proto3;
ExecStreamElement.typeName = "agent.v1.ExecStreamElement";
ExecStreamElement.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "exec_client_message",
            kind: "message",
            T: ExecClientMessage,
            oneof: "element"
        },
        {
            no: 2,
            name: "exec_client_control_message",
            kind: "message",
            T: ExecClientControlMessage,
            oneof: "element"
        }
    ]);
export { ExecStreamElement };
