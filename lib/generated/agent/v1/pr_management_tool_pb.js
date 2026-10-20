import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
var PullRequestStatus;
(function(PullRequestStatus2) {
    PullRequestStatus2[PullRequestStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    PullRequestStatus2[PullRequestStatus2["OPEN"] = 1] = "OPEN";
    PullRequestStatus2[PullRequestStatus2["CLOSED"] = 2] = "CLOSED";
})(PullRequestStatus || (PullRequestStatus = {}));
proto3.util.setEnumType(PullRequestStatus, "agent.v1.PullRequestStatus", [
    {
        no: 0,
        name: "PULL_REQUEST_STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "PULL_REQUEST_STATUS_OPEN"
    },
    {
        no: 2,
        name: "PULL_REQUEST_STATUS_CLOSED"
    }
]);
var PrManagementArgs$Runtime = (()=>class _PrManagementArgs extends Message {
        constructor(data){
            super();
            this.toolCallId = "";
            this.action = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PrManagementArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PrManagementArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PrManagementArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PrManagementArgs, a, b2);
        }
    })();
var PrManagementArgs = PrManagementArgs$Runtime;
PrManagementArgs.runtime = proto3;
PrManagementArgs.typeName = "agent.v1.PrManagementArgs";
PrManagementArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "create_pr",
            kind: "message",
            T: CreatePrAction,
            oneof: "action"
        },
        {
            no: 3,
            name: "update_pr",
            kind: "message",
            T: UpdatePrAction,
            oneof: "action"
        },
        {
            no: 4,
            name: "post_comment",
            kind: "message",
            T: PostCommentAction,
            oneof: "action"
        },
        {
            no: 5,
            name: "resolve_comment",
            kind: "message",
            T: ResolveCommentAction,
            oneof: "action"
        },
        {
            no: 6,
            name: "get_ci_status",
            kind: "message",
            T: GetCiStatusAction,
            oneof: "action"
        },
        {
            no: 7,
            name: "set_pr_status",
            kind: "message",
            T: SetPrStatusAction,
            oneof: "action"
        }
    ]);
var CreatePrAction$Runtime = (()=>class _CreatePrAction extends Message {
        constructor(data){
            super();
            this.title = "";
            this.body = "";
            this.branchName = "";
            this.addLabels = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CreatePrAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CreatePrAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CreatePrAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CreatePrAction, a, b2);
        }
    })();
var CreatePrAction = CreatePrAction$Runtime;
CreatePrAction.runtime = proto3;
CreatePrAction.typeName = "agent.v1.CreatePrAction";
CreatePrAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "body",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "draft",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 5,
            name: "branch_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "add_labels",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 7,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "skip_branch_prefix_check",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 9,
            name: "stack_on_pr_number",
            kind: "scalar",
            T: 3,
            opt: true
        }
    ]);
var UpdatePrAction$Runtime = (()=>class _UpdatePrAction extends Message {
        constructor(data){
            super();
            this.addLabels = [];
            this.removeLabels = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UpdatePrAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UpdatePrAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UpdatePrAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UpdatePrAction, a, b2);
        }
    })();
var UpdatePrAction = UpdatePrAction$Runtime;
UpdatePrAction.runtime = proto3;
UpdatePrAction.typeName = "agent.v1.UpdatePrAction";
UpdatePrAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: true
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
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "branch_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "add_labels",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 7,
            name: "remove_labels",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 8,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "stack_on_pr_number",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 10,
            name: "clear_stack",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 11,
            name: "draft",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
var PostCommentAction$Runtime = (()=>class _PostCommentAction extends Message {
        constructor(data){
            super();
            this.body = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PostCommentAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PostCommentAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PostCommentAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PostCommentAction, a, b2);
        }
    })();
var PostCommentAction = PostCommentAction$Runtime;
PostCommentAction.runtime = proto3;
PostCommentAction.typeName = "agent.v1.PostCommentAction";
PostCommentAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "branch_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "body",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "in_reply_to",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 6,
            name: "path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "line",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 8,
            name: "start_line",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 9,
            name: "side",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "reply_to_reference",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var ResolveCommentAction$Runtime = (()=>class _ResolveCommentAction extends Message {
        constructor(data){
            super();
            this.commentId = protoInt64.zero;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ResolveCommentAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ResolveCommentAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ResolveCommentAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ResolveCommentAction, a, b2);
        }
    })();
var ResolveCommentAction = ResolveCommentAction$Runtime;
ResolveCommentAction.runtime = proto3;
ResolveCommentAction.typeName = "agent.v1.ResolveCommentAction";
ResolveCommentAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "branch_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "comment_id",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "comment_reference",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var GetCiStatusAction$Runtime = (()=>class _GetCiStatusAction extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetCiStatusAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetCiStatusAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetCiStatusAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetCiStatusAction, a, b2);
        }
    })();
var GetCiStatusAction = GetCiStatusAction$Runtime;
GetCiStatusAction.runtime = proto3;
GetCiStatusAction.typeName = "agent.v1.GetCiStatusAction";
GetCiStatusAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "branch_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var SetPrStatusAction$Runtime = (()=>class _SetPrStatusAction extends Message {
        constructor(data){
            super();
            this.status = PullRequestStatus.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SetPrStatusAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SetPrStatusAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SetPrStatusAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SetPrStatusAction, a, b2);
        }
    })();
var SetPrStatusAction = SetPrStatusAction$Runtime;
SetPrStatusAction.runtime = proto3;
SetPrStatusAction.typeName = "agent.v1.SetPrStatusAction";
SetPrStatusAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "branch_name",
            kind: "scalar",
            T: 9,
            opt: true
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
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(PullRequestStatus)
        }
    ]);
var PrManagementResult$Runtime = (()=>class _PrManagementResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PrManagementResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PrManagementResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PrManagementResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PrManagementResult, a, b2);
        }
    })();
var PrManagementResult = PrManagementResult$Runtime;
PrManagementResult.runtime = proto3;
PrManagementResult.typeName = "agent.v1.PrManagementResult";
PrManagementResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: PrManagementSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: PrManagementError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: PrManagementRejected,
            oneof: "result"
        },
        {
            no: 4,
            name: "registered",
            kind: "message",
            T: PrManagementRegistered,
            oneof: "result"
        },
        {
            no: 5,
            name: "needs_confirmation",
            kind: "message",
            T: PrManagementNeedsConfirmation,
            oneof: "result"
        }
    ]);
var PrManagementSuccess$Runtime = (()=>class _PrManagementSuccess extends Message {
        constructor(data){
            super();
            this.prUrl = "";
            this.prNumber = 0;
            this.message = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PrManagementSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PrManagementSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PrManagementSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PrManagementSuccess, a, b2);
        }
    })();
var PrManagementSuccess = PrManagementSuccess$Runtime;
PrManagementSuccess.runtime = proto3;
PrManagementSuccess.typeName = "agent.v1.PrManagementSuccess";
PrManagementSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "pr_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);
var PrManagementError$Runtime = (()=>class _PrManagementError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PrManagementError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PrManagementError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PrManagementError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PrManagementError, a, b2);
        }
    })();
var PrManagementError = PrManagementError$Runtime;
PrManagementError.runtime = proto3;
PrManagementError.typeName = "agent.v1.PrManagementError";
PrManagementError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var PrManagementRejected$Runtime = (()=>class _PrManagementRejected extends Message {
        constructor(data){
            super();
            this.reason = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PrManagementRejected().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PrManagementRejected().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PrManagementRejected().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PrManagementRejected, a, b2);
        }
    })();
var PrManagementRejected = PrManagementRejected$Runtime;
PrManagementRejected.runtime = proto3;
PrManagementRejected.typeName = "agent.v1.PrManagementRejected";
PrManagementRejected.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
var PrManagementRegistered$Runtime = (()=>class _PrManagementRegistered extends Message {
        constructor(data){
            super();
            this.message = "";
            this.title = "";
            this.body = "";
            this.branchName = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PrManagementRegistered().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PrManagementRegistered().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PrManagementRegistered().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PrManagementRegistered, a, b2);
        }
    })();
var PrManagementRegistered = PrManagementRegistered$Runtime;
PrManagementRegistered.runtime = proto3;
PrManagementRegistered.typeName = "agent.v1.PrManagementRegistered";
PrManagementRegistered.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "body",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "draft",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 6,
            name: "branch_name",
            kind: "scalar",
            T: 9
        }
    ]);
var PrManagementNeedsConfirmation$Runtime = (()=>class _PrManagementNeedsConfirmation extends Message {
        constructor(data){
            super();
            this.message = "";
            this.discoveredPrUrl = "";
            this.discoveredPrNumber = 0;
            this.discoveredPrTitle = "";
            this.branchName = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PrManagementNeedsConfirmation().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PrManagementNeedsConfirmation().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PrManagementNeedsConfirmation().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PrManagementNeedsConfirmation, a, b2);
        }
    })();
var PrManagementNeedsConfirmation = PrManagementNeedsConfirmation$Runtime;
PrManagementNeedsConfirmation.runtime = proto3;
PrManagementNeedsConfirmation.typeName = "agent.v1.PrManagementNeedsConfirmation";
PrManagementNeedsConfirmation.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "discovered_pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "discovered_pr_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "discovered_pr_title",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "branch_name",
            kind: "scalar",
            T: 9
        }
    ]);
var PrManagementToolCall$Runtime = (()=>class _PrManagementToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PrManagementToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PrManagementToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PrManagementToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PrManagementToolCall, a, b2);
        }
    })();
var PrManagementToolCall = PrManagementToolCall$Runtime;
PrManagementToolCall.runtime = proto3;
PrManagementToolCall.typeName = "agent.v1.PrManagementToolCall";
PrManagementToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: PrManagementArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: PrManagementResult
        }
    ]);
var PrManagementRequestQuery$Runtime = (()=>class _PrManagementRequestQuery extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PrManagementRequestQuery().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PrManagementRequestQuery().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PrManagementRequestQuery().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PrManagementRequestQuery, a, b2);
        }
    })();
var PrManagementRequestQuery = PrManagementRequestQuery$Runtime;
PrManagementRequestQuery.runtime = proto3;
PrManagementRequestQuery.typeName = "agent.v1.PrManagementRequestQuery";
PrManagementRequestQuery.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: PrManagementArgs
        }
    ]);
export { CreatePrAction, GetCiStatusAction, PostCommentAction, PrManagementArgs, PrManagementError, PrManagementNeedsConfirmation, PrManagementRegistered, PrManagementRejected, PrManagementRequestQuery, PrManagementResult, PrManagementSuccess, PrManagementToolCall, PullRequestStatus, ResolveCommentAction, SetPrStatusAction, UpdatePrAction };
