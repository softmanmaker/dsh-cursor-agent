import { Message, proto3 } from "@bufbuild/protobuf";
import { ShellArgs, ShellResult } from "./shell_exec_pb.js";
var ShellToolCall$Runtime = (()=>class _ShellToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellToolCall, a, b2);
        }
    })();
var ShellToolCall = ShellToolCall$Runtime;
ShellToolCall.runtime = proto3;
ShellToolCall.typeName = "agent.v1.ShellToolCall";
ShellToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ShellArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: ShellResult
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var ShellToolCallStdoutDelta$Runtime = (()=>class _ShellToolCallStdoutDelta extends Message {
        constructor(data){
            super();
            this.content = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellToolCallStdoutDelta().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellToolCallStdoutDelta().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellToolCallStdoutDelta().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellToolCallStdoutDelta, a, b2);
        }
    })();
var ShellToolCallStdoutDelta = ShellToolCallStdoutDelta$Runtime;
ShellToolCallStdoutDelta.runtime = proto3;
ShellToolCallStdoutDelta.typeName = "agent.v1.ShellToolCallStdoutDelta";
ShellToolCallStdoutDelta.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]);
var ShellToolCallStderrDelta$Runtime = (()=>class _ShellToolCallStderrDelta extends Message {
        constructor(data){
            super();
            this.content = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellToolCallStderrDelta().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellToolCallStderrDelta().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellToolCallStderrDelta().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellToolCallStderrDelta, a, b2);
        }
    })();
var ShellToolCallStderrDelta = ShellToolCallStderrDelta$Runtime;
ShellToolCallStderrDelta.runtime = proto3;
ShellToolCallStderrDelta.typeName = "agent.v1.ShellToolCallStderrDelta";
ShellToolCallStderrDelta.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]);
var ShellToolCallDelta$Runtime = (()=>class _ShellToolCallDelta extends Message {
        constructor(data){
            super();
            this.delta = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ShellToolCallDelta().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ShellToolCallDelta().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ShellToolCallDelta().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellToolCallDelta, a, b2);
        }
    })();
var ShellToolCallDelta = ShellToolCallDelta$Runtime;
ShellToolCallDelta.runtime = proto3;
ShellToolCallDelta.typeName = "agent.v1.ShellToolCallDelta";
ShellToolCallDelta.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "stdout",
            kind: "message",
            T: ShellToolCallStdoutDelta,
            oneof: "delta"
        },
        {
            no: 2,
            name: "stderr",
            kind: "message",
            T: ShellToolCallStderrDelta,
            oneof: "delta"
        }
    ]);
export { ShellToolCall, ShellToolCallDelta, ShellToolCallStderrDelta, ShellToolCallStdoutDelta };
