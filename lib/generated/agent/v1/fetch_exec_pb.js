import { Message, proto3 } from "@bufbuild/protobuf";
var FetchArgs$Runtime = (()=>class _FetchArgs extends Message {
        constructor(data){
            super();
            this.url = "";
            this.toolCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FetchArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FetchArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FetchArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FetchArgs, a, b2);
        }
    })();
var FetchArgs = FetchArgs$Runtime;
FetchArgs.runtime = proto3;
FetchArgs.typeName = "agent.v1.FetchArgs";
FetchArgs.fields = proto3.util.newFieldList(()=>[
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
            T: 9
        }
    ]);
var FetchResult$Runtime = (()=>class _FetchResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FetchResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FetchResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FetchResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FetchResult, a, b2);
        }
    })();
var FetchResult = FetchResult$Runtime;
FetchResult.runtime = proto3;
FetchResult.typeName = "agent.v1.FetchResult";
FetchResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: FetchSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: FetchError,
            oneof: "result"
        }
    ]);
var FetchSuccess$Runtime = (()=>class _FetchSuccess extends Message {
        constructor(data){
            super();
            this.url = "";
            this.content = "";
            this.statusCode = 0;
            this.contentType = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FetchSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FetchSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FetchSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FetchSuccess, a, b2);
        }
    })();
var FetchSuccess = FetchSuccess$Runtime;
FetchSuccess.runtime = proto3;
FetchSuccess.typeName = "agent.v1.FetchSuccess";
FetchSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "status_code",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "content_type",
            kind: "scalar",
            T: 9
        }
    ]);
var FetchError$Runtime = (()=>class _FetchError extends Message {
        constructor(data){
            super();
            this.url = "";
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FetchError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FetchError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FetchError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FetchError, a, b2);
        }
    })();
var FetchError = FetchError$Runtime;
FetchError.runtime = proto3;
FetchError.typeName = "agent.v1.FetchError";
FetchError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
export { FetchArgs, FetchError, FetchResult, FetchSuccess };
