import { Message, proto3 } from "@bufbuild/protobuf";
import { PiTruncation } from "./pi_common_pb.js";
var PiFindExecArgs$Runtime = (()=>class _PiFindExecArgs extends Message {
        constructor(data){
            super();
            this.pattern = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PiFindExecArgs().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PiFindExecArgs().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PiFindExecArgs().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiFindExecArgs, a, b2);
        }
    })();
var PiFindExecArgs = PiFindExecArgs$Runtime;
PiFindExecArgs.runtime = proto3;
PiFindExecArgs.typeName = "agent.v1.PiFindExecArgs";
PiFindExecArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "pattern",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9,
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
var PiFindExecResult$Runtime = (()=>class _PiFindExecResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PiFindExecResult().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PiFindExecResult().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PiFindExecResult().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiFindExecResult, a, b2);
        }
    })();
var PiFindExecResult = PiFindExecResult$Runtime;
PiFindExecResult.runtime = proto3;
PiFindExecResult.typeName = "agent.v1.PiFindExecResult";
PiFindExecResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: PiFindExecSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: PiFindExecError,
            oneof: "result"
        }
    ]);
var PiFindExecSuccess$Runtime = (()=>class _PiFindExecSuccess extends Message {
        constructor(data){
            super();
            this.output = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PiFindExecSuccess().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PiFindExecSuccess().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PiFindExecSuccess().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiFindExecSuccess, a, b2);
        }
    })();
var PiFindExecSuccess = PiFindExecSuccess$Runtime;
PiFindExecSuccess.runtime = proto3;
PiFindExecSuccess.typeName = "agent.v1.PiFindExecSuccess";
PiFindExecSuccess.fields = proto3.util.newFieldList(()=>[
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
            name: "result_limit_reached",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
var PiFindExecError$Runtime = (()=>class _PiFindExecError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PiFindExecError().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PiFindExecError().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PiFindExecError().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiFindExecError, a, b2);
        }
    })();
var PiFindExecError = PiFindExecError$Runtime;
PiFindExecError.runtime = proto3;
PiFindExecError.typeName = "agent.v1.PiFindExecError";
PiFindExecError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
export { PiFindExecArgs, PiFindExecError, PiFindExecResult, PiFindExecSuccess };
