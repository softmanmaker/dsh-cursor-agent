import { Message, proto3 } from "@bufbuild/protobuf";
var AdoptOutcome;
(function(AdoptOutcome2) {
    AdoptOutcome2[AdoptOutcome2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    AdoptOutcome2[AdoptOutcome2["ALREADY_PARENTED"] = 1] = "ALREADY_PARENTED";
    AdoptOutcome2[AdoptOutcome2["EDGE_ONLY"] = 2] = "EDGE_ONLY";
    AdoptOutcome2[AdoptOutcome2["STORE_IMPORT_COMPLETED"] = 3] = "STORE_IMPORT_COMPLETED";
})(AdoptOutcome || (AdoptOutcome = {}));
proto3.util.setEnumType(AdoptOutcome, "agent.v1.AdoptOutcome", [
    {
        no: 0,
        name: "ADOPT_OUTCOME_UNSPECIFIED"
    },
    {
        no: 1,
        name: "ADOPT_OUTCOME_ALREADY_PARENTED"
    },
    {
        no: 2,
        name: "ADOPT_OUTCOME_EDGE_ONLY"
    },
    {
        no: 3,
        name: "ADOPT_OUTCOME_STORE_IMPORT_COMPLETED"
    }
]);
var AdoptArgs$Runtime = (()=>class _AdoptArgs extends Message {
        constructor(data){
            super();
            this.sourceAgentId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AdoptArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AdoptArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AdoptArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AdoptArgs, a, b2);
        }
    })();
var AdoptArgs = AdoptArgs$Runtime;
AdoptArgs.runtime = proto3;
AdoptArgs.typeName = "agent.v1.AdoptArgs";
AdoptArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "source_agent_id",
            kind: "scalar",
            T: 9
        }
    ]);
var AdoptResult$Runtime = (()=>class _AdoptResult extends Message {
        constructor(data){
            super();
            this.sourceAgentId = "";
            this.targetAgentId = "";
            this.projectRootId = "";
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AdoptResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AdoptResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AdoptResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AdoptResult, a, b2);
        }
    })();
var AdoptResult = AdoptResult$Runtime;
AdoptResult.runtime = proto3;
AdoptResult.typeName = "agent.v1.AdoptResult";
AdoptResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "source_agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "target_agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "project_root_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "success",
            kind: "enum",
            T: proto3.getEnumType(AdoptOutcome),
            oneof: "result"
        },
        {
            no: 5,
            name: "error",
            kind: "scalar",
            T: 9,
            oneof: "result"
        }
    ]);
var AdoptToolCall$Runtime = (()=>class _AdoptToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AdoptToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AdoptToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AdoptToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AdoptToolCall, a, b2);
        }
    })();
var AdoptToolCall = AdoptToolCall$Runtime;
AdoptToolCall.runtime = proto3;
AdoptToolCall.typeName = "agent.v1.AdoptToolCall";
AdoptToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: AdoptArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: AdoptResult
        }
    ]);
export { AdoptArgs, AdoptOutcome, AdoptResult, AdoptToolCall };
