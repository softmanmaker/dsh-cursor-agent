import { Message, proto3 } from "@bufbuild/protobuf";
var WebFetchAllowlistPrecheckArgs$Runtime = (()=>class _WebFetchAllowlistPrecheckArgs extends Message {
        constructor(data){
            super();
            this.url = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _WebFetchAllowlistPrecheckArgs().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _WebFetchAllowlistPrecheckArgs().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _WebFetchAllowlistPrecheckArgs().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WebFetchAllowlistPrecheckArgs, a, b2);
        }
    })();
var WebFetchAllowlistPrecheckArgs = WebFetchAllowlistPrecheckArgs$Runtime;
WebFetchAllowlistPrecheckArgs.runtime = proto3;
WebFetchAllowlistPrecheckArgs.typeName = "agent.v1.WebFetchAllowlistPrecheckArgs";
WebFetchAllowlistPrecheckArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var WebFetchAllowlistPrecheckResult$Runtime = (()=>class _WebFetchAllowlistPrecheckResult extends Message {
        constructor(data){
            super();
            this.allowlisted = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _WebFetchAllowlistPrecheckResult().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _WebFetchAllowlistPrecheckResult().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _WebFetchAllowlistPrecheckResult().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WebFetchAllowlistPrecheckResult, a, b2);
        }
    })();
var WebFetchAllowlistPrecheckResult = WebFetchAllowlistPrecheckResult$Runtime;
WebFetchAllowlistPrecheckResult.runtime = proto3;
WebFetchAllowlistPrecheckResult.typeName = "agent.v1.WebFetchAllowlistPrecheckResult";
WebFetchAllowlistPrecheckResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "allowlisted",
            kind: "scalar",
            T: 8
        }
    ]);
export { WebFetchAllowlistPrecheckArgs, WebFetchAllowlistPrecheckResult };
