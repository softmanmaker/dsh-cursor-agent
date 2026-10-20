import { Message, proto3 } from "@bufbuild/protobuf";
import { CommandClassifierResult, ShellCommandParsingResult } from "./shell_exec_pb.js";
var ShellAllowlistPrecheckArgs$Runtime = (()=>class _ShellAllowlistPrecheckArgs extends Message {
        constructor(data){
            super();
            this.command = "";
            this.workingDirectory = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ShellAllowlistPrecheckArgs().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ShellAllowlistPrecheckArgs().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ShellAllowlistPrecheckArgs().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellAllowlistPrecheckArgs, a, b2);
        }
    })();
var ShellAllowlistPrecheckArgs = ShellAllowlistPrecheckArgs$Runtime;
ShellAllowlistPrecheckArgs.runtime = proto3;
ShellAllowlistPrecheckArgs.typeName = "agent.v1.ShellAllowlistPrecheckArgs";
ShellAllowlistPrecheckArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "working_directory",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "parsing_result",
            kind: "message",
            T: ShellCommandParsingResult
        },
        {
            no: 4,
            name: "classifier_result",
            kind: "message",
            T: CommandClassifierResult,
            opt: true
        },
        {
            no: 5,
            name: "tool_call_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var ShellAllowlistPrecheckResult$Runtime = (()=>class _ShellAllowlistPrecheckResult extends Message {
        constructor(data){
            super();
            this.allowlisted = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _ShellAllowlistPrecheckResult().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _ShellAllowlistPrecheckResult().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _ShellAllowlistPrecheckResult().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ShellAllowlistPrecheckResult, a, b2);
        }
    })();
var ShellAllowlistPrecheckResult = ShellAllowlistPrecheckResult$Runtime;
ShellAllowlistPrecheckResult.runtime = proto3;
ShellAllowlistPrecheckResult.typeName = "agent.v1.ShellAllowlistPrecheckResult";
ShellAllowlistPrecheckResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "allowlisted",
            kind: "scalar",
            T: 8
        }
    ]);
export { ShellAllowlistPrecheckArgs, ShellAllowlistPrecheckResult };
