import { Message, proto3 } from "@bufbuild/protobuf";
var AgentSkill$Runtime = (()=>class _AgentSkill extends Message {
        constructor(data){
            super();
            this.fullPath = "";
            this.content = "";
            this.description = "";
            this.environments = [];
            this.disabledEnvironments = [];
            this.disableModelInvocation = false;
            this.globs = [];
            this.scopedTo = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AgentSkill().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AgentSkill().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AgentSkill().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AgentSkill, a, b2);
        }
    })();
var AgentSkill = AgentSkill$Runtime;
AgentSkill.runtime = proto3;
AgentSkill.typeName = "agent.v1.AgentSkill";
AgentSkill.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "full_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "parse_error",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "environments",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 6,
            name: "disabled_environments",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 7,
            name: "git_remote_origin",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "disable_model_invocation",
            kind: "scalar",
            T: 8
        },
        {
            no: 9,
            name: "plugin",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "marketplace",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "plugin_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 12,
            name: "marketplace_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 13,
            name: "globs",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 14,
            name: "scoped_to",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var AgentSkillMetadata$Runtime = (()=>class _AgentSkillMetadata extends Message {
        constructor(data){
            super();
            this.fullPath = "";
            this.description = "";
            this.environments = [];
            this.disabledEnvironments = [];
            this.disableModelInvocation = false;
            this.globs = [];
            this.scopedTo = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AgentSkillMetadata().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AgentSkillMetadata().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AgentSkillMetadata().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AgentSkillMetadata, a, b2);
        }
    })();
var AgentSkillMetadata = AgentSkillMetadata$Runtime;
AgentSkillMetadata.runtime = proto3;
AgentSkillMetadata.typeName = "agent.v1.AgentSkillMetadata";
AgentSkillMetadata.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "full_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "parse_error",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "environments",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "disabled_environments",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 6,
            name: "git_remote_origin",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "disable_model_invocation",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "plugin",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "marketplace",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "plugin_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "marketplace_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 12,
            name: "globs",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 13,
            name: "scoped_to",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
export { AgentSkill, AgentSkillMetadata };
