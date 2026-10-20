import { Message, proto3 } from "@bufbuild/protobuf";
import { CommandClassifierResult, ShellCommandParsingResult, ShellHookApprovalRequirement, ShellOutputNotificationConfig, ShellPermissionDenied, ShellRejected, ShellSandboxUnsupported } from "./shell_exec_pb.js";
import { SandboxPolicy } from "./sandbox_pb.js";
import { SmartModeApproval } from "./utils_pb.js";
var BackgroundShellSpawnArgs$Runtime = (()=>class _BackgroundShellSpawnArgs extends Message {
        constructor(data){
            super();
            this.command = "";
            this.workingDirectory = "";
            this.toolCallId = "";
            this.enableWriteShellStdinTool = false;
            this.skipApproval = false;
            this.adminCommandDenylist = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _BackgroundShellSpawnArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _BackgroundShellSpawnArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _BackgroundShellSpawnArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_BackgroundShellSpawnArgs, a, b2);
        }
    })();
var BackgroundShellSpawnArgs = BackgroundShellSpawnArgs$Runtime;
BackgroundShellSpawnArgs.runtime = proto3;
BackgroundShellSpawnArgs.typeName = "agent.v1.BackgroundShellSpawnArgs";
BackgroundShellSpawnArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "working_directory",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "parsing_result",
            kind: "message",
            T: ShellCommandParsingResult
        },
        {
            no: 5,
            name: "sandbox_policy",
            kind: "message",
            T: SandboxPolicy,
            opt: true
        },
        {
            no: 6,
            name: "enable_write_shell_stdin_tool",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "classifier_result",
            kind: "message",
            T: CommandClassifierResult,
            opt: true
        },
        {
            no: 9,
            name: "output_notification",
            kind: "message",
            T: ShellOutputNotificationConfig,
            opt: true
        },
        {
            no: 10,
            name: "smart_mode_approval",
            kind: "message",
            T: SmartModeApproval,
            opt: true
        },
        {
            no: 11,
            name: "hook_approval_requirement",
            kind: "message",
            T: ShellHookApprovalRequirement,
            opt: true
        },
        {
            no: 12,
            name: "skip_approval",
            kind: "scalar",
            T: 8
        },
        {
            no: 13,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 14,
            name: "admin_command_denylist",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var BackgroundShellSpawnResult$Runtime = (()=>class _BackgroundShellSpawnResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _BackgroundShellSpawnResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _BackgroundShellSpawnResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _BackgroundShellSpawnResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_BackgroundShellSpawnResult, a, b2);
        }
    })();
var BackgroundShellSpawnResult = BackgroundShellSpawnResult$Runtime;
BackgroundShellSpawnResult.runtime = proto3;
BackgroundShellSpawnResult.typeName = "agent.v1.BackgroundShellSpawnResult";
BackgroundShellSpawnResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: BackgroundShellSpawnSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: BackgroundShellSpawnError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: ShellRejected,
            oneof: "result"
        },
        {
            no: 4,
            name: "permission_denied",
            kind: "message",
            T: ShellPermissionDenied,
            oneof: "result"
        },
        {
            no: 5,
            name: "sandbox_unsupported",
            kind: "message",
            T: ShellSandboxUnsupported,
            oneof: "result"
        }
    ]);
var BackgroundShellSpawnSuccess$Runtime = (()=>class _BackgroundShellSpawnSuccess extends Message {
        constructor(data){
            super();
            this.shellId = 0;
            this.command = "";
            this.workingDirectory = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _BackgroundShellSpawnSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _BackgroundShellSpawnSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _BackgroundShellSpawnSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_BackgroundShellSpawnSuccess, a, b2);
        }
    })();
var BackgroundShellSpawnSuccess = BackgroundShellSpawnSuccess$Runtime;
BackgroundShellSpawnSuccess.runtime = proto3;
BackgroundShellSpawnSuccess.typeName = "agent.v1.BackgroundShellSpawnSuccess";
BackgroundShellSpawnSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "shell_id",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "command",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "working_directory",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "pid",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
var BackgroundShellSpawnError$Runtime = (()=>class _BackgroundShellSpawnError extends Message {
        constructor(data){
            super();
            this.command = "";
            this.workingDirectory = "";
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _BackgroundShellSpawnError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _BackgroundShellSpawnError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _BackgroundShellSpawnError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_BackgroundShellSpawnError, a, b2);
        }
    })();
var BackgroundShellSpawnError = BackgroundShellSpawnError$Runtime;
BackgroundShellSpawnError.runtime = proto3;
BackgroundShellSpawnError.typeName = "agent.v1.BackgroundShellSpawnError";
BackgroundShellSpawnError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "working_directory",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var WriteShellStdinArgs$Runtime = (()=>class _WriteShellStdinArgs extends Message {
        constructor(data){
            super();
            this.shellId = 0;
            this.chars = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _WriteShellStdinArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _WriteShellStdinArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _WriteShellStdinArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WriteShellStdinArgs, a, b2);
        }
    })();
var WriteShellStdinArgs = WriteShellStdinArgs$Runtime;
WriteShellStdinArgs.runtime = proto3;
WriteShellStdinArgs.typeName = "agent.v1.WriteShellStdinArgs";
WriteShellStdinArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "shell_id",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "chars",
            kind: "scalar",
            T: 9
        }
    ]);
var WriteShellStdinResult$Runtime = (()=>class _WriteShellStdinResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _WriteShellStdinResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _WriteShellStdinResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _WriteShellStdinResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WriteShellStdinResult, a, b2);
        }
    })();
var WriteShellStdinResult = WriteShellStdinResult$Runtime;
WriteShellStdinResult.runtime = proto3;
WriteShellStdinResult.typeName = "agent.v1.WriteShellStdinResult";
WriteShellStdinResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: WriteShellStdinSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: WriteShellStdinError,
            oneof: "result"
        }
    ]);
var WriteShellStdinSuccess$Runtime = (()=>class _WriteShellStdinSuccess extends Message {
        constructor(data){
            super();
            this.shellId = 0;
            this.terminalFileLengthBeforeInputWritten = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _WriteShellStdinSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _WriteShellStdinSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _WriteShellStdinSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WriteShellStdinSuccess, a, b2);
        }
    })();
var WriteShellStdinSuccess = WriteShellStdinSuccess$Runtime;
WriteShellStdinSuccess.runtime = proto3;
WriteShellStdinSuccess.typeName = "agent.v1.WriteShellStdinSuccess";
WriteShellStdinSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "shell_id",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "terminal_file_length_before_input_written",
            kind: "scalar",
            T: 13
        }
    ]);
var WriteShellStdinError$Runtime = (()=>class _WriteShellStdinError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _WriteShellStdinError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _WriteShellStdinError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _WriteShellStdinError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WriteShellStdinError, a, b2);
        }
    })();
var WriteShellStdinError = WriteShellStdinError$Runtime;
WriteShellStdinError.runtime = proto3;
WriteShellStdinError.typeName = "agent.v1.WriteShellStdinError";
WriteShellStdinError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
export { BackgroundShellSpawnArgs, BackgroundShellSpawnError, BackgroundShellSpawnResult, BackgroundShellSpawnSuccess, WriteShellStdinArgs, WriteShellStdinError, WriteShellStdinResult, WriteShellStdinSuccess };
