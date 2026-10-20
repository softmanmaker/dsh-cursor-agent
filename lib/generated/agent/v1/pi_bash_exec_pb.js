import { Message, proto3 } from "@bufbuild/protobuf";
import { PiTruncation } from "./pi_common_pb.js";
var PiBashExecArgs$Runtime = (()=>class _PiBashExecArgs extends Message {
        constructor(data){
            super();
            this.command = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PiBashExecArgs().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PiBashExecArgs().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PiBashExecArgs().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiBashExecArgs, a, b2);
        }
    })();
var PiBashExecArgs = PiBashExecArgs$Runtime;
PiBashExecArgs.runtime = proto3;
PiBashExecArgs.typeName = "agent.v1.PiBashExecArgs";
PiBashExecArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "timeout",
            kind: "scalar",
            T: 1,
            opt: true
        }
    ]);
var PiBashExecResult$Runtime = (()=>class _PiBashExecResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PiBashExecResult().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PiBashExecResult().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PiBashExecResult().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiBashExecResult, a, b2);
        }
    })();
var PiBashExecResult = PiBashExecResult$Runtime;
PiBashExecResult.runtime = proto3;
PiBashExecResult.typeName = "agent.v1.PiBashExecResult";
PiBashExecResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: PiBashExecSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: PiBashExecError,
            oneof: "result"
        }
    ]);
var PiBashExecSuccess$Runtime = (()=>class _PiBashExecSuccess extends Message {
        constructor(data){
            super();
            this.output = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PiBashExecSuccess().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PiBashExecSuccess().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PiBashExecSuccess().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiBashExecSuccess, a, b2);
        }
    })();
var PiBashExecSuccess = PiBashExecSuccess$Runtime;
PiBashExecSuccess.runtime = proto3;
PiBashExecSuccess.typeName = "agent.v1.PiBashExecSuccess";
PiBashExecSuccess.fields = proto3.util.newFieldList(()=>[
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
            name: "full_output_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var PiBashExecError$Runtime = (()=>class _PiBashExecError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PiBashExecError().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PiBashExecError().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PiBashExecError().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiBashExecError, a, b2);
        }
    })();
var PiBashExecError = PiBashExecError$Runtime;
PiBashExecError.runtime = proto3;
PiBashExecError.typeName = "agent.v1.PiBashExecError";
PiBashExecError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
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
            name: "full_output_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
export { PiBashExecArgs, PiBashExecError, PiBashExecResult, PiBashExecSuccess };
