import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
var TodoStatus;
(function(TodoStatus2) {
    TodoStatus2[TodoStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    TodoStatus2[TodoStatus2["PENDING"] = 1] = "PENDING";
    TodoStatus2[TodoStatus2["IN_PROGRESS"] = 2] = "IN_PROGRESS";
    TodoStatus2[TodoStatus2["COMPLETED"] = 3] = "COMPLETED";
    TodoStatus2[TodoStatus2["CANCELLED"] = 4] = "CANCELLED";
})(TodoStatus || (TodoStatus = {}));
proto3.util.setEnumType(TodoStatus, "agent.v1.TodoStatus", [
    {
        no: 0,
        name: "TODO_STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "TODO_STATUS_PENDING"
    },
    {
        no: 2,
        name: "TODO_STATUS_IN_PROGRESS"
    },
    {
        no: 3,
        name: "TODO_STATUS_COMPLETED"
    },
    {
        no: 4,
        name: "TODO_STATUS_CANCELLED"
    }
]);
var TodoItem$Runtime = (()=>class _TodoItem extends Message {
        constructor(data){
            super();
            this.id = "";
            this.content = "";
            this.status = TodoStatus.UNSPECIFIED;
            this.createdAt = protoInt64.zero;
            this.updatedAt = protoInt64.zero;
            this.dependencies = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _TodoItem().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _TodoItem().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _TodoItem().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_TodoItem, a, b2);
        }
    })();
var TodoItem = TodoItem$Runtime;
TodoItem.runtime = proto3;
TodoItem.typeName = "agent.v1.TodoItem";
TodoItem.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(TodoStatus)
        },
        {
            no: 4,
            name: "created_at",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "updated_at",
            kind: "scalar",
            T: 3
        },
        {
            no: 6,
            name: "dependencies",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var UpdateTodosToolCall$Runtime = (()=>class _UpdateTodosToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UpdateTodosToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UpdateTodosToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UpdateTodosToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UpdateTodosToolCall, a, b2);
        }
    })();
var UpdateTodosToolCall = UpdateTodosToolCall$Runtime;
UpdateTodosToolCall.runtime = proto3;
UpdateTodosToolCall.typeName = "agent.v1.UpdateTodosToolCall";
UpdateTodosToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: UpdateTodosArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: UpdateTodosResult
        }
    ]);
var UpdateTodosArgs$Runtime = (()=>class _UpdateTodosArgs extends Message {
        constructor(data){
            super();
            this.todos = [];
            this.merge = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UpdateTodosArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UpdateTodosArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UpdateTodosArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UpdateTodosArgs, a, b2);
        }
    })();
var UpdateTodosArgs = UpdateTodosArgs$Runtime;
UpdateTodosArgs.runtime = proto3;
UpdateTodosArgs.typeName = "agent.v1.UpdateTodosArgs";
UpdateTodosArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "todos",
            kind: "message",
            T: TodoItem,
            repeated: true
        },
        {
            no: 2,
            name: "merge",
            kind: "scalar",
            T: 8
        }
    ]);
var UpdateTodosResult$Runtime = (()=>class _UpdateTodosResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UpdateTodosResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UpdateTodosResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UpdateTodosResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UpdateTodosResult, a, b2);
        }
    })();
var UpdateTodosResult = UpdateTodosResult$Runtime;
UpdateTodosResult.runtime = proto3;
UpdateTodosResult.typeName = "agent.v1.UpdateTodosResult";
UpdateTodosResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: UpdateTodosSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: UpdateTodosError,
            oneof: "result"
        }
    ]);
var UpdateTodosSuccess$Runtime = (()=>class _UpdateTodosSuccess extends Message {
        constructor(data){
            super();
            this.todos = [];
            this.totalCount = 0;
            this.wasMerge = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UpdateTodosSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UpdateTodosSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UpdateTodosSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UpdateTodosSuccess, a, b2);
        }
    })();
var UpdateTodosSuccess = UpdateTodosSuccess$Runtime;
UpdateTodosSuccess.runtime = proto3;
UpdateTodosSuccess.typeName = "agent.v1.UpdateTodosSuccess";
UpdateTodosSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "todos",
            kind: "message",
            T: TodoItem,
            repeated: true
        },
        {
            no: 2,
            name: "total_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "was_merge",
            kind: "scalar",
            T: 8
        }
    ]);
var UpdateTodosError$Runtime = (()=>class _UpdateTodosError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UpdateTodosError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UpdateTodosError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UpdateTodosError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UpdateTodosError, a, b2);
        }
    })();
var UpdateTodosError = UpdateTodosError$Runtime;
UpdateTodosError.runtime = proto3;
UpdateTodosError.typeName = "agent.v1.UpdateTodosError";
UpdateTodosError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
var ReadTodosToolCall$Runtime = (()=>class _ReadTodosToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReadTodosToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReadTodosToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReadTodosToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadTodosToolCall, a, b2);
        }
    })();
var ReadTodosToolCall = ReadTodosToolCall$Runtime;
ReadTodosToolCall.runtime = proto3;
ReadTodosToolCall.typeName = "agent.v1.ReadTodosToolCall";
ReadTodosToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ReadTodosArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: ReadTodosResult
        }
    ]);
var ReadTodosArgs$Runtime = (()=>class _ReadTodosArgs extends Message {
        constructor(data){
            super();
            this.statusFilter = [];
            this.idFilter = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReadTodosArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReadTodosArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReadTodosArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadTodosArgs, a, b2);
        }
    })();
var ReadTodosArgs = ReadTodosArgs$Runtime;
ReadTodosArgs.runtime = proto3;
ReadTodosArgs.typeName = "agent.v1.ReadTodosArgs";
ReadTodosArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "status_filter",
            kind: "enum",
            T: proto3.getEnumType(TodoStatus),
            repeated: true
        },
        {
            no: 2,
            name: "id_filter",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var ReadTodosResult$Runtime = (()=>class _ReadTodosResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReadTodosResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReadTodosResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReadTodosResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadTodosResult, a, b2);
        }
    })();
var ReadTodosResult = ReadTodosResult$Runtime;
ReadTodosResult.runtime = proto3;
ReadTodosResult.typeName = "agent.v1.ReadTodosResult";
ReadTodosResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ReadTodosSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: ReadTodosError,
            oneof: "result"
        }
    ]);
var ReadTodosSuccess$Runtime = (()=>class _ReadTodosSuccess extends Message {
        constructor(data){
            super();
            this.todos = [];
            this.totalCount = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReadTodosSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReadTodosSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReadTodosSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadTodosSuccess, a, b2);
        }
    })();
var ReadTodosSuccess = ReadTodosSuccess$Runtime;
ReadTodosSuccess.runtime = proto3;
ReadTodosSuccess.typeName = "agent.v1.ReadTodosSuccess";
ReadTodosSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "todos",
            kind: "message",
            T: TodoItem,
            repeated: true
        },
        {
            no: 2,
            name: "total_count",
            kind: "scalar",
            T: 5
        }
    ]);
var ReadTodosError$Runtime = (()=>class _ReadTodosError extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReadTodosError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReadTodosError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReadTodosError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReadTodosError, a, b2);
        }
    })();
var ReadTodosError = ReadTodosError$Runtime;
ReadTodosError.runtime = proto3;
ReadTodosError.typeName = "agent.v1.ReadTodosError";
ReadTodosError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
export { ReadTodosArgs, ReadTodosError, ReadTodosResult, ReadTodosSuccess, ReadTodosToolCall, TodoItem, TodoStatus, UpdateTodosArgs, UpdateTodosError, UpdateTodosResult, UpdateTodosSuccess, UpdateTodosToolCall };
