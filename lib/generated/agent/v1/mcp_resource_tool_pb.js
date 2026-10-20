import { Message, proto3 } from "@bufbuild/protobuf";
import { ListMcpResourcesExecArgs, ListMcpResourcesExecResult, ReadMcpResourceExecArgs, ReadMcpResourceExecResult } from "./mcp_exec_pb.js";
var ListMcpResourcesToolCall$Runtime = (()=>class _ListMcpResourcesToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ListMcpResourcesToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ListMcpResourcesToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ListMcpResourcesToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ListMcpResourcesToolCall, a, b2);
        }
    })();
var ListMcpResourcesToolCall = ListMcpResourcesToolCall$Runtime;
ListMcpResourcesToolCall.runtime = proto3;
ListMcpResourcesToolCall.typeName = "agent.v1.ListMcpResourcesToolCall";
ListMcpResourcesToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ListMcpResourcesExecArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: ListMcpResourcesExecResult
        }
    ]);
var ReadMcpResourceToolCall$Runtime = (()=>class _ReadMcpResourceToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReadMcpResourceToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReadMcpResourceToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReadMcpResourceToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadMcpResourceToolCall, a, b2);
        }
    })();
var ReadMcpResourceToolCall = ReadMcpResourceToolCall$Runtime;
ReadMcpResourceToolCall.runtime = proto3;
ReadMcpResourceToolCall.typeName = "agent.v1.ReadMcpResourceToolCall";
ReadMcpResourceToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ReadMcpResourceExecArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: ReadMcpResourceExecResult
        }
    ]);
export { ListMcpResourcesToolCall, ReadMcpResourceToolCall };
