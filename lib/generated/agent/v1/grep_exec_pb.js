import { Message, proto3 } from "@bufbuild/protobuf";
import { SandboxPolicy } from "./sandbox_pb.js";
var GrepArgs$Runtime = (()=>class _GrepArgs extends Message {
        constructor(data){
            super();
            this.pattern = "";
            this.toolCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GrepArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GrepArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GrepArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GrepArgs, a, b2);
        }
    })();
var GrepArgs = GrepArgs$Runtime;
GrepArgs.runtime = proto3;
GrepArgs.typeName = "agent.v1.GrepArgs";
GrepArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "pattern",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "glob",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "output_mode",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "context_before",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 6,
            name: "context_after",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 7,
            name: "context",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 8,
            name: "case_insensitive",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 9,
            name: "type",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "head_limit",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 11,
            name: "multiline",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 12,
            name: "sort",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 13,
            name: "sort_ascending",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 14,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 15,
            name: "sandbox_policy",
            kind: "message",
            T: SandboxPolicy,
            opt: true
        },
        {
            no: 16,
            name: "offset",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
var GrepResult$Runtime = (()=>class _GrepResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GrepResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GrepResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GrepResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GrepResult, a, b2);
        }
    })();
var GrepResult = GrepResult$Runtime;
GrepResult.runtime = proto3;
GrepResult.typeName = "agent.v1.GrepResult";
GrepResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: GrepSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: GrepError,
            oneof: "result"
        }
    ]);
var GrepError$Runtime = (()=>class _GrepError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GrepError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GrepError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GrepError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GrepError, a, b2);
        }
    })();
var GrepError = GrepError$Runtime;
GrepError.runtime = proto3;
GrepError.typeName = "agent.v1.GrepError";
GrepError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var GrepSuccess$Runtime = (()=>class _GrepSuccess extends Message {
        constructor(data){
            super();
            this.pattern = "";
            this.path = "";
            this.outputMode = "";
            this.workspaceResults = {};
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GrepSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GrepSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GrepSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GrepSuccess, a, b2);
        }
    })();
var GrepSuccess = GrepSuccess$Runtime;
GrepSuccess.runtime = proto3;
GrepSuccess.typeName = "agent.v1.GrepSuccess";
GrepSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "pattern",
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
            name: "output_mode",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "workspace_results",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: GrepUnionResult
            }
        },
        {
            no: 5,
            name: "active_editor_result",
            kind: "message",
            T: GrepUnionResult,
            opt: true
        }
    ]);
var GrepUnionResult$Runtime = (()=>class _GrepUnionResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GrepUnionResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GrepUnionResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GrepUnionResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GrepUnionResult, a, b2);
        }
    })();
var GrepUnionResult = GrepUnionResult$Runtime;
GrepUnionResult.runtime = proto3;
GrepUnionResult.typeName = "agent.v1.GrepUnionResult";
GrepUnionResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "count",
            kind: "message",
            T: GrepCountResult,
            oneof: "result"
        },
        {
            no: 2,
            name: "files",
            kind: "message",
            T: GrepFilesResult,
            oneof: "result"
        },
        {
            no: 3,
            name: "content",
            kind: "message",
            T: GrepContentResult,
            oneof: "result"
        }
    ]);
var GrepCountResult$Runtime = (()=>class _GrepCountResult extends Message {
        constructor(data){
            super();
            this.counts = [];
            this.totalFiles = 0;
            this.totalMatches = 0;
            this.clientTruncated = false;
            this.ripgrepTruncated = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GrepCountResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GrepCountResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GrepCountResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GrepCountResult, a, b2);
        }
    })();
var GrepCountResult = GrepCountResult$Runtime;
GrepCountResult.runtime = proto3;
GrepCountResult.typeName = "agent.v1.GrepCountResult";
GrepCountResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "counts",
            kind: "message",
            T: GrepFileCount,
            repeated: true
        },
        {
            no: 2,
            name: "total_files",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "total_matches",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "client_truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "ripgrep_truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "head_limit_applied",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 7,
            name: "offset_applied",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
var GrepFileCount$Runtime = (()=>class _GrepFileCount extends Message {
        constructor(data){
            super();
            this.file = "";
            this.count = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GrepFileCount().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GrepFileCount().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GrepFileCount().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GrepFileCount, a, b2);
        }
    })();
var GrepFileCount = GrepFileCount$Runtime;
GrepFileCount.runtime = proto3;
GrepFileCount.typeName = "agent.v1.GrepFileCount";
GrepFileCount.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "file",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "count",
            kind: "scalar",
            T: 5
        }
    ]);
var GrepFilesResult$Runtime = (()=>class _GrepFilesResult extends Message {
        constructor(data){
            super();
            this.files = [];
            this.totalFiles = 0;
            this.clientTruncated = false;
            this.ripgrepTruncated = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GrepFilesResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GrepFilesResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GrepFilesResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GrepFilesResult, a, b2);
        }
    })();
var GrepFilesResult = GrepFilesResult$Runtime;
GrepFilesResult.runtime = proto3;
GrepFilesResult.typeName = "agent.v1.GrepFilesResult";
GrepFilesResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "files",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "total_files",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "client_truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "ripgrep_truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "head_limit_applied",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 6,
            name: "offset_applied",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
var GrepContentResult$Runtime = (()=>class _GrepContentResult extends Message {
        constructor(data){
            super();
            this.matches = [];
            this.totalLines = 0;
            this.totalMatchedLines = 0;
            this.clientTruncated = false;
            this.ripgrepTruncated = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GrepContentResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GrepContentResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GrepContentResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GrepContentResult, a, b2);
        }
    })();
var GrepContentResult = GrepContentResult$Runtime;
GrepContentResult.runtime = proto3;
GrepContentResult.typeName = "agent.v1.GrepContentResult";
GrepContentResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "matches",
            kind: "message",
            T: GrepFileMatch,
            repeated: true
        },
        {
            no: 2,
            name: "total_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "total_matched_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "client_truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "ripgrep_truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "head_limit_applied",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 7,
            name: "offset_applied",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
var GrepFileMatch$Runtime = (()=>class _GrepFileMatch extends Message {
        constructor(data){
            super();
            this.file = "";
            this.matches = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GrepFileMatch().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GrepFileMatch().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GrepFileMatch().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GrepFileMatch, a, b2);
        }
    })();
var GrepFileMatch = GrepFileMatch$Runtime;
GrepFileMatch.runtime = proto3;
GrepFileMatch.typeName = "agent.v1.GrepFileMatch";
GrepFileMatch.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "file",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "matches",
            kind: "message",
            T: GrepContentMatch,
            repeated: true
        }
    ]);
var GrepContentMatch$Runtime = (()=>class _GrepContentMatch extends Message {
        constructor(data){
            super();
            this.lineNumber = 0;
            this.content = "";
            this.contentTruncated = false;
            this.isContextLine = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GrepContentMatch().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GrepContentMatch().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GrepContentMatch().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GrepContentMatch, a, b2);
        }
    })();
var GrepContentMatch = GrepContentMatch$Runtime;
GrepContentMatch.runtime = proto3;
GrepContentMatch.typeName = "agent.v1.GrepContentMatch";
GrepContentMatch.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "content_truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "is_context_line",
            kind: "scalar",
            T: 8
        }
    ]);
var GrepStream$Runtime = (()=>class _GrepStream extends Message {
        constructor(data){
            super();
            this.pattern = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GrepStream().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GrepStream().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GrepStream().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GrepStream, a, b2);
        }
    })();
var GrepStream = GrepStream$Runtime;
GrepStream.runtime = proto3;
GrepStream.typeName = "agent.v1.GrepStream";
GrepStream.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "pattern",
            kind: "scalar",
            T: 9
        }
    ]);
export { GrepArgs, GrepContentMatch, GrepContentResult, GrepCountResult, GrepError, GrepFileCount, GrepFileMatch, GrepFilesResult, GrepResult, GrepStream, GrepSuccess, GrepUnionResult };
