import { Message, proto3 } from "@bufbuild/protobuf";
var SetupVmEnvironmentArgs$Runtime = (()=>class _SetupVmEnvironmentArgs extends Message {
        constructor(data){
            super();
            this.installCommand = "";
            this.startCommand = "";
            this.dockerfileContents = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SetupVmEnvironmentArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SetupVmEnvironmentArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SetupVmEnvironmentArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SetupVmEnvironmentArgs, a, b2);
        }
    })();
var SetupVmEnvironmentArgs = SetupVmEnvironmentArgs$Runtime;
SetupVmEnvironmentArgs.runtime = proto3;
SetupVmEnvironmentArgs.typeName = "agent.v1.SetupVmEnvironmentArgs";
SetupVmEnvironmentArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 2,
            name: "install_command",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "start_command",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "dockerfile_contents",
            kind: "scalar",
            T: 9
        }
    ]);
var SetupVmEnvironmentResult$Runtime = (()=>class _SetupVmEnvironmentResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SetupVmEnvironmentResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SetupVmEnvironmentResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SetupVmEnvironmentResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SetupVmEnvironmentResult, a, b2);
        }
    })();
var SetupVmEnvironmentResult = SetupVmEnvironmentResult$Runtime;
SetupVmEnvironmentResult.runtime = proto3;
SetupVmEnvironmentResult.typeName = "agent.v1.SetupVmEnvironmentResult";
SetupVmEnvironmentResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: SetupVmEnvironmentSuccess,
            oneof: "result"
        }
    ]);
var SetupVmEnvironmentSuccess$Runtime = (()=>class _SetupVmEnvironmentSuccess extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SetupVmEnvironmentSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SetupVmEnvironmentSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SetupVmEnvironmentSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SetupVmEnvironmentSuccess, a, b2);
        }
    })();
var SetupVmEnvironmentSuccess = SetupVmEnvironmentSuccess$Runtime;
SetupVmEnvironmentSuccess.runtime = proto3;
SetupVmEnvironmentSuccess.typeName = "agent.v1.SetupVmEnvironmentSuccess";
SetupVmEnvironmentSuccess.fields = proto3.util.newFieldList(()=>[]);
var SetupVmEnvironmentToolCall$Runtime = (()=>class _SetupVmEnvironmentToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SetupVmEnvironmentToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SetupVmEnvironmentToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SetupVmEnvironmentToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SetupVmEnvironmentToolCall, a, b2);
        }
    })();
var SetupVmEnvironmentToolCall = SetupVmEnvironmentToolCall$Runtime;
SetupVmEnvironmentToolCall.runtime = proto3;
SetupVmEnvironmentToolCall.typeName = "agent.v1.SetupVmEnvironmentToolCall";
SetupVmEnvironmentToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: SetupVmEnvironmentArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: SetupVmEnvironmentResult
        }
    ]);
export { SetupVmEnvironmentArgs, SetupVmEnvironmentResult, SetupVmEnvironmentSuccess, SetupVmEnvironmentToolCall };
