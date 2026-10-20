import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Range } from "./utils_pb.js";
import { LsDirectoryTreeNode } from "./ls_exec_pb.js";
import { CursorRule } from "./cursor_rules_pb.js";
import { AgentSkill } from "./agent_skills_pb.js";
var SelectedPluginCapabilityType;
(function(SelectedPluginCapabilityType2) {
    SelectedPluginCapabilityType2[SelectedPluginCapabilityType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    SelectedPluginCapabilityType2[SelectedPluginCapabilityType2["COMMAND"] = 1] = "COMMAND";
    SelectedPluginCapabilityType2[SelectedPluginCapabilityType2["SKILL"] = 2] = "SKILL";
    SelectedPluginCapabilityType2[SelectedPluginCapabilityType2["SUBAGENT"] = 3] = "SUBAGENT";
})(SelectedPluginCapabilityType || (SelectedPluginCapabilityType = {}));
proto3.util.setEnumType(SelectedPluginCapabilityType, "agent.v1.SelectedPluginCapabilityType", [
    {
        no: 0,
        name: "SELECTED_PLUGIN_CAPABILITY_TYPE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "SELECTED_PLUGIN_CAPABILITY_TYPE_COMMAND"
    },
    {
        no: 2,
        name: "SELECTED_PLUGIN_CAPABILITY_TYPE_SKILL"
    },
    {
        no: 3,
        name: "SELECTED_PLUGIN_CAPABILITY_TYPE_SUBAGENT"
    }
]);
var SelectedImage$Runtime = (()=>class _SelectedImage extends Message {
        constructor(data){
            super();
            this.dataOrBlobId = {
                case: void 0
            };
            this.uuid = "";
            this.path = "";
            this.mimeType = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedImage().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedImage().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedImage().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedImage, a, b2);
        }
    })();
var SelectedImage = SelectedImage$Runtime;
SelectedImage.runtime = proto3;
SelectedImage.typeName = "agent.v1.SelectedImage";
SelectedImage.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "blob_id",
            kind: "scalar",
            T: 12,
            oneof: "data_or_blob_id"
        },
        {
            no: 8,
            name: "data",
            kind: "scalar",
            T: 12,
            oneof: "data_or_blob_id"
        },
        {
            no: 9,
            name: "blob_id_with_data",
            kind: "message",
            T: SelectedImage_BlobIdWithData,
            oneof: "data_or_blob_id"
        },
        {
            no: 10,
            name: "prompt_upload_ref",
            kind: "message",
            T: PromptUploadRef,
            oneof: "data_or_blob_id"
        },
        {
            no: 2,
            name: "uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "dimension",
            kind: "message",
            T: SelectedImage_Dimension
        },
        {
            no: 7,
            name: "mime_type",
            kind: "scalar",
            T: 9
        }
    ]);
var SelectedImage_BlobIdWithData$Runtime = (()=>class _SelectedImage_BlobIdWithData extends Message {
        constructor(data){
            super();
            this.blobId = new Uint8Array(0);
            this.data = new Uint8Array(0);
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedImage_BlobIdWithData().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedImage_BlobIdWithData().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedImage_BlobIdWithData().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedImage_BlobIdWithData, a, b2);
        }
    })();
var SelectedImage_BlobIdWithData = SelectedImage_BlobIdWithData$Runtime;
SelectedImage_BlobIdWithData.runtime = proto3;
SelectedImage_BlobIdWithData.typeName = "agent.v1.SelectedImage.BlobIdWithData";
SelectedImage_BlobIdWithData.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "data",
            kind: "scalar",
            T: 12
        }
    ]);
var SelectedImage_Dimension$Runtime = (()=>class _SelectedImage_Dimension extends Message {
        constructor(data){
            super();
            this.width = 0;
            this.height = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedImage_Dimension().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedImage_Dimension().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedImage_Dimension().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedImage_Dimension, a, b2);
        }
    })();
var SelectedImage_Dimension = SelectedImage_Dimension$Runtime;
SelectedImage_Dimension.runtime = proto3;
SelectedImage_Dimension.typeName = "agent.v1.SelectedImage.Dimension";
SelectedImage_Dimension.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "width",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "height",
            kind: "scalar",
            T: 5
        }
    ]);
var PromptUploadRef$Runtime = (()=>class _PromptUploadRef extends Message {
        constructor(data){
            super();
            this.uploadId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PromptUploadRef().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PromptUploadRef().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PromptUploadRef().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PromptUploadRef, a, b2);
        }
    })();
var PromptUploadRef = PromptUploadRef$Runtime;
PromptUploadRef.runtime = proto3;
PromptUploadRef.typeName = "agent.v1.PromptUploadRef";
PromptUploadRef.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "upload_id",
            kind: "scalar",
            T: 9
        }
    ]);
var SelectedDocument$Runtime = (()=>class _SelectedDocument extends Message {
        constructor(data){
            super();
            this.dataOrBlobId = {
                case: void 0
            };
            this.uuid = "";
            this.filename = "";
            this.mimeType = "";
            this.path = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedDocument().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedDocument().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedDocument().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedDocument, a, b2);
        }
    })();
var SelectedDocument = SelectedDocument$Runtime;
SelectedDocument.runtime = proto3;
SelectedDocument.typeName = "agent.v1.SelectedDocument";
SelectedDocument.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "blob_id",
            kind: "scalar",
            T: 12,
            oneof: "data_or_blob_id"
        },
        {
            no: 8,
            name: "data",
            kind: "scalar",
            T: 12,
            oneof: "data_or_blob_id"
        },
        {
            no: 9,
            name: "blob_id_with_data",
            kind: "message",
            T: SelectedDocument_BlobIdWithData,
            oneof: "data_or_blob_id"
        },
        {
            no: 10,
            name: "prompt_upload_ref",
            kind: "message",
            T: PromptUploadRef,
            oneof: "data_or_blob_id"
        },
        {
            no: 2,
            name: "uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "filename",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "mime_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]);
var SelectedDocument_BlobIdWithData$Runtime = (()=>class _SelectedDocument_BlobIdWithData extends Message {
        constructor(data){
            super();
            this.blobId = new Uint8Array(0);
            this.data = new Uint8Array(0);
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedDocument_BlobIdWithData().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedDocument_BlobIdWithData().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedDocument_BlobIdWithData().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedDocument_BlobIdWithData, a, b2);
        }
    })();
var SelectedDocument_BlobIdWithData = SelectedDocument_BlobIdWithData$Runtime;
SelectedDocument_BlobIdWithData.runtime = proto3;
SelectedDocument_BlobIdWithData.typeName = "agent.v1.SelectedDocument.BlobIdWithData";
SelectedDocument_BlobIdWithData.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "data",
            kind: "scalar",
            T: 12
        }
    ]);
var SelectedVideo$Runtime = (()=>class _SelectedVideo extends Message {
        constructor(data){
            super();
            this.dataOrBlobId = {
                case: void 0
            };
            this.uuid = "";
            this.path = "";
            this.mimeType = "";
            this.filename = "";
            this.materializeToFilesystem = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedVideo().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedVideo().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedVideo().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedVideo, a, b2);
        }
    })();
var SelectedVideo = SelectedVideo$Runtime;
SelectedVideo.runtime = proto3;
SelectedVideo.typeName = "agent.v1.SelectedVideo";
SelectedVideo.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "blob_id",
            kind: "scalar",
            T: 12,
            oneof: "data_or_blob_id"
        },
        {
            no: 8,
            name: "data",
            kind: "scalar",
            T: 12,
            oneof: "data_or_blob_id"
        },
        {
            no: 9,
            name: "blob_id_with_data",
            kind: "message",
            T: SelectedVideo_BlobIdWithData,
            oneof: "data_or_blob_id"
        },
        {
            no: 11,
            name: "signed_url",
            kind: "message",
            T: SelectedVideo_SignedUrl,
            oneof: "data_or_blob_id"
        },
        {
            no: 2,
            name: "uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "fps",
            kind: "scalar",
            T: 2,
            opt: true
        },
        {
            no: 7,
            name: "mime_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "filename",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "materialize_to_filesystem",
            kind: "scalar",
            T: 8
        }
    ]);
var SelectedVideo_BlobIdWithData$Runtime = (()=>class _SelectedVideo_BlobIdWithData extends Message {
        constructor(data){
            super();
            this.blobId = new Uint8Array(0);
            this.data = new Uint8Array(0);
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedVideo_BlobIdWithData().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedVideo_BlobIdWithData().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedVideo_BlobIdWithData().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedVideo_BlobIdWithData, a, b2);
        }
    })();
var SelectedVideo_BlobIdWithData = SelectedVideo_BlobIdWithData$Runtime;
SelectedVideo_BlobIdWithData.runtime = proto3;
SelectedVideo_BlobIdWithData.typeName = "agent.v1.SelectedVideo.BlobIdWithData";
SelectedVideo_BlobIdWithData.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "data",
            kind: "scalar",
            T: 12
        }
    ]);
var SelectedVideo_SignedUrl$Runtime = (()=>class _SelectedVideo_SignedUrl extends Message {
        constructor(data){
            super();
            this.url = "";
            this.key = "";
            this.expiresAtUnixMs = protoInt64.zero;
            this.refreshAfterUnixMs = protoInt64.zero;
            this.conversationId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedVideo_SignedUrl().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedVideo_SignedUrl().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedVideo_SignedUrl().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedVideo_SignedUrl, a, b2);
        }
    })();
var SelectedVideo_SignedUrl = SelectedVideo_SignedUrl$Runtime;
SelectedVideo_SignedUrl.runtime = proto3;
SelectedVideo_SignedUrl.typeName = "agent.v1.SelectedVideo.SignedUrl";
SelectedVideo_SignedUrl.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "key",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "expires_at_unix_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "refresh_after_unix_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        }
    ]);
var ExtraContextEntry$Runtime = (()=>class _ExtraContextEntry extends Message {
        constructor(data){
            super();
            this.dataOrBlobId = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ExtraContextEntry().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ExtraContextEntry().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ExtraContextEntry().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ExtraContextEntry, a, b2);
        }
    })();
var ExtraContextEntry = ExtraContextEntry$Runtime;
ExtraContextEntry.runtime = proto3;
ExtraContextEntry.typeName = "agent.v1.ExtraContextEntry";
ExtraContextEntry.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 9,
            oneof: "data_or_blob_id"
        },
        {
            no: 2,
            name: "blob_id",
            kind: "scalar",
            T: 12,
            oneof: "data_or_blob_id"
        }
    ]);
var SelectedFile$Runtime = (()=>class _SelectedFile extends Message {
        constructor(data){
            super();
            this.content = "";
            this.path = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedFile().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedFile().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedFile().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedFile, a, b2);
        }
    })();
var SelectedFile = SelectedFile$Runtime;
SelectedFile.runtime = proto3;
SelectedFile.typeName = "agent.v1.SelectedFile";
SelectedFile.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "relative_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var SelectedCodeSelection$Runtime = (()=>class _SelectedCodeSelection extends Message {
        constructor(data){
            super();
            this.content = "";
            this.path = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedCodeSelection().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedCodeSelection().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedCodeSelection().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedCodeSelection, a, b2);
        }
    })();
var SelectedCodeSelection = SelectedCodeSelection$Runtime;
SelectedCodeSelection.runtime = proto3;
SelectedCodeSelection.typeName = "agent.v1.SelectedCodeSelection";
SelectedCodeSelection.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "relative_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "range",
            kind: "message",
            T: Range
        }
    ]);
var SelectedTerminal$Runtime = (()=>class _SelectedTerminal extends Message {
        constructor(data){
            super();
            this.content = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedTerminal().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedTerminal().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedTerminal().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedTerminal, a, b2);
        }
    })();
var SelectedTerminal = SelectedTerminal$Runtime;
SelectedTerminal.runtime = proto3;
SelectedTerminal.typeName = "agent.v1.SelectedTerminal";
SelectedTerminal.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var SelectedTerminalSelection$Runtime = (()=>class _SelectedTerminalSelection extends Message {
        constructor(data){
            super();
            this.content = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedTerminalSelection().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedTerminalSelection().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedTerminalSelection().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedTerminalSelection, a, b2);
        }
    })();
var SelectedTerminalSelection = SelectedTerminalSelection$Runtime;
SelectedTerminalSelection.runtime = proto3;
SelectedTerminalSelection.typeName = "agent.v1.SelectedTerminalSelection";
SelectedTerminalSelection.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "range",
            kind: "message",
            T: Range
        }
    ]);
var SelectedFolder$Runtime = (()=>class _SelectedFolder extends Message {
        constructor(data){
            super();
            this.path = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedFolder().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedFolder().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedFolder().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedFolder, a, b2);
        }
    })();
var SelectedFolder = SelectedFolder$Runtime;
SelectedFolder.runtime = proto3;
SelectedFolder.typeName = "agent.v1.SelectedFolder";
SelectedFolder.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "relative_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "directory_tree",
            kind: "message",
            T: LsDirectoryTreeNode
        }
    ]);
var SelectedExternalLink$Runtime = (()=>class _SelectedExternalLink extends Message {
        constructor(data){
            super();
            this.url = "";
            this.uuid = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedExternalLink().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedExternalLink().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedExternalLink().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedExternalLink, a, b2);
        }
    })();
var SelectedExternalLink = SelectedExternalLink$Runtime;
SelectedExternalLink.runtime = proto3;
SelectedExternalLink.typeName = "agent.v1.SelectedExternalLink";
SelectedExternalLink.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "pdf_content",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "is_pdf",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 5,
            name: "filename",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "blob_id",
            kind: "scalar",
            T: 12,
            opt: true
        }
    ]);
var SelectedCursorRule$Runtime = (()=>class _SelectedCursorRule extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedCursorRule().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedCursorRule().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedCursorRule().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedCursorRule, a, b2);
        }
    })();
var SelectedCursorRule = SelectedCursorRule$Runtime;
SelectedCursorRule.runtime = proto3;
SelectedCursorRule.typeName = "agent.v1.SelectedCursorRule";
SelectedCursorRule.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "rule",
            kind: "message",
            T: CursorRule
        }
    ]);
var SelectedGitDiff$Runtime = (()=>class _SelectedGitDiff extends Message {
        constructor(data){
            super();
            this.content = "";
            this.fullContentLengthCharCount = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedGitDiff().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedGitDiff().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedGitDiff().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedGitDiff, a, b2);
        }
    })();
var SelectedGitDiff = SelectedGitDiff$Runtime;
SelectedGitDiff.runtime = proto3;
SelectedGitDiff.typeName = "agent.v1.SelectedGitDiff";
SelectedGitDiff.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "full_content_length_char_count",
            kind: "scalar",
            T: 5
        }
    ]);
var SelectedGitDiffFromBranchToMain$Runtime = (()=>class _SelectedGitDiffFromBranchToMain extends Message {
        constructor(data){
            super();
            this.content = "";
            this.fullContentLengthCharCount = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedGitDiffFromBranchToMain().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedGitDiffFromBranchToMain().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedGitDiffFromBranchToMain().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedGitDiffFromBranchToMain, a, b2);
        }
    })();
var SelectedGitDiffFromBranchToMain = SelectedGitDiffFromBranchToMain$Runtime;
SelectedGitDiffFromBranchToMain.runtime = proto3;
SelectedGitDiffFromBranchToMain.typeName = "agent.v1.SelectedGitDiffFromBranchToMain";
SelectedGitDiffFromBranchToMain.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "full_content_length_char_count",
            kind: "scalar",
            T: 5
        }
    ]);
var SelectedGitCommit$Runtime = (()=>class _SelectedGitCommit extends Message {
        constructor(data){
            super();
            this.sha = "";
            this.message = "";
            this.diff = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedGitCommit().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedGitCommit().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedGitCommit().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedGitCommit, a, b2);
        }
    })();
var SelectedGitCommit = SelectedGitCommit$Runtime;
SelectedGitCommit.runtime = proto3;
SelectedGitCommit.typeName = "agent.v1.SelectedGitCommit";
SelectedGitCommit.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
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
            name: "diff",
            kind: "scalar",
            T: 9
        }
    ]);
var SelectedPullRequest$Runtime = (()=>class _SelectedPullRequest extends Message {
        constructor(data){
            super();
            this.number = 0;
            this.url = "";
            this.folderPath = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedPullRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedPullRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedPullRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedPullRequest, a, b2);
        }
    })();
var SelectedPullRequest = SelectedPullRequest$Runtime;
SelectedPullRequest.runtime = proto3;
SelectedPullRequest.typeName = "agent.v1.SelectedPullRequest";
SelectedPullRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "folder_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "summary_json",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "blob_id",
            kind: "scalar",
            T: 12,
            opt: true
        }
    ]);
var SelectedGitPRDiffSelection$Runtime = (()=>class _SelectedGitPRDiffSelection extends Message {
        constructor(data){
            super();
            this.prUrl = "";
            this.filePath = "";
            this.startLine = 0;
            this.endLine = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedGitPRDiffSelection().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedGitPRDiffSelection().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedGitPRDiffSelection().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedGitPRDiffSelection, a, b2);
        }
    })();
var SelectedGitPRDiffSelection = SelectedGitPRDiffSelection$Runtime;
SelectedGitPRDiffSelection.runtime = proto3;
SelectedGitPRDiffSelection.typeName = "agent.v1.SelectedGitPRDiffSelection";
SelectedGitPRDiffSelection.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "end_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "diff_content",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "blob_id",
            kind: "scalar",
            T: 12,
            opt: true
        }
    ]);
var SelectedPluginCapabilityRef$Runtime = (()=>class _SelectedPluginCapabilityRef extends Message {
        constructor(data){
            super();
            this.pluginId = "";
            this.capabilityType = SelectedPluginCapabilityType.UNSPECIFIED;
            this.sourcePath = "";
            this.snapshotToken = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedPluginCapabilityRef().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedPluginCapabilityRef().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedPluginCapabilityRef().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedPluginCapabilityRef, a, b2);
        }
    })();
var SelectedPluginCapabilityRef = SelectedPluginCapabilityRef$Runtime;
SelectedPluginCapabilityRef.runtime = proto3;
SelectedPluginCapabilityRef.typeName = "agent.v1.SelectedPluginCapabilityRef";
SelectedPluginCapabilityRef.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "plugin_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "capability_type",
            kind: "enum",
            T: proto3.getEnumType(SelectedPluginCapabilityType)
        },
        {
            no: 3,
            name: "source_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "snapshot_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "resolved_commit_sha",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var SelectedCursorCommand$Runtime = (()=>class _SelectedCursorCommand extends Message {
        constructor(data){
            super();
            this.name = "";
            this.content = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedCursorCommand().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedCursorCommand().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedCursorCommand().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedCursorCommand, a, b2);
        }
    })();
var SelectedCursorCommand = SelectedCursorCommand$Runtime;
SelectedCursorCommand.runtime = proto3;
SelectedCursorCommand.typeName = "agent.v1.SelectedCursorCommand";
SelectedCursorCommand.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
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
            name: "plugin_capability",
            kind: "message",
            T: SelectedPluginCapabilityRef,
            opt: true
        },
        {
            no: 4,
            name: "full_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "display_name",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var SelectedDocumentation$Runtime = (()=>class _SelectedDocumentation extends Message {
        constructor(data){
            super();
            this.docId = "";
            this.name = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedDocumentation().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedDocumentation().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedDocumentation().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedDocumentation, a, b2);
        }
    })();
var SelectedDocumentation = SelectedDocumentation$Runtime;
SelectedDocumentation.runtime = proto3;
SelectedDocumentation.typeName = "agent.v1.SelectedDocumentation";
SelectedDocumentation.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "doc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]);
var SelectedPastChat$Runtime = (()=>class _SelectedPastChat extends Message {
        constructor(data){
            super();
            this.agentId = "";
            this.name = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedPastChat().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedPastChat().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedPastChat().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedPastChat, a, b2);
        }
    })();
var SelectedPastChat = SelectedPastChat$Runtime;
SelectedPastChat.runtime = proto3;
SelectedPastChat.typeName = "agent.v1.SelectedPastChat";
SelectedPastChat.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]);
var RecentAgent$Runtime = (()=>class _RecentAgent extends Message {
        constructor(data){
            super();
            this.name = "";
            this.path = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RecentAgent().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RecentAgent().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RecentAgent().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RecentAgent, a, b2);
        }
    })();
var RecentAgent = RecentAgent$Runtime;
RecentAgent.runtime = proto3;
RecentAgent.typeName = "agent.v1.RecentAgent";
RecentAgent.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "overview",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var RecentAgentsContext$Runtime = (()=>class _RecentAgentsContext extends Message {
        constructor(data){
            super();
            this.recentAgents = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RecentAgentsContext().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RecentAgentsContext().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RecentAgentsContext().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RecentAgentsContext, a, b2);
        }
    })();
var RecentAgentsContext = RecentAgentsContext$Runtime;
RecentAgentsContext.runtime = proto3;
RecentAgentsContext.typeName = "agent.v1.RecentAgentsContext";
RecentAgentsContext.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "recent_agents",
            kind: "message",
            T: RecentAgent,
            repeated: true
        }
    ]);
var CallFrame$Runtime = (()=>class _CallFrame extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CallFrame().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CallFrame().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CallFrame().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CallFrame, a, b2);
        }
    })();
var CallFrame = CallFrame$Runtime;
CallFrame.runtime = proto3;
CallFrame.typeName = "agent.v1.CallFrame";
CallFrame.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "function_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "line_number",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 4,
            name: "column_number",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
var StackTrace$Runtime = (()=>class _StackTrace extends Message {
        constructor(data){
            super();
            this.callFrames = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _StackTrace().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _StackTrace().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _StackTrace().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_StackTrace, a, b2);
        }
    })();
var StackTrace = StackTrace$Runtime;
StackTrace.runtime = proto3;
StackTrace.typeName = "agent.v1.StackTrace";
StackTrace.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "call_frames",
            kind: "message",
            T: CallFrame,
            repeated: true
        },
        {
            no: 2,
            name: "raw_stack_trace",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var SelectedConsoleLog$Runtime = (()=>class _SelectedConsoleLog extends Message {
        constructor(data){
            super();
            this.message = "";
            this.timestamp = 0;
            this.level = "";
            this.clientName = "";
            this.sessionId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedConsoleLog().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedConsoleLog().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedConsoleLog().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedConsoleLog, a, b2);
        }
    })();
var SelectedConsoleLog = SelectedConsoleLog$Runtime;
SelectedConsoleLog.runtime = proto3;
SelectedConsoleLog.typeName = "agent.v1.SelectedConsoleLog";
SelectedConsoleLog.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "timestamp",
            kind: "scalar",
            T: 1
        },
        {
            no: 3,
            name: "level",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "client_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "stack_trace",
            kind: "message",
            T: StackTrace,
            opt: true
        },
        {
            no: 7,
            name: "object_data_json",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var SelectedUIElement$Runtime = (()=>class _SelectedUIElement extends Message {
        constructor(data){
            super();
            this.element = "";
            this.xpath = "";
            this.textContent = "";
            this.extra = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedUIElement().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedUIElement().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedUIElement().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedUIElement, a, b2);
        }
    })();
var SelectedUIElement = SelectedUIElement$Runtime;
SelectedUIElement.runtime = proto3;
SelectedUIElement.typeName = "agent.v1.SelectedUIElement";
SelectedUIElement.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "element",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "xpath",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "text_content",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "extra",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "component",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "component_props_json",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var SelectedSubagent$Runtime = (()=>class _SelectedSubagent extends Message {
        constructor(data){
            super();
            this.name = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedSubagent().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedSubagent().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedSubagent().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedSubagent, a, b2);
        }
    })();
var SelectedSubagent = SelectedSubagent$Runtime;
SelectedSubagent.runtime = proto3;
SelectedSubagent.typeName = "agent.v1.SelectedSubagent";
SelectedSubagent.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]);
var SelectedBrowser$Runtime = (()=>class _SelectedBrowser extends Message {
        constructor(data){
            super();
            this.browserId = "";
            this.url = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedBrowser().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedBrowser().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedBrowser().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedBrowser, a, b2);
        }
    })();
var SelectedBrowser = SelectedBrowser$Runtime;
SelectedBrowser.runtime = proto3;
SelectedBrowser.typeName = "agent.v1.SelectedBrowser";
SelectedBrowser.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "browser_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "page_title",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var SelectedAgenticGitActionCommitParams$Runtime = (()=>class _SelectedAgenticGitActionCommitParams extends Message {
        constructor(data){
            super();
            this.filesToCommit = [];
            this.filesToExcludeFromCommit = [];
            this.shouldStageAllChanges = false;
            this.filesToCommitWithStatus = [];
            this.filesToExcludeFromCommitWithStatus = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedAgenticGitActionCommitParams().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedAgenticGitActionCommitParams().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedAgenticGitActionCommitParams().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedAgenticGitActionCommitParams, a, b2);
        }
    })();
var SelectedAgenticGitActionCommitParams = SelectedAgenticGitActionCommitParams$Runtime;
SelectedAgenticGitActionCommitParams.runtime = proto3;
SelectedAgenticGitActionCommitParams.typeName = "agent.v1.SelectedAgenticGitActionCommitParams";
SelectedAgenticGitActionCommitParams.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "files_to_commit",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "files_to_exclude_from_commit",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "should_stage_all_changes",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "create_pr_draft",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 5,
            name: "files_to_commit_with_status",
            kind: "message",
            T: SelectedAgenticGitFileWithStatus,
            repeated: true
        },
        {
            no: 6,
            name: "files_to_exclude_from_commit_with_status",
            kind: "message",
            T: SelectedAgenticGitFileWithStatus,
            repeated: true
        }
    ]);
var SelectedAgenticGitActionCreateBranchParams$Runtime = (()=>class _SelectedAgenticGitActionCreateBranchParams extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedAgenticGitActionCreateBranchParams().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedAgenticGitActionCreateBranchParams().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedAgenticGitActionCreateBranchParams().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedAgenticGitActionCreateBranchParams, a, b2);
        }
    })();
var SelectedAgenticGitActionCreateBranchParams = SelectedAgenticGitActionCreateBranchParams$Runtime;
SelectedAgenticGitActionCreateBranchParams.runtime = proto3;
SelectedAgenticGitActionCreateBranchParams.typeName = "agent.v1.SelectedAgenticGitActionCreateBranchParams";
SelectedAgenticGitActionCreateBranchParams.fields = proto3.util.newFieldList(()=>[]);
var SelectedAgenticGitFileWithStatus$Runtime = (()=>class _SelectedAgenticGitFileWithStatus extends Message {
        constructor(data){
            super();
            this.path = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedAgenticGitFileWithStatus().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedAgenticGitFileWithStatus().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedAgenticGitFileWithStatus().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedAgenticGitFileWithStatus, a, b2);
        }
    })();
var SelectedAgenticGitFileWithStatus = SelectedAgenticGitFileWithStatus$Runtime;
SelectedAgenticGitFileWithStatus.runtime = proto3;
SelectedAgenticGitFileWithStatus.typeName = "agent.v1.SelectedAgenticGitFileWithStatus";
SelectedAgenticGitFileWithStatus.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "status",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var SelectedAgenticGitActionPushParams$Runtime = (()=>class _SelectedAgenticGitActionPushParams extends Message {
        constructor(data){
            super();
            this.filesToPush = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedAgenticGitActionPushParams().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedAgenticGitActionPushParams().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedAgenticGitActionPushParams().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedAgenticGitActionPushParams, a, b2);
        }
    })();
var SelectedAgenticGitActionPushParams = SelectedAgenticGitActionPushParams$Runtime;
SelectedAgenticGitActionPushParams.runtime = proto3;
SelectedAgenticGitActionPushParams.typeName = "agent.v1.SelectedAgenticGitActionPushParams";
SelectedAgenticGitActionPushParams.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "files_to_push",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "create_pr_draft",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
var SelectedAgenticGitActionFixMergeConflictsParams$Runtime = (()=>class _SelectedAgenticGitActionFixMergeConflictsParams extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedAgenticGitActionFixMergeConflictsParams().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedAgenticGitActionFixMergeConflictsParams().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedAgenticGitActionFixMergeConflictsParams().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedAgenticGitActionFixMergeConflictsParams, a, b2);
        }
    })();
var SelectedAgenticGitActionFixMergeConflictsParams = SelectedAgenticGitActionFixMergeConflictsParams$Runtime;
SelectedAgenticGitActionFixMergeConflictsParams.runtime = proto3;
SelectedAgenticGitActionFixMergeConflictsParams.typeName = "agent.v1.SelectedAgenticGitActionFixMergeConflictsParams";
SelectedAgenticGitActionFixMergeConflictsParams.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "pr_url",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var SelectedAgenticGitActionBabysitPrInCloudParams$Runtime = (()=>class _SelectedAgenticGitActionBabysitPrInCloudParams extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedAgenticGitActionBabysitPrInCloudParams().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedAgenticGitActionBabysitPrInCloudParams().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedAgenticGitActionBabysitPrInCloudParams().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedAgenticGitActionBabysitPrInCloudParams, a, b2);
        }
    })();
var SelectedAgenticGitActionBabysitPrInCloudParams = SelectedAgenticGitActionBabysitPrInCloudParams$Runtime;
SelectedAgenticGitActionBabysitPrInCloudParams.runtime = proto3;
SelectedAgenticGitActionBabysitPrInCloudParams.typeName = "agent.v1.SelectedAgenticGitActionBabysitPrInCloudParams";
SelectedAgenticGitActionBabysitPrInCloudParams.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var SelectedAgenticGitActionUpdateBranchParams$Runtime = (()=>class _SelectedAgenticGitActionUpdateBranchParams extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedAgenticGitActionUpdateBranchParams().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedAgenticGitActionUpdateBranchParams().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedAgenticGitActionUpdateBranchParams().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedAgenticGitActionUpdateBranchParams, a, b2);
        }
    })();
var SelectedAgenticGitActionUpdateBranchParams = SelectedAgenticGitActionUpdateBranchParams$Runtime;
SelectedAgenticGitActionUpdateBranchParams.runtime = proto3;
SelectedAgenticGitActionUpdateBranchParams.typeName = "agent.v1.SelectedAgenticGitActionUpdateBranchParams";
SelectedAgenticGitActionUpdateBranchParams.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var SelectedAgenticGitActionPullLocallyParams$Runtime = (()=>class _SelectedAgenticGitActionPullLocallyParams extends Message {
        constructor(data){
            super();
            this.remoteBranch = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedAgenticGitActionPullLocallyParams().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedAgenticGitActionPullLocallyParams().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedAgenticGitActionPullLocallyParams().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedAgenticGitActionPullLocallyParams, a, b2);
        }
    })();
var SelectedAgenticGitActionPullLocallyParams = SelectedAgenticGitActionPullLocallyParams$Runtime;
SelectedAgenticGitActionPullLocallyParams.runtime = proto3;
SelectedAgenticGitActionPullLocallyParams.typeName = "agent.v1.SelectedAgenticGitActionPullLocallyParams";
SelectedAgenticGitActionPullLocallyParams.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "remote_branch",
            kind: "scalar",
            T: 9
        }
    ]);
var SelectedAgenticGitAction$Runtime = (()=>class _SelectedAgenticGitAction extends Message {
        constructor(data){
            super();
            this.params = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedAgenticGitAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedAgenticGitAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedAgenticGitAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedAgenticGitAction, a, b2);
        }
    })();
var SelectedAgenticGitAction = SelectedAgenticGitAction$Runtime;
SelectedAgenticGitAction.runtime = proto3;
SelectedAgenticGitAction.typeName = "agent.v1.SelectedAgenticGitAction";
SelectedAgenticGitAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 2,
            name: "commit_params",
            kind: "message",
            T: SelectedAgenticGitActionCommitParams,
            oneof: "params"
        },
        {
            no: 6,
            name: "commit_and_push_params",
            kind: "message",
            T: SelectedAgenticGitActionCommitParams,
            oneof: "params"
        },
        {
            no: 3,
            name: "push_params",
            kind: "message",
            T: SelectedAgenticGitActionPushParams,
            oneof: "params"
        },
        {
            no: 7,
            name: "create_pr_params",
            kind: "message",
            T: SelectedAgenticGitActionPushParams,
            oneof: "params"
        },
        {
            no: 8,
            name: "create_pr_with_changes_params",
            kind: "message",
            T: SelectedAgenticGitActionCommitParams,
            oneof: "params"
        },
        {
            no: 4,
            name: "fix_merge_conflicts_params",
            kind: "message",
            T: SelectedAgenticGitActionFixMergeConflictsParams,
            oneof: "params"
        },
        {
            no: 11,
            name: "babysit_pr_in_cloud_params",
            kind: "message",
            T: SelectedAgenticGitActionBabysitPrInCloudParams,
            oneof: "params"
        },
        {
            no: 14,
            name: "apply_locally_params",
            kind: "message",
            T: SelectedAgenticGitActionPullLocallyParams,
            oneof: "params"
        },
        {
            no: 15,
            name: "checkout_branch_params",
            kind: "message",
            T: SelectedAgenticGitActionPullLocallyParams,
            oneof: "params"
        },
        {
            no: 12,
            name: "create_branch_and_commit_params",
            kind: "message",
            T: SelectedAgenticGitActionCommitParams,
            oneof: "params"
        },
        {
            no: 13,
            name: "create_branch_commit_and_push_params",
            kind: "message",
            T: SelectedAgenticGitActionCommitParams,
            oneof: "params"
        },
        {
            no: 16,
            name: "update_branch_params",
            kind: "message",
            T: SelectedAgenticGitActionUpdateBranchParams,
            oneof: "params"
        },
        {
            no: 17,
            name: "create_branch_params",
            kind: "message",
            T: SelectedAgenticGitActionCreateBranchParams,
            oneof: "params"
        },
        {
            no: 5,
            name: "branch_context",
            kind: "message",
            T: SelectedGitBranchContext,
            opt: true
        },
        {
            no: 9,
            name: "path_to_template_file",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "path_to_template_dir",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var SelectedGitBranchContext$Runtime = (()=>class _SelectedGitBranchContext extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedGitBranchContext().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedGitBranchContext().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedGitBranchContext().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedGitBranchContext, a, b2);
        }
    })();
var SelectedGitBranchContext = SelectedGitBranchContext$Runtime;
SelectedGitBranchContext.runtime = proto3;
SelectedGitBranchContext.typeName = "agent.v1.SelectedGitBranchContext";
SelectedGitBranchContext.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "current_branch",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "agent_branch_prefix",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var SelectedContext$Runtime = (()=>class _SelectedContext extends Message {
        constructor(data){
            super();
            this.selectedImages = [];
            this.extraContext = [];
            this.extraContextEntries = [];
            this.files = [];
            this.codeSelections = [];
            this.terminals = [];
            this.terminalSelections = [];
            this.folders = [];
            this.externalLinks = [];
            this.cursorRules = [];
            this.cursorCommands = [];
            this.documentations = [];
            this.uiElements = [];
            this.consoleLogs = [];
            this.gitCommits = [];
            this.pastChats = [];
            this.gitPrDiffSelections = [];
            this.selectedPullRequests = [];
            this.selectedSubagents = [];
            this.selectedVideos = [];
            this.selectedBrowsers = [];
            this.selectedDocuments = [];
            this.selectedSkills = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SelectedContext().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SelectedContext().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SelectedContext().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SelectedContext, a, b2);
        }
    })();
var SelectedContext = SelectedContext$Runtime;
SelectedContext.runtime = proto3;
SelectedContext.typeName = "agent.v1.SelectedContext";
SelectedContext.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "selected_images",
            kind: "message",
            T: SelectedImage,
            repeated: true
        },
        {
            no: 2,
            name: "invocation_context",
            kind: "message",
            T: InvocationContext,
            opt: true
        },
        {
            no: 3,
            name: "extra_context",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 16,
            name: "extra_context_entries",
            kind: "message",
            T: ExtraContextEntry,
            repeated: true
        },
        {
            no: 4,
            name: "files",
            kind: "message",
            T: SelectedFile,
            repeated: true
        },
        {
            no: 5,
            name: "code_selections",
            kind: "message",
            T: SelectedCodeSelection,
            repeated: true
        },
        {
            no: 6,
            name: "terminals",
            kind: "message",
            T: SelectedTerminal,
            repeated: true
        },
        {
            no: 7,
            name: "terminal_selections",
            kind: "message",
            T: SelectedTerminalSelection,
            repeated: true
        },
        {
            no: 8,
            name: "folders",
            kind: "message",
            T: SelectedFolder,
            repeated: true
        },
        {
            no: 9,
            name: "external_links",
            kind: "message",
            T: SelectedExternalLink,
            repeated: true
        },
        {
            no: 10,
            name: "cursor_rules",
            kind: "message",
            T: SelectedCursorRule,
            repeated: true
        },
        {
            no: 18,
            name: "git_diff",
            kind: "message",
            T: SelectedGitDiff,
            opt: true
        },
        {
            no: 11,
            name: "git_diff_from_branch_to_main",
            kind: "message",
            T: SelectedGitDiffFromBranchToMain,
            opt: true
        },
        {
            no: 12,
            name: "cursor_commands",
            kind: "message",
            T: SelectedCursorCommand,
            repeated: true
        },
        {
            no: 13,
            name: "documentations",
            kind: "message",
            T: SelectedDocumentation,
            repeated: true
        },
        {
            no: 14,
            name: "ui_elements",
            kind: "message",
            T: SelectedUIElement,
            repeated: true
        },
        {
            no: 15,
            name: "console_logs",
            kind: "message",
            T: SelectedConsoleLog,
            repeated: true
        },
        {
            no: 17,
            name: "git_commits",
            kind: "message",
            T: SelectedGitCommit,
            repeated: true
        },
        {
            no: 19,
            name: "past_chats",
            kind: "message",
            T: SelectedPastChat,
            repeated: true
        },
        {
            no: 20,
            name: "git_pr_diff_selections",
            kind: "message",
            T: SelectedGitPRDiffSelection,
            repeated: true
        },
        {
            no: 21,
            name: "selected_pull_requests",
            kind: "message",
            T: SelectedPullRequest,
            repeated: true
        },
        {
            no: 22,
            name: "selected_subagents",
            kind: "message",
            T: SelectedSubagent,
            repeated: true
        },
        {
            no: 23,
            name: "selected_videos",
            kind: "message",
            T: SelectedVideo,
            repeated: true
        },
        {
            no: 24,
            name: "selected_browsers",
            kind: "message",
            T: SelectedBrowser,
            repeated: true
        },
        {
            no: 25,
            name: "selected_documents",
            kind: "message",
            T: SelectedDocument,
            repeated: true
        },
        {
            no: 26,
            name: "selected_skills",
            kind: "message",
            T: AgentSkill,
            repeated: true
        },
        {
            no: 27,
            name: "recent_agents_context",
            kind: "message",
            T: RecentAgentsContext,
            opt: true
        },
        {
            no: 34,
            name: "selected_agentic_git_action",
            kind: "message",
            T: SelectedAgenticGitAction,
            opt: true
        }
    ]);
var InvocationContext$Runtime = (()=>class _InvocationContext extends Message {
        constructor(data){
            super();
            this.data = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _InvocationContext().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _InvocationContext().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _InvocationContext().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_InvocationContext, a, b2);
        }
    })();
var InvocationContext = InvocationContext$Runtime;
InvocationContext.runtime = proto3;
InvocationContext.typeName = "agent.v1.InvocationContext";
InvocationContext.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "slack_thread",
            kind: "message",
            T: InvocationContext_SlackThread,
            oneof: "data"
        },
        {
            no: 2,
            name: "github_pr",
            kind: "message",
            T: InvocationContext_GithubPR,
            oneof: "data"
        },
        {
            no: 3,
            name: "ide_state",
            kind: "message",
            T: InvocationContext_IdeState,
            oneof: "data"
        },
        {
            no: 4,
            name: "microsoft_teams_thread",
            kind: "message",
            T: InvocationContext_MicrosoftTeamsThread,
            oneof: "data"
        },
        {
            no: 10,
            name: "blob_id",
            kind: "scalar",
            T: 12,
            oneof: "data"
        }
    ]);
var InvocationContext_SlackThread$Runtime = (()=>class _InvocationContext_SlackThread extends Message {
        constructor(data){
            super();
            this.thread = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _InvocationContext_SlackThread().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _InvocationContext_SlackThread().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _InvocationContext_SlackThread().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_InvocationContext_SlackThread, a, b2);
        }
    })();
var InvocationContext_SlackThread = InvocationContext_SlackThread$Runtime;
InvocationContext_SlackThread.runtime = proto3;
InvocationContext_SlackThread.typeName = "agent.v1.InvocationContext.SlackThread";
InvocationContext_SlackThread.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "thread",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "channel_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "channel_purpose",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "channel_topic",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "sender_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "sender_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "sender_type",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "is_directly_addressed",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
var InvocationContext_MicrosoftTeamsThread$Runtime = (()=>class _InvocationContext_MicrosoftTeamsThread extends Message {
        constructor(data){
            super();
            this.thread = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _InvocationContext_MicrosoftTeamsThread().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _InvocationContext_MicrosoftTeamsThread().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _InvocationContext_MicrosoftTeamsThread().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_InvocationContext_MicrosoftTeamsThread, a, b2);
        }
    })();
var InvocationContext_MicrosoftTeamsThread = InvocationContext_MicrosoftTeamsThread$Runtime;
InvocationContext_MicrosoftTeamsThread.runtime = proto3;
InvocationContext_MicrosoftTeamsThread.typeName = "agent.v1.InvocationContext.MicrosoftTeamsThread";
InvocationContext_MicrosoftTeamsThread.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "thread",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "channel_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "team_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "channel_description",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "team_description",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var InvocationContext_GithubPR$Runtime = (()=>class _InvocationContext_GithubPR extends Message {
        constructor(data){
            super();
            this.title = "";
            this.description = "";
            this.comments = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _InvocationContext_GithubPR().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _InvocationContext_GithubPR().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _InvocationContext_GithubPR().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_InvocationContext_GithubPR, a, b2);
        }
    })();
var InvocationContext_GithubPR = InvocationContext_GithubPR$Runtime;
InvocationContext_GithubPR.runtime = proto3;
InvocationContext_GithubPR.typeName = "agent.v1.InvocationContext.GithubPR";
InvocationContext_GithubPR.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "title",
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
            name: "comments",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "ci_failures",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var InvocationContext_IdeState$Runtime = (()=>class _InvocationContext_IdeState extends Message {
        constructor(data){
            super();
            this.visibleFiles = [];
            this.recentlyViewedFiles = [];
            this.currentlyViewedPrs = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _InvocationContext_IdeState().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _InvocationContext_IdeState().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _InvocationContext_IdeState().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_InvocationContext_IdeState, a, b2);
        }
    })();
var InvocationContext_IdeState = InvocationContext_IdeState$Runtime;
InvocationContext_IdeState.runtime = proto3;
InvocationContext_IdeState.typeName = "agent.v1.InvocationContext.IdeState";
InvocationContext_IdeState.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "visible_files",
            kind: "message",
            T: InvocationContext_IdeState_File,
            repeated: true
        },
        {
            no: 2,
            name: "recently_viewed_files",
            kind: "message",
            T: InvocationContext_IdeState_File,
            repeated: true
        },
        {
            no: 3,
            name: "currently_viewed_prs",
            kind: "message",
            T: InvocationContext_IdeState_ViewedPullRequest,
            repeated: true
        }
    ]);
var InvocationContext_IdeState_File$Runtime = (()=>class _InvocationContext_IdeState_File extends Message {
        constructor(data){
            super();
            this.path = "";
            this.totalLines = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _InvocationContext_IdeState_File().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _InvocationContext_IdeState_File().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _InvocationContext_IdeState_File().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_InvocationContext_IdeState_File, a, b2);
        }
    })();
var InvocationContext_IdeState_File = InvocationContext_IdeState_File$Runtime;
InvocationContext_IdeState_File.runtime = proto3;
InvocationContext_IdeState_File.typeName = "agent.v1.InvocationContext.IdeState.File";
InvocationContext_IdeState_File.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "relative_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "cursor_position",
            kind: "message",
            T: InvocationContext_IdeState_File_CursorPosition,
            opt: true
        },
        {
            no: 4,
            name: "total_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "active_command",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var InvocationContext_IdeState_File_CursorPosition$Runtime = (()=>class _InvocationContext_IdeState_File_CursorPosition extends Message {
        constructor(data){
            super();
            this.line = 0;
            this.text = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _InvocationContext_IdeState_File_CursorPosition().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _InvocationContext_IdeState_File_CursorPosition().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _InvocationContext_IdeState_File_CursorPosition().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_InvocationContext_IdeState_File_CursorPosition, a, b2);
        }
    })();
var InvocationContext_IdeState_File_CursorPosition = InvocationContext_IdeState_File_CursorPosition$Runtime;
InvocationContext_IdeState_File_CursorPosition.runtime = proto3;
InvocationContext_IdeState_File_CursorPosition.typeName = "agent.v1.InvocationContext.IdeState.File.CursorPosition";
InvocationContext_IdeState_File_CursorPosition.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "line",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]);
var InvocationContext_IdeState_ViewedPullRequest$Runtime = (()=>class _InvocationContext_IdeState_ViewedPullRequest extends Message {
        constructor(data){
            super();
            this.number = 0;
            this.url = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _InvocationContext_IdeState_ViewedPullRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _InvocationContext_IdeState_ViewedPullRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _InvocationContext_IdeState_ViewedPullRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_InvocationContext_IdeState_ViewedPullRequest, a, b2);
        }
    })();
var InvocationContext_IdeState_ViewedPullRequest = InvocationContext_IdeState_ViewedPullRequest$Runtime;
InvocationContext_IdeState_ViewedPullRequest.runtime = proto3;
InvocationContext_IdeState_ViewedPullRequest.typeName = "agent.v1.InvocationContext.IdeState.ViewedPullRequest";
InvocationContext_IdeState_ViewedPullRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "folder_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "summary_json",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
export { CallFrame, ExtraContextEntry, InvocationContext, InvocationContext_GithubPR, InvocationContext_IdeState, InvocationContext_IdeState_File, InvocationContext_IdeState_File_CursorPosition, InvocationContext_IdeState_ViewedPullRequest, InvocationContext_MicrosoftTeamsThread, InvocationContext_SlackThread, PromptUploadRef, RecentAgent, RecentAgentsContext, SelectedAgenticGitAction, SelectedAgenticGitActionBabysitPrInCloudParams, SelectedAgenticGitActionCommitParams, SelectedAgenticGitActionCreateBranchParams, SelectedAgenticGitActionFixMergeConflictsParams, SelectedAgenticGitActionPullLocallyParams, SelectedAgenticGitActionPushParams, SelectedAgenticGitActionUpdateBranchParams, SelectedAgenticGitFileWithStatus, SelectedBrowser, SelectedCodeSelection, SelectedConsoleLog, SelectedContext, SelectedCursorCommand, SelectedCursorRule, SelectedDocument, SelectedDocument_BlobIdWithData, SelectedDocumentation, SelectedExternalLink, SelectedFile, SelectedFolder, SelectedGitBranchContext, SelectedGitCommit, SelectedGitDiff, SelectedGitDiffFromBranchToMain, SelectedGitPRDiffSelection, SelectedImage, SelectedImage_BlobIdWithData, SelectedImage_Dimension, SelectedPastChat, SelectedPluginCapabilityRef, SelectedPluginCapabilityType, SelectedPullRequest, SelectedSubagent, SelectedTerminal, SelectedTerminalSelection, SelectedUIElement, SelectedVideo, SelectedVideo_BlobIdWithData, SelectedVideo_SignedUrl, StackTrace };
