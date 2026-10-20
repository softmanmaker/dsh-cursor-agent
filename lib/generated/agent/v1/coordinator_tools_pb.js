import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
var GetAgentStatusArgs$Runtime = (()=>class _GetAgentStatusArgs extends Message {
        constructor(data){
            super();
            this.toolCallId = "";
            this.agentIds = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetAgentStatusArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetAgentStatusArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetAgentStatusArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetAgentStatusArgs, a, b2);
        }
    })();
var GetAgentStatusArgs = GetAgentStatusArgs$Runtime;
GetAgentStatusArgs.runtime = proto3;
GetAgentStatusArgs.typeName = "agent.v1.GetAgentStatusArgs";
GetAgentStatusArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "agent_ids",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var GetAgentStatusWorker$Runtime = (()=>class _GetAgentStatusWorker extends Message {
        constructor(data){
            super();
            this.bcId = "";
            this.name = "";
            this.lifecycle = "";
            this.turnInFlight = false;
            this.lastTerminalTurnStatus = "";
            this.prUrl = "";
            this.lastActivityAtMs = protoInt64.zero;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetAgentStatusWorker().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetAgentStatusWorker().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetAgentStatusWorker().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetAgentStatusWorker, a, b2);
        }
    })();
var GetAgentStatusWorker = GetAgentStatusWorker$Runtime;
GetAgentStatusWorker.runtime = proto3;
GetAgentStatusWorker.typeName = "agent.v1.GetAgentStatusWorker";
GetAgentStatusWorker.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "bc_id",
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
            name: "lifecycle",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "turn_in_flight",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "last_terminal_turn_status",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "last_activity_at_ms",
            kind: "scalar",
            T: 4
        }
    ]);
var GetAgentStatusSuccess$Runtime = (()=>class _GetAgentStatusSuccess extends Message {
        constructor(data){
            super();
            this.workers = [];
            this.message = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetAgentStatusSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetAgentStatusSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetAgentStatusSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetAgentStatusSuccess, a, b2);
        }
    })();
var GetAgentStatusSuccess = GetAgentStatusSuccess$Runtime;
GetAgentStatusSuccess.runtime = proto3;
GetAgentStatusSuccess.typeName = "agent.v1.GetAgentStatusSuccess";
GetAgentStatusSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "workers",
            kind: "message",
            T: GetAgentStatusWorker,
            repeated: true
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);
var GetAgentStatusError$Runtime = (()=>class _GetAgentStatusError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetAgentStatusError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetAgentStatusError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetAgentStatusError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetAgentStatusError, a, b2);
        }
    })();
var GetAgentStatusError = GetAgentStatusError$Runtime;
GetAgentStatusError.runtime = proto3;
GetAgentStatusError.typeName = "agent.v1.GetAgentStatusError";
GetAgentStatusError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var GetAgentStatusResult$Runtime = (()=>class _GetAgentStatusResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetAgentStatusResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetAgentStatusResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetAgentStatusResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetAgentStatusResult, a, b2);
        }
    })();
var GetAgentStatusResult = GetAgentStatusResult$Runtime;
GetAgentStatusResult.runtime = proto3;
GetAgentStatusResult.typeName = "agent.v1.GetAgentStatusResult";
GetAgentStatusResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: GetAgentStatusSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: GetAgentStatusError,
            oneof: "result"
        }
    ]);
var GetAgentStatusToolCall$Runtime = (()=>class _GetAgentStatusToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetAgentStatusToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetAgentStatusToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetAgentStatusToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetAgentStatusToolCall, a, b2);
        }
    })();
var GetAgentStatusToolCall = GetAgentStatusToolCall$Runtime;
GetAgentStatusToolCall.runtime = proto3;
GetAgentStatusToolCall.typeName = "agent.v1.GetAgentStatusToolCall";
GetAgentStatusToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: GetAgentStatusArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: GetAgentStatusResult
        }
    ]);
var SendToAgentArgs$Runtime = (()=>class _SendToAgentArgs extends Message {
        constructor(data){
            super();
            this.toolCallId = "";
            this.agentId = "";
            this.message = "";
            this.delivery = "";
            this.title = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SendToAgentArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SendToAgentArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SendToAgentArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SendToAgentArgs, a, b2);
        }
    })();
var SendToAgentArgs = SendToAgentArgs$Runtime;
SendToAgentArgs.runtime = proto3;
SendToAgentArgs.typeName = "agent.v1.SendToAgentArgs";
SendToAgentArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "delivery",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "title",
            kind: "scalar",
            T: 9
        }
    ]);
var SendToAgentSuccess$Runtime = (()=>class _SendToAgentSuccess extends Message {
        constructor(data){
            super();
            this.workerBcId = "";
            this.deliveredAs = "";
            this.message = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SendToAgentSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SendToAgentSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SendToAgentSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SendToAgentSuccess, a, b2);
        }
    })();
var SendToAgentSuccess = SendToAgentSuccess$Runtime;
SendToAgentSuccess.runtime = proto3;
SendToAgentSuccess.typeName = "agent.v1.SendToAgentSuccess";
SendToAgentSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "worker_bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "delivered_as",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);
var SendToAgentError$Runtime = (()=>class _SendToAgentError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SendToAgentError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SendToAgentError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SendToAgentError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SendToAgentError, a, b2);
        }
    })();
var SendToAgentError = SendToAgentError$Runtime;
SendToAgentError.runtime = proto3;
SendToAgentError.typeName = "agent.v1.SendToAgentError";
SendToAgentError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var SendToAgentResult$Runtime = (()=>class _SendToAgentResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SendToAgentResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SendToAgentResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SendToAgentResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SendToAgentResult, a, b2);
        }
    })();
var SendToAgentResult = SendToAgentResult$Runtime;
SendToAgentResult.runtime = proto3;
SendToAgentResult.typeName = "agent.v1.SendToAgentResult";
SendToAgentResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: SendToAgentSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: SendToAgentError,
            oneof: "result"
        }
    ]);
var SendToAgentToolCall$Runtime = (()=>class _SendToAgentToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SendToAgentToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SendToAgentToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SendToAgentToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SendToAgentToolCall, a, b2);
        }
    })();
var SendToAgentToolCall = SendToAgentToolCall$Runtime;
SendToAgentToolCall.runtime = proto3;
SendToAgentToolCall.typeName = "agent.v1.SendToAgentToolCall";
SendToAgentToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: SendToAgentArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: SendToAgentResult
        }
    ]);
var ReadAgentTranscriptArgs$Runtime = (()=>class _ReadAgentTranscriptArgs extends Message {
        constructor(data){
            super();
            this.toolCallId = "";
            this.agentId = "";
            this.mode = "";
            this.maxTurns = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReadAgentTranscriptArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReadAgentTranscriptArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReadAgentTranscriptArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadAgentTranscriptArgs, a, b2);
        }
    })();
var ReadAgentTranscriptArgs = ReadAgentTranscriptArgs$Runtime;
ReadAgentTranscriptArgs.runtime = proto3;
ReadAgentTranscriptArgs.typeName = "agent.v1.ReadAgentTranscriptArgs";
ReadAgentTranscriptArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "mode",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "max_turns",
            kind: "scalar",
            T: 13
        }
    ]);
var ReadAgentTranscriptSuccess$Runtime = (()=>class _ReadAgentTranscriptSuccess extends Message {
        constructor(data){
            super();
            this.transcript = "";
            this.truncated = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReadAgentTranscriptSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReadAgentTranscriptSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReadAgentTranscriptSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadAgentTranscriptSuccess, a, b2);
        }
    })();
var ReadAgentTranscriptSuccess = ReadAgentTranscriptSuccess$Runtime;
ReadAgentTranscriptSuccess.runtime = proto3;
ReadAgentTranscriptSuccess.typeName = "agent.v1.ReadAgentTranscriptSuccess";
ReadAgentTranscriptSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "transcript",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "truncated",
            kind: "scalar",
            T: 8
        }
    ]);
var ReadAgentTranscriptError$Runtime = (()=>class _ReadAgentTranscriptError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReadAgentTranscriptError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReadAgentTranscriptError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReadAgentTranscriptError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadAgentTranscriptError, a, b2);
        }
    })();
var ReadAgentTranscriptError = ReadAgentTranscriptError$Runtime;
ReadAgentTranscriptError.runtime = proto3;
ReadAgentTranscriptError.typeName = "agent.v1.ReadAgentTranscriptError";
ReadAgentTranscriptError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var ReadAgentTranscriptResult$Runtime = (()=>class _ReadAgentTranscriptResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReadAgentTranscriptResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReadAgentTranscriptResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReadAgentTranscriptResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadAgentTranscriptResult, a, b2);
        }
    })();
var ReadAgentTranscriptResult = ReadAgentTranscriptResult$Runtime;
ReadAgentTranscriptResult.runtime = proto3;
ReadAgentTranscriptResult.typeName = "agent.v1.ReadAgentTranscriptResult";
ReadAgentTranscriptResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ReadAgentTranscriptSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: ReadAgentTranscriptError,
            oneof: "result"
        }
    ]);
var ReadAgentTranscriptToolCall$Runtime = (()=>class _ReadAgentTranscriptToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReadAgentTranscriptToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReadAgentTranscriptToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReadAgentTranscriptToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadAgentTranscriptToolCall, a, b2);
        }
    })();
var ReadAgentTranscriptToolCall = ReadAgentTranscriptToolCall$Runtime;
ReadAgentTranscriptToolCall.runtime = proto3;
ReadAgentTranscriptToolCall.typeName = "agent.v1.ReadAgentTranscriptToolCall";
ReadAgentTranscriptToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ReadAgentTranscriptArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: ReadAgentTranscriptResult
        }
    ]);
var CreateAgentArgs$Runtime = (()=>class _CreateAgentArgs extends Message {
        constructor(data){
            super();
            this.toolCallId = "";
            this.prompt = "";
            this.labels = {};
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CreateAgentArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CreateAgentArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CreateAgentArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CreateAgentArgs, a, b2);
        }
    })();
var CreateAgentArgs = CreateAgentArgs$Runtime;
CreateAgentArgs.runtime = proto3;
CreateAgentArgs.typeName = "agent.v1.CreateAgentArgs";
CreateAgentArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "tool_call_id",
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
            name: "name",
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
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "machine_type",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "worker_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "pool",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "labels",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 10,
            name: "environment_build_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var CreateAgentSuccess$Runtime = (()=>class _CreateAgentSuccess extends Message {
        constructor(data){
            super();
            this.agentId = "";
            this.message = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CreateAgentSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CreateAgentSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CreateAgentSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CreateAgentSuccess, a, b2);
        }
    })();
var CreateAgentSuccess = CreateAgentSuccess$Runtime;
CreateAgentSuccess.runtime = proto3;
CreateAgentSuccess.typeName = "agent.v1.CreateAgentSuccess";
CreateAgentSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);
var CreateAgentError$Runtime = (()=>class _CreateAgentError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CreateAgentError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CreateAgentError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CreateAgentError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CreateAgentError, a, b2);
        }
    })();
var CreateAgentError = CreateAgentError$Runtime;
CreateAgentError.runtime = proto3;
CreateAgentError.typeName = "agent.v1.CreateAgentError";
CreateAgentError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var CreateAgentResult$Runtime = (()=>class _CreateAgentResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CreateAgentResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CreateAgentResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CreateAgentResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CreateAgentResult, a, b2);
        }
    })();
var CreateAgentResult = CreateAgentResult$Runtime;
CreateAgentResult.runtime = proto3;
CreateAgentResult.typeName = "agent.v1.CreateAgentResult";
CreateAgentResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: CreateAgentSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: CreateAgentError,
            oneof: "result"
        }
    ]);
var CreateAgentToolCall$Runtime = (()=>class _CreateAgentToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CreateAgentToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CreateAgentToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CreateAgentToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CreateAgentToolCall, a, b2);
        }
    })();
var CreateAgentToolCall = CreateAgentToolCall$Runtime;
CreateAgentToolCall.runtime = proto3;
CreateAgentToolCall.typeName = "agent.v1.CreateAgentToolCall";
CreateAgentToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: CreateAgentArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: CreateAgentResult
        }
    ]);
var StopAgentArgs$Runtime = (()=>class _StopAgentArgs extends Message {
        constructor(data){
            super();
            this.toolCallId = "";
            this.agentId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _StopAgentArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _StopAgentArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _StopAgentArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_StopAgentArgs, a, b2);
        }
    })();
var StopAgentArgs = StopAgentArgs$Runtime;
StopAgentArgs.runtime = proto3;
StopAgentArgs.typeName = "agent.v1.StopAgentArgs";
StopAgentArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "agent_id",
            kind: "scalar",
            T: 9
        }
    ]);
var StopAgentSuccess$Runtime = (()=>class _StopAgentSuccess extends Message {
        constructor(data){
            super();
            this.workerBcId = "";
            this.message = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _StopAgentSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _StopAgentSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _StopAgentSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_StopAgentSuccess, a, b2);
        }
    })();
var StopAgentSuccess = StopAgentSuccess$Runtime;
StopAgentSuccess.runtime = proto3;
StopAgentSuccess.typeName = "agent.v1.StopAgentSuccess";
StopAgentSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "worker_bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);
var StopAgentError$Runtime = (()=>class _StopAgentError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _StopAgentError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _StopAgentError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _StopAgentError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_StopAgentError, a, b2);
        }
    })();
var StopAgentError = StopAgentError$Runtime;
StopAgentError.runtime = proto3;
StopAgentError.typeName = "agent.v1.StopAgentError";
StopAgentError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var StopAgentResult$Runtime = (()=>class _StopAgentResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _StopAgentResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _StopAgentResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _StopAgentResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_StopAgentResult, a, b2);
        }
    })();
var StopAgentResult = StopAgentResult$Runtime;
StopAgentResult.runtime = proto3;
StopAgentResult.typeName = "agent.v1.StopAgentResult";
StopAgentResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: StopAgentSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: StopAgentError,
            oneof: "result"
        }
    ]);
var StopAgentToolCall$Runtime = (()=>class _StopAgentToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _StopAgentToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _StopAgentToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _StopAgentToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_StopAgentToolCall, a, b2);
        }
    })();
var StopAgentToolCall = StopAgentToolCall$Runtime;
StopAgentToolCall.runtime = proto3;
StopAgentToolCall.typeName = "agent.v1.StopAgentToolCall";
StopAgentToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: StopAgentArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: StopAgentResult
        }
    ]);
export { CreateAgentArgs, CreateAgentError, CreateAgentResult, CreateAgentSuccess, CreateAgentToolCall, GetAgentStatusArgs, GetAgentStatusError, GetAgentStatusResult, GetAgentStatusSuccess, GetAgentStatusToolCall, GetAgentStatusWorker, ReadAgentTranscriptArgs, ReadAgentTranscriptError, ReadAgentTranscriptResult, ReadAgentTranscriptSuccess, ReadAgentTranscriptToolCall, SendToAgentArgs, SendToAgentError, SendToAgentResult, SendToAgentSuccess, SendToAgentToolCall, StopAgentArgs, StopAgentError, StopAgentResult, StopAgentSuccess, StopAgentToolCall };
