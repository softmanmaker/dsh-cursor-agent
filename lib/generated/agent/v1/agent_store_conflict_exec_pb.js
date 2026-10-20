import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
var AgentStoreConflictCursor$Runtime = (()=>class _AgentStoreConflictCursor extends Message {
        constructor(data){
            super();
            this.journalEpoch = "";
            this.seq = protoInt64.zero;
            this.lastEventId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _AgentStoreConflictCursor().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _AgentStoreConflictCursor().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _AgentStoreConflictCursor().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AgentStoreConflictCursor, a, b2);
        }
    })();
var AgentStoreConflictCursor = AgentStoreConflictCursor$Runtime;
AgentStoreConflictCursor.runtime = proto3;
AgentStoreConflictCursor.typeName = "agent.v1.AgentStoreConflictCursor";
AgentStoreConflictCursor.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "journal_epoch",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "seq",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "last_event_id",
            kind: "scalar",
            T: 9
        }
    ]);
var AgentStoreConflictArgs$Runtime = (()=>class _AgentStoreConflictArgs extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _AgentStoreConflictArgs().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _AgentStoreConflictArgs().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _AgentStoreConflictArgs().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AgentStoreConflictArgs, a, b2);
        }
    })();
var AgentStoreConflictArgs = AgentStoreConflictArgs$Runtime;
AgentStoreConflictArgs.runtime = proto3;
AgentStoreConflictArgs.typeName = "agent.v1.AgentStoreConflictArgs";
AgentStoreConflictArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "cursor",
            kind: "message",
            T: AgentStoreConflictCursor,
            opt: true
        },
        {
            no: 2,
            name: "advance",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
var AgentStoreConflictEvent$Runtime = (()=>class _AgentStoreConflictEvent extends Message {
        constructor(data){
            super();
            this.v = 0;
            this.eventId = "";
            this.journalEpoch = "";
            this.seq = protoInt64.zero;
            this.tsMs = protoInt64.zero;
            this.kind = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _AgentStoreConflictEvent().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _AgentStoreConflictEvent().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _AgentStoreConflictEvent().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AgentStoreConflictEvent, a, b2);
        }
    })();
var AgentStoreConflictEvent = AgentStoreConflictEvent$Runtime;
AgentStoreConflictEvent.runtime = proto3;
AgentStoreConflictEvent.typeName = "agent.v1.AgentStoreConflictEvent";
AgentStoreConflictEvent.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "v",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "event_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "journal_epoch",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "seq",
            kind: "scalar",
            T: 4
        },
        {
            no: 5,
            name: "ts_ms",
            kind: "scalar",
            T: 4
        },
        {
            no: 6,
            name: "kind",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "store_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "original_rel_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "conflict_rel_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "original_abs_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "conflict_abs_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 12,
            name: "preserved_bytes",
            kind: "scalar",
            T: 4,
            opt: true
        }
    ]);
var AgentStoreConflictResult$Runtime = (()=>class _AgentStoreConflictResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _AgentStoreConflictResult().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _AgentStoreConflictResult().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _AgentStoreConflictResult().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AgentStoreConflictResult, a, b2);
        }
    })();
var AgentStoreConflictResult = AgentStoreConflictResult$Runtime;
AgentStoreConflictResult.runtime = proto3;
AgentStoreConflictResult.typeName = "agent.v1.AgentStoreConflictResult";
AgentStoreConflictResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: AgentStoreConflictSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: AgentStoreConflictError,
            oneof: "result"
        }
    ]);
var AgentStoreConflictSuccess$Runtime = (()=>class _AgentStoreConflictSuccess extends Message {
        constructor(data){
            super();
            this.events = [];
            this.gap = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _AgentStoreConflictSuccess().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _AgentStoreConflictSuccess().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _AgentStoreConflictSuccess().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AgentStoreConflictSuccess, a, b2);
        }
    })();
var AgentStoreConflictSuccess = AgentStoreConflictSuccess$Runtime;
AgentStoreConflictSuccess.runtime = proto3;
AgentStoreConflictSuccess.typeName = "agent.v1.AgentStoreConflictSuccess";
AgentStoreConflictSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "events",
            kind: "message",
            T: AgentStoreConflictEvent,
            repeated: true
        },
        {
            no: 2,
            name: "next_cursor",
            kind: "message",
            T: AgentStoreConflictCursor
        },
        {
            no: 3,
            name: "gap",
            kind: "scalar",
            T: 8
        }
    ]);
var AgentStoreConflictError$Runtime = (()=>class _AgentStoreConflictError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options2) {
            return new _AgentStoreConflictError().fromBinary(bytes, options2);
        }
        static fromJson(jsonValue, options2) {
            return new _AgentStoreConflictError().fromJson(jsonValue, options2);
        }
        static fromJsonString(jsonString, options2) {
            return new _AgentStoreConflictError().fromJsonString(jsonString, options2);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AgentStoreConflictError, a, b2);
        }
    })();
var AgentStoreConflictError = AgentStoreConflictError$Runtime;
AgentStoreConflictError.runtime = proto3;
AgentStoreConflictError.typeName = "agent.v1.AgentStoreConflictError";
AgentStoreConflictError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
export { AgentStoreConflictArgs, AgentStoreConflictCursor, AgentStoreConflictError, AgentStoreConflictEvent, AgentStoreConflictResult, AgentStoreConflictSuccess };
