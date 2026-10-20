import { Message, proto3 } from "@bufbuild/protobuf";
var McpAllowlistPrecheckArgs$Runtime = (()=>class _McpAllowlistPrecheckArgs extends Message {
        constructor(data){
            super();
            this.providerIdentifier = "";
            this.toolName = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _McpAllowlistPrecheckArgs().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _McpAllowlistPrecheckArgs().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _McpAllowlistPrecheckArgs().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpAllowlistPrecheckArgs, a, b2);
        }
    })();
var McpAllowlistPrecheckArgs = McpAllowlistPrecheckArgs$Runtime;
McpAllowlistPrecheckArgs.runtime = proto3;
McpAllowlistPrecheckArgs.typeName = "agent.v1.McpAllowlistPrecheckArgs";
McpAllowlistPrecheckArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "provider_identifier",
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
            name: "tool_call_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var McpAllowlistPrecheckResult$Runtime = (()=>class _McpAllowlistPrecheckResult extends Message {
        constructor(data){
            super();
            this.allowlisted = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _McpAllowlistPrecheckResult().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _McpAllowlistPrecheckResult().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _McpAllowlistPrecheckResult().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpAllowlistPrecheckResult, a, b2);
        }
    })();
var McpAllowlistPrecheckResult = McpAllowlistPrecheckResult$Runtime;
McpAllowlistPrecheckResult.runtime = proto3;
McpAllowlistPrecheckResult.typeName = "agent.v1.McpAllowlistPrecheckResult";
McpAllowlistPrecheckResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "allowlisted",
            kind: "scalar",
            T: 8
        }
    ]);
export { McpAllowlistPrecheckArgs, McpAllowlistPrecheckResult };
