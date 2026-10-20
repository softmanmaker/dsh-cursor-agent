import { Message, proto3 } from "@bufbuild/protobuf";
var CustomSubagentPermissionMode;
var TaskMode;
(function(CustomSubagentPermissionMode2) {
    CustomSubagentPermissionMode2[CustomSubagentPermissionMode2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    CustomSubagentPermissionMode2[CustomSubagentPermissionMode2["DEFAULT"] = 1] = "DEFAULT";
    CustomSubagentPermissionMode2[CustomSubagentPermissionMode2["READONLY"] = 2] = "READONLY";
    CustomSubagentPermissionMode2[CustomSubagentPermissionMode2["AGENT_ONLY"] = 3] = "AGENT_ONLY";
})(CustomSubagentPermissionMode || (CustomSubagentPermissionMode = {}));
proto3.util.setEnumType(CustomSubagentPermissionMode, "agent.v1.CustomSubagentPermissionMode", [
    {
        no: 0,
        name: "CUSTOM_SUBAGENT_PERMISSION_MODE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "CUSTOM_SUBAGENT_PERMISSION_MODE_DEFAULT"
    },
    {
        no: 2,
        name: "CUSTOM_SUBAGENT_PERMISSION_MODE_READONLY"
    },
    {
        no: 3,
        name: "CUSTOM_SUBAGENT_PERMISSION_MODE_AGENT_ONLY"
    }
]);
(function(TaskMode2) {
    TaskMode2[TaskMode2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    TaskMode2[TaskMode2["AGENT"] = 1] = "AGENT";
    TaskMode2[TaskMode2["PLAN"] = 2] = "PLAN";
})(TaskMode || (TaskMode = {}));
proto3.util.setEnumType(TaskMode, "agent.v1.TaskMode", [
    {
        no: 0,
        name: "TASK_MODE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "TASK_MODE_AGENT"
    },
    {
        no: 2,
        name: "TASK_MODE_PLAN"
    }
]);
var SubagentType$Runtime = (()=>class _SubagentType extends Message {
        constructor(data){
            super();
            this.type = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SubagentType().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SubagentType().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SubagentType().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubagentType, a, b2);
        }
    })();
var SubagentType = SubagentType$Runtime;
SubagentType.runtime = proto3;
SubagentType.typeName = "agent.v1.SubagentType";
SubagentType.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "unspecified",
            kind: "message",
            T: SubagentTypeUnspecified,
            oneof: "type"
        },
        {
            no: 2,
            name: "computer_use",
            kind: "message",
            T: SubagentTypeComputerUse,
            oneof: "type"
        },
        {
            no: 3,
            name: "custom",
            kind: "message",
            T: SubagentTypeCustom,
            oneof: "type"
        },
        {
            no: 4,
            name: "explore",
            kind: "message",
            T: SubagentTypeExplore,
            oneof: "type"
        },
        {
            no: 5,
            name: "media_review",
            kind: "message",
            T: SubagentTypeMediaReview,
            oneof: "type"
        },
        {
            no: 6,
            name: "bash",
            kind: "message",
            T: SubagentTypeBash,
            oneof: "type"
        },
        {
            no: 7,
            name: "browser_use",
            kind: "message",
            T: SubagentTypeBrowserUse,
            oneof: "type"
        },
        {
            no: 8,
            name: "shell",
            kind: "message",
            T: SubagentTypeShell,
            oneof: "type"
        },
        {
            no: 9,
            name: "vm_setup_helper",
            kind: "message",
            T: SubagentTypeVmSetupHelper,
            oneof: "type"
        },
        {
            no: 10,
            name: "debug",
            kind: "message",
            T: SubagentTypeDebug,
            oneof: "type"
        },
        {
            no: 11,
            name: "cursor_guide",
            kind: "message",
            T: SubagentTypeCursorGuide,
            oneof: "type"
        },
        {
            no: 12,
            name: "watch_video",
            kind: "message",
            T: SubagentTypeWatchVideo,
            oneof: "type"
        }
    ]);
var SubagentTypeUnspecified$Runtime = (()=>class _SubagentTypeUnspecified extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SubagentTypeUnspecified().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SubagentTypeUnspecified().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SubagentTypeUnspecified().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubagentTypeUnspecified, a, b2);
        }
    })();
var SubagentTypeUnspecified = SubagentTypeUnspecified$Runtime;
SubagentTypeUnspecified.runtime = proto3;
SubagentTypeUnspecified.typeName = "agent.v1.SubagentTypeUnspecified";
SubagentTypeUnspecified.fields = proto3.util.newFieldList(()=>[]);
var SubagentTypeComputerUse$Runtime = (()=>class _SubagentTypeComputerUse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SubagentTypeComputerUse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SubagentTypeComputerUse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SubagentTypeComputerUse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubagentTypeComputerUse, a, b2);
        }
    })();
var SubagentTypeComputerUse = SubagentTypeComputerUse$Runtime;
SubagentTypeComputerUse.runtime = proto3;
SubagentTypeComputerUse.typeName = "agent.v1.SubagentTypeComputerUse";
SubagentTypeComputerUse.fields = proto3.util.newFieldList(()=>[]);
var SubagentTypeExplore$Runtime = (()=>class _SubagentTypeExplore extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SubagentTypeExplore().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SubagentTypeExplore().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SubagentTypeExplore().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubagentTypeExplore, a, b2);
        }
    })();
var SubagentTypeExplore = SubagentTypeExplore$Runtime;
SubagentTypeExplore.runtime = proto3;
SubagentTypeExplore.typeName = "agent.v1.SubagentTypeExplore";
SubagentTypeExplore.fields = proto3.util.newFieldList(()=>[]);
var SubagentTypeMediaReview$Runtime = (()=>class _SubagentTypeMediaReview extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SubagentTypeMediaReview().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SubagentTypeMediaReview().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SubagentTypeMediaReview().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubagentTypeMediaReview, a, b2);
        }
    })();
var SubagentTypeMediaReview = SubagentTypeMediaReview$Runtime;
SubagentTypeMediaReview.runtime = proto3;
SubagentTypeMediaReview.typeName = "agent.v1.SubagentTypeMediaReview";
SubagentTypeMediaReview.fields = proto3.util.newFieldList(()=>[]);
var SubagentTypeBash$Runtime = (()=>class _SubagentTypeBash extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SubagentTypeBash().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SubagentTypeBash().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SubagentTypeBash().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubagentTypeBash, a, b2);
        }
    })();
var SubagentTypeBash = SubagentTypeBash$Runtime;
SubagentTypeBash.runtime = proto3;
SubagentTypeBash.typeName = "agent.v1.SubagentTypeBash";
SubagentTypeBash.fields = proto3.util.newFieldList(()=>[]);
var SubagentTypeShell$Runtime = (()=>class _SubagentTypeShell extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SubagentTypeShell().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SubagentTypeShell().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SubagentTypeShell().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubagentTypeShell, a, b2);
        }
    })();
var SubagentTypeShell = SubagentTypeShell$Runtime;
SubagentTypeShell.runtime = proto3;
SubagentTypeShell.typeName = "agent.v1.SubagentTypeShell";
SubagentTypeShell.fields = proto3.util.newFieldList(()=>[]);
var SubagentTypeBrowserUse$Runtime = (()=>class _SubagentTypeBrowserUse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SubagentTypeBrowserUse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SubagentTypeBrowserUse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SubagentTypeBrowserUse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubagentTypeBrowserUse, a, b2);
        }
    })();
var SubagentTypeBrowserUse = SubagentTypeBrowserUse$Runtime;
SubagentTypeBrowserUse.runtime = proto3;
SubagentTypeBrowserUse.typeName = "agent.v1.SubagentTypeBrowserUse";
SubagentTypeBrowserUse.fields = proto3.util.newFieldList(()=>[]);
var SubagentTypeVmSetupHelper$Runtime = (()=>class _SubagentTypeVmSetupHelper extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SubagentTypeVmSetupHelper().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SubagentTypeVmSetupHelper().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SubagentTypeVmSetupHelper().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubagentTypeVmSetupHelper, a, b2);
        }
    })();
var SubagentTypeVmSetupHelper = SubagentTypeVmSetupHelper$Runtime;
SubagentTypeVmSetupHelper.runtime = proto3;
SubagentTypeVmSetupHelper.typeName = "agent.v1.SubagentTypeVmSetupHelper";
SubagentTypeVmSetupHelper.fields = proto3.util.newFieldList(()=>[]);
var SubagentTypeDebug$Runtime = (()=>class _SubagentTypeDebug extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SubagentTypeDebug().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SubagentTypeDebug().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SubagentTypeDebug().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubagentTypeDebug, a, b2);
        }
    })();
var SubagentTypeDebug = SubagentTypeDebug$Runtime;
SubagentTypeDebug.runtime = proto3;
SubagentTypeDebug.typeName = "agent.v1.SubagentTypeDebug";
SubagentTypeDebug.fields = proto3.util.newFieldList(()=>[]);
var SubagentTypeCursorGuide$Runtime = (()=>class _SubagentTypeCursorGuide extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SubagentTypeCursorGuide().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SubagentTypeCursorGuide().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SubagentTypeCursorGuide().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubagentTypeCursorGuide, a, b2);
        }
    })();
var SubagentTypeCursorGuide = SubagentTypeCursorGuide$Runtime;
SubagentTypeCursorGuide.runtime = proto3;
SubagentTypeCursorGuide.typeName = "agent.v1.SubagentTypeCursorGuide";
SubagentTypeCursorGuide.fields = proto3.util.newFieldList(()=>[]);
var SubagentTypeWatchVideo$Runtime = (()=>class _SubagentTypeWatchVideo extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SubagentTypeWatchVideo().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SubagentTypeWatchVideo().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SubagentTypeWatchVideo().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubagentTypeWatchVideo, a, b2);
        }
    })();
var SubagentTypeWatchVideo = SubagentTypeWatchVideo$Runtime;
SubagentTypeWatchVideo.runtime = proto3;
SubagentTypeWatchVideo.typeName = "agent.v1.SubagentTypeWatchVideo";
SubagentTypeWatchVideo.fields = proto3.util.newFieldList(()=>[]);
var SubagentTypeCustom$Runtime = (()=>class _SubagentTypeCustom extends Message {
        constructor(data){
            super();
            this.name = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SubagentTypeCustom().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SubagentTypeCustom().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SubagentTypeCustom().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubagentTypeCustom, a, b2);
        }
    })();
var SubagentTypeCustom = SubagentTypeCustom$Runtime;
SubagentTypeCustom.runtime = proto3;
SubagentTypeCustom.typeName = "agent.v1.SubagentTypeCustom";
SubagentTypeCustom.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]);
var CustomSubagent$Runtime = (()=>class _CustomSubagent extends Message {
        constructor(data){
            super();
            this.fullPath = "";
            this.name = "";
            this.description = "";
            this.tools = [];
            this.model = "";
            this.prompt = "";
            this.permissionMode = CustomSubagentPermissionMode.UNSPECIFIED;
            this.isBackground = false;
            this.forceDefaultModel = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CustomSubagent().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CustomSubagent().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CustomSubagent().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CustomSubagent, a, b2);
        }
    })();
var CustomSubagent = CustomSubagent$Runtime;
CustomSubagent.runtime = proto3;
CustomSubagent.typeName = "agent.v1.CustomSubagent";
CustomSubagent.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "full_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
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
            name: "tools",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "model",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "permission_mode",
            kind: "enum",
            T: proto3.getEnumType(CustomSubagentPermissionMode)
        },
        {
            no: 8,
            name: "is_background",
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
            name: "force_default_model",
            kind: "scalar",
            T: 8
        },
        {
            no: 14,
            name: "source",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
export { CustomSubagent, CustomSubagentPermissionMode, SubagentType, SubagentTypeBash, SubagentTypeBrowserUse, SubagentTypeComputerUse, SubagentTypeCursorGuide, SubagentTypeCustom, SubagentTypeDebug, SubagentTypeExplore, SubagentTypeMediaReview, SubagentTypeShell, SubagentTypeUnspecified, SubagentTypeVmSetupHelper, SubagentTypeWatchVideo, TaskMode };
