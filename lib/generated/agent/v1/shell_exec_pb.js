import { Message, proto3 } from "@bufbuild/protobuf";
import { SandboxPolicy } from "./sandbox_pb.js";
import { OutputLocation, SmartModeApproval } from "./utils_pb.js";
import { HookAdditionalContext } from "./hook_additional_context_pb.js";
var TimeoutBehavior;
var ShellBackgroundReason;
var ForceBackgroundShellStatus;
var ShellAbortReason;
var CommandClassifierResult_SuggestedSandboxMode;
var ShellHookApprovalRequirement_Kind;
(function(TimeoutBehavior2) {
    TimeoutBehavior2[TimeoutBehavior2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    TimeoutBehavior2[TimeoutBehavior2["CANCEL"] = 1] = "CANCEL";
    TimeoutBehavior2[TimeoutBehavior2["BACKGROUND"] = 2] = "BACKGROUND";
})(TimeoutBehavior || (TimeoutBehavior = {}));
proto3.util.setEnumType(TimeoutBehavior, "agent.v1.TimeoutBehavior", [
    {
        no: 0,
        name: "TIMEOUT_BEHAVIOR_UNSPECIFIED"
    },
    {
        no: 1,
        name: "TIMEOUT_BEHAVIOR_CANCEL"
    },
    {
        no: 2,
        name: "TIMEOUT_BEHAVIOR_BACKGROUND"
    }
]);
(function(ShellBackgroundReason2) {
    ShellBackgroundReason2[ShellBackgroundReason2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    ShellBackgroundReason2[ShellBackgroundReason2["TIMEOUT"] = 1] = "TIMEOUT";
    ShellBackgroundReason2[ShellBackgroundReason2["USER_REQUEST"] = 2] = "USER_REQUEST";
})(ShellBackgroundReason || (ShellBackgroundReason = {}));
proto3.util.setEnumType(ShellBackgroundReason, "agent.v1.ShellBackgroundReason", [
    {
        no: 0,
        name: "SHELL_BACKGROUND_REASON_UNSPECIFIED"
    },
    {
        no: 1,
        name: "SHELL_BACKGROUND_REASON_TIMEOUT"
    },
    {
        no: 2,
        name: "SHELL_BACKGROUND_REASON_USER_REQUEST"
    }
]);
(function(ForceBackgroundShellStatus2) {
    ForceBackgroundShellStatus2[ForceBackgroundShellStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    ForceBackgroundShellStatus2[ForceBackgroundShellStatus2["ACCEPTED"] = 1] = "ACCEPTED";
    ForceBackgroundShellStatus2[ForceBackgroundShellStatus2["NOT_FOUND"] = 2] = "NOT_FOUND";
})(ForceBackgroundShellStatus || (ForceBackgroundShellStatus = {}));
proto3.util.setEnumType(ForceBackgroundShellStatus, "agent.v1.ForceBackgroundShellStatus", [
    {
        no: 0,
        name: "FORCE_BACKGROUND_SHELL_STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "FORCE_BACKGROUND_SHELL_STATUS_ACCEPTED"
    },
    {
        no: 2,
        name: "FORCE_BACKGROUND_SHELL_STATUS_NOT_FOUND"
    }
]);
(function(ShellAbortReason2) {
    ShellAbortReason2[ShellAbortReason2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    ShellAbortReason2[ShellAbortReason2["USER_ABORT"] = 1] = "USER_ABORT";
    ShellAbortReason2[ShellAbortReason2["TIMEOUT"] = 2] = "TIMEOUT";
})(ShellAbortReason || (ShellAbortReason = {}));
proto3.util.setEnumType(ShellAbortReason, "agent.v1.ShellAbortReason", [
    {
        no: 0,
        name: "SHELL_ABORT_REASON_UNSPECIFIED"
    },
    {
        no: 1,
        name: "SHELL_ABORT_REASON_USER_ABORT"
    },
    {
        no: 2,
        name: "SHELL_ABORT_REASON_TIMEOUT"
    }
]);
var ShellCommandParsingResult$Runtime = (()=>class _ShellCommandParsingResult extends Message {
        constructor(data){
            super();
            this.parsingFailed = false;
            this.executableCommands = [];
            this.hasRedirects = false;
            this.hasCommandSubstitution = false;
            this.redirects = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellCommandParsingResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellCommandParsingResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellCommandParsingResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellCommandParsingResult, a, b2);
        }
    })();
var ShellCommandParsingResult = ShellCommandParsingResult$Runtime;
ShellCommandParsingResult.runtime = proto3;
ShellCommandParsingResult.typeName = "agent.v1.ShellCommandParsingResult";
ShellCommandParsingResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "parsing_failed",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "executable_commands",
            kind: "message",
            T: ShellCommandParsingResult_ExecutableCommand,
            repeated: true
        },
        {
            no: 3,
            name: "has_redirects",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "has_command_substitution",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "all_redirects_are_dev_null",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 6,
            name: "redirects",
            kind: "message",
            T: ShellCommandParsingResult_Redirect,
            repeated: true
        }
    ]);
var ShellCommandParsingResult_ExecutableCommandArg$Runtime = (()=>class _ShellCommandParsingResult_ExecutableCommandArg extends Message {
        constructor(data){
            super();
            this.type = "";
            this.value = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellCommandParsingResult_ExecutableCommandArg().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellCommandParsingResult_ExecutableCommandArg().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellCommandParsingResult_ExecutableCommandArg().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellCommandParsingResult_ExecutableCommandArg, a, b2);
        }
    })();
var ShellCommandParsingResult_ExecutableCommandArg = ShellCommandParsingResult_ExecutableCommandArg$Runtime;
ShellCommandParsingResult_ExecutableCommandArg.runtime = proto3;
ShellCommandParsingResult_ExecutableCommandArg.typeName = "agent.v1.ShellCommandParsingResult.ExecutableCommandArg";
ShellCommandParsingResult_ExecutableCommandArg.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "type",
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
var ShellCommandParsingResult_ExecutableCommand$Runtime = (()=>class _ShellCommandParsingResult_ExecutableCommand extends Message {
        constructor(data){
            super();
            this.name = "";
            this.args = [];
            this.fullText = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellCommandParsingResult_ExecutableCommand().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellCommandParsingResult_ExecutableCommand().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellCommandParsingResult_ExecutableCommand().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellCommandParsingResult_ExecutableCommand, a, b2);
        }
    })();
var ShellCommandParsingResult_ExecutableCommand = ShellCommandParsingResult_ExecutableCommand$Runtime;
ShellCommandParsingResult_ExecutableCommand.runtime = proto3;
ShellCommandParsingResult_ExecutableCommand.typeName = "agent.v1.ShellCommandParsingResult.ExecutableCommand";
ShellCommandParsingResult_ExecutableCommand.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "args",
            kind: "message",
            T: ShellCommandParsingResult_ExecutableCommandArg,
            repeated: true
        },
        {
            no: 3,
            name: "full_text",
            kind: "scalar",
            T: 9
        }
    ]);
var ShellCommandParsingResult_Redirect$Runtime = (()=>class _ShellCommandParsingResult_Redirect extends Message {
        constructor(data){
            super();
            this.operator = "";
            this.destinationFds = [];
            this.targetNodeType = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellCommandParsingResult_Redirect().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellCommandParsingResult_Redirect().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellCommandParsingResult_Redirect().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellCommandParsingResult_Redirect, a, b2);
        }
    })();
var ShellCommandParsingResult_Redirect = ShellCommandParsingResult_Redirect$Runtime;
ShellCommandParsingResult_Redirect.runtime = proto3;
ShellCommandParsingResult_Redirect.typeName = "agent.v1.ShellCommandParsingResult.Redirect";
ShellCommandParsingResult_Redirect.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "operator",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "destination_fds",
            kind: "scalar",
            T: 13,
            repeated: true
        },
        {
            no: 3,
            name: "target_node_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "target_text",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var CommandClassifierResult$Runtime = (()=>class _CommandClassifierResult extends Message {
        constructor(data){
            super();
            this.commands = [];
            this.suggestedSandboxMode = CommandClassifierResult_SuggestedSandboxMode.UNSPECIFIED;
            this.classificationFailed = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CommandClassifierResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CommandClassifierResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CommandClassifierResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CommandClassifierResult, a, b2);
        }
    })();
var CommandClassifierResult = CommandClassifierResult$Runtime;
CommandClassifierResult.runtime = proto3;
CommandClassifierResult.typeName = "agent.v1.CommandClassifierResult";
CommandClassifierResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "commands",
            kind: "message",
            T: CommandClassifierResult_ClassifiedCommand,
            repeated: true
        },
        {
            no: 2,
            name: "suggested_sandbox_mode",
            kind: "enum",
            T: proto3.getEnumType(CommandClassifierResult_SuggestedSandboxMode)
        },
        {
            no: 3,
            name: "classification_failed",
            kind: "scalar",
            T: 8
        }
    ]);
(function(CommandClassifierResult_SuggestedSandboxMode2) {
    CommandClassifierResult_SuggestedSandboxMode2[CommandClassifierResult_SuggestedSandboxMode2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    CommandClassifierResult_SuggestedSandboxMode2[CommandClassifierResult_SuggestedSandboxMode2["SANDBOX"] = 1] = "SANDBOX";
    CommandClassifierResult_SuggestedSandboxMode2[CommandClassifierResult_SuggestedSandboxMode2["NO_SANDBOX"] = 2] = "NO_SANDBOX";
    CommandClassifierResult_SuggestedSandboxMode2[CommandClassifierResult_SuggestedSandboxMode2["UNDETERMINED"] = 3] = "UNDETERMINED";
})(CommandClassifierResult_SuggestedSandboxMode || (CommandClassifierResult_SuggestedSandboxMode = {}));
proto3.util.setEnumType(CommandClassifierResult_SuggestedSandboxMode, "agent.v1.CommandClassifierResult.SuggestedSandboxMode", [
    {
        no: 0,
        name: "SUGGESTED_SANDBOX_MODE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "SUGGESTED_SANDBOX_MODE_SANDBOX"
    },
    {
        no: 2,
        name: "SUGGESTED_SANDBOX_MODE_NO_SANDBOX"
    },
    {
        no: 3,
        name: "SUGGESTED_SANDBOX_MODE_UNDETERMINED"
    }
]);
var CommandClassifierResult_ClassifiedCommand$Runtime = (()=>class _CommandClassifierResult_ClassifiedCommand extends Message {
        constructor(data){
            super();
            this.name = "";
            this.arguments = [];
            this.subcommandTokens = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CommandClassifierResult_ClassifiedCommand().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CommandClassifierResult_ClassifiedCommand().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CommandClassifierResult_ClassifiedCommand().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CommandClassifierResult_ClassifiedCommand, a, b2);
        }
    })();
var CommandClassifierResult_ClassifiedCommand = CommandClassifierResult_ClassifiedCommand$Runtime;
CommandClassifierResult_ClassifiedCommand.runtime = proto3;
CommandClassifierResult_ClassifiedCommand.typeName = "agent.v1.CommandClassifierResult.ClassifiedCommand";
CommandClassifierResult_ClassifiedCommand.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "arguments",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "suggested_allowlist_entry",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "subcommand_tokens",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var ShellOutputNotificationConfig$Runtime = (()=>class _ShellOutputNotificationConfig extends Message {
        constructor(data){
            super();
            this.pattern = "";
            this.reason = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellOutputNotificationConfig().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellOutputNotificationConfig().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellOutputNotificationConfig().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellOutputNotificationConfig, a, b2);
        }
    })();
var ShellOutputNotificationConfig = ShellOutputNotificationConfig$Runtime;
ShellOutputNotificationConfig.runtime = proto3;
ShellOutputNotificationConfig.typeName = "agent.v1.ShellOutputNotificationConfig";
ShellOutputNotificationConfig.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "pattern",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "debounce",
            kind: "scalar",
            T: 1,
            opt: true
        },
        {
            no: 4,
            name: "notification_limit",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
var ForceBackgroundShellArgs$Runtime = (()=>class _ForceBackgroundShellArgs extends Message {
        constructor(data){
            super();
            this.toolCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ForceBackgroundShellArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ForceBackgroundShellArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ForceBackgroundShellArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ForceBackgroundShellArgs, a, b2);
        }
    })();
var ForceBackgroundShellArgs = ForceBackgroundShellArgs$Runtime;
ForceBackgroundShellArgs.runtime = proto3;
ForceBackgroundShellArgs.typeName = "agent.v1.ForceBackgroundShellArgs";
ForceBackgroundShellArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
var ForceBackgroundShellResult$Runtime = (()=>class _ForceBackgroundShellResult extends Message {
        constructor(data){
            super();
            this.status = ForceBackgroundShellStatus.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ForceBackgroundShellResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ForceBackgroundShellResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ForceBackgroundShellResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ForceBackgroundShellResult, a, b2);
        }
    })();
var ForceBackgroundShellResult = ForceBackgroundShellResult$Runtime;
ForceBackgroundShellResult.runtime = proto3;
ForceBackgroundShellResult.typeName = "agent.v1.ForceBackgroundShellResult";
ForceBackgroundShellResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(ForceBackgroundShellStatus)
        },
        {
            no: 2,
            name: "shell_result",
            kind: "message",
            T: ShellResult,
            opt: true
        }
    ]);
var ShellHookApprovalRequirement$Runtime = (()=>class _ShellHookApprovalRequirement extends Message {
        constructor(data){
            super();
            this.kind = ShellHookApprovalRequirement_Kind.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellHookApprovalRequirement().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellHookApprovalRequirement().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellHookApprovalRequirement().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellHookApprovalRequirement, a, b2);
        }
    })();
var ShellHookApprovalRequirement = ShellHookApprovalRequirement$Runtime;
ShellHookApprovalRequirement.runtime = proto3;
ShellHookApprovalRequirement.typeName = "agent.v1.ShellHookApprovalRequirement";
ShellHookApprovalRequirement.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "kind",
            kind: "enum",
            T: proto3.getEnumType(ShellHookApprovalRequirement_Kind)
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
(function(ShellHookApprovalRequirement_Kind2) {
    ShellHookApprovalRequirement_Kind2[ShellHookApprovalRequirement_Kind2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    ShellHookApprovalRequirement_Kind2[ShellHookApprovalRequirement_Kind2["FORCE_PROMPT"] = 1] = "FORCE_PROMPT";
})(ShellHookApprovalRequirement_Kind || (ShellHookApprovalRequirement_Kind = {}));
proto3.util.setEnumType(ShellHookApprovalRequirement_Kind, "agent.v1.ShellHookApprovalRequirement.Kind", [
    {
        no: 0,
        name: "KIND_UNSPECIFIED"
    },
    {
        no: 1,
        name: "KIND_FORCE_PROMPT"
    }
]);
var ShellArgs$Runtime = (()=>class _ShellArgs extends Message {
        constructor(data){
            super();
            this.command = "";
            this.workingDirectory = "";
            this.timeout = 0;
            this.toolCallId = "";
            this.simpleCommands = [];
            this.hasInputRedirect = false;
            this.hasOutputRedirect = false;
            this.isBackground = false;
            this.skipApproval = false;
            this.timeoutBehavior = TimeoutBehavior.UNSPECIFIED;
            this.closeStdin = false;
            this.adminCommandDenylist = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellArgs, a, b2);
        }
    })();
var ShellArgs = ShellArgs$Runtime;
ShellArgs.runtime = proto3;
ShellArgs.typeName = "agent.v1.ShellArgs";
ShellArgs.fields = proto3.util.newFieldList(()=>[
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
            name: "timeout",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "simple_commands",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 6,
            name: "has_input_redirect",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "has_output_redirect",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "parsing_result",
            kind: "message",
            T: ShellCommandParsingResult
        },
        {
            no: 9,
            name: "requested_sandbox_policy",
            kind: "message",
            T: SandboxPolicy,
            opt: true
        },
        {
            no: 10,
            name: "file_output_threshold_bytes",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 11,
            name: "is_background",
            kind: "scalar",
            T: 8
        },
        {
            no: 12,
            name: "skip_approval",
            kind: "scalar",
            T: 8
        },
        {
            no: 13,
            name: "timeout_behavior",
            kind: "enum",
            T: proto3.getEnumType(TimeoutBehavior)
        },
        {
            no: 14,
            name: "hard_timeout",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 15,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 16,
            name: "classifier_result",
            kind: "message",
            T: CommandClassifierResult,
            opt: true
        },
        {
            no: 17,
            name: "close_stdin",
            kind: "scalar",
            T: 8
        },
        {
            no: 18,
            name: "output_notification",
            kind: "message",
            T: ShellOutputNotificationConfig,
            opt: true
        },
        {
            no: 19,
            name: "smart_mode_approval",
            kind: "message",
            T: SmartModeApproval,
            opt: true
        },
        {
            no: 20,
            name: "hook_approval_requirement",
            kind: "message",
            T: ShellHookApprovalRequirement,
            opt: true
        },
        {
            no: 21,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 22,
            name: "admin_command_denylist",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var ShellResult$Runtime = (()=>class _ShellResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellResult, a, b2);
        }
    })();
var ShellResult = ShellResult$Runtime;
ShellResult.runtime = proto3;
ShellResult.typeName = "agent.v1.ShellResult";
ShellResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ShellSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "failure",
            kind: "message",
            T: ShellFailure,
            oneof: "result"
        },
        {
            no: 3,
            name: "timeout",
            kind: "message",
            T: ShellTimeout,
            oneof: "result"
        },
        {
            no: 4,
            name: "rejected",
            kind: "message",
            T: ShellRejected,
            oneof: "result"
        },
        {
            no: 5,
            name: "spawn_error",
            kind: "message",
            T: ShellSpawnError,
            oneof: "result"
        },
        {
            no: 7,
            name: "permission_denied",
            kind: "message",
            T: ShellPermissionDenied,
            oneof: "result"
        },
        {
            no: 101,
            name: "sandbox_policy",
            kind: "message",
            T: SandboxPolicy,
            opt: true
        },
        {
            no: 102,
            name: "is_background",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 103,
            name: "terminals_folder",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 104,
            name: "pid",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
var ShellStreamStdout$Runtime = (()=>class _ShellStreamStdout extends Message {
        constructor(data){
            super();
            this.data = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellStreamStdout().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellStreamStdout().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellStreamStdout().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellStreamStdout, a, b2);
        }
    })();
var ShellStreamStdout = ShellStreamStdout$Runtime;
ShellStreamStdout.runtime = proto3;
ShellStreamStdout.typeName = "agent.v1.ShellStreamStdout";
ShellStreamStdout.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 9
        }
    ]);
var ShellStreamStderr$Runtime = (()=>class _ShellStreamStderr extends Message {
        constructor(data){
            super();
            this.data = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellStreamStderr().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellStreamStderr().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellStreamStderr().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellStreamStderr, a, b2);
        }
    })();
var ShellStreamStderr = ShellStreamStderr$Runtime;
ShellStreamStderr.runtime = proto3;
ShellStreamStderr.typeName = "agent.v1.ShellStreamStderr";
ShellStreamStderr.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 9
        }
    ]);
var ShellStreamExit$Runtime = (()=>class _ShellStreamExit extends Message {
        constructor(data){
            super();
            this.code = 0;
            this.cwd = "";
            this.aborted = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellStreamExit().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellStreamExit().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellStreamExit().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellStreamExit, a, b2);
        }
    })();
var ShellStreamExit = ShellStreamExit$Runtime;
ShellStreamExit.runtime = proto3;
ShellStreamExit.typeName = "agent.v1.ShellStreamExit";
ShellStreamExit.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "code",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "cwd",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "output_location",
            kind: "message",
            T: OutputLocation,
            opt: true
        },
        {
            no: 4,
            name: "aborted",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "abort_reason",
            kind: "enum",
            T: proto3.getEnumType(ShellAbortReason),
            opt: true
        },
        {
            no: 6,
            name: "local_execution_time_ms",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
var ShellStreamStart$Runtime = (()=>class _ShellStreamStart extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellStreamStart().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellStreamStart().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellStreamStart().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellStreamStart, a, b2);
        }
    })();
var ShellStreamStart = ShellStreamStart$Runtime;
ShellStreamStart.runtime = proto3;
ShellStreamStart.typeName = "agent.v1.ShellStreamStart";
ShellStreamStart.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "sandbox_policy",
            kind: "message",
            T: SandboxPolicy,
            opt: true
        }
    ]);
var ShellStreamBackgrounded$Runtime = (()=>class _ShellStreamBackgrounded extends Message {
        constructor(data){
            super();
            this.shellId = 0;
            this.command = "";
            this.workingDirectory = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellStreamBackgrounded().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellStreamBackgrounded().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellStreamBackgrounded().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellStreamBackgrounded, a, b2);
        }
    })();
var ShellStreamBackgrounded = ShellStreamBackgrounded$Runtime;
ShellStreamBackgrounded.runtime = proto3;
ShellStreamBackgrounded.typeName = "agent.v1.ShellStreamBackgrounded";
ShellStreamBackgrounded.fields = proto3.util.newFieldList(()=>[
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
        },
        {
            no: 5,
            name: "ms_to_wait",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 6,
            name: "reason",
            kind: "enum",
            T: proto3.getEnumType(ShellBackgroundReason),
            opt: true
        }
    ]);
var ShellStreamHookContext$Runtime = (()=>class _ShellStreamHookContext extends Message {
        constructor(data){
            super();
            this.hookAdditionalContexts = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellStreamHookContext().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellStreamHookContext().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellStreamHookContext().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellStreamHookContext, a, b2);
        }
    })();
var ShellStreamHookContext = ShellStreamHookContext$Runtime;
ShellStreamHookContext.runtime = proto3;
ShellStreamHookContext.typeName = "agent.v1.ShellStreamHookContext";
ShellStreamHookContext.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "hook_additional_contexts",
            kind: "message",
            T: HookAdditionalContext,
            repeated: true
        }
    ]);
var ShellSandboxUnsupported$Runtime = (()=>class _ShellSandboxUnsupported extends Message {
        constructor(data){
            super();
            this.command = "";
            this.workingDirectory = "";
            this.sandboxPolicyType = "";
            this.reason = "";
            this.isReadonly = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellSandboxUnsupported().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellSandboxUnsupported().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellSandboxUnsupported().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellSandboxUnsupported, a, b2);
        }
    })();
var ShellSandboxUnsupported = ShellSandboxUnsupported$Runtime;
ShellSandboxUnsupported.runtime = proto3;
ShellSandboxUnsupported.typeName = "agent.v1.ShellSandboxUnsupported";
ShellSandboxUnsupported.fields = proto3.util.newFieldList(()=>[
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
            name: "sandbox_policy_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "is_readonly",
            kind: "scalar",
            T: 8
        }
    ]);
var ShellStream$Runtime = (()=>class _ShellStream extends Message {
        constructor(data){
            super();
            this.event = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellStream().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellStream().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellStream().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellStream, a, b2);
        }
    })();
var ShellStream = ShellStream$Runtime;
ShellStream.runtime = proto3;
ShellStream.typeName = "agent.v1.ShellStream";
ShellStream.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "stdout",
            kind: "message",
            T: ShellStreamStdout,
            oneof: "event"
        },
        {
            no: 2,
            name: "stderr",
            kind: "message",
            T: ShellStreamStderr,
            oneof: "event"
        },
        {
            no: 3,
            name: "exit",
            kind: "message",
            T: ShellStreamExit,
            oneof: "event"
        },
        {
            no: 4,
            name: "start",
            kind: "message",
            T: ShellStreamStart,
            oneof: "event"
        },
        {
            no: 5,
            name: "rejected",
            kind: "message",
            T: ShellRejected,
            oneof: "event"
        },
        {
            no: 6,
            name: "permission_denied",
            kind: "message",
            T: ShellPermissionDenied,
            oneof: "event"
        },
        {
            no: 7,
            name: "backgrounded",
            kind: "message",
            T: ShellStreamBackgrounded,
            oneof: "event"
        },
        {
            no: 8,
            name: "hook_context",
            kind: "message",
            T: ShellStreamHookContext,
            oneof: "event"
        },
        {
            no: 9,
            name: "sandbox_unsupported",
            kind: "message",
            T: ShellSandboxUnsupported,
            oneof: "event"
        }
    ]);
var ShellSuccess$Runtime = (()=>class _ShellSuccess extends Message {
        constructor(data){
            super();
            this.command = "";
            this.workingDirectory = "";
            this.exitCode = 0;
            this.signal = "";
            this.stdout = "";
            this.stderr = "";
            this.executionTime = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellSuccess, a, b2);
        }
    })();
var ShellSuccess = ShellSuccess$Runtime;
ShellSuccess.runtime = proto3;
ShellSuccess.typeName = "agent.v1.ShellSuccess";
ShellSuccess.fields = proto3.util.newFieldList(()=>[
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
            name: "exit_code",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "signal",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "stdout",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "stderr",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "execution_time",
            kind: "scalar",
            T: 5
        },
        {
            no: 8,
            name: "output_location",
            kind: "message",
            T: OutputLocation,
            opt: true
        },
        {
            no: 9,
            name: "shell_id",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 10,
            name: "interleaved_output",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "pid",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 12,
            name: "ms_to_wait",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 13,
            name: "local_execution_time_ms",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 14,
            name: "background_reason",
            kind: "enum",
            T: proto3.getEnumType(ShellBackgroundReason),
            opt: true
        },
        {
            no: 15,
            name: "output_head",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 16,
            name: "output_tail",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 17,
            name: "elided_chars",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
var ShellFailure$Runtime = (()=>class _ShellFailure extends Message {
        constructor(data){
            super();
            this.command = "";
            this.workingDirectory = "";
            this.exitCode = 0;
            this.signal = "";
            this.stdout = "";
            this.stderr = "";
            this.executionTime = 0;
            this.aborted = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellFailure().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellFailure().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellFailure().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellFailure, a, b2);
        }
    })();
var ShellFailure = ShellFailure$Runtime;
ShellFailure.runtime = proto3;
ShellFailure.typeName = "agent.v1.ShellFailure";
ShellFailure.fields = proto3.util.newFieldList(()=>[
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
            name: "exit_code",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "signal",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "stdout",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "stderr",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "execution_time",
            kind: "scalar",
            T: 5
        },
        {
            no: 8,
            name: "output_location",
            kind: "message",
            T: OutputLocation,
            opt: true
        },
        {
            no: 9,
            name: "interleaved_output",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "abort_reason",
            kind: "enum",
            T: proto3.getEnumType(ShellAbortReason),
            opt: true
        },
        {
            no: 11,
            name: "aborted",
            kind: "scalar",
            T: 8
        },
        {
            no: 12,
            name: "local_execution_time_ms",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 13,
            name: "output_head",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 14,
            name: "output_tail",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 15,
            name: "elided_chars",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
var ShellTimeout$Runtime = (()=>class _ShellTimeout extends Message {
        constructor(data){
            super();
            this.command = "";
            this.workingDirectory = "";
            this.timeoutMs = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellTimeout().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellTimeout().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellTimeout().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellTimeout, a, b2);
        }
    })();
var ShellTimeout = ShellTimeout$Runtime;
ShellTimeout.runtime = proto3;
ShellTimeout.typeName = "agent.v1.ShellTimeout";
ShellTimeout.fields = proto3.util.newFieldList(()=>[
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
            name: "timeout_ms",
            kind: "scalar",
            T: 5
        }
    ]);
var ShellRejected$Runtime = (()=>class _ShellRejected extends Message {
        constructor(data){
            super();
            this.command = "";
            this.workingDirectory = "";
            this.reason = "";
            this.isReadonly = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellRejected().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellRejected().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellRejected().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellRejected, a, b2);
        }
    })();
var ShellRejected = ShellRejected$Runtime;
ShellRejected.runtime = proto3;
ShellRejected.typeName = "agent.v1.ShellRejected";
ShellRejected.fields = proto3.util.newFieldList(()=>[
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
            name: "reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "is_readonly",
            kind: "scalar",
            T: 8
        }
    ]);
var ShellPermissionDenied$Runtime = (()=>class _ShellPermissionDenied extends Message {
        constructor(data){
            super();
            this.command = "";
            this.workingDirectory = "";
            this.error = "";
            this.isReadonly = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellPermissionDenied().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellPermissionDenied().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellPermissionDenied().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellPermissionDenied, a, b2);
        }
    })();
var ShellPermissionDenied = ShellPermissionDenied$Runtime;
ShellPermissionDenied.runtime = proto3;
ShellPermissionDenied.typeName = "agent.v1.ShellPermissionDenied";
ShellPermissionDenied.fields = proto3.util.newFieldList(()=>[
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
        },
        {
            no: 4,
            name: "is_readonly",
            kind: "scalar",
            T: 8
        }
    ]);
var ShellSpawnError$Runtime = (()=>class _ShellSpawnError extends Message {
        constructor(data){
            super();
            this.command = "";
            this.workingDirectory = "";
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellSpawnError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellSpawnError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellSpawnError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellSpawnError, a, b2);
        }
    })();
var ShellSpawnError = ShellSpawnError$Runtime;
ShellSpawnError.runtime = proto3;
ShellSpawnError.typeName = "agent.v1.ShellSpawnError";
ShellSpawnError.fields = proto3.util.newFieldList(()=>[
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
var ShellPartialResult$Runtime = (()=>class _ShellPartialResult extends Message {
        constructor(data){
            super();
            this.stdoutDelta = "";
            this.stderrDelta = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellPartialResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellPartialResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellPartialResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellPartialResult, a, b2);
        }
    })();
var ShellPartialResult = ShellPartialResult$Runtime;
ShellPartialResult.runtime = proto3;
ShellPartialResult.typeName = "agent.v1.ShellPartialResult";
ShellPartialResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "stdout_delta",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "stderr_delta",
            kind: "scalar",
            T: 9
        }
    ]);
export { CommandClassifierResult, CommandClassifierResult_ClassifiedCommand, CommandClassifierResult_SuggestedSandboxMode, ForceBackgroundShellArgs, ForceBackgroundShellResult, ForceBackgroundShellStatus, ShellAbortReason, ShellArgs, ShellBackgroundReason, ShellCommandParsingResult, ShellCommandParsingResult_ExecutableCommand, ShellCommandParsingResult_ExecutableCommandArg, ShellCommandParsingResult_Redirect, ShellFailure, ShellHookApprovalRequirement, ShellHookApprovalRequirement_Kind, ShellOutputNotificationConfig, ShellPartialResult, ShellPermissionDenied, ShellRejected, ShellResult, ShellSandboxUnsupported, ShellSpawnError, ShellStream, ShellStreamBackgrounded, ShellStreamExit, ShellStreamHookContext, ShellStreamStart, ShellStreamStderr, ShellStreamStdout, ShellSuccess, ShellTimeout, TimeoutBehavior };
