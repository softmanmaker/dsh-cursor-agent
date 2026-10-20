import { Message, proto3 } from "@bufbuild/protobuf";
var ReplaceEnvMode;
(function(ReplaceEnvMode2) {
    ReplaceEnvMode2[ReplaceEnvMode2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    ReplaceEnvMode2[ReplaceEnvMode2["CUSTOM"] = 1] = "CUSTOM";
    ReplaceEnvMode2[ReplaceEnvMode2["CLEAN_SLATE"] = 2] = "CLEAN_SLATE";
    ReplaceEnvMode2[ReplaceEnvMode2["DEFAULT"] = 3] = "DEFAULT";
})(ReplaceEnvMode || (ReplaceEnvMode = {}));
proto3.util.setEnumType(ReplaceEnvMode, "agent.v1.ReplaceEnvMode", [
    {
        no: 0,
        name: "REPLACE_ENV_MODE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "REPLACE_ENV_MODE_CUSTOM"
    },
    {
        no: 2,
        name: "REPLACE_ENV_MODE_CLEAN_SLATE"
    },
    {
        no: 3,
        name: "REPLACE_ENV_MODE_DEFAULT"
    }
]);
var RepoCheckoutRefOverride$Runtime = (()=>class _RepoCheckoutRefOverride extends Message {
        constructor(data){
            super();
            this.repoUrl = "";
            this.ref = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RepoCheckoutRefOverride().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RepoCheckoutRefOverride().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RepoCheckoutRefOverride().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RepoCheckoutRefOverride, a, b2);
        }
    })();
var RepoCheckoutRefOverride = RepoCheckoutRefOverride$Runtime;
RepoCheckoutRefOverride.runtime = proto3;
RepoCheckoutRefOverride.typeName = "agent.v1.RepoCheckoutRefOverride";
RepoCheckoutRefOverride.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "ref",
            kind: "scalar",
            T: 9
        }
    ]);
var ReplaceEnvConfig$Runtime = (()=>class _ReplaceEnvConfig extends Message {
        constructor(data){
            super();
            this.installScript = "";
            this.dockerfileContents = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReplaceEnvConfig().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReplaceEnvConfig().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReplaceEnvConfig().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReplaceEnvConfig, a, b2);
        }
    })();
var ReplaceEnvConfig = ReplaceEnvConfig$Runtime;
ReplaceEnvConfig.runtime = proto3;
ReplaceEnvConfig.typeName = "agent.v1.ReplaceEnvConfig";
ReplaceEnvConfig.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "install_script",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "dockerfile_contents",
            kind: "scalar",
            T: 9
        }
    ]);
var ReplaceEnvArgs$Runtime = (()=>class _ReplaceEnvArgs extends Message {
        constructor(data){
            super();
            this.mode = ReplaceEnvMode.UNSPECIFIED;
            this.checkoutRefOverrides = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReplaceEnvArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReplaceEnvArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReplaceEnvArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReplaceEnvArgs, a, b2);
        }
    })();
var ReplaceEnvArgs = ReplaceEnvArgs$Runtime;
ReplaceEnvArgs.runtime = proto3;
ReplaceEnvArgs.typeName = "agent.v1.ReplaceEnvArgs";
ReplaceEnvArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "config",
            kind: "message",
            T: ReplaceEnvConfig
        },
        {
            no: 2,
            name: "mode",
            kind: "enum",
            T: proto3.getEnumType(ReplaceEnvMode)
        },
        {
            no: 3,
            name: "checkout_ref_overrides",
            kind: "message",
            T: RepoCheckoutRefOverride,
            repeated: true
        }
    ]);
var ReplaceEnvSuccess$Runtime = (()=>class _ReplaceEnvSuccess extends Message {
        constructor(data){
            super();
            this.setupLogs = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReplaceEnvSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReplaceEnvSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReplaceEnvSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReplaceEnvSuccess, a, b2);
        }
    })();
var ReplaceEnvSuccess = ReplaceEnvSuccess$Runtime;
ReplaceEnvSuccess.runtime = proto3;
ReplaceEnvSuccess.typeName = "agent.v1.ReplaceEnvSuccess";
ReplaceEnvSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "setup_logs",
            kind: "scalar",
            T: 9
        }
    ]);
var ReplaceEnvFailure$Runtime = (()=>class _ReplaceEnvFailure extends Message {
        constructor(data){
            super();
            this.errorMessage = "";
            this.setupLogs = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReplaceEnvFailure().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReplaceEnvFailure().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReplaceEnvFailure().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReplaceEnvFailure, a, b2);
        }
    })();
var ReplaceEnvFailure = ReplaceEnvFailure$Runtime;
ReplaceEnvFailure.runtime = proto3;
ReplaceEnvFailure.typeName = "agent.v1.ReplaceEnvFailure";
ReplaceEnvFailure.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "setup_logs",
            kind: "scalar",
            T: 9
        }
    ]);
var ReplaceEnvResult$Runtime = (()=>class _ReplaceEnvResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReplaceEnvResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReplaceEnvResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReplaceEnvResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReplaceEnvResult, a, b2);
        }
    })();
var ReplaceEnvResult = ReplaceEnvResult$Runtime;
ReplaceEnvResult.runtime = proto3;
ReplaceEnvResult.typeName = "agent.v1.ReplaceEnvResult";
ReplaceEnvResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ReplaceEnvSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "failure",
            kind: "message",
            T: ReplaceEnvFailure,
            oneof: "result"
        }
    ]);
var ReplaceEnvToolCall$Runtime = (()=>class _ReplaceEnvToolCall extends Message {
        constructor(data){
            super();
            this.associatedPodKey = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReplaceEnvToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReplaceEnvToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReplaceEnvToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReplaceEnvToolCall, a, b2);
        }
    })();
var ReplaceEnvToolCall = ReplaceEnvToolCall$Runtime;
ReplaceEnvToolCall.runtime = proto3;
ReplaceEnvToolCall.typeName = "agent.v1.ReplaceEnvToolCall";
ReplaceEnvToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ReplaceEnvArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: ReplaceEnvResult
        },
        {
            no: 3,
            name: "associated_pod_key",
            kind: "scalar",
            T: 9
        }
    ]);
var ReplaceEnvToolCallDelta$Runtime = (()=>class _ReplaceEnvToolCallDelta extends Message {
        constructor(data){
            super();
            this.associatedPodKey = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReplaceEnvToolCallDelta().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReplaceEnvToolCallDelta().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReplaceEnvToolCallDelta().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReplaceEnvToolCallDelta, a, b2);
        }
    })();
var ReplaceEnvToolCallDelta = ReplaceEnvToolCallDelta$Runtime;
ReplaceEnvToolCallDelta.runtime = proto3;
ReplaceEnvToolCallDelta.typeName = "agent.v1.ReplaceEnvToolCallDelta";
ReplaceEnvToolCallDelta.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "associated_pod_key",
            kind: "scalar",
            T: 9
        }
    ]);
export { ReplaceEnvArgs, ReplaceEnvConfig, ReplaceEnvFailure, ReplaceEnvMode, ReplaceEnvResult, ReplaceEnvSuccess, ReplaceEnvToolCall, ReplaceEnvToolCallDelta, RepoCheckoutRefOverride };
