import { Message, proto3 } from "@bufbuild/protobuf";
var FetchCloudAgentDataArgs$Runtime = (()=>class _FetchCloudAgentDataArgs extends Message {
        constructor(data){
            super();
            this.bcIds = [];
            this.sources = [];
            this.statuses = [];
            this.includeTeamWide = false;
            this.includeArchived = false;
            this.includeTranscript = false;
            this.activeSince = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FetchCloudAgentDataArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FetchCloudAgentDataArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FetchCloudAgentDataArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FetchCloudAgentDataArgs, a, b2);
        }
    })();
var FetchCloudAgentDataArgs = FetchCloudAgentDataArgs$Runtime;
FetchCloudAgentDataArgs.runtime = proto3;
FetchCloudAgentDataArgs.typeName = "agent.v1.FetchCloudAgentDataArgs";
FetchCloudAgentDataArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 4,
            name: "bc_ids",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 6,
            name: "sources",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 7,
            name: "statuses",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 8,
            name: "include_team_wide",
            kind: "scalar",
            T: 8
        },
        {
            no: 9,
            name: "include_archived",
            kind: "scalar",
            T: 8
        },
        {
            no: 10,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 12,
            name: "include_transcript",
            kind: "scalar",
            T: 8
        },
        {
            no: 13,
            name: "active_since",
            kind: "scalar",
            T: 9
        }
    ]);
var FetchCloudAgentDataResult$Runtime = (()=>class _FetchCloudAgentDataResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FetchCloudAgentDataResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FetchCloudAgentDataResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FetchCloudAgentDataResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FetchCloudAgentDataResult, a, b2);
        }
    })();
var FetchCloudAgentDataResult = FetchCloudAgentDataResult$Runtime;
FetchCloudAgentDataResult.runtime = proto3;
FetchCloudAgentDataResult.typeName = "agent.v1.FetchCloudAgentDataResult";
FetchCloudAgentDataResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: FetchCloudAgentDataSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: FetchCloudAgentDataError,
            oneof: "result"
        }
    ]);
var FetchCloudAgentDataSuccess$Runtime = (()=>class _FetchCloudAgentDataSuccess extends Message {
        constructor(data){
            super();
            this.summary = "";
            this.agentCount = 0;
            this.writtenPaths = [];
            this.unavailableBcIds = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FetchCloudAgentDataSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FetchCloudAgentDataSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FetchCloudAgentDataSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FetchCloudAgentDataSuccess, a, b2);
        }
    })();
var FetchCloudAgentDataSuccess = FetchCloudAgentDataSuccess$Runtime;
FetchCloudAgentDataSuccess.runtime = proto3;
FetchCloudAgentDataSuccess.typeName = "agent.v1.FetchCloudAgentDataSuccess";
FetchCloudAgentDataSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "agent_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "written_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 4,
            name: "unavailable_bc_ids",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var FetchCloudAgentDataError$Runtime = (()=>class _FetchCloudAgentDataError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FetchCloudAgentDataError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FetchCloudAgentDataError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FetchCloudAgentDataError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FetchCloudAgentDataError, a, b2);
        }
    })();
var FetchCloudAgentDataError = FetchCloudAgentDataError$Runtime;
FetchCloudAgentDataError.runtime = proto3;
FetchCloudAgentDataError.typeName = "agent.v1.FetchCloudAgentDataError";
FetchCloudAgentDataError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var FetchCloudAgentDataToolCall$Runtime = (()=>class _FetchCloudAgentDataToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FetchCloudAgentDataToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FetchCloudAgentDataToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FetchCloudAgentDataToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FetchCloudAgentDataToolCall, a, b2);
        }
    })();
var FetchCloudAgentDataToolCall = FetchCloudAgentDataToolCall$Runtime;
FetchCloudAgentDataToolCall.runtime = proto3;
FetchCloudAgentDataToolCall.typeName = "agent.v1.FetchCloudAgentDataToolCall";
FetchCloudAgentDataToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: FetchCloudAgentDataArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: FetchCloudAgentDataResult
        }
    ]);
export { FetchCloudAgentDataArgs, FetchCloudAgentDataError, FetchCloudAgentDataResult, FetchCloudAgentDataSuccess, FetchCloudAgentDataToolCall };
