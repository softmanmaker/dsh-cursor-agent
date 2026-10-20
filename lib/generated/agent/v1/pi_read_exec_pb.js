import { Message, proto3 } from "@bufbuild/protobuf";
import { PiTruncation } from "./pi_common_pb.js";
var PiReadExecArgs$Runtime = (()=>class _PiReadExecArgs extends Message {
        constructor(data){
            super();
            this.path = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PiReadExecArgs().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PiReadExecArgs().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PiReadExecArgs().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiReadExecArgs, a, b2);
        }
    })();
var PiReadExecArgs = PiReadExecArgs$Runtime;
PiReadExecArgs.runtime = proto3;
PiReadExecArgs.typeName = "agent.v1.PiReadExecArgs";
PiReadExecArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "offset",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 3,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
var PiReadExecResult$Runtime = (()=>class _PiReadExecResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PiReadExecResult().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PiReadExecResult().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PiReadExecResult().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiReadExecResult, a, b2);
        }
    })();
var PiReadExecResult = PiReadExecResult$Runtime;
PiReadExecResult.runtime = proto3;
PiReadExecResult.typeName = "agent.v1.PiReadExecResult";
PiReadExecResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: PiReadExecSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: PiReadExecError,
            oneof: "result"
        }
    ]);
var PiReadExecSuccess$Runtime = (()=>class _PiReadExecSuccess extends Message {
        constructor(data){
            super();
            this.output = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PiReadExecSuccess().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PiReadExecSuccess().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PiReadExecSuccess().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiReadExecSuccess, a, b2);
        }
    })();
var PiReadExecSuccess = PiReadExecSuccess$Runtime;
PiReadExecSuccess.runtime = proto3;
PiReadExecSuccess.typeName = "agent.v1.PiReadExecSuccess";
PiReadExecSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "output",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "truncation",
            kind: "message",
            T: PiTruncation,
            opt: true
        }
    ]);
var PiReadExecError$Runtime = (()=>class _PiReadExecError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PiReadExecError().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PiReadExecError().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PiReadExecError().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiReadExecError, a, b2);
        }
    })();
var PiReadExecError = PiReadExecError$Runtime;
PiReadExecError.runtime = proto3;
PiReadExecError.typeName = "agent.v1.PiReadExecError";
PiReadExecError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
export { PiReadExecArgs, PiReadExecError, PiReadExecResult, PiReadExecSuccess };
