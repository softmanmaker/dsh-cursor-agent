import { Message, proto3 } from "@bufbuild/protobuf";
var HookAdditionalContext$Runtime = (()=>class _HookAdditionalContext extends Message {
        constructor(data){
            super();
            this.hookEventName = "";
            this.content = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _HookAdditionalContext().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _HookAdditionalContext().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _HookAdditionalContext().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_HookAdditionalContext, a, b2);
        }
    })();
var HookAdditionalContext = HookAdditionalContext$Runtime;
HookAdditionalContext.runtime = proto3;
HookAdditionalContext.typeName = "agent.v1.HookAdditionalContext";
HookAdditionalContext.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "hook_event_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]);
export { HookAdditionalContext };
