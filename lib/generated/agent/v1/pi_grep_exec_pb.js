import { Message, proto3 } from "@bufbuild/protobuf";
import { PiTruncation } from "./pi_common_pb.js";
var PiGrepExecArgs$Runtime = (()=>class _PiGrepExecArgs extends Message {
        constructor(data){
            super();
            this.pattern = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PiGrepExecArgs().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PiGrepExecArgs().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PiGrepExecArgs().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiGrepExecArgs, a, b2);
        }
    })();
var PiGrepExecArgs = PiGrepExecArgs$Runtime;
PiGrepExecArgs.runtime = proto3;
PiGrepExecArgs.typeName = "agent.v1.PiGrepExecArgs";
PiGrepExecArgs.fields = proto3.util.newFieldList(()=>[
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
            name: "glob",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "ignore_case",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 5,
            name: "literal",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 6,
            name: "context",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 7,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
var PiGrepExecResult$Runtime = (()=>class _PiGrepExecResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PiGrepExecResult().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PiGrepExecResult().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PiGrepExecResult().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiGrepExecResult, a, b2);
        }
    })();
var PiGrepExecResult = PiGrepExecResult$Runtime;
PiGrepExecResult.runtime = proto3;
PiGrepExecResult.typeName = "agent.v1.PiGrepExecResult";
PiGrepExecResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: PiGrepExecSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: PiGrepExecError,
            oneof: "result"
        }
    ]);
var PiGrepExecSuccess$Runtime = (()=>class _PiGrepExecSuccess extends Message {
        constructor(data){
            super();
            this.output = "";
            this.linesTruncated = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PiGrepExecSuccess().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PiGrepExecSuccess().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PiGrepExecSuccess().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiGrepExecSuccess, a, b2);
        }
    })();
var PiGrepExecSuccess = PiGrepExecSuccess$Runtime;
PiGrepExecSuccess.runtime = proto3;
PiGrepExecSuccess.typeName = "agent.v1.PiGrepExecSuccess";
PiGrepExecSuccess.fields = proto3.util.newFieldList(()=>[
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
            name: "match_limit_reached",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 4,
            name: "lines_truncated",
            kind: "scalar",
            T: 8
        }
    ]);
var PiGrepExecError$Runtime = (()=>class _PiGrepExecError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PiGrepExecError().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PiGrepExecError().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PiGrepExecError().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiGrepExecError, a, b2);
        }
    })();
var PiGrepExecError = PiGrepExecError$Runtime;
PiGrepExecError.runtime = proto3;
PiGrepExecError.typeName = "agent.v1.PiGrepExecError";
PiGrepExecError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
export { PiGrepExecArgs, PiGrepExecError, PiGrepExecResult, PiGrepExecSuccess };
