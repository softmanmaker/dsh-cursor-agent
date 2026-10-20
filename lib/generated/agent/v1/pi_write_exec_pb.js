import { Message, proto3 } from "@bufbuild/protobuf";
var PiWriteExecArgs$Runtime = (()=>class _PiWriteExecArgs extends Message {
        constructor(data){
            super();
            this.path = "";
            this.content = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PiWriteExecArgs().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PiWriteExecArgs().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PiWriteExecArgs().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiWriteExecArgs, a, b2);
        }
    })();
var PiWriteExecArgs = PiWriteExecArgs$Runtime;
PiWriteExecArgs.runtime = proto3;
PiWriteExecArgs.typeName = "agent.v1.PiWriteExecArgs";
PiWriteExecArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]);
var PiWriteExecResult$Runtime = (()=>class _PiWriteExecResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PiWriteExecResult().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PiWriteExecResult().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PiWriteExecResult().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiWriteExecResult, a, b2);
        }
    })();
var PiWriteExecResult = PiWriteExecResult$Runtime;
PiWriteExecResult.runtime = proto3;
PiWriteExecResult.typeName = "agent.v1.PiWriteExecResult";
PiWriteExecResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: PiWriteExecSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: PiWriteExecError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: PiWriteExecRejected,
            oneof: "result"
        }
    ]);
var PiWriteExecSuccess$Runtime = (()=>class _PiWriteExecSuccess extends Message {
        constructor(data){
            super();
            this.output = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PiWriteExecSuccess().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PiWriteExecSuccess().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PiWriteExecSuccess().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiWriteExecSuccess, a, b2);
        }
    })();
var PiWriteExecSuccess = PiWriteExecSuccess$Runtime;
PiWriteExecSuccess.runtime = proto3;
PiWriteExecSuccess.typeName = "agent.v1.PiWriteExecSuccess";
PiWriteExecSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "output",
            kind: "scalar",
            T: 9
        }
    ]);
var PiWriteExecError$Runtime = (()=>class _PiWriteExecError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PiWriteExecError().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PiWriteExecError().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PiWriteExecError().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiWriteExecError, a, b2);
        }
    })();
var PiWriteExecError = PiWriteExecError$Runtime;
PiWriteExecError.runtime = proto3;
PiWriteExecError.typeName = "agent.v1.PiWriteExecError";
PiWriteExecError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var PiWriteExecRejected$Runtime = (()=>class _PiWriteExecRejected extends Message {
        constructor(data){
            super();
            this.reason = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PiWriteExecRejected().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PiWriteExecRejected().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PiWriteExecRejected().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiWriteExecRejected, a, b2);
        }
    })();
var PiWriteExecRejected = PiWriteExecRejected$Runtime;
PiWriteExecRejected.runtime = proto3;
PiWriteExecRejected.typeName = "agent.v1.PiWriteExecRejected";
PiWriteExecRejected.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
export { PiWriteExecArgs, PiWriteExecError, PiWriteExecRejected, PiWriteExecResult, PiWriteExecSuccess };
