import { Message, proto3 } from "@bufbuild/protobuf";
var NetworkPolicy_DefaultAction;
var SandboxPolicy_Type;
var SandboxPolicy_ReadBoundaryMode;
var NetworkPolicyLoggingConfig$Runtime = (()=>class _NetworkPolicyLoggingConfig extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _NetworkPolicyLoggingConfig().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _NetworkPolicyLoggingConfig().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _NetworkPolicyLoggingConfig().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_NetworkPolicyLoggingConfig, a, b2);
        }
    })();
var NetworkPolicyLoggingConfig = NetworkPolicyLoggingConfig$Runtime;
NetworkPolicyLoggingConfig.runtime = proto3;
NetworkPolicyLoggingConfig.typeName = "agent.v1.NetworkPolicyLoggingConfig";
NetworkPolicyLoggingConfig.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "decision_log_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "log_format",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var NetworkPolicy$Runtime = (()=>class _NetworkPolicy extends Message {
        constructor(data){
            super();
            this.deny = [];
            this.allow = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _NetworkPolicy().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _NetworkPolicy().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _NetworkPolicy().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_NetworkPolicy, a, b2);
        }
    })();
var NetworkPolicy = NetworkPolicy$Runtime;
NetworkPolicy.runtime = proto3;
NetworkPolicy.typeName = "agent.v1.NetworkPolicy";
NetworkPolicy.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "version",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 2,
            name: "default_action",
            kind: "enum",
            T: proto3.getEnumType(NetworkPolicy_DefaultAction),
            opt: true
        },
        {
            no: 3,
            name: "deny",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 4,
            name: "allow",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "logging",
            kind: "message",
            T: NetworkPolicyLoggingConfig,
            opt: true
        }
    ]);
(function(NetworkPolicy_DefaultAction2) {
    NetworkPolicy_DefaultAction2[NetworkPolicy_DefaultAction2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    NetworkPolicy_DefaultAction2[NetworkPolicy_DefaultAction2["ALLOW"] = 1] = "ALLOW";
    NetworkPolicy_DefaultAction2[NetworkPolicy_DefaultAction2["DENY"] = 2] = "DENY";
})(NetworkPolicy_DefaultAction || (NetworkPolicy_DefaultAction = {}));
proto3.util.setEnumType(NetworkPolicy_DefaultAction, "agent.v1.NetworkPolicy.DefaultAction", [
    {
        no: 0,
        name: "DEFAULT_ACTION_UNSPECIFIED"
    },
    {
        no: 1,
        name: "DEFAULT_ACTION_ALLOW"
    },
    {
        no: 2,
        name: "DEFAULT_ACTION_DENY"
    }
]);
var SandboxPolicy$Runtime = (()=>class _SandboxPolicy extends Message {
        constructor(data){
            super();
            this.type = SandboxPolicy_Type.UNSPECIFIED;
            this.additionalReadwritePaths = [];
            this.additionalReadonlyPaths = [];
            this.readBoundary = SandboxPolicy_ReadBoundaryMode.UNSPECIFIED;
            this.additionalReadPaths = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SandboxPolicy().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SandboxPolicy().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SandboxPolicy().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SandboxPolicy, a, b2);
        }
    })();
var SandboxPolicy = SandboxPolicy$Runtime;
SandboxPolicy.runtime = proto3;
SandboxPolicy.typeName = "agent.v1.SandboxPolicy";
SandboxPolicy.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "type",
            kind: "enum",
            T: proto3.getEnumType(SandboxPolicy_Type)
        },
        {
            no: 2,
            name: "network_access",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 3,
            name: "additional_readwrite_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 4,
            name: "additional_readonly_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "debug_output_dir",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "disable_tmp_write",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 8,
            name: "allowlist_escalated",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 9,
            name: "enable_shared_build_cache",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 10,
            name: "network_policy",
            kind: "message",
            T: NetworkPolicy,
            opt: true
        },
        {
            no: 11,
            name: "network_policy_strict",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 12,
            name: "capture_denies",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 13,
            name: "skip_statsig_defaults",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 14,
            name: "read_boundary",
            kind: "enum",
            T: proto3.getEnumType(SandboxPolicy_ReadBoundaryMode)
        },
        {
            no: 15,
            name: "additional_read_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
(function(SandboxPolicy_Type2) {
    SandboxPolicy_Type2[SandboxPolicy_Type2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    SandboxPolicy_Type2[SandboxPolicy_Type2["INSECURE_NONE"] = 1] = "INSECURE_NONE";
    SandboxPolicy_Type2[SandboxPolicy_Type2["WORKSPACE_READWRITE"] = 2] = "WORKSPACE_READWRITE";
    SandboxPolicy_Type2[SandboxPolicy_Type2["WORKSPACE_READONLY"] = 3] = "WORKSPACE_READONLY";
})(SandboxPolicy_Type || (SandboxPolicy_Type = {}));
proto3.util.setEnumType(SandboxPolicy_Type, "agent.v1.SandboxPolicy.Type", [
    {
        no: 0,
        name: "TYPE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "TYPE_INSECURE_NONE"
    },
    {
        no: 2,
        name: "TYPE_WORKSPACE_READWRITE"
    },
    {
        no: 3,
        name: "TYPE_WORKSPACE_READONLY"
    }
]);
(function(SandboxPolicy_ReadBoundaryMode2) {
    SandboxPolicy_ReadBoundaryMode2[SandboxPolicy_ReadBoundaryMode2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    SandboxPolicy_ReadBoundaryMode2[SandboxPolicy_ReadBoundaryMode2["SYSTEM"] = 1] = "SYSTEM";
    SandboxPolicy_ReadBoundaryMode2[SandboxPolicy_ReadBoundaryMode2["WORKSPACE"] = 2] = "WORKSPACE";
    SandboxPolicy_ReadBoundaryMode2[SandboxPolicy_ReadBoundaryMode2["CUSTOM"] = 3] = "CUSTOM";
})(SandboxPolicy_ReadBoundaryMode || (SandboxPolicy_ReadBoundaryMode = {}));
proto3.util.setEnumType(SandboxPolicy_ReadBoundaryMode, "agent.v1.SandboxPolicy.ReadBoundaryMode", [
    {
        no: 0,
        name: "READ_BOUNDARY_MODE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "READ_BOUNDARY_MODE_SYSTEM"
    },
    {
        no: 2,
        name: "READ_BOUNDARY_MODE_WORKSPACE"
    },
    {
        no: 3,
        name: "READ_BOUNDARY_MODE_CUSTOM"
    }
]);
var SandboxPolicyMergeSources$Runtime = (()=>class _SandboxPolicyMergeSources extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SandboxPolicyMergeSources().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SandboxPolicyMergeSources().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SandboxPolicyMergeSources().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SandboxPolicyMergeSources, a, b2);
        }
    })();
var SandboxPolicyMergeSources = SandboxPolicyMergeSources$Runtime;
SandboxPolicyMergeSources.runtime = proto3;
SandboxPolicyMergeSources.typeName = "agent.v1.SandboxPolicyMergeSources";
SandboxPolicyMergeSources.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "per_user",
            kind: "message",
            T: SandboxPolicy,
            opt: true
        },
        {
            no: 2,
            name: "per_repo",
            kind: "message",
            T: SandboxPolicy,
            opt: true
        },
        {
            no: 3,
            name: "team_admin",
            kind: "message",
            T: SandboxPolicy,
            opt: true
        }
    ]);
export { NetworkPolicy, NetworkPolicyLoggingConfig, NetworkPolicy_DefaultAction, SandboxPolicy, SandboxPolicyMergeSources, SandboxPolicy_ReadBoundaryMode, SandboxPolicy_Type };
