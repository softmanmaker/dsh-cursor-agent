import { Message, proto3 } from "@bufbuild/protobuf";
var SystemPromptSpec$Runtime = (()=>class _SystemPromptSpec extends Message {
        constructor(data){
            super();
            this.spec = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SystemPromptSpec().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SystemPromptSpec().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SystemPromptSpec().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SystemPromptSpec, a, b2);
        }
    })();
var SystemPromptSpec = SystemPromptSpec$Runtime;
SystemPromptSpec.runtime = proto3;
SystemPromptSpec.typeName = "agent.v1.SystemPromptSpec";
SystemPromptSpec.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "replace",
            kind: "scalar",
            T: 9,
            oneof: "spec"
        },
        {
            no: 2,
            name: "append",
            kind: "scalar",
            T: 9,
            oneof: "spec"
        }
    ]);
export { SystemPromptSpec };
