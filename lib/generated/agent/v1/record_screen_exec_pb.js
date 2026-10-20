import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
var RecordingMode;
var RequestedFilePathRejectedReason;
(function(RecordingMode2) {
    RecordingMode2[RecordingMode2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    RecordingMode2[RecordingMode2["START_RECORDING"] = 1] = "START_RECORDING";
    RecordingMode2[RecordingMode2["SAVE_RECORDING"] = 2] = "SAVE_RECORDING";
    RecordingMode2[RecordingMode2["DISCARD_RECORDING"] = 3] = "DISCARD_RECORDING";
})(RecordingMode || (RecordingMode = {}));
proto3.util.setEnumType(RecordingMode, "agent.v1.RecordingMode", [
    {
        no: 0,
        name: "RECORDING_MODE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "RECORDING_MODE_START_RECORDING"
    },
    {
        no: 2,
        name: "RECORDING_MODE_SAVE_RECORDING"
    },
    {
        no: 3,
        name: "RECORDING_MODE_DISCARD_RECORDING"
    }
]);
(function(RequestedFilePathRejectedReason2) {
    RequestedFilePathRejectedReason2[RequestedFilePathRejectedReason2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    RequestedFilePathRejectedReason2[RequestedFilePathRejectedReason2["SLASHES_NOT_ALLOWED"] = 1] = "SLASHES_NOT_ALLOWED";
})(RequestedFilePathRejectedReason || (RequestedFilePathRejectedReason = {}));
proto3.util.setEnumType(RequestedFilePathRejectedReason, "agent.v1.RequestedFilePathRejectedReason", [
    {
        no: 0,
        name: "REQUESTED_FILE_PATH_REJECTED_REASON_UNSPECIFIED"
    },
    {
        no: 1,
        name: "REQUESTED_FILE_PATH_REJECTED_REASON_SLASHES_NOT_ALLOWED"
    }
]);
var RecordScreenArgs$Runtime = (()=>class _RecordScreenArgs extends Message {
        constructor(data){
            super();
            this.mode = RecordingMode.UNSPECIFIED;
            this.toolCallId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RecordScreenArgs().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RecordScreenArgs().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RecordScreenArgs().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RecordScreenArgs, a, b2);
        }
    })();
var RecordScreenArgs = RecordScreenArgs$Runtime;
RecordScreenArgs.runtime = proto3;
RecordScreenArgs.typeName = "agent.v1.RecordScreenArgs";
RecordScreenArgs.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "mode",
            kind: "enum",
            T: proto3.getEnumType(RecordingMode)
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "save_as_filename",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var RecordScreenResult$Runtime = (()=>class _RecordScreenResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RecordScreenResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RecordScreenResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RecordScreenResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RecordScreenResult, a, b2);
        }
    })();
var RecordScreenResult = RecordScreenResult$Runtime;
RecordScreenResult.runtime = proto3;
RecordScreenResult.typeName = "agent.v1.RecordScreenResult";
RecordScreenResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "start_success",
            kind: "message",
            T: RecordScreenStartSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "save_success",
            kind: "message",
            T: RecordScreenSaveSuccess,
            oneof: "result"
        },
        {
            no: 3,
            name: "discard_success",
            kind: "message",
            T: RecordScreenDiscardSuccess,
            oneof: "result"
        },
        {
            no: 4,
            name: "failure",
            kind: "message",
            T: RecordScreenFailure,
            oneof: "result"
        }
    ]);
var RecordScreenStartSuccess$Runtime = (()=>class _RecordScreenStartSuccess extends Message {
        constructor(data){
            super();
            this.wasPriorRecordingCancelled = false;
            this.wasSaveAsFilenameIgnored = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RecordScreenStartSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RecordScreenStartSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RecordScreenStartSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RecordScreenStartSuccess, a, b2);
        }
    })();
var RecordScreenStartSuccess = RecordScreenStartSuccess$Runtime;
RecordScreenStartSuccess.runtime = proto3;
RecordScreenStartSuccess.typeName = "agent.v1.RecordScreenStartSuccess";
RecordScreenStartSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "was_prior_recording_cancelled",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "was_save_as_filename_ignored",
            kind: "scalar",
            T: 8
        }
    ]);
var RecordScreenSaveSuccess$Runtime = (()=>class _RecordScreenSaveSuccess extends Message {
        constructor(data){
            super();
            this.path = "";
            this.recordingDurationMs = protoInt64.zero;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RecordScreenSaveSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RecordScreenSaveSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RecordScreenSaveSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RecordScreenSaveSuccess, a, b2);
        }
    })();
var RecordScreenSaveSuccess = RecordScreenSaveSuccess$Runtime;
RecordScreenSaveSuccess.runtime = proto3;
RecordScreenSaveSuccess.typeName = "agent.v1.RecordScreenSaveSuccess";
RecordScreenSaveSuccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "recording_duration_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "requested_file_path_rejected_reason",
            kind: "enum",
            T: proto3.getEnumType(RequestedFilePathRejectedReason),
            opt: true
        }
    ]);
var RecordScreenDiscardSuccess$Runtime = (()=>class _RecordScreenDiscardSuccess extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RecordScreenDiscardSuccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RecordScreenDiscardSuccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RecordScreenDiscardSuccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RecordScreenDiscardSuccess, a, b2);
        }
    })();
var RecordScreenDiscardSuccess = RecordScreenDiscardSuccess$Runtime;
RecordScreenDiscardSuccess.runtime = proto3;
RecordScreenDiscardSuccess.typeName = "agent.v1.RecordScreenDiscardSuccess";
RecordScreenDiscardSuccess.fields = proto3.util.newFieldList(()=>[]);
var RecordScreenFailure$Runtime = (()=>class _RecordScreenFailure extends Message {
        constructor(data){
            super();
            this.error = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RecordScreenFailure().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RecordScreenFailure().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RecordScreenFailure().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RecordScreenFailure, a, b2);
        }
    })();
var RecordScreenFailure = RecordScreenFailure$Runtime;
RecordScreenFailure.runtime = proto3;
RecordScreenFailure.typeName = "agent.v1.RecordScreenFailure";
RecordScreenFailure.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
export { RecordScreenArgs, RecordScreenDiscardSuccess, RecordScreenFailure, RecordScreenResult, RecordScreenSaveSuccess, RecordScreenStartSuccess, RecordingMode, RequestedFilePathRejectedReason };
