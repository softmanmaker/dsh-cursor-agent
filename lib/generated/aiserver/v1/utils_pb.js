import { Message, proto3 } from "@bufbuild/protobuf";
var LintSeverity;
var FeatureType;
var EmbeddingModel;
var GetDiffRequest_OutputFormat;
var GitDiff_DiffType;
var Diagnostic_DiagnosticSeverity;
var PureMessage_MessageType;
var DocumentSymbol_SymbolKind;
var ErrorDetails_Error;
var CodeChunk_Intent;
var CodeChunk_SummarizationStrategy;
(function(LintSeverity2) {
    LintSeverity2[LintSeverity2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    LintSeverity2[LintSeverity2["ERROR"] = 1] = "ERROR";
    LintSeverity2[LintSeverity2["WARNING"] = 2] = "WARNING";
    LintSeverity2[LintSeverity2["INFO"] = 3] = "INFO";
    LintSeverity2[LintSeverity2["HINT"] = 4] = "HINT";
    LintSeverity2[LintSeverity2["AI"] = 5] = "AI";
})(LintSeverity || (LintSeverity = {}));
proto3.util.setEnumType(LintSeverity, "aiserver.v1.LintSeverity", [
    {
        no: 0,
        name: "LINT_SEVERITY_UNSPECIFIED"
    },
    {
        no: 1,
        name: "LINT_SEVERITY_ERROR"
    },
    {
        no: 2,
        name: "LINT_SEVERITY_WARNING"
    },
    {
        no: 3,
        name: "LINT_SEVERITY_INFO"
    },
    {
        no: 4,
        name: "LINT_SEVERITY_HINT"
    },
    {
        no: 5,
        name: "LINT_SEVERITY_AI"
    }
]);
(function(FeatureType2) {
    FeatureType2[FeatureType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    FeatureType2[FeatureType2["EDIT"] = 1] = "EDIT";
    FeatureType2[FeatureType2["GENERATE"] = 2] = "GENERATE";
    FeatureType2[FeatureType2["INLINE_LONG_COMPLETION"] = 3] = "INLINE_LONG_COMPLETION";
})(FeatureType || (FeatureType = {}));
proto3.util.setEnumType(FeatureType, "aiserver.v1.FeatureType", [
    {
        no: 0,
        name: "FEATURE_TYPE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "FEATURE_TYPE_EDIT"
    },
    {
        no: 2,
        name: "FEATURE_TYPE_GENERATE"
    },
    {
        no: 3,
        name: "FEATURE_TYPE_INLINE_LONG_COMPLETION"
    }
]);
(function(EmbeddingModel2) {
    EmbeddingModel2[EmbeddingModel2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    EmbeddingModel2[EmbeddingModel2["VOYAGE_CODE_2"] = 1] = "VOYAGE_CODE_2";
    EmbeddingModel2[EmbeddingModel2["TEXT_EMBEDDINGS_LARGE_3"] = 2] = "TEXT_EMBEDDINGS_LARGE_3";
    EmbeddingModel2[EmbeddingModel2["QWEN_1_5B_CUSTOM"] = 3] = "QWEN_1_5B_CUSTOM";
    EmbeddingModel2[EmbeddingModel2["MOCK_CHUNKER_ERROR"] = 4] = "MOCK_CHUNKER_ERROR";
    EmbeddingModel2[EmbeddingModel2["QWEN_1_5B_0618_CUSTOM"] = 5] = "QWEN_1_5B_0618_CUSTOM";
    EmbeddingModel2[EmbeddingModel2["QWEN_1_5B_0618_FP8_MM_CUSTOM"] = 6] = "QWEN_1_5B_0618_FP8_MM_CUSTOM";
})(EmbeddingModel || (EmbeddingModel = {}));
proto3.util.setEnumType(EmbeddingModel, "aiserver.v1.EmbeddingModel", [
    {
        no: 0,
        name: "EMBEDDING_MODEL_UNSPECIFIED"
    },
    {
        no: 1,
        name: "EMBEDDING_MODEL_VOYAGE_CODE_2"
    },
    {
        no: 2,
        name: "EMBEDDING_MODEL_TEXT_EMBEDDINGS_LARGE_3"
    },
    {
        no: 3,
        name: "EMBEDDING_MODEL_QWEN_1_5B_CUSTOM"
    },
    {
        no: 4,
        name: "EMBEDDING_MODEL_MOCK_CHUNKER_ERROR"
    },
    {
        no: 5,
        name: "EMBEDDING_MODEL_QWEN_1_5B_0618_CUSTOM"
    },
    {
        no: 6,
        name: "EMBEDDING_MODEL_QWEN_1_5B_0618_FP8_MM_CUSTOM"
    }
]);
var CursorPosition$Runtime = (()=>class _CursorPosition extends Message {
        constructor(data){
            super();
            this.line = 0;
            this.column = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CursorPosition().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CursorPosition().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CursorPosition().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CursorPosition, a, b2);
        }
    })();
var CursorPosition = CursorPosition$Runtime;
CursorPosition.runtime = proto3;
CursorPosition.typeName = "aiserver.v1.CursorPosition";
CursorPosition.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "line",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "column",
            kind: "scalar",
            T: 5
        }
    ]);
var VscodeOSStatistics$Runtime = (()=>class _VscodeOSStatistics extends Message {
        constructor(data){
            super();
            this.totalmem = 0;
            this.freemem = 0;
            this.loadavg = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _VscodeOSStatistics().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _VscodeOSStatistics().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _VscodeOSStatistics().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_VscodeOSStatistics, a, b2);
        }
    })();
var VscodeOSStatistics = VscodeOSStatistics$Runtime;
VscodeOSStatistics.runtime = proto3;
VscodeOSStatistics.typeName = "aiserver.v1.VscodeOSStatistics";
VscodeOSStatistics.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "totalmem",
            kind: "scalar",
            T: 1
        },
        {
            no: 2,
            name: "freemem",
            kind: "scalar",
            T: 1
        },
        {
            no: 3,
            name: "loadavg",
            kind: "scalar",
            T: 1,
            repeated: true
        }
    ]);
var VscodeOSProperties$Runtime = (()=>class _VscodeOSProperties extends Message {
        constructor(data){
            super();
            this.type = "";
            this.release = "";
            this.arch = "";
            this.platform = "";
            this.cpus = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _VscodeOSProperties().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _VscodeOSProperties().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _VscodeOSProperties().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_VscodeOSProperties, a, b2);
        }
    })();
var VscodeOSProperties = VscodeOSProperties$Runtime;
VscodeOSProperties.runtime = proto3;
VscodeOSProperties.typeName = "aiserver.v1.VscodeOSProperties";
VscodeOSProperties.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "type",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "release",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "arch",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "platform",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "cpus",
            kind: "message",
            T: VscodeCPUProperties,
            repeated: true
        }
    ]);
var VscodeCPUProperties$Runtime = (()=>class _VscodeCPUProperties extends Message {
        constructor(data){
            super();
            this.model = "";
            this.speed = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _VscodeCPUProperties().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _VscodeCPUProperties().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _VscodeCPUProperties().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_VscodeCPUProperties, a, b2);
        }
    })();
var VscodeCPUProperties = VscodeCPUProperties$Runtime;
VscodeCPUProperties.runtime = proto3;
VscodeCPUProperties.typeName = "aiserver.v1.VscodeCPUProperties";
VscodeCPUProperties.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "model",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "speed",
            kind: "scalar",
            T: 1
        }
    ]);
var EnvironmentInfo$Runtime = (()=>class _EnvironmentInfo extends Message {
        constructor(data){
            super();
            this.workspaceUris = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _EnvironmentInfo().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _EnvironmentInfo().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _EnvironmentInfo().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_EnvironmentInfo, a, b2);
        }
    })();
var EnvironmentInfo = EnvironmentInfo$Runtime;
EnvironmentInfo.runtime = proto3;
EnvironmentInfo.typeName = "aiserver.v1.EnvironmentInfo";
EnvironmentInfo.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "exthost_platform",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "exthost_arch",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "exthost_release",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "exthost_shell",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "local_timestamp",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "workspace_uris",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 7,
            name: "cursor_version",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "is_remote",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 9,
            name: "local_os_type",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "home_directory",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "local_timezone",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var SelectionWithOrientation$Runtime = (()=>class _SelectionWithOrientation extends Message {
        constructor(data){
            super();
            this.selectionStartLineNumber = 0;
            this.selectionStartColumn = 0;
            this.positionLineNumber = 0;
            this.positionColumn = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectionWithOrientation().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectionWithOrientation().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectionWithOrientation().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectionWithOrientation, a, b2);
        }
    })();
var SelectionWithOrientation = SelectionWithOrientation$Runtime;
SelectionWithOrientation.runtime = proto3;
SelectionWithOrientation.typeName = "aiserver.v1.SelectionWithOrientation";
SelectionWithOrientation.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "selection_start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "selection_start_column",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "position_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "position_column",
            kind: "scalar",
            T: 5
        }
    ]);
var GetDiffRequest$Runtime = (()=>class _GetDiffRequest extends Message {
        constructor(data){
            super();
            this.cwd = "";
            this.ref = "";
            this.baseRef = "";
            this.mergeBase = false;
            this.targetPaths = [];
            this.maxUntrackedFiles = 0;
            this.submoduleRecurseDepth = 0;
            this.includeSpaceChanges = false;
            this.committedOnly = false;
            this.computePatchId = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetDiffRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetDiffRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetDiffRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetDiffRequest, a, b2);
        }
    })();
var GetDiffRequest = GetDiffRequest$Runtime;
GetDiffRequest.runtime = proto3;
GetDiffRequest.typeName = "aiserver.v1.GetDiffRequest";
GetDiffRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "cwd",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "ref",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "base_ref",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "merge_base",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "target_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 6,
            name: "unified_context_lines",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 7,
            name: "max_untracked_files",
            kind: "scalar",
            T: 5
        },
        {
            no: 9,
            name: "submodule_recurse_depth",
            kind: "scalar",
            T: 5
        },
        {
            no: 10,
            name: "include_space_changes",
            kind: "scalar",
            T: 8
        },
        {
            no: 11,
            name: "committed_only",
            kind: "scalar",
            T: 8
        },
        {
            no: 12,
            name: "compute_patch_id",
            kind: "scalar",
            T: 8
        },
        {
            no: 13,
            name: "return_head_sha",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 14,
            name: "max_response_bytes",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 8,
            name: "output_format",
            kind: "enum",
            T: proto3.getEnumType(GetDiffRequest_OutputFormat),
            opt: true
        }
    ]);
(function(GetDiffRequest_OutputFormat2) {
    GetDiffRequest_OutputFormat2[GetDiffRequest_OutputFormat2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    GetDiffRequest_OutputFormat2[GetDiffRequest_OutputFormat2["NAME_STATUS"] = 1] = "NAME_STATUS";
    GetDiffRequest_OutputFormat2[GetDiffRequest_OutputFormat2["NAME_STATUS_AND_NUMSTAT"] = 2] = "NAME_STATUS_AND_NUMSTAT";
    GetDiffRequest_OutputFormat2[GetDiffRequest_OutputFormat2["FILE_DIFFS"] = 3] = "FILE_DIFFS";
    GetDiffRequest_OutputFormat2[GetDiffRequest_OutputFormat2["DIFFS_WITH_BEFORE_AND_AFTER"] = 4] = "DIFFS_WITH_BEFORE_AND_AFTER";
})(GetDiffRequest_OutputFormat || (GetDiffRequest_OutputFormat = {}));
proto3.util.setEnumType(GetDiffRequest_OutputFormat, "aiserver.v1.GetDiffRequest.OutputFormat", [
    {
        no: 0,
        name: "OUTPUT_FORMAT_UNSPECIFIED"
    },
    {
        no: 1,
        name: "OUTPUT_FORMAT_NAME_STATUS"
    },
    {
        no: 2,
        name: "OUTPUT_FORMAT_NAME_STATUS_AND_NUMSTAT"
    },
    {
        no: 3,
        name: "OUTPUT_FORMAT_FILE_DIFFS"
    },
    {
        no: 4,
        name: "OUTPUT_FORMAT_DIFFS_WITH_BEFORE_AND_AFTER"
    }
]);
var GetDiffResponse$Runtime = (()=>class _GetDiffResponse extends Message {
        constructor(data){
            super();
            this.submoduleDiffs = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetDiffResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetDiffResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetDiffResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetDiffResponse, a, b2);
        }
    })();
var GetDiffResponse = GetDiffResponse$Runtime;
GetDiffResponse.runtime = proto3;
GetDiffResponse.typeName = "aiserver.v1.GetDiffResponse";
GetDiffResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "diff",
            kind: "message",
            T: GitDiff
        },
        {
            no: 2,
            name: "submodule_diffs",
            kind: "message",
            T: GetDiffResponse_SubmoduleDiff,
            repeated: true
        },
        {
            no: 3,
            name: "patch_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "head_sha",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "has_uncommitted_changes",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
var GetDiffResponse_SubmoduleDiff$Runtime = (()=>class _GetDiffResponse_SubmoduleDiff extends Message {
        constructor(data){
            super();
            this.relativePath = "";
            this.errored = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetDiffResponse_SubmoduleDiff().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetDiffResponse_SubmoduleDiff().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetDiffResponse_SubmoduleDiff().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetDiffResponse_SubmoduleDiff, a, b2);
        }
    })();
var GetDiffResponse_SubmoduleDiff = GetDiffResponse_SubmoduleDiff$Runtime;
GetDiffResponse_SubmoduleDiff.runtime = proto3;
GetDiffResponse_SubmoduleDiff.typeName = "aiserver.v1.GetDiffResponse.SubmoduleDiff";
GetDiffResponse_SubmoduleDiff.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "diff",
            kind: "message",
            T: GitDiff
        },
        {
            no: 3,
            name: "errored",
            kind: "scalar",
            T: 8
        }
    ]);
var SimplestRange$Runtime = (()=>class _SimplestRange extends Message {
        constructor(data){
            super();
            this.startLine = 0;
            this.endLineInclusive = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SimplestRange().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SimplestRange().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SimplestRange().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SimplestRange, a, b2);
        }
    })();
var SimplestRange = SimplestRange$Runtime;
SimplestRange.runtime = proto3;
SimplestRange.typeName = "aiserver.v1.SimplestRange";
SimplestRange.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "end_line_inclusive",
            kind: "scalar",
            T: 5
        }
    ]);
var ComputeLinesDiffOriginalAndModified$Runtime = (()=>class _ComputeLinesDiffOriginalAndModified extends Message {
        constructor(data){
            super();
            this.original = [];
            this.modified = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ComputeLinesDiffOriginalAndModified().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ComputeLinesDiffOriginalAndModified().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ComputeLinesDiffOriginalAndModified().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ComputeLinesDiffOriginalAndModified, a, b2);
        }
    })();
var ComputeLinesDiffOriginalAndModified = ComputeLinesDiffOriginalAndModified$Runtime;
ComputeLinesDiffOriginalAndModified.runtime = proto3;
ComputeLinesDiffOriginalAndModified.typeName = "aiserver.v1.ComputeLinesDiffOriginalAndModified";
ComputeLinesDiffOriginalAndModified.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "original",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "modified",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var GitDiff$Runtime = (()=>class _GitDiff extends Message {
        constructor(data){
            super();
            this.diffs = [];
            this.diffType = GitDiff_DiffType.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GitDiff().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GitDiff().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GitDiff().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GitDiff, a, b2);
        }
    })();
var GitDiff = GitDiff$Runtime;
GitDiff.runtime = proto3;
GitDiff.typeName = "aiserver.v1.GitDiff";
GitDiff.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "diffs",
            kind: "message",
            T: FileDiff,
            repeated: true
        },
        {
            no: 2,
            name: "diff_type",
            kind: "enum",
            T: proto3.getEnumType(GitDiff_DiffType)
        }
    ]);
(function(GitDiff_DiffType2) {
    GitDiff_DiffType2[GitDiff_DiffType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    GitDiff_DiffType2[GitDiff_DiffType2["DIFF_TO_HEAD"] = 1] = "DIFF_TO_HEAD";
    GitDiff_DiffType2[GitDiff_DiffType2["DIFF_FROM_BRANCH_TO_MAIN"] = 2] = "DIFF_FROM_BRANCH_TO_MAIN";
})(GitDiff_DiffType || (GitDiff_DiffType = {}));
proto3.util.setEnumType(GitDiff_DiffType, "aiserver.v1.GitDiff.DiffType", [
    {
        no: 0,
        name: "DIFF_TYPE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "DIFF_TYPE_DIFF_TO_HEAD"
    },
    {
        no: 2,
        name: "DIFF_TYPE_DIFF_FROM_BRANCH_TO_MAIN"
    }
]);
var FileDiff$Runtime = (()=>class _FileDiff extends Message {
        constructor(data){
            super();
            this.added = 0;
            this.removed = 0;
            this.from = "";
            this.to = "";
            this.chunks = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FileDiff().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FileDiff().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FileDiff().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FileDiff, a, b2);
        }
    })();
var FileDiff = FileDiff$Runtime;
FileDiff.runtime = proto3;
FileDiff.typeName = "aiserver.v1.FileDiff";
FileDiff.fields = proto3.util.newFieldList(()=>[
        {
            no: 4,
            name: "added",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "removed",
            kind: "scalar",
            T: 5
        },
        {
            no: 1,
            name: "from",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "to",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "chunks",
            kind: "message",
            T: FileDiff_Chunk,
            repeated: true
        },
        {
            no: 6,
            name: "before_file_contents",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "after_file_contents",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "is_generated",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
var FileDiff_Chunk$Runtime = (()=>class _FileDiff_Chunk extends Message {
        constructor(data){
            super();
            this.content = "";
            this.lines = [];
            this.oldStart = 0;
            this.oldLines = 0;
            this.newStart = 0;
            this.newLines = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FileDiff_Chunk().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FileDiff_Chunk().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FileDiff_Chunk().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FileDiff_Chunk, a, b2);
        }
    })();
var FileDiff_Chunk = FileDiff_Chunk$Runtime;
FileDiff_Chunk.runtime = proto3;
FileDiff_Chunk.typeName = "aiserver.v1.FileDiff.Chunk";
FileDiff_Chunk.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "lines",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "old_start",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "old_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "new_start",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "new_lines",
            kind: "scalar",
            T: 5
        }
    ]);
var SimpleRange$Runtime = (()=>class _SimpleRange extends Message {
        constructor(data){
            super();
            this.startLineNumber = 0;
            this.startColumn = 0;
            this.endLineNumberInclusive = 0;
            this.endColumn = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SimpleRange().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SimpleRange().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SimpleRange().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SimpleRange, a, b2);
        }
    })();
var SimpleRange = SimpleRange$Runtime;
SimpleRange.runtime = proto3;
SimpleRange.typeName = "aiserver.v1.SimpleRange";
SimpleRange.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "start_column",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "end_line_number_inclusive",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "end_column",
            kind: "scalar",
            T: 5
        }
    ]);
var SimpleFileChunk$Runtime = (()=>class _SimpleFileChunk extends Message {
        constructor(data){
            super();
            this.relativeWorkspacePath = "";
            this.chunkHash = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SimpleFileChunk().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SimpleFileChunk().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SimpleFileChunk().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SimpleFileChunk, a, b2);
        }
    })();
var SimpleFileChunk = SimpleFileChunk$Runtime;
SimpleFileChunk.runtime = proto3;
SimpleFileChunk.typeName = "aiserver.v1.SimpleFileChunk";
SimpleFileChunk.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: SimplestRange
        },
        {
            no: 3,
            name: "chunk_hash",
            kind: "scalar",
            T: 9
        }
    ]);
var CmdKDebugInfo$Runtime = (()=>class _CmdKDebugInfo extends Message {
        constructor(data){
            super();
            this.remoteUrl = "";
            this.commitId = "";
            this.gitPatch = "";
            this.unsavedFiles = [];
            this.unixTimestampMs = 0;
            this.openEditors = [];
            this.fileDiffHistories = [];
            this.branchName = "";
            this.branchNotes = "";
            this.branchNotesRich = "";
            this.globalNotes = "";
            this.pastThoughts = [];
            this.baseBranchName = "";
            this.baseBranchCommitId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CmdKDebugInfo().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CmdKDebugInfo().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CmdKDebugInfo().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CmdKDebugInfo, a, b2);
        }
    })();
var CmdKDebugInfo = CmdKDebugInfo$Runtime;
CmdKDebugInfo.runtime = proto3;
CmdKDebugInfo.typeName = "aiserver.v1.CmdKDebugInfo";
CmdKDebugInfo.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "remote_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "commit_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "git_patch",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "unsaved_files",
            kind: "message",
            T: CmdKDebugInfo_UnsavedFiles,
            repeated: true
        },
        {
            no: 5,
            name: "unix_timestamp_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 6,
            name: "open_editors",
            kind: "message",
            T: CmdKDebugInfo_OpenEditor,
            repeated: true
        },
        {
            no: 7,
            name: "file_diff_histories",
            kind: "message",
            T: CmdKDebugInfo_CppFileDiffHistory,
            repeated: true
        },
        {
            no: 8,
            name: "branch_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "branch_notes",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "branch_notes_rich",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "global_notes",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "past_thoughts",
            kind: "message",
            T: CmdKDebugInfo_PastThought,
            repeated: true
        },
        {
            no: 13,
            name: "base_branch_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 14,
            name: "base_branch_commit_id",
            kind: "scalar",
            T: 9
        }
    ]);
var CmdKDebugInfo_UnsavedFiles$Runtime = (()=>class _CmdKDebugInfo_UnsavedFiles extends Message {
        constructor(data){
            super();
            this.relativeWorkspacePath = "";
            this.contents = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CmdKDebugInfo_UnsavedFiles().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CmdKDebugInfo_UnsavedFiles().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CmdKDebugInfo_UnsavedFiles().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CmdKDebugInfo_UnsavedFiles, a, b2);
        }
    })();
var CmdKDebugInfo_UnsavedFiles = CmdKDebugInfo_UnsavedFiles$Runtime;
CmdKDebugInfo_UnsavedFiles.runtime = proto3;
CmdKDebugInfo_UnsavedFiles.typeName = "aiserver.v1.CmdKDebugInfo.UnsavedFiles";
CmdKDebugInfo_UnsavedFiles.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "contents",
            kind: "scalar",
            T: 9
        }
    ]);
var CmdKDebugInfo_OpenEditor$Runtime = (()=>class _CmdKDebugInfo_OpenEditor extends Message {
        constructor(data){
            super();
            this.relativeWorkspacePath = "";
            this.editorGroupIndex = 0;
            this.editorGroupId = 0;
            this.isActive = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CmdKDebugInfo_OpenEditor().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CmdKDebugInfo_OpenEditor().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CmdKDebugInfo_OpenEditor().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CmdKDebugInfo_OpenEditor, a, b2);
        }
    })();
var CmdKDebugInfo_OpenEditor = CmdKDebugInfo_OpenEditor$Runtime;
CmdKDebugInfo_OpenEditor.runtime = proto3;
CmdKDebugInfo_OpenEditor.typeName = "aiserver.v1.CmdKDebugInfo.OpenEditor";
CmdKDebugInfo_OpenEditor.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "editor_group_index",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "editor_group_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "is_active",
            kind: "scalar",
            T: 8
        }
    ]);
var CmdKDebugInfo_CppFileDiffHistory$Runtime = (()=>class _CmdKDebugInfo_CppFileDiffHistory extends Message {
        constructor(data){
            super();
            this.fileName = "";
            this.diffHistory = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CmdKDebugInfo_CppFileDiffHistory().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CmdKDebugInfo_CppFileDiffHistory().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CmdKDebugInfo_CppFileDiffHistory().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CmdKDebugInfo_CppFileDiffHistory, a, b2);
        }
    })();
var CmdKDebugInfo_CppFileDiffHistory = CmdKDebugInfo_CppFileDiffHistory$Runtime;
CmdKDebugInfo_CppFileDiffHistory.runtime = proto3;
CmdKDebugInfo_CppFileDiffHistory.typeName = "aiserver.v1.CmdKDebugInfo.CppFileDiffHistory";
CmdKDebugInfo_CppFileDiffHistory.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "file_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "diff_history",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var CmdKDebugInfo_PastThought$Runtime = (()=>class _CmdKDebugInfo_PastThought extends Message {
        constructor(data){
            super();
            this.text = "";
            this.timeInUnixSeconds = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CmdKDebugInfo_PastThought().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CmdKDebugInfo_PastThought().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CmdKDebugInfo_PastThought().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CmdKDebugInfo_PastThought, a, b2);
        }
    })();
var CmdKDebugInfo_PastThought = CmdKDebugInfo_PastThought$Runtime;
CmdKDebugInfo_PastThought.runtime = proto3;
CmdKDebugInfo_PastThought.typeName = "aiserver.v1.CmdKDebugInfo.PastThought";
CmdKDebugInfo_PastThought.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "time_in_unix_seconds",
            kind: "scalar",
            T: 1
        }
    ]);
var LineRange$Runtime = (()=>class _LineRange extends Message {
        constructor(data){
            super();
            this.startLineNumber = 0;
            this.endLineNumberInclusive = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _LineRange().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _LineRange().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _LineRange().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_LineRange, a, b2);
        }
    })();
var LineRange = LineRange$Runtime;
LineRange.runtime = proto3;
LineRange.typeName = "aiserver.v1.LineRange";
LineRange.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "end_line_number_inclusive",
            kind: "scalar",
            T: 5
        }
    ]);
var CursorRange$Runtime = (()=>class _CursorRange extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CursorRange().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CursorRange().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CursorRange().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CursorRange, a, b2);
        }
    })();
var CursorRange = CursorRange$Runtime;
CursorRange.runtime = proto3;
CursorRange.typeName = "aiserver.v1.CursorRange";
CursorRange.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "start_position",
            kind: "message",
            T: CursorPosition
        },
        {
            no: 2,
            name: "end_position",
            kind: "message",
            T: CursorPosition
        }
    ]);
var DetailedLine$Runtime = (()=>class _DetailedLine extends Message {
        constructor(data){
            super();
            this.text = "";
            this.lineNumber = 0;
            this.isSignature = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _DetailedLine().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _DetailedLine().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _DetailedLine().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_DetailedLine, a, b2);
        }
    })();
var DetailedLine = DetailedLine$Runtime;
DetailedLine.runtime = proto3;
DetailedLine.typeName = "aiserver.v1.DetailedLine";
DetailedLine.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "line_number",
            kind: "scalar",
            T: 2
        },
        {
            no: 3,
            name: "is_signature",
            kind: "scalar",
            T: 8
        }
    ]);
var CodeBlock$Runtime = (()=>class _CodeBlock extends Message {
        constructor(data){
            super();
            this.relativeWorkspacePath = "";
            this.contents = "";
            this.detailedLines = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CodeBlock().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CodeBlock().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CodeBlock().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CodeBlock, a, b2);
        }
    })();
var CodeBlock = CodeBlock$Runtime;
CodeBlock.runtime = proto3;
CodeBlock.typeName = "aiserver.v1.CodeBlock";
CodeBlock.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_contents",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "file_contents_length",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 3,
            name: "range",
            kind: "message",
            T: CursorRange
        },
        {
            no: 4,
            name: "contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "signatures",
            kind: "message",
            T: CodeBlock_Signatures
        },
        {
            no: 6,
            name: "override_contents",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "original_contents",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "detailed_lines",
            kind: "message",
            T: DetailedLine,
            repeated: true
        },
        {
            no: 10,
            name: "file_git_context",
            kind: "message",
            T: FileGit
        }
    ]);
var CodeBlock_Signatures$Runtime = (()=>class _CodeBlock_Signatures extends Message {
        constructor(data){
            super();
            this.ranges = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CodeBlock_Signatures().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CodeBlock_Signatures().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CodeBlock_Signatures().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CodeBlock_Signatures, a, b2);
        }
    })();
var CodeBlock_Signatures = CodeBlock_Signatures$Runtime;
CodeBlock_Signatures.runtime = proto3;
CodeBlock_Signatures.typeName = "aiserver.v1.CodeBlock.Signatures";
CodeBlock_Signatures.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "ranges",
            kind: "message",
            T: CursorRange,
            repeated: true
        }
    ]);
var GitCommit$Runtime = (()=>class _GitCommit extends Message {
        constructor(data){
            super();
            this.commit = "";
            this.author = "";
            this.date = "";
            this.message = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GitCommit().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GitCommit().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GitCommit().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GitCommit, a, b2);
        }
    })();
var GitCommit = GitCommit$Runtime;
GitCommit.runtime = proto3;
GitCommit.typeName = "aiserver.v1.GitCommit";
GitCommit.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "commit",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "author",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "date",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);
var FileGit$Runtime = (()=>class _FileGit extends Message {
        constructor(data){
            super();
            this.commits = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FileGit().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FileGit().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FileGit().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FileGit, a, b2);
        }
    })();
var FileGit = FileGit$Runtime;
FileGit.runtime = proto3;
FileGit.typeName = "aiserver.v1.FileGit";
FileGit.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "commits",
            kind: "message",
            T: GitCommit,
            repeated: true
        }
    ]);
var File2$Runtime = (()=>class _File extends Message {
        constructor(data){
            super();
            this.relativeWorkspacePath = "";
            this.contents = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _File().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _File().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _File().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_File, a, b2);
        }
    })();
var File2 = File2$Runtime;
File2.runtime = proto3;
File2.typeName = "aiserver.v1.File";
File2.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "file_git_context",
            kind: "message",
            T: FileGit
        }
    ]);
var Diagnostic2$Runtime = (()=>class _Diagnostic extends Message {
        constructor(data){
            super();
            this.message = "";
            this.severity = Diagnostic_DiagnosticSeverity.UNSPECIFIED;
            this.relatedInformation = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _Diagnostic().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _Diagnostic().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _Diagnostic().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_Diagnostic, a, b2);
        }
    })();
var Diagnostic2 = Diagnostic2$Runtime;
Diagnostic2.runtime = proto3;
Diagnostic2.typeName = "aiserver.v1.Diagnostic";
Diagnostic2.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: CursorRange
        },
        {
            no: 3,
            name: "severity",
            kind: "enum",
            T: proto3.getEnumType(Diagnostic_DiagnosticSeverity)
        },
        {
            no: 4,
            name: "related_information",
            kind: "message",
            T: Diagnostic_RelatedInformation,
            repeated: true
        }
    ]);
(function(Diagnostic_DiagnosticSeverity2) {
    Diagnostic_DiagnosticSeverity2[Diagnostic_DiagnosticSeverity2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    Diagnostic_DiagnosticSeverity2[Diagnostic_DiagnosticSeverity2["ERROR"] = 1] = "ERROR";
    Diagnostic_DiagnosticSeverity2[Diagnostic_DiagnosticSeverity2["WARNING"] = 2] = "WARNING";
    Diagnostic_DiagnosticSeverity2[Diagnostic_DiagnosticSeverity2["INFORMATION"] = 3] = "INFORMATION";
    Diagnostic_DiagnosticSeverity2[Diagnostic_DiagnosticSeverity2["HINT"] = 4] = "HINT";
})(Diagnostic_DiagnosticSeverity || (Diagnostic_DiagnosticSeverity = {}));
proto3.util.setEnumType(Diagnostic_DiagnosticSeverity, "aiserver.v1.Diagnostic.DiagnosticSeverity", [
    {
        no: 0,
        name: "DIAGNOSTIC_SEVERITY_UNSPECIFIED"
    },
    {
        no: 1,
        name: "DIAGNOSTIC_SEVERITY_ERROR"
    },
    {
        no: 2,
        name: "DIAGNOSTIC_SEVERITY_WARNING"
    },
    {
        no: 3,
        name: "DIAGNOSTIC_SEVERITY_INFORMATION"
    },
    {
        no: 4,
        name: "DIAGNOSTIC_SEVERITY_HINT"
    }
]);
var Diagnostic_RelatedInformation$Runtime = (()=>class _Diagnostic_RelatedInformation extends Message {
        constructor(data){
            super();
            this.message = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _Diagnostic_RelatedInformation().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _Diagnostic_RelatedInformation().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _Diagnostic_RelatedInformation().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_Diagnostic_RelatedInformation, a, b2);
        }
    })();
var Diagnostic_RelatedInformation = Diagnostic_RelatedInformation$Runtime;
Diagnostic_RelatedInformation.runtime = proto3;
Diagnostic_RelatedInformation.typeName = "aiserver.v1.Diagnostic.RelatedInformation";
Diagnostic_RelatedInformation.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: CursorRange
        }
    ]);
var Lint$Runtime = (()=>class _Lint extends Message {
        constructor(data){
            super();
            this.message = "";
            this.severity = LintSeverity.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _Lint().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _Lint().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _Lint().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_Lint, a, b2);
        }
    })();
var Lint = Lint$Runtime;
Lint.runtime = proto3;
Lint.typeName = "aiserver.v1.Lint";
Lint.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: SimpleRange
        },
        {
            no: 3,
            name: "severity",
            kind: "enum",
            T: proto3.getEnumType(LintSeverity)
        }
    ]);
var BM25Chunk$Runtime = (()=>class _BM25Chunk extends Message {
        constructor(data){
            super();
            this.content = "";
            this.score = 0;
            this.relativePath = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _BM25Chunk().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _BM25Chunk().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _BM25Chunk().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_BM25Chunk, a, b2);
        }
    })();
var BM25Chunk = BM25Chunk$Runtime;
BM25Chunk.runtime = proto3;
BM25Chunk.typeName = "aiserver.v1.BM25Chunk";
BM25Chunk.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: SimplestRange
        },
        {
            no: 3,
            name: "score",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "relative_path",
            kind: "scalar",
            T: 9
        }
    ]);
var CurrentFileInfo$Runtime = (()=>class _CurrentFileInfo extends Message {
        constructor(data){
            super();
            this.relativeWorkspacePath = "";
            this.contents = "";
            this.relyOnFilesync = false;
            this.cells = [];
            this.topChunks = [];
            this.contentsStartAtLine = 0;
            this.dataframes = [];
            this.totalNumberOfLines = 0;
            this.languageId = "";
            this.diagnostics = [];
            this.cellStartLines = [];
            this.workspaceRootPath = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CurrentFileInfo().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CurrentFileInfo().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CurrentFileInfo().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CurrentFileInfo, a, b2);
        }
    })();
var CurrentFileInfo = CurrentFileInfo$Runtime;
CurrentFileInfo.runtime = proto3;
CurrentFileInfo.typeName = "aiserver.v1.CurrentFileInfo";
CurrentFileInfo.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 18,
            name: "rely_on_filesync",
            kind: "scalar",
            T: 8
        },
        {
            no: 17,
            name: "sha_256_hash",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 16,
            name: "cells",
            kind: "message",
            T: CurrentFileInfo_NotebookCell,
            repeated: true
        },
        {
            no: 10,
            name: "top_chunks",
            kind: "message",
            T: BM25Chunk,
            repeated: true
        },
        {
            no: 9,
            name: "contents_start_at_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "cursor_position",
            kind: "message",
            T: CursorPosition
        },
        {
            no: 4,
            name: "dataframes",
            kind: "message",
            T: DataframeInfo,
            repeated: true
        },
        {
            no: 8,
            name: "total_number_of_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "language_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "selection",
            kind: "message",
            T: CursorRange
        },
        {
            no: 11,
            name: "alternative_version_id",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 7,
            name: "diagnostics",
            kind: "message",
            T: Diagnostic2,
            repeated: true
        },
        {
            no: 14,
            name: "file_version",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 15,
            name: "cell_start_lines",
            kind: "scalar",
            T: 5,
            repeated: true
        },
        {
            no: 19,
            name: "workspace_root_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 20,
            name: "line_ending",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var CurrentFileInfo_NotebookCell$Runtime = (()=>class _CurrentFileInfo_NotebookCell extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CurrentFileInfo_NotebookCell().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CurrentFileInfo_NotebookCell().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CurrentFileInfo_NotebookCell().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CurrentFileInfo_NotebookCell, a, b2);
        }
    })();
var CurrentFileInfo_NotebookCell = CurrentFileInfo_NotebookCell$Runtime;
CurrentFileInfo_NotebookCell.runtime = proto3;
CurrentFileInfo_NotebookCell.typeName = "aiserver.v1.CurrentFileInfo.NotebookCell";
CurrentFileInfo_NotebookCell.fields = proto3.util.newFieldList(()=>[]);
var AzureState$Runtime = (()=>class _AzureState extends Message {
        constructor(data){
            super();
            this.apiKey = "";
            this.baseUrl = "";
            this.deployment = "";
            this.useAzure = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AzureState().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AzureState().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AzureState().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AzureState, a, b2);
        }
    })();
var AzureState = AzureState$Runtime;
AzureState.runtime = proto3;
AzureState.typeName = "aiserver.v1.AzureState";
AzureState.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "api_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "base_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "deployment",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "use_azure",
            kind: "scalar",
            T: 8
        }
    ]);
var BedrockState$Runtime = (()=>class _BedrockState extends Message {
        constructor(data){
            super();
            this.accessKey = "";
            this.secretKey = "";
            this.region = "";
            this.useBedrock = false;
            this.sessionToken = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _BedrockState().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _BedrockState().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _BedrockState().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_BedrockState, a, b2);
        }
    })();
var BedrockState = BedrockState$Runtime;
BedrockState.runtime = proto3;
BedrockState.typeName = "aiserver.v1.BedrockState";
BedrockState.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "access_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "secret_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "region",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "use_bedrock",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "session_token",
            kind: "scalar",
            T: 9
        }
    ]);
var ModelDetails$Runtime = (()=>class _ModelDetails extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ModelDetails().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ModelDetails().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ModelDetails().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ModelDetails, a, b2);
        }
    })();
var ModelDetails = ModelDetails$Runtime;
ModelDetails.runtime = proto3;
ModelDetails.typeName = "aiserver.v1.ModelDetails";
ModelDetails.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "model_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "api_key",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "enable_ghost_mode",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 4,
            name: "azure_state",
            kind: "message",
            T: AzureState,
            opt: true
        },
        {
            no: 5,
            name: "enable_slow_pool",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 6,
            name: "openai_api_base_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "bedrock_state",
            kind: "message",
            T: BedrockState,
            opt: true
        },
        {
            no: 8,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
var CloudAgentModelSelection$Runtime = (()=>class _CloudAgentModelSelection extends Message {
        constructor(data){
            super();
            this.modelId = "";
            this.parameters = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CloudAgentModelSelection().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CloudAgentModelSelection().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CloudAgentModelSelection().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CloudAgentModelSelection, a, b2);
        }
    })();
var CloudAgentModelSelection = CloudAgentModelSelection$Runtime;
CloudAgentModelSelection.runtime = proto3;
CloudAgentModelSelection.typeName = "aiserver.v1.CloudAgentModelSelection";
CloudAgentModelSelection.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "model_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "parameters",
            kind: "message",
            T: CloudAgentModelSelection_ParameterValue,
            repeated: true
        },
        {
            no: 3,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
var CloudAgentModelSelection_ParameterValue$Runtime = (()=>class _CloudAgentModelSelection_ParameterValue extends Message {
        constructor(data){
            super();
            this.id = "";
            this.value = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CloudAgentModelSelection_ParameterValue().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CloudAgentModelSelection_ParameterValue().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CloudAgentModelSelection_ParameterValue().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CloudAgentModelSelection_ParameterValue, a, b2);
        }
    })();
var CloudAgentModelSelection_ParameterValue = CloudAgentModelSelection_ParameterValue$Runtime;
CloudAgentModelSelection_ParameterValue.runtime = proto3;
CloudAgentModelSelection_ParameterValue.typeName = "aiserver.v1.CloudAgentModelSelection.ParameterValue";
CloudAgentModelSelection_ParameterValue.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ]);
var ModelInfo$Runtime = (()=>class _ModelInfo extends Message {
        constructor(data){
            super();
            this.modelName = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ModelInfo().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ModelInfo().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ModelInfo().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ModelInfo, a, b2);
        }
    })();
var ModelInfo = ModelInfo$Runtime;
ModelInfo.runtime = proto3;
ModelInfo.typeName = "aiserver.v1.ModelInfo";
ModelInfo.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "model_name",
            kind: "scalar",
            T: 9
        }
    ]);
var DataframeInfo$Runtime = (()=>class _DataframeInfo extends Message {
        constructor(data){
            super();
            this.name = "";
            this.shape = "";
            this.dataDimensionality = 0;
            this.columns = [];
            this.rowCount = 0;
            this.indexColumn = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _DataframeInfo().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _DataframeInfo().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _DataframeInfo().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_DataframeInfo, a, b2);
        }
    })();
var DataframeInfo = DataframeInfo$Runtime;
DataframeInfo.runtime = proto3;
DataframeInfo.typeName = "aiserver.v1.DataframeInfo";
DataframeInfo.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "shape",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "data_dimensionality",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "columns",
            kind: "message",
            T: DataframeInfo_Column,
            repeated: true
        },
        {
            no: 7,
            name: "row_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 8,
            name: "index_column",
            kind: "scalar",
            T: 9
        }
    ]);
var DataframeInfo_Column$Runtime = (()=>class _DataframeInfo_Column extends Message {
        constructor(data){
            super();
            this.key = "";
            this.type = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _DataframeInfo_Column().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _DataframeInfo_Column().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _DataframeInfo_Column().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_DataframeInfo_Column, a, b2);
        }
    })();
var DataframeInfo_Column = DataframeInfo_Column$Runtime;
DataframeInfo_Column.runtime = proto3;
DataframeInfo_Column.typeName = "aiserver.v1.DataframeInfo.Column";
DataframeInfo_Column.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "type",
            kind: "scalar",
            T: 9
        }
    ]);
var LinterError$Runtime = (()=>class _LinterError extends Message {
        constructor(data){
            super();
            this.message = "";
            this.relatedInformation = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _LinterError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _LinterError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _LinterError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_LinterError, a, b2);
        }
    })();
var LinterError = LinterError$Runtime;
LinterError.runtime = proto3;
LinterError.typeName = "aiserver.v1.LinterError";
LinterError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: CursorRange
        },
        {
            no: 3,
            name: "source",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "related_information",
            kind: "message",
            T: Diagnostic_RelatedInformation,
            repeated: true
        },
        {
            no: 5,
            name: "severity",
            kind: "enum",
            T: proto3.getEnumType(Diagnostic_DiagnosticSeverity),
            opt: true
        },
        {
            no: 6,
            name: "is_stale",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
var LinterErrors$Runtime = (()=>class _LinterErrors extends Message {
        constructor(data){
            super();
            this.relativeWorkspacePath = "";
            this.errors = [];
            this.fileContents = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _LinterErrors().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _LinterErrors().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _LinterErrors().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_LinterErrors, a, b2);
        }
    })();
var LinterErrors = LinterErrors$Runtime;
LinterErrors.runtime = proto3;
LinterErrors.typeName = "aiserver.v1.LinterErrors";
LinterErrors.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "errors",
            kind: "message",
            T: LinterError,
            repeated: true
        },
        {
            no: 3,
            name: "file_contents",
            kind: "scalar",
            T: 9
        }
    ]);
var LinterErrorsWithoutFileContents$Runtime = (()=>class _LinterErrorsWithoutFileContents extends Message {
        constructor(data){
            super();
            this.relativeWorkspacePath = "";
            this.errors = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _LinterErrorsWithoutFileContents().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _LinterErrorsWithoutFileContents().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _LinterErrorsWithoutFileContents().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_LinterErrorsWithoutFileContents, a, b2);
        }
    })();
var LinterErrorsWithoutFileContents = LinterErrorsWithoutFileContents$Runtime;
LinterErrorsWithoutFileContents.runtime = proto3;
LinterErrorsWithoutFileContents.typeName = "aiserver.v1.LinterErrorsWithoutFileContents";
LinterErrorsWithoutFileContents.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "errors",
            kind: "message",
            T: LinterError,
            repeated: true
        }
    ]);
var CursorRule2$Runtime = (()=>class _CursorRule extends Message {
        constructor(data){
            super();
            this.name = "";
            this.description = "";
            this.environments = [];
            this.disabledEnvironments = [];
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
var CursorRule2 = CursorRule2$Runtime;
CursorRule2.runtime = proto3;
CursorRule2.typeName = "aiserver.v1.CursorRule";
CursorRule2.fields = proto3.util.newFieldList(()=>[
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
            name: "body",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "is_from_glob",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 5,
            name: "always_apply",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 6,
            name: "attach_to_background_agents",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 7,
            name: "full_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "environments",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 9,
            name: "disabled_environments",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 10,
            name: "plugin",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "marketplace",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var ExplicitContext$Runtime = (()=>class _ExplicitContext extends Message {
        constructor(data){
            super();
            this.context = "";
            this.rules = [];
            this.mcpInstructions = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ExplicitContext().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ExplicitContext().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ExplicitContext().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ExplicitContext, a, b2);
        }
    })();
var ExplicitContext = ExplicitContext$Runtime;
ExplicitContext.runtime = proto3;
ExplicitContext.typeName = "aiserver.v1.ExplicitContext";
ExplicitContext.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "context",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "repo_context",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "rules",
            kind: "message",
            T: CursorRule2,
            repeated: true
        },
        {
            no: 4,
            name: "mode_specific_context",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "mcp_instructions",
            kind: "message",
            T: MCPInstructions,
            repeated: true
        }
    ]);
var MCPInstructions$Runtime = (()=>class _MCPInstructions extends Message {
        constructor(data){
            super();
            this.serverName = "";
            this.serverIdentifier = "";
            this.instructions = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _MCPInstructions().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _MCPInstructions().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _MCPInstructions().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_MCPInstructions, a, b2);
        }
    })();
var MCPInstructions = MCPInstructions$Runtime;
MCPInstructions.runtime = proto3;
MCPInstructions.typeName = "aiserver.v1.MCPInstructions";
MCPInstructions.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "server_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "server_identifier",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "instructions",
            kind: "scalar",
            T: 9
        }
    ]);
var PureMessage$Runtime = (()=>class _PureMessage extends Message {
        constructor(data){
            super();
            this.messageType = PureMessage_MessageType.UNSPECIFIED;
            this.content = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PureMessage().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PureMessage().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PureMessage().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PureMessage, a, b2);
        }
    })();
var PureMessage = PureMessage$Runtime;
PureMessage.runtime = proto3;
PureMessage.typeName = "aiserver.v1.PureMessage";
PureMessage.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "message_type",
            kind: "enum",
            T: proto3.getEnumType(PureMessage_MessageType)
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]);
(function(PureMessage_MessageType2) {
    PureMessage_MessageType2[PureMessage_MessageType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    PureMessage_MessageType2[PureMessage_MessageType2["SYSTEM"] = 1] = "SYSTEM";
    PureMessage_MessageType2[PureMessage_MessageType2["USER"] = 2] = "USER";
    PureMessage_MessageType2[PureMessage_MessageType2["ASSISTANT"] = 3] = "ASSISTANT";
})(PureMessage_MessageType || (PureMessage_MessageType = {}));
proto3.util.setEnumType(PureMessage_MessageType, "aiserver.v1.PureMessage.MessageType", [
    {
        no: 0,
        name: "MESSAGE_TYPE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "MESSAGE_TYPE_SYSTEM"
    },
    {
        no: 2,
        name: "MESSAGE_TYPE_USER"
    },
    {
        no: 3,
        name: "MESSAGE_TYPE_ASSISTANT"
    }
]);
var DocumentSymbol$Runtime = (()=>class _DocumentSymbol extends Message {
        constructor(data){
            super();
            this.name = "";
            this.detail = "";
            this.kind = DocumentSymbol_SymbolKind.UNSPECIFIED;
            this.containerName = "";
            this.children = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _DocumentSymbol().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _DocumentSymbol().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _DocumentSymbol().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_DocumentSymbol, a, b2);
        }
    })();
var DocumentSymbol = DocumentSymbol$Runtime;
DocumentSymbol.runtime = proto3;
DocumentSymbol.typeName = "aiserver.v1.DocumentSymbol";
DocumentSymbol.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "detail",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "kind",
            kind: "enum",
            T: proto3.getEnumType(DocumentSymbol_SymbolKind)
        },
        {
            no: 5,
            name: "container_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "range",
            kind: "message",
            T: DocumentSymbol_Range
        },
        {
            no: 7,
            name: "selection_range",
            kind: "message",
            T: DocumentSymbol_Range
        },
        {
            no: 8,
            name: "children",
            kind: "message",
            T: DocumentSymbol,
            repeated: true
        }
    ]);
(function(DocumentSymbol_SymbolKind2) {
    DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["FILE"] = 1] = "FILE";
    DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["MODULE"] = 2] = "MODULE";
    DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["NAMESPACE"] = 3] = "NAMESPACE";
    DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["PACKAGE"] = 4] = "PACKAGE";
    DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["CLASS"] = 5] = "CLASS";
    DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["METHOD"] = 6] = "METHOD";
    DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["PROPERTY"] = 7] = "PROPERTY";
    DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["FIELD"] = 8] = "FIELD";
    DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["CONSTRUCTOR"] = 9] = "CONSTRUCTOR";
    DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["ENUM"] = 10] = "ENUM";
    DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["INTERFACE"] = 11] = "INTERFACE";
    DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["FUNCTION"] = 12] = "FUNCTION";
    DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["VARIABLE"] = 13] = "VARIABLE";
    DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["CONSTANT"] = 14] = "CONSTANT";
    DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["STRING"] = 15] = "STRING";
    DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["NUMBER"] = 16] = "NUMBER";
    DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["BOOLEAN"] = 17] = "BOOLEAN";
    DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["ARRAY"] = 18] = "ARRAY";
    DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["OBJECT"] = 19] = "OBJECT";
    DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["KEY"] = 20] = "KEY";
    DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["NULL"] = 21] = "NULL";
    DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["ENUM_MEMBER"] = 22] = "ENUM_MEMBER";
    DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["STRUCT"] = 23] = "STRUCT";
    DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["EVENT"] = 24] = "EVENT";
    DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["OPERATOR"] = 25] = "OPERATOR";
    DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["TYPE_PARAMETER"] = 26] = "TYPE_PARAMETER";
})(DocumentSymbol_SymbolKind || (DocumentSymbol_SymbolKind = {}));
proto3.util.setEnumType(DocumentSymbol_SymbolKind, "aiserver.v1.DocumentSymbol.SymbolKind", [
    {
        no: 0,
        name: "SYMBOL_KIND_UNSPECIFIED"
    },
    {
        no: 1,
        name: "SYMBOL_KIND_FILE"
    },
    {
        no: 2,
        name: "SYMBOL_KIND_MODULE"
    },
    {
        no: 3,
        name: "SYMBOL_KIND_NAMESPACE"
    },
    {
        no: 4,
        name: "SYMBOL_KIND_PACKAGE"
    },
    {
        no: 5,
        name: "SYMBOL_KIND_CLASS"
    },
    {
        no: 6,
        name: "SYMBOL_KIND_METHOD"
    },
    {
        no: 7,
        name: "SYMBOL_KIND_PROPERTY"
    },
    {
        no: 8,
        name: "SYMBOL_KIND_FIELD"
    },
    {
        no: 9,
        name: "SYMBOL_KIND_CONSTRUCTOR"
    },
    {
        no: 10,
        name: "SYMBOL_KIND_ENUM"
    },
    {
        no: 11,
        name: "SYMBOL_KIND_INTERFACE"
    },
    {
        no: 12,
        name: "SYMBOL_KIND_FUNCTION"
    },
    {
        no: 13,
        name: "SYMBOL_KIND_VARIABLE"
    },
    {
        no: 14,
        name: "SYMBOL_KIND_CONSTANT"
    },
    {
        no: 15,
        name: "SYMBOL_KIND_STRING"
    },
    {
        no: 16,
        name: "SYMBOL_KIND_NUMBER"
    },
    {
        no: 17,
        name: "SYMBOL_KIND_BOOLEAN"
    },
    {
        no: 18,
        name: "SYMBOL_KIND_ARRAY"
    },
    {
        no: 19,
        name: "SYMBOL_KIND_OBJECT"
    },
    {
        no: 20,
        name: "SYMBOL_KIND_KEY"
    },
    {
        no: 21,
        name: "SYMBOL_KIND_NULL"
    },
    {
        no: 22,
        name: "SYMBOL_KIND_ENUM_MEMBER"
    },
    {
        no: 23,
        name: "SYMBOL_KIND_STRUCT"
    },
    {
        no: 24,
        name: "SYMBOL_KIND_EVENT"
    },
    {
        no: 25,
        name: "SYMBOL_KIND_OPERATOR"
    },
    {
        no: 26,
        name: "SYMBOL_KIND_TYPE_PARAMETER"
    }
]);
var DocumentSymbol_Range$Runtime = (()=>class _DocumentSymbol_Range extends Message {
        constructor(data){
            super();
            this.startLineNumber = 0;
            this.startColumn = 0;
            this.endLineNumber = 0;
            this.endColumn = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _DocumentSymbol_Range().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _DocumentSymbol_Range().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _DocumentSymbol_Range().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_DocumentSymbol_Range, a, b2);
        }
    })();
var DocumentSymbol_Range = DocumentSymbol_Range$Runtime;
DocumentSymbol_Range.runtime = proto3;
DocumentSymbol_Range.typeName = "aiserver.v1.DocumentSymbol.Range";
DocumentSymbol_Range.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "start_column",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "end_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "end_column",
            kind: "scalar",
            T: 5
        }
    ]);
var HoverDetails$Runtime = (()=>class _HoverDetails extends Message {
        constructor(data){
            super();
            this.codeDetails = "";
            this.markdownBlocks = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _HoverDetails().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _HoverDetails().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _HoverDetails().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_HoverDetails, a, b2);
        }
    })();
var HoverDetails = HoverDetails$Runtime;
HoverDetails.runtime = proto3;
HoverDetails.typeName = "aiserver.v1.HoverDetails";
HoverDetails.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "code_details",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "markdown_blocks",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var UriComponents$Runtime = (()=>class _UriComponents extends Message {
        constructor(data){
            super();
            this.scheme = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UriComponents().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UriComponents().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UriComponents().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UriComponents, a, b2);
        }
    })();
var UriComponents = UriComponents$Runtime;
UriComponents.runtime = proto3;
UriComponents.typeName = "aiserver.v1.UriComponents";
UriComponents.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "scheme",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "authority",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "query",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "fragment",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var DocumentSymbolWithText$Runtime = (()=>class _DocumentSymbolWithText extends Message {
        constructor(data){
            super();
            this.relativeWorkspacePath = "";
            this.textInSymbolRange = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _DocumentSymbolWithText().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _DocumentSymbolWithText().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _DocumentSymbolWithText().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_DocumentSymbolWithText, a, b2);
        }
    })();
var DocumentSymbolWithText = DocumentSymbolWithText$Runtime;
DocumentSymbolWithText.runtime = proto3;
DocumentSymbolWithText.typeName = "aiserver.v1.DocumentSymbolWithText";
DocumentSymbolWithText.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "symbol",
            kind: "message",
            T: DocumentSymbol
        },
        {
            no: 2,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "text_in_symbol_range",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "uri_components",
            kind: "message",
            T: UriComponents
        }
    ]);
var ErrorDetails$Runtime = (()=>class _ErrorDetails extends Message {
        constructor(data){
            super();
            this.error = ErrorDetails_Error.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ErrorDetails().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ErrorDetails().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ErrorDetails().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ErrorDetails, a, b2);
        }
    })();
var ErrorDetails = ErrorDetails$Runtime;
ErrorDetails.runtime = proto3;
ErrorDetails.typeName = "aiserver.v1.ErrorDetails";
ErrorDetails.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "enum",
            T: proto3.getEnumType(ErrorDetails_Error)
        },
        {
            no: 2,
            name: "details",
            kind: "message",
            T: CustomErrorDetails
        },
        {
            no: 3,
            name: "is_expected",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
(function(ErrorDetails_Error2) {
    ErrorDetails_Error2[ErrorDetails_Error2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    ErrorDetails_Error2[ErrorDetails_Error2["BAD_API_KEY"] = 1] = "BAD_API_KEY";
    ErrorDetails_Error2[ErrorDetails_Error2["BAD_USER_API_KEY"] = 42] = "BAD_USER_API_KEY";
    ErrorDetails_Error2[ErrorDetails_Error2["NOT_LOGGED_IN"] = 2] = "NOT_LOGGED_IN";
    ErrorDetails_Error2[ErrorDetails_Error2["INVALID_AUTH_ID"] = 3] = "INVALID_AUTH_ID";
    ErrorDetails_Error2[ErrorDetails_Error2["NOT_HIGH_ENOUGH_PERMISSIONS"] = 4] = "NOT_HIGH_ENOUGH_PERMISSIONS";
    ErrorDetails_Error2[ErrorDetails_Error2["AGENT_REQUIRES_LOGIN"] = 18] = "AGENT_REQUIRES_LOGIN";
    ErrorDetails_Error2[ErrorDetails_Error2["BAD_MODEL_NAME"] = 5] = "BAD_MODEL_NAME";
    ErrorDetails_Error2[ErrorDetails_Error2["NOT_FOUND"] = 39] = "NOT_FOUND";
    ErrorDetails_Error2[ErrorDetails_Error2["DEPRECATED"] = 40] = "DEPRECATED";
    ErrorDetails_Error2[ErrorDetails_Error2["USER_NOT_FOUND"] = 6] = "USER_NOT_FOUND";
    ErrorDetails_Error2[ErrorDetails_Error2["FREE_USER_RATE_LIMIT_EXCEEDED"] = 7] = "FREE_USER_RATE_LIMIT_EXCEEDED";
    ErrorDetails_Error2[ErrorDetails_Error2["PRO_USER_RATE_LIMIT_EXCEEDED"] = 8] = "PRO_USER_RATE_LIMIT_EXCEEDED";
    ErrorDetails_Error2[ErrorDetails_Error2["FREE_USER_USAGE_LIMIT"] = 9] = "FREE_USER_USAGE_LIMIT";
    ErrorDetails_Error2[ErrorDetails_Error2["PRO_USER_USAGE_LIMIT"] = 10] = "PRO_USER_USAGE_LIMIT";
    ErrorDetails_Error2[ErrorDetails_Error2["RESOURCE_EXHAUSTED"] = 41] = "RESOURCE_EXHAUSTED";
    ErrorDetails_Error2[ErrorDetails_Error2["AUTH_TOKEN_NOT_FOUND"] = 11] = "AUTH_TOKEN_NOT_FOUND";
    ErrorDetails_Error2[ErrorDetails_Error2["AUTH_TOKEN_EXPIRED"] = 12] = "AUTH_TOKEN_EXPIRED";
    ErrorDetails_Error2[ErrorDetails_Error2["OPENAI"] = 13] = "OPENAI";
    ErrorDetails_Error2[ErrorDetails_Error2["OPENAI_RATE_LIMIT_EXCEEDED"] = 14] = "OPENAI_RATE_LIMIT_EXCEEDED";
    ErrorDetails_Error2[ErrorDetails_Error2["MAX_TOKENS"] = 20] = "MAX_TOKENS";
    ErrorDetails_Error2[ErrorDetails_Error2["PRO_USER_ONLY"] = 23] = "PRO_USER_ONLY";
    ErrorDetails_Error2[ErrorDetails_Error2["USER_ABORTED_REQUEST"] = 21] = "USER_ABORTED_REQUEST";
    ErrorDetails_Error2[ErrorDetails_Error2["TIMEOUT"] = 25] = "TIMEOUT";
    ErrorDetails_Error2[ErrorDetails_Error2["GENERIC_RATE_LIMIT_EXCEEDED"] = 22] = "GENERIC_RATE_LIMIT_EXCEEDED";
    ErrorDetails_Error2[ErrorDetails_Error2["GPT_4_VISION_PREVIEW_RATE_LIMIT"] = 28] = "GPT_4_VISION_PREVIEW_RATE_LIMIT";
    ErrorDetails_Error2[ErrorDetails_Error2["CUSTOM_MESSAGE"] = 29] = "CUSTOM_MESSAGE";
    ErrorDetails_Error2[ErrorDetails_Error2["OUTDATED_CLIENT"] = 30] = "OUTDATED_CLIENT";
    ErrorDetails_Error2[ErrorDetails_Error2["CLAUDE_IMAGE_TOO_LARGE"] = 31] = "CLAUDE_IMAGE_TOO_LARGE";
    ErrorDetails_Error2[ErrorDetails_Error2["FILE_NOT_FOUND"] = 33] = "FILE_NOT_FOUND";
    ErrorDetails_Error2[ErrorDetails_Error2["API_KEY_RATE_LIMIT"] = 34] = "API_KEY_RATE_LIMIT";
    ErrorDetails_Error2[ErrorDetails_Error2["DEBOUNCED"] = 35] = "DEBOUNCED";
    ErrorDetails_Error2[ErrorDetails_Error2["BAD_REQUEST"] = 36] = "BAD_REQUEST";
    ErrorDetails_Error2[ErrorDetails_Error2["REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED"] = 37] = "REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED";
    ErrorDetails_Error2[ErrorDetails_Error2["UNAUTHORIZED"] = 38] = "UNAUTHORIZED";
    ErrorDetails_Error2[ErrorDetails_Error2["CONVERSATION_TOO_LONG"] = 43] = "CONVERSATION_TOO_LONG";
    ErrorDetails_Error2[ErrorDetails_Error2["USAGE_PRICING_REQUIRED"] = 44] = "USAGE_PRICING_REQUIRED";
    ErrorDetails_Error2[ErrorDetails_Error2["USAGE_PRICING_REQUIRED_CHANGEABLE"] = 45] = "USAGE_PRICING_REQUIRED_CHANGEABLE";
    ErrorDetails_Error2[ErrorDetails_Error2["GITHUB_NO_USER_CREDENTIALS"] = 46] = "GITHUB_NO_USER_CREDENTIALS";
    ErrorDetails_Error2[ErrorDetails_Error2["GITHUB_USER_NO_ACCESS"] = 47] = "GITHUB_USER_NO_ACCESS";
    ErrorDetails_Error2[ErrorDetails_Error2["GITHUB_APP_NO_ACCESS"] = 48] = "GITHUB_APP_NO_ACCESS";
    ErrorDetails_Error2[ErrorDetails_Error2["GITHUB_MULTIPLE_OWNERS"] = 49] = "GITHUB_MULTIPLE_OWNERS";
    ErrorDetails_Error2[ErrorDetails_Error2["RATE_LIMITED"] = 50] = "RATE_LIMITED";
    ErrorDetails_Error2[ErrorDetails_Error2["RATE_LIMITED_CHANGEABLE"] = 51] = "RATE_LIMITED_CHANGEABLE";
    ErrorDetails_Error2[ErrorDetails_Error2["CUSTOM"] = 52] = "CUSTOM";
    ErrorDetails_Error2[ErrorDetails_Error2["HOOKS_BLOCKED"] = 53] = "HOOKS_BLOCKED";
    ErrorDetails_Error2[ErrorDetails_Error2["SUSPICIOUS_USAGE_BLOCKED"] = 54] = "SUSPICIOUS_USAGE_BLOCKED";
    ErrorDetails_Error2[ErrorDetails_Error2["EXTENSION_HOST_TIMEOUT"] = 55] = "EXTENSION_HOST_TIMEOUT";
    ErrorDetails_Error2[ErrorDetails_Error2["NETWORK_ERROR"] = 56] = "NETWORK_ERROR";
    ErrorDetails_Error2[ErrorDetails_Error2["PROVIDER_ERROR"] = 57] = "PROVIDER_ERROR";
    ErrorDetails_Error2[ErrorDetails_Error2["MODEL_BLOCKED"] = 58] = "MODEL_BLOCKED";
    ErrorDetails_Error2[ErrorDetails_Error2["INTERNAL"] = 59] = "INTERNAL";
    ErrorDetails_Error2[ErrorDetails_Error2["MAX_MODE_REQUIRED"] = 60] = "MAX_MODE_REQUIRED";
    ErrorDetails_Error2[ErrorDetails_Error2["MODEL_NO_LONGER_SUPPORTED"] = 61] = "MODEL_NO_LONGER_SUPPORTED";
    ErrorDetails_Error2[ErrorDetails_Error2["PRICING_WARNING"] = 62] = "PRICING_WARNING";
    ErrorDetails_Error2[ErrorDetails_Error2["SLOW_POOL"] = 63] = "SLOW_POOL";
    ErrorDetails_Error2[ErrorDetails_Error2["UNSUPPORTED_REGION"] = 64] = "UNSUPPORTED_REGION";
    ErrorDetails_Error2[ErrorDetails_Error2["ACCOUNT_CLOSED"] = 65] = "ACCOUNT_CLOSED";
})(ErrorDetails_Error || (ErrorDetails_Error = {}));
proto3.util.setEnumType(ErrorDetails_Error, "aiserver.v1.ErrorDetails.Error", [
    {
        no: 0,
        name: "ERROR_UNSPECIFIED"
    },
    {
        no: 1,
        name: "ERROR_BAD_API_KEY"
    },
    {
        no: 42,
        name: "ERROR_BAD_USER_API_KEY"
    },
    {
        no: 2,
        name: "ERROR_NOT_LOGGED_IN"
    },
    {
        no: 3,
        name: "ERROR_INVALID_AUTH_ID"
    },
    {
        no: 4,
        name: "ERROR_NOT_HIGH_ENOUGH_PERMISSIONS"
    },
    {
        no: 18,
        name: "ERROR_AGENT_REQUIRES_LOGIN"
    },
    {
        no: 5,
        name: "ERROR_BAD_MODEL_NAME"
    },
    {
        no: 39,
        name: "ERROR_NOT_FOUND"
    },
    {
        no: 40,
        name: "ERROR_DEPRECATED"
    },
    {
        no: 6,
        name: "ERROR_USER_NOT_FOUND"
    },
    {
        no: 7,
        name: "ERROR_FREE_USER_RATE_LIMIT_EXCEEDED"
    },
    {
        no: 8,
        name: "ERROR_PRO_USER_RATE_LIMIT_EXCEEDED"
    },
    {
        no: 9,
        name: "ERROR_FREE_USER_USAGE_LIMIT"
    },
    {
        no: 10,
        name: "ERROR_PRO_USER_USAGE_LIMIT"
    },
    {
        no: 41,
        name: "ERROR_RESOURCE_EXHAUSTED"
    },
    {
        no: 11,
        name: "ERROR_AUTH_TOKEN_NOT_FOUND"
    },
    {
        no: 12,
        name: "ERROR_AUTH_TOKEN_EXPIRED"
    },
    {
        no: 13,
        name: "ERROR_OPENAI"
    },
    {
        no: 14,
        name: "ERROR_OPENAI_RATE_LIMIT_EXCEEDED"
    },
    {
        no: 20,
        name: "ERROR_MAX_TOKENS"
    },
    {
        no: 23,
        name: "ERROR_PRO_USER_ONLY"
    },
    {
        no: 21,
        name: "ERROR_USER_ABORTED_REQUEST"
    },
    {
        no: 25,
        name: "ERROR_TIMEOUT"
    },
    {
        no: 22,
        name: "ERROR_GENERIC_RATE_LIMIT_EXCEEDED"
    },
    {
        no: 28,
        name: "ERROR_GPT_4_VISION_PREVIEW_RATE_LIMIT"
    },
    {
        no: 29,
        name: "ERROR_CUSTOM_MESSAGE"
    },
    {
        no: 30,
        name: "ERROR_OUTDATED_CLIENT"
    },
    {
        no: 31,
        name: "ERROR_CLAUDE_IMAGE_TOO_LARGE"
    },
    {
        no: 33,
        name: "ERROR_FILE_NOT_FOUND"
    },
    {
        no: 34,
        name: "ERROR_API_KEY_RATE_LIMIT"
    },
    {
        no: 35,
        name: "ERROR_DEBOUNCED"
    },
    {
        no: 36,
        name: "ERROR_BAD_REQUEST"
    },
    {
        no: 37,
        name: "ERROR_REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED"
    },
    {
        no: 38,
        name: "ERROR_UNAUTHORIZED"
    },
    {
        no: 43,
        name: "ERROR_CONVERSATION_TOO_LONG"
    },
    {
        no: 44,
        name: "ERROR_USAGE_PRICING_REQUIRED"
    },
    {
        no: 45,
        name: "ERROR_USAGE_PRICING_REQUIRED_CHANGEABLE"
    },
    {
        no: 46,
        name: "ERROR_GITHUB_NO_USER_CREDENTIALS"
    },
    {
        no: 47,
        name: "ERROR_GITHUB_USER_NO_ACCESS"
    },
    {
        no: 48,
        name: "ERROR_GITHUB_APP_NO_ACCESS"
    },
    {
        no: 49,
        name: "ERROR_GITHUB_MULTIPLE_OWNERS"
    },
    {
        no: 50,
        name: "ERROR_RATE_LIMITED"
    },
    {
        no: 51,
        name: "ERROR_RATE_LIMITED_CHANGEABLE"
    },
    {
        no: 52,
        name: "ERROR_CUSTOM"
    },
    {
        no: 53,
        name: "ERROR_HOOKS_BLOCKED"
    },
    {
        no: 54,
        name: "ERROR_SUSPICIOUS_USAGE_BLOCKED"
    },
    {
        no: 55,
        name: "ERROR_EXTENSION_HOST_TIMEOUT"
    },
    {
        no: 56,
        name: "ERROR_NETWORK_ERROR"
    },
    {
        no: 57,
        name: "ERROR_PROVIDER_ERROR"
    },
    {
        no: 58,
        name: "ERROR_MODEL_BLOCKED"
    },
    {
        no: 59,
        name: "ERROR_INTERNAL"
    },
    {
        no: 60,
        name: "ERROR_MAX_MODE_REQUIRED"
    },
    {
        no: 61,
        name: "ERROR_MODEL_NO_LONGER_SUPPORTED"
    },
    {
        no: 62,
        name: "ERROR_PRICING_WARNING"
    },
    {
        no: 63,
        name: "ERROR_SLOW_POOL"
    },
    {
        no: 64,
        name: "ERROR_UNSUPPORTED_REGION"
    },
    {
        no: 65,
        name: "ERROR_ACCOUNT_CLOSED"
    }
]);
var CustomErrorDetails$Runtime = (()=>class _CustomErrorDetails extends Message {
        constructor(data){
            super();
            this.title = "";
            this.detail = "";
            this.buttons = [];
            this.additionalInfo = {};
            this.planChoices = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CustomErrorDetails().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CustomErrorDetails().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CustomErrorDetails().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CustomErrorDetails, a, b2);
        }
    })();
var CustomErrorDetails = CustomErrorDetails$Runtime;
CustomErrorDetails.runtime = proto3;
CustomErrorDetails.typeName = "aiserver.v1.CustomErrorDetails";
CustomErrorDetails.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "detail",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "allow_command_links_potentially_unsafe_please_only_use_for_handwritten_trusted_markdown",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 4,
            name: "is_retryable",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 5,
            name: "show_request_id",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 6,
            name: "should_show_immediate_error",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 8,
            name: "buttons",
            kind: "message",
            T: ErrorButton,
            repeated: true
        },
        {
            no: 7,
            name: "additional_info",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 9,
            name: "plan_choices",
            kind: "message",
            T: PlanChoice,
            repeated: true
        },
        {
            no: 10,
            name: "analytics_metadata",
            kind: "message",
            T: ErrorAnalyticsMetadata,
            opt: true
        }
    ]);
var ErrorAnalyticsMetadata$Runtime = (()=>class _ErrorAnalyticsMetadata extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ErrorAnalyticsMetadata().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ErrorAnalyticsMetadata().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ErrorAnalyticsMetadata().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ErrorAnalyticsMetadata, a, b2);
        }
    })();
var ErrorAnalyticsMetadata = ErrorAnalyticsMetadata$Runtime;
ErrorAnalyticsMetadata.runtime = proto3;
ErrorAnalyticsMetadata.typeName = "aiserver.v1.ErrorAnalyticsMetadata";
ErrorAnalyticsMetadata.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "action_required",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var PlanChoice$Runtime = (()=>class _PlanChoice extends Message {
        constructor(data){
            super();
            this.label = "";
            this.value = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PlanChoice().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PlanChoice().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PlanChoice().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PlanChoice, a, b2);
        }
    })();
var PlanChoice = PlanChoice$Runtime;
PlanChoice.runtime = proto3;
PlanChoice.typeName = "aiserver.v1.PlanChoice";
PlanChoice.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "sublabel",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ]);
var ErrorButton$Runtime = (()=>class _ErrorButton extends Message {
        constructor(data){
            super();
            this.label = "";
            this.action = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ErrorButton().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ErrorButton().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ErrorButton().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ErrorButton, a, b2);
        }
    })();
var ErrorButton = ErrorButton$Runtime;
ErrorButton.runtime = proto3;
ErrorButton.typeName = "aiserver.v1.ErrorButton";
ErrorButton.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "upgrade",
            kind: "message",
            T: UpgradeAction,
            oneof: "action"
        },
        {
            no: 3,
            name: "switch_model",
            kind: "message",
            T: SwitchModelAction,
            oneof: "action"
        },
        {
            no: 4,
            name: "configure_spend_limit",
            kind: "message",
            T: ConfigureSpendLimitAction,
            oneof: "action"
        },
        {
            no: 5,
            name: "url",
            kind: "message",
            T: UrlAction,
            oneof: "action"
        },
        {
            no: 6,
            name: "upgrade_choice",
            kind: "message",
            T: UpgradeChoice,
            oneof: "action"
        },
        {
            no: 7,
            name: "dashboard_action",
            kind: "message",
            T: DashboardAction,
            oneof: "action"
        },
        {
            no: 8,
            name: "reload_window",
            kind: "message",
            T: ReloadWindowAction,
            oneof: "action"
        },
        {
            no: 9,
            name: "client_action",
            kind: "message",
            T: ClientAction,
            oneof: "action"
        }
    ]);
var ClientAction$Runtime = (()=>class _ClientAction extends Message {
        constructor(data){
            super();
            this.commandId = "";
            this.args = {};
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ClientAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ClientAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ClientAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ClientAction, a, b2);
        }
    })();
var ClientAction = ClientAction$Runtime;
ClientAction.runtime = proto3;
ClientAction.typeName = "aiserver.v1.ClientAction";
ClientAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "command_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "args",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ]);
var ReloadWindowAction$Runtime = (()=>class _ReloadWindowAction extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReloadWindowAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReloadWindowAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReloadWindowAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReloadWindowAction, a, b2);
        }
    })();
var ReloadWindowAction = ReloadWindowAction$Runtime;
ReloadWindowAction.runtime = proto3;
ReloadWindowAction.typeName = "aiserver.v1.ReloadWindowAction";
ReloadWindowAction.fields = proto3.util.newFieldList(()=>[]);
var DashboardAction$Runtime = (()=>class _DashboardAction extends Message {
        constructor(data){
            super();
            this.action = "";
            this.args = {};
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _DashboardAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _DashboardAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _DashboardAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_DashboardAction, a, b2);
        }
    })();
var DashboardAction = DashboardAction$Runtime;
DashboardAction.runtime = proto3;
DashboardAction.typeName = "aiserver.v1.DashboardAction";
DashboardAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "action",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "args",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 3,
            name: "success_message",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var UpgradeChoice$Runtime = (()=>class _UpgradeChoice extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UpgradeChoice().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UpgradeChoice().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UpgradeChoice().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UpgradeChoice, a, b2);
        }
    })();
var UpgradeChoice = UpgradeChoice$Runtime;
UpgradeChoice.runtime = proto3;
UpgradeChoice.typeName = "aiserver.v1.UpgradeChoice";
UpgradeChoice.fields = proto3.util.newFieldList(()=>[]);
var UpgradeAction$Runtime = (()=>class _UpgradeAction extends Message {
        constructor(data){
            super();
            this.membershipToUpgradeTo = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UpgradeAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UpgradeAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UpgradeAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UpgradeAction, a, b2);
        }
    })();
var UpgradeAction = UpgradeAction$Runtime;
UpgradeAction.runtime = proto3;
UpgradeAction.typeName = "aiserver.v1.UpgradeAction";
UpgradeAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "membership_to_upgrade_to",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "try_immediate_upgrade",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 3,
            name: "allow_trial",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
var SwitchModelAction$Runtime = (()=>class _SwitchModelAction extends Message {
        constructor(data){
            super();
            this.parameters = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SwitchModelAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SwitchModelAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SwitchModelAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SwitchModelAction, a, b2);
        }
    })();
var SwitchModelAction = SwitchModelAction$Runtime;
SwitchModelAction.runtime = proto3;
SwitchModelAction.typeName = "aiserver.v1.SwitchModelAction";
SwitchModelAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "suggested_model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "parameters",
            kind: "message",
            T: SwitchModelAction_ModelParameterValue,
            repeated: true
        },
        {
            no: 3,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
var SwitchModelAction_ModelParameterValue$Runtime = (()=>class _SwitchModelAction_ModelParameterValue extends Message {
        constructor(data){
            super();
            this.id = "";
            this.value = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SwitchModelAction_ModelParameterValue().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SwitchModelAction_ModelParameterValue().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SwitchModelAction_ModelParameterValue().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SwitchModelAction_ModelParameterValue, a, b2);
        }
    })();
var SwitchModelAction_ModelParameterValue = SwitchModelAction_ModelParameterValue$Runtime;
SwitchModelAction_ModelParameterValue.runtime = proto3;
SwitchModelAction_ModelParameterValue.typeName = "aiserver.v1.SwitchModelAction.ModelParameterValue";
SwitchModelAction_ModelParameterValue.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ]);
var ConfigureSpendLimitAction$Runtime = (()=>class _ConfigureSpendLimitAction extends Message {
        constructor(data){
            super();
            this.confirmLabel = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConfigureSpendLimitAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConfigureSpendLimitAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConfigureSpendLimitAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConfigureSpendLimitAction, a, b2);
        }
    })();
var ConfigureSpendLimitAction = ConfigureSpendLimitAction$Runtime;
ConfigureSpendLimitAction.runtime = proto3;
ConfigureSpendLimitAction.typeName = "aiserver.v1.ConfigureSpendLimitAction";
ConfigureSpendLimitAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "confirm_label",
            kind: "scalar",
            T: 9
        }
    ]);
var UrlAction$Runtime = (()=>class _UrlAction extends Message {
        constructor(data){
            super();
            this.url = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UrlAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UrlAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UrlAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UrlAction, a, b2);
        }
    })();
var UrlAction = UrlAction$Runtime;
UrlAction.runtime = proto3;
UrlAction.typeName = "aiserver.v1.UrlAction";
UrlAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        }
    ]);
var ImageProto2$Runtime = (()=>class _ImageProto extends Message {
        constructor(data){
            super();
            this.data = new Uint8Array(0);
            this.uuid = "";
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
var ImageProto2 = ImageProto2$Runtime;
ImageProto2.runtime = proto3;
ImageProto2.typeName = "aiserver.v1.ImageProto";
ImageProto2.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "dimension",
            kind: "message",
            T: ImageProto_Dimension2
        },
        {
            no: 3,
            name: "uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "task_specific_description",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var ImageProto_Dimension2$Runtime = (()=>class _ImageProto_Dimension extends Message {
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
var ImageProto_Dimension2 = ImageProto_Dimension2$Runtime;
ImageProto_Dimension2.runtime = proto3;
ImageProto_Dimension2.typeName = "aiserver.v1.ImageProto.Dimension";
ImageProto_Dimension2.fields = proto3.util.newFieldList(()=>[
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
var ChatQuote$Runtime = (()=>class _ChatQuote extends Message {
        constructor(data){
            super();
            this.markdown = "";
            this.bubbleId = "";
            this.sectionIndex = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ChatQuote().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ChatQuote().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ChatQuote().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ChatQuote, a, b2);
        }
    })();
var ChatQuote = ChatQuote$Runtime;
ChatQuote.runtime = proto3;
ChatQuote.typeName = "aiserver.v1.ChatQuote";
ChatQuote.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "markdown",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bubble_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "section_index",
            kind: "scalar",
            T: 5
        }
    ]);
var ChatExternalLink$Runtime = (()=>class _ChatExternalLink extends Message {
        constructor(data){
            super();
            this.url = "";
            this.uuid = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ChatExternalLink().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ChatExternalLink().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ChatExternalLink().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ChatExternalLink, a, b2);
        }
    })();
var ChatExternalLink = ChatExternalLink$Runtime;
ChatExternalLink.runtime = proto3;
ChatExternalLink.typeName = "aiserver.v1.ChatExternalLink";
ChatExternalLink.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "pdf_content",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "is_pdf",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 5,
            name: "filename",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var ComposerExternalLink$Runtime = (()=>class _ComposerExternalLink extends Message {
        constructor(data){
            super();
            this.url = "";
            this.uuid = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ComposerExternalLink().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ComposerExternalLink().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ComposerExternalLink().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ComposerExternalLink, a, b2);
        }
    })();
var ComposerExternalLink = ComposerExternalLink$Runtime;
ComposerExternalLink.runtime = proto3;
ComposerExternalLink.typeName = "aiserver.v1.ComposerExternalLink";
ComposerExternalLink.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "pdf_content",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "is_pdf",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 5,
            name: "filename",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var CmdKExternalLink$Runtime = (()=>class _CmdKExternalLink extends Message {
        constructor(data){
            super();
            this.url = "";
            this.uuid = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CmdKExternalLink().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CmdKExternalLink().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CmdKExternalLink().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CmdKExternalLink, a, b2);
        }
    })();
var CmdKExternalLink = CmdKExternalLink$Runtime;
CmdKExternalLink.runtime = proto3;
CmdKExternalLink.typeName = "aiserver.v1.CmdKExternalLink";
CmdKExternalLink.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "uuid",
            kind: "scalar",
            T: 9
        }
    ]);
var CommitNote$Runtime = (()=>class _CommitNote extends Message {
        constructor(data){
            super();
            this.note = "";
            this.commitHash = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CommitNote().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CommitNote().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CommitNote().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CommitNote, a, b2);
        }
    })();
var CommitNote = CommitNote$Runtime;
CommitNote.runtime = proto3;
CommitNote.typeName = "aiserver.v1.CommitNote";
CommitNote.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "note",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "commit_hash",
            kind: "scalar",
            T: 9
        }
    ]);
var CommitNoteWithEmbeddings$Runtime = (()=>class _CommitNoteWithEmbeddings extends Message {
        constructor(data){
            super();
            this.note = "";
            this.commitHash = "";
            this.embeddings = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CommitNoteWithEmbeddings().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CommitNoteWithEmbeddings().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CommitNoteWithEmbeddings().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CommitNoteWithEmbeddings, a, b2);
        }
    })();
var CommitNoteWithEmbeddings = CommitNoteWithEmbeddings$Runtime;
CommitNoteWithEmbeddings.runtime = proto3;
CommitNoteWithEmbeddings.typeName = "aiserver.v1.CommitNoteWithEmbeddings";
CommitNoteWithEmbeddings.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "note",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "commit_hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "embeddings",
            kind: "scalar",
            T: 1,
            repeated: true
        }
    ]);
var CommitDiffString$Runtime = (()=>class _CommitDiffString extends Message {
        constructor(data){
            super();
            this.diff = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CommitDiffString().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CommitDiffString().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CommitDiffString().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CommitDiffString, a, b2);
        }
    })();
var CommitDiffString = CommitDiffString$Runtime;
CommitDiffString.runtime = proto3;
CommitDiffString.typeName = "aiserver.v1.CommitDiffString";
CommitDiffString.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "diff",
            kind: "scalar",
            T: 9
        }
    ]);
var FullCommitNotes$Runtime = (()=>class _FullCommitNotes extends Message {
        constructor(data){
            super();
            this.notes = [];
            this.commitHash = "";
            this.repoUrl = "";
            this.filesChangedRelativePath = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FullCommitNotes().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FullCommitNotes().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FullCommitNotes().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FullCommitNotes, a, b2);
        }
    })();
var FullCommitNotes = FullCommitNotes$Runtime;
FullCommitNotes.runtime = proto3;
FullCommitNotes.typeName = "aiserver.v1.FullCommitNotes";
FullCommitNotes.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "notes",
            kind: "message",
            T: CommitNote,
            repeated: true
        },
        {
            no: 2,
            name: "commit_hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "files_changed_relative_path",
            kind: "scalar",
            T: 9
        }
    ]);
var CrossExtHostHeader$Runtime = (()=>class _CrossExtHostHeader extends Message {
        constructor(data){
            super();
            this.key = "";
            this.value = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CrossExtHostHeader().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CrossExtHostHeader().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CrossExtHostHeader().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CrossExtHostHeader, a, b2);
        }
    })();
var CrossExtHostHeader = CrossExtHostHeader$Runtime;
CrossExtHostHeader.runtime = proto3;
CrossExtHostHeader.typeName = "aiserver.v1.CrossExtHostHeader";
CrossExtHostHeader.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ]);
var CrossExtHostHeaders$Runtime = (()=>class _CrossExtHostHeaders extends Message {
        constructor(data){
            super();
            this.headers = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CrossExtHostHeaders().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CrossExtHostHeaders().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CrossExtHostHeaders().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CrossExtHostHeaders, a, b2);
        }
    })();
var CrossExtHostHeaders = CrossExtHostHeaders$Runtime;
CrossExtHostHeaders.runtime = proto3;
CrossExtHostHeaders.typeName = "aiserver.v1.CrossExtHostHeaders";
CrossExtHostHeaders.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "headers",
            kind: "message",
            T: CrossExtHostHeader,
            repeated: true
        }
    ]);
var SimpleUnaryCrossExtensionHostMessage$Runtime = (()=>class _SimpleUnaryCrossExtensionHostMessage extends Message {
        constructor(data){
            super();
            this.message = new Uint8Array(0);
            this.isError = false;
            this.connectError = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SimpleUnaryCrossExtensionHostMessage().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SimpleUnaryCrossExtensionHostMessage().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SimpleUnaryCrossExtensionHostMessage().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SimpleUnaryCrossExtensionHostMessage, a, b2);
        }
    })();
var SimpleUnaryCrossExtensionHostMessage = SimpleUnaryCrossExtensionHostMessage$Runtime;
SimpleUnaryCrossExtensionHostMessage.runtime = proto3;
SimpleUnaryCrossExtensionHostMessage.typeName = "aiserver.v1.SimpleUnaryCrossExtensionHostMessage";
SimpleUnaryCrossExtensionHostMessage.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "header",
            kind: "message",
            T: CrossExtHostHeaders
        },
        {
            no: 3,
            name: "trailer",
            kind: "message",
            T: CrossExtHostHeaders
        },
        {
            no: 4,
            name: "is_error",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "connect_error",
            kind: "scalar",
            T: 9
        }
    ]);
var CodeChunk$Runtime = (()=>class _CodeChunk extends Message {
        constructor(data){
            super();
            this.relativeWorkspacePath = "";
            this.startLineNumber = 0;
            this.lines = [];
            this.languageIdentifier = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CodeChunk().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CodeChunk().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CodeChunk().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CodeChunk, a, b2);
        }
    })();
var CodeChunk = CodeChunk$Runtime;
CodeChunk.runtime = proto3;
CodeChunk.typeName = "aiserver.v1.CodeChunk";
CodeChunk.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "lines",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 4,
            name: "summarization_strategy",
            kind: "enum",
            T: proto3.getEnumType(CodeChunk_SummarizationStrategy),
            opt: true
        },
        {
            no: 5,
            name: "language_identifier",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "intent",
            kind: "enum",
            T: proto3.getEnumType(CodeChunk_Intent),
            opt: true
        },
        {
            no: 7,
            name: "is_final_version",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 8,
            name: "is_first_version",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
(function(CodeChunk_Intent2) {
    CodeChunk_Intent2[CodeChunk_Intent2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    CodeChunk_Intent2[CodeChunk_Intent2["COMPOSER_FILE"] = 1] = "COMPOSER_FILE";
    CodeChunk_Intent2[CodeChunk_Intent2["COMPRESSED_COMPOSER_FILE"] = 2] = "COMPRESSED_COMPOSER_FILE";
})(CodeChunk_Intent || (CodeChunk_Intent = {}));
proto3.util.setEnumType(CodeChunk_Intent, "aiserver.v1.CodeChunk.Intent", [
    {
        no: 0,
        name: "INTENT_UNSPECIFIED"
    },
    {
        no: 1,
        name: "INTENT_COMPOSER_FILE"
    },
    {
        no: 2,
        name: "INTENT_COMPRESSED_COMPOSER_FILE"
    }
]);
(function(CodeChunk_SummarizationStrategy2) {
    CodeChunk_SummarizationStrategy2[CodeChunk_SummarizationStrategy2["NONE_UNSPECIFIED"] = 0] = "NONE_UNSPECIFIED";
    CodeChunk_SummarizationStrategy2[CodeChunk_SummarizationStrategy2["SUMMARIZED"] = 1] = "SUMMARIZED";
    CodeChunk_SummarizationStrategy2[CodeChunk_SummarizationStrategy2["EMBEDDED"] = 2] = "EMBEDDED";
})(CodeChunk_SummarizationStrategy || (CodeChunk_SummarizationStrategy = {}));
proto3.util.setEnumType(CodeChunk_SummarizationStrategy, "aiserver.v1.CodeChunk.SummarizationStrategy", [
    {
        no: 0,
        name: "SUMMARIZATION_STRATEGY_NONE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "SUMMARIZATION_STRATEGY_SUMMARIZED"
    },
    {
        no: 2,
        name: "SUMMARIZATION_STRATEGY_EMBEDDED"
    }
]);
var RCPCallFrame$Runtime = (()=>class _RCPCallFrame extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RCPCallFrame().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RCPCallFrame().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RCPCallFrame().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RCPCallFrame, a, b2);
        }
    })();
var RCPCallFrame = RCPCallFrame$Runtime;
RCPCallFrame.runtime = proto3;
RCPCallFrame.typeName = "aiserver.v1.RCPCallFrame";
RCPCallFrame.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "function_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "line_number",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 4,
            name: "column_number",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
var RCPStackTrace$Runtime = (()=>class _RCPStackTrace extends Message {
        constructor(data){
            super();
            this.callFrames = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RCPStackTrace().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RCPStackTrace().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RCPStackTrace().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RCPStackTrace, a, b2);
        }
    })();
var RCPStackTrace = RCPStackTrace$Runtime;
RCPStackTrace.runtime = proto3;
RCPStackTrace.typeName = "aiserver.v1.RCPStackTrace";
RCPStackTrace.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "call_frames",
            kind: "message",
            T: RCPCallFrame,
            repeated: true
        },
        {
            no: 2,
            name: "raw_stack_trace",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var RCPLogEntry$Runtime = (()=>class _RCPLogEntry extends Message {
        constructor(data){
            super();
            this.message = "";
            this.timestamp = 0;
            this.level = "";
            this.clientName = "";
            this.sessionId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RCPLogEntry().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RCPLogEntry().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RCPLogEntry().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RCPLogEntry, a, b2);
        }
    })();
var RCPLogEntry = RCPLogEntry$Runtime;
RCPLogEntry.runtime = proto3;
RCPLogEntry.typeName = "aiserver.v1.RCPLogEntry";
RCPLogEntry.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "timestamp",
            kind: "scalar",
            T: 1
        },
        {
            no: 3,
            name: "level",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "client_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "stack_trace",
            kind: "message",
            T: RCPStackTrace,
            opt: true
        },
        {
            no: 7,
            name: "object_data_json",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var RCPUIElementPicked$Runtime = (()=>class _RCPUIElementPicked extends Message {
        constructor(data){
            super();
            this.element = "";
            this.xpath = "";
            this.textContent = "";
            this.extra = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RCPUIElementPicked().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RCPUIElementPicked().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RCPUIElementPicked().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RCPUIElementPicked, a, b2);
        }
    })();
var RCPUIElementPicked = RCPUIElementPicked$Runtime;
RCPUIElementPicked.runtime = proto3;
RCPUIElementPicked.typeName = "aiserver.v1.RCPUIElementPicked";
RCPUIElementPicked.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "element",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "xpath",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "text_content",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "extra",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "component",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "component_props_json",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var RCPChatMessage$Runtime = (()=>class _RCPChatMessage extends Message {
        constructor(data){
            super();
            this.text = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RCPChatMessage().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RCPChatMessage().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RCPChatMessage().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RCPChatMessage, a, b2);
        }
    })();
var RCPChatMessage = RCPChatMessage$Runtime;
RCPChatMessage.runtime = proto3;
RCPChatMessage.typeName = "aiserver.v1.RCPChatMessage";
RCPChatMessage.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]);
var RCPMessage$Runtime = (()=>class _RCPMessage extends Message {
        constructor(data){
            super();
            this.message = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RCPMessage().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RCPMessage().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RCPMessage().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RCPMessage, a, b2);
        }
    })();
var RCPMessage = RCPMessage$Runtime;
RCPMessage.runtime = proto3;
RCPMessage.typeName = "aiserver.v1.RCPMessage";
RCPMessage.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "console",
            kind: "message",
            T: RCPLogEntry,
            oneof: "message"
        },
        {
            no: 2,
            name: "ui_element_picked",
            kind: "message",
            T: RCPUIElementPicked,
            oneof: "message"
        },
        {
            no: 3,
            name: "chat_message",
            kind: "message",
            T: RCPChatMessage,
            oneof: "message"
        }
    ]);
export { AzureState, BM25Chunk, BedrockState, ChatExternalLink, ChatQuote, ClientAction, CloudAgentModelSelection, CloudAgentModelSelection_ParameterValue, CmdKDebugInfo, CmdKDebugInfo_CppFileDiffHistory, CmdKDebugInfo_OpenEditor, CmdKDebugInfo_PastThought, CmdKDebugInfo_UnsavedFiles, CmdKExternalLink, CodeBlock, CodeBlock_Signatures, CodeChunk, CodeChunk_Intent, CodeChunk_SummarizationStrategy, CommitDiffString, CommitNote, CommitNoteWithEmbeddings, ComposerExternalLink, ComputeLinesDiffOriginalAndModified, ConfigureSpendLimitAction, CrossExtHostHeader, CrossExtHostHeaders, CurrentFileInfo, CurrentFileInfo_NotebookCell, CursorPosition, CursorRange, CursorRule2, CustomErrorDetails, DashboardAction, DataframeInfo, DataframeInfo_Column, DetailedLine, Diagnostic2, Diagnostic_DiagnosticSeverity, Diagnostic_RelatedInformation, DocumentSymbol, DocumentSymbolWithText, DocumentSymbol_Range, DocumentSymbol_SymbolKind, EmbeddingModel, EnvironmentInfo, ErrorAnalyticsMetadata, ErrorButton, ErrorDetails, ErrorDetails_Error, ExplicitContext, FeatureType, File2, FileDiff, FileDiff_Chunk, FileGit, FullCommitNotes, GetDiffRequest, GetDiffRequest_OutputFormat, GetDiffResponse, GetDiffResponse_SubmoduleDiff, GitCommit, GitDiff, GitDiff_DiffType, HoverDetails, ImageProto2, ImageProto_Dimension2, LineRange, Lint, LintSeverity, LinterError, LinterErrors, LinterErrorsWithoutFileContents, MCPInstructions, ModelDetails, ModelInfo, PlanChoice, PureMessage, PureMessage_MessageType, RCPCallFrame, RCPChatMessage, RCPLogEntry, RCPMessage, RCPStackTrace, RCPUIElementPicked, ReloadWindowAction, SelectionWithOrientation, SimpleFileChunk, SimpleRange, SimpleUnaryCrossExtensionHostMessage, SimplestRange, SwitchModelAction, SwitchModelAction_ModelParameterValue, UpgradeAction, UpgradeChoice, UriComponents, UrlAction, VscodeCPUProperties, VscodeOSProperties, VscodeOSStatistics };
