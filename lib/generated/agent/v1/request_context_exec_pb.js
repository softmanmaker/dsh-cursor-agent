import { Message, proto3 } from "@bufbuild/protobuf";
import { PackageType } from "./cursor_packages_pb.js";
import { CursorRule } from "./cursor_rules_pb.js";
import { RepositoryIndexingInfo } from "./repo_pb.js";
import { McpFileSystemOptions, McpInstructions, McpMetaToolOptions, McpToolDefinition } from "./mcp_pb.js";
import { LsDirectoryTreeNode } from "./ls_exec_pb.js";
import { CustomSubagent } from "./subagents_pb.js";
import { AgentSkill } from "./agent_skills_pb.js";
import { SystemPromptSpec } from "./system_prompt_pb.js";
var MountedAgentStoreKind;
(function(MountedAgentStoreKind2) {
    MountedAgentStoreKind2[MountedAgentStoreKind2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    MountedAgentStoreKind2[MountedAgentStoreKind2["SELF"] = 1] = "SELF";
    MountedAgentStoreKind2[MountedAgentStoreKind2["PEER"] = 2] = "PEER";
    MountedAgentStoreKind2[MountedAgentStoreKind2["SHARE"] = 3] = "SHARE";
    MountedAgentStoreKind2[MountedAgentStoreKind2["PRINCIPAL"] = 4] = "PRINCIPAL";
})(MountedAgentStoreKind || (MountedAgentStoreKind = {}));
proto3.util.setEnumType(MountedAgentStoreKind, "agent.v1.MountedAgentStoreKind", [
    {
        no: 0,
        name: "MOUNTED_AGENT_STORE_KIND_UNSPECIFIED"
    },
    {
        no: 1,
        name: "MOUNTED_AGENT_STORE_KIND_SELF"
    },
    {
        no: 2,
        name: "MOUNTED_AGENT_STORE_KIND_PEER"
    },
    {
        no: 3,
        name: "MOUNTED_AGENT_STORE_KIND_SHARE"
    },
    {
        no: 4,
        name: "MOUNTED_AGENT_STORE_KIND_PRINCIPAL"
    }
]);
var RequestContextArgs$Runtime = (()=>class _RequestContextArgs extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RequestContextArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RequestContextArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RequestContextArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RequestContextArgs, a, b2);
        }
    })();
var RequestContextArgs = RequestContextArgs$Runtime;
RequestContextArgs.runtime = proto3;
RequestContextArgs.typeName = "agent.v1.RequestContextArgs";
RequestContextArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 2,
            name: "notes_session_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "workspace_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "read_only_pinned_tree_sha",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "read_only_plugin_cache_root",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "use_cached",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
var RequestContextResult$Runtime = (()=>class _RequestContextResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RequestContextResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RequestContextResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RequestContextResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RequestContextResult, a, b2);
        }
    })();
var RequestContextResult = RequestContextResult$Runtime;
RequestContextResult.runtime = proto3;
RequestContextResult.typeName = "agent.v1.RequestContextResult";
RequestContextResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: RequestContextSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: RequestContextError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: RequestContextRejected,
            oneof: "result"
        }
    ]);
var RequestContextSuccess$Runtime = (()=>class _RequestContextSuccess extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RequestContextSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RequestContextSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RequestContextSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RequestContextSuccess, a, b2);
        }
    })();
var RequestContextSuccess = RequestContextSuccess$Runtime;
RequestContextSuccess.runtime = proto3;
RequestContextSuccess.typeName = "agent.v1.RequestContextSuccess";
RequestContextSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "request_context",
            kind: "message",
            T: RequestContext
        },
        {
            no: 2,
            name: "served_from_disk_cache",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
var RequestContextError$Runtime = (()=>class _RequestContextError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RequestContextError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RequestContextError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RequestContextError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RequestContextError, a, b2);
        }
    })();
var RequestContextError = RequestContextError$Runtime;
RequestContextError.runtime = proto3;
RequestContextError.typeName = "agent.v1.RequestContextError";
RequestContextError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var RequestContextRejected$Runtime = (()=>class _RequestContextRejected extends Message {
        constructor(data){
            super();
            this.reason = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RequestContextRejected().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RequestContextRejected().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RequestContextRejected().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RequestContextRejected, a, b2);
        }
    })();
var RequestContextRejected = RequestContextRejected$Runtime;
RequestContextRejected.runtime = proto3;
RequestContextRejected.typeName = "agent.v1.RequestContextRejected";
RequestContextRejected.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
var ImageProto$Runtime = (()=>class _ImageProto extends Message {
        constructor(data){
            super();
            this.data = new Uint8Array(0);
            this.uuid = "";
            this.path = "";
            this.mimeType = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ImageProto().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ImageProto().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ImageProto().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ImageProto, a, b2);
        }
    })();
var ImageProto = ImageProto$Runtime;
ImageProto.runtime = proto3;
ImageProto.typeName = "agent.v1.ImageProto";
ImageProto.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "dimension",
            kind: "message",
            T: ImageProto_Dimension
        },
        {
            no: 6,
            name: "task_specific_description",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "mime_type",
            kind: "scalar",
            T: 9
        }
    ]);
var ImageProto_Dimension$Runtime = (()=>class _ImageProto_Dimension extends Message {
        constructor(data){
            super();
            this.width = 0;
            this.height = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ImageProto_Dimension().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ImageProto_Dimension().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ImageProto_Dimension().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ImageProto_Dimension, a, b2);
        }
    })();
var ImageProto_Dimension = ImageProto_Dimension$Runtime;
ImageProto_Dimension.runtime = proto3;
ImageProto_Dimension.typeName = "agent.v1.ImageProto.Dimension";
ImageProto_Dimension.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "width",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "height",
            kind: "scalar",
            T: 5
        }
    ]);
var GitRepoInfo$Runtime = (()=>class _GitRepoInfo extends Message {
        constructor(data){
            super();
            this.path = "";
            this.status = "";
            this.branchName = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GitRepoInfo().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GitRepoInfo().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GitRepoInfo().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GitRepoInfo, a, b2);
        }
    })();
var GitRepoInfo = GitRepoInfo$Runtime;
GitRepoInfo.runtime = proto3;
GitRepoInfo.typeName = "agent.v1.GitRepoInfo";
GitRepoInfo.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "status",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "branch_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "remote_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "previous_branch_is_ancestor",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 6,
            name: "is_origin_backed",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
var RequestContextEnv$Runtime = (()=>class _RequestContextEnv extends Message {
        constructor(data){
            super();
            this.osVersion = "";
            this.workspacePaths = [];
            this.shell = "";
            this.sandboxEnabled = false;
            this.terminalsFolder = "";
            this.agentSharedNotesFolder = "";
            this.agentConversationNotesFolder = "";
            this.timeZone = "";
            this.projectFolder = "";
            this.agentTranscriptsFolder = "";
            this.sandboxNetworkExplicitAllowlist = [];
            this.mountedAgentStores = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RequestContextEnv().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RequestContextEnv().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RequestContextEnv().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RequestContextEnv, a, b2);
        }
    })();
var RequestContextEnv = RequestContextEnv$Runtime;
RequestContextEnv.runtime = proto3;
RequestContextEnv.typeName = "agent.v1.RequestContextEnv";
RequestContextEnv.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "os_version",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "workspace_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "shell",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "sandbox_enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "terminals_folder",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "agent_shared_notes_folder",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "agent_conversation_notes_folder",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "time_zone",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "project_folder",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "agent_transcripts_folder",
            kind: "scalar",
            T: 9
        },
        {
            no: 13,
            name: "artifacts_folder",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 14,
            name: "sandbox_supported",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 16,
            name: "sandbox_network_has_defaults",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 17,
            name: "sandbox_network_explicit_allowlist",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 18,
            name: "secret_redaction_enabled",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 19,
            name: "computer_use_supported",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 20,
            name: "is_working_dir_home_dir",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 21,
            name: "process_working_directory",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 22,
            name: "smart_mode_classifier_auto_mode_enabled",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 23,
            name: "dev_force_next_smart_mode_classifier_block_token",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 24,
            name: "dev_delay_next_smart_mode_classifier_token",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 25,
            name: "mounted_agent_stores",
            kind: "message",
            T: MountedAgentStore,
            repeated: true
        }
    ]);
var MountedAgentStore$Runtime = (()=>class _MountedAgentStore extends Message {
        constructor(data){
            super();
            this.path = "";
            this.kind = MountedAgentStoreKind.UNSPECIFIED;
            this.readOnly = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _MountedAgentStore().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _MountedAgentStore().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _MountedAgentStore().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_MountedAgentStore, a, b2);
        }
    })();
var MountedAgentStore = MountedAgentStore$Runtime;
MountedAgentStore.runtime = proto3;
MountedAgentStore.typeName = "agent.v1.MountedAgentStore";
MountedAgentStore.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "kind",
            kind: "enum",
            T: proto3.getEnumType(MountedAgentStoreKind)
        },
        {
            no: 3,
            name: "alias",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "read_only",
            kind: "scalar",
            T: 8
        }
    ]);
var UserGitContext$Runtime = (()=>class _UserGitContext extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UserGitContext().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UserGitContext().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UserGitContext().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UserGitContext, a, b2);
        }
    })();
var UserGitContext = UserGitContext$Runtime;
UserGitContext.runtime = proto3;
UserGitContext.typeName = "agent.v1.UserGitContext";
UserGitContext.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "username",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "email",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var DebugModeConfig$Runtime = (()=>class _DebugModeConfig extends Message {
        constructor(data){
            super();
            this.logPath = "";
            this.serverEndpoint = "";
            this.sessionId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _DebugModeConfig().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _DebugModeConfig().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _DebugModeConfig().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_DebugModeConfig, a, b2);
        }
    })();
var DebugModeConfig = DebugModeConfig$Runtime;
DebugModeConfig.runtime = proto3;
DebugModeConfig.typeName = "agent.v1.DebugModeConfig";
DebugModeConfig.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "log_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "server_endpoint",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "session_id",
            kind: "scalar",
            T: 9
        }
    ]);
var SkillDescriptor$Runtime = (()=>class _SkillDescriptor extends Message {
        constructor(data){
            super();
            this.name = "";
            this.description = "";
            this.folderPath = "";
            this.enabled = false;
            this.readmeFilePath = "";
            this.packageType = PackageType.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SkillDescriptor().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SkillDescriptor().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SkillDescriptor().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SkillDescriptor, a, b2);
        }
    })();
var SkillDescriptor = SkillDescriptor$Runtime;
SkillDescriptor.runtime = proto3;
SkillDescriptor.typeName = "agent.v1.SkillDescriptor";
SkillDescriptor.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
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
            name: "folder_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "parse_error",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "readme_file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "package_type",
            kind: "enum",
            T: proto3.getEnumType(PackageType)
        }
    ]);
var SkillOptions$Runtime = (()=>class _SkillOptions extends Message {
        constructor(data){
            super();
            this.skillDescriptors = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SkillOptions().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SkillOptions().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SkillOptions().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SkillOptions, a, b2);
        }
    })();
var SkillOptions = SkillOptions$Runtime;
SkillOptions.runtime = proto3;
SkillOptions.typeName = "agent.v1.SkillOptions";
SkillOptions.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "skill_descriptors",
            kind: "message",
            T: SkillDescriptor,
            repeated: true
        }
    ]);
var HooksConfigInfo$Runtime = (()=>class _HooksConfigInfo extends Message {
        constructor(data){
            super();
            this.configuredSteps = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _HooksConfigInfo().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _HooksConfigInfo().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _HooksConfigInfo().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_HooksConfigInfo, a, b2);
        }
    })();
var HooksConfigInfo = HooksConfigInfo$Runtime;
HooksConfigInfo.runtime = proto3;
HooksConfigInfo.typeName = "agent.v1.HooksConfigInfo";
HooksConfigInfo.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "configured_steps",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var PermissionsAutoRunInstructions$Runtime = (()=>class _PermissionsAutoRunInstructions extends Message {
        constructor(data){
            super();
            this.allowInstructions = [];
            this.blockInstructions = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PermissionsAutoRunInstructions().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PermissionsAutoRunInstructions().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PermissionsAutoRunInstructions().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PermissionsAutoRunInstructions, a, b2);
        }
    })();
var PermissionsAutoRunInstructions = PermissionsAutoRunInstructions$Runtime;
PermissionsAutoRunInstructions.runtime = proto3;
PermissionsAutoRunInstructions.typeName = "agent.v1.PermissionsAutoRunInstructions";
PermissionsAutoRunInstructions.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "allow_instructions",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "block_instructions",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var PrecomputedHumanChangeRenderedDiff$Runtime = (()=>class _PrecomputedHumanChangeRenderedDiff extends Message {
        constructor(data){
            super();
            this.startLineNumber = 0;
            this.endLineNumberExclusive = 0;
            this.beforeContextLines = [];
            this.removedLines = [];
            this.addedLines = [];
            this.afterContextLines = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PrecomputedHumanChangeRenderedDiff().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PrecomputedHumanChangeRenderedDiff().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PrecomputedHumanChangeRenderedDiff().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PrecomputedHumanChangeRenderedDiff, a, b2);
        }
    })();
var PrecomputedHumanChangeRenderedDiff = PrecomputedHumanChangeRenderedDiff$Runtime;
PrecomputedHumanChangeRenderedDiff.runtime = proto3;
PrecomputedHumanChangeRenderedDiff.typeName = "agent.v1.PrecomputedHumanChangeRenderedDiff";
PrecomputedHumanChangeRenderedDiff.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "end_line_number_exclusive",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "before_context_lines",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 4,
            name: "removed_lines",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "added_lines",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 6,
            name: "after_context_lines",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var PrecomputedHumanChange$Runtime = (()=>class _PrecomputedHumanChange extends Message {
        constructor(data){
            super();
            this.path = "";
            this.renderedDiffs = [];
            this.isNewFile = false;
            this.isDeletedFile = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PrecomputedHumanChange().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PrecomputedHumanChange().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PrecomputedHumanChange().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PrecomputedHumanChange, a, b2);
        }
    })();
var PrecomputedHumanChange = PrecomputedHumanChange$Runtime;
PrecomputedHumanChange.runtime = proto3;
PrecomputedHumanChange.typeName = "agent.v1.PrecomputedHumanChange";
PrecomputedHumanChange.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "rendered_diffs",
            kind: "message",
            T: PrecomputedHumanChangeRenderedDiff,
            repeated: true
        },
        {
            no: 3,
            name: "is_new_file",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "is_deleted_file",
            kind: "scalar",
            T: 8
        }
    ]);
var RequestContext$Runtime = (()=>class _RequestContext extends Message {
        constructor(data){
            super();
            this.rules = [];
            this.repositoryInfo = [];
            this.tools = [];
            this.gitRepos = [];
            this.projectLayouts = [];
            this.mcpInstructions = [];
            this.fileContents = {};
            this.customSubagents = [];
            this.agentSkills = [];
            this.precomputedHumanChanges = [];
            this.nonFileRules = [];
            this.disabledTeamRules = [];
            this.adminCommandDenylist = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RequestContext().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RequestContext().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RequestContext().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RequestContext, a, b2);
        }
    })();
var RequestContext = RequestContext$Runtime;
RequestContext.runtime = proto3;
RequestContext.typeName = "agent.v1.RequestContext";
RequestContext.fields = proto3.util.newFieldList(()=>[
        {
            no: 2,
            name: "rules",
            kind: "message",
            T: CursorRule,
            repeated: true
        },
        {
            no: 4,
            name: "env",
            kind: "message",
            T: RequestContextEnv
        },
        {
            no: 6,
            name: "repository_info",
            kind: "message",
            T: RepositoryIndexingInfo,
            repeated: true
        },
        {
            no: 7,
            name: "tools",
            kind: "message",
            T: McpToolDefinition,
            repeated: true
        },
        {
            no: 8,
            name: "conversation_notes_listing",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "shared_notes_listing",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "git_repos",
            kind: "message",
            T: GitRepoInfo,
            repeated: true
        },
        {
            no: 13,
            name: "project_layouts",
            kind: "message",
            T: LsDirectoryTreeNode,
            repeated: true
        },
        {
            no: 14,
            name: "mcp_instructions",
            kind: "message",
            T: McpInstructions,
            repeated: true
        },
        {
            no: 15,
            name: "debug_mode_config",
            kind: "message",
            T: DebugModeConfig,
            opt: true
        },
        {
            no: 16,
            name: "cloud_rule",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 17,
            name: "web_search_enabled",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 18,
            name: "skill_options",
            kind: "message",
            T: SkillOptions,
            opt: true
        },
        {
            no: 19,
            name: "repository_info_should_query_prod",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 20,
            name: "file_contents",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 21,
            name: "user_intent_summary",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 22,
            name: "custom_subagents",
            kind: "message",
            T: CustomSubagent,
            repeated: true
        },
        {
            no: 23,
            name: "mcp_file_system_options",
            kind: "message",
            T: McpFileSystemOptions,
            opt: true
        },
        {
            no: 24,
            name: "web_fetch_enabled",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 25,
            name: "hooks_additional_context",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 26,
            name: "commit_attribution_message",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 27,
            name: "pr_attribution_message",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 28,
            name: "hooks_config",
            kind: "message",
            T: HooksConfigInfo,
            opt: true
        },
        {
            no: 29,
            name: "agent_skills",
            kind: "message",
            T: AgentSkill,
            repeated: true
        },
        {
            no: 30,
            name: "precomputed_human_changes",
            kind: "message",
            T: PrecomputedHumanChange,
            repeated: true
        },
        {
            no: 31,
            name: "recently_added_plugin",
            kind: "message",
            T: RecentlyAddedPlugin,
            opt: true
        },
        {
            no: 32,
            name: "supports_mcp_auth",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 33,
            name: "git_repo_info_complete",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 34,
            name: "mcp_meta_tool_options",
            kind: "message",
            T: McpMetaToolOptions,
            opt: true
        },
        {
            no: 35,
            name: "read_lints_enabled",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 36,
            name: "mcp_info_complete",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 37,
            name: "non_file_rules",
            kind: "message",
            T: CursorRule,
            repeated: true
        },
        {
            no: 38,
            name: "matched_installed_plugin",
            kind: "message",
            T: MatchedInstalledPlugin,
            opt: true
        },
        {
            no: 39,
            name: "rules_info_complete",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 40,
            name: "env_info_complete",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 41,
            name: "repository_info_complete",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 42,
            name: "custom_subagents_info_complete",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 43,
            name: "agent_skills_info_complete",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 44,
            name: "mcp_file_system_info_complete",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 45,
            name: "git_status_info_complete",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 46,
            name: "user_permissions_auto_run",
            kind: "message",
            T: PermissionsAutoRunInstructions,
            opt: true
        },
        {
            no: 47,
            name: "project_permissions_auto_run",
            kind: "message",
            T: PermissionsAutoRunInstructions,
            opt: true
        },
        {
            no: 48,
            name: "admin_permissions_auto_run",
            kind: "message",
            T: PermissionsAutoRunInstructions,
            opt: true
        },
        {
            no: 49,
            name: "disabled_team_rules",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 50,
            name: "search_conversations_enabled",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 51,
            name: "send_message_enabled",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 52,
            name: "admin_command_denylist",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 53,
            name: "system_prompt_override",
            kind: "message",
            T: SystemPromptSpec,
            opt: true
        }
    ]);
var RequestContextRulesPart$Runtime = (()=>class _RequestContextRulesPart extends Message {
        constructor(data){
            super();
            this.rules = [];
            this.nonFileRules = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RequestContextRulesPart().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RequestContextRulesPart().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RequestContextRulesPart().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RequestContextRulesPart, a, b2);
        }
    })();
var RequestContextRulesPart = RequestContextRulesPart$Runtime;
RequestContextRulesPart.runtime = proto3;
RequestContextRulesPart.typeName = "agent.v1.RequestContextRulesPart";
RequestContextRulesPart.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "rules",
            kind: "message",
            T: CursorRule,
            repeated: true
        },
        {
            no: 2,
            name: "non_file_rules",
            kind: "message",
            T: CursorRule,
            repeated: true
        },
        {
            no: 3,
            name: "cloud_rule",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var RequestContextSkillsPart$Runtime = (()=>class _RequestContextSkillsPart extends Message {
        constructor(data){
            super();
            this.agentSkills = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RequestContextSkillsPart().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RequestContextSkillsPart().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RequestContextSkillsPart().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RequestContextSkillsPart, a, b2);
        }
    })();
var RequestContextSkillsPart = RequestContextSkillsPart$Runtime;
RequestContextSkillsPart.runtime = proto3;
RequestContextSkillsPart.typeName = "agent.v1.RequestContextSkillsPart";
RequestContextSkillsPart.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "agent_skills",
            kind: "message",
            T: AgentSkill,
            repeated: true
        },
        {
            no: 2,
            name: "skill_options",
            kind: "message",
            T: SkillOptions,
            opt: true
        }
    ]);
var RequestContextSubagentsPart$Runtime = (()=>class _RequestContextSubagentsPart extends Message {
        constructor(data){
            super();
            this.customSubagents = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RequestContextSubagentsPart().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RequestContextSubagentsPart().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RequestContextSubagentsPart().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RequestContextSubagentsPart, a, b2);
        }
    })();
var RequestContextSubagentsPart = RequestContextSubagentsPart$Runtime;
RequestContextSubagentsPart.runtime = proto3;
RequestContextSubagentsPart.typeName = "agent.v1.RequestContextSubagentsPart";
RequestContextSubagentsPart.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "custom_subagents",
            kind: "message",
            T: CustomSubagent,
            repeated: true
        }
    ]);
var RequestContextMcpsPart$Runtime = (()=>class _RequestContextMcpsPart extends Message {
        constructor(data){
            super();
            this.tools = [];
            this.mcpInstructions = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RequestContextMcpsPart().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RequestContextMcpsPart().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RequestContextMcpsPart().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RequestContextMcpsPart, a, b2);
        }
    })();
var RequestContextMcpsPart = RequestContextMcpsPart$Runtime;
RequestContextMcpsPart.runtime = proto3;
RequestContextMcpsPart.typeName = "agent.v1.RequestContextMcpsPart";
RequestContextMcpsPart.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "tools",
            kind: "message",
            T: McpToolDefinition,
            repeated: true
        },
        {
            no: 2,
            name: "mcp_instructions",
            kind: "message",
            T: McpInstructions,
            repeated: true
        },
        {
            no: 3,
            name: "mcp_file_system_options",
            kind: "message",
            T: McpFileSystemOptions,
            opt: true
        },
        {
            no: 4,
            name: "mcp_meta_tool_options",
            kind: "message",
            T: McpMetaToolOptions,
            opt: true
        }
    ]);
var RequestContextPartReferences$Runtime = (()=>class _RequestContextPartReferences extends Message {
        constructor(data){
            super();
            this.rulesBlobId = new Uint8Array(0);
            this.rulesByteLength = 0;
            this.skillsBlobId = new Uint8Array(0);
            this.skillsByteLength = 0;
            this.subagentsBlobId = new Uint8Array(0);
            this.subagentsByteLength = 0;
            this.mcpsBlobId = new Uint8Array(0);
            this.mcpsByteLength = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RequestContextPartReferences().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RequestContextPartReferences().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RequestContextPartReferences().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RequestContextPartReferences, a, b2);
        }
    })();
var RequestContextPartReferences = RequestContextPartReferences$Runtime;
RequestContextPartReferences.runtime = proto3;
RequestContextPartReferences.typeName = "agent.v1.RequestContextPartReferences";
RequestContextPartReferences.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "rules_blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "rules_byte_length",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "skills_blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 4,
            name: "skills_byte_length",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "subagents_blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 6,
            name: "subagents_byte_length",
            kind: "scalar",
            T: 13
        },
        {
            no: 7,
            name: "mcps_blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 8,
            name: "mcps_byte_length",
            kind: "scalar",
            T: 13
        },
        {
            no: 9,
            name: "dynamic_context",
            kind: "message",
            T: RequestContext
        }
    ]);
var RecentlyAddedPlugin$Runtime = (()=>class _RecentlyAddedPlugin extends Message {
        constructor(data){
            super();
            this.displayName = "";
            this.description = "";
            this.skills = [];
            this.subagents = [];
            this.hooks = [];
            this.rules = [];
            this.commands = [];
            this.mcpServers = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RecentlyAddedPlugin().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RecentlyAddedPlugin().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RecentlyAddedPlugin().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RecentlyAddedPlugin, a, b2);
        }
    })();
var RecentlyAddedPlugin = RecentlyAddedPlugin$Runtime;
RecentlyAddedPlugin.runtime = proto3;
RecentlyAddedPlugin.typeName = "agent.v1.RecentlyAddedPlugin";
RecentlyAddedPlugin.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "display_name",
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
            name: "skills",
            kind: "message",
            T: RecentlyAddedPlugin_CapabilityDescriptor,
            repeated: true
        },
        {
            no: 4,
            name: "subagents",
            kind: "message",
            T: RecentlyAddedPlugin_CapabilityDescriptor,
            repeated: true
        },
        {
            no: 5,
            name: "hooks",
            kind: "message",
            T: RecentlyAddedPlugin_CapabilityDescriptor,
            repeated: true
        },
        {
            no: 6,
            name: "rules",
            kind: "message",
            T: RecentlyAddedPlugin_CapabilityDescriptor,
            repeated: true
        },
        {
            no: 7,
            name: "commands",
            kind: "message",
            T: RecentlyAddedPlugin_CapabilityDescriptor,
            repeated: true
        },
        {
            no: 8,
            name: "mcp_servers",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var RecentlyAddedPlugin_CapabilityDescriptor$Runtime = (()=>class _RecentlyAddedPlugin_CapabilityDescriptor extends Message {
        constructor(data){
            super();
            this.name = "";
            this.description = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RecentlyAddedPlugin_CapabilityDescriptor().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RecentlyAddedPlugin_CapabilityDescriptor().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RecentlyAddedPlugin_CapabilityDescriptor().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RecentlyAddedPlugin_CapabilityDescriptor, a, b2);
        }
    })();
var RecentlyAddedPlugin_CapabilityDescriptor = RecentlyAddedPlugin_CapabilityDescriptor$Runtime;
RecentlyAddedPlugin_CapabilityDescriptor.runtime = proto3;
RecentlyAddedPlugin_CapabilityDescriptor.typeName = "agent.v1.RecentlyAddedPlugin.CapabilityDescriptor";
RecentlyAddedPlugin_CapabilityDescriptor.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "description",
            kind: "scalar",
            T: 9
        }
    ]);
var MatchedInstalledPlugin$Runtime = (()=>class _MatchedInstalledPlugin extends Message {
        constructor(data){
            super();
            this.displayName = "";
            this.description = "";
            this.matchedKeyword = "";
            this.skills = [];
            this.subagents = [];
            this.hooks = [];
            this.rules = [];
            this.commands = [];
            this.mcpServers = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _MatchedInstalledPlugin().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _MatchedInstalledPlugin().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _MatchedInstalledPlugin().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_MatchedInstalledPlugin, a, b2);
        }
    })();
var MatchedInstalledPlugin = MatchedInstalledPlugin$Runtime;
MatchedInstalledPlugin.runtime = proto3;
MatchedInstalledPlugin.typeName = "agent.v1.MatchedInstalledPlugin";
MatchedInstalledPlugin.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "display_name",
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
            name: "matched_keyword",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "skills",
            kind: "message",
            T: RecentlyAddedPlugin_CapabilityDescriptor,
            repeated: true
        },
        {
            no: 5,
            name: "subagents",
            kind: "message",
            T: RecentlyAddedPlugin_CapabilityDescriptor,
            repeated: true
        },
        {
            no: 6,
            name: "hooks",
            kind: "message",
            T: RecentlyAddedPlugin_CapabilityDescriptor,
            repeated: true
        },
        {
            no: 7,
            name: "rules",
            kind: "message",
            T: RecentlyAddedPlugin_CapabilityDescriptor,
            repeated: true
        },
        {
            no: 8,
            name: "commands",
            kind: "message",
            T: RecentlyAddedPlugin_CapabilityDescriptor,
            repeated: true
        },
        {
            no: 9,
            name: "mcp_servers",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
export { DebugModeConfig, GitRepoInfo, HooksConfigInfo, ImageProto, ImageProto_Dimension, MatchedInstalledPlugin, MountedAgentStore, MountedAgentStoreKind, PermissionsAutoRunInstructions, PrecomputedHumanChange, PrecomputedHumanChangeRenderedDiff, RecentlyAddedPlugin, RecentlyAddedPlugin_CapabilityDescriptor, RequestContext, RequestContextArgs, RequestContextEnv, RequestContextError, RequestContextMcpsPart, RequestContextPartReferences, RequestContextRejected, RequestContextResult, RequestContextRulesPart, RequestContextSkillsPart, RequestContextSubagentsPart, RequestContextSuccess, SkillDescriptor, SkillOptions, UserGitContext };
