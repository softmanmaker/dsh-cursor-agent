import { Message, proto3 } from "@bufbuild/protobuf";
import { SimpleRange } from "./utils_pb.js";
var CodeSymbolWithAction_CodeSymbolAction;
var CreateExperimentalIndexRequest$Runtime = (()=>class _CreateExperimentalIndexRequest extends Message {
        constructor(data){
            super();
            this.files = [];
            this.targetDir = "";
            this.repo = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CreateExperimentalIndexRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CreateExperimentalIndexRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CreateExperimentalIndexRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CreateExperimentalIndexRequest, a, b2);
        }
    })();
var CreateExperimentalIndexRequest = CreateExperimentalIndexRequest$Runtime;
CreateExperimentalIndexRequest.runtime = proto3;
CreateExperimentalIndexRequest.typeName = "aiserver.v1.CreateExperimentalIndexRequest";
CreateExperimentalIndexRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "files",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "target_dir",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "repo",
            kind: "scalar",
            T: 9
        }
    ]);
var CreateExperimentalIndexResponse$Runtime = (()=>class _CreateExperimentalIndexResponse extends Message {
        constructor(data){
            super();
            this.indexId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CreateExperimentalIndexResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CreateExperimentalIndexResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CreateExperimentalIndexResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CreateExperimentalIndexResponse, a, b2);
        }
    })();
var CreateExperimentalIndexResponse = CreateExperimentalIndexResponse$Runtime;
CreateExperimentalIndexResponse.runtime = proto3;
CreateExperimentalIndexResponse.typeName = "aiserver.v1.CreateExperimentalIndexResponse";
CreateExperimentalIndexResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        }
    ]);
var ListExperimentalIndexFilesRequest$Runtime = (()=>class _ListExperimentalIndexFilesRequest extends Message {
        constructor(data){
            super();
            this.indexId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ListExperimentalIndexFilesRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ListExperimentalIndexFilesRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ListExperimentalIndexFilesRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ListExperimentalIndexFilesRequest, a, b2);
        }
    })();
var ListExperimentalIndexFilesRequest = ListExperimentalIndexFilesRequest$Runtime;
ListExperimentalIndexFilesRequest.runtime = proto3;
ListExperimentalIndexFilesRequest.typeName = "aiserver.v1.ListExperimentalIndexFilesRequest";
ListExperimentalIndexFilesRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        }
    ]);
var ListExperimentalIndexFilesResponse$Runtime = (()=>class _ListExperimentalIndexFilesResponse extends Message {
        constructor(data){
            super();
            this.indexId = "";
            this.files = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ListExperimentalIndexFilesResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ListExperimentalIndexFilesResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ListExperimentalIndexFilesResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ListExperimentalIndexFilesResponse, a, b2);
        }
    })();
var ListExperimentalIndexFilesResponse = ListExperimentalIndexFilesResponse$Runtime;
ListExperimentalIndexFilesResponse.runtime = proto3;
ListExperimentalIndexFilesResponse.typeName = "aiserver.v1.ListExperimentalIndexFilesResponse";
ListExperimentalIndexFilesResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "files",
            kind: "message",
            T: IndexFileData,
            repeated: true
        }
    ]);
var ListenExperimentalIndexRequest$Runtime = (()=>class _ListenExperimentalIndexRequest extends Message {
        constructor(data){
            super();
            this.indexId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ListenExperimentalIndexRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ListenExperimentalIndexRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ListenExperimentalIndexRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ListenExperimentalIndexRequest, a, b2);
        }
    })();
var ListenExperimentalIndexRequest = ListenExperimentalIndexRequest$Runtime;
ListenExperimentalIndexRequest.runtime = proto3;
ListenExperimentalIndexRequest.typeName = "aiserver.v1.ListenExperimentalIndexRequest";
ListenExperimentalIndexRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        }
    ]);
var ListenExperimentalIndexResponse$Runtime = (()=>class _ListenExperimentalIndexResponse extends Message {
        constructor(data){
            super();
            this.indexId = "";
            this.item = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ListenExperimentalIndexResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ListenExperimentalIndexResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ListenExperimentalIndexResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ListenExperimentalIndexResponse, a, b2);
        }
    })();
var ListenExperimentalIndexResponse = ListenExperimentalIndexResponse$Runtime;
ListenExperimentalIndexResponse.runtime = proto3;
ListenExperimentalIndexResponse.typeName = "aiserver.v1.ListenExperimentalIndexResponse";
ListenExperimentalIndexResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "ready",
            kind: "message",
            T: ListenExperimentalIndexResponse_ReadyItem,
            oneof: "item"
        },
        {
            no: 3,
            name: "register",
            kind: "message",
            T: ListenExperimentalIndexResponse_RegisterItem,
            oneof: "item"
        },
        {
            no: 4,
            name: "choose",
            kind: "message",
            T: ListenExperimentalIndexResponse_ChooseItem,
            oneof: "item"
        },
        {
            no: 5,
            name: "summarize",
            kind: "message",
            T: ListenExperimentalIndexResponse_SummarizeItem,
            oneof: "item"
        },
        {
            no: 6,
            name: "error",
            kind: "message",
            T: ListenExperimentalIndexResponse_ErrorItem,
            oneof: "item"
        }
    ]);
var ListenExperimentalIndexResponse_ReadyItem$Runtime = (()=>class _ListenExperimentalIndexResponse_ReadyItem extends Message {
        constructor(data){
            super();
            this.indexId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ListenExperimentalIndexResponse_ReadyItem().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ListenExperimentalIndexResponse_ReadyItem().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ListenExperimentalIndexResponse_ReadyItem().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ListenExperimentalIndexResponse_ReadyItem, a, b2);
        }
    })();
var ListenExperimentalIndexResponse_ReadyItem = ListenExperimentalIndexResponse_ReadyItem$Runtime;
ListenExperimentalIndexResponse_ReadyItem.runtime = proto3;
ListenExperimentalIndexResponse_ReadyItem.typeName = "aiserver.v1.ListenExperimentalIndexResponse.ReadyItem";
ListenExperimentalIndexResponse_ReadyItem.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "request",
            kind: "message",
            T: ListenExperimentalIndexRequest
        }
    ]);
var ListenExperimentalIndexResponse_RegisterItem$Runtime = (()=>class _ListenExperimentalIndexResponse_RegisterItem extends Message {
        constructor(data){
            super();
            this.reqUuid = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ListenExperimentalIndexResponse_RegisterItem().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ListenExperimentalIndexResponse_RegisterItem().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ListenExperimentalIndexResponse_RegisterItem().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ListenExperimentalIndexResponse_RegisterItem, a, b2);
        }
    })();
var ListenExperimentalIndexResponse_RegisterItem = ListenExperimentalIndexResponse_RegisterItem$Runtime;
ListenExperimentalIndexResponse_RegisterItem.runtime = proto3;
ListenExperimentalIndexResponse_RegisterItem.typeName = "aiserver.v1.ListenExperimentalIndexResponse.RegisterItem";
ListenExperimentalIndexResponse_RegisterItem.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "response",
            kind: "message",
            T: RegisterFileToIndexResponse
        },
        {
            no: 2,
            name: "request",
            kind: "message",
            T: RegisterFileToIndexRequest
        },
        {
            no: 3,
            name: "req_uuid",
            kind: "scalar",
            T: 9
        }
    ]);
var ListenExperimentalIndexResponse_ChooseItem$Runtime = (()=>class _ListenExperimentalIndexResponse_ChooseItem extends Message {
        constructor(data){
            super();
            this.reqUuid = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ListenExperimentalIndexResponse_ChooseItem().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ListenExperimentalIndexResponse_ChooseItem().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ListenExperimentalIndexResponse_ChooseItem().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ListenExperimentalIndexResponse_ChooseItem, a, b2);
        }
    })();
var ListenExperimentalIndexResponse_ChooseItem = ListenExperimentalIndexResponse_ChooseItem$Runtime;
ListenExperimentalIndexResponse_ChooseItem.runtime = proto3;
ListenExperimentalIndexResponse_ChooseItem.typeName = "aiserver.v1.ListenExperimentalIndexResponse.ChooseItem";
ListenExperimentalIndexResponse_ChooseItem.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "response",
            kind: "message",
            T: ChooseCodeReferencesResponse
        },
        {
            no: 2,
            name: "request",
            kind: "message",
            T: ChooseCodeReferencesRequest
        },
        {
            no: 3,
            name: "req_uuid",
            kind: "scalar",
            T: 9
        }
    ]);
var ListenExperimentalIndexResponse_SummarizeItem$Runtime = (()=>class _ListenExperimentalIndexResponse_SummarizeItem extends Message {
        constructor(data){
            super();
            this.reqUuid = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ListenExperimentalIndexResponse_SummarizeItem().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ListenExperimentalIndexResponse_SummarizeItem().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ListenExperimentalIndexResponse_SummarizeItem().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ListenExperimentalIndexResponse_SummarizeItem, a, b2);
        }
    })();
var ListenExperimentalIndexResponse_SummarizeItem = ListenExperimentalIndexResponse_SummarizeItem$Runtime;
ListenExperimentalIndexResponse_SummarizeItem.runtime = proto3;
ListenExperimentalIndexResponse_SummarizeItem.typeName = "aiserver.v1.ListenExperimentalIndexResponse.SummarizeItem";
ListenExperimentalIndexResponse_SummarizeItem.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "response",
            kind: "message",
            T: SummarizeWithReferencesResponse
        },
        {
            no: 2,
            name: "request",
            kind: "message",
            T: SummarizeWithReferencesRequest
        },
        {
            no: 3,
            name: "req_uuid",
            kind: "scalar",
            T: 9
        }
    ]);
var ListenExperimentalIndexResponse_ErrorItem$Runtime = (()=>class _ListenExperimentalIndexResponse_ErrorItem extends Message {
        constructor(data){
            super();
            this.message = "";
            this.statusCode = 0;
            this.request = {
                case: void 0
            };
            this.reqUuid = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ListenExperimentalIndexResponse_ErrorItem().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ListenExperimentalIndexResponse_ErrorItem().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ListenExperimentalIndexResponse_ErrorItem().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ListenExperimentalIndexResponse_ErrorItem, a, b2);
        }
    })();
var ListenExperimentalIndexResponse_ErrorItem = ListenExperimentalIndexResponse_ErrorItem$Runtime;
ListenExperimentalIndexResponse_ErrorItem.runtime = proto3;
ListenExperimentalIndexResponse_ErrorItem.typeName = "aiserver.v1.ListenExperimentalIndexResponse.ErrorItem";
ListenExperimentalIndexResponse_ErrorItem.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "status_code",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "register",
            kind: "message",
            T: RegisterFileToIndexRequest,
            oneof: "request"
        },
        {
            no: 4,
            name: "choose",
            kind: "message",
            T: ChooseCodeReferencesRequest,
            oneof: "request"
        },
        {
            no: 5,
            name: "summarize",
            kind: "message",
            T: SummarizeWithReferencesRequest,
            oneof: "request"
        },
        {
            no: 6,
            name: "req_uuid",
            kind: "scalar",
            T: 9
        }
    ]);
var RegisterFileToIndexRequest$Runtime = (()=>class _RegisterFileToIndexRequest extends Message {
        constructor(data){
            super();
            this.indexId = "";
            this.workspaceRelativePath = "";
            this.content = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RegisterFileToIndexRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RegisterFileToIndexRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RegisterFileToIndexRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RegisterFileToIndexRequest, a, b2);
        }
    })();
var RegisterFileToIndexRequest = RegisterFileToIndexRequest$Runtime;
RegisterFileToIndexRequest.runtime = proto3;
RegisterFileToIndexRequest.typeName = "aiserver.v1.RegisterFileToIndexRequest";
RegisterFileToIndexRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "workspace_relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "root_context_node",
            kind: "message",
            T: SerializedContextNode
        },
        {
            no: 4,
            name: "content",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var RegisterFileToIndexResponse$Runtime = (()=>class _RegisterFileToIndexResponse extends Message {
        constructor(data){
            super();
            this.fileId = "";
            this.rootContextNodeId = "";
            this.dependencyResolutionAttempts = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RegisterFileToIndexResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RegisterFileToIndexResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RegisterFileToIndexResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RegisterFileToIndexResponse, a, b2);
        }
    })();
var RegisterFileToIndexResponse = RegisterFileToIndexResponse$Runtime;
RegisterFileToIndexResponse.runtime = proto3;
RegisterFileToIndexResponse.typeName = "aiserver.v1.RegisterFileToIndexResponse";
RegisterFileToIndexResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "file_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "root_context_node_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "dependency_resolution_attempts",
            kind: "message",
            T: URIResolutionAttempt,
            repeated: true
        },
        {
            no: 4,
            name: "file_data",
            kind: "message",
            T: IndexFileData
        }
    ]);
var SetupIndexDependenciesRequest$Runtime = (()=>class _SetupIndexDependenciesRequest extends Message {
        constructor(data){
            super();
            this.indexId = "";
            this.fileId = "";
            this.dependencyResolutionResults = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SetupIndexDependenciesRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SetupIndexDependenciesRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SetupIndexDependenciesRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SetupIndexDependenciesRequest, a, b2);
        }
    })();
var SetupIndexDependenciesRequest = SetupIndexDependenciesRequest$Runtime;
SetupIndexDependenciesRequest.runtime = proto3;
SetupIndexDependenciesRequest.typeName = "aiserver.v1.SetupIndexDependenciesRequest";
SetupIndexDependenciesRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "file_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "dependency_resolution_results",
            kind: "message",
            T: URIResolutionResult,
            repeated: true
        }
    ]);
var SetupIndexDependenciesResponse$Runtime = (()=>class _SetupIndexDependenciesResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SetupIndexDependenciesResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SetupIndexDependenciesResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SetupIndexDependenciesResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SetupIndexDependenciesResponse, a, b2);
        }
    })();
var SetupIndexDependenciesResponse = SetupIndexDependenciesResponse$Runtime;
SetupIndexDependenciesResponse.runtime = proto3;
SetupIndexDependenciesResponse.typeName = "aiserver.v1.SetupIndexDependenciesResponse";
SetupIndexDependenciesResponse.fields = proto3.util.newFieldList(()=>[]);
var ComputeIndexTopoSortRequest$Runtime = (()=>class _ComputeIndexTopoSortRequest extends Message {
        constructor(data){
            super();
            this.indexId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ComputeIndexTopoSortRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ComputeIndexTopoSortRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ComputeIndexTopoSortRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ComputeIndexTopoSortRequest, a, b2);
        }
    })();
var ComputeIndexTopoSortRequest = ComputeIndexTopoSortRequest$Runtime;
ComputeIndexTopoSortRequest.runtime = proto3;
ComputeIndexTopoSortRequest.typeName = "aiserver.v1.ComputeIndexTopoSortRequest";
ComputeIndexTopoSortRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        }
    ]);
var ComputeIndexTopoSortResponse$Runtime = (()=>class _ComputeIndexTopoSortResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ComputeIndexTopoSortResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ComputeIndexTopoSortResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ComputeIndexTopoSortResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ComputeIndexTopoSortResponse, a, b2);
        }
    })();
var ComputeIndexTopoSortResponse = ComputeIndexTopoSortResponse$Runtime;
ComputeIndexTopoSortResponse.runtime = proto3;
ComputeIndexTopoSortResponse.typeName = "aiserver.v1.ComputeIndexTopoSortResponse";
ComputeIndexTopoSortResponse.fields = proto3.util.newFieldList(()=>[]);
var ChooseCodeReferencesRequest$Runtime = (()=>class _ChooseCodeReferencesRequest extends Message {
        constructor(data){
            super();
            this.indexId = "";
            this.request = {
                case: void 0
            };
            this.recompute = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ChooseCodeReferencesRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ChooseCodeReferencesRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ChooseCodeReferencesRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ChooseCodeReferencesRequest, a, b2);
        }
    })();
var ChooseCodeReferencesRequest = ChooseCodeReferencesRequest$Runtime;
ChooseCodeReferencesRequest.runtime = proto3;
ChooseCodeReferencesRequest.typeName = "aiserver.v1.ChooseCodeReferencesRequest";
ChooseCodeReferencesRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file",
            kind: "message",
            T: ChooseCodeReferencesRequest_FileRequest,
            oneof: "request"
        },
        {
            no: 3,
            name: "node",
            kind: "message",
            T: ChooseCodeReferencesRequest_NodeRequest,
            oneof: "request"
        },
        {
            no: 4,
            name: "recompute",
            kind: "scalar",
            T: 8
        }
    ]);
var ChooseCodeReferencesRequest_FileRequest$Runtime = (()=>class _ChooseCodeReferencesRequest_FileRequest extends Message {
        constructor(data){
            super();
            this.fileId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ChooseCodeReferencesRequest_FileRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ChooseCodeReferencesRequest_FileRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ChooseCodeReferencesRequest_FileRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ChooseCodeReferencesRequest_FileRequest, a, b2);
        }
    })();
var ChooseCodeReferencesRequest_FileRequest = ChooseCodeReferencesRequest_FileRequest$Runtime;
ChooseCodeReferencesRequest_FileRequest.runtime = proto3;
ChooseCodeReferencesRequest_FileRequest.typeName = "aiserver.v1.ChooseCodeReferencesRequest.FileRequest";
ChooseCodeReferencesRequest_FileRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "file_id",
            kind: "scalar",
            T: 9
        }
    ]);
var ChooseCodeReferencesRequest_NodeRequest$Runtime = (()=>class _ChooseCodeReferencesRequest_NodeRequest extends Message {
        constructor(data){
            super();
            this.nodeId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ChooseCodeReferencesRequest_NodeRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ChooseCodeReferencesRequest_NodeRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ChooseCodeReferencesRequest_NodeRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ChooseCodeReferencesRequest_NodeRequest, a, b2);
        }
    })();
var ChooseCodeReferencesRequest_NodeRequest = ChooseCodeReferencesRequest_NodeRequest$Runtime;
ChooseCodeReferencesRequest_NodeRequest.runtime = proto3;
ChooseCodeReferencesRequest_NodeRequest.typeName = "aiserver.v1.ChooseCodeReferencesRequest.NodeRequest";
ChooseCodeReferencesRequest_NodeRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "node_id",
            kind: "scalar",
            T: 9
        }
    ]);
var ChooseCodeReferencesResponse$Runtime = (()=>class _ChooseCodeReferencesResponse extends Message {
        constructor(data){
            super();
            this.response = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ChooseCodeReferencesResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ChooseCodeReferencesResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ChooseCodeReferencesResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ChooseCodeReferencesResponse, a, b2);
        }
    })();
var ChooseCodeReferencesResponse = ChooseCodeReferencesResponse$Runtime;
ChooseCodeReferencesResponse.runtime = proto3;
ChooseCodeReferencesResponse.typeName = "aiserver.v1.ChooseCodeReferencesResponse";
ChooseCodeReferencesResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "file",
            kind: "message",
            T: ChooseCodeReferencesResponse_FileResponse,
            oneof: "response"
        },
        {
            no: 2,
            name: "node",
            kind: "message",
            T: ChooseCodeReferencesResponse_NodeResponse,
            oneof: "response"
        }
    ]);
var ChooseCodeReferencesResponse_NodeResponse$Runtime = (()=>class _ChooseCodeReferencesResponse_NodeResponse extends Message {
        constructor(data){
            super();
            this.nodeId = "";
            this.actions = [];
            this.skipped = false;
            this.dependencies = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ChooseCodeReferencesResponse_NodeResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ChooseCodeReferencesResponse_NodeResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ChooseCodeReferencesResponse_NodeResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ChooseCodeReferencesResponse_NodeResponse, a, b2);
        }
    })();
var ChooseCodeReferencesResponse_NodeResponse = ChooseCodeReferencesResponse_NodeResponse$Runtime;
ChooseCodeReferencesResponse_NodeResponse.runtime = proto3;
ChooseCodeReferencesResponse_NodeResponse.typeName = "aiserver.v1.ChooseCodeReferencesResponse.NodeResponse";
ChooseCodeReferencesResponse_NodeResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "node_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "actions",
            kind: "message",
            T: CodeSymbolWithAction,
            repeated: true
        },
        {
            no: 3,
            name: "skipped",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "dependencies",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var ChooseCodeReferencesResponse_FileResponse$Runtime = (()=>class _ChooseCodeReferencesResponse_FileResponse extends Message {
        constructor(data){
            super();
            this.fileId = "";
            this.nodeResponses = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ChooseCodeReferencesResponse_FileResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ChooseCodeReferencesResponse_FileResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ChooseCodeReferencesResponse_FileResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ChooseCodeReferencesResponse_FileResponse, a, b2);
        }
    })();
var ChooseCodeReferencesResponse_FileResponse = ChooseCodeReferencesResponse_FileResponse$Runtime;
ChooseCodeReferencesResponse_FileResponse.runtime = proto3;
ChooseCodeReferencesResponse_FileResponse.typeName = "aiserver.v1.ChooseCodeReferencesResponse.FileResponse";
ChooseCodeReferencesResponse_FileResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "file_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "node_responses",
            kind: "message",
            T: ChooseCodeReferencesResponse_NodeResponse,
            repeated: true
        }
    ]);
var RegisterCodeReferencesRequest$Runtime = (()=>class _RegisterCodeReferencesRequest extends Message {
        constructor(data){
            super();
            this.nodeId = "";
            this.references = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RegisterCodeReferencesRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RegisterCodeReferencesRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RegisterCodeReferencesRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RegisterCodeReferencesRequest, a, b2);
        }
    })();
var RegisterCodeReferencesRequest = RegisterCodeReferencesRequest$Runtime;
RegisterCodeReferencesRequest.runtime = proto3;
RegisterCodeReferencesRequest.typeName = "aiserver.v1.RegisterCodeReferencesRequest";
RegisterCodeReferencesRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "node_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "references",
            kind: "message",
            T: SymbolActionResults,
            repeated: true
        }
    ]);
var RegisterCodeReferencesResponse$Runtime = (()=>class _RegisterCodeReferencesResponse extends Message {
        constructor(data){
            super();
            this.dependencies = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RegisterCodeReferencesResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RegisterCodeReferencesResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RegisterCodeReferencesResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RegisterCodeReferencesResponse, a, b2);
        }
    })();
var RegisterCodeReferencesResponse = RegisterCodeReferencesResponse$Runtime;
RegisterCodeReferencesResponse.runtime = proto3;
RegisterCodeReferencesResponse.typeName = "aiserver.v1.RegisterCodeReferencesResponse";
RegisterCodeReferencesResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "dependencies",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var SummarizeWithReferencesRequest$Runtime = (()=>class _SummarizeWithReferencesRequest extends Message {
        constructor(data){
            super();
            this.indexId = "";
            this.nodeId = "";
            this.recompute = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SummarizeWithReferencesRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SummarizeWithReferencesRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SummarizeWithReferencesRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SummarizeWithReferencesRequest, a, b2);
        }
    })();
var SummarizeWithReferencesRequest = SummarizeWithReferencesRequest$Runtime;
SummarizeWithReferencesRequest.runtime = proto3;
SummarizeWithReferencesRequest.typeName = "aiserver.v1.SummarizeWithReferencesRequest";
SummarizeWithReferencesRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "node_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "recompute",
            kind: "scalar",
            T: 8
        }
    ]);
var SummarizeWithReferencesResponse$Runtime = (()=>class _SummarizeWithReferencesResponse extends Message {
        constructor(data){
            super();
            this.response = {
                case: void 0
            };
            this.nodeId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SummarizeWithReferencesResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SummarizeWithReferencesResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SummarizeWithReferencesResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SummarizeWithReferencesResponse, a, b2);
        }
    })();
var SummarizeWithReferencesResponse = SummarizeWithReferencesResponse$Runtime;
SummarizeWithReferencesResponse.runtime = proto3;
SummarizeWithReferencesResponse.typeName = "aiserver.v1.SummarizeWithReferencesResponse";
SummarizeWithReferencesResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: SummarizeWithReferencesResponse_Success,
            oneof: "response"
        },
        {
            no: 2,
            name: "dependency",
            kind: "message",
            T: SummarizeWithReferencesResponse_Dependency,
            oneof: "response"
        },
        {
            no: 3,
            name: "node_id",
            kind: "scalar",
            T: 9
        }
    ]);
var SummarizeWithReferencesResponse_Success$Runtime = (()=>class _SummarizeWithReferencesResponse_Success extends Message {
        constructor(data){
            super();
            this.summary = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SummarizeWithReferencesResponse_Success().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SummarizeWithReferencesResponse_Success().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SummarizeWithReferencesResponse_Success().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SummarizeWithReferencesResponse_Success, a, b2);
        }
    })();
var SummarizeWithReferencesResponse_Success = SummarizeWithReferencesResponse_Success$Runtime;
SummarizeWithReferencesResponse_Success.runtime = proto3;
SummarizeWithReferencesResponse_Success.typeName = "aiserver.v1.SummarizeWithReferencesResponse.Success";
SummarizeWithReferencesResponse_Success.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        }
    ]);
var SummarizeWithReferencesResponse_Dependency$Runtime = (()=>class _SummarizeWithReferencesResponse_Dependency extends Message {
        constructor(data){
            super();
            this.nodes = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SummarizeWithReferencesResponse_Dependency().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SummarizeWithReferencesResponse_Dependency().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SummarizeWithReferencesResponse_Dependency().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SummarizeWithReferencesResponse_Dependency, a, b2);
        }
    })();
var SummarizeWithReferencesResponse_Dependency = SummarizeWithReferencesResponse_Dependency$Runtime;
SummarizeWithReferencesResponse_Dependency.runtime = proto3;
SummarizeWithReferencesResponse_Dependency.typeName = "aiserver.v1.SummarizeWithReferencesResponse.Dependency";
SummarizeWithReferencesResponse_Dependency.fields = proto3.util.newFieldList(()=>[
        {
            no: 2,
            name: "nodes",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var RequestReceivedResponse$Runtime = (()=>class _RequestReceivedResponse extends Message {
        constructor(data){
            super();
            this.reqUuid = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RequestReceivedResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RequestReceivedResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RequestReceivedResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RequestReceivedResponse, a, b2);
        }
    })();
var RequestReceivedResponse = RequestReceivedResponse$Runtime;
RequestReceivedResponse.runtime = proto3;
RequestReceivedResponse.typeName = "aiserver.v1.RequestReceivedResponse";
RequestReceivedResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "req_uuid",
            kind: "scalar",
            T: 9
        }
    ]);
var ReflectionData$Runtime = (()=>class _ReflectionData extends Message {
        constructor(data){
            super();
            this.indexId = "";
            this.id = "";
            this.summary = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReflectionData().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReflectionData().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReflectionData().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReflectionData, a, b2);
        }
    })();
var ReflectionData = ReflectionData$Runtime;
ReflectionData.runtime = proto3;
ReflectionData.typeName = "aiserver.v1.ReflectionData";
ReflectionData.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "summary",
            kind: "scalar",
            T: 9
        }
    ]);
var IndexFileData$Runtime = (()=>class _IndexFileData extends Message {
        constructor(data){
            super();
            this.indexId = "";
            this.workspaceRelativePath = "";
            this.stage = "";
            this.order = 0;
            this.nodes = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _IndexFileData().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _IndexFileData().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _IndexFileData().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_IndexFileData, a, b2);
        }
    })();
var IndexFileData = IndexFileData$Runtime;
IndexFileData.runtime = proto3;
IndexFileData.typeName = "aiserver.v1.IndexFileData";
IndexFileData.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "workspace_relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "stage",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "order",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "nodes",
            kind: "message",
            T: IndexFileData_NodeData,
            repeated: true
        }
    ]);
var IndexFileData_NodeData$Runtime = (()=>class _IndexFileData_NodeData extends Message {
        constructor(data){
            super();
            this.nodeId = "";
            this.stage = "";
            this.content = "";
            this.summary = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _IndexFileData_NodeData().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _IndexFileData_NodeData().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _IndexFileData_NodeData().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_IndexFileData_NodeData, a, b2);
        }
    })();
var IndexFileData_NodeData = IndexFileData_NodeData$Runtime;
IndexFileData_NodeData.runtime = proto3;
IndexFileData_NodeData.typeName = "aiserver.v1.IndexFileData.NodeData";
IndexFileData_NodeData.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "node_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "stage",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "summary",
            kind: "scalar",
            T: 9
        }
    ]);
var SerializedContextNode$Runtime = (()=>class _SerializedContextNode extends Message {
        constructor(data){
            super();
            this.workspaceRelativePath = "";
            this.startLineNumber = 0;
            this.endLineNumber = 0;
            this.children = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SerializedContextNode().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SerializedContextNode().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SerializedContextNode().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SerializedContextNode, a, b2);
        }
    })();
var SerializedContextNode = SerializedContextNode$Runtime;
SerializedContextNode.runtime = proto3;
SerializedContextNode.typeName = "aiserver.v1.SerializedContextNode";
SerializedContextNode.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "workspace_relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "end_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "children",
            kind: "message",
            T: SerializedContextNode,
            repeated: true
        },
        {
            no: 5,
            name: "node_snippets",
            kind: "message",
            T: FileCodeSnippets
        }
    ]);
var URIResolutionAttempt$Runtime = (()=>class _URIResolutionAttempt extends Message {
        constructor(data){
            super();
            this.workspaceRelativePath = "";
            this.nodeId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _URIResolutionAttempt().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _URIResolutionAttempt().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _URIResolutionAttempt().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_URIResolutionAttempt, a, b2);
        }
    })();
var URIResolutionAttempt = URIResolutionAttempt$Runtime;
URIResolutionAttempt.runtime = proto3;
URIResolutionAttempt.typeName = "aiserver.v1.URIResolutionAttempt";
URIResolutionAttempt.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "workspace_relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "node_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "symbol",
            kind: "message",
            T: CodeSymbolWithAction
        }
    ]);
var URIResolutionResult$Runtime = (()=>class _URIResolutionResult extends Message {
        constructor(data){
            super();
            this.resolvedPaths = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _URIResolutionResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _URIResolutionResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _URIResolutionResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_URIResolutionResult, a, b2);
        }
    })();
var URIResolutionResult = URIResolutionResult$Runtime;
URIResolutionResult.runtime = proto3;
URIResolutionResult.typeName = "aiserver.v1.URIResolutionResult";
URIResolutionResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "request",
            kind: "message",
            T: URIResolutionAttempt
        },
        {
            no: 2,
            name: "resolved_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var ExtractPathsRequest$Runtime = (()=>class _ExtractPathsRequest extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ExtractPathsRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ExtractPathsRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ExtractPathsRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ExtractPathsRequest, a, b2);
        }
    })();
var ExtractPathsRequest = ExtractPathsRequest$Runtime;
ExtractPathsRequest.runtime = proto3;
ExtractPathsRequest.typeName = "aiserver.v1.ExtractPathsRequest";
ExtractPathsRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "file_code_snippets",
            kind: "message",
            T: FileCodeSnippets
        }
    ]);
var ExtractPathsResponse$Runtime = (()=>class _ExtractPathsResponse extends Message {
        constructor(data){
            super();
            this.paths = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ExtractPathsResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ExtractPathsResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ExtractPathsResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ExtractPathsResponse, a, b2);
        }
    })();
var ExtractPathsResponse = ExtractPathsResponse$Runtime;
ExtractPathsResponse.runtime = proto3;
ExtractPathsResponse.typeName = "aiserver.v1.ExtractPathsResponse";
ExtractPathsResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "paths",
            kind: "message",
            T: CodeSymbolWithAction,
            repeated: true
        }
    ]);
var SymbolActionResults$Runtime = (()=>class _SymbolActionResults extends Message {
        constructor(data){
            super();
            this.references = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SymbolActionResults().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SymbolActionResults().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SymbolActionResults().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SymbolActionResults, a, b2);
        }
    })();
var SymbolActionResults = SymbolActionResults$Runtime;
SymbolActionResults.runtime = proto3;
SymbolActionResults.typeName = "aiserver.v1.SymbolActionResults";
SymbolActionResults.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "action",
            kind: "message",
            T: CodeSymbolWithAction
        },
        {
            no: 2,
            name: "references",
            kind: "message",
            T: SymbolActionResultReference,
            repeated: true
        }
    ]);
var SymbolActionResultReference$Runtime = (()=>class _SymbolActionResultReference extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SymbolActionResultReference().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SymbolActionResultReference().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SymbolActionResultReference().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SymbolActionResultReference, a, b2);
        }
    })();
var SymbolActionResultReference = SymbolActionResultReference$Runtime;
SymbolActionResultReference.runtime = proto3;
SymbolActionResultReference.typeName = "aiserver.v1.SymbolActionResultReference";
SymbolActionResultReference.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "range",
            kind: "message",
            T: SimpleRange
        },
        {
            no: 2,
            name: "reference",
            kind: "message",
            T: FileCodeSnippets
        }
    ]);
var FileCodeSnippets$Runtime = (()=>class _FileCodeSnippets extends Message {
        constructor(data){
            super();
            this.relativeWorkspacePath = "";
            this.totalLines = 0;
            this.snippets = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FileCodeSnippets().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FileCodeSnippets().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FileCodeSnippets().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FileCodeSnippets, a, b2);
        }
    })();
var FileCodeSnippets = FileCodeSnippets$Runtime;
FileCodeSnippets.runtime = proto3;
FileCodeSnippets.typeName = "aiserver.v1.FileCodeSnippets";
FileCodeSnippets.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "total_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "snippets",
            kind: "message",
            T: CodeSnippet,
            repeated: true
        }
    ]);
var CodeSnippet$Runtime = (()=>class _CodeSnippet extends Message {
        constructor(data){
            super();
            this.startLineNumber = 0;
            this.endLineNumber = 0;
            this.lines = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CodeSnippet().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CodeSnippet().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CodeSnippet().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CodeSnippet, a, b2);
        }
    })();
var CodeSnippet = CodeSnippet$Runtime;
CodeSnippet.runtime = proto3;
CodeSnippet.typeName = "aiserver.v1.CodeSnippet";
CodeSnippet.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "end_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "lines",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var CodeSymbolWithAction$Runtime = (()=>class _CodeSymbolWithAction extends Message {
        constructor(data){
            super();
            this.workspaceRelativePath = "";
            this.lineNumber = 0;
            this.symbolStartColumn = 0;
            this.symbolEndColumn = 0;
            this.action = CodeSymbolWithAction_CodeSymbolAction.UNSPECIFIED;
            this.symbol = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CodeSymbolWithAction().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CodeSymbolWithAction().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CodeSymbolWithAction().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CodeSymbolWithAction, a, b2);
        }
    })();
var CodeSymbolWithAction = CodeSymbolWithAction$Runtime;
CodeSymbolWithAction.runtime = proto3;
CodeSymbolWithAction.typeName = "aiserver.v1.CodeSymbolWithAction";
CodeSymbolWithAction.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "workspace_relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "symbol_start_column",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "symbol_end_column",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "action",
            kind: "enum",
            T: proto3.getEnumType(CodeSymbolWithAction_CodeSymbolAction)
        },
        {
            no: 6,
            name: "symbol",
            kind: "scalar",
            T: 9
        }
    ]);
(function(CodeSymbolWithAction_CodeSymbolAction2) {
    CodeSymbolWithAction_CodeSymbolAction2[CodeSymbolWithAction_CodeSymbolAction2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    CodeSymbolWithAction_CodeSymbolAction2[CodeSymbolWithAction_CodeSymbolAction2["GO_TO_DEFINITION"] = 1] = "GO_TO_DEFINITION";
    CodeSymbolWithAction_CodeSymbolAction2[CodeSymbolWithAction_CodeSymbolAction2["GO_TO_IMPLEMENTATION"] = 2] = "GO_TO_IMPLEMENTATION";
    CodeSymbolWithAction_CodeSymbolAction2[CodeSymbolWithAction_CodeSymbolAction2["REFERENCES"] = 3] = "REFERENCES";
})(CodeSymbolWithAction_CodeSymbolAction || (CodeSymbolWithAction_CodeSymbolAction = {}));
proto3.util.setEnumType(CodeSymbolWithAction_CodeSymbolAction, "aiserver.v1.CodeSymbolWithAction.CodeSymbolAction", [
    {
        no: 0,
        name: "CODE_SYMBOL_ACTION_UNSPECIFIED"
    },
    {
        no: 1,
        name: "CODE_SYMBOL_ACTION_GO_TO_DEFINITION"
    },
    {
        no: 2,
        name: "CODE_SYMBOL_ACTION_GO_TO_IMPLEMENTATION"
    },
    {
        no: 3,
        name: "CODE_SYMBOL_ACTION_REFERENCES"
    }
]);
export { ChooseCodeReferencesRequest, ChooseCodeReferencesRequest_FileRequest, ChooseCodeReferencesRequest_NodeRequest, ChooseCodeReferencesResponse, ChooseCodeReferencesResponse_FileResponse, ChooseCodeReferencesResponse_NodeResponse, CodeSnippet, CodeSymbolWithAction, CodeSymbolWithAction_CodeSymbolAction, ComputeIndexTopoSortRequest, ComputeIndexTopoSortResponse, CreateExperimentalIndexRequest, CreateExperimentalIndexResponse, ExtractPathsRequest, ExtractPathsResponse, FileCodeSnippets, IndexFileData, IndexFileData_NodeData, ListExperimentalIndexFilesRequest, ListExperimentalIndexFilesResponse, ListenExperimentalIndexRequest, ListenExperimentalIndexResponse, ListenExperimentalIndexResponse_ChooseItem, ListenExperimentalIndexResponse_ErrorItem, ListenExperimentalIndexResponse_ReadyItem, ListenExperimentalIndexResponse_RegisterItem, ListenExperimentalIndexResponse_SummarizeItem, ReflectionData, RegisterCodeReferencesRequest, RegisterCodeReferencesResponse, RegisterFileToIndexRequest, RegisterFileToIndexResponse, RequestReceivedResponse, SerializedContextNode, SetupIndexDependenciesRequest, SetupIndexDependenciesResponse, SummarizeWithReferencesRequest, SummarizeWithReferencesResponse, SummarizeWithReferencesResponse_Dependency, SummarizeWithReferencesResponse_Success, SymbolActionResultReference, SymbolActionResults, URIResolutionAttempt, URIResolutionResult };
