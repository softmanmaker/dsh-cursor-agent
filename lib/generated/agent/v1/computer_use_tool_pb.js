import { Message, proto3 } from "@bufbuild/protobuf";
var MouseButton;
var ScrollDirection;
(function(MouseButton2) {
    MouseButton2[MouseButton2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    MouseButton2[MouseButton2["LEFT"] = 1] = "LEFT";
    MouseButton2[MouseButton2["RIGHT"] = 2] = "RIGHT";
    MouseButton2[MouseButton2["MIDDLE"] = 3] = "MIDDLE";
    MouseButton2[MouseButton2["BACK"] = 4] = "BACK";
    MouseButton2[MouseButton2["FORWARD"] = 5] = "FORWARD";
})(MouseButton || (MouseButton = {}));
proto3.util.setEnumType(MouseButton, "agent.v1.MouseButton", [
    {
        no: 0,
        name: "MOUSE_BUTTON_UNSPECIFIED"
    },
    {
        no: 1,
        name: "MOUSE_BUTTON_LEFT"
    },
    {
        no: 2,
        name: "MOUSE_BUTTON_RIGHT"
    },
    {
        no: 3,
        name: "MOUSE_BUTTON_MIDDLE"
    },
    {
        no: 4,
        name: "MOUSE_BUTTON_BACK"
    },
    {
        no: 5,
        name: "MOUSE_BUTTON_FORWARD"
    }
]);
(function(ScrollDirection2) {
    ScrollDirection2[ScrollDirection2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    ScrollDirection2[ScrollDirection2["UP"] = 1] = "UP";
    ScrollDirection2[ScrollDirection2["DOWN"] = 2] = "DOWN";
    ScrollDirection2[ScrollDirection2["LEFT"] = 3] = "LEFT";
    ScrollDirection2[ScrollDirection2["RIGHT"] = 4] = "RIGHT";
})(ScrollDirection || (ScrollDirection = {}));
proto3.util.setEnumType(ScrollDirection, "agent.v1.ScrollDirection", [
    {
        no: 0,
        name: "SCROLL_DIRECTION_UNSPECIFIED"
    },
    {
        no: 1,
        name: "SCROLL_DIRECTION_UP"
    },
    {
        no: 2,
        name: "SCROLL_DIRECTION_DOWN"
    },
    {
        no: 3,
        name: "SCROLL_DIRECTION_LEFT"
    },
    {
        no: 4,
        name: "SCROLL_DIRECTION_RIGHT"
    }
]);
var Coordinate$Runtime = (()=>class _Coordinate extends Message {
        constructor(data){
            super();
            this.x = 0;
            this.y = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _Coordinate().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _Coordinate().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _Coordinate().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_Coordinate, a, b2);
        }
    })();
var Coordinate = Coordinate$Runtime;
Coordinate.runtime = proto3;
Coordinate.typeName = "agent.v1.Coordinate";
Coordinate.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "x",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "y",
            kind: "scalar",
            T: 5
        }
    ]);
var ComputerUseArgs$Runtime = (()=>class _ComputerUseArgs extends Message {
        constructor(data){
            super();
            this.toolCallId = "";
            this.actions = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ComputerUseArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ComputerUseArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ComputerUseArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ComputerUseArgs, a, b2);
        }
    })();
var ComputerUseArgs = ComputerUseArgs$Runtime;
ComputerUseArgs.runtime = proto3;
ComputerUseArgs.typeName = "agent.v1.ComputerUseArgs";
ComputerUseArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "actions",
            kind: "message",
            T: ComputerUseAction,
            repeated: true
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
            name: "bind_unmapped_characters",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
var ComputerUseAction$Runtime = (()=>class _ComputerUseAction extends Message {
        constructor(data){
            super();
            this.action = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ComputerUseAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ComputerUseAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ComputerUseAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ComputerUseAction, a, b2);
        }
    })();
var ComputerUseAction = ComputerUseAction$Runtime;
ComputerUseAction.runtime = proto3;
ComputerUseAction.typeName = "agent.v1.ComputerUseAction";
ComputerUseAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "mouse_move",
            kind: "message",
            T: MouseMoveAction,
            oneof: "action"
        },
        {
            no: 2,
            name: "click",
            kind: "message",
            T: ClickAction,
            oneof: "action"
        },
        {
            no: 3,
            name: "mouse_down",
            kind: "message",
            T: MouseDownAction,
            oneof: "action"
        },
        {
            no: 4,
            name: "mouse_up",
            kind: "message",
            T: MouseUpAction,
            oneof: "action"
        },
        {
            no: 5,
            name: "drag",
            kind: "message",
            T: DragAction,
            oneof: "action"
        },
        {
            no: 6,
            name: "scroll",
            kind: "message",
            T: ScrollAction,
            oneof: "action"
        },
        {
            no: 7,
            name: "type",
            kind: "message",
            T: TypeAction,
            oneof: "action"
        },
        {
            no: 8,
            name: "key",
            kind: "message",
            T: KeyAction,
            oneof: "action"
        },
        {
            no: 9,
            name: "wait",
            kind: "message",
            T: WaitAction,
            oneof: "action"
        },
        {
            no: 10,
            name: "screenshot",
            kind: "message",
            T: ScreenshotAction,
            oneof: "action"
        },
        {
            no: 11,
            name: "cursor_position",
            kind: "message",
            T: CursorPositionAction,
            oneof: "action"
        }
    ]);
var MouseMoveAction$Runtime = (()=>class _MouseMoveAction extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _MouseMoveAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _MouseMoveAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _MouseMoveAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_MouseMoveAction, a, b2);
        }
    })();
var MouseMoveAction = MouseMoveAction$Runtime;
MouseMoveAction.runtime = proto3;
MouseMoveAction.typeName = "agent.v1.MouseMoveAction";
MouseMoveAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "coordinate",
            kind: "message",
            T: Coordinate
        }
    ]);
var ClickAction$Runtime = (()=>class _ClickAction extends Message {
        constructor(data){
            super();
            this.button = MouseButton.UNSPECIFIED;
            this.count = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ClickAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ClickAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ClickAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ClickAction, a, b2);
        }
    })();
var ClickAction = ClickAction$Runtime;
ClickAction.runtime = proto3;
ClickAction.typeName = "agent.v1.ClickAction";
ClickAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "coordinate",
            kind: "message",
            T: Coordinate,
            opt: true
        },
        {
            no: 2,
            name: "button",
            kind: "enum",
            T: proto3.getEnumType(MouseButton)
        },
        {
            no: 3,
            name: "count",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "modifier_keys",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var MouseDownAction$Runtime = (()=>class _MouseDownAction extends Message {
        constructor(data){
            super();
            this.button = MouseButton.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _MouseDownAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _MouseDownAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _MouseDownAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_MouseDownAction, a, b2);
        }
    })();
var MouseDownAction = MouseDownAction$Runtime;
MouseDownAction.runtime = proto3;
MouseDownAction.typeName = "agent.v1.MouseDownAction";
MouseDownAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "button",
            kind: "enum",
            T: proto3.getEnumType(MouseButton)
        }
    ]);
var MouseUpAction$Runtime = (()=>class _MouseUpAction extends Message {
        constructor(data){
            super();
            this.button = MouseButton.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _MouseUpAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _MouseUpAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _MouseUpAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_MouseUpAction, a, b2);
        }
    })();
var MouseUpAction = MouseUpAction$Runtime;
MouseUpAction.runtime = proto3;
MouseUpAction.typeName = "agent.v1.MouseUpAction";
MouseUpAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "button",
            kind: "enum",
            T: proto3.getEnumType(MouseButton)
        }
    ]);
var DragAction$Runtime = (()=>class _DragAction extends Message {
        constructor(data){
            super();
            this.path = [];
            this.button = MouseButton.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _DragAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _DragAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _DragAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_DragAction, a, b2);
        }
    })();
var DragAction = DragAction$Runtime;
DragAction.runtime = proto3;
DragAction.typeName = "agent.v1.DragAction";
DragAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "message",
            T: Coordinate,
            repeated: true
        },
        {
            no: 2,
            name: "button",
            kind: "enum",
            T: proto3.getEnumType(MouseButton)
        },
        {
            no: 3,
            name: "modifier_keys",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var ScrollAction$Runtime = (()=>class _ScrollAction extends Message {
        constructor(data){
            super();
            this.direction = ScrollDirection.UNSPECIFIED;
            this.amount = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ScrollAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ScrollAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ScrollAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ScrollAction, a, b2);
        }
    })();
var ScrollAction = ScrollAction$Runtime;
ScrollAction.runtime = proto3;
ScrollAction.typeName = "agent.v1.ScrollAction";
ScrollAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "coordinate",
            kind: "message",
            T: Coordinate,
            opt: true
        },
        {
            no: 2,
            name: "direction",
            kind: "enum",
            T: proto3.getEnumType(ScrollDirection)
        },
        {
            no: 3,
            name: "amount",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "modifier_keys",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var TypeAction$Runtime = (()=>class _TypeAction extends Message {
        constructor(data){
            super();
            this.text = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _TypeAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _TypeAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _TypeAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_TypeAction, a, b2);
        }
    })();
var TypeAction = TypeAction$Runtime;
TypeAction.runtime = proto3;
TypeAction.typeName = "agent.v1.TypeAction";
TypeAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]);
var KeyAction$Runtime = (()=>class _KeyAction extends Message {
        constructor(data){
            super();
            this.key = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _KeyAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _KeyAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _KeyAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_KeyAction, a, b2);
        }
    })();
var KeyAction = KeyAction$Runtime;
KeyAction.runtime = proto3;
KeyAction.typeName = "agent.v1.KeyAction";
KeyAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "hold_duration_ms",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
var WaitAction$Runtime = (()=>class _WaitAction extends Message {
        constructor(data){
            super();
            this.durationMs = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _WaitAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _WaitAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _WaitAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_WaitAction, a, b2);
        }
    })();
var WaitAction = WaitAction$Runtime;
WaitAction.runtime = proto3;
WaitAction.typeName = "agent.v1.WaitAction";
WaitAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "duration_ms",
            kind: "scalar",
            T: 5
        }
    ]);
var ScreenshotAction$Runtime = (()=>class _ScreenshotAction extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ScreenshotAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ScreenshotAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ScreenshotAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ScreenshotAction, a, b2);
        }
    })();
var ScreenshotAction = ScreenshotAction$Runtime;
ScreenshotAction.runtime = proto3;
ScreenshotAction.typeName = "agent.v1.ScreenshotAction";
ScreenshotAction.fields = proto3.util.newFieldList(()=>[]);
var CursorPositionAction$Runtime = (()=>class _CursorPositionAction extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CursorPositionAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CursorPositionAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CursorPositionAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CursorPositionAction, a, b2);
        }
    })();
var CursorPositionAction = CursorPositionAction$Runtime;
CursorPositionAction.runtime = proto3;
CursorPositionAction.typeName = "agent.v1.CursorPositionAction";
CursorPositionAction.fields = proto3.util.newFieldList(()=>[]);
var ComputerUseResult$Runtime = (()=>class _ComputerUseResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ComputerUseResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ComputerUseResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ComputerUseResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ComputerUseResult, a, b2);
        }
    })();
var ComputerUseResult = ComputerUseResult$Runtime;
ComputerUseResult.runtime = proto3;
ComputerUseResult.typeName = "agent.v1.ComputerUseResult";
ComputerUseResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ComputerUseSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: ComputerUseError,
            oneof: "result"
        }
    ]);
var ComputerUseSuccess$Runtime = (()=>class _ComputerUseSuccess extends Message {
        constructor(data){
            super();
            this.actionCount = 0;
            this.durationMs = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ComputerUseSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ComputerUseSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ComputerUseSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ComputerUseSuccess, a, b2);
        }
    })();
var ComputerUseSuccess = ComputerUseSuccess$Runtime;
ComputerUseSuccess.runtime = proto3;
ComputerUseSuccess.typeName = "agent.v1.ComputerUseSuccess";
ComputerUseSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "action_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "duration_ms",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "screenshot",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "log",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "screenshot_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "cursor_position",
            kind: "message",
            T: Coordinate,
            opt: true
        }
    ]);
var ComputerUseError$Runtime = (()=>class _ComputerUseError extends Message {
        constructor(data){
            super();
            this.error = "";
            this.actionCount = 0;
            this.durationMs = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ComputerUseError().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ComputerUseError().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ComputerUseError().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ComputerUseError, a, b2);
        }
    })();
var ComputerUseError = ComputerUseError$Runtime;
ComputerUseError.runtime = proto3;
ComputerUseError.typeName = "agent.v1.ComputerUseError";
ComputerUseError.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "action_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "duration_ms",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "log",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "screenshot",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "screenshot_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var ComputerUseToolCall$Runtime = (()=>class _ComputerUseToolCall extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ComputerUseToolCall().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ComputerUseToolCall().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ComputerUseToolCall().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ComputerUseToolCall, a, b2);
        }
    })();
var ComputerUseToolCall = ComputerUseToolCall$Runtime;
ComputerUseToolCall.runtime = proto3;
ComputerUseToolCall.typeName = "agent.v1.ComputerUseToolCall";
ComputerUseToolCall.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ComputerUseArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: ComputerUseResult
        }
    ]);
export { ClickAction, ComputerUseAction, ComputerUseArgs, ComputerUseError, ComputerUseResult, ComputerUseSuccess, ComputerUseToolCall, Coordinate, CursorPositionAction, DragAction, KeyAction, MouseButton, MouseDownAction, MouseMoveAction, MouseUpAction, ScreenshotAction, ScrollAction, ScrollDirection, TypeAction, WaitAction };
