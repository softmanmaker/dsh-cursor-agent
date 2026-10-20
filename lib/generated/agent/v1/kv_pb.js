import { Message, proto3 } from "@bufbuild/protobuf";
import { SpanContext } from "./exec_pb.js";
var Error$Runtime = (()=>class _Error extends Message {
        constructor(data){
            super();
            this.message = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _Error().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _Error().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _Error().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_Error, a, b2);
        }
    })();
var Error = Error$Runtime;
Error.runtime = proto3;
Error.typeName = "agent.v1.Error";
Error.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);
var GetBlobArgs$Runtime = (()=>class _GetBlobArgs extends Message {
        constructor(data){
            super();
            this.blobId = new Uint8Array(0);
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _GetBlobArgs().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _GetBlobArgs().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _GetBlobArgs().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetBlobArgs, a, b2);
        }
    })();
var GetBlobArgs = GetBlobArgs$Runtime;
GetBlobArgs.runtime = proto3;
GetBlobArgs.typeName = "agent.v1.GetBlobArgs";
GetBlobArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "blob_id",
            kind: "scalar",
            T: 12
        }
    ]);
var GetBlobResult$Runtime = (()=>class _GetBlobResult extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _GetBlobResult().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _GetBlobResult().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _GetBlobResult().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetBlobResult, a, b2);
        }
    })();
var GetBlobResult = GetBlobResult$Runtime;
GetBlobResult.runtime = proto3;
GetBlobResult.typeName = "agent.v1.GetBlobResult";
GetBlobResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "blob_data",
            kind: "scalar",
            T: 12,
            opt: true
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Error,
            opt: true
        }
    ]);
var SetBlobArgs$Runtime = (()=>class _SetBlobArgs extends Message {
        constructor(data){
            super();
            this.blobId = new Uint8Array(0);
            this.blobData = new Uint8Array(0);
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _SetBlobArgs().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _SetBlobArgs().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _SetBlobArgs().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SetBlobArgs, a, b2);
        }
    })();
var SetBlobArgs = SetBlobArgs$Runtime;
SetBlobArgs.runtime = proto3;
SetBlobArgs.typeName = "agent.v1.SetBlobArgs";
SetBlobArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "blob_data",
            kind: "scalar",
            T: 12
        }
    ]);
var SetBlobResult$Runtime = (()=>class _SetBlobResult extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _SetBlobResult().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _SetBlobResult().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _SetBlobResult().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SetBlobResult, a, b2);
        }
    })();
var SetBlobResult = SetBlobResult$Runtime;
SetBlobResult.runtime = proto3;
SetBlobResult.typeName = "agent.v1.SetBlobResult";
SetBlobResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "message",
            T: Error,
            opt: true
        }
    ]);
var KvServerMessage$Runtime = (()=>class _KvServerMessage extends Message {
        constructor(data){
            super();
            this.id = 0;
            this.message = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _KvServerMessage().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _KvServerMessage().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _KvServerMessage().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_KvServerMessage, a, b2);
        }
    })();
var KvServerMessage = KvServerMessage$Runtime;
KvServerMessage.runtime = proto3;
KvServerMessage.typeName = "agent.v1.KvServerMessage";
KvServerMessage.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "get_blob_args",
            kind: "message",
            T: GetBlobArgs,
            oneof: "message"
        },
        {
            no: 3,
            name: "set_blob_args",
            kind: "message",
            T: SetBlobArgs,
            oneof: "message"
        },
        {
            no: 4,
            name: "span_context",
            kind: "message",
            T: SpanContext,
            opt: true
        }
    ]);
var KvClientMessage$Runtime = (()=>class _KvClientMessage extends Message {
        constructor(data){
            super();
            this.id = 0;
            this.message = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _KvClientMessage().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _KvClientMessage().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _KvClientMessage().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_KvClientMessage, a, b2);
        }
    })();
var KvClientMessage = KvClientMessage$Runtime;
KvClientMessage.runtime = proto3;
KvClientMessage.typeName = "agent.v1.KvClientMessage";
KvClientMessage.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "get_blob_result",
            kind: "message",
            T: GetBlobResult,
            oneof: "message"
        },
        {
            no: 3,
            name: "set_blob_result",
            kind: "message",
            T: SetBlobResult,
            oneof: "message"
        }
    ]);
export { Error, GetBlobArgs, GetBlobResult, KvClientMessage, KvServerMessage, SetBlobArgs, SetBlobResult };
