import { Message, proto3 } from "@bufbuild/protobuf";
var PiTruncation$Runtime = (()=>class _PiTruncation extends Message {
        constructor(data){
            super();
            this.truncated = false;
            this.truncatedBy = "";
            this.totalLines = 0;
            this.outputLines = 0;
            this.outputBytes = 0;
            this.firstLineExceedsLimit = false;
            this.lastLinePartial = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PiTruncation().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PiTruncation().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PiTruncation().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PiTruncation, a, b2);
        }
    })();
var PiTruncation = PiTruncation$Runtime;
PiTruncation.runtime = proto3;
PiTruncation.typeName = "agent.v1.PiTruncation";
PiTruncation.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "truncated_by",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "total_lines",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "output_lines",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "output_bytes",
            kind: "scalar",
            T: 13
        },
        {
            no: 6,
            name: "max_lines",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 7,
            name: "max_bytes",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 8,
            name: "first_line_exceeds_limit",
            kind: "scalar",
            T: 8
        },
        {
            no: 9,
            name: "last_line_partial",
            kind: "scalar",
            T: 8
        }
    ]);
export { PiTruncation };
