import { Message, proto3 } from "@bufbuild/protobuf";
import { PiEditReplacement } from "./pi_edit_tool_pb.js";
var PiEditExecArgs$Runtime = (()=>class _PiEditExecArgs extends Message {
        constructor(data){
            super();
            this.path = "";
            this.edits = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PiEditExecArgs().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PiEditExecArgs().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PiEditExecArgs().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiEditExecArgs, a, b2);
        }
    })();
var PiEditExecArgs = PiEditExecArgs$Runtime;
PiEditExecArgs.runtime = proto3;
PiEditExecArgs.typeName = "agent.v1.PiEditExecArgs";
PiEditExecArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "edits",
            kind: "message",
            T: PiEditReplacement,
            repeated: true
        }
    ]);
var PiEditExecResult$Runtime = (()=>class _PiEditExecResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PiEditExecResult().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PiEditExecResult().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PiEditExecResult().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiEditExecResult, a, b2);
        }
    })();
var PiEditExecResult = PiEditExecResult$Runtime;
PiEditExecResult.runtime = proto3;
PiEditExecResult.typeName = "agent.v1.PiEditExecResult";
PiEditExecResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: PiEditExecSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: PiEditExecError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: PiEditExecRejected,
            oneof: "result"
        }
    ]);
var PiEditExecSuccess$Runtime = (()=>class _PiEditExecSuccess extends Message {
        constructor(data){
            super();
            this.output = "";
            this.diff = "";
            this.patch = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PiEditExecSuccess().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PiEditExecSuccess().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PiEditExecSuccess().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiEditExecSuccess, a, b2);
        }
    })();
var PiEditExecSuccess = PiEditExecSuccess$Runtime;
PiEditExecSuccess.runtime = proto3;
PiEditExecSuccess.typeName = "agent.v1.PiEditExecSuccess";
PiEditExecSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "output",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "diff",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "patch",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "first_changed_line",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
var PiEditExecError$Runtime = (()=>class _PiEditExecError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PiEditExecError().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PiEditExecError().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PiEditExecError().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiEditExecError, a, b2);
        }
    })();
var PiEditExecError = PiEditExecError$Runtime;
PiEditExecError.runtime = proto3;
PiEditExecError.typeName = "agent.v1.PiEditExecError";
PiEditExecError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var PiEditExecRejected$Runtime = (()=>class _PiEditExecRejected extends Message {
        constructor(data){
            super();
            this.reason = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _PiEditExecRejected().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _PiEditExecRejected().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _PiEditExecRejected().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiEditExecRejected, a, b2);
        }
    })();
var PiEditExecRejected = PiEditExecRejected$Runtime;
PiEditExecRejected.runtime = proto3;
PiEditExecRejected.typeName = "agent.v1.PiEditExecRejected";
PiEditExecRejected.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
export { PiEditExecArgs, PiEditExecError, PiEditExecRejected, PiEditExecResult, PiEditExecSuccess };
