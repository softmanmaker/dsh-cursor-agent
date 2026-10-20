import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
var Range$Runtime = (()=>class _Range extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _Range().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _Range().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _Range().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_Range, a, b2);
        }
    })();
var Range = Range$Runtime;
Range.runtime = proto3;
Range.typeName = "agent.v1.Range";
Range.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "start",
            kind: "message",
            T: Position
        },
        {
            no: 2,
            name: "end",
            kind: "message",
            T: Position
        }
    ]);
var Position$Runtime = (()=>class _Position extends Message {
        constructor(data){
            super();
            this.line = 0;
            this.column = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _Position().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _Position().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _Position().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_Position, a, b2);
        }
    })();
var Position = Position$Runtime;
Position.runtime = proto3;
Position.typeName = "agent.v1.Position";
Position.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "line",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "column",
            kind: "scalar",
            T: 13
        }
    ]);
var OutputLocation$Runtime = (()=>class _OutputLocation extends Message {
        constructor(data){
            super();
            this.filePath = "";
            this.sizeBytes = protoInt64.zero;
            this.lineCount = protoInt64.zero;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _OutputLocation().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _OutputLocation().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _OutputLocation().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_OutputLocation, a, b2);
        }
    })();
var OutputLocation = OutputLocation$Runtime;
OutputLocation.runtime = proto3;
OutputLocation.typeName = "agent.v1.OutputLocation";
OutputLocation.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "size_bytes",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "line_count",
            kind: "scalar",
            T: 3
        }
    ]);
var SmartModeApproval$Runtime = (()=>class _SmartModeApproval extends Message {
        constructor(data){
            super();
            this.requestId = "";
            this.reason = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SmartModeApproval().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SmartModeApproval().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SmartModeApproval().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SmartModeApproval, a, b2);
        }
    })();
var SmartModeApproval = SmartModeApproval$Runtime;
SmartModeApproval.runtime = proto3;
SmartModeApproval.typeName = "agent.v1.SmartModeApproval";
SmartModeApproval.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
export { OutputLocation, Position, Range, SmartModeApproval };
