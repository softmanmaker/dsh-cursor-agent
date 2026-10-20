import { Message, proto3 } from "@bufbuild/protobuf";
var CursorRuleSource;
(function(CursorRuleSource2) {
    CursorRuleSource2[CursorRuleSource2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    CursorRuleSource2[CursorRuleSource2["TEAM"] = 1] = "TEAM";
    CursorRuleSource2[CursorRuleSource2["USER"] = 2] = "USER";
})(CursorRuleSource || (CursorRuleSource = {}));
proto3.util.setEnumType(CursorRuleSource, "agent.v1.CursorRuleSource", [
    {
        no: 0,
        name: "CURSOR_RULE_SOURCE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "CURSOR_RULE_SOURCE_TEAM"
    },
    {
        no: 2,
        name: "CURSOR_RULE_SOURCE_USER"
    }
]);
var CursorRuleTypeGlobal$Runtime = (()=>class _CursorRuleTypeGlobal extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CursorRuleTypeGlobal().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CursorRuleTypeGlobal().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CursorRuleTypeGlobal().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CursorRuleTypeGlobal, a, b2);
        }
    })();
var CursorRuleTypeGlobal = CursorRuleTypeGlobal$Runtime;
CursorRuleTypeGlobal.runtime = proto3;
CursorRuleTypeGlobal.typeName = "agent.v1.CursorRuleTypeGlobal";
CursorRuleTypeGlobal.fields = proto3.util.newFieldList(()=>[]);
var CursorRuleTypeFileGlobs$Runtime = (()=>class _CursorRuleTypeFileGlobs extends Message {
        constructor(data){
            super();
            this.globs = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CursorRuleTypeFileGlobs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CursorRuleTypeFileGlobs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CursorRuleTypeFileGlobs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CursorRuleTypeFileGlobs, a, b2);
        }
    })();
var CursorRuleTypeFileGlobs = CursorRuleTypeFileGlobs$Runtime;
CursorRuleTypeFileGlobs.runtime = proto3;
CursorRuleTypeFileGlobs.typeName = "agent.v1.CursorRuleTypeFileGlobs";
CursorRuleTypeFileGlobs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "globs",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var CursorRuleTypeAgentFetched$Runtime = (()=>class _CursorRuleTypeAgentFetched extends Message {
        constructor(data){
            super();
            this.description = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CursorRuleTypeAgentFetched().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CursorRuleTypeAgentFetched().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CursorRuleTypeAgentFetched().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CursorRuleTypeAgentFetched, a, b2);
        }
    })();
var CursorRuleTypeAgentFetched = CursorRuleTypeAgentFetched$Runtime;
CursorRuleTypeAgentFetched.runtime = proto3;
CursorRuleTypeAgentFetched.typeName = "agent.v1.CursorRuleTypeAgentFetched";
CursorRuleTypeAgentFetched.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "description",
            kind: "scalar",
            T: 9
        }
    ]);
var CursorRuleTypeManuallyAttached$Runtime = (()=>class _CursorRuleTypeManuallyAttached extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CursorRuleTypeManuallyAttached().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CursorRuleTypeManuallyAttached().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CursorRuleTypeManuallyAttached().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CursorRuleTypeManuallyAttached, a, b2);
        }
    })();
var CursorRuleTypeManuallyAttached = CursorRuleTypeManuallyAttached$Runtime;
CursorRuleTypeManuallyAttached.runtime = proto3;
CursorRuleTypeManuallyAttached.typeName = "agent.v1.CursorRuleTypeManuallyAttached";
CursorRuleTypeManuallyAttached.fields = proto3.util.newFieldList(()=>[]);
var CursorRuleType$Runtime = (()=>class _CursorRuleType extends Message {
        constructor(data){
            super();
            this.type = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CursorRuleType().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CursorRuleType().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CursorRuleType().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CursorRuleType, a, b2);
        }
    })();
var CursorRuleType = CursorRuleType$Runtime;
CursorRuleType.runtime = proto3;
CursorRuleType.typeName = "agent.v1.CursorRuleType";
CursorRuleType.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "global",
            kind: "message",
            T: CursorRuleTypeGlobal,
            oneof: "type"
        },
        {
            no: 2,
            name: "file_globbed",
            kind: "message",
            T: CursorRuleTypeFileGlobs,
            oneof: "type"
        },
        {
            no: 3,
            name: "agent_fetched",
            kind: "message",
            T: CursorRuleTypeAgentFetched,
            oneof: "type"
        },
        {
            no: 4,
            name: "manually_attached",
            kind: "message",
            T: CursorRuleTypeManuallyAttached,
            oneof: "type"
        }
    ]);
var CursorRule$Runtime = (()=>class _CursorRule extends Message {
        constructor(data){
            super();
            this.fullPath = "";
            this.content = "";
            this.source = CursorRuleSource.UNSPECIFIED;
            this.environments = [];
            this.disabledEnvironments = [];
            this.scopedTo = [];
            this.frontmatter = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CursorRule().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CursorRule().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CursorRule().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CursorRule, a, b2);
        }
    })();
var CursorRule = CursorRule$Runtime;
CursorRule.runtime = proto3;
CursorRule.typeName = "agent.v1.CursorRule";
CursorRule.fields = proto3.util.newFieldList(()=>[
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
            name: "type",
            kind: "message",
            T: CursorRuleType
        },
        {
            no: 4,
            name: "source",
            kind: "enum",
            T: proto3.getEnumType(CursorRuleSource)
        },
        {
            no: 5,
            name: "git_remote_origin",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "parse_error",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "environments",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 8,
            name: "disabled_environments",
            kind: "scalar",
            T: 9,
            repeated: true
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
            name: "scoped_to",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 14,
            name: "frontmatter",
            kind: "scalar",
            T: 9
        },
        {
            no: 15,
            name: "is_required",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
export { CursorRule, CursorRuleSource, CursorRuleType, CursorRuleTypeAgentFetched, CursorRuleTypeFileGlobs, CursorRuleTypeGlobal, CursorRuleTypeManuallyAttached };
