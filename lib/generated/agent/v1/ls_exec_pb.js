import { Message, proto3 } from "@bufbuild/protobuf";
import { SandboxPolicy } from "./sandbox_pb.js";
var LsArgs$Runtime = (()=>class _LsArgs extends Message {
        constructor(data){
            super();
            this.path = "";
            this.ignore = [];
            this.toolCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _LsArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _LsArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _LsArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_LsArgs, a, b2);
        }
    })();
var LsArgs = LsArgs$Runtime;
LsArgs.runtime = proto3;
LsArgs.typeName = "agent.v1.LsArgs";
LsArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "ignore",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "sandbox_policy",
            kind: "message",
            T: SandboxPolicy,
            opt: true
        },
        {
            no: 5,
            name: "timeout_ms",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
var LsResult$Runtime = (()=>class _LsResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _LsResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _LsResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _LsResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_LsResult, a, b2);
        }
    })();
var LsResult = LsResult$Runtime;
LsResult.runtime = proto3;
LsResult.typeName = "agent.v1.LsResult";
LsResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: LsSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: LsError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: LsRejected,
            oneof: "result"
        },
        {
            no: 4,
            name: "timeout",
            kind: "message",
            T: LsTimeout,
            oneof: "result"
        }
    ]);
var LsSuccess$Runtime = (()=>class _LsSuccess extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _LsSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _LsSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _LsSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_LsSuccess, a, b2);
        }
    })();
var LsSuccess = LsSuccess$Runtime;
LsSuccess.runtime = proto3;
LsSuccess.typeName = "agent.v1.LsSuccess";
LsSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "directory_tree_root",
            kind: "message",
            T: LsDirectoryTreeNode
        }
    ]);
var LsDirectoryTreeNode$Runtime = (()=>class _LsDirectoryTreeNode extends Message {
        constructor(data){
            super();
            this.absPath = "";
            this.childrenDirs = [];
            this.childrenFiles = [];
            this.childrenWereProcessed = false;
            this.fullSubtreeExtensionCounts = {};
            this.numFiles = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _LsDirectoryTreeNode().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _LsDirectoryTreeNode().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _LsDirectoryTreeNode().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_LsDirectoryTreeNode, a, b2);
        }
    })();
var LsDirectoryTreeNode = LsDirectoryTreeNode$Runtime;
LsDirectoryTreeNode.runtime = proto3;
LsDirectoryTreeNode.typeName = "agent.v1.LsDirectoryTreeNode";
LsDirectoryTreeNode.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "abs_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "children_dirs",
            kind: "message",
            T: LsDirectoryTreeNode,
            repeated: true
        },
        {
            no: 3,
            name: "children_files",
            kind: "message",
            T: LsDirectoryTreeNode_File,
            repeated: true
        },
        {
            no: 4,
            name: "children_were_processed",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "full_subtree_extension_counts",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 5
            }
        },
        {
            no: 6,
            name: "num_files",
            kind: "scalar",
            T: 5
        }
    ]);
var LsDirectoryTreeNode_File$Runtime = (()=>class _LsDirectoryTreeNode_File extends Message {
        constructor(data){
            super();
            this.name = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _LsDirectoryTreeNode_File().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _LsDirectoryTreeNode_File().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _LsDirectoryTreeNode_File().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_LsDirectoryTreeNode_File, a, b2);
        }
    })();
var LsDirectoryTreeNode_File = LsDirectoryTreeNode_File$Runtime;
LsDirectoryTreeNode_File.runtime = proto3;
LsDirectoryTreeNode_File.typeName = "agent.v1.LsDirectoryTreeNode.File";
LsDirectoryTreeNode_File.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "terminal_metadata",
            kind: "message",
            T: TerminalMetadata,
            opt: true
        }
    ]);
var LsError$Runtime = (()=>class _LsError extends Message {
        constructor(data){
            super();
            this.path = "";
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _LsError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _LsError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _LsError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_LsError, a, b2);
        }
    })();
var LsError = LsError$Runtime;
LsError.runtime = proto3;
LsError.typeName = "agent.v1.LsError";
LsError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var LsRejected$Runtime = (()=>class _LsRejected extends Message {
        constructor(data){
            super();
            this.path = "";
            this.reason = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _LsRejected().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _LsRejected().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _LsRejected().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_LsRejected, a, b2);
        }
    })();
var LsRejected = LsRejected$Runtime;
LsRejected.runtime = proto3;
LsRejected.typeName = "agent.v1.LsRejected";
LsRejected.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
var LsTimeout$Runtime = (()=>class _LsTimeout extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _LsTimeout().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _LsTimeout().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _LsTimeout().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_LsTimeout, a, b2);
        }
    })();
var LsTimeout = LsTimeout$Runtime;
LsTimeout.runtime = proto3;
LsTimeout.typeName = "agent.v1.LsTimeout";
LsTimeout.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "directory_tree_root",
            kind: "message",
            T: LsDirectoryTreeNode
        }
    ]);
var TerminalMetadata$Runtime = (()=>class _TerminalMetadata extends Message {
        constructor(data){
            super();
            this.lastCommands = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _TerminalMetadata().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _TerminalMetadata().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _TerminalMetadata().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_TerminalMetadata, a, b2);
        }
    })();
var TerminalMetadata = TerminalMetadata$Runtime;
TerminalMetadata.runtime = proto3;
TerminalMetadata.typeName = "agent.v1.TerminalMetadata";
TerminalMetadata.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "cwd",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "last_commands",
            kind: "message",
            T: TerminalMetadata_Command,
            repeated: true
        },
        {
            no: 3,
            name: "last_modified_ms",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 4,
            name: "current_command",
            kind: "message",
            T: TerminalMetadata_Command,
            opt: true
        }
    ]);
var TerminalMetadata_Command$Runtime = (()=>class _TerminalMetadata_Command extends Message {
        constructor(data){
            super();
            this.command = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _TerminalMetadata_Command().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _TerminalMetadata_Command().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _TerminalMetadata_Command().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_TerminalMetadata_Command, a, b2);
        }
    })();
var TerminalMetadata_Command = TerminalMetadata_Command$Runtime;
TerminalMetadata_Command.runtime = proto3;
TerminalMetadata_Command.typeName = "agent.v1.TerminalMetadata.Command";
TerminalMetadata_Command.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "exit_code",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 3,
            name: "timestamp_ms",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 4,
            name: "duration_ms",
            kind: "scalar",
            T: 3,
            opt: true
        }
    ]);
export { LsArgs, LsDirectoryTreeNode, LsDirectoryTreeNode_File, LsError, LsRejected, LsResult, LsSuccess, LsTimeout, TerminalMetadata, TerminalMetadata_Command };
