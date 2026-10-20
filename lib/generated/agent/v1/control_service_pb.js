import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { GetDiffRequest, GetDiffResponse } from "../../aiserver/v1/utils_pb.js";
var EntryType;
var BatchGetDiffErrorKind;
var ArtifactUploadStatus;
var ArtifactPathErrorKind;
var ArtifactRootKind;
var ArtifactUploadDispatchStatus;
var PersistArtifactToAgentStoreStatus;
var ArtifactRestoreStatus;
(function(EntryType3) {
    EntryType3[EntryType3["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    EntryType3[EntryType3["FILE"] = 1] = "FILE";
    EntryType3[EntryType3["DIRECTORY"] = 2] = "DIRECTORY";
    EntryType3[EntryType3["SYMLINK"] = 3] = "SYMLINK";
})(EntryType || (EntryType = {}));
proto3.util.setEnumType(EntryType, "agent.v1.EntryType", [
    {
        no: 0,
        name: "ENTRY_TYPE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "ENTRY_TYPE_FILE"
    },
    {
        no: 2,
        name: "ENTRY_TYPE_DIRECTORY"
    },
    {
        no: 3,
        name: "ENTRY_TYPE_SYMLINK"
    }
]);
(function(BatchGetDiffErrorKind2) {
    BatchGetDiffErrorKind2[BatchGetDiffErrorKind2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    BatchGetDiffErrorKind2[BatchGetDiffErrorKind2["FETCH_FAILED"] = 1] = "FETCH_FAILED";
    BatchGetDiffErrorKind2[BatchGetDiffErrorKind2["DIFF_FAILED"] = 2] = "DIFF_FAILED";
    BatchGetDiffErrorKind2[BatchGetDiffErrorKind2["UNAUTHENTICATED"] = 3] = "UNAUTHENTICATED";
    BatchGetDiffErrorKind2[BatchGetDiffErrorKind2["NOT_FOUND"] = 4] = "NOT_FOUND";
    BatchGetDiffErrorKind2[BatchGetDiffErrorKind2["INTERNAL"] = 5] = "INTERNAL";
})(BatchGetDiffErrorKind || (BatchGetDiffErrorKind = {}));
proto3.util.setEnumType(BatchGetDiffErrorKind, "agent.v1.BatchGetDiffErrorKind", [
    {
        no: 0,
        name: "BATCH_GET_DIFF_ERROR_KIND_UNSPECIFIED"
    },
    {
        no: 1,
        name: "BATCH_GET_DIFF_ERROR_KIND_FETCH_FAILED"
    },
    {
        no: 2,
        name: "BATCH_GET_DIFF_ERROR_KIND_DIFF_FAILED"
    },
    {
        no: 3,
        name: "BATCH_GET_DIFF_ERROR_KIND_UNAUTHENTICATED"
    },
    {
        no: 4,
        name: "BATCH_GET_DIFF_ERROR_KIND_NOT_FOUND"
    },
    {
        no: 5,
        name: "BATCH_GET_DIFF_ERROR_KIND_INTERNAL"
    }
]);
(function(ArtifactUploadStatus2) {
    ArtifactUploadStatus2[ArtifactUploadStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    ArtifactUploadStatus2[ArtifactUploadStatus2["NOT_STARTED"] = 1] = "NOT_STARTED";
    ArtifactUploadStatus2[ArtifactUploadStatus2["IN_PROGRESS"] = 2] = "IN_PROGRESS";
    ArtifactUploadStatus2[ArtifactUploadStatus2["COMPLETED"] = 3] = "COMPLETED";
    ArtifactUploadStatus2[ArtifactUploadStatus2["FAILED"] = 4] = "FAILED";
})(ArtifactUploadStatus || (ArtifactUploadStatus = {}));
proto3.util.setEnumType(ArtifactUploadStatus, "agent.v1.ArtifactUploadStatus", [
    {
        no: 0,
        name: "ARTIFACT_UPLOAD_STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "ARTIFACT_UPLOAD_STATUS_NOT_STARTED"
    },
    {
        no: 2,
        name: "ARTIFACT_UPLOAD_STATUS_IN_PROGRESS"
    },
    {
        no: 3,
        name: "ARTIFACT_UPLOAD_STATUS_COMPLETED"
    },
    {
        no: 4,
        name: "ARTIFACT_UPLOAD_STATUS_FAILED"
    }
]);
(function(ArtifactPathErrorKind2) {
    ArtifactPathErrorKind2[ArtifactPathErrorKind2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    ArtifactPathErrorKind2[ArtifactPathErrorKind2["MISSING"] = 1] = "MISSING";
    ArtifactPathErrorKind2[ArtifactPathErrorKind2["PERMISSION"] = 2] = "PERMISSION";
    ArtifactPathErrorKind2[ArtifactPathErrorKind2["NOT_A_FILE"] = 3] = "NOT_A_FILE";
    ArtifactPathErrorKind2[ArtifactPathErrorKind2["INVALID_PATH"] = 4] = "INVALID_PATH";
    ArtifactPathErrorKind2[ArtifactPathErrorKind2["UNKNOWN"] = 5] = "UNKNOWN";
})(ArtifactPathErrorKind || (ArtifactPathErrorKind = {}));
proto3.util.setEnumType(ArtifactPathErrorKind, "agent.v1.ArtifactPathErrorKind", [
    {
        no: 0,
        name: "ARTIFACT_PATH_ERROR_KIND_UNSPECIFIED"
    },
    {
        no: 1,
        name: "ARTIFACT_PATH_ERROR_KIND_MISSING"
    },
    {
        no: 2,
        name: "ARTIFACT_PATH_ERROR_KIND_PERMISSION"
    },
    {
        no: 3,
        name: "ARTIFACT_PATH_ERROR_KIND_NOT_A_FILE"
    },
    {
        no: 4,
        name: "ARTIFACT_PATH_ERROR_KIND_INVALID_PATH"
    },
    {
        no: 5,
        name: "ARTIFACT_PATH_ERROR_KIND_UNKNOWN"
    }
]);
(function(ArtifactRootKind2) {
    ArtifactRootKind2[ArtifactRootKind2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    ArtifactRootKind2[ArtifactRootKind2["LOCAL"] = 1] = "LOCAL";
    ArtifactRootKind2[ArtifactRootKind2["AGENT_STORE_BACKED"] = 2] = "AGENT_STORE_BACKED";
})(ArtifactRootKind || (ArtifactRootKind = {}));
proto3.util.setEnumType(ArtifactRootKind, "agent.v1.ArtifactRootKind", [
    {
        no: 0,
        name: "ARTIFACT_ROOT_KIND_UNSPECIFIED"
    },
    {
        no: 1,
        name: "ARTIFACT_ROOT_KIND_LOCAL"
    },
    {
        no: 2,
        name: "ARTIFACT_ROOT_KIND_AGENT_STORE_BACKED"
    }
]);
(function(ArtifactUploadDispatchStatus2) {
    ArtifactUploadDispatchStatus2[ArtifactUploadDispatchStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    ArtifactUploadDispatchStatus2[ArtifactUploadDispatchStatus2["ACCEPTED"] = 1] = "ACCEPTED";
    ArtifactUploadDispatchStatus2[ArtifactUploadDispatchStatus2["REJECTED"] = 2] = "REJECTED";
    ArtifactUploadDispatchStatus2[ArtifactUploadDispatchStatus2["SKIPPED_ALREADY_IN_PROGRESS"] = 3] = "SKIPPED_ALREADY_IN_PROGRESS";
})(ArtifactUploadDispatchStatus || (ArtifactUploadDispatchStatus = {}));
proto3.util.setEnumType(ArtifactUploadDispatchStatus, "agent.v1.ArtifactUploadDispatchStatus", [
    {
        no: 0,
        name: "ARTIFACT_UPLOAD_DISPATCH_STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "ARTIFACT_UPLOAD_DISPATCH_STATUS_ACCEPTED"
    },
    {
        no: 2,
        name: "ARTIFACT_UPLOAD_DISPATCH_STATUS_REJECTED"
    },
    {
        no: 3,
        name: "ARTIFACT_UPLOAD_DISPATCH_STATUS_SKIPPED_ALREADY_IN_PROGRESS"
    }
]);
(function(PersistArtifactToAgentStoreStatus2) {
    PersistArtifactToAgentStoreStatus2[PersistArtifactToAgentStoreStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    PersistArtifactToAgentStoreStatus2[PersistArtifactToAgentStoreStatus2["PERSISTED"] = 1] = "PERSISTED";
    PersistArtifactToAgentStoreStatus2[PersistArtifactToAgentStoreStatus2["REJECTED"] = 2] = "REJECTED";
})(PersistArtifactToAgentStoreStatus || (PersistArtifactToAgentStoreStatus = {}));
proto3.util.setEnumType(PersistArtifactToAgentStoreStatus, "agent.v1.PersistArtifactToAgentStoreStatus", [
    {
        no: 0,
        name: "PERSIST_ARTIFACT_TO_AGENT_STORE_STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "PERSIST_ARTIFACT_TO_AGENT_STORE_STATUS_PERSISTED"
    },
    {
        no: 2,
        name: "PERSIST_ARTIFACT_TO_AGENT_STORE_STATUS_REJECTED"
    }
]);
(function(ArtifactRestoreStatus2) {
    ArtifactRestoreStatus2[ArtifactRestoreStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    ArtifactRestoreStatus2[ArtifactRestoreStatus2["RESTORED"] = 1] = "RESTORED";
    ArtifactRestoreStatus2[ArtifactRestoreStatus2["SKIPPED_ALREADY_EXISTS"] = 2] = "SKIPPED_ALREADY_EXISTS";
    ArtifactRestoreStatus2[ArtifactRestoreStatus2["REJECTED"] = 3] = "REJECTED";
})(ArtifactRestoreStatus || (ArtifactRestoreStatus = {}));
proto3.util.setEnumType(ArtifactRestoreStatus, "agent.v1.ArtifactRestoreStatus", [
    {
        no: 0,
        name: "ARTIFACT_RESTORE_STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "ARTIFACT_RESTORE_STATUS_RESTORED"
    },
    {
        no: 2,
        name: "ARTIFACT_RESTORE_STATUS_SKIPPED_ALREADY_EXISTS"
    },
    {
        no: 3,
        name: "ARTIFACT_RESTORE_STATUS_REJECTED"
    }
]);
var PingRequest$Runtime = (()=>class _PingRequest extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PingRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PingRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PingRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PingRequest, a, b2);
        }
    })();
var PingRequest = PingRequest$Runtime;
PingRequest.runtime = proto3;
PingRequest.typeName = "agent.v1.PingRequest";
PingRequest.fields = proto3.util.newFieldList(()=>[]);
var PingResponse$Runtime = (()=>class _PingResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PingResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PingResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PingResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PingResponse, a, b2);
        }
    })();
var PingResponse = PingResponse$Runtime;
PingResponse.runtime = proto3;
PingResponse.typeName = "agent.v1.PingResponse";
PingResponse.fields = proto3.util.newFieldList(()=>[]);
var GetCapabilitiesRequest$Runtime = (()=>class _GetCapabilitiesRequest extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _GetCapabilitiesRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _GetCapabilitiesRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _GetCapabilitiesRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetCapabilitiesRequest, a, b2);
        }
    })();
var GetCapabilitiesRequest = GetCapabilitiesRequest$Runtime;
GetCapabilitiesRequest.runtime = proto3;
GetCapabilitiesRequest.typeName = "agent.v1.GetCapabilitiesRequest";
GetCapabilitiesRequest.fields = proto3.util.newFieldList(()=>[]);
var GetCapabilitiesResponse$Runtime = (()=>class _GetCapabilitiesResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _GetCapabilitiesResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _GetCapabilitiesResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _GetCapabilitiesResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetCapabilitiesResponse, a, b2);
        }
    })();
var GetCapabilitiesResponse = GetCapabilitiesResponse$Runtime;
GetCapabilitiesResponse.runtime = proto3;
GetCapabilitiesResponse.typeName = "agent.v1.GetCapabilitiesResponse";
GetCapabilitiesResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "computer_use_supported",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 2,
            name: "install_plugin_artifact_supported",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
var ReloadAgentSkillsRequest$Runtime = (()=>class _ReloadAgentSkillsRequest extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ReloadAgentSkillsRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ReloadAgentSkillsRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ReloadAgentSkillsRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReloadAgentSkillsRequest, a, b2);
        }
    })();
var ReloadAgentSkillsRequest = ReloadAgentSkillsRequest$Runtime;
ReloadAgentSkillsRequest.runtime = proto3;
ReloadAgentSkillsRequest.typeName = "agent.v1.ReloadAgentSkillsRequest";
ReloadAgentSkillsRequest.fields = proto3.util.newFieldList(()=>[]);
var ReloadAgentSkillsResponse$Runtime = (()=>class _ReloadAgentSkillsResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ReloadAgentSkillsResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ReloadAgentSkillsResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ReloadAgentSkillsResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReloadAgentSkillsResponse, a, b2);
        }
    })();
var ReloadAgentSkillsResponse = ReloadAgentSkillsResponse$Runtime;
ReloadAgentSkillsResponse.runtime = proto3;
ReloadAgentSkillsResponse.typeName = "agent.v1.ReloadAgentSkillsResponse";
ReloadAgentSkillsResponse.fields = proto3.util.newFieldList(()=>[]);
var ReloadPluginsRequest$Runtime = (()=>class _ReloadPluginsRequest extends Message {
        constructor(data){
            super();
            this.reloadTargets = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ReloadPluginsRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ReloadPluginsRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ReloadPluginsRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReloadPluginsRequest, a, b2);
        }
    })();
var ReloadPluginsRequest = ReloadPluginsRequest$Runtime;
ReloadPluginsRequest.runtime = proto3;
ReloadPluginsRequest.typeName = "agent.v1.ReloadPluginsRequest";
ReloadPluginsRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "reload_targets",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var ReloadPluginsResponse$Runtime = (()=>class _ReloadPluginsResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ReloadPluginsResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ReloadPluginsResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ReloadPluginsResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReloadPluginsResponse, a, b2);
        }
    })();
var ReloadPluginsResponse = ReloadPluginsResponse$Runtime;
ReloadPluginsResponse.runtime = proto3;
ReloadPluginsResponse.typeName = "agent.v1.ReloadPluginsResponse";
ReloadPluginsResponse.fields = proto3.util.newFieldList(()=>[]);
var ExecRequest$Runtime = (()=>class _ExecRequest extends Message {
        constructor(data){
            super();
            this.command = "";
            this.args = [];
            this.environment = {};
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ExecRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ExecRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ExecRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ExecRequest, a, b2);
        }
    })();
var ExecRequest = ExecRequest$Runtime;
ExecRequest.runtime = proto3;
ExecRequest.typeName = "agent.v1.ExecRequest";
ExecRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "cwd",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "args",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 4,
            name: "environment",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ]);
var ExecResponse$Runtime = (()=>class _ExecResponse extends Message {
        constructor(data){
            super();
            this.event = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ExecResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ExecResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ExecResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ExecResponse, a, b2);
        }
    })();
var ExecResponse = ExecResponse$Runtime;
ExecResponse.runtime = proto3;
ExecResponse.typeName = "agent.v1.ExecResponse";
ExecResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "stdout_event",
            kind: "message",
            T: StdoutEvent,
            oneof: "event"
        },
        {
            no: 2,
            name: "stderr_event",
            kind: "message",
            T: StderrEvent,
            oneof: "event"
        },
        {
            no: 3,
            name: "exit_event",
            kind: "message",
            T: ExitEvent,
            oneof: "event"
        }
    ]);
var StdoutEvent$Runtime = (()=>class _StdoutEvent extends Message {
        constructor(data){
            super();
            this.data = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _StdoutEvent().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _StdoutEvent().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _StdoutEvent().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_StdoutEvent, a, b2);
        }
    })();
var StdoutEvent = StdoutEvent$Runtime;
StdoutEvent.runtime = proto3;
StdoutEvent.typeName = "agent.v1.StdoutEvent";
StdoutEvent.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 9
        }
    ]);
var StderrEvent$Runtime = (()=>class _StderrEvent extends Message {
        constructor(data){
            super();
            this.data = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _StderrEvent().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _StderrEvent().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _StderrEvent().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_StderrEvent, a, b2);
        }
    })();
var StderrEvent = StderrEvent$Runtime;
StderrEvent.runtime = proto3;
StderrEvent.typeName = "agent.v1.StderrEvent";
StderrEvent.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 9
        }
    ]);
var ExitEvent$Runtime = (()=>class _ExitEvent extends Message {
        constructor(data){
            super();
            this.exitCode = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ExitEvent().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ExitEvent().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ExitEvent().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ExitEvent, a, b2);
        }
    })();
var ExitEvent = ExitEvent$Runtime;
ExitEvent.runtime = proto3;
ExitEvent.typeName = "agent.v1.ExitEvent";
ExitEvent.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "exit_code",
            kind: "scalar",
            T: 5
        }
    ]);
var ListDirectoryRequest$Runtime = (()=>class _ListDirectoryRequest extends Message {
        constructor(data){
            super();
            this.path = "";
            this.includeHidden = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ListDirectoryRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ListDirectoryRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ListDirectoryRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ListDirectoryRequest, a, b2);
        }
    })();
var ListDirectoryRequest = ListDirectoryRequest$Runtime;
ListDirectoryRequest.runtime = proto3;
ListDirectoryRequest.typeName = "agent.v1.ListDirectoryRequest";
ListDirectoryRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "include_hidden",
            kind: "scalar",
            T: 8
        }
    ]);
var ListDirectoryResponse$Runtime = (()=>class _ListDirectoryResponse extends Message {
        constructor(data){
            super();
            this.entries = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ListDirectoryResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ListDirectoryResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ListDirectoryResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ListDirectoryResponse, a, b2);
        }
    })();
var ListDirectoryResponse = ListDirectoryResponse$Runtime;
ListDirectoryResponse.runtime = proto3;
ListDirectoryResponse.typeName = "agent.v1.ListDirectoryResponse";
ListDirectoryResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "entries",
            kind: "message",
            T: DirectoryEntry,
            repeated: true
        }
    ]);
var DirectoryEntry$Runtime = (()=>class _DirectoryEntry extends Message {
        constructor(data){
            super();
            this.name = "";
            this.path = "";
            this.type = EntryType.UNSPECIFIED;
            this.sizeBytes = protoInt64.zero;
            this.modifiedAtUnixMs = protoInt64.zero;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _DirectoryEntry().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _DirectoryEntry().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _DirectoryEntry().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_DirectoryEntry, a, b2);
        }
    })();
var DirectoryEntry = DirectoryEntry$Runtime;
DirectoryEntry.runtime = proto3;
DirectoryEntry.typeName = "agent.v1.DirectoryEntry";
DirectoryEntry.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "type",
            kind: "enum",
            T: proto3.getEnumType(EntryType)
        },
        {
            no: 4,
            name: "size_bytes",
            kind: "scalar",
            T: 4
        },
        {
            no: 5,
            name: "modified_at_unix_ms",
            kind: "scalar",
            T: 3
        }
    ]);
var ReadTextFileRequest$Runtime = (()=>class _ReadTextFileRequest extends Message {
        constructor(data){
            super();
            this.path = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ReadTextFileRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ReadTextFileRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ReadTextFileRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadTextFileRequest, a, b2);
        }
    })();
var ReadTextFileRequest = ReadTextFileRequest$Runtime;
ReadTextFileRequest.runtime = proto3;
ReadTextFileRequest.typeName = "agent.v1.ReadTextFileRequest";
ReadTextFileRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]);
var ReadTextFileResponse$Runtime = (()=>class _ReadTextFileResponse extends Message {
        constructor(data){
            super();
            this.content = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ReadTextFileResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ReadTextFileResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ReadTextFileResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadTextFileResponse, a, b2);
        }
    })();
var ReadTextFileResponse = ReadTextFileResponse$Runtime;
ReadTextFileResponse.runtime = proto3;
ReadTextFileResponse.typeName = "agent.v1.ReadTextFileResponse";
ReadTextFileResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]);
var WriteTextFileRequest$Runtime = (()=>class _WriteTextFileRequest extends Message {
        constructor(data){
            super();
            this.path = "";
            this.content = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _WriteTextFileRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _WriteTextFileRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _WriteTextFileRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WriteTextFileRequest, a, b2);
        }
    })();
var WriteTextFileRequest = WriteTextFileRequest$Runtime;
WriteTextFileRequest.runtime = proto3;
WriteTextFileRequest.typeName = "agent.v1.WriteTextFileRequest";
WriteTextFileRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
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
var WriteTextFileResponse$Runtime = (()=>class _WriteTextFileResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _WriteTextFileResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _WriteTextFileResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _WriteTextFileResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WriteTextFileResponse, a, b2);
        }
    })();
var WriteTextFileResponse = WriteTextFileResponse$Runtime;
WriteTextFileResponse.runtime = proto3;
WriteTextFileResponse.typeName = "agent.v1.WriteTextFileResponse";
WriteTextFileResponse.fields = proto3.util.newFieldList(()=>[]);
var ReadBinaryFileRequest$Runtime = (()=>class _ReadBinaryFileRequest extends Message {
        constructor(data){
            super();
            this.path = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ReadBinaryFileRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ReadBinaryFileRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ReadBinaryFileRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadBinaryFileRequest, a, b2);
        }
    })();
var ReadBinaryFileRequest = ReadBinaryFileRequest$Runtime;
ReadBinaryFileRequest.runtime = proto3;
ReadBinaryFileRequest.typeName = "agent.v1.ReadBinaryFileRequest";
ReadBinaryFileRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]);
var ReadBinaryFileResponse$Runtime = (()=>class _ReadBinaryFileResponse extends Message {
        constructor(data){
            super();
            this.content = new Uint8Array(0);
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ReadBinaryFileResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ReadBinaryFileResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ReadBinaryFileResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadBinaryFileResponse, a, b2);
        }
    })();
var ReadBinaryFileResponse = ReadBinaryFileResponse$Runtime;
ReadBinaryFileResponse.runtime = proto3;
ReadBinaryFileResponse.typeName = "agent.v1.ReadBinaryFileResponse";
ReadBinaryFileResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 12
        }
    ]);
var ExportFileRequest$Runtime = (()=>class _ExportFileRequest extends Message {
        constructor(data){
            super();
            this.path = "";
            this.workspaceRootPath = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ExportFileRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ExportFileRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ExportFileRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ExportFileRequest, a, b2);
        }
    })();
var ExportFileRequest = ExportFileRequest$Runtime;
ExportFileRequest.runtime = proto3;
ExportFileRequest.typeName = "agent.v1.ExportFileRequest";
ExportFileRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "workspace_root_path",
            kind: "scalar",
            T: 9
        }
    ]);
var ExportFileMetadata$Runtime = (()=>class _ExportFileMetadata extends Message {
        constructor(data){
            super();
            this.totalBytes = protoInt64.zero;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ExportFileMetadata().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ExportFileMetadata().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ExportFileMetadata().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ExportFileMetadata, a, b2);
        }
    })();
var ExportFileMetadata = ExportFileMetadata$Runtime;
ExportFileMetadata.runtime = proto3;
ExportFileMetadata.typeName = "agent.v1.ExportFileMetadata";
ExportFileMetadata.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "total_bytes",
            kind: "scalar",
            T: 4
        }
    ]);
var ExportFileResponse$Runtime = (()=>class _ExportFileResponse extends Message {
        constructor(data){
            super();
            this.payload = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ExportFileResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ExportFileResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ExportFileResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ExportFileResponse, a, b2);
        }
    })();
var ExportFileResponse = ExportFileResponse$Runtime;
ExportFileResponse.runtime = proto3;
ExportFileResponse.typeName = "agent.v1.ExportFileResponse";
ExportFileResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "content_chunk",
            kind: "scalar",
            T: 12,
            oneof: "payload"
        },
        {
            no: 2,
            name: "metadata",
            kind: "message",
            T: ExportFileMetadata,
            oneof: "payload"
        }
    ]);
var WriteBinaryFileRequest$Runtime = (()=>class _WriteBinaryFileRequest extends Message {
        constructor(data){
            super();
            this.path = "";
            this.content = new Uint8Array(0);
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _WriteBinaryFileRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _WriteBinaryFileRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _WriteBinaryFileRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WriteBinaryFileRequest, a, b2);
        }
    })();
var WriteBinaryFileRequest = WriteBinaryFileRequest$Runtime;
WriteBinaryFileRequest.runtime = proto3;
WriteBinaryFileRequest.typeName = "agent.v1.WriteBinaryFileRequest";
WriteBinaryFileRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 12
        }
    ]);
var WriteBinaryFileResponse$Runtime = (()=>class _WriteBinaryFileResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _WriteBinaryFileResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _WriteBinaryFileResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _WriteBinaryFileResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WriteBinaryFileResponse, a, b2);
        }
    })();
var WriteBinaryFileResponse = WriteBinaryFileResponse$Runtime;
WriteBinaryFileResponse.runtime = proto3;
WriteBinaryFileResponse.typeName = "agent.v1.WriteBinaryFileResponse";
WriteBinaryFileResponse.fields = proto3.util.newFieldList(()=>[]);
var GetWorkspaceChangesHashRequest$Runtime = (()=>class _GetWorkspaceChangesHashRequest extends Message {
        constructor(data){
            super();
            this.rootPath = "";
            this.baseRef = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _GetWorkspaceChangesHashRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _GetWorkspaceChangesHashRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _GetWorkspaceChangesHashRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetWorkspaceChangesHashRequest, a, b2);
        }
    })();
var GetWorkspaceChangesHashRequest = GetWorkspaceChangesHashRequest$Runtime;
GetWorkspaceChangesHashRequest.runtime = proto3;
GetWorkspaceChangesHashRequest.typeName = "agent.v1.GetWorkspaceChangesHashRequest";
GetWorkspaceChangesHashRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "root_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "base_ref",
            kind: "scalar",
            T: 9
        }
    ]);
var GetWorkspaceChangesHashResponse$Runtime = (()=>class _GetWorkspaceChangesHashResponse extends Message {
        constructor(data){
            super();
            this.hash = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _GetWorkspaceChangesHashResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _GetWorkspaceChangesHashResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _GetWorkspaceChangesHashResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetWorkspaceChangesHashResponse, a, b2);
        }
    })();
var GetWorkspaceChangesHashResponse = GetWorkspaceChangesHashResponse$Runtime;
GetWorkspaceChangesHashResponse.runtime = proto3;
GetWorkspaceChangesHashResponse.typeName = "agent.v1.GetWorkspaceChangesHashResponse";
GetWorkspaceChangesHashResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "hash",
            kind: "scalar",
            T: 9
        }
    ]);
var BatchGetDiffRequest$Runtime = (()=>class _BatchGetDiffRequest extends Message {
        constructor(data){
            super();
            this.items = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _BatchGetDiffRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _BatchGetDiffRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _BatchGetDiffRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_BatchGetDiffRequest, a, b2);
        }
    })();
var BatchGetDiffRequest = BatchGetDiffRequest$Runtime;
BatchGetDiffRequest.runtime = proto3;
BatchGetDiffRequest.typeName = "agent.v1.BatchGetDiffRequest";
BatchGetDiffRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "items",
            kind: "message",
            T: BatchGetDiffItem,
            repeated: true
        }
    ]);
var BatchGetDiffItem$Runtime = (()=>class _BatchGetDiffItem extends Message {
        constructor(data){
            super();
            this.fetchBranches = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _BatchGetDiffItem().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _BatchGetDiffItem().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _BatchGetDiffItem().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_BatchGetDiffItem, a, b2);
        }
    })();
var BatchGetDiffItem = BatchGetDiffItem$Runtime;
BatchGetDiffItem.runtime = proto3;
BatchGetDiffItem.typeName = "agent.v1.BatchGetDiffItem";
BatchGetDiffItem.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "diff_request",
            kind: "message",
            T: GetDiffRequest
        },
        {
            no: 2,
            name: "fetch_branches",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var BatchGetDiffResponse$Runtime = (()=>class _BatchGetDiffResponse extends Message {
        constructor(data){
            super();
            this.results = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _BatchGetDiffResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _BatchGetDiffResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _BatchGetDiffResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_BatchGetDiffResponse, a, b2);
        }
    })();
var BatchGetDiffResponse = BatchGetDiffResponse$Runtime;
BatchGetDiffResponse.runtime = proto3;
BatchGetDiffResponse.typeName = "agent.v1.BatchGetDiffResponse";
BatchGetDiffResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: BatchGetDiffResult,
            repeated: true
        }
    ]);
var BatchGetDiffResult$Runtime = (()=>class _BatchGetDiffResult extends Message {
        constructor(data){
            super();
            this.itemIndex = 0;
            this.fetchedBranches = [];
            this.failedBranches = [];
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _BatchGetDiffResult().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _BatchGetDiffResult().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _BatchGetDiffResult().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_BatchGetDiffResult, a, b2);
        }
    })();
var BatchGetDiffResult = BatchGetDiffResult$Runtime;
BatchGetDiffResult.runtime = proto3;
BatchGetDiffResult.typeName = "agent.v1.BatchGetDiffResult";
BatchGetDiffResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "item_index",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "fetched_branches",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "failed_branches",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "diff",
            kind: "message",
            T: GetDiffResponse,
            oneof: "result"
        },
        {
            no: 3,
            name: "error",
            kind: "message",
            T: BatchGetDiffError,
            oneof: "result"
        }
    ]);
var BatchGetDiffError$Runtime = (()=>class _BatchGetDiffError extends Message {
        constructor(data){
            super();
            this.kind = BatchGetDiffErrorKind.UNSPECIFIED;
            this.message = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _BatchGetDiffError().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _BatchGetDiffError().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _BatchGetDiffError().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_BatchGetDiffError, a, b2);
        }
    })();
var BatchGetDiffError = BatchGetDiffError$Runtime;
BatchGetDiffError.runtime = proto3;
BatchGetDiffError.typeName = "agent.v1.BatchGetDiffError";
BatchGetDiffError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "kind",
            kind: "enum",
            T: proto3.getEnumType(BatchGetDiffErrorKind)
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);
var RefreshGithubAccessTokenRequest$Runtime = (()=>class _RefreshGithubAccessTokenRequest extends Message {
        constructor(data){
            super();
            this.githubAccessToken = "";
            this.hostname = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _RefreshGithubAccessTokenRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _RefreshGithubAccessTokenRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _RefreshGithubAccessTokenRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RefreshGithubAccessTokenRequest, a, b2);
        }
    })();
var RefreshGithubAccessTokenRequest = RefreshGithubAccessTokenRequest$Runtime;
RefreshGithubAccessTokenRequest.runtime = proto3;
RefreshGithubAccessTokenRequest.typeName = "agent.v1.RefreshGithubAccessTokenRequest";
RefreshGithubAccessTokenRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "github_access_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "hostname",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "clone_username",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var RefreshGithubAccessTokenResponse$Runtime = (()=>class _RefreshGithubAccessTokenResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _RefreshGithubAccessTokenResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _RefreshGithubAccessTokenResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _RefreshGithubAccessTokenResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RefreshGithubAccessTokenResponse, a, b2);
        }
    })();
var RefreshGithubAccessTokenResponse = RefreshGithubAccessTokenResponse$Runtime;
RefreshGithubAccessTokenResponse.runtime = proto3;
RefreshGithubAccessTokenResponse.typeName = "agent.v1.RefreshGithubAccessTokenResponse";
RefreshGithubAccessTokenResponse.fields = proto3.util.newFieldList(()=>[]);
var WarmRemoteAccessServerRequest$Runtime = (()=>class _WarmRemoteAccessServerRequest extends Message {
        constructor(data){
            super();
            this.commit = "";
            this.port = 0;
            this.connectionToken = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _WarmRemoteAccessServerRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _WarmRemoteAccessServerRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _WarmRemoteAccessServerRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WarmRemoteAccessServerRequest, a, b2);
        }
    })();
var WarmRemoteAccessServerRequest = WarmRemoteAccessServerRequest$Runtime;
WarmRemoteAccessServerRequest.runtime = proto3;
WarmRemoteAccessServerRequest.typeName = "agent.v1.WarmRemoteAccessServerRequest";
WarmRemoteAccessServerRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "commit",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "port",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "connection_token",
            kind: "scalar",
            T: 9
        }
    ]);
var WarmRemoteAccessServerResponse$Runtime = (()=>class _WarmRemoteAccessServerResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _WarmRemoteAccessServerResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _WarmRemoteAccessServerResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _WarmRemoteAccessServerResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WarmRemoteAccessServerResponse, a, b2);
        }
    })();
var WarmRemoteAccessServerResponse = WarmRemoteAccessServerResponse$Runtime;
WarmRemoteAccessServerResponse.runtime = proto3;
WarmRemoteAccessServerResponse.typeName = "agent.v1.WarmRemoteAccessServerResponse";
WarmRemoteAccessServerResponse.fields = proto3.util.newFieldList(()=>[]);
var ListArtifactsRequest$Runtime = (()=>class _ListArtifactsRequest extends Message {
        constructor(data){
            super();
            this.extraPaths = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ListArtifactsRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ListArtifactsRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ListArtifactsRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ListArtifactsRequest, a, b2);
        }
    })();
var ListArtifactsRequest = ListArtifactsRequest$Runtime;
ListArtifactsRequest.runtime = proto3;
ListArtifactsRequest.typeName = "agent.v1.ListArtifactsRequest";
ListArtifactsRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "extra_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var ArtifactUploadMetadata$Runtime = (()=>class _ArtifactUploadMetadata extends Message {
        constructor(data){
            super();
            this.absolutePath = "";
            this.sizeBytes = protoInt64.zero;
            this.updatedAtUnixMs = protoInt64.zero;
            this.status = ArtifactUploadStatus.UNSPECIFIED;
            this.bytesUploaded = protoInt64.zero;
            this.lastError = "";
            this.uploadAttempts = 0;
            this.lastStartedAtUnixMs = protoInt64.zero;
            this.lastFinishedAtUnixMs = protoInt64.zero;
            this.uploadId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ArtifactUploadMetadata().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ArtifactUploadMetadata().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ArtifactUploadMetadata().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ArtifactUploadMetadata, a, b2);
        }
    })();
var ArtifactUploadMetadata = ArtifactUploadMetadata$Runtime;
ArtifactUploadMetadata.runtime = proto3;
ArtifactUploadMetadata.typeName = "agent.v1.ArtifactUploadMetadata";
ArtifactUploadMetadata.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "absolute_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "size_bytes",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "updated_at_unix_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(ArtifactUploadStatus)
        },
        {
            no: 5,
            name: "bytes_uploaded",
            kind: "scalar",
            T: 4
        },
        {
            no: 6,
            name: "last_error",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "upload_attempts",
            kind: "scalar",
            T: 13
        },
        {
            no: 8,
            name: "last_started_at_unix_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 9,
            name: "last_finished_at_unix_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 10,
            name: "upload_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "artifact_relative_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var ArtifactPathError$Runtime = (()=>class _ArtifactPathError extends Message {
        constructor(data){
            super();
            this.kind = ArtifactPathErrorKind.UNSPECIFIED;
            this.code = "";
            this.message = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ArtifactPathError().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ArtifactPathError().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ArtifactPathError().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ArtifactPathError, a, b2);
        }
    })();
var ArtifactPathError = ArtifactPathError$Runtime;
ArtifactPathError.runtime = proto3;
ArtifactPathError.typeName = "agent.v1.ArtifactPathError";
ArtifactPathError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "kind",
            kind: "enum",
            T: proto3.getEnumType(ArtifactPathErrorKind)
        },
        {
            no: 2,
            name: "code",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);
var ListArtifactsResponse$Runtime = (()=>class _ListArtifactsResponse extends Message {
        constructor(data){
            super();
            this.artifacts = [];
            this.pathErrors = {};
            this.rootKind = ArtifactRootKind.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ListArtifactsResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ListArtifactsResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ListArtifactsResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ListArtifactsResponse, a, b2);
        }
    })();
var ListArtifactsResponse = ListArtifactsResponse$Runtime;
ListArtifactsResponse.runtime = proto3;
ListArtifactsResponse.typeName = "agent.v1.ListArtifactsResponse";
ListArtifactsResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "artifacts",
            kind: "message",
            T: ArtifactUploadMetadata,
            repeated: true
        },
        {
            no: 2,
            name: "path_errors",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: ArtifactPathError
            }
        },
        {
            no: 3,
            name: "root_kind",
            kind: "enum",
            T: proto3.getEnumType(ArtifactRootKind)
        }
    ]);
var UploadArtifactsRequest$Runtime = (()=>class _UploadArtifactsRequest extends Message {
        constructor(data){
            super();
            this.uploads = [];
            this.waitForCompletion = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _UploadArtifactsRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _UploadArtifactsRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _UploadArtifactsRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UploadArtifactsRequest, a, b2);
        }
    })();
var UploadArtifactsRequest = UploadArtifactsRequest$Runtime;
UploadArtifactsRequest.runtime = proto3;
UploadArtifactsRequest.typeName = "agent.v1.UploadArtifactsRequest";
UploadArtifactsRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "uploads",
            kind: "message",
            T: ArtifactUploadInstruction,
            repeated: true
        },
        {
            no: 2,
            name: "wait_for_completion",
            kind: "scalar",
            T: 8
        }
    ]);
var ArtifactUploadInstruction$Runtime = (()=>class _ArtifactUploadInstruction extends Message {
        constructor(data){
            super();
            this.absolutePath = "";
            this.uploadUrl = "";
            this.method = "";
            this.headers = {};
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ArtifactUploadInstruction().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ArtifactUploadInstruction().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ArtifactUploadInstruction().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ArtifactUploadInstruction, a, b2);
        }
    })();
var ArtifactUploadInstruction = ArtifactUploadInstruction$Runtime;
ArtifactUploadInstruction.runtime = proto3;
ArtifactUploadInstruction.typeName = "agent.v1.ArtifactUploadInstruction";
ArtifactUploadInstruction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "absolute_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "upload_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "method",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "headers",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 5,
            name: "content_type",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "slack_upload_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "slack_file_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "artifact_relative_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var ArtifactUploadDispatchResult$Runtime = (()=>class _ArtifactUploadDispatchResult extends Message {
        constructor(data){
            super();
            this.absolutePath = "";
            this.status = ArtifactUploadDispatchStatus.UNSPECIFIED;
            this.message = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ArtifactUploadDispatchResult().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ArtifactUploadDispatchResult().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ArtifactUploadDispatchResult().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ArtifactUploadDispatchResult, a, b2);
        }
    })();
var ArtifactUploadDispatchResult = ArtifactUploadDispatchResult$Runtime;
ArtifactUploadDispatchResult.runtime = proto3;
ArtifactUploadDispatchResult.typeName = "agent.v1.ArtifactUploadDispatchResult";
ArtifactUploadDispatchResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "absolute_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(ArtifactUploadDispatchStatus)
        },
        {
            no: 3,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "slack_file_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var UploadArtifactsResponse$Runtime = (()=>class _UploadArtifactsResponse extends Message {
        constructor(data){
            super();
            this.results = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _UploadArtifactsResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _UploadArtifactsResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _UploadArtifactsResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UploadArtifactsResponse, a, b2);
        }
    })();
var UploadArtifactsResponse = UploadArtifactsResponse$Runtime;
UploadArtifactsResponse.runtime = proto3;
UploadArtifactsResponse.typeName = "agent.v1.UploadArtifactsResponse";
UploadArtifactsResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: ArtifactUploadDispatchResult,
            repeated: true
        }
    ]);
var PersistArtifactToAgentStoreInstruction$Runtime = (()=>class _PersistArtifactToAgentStoreInstruction extends Message {
        constructor(data){
            super();
            this.absolutePath = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PersistArtifactToAgentStoreInstruction().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PersistArtifactToAgentStoreInstruction().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PersistArtifactToAgentStoreInstruction().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PersistArtifactToAgentStoreInstruction, a, b2);
        }
    })();
var PersistArtifactToAgentStoreInstruction = PersistArtifactToAgentStoreInstruction$Runtime;
PersistArtifactToAgentStoreInstruction.runtime = proto3;
PersistArtifactToAgentStoreInstruction.typeName = "agent.v1.PersistArtifactToAgentStoreInstruction";
PersistArtifactToAgentStoreInstruction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "absolute_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "artifact_relative_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var PersistArtifactsToAgentStoreRequest$Runtime = (()=>class _PersistArtifactsToAgentStoreRequest extends Message {
        constructor(data){
            super();
            this.artifacts = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PersistArtifactsToAgentStoreRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PersistArtifactsToAgentStoreRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PersistArtifactsToAgentStoreRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PersistArtifactsToAgentStoreRequest, a, b2);
        }
    })();
var PersistArtifactsToAgentStoreRequest = PersistArtifactsToAgentStoreRequest$Runtime;
PersistArtifactsToAgentStoreRequest.runtime = proto3;
PersistArtifactsToAgentStoreRequest.typeName = "agent.v1.PersistArtifactsToAgentStoreRequest";
PersistArtifactsToAgentStoreRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "artifacts",
            kind: "message",
            T: PersistArtifactToAgentStoreInstruction,
            repeated: true
        }
    ]);
var PersistArtifactToAgentStoreResult$Runtime = (()=>class _PersistArtifactToAgentStoreResult extends Message {
        constructor(data){
            super();
            this.absolutePath = "";
            this.status = PersistArtifactToAgentStoreStatus.UNSPECIFIED;
            this.message = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PersistArtifactToAgentStoreResult().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PersistArtifactToAgentStoreResult().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PersistArtifactToAgentStoreResult().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PersistArtifactToAgentStoreResult, a, b2);
        }
    })();
var PersistArtifactToAgentStoreResult = PersistArtifactToAgentStoreResult$Runtime;
PersistArtifactToAgentStoreResult.runtime = proto3;
PersistArtifactToAgentStoreResult.typeName = "agent.v1.PersistArtifactToAgentStoreResult";
PersistArtifactToAgentStoreResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "absolute_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(PersistArtifactToAgentStoreStatus)
        },
        {
            no: 3,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);
var PersistArtifactsToAgentStoreResponse$Runtime = (()=>class _PersistArtifactsToAgentStoreResponse extends Message {
        constructor(data){
            super();
            this.results = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PersistArtifactsToAgentStoreResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PersistArtifactsToAgentStoreResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PersistArtifactsToAgentStoreResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PersistArtifactsToAgentStoreResponse, a, b2);
        }
    })();
var PersistArtifactsToAgentStoreResponse = PersistArtifactsToAgentStoreResponse$Runtime;
PersistArtifactsToAgentStoreResponse.runtime = proto3;
PersistArtifactsToAgentStoreResponse.typeName = "agent.v1.PersistArtifactsToAgentStoreResponse";
PersistArtifactsToAgentStoreResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: PersistArtifactToAgentStoreResult,
            repeated: true
        }
    ]);
var RestoreArtifactInstruction$Runtime = (()=>class _RestoreArtifactInstruction extends Message {
        constructor(data){
            super();
            this.absolutePath = "";
            this.downloadUrl = "";
            this.updatedAtUnixMs = protoInt64.zero;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _RestoreArtifactInstruction().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _RestoreArtifactInstruction().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _RestoreArtifactInstruction().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RestoreArtifactInstruction, a, b2);
        }
    })();
var RestoreArtifactInstruction = RestoreArtifactInstruction$Runtime;
RestoreArtifactInstruction.runtime = proto3;
RestoreArtifactInstruction.typeName = "agent.v1.RestoreArtifactInstruction";
RestoreArtifactInstruction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "absolute_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "download_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "updated_at_unix_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "artifact_relative_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var RestoreArtifactResult$Runtime = (()=>class _RestoreArtifactResult extends Message {
        constructor(data){
            super();
            this.status = ArtifactRestoreStatus.UNSPECIFIED;
            this.errorMessage = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _RestoreArtifactResult().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _RestoreArtifactResult().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _RestoreArtifactResult().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RestoreArtifactResult, a, b2);
        }
    })();
var RestoreArtifactResult = RestoreArtifactResult$Runtime;
RestoreArtifactResult.runtime = proto3;
RestoreArtifactResult.typeName = "agent.v1.RestoreArtifactResult";
RestoreArtifactResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 2,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(ArtifactRestoreStatus)
        },
        {
            no: 3,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]);
var RestoreArtifactsRequest$Runtime = (()=>class _RestoreArtifactsRequest extends Message {
        constructor(data){
            super();
            this.artifacts = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _RestoreArtifactsRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _RestoreArtifactsRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _RestoreArtifactsRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RestoreArtifactsRequest, a, b2);
        }
    })();
var RestoreArtifactsRequest = RestoreArtifactsRequest$Runtime;
RestoreArtifactsRequest.runtime = proto3;
RestoreArtifactsRequest.typeName = "agent.v1.RestoreArtifactsRequest";
RestoreArtifactsRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "artifacts",
            kind: "message",
            T: RestoreArtifactInstruction,
            repeated: true
        }
    ]);
var RestoreArtifactsResponse$Runtime = (()=>class _RestoreArtifactsResponse extends Message {
        constructor(data){
            super();
            this.results = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _RestoreArtifactsResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _RestoreArtifactsResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _RestoreArtifactsResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RestoreArtifactsResponse, a, b2);
        }
    })();
var RestoreArtifactsResponse = RestoreArtifactsResponse$Runtime;
RestoreArtifactsResponse.runtime = proto3;
RestoreArtifactsResponse.typeName = "agent.v1.RestoreArtifactsResponse";
RestoreArtifactsResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: RestoreArtifactResult,
            repeated: true
        }
    ]);
var GetMcpRefreshTokensRequest$Runtime = (()=>class _GetMcpRefreshTokensRequest extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _GetMcpRefreshTokensRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _GetMcpRefreshTokensRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _GetMcpRefreshTokensRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetMcpRefreshTokensRequest, a, b2);
        }
    })();
var GetMcpRefreshTokensRequest = GetMcpRefreshTokensRequest$Runtime;
GetMcpRefreshTokensRequest.runtime = proto3;
GetMcpRefreshTokensRequest.typeName = "agent.v1.GetMcpRefreshTokensRequest";
GetMcpRefreshTokensRequest.fields = proto3.util.newFieldList(()=>[]);
var GetMcpRefreshTokensResponse$Runtime = (()=>class _GetMcpRefreshTokensResponse extends Message {
        constructor(data){
            super();
            this.refreshTokens = {};
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _GetMcpRefreshTokensResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _GetMcpRefreshTokensResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _GetMcpRefreshTokensResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetMcpRefreshTokensResponse, a, b2);
        }
    })();
var GetMcpRefreshTokensResponse = GetMcpRefreshTokensResponse$Runtime;
GetMcpRefreshTokensResponse.runtime = proto3;
GetMcpRefreshTokensResponse.typeName = "agent.v1.GetMcpRefreshTokensResponse";
GetMcpRefreshTokensResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "refresh_tokens",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ]);
var UpdateEnvironmentVariablesRequest$Runtime = (()=>class _UpdateEnvironmentVariablesRequest extends Message {
        constructor(data){
            super();
            this.env = {};
            this.replace = false;
            this.restorePreviousValues = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _UpdateEnvironmentVariablesRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _UpdateEnvironmentVariablesRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _UpdateEnvironmentVariablesRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UpdateEnvironmentVariablesRequest, a, b2);
        }
    })();
var UpdateEnvironmentVariablesRequest = UpdateEnvironmentVariablesRequest$Runtime;
UpdateEnvironmentVariablesRequest.runtime = proto3;
UpdateEnvironmentVariablesRequest.typeName = "agent.v1.UpdateEnvironmentVariablesRequest";
UpdateEnvironmentVariablesRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "env",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 2,
            name: "replace",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "restore_previous_values",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "run_scoped_overlay",
            kind: "message",
            T: RunScopedOverlay
        }
    ]);
var RunScopedOverlay$Runtime = (()=>class _RunScopedOverlay extends Message {
        constructor(data){
            super();
            this.runId = "";
            this.release = false;
            this.holder = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _RunScopedOverlay().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _RunScopedOverlay().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _RunScopedOverlay().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RunScopedOverlay, a, b2);
        }
    })();
var RunScopedOverlay = RunScopedOverlay$Runtime;
RunScopedOverlay.runtime = proto3;
RunScopedOverlay.typeName = "agent.v1.RunScopedOverlay";
RunScopedOverlay.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "run_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "release",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "holder",
            kind: "scalar",
            T: 9
        }
    ]);
var UpdateEnvironmentVariablesResponse$Runtime = (()=>class _UpdateEnvironmentVariablesResponse extends Message {
        constructor(data){
            super();
            this.applied = 0;
            this.removed = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _UpdateEnvironmentVariablesResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _UpdateEnvironmentVariablesResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _UpdateEnvironmentVariablesResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UpdateEnvironmentVariablesResponse, a, b2);
        }
    })();
var UpdateEnvironmentVariablesResponse = UpdateEnvironmentVariablesResponse$Runtime;
UpdateEnvironmentVariablesResponse.runtime = proto3;
UpdateEnvironmentVariablesResponse.typeName = "agent.v1.UpdateEnvironmentVariablesResponse";
UpdateEnvironmentVariablesResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "applied",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "removed",
            kind: "scalar",
            T: 13
        }
    ]);
var DownloadCursorServerRequest$Runtime = (()=>class _DownloadCursorServerRequest extends Message {
        constructor(data){
            super();
            this.commit = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _DownloadCursorServerRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _DownloadCursorServerRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _DownloadCursorServerRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_DownloadCursorServerRequest, a, b2);
        }
    })();
var DownloadCursorServerRequest = DownloadCursorServerRequest$Runtime;
DownloadCursorServerRequest.runtime = proto3;
DownloadCursorServerRequest.typeName = "agent.v1.DownloadCursorServerRequest";
DownloadCursorServerRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "commit",
            kind: "scalar",
            T: 9
        }
    ]);
var DownloadCursorServerResponse$Runtime = (()=>class _DownloadCursorServerResponse extends Message {
        constructor(data){
            super();
            this.alreadyDownloaded = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _DownloadCursorServerResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _DownloadCursorServerResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _DownloadCursorServerResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_DownloadCursorServerResponse, a, b2);
        }
    })();
var DownloadCursorServerResponse = DownloadCursorServerResponse$Runtime;
DownloadCursorServerResponse.runtime = proto3;
DownloadCursorServerResponse.typeName = "agent.v1.DownloadCursorServerResponse";
DownloadCursorServerResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "already_downloaded",
            kind: "scalar",
            T: 8
        }
    ]);
var InstallPluginArtifactRequest$Runtime = (()=>class _InstallPluginArtifactRequest extends Message {
        constructor(data){
            super();
            this.downloadUrl = "";
            this.targetRoot = "";
            this.artifactDigest = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _InstallPluginArtifactRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _InstallPluginArtifactRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _InstallPluginArtifactRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_InstallPluginArtifactRequest, a, b2);
        }
    })();
var InstallPluginArtifactRequest = InstallPluginArtifactRequest$Runtime;
InstallPluginArtifactRequest.runtime = proto3;
InstallPluginArtifactRequest.typeName = "agent.v1.InstallPluginArtifactRequest";
InstallPluginArtifactRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "download_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "target_root",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "artifact_digest",
            kind: "scalar",
            T: 9
        }
    ]);
var InstallPluginArtifactResponse$Runtime = (()=>class _InstallPluginArtifactResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _InstallPluginArtifactResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _InstallPluginArtifactResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _InstallPluginArtifactResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_InstallPluginArtifactResponse, a, b2);
        }
    })();
var InstallPluginArtifactResponse = InstallPluginArtifactResponse$Runtime;
InstallPluginArtifactResponse.runtime = proto3;
InstallPluginArtifactResponse.typeName = "agent.v1.InstallPluginArtifactResponse";
InstallPluginArtifactResponse.fields = proto3.util.newFieldList(()=>[]);
var LoadMcpServersRequest$Runtime = (()=>class _LoadMcpServersRequest extends Message {
        constructor(data){
            super();
            this.mcpConfigJson = "";
            this.removeMissing = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _LoadMcpServersRequest().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _LoadMcpServersRequest().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _LoadMcpServersRequest().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_LoadMcpServersRequest, a, b2);
        }
    })();
var LoadMcpServersRequest = LoadMcpServersRequest$Runtime;
LoadMcpServersRequest.runtime = proto3;
LoadMcpServersRequest.typeName = "agent.v1.LoadMcpServersRequest";
LoadMcpServersRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "mcp_config_json",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "remove_missing",
            kind: "scalar",
            T: 8
        }
    ]);
var LoadMcpServersResponse$Runtime = (()=>class _LoadMcpServersResponse extends Message {
        constructor(data){
            super();
            this.loadedServerNames = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _LoadMcpServersResponse().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _LoadMcpServersResponse().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _LoadMcpServersResponse().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_LoadMcpServersResponse, a, b2);
        }
    })();
var LoadMcpServersResponse = LoadMcpServersResponse$Runtime;
LoadMcpServersResponse.runtime = proto3;
LoadMcpServersResponse.typeName = "agent.v1.LoadMcpServersResponse";
LoadMcpServersResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "loaded_server_names",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
export { ArtifactPathError, ArtifactPathErrorKind, ArtifactRestoreStatus, ArtifactRootKind, ArtifactUploadDispatchResult, ArtifactUploadDispatchStatus, ArtifactUploadInstruction, ArtifactUploadMetadata, ArtifactUploadStatus, BatchGetDiffError, BatchGetDiffErrorKind, BatchGetDiffItem, BatchGetDiffRequest, BatchGetDiffResponse, BatchGetDiffResult, DirectoryEntry, DownloadCursorServerRequest, DownloadCursorServerResponse, EntryType, ExecRequest, ExecResponse, ExitEvent, ExportFileMetadata, ExportFileRequest, ExportFileResponse, GetCapabilitiesRequest, GetCapabilitiesResponse, GetMcpRefreshTokensRequest, GetMcpRefreshTokensResponse, GetWorkspaceChangesHashRequest, GetWorkspaceChangesHashResponse, InstallPluginArtifactRequest, InstallPluginArtifactResponse, ListArtifactsRequest, ListArtifactsResponse, ListDirectoryRequest, ListDirectoryResponse, LoadMcpServersRequest, LoadMcpServersResponse, PersistArtifactToAgentStoreInstruction, PersistArtifactToAgentStoreResult, PersistArtifactToAgentStoreStatus, PersistArtifactsToAgentStoreRequest, PersistArtifactsToAgentStoreResponse, PingRequest, PingResponse, ReadBinaryFileRequest, ReadBinaryFileResponse, ReadTextFileRequest, ReadTextFileResponse, RefreshGithubAccessTokenRequest, RefreshGithubAccessTokenResponse, ReloadAgentSkillsRequest, ReloadAgentSkillsResponse, ReloadPluginsRequest, ReloadPluginsResponse, RestoreArtifactInstruction, RestoreArtifactResult, RestoreArtifactsRequest, RestoreArtifactsResponse, RunScopedOverlay, StderrEvent, StdoutEvent, UpdateEnvironmentVariablesRequest, UpdateEnvironmentVariablesResponse, UploadArtifactsRequest, UploadArtifactsResponse, WarmRemoteAccessServerRequest, WarmRemoteAccessServerResponse, WriteBinaryFileRequest, WriteBinaryFileResponse, WriteTextFileRequest, WriteTextFileResponse };
