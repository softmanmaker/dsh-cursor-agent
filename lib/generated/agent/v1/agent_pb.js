import { Message, Struct, proto3, protoInt64 } from "@bufbuild/protobuf";
import { SubagentType, TaskMode } from "./subagents_pb.js";
import { ShellToolCall, ShellToolCallDelta } from "./shell_tool_pb.js";
import { DeleteToolCall } from "./delete_tool_pb.js";
import { GlobToolCall } from "./glob_tool_pb.js";
import { GrepToolCall } from "./grep_tool_pb.js";
import { ReadToolCall } from "./read_tool_pb.js";
import { ReadTodosToolCall, TodoItem, UpdateTodosToolCall } from "./todo_tool_pb.js";
import { EditToolCall, EditToolCallDelta } from "./edit_tool_pb.js";
import { LsToolCall } from "./ls_tool_pb.js";
import { ReadLintsToolCall } from "./read_lints_tool_pb.js";
import { McpToolCall } from "./mcp_tool_pb.js";
import { SemSearchToolCall } from "./semsearch_tool_pb.js";
import { CreatePlanRequestQuery, CreatePlanRequestResponse, CreatePlanToolCall } from "./create_plan_tool_pb.js";
import { WebSearchRequestQuery, WebSearchRequestResponse, WebSearchToolCall } from "./web_search_tool_pb.js";
import { ListMcpResourcesToolCall, ReadMcpResourceToolCall } from "./mcp_resource_tool_pb.js";
import { ApplyAgentDiffToolCall } from "./apply_agent_diff_tool_pb.js";
import { AskQuestionArgs, AskQuestionResult, AskQuestionToolCall } from "./ask_question_tool_pb.js";
import { FetchToolCall } from "./fetch_tool_pb.js";
import { SwitchModeRequestQuery, SwitchModeRequestResponse, SwitchModeToolCall } from "./switch_mode_tool_pb.js";
import { GenerateImageRequestQuery, GenerateImageRequestResponse, GenerateImageToolCall } from "./generate_image_tool_pb.js";
import { RecordScreenToolCall } from "./record_screen_tool_pb.js";
import { ComputerUseToolCall } from "./computer_use_tool_pb.js";
import { WriteShellStdinToolCall } from "./write_shell_stdin_tool_pb.js";
import { ReflectToolCall } from "./reflect_tool_pb.js";
import { SetupVmEnvironmentArgs, SetupVmEnvironmentResult, SetupVmEnvironmentToolCall } from "./setup_vm_environment_tool_pb.js";
import { StartGrindExecutionToolCall } from "./start_grind_execution_tool_pb.js";
import { StartGrindPlanningToolCall } from "./start_grind_planning_tool_pb.js";
import { WebFetchRequestQuery, WebFetchRequestResponse, WebFetchToolCall } from "./web_fetch_tool_pb.js";
import { ReportBugfixResultsToolCall } from "./report_bugfix_results_tool_pb.js";
import { AiAttributionToolCall } from "./ai_attribution_tool_pb.js";
import { PrManagementRequestQuery, PrManagementResult, PrManagementToolCall } from "./pr_management_tool_pb.js";
import { McpAuthRequestQuery, McpAuthRequestResponse, McpAuthToolCall } from "./mcp_auth_tool_pb.js";
import { AwaitToolCall } from "./await_tool_pb.js";
import { BlameByFilePathToolCall } from "./blame_by_file_path_tool_pb.js";
import { GetMcpToolsToolCall } from "./get_mcp_tools_tool_pb.js";
import { ReportBugToolCall } from "./report_bug_tool_pb.js";
import { CommunicateUpdateToolCall } from "./communicate_update_tool_pb.js";
import { SendFinalSummaryToolCall } from "./send_final_summary_tool_pb.js";
import { UpdatePrCodeTourToolCall } from "./update_pr_code_tour_tool_pb.js";
import { ReplaceEnvArgs, ReplaceEnvResult, ReplaceEnvToolCall, ReplaceEnvToolCallDelta } from "./replace_env_tool_pb.js";
import { EditPrLabelsToolCall } from "./edit_pr_labels_tool_pb.js";
import { RecordCiInvestigationFindingsToolCall } from "./record_ci_investigation_findings_tool_pb.js";
import { SendMessageToolCall } from "./send_message_tool_pb.js";
import { FetchCloudAgentDataToolCall } from "./fetch_cloud_agent_data_tool_pb.js";
import { SendToUserToolCall } from "./send_to_user_tool_pb.js";
import { PiReadToolCall } from "./pi_read_tool_pb.js";
import { PiBashToolCall } from "./pi_bash_tool_pb.js";
import { PiEditToolCall } from "./pi_edit_tool_pb.js";
import { PiWriteToolCall } from "./pi_write_tool_pb.js";
import { PiGrepToolCall } from "./pi_grep_tool_pb.js";
import { PiFindToolCall } from "./pi_find_tool_pb.js";
import { PiLsToolCall } from "./pi_ls_tool_pb.js";
import { ConnectScmRequestQuery, ConnectScmRequestResponse, ConnectScmToolCall } from "./connect_scm_tool_pb.js";
import { SearchConversationsToolCall } from "./search_conversations_tool_pb.js";
import { CreateGoalToolCall, GoalStatus, UpdateGoalToolCall } from "./goal_tool_pb.js";
import { AdoptToolCall } from "./adopt_tool_pb.js";
import { CreateAgentToolCall, GetAgentStatusToolCall, ReadAgentTranscriptToolCall, SendToAgentToolCall, StopAgentToolCall } from "./coordinator_tools_pb.js";
import { HookAdditionalContext } from "./hook_additional_context_pb.js";
import { RequestContext, RequestContextPartReferences, SkillOptions } from "./request_context_exec_pb.js";
import { ShellResult, ShellStreamExit, ShellStreamStart, ShellStreamStderr, ShellStreamStdout } from "./shell_exec_pb.js";
import { SelectedContext } from "./selected_context_pb.js";
import { McpFileSystemOptions, McpTools } from "./mcp_pb.js";
import { SystemPromptSpec } from "./system_prompt_pb.js";
var AgentMode;
var SubagentExecutionEnvironment;
var SubagentBackgroundReason;
var BackgroundTaskKind;
var BackgroundTaskStatus;
var BackgroundTaskCompletionReason;
var BackgroundTaskNotificationContext;
var SubagentRunStatus;
var CustomModeSource;
var SimulatedMsgReason;
var SubscriptionSource;
var ThinkingStyle;
var ResponseComparisonDisplayOrder;
var ResponseComparisonSkipReason;
(function(AgentMode2) {
    AgentMode2[AgentMode2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    AgentMode2[AgentMode2["AGENT"] = 1] = "AGENT";
    AgentMode2[AgentMode2["ASK"] = 2] = "ASK";
    AgentMode2[AgentMode2["PLAN"] = 3] = "PLAN";
    AgentMode2[AgentMode2["DEBUG"] = 4] = "DEBUG";
    AgentMode2[AgentMode2["TRIAGE"] = 5] = "TRIAGE";
    AgentMode2[AgentMode2["PROJECT"] = 6] = "PROJECT";
    AgentMode2[AgentMode2["MULTITASK"] = 7] = "MULTITASK";
    AgentMode2[AgentMode2["CUSTOM"] = 8] = "CUSTOM";
})(AgentMode || (AgentMode = {}));
proto3.util.setEnumType(AgentMode, "agent.v1.AgentMode", [
    {
        no: 0,
        name: "AGENT_MODE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "AGENT_MODE_AGENT"
    },
    {
        no: 2,
        name: "AGENT_MODE_ASK"
    },
    {
        no: 3,
        name: "AGENT_MODE_PLAN"
    },
    {
        no: 4,
        name: "AGENT_MODE_DEBUG"
    },
    {
        no: 5,
        name: "AGENT_MODE_TRIAGE"
    },
    {
        no: 6,
        name: "AGENT_MODE_PROJECT"
    },
    {
        no: 7,
        name: "AGENT_MODE_MULTITASK"
    },
    {
        no: 8,
        name: "AGENT_MODE_CUSTOM"
    }
]);
(function(SubagentExecutionEnvironment2) {
    SubagentExecutionEnvironment2[SubagentExecutionEnvironment2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    SubagentExecutionEnvironment2[SubagentExecutionEnvironment2["LOCAL"] = 1] = "LOCAL";
    SubagentExecutionEnvironment2[SubagentExecutionEnvironment2["CLOUD"] = 2] = "CLOUD";
})(SubagentExecutionEnvironment || (SubagentExecutionEnvironment = {}));
proto3.util.setEnumType(SubagentExecutionEnvironment, "agent.v1.SubagentExecutionEnvironment", [
    {
        no: 0,
        name: "SUBAGENT_EXECUTION_ENVIRONMENT_UNSPECIFIED"
    },
    {
        no: 1,
        name: "SUBAGENT_EXECUTION_ENVIRONMENT_LOCAL"
    },
    {
        no: 2,
        name: "SUBAGENT_EXECUTION_ENVIRONMENT_CLOUD"
    }
]);
(function(SubagentBackgroundReason2) {
    SubagentBackgroundReason2[SubagentBackgroundReason2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    SubagentBackgroundReason2[SubagentBackgroundReason2["AGENT_REQUEST"] = 1] = "AGENT_REQUEST";
    SubagentBackgroundReason2[SubagentBackgroundReason2["USER_REQUEST"] = 2] = "USER_REQUEST";
    SubagentBackgroundReason2[SubagentBackgroundReason2["QUEUED_FOLLOW_UP"] = 3] = "QUEUED_FOLLOW_UP";
})(SubagentBackgroundReason || (SubagentBackgroundReason = {}));
proto3.util.setEnumType(SubagentBackgroundReason, "agent.v1.SubagentBackgroundReason", [
    {
        no: 0,
        name: "SUBAGENT_BACKGROUND_REASON_UNSPECIFIED"
    },
    {
        no: 1,
        name: "SUBAGENT_BACKGROUND_REASON_AGENT_REQUEST"
    },
    {
        no: 2,
        name: "SUBAGENT_BACKGROUND_REASON_USER_REQUEST"
    },
    {
        no: 3,
        name: "SUBAGENT_BACKGROUND_REASON_QUEUED_FOLLOW_UP"
    }
]);
(function(BackgroundTaskKind2) {
    BackgroundTaskKind2[BackgroundTaskKind2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    BackgroundTaskKind2[BackgroundTaskKind2["SHELL"] = 1] = "SHELL";
    BackgroundTaskKind2[BackgroundTaskKind2["SUBAGENT"] = 2] = "SUBAGENT";
})(BackgroundTaskKind || (BackgroundTaskKind = {}));
proto3.util.setEnumType(BackgroundTaskKind, "agent.v1.BackgroundTaskKind", [
    {
        no: 0,
        name: "BACKGROUND_TASK_KIND_UNSPECIFIED"
    },
    {
        no: 1,
        name: "BACKGROUND_TASK_KIND_SHELL"
    },
    {
        no: 2,
        name: "BACKGROUND_TASK_KIND_SUBAGENT"
    }
]);
(function(BackgroundTaskStatus2) {
    BackgroundTaskStatus2[BackgroundTaskStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    BackgroundTaskStatus2[BackgroundTaskStatus2["SUCCESS"] = 1] = "SUCCESS";
    BackgroundTaskStatus2[BackgroundTaskStatus2["ERROR"] = 2] = "ERROR";
    BackgroundTaskStatus2[BackgroundTaskStatus2["ABORTED"] = 3] = "ABORTED";
})(BackgroundTaskStatus || (BackgroundTaskStatus = {}));
proto3.util.setEnumType(BackgroundTaskStatus, "agent.v1.BackgroundTaskStatus", [
    {
        no: 0,
        name: "BACKGROUND_TASK_STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "BACKGROUND_TASK_STATUS_SUCCESS"
    },
    {
        no: 2,
        name: "BACKGROUND_TASK_STATUS_ERROR"
    },
    {
        no: 3,
        name: "BACKGROUND_TASK_STATUS_ABORTED"
    }
]);
(function(BackgroundTaskCompletionReason2) {
    BackgroundTaskCompletionReason2[BackgroundTaskCompletionReason2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    BackgroundTaskCompletionReason2[BackgroundTaskCompletionReason2["TASK_FINISHED"] = 1] = "TASK_FINISHED";
    BackgroundTaskCompletionReason2[BackgroundTaskCompletionReason2["TASK_PROGRESS"] = 2] = "TASK_PROGRESS";
    BackgroundTaskCompletionReason2[BackgroundTaskCompletionReason2["WORKER_REPARENTED"] = 3] = "WORKER_REPARENTED";
})(BackgroundTaskCompletionReason || (BackgroundTaskCompletionReason = {}));
proto3.util.setEnumType(BackgroundTaskCompletionReason, "agent.v1.BackgroundTaskCompletionReason", [
    {
        no: 0,
        name: "BACKGROUND_TASK_COMPLETION_REASON_UNSPECIFIED"
    },
    {
        no: 1,
        name: "BACKGROUND_TASK_COMPLETION_REASON_TASK_FINISHED"
    },
    {
        no: 2,
        name: "BACKGROUND_TASK_COMPLETION_REASON_TASK_PROGRESS"
    },
    {
        no: 3,
        name: "BACKGROUND_TASK_COMPLETION_REASON_WORKER_REPARENTED"
    }
]);
(function(BackgroundTaskNotificationContext2) {
    BackgroundTaskNotificationContext2[BackgroundTaskNotificationContext2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    BackgroundTaskNotificationContext2[BackgroundTaskNotificationContext2["USER_DRIVEN_INTERACTIVE_CHILD"] = 1] = "USER_DRIVEN_INTERACTIVE_CHILD";
})(BackgroundTaskNotificationContext || (BackgroundTaskNotificationContext = {}));
proto3.util.setEnumType(BackgroundTaskNotificationContext, "agent.v1.BackgroundTaskNotificationContext", [
    {
        no: 0,
        name: "BACKGROUND_TASK_NOTIFICATION_CONTEXT_UNSPECIFIED"
    },
    {
        no: 1,
        name: "BACKGROUND_TASK_NOTIFICATION_CONTEXT_USER_DRIVEN_INTERACTIVE_CHILD"
    }
]);
(function(SubagentRunStatus2) {
    SubagentRunStatus2[SubagentRunStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    SubagentRunStatus2[SubagentRunStatus2["RUNNING"] = 1] = "RUNNING";
    SubagentRunStatus2[SubagentRunStatus2["BACKGROUNDED"] = 2] = "BACKGROUNDED";
    SubagentRunStatus2[SubagentRunStatus2["SUCCESS"] = 3] = "SUCCESS";
    SubagentRunStatus2[SubagentRunStatus2["ERROR"] = 4] = "ERROR";
    SubagentRunStatus2[SubagentRunStatus2["ABORTED"] = 5] = "ABORTED";
})(SubagentRunStatus || (SubagentRunStatus = {}));
proto3.util.setEnumType(SubagentRunStatus, "agent.v1.SubagentRunStatus", [
    {
        no: 0,
        name: "SUBAGENT_RUN_STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "SUBAGENT_RUN_STATUS_RUNNING"
    },
    {
        no: 2,
        name: "SUBAGENT_RUN_STATUS_BACKGROUNDED"
    },
    {
        no: 3,
        name: "SUBAGENT_RUN_STATUS_SUCCESS"
    },
    {
        no: 4,
        name: "SUBAGENT_RUN_STATUS_ERROR"
    },
    {
        no: 5,
        name: "SUBAGENT_RUN_STATUS_ABORTED"
    }
]);
(function(CustomModeSource2) {
    CustomModeSource2[CustomModeSource2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    CustomModeSource2[CustomModeSource2["AGENT_SKILL"] = 1] = "AGENT_SKILL";
    CustomModeSource2[CustomModeSource2["PLUGIN_SKILL"] = 2] = "PLUGIN_SKILL";
    CustomModeSource2[CustomModeSource2["REPO_SKILL"] = 3] = "REPO_SKILL";
    CustomModeSource2[CustomModeSource2["MANAGED_SKILL"] = 4] = "MANAGED_SKILL";
})(CustomModeSource || (CustomModeSource = {}));
proto3.util.setEnumType(CustomModeSource, "agent.v1.CustomModeSource", [
    {
        no: 0,
        name: "CUSTOM_MODE_SOURCE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "CUSTOM_MODE_SOURCE_AGENT_SKILL"
    },
    {
        no: 2,
        name: "CUSTOM_MODE_SOURCE_PLUGIN_SKILL"
    },
    {
        no: 3,
        name: "CUSTOM_MODE_SOURCE_REPO_SKILL"
    },
    {
        no: 4,
        name: "CUSTOM_MODE_SOURCE_MANAGED_SKILL"
    }
]);
(function(SimulatedMsgReason2) {
    SimulatedMsgReason2[SimulatedMsgReason2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    SimulatedMsgReason2[SimulatedMsgReason2["PLAN_EXECUTION"] = 1] = "PLAN_EXECUTION";
    SimulatedMsgReason2[SimulatedMsgReason2["COMMIT_REMINDER"] = 2] = "COMMIT_REMINDER";
    SimulatedMsgReason2[SimulatedMsgReason2["BACKGROUND_TASK_COMPLETION"] = 3] = "BACKGROUND_TASK_COMPLETION";
    SimulatedMsgReason2[SimulatedMsgReason2["DIFF_TAB_COMMIT"] = 4] = "DIFF_TAB_COMMIT";
    SimulatedMsgReason2[SimulatedMsgReason2["DIFF_TAB_COMMIT_AND_PUSH"] = 5] = "DIFF_TAB_COMMIT_AND_PUSH";
    SimulatedMsgReason2[SimulatedMsgReason2["DIFF_TAB_PUSH"] = 6] = "DIFF_TAB_PUSH";
    SimulatedMsgReason2[SimulatedMsgReason2["DIFF_TAB_CREATE_PR"] = 7] = "DIFF_TAB_CREATE_PR";
    SimulatedMsgReason2[SimulatedMsgReason2["DIFF_TAB_FIX_MERGE_CONFLICTS"] = 8] = "DIFF_TAB_FIX_MERGE_CONFLICTS";
    SimulatedMsgReason2[SimulatedMsgReason2["USER_SENT_TO_SUBAGENT"] = 9] = "USER_SENT_TO_SUBAGENT";
    SimulatedMsgReason2[SimulatedMsgReason2["USER_INTERRUPTED_SUBAGENT"] = 10] = "USER_INTERRUPTED_SUBAGENT";
    SimulatedMsgReason2[SimulatedMsgReason2["USER_QUEUED_TO_SUBAGENT"] = 11] = "USER_QUEUED_TO_SUBAGENT";
    SimulatedMsgReason2[SimulatedMsgReason2["BABYSIT_PR_IN_CLOUD"] = 12] = "BABYSIT_PR_IN_CLOUD";
    SimulatedMsgReason2[SimulatedMsgReason2["CI_PANEL_INVESTIGATE_FAILURE"] = 13] = "CI_PANEL_INVESTIGATE_FAILURE";
    SimulatedMsgReason2[SimulatedMsgReason2["MULTITASK"] = 14] = "MULTITASK";
    SimulatedMsgReason2[SimulatedMsgReason2["BUILD_IN_PARALLEL"] = 15] = "BUILD_IN_PARALLEL";
    SimulatedMsgReason2[SimulatedMsgReason2["MULTITASK_SPLIT_PRS"] = 16] = "MULTITASK_SPLIT_PRS";
    SimulatedMsgReason2[SimulatedMsgReason2["APPLY_LOCALLY"] = 17] = "APPLY_LOCALLY";
    SimulatedMsgReason2[SimulatedMsgReason2["CHECKOUT_BRANCH"] = 18] = "CHECKOUT_BRANCH";
    SimulatedMsgReason2[SimulatedMsgReason2["DIFF_TAB_UPDATE_BRANCH"] = 19] = "DIFF_TAB_UPDATE_BRANCH";
    SimulatedMsgReason2[SimulatedMsgReason2["PR_TAB_BUGBOT_FIX"] = 20] = "PR_TAB_BUGBOT_FIX";
    SimulatedMsgReason2[SimulatedMsgReason2["RUN_BUGBOT_REVIEW"] = 22] = "RUN_BUGBOT_REVIEW";
    SimulatedMsgReason2[SimulatedMsgReason2["RUN_SECURITY_REVIEW"] = 23] = "RUN_SECURITY_REVIEW";
    SimulatedMsgReason2[SimulatedMsgReason2["FSD_APPLY_FINDING"] = 24] = "FSD_APPLY_FINDING";
    SimulatedMsgReason2[SimulatedMsgReason2["FSD_UNDO_FINDING"] = 25] = "FSD_UNDO_FINDING";
    SimulatedMsgReason2[SimulatedMsgReason2["FSD_START"] = 26] = "FSD_START";
    SimulatedMsgReason2[SimulatedMsgReason2["FSD_PR_INTERRUPT"] = 27] = "FSD_PR_INTERRUPT";
    SimulatedMsgReason2[SimulatedMsgReason2["SUBSCRIPTION"] = 28] = "SUBSCRIPTION";
    SimulatedMsgReason2[SimulatedMsgReason2["DIFF_TAB_CREATE_BRANCH"] = 29] = "DIFF_TAB_CREATE_BRANCH";
    SimulatedMsgReason2[SimulatedMsgReason2["AGENT_STORE_CONFLICT"] = 30] = "AGENT_STORE_CONFLICT";
    SimulatedMsgReason2[SimulatedMsgReason2["GOAL_CONTINUATION"] = 31] = "GOAL_CONTINUATION";
    SimulatedMsgReason2[SimulatedMsgReason2["PROJECT_KICKOFF"] = 32] = "PROJECT_KICKOFF";
})(SimulatedMsgReason || (SimulatedMsgReason = {}));
proto3.util.setEnumType(SimulatedMsgReason, "agent.v1.SimulatedMsgReason", [
    {
        no: 0,
        name: "SIMULATED_MSG_REASON_UNSPECIFIED"
    },
    {
        no: 1,
        name: "SIMULATED_MSG_REASON_PLAN_EXECUTION"
    },
    {
        no: 2,
        name: "SIMULATED_MSG_REASON_COMMIT_REMINDER"
    },
    {
        no: 3,
        name: "SIMULATED_MSG_REASON_BACKGROUND_TASK_COMPLETION"
    },
    {
        no: 4,
        name: "SIMULATED_MSG_REASON_DIFF_TAB_COMMIT"
    },
    {
        no: 5,
        name: "SIMULATED_MSG_REASON_DIFF_TAB_COMMIT_AND_PUSH"
    },
    {
        no: 6,
        name: "SIMULATED_MSG_REASON_DIFF_TAB_PUSH"
    },
    {
        no: 7,
        name: "SIMULATED_MSG_REASON_DIFF_TAB_CREATE_PR"
    },
    {
        no: 8,
        name: "SIMULATED_MSG_REASON_DIFF_TAB_FIX_MERGE_CONFLICTS"
    },
    {
        no: 9,
        name: "SIMULATED_MSG_REASON_USER_SENT_TO_SUBAGENT"
    },
    {
        no: 10,
        name: "SIMULATED_MSG_REASON_USER_INTERRUPTED_SUBAGENT"
    },
    {
        no: 11,
        name: "SIMULATED_MSG_REASON_USER_QUEUED_TO_SUBAGENT"
    },
    {
        no: 12,
        name: "SIMULATED_MSG_REASON_BABYSIT_PR_IN_CLOUD"
    },
    {
        no: 13,
        name: "SIMULATED_MSG_REASON_CI_PANEL_INVESTIGATE_FAILURE"
    },
    {
        no: 14,
        name: "SIMULATED_MSG_REASON_MULTITASK"
    },
    {
        no: 15,
        name: "SIMULATED_MSG_REASON_BUILD_IN_PARALLEL"
    },
    {
        no: 16,
        name: "SIMULATED_MSG_REASON_MULTITASK_SPLIT_PRS"
    },
    {
        no: 17,
        name: "SIMULATED_MSG_REASON_APPLY_LOCALLY"
    },
    {
        no: 18,
        name: "SIMULATED_MSG_REASON_CHECKOUT_BRANCH"
    },
    {
        no: 19,
        name: "SIMULATED_MSG_REASON_DIFF_TAB_UPDATE_BRANCH"
    },
    {
        no: 20,
        name: "SIMULATED_MSG_REASON_PR_TAB_BUGBOT_FIX"
    },
    {
        no: 22,
        name: "SIMULATED_MSG_REASON_RUN_BUGBOT_REVIEW"
    },
    {
        no: 23,
        name: "SIMULATED_MSG_REASON_RUN_SECURITY_REVIEW"
    },
    {
        no: 24,
        name: "SIMULATED_MSG_REASON_FSD_APPLY_FINDING"
    },
    {
        no: 25,
        name: "SIMULATED_MSG_REASON_FSD_UNDO_FINDING"
    },
    {
        no: 26,
        name: "SIMULATED_MSG_REASON_FSD_START"
    },
    {
        no: 27,
        name: "SIMULATED_MSG_REASON_FSD_PR_INTERRUPT"
    },
    {
        no: 28,
        name: "SIMULATED_MSG_REASON_SUBSCRIPTION"
    },
    {
        no: 29,
        name: "SIMULATED_MSG_REASON_DIFF_TAB_CREATE_BRANCH"
    },
    {
        no: 30,
        name: "SIMULATED_MSG_REASON_AGENT_STORE_CONFLICT"
    },
    {
        no: 31,
        name: "SIMULATED_MSG_REASON_GOAL_CONTINUATION"
    },
    {
        no: 32,
        name: "SIMULATED_MSG_REASON_PROJECT_KICKOFF"
    }
]);
(function(SubscriptionSource2) {
    SubscriptionSource2[SubscriptionSource2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    SubscriptionSource2[SubscriptionSource2["SLACK"] = 1] = "SLACK";
    SubscriptionSource2[SubscriptionSource2["GITHUB"] = 2] = "GITHUB";
    SubscriptionSource2[SubscriptionSource2["LINEAR"] = 3] = "LINEAR";
    SubscriptionSource2[SubscriptionSource2["ORIGIN"] = 4] = "ORIGIN";
})(SubscriptionSource || (SubscriptionSource = {}));
proto3.util.setEnumType(SubscriptionSource, "agent.v1.SubscriptionSource", [
    {
        no: 0,
        name: "SUBSCRIPTION_SOURCE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "SUBSCRIPTION_SOURCE_SLACK"
    },
    {
        no: 2,
        name: "SUBSCRIPTION_SOURCE_GITHUB"
    },
    {
        no: 3,
        name: "SUBSCRIPTION_SOURCE_LINEAR"
    },
    {
        no: 4,
        name: "SUBSCRIPTION_SOURCE_ORIGIN"
    }
]);
(function(ThinkingStyle2) {
    ThinkingStyle2[ThinkingStyle2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    ThinkingStyle2[ThinkingStyle2["DEFAULT"] = 1] = "DEFAULT";
    ThinkingStyle2[ThinkingStyle2["CODEX"] = 2] = "CODEX";
    ThinkingStyle2[ThinkingStyle2["GPT5"] = 3] = "GPT5";
})(ThinkingStyle || (ThinkingStyle = {}));
proto3.util.setEnumType(ThinkingStyle, "agent.v1.ThinkingStyle", [
    {
        no: 0,
        name: "THINKING_STYLE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "THINKING_STYLE_DEFAULT"
    },
    {
        no: 2,
        name: "THINKING_STYLE_CODEX"
    },
    {
        no: 3,
        name: "THINKING_STYLE_GPT5"
    }
]);
(function(ResponseComparisonDisplayOrder2) {
    ResponseComparisonDisplayOrder2[ResponseComparisonDisplayOrder2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    ResponseComparisonDisplayOrder2[ResponseComparisonDisplayOrder2["PARENT_FIRST"] = 1] = "PARENT_FIRST";
    ResponseComparisonDisplayOrder2[ResponseComparisonDisplayOrder2["ALTERNATE_FIRST"] = 2] = "ALTERNATE_FIRST";
})(ResponseComparisonDisplayOrder || (ResponseComparisonDisplayOrder = {}));
proto3.util.setEnumType(ResponseComparisonDisplayOrder, "agent.v1.ResponseComparisonDisplayOrder", [
    {
        no: 0,
        name: "RESPONSE_COMPARISON_DISPLAY_ORDER_UNSPECIFIED"
    },
    {
        no: 1,
        name: "RESPONSE_COMPARISON_DISPLAY_ORDER_PARENT_FIRST"
    },
    {
        no: 2,
        name: "RESPONSE_COMPARISON_DISPLAY_ORDER_ALTERNATE_FIRST"
    }
]);
(function(ResponseComparisonSkipReason2) {
    ResponseComparisonSkipReason2[ResponseComparisonSkipReason2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    ResponseComparisonSkipReason2[ResponseComparisonSkipReason2["ALTERNATE_TOOL_CALL"] = 1] = "ALTERNATE_TOOL_CALL";
    ResponseComparisonSkipReason2[ResponseComparisonSkipReason2["INFERENCE_ERROR"] = 2] = "INFERENCE_ERROR";
    ResponseComparisonSkipReason2[ResponseComparisonSkipReason2["TIMEOUT"] = 3] = "TIMEOUT";
    ResponseComparisonSkipReason2[ResponseComparisonSkipReason2["CANCELLED"] = 4] = "CANCELLED";
})(ResponseComparisonSkipReason || (ResponseComparisonSkipReason = {}));
proto3.util.setEnumType(ResponseComparisonSkipReason, "agent.v1.ResponseComparisonSkipReason", [
    {
        no: 0,
        name: "RESPONSE_COMPARISON_SKIP_REASON_UNSPECIFIED"
    },
    {
        no: 1,
        name: "RESPONSE_COMPARISON_SKIP_REASON_ALTERNATE_TOOL_CALL"
    },
    {
        no: 2,
        name: "RESPONSE_COMPARISON_SKIP_REASON_INFERENCE_ERROR"
    },
    {
        no: 3,
        name: "RESPONSE_COMPARISON_SKIP_REASON_TIMEOUT"
    },
    {
        no: 4,
        name: "RESPONSE_COMPARISON_SKIP_REASON_CANCELLED"
    }
]);
var TaskArgs$Runtime = (()=>class _TaskArgs extends Message {
        constructor(data){
            super();
            this.description = "";
            this.prompt = "";
            this.attachments = [];
            this.mode = TaskMode.UNSPECIFIED;
            this.respondingToMessageIds = [];
            this.environment = SubagentExecutionEnvironment.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _TaskArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _TaskArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _TaskArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_TaskArgs, a, b2);
        }
    })();
var TaskArgs = TaskArgs$Runtime;
TaskArgs.runtime = proto3;
TaskArgs.typeName = "agent.v1.TaskArgs";
TaskArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "subagent_type",
            kind: "message",
            T: SubagentType
        },
        {
            no: 4,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "resume",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "agent_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "attachments",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 8,
            name: "mode",
            kind: "enum",
            T: proto3.getEnumType(TaskMode)
        },
        {
            no: 9,
            name: "responding_to_message_ids",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 10,
            name: "environment",
            kind: "enum",
            T: proto3.getEnumType(SubagentExecutionEnvironment)
        },
        {
            no: 11,
            name: "machine",
            kind: "message",
            T: TargetMachine,
            opt: true
        }
    ]);
var TargetMachine$Runtime = (()=>class _TargetMachine extends Message {
        constructor(data){
            super();
            this.machine = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _TargetMachine().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _TargetMachine().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _TargetMachine().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_TargetMachine, a, b2);
        }
    })();
var TargetMachine = TargetMachine$Runtime;
TargetMachine.runtime = proto3;
TargetMachine.typeName = "agent.v1.TargetMachine";
TargetMachine.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "same_machine",
            kind: "message",
            T: SameMachineTarget,
            oneof: "machine"
        },
        {
            no: 2,
            name: "new_cloud_vm",
            kind: "message",
            T: NewCloudVmTarget,
            oneof: "machine"
        },
        {
            no: 3,
            name: "self_hosted_worker",
            kind: "message",
            T: SelfHostedWorkerTarget,
            oneof: "machine"
        },
        {
            no: 4,
            name: "self_hosted_pool",
            kind: "message",
            T: SelfHostedPoolTarget,
            oneof: "machine"
        }
    ]);
var SameMachineTarget$Runtime = (()=>class _SameMachineTarget extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SameMachineTarget().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SameMachineTarget().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SameMachineTarget().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SameMachineTarget, a, b2);
        }
    })();
var SameMachineTarget = SameMachineTarget$Runtime;
SameMachineTarget.runtime = proto3;
SameMachineTarget.typeName = "agent.v1.SameMachineTarget";
SameMachineTarget.fields = proto3.util.newFieldList(()=>[]);
var NewCloudVmTarget$Runtime = (()=>class _NewCloudVmTarget extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _NewCloudVmTarget().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _NewCloudVmTarget().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _NewCloudVmTarget().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_NewCloudVmTarget, a, b2);
        }
    })();
var NewCloudVmTarget = NewCloudVmTarget$Runtime;
NewCloudVmTarget.runtime = proto3;
NewCloudVmTarget.typeName = "agent.v1.NewCloudVmTarget";
NewCloudVmTarget.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "environment_build_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var SelfHostedWorkerTarget$Runtime = (()=>class _SelfHostedWorkerTarget extends Message {
        constructor(data){
            super();
            this.workerId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelfHostedWorkerTarget().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelfHostedWorkerTarget().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelfHostedWorkerTarget().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelfHostedWorkerTarget, a, b2);
        }
    })();
var SelfHostedWorkerTarget = SelfHostedWorkerTarget$Runtime;
SelfHostedWorkerTarget.runtime = proto3;
SelfHostedWorkerTarget.typeName = "agent.v1.SelfHostedWorkerTarget";
SelfHostedWorkerTarget.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "worker_id",
            kind: "scalar",
            T: 9
        }
    ]);
var SelfHostedPoolTarget$Runtime = (()=>class _SelfHostedPoolTarget extends Message {
        constructor(data){
            super();
            this.labels = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelfHostedPoolTarget().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelfHostedPoolTarget().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelfHostedPoolTarget().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelfHostedPoolTarget, a, b2);
        }
    })();
var SelfHostedPoolTarget = SelfHostedPoolTarget$Runtime;
SelfHostedPoolTarget.runtime = proto3;
SelfHostedPoolTarget.typeName = "agent.v1.SelfHostedPoolTarget";
SelfHostedPoolTarget.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "pool",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "labels",
            kind: "message",
            T: SelfHostedWorkerLabel,
            repeated: true
        }
    ]);
var SelfHostedWorkerLabel$Runtime = (()=>class _SelfHostedWorkerLabel extends Message {
        constructor(data){
            super();
            this.key = "";
            this.value = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelfHostedWorkerLabel().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelfHostedWorkerLabel().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelfHostedWorkerLabel().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelfHostedWorkerLabel, a, b2);
        }
    })();
var SelfHostedWorkerLabel = SelfHostedWorkerLabel$Runtime;
SelfHostedWorkerLabel.runtime = proto3;
SelfHostedWorkerLabel.typeName = "agent.v1.SelfHostedWorkerLabel";
SelfHostedWorkerLabel.fields = proto3.util.newFieldList(()=>[
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
var TaskSuccess$Runtime = (()=>class _TaskSuccess extends Message {
        constructor(data){
            super();
            this.conversationSteps = [];
            this.isBackground = false;
            this.backgroundReason = SubagentBackgroundReason.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _TaskSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _TaskSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _TaskSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_TaskSuccess, a, b2);
        }
    })();
var TaskSuccess = TaskSuccess$Runtime;
TaskSuccess.runtime = proto3;
TaskSuccess.typeName = "agent.v1.TaskSuccess";
TaskSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "conversation_steps",
            kind: "message",
            T: ConversationStep,
            repeated: true
        },
        {
            no: 2,
            name: "agent_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "is_background",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "duration_ms",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 5,
            name: "result_suffix",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "background_reason",
            kind: "enum",
            T: proto3.getEnumType(SubagentBackgroundReason)
        },
        {
            no: 7,
            name: "transcript_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var TaskError$Runtime = (()=>class _TaskError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _TaskError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _TaskError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _TaskError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_TaskError, a, b2);
        }
    })();
var TaskError = TaskError$Runtime;
TaskError.runtime = proto3;
TaskError.typeName = "agent.v1.TaskError";
TaskError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var TaskResult$Runtime = (()=>class _TaskResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _TaskResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _TaskResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _TaskResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_TaskResult, a, b2);
        }
    })();
var TaskResult = TaskResult$Runtime;
TaskResult.runtime = proto3;
TaskResult.typeName = "agent.v1.TaskResult";
TaskResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: TaskSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: TaskError,
            oneof: "result"
        }
    ]);
var TaskToolCall$Runtime = (()=>class _TaskToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _TaskToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _TaskToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _TaskToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_TaskToolCall, a, b2);
        }
    })();
var TaskToolCall = TaskToolCall$Runtime;
TaskToolCall.runtime = proto3;
TaskToolCall.typeName = "agent.v1.TaskToolCall";
TaskToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: TaskArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: TaskResult
        },
        {
            no: 3,
            name: "cloud_agent_bc_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var TaskToolCallDelta$Runtime = (()=>class _TaskToolCallDelta extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _TaskToolCallDelta().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _TaskToolCallDelta().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _TaskToolCallDelta().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_TaskToolCallDelta, a, b2);
        }
    })();
var TaskToolCallDelta = TaskToolCallDelta$Runtime;
TaskToolCallDelta.runtime = proto3;
TaskToolCallDelta.typeName = "agent.v1.TaskToolCallDelta";
TaskToolCallDelta.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "interaction_update",
            kind: "message",
            T: InteractionUpdate
        }
    ]);
var SetActiveBranchArgs$Runtime = (()=>class _SetActiveBranchArgs extends Message {
        constructor(data){
            super();
            this.path = "";
            this.branchName = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SetActiveBranchArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SetActiveBranchArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SetActiveBranchArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SetActiveBranchArgs, a, b2);
        }
    })();
var SetActiveBranchArgs = SetActiveBranchArgs$Runtime;
SetActiveBranchArgs.runtime = proto3;
SetActiveBranchArgs.typeName = "agent.v1.SetActiveBranchArgs";
SetActiveBranchArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "branch_name",
            kind: "scalar",
            T: 9
        }
    ]);
var SetActiveBranchSuccess$Runtime = (()=>class _SetActiveBranchSuccess extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SetActiveBranchSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SetActiveBranchSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SetActiveBranchSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SetActiveBranchSuccess, a, b2);
        }
    })();
var SetActiveBranchSuccess = SetActiveBranchSuccess$Runtime;
SetActiveBranchSuccess.runtime = proto3;
SetActiveBranchSuccess.typeName = "agent.v1.SetActiveBranchSuccess";
SetActiveBranchSuccess.fields = proto3.util.newFieldList(()=>[]);
var SetActiveBranchError$Runtime = (()=>class _SetActiveBranchError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SetActiveBranchError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SetActiveBranchError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SetActiveBranchError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SetActiveBranchError, a, b2);
        }
    })();
var SetActiveBranchError = SetActiveBranchError$Runtime;
SetActiveBranchError.runtime = proto3;
SetActiveBranchError.typeName = "agent.v1.SetActiveBranchError";
SetActiveBranchError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var SetActiveBranchResult$Runtime = (()=>class _SetActiveBranchResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SetActiveBranchResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SetActiveBranchResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SetActiveBranchResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SetActiveBranchResult, a, b2);
        }
    })();
var SetActiveBranchResult = SetActiveBranchResult$Runtime;
SetActiveBranchResult.runtime = proto3;
SetActiveBranchResult.typeName = "agent.v1.SetActiveBranchResult";
SetActiveBranchResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: SetActiveBranchSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: SetActiveBranchError,
            oneof: "result"
        }
    ]);
var SetActiveBranchToolCall$Runtime = (()=>class _SetActiveBranchToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SetActiveBranchToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SetActiveBranchToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SetActiveBranchToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SetActiveBranchToolCall, a, b2);
        }
    })();
var SetActiveBranchToolCall = SetActiveBranchToolCall$Runtime;
SetActiveBranchToolCall.runtime = proto3;
SetActiveBranchToolCall.typeName = "agent.v1.SetActiveBranchToolCall";
SetActiveBranchToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: SetActiveBranchArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: SetActiveBranchResult
        }
    ]);
var ToolCall$Runtime = (()=>class _ToolCall extends Message {
        constructor(data){
            super();
            this.tool = {
                case: void 0
            };
            this.hookAdditionalContexts = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ToolCall, a, b2);
        }
    })();
var ToolCall = ToolCall$Runtime;
ToolCall.runtime = proto3;
ToolCall.typeName = "agent.v1.ToolCall";
ToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "shell_tool_call",
            kind: "message",
            T: ShellToolCall,
            oneof: "tool"
        },
        {
            no: 3,
            name: "delete_tool_call",
            kind: "message",
            T: DeleteToolCall,
            oneof: "tool"
        },
        {
            no: 4,
            name: "glob_tool_call",
            kind: "message",
            T: GlobToolCall,
            oneof: "tool"
        },
        {
            no: 5,
            name: "grep_tool_call",
            kind: "message",
            T: GrepToolCall,
            oneof: "tool"
        },
        {
            no: 8,
            name: "read_tool_call",
            kind: "message",
            T: ReadToolCall,
            oneof: "tool"
        },
        {
            no: 9,
            name: "update_todos_tool_call",
            kind: "message",
            T: UpdateTodosToolCall,
            oneof: "tool"
        },
        {
            no: 10,
            name: "read_todos_tool_call",
            kind: "message",
            T: ReadTodosToolCall,
            oneof: "tool"
        },
        {
            no: 12,
            name: "edit_tool_call",
            kind: "message",
            T: EditToolCall,
            oneof: "tool"
        },
        {
            no: 13,
            name: "ls_tool_call",
            kind: "message",
            T: LsToolCall,
            oneof: "tool"
        },
        {
            no: 14,
            name: "read_lints_tool_call",
            kind: "message",
            T: ReadLintsToolCall,
            oneof: "tool"
        },
        {
            no: 15,
            name: "mcp_tool_call",
            kind: "message",
            T: McpToolCall,
            oneof: "tool"
        },
        {
            no: 16,
            name: "sem_search_tool_call",
            kind: "message",
            T: SemSearchToolCall,
            oneof: "tool"
        },
        {
            no: 17,
            name: "create_plan_tool_call",
            kind: "message",
            T: CreatePlanToolCall,
            oneof: "tool"
        },
        {
            no: 18,
            name: "web_search_tool_call",
            kind: "message",
            T: WebSearchToolCall,
            oneof: "tool"
        },
        {
            no: 19,
            name: "task_tool_call",
            kind: "message",
            T: TaskToolCall,
            oneof: "tool"
        },
        {
            no: 20,
            name: "list_mcp_resources_tool_call",
            kind: "message",
            T: ListMcpResourcesToolCall,
            oneof: "tool"
        },
        {
            no: 21,
            name: "read_mcp_resource_tool_call",
            kind: "message",
            T: ReadMcpResourceToolCall,
            oneof: "tool"
        },
        {
            no: 22,
            name: "apply_agent_diff_tool_call",
            kind: "message",
            T: ApplyAgentDiffToolCall,
            oneof: "tool"
        },
        {
            no: 23,
            name: "ask_question_tool_call",
            kind: "message",
            T: AskQuestionToolCall,
            oneof: "tool"
        },
        {
            no: 24,
            name: "fetch_tool_call",
            kind: "message",
            T: FetchToolCall,
            oneof: "tool"
        },
        {
            no: 25,
            name: "switch_mode_tool_call",
            kind: "message",
            T: SwitchModeToolCall,
            oneof: "tool"
        },
        {
            no: 28,
            name: "generate_image_tool_call",
            kind: "message",
            T: GenerateImageToolCall,
            oneof: "tool"
        },
        {
            no: 29,
            name: "record_screen_tool_call",
            kind: "message",
            T: RecordScreenToolCall,
            oneof: "tool"
        },
        {
            no: 30,
            name: "computer_use_tool_call",
            kind: "message",
            T: ComputerUseToolCall,
            oneof: "tool"
        },
        {
            no: 31,
            name: "write_shell_stdin_tool_call",
            kind: "message",
            T: WriteShellStdinToolCall,
            oneof: "tool"
        },
        {
            no: 32,
            name: "reflect_tool_call",
            kind: "message",
            T: ReflectToolCall,
            oneof: "tool"
        },
        {
            no: 33,
            name: "setup_vm_environment_tool_call",
            kind: "message",
            T: SetupVmEnvironmentToolCall,
            oneof: "tool"
        },
        {
            no: 34,
            name: "truncated_tool_call",
            kind: "message",
            T: TruncatedToolCall,
            oneof: "tool"
        },
        {
            no: 35,
            name: "start_grind_execution_tool_call",
            kind: "message",
            T: StartGrindExecutionToolCall,
            oneof: "tool"
        },
        {
            no: 36,
            name: "start_grind_planning_tool_call",
            kind: "message",
            T: StartGrindPlanningToolCall,
            oneof: "tool"
        },
        {
            no: 37,
            name: "web_fetch_tool_call",
            kind: "message",
            T: WebFetchToolCall,
            oneof: "tool"
        },
        {
            no: 38,
            name: "report_bugfix_results_tool_call",
            kind: "message",
            T: ReportBugfixResultsToolCall,
            oneof: "tool"
        },
        {
            no: 39,
            name: "ai_attribution_tool_call",
            kind: "message",
            T: AiAttributionToolCall,
            oneof: "tool"
        },
        {
            no: 40,
            name: "pr_management_tool_call",
            kind: "message",
            T: PrManagementToolCall,
            oneof: "tool"
        },
        {
            no: 41,
            name: "mcp_auth_tool_call",
            kind: "message",
            T: McpAuthToolCall,
            oneof: "tool"
        },
        {
            no: 42,
            name: "await_tool_call",
            kind: "message",
            T: AwaitToolCall,
            oneof: "tool"
        },
        {
            no: 43,
            name: "blame_by_file_path_tool_call",
            kind: "message",
            T: BlameByFilePathToolCall,
            oneof: "tool"
        },
        {
            no: 44,
            name: "get_mcp_tools_tool_call",
            kind: "message",
            T: GetMcpToolsToolCall,
            oneof: "tool"
        },
        {
            no: 45,
            name: "report_bug_tool_call",
            kind: "message",
            T: ReportBugToolCall,
            oneof: "tool"
        },
        {
            no: 46,
            name: "set_active_branch_tool_call",
            kind: "message",
            T: SetActiveBranchToolCall,
            oneof: "tool"
        },
        {
            no: 48,
            name: "communicate_update_tool_call",
            kind: "message",
            T: CommunicateUpdateToolCall,
            oneof: "tool"
        },
        {
            no: 49,
            name: "send_final_summary_tool_call",
            kind: "message",
            T: SendFinalSummaryToolCall,
            oneof: "tool"
        },
        {
            no: 50,
            name: "update_pr_code_tour_tool_call",
            kind: "message",
            T: UpdatePrCodeTourToolCall,
            oneof: "tool"
        },
        {
            no: 51,
            name: "replace_env_tool_call",
            kind: "message",
            T: ReplaceEnvToolCall,
            oneof: "tool"
        },
        {
            no: 52,
            name: "edit_pr_labels_tool_call",
            kind: "message",
            T: EditPrLabelsToolCall,
            oneof: "tool"
        },
        {
            no: 53,
            name: "record_ci_investigation_findings_tool_call",
            kind: "message",
            T: RecordCiInvestigationFindingsToolCall,
            oneof: "tool"
        },
        {
            no: 55,
            name: "send_message_tool_call",
            kind: "message",
            T: SendMessageToolCall,
            oneof: "tool"
        },
        {
            no: 56,
            name: "fetch_cloud_agent_data_tool_call",
            kind: "message",
            T: FetchCloudAgentDataToolCall,
            oneof: "tool"
        },
        {
            no: 58,
            name: "send_to_user_tool_call",
            kind: "message",
            T: SendToUserToolCall,
            oneof: "tool"
        },
        {
            no: 61,
            name: "pi_read_tool_call",
            kind: "message",
            T: PiReadToolCall,
            oneof: "tool"
        },
        {
            no: 62,
            name: "pi_bash_tool_call",
            kind: "message",
            T: PiBashToolCall,
            oneof: "tool"
        },
        {
            no: 63,
            name: "pi_edit_tool_call",
            kind: "message",
            T: PiEditToolCall,
            oneof: "tool"
        },
        {
            no: 64,
            name: "pi_write_tool_call",
            kind: "message",
            T: PiWriteToolCall,
            oneof: "tool"
        },
        {
            no: 65,
            name: "pi_grep_tool_call",
            kind: "message",
            T: PiGrepToolCall,
            oneof: "tool"
        },
        {
            no: 66,
            name: "pi_find_tool_call",
            kind: "message",
            T: PiFindToolCall,
            oneof: "tool"
        },
        {
            no: 67,
            name: "pi_ls_tool_call",
            kind: "message",
            T: PiLsToolCall,
            oneof: "tool"
        },
        {
            no: 68,
            name: "connect_scm_tool_call",
            kind: "message",
            T: ConnectScmToolCall,
            oneof: "tool"
        },
        {
            no: 69,
            name: "search_conversations_tool_call",
            kind: "message",
            T: SearchConversationsToolCall,
            oneof: "tool"
        },
        {
            no: 70,
            name: "create_goal_tool_call",
            kind: "message",
            T: CreateGoalToolCall,
            oneof: "tool"
        },
        {
            no: 71,
            name: "update_goal_tool_call",
            kind: "message",
            T: UpdateGoalToolCall,
            oneof: "tool"
        },
        {
            no: 72,
            name: "adopt_tool_call",
            kind: "message",
            T: AdoptToolCall,
            oneof: "tool"
        },
        {
            no: 73,
            name: "get_agent_status_tool_call",
            kind: "message",
            T: GetAgentStatusToolCall,
            oneof: "tool"
        },
        {
            no: 74,
            name: "send_to_agent_tool_call",
            kind: "message",
            T: SendToAgentToolCall,
            oneof: "tool"
        },
        {
            no: 75,
            name: "read_agent_transcript_tool_call",
            kind: "message",
            T: ReadAgentTranscriptToolCall,
            oneof: "tool"
        },
        {
            no: 76,
            name: "create_agent_tool_call",
            kind: "message",
            T: CreateAgentToolCall,
            oneof: "tool"
        },
        {
            no: 77,
            name: "stop_agent_tool_call",
            kind: "message",
            T: StopAgentToolCall,
            oneof: "tool"
        },
        {
            no: 54,
            name: "hook_additional_contexts",
            kind: "message",
            T: HookAdditionalContext,
            repeated: true
        },
        {
            no: 57,
            name: "tool_call_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 59,
            name: "started_at_ms",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 60,
            name: "completed_at_ms",
            kind: "scalar",
            T: 4,
            opt: true
        }
    ]);
var TruncatedToolCallArgs$Runtime = (()=>class _TruncatedToolCallArgs extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _TruncatedToolCallArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _TruncatedToolCallArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _TruncatedToolCallArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_TruncatedToolCallArgs, a, b2);
        }
    })();
var TruncatedToolCallArgs = TruncatedToolCallArgs$Runtime;
TruncatedToolCallArgs.runtime = proto3;
TruncatedToolCallArgs.typeName = "agent.v1.TruncatedToolCallArgs";
TruncatedToolCallArgs.fields = proto3.util.newFieldList(()=>[]);
var TruncatedToolCallSuccess$Runtime = (()=>class _TruncatedToolCallSuccess extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _TruncatedToolCallSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _TruncatedToolCallSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _TruncatedToolCallSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_TruncatedToolCallSuccess, a, b2);
        }
    })();
var TruncatedToolCallSuccess = TruncatedToolCallSuccess$Runtime;
TruncatedToolCallSuccess.runtime = proto3;
TruncatedToolCallSuccess.typeName = "agent.v1.TruncatedToolCallSuccess";
TruncatedToolCallSuccess.fields = proto3.util.newFieldList(()=>[]);
var TruncatedToolCallError$Runtime = (()=>class _TruncatedToolCallError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _TruncatedToolCallError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _TruncatedToolCallError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _TruncatedToolCallError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_TruncatedToolCallError, a, b2);
        }
    })();
var TruncatedToolCallError = TruncatedToolCallError$Runtime;
TruncatedToolCallError.runtime = proto3;
TruncatedToolCallError.typeName = "agent.v1.TruncatedToolCallError";
TruncatedToolCallError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var TruncatedToolCallResult$Runtime = (()=>class _TruncatedToolCallResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _TruncatedToolCallResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _TruncatedToolCallResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _TruncatedToolCallResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_TruncatedToolCallResult, a, b2);
        }
    })();
var TruncatedToolCallResult = TruncatedToolCallResult$Runtime;
TruncatedToolCallResult.runtime = proto3;
TruncatedToolCallResult.typeName = "agent.v1.TruncatedToolCallResult";
TruncatedToolCallResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: TruncatedToolCallSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: TruncatedToolCallError,
            oneof: "result"
        }
    ]);
var TruncatedToolCall$Runtime = (()=>class _TruncatedToolCall extends Message {
        constructor(data){
            super();
            this.originalStepBlobId = new Uint8Array(0);
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _TruncatedToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _TruncatedToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _TruncatedToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_TruncatedToolCall, a, b2);
        }
    })();
var TruncatedToolCall = TruncatedToolCall$Runtime;
TruncatedToolCall.runtime = proto3;
TruncatedToolCall.typeName = "agent.v1.TruncatedToolCall";
TruncatedToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "original_step_blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "args",
            kind: "message",
            T: TruncatedToolCallArgs
        },
        {
            no: 3,
            name: "result",
            kind: "message",
            T: TruncatedToolCallResult
        }
    ]);
var ToolCallDelta$Runtime = (()=>class _ToolCallDelta extends Message {
        constructor(data){
            super();
            this.delta = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ToolCallDelta().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ToolCallDelta().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ToolCallDelta().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ToolCallDelta, a, b2);
        }
    })();
var ToolCallDelta = ToolCallDelta$Runtime;
ToolCallDelta.runtime = proto3;
ToolCallDelta.typeName = "agent.v1.ToolCallDelta";
ToolCallDelta.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "shell_tool_call_delta",
            kind: "message",
            T: ShellToolCallDelta,
            oneof: "delta"
        },
        {
            no: 2,
            name: "task_tool_call_delta",
            kind: "message",
            T: TaskToolCallDelta,
            oneof: "delta"
        },
        {
            no: 3,
            name: "edit_tool_call_delta",
            kind: "message",
            T: EditToolCallDelta,
            oneof: "delta"
        },
        {
            no: 4,
            name: "replace_env_tool_call_delta",
            kind: "message",
            T: ReplaceEnvToolCallDelta,
            oneof: "delta"
        }
    ]);
var ConversationStep$Runtime = (()=>class _ConversationStep extends Message {
        constructor(data){
            super();
            this.message = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConversationStep().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConversationStep().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConversationStep().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConversationStep, a, b2);
        }
    })();
var ConversationStep = ConversationStep$Runtime;
ConversationStep.runtime = proto3;
ConversationStep.typeName = "agent.v1.ConversationStep";
ConversationStep.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "assistant_message",
            kind: "message",
            T: AssistantMessage,
            oneof: "message"
        },
        {
            no: 2,
            name: "tool_call",
            kind: "message",
            T: ToolCall,
            oneof: "message"
        },
        {
            no: 3,
            name: "thinking_message",
            kind: "message",
            T: ThinkingMessage,
            oneof: "message"
        }
    ]);
var ConversationAction$Runtime = (()=>class _ConversationAction extends Message {
        constructor(data){
            super();
            this.action = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConversationAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConversationAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConversationAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConversationAction, a, b2);
        }
    })();
var ConversationAction = ConversationAction$Runtime;
ConversationAction.runtime = proto3;
ConversationAction.typeName = "agent.v1.ConversationAction";
ConversationAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "user_message_action",
            kind: "message",
            T: UserMessageAction,
            oneof: "action"
        },
        {
            no: 2,
            name: "resume_action",
            kind: "message",
            T: ResumeAction,
            oneof: "action"
        },
        {
            no: 3,
            name: "cancel_action",
            kind: "message",
            T: CancelAction,
            oneof: "action"
        },
        {
            no: 4,
            name: "summarize_action",
            kind: "message",
            T: SummarizeAction,
            oneof: "action"
        },
        {
            no: 5,
            name: "shell_command_action",
            kind: "message",
            T: ShellCommandAction,
            oneof: "action"
        },
        {
            no: 6,
            name: "start_plan_action",
            kind: "message",
            T: StartPlanAction,
            oneof: "action"
        },
        {
            no: 7,
            name: "execute_plan_action",
            kind: "message",
            T: ExecutePlanAction,
            oneof: "action"
        },
        {
            no: 8,
            name: "async_ask_question_completion_action",
            kind: "message",
            T: AsyncAskQuestionCompletionAction,
            oneof: "action"
        },
        {
            no: 10,
            name: "cancel_subagent_action",
            kind: "message",
            T: CancelSubagentAction,
            oneof: "action"
        },
        {
            no: 12,
            name: "background_task_completion_action",
            kind: "message",
            T: BackgroundTaskCompletionAction,
            oneof: "action"
        },
        {
            no: 13,
            name: "background_shell_action",
            kind: "message",
            T: BackgroundShellAction,
            oneof: "action"
        },
        {
            no: 14,
            name: "background_subagent_action",
            kind: "message",
            T: BackgroundSubagentAction,
            oneof: "action"
        },
        {
            no: 16,
            name: "subscription_notification_action",
            kind: "message",
            T: SubscriptionNotificationAction,
            oneof: "action"
        },
        {
            no: 18,
            name: "goal_continuation_action",
            kind: "message",
            T: GoalContinuationAction,
            oneof: "action"
        },
        {
            no: 19,
            name: "inject_context_action",
            kind: "message",
            T: InjectContextAction,
            oneof: "action"
        },
        {
            no: 11,
            name: "triggering_auth_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 15,
            name: "triggering_user_info",
            kind: "message",
            T: TriggeringUserInfo,
            opt: true
        },
        {
            no: 17,
            name: "request_context_parts",
            kind: "message",
            T: RequestContextPartReferences,
            opt: true
        }
    ]);
var TriggeringUserInfo$Runtime = (()=>class _TriggeringUserInfo extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _TriggeringUserInfo().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _TriggeringUserInfo().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _TriggeringUserInfo().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_TriggeringUserInfo, a, b2);
        }
    })();
var TriggeringUserInfo = TriggeringUserInfo$Runtime;
TriggeringUserInfo.runtime = proto3;
TriggeringUserInfo.typeName = "agent.v1.TriggeringUserInfo";
TriggeringUserInfo.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "auth_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "user_id",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
var BackgroundTaskCompletionAction$Runtime = (()=>class _BackgroundTaskCompletionAction extends Message {
        constructor(data){
            super();
            this.completions = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _BackgroundTaskCompletionAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _BackgroundTaskCompletionAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _BackgroundTaskCompletionAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_BackgroundTaskCompletionAction, a, b2);
        }
    })();
var BackgroundTaskCompletionAction = BackgroundTaskCompletionAction$Runtime;
BackgroundTaskCompletionAction.runtime = proto3;
BackgroundTaskCompletionAction.typeName = "agent.v1.BackgroundTaskCompletionAction";
BackgroundTaskCompletionAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "completions",
            kind: "message",
            T: BackgroundTaskCompletion,
            repeated: true
        }
    ]);
var BackgroundTaskCompletion$Runtime = (()=>class _BackgroundTaskCompletion extends Message {
        constructor(data){
            super();
            this.taskId = "";
            this.kind = BackgroundTaskKind.UNSPECIFIED;
            this.status = BackgroundTaskStatus.UNSPECIFIED;
            this.title = "";
            this.reason = BackgroundTaskCompletionReason.UNSPECIFIED;
            this.notificationContext = BackgroundTaskNotificationContext.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _BackgroundTaskCompletion().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _BackgroundTaskCompletion().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _BackgroundTaskCompletion().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_BackgroundTaskCompletion, a, b2);
        }
    })();
var BackgroundTaskCompletion = BackgroundTaskCompletion$Runtime;
BackgroundTaskCompletion.runtime = proto3;
BackgroundTaskCompletion.typeName = "agent.v1.BackgroundTaskCompletion";
BackgroundTaskCompletion.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "task_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "kind",
            kind: "enum",
            T: proto3.getEnumType(BackgroundTaskKind)
        },
        {
            no: 3,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(BackgroundTaskStatus)
        },
        {
            no: 4,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "detail",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "output_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "thread_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "reason",
            kind: "enum",
            T: proto3.getEnumType(BackgroundTaskCompletionReason)
        },
        {
            no: 9,
            name: "subagent_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "tool_call_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "notification_context",
            kind: "enum",
            T: proto3.getEnumType(BackgroundTaskNotificationContext)
        }
    ]);
var SubagentRunState$Runtime = (()=>class _SubagentRunState extends Message {
        constructor(data){
            super();
            this.parentToolCallId = "";
            this.environment = SubagentExecutionEnvironment.UNSPECIFIED;
            this.status = SubagentRunStatus.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SubagentRunState().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SubagentRunState().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SubagentRunState().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubagentRunState, a, b2);
        }
    })();
var SubagentRunState = SubagentRunState$Runtime;
SubagentRunState.runtime = proto3;
SubagentRunState.typeName = "agent.v1.SubagentRunState";
SubagentRunState.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "parent_tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "subagent_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "environment",
            kind: "enum",
            T: proto3.getEnumType(SubagentExecutionEnvironment)
        },
        {
            no: 4,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(SubagentRunStatus)
        },
        {
            no: 5,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "detail",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "transcript_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "output_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "completed_timestamp_ms",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 10,
            name: "completion_reason",
            kind: "enum",
            T: proto3.getEnumType(BackgroundTaskCompletionReason),
            opt: true
        }
    ]);
var CancelSubagentAction$Runtime = (()=>class _CancelSubagentAction extends Message {
        constructor(data){
            super();
            this.subagentId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CancelSubagentAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CancelSubagentAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CancelSubagentAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CancelSubagentAction, a, b2);
        }
    })();
var CancelSubagentAction = CancelSubagentAction$Runtime;
CancelSubagentAction.runtime = proto3;
CancelSubagentAction.typeName = "agent.v1.CancelSubagentAction";
CancelSubagentAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "subagent_id",
            kind: "scalar",
            T: 9
        }
    ]);
var BackgroundShellAction$Runtime = (()=>class _BackgroundShellAction extends Message {
        constructor(data){
            super();
            this.toolCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _BackgroundShellAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _BackgroundShellAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _BackgroundShellAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_BackgroundShellAction, a, b2);
        }
    })();
var BackgroundShellAction = BackgroundShellAction$Runtime;
BackgroundShellAction.runtime = proto3;
BackgroundShellAction.typeName = "agent.v1.BackgroundShellAction";
BackgroundShellAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
var BackgroundSubagentAction$Runtime = (()=>class _BackgroundSubagentAction extends Message {
        constructor(data){
            super();
            this.toolCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _BackgroundSubagentAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _BackgroundSubagentAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _BackgroundSubagentAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_BackgroundSubagentAction, a, b2);
        }
    })();
var BackgroundSubagentAction = BackgroundSubagentAction$Runtime;
BackgroundSubagentAction.runtime = proto3;
BackgroundSubagentAction.typeName = "agent.v1.BackgroundSubagentAction";
BackgroundSubagentAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
var InterruptedPendingToolCallResolution$Runtime = (()=>class _InterruptedPendingToolCallResolution extends Message {
        constructor(data){
            super();
            this.toolCallId = "";
            this.resolution = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _InterruptedPendingToolCallResolution().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _InterruptedPendingToolCallResolution().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _InterruptedPendingToolCallResolution().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_InterruptedPendingToolCallResolution, a, b2);
        }
    })();
var InterruptedPendingToolCallResolution = InterruptedPendingToolCallResolution$Runtime;
InterruptedPendingToolCallResolution.runtime = proto3;
InterruptedPendingToolCallResolution.typeName = "agent.v1.InterruptedPendingToolCallResolution";
InterruptedPendingToolCallResolution.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "shell_result",
            kind: "message",
            T: ShellResult,
            oneof: "resolution"
        },
        {
            no: 3,
            name: "task_result",
            kind: "message",
            T: TaskResult,
            oneof: "resolution"
        }
    ]);
var InterruptedPendingToolCallResolutions$Runtime = (()=>class _InterruptedPendingToolCallResolutions extends Message {
        constructor(data){
            super();
            this.resolutions = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _InterruptedPendingToolCallResolutions().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _InterruptedPendingToolCallResolutions().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _InterruptedPendingToolCallResolutions().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_InterruptedPendingToolCallResolutions, a, b2);
        }
    })();
var InterruptedPendingToolCallResolutions = InterruptedPendingToolCallResolutions$Runtime;
InterruptedPendingToolCallResolutions.runtime = proto3;
InterruptedPendingToolCallResolutions.typeName = "agent.v1.InterruptedPendingToolCallResolutions";
InterruptedPendingToolCallResolutions.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "resolutions",
            kind: "message",
            T: InterruptedPendingToolCallResolution,
            repeated: true
        }
    ]);
var ConversationHistory$Runtime = (()=>class _ConversationHistory extends Message {
        constructor(data){
            super();
            this.messages = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConversationHistory().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConversationHistory().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConversationHistory().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConversationHistory, a, b2);
        }
    })();
var ConversationHistory = ConversationHistory$Runtime;
ConversationHistory.runtime = proto3;
ConversationHistory.typeName = "agent.v1.ConversationHistory";
ConversationHistory.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "messages",
            kind: "message",
            T: ConversationHistoryMessage,
            repeated: true
        },
        {
            no: 2,
            name: "replace_user_info",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
var ConversationHistoryMessage$Runtime = (()=>class _ConversationHistoryMessage extends Message {
        constructor(data){
            super();
            this.message = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConversationHistoryMessage().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConversationHistoryMessage().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConversationHistoryMessage().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConversationHistoryMessage, a, b2);
        }
    })();
var ConversationHistoryMessage = ConversationHistoryMessage$Runtime;
ConversationHistoryMessage.runtime = proto3;
ConversationHistoryMessage.typeName = "agent.v1.ConversationHistoryMessage";
ConversationHistoryMessage.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "user",
            kind: "message",
            T: ConversationHistoryUserMessage,
            oneof: "message"
        },
        {
            no: 2,
            name: "assistant",
            kind: "message",
            T: ConversationHistoryAssistantMessage,
            oneof: "message"
        },
        {
            no: 3,
            name: "tool",
            kind: "message",
            T: ConversationHistoryToolMessage,
            oneof: "message"
        }
    ]);
var ConversationHistoryUserMessage$Runtime = (()=>class _ConversationHistoryUserMessage extends Message {
        constructor(data){
            super();
            this.content = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConversationHistoryUserMessage().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConversationHistoryUserMessage().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConversationHistoryUserMessage().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConversationHistoryUserMessage, a, b2);
        }
    })();
var ConversationHistoryUserMessage = ConversationHistoryUserMessage$Runtime;
ConversationHistoryUserMessage.runtime = proto3;
ConversationHistoryUserMessage.typeName = "agent.v1.ConversationHistoryUserMessage";
ConversationHistoryUserMessage.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "content",
            kind: "message",
            T: ConversationHistoryUserContent,
            repeated: true
        }
    ]);
var ConversationHistoryUserContent$Runtime = (()=>class _ConversationHistoryUserContent extends Message {
        constructor(data){
            super();
            this.content = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConversationHistoryUserContent().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConversationHistoryUserContent().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConversationHistoryUserContent().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConversationHistoryUserContent, a, b2);
        }
    })();
var ConversationHistoryUserContent = ConversationHistoryUserContent$Runtime;
ConversationHistoryUserContent.runtime = proto3;
ConversationHistoryUserContent.typeName = "agent.v1.ConversationHistoryUserContent";
ConversationHistoryUserContent.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "text",
            kind: "message",
            T: ConversationHistoryTextContent,
            oneof: "content"
        },
        {
            no: 2,
            name: "image",
            kind: "message",
            T: ConversationHistoryImageContent,
            oneof: "content"
        }
    ]);
var ConversationHistoryTextContent$Runtime = (()=>class _ConversationHistoryTextContent extends Message {
        constructor(data){
            super();
            this.text = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConversationHistoryTextContent().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConversationHistoryTextContent().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConversationHistoryTextContent().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConversationHistoryTextContent, a, b2);
        }
    })();
var ConversationHistoryTextContent = ConversationHistoryTextContent$Runtime;
ConversationHistoryTextContent.runtime = proto3;
ConversationHistoryTextContent.typeName = "agent.v1.ConversationHistoryTextContent";
ConversationHistoryTextContent.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]);
var ConversationHistoryImageContent$Runtime = (()=>class _ConversationHistoryImageContent extends Message {
        constructor(data){
            super();
            this.data = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConversationHistoryImageContent().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConversationHistoryImageContent().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConversationHistoryImageContent().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConversationHistoryImageContent, a, b2);
        }
    })();
var ConversationHistoryImageContent = ConversationHistoryImageContent$Runtime;
ConversationHistoryImageContent.runtime = proto3;
ConversationHistoryImageContent.typeName = "agent.v1.ConversationHistoryImageContent";
ConversationHistoryImageContent.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "mime_type",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var ConversationHistoryAssistantMessage$Runtime = (()=>class _ConversationHistoryAssistantMessage extends Message {
        constructor(data){
            super();
            this.content = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConversationHistoryAssistantMessage().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConversationHistoryAssistantMessage().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConversationHistoryAssistantMessage().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConversationHistoryAssistantMessage, a, b2);
        }
    })();
var ConversationHistoryAssistantMessage = ConversationHistoryAssistantMessage$Runtime;
ConversationHistoryAssistantMessage.runtime = proto3;
ConversationHistoryAssistantMessage.typeName = "agent.v1.ConversationHistoryAssistantMessage";
ConversationHistoryAssistantMessage.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "content",
            kind: "message",
            T: ConversationHistoryAssistantContent,
            repeated: true
        }
    ]);
var ConversationHistoryAssistantContent$Runtime = (()=>class _ConversationHistoryAssistantContent extends Message {
        constructor(data){
            super();
            this.content = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConversationHistoryAssistantContent().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConversationHistoryAssistantContent().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConversationHistoryAssistantContent().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConversationHistoryAssistantContent, a, b2);
        }
    })();
var ConversationHistoryAssistantContent = ConversationHistoryAssistantContent$Runtime;
ConversationHistoryAssistantContent.runtime = proto3;
ConversationHistoryAssistantContent.typeName = "agent.v1.ConversationHistoryAssistantContent";
ConversationHistoryAssistantContent.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "text",
            kind: "message",
            T: ConversationHistoryTextContent,
            oneof: "content"
        },
        {
            no: 2,
            name: "reasoning",
            kind: "message",
            T: ConversationHistoryReasoningContent,
            oneof: "content"
        },
        {
            no: 3,
            name: "redacted_reasoning",
            kind: "message",
            T: ConversationHistoryRedactedReasoningContent,
            oneof: "content"
        },
        {
            no: 4,
            name: "tool_call",
            kind: "message",
            T: ConversationHistoryToolCall,
            oneof: "content"
        }
    ]);
var ConversationHistoryReasoningContent$Runtime = (()=>class _ConversationHistoryReasoningContent extends Message {
        constructor(data){
            super();
            this.text = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConversationHistoryReasoningContent().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConversationHistoryReasoningContent().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConversationHistoryReasoningContent().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConversationHistoryReasoningContent, a, b2);
        }
    })();
var ConversationHistoryReasoningContent = ConversationHistoryReasoningContent$Runtime;
ConversationHistoryReasoningContent.runtime = proto3;
ConversationHistoryReasoningContent.typeName = "agent.v1.ConversationHistoryReasoningContent";
ConversationHistoryReasoningContent.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "signature",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var ConversationHistoryRedactedReasoningContent$Runtime = (()=>class _ConversationHistoryRedactedReasoningContent extends Message {
        constructor(data){
            super();
            this.data = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConversationHistoryRedactedReasoningContent().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConversationHistoryRedactedReasoningContent().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConversationHistoryRedactedReasoningContent().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConversationHistoryRedactedReasoningContent, a, b2);
        }
    })();
var ConversationHistoryRedactedReasoningContent = ConversationHistoryRedactedReasoningContent$Runtime;
ConversationHistoryRedactedReasoningContent.runtime = proto3;
ConversationHistoryRedactedReasoningContent.typeName = "agent.v1.ConversationHistoryRedactedReasoningContent";
ConversationHistoryRedactedReasoningContent.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 9
        }
    ]);
var ConversationHistoryToolCall$Runtime = (()=>class _ConversationHistoryToolCall extends Message {
        constructor(data){
            super();
            this.toolCallId = "";
            this.toolName = "";
            this.argsJson = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConversationHistoryToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConversationHistoryToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConversationHistoryToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConversationHistoryToolCall, a, b2);
        }
    })();
var ConversationHistoryToolCall = ConversationHistoryToolCall$Runtime;
ConversationHistoryToolCall.runtime = proto3;
ConversationHistoryToolCall.typeName = "agent.v1.ConversationHistoryToolCall";
ConversationHistoryToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "args_json",
            kind: "scalar",
            T: 9
        }
    ]);
var ConversationHistoryToolMessage$Runtime = (()=>class _ConversationHistoryToolMessage extends Message {
        constructor(data){
            super();
            this.toolCallId = "";
            this.toolName = "";
            this.content = [];
            this.hookAdditionalContexts = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConversationHistoryToolMessage().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConversationHistoryToolMessage().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConversationHistoryToolMessage().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConversationHistoryToolMessage, a, b2);
        }
    })();
var ConversationHistoryToolMessage = ConversationHistoryToolMessage$Runtime;
ConversationHistoryToolMessage.runtime = proto3;
ConversationHistoryToolMessage.typeName = "agent.v1.ConversationHistoryToolMessage";
ConversationHistoryToolMessage.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "content",
            kind: "message",
            T: ConversationHistoryToolResultContent,
            repeated: true
        },
        {
            no: 4,
            name: "is_error",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 5,
            name: "hook_additional_contexts",
            kind: "message",
            T: HookAdditionalContext,
            repeated: true
        }
    ]);
var ConversationHistoryToolResultContent$Runtime = (()=>class _ConversationHistoryToolResultContent extends Message {
        constructor(data){
            super();
            this.content = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConversationHistoryToolResultContent().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConversationHistoryToolResultContent().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConversationHistoryToolResultContent().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConversationHistoryToolResultContent, a, b2);
        }
    })();
var ConversationHistoryToolResultContent = ConversationHistoryToolResultContent$Runtime;
ConversationHistoryToolResultContent.runtime = proto3;
ConversationHistoryToolResultContent.typeName = "agent.v1.ConversationHistoryToolResultContent";
ConversationHistoryToolResultContent.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "text",
            kind: "message",
            T: ConversationHistoryTextContent,
            oneof: "content"
        },
        {
            no: 2,
            name: "image",
            kind: "message",
            T: ConversationHistoryImageContent,
            oneof: "content"
        }
    ]);
var UserMessageAction$Runtime = (()=>class _UserMessageAction extends Message {
        constructor(data){
            super();
            this.prependUserMessages = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UserMessageAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UserMessageAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UserMessageAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UserMessageAction, a, b2);
        }
    })();
var UserMessageAction = UserMessageAction$Runtime;
UserMessageAction.runtime = proto3;
UserMessageAction.typeName = "agent.v1.UserMessageAction";
UserMessageAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "user_message",
            kind: "message",
            T: UserMessage
        },
        {
            no: 2,
            name: "request_context",
            kind: "message",
            T: RequestContext
        },
        {
            no: 3,
            name: "send_to_interaction_listener",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 4,
            name: "prepend_user_messages",
            kind: "message",
            T: UserMessage,
            repeated: true
        },
        {
            no: 6,
            name: "interrupted_pending_tool_call_resolutions",
            kind: "message",
            T: InterruptedPendingToolCallResolutions,
            opt: true
        },
        {
            no: 7,
            name: "conversation_history",
            kind: "message",
            T: ConversationHistory,
            opt: true
        }
    ]);
var SubscriptionNotificationAction$Runtime = (()=>class _SubscriptionNotificationAction extends Message {
        constructor(data){
            super();
            this.notifications = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SubscriptionNotificationAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SubscriptionNotificationAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SubscriptionNotificationAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubscriptionNotificationAction, a, b2);
        }
    })();
var SubscriptionNotificationAction = SubscriptionNotificationAction$Runtime;
SubscriptionNotificationAction.runtime = proto3;
SubscriptionNotificationAction.typeName = "agent.v1.SubscriptionNotificationAction";
SubscriptionNotificationAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "notifications",
            kind: "message",
            T: UserMessage,
            repeated: true
        },
        {
            no: 2,
            name: "request_context",
            kind: "message",
            T: RequestContext
        },
        {
            no: 3,
            name: "send_to_interaction_listener",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
var GoalContinuationAction$Runtime = (()=>class _GoalContinuationAction extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GoalContinuationAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GoalContinuationAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GoalContinuationAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GoalContinuationAction, a, b2);
        }
    })();
var GoalContinuationAction = GoalContinuationAction$Runtime;
GoalContinuationAction.runtime = proto3;
GoalContinuationAction.typeName = "agent.v1.GoalContinuationAction";
GoalContinuationAction.fields = proto3.util.newFieldList(()=>[]);
var InjectContextAction$Runtime = (()=>class _InjectContextAction extends Message {
        constructor(data){
            super();
            this.injectionId = "";
            this.expectedRunId = "";
            this.payload = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _InjectContextAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _InjectContextAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _InjectContextAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_InjectContextAction, a, b2);
        }
    })();
var InjectContextAction = InjectContextAction$Runtime;
InjectContextAction.runtime = proto3;
InjectContextAction.typeName = "agent.v1.InjectContextAction";
InjectContextAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "injection_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "expected_run_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "user_context",
            kind: "message",
            T: UserContextInjection,
            oneof: "payload"
        },
        {
            no: 4,
            name: "system_context",
            kind: "message",
            T: SystemContextInjection,
            oneof: "payload"
        }
    ]);
var UserContextInjection$Runtime = (()=>class _UserContextInjection extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UserContextInjection().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UserContextInjection().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UserContextInjection().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UserContextInjection, a, b2);
        }
    })();
var UserContextInjection = UserContextInjection$Runtime;
UserContextInjection.runtime = proto3;
UserContextInjection.typeName = "agent.v1.UserContextInjection";
UserContextInjection.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "user_message",
            kind: "message",
            T: UserMessage
        },
        {
            no: 2,
            name: "request_context",
            kind: "message",
            T: RequestContext
        }
    ]);
var SystemContextInjection$Runtime = (()=>class _SystemContextInjection extends Message {
        constructor(data){
            super();
            this.producer = "";
            this.content = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SystemContextInjection().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SystemContextInjection().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SystemContextInjection().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SystemContextInjection, a, b2);
        }
    })();
var SystemContextInjection = SystemContextInjection$Runtime;
SystemContextInjection.runtime = proto3;
SystemContextInjection.typeName = "agent.v1.SystemContextInjection";
SystemContextInjection.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "producer",
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
var ContextInjectionState$Runtime = (()=>class _ContextInjectionState extends Message {
        constructor(data){
            super();
            this.state = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ContextInjectionState().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ContextInjectionState().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ContextInjectionState().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ContextInjectionState, a, b2);
        }
    })();
var ContextInjectionState = ContextInjectionState$Runtime;
ContextInjectionState.runtime = proto3;
ContextInjectionState.typeName = "agent.v1.ContextInjectionState";
ContextInjectionState.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "queued",
            kind: "message",
            T: ContextInjectionQueued,
            oneof: "state"
        },
        {
            no: 2,
            name: "delivered",
            kind: "message",
            T: ContextInjectionDelivered,
            oneof: "state"
        },
        {
            no: 3,
            name: "queued_for_next_turn",
            kind: "message",
            T: ContextInjectionQueuedForNextTurn,
            oneof: "state"
        },
        {
            no: 4,
            name: "cancelled",
            kind: "message",
            T: ContextInjectionCancelled,
            oneof: "state"
        },
        {
            no: 5,
            name: "rejected",
            kind: "message",
            T: ContextInjectionRejected,
            oneof: "state"
        }
    ]);
var ContextInjectionQueued$Runtime = (()=>class _ContextInjectionQueued extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ContextInjectionQueued().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ContextInjectionQueued().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ContextInjectionQueued().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ContextInjectionQueued, a, b2);
        }
    })();
var ContextInjectionQueued = ContextInjectionQueued$Runtime;
ContextInjectionQueued.runtime = proto3;
ContextInjectionQueued.typeName = "agent.v1.ContextInjectionQueued";
ContextInjectionQueued.fields = proto3.util.newFieldList(()=>[]);
var ContextInjectionDelivered$Runtime = (()=>class _ContextInjectionDelivered extends Message {
        constructor(data){
            super();
            this.step = 0;
            this.deliveryBatchId = "";
            this.deliveredAtMs = protoInt64.zero;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ContextInjectionDelivered().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ContextInjectionDelivered().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ContextInjectionDelivered().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ContextInjectionDelivered, a, b2);
        }
    })();
var ContextInjectionDelivered = ContextInjectionDelivered$Runtime;
ContextInjectionDelivered.runtime = proto3;
ContextInjectionDelivered.typeName = "agent.v1.ContextInjectionDelivered";
ContextInjectionDelivered.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "step",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "delivery_batch_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "delivered_at_ms",
            kind: "scalar",
            T: 3
        }
    ]);
var ContextInjectionQueuedForNextTurn$Runtime = (()=>class _ContextInjectionQueuedForNextTurn extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ContextInjectionQueuedForNextTurn().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ContextInjectionQueuedForNextTurn().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ContextInjectionQueuedForNextTurn().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ContextInjectionQueuedForNextTurn, a, b2);
        }
    })();
var ContextInjectionQueuedForNextTurn = ContextInjectionQueuedForNextTurn$Runtime;
ContextInjectionQueuedForNextTurn.runtime = proto3;
ContextInjectionQueuedForNextTurn.typeName = "agent.v1.ContextInjectionQueuedForNextTurn";
ContextInjectionQueuedForNextTurn.fields = proto3.util.newFieldList(()=>[]);
var ContextInjectionCancelled$Runtime = (()=>class _ContextInjectionCancelled extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ContextInjectionCancelled().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ContextInjectionCancelled().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ContextInjectionCancelled().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ContextInjectionCancelled, a, b2);
        }
    })();
var ContextInjectionCancelled = ContextInjectionCancelled$Runtime;
ContextInjectionCancelled.runtime = proto3;
ContextInjectionCancelled.typeName = "agent.v1.ContextInjectionCancelled";
ContextInjectionCancelled.fields = proto3.util.newFieldList(()=>[]);
var ContextInjectionRejected$Runtime = (()=>class _ContextInjectionRejected extends Message {
        constructor(data){
            super();
            this.reason = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ContextInjectionRejected().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ContextInjectionRejected().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ContextInjectionRejected().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ContextInjectionRejected, a, b2);
        }
    })();
var ContextInjectionRejected = ContextInjectionRejected$Runtime;
ContextInjectionRejected.runtime = proto3;
ContextInjectionRejected.typeName = "agent.v1.ContextInjectionRejected";
ContextInjectionRejected.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
var SubmittedCustomMode$Runtime = (()=>class _SubmittedCustomMode extends Message {
        constructor(data){
            super();
            this.id = "";
            this.label = "";
            this.source = CustomModeSource.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SubmittedCustomMode().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SubmittedCustomMode().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SubmittedCustomMode().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubmittedCustomMode, a, b2);
        }
    })();
var SubmittedCustomMode = SubmittedCustomMode$Runtime;
SubmittedCustomMode.runtime = proto3;
SubmittedCustomMode.typeName = "agent.v1.SubmittedCustomMode";
SubmittedCustomMode.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "source",
            kind: "enum",
            T: proto3.getEnumType(CustomModeSource)
        },
        {
            no: 6,
            name: "source_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "source_hash",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "managed_skill_id",
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
            name: "plugin_snapshot_token",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var CustomModeDescriptor$Runtime = (()=>class _CustomModeDescriptor extends Message {
        constructor(data){
            super();
            this.id = "";
            this.label = "";
            this.source = CustomModeSource.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CustomModeDescriptor().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CustomModeDescriptor().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CustomModeDescriptor().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CustomModeDescriptor, a, b2);
        }
    })();
var CustomModeDescriptor = CustomModeDescriptor$Runtime;
CustomModeDescriptor.runtime = proto3;
CustomModeDescriptor.typeName = "agent.v1.CustomModeDescriptor";
CustomModeDescriptor.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "label",
            kind: "scalar",
            T: 9
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
            name: "icon",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "color",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "source",
            kind: "enum",
            T: proto3.getEnumType(CustomModeSource)
        },
        {
            no: 7,
            name: "source_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "source_hash",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "managed_skill_id",
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
            name: "plugin_snapshot_token",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var SubmittedExitedCustomMode$Runtime = (()=>class _SubmittedExitedCustomMode extends Message {
        constructor(data){
            super();
            this.id = "";
            this.label = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SubmittedExitedCustomMode().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SubmittedExitedCustomMode().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SubmittedExitedCustomMode().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubmittedExitedCustomMode, a, b2);
        }
    })();
var SubmittedExitedCustomMode = SubmittedExitedCustomMode$Runtime;
SubmittedExitedCustomMode.runtime = proto3;
SubmittedExitedCustomMode.typeName = "agent.v1.SubmittedExitedCustomMode";
SubmittedExitedCustomMode.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "label",
            kind: "scalar",
            T: 9
        }
    ]);
var CustomModeExitIntent$Runtime = (()=>class _CustomModeExitIntent extends Message {
        constructor(data){
            super();
            this.nextMode = AgentMode.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CustomModeExitIntent().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CustomModeExitIntent().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CustomModeExitIntent().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CustomModeExitIntent, a, b2);
        }
    })();
var CustomModeExitIntent = CustomModeExitIntent$Runtime;
CustomModeExitIntent.runtime = proto3;
CustomModeExitIntent.typeName = "agent.v1.CustomModeExitIntent";
CustomModeExitIntent.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "next_mode",
            kind: "enum",
            T: proto3.getEnumType(AgentMode)
        },
        {
            no: 2,
            name: "exited_mode",
            kind: "message",
            T: SubmittedExitedCustomMode
        }
    ]);
var CustomModeIntent$Runtime = (()=>class _CustomModeIntent extends Message {
        constructor(data){
            super();
            this.intent = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CustomModeIntent().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CustomModeIntent().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CustomModeIntent().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CustomModeIntent, a, b2);
        }
    })();
var CustomModeIntent = CustomModeIntent$Runtime;
CustomModeIntent.runtime = proto3;
CustomModeIntent.typeName = "agent.v1.CustomModeIntent";
CustomModeIntent.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "enter",
            kind: "message",
            T: SubmittedCustomMode,
            oneof: "intent"
        },
        {
            no: 2,
            name: "exit",
            kind: "message",
            T: CustomModeExitIntent,
            oneof: "intent"
        }
    ]);
var CancelAction$Runtime = (()=>class _CancelAction extends Message {
        constructor(data){
            super();
            this.reason = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CancelAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CancelAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CancelAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CancelAction, a, b2);
        }
    })();
var CancelAction = CancelAction$Runtime;
CancelAction.runtime = proto3;
CancelAction.typeName = "agent.v1.CancelAction";
CancelAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "interrupted_pending_tool_call_resolutions",
            kind: "message",
            T: InterruptedPendingToolCallResolutions,
            opt: true
        }
    ]);
var ResumeAction$Runtime = (()=>class _ResumeAction extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ResumeAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ResumeAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ResumeAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ResumeAction, a, b2);
        }
    })();
var ResumeAction = ResumeAction$Runtime;
ResumeAction.runtime = proto3;
ResumeAction.typeName = "agent.v1.ResumeAction";
ResumeAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 2,
            name: "request_context",
            kind: "message",
            T: RequestContext
        }
    ]);
var AsyncAskQuestionCompletionAction$Runtime = (()=>class _AsyncAskQuestionCompletionAction extends Message {
        constructor(data){
            super();
            this.originalToolCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AsyncAskQuestionCompletionAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AsyncAskQuestionCompletionAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AsyncAskQuestionCompletionAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AsyncAskQuestionCompletionAction, a, b2);
        }
    })();
var AsyncAskQuestionCompletionAction = AsyncAskQuestionCompletionAction$Runtime;
AsyncAskQuestionCompletionAction.runtime = proto3;
AsyncAskQuestionCompletionAction.typeName = "agent.v1.AsyncAskQuestionCompletionAction";
AsyncAskQuestionCompletionAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "original_tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "original_args",
            kind: "message",
            T: AskQuestionArgs
        },
        {
            no: 3,
            name: "result",
            kind: "message",
            T: AskQuestionResult
        }
    ]);
var SummarizeAction$Runtime = (()=>class _SummarizeAction extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SummarizeAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SummarizeAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SummarizeAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SummarizeAction, a, b2);
        }
    })();
var SummarizeAction = SummarizeAction$Runtime;
SummarizeAction.runtime = proto3;
SummarizeAction.typeName = "agent.v1.SummarizeAction";
SummarizeAction.fields = proto3.util.newFieldList(()=>[]);
var ShellCommandAction$Runtime = (()=>class _ShellCommandAction extends Message {
        constructor(data){
            super();
            this.execId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellCommandAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellCommandAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellCommandAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellCommandAction, a, b2);
        }
    })();
var ShellCommandAction = ShellCommandAction$Runtime;
ShellCommandAction.runtime = proto3;
ShellCommandAction.typeName = "agent.v1.ShellCommandAction";
ShellCommandAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "shell_command",
            kind: "message",
            T: ShellCommand
        },
        {
            no: 2,
            name: "exec_id",
            kind: "scalar",
            T: 9
        }
    ]);
var StartPlanAction$Runtime = (()=>class _StartPlanAction extends Message {
        constructor(data){
            super();
            this.isSpec = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _StartPlanAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _StartPlanAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _StartPlanAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_StartPlanAction, a, b2);
        }
    })();
var StartPlanAction = StartPlanAction$Runtime;
StartPlanAction.runtime = proto3;
StartPlanAction.typeName = "agent.v1.StartPlanAction";
StartPlanAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "user_message",
            kind: "message",
            T: UserMessage
        },
        {
            no: 2,
            name: "request_context",
            kind: "message",
            T: RequestContext
        },
        {
            no: 3,
            name: "is_spec",
            kind: "scalar",
            T: 8
        }
    ]);
var ExecutePlanAction$Runtime = (()=>class _ExecutePlanAction extends Message {
        constructor(data){
            super();
            this.executionMode = AgentMode.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ExecutePlanAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ExecutePlanAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ExecutePlanAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ExecutePlanAction, a, b2);
        }
    })();
var ExecutePlanAction = ExecutePlanAction$Runtime;
ExecutePlanAction.runtime = proto3;
ExecutePlanAction.typeName = "agent.v1.ExecutePlanAction";
ExecutePlanAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "request_context",
            kind: "message",
            T: RequestContext
        },
        {
            no: 2,
            name: "plan",
            kind: "message",
            T: ConversationPlan,
            opt: true
        },
        {
            no: 3,
            name: "plan_file_uri",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "plan_file_content",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "execution_mode",
            kind: "enum",
            T: proto3.getEnumType(AgentMode)
        },
        {
            no: 6,
            name: "kickoff_message_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "plan_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "plan_file_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var SubscriptionEventDisplay$Runtime = (()=>class _SubscriptionEventDisplay extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SubscriptionEventDisplay().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SubscriptionEventDisplay().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SubscriptionEventDisplay().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubscriptionEventDisplay, a, b2);
        }
    })();
var SubscriptionEventDisplay = SubscriptionEventDisplay$Runtime;
SubscriptionEventDisplay.runtime = proto3;
SubscriptionEventDisplay.typeName = "agent.v1.SubscriptionEventDisplay";
SubscriptionEventDisplay.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "display_label",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "resource_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "subscription_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var UserDisplayInfo$Runtime = (()=>class _UserDisplayInfo extends Message {
        constructor(data){
            super();
            this.userId = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UserDisplayInfo().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UserDisplayInfo().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UserDisplayInfo().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UserDisplayInfo, a, b2);
        }
    })();
var UserDisplayInfo = UserDisplayInfo$Runtime;
UserDisplayInfo.runtime = proto3;
UserDisplayInfo.typeName = "agent.v1.UserDisplayInfo";
UserDisplayInfo.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "user_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "display_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "email",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "profile_picture_url",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var ExecutePlanInfo$Runtime = (()=>class _ExecutePlanInfo extends Message {
        constructor(data){
            super();
            this.planId = "";
            this.planTitle = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ExecutePlanInfo().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ExecutePlanInfo().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ExecutePlanInfo().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ExecutePlanInfo, a, b2);
        }
    })();
var ExecutePlanInfo = ExecutePlanInfo$Runtime;
ExecutePlanInfo.runtime = proto3;
ExecutePlanInfo.typeName = "agent.v1.ExecutePlanInfo";
ExecutePlanInfo.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "plan_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "plan_title",
            kind: "scalar",
            T: 9
        }
    ]);
var ProjectDetails$Runtime = (()=>class _ProjectDetails extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ProjectDetails().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ProjectDetails().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ProjectDetails().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ProjectDetails, a, b2);
        }
    })();
var ProjectDetails = ProjectDetails$Runtime;
ProjectDetails.runtime = proto3;
ProjectDetails.typeName = "agent.v1.ProjectDetails";
ProjectDetails.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "subagent",
            kind: "message",
            T: ProjectSubagentDetails,
            opt: true
        },
        {
            no: 3,
            name: "side_chat",
            kind: "message",
            T: ProjectSideChatDetails,
            opt: true
        }
    ]);
var ProjectSubagentDetails$Runtime = (()=>class _ProjectSubagentDetails extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ProjectSubagentDetails().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ProjectSubagentDetails().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ProjectSubagentDetails().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ProjectSubagentDetails, a, b2);
        }
    })();
var ProjectSubagentDetails = ProjectSubagentDetails$Runtime;
ProjectSubagentDetails.runtime = proto3;
ProjectSubagentDetails.typeName = "agent.v1.ProjectSubagentDetails";
ProjectSubagentDetails.fields = proto3.util.newFieldList(()=>[
        {
            no: 2,
            name: "store_dir",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var ProjectSideChatDetails$Runtime = (()=>class _ProjectSideChatDetails extends Message {
        constructor(data){
            super();
            this.storeDir = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ProjectSideChatDetails().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ProjectSideChatDetails().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ProjectSideChatDetails().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ProjectSideChatDetails, a, b2);
        }
    })();
var ProjectSideChatDetails = ProjectSideChatDetails$Runtime;
ProjectSideChatDetails.runtime = proto3;
ProjectSideChatDetails.typeName = "agent.v1.ProjectSideChatDetails";
ProjectSideChatDetails.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "store_dir",
            kind: "scalar",
            T: 9
        }
    ]);
var UserMessage$Runtime = (()=>class _UserMessage extends Message {
        constructor(data){
            super();
            this.text = "";
            this.messageId = "";
            this.mode = AgentMode.UNSPECIFIED;
            this.conversationStateBlobId = new Uint8Array(0);
            this.hookAdditionalContexts = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UserMessage().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UserMessage().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UserMessage().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UserMessage, a, b2);
        }
    })();
var UserMessage = UserMessage$Runtime;
UserMessage.runtime = proto3;
UserMessage.typeName = "agent.v1.UserMessage";
UserMessage.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "selected_context",
            kind: "message",
            T: SelectedContext,
            opt: true
        },
        {
            no: 4,
            name: "mode",
            kind: "enum",
            T: proto3.getEnumType(AgentMode)
        },
        {
            no: 5,
            name: "is_simulated_msg",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 6,
            name: "best_of_n_group_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "try_use_best_of_n_promotion",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 8,
            name: "rich_text",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "simulated_msg_reason",
            kind: "enum",
            T: proto3.getEnumType(SimulatedMsgReason),
            opt: true
        },
        {
            no: 10,
            name: "conversation_state_blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 11,
            name: "subagent_system_reminder",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 13,
            name: "triggering_user_info",
            kind: "message",
            T: TriggeringUserInfo,
            opt: true
        },
        {
            no: 14,
            name: "execute_plan_info",
            kind: "message",
            T: ExecutePlanInfo,
            opt: true
        },
        {
            no: 15,
            name: "simulated_message_metadata",
            kind: "message",
            T: UserMessage_SimulatedMessageMetadata,
            opt: true
        },
        {
            no: 16,
            name: "prompt_reference_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 17,
            name: "thread_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 18,
            name: "text_blob_id",
            kind: "scalar",
            T: 12,
            opt: true
        },
        {
            no: 19,
            name: "rich_text_blob_id",
            kind: "scalar",
            T: 12,
            opt: true
        },
        {
            no: 21,
            name: "hook_additional_contexts",
            kind: "message",
            T: HookAdditionalContext,
            repeated: true
        },
        {
            no: 22,
            name: "custom_mode_intent",
            kind: "message",
            T: CustomModeIntent,
            opt: true
        },
        {
            no: 23,
            name: "project_details",
            kind: "message",
            T: ProjectDetails,
            opt: true
        }
    ]);
var UserMessage_SimulatedMessageMetadata$Runtime = (()=>class _UserMessage_SimulatedMessageMetadata extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UserMessage_SimulatedMessageMetadata().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UserMessage_SimulatedMessageMetadata().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UserMessage_SimulatedMessageMetadata().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UserMessage_SimulatedMessageMetadata, a, b2);
        }
    })();
var UserMessage_SimulatedMessageMetadata = UserMessage_SimulatedMessageMetadata$Runtime;
UserMessage_SimulatedMessageMetadata.runtime = proto3;
UserMessage_SimulatedMessageMetadata.typeName = "agent.v1.UserMessage.SimulatedMessageMetadata";
UserMessage_SimulatedMessageMetadata.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "task_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "fsd_finding_action",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "subscription_source",
            kind: "enum",
            T: proto3.getEnumType(SubscriptionSource),
            opt: true
        },
        {
            no: 6,
            name: "subscription_event_display",
            kind: "message",
            T: SubscriptionEventDisplay,
            opt: true
        }
    ]);
var AssistantMessage$Runtime = (()=>class _AssistantMessage extends Message {
        constructor(data){
            super();
            this.text = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AssistantMessage().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AssistantMessage().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AssistantMessage().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AssistantMessage, a, b2);
        }
    })();
var AssistantMessage = AssistantMessage$Runtime;
AssistantMessage.runtime = proto3;
AssistantMessage.typeName = "agent.v1.AssistantMessage";
AssistantMessage.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]);
var ThinkingMessage$Runtime = (()=>class _ThinkingMessage extends Message {
        constructor(data){
            super();
            this.text = "";
            this.durationMs = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ThinkingMessage().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ThinkingMessage().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ThinkingMessage().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ThinkingMessage, a, b2);
        }
    })();
var ThinkingMessage = ThinkingMessage$Runtime;
ThinkingMessage.runtime = proto3;
ThinkingMessage.typeName = "agent.v1.ThinkingMessage";
ThinkingMessage.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "duration_ms",
            kind: "scalar",
            T: 13
        }
    ]);
var ShellCommand$Runtime = (()=>class _ShellCommand extends Message {
        constructor(data){
            super();
            this.command = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellCommand().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellCommand().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellCommand().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellCommand, a, b2);
        }
    })();
var ShellCommand = ShellCommand$Runtime;
ShellCommand.runtime = proto3;
ShellCommand.typeName = "agent.v1.ShellCommand";
ShellCommand.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        }
    ]);
var ShellOutput$Runtime = (()=>class _ShellOutput extends Message {
        constructor(data){
            super();
            this.stdout = "";
            this.stderr = "";
            this.exitCode = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellOutput().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellOutput().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellOutput().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellOutput, a, b2);
        }
    })();
var ShellOutput = ShellOutput$Runtime;
ShellOutput.runtime = proto3;
ShellOutput.typeName = "agent.v1.ShellOutput";
ShellOutput.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "stdout",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "stderr",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "exit_code",
            kind: "scalar",
            T: 5
        }
    ]);
var ConversationTurn$Runtime = (()=>class _ConversationTurn extends Message {
        constructor(data){
            super();
            this.turn = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConversationTurn().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConversationTurn().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConversationTurn().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConversationTurn, a, b2);
        }
    })();
var ConversationTurn = ConversationTurn$Runtime;
ConversationTurn.runtime = proto3;
ConversationTurn.typeName = "agent.v1.ConversationTurn";
ConversationTurn.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "agent_conversation_turn",
            kind: "message",
            T: AgentConversationTurn,
            oneof: "turn"
        },
        {
            no: 2,
            name: "shell_conversation_turn",
            kind: "message",
            T: ShellConversationTurn,
            oneof: "turn"
        }
    ]);
var ConversationPlan$Runtime = (()=>class _ConversationPlan extends Message {
        constructor(data){
            super();
            this.plan = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConversationPlan().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConversationPlan().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConversationPlan().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConversationPlan, a, b2);
        }
    })();
var ConversationPlan = ConversationPlan$Runtime;
ConversationPlan.runtime = proto3;
ConversationPlan.typeName = "agent.v1.ConversationPlan";
ConversationPlan.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "plan",
            kind: "scalar",
            T: 9
        }
    ]);
var PlanRegistryEntry$Runtime = (()=>class _PlanRegistryEntry extends Message {
        constructor(data){
            super();
            this.id = "";
            this.path = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PlanRegistryEntry().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PlanRegistryEntry().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PlanRegistryEntry().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PlanRegistryEntry, a, b2);
        }
    })();
var PlanRegistryEntry = PlanRegistryEntry$Runtime;
PlanRegistryEntry.runtime = proto3;
PlanRegistryEntry.typeName = "agent.v1.PlanRegistryEntry";
PlanRegistryEntry.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]);
var GoalState$Runtime = (()=>class _GoalState extends Message {
        constructor(data){
            super();
            this.conversationId = "";
            this.goalId = "";
            this.objective = "";
            this.status = GoalStatus.UNSPECIFIED;
            this.idleContinuationsWithoutToolCalls = 0;
            this.continuationCount = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GoalState().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GoalState().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GoalState().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GoalState, a, b2);
        }
    })();
var GoalState = GoalState$Runtime;
GoalState.runtime = proto3;
GoalState.typeName = "agent.v1.GoalState";
GoalState.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "goal_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "objective",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(GoalStatus)
        },
        {
            no: 5,
            name: "idle_continuations_without_tool_calls",
            kind: "scalar",
            T: 13
        },
        {
            no: 6,
            name: "active_duration_ms",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 7,
            name: "last_accrued_at_ms",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 8,
            name: "continuation_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 9,
            name: "agent_session_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var ConversationTurnStructure$Runtime = (()=>class _ConversationTurnStructure extends Message {
        constructor(data){
            super();
            this.turn = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConversationTurnStructure().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConversationTurnStructure().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConversationTurnStructure().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConversationTurnStructure, a, b2);
        }
    })();
var ConversationTurnStructure = ConversationTurnStructure$Runtime;
ConversationTurnStructure.runtime = proto3;
ConversationTurnStructure.typeName = "agent.v1.ConversationTurnStructure";
ConversationTurnStructure.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "agent_conversation_turn",
            kind: "message",
            T: AgentConversationTurnStructure,
            oneof: "turn"
        },
        {
            no: 2,
            name: "shell_conversation_turn",
            kind: "message",
            T: ShellConversationTurnStructure,
            oneof: "turn"
        }
    ]);
var AgentConversationTurn$Runtime = (()=>class _AgentConversationTurn extends Message {
        constructor(data){
            super();
            this.steps = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AgentConversationTurn().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AgentConversationTurn().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AgentConversationTurn().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AgentConversationTurn, a, b2);
        }
    })();
var AgentConversationTurn = AgentConversationTurn$Runtime;
AgentConversationTurn.runtime = proto3;
AgentConversationTurn.typeName = "agent.v1.AgentConversationTurn";
AgentConversationTurn.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "user_message",
            kind: "message",
            T: UserMessage
        },
        {
            no: 2,
            name: "steps",
            kind: "message",
            T: ConversationStep,
            repeated: true
        },
        {
            no: 3,
            name: "request_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var AgentConversationTurnStructure$Runtime = (()=>class _AgentConversationTurnStructure extends Message {
        constructor(data){
            super();
            this.userMessage = new Uint8Array(0);
            this.steps = [];
            this.sendMessageStepIndices = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AgentConversationTurnStructure().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AgentConversationTurnStructure().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AgentConversationTurnStructure().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AgentConversationTurnStructure, a, b2);
        }
    })();
var AgentConversationTurnStructure = AgentConversationTurnStructure$Runtime;
AgentConversationTurnStructure.runtime = proto3;
AgentConversationTurnStructure.typeName = "agent.v1.AgentConversationTurnStructure";
AgentConversationTurnStructure.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "user_message",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "steps",
            kind: "scalar",
            T: 12,
            repeated: true
        },
        {
            no: 3,
            name: "request_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "encrypted_model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "dynamic_tool_count",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 6,
            name: "send_message_step_indices",
            kind: "scalar",
            T: 13,
            repeated: true
        }
    ]);
var ShellConversationTurn$Runtime = (()=>class _ShellConversationTurn extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellConversationTurn().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellConversationTurn().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellConversationTurn().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellConversationTurn, a, b2);
        }
    })();
var ShellConversationTurn = ShellConversationTurn$Runtime;
ShellConversationTurn.runtime = proto3;
ShellConversationTurn.typeName = "agent.v1.ShellConversationTurn";
ShellConversationTurn.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "shell_command",
            kind: "message",
            T: ShellCommand
        },
        {
            no: 2,
            name: "shell_output",
            kind: "message",
            T: ShellOutput
        }
    ]);
var ShellConversationTurnStructure$Runtime = (()=>class _ShellConversationTurnStructure extends Message {
        constructor(data){
            super();
            this.shellCommand = new Uint8Array(0);
            this.shellOutput = new Uint8Array(0);
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellConversationTurnStructure().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellConversationTurnStructure().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellConversationTurnStructure().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellConversationTurnStructure, a, b2);
        }
    })();
var ShellConversationTurnStructure = ShellConversationTurnStructure$Runtime;
ShellConversationTurnStructure.runtime = proto3;
ShellConversationTurnStructure.typeName = "agent.v1.ShellConversationTurnStructure";
ShellConversationTurnStructure.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "shell_command",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "shell_output",
            kind: "scalar",
            T: 12
        }
    ]);
var ConversationSummary$Runtime = (()=>class _ConversationSummary extends Message {
        constructor(data){
            super();
            this.summary = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConversationSummary().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConversationSummary().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConversationSummary().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConversationSummary, a, b2);
        }
    })();
var ConversationSummary = ConversationSummary$Runtime;
ConversationSummary.runtime = proto3;
ConversationSummary.typeName = "agent.v1.ConversationSummary";
ConversationSummary.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        }
    ]);
var ConversationSummaryArchive$Runtime = (()=>class _ConversationSummaryArchive extends Message {
        constructor(data){
            super();
            this.summarizedMessages = [];
            this.summary = "";
            this.windowTail = 0;
            this.summaryMessage = new Uint8Array(0);
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConversationSummaryArchive().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConversationSummaryArchive().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConversationSummaryArchive().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConversationSummaryArchive, a, b2);
        }
    })();
var ConversationSummaryArchive = ConversationSummaryArchive$Runtime;
ConversationSummaryArchive.runtime = proto3;
ConversationSummaryArchive.typeName = "agent.v1.ConversationSummaryArchive";
ConversationSummaryArchive.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "summarized_messages",
            kind: "scalar",
            T: 12,
            repeated: true
        },
        {
            no: 2,
            name: "summary",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "window_tail",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "summary_message",
            kind: "scalar",
            T: 12
        }
    ]);
var PromptTokenBreakdownCategory$Runtime = (()=>class _PromptTokenBreakdownCategory extends Message {
        constructor(data){
            super();
            this.id = "";
            this.label = "";
            this.estimatedTokens = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PromptTokenBreakdownCategory().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PromptTokenBreakdownCategory().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PromptTokenBreakdownCategory().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PromptTokenBreakdownCategory, a, b2);
        }
    })();
var PromptTokenBreakdownCategory = PromptTokenBreakdownCategory$Runtime;
PromptTokenBreakdownCategory.runtime = proto3;
PromptTokenBreakdownCategory.typeName = "agent.v1.PromptTokenBreakdownCategory";
PromptTokenBreakdownCategory.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "estimated_tokens",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "character_count",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
var PromptTokenBreakdownSnapshot$Runtime = (()=>class _PromptTokenBreakdownSnapshot extends Message {
        constructor(data){
            super();
            this.totalUsedTokens = 0;
            this.maxTokens = 0;
            this.categories = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PromptTokenBreakdownSnapshot().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PromptTokenBreakdownSnapshot().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PromptTokenBreakdownSnapshot().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PromptTokenBreakdownSnapshot, a, b2);
        }
    })();
var PromptTokenBreakdownSnapshot = PromptTokenBreakdownSnapshot$Runtime;
PromptTokenBreakdownSnapshot.runtime = proto3;
PromptTokenBreakdownSnapshot.typeName = "agent.v1.PromptTokenBreakdownSnapshot";
PromptTokenBreakdownSnapshot.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "total_used_tokens",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "max_tokens",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "categories",
            kind: "message",
            T: PromptTokenBreakdownCategory,
            repeated: true
        }
    ]);
var PromptContextSourceRef$Runtime = (()=>class _PromptContextSourceRef extends Message {
        constructor(data){
            super();
            this.sourceType = "";
            this.messageIndex = 0;
            this.contentPath = "";
            this.startOffset = 0;
            this.endOffset = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PromptContextSourceRef().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PromptContextSourceRef().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PromptContextSourceRef().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PromptContextSourceRef, a, b2);
        }
    })();
var PromptContextSourceRef = PromptContextSourceRef$Runtime;
PromptContextSourceRef.runtime = proto3;
PromptContextSourceRef.typeName = "agent.v1.PromptContextSourceRef";
PromptContextSourceRef.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "source_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "message_index",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "content_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "start_offset",
            kind: "scalar",
            T: 13
        },
        {
            no: 6,
            name: "end_offset",
            kind: "scalar",
            T: 13
        }
    ]);
var PromptContextNode$Runtime = (()=>class _PromptContextNode extends Message {
        constructor(data){
            super();
            this.id = "";
            this.kind = "";
            this.label = "";
            this.categoryId = "";
            this.estimatedTokens = 0;
            this.characterCount = 0;
            this.contentAvailable = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PromptContextNode().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PromptContextNode().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PromptContextNode().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PromptContextNode, a, b2);
        }
    })();
var PromptContextNode = PromptContextNode$Runtime;
PromptContextNode.runtime = proto3;
PromptContextNode.typeName = "agent.v1.PromptContextNode";
PromptContextNode.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "parent_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "kind",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "category_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "estimated_tokens",
            kind: "scalar",
            T: 13
        },
        {
            no: 7,
            name: "character_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 9,
            name: "content_available",
            kind: "scalar",
            T: 8
        },
        {
            no: 11,
            name: "source",
            kind: "message",
            T: PromptContextSourceRef,
            opt: true
        },
        {
            no: 12,
            name: "inline_content",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var PromptContextUsageTree$Runtime = (()=>class _PromptContextUsageTree extends Message {
        constructor(data){
            super();
            this.schemaVersion = 0;
            this.nodes = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PromptContextUsageTree().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PromptContextUsageTree().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PromptContextUsageTree().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PromptContextUsageTree, a, b2);
        }
    })();
var PromptContextUsageTree = PromptContextUsageTree$Runtime;
PromptContextUsageTree.runtime = proto3;
PromptContextUsageTree.typeName = "agent.v1.PromptContextUsageTree";
PromptContextUsageTree.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "schema_version",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "nodes",
            kind: "message",
            T: PromptContextNode,
            repeated: true
        }
    ]);
var PromptContextUsageSnapshot$Runtime = (()=>class _PromptContextUsageSnapshot extends Message {
        constructor(data){
            super();
            this.rootPromptMessagesJson = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PromptContextUsageSnapshot().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PromptContextUsageSnapshot().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PromptContextUsageSnapshot().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PromptContextUsageSnapshot, a, b2);
        }
    })();
var PromptContextUsageSnapshot = PromptContextUsageSnapshot$Runtime;
PromptContextUsageSnapshot.runtime = proto3;
PromptContextUsageSnapshot.typeName = "agent.v1.PromptContextUsageSnapshot";
PromptContextUsageSnapshot.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "prompt_context_usage_tree",
            kind: "message",
            T: PromptContextUsageTree
        },
        {
            no: 2,
            name: "root_prompt_messages_json",
            kind: "scalar",
            T: 12,
            repeated: true
        }
    ]);
var ConversationTokenDetails$Runtime = (()=>class _ConversationTokenDetails extends Message {
        constructor(data){
            super();
            this.usedTokens = 0;
            this.maxTokens = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConversationTokenDetails().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConversationTokenDetails().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConversationTokenDetails().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConversationTokenDetails, a, b2);
        }
    })();
var ConversationTokenDetails = ConversationTokenDetails$Runtime;
ConversationTokenDetails.runtime = proto3;
ConversationTokenDetails.typeName = "agent.v1.ConversationTokenDetails";
ConversationTokenDetails.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "used_tokens",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "max_tokens",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "breakdown",
            kind: "message",
            T: PromptTokenBreakdownSnapshot,
            opt: true
        },
        {
            no: 4,
            name: "prompt_context_usage_tree",
            kind: "message",
            T: PromptContextUsageTree,
            opt: true
        },
        {
            no: 5,
            name: "prompt_context_usage_snapshot_blob_id",
            kind: "scalar",
            T: 12,
            opt: true
        }
    ]);
var FileState$Runtime = (()=>class _FileState extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FileState().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FileState().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FileState().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FileState, a, b2);
        }
    })();
var FileState = FileState$Runtime;
FileState.runtime = proto3;
FileState.typeName = "agent.v1.FileState";
FileState.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "initial_content",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var FileStateStructure$Runtime = (()=>class _FileStateStructure extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FileStateStructure().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FileStateStructure().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FileStateStructure().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FileStateStructure, a, b2);
        }
    })();
var FileStateStructure = FileStateStructure$Runtime;
FileStateStructure.runtime = proto3;
FileStateStructure.typeName = "agent.v1.FileStateStructure";
FileStateStructure.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 12,
            opt: true
        },
        {
            no: 2,
            name: "initial_content",
            kind: "scalar",
            T: 12,
            opt: true
        }
    ]);
var StepTiming$Runtime = (()=>class _StepTiming extends Message {
        constructor(data){
            super();
            this.durationMs = protoInt64.zero;
            this.timestampMs = protoInt64.zero;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _StepTiming().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _StepTiming().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _StepTiming().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_StepTiming, a, b2);
        }
    })();
var StepTiming = StepTiming$Runtime;
StepTiming.runtime = proto3;
StepTiming.typeName = "agent.v1.StepTiming";
StepTiming.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "duration_ms",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "timestamp_ms",
            kind: "scalar",
            T: 4
        }
    ]);
var ConversationState$Runtime = (()=>class _ConversationState extends Message {
        constructor(data){
            super();
            this.rootPromptMessagesJson = [];
            this.turns = [];
            this.todos = [];
            this.pendingToolCalls = [];
            this.fileStates = {};
            this.summaryArchives = [];
            this.plans = {};
            this.communicateUpdateHistory = [];
            this.communicateUpdateStatesByParentToolCallId = {};
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConversationState().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConversationState().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConversationState().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConversationState, a, b2);
        }
    })();
var ConversationState = ConversationState$Runtime;
ConversationState.runtime = proto3;
ConversationState.typeName = "agent.v1.ConversationState";
ConversationState.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "root_prompt_messages_json",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 8,
            name: "turns",
            kind: "message",
            T: ConversationTurn,
            repeated: true
        },
        {
            no: 3,
            name: "todos",
            kind: "message",
            T: TodoItem,
            repeated: true
        },
        {
            no: 4,
            name: "pending_tool_calls",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "token_details",
            kind: "message",
            T: ConversationTokenDetails
        },
        {
            no: 6,
            name: "summary",
            kind: "message",
            T: ConversationSummary,
            opt: true
        },
        {
            no: 7,
            name: "plan",
            kind: "message",
            T: ConversationPlan,
            opt: true
        },
        {
            no: 9,
            name: "summary_archive",
            kind: "message",
            T: ConversationSummaryArchive,
            opt: true
        },
        {
            no: 10,
            name: "file_states",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: FileState
            }
        },
        {
            no: 11,
            name: "summary_archives",
            kind: "message",
            T: ConversationSummaryArchive,
            repeated: true
        },
        {
            no: 12,
            name: "plans",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: PlanRegistryEntry
            }
        },
        {
            no: 13,
            name: "communicate_update_history",
            kind: "message",
            T: CommunicateUpdateHistoryEntry,
            repeated: true
        },
        {
            no: 14,
            name: "communicate_update_final_summary",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 15,
            name: "communicate_update_completed_subtitle",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 16,
            name: "communicate_update_states_by_parent_tool_call_id",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: CommunicateUpdateTurnState
            }
        }
    ]);
var CommunicateUpdateHistoryEntry$Runtime = (()=>class _CommunicateUpdateHistoryEntry extends Message {
        constructor(data){
            super();
            this.step = "";
            this.messageIndex = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CommunicateUpdateHistoryEntry().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CommunicateUpdateHistoryEntry().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CommunicateUpdateHistoryEntry().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CommunicateUpdateHistoryEntry, a, b2);
        }
    })();
var CommunicateUpdateHistoryEntry = CommunicateUpdateHistoryEntry$Runtime;
CommunicateUpdateHistoryEntry.runtime = proto3;
CommunicateUpdateHistoryEntry.typeName = "agent.v1.CommunicateUpdateHistoryEntry";
CommunicateUpdateHistoryEntry.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "step",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "message_index",
            kind: "scalar",
            T: 13
        }
    ]);
var CommunicateUpdateTurnState$Runtime = (()=>class _CommunicateUpdateTurnState extends Message {
        constructor(data){
            super();
            this.history = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CommunicateUpdateTurnState().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CommunicateUpdateTurnState().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CommunicateUpdateTurnState().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CommunicateUpdateTurnState, a, b2);
        }
    })();
var CommunicateUpdateTurnState = CommunicateUpdateTurnState$Runtime;
CommunicateUpdateTurnState.runtime = proto3;
CommunicateUpdateTurnState.typeName = "agent.v1.CommunicateUpdateTurnState";
CommunicateUpdateTurnState.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "history",
            kind: "message",
            T: CommunicateUpdateHistoryEntry,
            repeated: true
        },
        {
            no: 2,
            name: "final_summary",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "completed_subtitle",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var SubagentPersistedState$Runtime = (()=>class _SubagentPersistedState extends Message {
        constructor(data){
            super();
            this.createdTimestampMs = protoInt64.zero;
            this.lastUsedTimestampMs = protoInt64.zero;
            this.environment = SubagentExecutionEnvironment.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SubagentPersistedState().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SubagentPersistedState().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SubagentPersistedState().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubagentPersistedState, a, b2);
        }
    })();
var SubagentPersistedState = SubagentPersistedState$Runtime;
SubagentPersistedState.runtime = proto3;
SubagentPersistedState.typeName = "agent.v1.SubagentPersistedState";
SubagentPersistedState.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "conversation_state",
            kind: "message",
            T: ConversationStateStructure
        },
        {
            no: 2,
            name: "created_timestamp_ms",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "last_used_timestamp_ms",
            kind: "scalar",
            T: 4
        },
        {
            no: 4,
            name: "subagent_type",
            kind: "message",
            T: SubagentType
        },
        {
            no: 5,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "environment",
            kind: "enum",
            T: proto3.getEnumType(SubagentExecutionEnvironment)
        },
        {
            no: 7,
            name: "cloud_subagent",
            kind: "message",
            T: CloudSubagentReference,
            opt: true
        },
        {
            no: 8,
            name: "first_class_bc_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "cloud_requested_environment_build_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "machine",
            kind: "message",
            T: TargetMachine,
            opt: true
        }
    ]);
var CloudSubagentReference$Runtime = (()=>class _CloudSubagentReference extends Message {
        constructor(data){
            super();
            this.bcId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CloudSubagentReference().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CloudSubagentReference().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CloudSubagentReference().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CloudSubagentReference, a, b2);
        }
    })();
var CloudSubagentReference = CloudSubagentReference$Runtime;
CloudSubagentReference.runtime = proto3;
CloudSubagentReference.typeName = "agent.v1.CloudSubagentReference";
CloudSubagentReference.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "transcript_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var TrackedGitRepo$Runtime = (()=>class _TrackedGitRepo extends Message {
        constructor(data){
            super();
            this.repoPath = "";
            this.branchName = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _TrackedGitRepo().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _TrackedGitRepo().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _TrackedGitRepo().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_TrackedGitRepo, a, b2);
        }
    })();
var TrackedGitRepo = TrackedGitRepo$Runtime;
TrackedGitRepo.runtime = proto3;
TrackedGitRepo.typeName = "agent.v1.TrackedGitRepo";
TrackedGitRepo.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "repo_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "branch_name",
            kind: "scalar",
            T: 9
        }
    ]);
var ConversationStateStructure$Runtime = (()=>class _ConversationStateStructure extends Message {
        constructor(data){
            super();
            this.rootPromptMessagesJson = [];
            this.turns = [];
            this.todos = [];
            this.pendingToolCalls = [];
            this.previousWorkspaceUris = [];
            this.fileStates = {};
            this.fileStatesV2 = {};
            this.summaryArchives = [];
            this.turnTimings = [];
            this.subagentStates = {};
            this.selfSummaryCount = 0;
            this.readPaths = [];
            this.plans = {};
            this.trackedGitRepoBranches = [];
            this.communicateUpdateHistory = [];
            this.subagentThreads = {};
            this.communicateUpdateStatesByParentToolCallId = {};
            this.subagentRunsByParentToolCallId = {};
            this.subagentStateRefs = {};
            this.completedAskQuestionToolCallIds = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConversationStateStructure().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConversationStateStructure().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConversationStateStructure().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConversationStateStructure, a, b2);
        }
    })();
var ConversationStateStructure = ConversationStateStructure$Runtime;
ConversationStateStructure.runtime = proto3;
ConversationStateStructure.typeName = "agent.v1.ConversationStateStructure";
ConversationStateStructure.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "root_prompt_messages_json",
            kind: "scalar",
            T: 12,
            repeated: true
        },
        {
            no: 8,
            name: "turns",
            kind: "scalar",
            T: 12,
            repeated: true
        },
        {
            no: 3,
            name: "todos",
            kind: "scalar",
            T: 12,
            repeated: true
        },
        {
            no: 4,
            name: "pending_tool_calls",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "token_details",
            kind: "message",
            T: ConversationTokenDetails
        },
        {
            no: 6,
            name: "summary",
            kind: "scalar",
            T: 12,
            opt: true
        },
        {
            no: 7,
            name: "plan",
            kind: "scalar",
            T: 12,
            opt: true
        },
        {
            no: 9,
            name: "previous_workspace_uris",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 10,
            name: "mode",
            kind: "enum",
            T: proto3.getEnumType(AgentMode),
            opt: true
        },
        {
            no: 11,
            name: "summary_archive",
            kind: "scalar",
            T: 12,
            opt: true
        },
        {
            no: 12,
            name: "file_states",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 12
            }
        },
        {
            no: 15,
            name: "file_states_v2",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: FileStateStructure
            }
        },
        {
            no: 13,
            name: "summary_archives",
            kind: "scalar",
            T: 12,
            repeated: true
        },
        {
            no: 14,
            name: "turn_timings",
            kind: "message",
            T: StepTiming,
            repeated: true
        },
        {
            no: 16,
            name: "subagent_states",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: SubagentPersistedState
            }
        },
        {
            no: 17,
            name: "self_summary_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 18,
            name: "read_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 19,
            name: "active_branch_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 20,
            name: "plans",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: PlanRegistryEntry
            }
        },
        {
            no: 21,
            name: "tracked_git_repo_branches",
            kind: "message",
            T: TrackedGitRepo,
            repeated: true
        },
        {
            no: 22,
            name: "agent_type",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 23,
            name: "communicate_update_history",
            kind: "message",
            T: CommunicateUpdateHistoryEntry,
            repeated: true
        },
        {
            no: 24,
            name: "subagent_threads",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 25,
            name: "communicate_update_final_summary",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 28,
            name: "communicate_update_completed_subtitle",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 29,
            name: "communicate_update_states_by_parent_tool_call_id",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: CommunicateUpdateTurnState
            }
        },
        {
            no: 30,
            name: "subagent_runs_by_parent_tool_call_id",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: SubagentRunState
            }
        },
        {
            no: 26,
            name: "conversation_started_timestamp_ms",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 27,
            name: "conversation_started_time_zone",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 31,
            name: "subagent_state_refs",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 12
            }
        },
        {
            no: 32,
            name: "goal_state",
            kind: "message",
            T: GoalState,
            opt: true
        },
        {
            no: 33,
            name: "is_root_project_conversation",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 34,
            name: "completed_ask_question_tool_call_ids",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var ThinkingDetails$Runtime = (()=>class _ThinkingDetails extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ThinkingDetails().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ThinkingDetails().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ThinkingDetails().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ThinkingDetails, a, b2);
        }
    })();
var ThinkingDetails = ThinkingDetails$Runtime;
ThinkingDetails.runtime = proto3;
ThinkingDetails.typeName = "agent.v1.ThinkingDetails";
ThinkingDetails.fields = proto3.util.newFieldList(()=>[]);
var ApiKeyCredentials$Runtime = (()=>class _ApiKeyCredentials extends Message {
        constructor(data){
            super();
            this.apiKey = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ApiKeyCredentials().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ApiKeyCredentials().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ApiKeyCredentials().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ApiKeyCredentials, a, b2);
        }
    })();
var ApiKeyCredentials = ApiKeyCredentials$Runtime;
ApiKeyCredentials.runtime = proto3;
ApiKeyCredentials.typeName = "agent.v1.ApiKeyCredentials";
ApiKeyCredentials.fields = proto3.util.newFieldList(()=>[
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
            T: 9,
            opt: true
        }
    ]);
var ClientLlmGatewayCredential$Runtime = (()=>class _ClientLlmGatewayCredential extends Message {
        constructor(data){
            super();
            this.bearerToken = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ClientLlmGatewayCredential().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ClientLlmGatewayCredential().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ClientLlmGatewayCredential().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ClientLlmGatewayCredential, a, b2);
        }
    })();
var ClientLlmGatewayCredential = ClientLlmGatewayCredential$Runtime;
ClientLlmGatewayCredential.runtime = proto3;
ClientLlmGatewayCredential.typeName = "agent.v1.ClientLlmGatewayCredential";
ClientLlmGatewayCredential.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "bearer_token",
            kind: "scalar",
            T: 9
        }
    ]);
var AzureCredentials$Runtime = (()=>class _AzureCredentials extends Message {
        constructor(data){
            super();
            this.apiKey = "";
            this.baseUrl = "";
            this.deployment = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AzureCredentials().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AzureCredentials().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AzureCredentials().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AzureCredentials, a, b2);
        }
    })();
var AzureCredentials = AzureCredentials$Runtime;
AzureCredentials.runtime = proto3;
AzureCredentials.typeName = "agent.v1.AzureCredentials";
AzureCredentials.fields = proto3.util.newFieldList(()=>[
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
        }
    ]);
var BedrockCredentials$Runtime = (()=>class _BedrockCredentials extends Message {
        constructor(data){
            super();
            this.accessKey = "";
            this.secretKey = "";
            this.region = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _BedrockCredentials().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _BedrockCredentials().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _BedrockCredentials().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_BedrockCredentials, a, b2);
        }
    })();
var BedrockCredentials = BedrockCredentials$Runtime;
BedrockCredentials.runtime = proto3;
BedrockCredentials.typeName = "agent.v1.BedrockCredentials";
BedrockCredentials.fields = proto3.util.newFieldList(()=>[
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
            name: "session_token",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var ModelDetails2$Runtime = (()=>class _ModelDetails extends Message {
        constructor(data){
            super();
            this.modelId = "";
            this.displayModelId = "";
            this.displayName = "";
            this.displayNameShort = "";
            this.aliases = [];
            this.credentials = {
                case: void 0
            };
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
var ModelDetails2 = ModelDetails2$Runtime;
ModelDetails2.runtime = proto3;
ModelDetails2.typeName = "agent.v1.ModelDetails";
ModelDetails2.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "model_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "display_model_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "display_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "display_name_short",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "aliases",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "thinking_details",
            kind: "message",
            T: ThinkingDetails,
            opt: true
        },
        {
            no: 7,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 8,
            name: "api_key_credentials",
            kind: "message",
            T: ApiKeyCredentials,
            oneof: "credentials"
        },
        {
            no: 9,
            name: "azure_credentials",
            kind: "message",
            T: AzureCredentials,
            oneof: "credentials"
        },
        {
            no: 10,
            name: "bedrock_credentials",
            kind: "message",
            T: BedrockCredentials,
            oneof: "credentials"
        }
    ]);
var RequestedModel$Runtime = (()=>class _RequestedModel extends Message {
        constructor(data){
            super();
            this.modelId = "";
            this.maxMode = false;
            this.parameters = [];
            this.credentials = {
                case: void 0
            };
            this.builtInModel = false;
            this.isVariantStringRepresentation = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RequestedModel().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RequestedModel().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RequestedModel().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RequestedModel, a, b2);
        }
    })();
var RequestedModel = RequestedModel$Runtime;
RequestedModel.runtime = proto3;
RequestedModel.typeName = "agent.v1.RequestedModel";
RequestedModel.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "model_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "max_mode",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "parameters",
            kind: "message",
            T: RequestedModel_ModelParameterValue,
            repeated: true
        },
        {
            no: 4,
            name: "api_key_credentials",
            kind: "message",
            T: ApiKeyCredentials,
            oneof: "credentials"
        },
        {
            no: 5,
            name: "azure_credentials",
            kind: "message",
            T: AzureCredentials,
            oneof: "credentials"
        },
        {
            no: 6,
            name: "bedrock_credentials",
            kind: "message",
            T: BedrockCredentials,
            oneof: "credentials"
        },
        {
            no: 7,
            name: "built_in_model",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "is_variant_string_representation",
            kind: "scalar",
            T: 8
        }
    ]);
var RequestedModel_ModelParameterValue$Runtime = (()=>class _RequestedModel_ModelParameterValue extends Message {
        constructor(data){
            super();
            this.id = "";
            this.value = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RequestedModel_ModelParameterValue().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RequestedModel_ModelParameterValue().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RequestedModel_ModelParameterValue().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RequestedModel_ModelParameterValue, a, b2);
        }
    })();
var RequestedModel_ModelParameterValue = RequestedModel_ModelParameterValue$Runtime;
RequestedModel_ModelParameterValue.runtime = proto3;
RequestedModel_ModelParameterValue.typeName = "agent.v1.RequestedModel.ModelParameterValue";
RequestedModel_ModelParameterValue.fields = proto3.util.newFieldList(()=>[
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
var SubagentModelOverride$Runtime = (()=>class _SubagentModelOverride extends Message {
        constructor(data){
            super();
            this.subagentType = "";
            this.selection = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SubagentModelOverride().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SubagentModelOverride().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SubagentModelOverride().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubagentModelOverride, a, b2);
        }
    })();
var SubagentModelOverride = SubagentModelOverride$Runtime;
SubagentModelOverride.runtime = proto3;
SubagentModelOverride.typeName = "agent.v1.SubagentModelOverride";
SubagentModelOverride.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "subagent_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "model",
            kind: "message",
            T: RequestedModel,
            oneof: "selection"
        },
        {
            no: 3,
            name: "inherit",
            kind: "scalar",
            T: 8,
            oneof: "selection"
        },
        {
            no: 4,
            name: "disabled",
            kind: "scalar",
            T: 8,
            oneof: "selection"
        }
    ]);
var PreFetchedBlob$Runtime = (()=>class _PreFetchedBlob extends Message {
        constructor(data){
            super();
            this.id = new Uint8Array(0);
            this.value = new Uint8Array(0);
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PreFetchedBlob().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PreFetchedBlob().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PreFetchedBlob().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PreFetchedBlob, a, b2);
        }
    })();
var PreFetchedBlob = PreFetchedBlob$Runtime;
PreFetchedBlob.runtime = proto3;
PreFetchedBlob.typeName = "agent.v1.PreFetchedBlob";
PreFetchedBlob.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 12
        }
    ]);
var AgentRunRequest$Runtime = (()=>class _AgentRunRequest extends Message {
        constructor(data){
            super();
            this.selectedSubagentModels = [];
            this.selectedSubagentModelDetails = [];
            this.preFetchedBlobs = [];
            this.subagentModelOverrides = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AgentRunRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AgentRunRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AgentRunRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AgentRunRequest, a, b2);
        }
    })();
var AgentRunRequest = AgentRunRequest$Runtime;
AgentRunRequest.runtime = proto3;
AgentRunRequest.typeName = "agent.v1.AgentRunRequest";
AgentRunRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "conversation_state",
            kind: "message",
            T: ConversationStateStructure
        },
        {
            no: 2,
            name: "action",
            kind: "message",
            T: ConversationAction
        },
        {
            no: 3,
            name: "model_details",
            kind: "message",
            T: ModelDetails2
        },
        {
            no: 9,
            name: "requested_model",
            kind: "message",
            T: RequestedModel,
            opt: true
        },
        {
            no: 4,
            name: "mcp_tools",
            kind: "message",
            T: McpTools
        },
        {
            no: 5,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "mcp_file_system_options",
            kind: "message",
            T: McpFileSystemOptions,
            opt: true
        },
        {
            no: 7,
            name: "skill_options",
            kind: "message",
            T: SkillOptions,
            opt: true
        },
        {
            no: 8,
            name: "custom_system_prompt",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "suggest_next_prompt",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 11,
            name: "subagent_type_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 12,
            name: "exclude_workspace_context",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 13,
            name: "harness",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 14,
            name: "selected_subagent_models",
            kind: "message",
            T: RequestedModel,
            repeated: true
        },
        {
            no: 15,
            name: "selected_subagent_model_details",
            kind: "message",
            T: ModelDetails2,
            repeated: true
        },
        {
            no: 16,
            name: "conversation_group_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 17,
            name: "pre_fetched_blobs",
            kind: "message",
            T: PreFetchedBlob,
            repeated: true
        },
        {
            no: 18,
            name: "dev_raw_model_slug",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 19,
            name: "client_supports_inline_images",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 20,
            name: "subagent_model_overrides",
            kind: "message",
            T: SubagentModelOverride,
            repeated: true
        },
        {
            no: 21,
            name: "can_create_cloud_subagents",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 22,
            name: "suppress_subagent_progress_update_tool",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 23,
            name: "client_supports_send_to_user",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 24,
            name: "computer_use_coordinate_mode",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 25,
            name: "run_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 26,
            name: "agent_session_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 27,
            name: "client_supports_prompt_context_usage_rpc",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 28,
            name: "client_supports_routed_model_update",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 29,
            name: "system_prompt_spec",
            kind: "message",
            T: SystemPromptSpec,
            opt: true
        },
        {
            no: 30,
            name: "client_llm_gateway_credential",
            kind: "message",
            T: ClientLlmGatewayCredential,
            opt: true
        }
    ]);
var TextDeltaUpdate$Runtime = (()=>class _TextDeltaUpdate extends Message {
        constructor(data){
            super();
            this.text = "";
            this.isServerNotice = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _TextDeltaUpdate().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _TextDeltaUpdate().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _TextDeltaUpdate().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_TextDeltaUpdate, a, b2);
        }
    })();
var TextDeltaUpdate = TextDeltaUpdate$Runtime;
TextDeltaUpdate.runtime = proto3;
TextDeltaUpdate.typeName = "agent.v1.TextDeltaUpdate";
TextDeltaUpdate.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_server_notice",
            kind: "scalar",
            T: 8
        }
    ]);
var RoutedModelUpdate$Runtime = (()=>class _RoutedModelUpdate extends Message {
        constructor(data){
            super();
            this.displayName = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RoutedModelUpdate().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RoutedModelUpdate().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RoutedModelUpdate().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RoutedModelUpdate, a, b2);
        }
    })();
var RoutedModelUpdate = RoutedModelUpdate$Runtime;
RoutedModelUpdate.runtime = proto3;
RoutedModelUpdate.typeName = "agent.v1.RoutedModelUpdate";
RoutedModelUpdate.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "display_name",
            kind: "scalar",
            T: 9
        }
    ]);
var ToolCallStartedUpdate$Runtime = (()=>class _ToolCallStartedUpdate extends Message {
        constructor(data){
            super();
            this.callId = "";
            this.modelCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ToolCallStartedUpdate().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ToolCallStartedUpdate().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ToolCallStartedUpdate().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ToolCallStartedUpdate, a, b2);
        }
    })();
var ToolCallStartedUpdate = ToolCallStartedUpdate$Runtime;
ToolCallStartedUpdate.runtime = proto3;
ToolCallStartedUpdate.typeName = "agent.v1.ToolCallStartedUpdate";
ToolCallStartedUpdate.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_call",
            kind: "message",
            T: ToolCall
        },
        {
            no: 3,
            name: "model_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
var ToolCallCompletedUpdate$Runtime = (()=>class _ToolCallCompletedUpdate extends Message {
        constructor(data){
            super();
            this.callId = "";
            this.modelCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ToolCallCompletedUpdate().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ToolCallCompletedUpdate().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ToolCallCompletedUpdate().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ToolCallCompletedUpdate, a, b2);
        }
    })();
var ToolCallCompletedUpdate = ToolCallCompletedUpdate$Runtime;
ToolCallCompletedUpdate.runtime = proto3;
ToolCallCompletedUpdate.typeName = "agent.v1.ToolCallCompletedUpdate";
ToolCallCompletedUpdate.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_call",
            kind: "message",
            T: ToolCall
        },
        {
            no: 3,
            name: "model_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
var ToolCallDeltaUpdate$Runtime = (()=>class _ToolCallDeltaUpdate extends Message {
        constructor(data){
            super();
            this.callId = "";
            this.modelCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ToolCallDeltaUpdate().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ToolCallDeltaUpdate().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ToolCallDeltaUpdate().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ToolCallDeltaUpdate, a, b2);
        }
    })();
var ToolCallDeltaUpdate = ToolCallDeltaUpdate$Runtime;
ToolCallDeltaUpdate.runtime = proto3;
ToolCallDeltaUpdate.typeName = "agent.v1.ToolCallDeltaUpdate";
ToolCallDeltaUpdate.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_call_delta",
            kind: "message",
            T: ToolCallDelta
        },
        {
            no: 3,
            name: "model_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
var PartialToolCallUpdate$Runtime = (()=>class _PartialToolCallUpdate extends Message {
        constructor(data){
            super();
            this.callId = "";
            this.argsTextDelta = "";
            this.modelCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PartialToolCallUpdate().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PartialToolCallUpdate().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PartialToolCallUpdate().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PartialToolCallUpdate, a, b2);
        }
    })();
var PartialToolCallUpdate = PartialToolCallUpdate$Runtime;
PartialToolCallUpdate.runtime = proto3;
PartialToolCallUpdate.typeName = "agent.v1.PartialToolCallUpdate";
PartialToolCallUpdate.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_call",
            kind: "message",
            T: ToolCall
        },
        {
            no: 3,
            name: "args_text_delta",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "model_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
var ThinkingDeltaUpdate$Runtime = (()=>class _ThinkingDeltaUpdate extends Message {
        constructor(data){
            super();
            this.text = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ThinkingDeltaUpdate().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ThinkingDeltaUpdate().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ThinkingDeltaUpdate().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ThinkingDeltaUpdate, a, b2);
        }
    })();
var ThinkingDeltaUpdate = ThinkingDeltaUpdate$Runtime;
ThinkingDeltaUpdate.runtime = proto3;
ThinkingDeltaUpdate.typeName = "agent.v1.ThinkingDeltaUpdate";
ThinkingDeltaUpdate.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "thinking_style",
            kind: "enum",
            T: proto3.getEnumType(ThinkingStyle),
            opt: true
        }
    ]);
var ThinkingCompletedUpdate$Runtime = (()=>class _ThinkingCompletedUpdate extends Message {
        constructor(data){
            super();
            this.thinkingDurationMs = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ThinkingCompletedUpdate().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ThinkingCompletedUpdate().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ThinkingCompletedUpdate().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ThinkingCompletedUpdate, a, b2);
        }
    })();
var ThinkingCompletedUpdate = ThinkingCompletedUpdate$Runtime;
ThinkingCompletedUpdate.runtime = proto3;
ThinkingCompletedUpdate.typeName = "agent.v1.ThinkingCompletedUpdate";
ThinkingCompletedUpdate.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "thinking_duration_ms",
            kind: "scalar",
            T: 5
        }
    ]);
var TokenDeltaUpdate$Runtime = (()=>class _TokenDeltaUpdate extends Message {
        constructor(data){
            super();
            this.tokens = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _TokenDeltaUpdate().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _TokenDeltaUpdate().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _TokenDeltaUpdate().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_TokenDeltaUpdate, a, b2);
        }
    })();
var TokenDeltaUpdate = TokenDeltaUpdate$Runtime;
TokenDeltaUpdate.runtime = proto3;
TokenDeltaUpdate.typeName = "agent.v1.TokenDeltaUpdate";
TokenDeltaUpdate.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "tokens",
            kind: "scalar",
            T: 5
        }
    ]);
var SummaryUpdate$Runtime = (()=>class _SummaryUpdate extends Message {
        constructor(data){
            super();
            this.summary = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SummaryUpdate().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SummaryUpdate().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SummaryUpdate().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SummaryUpdate, a, b2);
        }
    })();
var SummaryUpdate = SummaryUpdate$Runtime;
SummaryUpdate.runtime = proto3;
SummaryUpdate.typeName = "agent.v1.SummaryUpdate";
SummaryUpdate.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        }
    ]);
var SummaryStartedUpdate$Runtime = (()=>class _SummaryStartedUpdate extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SummaryStartedUpdate().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SummaryStartedUpdate().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SummaryStartedUpdate().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SummaryStartedUpdate, a, b2);
        }
    })();
var SummaryStartedUpdate = SummaryStartedUpdate$Runtime;
SummaryStartedUpdate.runtime = proto3;
SummaryStartedUpdate.typeName = "agent.v1.SummaryStartedUpdate";
SummaryStartedUpdate.fields = proto3.util.newFieldList(()=>[]);
var HeartbeatUpdate$Runtime = (()=>class _HeartbeatUpdate extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _HeartbeatUpdate().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _HeartbeatUpdate().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _HeartbeatUpdate().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_HeartbeatUpdate, a, b2);
        }
    })();
var HeartbeatUpdate = HeartbeatUpdate$Runtime;
HeartbeatUpdate.runtime = proto3;
HeartbeatUpdate.typeName = "agent.v1.HeartbeatUpdate";
HeartbeatUpdate.fields = proto3.util.newFieldList(()=>[]);
var SummaryCompletedUpdate$Runtime = (()=>class _SummaryCompletedUpdate extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SummaryCompletedUpdate().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SummaryCompletedUpdate().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SummaryCompletedUpdate().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SummaryCompletedUpdate, a, b2);
        }
    })();
var SummaryCompletedUpdate = SummaryCompletedUpdate$Runtime;
SummaryCompletedUpdate.runtime = proto3;
SummaryCompletedUpdate.typeName = "agent.v1.SummaryCompletedUpdate";
SummaryCompletedUpdate.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "hook_message",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var ShellOutputDeltaUpdate$Runtime = (()=>class _ShellOutputDeltaUpdate extends Message {
        constructor(data){
            super();
            this.event = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellOutputDeltaUpdate().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellOutputDeltaUpdate().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellOutputDeltaUpdate().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellOutputDeltaUpdate, a, b2);
        }
    })();
var ShellOutputDeltaUpdate = ShellOutputDeltaUpdate$Runtime;
ShellOutputDeltaUpdate.runtime = proto3;
ShellOutputDeltaUpdate.typeName = "agent.v1.ShellOutputDeltaUpdate";
ShellOutputDeltaUpdate.fields = proto3.util.newFieldList(()=>[
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
        }
    ]);
var TurnEndedUpdate$Runtime = (()=>class _TurnEndedUpdate extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _TurnEndedUpdate().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _TurnEndedUpdate().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _TurnEndedUpdate().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_TurnEndedUpdate, a, b2);
        }
    })();
var TurnEndedUpdate = TurnEndedUpdate$Runtime;
TurnEndedUpdate.runtime = proto3;
TurnEndedUpdate.typeName = "agent.v1.TurnEndedUpdate";
TurnEndedUpdate.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "input_tokens",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 2,
            name: "output_tokens",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 3,
            name: "cache_read_tokens",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 4,
            name: "cache_write_tokens",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 5,
            name: "reasoning_tokens",
            kind: "scalar",
            T: 3,
            opt: true
        }
    ]);
var UserMessageAppendedUpdate$Runtime = (()=>class _UserMessageAppendedUpdate extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UserMessageAppendedUpdate().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UserMessageAppendedUpdate().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UserMessageAppendedUpdate().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UserMessageAppendedUpdate, a, b2);
        }
    })();
var UserMessageAppendedUpdate = UserMessageAppendedUpdate$Runtime;
UserMessageAppendedUpdate.runtime = proto3;
UserMessageAppendedUpdate.typeName = "agent.v1.UserMessageAppendedUpdate";
UserMessageAppendedUpdate.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "user_message",
            kind: "message",
            T: UserMessage
        }
    ]);
var StepStartedUpdate$Runtime = (()=>class _StepStartedUpdate extends Message {
        constructor(data){
            super();
            this.stepId = protoInt64.zero;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _StepStartedUpdate().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _StepStartedUpdate().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _StepStartedUpdate().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_StepStartedUpdate, a, b2);
        }
    })();
var StepStartedUpdate = StepStartedUpdate$Runtime;
StepStartedUpdate.runtime = proto3;
StepStartedUpdate.typeName = "agent.v1.StepStartedUpdate";
StepStartedUpdate.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "step_id",
            kind: "scalar",
            T: 4
        }
    ]);
var StepCompletedUpdate$Runtime = (()=>class _StepCompletedUpdate extends Message {
        constructor(data){
            super();
            this.stepId = protoInt64.zero;
            this.stepDurationMs = protoInt64.zero;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _StepCompletedUpdate().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _StepCompletedUpdate().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _StepCompletedUpdate().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_StepCompletedUpdate, a, b2);
        }
    })();
var StepCompletedUpdate = StepCompletedUpdate$Runtime;
StepCompletedUpdate.runtime = proto3;
StepCompletedUpdate.typeName = "agent.v1.StepCompletedUpdate";
StepCompletedUpdate.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "step_id",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "step_duration_ms",
            kind: "scalar",
            T: 3
        }
    ]);
var PromptSuggestionUpdate$Runtime = (()=>class _PromptSuggestionUpdate extends Message {
        constructor(data){
            super();
            this.suggestion = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PromptSuggestionUpdate().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PromptSuggestionUpdate().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PromptSuggestionUpdate().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PromptSuggestionUpdate, a, b2);
        }
    })();
var PromptSuggestionUpdate = PromptSuggestionUpdate$Runtime;
PromptSuggestionUpdate.runtime = proto3;
PromptSuggestionUpdate.typeName = "agent.v1.PromptSuggestionUpdate";
PromptSuggestionUpdate.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "suggestion",
            kind: "scalar",
            T: 9
        }
    ]);
var ActiveBranchChange$Runtime = (()=>class _ActiveBranchChange extends Message {
        constructor(data){
            super();
            this.path = "";
            this.branchName = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ActiveBranchChange().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ActiveBranchChange().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ActiveBranchChange().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ActiveBranchChange, a, b2);
        }
    })();
var ActiveBranchChange = ActiveBranchChange$Runtime;
ActiveBranchChange.runtime = proto3;
ActiveBranchChange.typeName = "agent.v1.ActiveBranchChange";
ActiveBranchChange.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "branch_name",
            kind: "scalar",
            T: 9
        }
    ]);
var FeedbackRequestCategory$Runtime = (()=>class _FeedbackRequestCategory extends Message {
        constructor(data){
            super();
            this.id = "";
            this.label = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FeedbackRequestCategory().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FeedbackRequestCategory().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FeedbackRequestCategory().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FeedbackRequestCategory, a, b2);
        }
    })();
var FeedbackRequestCategory = FeedbackRequestCategory$Runtime;
FeedbackRequestCategory.runtime = proto3;
FeedbackRequestCategory.typeName = "agent.v1.FeedbackRequestCategory";
FeedbackRequestCategory.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "label",
            kind: "scalar",
            T: 9
        }
    ]);
var FeedbackRequestCategoryGroup$Runtime = (()=>class _FeedbackRequestCategoryGroup extends Message {
        constructor(data){
            super();
            this.id = "";
            this.prompt = "";
            this.categories = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FeedbackRequestCategoryGroup().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FeedbackRequestCategoryGroup().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FeedbackRequestCategoryGroup().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FeedbackRequestCategoryGroup, a, b2);
        }
    })();
var FeedbackRequestCategoryGroup = FeedbackRequestCategoryGroup$Runtime;
FeedbackRequestCategoryGroup.runtime = proto3;
FeedbackRequestCategoryGroup.typeName = "agent.v1.FeedbackRequestCategoryGroup";
FeedbackRequestCategoryGroup.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "categories",
            kind: "message",
            T: FeedbackRequestCategory,
            repeated: true
        }
    ]);
var FeedbackRequestUpdate$Runtime = (()=>class _FeedbackRequestUpdate extends Message {
        constructor(data){
            super();
            this.requestId = "";
            this.categories = [];
            this.categoryGroups = [];
            this.showFormImmediately = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FeedbackRequestUpdate().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FeedbackRequestUpdate().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FeedbackRequestUpdate().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FeedbackRequestUpdate, a, b2);
        }
    })();
var FeedbackRequestUpdate = FeedbackRequestUpdate$Runtime;
FeedbackRequestUpdate.runtime = proto3;
FeedbackRequestUpdate.typeName = "agent.v1.FeedbackRequestUpdate";
FeedbackRequestUpdate.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "canonical_model_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "categories",
            kind: "message",
            T: FeedbackRequestCategory,
            repeated: true
        },
        {
            no: 4,
            name: "category_groups",
            kind: "message",
            T: FeedbackRequestCategoryGroup,
            repeated: true
        },
        {
            no: 5,
            name: "show_form_immediately",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "negative_title",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "comment_placeholder",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var ResponseComparisonStarted$Runtime = (()=>class _ResponseComparisonStarted extends Message {
        constructor(data){
            super();
            this.displayOrder = ResponseComparisonDisplayOrder.UNSPECIFIED;
            this.parentInvocationId = "";
            this.alternateInvocationId = "";
            this.parentResponse = "";
            this.comparisonConfigId = "";
            this.alternateModelId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ResponseComparisonStarted().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ResponseComparisonStarted().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ResponseComparisonStarted().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ResponseComparisonStarted, a, b2);
        }
    })();
var ResponseComparisonStarted = ResponseComparisonStarted$Runtime;
ResponseComparisonStarted.runtime = proto3;
ResponseComparisonStarted.typeName = "agent.v1.ResponseComparisonStarted";
ResponseComparisonStarted.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "display_order",
            kind: "enum",
            T: proto3.getEnumType(ResponseComparisonDisplayOrder)
        },
        {
            no: 2,
            name: "parent_invocation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "alternate_invocation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "parent_response",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "comparison_config_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "alternate_model_id",
            kind: "scalar",
            T: 9
        }
    ]);
var ResponseComparisonTextDelta$Runtime = (()=>class _ResponseComparisonTextDelta extends Message {
        constructor(data){
            super();
            this.text = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ResponseComparisonTextDelta().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ResponseComparisonTextDelta().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ResponseComparisonTextDelta().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ResponseComparisonTextDelta, a, b2);
        }
    })();
var ResponseComparisonTextDelta = ResponseComparisonTextDelta$Runtime;
ResponseComparisonTextDelta.runtime = proto3;
ResponseComparisonTextDelta.typeName = "agent.v1.ResponseComparisonTextDelta";
ResponseComparisonTextDelta.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]);
var ResponseComparisonCompleted$Runtime = (()=>class _ResponseComparisonCompleted extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ResponseComparisonCompleted().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ResponseComparisonCompleted().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ResponseComparisonCompleted().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ResponseComparisonCompleted, a, b2);
        }
    })();
var ResponseComparisonCompleted = ResponseComparisonCompleted$Runtime;
ResponseComparisonCompleted.runtime = proto3;
ResponseComparisonCompleted.typeName = "agent.v1.ResponseComparisonCompleted";
ResponseComparisonCompleted.fields = proto3.util.newFieldList(()=>[]);
var ResponseComparisonSkipped$Runtime = (()=>class _ResponseComparisonSkipped extends Message {
        constructor(data){
            super();
            this.reason = ResponseComparisonSkipReason.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ResponseComparisonSkipped().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ResponseComparisonSkipped().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ResponseComparisonSkipped().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ResponseComparisonSkipped, a, b2);
        }
    })();
var ResponseComparisonSkipped = ResponseComparisonSkipped$Runtime;
ResponseComparisonSkipped.runtime = proto3;
ResponseComparisonSkipped.typeName = "agent.v1.ResponseComparisonSkipped";
ResponseComparisonSkipped.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "reason",
            kind: "enum",
            T: proto3.getEnumType(ResponseComparisonSkipReason)
        }
    ]);
var ResponseComparisonUpdate$Runtime = (()=>class _ResponseComparisonUpdate extends Message {
        constructor(data){
            super();
            this.comparisonId = "";
            this.event = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ResponseComparisonUpdate().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ResponseComparisonUpdate().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ResponseComparisonUpdate().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ResponseComparisonUpdate, a, b2);
        }
    })();
var ResponseComparisonUpdate = ResponseComparisonUpdate$Runtime;
ResponseComparisonUpdate.runtime = proto3;
ResponseComparisonUpdate.typeName = "agent.v1.ResponseComparisonUpdate";
ResponseComparisonUpdate.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "comparison_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "started",
            kind: "message",
            T: ResponseComparisonStarted,
            oneof: "event"
        },
        {
            no: 3,
            name: "text_delta",
            kind: "message",
            T: ResponseComparisonTextDelta,
            oneof: "event"
        },
        {
            no: 4,
            name: "completed",
            kind: "message",
            T: ResponseComparisonCompleted,
            oneof: "event"
        },
        {
            no: 5,
            name: "skipped",
            kind: "message",
            T: ResponseComparisonSkipped,
            oneof: "event"
        }
    ]);
var InteractionUpdate$Runtime = (()=>class _InteractionUpdate extends Message {
        constructor(data){
            super();
            this.message = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _InteractionUpdate().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _InteractionUpdate().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _InteractionUpdate().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_InteractionUpdate, a, b2);
        }
    })();
var InteractionUpdate = InteractionUpdate$Runtime;
InteractionUpdate.runtime = proto3;
InteractionUpdate.typeName = "agent.v1.InteractionUpdate";
InteractionUpdate.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "text_delta",
            kind: "message",
            T: TextDeltaUpdate,
            oneof: "message"
        },
        {
            no: 7,
            name: "partial_tool_call",
            kind: "message",
            T: PartialToolCallUpdate,
            oneof: "message"
        },
        {
            no: 15,
            name: "tool_call_delta",
            kind: "message",
            T: ToolCallDeltaUpdate,
            oneof: "message"
        },
        {
            no: 2,
            name: "tool_call_started",
            kind: "message",
            T: ToolCallStartedUpdate,
            oneof: "message"
        },
        {
            no: 3,
            name: "tool_call_completed",
            kind: "message",
            T: ToolCallCompletedUpdate,
            oneof: "message"
        },
        {
            no: 4,
            name: "thinking_delta",
            kind: "message",
            T: ThinkingDeltaUpdate,
            oneof: "message"
        },
        {
            no: 5,
            name: "thinking_completed",
            kind: "message",
            T: ThinkingCompletedUpdate,
            oneof: "message"
        },
        {
            no: 6,
            name: "user_message_appended",
            kind: "message",
            T: UserMessageAppendedUpdate,
            oneof: "message"
        },
        {
            no: 8,
            name: "token_delta",
            kind: "message",
            T: TokenDeltaUpdate,
            oneof: "message"
        },
        {
            no: 9,
            name: "summary",
            kind: "message",
            T: SummaryUpdate,
            oneof: "message"
        },
        {
            no: 10,
            name: "summary_started",
            kind: "message",
            T: SummaryStartedUpdate,
            oneof: "message"
        },
        {
            no: 11,
            name: "summary_completed",
            kind: "message",
            T: SummaryCompletedUpdate,
            oneof: "message"
        },
        {
            no: 12,
            name: "shell_output_delta",
            kind: "message",
            T: ShellOutputDeltaUpdate,
            oneof: "message"
        },
        {
            no: 13,
            name: "heartbeat",
            kind: "message",
            T: HeartbeatUpdate,
            oneof: "message"
        },
        {
            no: 14,
            name: "turn_ended",
            kind: "message",
            T: TurnEndedUpdate,
            oneof: "message"
        },
        {
            no: 16,
            name: "step_started",
            kind: "message",
            T: StepStartedUpdate,
            oneof: "message"
        },
        {
            no: 17,
            name: "step_completed",
            kind: "message",
            T: StepCompletedUpdate,
            oneof: "message"
        },
        {
            no: 18,
            name: "prompt_suggestion",
            kind: "message",
            T: PromptSuggestionUpdate,
            oneof: "message"
        },
        {
            no: 19,
            name: "post_request_prompt",
            kind: "message",
            T: PostRequestPromptUpdate,
            oneof: "message"
        },
        {
            no: 20,
            name: "active_branch_change",
            kind: "message",
            T: ActiveBranchChange,
            oneof: "message"
        },
        {
            no: 21,
            name: "feedback_request",
            kind: "message",
            T: FeedbackRequestUpdate,
            oneof: "message"
        },
        {
            no: 22,
            name: "response_comparison",
            kind: "message",
            T: ResponseComparisonUpdate,
            oneof: "message"
        },
        {
            no: 23,
            name: "context_injection_state",
            kind: "message",
            T: ContextInjectionStateUpdate,
            oneof: "message"
        },
        {
            no: 24,
            name: "routed_model",
            kind: "message",
            T: RoutedModelUpdate,
            oneof: "message"
        }
    ]);
var ContextInjectionStateUpdate$Runtime = (()=>class _ContextInjectionStateUpdate extends Message {
        constructor(data){
            super();
            this.injectionId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ContextInjectionStateUpdate().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ContextInjectionStateUpdate().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ContextInjectionStateUpdate().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ContextInjectionStateUpdate, a, b2);
        }
    })();
var ContextInjectionStateUpdate = ContextInjectionStateUpdate$Runtime;
ContextInjectionStateUpdate.runtime = proto3;
ContextInjectionStateUpdate.typeName = "agent.v1.ContextInjectionStateUpdate";
ContextInjectionStateUpdate.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "injection_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "state",
            kind: "message",
            T: ContextInjectionState
        }
    ]);
var PostRequestPromptUpdate$Runtime = (()=>class _PostRequestPromptUpdate extends Message {
        constructor(data){
            super();
            this.title = "";
            this.message = "";
            this.buttonLabel = "";
            this.buttonUrl = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PostRequestPromptUpdate().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PostRequestPromptUpdate().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PostRequestPromptUpdate().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PostRequestPromptUpdate, a, b2);
        }
    })();
var PostRequestPromptUpdate = PostRequestPromptUpdate$Runtime;
PostRequestPromptUpdate.runtime = proto3;
PostRequestPromptUpdate.typeName = "agent.v1.PostRequestPromptUpdate";
PostRequestPromptUpdate.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "button_label",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "button_url",
            kind: "scalar",
            T: 9
        }
    ]);
var InteractionQuery$Runtime = (()=>class _InteractionQuery extends Message {
        constructor(data){
            super();
            this.id = 0;
            this.query = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _InteractionQuery().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _InteractionQuery().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _InteractionQuery().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_InteractionQuery, a, b2);
        }
    })();
var InteractionQuery = InteractionQuery$Runtime;
InteractionQuery.runtime = proto3;
InteractionQuery.typeName = "agent.v1.InteractionQuery";
InteractionQuery.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "web_search_request_query",
            kind: "message",
            T: WebSearchRequestQuery,
            oneof: "query"
        },
        {
            no: 3,
            name: "ask_question_interaction_query",
            kind: "message",
            T: AskQuestionInteractionQuery,
            oneof: "query"
        },
        {
            no: 4,
            name: "switch_mode_request_query",
            kind: "message",
            T: SwitchModeRequestQuery,
            oneof: "query"
        },
        {
            no: 7,
            name: "create_plan_request_query",
            kind: "message",
            T: CreatePlanRequestQuery,
            oneof: "query"
        },
        {
            no: 8,
            name: "setup_vm_environment_args",
            kind: "message",
            T: SetupVmEnvironmentArgs,
            oneof: "query"
        },
        {
            no: 9,
            name: "web_fetch_request_query",
            kind: "message",
            T: WebFetchRequestQuery,
            oneof: "query"
        },
        {
            no: 10,
            name: "pr_management_request_query",
            kind: "message",
            T: PrManagementRequestQuery,
            oneof: "query"
        },
        {
            no: 11,
            name: "mcp_auth_request_query",
            kind: "message",
            T: McpAuthRequestQuery,
            oneof: "query"
        },
        {
            no: 12,
            name: "generate_image_request_query",
            kind: "message",
            T: GenerateImageRequestQuery,
            oneof: "query"
        },
        {
            no: 13,
            name: "replace_env_args",
            kind: "message",
            T: ReplaceEnvArgs,
            oneof: "query"
        },
        {
            no: 14,
            name: "connect_scm_request_query",
            kind: "message",
            T: ConnectScmRequestQuery,
            oneof: "query"
        }
    ]);
var InteractionResponse$Runtime = (()=>class _InteractionResponse extends Message {
        constructor(data){
            super();
            this.id = 0;
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _InteractionResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _InteractionResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _InteractionResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_InteractionResponse, a, b2);
        }
    })();
var InteractionResponse = InteractionResponse$Runtime;
InteractionResponse.runtime = proto3;
InteractionResponse.typeName = "agent.v1.InteractionResponse";
InteractionResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "web_search_request_response",
            kind: "message",
            T: WebSearchRequestResponse,
            oneof: "result"
        },
        {
            no: 3,
            name: "ask_question_interaction_response",
            kind: "message",
            T: AskQuestionInteractionResponse,
            oneof: "result"
        },
        {
            no: 4,
            name: "switch_mode_request_response",
            kind: "message",
            T: SwitchModeRequestResponse,
            oneof: "result"
        },
        {
            no: 7,
            name: "create_plan_request_response",
            kind: "message",
            T: CreatePlanRequestResponse,
            oneof: "result"
        },
        {
            no: 8,
            name: "setup_vm_environment_result",
            kind: "message",
            T: SetupVmEnvironmentResult,
            oneof: "result"
        },
        {
            no: 9,
            name: "web_fetch_request_response",
            kind: "message",
            T: WebFetchRequestResponse,
            oneof: "result"
        },
        {
            no: 10,
            name: "pr_management_result",
            kind: "message",
            T: PrManagementResult,
            oneof: "result"
        },
        {
            no: 11,
            name: "mcp_auth_request_response",
            kind: "message",
            T: McpAuthRequestResponse,
            oneof: "result"
        },
        {
            no: 12,
            name: "generate_image_request_response",
            kind: "message",
            T: GenerateImageRequestResponse,
            oneof: "result"
        },
        {
            no: 13,
            name: "replace_env_result",
            kind: "message",
            T: ReplaceEnvResult,
            oneof: "result"
        },
        {
            no: 14,
            name: "connect_scm_request_response",
            kind: "message",
            T: ConnectScmRequestResponse,
            oneof: "result"
        }
    ]);
var AskQuestionInteractionQuery$Runtime = (()=>class _AskQuestionInteractionQuery extends Message {
        constructor(data){
            super();
            this.toolCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AskQuestionInteractionQuery().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AskQuestionInteractionQuery().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AskQuestionInteractionQuery().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AskQuestionInteractionQuery, a, b2);
        }
    })();
var AskQuestionInteractionQuery = AskQuestionInteractionQuery$Runtime;
AskQuestionInteractionQuery.runtime = proto3;
AskQuestionInteractionQuery.typeName = "agent.v1.AskQuestionInteractionQuery";
AskQuestionInteractionQuery.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: AskQuestionArgs
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
var AskQuestionInteractionResponse$Runtime = (()=>class _AskQuestionInteractionResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AskQuestionInteractionResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AskQuestionInteractionResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AskQuestionInteractionResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AskQuestionInteractionResponse, a, b2);
        }
    })();
var AskQuestionInteractionResponse = AskQuestionInteractionResponse$Runtime;
AskQuestionInteractionResponse.runtime = proto3;
AskQuestionInteractionResponse.typeName = "agent.v1.AskQuestionInteractionResponse";
AskQuestionInteractionResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "result",
            kind: "message",
            T: AskQuestionResult
        }
    ]);
var PreCompactRequestQuery$Runtime = (()=>class _PreCompactRequestQuery extends Message {
        constructor(data){
            super();
            this.trigger = "";
            this.contextUsagePercent = 0;
            this.contextTokens = protoInt64.zero;
            this.contextWindowSize = protoInt64.zero;
            this.messageCount = 0;
            this.messagesToCompact = 0;
            this.isFirstCompaction = false;
            this.modelParams = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PreCompactRequestQuery().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PreCompactRequestQuery().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PreCompactRequestQuery().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PreCompactRequestQuery, a, b2);
        }
    })();
var PreCompactRequestQuery = PreCompactRequestQuery$Runtime;
PreCompactRequestQuery.runtime = proto3;
PreCompactRequestQuery.typeName = "agent.v1.PreCompactRequestQuery";
PreCompactRequestQuery.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "trigger",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "context_usage_percent",
            kind: "scalar",
            T: 1
        },
        {
            no: 3,
            name: "context_tokens",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "context_window_size",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "message_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "messages_to_compact",
            kind: "scalar",
            T: 5
        },
        {
            no: 7,
            name: "is_first_compaction",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "generation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 12,
            name: "model_params",
            kind: "message",
            T: RequestedModel_ModelParameterValue,
            repeated: true
        }
    ]);
var PreCompactRequestResponse$Runtime = (()=>class _PreCompactRequestResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PreCompactRequestResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PreCompactRequestResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PreCompactRequestResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PreCompactRequestResponse, a, b2);
        }
    })();
var PreCompactRequestResponse = PreCompactRequestResponse$Runtime;
PreCompactRequestResponse.runtime = proto3;
PreCompactRequestResponse.typeName = "agent.v1.PreCompactRequestResponse";
PreCompactRequestResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "user_message",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var SubagentStartRequestQuery$Runtime = (()=>class _SubagentStartRequestQuery extends Message {
        constructor(data){
            super();
            this.subagentId = "";
            this.subagentType = "";
            this.task = "";
            this.parentConversationId = "";
            this.isParallelWorker = false;
            this.modelParams = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SubagentStartRequestQuery().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SubagentStartRequestQuery().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SubagentStartRequestQuery().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubagentStartRequestQuery, a, b2);
        }
    })();
var SubagentStartRequestQuery = SubagentStartRequestQuery$Runtime;
SubagentStartRequestQuery.runtime = proto3;
SubagentStartRequestQuery.typeName = "agent.v1.SubagentStartRequestQuery";
SubagentStartRequestQuery.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "subagent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "subagent_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "task",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "parent_conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "tool_call_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "subagent_model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "is_parallel_worker",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "git_branch",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "generation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 12,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 13,
            name: "model_params",
            kind: "message",
            T: RequestedModel_ModelParameterValue,
            repeated: true
        }
    ]);
var SubagentStartRequestResponse$Runtime = (()=>class _SubagentStartRequestResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SubagentStartRequestResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SubagentStartRequestResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SubagentStartRequestResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubagentStartRequestResponse, a, b2);
        }
    })();
var SubagentStartRequestResponse = SubagentStartRequestResponse$Runtime;
SubagentStartRequestResponse.runtime = proto3;
SubagentStartRequestResponse.typeName = "agent.v1.SubagentStartRequestResponse";
SubagentStartRequestResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "permission",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "user_message",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "additional_context",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var SubagentStopRequestQuery$Runtime = (()=>class _SubagentStopRequestQuery extends Message {
        constructor(data){
            super();
            this.subagentId = "";
            this.subagentType = "";
            this.status = "";
            this.durationMs = protoInt64.zero;
            this.parentConversationId = "";
            this.messageCount = 0;
            this.toolCallCount = 0;
            this.modifiedFiles = [];
            this.loopCount = 0;
            this.modelParams = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SubagentStopRequestQuery().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SubagentStopRequestQuery().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SubagentStopRequestQuery().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubagentStopRequestQuery, a, b2);
        }
    })();
var SubagentStopRequestQuery = SubagentStopRequestQuery$Runtime;
SubagentStopRequestQuery.runtime = proto3;
SubagentStopRequestQuery.typeName = "agent.v1.SubagentStopRequestQuery";
SubagentStopRequestQuery.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "subagent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "subagent_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "status",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "duration_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "summary",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "parent_conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "message_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 8,
            name: "tool_call_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 9,
            name: "error_message",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "modified_files",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 11,
            name: "git_branch",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 12,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 13,
            name: "generation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 14,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 15,
            name: "loop_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 16,
            name: "task",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 17,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 18,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 19,
            name: "model_params",
            kind: "message",
            T: RequestedModel_ModelParameterValue,
            repeated: true
        }
    ]);
var SubagentStopRequestResponse$Runtime = (()=>class _SubagentStopRequestResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SubagentStopRequestResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SubagentStopRequestResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SubagentStopRequestResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubagentStopRequestResponse, a, b2);
        }
    })();
var SubagentStopRequestResponse = SubagentStopRequestResponse$Runtime;
SubagentStopRequestResponse.runtime = proto3;
SubagentStopRequestResponse.typeName = "agent.v1.SubagentStopRequestResponse";
SubagentStopRequestResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "followup_message",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "additional_context",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var BeforeSubmitPromptAttachment$Runtime = (()=>class _BeforeSubmitPromptAttachment extends Message {
        constructor(data){
            super();
            this.type = "";
            this.filePath = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _BeforeSubmitPromptAttachment().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _BeforeSubmitPromptAttachment().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _BeforeSubmitPromptAttachment().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_BeforeSubmitPromptAttachment, a, b2);
        }
    })();
var BeforeSubmitPromptAttachment = BeforeSubmitPromptAttachment$Runtime;
BeforeSubmitPromptAttachment.runtime = proto3;
BeforeSubmitPromptAttachment.typeName = "agent.v1.BeforeSubmitPromptAttachment";
BeforeSubmitPromptAttachment.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "type",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_path",
            kind: "scalar",
            T: 9
        }
    ]);
var BeforeSubmitPromptRequestQuery$Runtime = (()=>class _BeforeSubmitPromptRequestQuery extends Message {
        constructor(data){
            super();
            this.prompt = "";
            this.attachments = [];
            this.modelParams = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _BeforeSubmitPromptRequestQuery().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _BeforeSubmitPromptRequestQuery().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _BeforeSubmitPromptRequestQuery().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_BeforeSubmitPromptRequestQuery, a, b2);
        }
    })();
var BeforeSubmitPromptRequestQuery = BeforeSubmitPromptRequestQuery$Runtime;
BeforeSubmitPromptRequestQuery.runtime = proto3;
BeforeSubmitPromptRequestQuery.typeName = "agent.v1.BeforeSubmitPromptRequestQuery";
BeforeSubmitPromptRequestQuery.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "attachments",
            kind: "message",
            T: BeforeSubmitPromptAttachment,
            repeated: true
        },
        {
            no: 3,
            name: "composer_mode",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "generation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "model_params",
            kind: "message",
            T: RequestedModel_ModelParameterValue,
            repeated: true
        }
    ]);
var BeforeSubmitPromptRequestResponse$Runtime = (()=>class _BeforeSubmitPromptRequestResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _BeforeSubmitPromptRequestResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _BeforeSubmitPromptRequestResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _BeforeSubmitPromptRequestResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_BeforeSubmitPromptRequestResponse, a, b2);
        }
    })();
var BeforeSubmitPromptRequestResponse = BeforeSubmitPromptRequestResponse$Runtime;
BeforeSubmitPromptRequestResponse.runtime = proto3;
BeforeSubmitPromptRequestResponse.typeName = "agent.v1.BeforeSubmitPromptRequestResponse";
BeforeSubmitPromptRequestResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "continue",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 2,
            name: "user_message",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "additional_context",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var AfterAgentResponseRequestQuery$Runtime = (()=>class _AfterAgentResponseRequestQuery extends Message {
        constructor(data){
            super();
            this.text = "";
            this.modelParams = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AfterAgentResponseRequestQuery().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AfterAgentResponseRequestQuery().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AfterAgentResponseRequestQuery().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AfterAgentResponseRequestQuery, a, b2);
        }
    })();
var AfterAgentResponseRequestQuery = AfterAgentResponseRequestQuery$Runtime;
AfterAgentResponseRequestQuery.runtime = proto3;
AfterAgentResponseRequestQuery.typeName = "agent.v1.AfterAgentResponseRequestQuery";
AfterAgentResponseRequestQuery.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "generation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "model_params",
            kind: "message",
            T: RequestedModel_ModelParameterValue,
            repeated: true
        },
        {
            no: 7,
            name: "input_tokens",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 8,
            name: "output_tokens",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 9,
            name: "cache_read_tokens",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 10,
            name: "cache_write_tokens",
            kind: "scalar",
            T: 3,
            opt: true
        }
    ]);
var AfterAgentResponseRequestResponse$Runtime = (()=>class _AfterAgentResponseRequestResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AfterAgentResponseRequestResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AfterAgentResponseRequestResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AfterAgentResponseRequestResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AfterAgentResponseRequestResponse, a, b2);
        }
    })();
var AfterAgentResponseRequestResponse = AfterAgentResponseRequestResponse$Runtime;
AfterAgentResponseRequestResponse.runtime = proto3;
AfterAgentResponseRequestResponse.typeName = "agent.v1.AfterAgentResponseRequestResponse";
AfterAgentResponseRequestResponse.fields = proto3.util.newFieldList(()=>[]);
var AfterAgentThoughtRequestQuery$Runtime = (()=>class _AfterAgentThoughtRequestQuery extends Message {
        constructor(data){
            super();
            this.text = "";
            this.modelParams = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AfterAgentThoughtRequestQuery().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AfterAgentThoughtRequestQuery().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AfterAgentThoughtRequestQuery().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AfterAgentThoughtRequestQuery, a, b2);
        }
    })();
var AfterAgentThoughtRequestQuery = AfterAgentThoughtRequestQuery$Runtime;
AfterAgentThoughtRequestQuery.runtime = proto3;
AfterAgentThoughtRequestQuery.typeName = "agent.v1.AfterAgentThoughtRequestQuery";
AfterAgentThoughtRequestQuery.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "duration_ms",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 3,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "generation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "model_params",
            kind: "message",
            T: RequestedModel_ModelParameterValue,
            repeated: true
        }
    ]);
var AfterAgentThoughtRequestResponse$Runtime = (()=>class _AfterAgentThoughtRequestResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AfterAgentThoughtRequestResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AfterAgentThoughtRequestResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AfterAgentThoughtRequestResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AfterAgentThoughtRequestResponse, a, b2);
        }
    })();
var AfterAgentThoughtRequestResponse = AfterAgentThoughtRequestResponse$Runtime;
AfterAgentThoughtRequestResponse.runtime = proto3;
AfterAgentThoughtRequestResponse.typeName = "agent.v1.AfterAgentThoughtRequestResponse";
AfterAgentThoughtRequestResponse.fields = proto3.util.newFieldList(()=>[]);
var StopRequestQuery$Runtime = (()=>class _StopRequestQuery extends Message {
        constructor(data){
            super();
            this.status = "";
            this.loopCount = 0;
            this.modelParams = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _StopRequestQuery().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _StopRequestQuery().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _StopRequestQuery().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_StopRequestQuery, a, b2);
        }
    })();
var StopRequestQuery = StopRequestQuery$Runtime;
StopRequestQuery.runtime = proto3;
StopRequestQuery.typeName = "agent.v1.StopRequestQuery";
StopRequestQuery.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "status",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "loop_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "generation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "model_params",
            kind: "message",
            T: RequestedModel_ModelParameterValue,
            repeated: true
        },
        {
            no: 8,
            name: "input_tokens",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 9,
            name: "output_tokens",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 10,
            name: "cache_read_tokens",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 11,
            name: "cache_write_tokens",
            kind: "scalar",
            T: 3,
            opt: true
        }
    ]);
var StopRequestResponse$Runtime = (()=>class _StopRequestResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _StopRequestResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _StopRequestResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _StopRequestResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_StopRequestResponse, a, b2);
        }
    })();
var StopRequestResponse = StopRequestResponse$Runtime;
StopRequestResponse.runtime = proto3;
StopRequestResponse.typeName = "agent.v1.StopRequestResponse";
StopRequestResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "followup_message",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var PreToolUseRequestQuery$Runtime = (()=>class _PreToolUseRequestQuery extends Message {
        constructor(data){
            super();
            this.toolName = "";
            this.toolUseId = "";
            this.modelParams = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PreToolUseRequestQuery().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PreToolUseRequestQuery().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PreToolUseRequestQuery().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PreToolUseRequestQuery, a, b2);
        }
    })();
var PreToolUseRequestQuery = PreToolUseRequestQuery$Runtime;
PreToolUseRequestQuery.runtime = proto3;
PreToolUseRequestQuery.typeName = "agent.v1.PreToolUseRequestQuery";
PreToolUseRequestQuery.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_input",
            kind: "message",
            T: Struct
        },
        {
            no: 3,
            name: "tool_use_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "cwd",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "generation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "model_params",
            kind: "message",
            T: RequestedModel_ModelParameterValue,
            repeated: true
        }
    ]);
var PreToolUseRequestResponse$Runtime = (()=>class _PreToolUseRequestResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PreToolUseRequestResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PreToolUseRequestResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PreToolUseRequestResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PreToolUseRequestResponse, a, b2);
        }
    })();
var PreToolUseRequestResponse = PreToolUseRequestResponse$Runtime;
PreToolUseRequestResponse.runtime = proto3;
PreToolUseRequestResponse.typeName = "agent.v1.PreToolUseRequestResponse";
PreToolUseRequestResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "permission",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "user_message",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "agent_message",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "updated_input",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "additional_context",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var PostToolUseRequestQuery$Runtime = (()=>class _PostToolUseRequestQuery extends Message {
        constructor(data){
            super();
            this.toolName = "";
            this.toolOutput = "";
            this.durationMs = protoInt64.zero;
            this.toolUseId = "";
            this.modelParams = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PostToolUseRequestQuery().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PostToolUseRequestQuery().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PostToolUseRequestQuery().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PostToolUseRequestQuery, a, b2);
        }
    })();
var PostToolUseRequestQuery = PostToolUseRequestQuery$Runtime;
PostToolUseRequestQuery.runtime = proto3;
PostToolUseRequestQuery.typeName = "agent.v1.PostToolUseRequestQuery";
PostToolUseRequestQuery.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_input",
            kind: "message",
            T: Struct
        },
        {
            no: 3,
            name: "tool_output",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "duration_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "tool_use_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "cwd",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "generation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "model_params",
            kind: "message",
            T: RequestedModel_ModelParameterValue,
            repeated: true
        }
    ]);
var PostToolUseRequestResponse$Runtime = (()=>class _PostToolUseRequestResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PostToolUseRequestResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PostToolUseRequestResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PostToolUseRequestResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PostToolUseRequestResponse, a, b2);
        }
    })();
var PostToolUseRequestResponse = PostToolUseRequestResponse$Runtime;
PostToolUseRequestResponse.runtime = proto3;
PostToolUseRequestResponse.typeName = "agent.v1.PostToolUseRequestResponse";
PostToolUseRequestResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "additional_context",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var PostToolUseFailureRequestQuery$Runtime = (()=>class _PostToolUseFailureRequestQuery extends Message {
        constructor(data){
            super();
            this.toolName = "";
            this.errorMessage = "";
            this.failureType = "";
            this.durationMs = protoInt64.zero;
            this.toolUseId = "";
            this.isInterrupt = false;
            this.modelParams = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PostToolUseFailureRequestQuery().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PostToolUseFailureRequestQuery().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PostToolUseFailureRequestQuery().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PostToolUseFailureRequestQuery, a, b2);
        }
    })();
var PostToolUseFailureRequestQuery = PostToolUseFailureRequestQuery$Runtime;
PostToolUseFailureRequestQuery.runtime = proto3;
PostToolUseFailureRequestQuery.typeName = "agent.v1.PostToolUseFailureRequestQuery";
PostToolUseFailureRequestQuery.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_input",
            kind: "message",
            T: Struct
        },
        {
            no: 3,
            name: "error_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "failure_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "duration_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 6,
            name: "tool_use_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "is_interrupt",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "generation_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 12,
            name: "model_params",
            kind: "message",
            T: RequestedModel_ModelParameterValue,
            repeated: true
        }
    ]);
var PostToolUseFailureRequestResponse$Runtime = (()=>class _PostToolUseFailureRequestResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PostToolUseFailureRequestResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PostToolUseFailureRequestResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PostToolUseFailureRequestResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PostToolUseFailureRequestResponse, a, b2);
        }
    })();
var PostToolUseFailureRequestResponse = PostToolUseFailureRequestResponse$Runtime;
PostToolUseFailureRequestResponse.runtime = proto3;
PostToolUseFailureRequestResponse.typeName = "agent.v1.PostToolUseFailureRequestResponse";
PostToolUseFailureRequestResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "additional_context",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var TaskToolCallArgsProto$Runtime = (()=>class _TaskToolCallArgsProto extends Message {
        constructor(data){
            super();
            this.description = "";
            this.prompt = "";
            this.subagentType = "";
            this.attachments = [];
            this.environment = SubagentExecutionEnvironment.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _TaskToolCallArgsProto().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _TaskToolCallArgsProto().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _TaskToolCallArgsProto().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_TaskToolCallArgsProto, a, b2);
        }
    })();
var TaskToolCallArgsProto = TaskToolCallArgsProto$Runtime;
TaskToolCallArgsProto.runtime = proto3;
TaskToolCallArgsProto.typeName = "agent.v1.TaskToolCallArgsProto";
TaskToolCallArgsProto.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "subagent_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "resume",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "readonly",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 7,
            name: "run_in_background",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 8,
            name: "attachments",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 9,
            name: "environment",
            kind: "enum",
            T: proto3.getEnumType(SubagentExecutionEnvironment)
        },
        {
            no: 10,
            name: "cloud_base_branch",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "cloud_requested_environment_build_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 12,
            name: "machine",
            kind: "message",
            T: TargetMachine,
            opt: true
        }
    ]);
var SubagentCredentials$Runtime = (()=>class _SubagentCredentials extends Message {
        constructor(data){
            super();
            this.credentials = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SubagentCredentials().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SubagentCredentials().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SubagentCredentials().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubagentCredentials, a, b2);
        }
    })();
var SubagentCredentials = SubagentCredentials$Runtime;
SubagentCredentials.runtime = proto3;
SubagentCredentials.typeName = "agent.v1.SubagentCredentials";
SubagentCredentials.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "api_key_credentials",
            kind: "message",
            T: ApiKeyCredentials,
            oneof: "credentials"
        },
        {
            no: 2,
            name: "azure_credentials",
            kind: "message",
            T: AzureCredentials,
            oneof: "credentials"
        },
        {
            no: 3,
            name: "bedrock_credentials",
            kind: "message",
            T: BedrockCredentials,
            oneof: "credentials"
        }
    ]);
var CloudSubagentInheritedContext$Runtime = (()=>class _CloudSubagentInheritedContext extends Message {
        constructor(data){
            super();
            this.resolved = false;
            this.inlineMcpConfigBlobId = new Uint8Array(0);
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CloudSubagentInheritedContext().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CloudSubagentInheritedContext().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CloudSubagentInheritedContext().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CloudSubagentInheritedContext, a, b2);
        }
    })();
var CloudSubagentInheritedContext = CloudSubagentInheritedContext$Runtime;
CloudSubagentInheritedContext.runtime = proto3;
CloudSubagentInheritedContext.typeName = "agent.v1.CloudSubagentInheritedContext";
CloudSubagentInheritedContext.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "automation_run_bc_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "inline_mcp_config_json",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "resolved",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "inline_mcp_config_blob_id",
            kind: "scalar",
            T: 12
        }
    ]);
var PreparedTaskSubagent$Runtime = (()=>class _PreparedTaskSubagent extends Message {
        constructor(data){
            super();
            this.subagentId = "";
            this.subagentTypeName = "";
            this.analyticsSubagentType = "";
            this.resolvedModelId = "";
            this.effectiveReadonly = false;
            this.useAskModeForSubagent = false;
            this.initialTurnsCount = 0;
            this.subagentRequestId = "";
            this.toolCallId = "";
            this.isResume = false;
            this.taskPrompt = "";
            this.taskDescription = "";
            this.parentModelName = "";
            this.enableExecuteHookExec = false;
            this.configuredSteps = [];
            this.readonlyShellEnabled = false;
            this.toolName = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PreparedTaskSubagent().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PreparedTaskSubagent().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PreparedTaskSubagent().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PreparedTaskSubagent, a, b2);
        }
    })();
var PreparedTaskSubagent = PreparedTaskSubagent$Runtime;
PreparedTaskSubagent.runtime = proto3;
PreparedTaskSubagent.typeName = "agent.v1.PreparedTaskSubagent";
PreparedTaskSubagent.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "subagent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "subagent_type_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "subagent_type",
            kind: "message",
            T: SubagentType
        },
        {
            no: 4,
            name: "analytics_subagent_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "resolved_model_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "effective_readonly",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "use_ask_mode_for_subagent",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "conversation_state",
            kind: "message",
            T: ConversationStateStructure
        },
        {
            no: 9,
            name: "initial_action",
            kind: "message",
            T: ConversationAction
        },
        {
            no: 10,
            name: "initial_turns_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 11,
            name: "subagent_request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 13,
            name: "is_resume",
            kind: "scalar",
            T: 8
        },
        {
            no: 14,
            name: "parent_request_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 15,
            name: "root_parent_request_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 16,
            name: "task_prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 17,
            name: "task_description",
            kind: "scalar",
            T: 9
        },
        {
            no: 18,
            name: "selected_context",
            kind: "message",
            T: SelectedContext,
            opt: true
        },
        {
            no: 19,
            name: "plugin",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 20,
            name: "marketplace",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 21,
            name: "parent_model_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 22,
            name: "raw_args",
            kind: "message",
            T: TaskToolCallArgsProto
        },
        {
            no: 23,
            name: "subagent_credentials",
            kind: "message",
            T: SubagentCredentials
        },
        {
            no: 25,
            name: "result_suffix",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 26,
            name: "enable_execute_hook_exec",
            kind: "scalar",
            T: 8
        },
        {
            no: 27,
            name: "configured_steps",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 28,
            name: "readonly_shell_enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 29,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 30,
            name: "prepared_timestamp_unix_ms",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 31,
            name: "plugin_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 32,
            name: "marketplace_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 33,
            name: "subagent_source",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 34,
            name: "cloud_subagent_bc_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 35,
            name: "provider_tool_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 36,
            name: "inherited_context",
            kind: "message",
            T: CloudSubagentInheritedContext,
            opt: true
        }
    ]);
export { ActiveBranchChange, AfterAgentResponseRequestQuery, AfterAgentResponseRequestResponse, AfterAgentThoughtRequestQuery, AfterAgentThoughtRequestResponse, AgentConversationTurn, AgentConversationTurnStructure, AgentMode, AgentRunRequest, ApiKeyCredentials, AskQuestionInteractionQuery, AskQuestionInteractionResponse, AssistantMessage, AsyncAskQuestionCompletionAction, AzureCredentials, BackgroundShellAction, BackgroundSubagentAction, BackgroundTaskCompletion, BackgroundTaskCompletionAction, BackgroundTaskCompletionReason, BackgroundTaskKind, BackgroundTaskNotificationContext, BackgroundTaskStatus, BedrockCredentials, BeforeSubmitPromptAttachment, BeforeSubmitPromptRequestQuery, BeforeSubmitPromptRequestResponse, CancelAction, CancelSubagentAction, ClientLlmGatewayCredential, CloudSubagentInheritedContext, CloudSubagentReference, CommunicateUpdateHistoryEntry, CommunicateUpdateTurnState, ContextInjectionCancelled, ContextInjectionDelivered, ContextInjectionQueued, ContextInjectionQueuedForNextTurn, ContextInjectionRejected, ContextInjectionState, ContextInjectionStateUpdate, ConversationAction, ConversationHistory, ConversationHistoryAssistantContent, ConversationHistoryAssistantMessage, ConversationHistoryImageContent, ConversationHistoryMessage, ConversationHistoryReasoningContent, ConversationHistoryRedactedReasoningContent, ConversationHistoryTextContent, ConversationHistoryToolCall, ConversationHistoryToolMessage, ConversationHistoryToolResultContent, ConversationHistoryUserContent, ConversationHistoryUserMessage, ConversationPlan, ConversationState, ConversationStateStructure, ConversationStep, ConversationSummary, ConversationSummaryArchive, ConversationTokenDetails, ConversationTurn, ConversationTurnStructure, CustomModeDescriptor, CustomModeExitIntent, CustomModeIntent, CustomModeSource, ExecutePlanAction, ExecutePlanInfo, FeedbackRequestCategory, FeedbackRequestCategoryGroup, FeedbackRequestUpdate, FileState, FileStateStructure, GoalContinuationAction, GoalState, HeartbeatUpdate, InjectContextAction, InteractionQuery, InteractionResponse, InteractionUpdate, InterruptedPendingToolCallResolution, InterruptedPendingToolCallResolutions, ModelDetails2, NewCloudVmTarget, PartialToolCallUpdate, PlanRegistryEntry, PostRequestPromptUpdate, PostToolUseFailureRequestQuery, PostToolUseFailureRequestResponse, PostToolUseRequestQuery, PostToolUseRequestResponse, PreCompactRequestQuery, PreCompactRequestResponse, PreFetchedBlob, PreToolUseRequestQuery, PreToolUseRequestResponse, PreparedTaskSubagent, ProjectDetails, ProjectSideChatDetails, ProjectSubagentDetails, PromptContextNode, PromptContextSourceRef, PromptContextUsageSnapshot, PromptContextUsageTree, PromptSuggestionUpdate, PromptTokenBreakdownCategory, PromptTokenBreakdownSnapshot, RequestedModel, RequestedModel_ModelParameterValue, ResponseComparisonCompleted, ResponseComparisonDisplayOrder, ResponseComparisonSkipReason, ResponseComparisonSkipped, ResponseComparisonStarted, ResponseComparisonTextDelta, ResponseComparisonUpdate, ResumeAction, RoutedModelUpdate, SameMachineTarget, SelfHostedPoolTarget, SelfHostedWorkerLabel, SelfHostedWorkerTarget, SetActiveBranchArgs, SetActiveBranchError, SetActiveBranchResult, SetActiveBranchSuccess, SetActiveBranchToolCall, ShellCommand, ShellCommandAction, ShellConversationTurn, ShellConversationTurnStructure, ShellOutput, ShellOutputDeltaUpdate, SimulatedMsgReason, StartPlanAction, StepCompletedUpdate, StepStartedUpdate, StepTiming, StopRequestQuery, StopRequestResponse, SubagentBackgroundReason, SubagentCredentials, SubagentExecutionEnvironment, SubagentModelOverride, SubagentPersistedState, SubagentRunState, SubagentRunStatus, SubagentStartRequestQuery, SubagentStartRequestResponse, SubagentStopRequestQuery, SubagentStopRequestResponse, SubmittedCustomMode, SubmittedExitedCustomMode, SubscriptionEventDisplay, SubscriptionNotificationAction, SubscriptionSource, SummarizeAction, SummaryCompletedUpdate, SummaryStartedUpdate, SummaryUpdate, SystemContextInjection, TargetMachine, TaskArgs, TaskError, TaskResult, TaskSuccess, TaskToolCall, TaskToolCallArgsProto, TaskToolCallDelta, TextDeltaUpdate, ThinkingCompletedUpdate, ThinkingDeltaUpdate, ThinkingDetails, ThinkingMessage, ThinkingStyle, TokenDeltaUpdate, ToolCall, ToolCallCompletedUpdate, ToolCallDelta, ToolCallDeltaUpdate, ToolCallStartedUpdate, TrackedGitRepo, TriggeringUserInfo, TruncatedToolCall, TruncatedToolCallArgs, TruncatedToolCallError, TruncatedToolCallResult, TruncatedToolCallSuccess, TurnEndedUpdate, UserContextInjection, UserDisplayInfo, UserMessage, UserMessageAction, UserMessageAppendedUpdate, UserMessage_SimulatedMessageMetadata };
