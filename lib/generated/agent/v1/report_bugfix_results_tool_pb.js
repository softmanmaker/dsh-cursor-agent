import { Message, proto3 } from "@bufbuild/protobuf";
var BugfixVerdict;
(function(BugfixVerdict2) {
    BugfixVerdict2[BugfixVerdict2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    BugfixVerdict2[BugfixVerdict2["FIXED"] = 1] = "FIXED";
    BugfixVerdict2[BugfixVerdict2["FALSE_POSITIVE"] = 2] = "FALSE_POSITIVE";
    BugfixVerdict2[BugfixVerdict2["COULD_NOT_FIX"] = 3] = "COULD_NOT_FIX";
    BugfixVerdict2[BugfixVerdict2["RESOLVED_BY_OTHER_FIX"] = 4] = "RESOLVED_BY_OTHER_FIX";
})(BugfixVerdict || (BugfixVerdict = {}));
proto3.util.setEnumType(BugfixVerdict, "agent.v1.BugfixVerdict", [
    {
        no: 0,
        name: "BUGFIX_VERDICT_UNSPECIFIED"
    },
    {
        no: 1,
        name: "BUGFIX_VERDICT_FIXED"
    },
    {
        no: 2,
        name: "BUGFIX_VERDICT_FALSE_POSITIVE"
    },
    {
        no: 3,
        name: "BUGFIX_VERDICT_COULD_NOT_FIX"
    },
    {
        no: 4,
        name: "BUGFIX_VERDICT_RESOLVED_BY_OTHER_FIX"
    }
]);
var BugfixResultItem$Runtime = (()=>class _BugfixResultItem extends Message {
        constructor(data){
            super();
            this.bugId = "";
            this.bugTitle = "";
            this.verdict = BugfixVerdict.UNSPECIFIED;
            this.explanation = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _BugfixResultItem().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _BugfixResultItem().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _BugfixResultItem().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_BugfixResultItem, a, b2);
        }
    })();
var BugfixResultItem = BugfixResultItem$Runtime;
BugfixResultItem.runtime = proto3;
BugfixResultItem.typeName = "agent.v1.BugfixResultItem";
BugfixResultItem.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "bug_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bug_title",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "verdict",
            kind: "enum",
            T: proto3.getEnumType(BugfixVerdict)
        },
        {
            no: 4,
            name: "explanation",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "severity",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var ReportBugfixResultsArgs$Runtime = (()=>class _ReportBugfixResultsArgs extends Message {
        constructor(data){
            super();
            this.summary = "";
            this.results = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReportBugfixResultsArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReportBugfixResultsArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReportBugfixResultsArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReportBugfixResultsArgs, a, b2);
        }
    })();
var ReportBugfixResultsArgs = ReportBugfixResultsArgs$Runtime;
ReportBugfixResultsArgs.runtime = proto3;
ReportBugfixResultsArgs.typeName = "agent.v1.ReportBugfixResultsArgs";
ReportBugfixResultsArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "results",
            kind: "message",
            T: BugfixResultItem,
            repeated: true
        }
    ]);
var ReportBugfixResultsSuccess$Runtime = (()=>class _ReportBugfixResultsSuccess extends Message {
        constructor(data){
            super();
            this.results = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReportBugfixResultsSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReportBugfixResultsSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReportBugfixResultsSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReportBugfixResultsSuccess, a, b2);
        }
    })();
var ReportBugfixResultsSuccess = ReportBugfixResultsSuccess$Runtime;
ReportBugfixResultsSuccess.runtime = proto3;
ReportBugfixResultsSuccess.typeName = "agent.v1.ReportBugfixResultsSuccess";
ReportBugfixResultsSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: BugfixResultItem,
            repeated: true
        }
    ]);
var ReportBugfixResultsError$Runtime = (()=>class _ReportBugfixResultsError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReportBugfixResultsError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReportBugfixResultsError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReportBugfixResultsError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReportBugfixResultsError, a, b2);
        }
    })();
var ReportBugfixResultsError = ReportBugfixResultsError$Runtime;
ReportBugfixResultsError.runtime = proto3;
ReportBugfixResultsError.typeName = "agent.v1.ReportBugfixResultsError";
ReportBugfixResultsError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var ReportBugfixResultsResult$Runtime = (()=>class _ReportBugfixResultsResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReportBugfixResultsResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReportBugfixResultsResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReportBugfixResultsResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReportBugfixResultsResult, a, b2);
        }
    })();
var ReportBugfixResultsResult = ReportBugfixResultsResult$Runtime;
ReportBugfixResultsResult.runtime = proto3;
ReportBugfixResultsResult.typeName = "agent.v1.ReportBugfixResultsResult";
ReportBugfixResultsResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ReportBugfixResultsSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: ReportBugfixResultsError,
            oneof: "result"
        }
    ]);
var ReportBugfixResultsToolCall$Runtime = (()=>class _ReportBugfixResultsToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReportBugfixResultsToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReportBugfixResultsToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReportBugfixResultsToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReportBugfixResultsToolCall, a, b2);
        }
    })();
var ReportBugfixResultsToolCall = ReportBugfixResultsToolCall$Runtime;
ReportBugfixResultsToolCall.runtime = proto3;
ReportBugfixResultsToolCall.typeName = "agent.v1.ReportBugfixResultsToolCall";
ReportBugfixResultsToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ReportBugfixResultsArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: ReportBugfixResultsResult
        }
    ]);
export { BugfixResultItem, BugfixVerdict, ReportBugfixResultsArgs, ReportBugfixResultsError, ReportBugfixResultsResult, ReportBugfixResultsSuccess, ReportBugfixResultsToolCall };
