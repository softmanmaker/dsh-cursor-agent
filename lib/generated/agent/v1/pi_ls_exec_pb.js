import { Message, proto3 } from "@bufbuild/protobuf";
import { PiTruncation } from "./pi_common_pb.js";
var PiLsExecArgs$Runtime = (()=>class _PiLsExecArgs extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PiLsExecArgs().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PiLsExecArgs().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PiLsExecArgs().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiLsExecArgs, a, b2);
        }
    })();
var PiLsExecArgs = PiLsExecArgs$Runtime;
PiLsExecArgs.runtime = proto3;
PiLsExecArgs.typeName = "agent.v1.PiLsExecArgs";
PiLsExecArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
var PiLsExecResult$Runtime = (()=>class _PiLsExecResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PiLsExecResult().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PiLsExecResult().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PiLsExecResult().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiLsExecResult, a, b2);
        }
    })();
var PiLsExecResult = PiLsExecResult$Runtime;
PiLsExecResult.runtime = proto3;
PiLsExecResult.typeName = "agent.v1.PiLsExecResult";
PiLsExecResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: PiLsExecSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: PiLsExecError,
            oneof: "result"
        }
    ]);
var PiLsExecSuccess$Runtime = (()=>class _PiLsExecSuccess extends Message {
        constructor(data){
            super();
            this.output = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PiLsExecSuccess().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PiLsExecSuccess().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PiLsExecSuccess().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiLsExecSuccess, a, b2);
        }
    })();
var PiLsExecSuccess = PiLsExecSuccess$Runtime;
PiLsExecSuccess.runtime = proto3;
PiLsExecSuccess.typeName = "agent.v1.PiLsExecSuccess";
PiLsExecSuccess.fields = proto3.util.newFieldList(()=>[
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
        },
        {
            no: 3,
            name: "entry_limit_reached",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
var PiLsExecError$Runtime = (()=>class _PiLsExecError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PiLsExecError().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PiLsExecError().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PiLsExecError().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiLsExecError, a, b2);
        }
    })();
var PiLsExecError = PiLsExecError$Runtime;
PiLsExecError.runtime = proto3;
PiLsExecError.typeName = "agent.v1.PiLsExecError";
PiLsExecError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
export { PiLsExecArgs, PiLsExecError, PiLsExecResult, PiLsExecSuccess };
