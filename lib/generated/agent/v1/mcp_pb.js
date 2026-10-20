import { Message, Value, proto3 } from "@bufbuild/protobuf";
var McpToolDefinition$Runtime = (()=>class _McpToolDefinition extends Message {
        constructor(data){
            super();
            this.name = "";
            this.providerIdentifier = "";
            this.toolName = "";
            this.description = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpToolDefinition().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpToolDefinition().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpToolDefinition().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpToolDefinition, a, b2);
        }
    })();
var McpToolDefinition = McpToolDefinition$Runtime;
McpToolDefinition.runtime = proto3;
McpToolDefinition.typeName = "agent.v1.McpToolDefinition";
McpToolDefinition.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "provider_identifier",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "input_schema",
            kind: "message",
            T: Value
        },
        {
            no: 6,
            name: "input_schema_json",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var McpTools$Runtime = (()=>class _McpTools extends Message {
        constructor(data){
            super();
            this.mcpTools = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpTools().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpTools().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpTools().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpTools, a, b2);
        }
    })();
var McpTools = McpTools$Runtime;
McpTools.runtime = proto3;
McpTools.typeName = "agent.v1.McpTools";
McpTools.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "mcp_tools",
            kind: "message",
            T: McpToolDefinition,
            repeated: true
        }
    ]);
var McpInstructions$Runtime = (()=>class _McpInstructions extends Message {
        constructor(data){
            super();
            this.serverName = "";
            this.instructions = "";
            this.serverIdentifier = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpInstructions().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpInstructions().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpInstructions().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpInstructions, a, b2);
        }
    })();
var McpInstructions = McpInstructions$Runtime;
McpInstructions.runtime = proto3;
McpInstructions.typeName = "agent.v1.McpInstructions";
McpInstructions.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "server_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "instructions",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "server_identifier",
            kind: "scalar",
            T: 9
        }
    ]);
var McpDescriptor$Runtime = (()=>class _McpDescriptor extends Message {
        constructor(data){
            super();
            this.serverName = "";
            this.serverIdentifier = "";
            this.tools = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpDescriptor().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpDescriptor().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpDescriptor().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpDescriptor, a, b2);
        }
    })();
var McpDescriptor = McpDescriptor$Runtime;
McpDescriptor.runtime = proto3;
McpDescriptor.typeName = "agent.v1.McpDescriptor";
McpDescriptor.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "server_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "server_identifier",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "folder_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "server_use_instructions",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "tools",
            kind: "message",
            T: McpToolDescriptor,
            repeated: true
        },
        {
            no: 7,
            name: "plugin",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "marketplace",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "plugin_db_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "marketplace_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var McpToolDescriptor$Runtime = (()=>class _McpToolDescriptor extends Message {
        constructor(data){
            super();
            this.toolName = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpToolDescriptor().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpToolDescriptor().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpToolDescriptor().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpToolDescriptor, a, b2);
        }
    })();
var McpToolDescriptor = McpToolDescriptor$Runtime;
McpToolDescriptor.runtime = proto3;
McpToolDescriptor.typeName = "agent.v1.McpToolDescriptor";
McpToolDescriptor.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "definition_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "input_schema",
            kind: "message",
            T: Value,
            opt: true
        },
        {
            no: 5,
            name: "input_schema_json",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "annotations_json",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var McpFileSystemOptions$Runtime = (()=>class _McpFileSystemOptions extends Message {
        constructor(data){
            super();
            this.enabled = false;
            this.workspaceProjectDir = "";
            this.mcpDescriptors = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpFileSystemOptions().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpFileSystemOptions().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpFileSystemOptions().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpFileSystemOptions, a, b2);
        }
    })();
var McpFileSystemOptions = McpFileSystemOptions$Runtime;
McpFileSystemOptions.runtime = proto3;
McpFileSystemOptions.typeName = "agent.v1.McpFileSystemOptions";
McpFileSystemOptions.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "workspace_project_dir",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "mcp_descriptors",
            kind: "message",
            T: McpDescriptor,
            repeated: true
        }
    ]);
var McpMetaToolOptions$Runtime = (()=>class _McpMetaToolOptions extends Message {
        constructor(data){
            super();
            this.enabled = false;
            this.mcpDescriptors = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _McpMetaToolOptions().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _McpMetaToolOptions().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _McpMetaToolOptions().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_McpMetaToolOptions, a, b2);
        }
    })();
var McpMetaToolOptions = McpMetaToolOptions$Runtime;
McpMetaToolOptions.runtime = proto3;
McpMetaToolOptions.typeName = "agent.v1.McpMetaToolOptions";
McpMetaToolOptions.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "mcp_descriptors",
            kind: "message",
            T: McpDescriptor,
            repeated: true
        }
    ]);
export { McpDescriptor, McpFileSystemOptions, McpInstructions, McpMetaToolOptions, McpToolDefinition, McpToolDescriptor, McpTools };
