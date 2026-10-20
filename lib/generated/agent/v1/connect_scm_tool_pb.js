import { Message, proto3 } from "@bufbuild/protobuf";
var ConnectScmArgs$Runtime = (()=>class _ConnectScmArgs extends Message {
        constructor(data){
            super();
            this.toolCallId = "";
            this.target = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConnectScmArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConnectScmArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConnectScmArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConnectScmArgs, a, b2);
        }
    })();
var ConnectScmArgs = ConnectScmArgs$Runtime;
ConnectScmArgs.runtime = proto3;
ConnectScmArgs.typeName = "agent.v1.ConnectScmArgs";
ConnectScmArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "github",
            kind: "message",
            T: ConnectScmGithub,
            oneof: "target"
        }
    ]);
var ConnectScmGithub$Runtime = (()=>class _ConnectScmGithub extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConnectScmGithub().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConnectScmGithub().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConnectScmGithub().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConnectScmGithub, a, b2);
        }
    })();
var ConnectScmGithub = ConnectScmGithub$Runtime;
ConnectScmGithub.runtime = proto3;
ConnectScmGithub.typeName = "agent.v1.ConnectScmGithub";
ConnectScmGithub.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: ConnectScmGithubRepository
        },
        {
            no: 2,
            name: "ghe_application",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var ConnectScmGithubRepository$Runtime = (()=>class _ConnectScmGithubRepository extends Message {
        constructor(data){
            super();
            this.owner = "";
            this.repo = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConnectScmGithubRepository().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConnectScmGithubRepository().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConnectScmGithubRepository().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConnectScmGithubRepository, a, b2);
        }
    })();
var ConnectScmGithubRepository = ConnectScmGithubRepository$Runtime;
ConnectScmGithubRepository.runtime = proto3;
ConnectScmGithubRepository.typeName = "agent.v1.ConnectScmGithubRepository";
ConnectScmGithubRepository.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "owner",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "repo",
            kind: "scalar",
            T: 9
        }
    ]);
var ConnectScmResult$Runtime = (()=>class _ConnectScmResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConnectScmResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConnectScmResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConnectScmResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConnectScmResult, a, b2);
        }
    })();
var ConnectScmResult = ConnectScmResult$Runtime;
ConnectScmResult.runtime = proto3;
ConnectScmResult.typeName = "agent.v1.ConnectScmResult";
ConnectScmResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ConnectScmSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: ConnectScmError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: ConnectScmRejected,
            oneof: "result"
        }
    ]);
var ConnectScmSuccess$Runtime = (()=>class _ConnectScmSuccess extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConnectScmSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConnectScmSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConnectScmSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConnectScmSuccess, a, b2);
        }
    })();
var ConnectScmSuccess = ConnectScmSuccess$Runtime;
ConnectScmSuccess.runtime = proto3;
ConnectScmSuccess.typeName = "agent.v1.ConnectScmSuccess";
ConnectScmSuccess.fields = proto3.util.newFieldList(()=>[]);
var ConnectScmError$Runtime = (()=>class _ConnectScmError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConnectScmError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConnectScmError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConnectScmError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConnectScmError, a, b2);
        }
    })();
var ConnectScmError = ConnectScmError$Runtime;
ConnectScmError.runtime = proto3;
ConnectScmError.typeName = "agent.v1.ConnectScmError";
ConnectScmError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var ConnectScmRejected$Runtime = (()=>class _ConnectScmRejected extends Message {
        constructor(data){
            super();
            this.reason = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConnectScmRejected().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConnectScmRejected().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConnectScmRejected().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConnectScmRejected, a, b2);
        }
    })();
var ConnectScmRejected = ConnectScmRejected$Runtime;
ConnectScmRejected.runtime = proto3;
ConnectScmRejected.typeName = "agent.v1.ConnectScmRejected";
ConnectScmRejected.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
var ConnectScmToolCall$Runtime = (()=>class _ConnectScmToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConnectScmToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConnectScmToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConnectScmToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConnectScmToolCall, a, b2);
        }
    })();
var ConnectScmToolCall = ConnectScmToolCall$Runtime;
ConnectScmToolCall.runtime = proto3;
ConnectScmToolCall.typeName = "agent.v1.ConnectScmToolCall";
ConnectScmToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ConnectScmArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: ConnectScmResult
        }
    ]);
var ConnectScmRequestQuery$Runtime = (()=>class _ConnectScmRequestQuery extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConnectScmRequestQuery().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConnectScmRequestQuery().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConnectScmRequestQuery().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConnectScmRequestQuery, a, b2);
        }
    })();
var ConnectScmRequestQuery = ConnectScmRequestQuery$Runtime;
ConnectScmRequestQuery.runtime = proto3;
ConnectScmRequestQuery.typeName = "agent.v1.ConnectScmRequestQuery";
ConnectScmRequestQuery.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ConnectScmArgs
        }
    ]);
var ConnectScmRequestResponse$Runtime = (()=>class _ConnectScmRequestResponse extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConnectScmRequestResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConnectScmRequestResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConnectScmRequestResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConnectScmRequestResponse, a, b2);
        }
    })();
var ConnectScmRequestResponse = ConnectScmRequestResponse$Runtime;
ConnectScmRequestResponse.runtime = proto3;
ConnectScmRequestResponse.typeName = "agent.v1.ConnectScmRequestResponse";
ConnectScmRequestResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "approved",
            kind: "message",
            T: ConnectScmRequestResponse_Approved,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: ConnectScmRequestResponse_Rejected,
            oneof: "result"
        },
        {
            no: 3,
            name: "failed",
            kind: "message",
            T: ConnectScmRequestResponse_Failed,
            oneof: "result"
        }
    ]);
var ConnectScmRequestResponse_Approved$Runtime = (()=>class _ConnectScmRequestResponse_Approved extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConnectScmRequestResponse_Approved().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConnectScmRequestResponse_Approved().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConnectScmRequestResponse_Approved().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConnectScmRequestResponse_Approved, a, b2);
        }
    })();
var ConnectScmRequestResponse_Approved = ConnectScmRequestResponse_Approved$Runtime;
ConnectScmRequestResponse_Approved.runtime = proto3;
ConnectScmRequestResponse_Approved.typeName = "agent.v1.ConnectScmRequestResponse.Approved";
ConnectScmRequestResponse_Approved.fields = proto3.util.newFieldList(()=>[]);
var ConnectScmRequestResponse_Rejected$Runtime = (()=>class _ConnectScmRequestResponse_Rejected extends Message {
        constructor(data){
            super();
            this.reason = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConnectScmRequestResponse_Rejected().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConnectScmRequestResponse_Rejected().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConnectScmRequestResponse_Rejected().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConnectScmRequestResponse_Rejected, a, b2);
        }
    })();
var ConnectScmRequestResponse_Rejected = ConnectScmRequestResponse_Rejected$Runtime;
ConnectScmRequestResponse_Rejected.runtime = proto3;
ConnectScmRequestResponse_Rejected.typeName = "agent.v1.ConnectScmRequestResponse.Rejected";
ConnectScmRequestResponse_Rejected.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
var ConnectScmRequestResponse_Failed$Runtime = (()=>class _ConnectScmRequestResponse_Failed extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ConnectScmRequestResponse_Failed().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ConnectScmRequestResponse_Failed().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ConnectScmRequestResponse_Failed().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ConnectScmRequestResponse_Failed, a, b2);
        }
    })();
var ConnectScmRequestResponse_Failed = ConnectScmRequestResponse_Failed$Runtime;
ConnectScmRequestResponse_Failed.runtime = proto3;
ConnectScmRequestResponse_Failed.typeName = "agent.v1.ConnectScmRequestResponse.Failed";
ConnectScmRequestResponse_Failed.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
export { ConnectScmArgs, ConnectScmError, ConnectScmGithub, ConnectScmGithubRepository, ConnectScmRejected, ConnectScmRequestQuery, ConnectScmRequestResponse, ConnectScmRequestResponse_Approved, ConnectScmRequestResponse_Failed, ConnectScmRequestResponse_Rejected, ConnectScmResult, ConnectScmSuccess, ConnectScmToolCall };
