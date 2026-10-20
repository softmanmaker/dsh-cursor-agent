import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { CodeBlock, DetailedLine, EmbeddingModel, File2, ModelDetails, SimpleRange } from "./utils_pb.js";
import { IndexFileData_NodeData, ReflectionData } from "./symbolic_context_pb.js";
var ChunkingStrategy;
var SimilarityMetricType;
var PathKeyHashType;
var RerankerAlgorithm;
var DatabaseProvider;
var RechunkerChoice;
var FastRepoInitHandshakeResponse_Status;
var RepositoryCodebaseInfo_Status;
var FastRepoInitHandshakeV2Response_Status;
var RepositoryCodebaseSyncStatus_Status;
var FastUpdateFileRequest_UpdateType;
var FastUpdateFileResponse_Status;
var FastUpdateFileV2Request_UpdateType;
var FastUpdateFileV2Response_Status;
var StartUploadRepoResponse_Status;
var UploadFileResponse_Status;
var FinishUploadRepoResponse_Status;
var StartUpdateRepoResponse_Status;
var UpdateFileResponse_Status;
var FinishUpdateRepoResponse_Status;
var UnsubscribeRepositoryResponse_Status;
var LogoutResponse_Status;
var RemoveRepositoryResponse_Status;
var SubscribeRepositoryResponse_Status;
var PollLoginResponse_Status;
var UpgradeScopeResponse_Status;
var UploadRepositoryResponse_Status;
var GetCopyStatusResponse_Phase;
var GetCopyStatusResponse_CompletedStatus;
var RepoHistoryInitHandshakeResponse_Status;
var RepoHistorySyncOneResponse_Status;
var RepoHistorySyncCompleteRequest_Status;
var RemoveRepoHistoryResponse_Status;
var GetPRIndexingStatusResponse_Status;
(function(ChunkingStrategy2) {
    ChunkingStrategy2[ChunkingStrategy2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    ChunkingStrategy2[ChunkingStrategy2["DEFAULT"] = 1] = "DEFAULT";
})(ChunkingStrategy || (ChunkingStrategy = {}));
proto3.util.setEnumType(ChunkingStrategy, "aiserver.v1.ChunkingStrategy", [
    {
        no: 0,
        name: "CHUNKING_STRATEGY_UNSPECIFIED"
    },
    {
        no: 1,
        name: "CHUNKING_STRATEGY_DEFAULT"
    }
]);
(function(SimilarityMetricType2) {
    SimilarityMetricType2[SimilarityMetricType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    SimilarityMetricType2[SimilarityMetricType2["SIMHASH"] = 1] = "SIMHASH";
})(SimilarityMetricType || (SimilarityMetricType = {}));
proto3.util.setEnumType(SimilarityMetricType, "aiserver.v1.SimilarityMetricType", [
    {
        no: 0,
        name: "SIMILARITY_METRIC_TYPE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "SIMILARITY_METRIC_TYPE_SIMHASH"
    }
]);
(function(PathKeyHashType2) {
    PathKeyHashType2[PathKeyHashType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    PathKeyHashType2[PathKeyHashType2["SHA256"] = 1] = "SHA256";
})(PathKeyHashType || (PathKeyHashType = {}));
proto3.util.setEnumType(PathKeyHashType, "aiserver.v1.PathKeyHashType", [
    {
        no: 0,
        name: "PATH_KEY_HASH_TYPE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "PATH_KEY_HASH_TYPE_SHA256"
    }
]);
(function(RerankerAlgorithm2) {
    RerankerAlgorithm2[RerankerAlgorithm2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    RerankerAlgorithm2[RerankerAlgorithm2["LULEA"] = 1] = "LULEA";
    RerankerAlgorithm2[RerankerAlgorithm2["UMEA"] = 2] = "UMEA";
    RerankerAlgorithm2[RerankerAlgorithm2["NONE"] = 3] = "NONE";
    RerankerAlgorithm2[RerankerAlgorithm2["LLAMA"] = 4] = "LLAMA";
    RerankerAlgorithm2[RerankerAlgorithm2["STARCODER_V1"] = 5] = "STARCODER_V1";
    RerankerAlgorithm2[RerankerAlgorithm2["GPT_3_5_LOGPROBS"] = 6] = "GPT_3_5_LOGPROBS";
    RerankerAlgorithm2[RerankerAlgorithm2["LULEA_HAIKU"] = 7] = "LULEA_HAIKU";
    RerankerAlgorithm2[RerankerAlgorithm2["COHERE"] = 8] = "COHERE";
    RerankerAlgorithm2[RerankerAlgorithm2["VOYAGE"] = 9] = "VOYAGE";
    RerankerAlgorithm2[RerankerAlgorithm2["VOYAGE_EMBEDS"] = 10] = "VOYAGE_EMBEDS";
    RerankerAlgorithm2[RerankerAlgorithm2["IDENTITY"] = 11] = "IDENTITY";
    RerankerAlgorithm2[RerankerAlgorithm2["ADA_EMBEDS"] = 12] = "ADA_EMBEDS";
})(RerankerAlgorithm || (RerankerAlgorithm = {}));
proto3.util.setEnumType(RerankerAlgorithm, "aiserver.v1.RerankerAlgorithm", [
    {
        no: 0,
        name: "RERANKER_ALGORITHM_UNSPECIFIED"
    },
    {
        no: 1,
        name: "RERANKER_ALGORITHM_LULEA"
    },
    {
        no: 2,
        name: "RERANKER_ALGORITHM_UMEA"
    },
    {
        no: 3,
        name: "RERANKER_ALGORITHM_NONE"
    },
    {
        no: 4,
        name: "RERANKER_ALGORITHM_LLAMA"
    },
    {
        no: 5,
        name: "RERANKER_ALGORITHM_STARCODER_V1"
    },
    {
        no: 6,
        name: "RERANKER_ALGORITHM_GPT_3_5_LOGPROBS"
    },
    {
        no: 7,
        name: "RERANKER_ALGORITHM_LULEA_HAIKU"
    },
    {
        no: 8,
        name: "RERANKER_ALGORITHM_COHERE"
    },
    {
        no: 9,
        name: "RERANKER_ALGORITHM_VOYAGE"
    },
    {
        no: 10,
        name: "RERANKER_ALGORITHM_VOYAGE_EMBEDS"
    },
    {
        no: 11,
        name: "RERANKER_ALGORITHM_IDENTITY"
    },
    {
        no: 12,
        name: "RERANKER_ALGORITHM_ADA_EMBEDS"
    }
]);
(function(DatabaseProvider2) {
    DatabaseProvider2[DatabaseProvider2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    DatabaseProvider2[DatabaseProvider2["AURORA"] = 1] = "AURORA";
    DatabaseProvider2[DatabaseProvider2["PLANETSCALE"] = 2] = "PLANETSCALE";
})(DatabaseProvider || (DatabaseProvider = {}));
proto3.util.setEnumType(DatabaseProvider, "aiserver.v1.DatabaseProvider", [
    {
        no: 0,
        name: "DATABASE_PROVIDER_UNSPECIFIED"
    },
    {
        no: 1,
        name: "DATABASE_PROVIDER_AURORA"
    },
    {
        no: 2,
        name: "DATABASE_PROVIDER_PLANETSCALE"
    }
]);
(function(RechunkerChoice2) {
    RechunkerChoice2[RechunkerChoice2["RECHUNKER_CHOICE_UNSPECIFIED"] = 0] = "RECHUNKER_CHOICE_UNSPECIFIED";
    RechunkerChoice2[RechunkerChoice2["RECHUNKER_CHOICE_IDENTITY"] = 1] = "RECHUNKER_CHOICE_IDENTITY";
    RechunkerChoice2[RechunkerChoice2["RECHUNKER_CHOICE_600_TOKS"] = 2] = "RECHUNKER_CHOICE_600_TOKS";
    RechunkerChoice2[RechunkerChoice2["RECHUNKER_CHOICE_2400_TOKS"] = 3] = "RECHUNKER_CHOICE_2400_TOKS";
    RechunkerChoice2[RechunkerChoice2["RECHUNKER_CHOICE_4000_TOKS"] = 4] = "RECHUNKER_CHOICE_4000_TOKS";
})(RechunkerChoice || (RechunkerChoice = {}));
proto3.util.setEnumType(RechunkerChoice, "aiserver.v1.RechunkerChoice", [
    {
        no: 0,
        name: "RECHUNKER_CHOICE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "RECHUNKER_CHOICE_IDENTITY"
    },
    {
        no: 2,
        name: "RECHUNKER_CHOICE_600_TOKS"
    },
    {
        no: 3,
        name: "RECHUNKER_CHOICE_2400_TOKS"
    },
    {
        no: 4,
        name: "RECHUNKER_CHOICE_4000_TOKS"
    }
]);
var GetHighLevelFolderDescriptionRequest$Runtime = (()=>class _GetHighLevelFolderDescriptionRequest extends Message {
        constructor(data){
            super();
            this.readmes = [];
            this.topLevelRelativeWorkspacePaths = [];
            this.workspaceRootPath = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetHighLevelFolderDescriptionRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetHighLevelFolderDescriptionRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetHighLevelFolderDescriptionRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetHighLevelFolderDescriptionRequest, a, b2);
        }
    })();
var GetHighLevelFolderDescriptionRequest = GetHighLevelFolderDescriptionRequest$Runtime;
GetHighLevelFolderDescriptionRequest.runtime = proto3;
GetHighLevelFolderDescriptionRequest.typeName = "aiserver.v1.GetHighLevelFolderDescriptionRequest";
GetHighLevelFolderDescriptionRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "readmes",
            kind: "message",
            T: GetHighLevelFolderDescriptionRequest_Readme,
            repeated: true
        },
        {
            no: 2,
            name: "top_level_relative_workspace_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 4,
            name: "workspace_root_path",
            kind: "scalar",
            T: 9
        }
    ]);
var GetHighLevelFolderDescriptionRequest_Readme$Runtime = (()=>class _GetHighLevelFolderDescriptionRequest_Readme extends Message {
        constructor(data){
            super();
            this.relativeWorkspacePath = "";
            this.contents = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetHighLevelFolderDescriptionRequest_Readme().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetHighLevelFolderDescriptionRequest_Readme().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetHighLevelFolderDescriptionRequest_Readme().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetHighLevelFolderDescriptionRequest_Readme, a, b2);
        }
    })();
var GetHighLevelFolderDescriptionRequest_Readme = GetHighLevelFolderDescriptionRequest_Readme$Runtime;
GetHighLevelFolderDescriptionRequest_Readme.runtime = proto3;
GetHighLevelFolderDescriptionRequest_Readme.typeName = "aiserver.v1.GetHighLevelFolderDescriptionRequest.Readme";
GetHighLevelFolderDescriptionRequest_Readme.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "contents",
            kind: "scalar",
            T: 9
        }
    ]);
var GetHighLevelFolderDescriptionResponse$Runtime = (()=>class _GetHighLevelFolderDescriptionResponse extends Message {
        constructor(data){
            super();
            this.description = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetHighLevelFolderDescriptionResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetHighLevelFolderDescriptionResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetHighLevelFolderDescriptionResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetHighLevelFolderDescriptionResponse, a, b2);
        }
    })();
var GetHighLevelFolderDescriptionResponse = GetHighLevelFolderDescriptionResponse$Runtime;
GetHighLevelFolderDescriptionResponse.runtime = proto3;
GetHighLevelFolderDescriptionResponse.typeName = "aiserver.v1.GetHighLevelFolderDescriptionResponse";
GetHighLevelFolderDescriptionResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "description",
            kind: "scalar",
            T: 9
        }
    ]);
var EnsureIndexCreatedRequest$Runtime = (()=>class _EnsureIndexCreatedRequest extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _EnsureIndexCreatedRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _EnsureIndexCreatedRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _EnsureIndexCreatedRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_EnsureIndexCreatedRequest, a, b2);
        }
    })();
var EnsureIndexCreatedRequest = EnsureIndexCreatedRequest$Runtime;
EnsureIndexCreatedRequest.runtime = proto3;
EnsureIndexCreatedRequest.typeName = "aiserver.v1.EnsureIndexCreatedRequest";
EnsureIndexCreatedRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        }
    ]);
var EnsureIndexCreatedResponse$Runtime = (()=>class _EnsureIndexCreatedResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _EnsureIndexCreatedResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _EnsureIndexCreatedResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _EnsureIndexCreatedResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_EnsureIndexCreatedResponse, a, b2);
        }
    })();
var EnsureIndexCreatedResponse = EnsureIndexCreatedResponse$Runtime;
EnsureIndexCreatedResponse.runtime = proto3;
EnsureIndexCreatedResponse.typeName = "aiserver.v1.EnsureIndexCreatedResponse";
EnsureIndexCreatedResponse.fields = proto3.util.newFieldList(()=>[]);
var PartialPathItem$Runtime = (()=>class _PartialPathItem extends Message {
        constructor(data){
            super();
            this.relativeWorkspacePath = "";
            this.hashOfNode = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PartialPathItem().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PartialPathItem().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PartialPathItem().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PartialPathItem, a, b2);
        }
    })();
var PartialPathItem = PartialPathItem$Runtime;
PartialPathItem.runtime = proto3;
PartialPathItem.typeName = "aiserver.v1.PartialPathItem";
PartialPathItem.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "hash_of_node",
            kind: "scalar",
            T: 9
        }
    ]);
var FastRepoInitHandshakeRequest$Runtime = (()=>class _FastRepoInitHandshakeRequest extends Message {
        constructor(data){
            super();
            this.rootHash = "";
            this.potentialLegacyRepoName = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FastRepoInitHandshakeRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FastRepoInitHandshakeRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FastRepoInitHandshakeRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FastRepoInitHandshakeRequest, a, b2);
        }
    })();
var FastRepoInitHandshakeRequest = FastRepoInitHandshakeRequest$Runtime;
FastRepoInitHandshakeRequest.runtime = proto3;
FastRepoInitHandshakeRequest.typeName = "aiserver.v1.FastRepoInitHandshakeRequest";
FastRepoInitHandshakeRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        },
        {
            no: 2,
            name: "root_hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "potential_legacy_repo_name",
            kind: "scalar",
            T: 9
        }
    ]);
var FastRepoInitHandshakeResponse$Runtime = (()=>class _FastRepoInitHandshakeResponse extends Message {
        constructor(data){
            super();
            this.status = FastRepoInitHandshakeResponse_Status.UNSPECIFIED;
            this.repoName = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FastRepoInitHandshakeResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FastRepoInitHandshakeResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FastRepoInitHandshakeResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FastRepoInitHandshakeResponse, a, b2);
        }
    })();
var FastRepoInitHandshakeResponse = FastRepoInitHandshakeResponse$Runtime;
FastRepoInitHandshakeResponse.runtime = proto3;
FastRepoInitHandshakeResponse.typeName = "aiserver.v1.FastRepoInitHandshakeResponse";
FastRepoInitHandshakeResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(FastRepoInitHandshakeResponse_Status)
        },
        {
            no: 2,
            name: "repo_name",
            kind: "scalar",
            T: 9
        }
    ]);
(function(FastRepoInitHandshakeResponse_Status2) {
    FastRepoInitHandshakeResponse_Status2[FastRepoInitHandshakeResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    FastRepoInitHandshakeResponse_Status2[FastRepoInitHandshakeResponse_Status2["UP_TO_DATE"] = 1] = "UP_TO_DATE";
    FastRepoInitHandshakeResponse_Status2[FastRepoInitHandshakeResponse_Status2["OUT_OF_SYNC"] = 2] = "OUT_OF_SYNC";
    FastRepoInitHandshakeResponse_Status2[FastRepoInitHandshakeResponse_Status2["FAILURE"] = 3] = "FAILURE";
    FastRepoInitHandshakeResponse_Status2[FastRepoInitHandshakeResponse_Status2["EMPTY"] = 4] = "EMPTY";
})(FastRepoInitHandshakeResponse_Status || (FastRepoInitHandshakeResponse_Status = {}));
proto3.util.setEnumType(FastRepoInitHandshakeResponse_Status, "aiserver.v1.FastRepoInitHandshakeResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_UP_TO_DATE"
    },
    {
        no: 2,
        name: "STATUS_OUT_OF_SYNC"
    },
    {
        no: 3,
        name: "STATUS_FAILURE"
    },
    {
        no: 4,
        name: "STATUS_EMPTY"
    }
]);
var LocalCodebaseFileInfo$Runtime = (()=>class _LocalCodebaseFileInfo extends Message {
        constructor(data){
            super();
            this.encryptedRelativePath = "";
            this.hash = "";
            this.children = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _LocalCodebaseFileInfo().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _LocalCodebaseFileInfo().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _LocalCodebaseFileInfo().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_LocalCodebaseFileInfo, a, b2);
        }
    })();
var LocalCodebaseFileInfo = LocalCodebaseFileInfo$Runtime;
LocalCodebaseFileInfo.runtime = proto3;
LocalCodebaseFileInfo.typeName = "aiserver.v1.LocalCodebaseFileInfo";
LocalCodebaseFileInfo.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "encrypted_relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "children",
            kind: "message",
            T: LocalCodebaseFileInfo,
            repeated: true
        },
        {
            no: 4,
            name: "separator",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var FastRepoInitHandshakeV2Request$Runtime = (()=>class _FastRepoInitHandshakeV2Request extends Message {
        constructor(data){
            super();
            this.rootHash = "";
            this.similarityMetricType = SimilarityMetricType.UNSPECIFIED;
            this.similarityMetric = [];
            this.pathKeyHash = "";
            this.pathKeyHashType = PathKeyHashType.UNSPECIFIED;
            this.doCopy = false;
            this.pathKey = "";
            this.returnAfterBackgroundCopyStarted = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FastRepoInitHandshakeV2Request().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FastRepoInitHandshakeV2Request().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FastRepoInitHandshakeV2Request().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FastRepoInitHandshakeV2Request, a, b2);
        }
    })();
var FastRepoInitHandshakeV2Request = FastRepoInitHandshakeV2Request$Runtime;
FastRepoInitHandshakeV2Request.runtime = proto3;
FastRepoInitHandshakeV2Request.typeName = "aiserver.v1.FastRepoInitHandshakeV2Request";
FastRepoInitHandshakeV2Request.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        },
        {
            no: 2,
            name: "root_hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "similarity_metric_type",
            kind: "enum",
            T: proto3.getEnumType(SimilarityMetricType)
        },
        {
            no: 4,
            name: "similarity_metric",
            kind: "scalar",
            T: 2,
            repeated: true
        },
        {
            no: 5,
            name: "path_key_hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "path_key_hash_type",
            kind: "enum",
            T: proto3.getEnumType(PathKeyHashType)
        },
        {
            no: 7,
            name: "do_copy",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "path_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "local_codebase_root_info",
            kind: "message",
            T: LocalCodebaseFileInfo
        },
        {
            no: 10,
            name: "return_after_background_copy_started",
            kind: "scalar",
            T: 8
        }
    ]);
var QueryOnlyRepositoryInfo$Runtime = (()=>class _QueryOnlyRepositoryInfo extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _QueryOnlyRepositoryInfo().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _QueryOnlyRepositoryInfo().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _QueryOnlyRepositoryInfo().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_QueryOnlyRepositoryInfo, a, b2);
        }
    })();
var QueryOnlyRepositoryInfo = QueryOnlyRepositoryInfo$Runtime;
QueryOnlyRepositoryInfo.runtime = proto3;
QueryOnlyRepositoryInfo.typeName = "aiserver.v1.QueryOnlyRepositoryInfo";
QueryOnlyRepositoryInfo.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        },
        {
            no: 2,
            name: "query_only_repo_access",
            kind: "message",
            T: QueryOnlyRepoAccess
        }
    ]);
var RepositoryCodebaseInfo$Runtime = (()=>class _RepositoryCodebaseInfo extends Message {
        constructor(data){
            super();
            this.codebaseId = "";
            this.status = RepositoryCodebaseInfo_Status.UNSPECIFIED;
            this.copyTaskHandle = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RepositoryCodebaseInfo().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RepositoryCodebaseInfo().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RepositoryCodebaseInfo().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RepositoryCodebaseInfo, a, b2);
        }
    })();
var RepositoryCodebaseInfo = RepositoryCodebaseInfo$Runtime;
RepositoryCodebaseInfo.runtime = proto3;
RepositoryCodebaseInfo.typeName = "aiserver.v1.RepositoryCodebaseInfo";
RepositoryCodebaseInfo.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "codebase_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(RepositoryCodebaseInfo_Status)
        },
        {
            no: 3,
            name: "query_only_similar_repo",
            kind: "message",
            T: QueryOnlyRepositoryInfo
        },
        {
            no: 4,
            name: "copy_task_handle",
            kind: "scalar",
            T: 9
        }
    ]);
(function(RepositoryCodebaseInfo_Status2) {
    RepositoryCodebaseInfo_Status2[RepositoryCodebaseInfo_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    RepositoryCodebaseInfo_Status2[RepositoryCodebaseInfo_Status2["UP_TO_DATE"] = 1] = "UP_TO_DATE";
    RepositoryCodebaseInfo_Status2[RepositoryCodebaseInfo_Status2["OUT_OF_SYNC"] = 2] = "OUT_OF_SYNC";
    RepositoryCodebaseInfo_Status2[RepositoryCodebaseInfo_Status2["EMPTY"] = 3] = "EMPTY";
    RepositoryCodebaseInfo_Status2[RepositoryCodebaseInfo_Status2["EMPTY_WITH_COPY_AVAILABLE"] = 4] = "EMPTY_WITH_COPY_AVAILABLE";
    RepositoryCodebaseInfo_Status2[RepositoryCodebaseInfo_Status2["COPY_IN_PROGRESS"] = 5] = "COPY_IN_PROGRESS";
})(RepositoryCodebaseInfo_Status || (RepositoryCodebaseInfo_Status = {}));
proto3.util.setEnumType(RepositoryCodebaseInfo_Status, "aiserver.v1.RepositoryCodebaseInfo.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_UP_TO_DATE"
    },
    {
        no: 2,
        name: "STATUS_OUT_OF_SYNC"
    },
    {
        no: 3,
        name: "STATUS_EMPTY"
    },
    {
        no: 4,
        name: "STATUS_EMPTY_WITH_COPY_AVAILABLE"
    },
    {
        no: 5,
        name: "STATUS_COPY_IN_PROGRESS"
    }
]);
var FastRepoInitHandshakeV2Response$Runtime = (()=>class _FastRepoInitHandshakeV2Response extends Message {
        constructor(data){
            super();
            this.status = FastRepoInitHandshakeV2Response_Status.UNSPECIFIED;
            this.codebases = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FastRepoInitHandshakeV2Response().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FastRepoInitHandshakeV2Response().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FastRepoInitHandshakeV2Response().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FastRepoInitHandshakeV2Response, a, b2);
        }
    })();
var FastRepoInitHandshakeV2Response = FastRepoInitHandshakeV2Response$Runtime;
FastRepoInitHandshakeV2Response.runtime = proto3;
FastRepoInitHandshakeV2Response.typeName = "aiserver.v1.FastRepoInitHandshakeV2Response";
FastRepoInitHandshakeV2Response.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(FastRepoInitHandshakeV2Response_Status)
        },
        {
            no: 2,
            name: "codebases",
            kind: "message",
            T: RepositoryCodebaseInfo,
            repeated: true
        }
    ]);
(function(FastRepoInitHandshakeV2Response_Status2) {
    FastRepoInitHandshakeV2Response_Status2[FastRepoInitHandshakeV2Response_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    FastRepoInitHandshakeV2Response_Status2[FastRepoInitHandshakeV2Response_Status2["FAILURE"] = 1] = "FAILURE";
    FastRepoInitHandshakeV2Response_Status2[FastRepoInitHandshakeV2Response_Status2["SUCCESS"] = 2] = "SUCCESS";
})(FastRepoInitHandshakeV2Response_Status || (FastRepoInitHandshakeV2Response_Status = {}));
proto3.util.setEnumType(FastRepoInitHandshakeV2Response_Status, "aiserver.v1.FastRepoInitHandshakeV2Response.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_FAILURE"
    },
    {
        no: 2,
        name: "STATUS_SUCCESS"
    }
]);
var RepositoryCodebaseSyncStatus$Runtime = (()=>class _RepositoryCodebaseSyncStatus extends Message {
        constructor(data){
            super();
            this.codebaseId = "";
            this.status = RepositoryCodebaseSyncStatus_Status.UNSPECIFIED;
            this.similarityMetricType = SimilarityMetricType.UNSPECIFIED;
            this.similarityMetric = [];
            this.pathKeyHash = "";
            this.pathKeyHashType = PathKeyHashType.UNSPECIFIED;
            this.failedUploadCount = 0;
            this.failedDeleteCount = 0;
            this.totalUploadCount = 0;
            this.totalDeleteCount = 0;
            this.failedSubtreeCount = 0;
            this.totalSubtreeCount = 0;
            this.hitIterationLimit = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RepositoryCodebaseSyncStatus().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RepositoryCodebaseSyncStatus().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RepositoryCodebaseSyncStatus().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RepositoryCodebaseSyncStatus, a, b2);
        }
    })();
var RepositoryCodebaseSyncStatus = RepositoryCodebaseSyncStatus$Runtime;
RepositoryCodebaseSyncStatus.runtime = proto3;
RepositoryCodebaseSyncStatus.typeName = "aiserver.v1.RepositoryCodebaseSyncStatus";
RepositoryCodebaseSyncStatus.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "codebase_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(RepositoryCodebaseSyncStatus_Status)
        },
        {
            no: 3,
            name: "similarity_metric_type",
            kind: "enum",
            T: proto3.getEnumType(SimilarityMetricType)
        },
        {
            no: 4,
            name: "similarity_metric",
            kind: "scalar",
            T: 2,
            repeated: true
        },
        {
            no: 5,
            name: "path_key_hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "path_key_hash_type",
            kind: "enum",
            T: proto3.getEnumType(PathKeyHashType)
        },
        {
            no: 7,
            name: "failed_upload_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 8,
            name: "failed_delete_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 9,
            name: "total_upload_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 10,
            name: "total_delete_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 11,
            name: "failed_subtree_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 12,
            name: "total_subtree_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 13,
            name: "hit_iteration_limit",
            kind: "scalar",
            T: 8
        }
    ]);
(function(RepositoryCodebaseSyncStatus_Status2) {
    RepositoryCodebaseSyncStatus_Status2[RepositoryCodebaseSyncStatus_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    RepositoryCodebaseSyncStatus_Status2[RepositoryCodebaseSyncStatus_Status2["SUCCESS"] = 1] = "SUCCESS";
    RepositoryCodebaseSyncStatus_Status2[RepositoryCodebaseSyncStatus_Status2["FAILURE"] = 2] = "FAILURE";
})(RepositoryCodebaseSyncStatus_Status || (RepositoryCodebaseSyncStatus_Status = {}));
proto3.util.setEnumType(RepositoryCodebaseSyncStatus_Status, "aiserver.v1.RepositoryCodebaseSyncStatus.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_SUCCESS"
    },
    {
        no: 2,
        name: "STATUS_FAILURE"
    }
]);
var FastRepoSyncCompleteRequest$Runtime = (()=>class _FastRepoSyncCompleteRequest extends Message {
        constructor(data){
            super();
            this.codebases = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FastRepoSyncCompleteRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FastRepoSyncCompleteRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FastRepoSyncCompleteRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FastRepoSyncCompleteRequest, a, b2);
        }
    })();
var FastRepoSyncCompleteRequest = FastRepoSyncCompleteRequest$Runtime;
FastRepoSyncCompleteRequest.runtime = proto3;
FastRepoSyncCompleteRequest.typeName = "aiserver.v1.FastRepoSyncCompleteRequest";
FastRepoSyncCompleteRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "codebases",
            kind: "message",
            T: RepositoryCodebaseSyncStatus,
            repeated: true
        }
    ]);
var FastRepoSyncCompleteResponse$Runtime = (()=>class _FastRepoSyncCompleteResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FastRepoSyncCompleteResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FastRepoSyncCompleteResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FastRepoSyncCompleteResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FastRepoSyncCompleteResponse, a, b2);
        }
    })();
var FastRepoSyncCompleteResponse = FastRepoSyncCompleteResponse$Runtime;
FastRepoSyncCompleteResponse.runtime = proto3;
FastRepoSyncCompleteResponse.typeName = "aiserver.v1.FastRepoSyncCompleteResponse";
FastRepoSyncCompleteResponse.fields = proto3.util.newFieldList(()=>[]);
var SyncMerkleSubtreeRequest$Runtime = (()=>class _SyncMerkleSubtreeRequest extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SyncMerkleSubtreeRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SyncMerkleSubtreeRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SyncMerkleSubtreeRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SyncMerkleSubtreeRequest, a, b2);
        }
    })();
var SyncMerkleSubtreeRequest = SyncMerkleSubtreeRequest$Runtime;
SyncMerkleSubtreeRequest.runtime = proto3;
SyncMerkleSubtreeRequest.typeName = "aiserver.v1.SyncMerkleSubtreeRequest";
SyncMerkleSubtreeRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        },
        {
            no: 2,
            name: "local_partial_path",
            kind: "message",
            T: PartialPathItem
        }
    ]);
var SyncMerkleSubtreeResponse$Runtime = (()=>class _SyncMerkleSubtreeResponse extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SyncMerkleSubtreeResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SyncMerkleSubtreeResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SyncMerkleSubtreeResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SyncMerkleSubtreeResponse, a, b2);
        }
    })();
var SyncMerkleSubtreeResponse = SyncMerkleSubtreeResponse$Runtime;
SyncMerkleSubtreeResponse.runtime = proto3;
SyncMerkleSubtreeResponse.typeName = "aiserver.v1.SyncMerkleSubtreeResponse";
SyncMerkleSubtreeResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "match",
            kind: "scalar",
            T: 8,
            oneof: "result"
        },
        {
            no: 2,
            name: "mismatch",
            kind: "message",
            T: SyncMerkleSubtreeResponse_Mismatch,
            oneof: "result"
        }
    ]);
var SyncMerkleSubtreeResponse_Mismatch$Runtime = (()=>class _SyncMerkleSubtreeResponse_Mismatch extends Message {
        constructor(data){
            super();
            this.children = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SyncMerkleSubtreeResponse_Mismatch().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SyncMerkleSubtreeResponse_Mismatch().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SyncMerkleSubtreeResponse_Mismatch().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SyncMerkleSubtreeResponse_Mismatch, a, b2);
        }
    })();
var SyncMerkleSubtreeResponse_Mismatch = SyncMerkleSubtreeResponse_Mismatch$Runtime;
SyncMerkleSubtreeResponse_Mismatch.runtime = proto3;
SyncMerkleSubtreeResponse_Mismatch.typeName = "aiserver.v1.SyncMerkleSubtreeResponse.Mismatch";
SyncMerkleSubtreeResponse_Mismatch.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "children",
            kind: "message",
            T: PartialPathItem,
            repeated: true
        }
    ]);
var ClientRepositoryInfo$Runtime = (()=>class _ClientRepositoryInfo extends Message {
        constructor(data){
            super();
            this.orthogonalTransformSeed = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ClientRepositoryInfo().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ClientRepositoryInfo().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ClientRepositoryInfo().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ClientRepositoryInfo, a, b2);
        }
    })();
var ClientRepositoryInfo = ClientRepositoryInfo$Runtime;
ClientRepositoryInfo.runtime = proto3;
ClientRepositoryInfo.typeName = "aiserver.v1.ClientRepositoryInfo";
ClientRepositoryInfo.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "orthogonal_transform_seed",
            kind: "scalar",
            T: 1
        }
    ]);
var SyncMerkleSubtreeV2Request$Runtime = (()=>class _SyncMerkleSubtreeV2Request extends Message {
        constructor(data){
            super();
            this.codebaseId = "";
            this.localPartialPaths = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SyncMerkleSubtreeV2Request().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SyncMerkleSubtreeV2Request().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SyncMerkleSubtreeV2Request().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SyncMerkleSubtreeV2Request, a, b2);
        }
    })();
var SyncMerkleSubtreeV2Request = SyncMerkleSubtreeV2Request$Runtime;
SyncMerkleSubtreeV2Request.runtime = proto3;
SyncMerkleSubtreeV2Request.typeName = "aiserver.v1.SyncMerkleSubtreeV2Request";
SyncMerkleSubtreeV2Request.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "client_repository_info",
            kind: "message",
            T: ClientRepositoryInfo
        },
        {
            no: 2,
            name: "codebase_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "local_partial_path",
            kind: "message",
            T: PartialPathItem
        },
        {
            no: 4,
            name: "local_partial_paths",
            kind: "message",
            T: PartialPathItem,
            repeated: true
        }
    ]);
var SyncMerkleSubtreeV2Response$Runtime = (()=>class _SyncMerkleSubtreeV2Response extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            this.results = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SyncMerkleSubtreeV2Response().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SyncMerkleSubtreeV2Response().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SyncMerkleSubtreeV2Response().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SyncMerkleSubtreeV2Response, a, b2);
        }
    })();
var SyncMerkleSubtreeV2Response = SyncMerkleSubtreeV2Response$Runtime;
SyncMerkleSubtreeV2Response.runtime = proto3;
SyncMerkleSubtreeV2Response.typeName = "aiserver.v1.SyncMerkleSubtreeV2Response";
SyncMerkleSubtreeV2Response.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "match",
            kind: "scalar",
            T: 8,
            oneof: "result"
        },
        {
            no: 2,
            name: "mismatch",
            kind: "message",
            T: SyncMerkleSubtreeV2Response_Mismatch,
            oneof: "result"
        },
        {
            no: 3,
            name: "results",
            kind: "message",
            T: SyncMerkleSubtreeV2Response_PartialPathResult,
            repeated: true
        }
    ]);
var SyncMerkleSubtreeV2Response_Mismatch$Runtime = (()=>class _SyncMerkleSubtreeV2Response_Mismatch extends Message {
        constructor(data){
            super();
            this.children = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SyncMerkleSubtreeV2Response_Mismatch().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SyncMerkleSubtreeV2Response_Mismatch().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SyncMerkleSubtreeV2Response_Mismatch().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SyncMerkleSubtreeV2Response_Mismatch, a, b2);
        }
    })();
var SyncMerkleSubtreeV2Response_Mismatch = SyncMerkleSubtreeV2Response_Mismatch$Runtime;
SyncMerkleSubtreeV2Response_Mismatch.runtime = proto3;
SyncMerkleSubtreeV2Response_Mismatch.typeName = "aiserver.v1.SyncMerkleSubtreeV2Response.Mismatch";
SyncMerkleSubtreeV2Response_Mismatch.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "children",
            kind: "message",
            T: PartialPathItem,
            repeated: true
        }
    ]);
var SyncMerkleSubtreeV2Response_PartialPathResult$Runtime = (()=>class _SyncMerkleSubtreeV2Response_PartialPathResult extends Message {
        constructor(data){
            super();
            this.result = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SyncMerkleSubtreeV2Response_PartialPathResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SyncMerkleSubtreeV2Response_PartialPathResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SyncMerkleSubtreeV2Response_PartialPathResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SyncMerkleSubtreeV2Response_PartialPathResult, a, b2);
        }
    })();
var SyncMerkleSubtreeV2Response_PartialPathResult = SyncMerkleSubtreeV2Response_PartialPathResult$Runtime;
SyncMerkleSubtreeV2Response_PartialPathResult.runtime = proto3;
SyncMerkleSubtreeV2Response_PartialPathResult.typeName = "aiserver.v1.SyncMerkleSubtreeV2Response.PartialPathResult";
SyncMerkleSubtreeV2Response_PartialPathResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "match",
            kind: "scalar",
            T: 8,
            oneof: "result"
        },
        {
            no: 2,
            name: "mismatch",
            kind: "message",
            T: SyncMerkleSubtreeV2Response_Mismatch,
            oneof: "result"
        },
        {
            no: 3,
            name: "response_size_limit_exceeded",
            kind: "scalar",
            T: 8,
            oneof: "result"
        }
    ]);
var FastUpdateFileRequest$Runtime = (()=>class _FastUpdateFileRequest extends Message {
        constructor(data){
            super();
            this.partialPath = {
                case: void 0
            };
            this.ancestorSpline = [];
            this.updateType = FastUpdateFileRequest_UpdateType.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FastUpdateFileRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FastUpdateFileRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FastUpdateFileRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FastUpdateFileRequest, a, b2);
        }
    })();
var FastUpdateFileRequest = FastUpdateFileRequest$Runtime;
FastUpdateFileRequest.runtime = proto3;
FastUpdateFileRequest.typeName = "aiserver.v1.FastUpdateFileRequest";
FastUpdateFileRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        },
        {
            no: 2,
            name: "directory",
            kind: "message",
            T: PartialPathItem,
            oneof: "partial_path"
        },
        {
            no: 3,
            name: "local_file",
            kind: "message",
            T: FastUpdateFileRequest_LocalFile,
            oneof: "partial_path"
        },
        {
            no: 4,
            name: "ancestor_spline",
            kind: "message",
            T: PartialPathItem,
            repeated: true
        },
        {
            no: 5,
            name: "update_type",
            kind: "enum",
            T: proto3.getEnumType(FastUpdateFileRequest_UpdateType)
        }
    ]);
(function(FastUpdateFileRequest_UpdateType2) {
    FastUpdateFileRequest_UpdateType2[FastUpdateFileRequest_UpdateType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    FastUpdateFileRequest_UpdateType2[FastUpdateFileRequest_UpdateType2["ADD"] = 1] = "ADD";
    FastUpdateFileRequest_UpdateType2[FastUpdateFileRequest_UpdateType2["DELETE"] = 2] = "DELETE";
    FastUpdateFileRequest_UpdateType2[FastUpdateFileRequest_UpdateType2["MODIFY"] = 3] = "MODIFY";
})(FastUpdateFileRequest_UpdateType || (FastUpdateFileRequest_UpdateType = {}));
proto3.util.setEnumType(FastUpdateFileRequest_UpdateType, "aiserver.v1.FastUpdateFileRequest.UpdateType", [
    {
        no: 0,
        name: "UPDATE_TYPE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "UPDATE_TYPE_ADD"
    },
    {
        no: 2,
        name: "UPDATE_TYPE_DELETE"
    },
    {
        no: 3,
        name: "UPDATE_TYPE_MODIFY"
    }
]);
var FastUpdateFileRequest_LocalFile$Runtime = (()=>class _FastUpdateFileRequest_LocalFile extends Message {
        constructor(data){
            super();
            this.hash = "";
            this.unencryptedRelativeWorkspacePath = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FastUpdateFileRequest_LocalFile().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FastUpdateFileRequest_LocalFile().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FastUpdateFileRequest_LocalFile().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FastUpdateFileRequest_LocalFile, a, b2);
        }
    })();
var FastUpdateFileRequest_LocalFile = FastUpdateFileRequest_LocalFile$Runtime;
FastUpdateFileRequest_LocalFile.runtime = proto3;
FastUpdateFileRequest_LocalFile.typeName = "aiserver.v1.FastUpdateFileRequest.LocalFile";
FastUpdateFileRequest_LocalFile.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "file",
            kind: "message",
            T: File2
        },
        {
            no: 2,
            name: "hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "unencrypted_relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]);
var FastUpdateFileResponse$Runtime = (()=>class _FastUpdateFileResponse extends Message {
        constructor(data){
            super();
            this.status = FastUpdateFileResponse_Status.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FastUpdateFileResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FastUpdateFileResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FastUpdateFileResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FastUpdateFileResponse, a, b2);
        }
    })();
var FastUpdateFileResponse = FastUpdateFileResponse$Runtime;
FastUpdateFileResponse.runtime = proto3;
FastUpdateFileResponse.typeName = "aiserver.v1.FastUpdateFileResponse";
FastUpdateFileResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(FastUpdateFileResponse_Status)
        }
    ]);
(function(FastUpdateFileResponse_Status2) {
    FastUpdateFileResponse_Status2[FastUpdateFileResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    FastUpdateFileResponse_Status2[FastUpdateFileResponse_Status2["SUCCESS"] = 1] = "SUCCESS";
    FastUpdateFileResponse_Status2[FastUpdateFileResponse_Status2["FAILURE"] = 2] = "FAILURE";
    FastUpdateFileResponse_Status2[FastUpdateFileResponse_Status2["EXPECTED_FAILURE"] = 3] = "EXPECTED_FAILURE";
})(FastUpdateFileResponse_Status || (FastUpdateFileResponse_Status = {}));
proto3.util.setEnumType(FastUpdateFileResponse_Status, "aiserver.v1.FastUpdateFileResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_SUCCESS"
    },
    {
        no: 2,
        name: "STATUS_FAILURE"
    },
    {
        no: 3,
        name: "STATUS_EXPECTED_FAILURE"
    }
]);
var FastUpdateFileV2Request$Runtime = (()=>class _FastUpdateFileV2Request extends Message {
        constructor(data){
            super();
            this.codebaseId = "";
            this.partialPath = {
                case: void 0
            };
            this.ancestorSpline = [];
            this.updateType = FastUpdateFileV2Request_UpdateType.UNSPECIFIED;
            this.fileUpdates = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FastUpdateFileV2Request().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FastUpdateFileV2Request().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FastUpdateFileV2Request().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FastUpdateFileV2Request, a, b2);
        }
    })();
var FastUpdateFileV2Request = FastUpdateFileV2Request$Runtime;
FastUpdateFileV2Request.runtime = proto3;
FastUpdateFileV2Request.typeName = "aiserver.v1.FastUpdateFileV2Request";
FastUpdateFileV2Request.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "client_repository_info",
            kind: "message",
            T: ClientRepositoryInfo
        },
        {
            no: 2,
            name: "codebase_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "directory",
            kind: "message",
            T: PartialPathItem,
            oneof: "partial_path"
        },
        {
            no: 4,
            name: "local_file",
            kind: "message",
            T: FastUpdateFileV2Request_LocalFile,
            oneof: "partial_path"
        },
        {
            no: 5,
            name: "ancestor_spline",
            kind: "message",
            T: PartialPathItem,
            repeated: true
        },
        {
            no: 6,
            name: "update_type",
            kind: "enum",
            T: proto3.getEnumType(FastUpdateFileV2Request_UpdateType)
        },
        {
            no: 7,
            name: "file_updates",
            kind: "message",
            T: FastUpdateFileV2Request_FileUpdate,
            repeated: true
        }
    ]);
(function(FastUpdateFileV2Request_UpdateType2) {
    FastUpdateFileV2Request_UpdateType2[FastUpdateFileV2Request_UpdateType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    FastUpdateFileV2Request_UpdateType2[FastUpdateFileV2Request_UpdateType2["ADD"] = 1] = "ADD";
    FastUpdateFileV2Request_UpdateType2[FastUpdateFileV2Request_UpdateType2["DELETE"] = 2] = "DELETE";
    FastUpdateFileV2Request_UpdateType2[FastUpdateFileV2Request_UpdateType2["MODIFY"] = 3] = "MODIFY";
    FastUpdateFileV2Request_UpdateType2[FastUpdateFileV2Request_UpdateType2["BATCH"] = 4] = "BATCH";
})(FastUpdateFileV2Request_UpdateType || (FastUpdateFileV2Request_UpdateType = {}));
proto3.util.setEnumType(FastUpdateFileV2Request_UpdateType, "aiserver.v1.FastUpdateFileV2Request.UpdateType", [
    {
        no: 0,
        name: "UPDATE_TYPE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "UPDATE_TYPE_ADD"
    },
    {
        no: 2,
        name: "UPDATE_TYPE_DELETE"
    },
    {
        no: 3,
        name: "UPDATE_TYPE_MODIFY"
    },
    {
        no: 4,
        name: "UPDATE_TYPE_BATCH"
    }
]);
var FastUpdateFileV2Request_LocalFile$Runtime = (()=>class _FastUpdateFileV2Request_LocalFile extends Message {
        constructor(data){
            super();
            this.hash = "";
            this.unencryptedRelativeWorkspacePath = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FastUpdateFileV2Request_LocalFile().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FastUpdateFileV2Request_LocalFile().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FastUpdateFileV2Request_LocalFile().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FastUpdateFileV2Request_LocalFile, a, b2);
        }
    })();
var FastUpdateFileV2Request_LocalFile = FastUpdateFileV2Request_LocalFile$Runtime;
FastUpdateFileV2Request_LocalFile.runtime = proto3;
FastUpdateFileV2Request_LocalFile.typeName = "aiserver.v1.FastUpdateFileV2Request.LocalFile";
FastUpdateFileV2Request_LocalFile.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "file",
            kind: "message",
            T: File2
        },
        {
            no: 2,
            name: "hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "unencrypted_relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ]);
var FastUpdateFileV2Request_FileUpdate$Runtime = (()=>class _FastUpdateFileV2Request_FileUpdate extends Message {
        constructor(data){
            super();
            this.partialPath = {
                case: void 0
            };
            this.ancestorSpline = [];
            this.updateType = FastUpdateFileV2Request_UpdateType.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FastUpdateFileV2Request_FileUpdate().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FastUpdateFileV2Request_FileUpdate().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FastUpdateFileV2Request_FileUpdate().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FastUpdateFileV2Request_FileUpdate, a, b2);
        }
    })();
var FastUpdateFileV2Request_FileUpdate = FastUpdateFileV2Request_FileUpdate$Runtime;
FastUpdateFileV2Request_FileUpdate.runtime = proto3;
FastUpdateFileV2Request_FileUpdate.typeName = "aiserver.v1.FastUpdateFileV2Request.FileUpdate";
FastUpdateFileV2Request_FileUpdate.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "directory",
            kind: "message",
            T: PartialPathItem,
            oneof: "partial_path"
        },
        {
            no: 2,
            name: "local_file",
            kind: "message",
            T: FastUpdateFileV2Request_LocalFile,
            oneof: "partial_path"
        },
        {
            no: 3,
            name: "ancestor_spline",
            kind: "message",
            T: PartialPathItem,
            repeated: true
        },
        {
            no: 4,
            name: "update_type",
            kind: "enum",
            T: proto3.getEnumType(FastUpdateFileV2Request_UpdateType)
        }
    ]);
var FastUpdateFileV2Response$Runtime = (()=>class _FastUpdateFileV2Response extends Message {
        constructor(data){
            super();
            this.status = FastUpdateFileV2Response_Status.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FastUpdateFileV2Response().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FastUpdateFileV2Response().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FastUpdateFileV2Response().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FastUpdateFileV2Response, a, b2);
        }
    })();
var FastUpdateFileV2Response = FastUpdateFileV2Response$Runtime;
FastUpdateFileV2Response.runtime = proto3;
FastUpdateFileV2Response.typeName = "aiserver.v1.FastUpdateFileV2Response";
FastUpdateFileV2Response.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(FastUpdateFileV2Response_Status)
        }
    ]);
(function(FastUpdateFileV2Response_Status2) {
    FastUpdateFileV2Response_Status2[FastUpdateFileV2Response_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    FastUpdateFileV2Response_Status2[FastUpdateFileV2Response_Status2["SUCCESS"] = 1] = "SUCCESS";
    FastUpdateFileV2Response_Status2[FastUpdateFileV2Response_Status2["FAILURE"] = 2] = "FAILURE";
    FastUpdateFileV2Response_Status2[FastUpdateFileV2Response_Status2["EXPECTED_FAILURE"] = 3] = "EXPECTED_FAILURE";
})(FastUpdateFileV2Response_Status || (FastUpdateFileV2Response_Status = {}));
proto3.util.setEnumType(FastUpdateFileV2Response_Status, "aiserver.v1.FastUpdateFileV2Response.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_SUCCESS"
    },
    {
        no: 2,
        name: "STATUS_FAILURE"
    },
    {
        no: 3,
        name: "STATUS_EXPECTED_FAILURE"
    }
]);
var GetUploadLimitsRequest$Runtime = (()=>class _GetUploadLimitsRequest extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetUploadLimitsRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetUploadLimitsRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetUploadLimitsRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetUploadLimitsRequest, a, b2);
        }
    })();
var GetUploadLimitsRequest = GetUploadLimitsRequest$Runtime;
GetUploadLimitsRequest.runtime = proto3;
GetUploadLimitsRequest.typeName = "aiserver.v1.GetUploadLimitsRequest";
GetUploadLimitsRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo,
            opt: true
        }
    ]);
var GetUploadLimitsResponse$Runtime = (()=>class _GetUploadLimitsResponse extends Message {
        constructor(data){
            super();
            this.softLimit = 0;
            this.hardLimit = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetUploadLimitsResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetUploadLimitsResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetUploadLimitsResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetUploadLimitsResponse, a, b2);
        }
    })();
var GetUploadLimitsResponse = GetUploadLimitsResponse$Runtime;
GetUploadLimitsResponse.runtime = proto3;
GetUploadLimitsResponse.typeName = "aiserver.v1.GetUploadLimitsResponse";
GetUploadLimitsResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "soft_limit",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "hard_limit",
            kind: "scalar",
            T: 5
        }
    ]);
var GetNumFilesToSendRequest$Runtime = (()=>class _GetNumFilesToSendRequest extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetNumFilesToSendRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetNumFilesToSendRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetNumFilesToSendRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetNumFilesToSendRequest, a, b2);
        }
    })();
var GetNumFilesToSendRequest = GetNumFilesToSendRequest$Runtime;
GetNumFilesToSendRequest.runtime = proto3;
GetNumFilesToSendRequest.typeName = "aiserver.v1.GetNumFilesToSendRequest";
GetNumFilesToSendRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        }
    ]);
var GetNumFilesToSendResponse$Runtime = (()=>class _GetNumFilesToSendResponse extends Message {
        constructor(data){
            super();
            this.numFiles = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetNumFilesToSendResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetNumFilesToSendResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetNumFilesToSendResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetNumFilesToSendResponse, a, b2);
        }
    })();
var GetNumFilesToSendResponse = GetNumFilesToSendResponse$Runtime;
GetNumFilesToSendResponse.runtime = proto3;
GetNumFilesToSendResponse.typeName = "aiserver.v1.GetNumFilesToSendResponse";
GetNumFilesToSendResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "num_files",
            kind: "scalar",
            T: 5
        }
    ]);
var GetAvailableChunkingStrategiesRequest$Runtime = (()=>class _GetAvailableChunkingStrategiesRequest extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetAvailableChunkingStrategiesRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetAvailableChunkingStrategiesRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetAvailableChunkingStrategiesRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetAvailableChunkingStrategiesRequest, a, b2);
        }
    })();
var GetAvailableChunkingStrategiesRequest = GetAvailableChunkingStrategiesRequest$Runtime;
GetAvailableChunkingStrategiesRequest.runtime = proto3;
GetAvailableChunkingStrategiesRequest.typeName = "aiserver.v1.GetAvailableChunkingStrategiesRequest";
GetAvailableChunkingStrategiesRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        }
    ]);
var GetAvailableChunkingStrategiesResponse$Runtime = (()=>class _GetAvailableChunkingStrategiesResponse extends Message {
        constructor(data){
            super();
            this.chunkingStrategies = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetAvailableChunkingStrategiesResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetAvailableChunkingStrategiesResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetAvailableChunkingStrategiesResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetAvailableChunkingStrategiesResponse, a, b2);
        }
    })();
var GetAvailableChunkingStrategiesResponse = GetAvailableChunkingStrategiesResponse$Runtime;
GetAvailableChunkingStrategiesResponse.runtime = proto3;
GetAvailableChunkingStrategiesResponse.typeName = "aiserver.v1.GetAvailableChunkingStrategiesResponse";
GetAvailableChunkingStrategiesResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "chunking_strategies",
            kind: "enum",
            T: proto3.getEnumType(ChunkingStrategy),
            repeated: true
        }
    ]);
var GetEmbeddingsRequest$Runtime = (()=>class _GetEmbeddingsRequest extends Message {
        constructor(data){
            super();
            this.texts = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetEmbeddingsRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetEmbeddingsRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetEmbeddingsRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetEmbeddingsRequest, a, b2);
        }
    })();
var GetEmbeddingsRequest = GetEmbeddingsRequest$Runtime;
GetEmbeddingsRequest.runtime = proto3;
GetEmbeddingsRequest.typeName = "aiserver.v1.GetEmbeddingsRequest";
GetEmbeddingsRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "texts",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var GetEmbeddingsResponse$Runtime = (()=>class _GetEmbeddingsResponse extends Message {
        constructor(data){
            super();
            this.embeddings = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetEmbeddingsResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetEmbeddingsResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetEmbeddingsResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetEmbeddingsResponse, a, b2);
        }
    })();
var GetEmbeddingsResponse = GetEmbeddingsResponse$Runtime;
GetEmbeddingsResponse.runtime = proto3;
GetEmbeddingsResponse.typeName = "aiserver.v1.GetEmbeddingsResponse";
GetEmbeddingsResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 2,
            name: "embeddings",
            kind: "message",
            T: GetEmbeddingsResponse_Embedding,
            repeated: true
        }
    ]);
var GetEmbeddingsResponse_Embedding$Runtime = (()=>class _GetEmbeddingsResponse_Embedding extends Message {
        constructor(data){
            super();
            this.embedding = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetEmbeddingsResponse_Embedding().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetEmbeddingsResponse_Embedding().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetEmbeddingsResponse_Embedding().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetEmbeddingsResponse_Embedding, a, b2);
        }
    })();
var GetEmbeddingsResponse_Embedding = GetEmbeddingsResponse_Embedding$Runtime;
GetEmbeddingsResponse_Embedding.runtime = proto3;
GetEmbeddingsResponse_Embedding.typeName = "aiserver.v1.GetEmbeddingsResponse.Embedding";
GetEmbeddingsResponse_Embedding.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "embedding",
            kind: "scalar",
            T: 2,
            repeated: true
        }
    ]);
var AdminRemoveRepositoryRequest$Runtime = (()=>class _AdminRemoveRepositoryRequest extends Message {
        constructor(data){
            super();
            this.codebaseId = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AdminRemoveRepositoryRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AdminRemoveRepositoryRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AdminRemoveRepositoryRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AdminRemoveRepositoryRequest, a, b2);
        }
    })();
var AdminRemoveRepositoryRequest = AdminRemoveRepositoryRequest$Runtime;
AdminRemoveRepositoryRequest.runtime = proto3;
AdminRemoveRepositoryRequest.typeName = "aiserver.v1.AdminRemoveRepositoryRequest";
AdminRemoveRepositoryRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "codebase_id",
            kind: "scalar",
            T: 5
        }
    ]);
var AdminRemoveRepositoryResponse$Runtime = (()=>class _AdminRemoveRepositoryResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _AdminRemoveRepositoryResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _AdminRemoveRepositoryResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _AdminRemoveRepositoryResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_AdminRemoveRepositoryResponse, a, b2);
        }
    })();
var AdminRemoveRepositoryResponse = AdminRemoveRepositoryResponse$Runtime;
AdminRemoveRepositoryResponse.runtime = proto3;
AdminRemoveRepositoryResponse.typeName = "aiserver.v1.AdminRemoveRepositoryResponse";
AdminRemoveRepositoryResponse.fields = proto3.util.newFieldList(()=>[]);
var SyncRepositoryRequest$Runtime = (()=>class _SyncRepositoryRequest extends Message {
        constructor(data){
            super();
            this.codebaseId = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SyncRepositoryRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SyncRepositoryRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SyncRepositoryRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SyncRepositoryRequest, a, b2);
        }
    })();
var SyncRepositoryRequest = SyncRepositoryRequest$Runtime;
SyncRepositoryRequest.runtime = proto3;
SyncRepositoryRequest.typeName = "aiserver.v1.SyncRepositoryRequest";
SyncRepositoryRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "codebase_id",
            kind: "scalar",
            T: 5
        }
    ]);
var SyncRepositoryResponse$Runtime = (()=>class _SyncRepositoryResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SyncRepositoryResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SyncRepositoryResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SyncRepositoryResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SyncRepositoryResponse, a, b2);
        }
    })();
var SyncRepositoryResponse = SyncRepositoryResponse$Runtime;
SyncRepositoryResponse.runtime = proto3;
SyncRepositoryResponse.typeName = "aiserver.v1.SyncRepositoryResponse";
SyncRepositoryResponse.fields = proto3.util.newFieldList(()=>[]);
var StartUploadRepoRequest$Runtime = (()=>class _StartUploadRepoRequest extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _StartUploadRepoRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _StartUploadRepoRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _StartUploadRepoRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_StartUploadRepoRequest, a, b2);
        }
    })();
var StartUploadRepoRequest = StartUploadRepoRequest$Runtime;
StartUploadRepoRequest.runtime = proto3;
StartUploadRepoRequest.typeName = "aiserver.v1.StartUploadRepoRequest";
StartUploadRepoRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        }
    ]);
var StartUploadRepoResponse$Runtime = (()=>class _StartUploadRepoResponse extends Message {
        constructor(data){
            super();
            this.status = StartUploadRepoResponse_Status.UNSPECIFIED;
            this.seenFiles = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _StartUploadRepoResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _StartUploadRepoResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _StartUploadRepoResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_StartUploadRepoResponse, a, b2);
        }
    })();
var StartUploadRepoResponse = StartUploadRepoResponse$Runtime;
StartUploadRepoResponse.runtime = proto3;
StartUploadRepoResponse.typeName = "aiserver.v1.StartUploadRepoResponse";
StartUploadRepoResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(StartUploadRepoResponse_Status)
        },
        {
            no: 2,
            name: "seen_files",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
(function(StartUploadRepoResponse_Status2) {
    StartUploadRepoResponse_Status2[StartUploadRepoResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    StartUploadRepoResponse_Status2[StartUploadRepoResponse_Status2["SUCCESS"] = 1] = "SUCCESS";
    StartUploadRepoResponse_Status2[StartUploadRepoResponse_Status2["FAILURE"] = 2] = "FAILURE";
    StartUploadRepoResponse_Status2[StartUploadRepoResponse_Status2["ALREADY_EXISTS"] = 3] = "ALREADY_EXISTS";
})(StartUploadRepoResponse_Status || (StartUploadRepoResponse_Status = {}));
proto3.util.setEnumType(StartUploadRepoResponse_Status, "aiserver.v1.StartUploadRepoResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_SUCCESS"
    },
    {
        no: 2,
        name: "STATUS_FAILURE"
    },
    {
        no: 3,
        name: "STATUS_ALREADY_EXISTS"
    }
]);
var UploadFileRequest$Runtime = (()=>class _UploadFileRequest extends Message {
        constructor(data){
            super();
            this.commitSha = "";
            this.queueId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UploadFileRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UploadFileRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UploadFileRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UploadFileRequest, a, b2);
        }
    })();
var UploadFileRequest = UploadFileRequest$Runtime;
UploadFileRequest.runtime = proto3;
UploadFileRequest.typeName = "aiserver.v1.UploadFileRequest";
UploadFileRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        },
        {
            no: 2,
            name: "file",
            kind: "message",
            T: File2
        },
        {
            no: 3,
            name: "commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "queue_id",
            kind: "scalar",
            T: 9
        }
    ]);
var UploadFileResponse$Runtime = (()=>class _UploadFileResponse extends Message {
        constructor(data){
            super();
            this.status = UploadFileResponse_Status.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UploadFileResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UploadFileResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UploadFileResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UploadFileResponse, a, b2);
        }
    })();
var UploadFileResponse = UploadFileResponse$Runtime;
UploadFileResponse.runtime = proto3;
UploadFileResponse.typeName = "aiserver.v1.UploadFileResponse";
UploadFileResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(UploadFileResponse_Status)
        }
    ]);
(function(UploadFileResponse_Status2) {
    UploadFileResponse_Status2[UploadFileResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    UploadFileResponse_Status2[UploadFileResponse_Status2["SUCCESS"] = 1] = "SUCCESS";
    UploadFileResponse_Status2[UploadFileResponse_Status2["FAILURE"] = 2] = "FAILURE";
    UploadFileResponse_Status2[UploadFileResponse_Status2["EXPECTED_FAILURE"] = 3] = "EXPECTED_FAILURE";
    UploadFileResponse_Status2[UploadFileResponse_Status2["QUEUE_BACKED_UP"] = 4] = "QUEUE_BACKED_UP";
})(UploadFileResponse_Status || (UploadFileResponse_Status = {}));
proto3.util.setEnumType(UploadFileResponse_Status, "aiserver.v1.UploadFileResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_SUCCESS"
    },
    {
        no: 2,
        name: "STATUS_FAILURE"
    },
    {
        no: 3,
        name: "STATUS_EXPECTED_FAILURE"
    },
    {
        no: 4,
        name: "STATUS_QUEUE_BACKED_UP"
    }
]);
var FinishUploadRepoRequest$Runtime = (()=>class _FinishUploadRepoRequest extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FinishUploadRepoRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FinishUploadRepoRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FinishUploadRepoRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FinishUploadRepoRequest, a, b2);
        }
    })();
var FinishUploadRepoRequest = FinishUploadRepoRequest$Runtime;
FinishUploadRepoRequest.runtime = proto3;
FinishUploadRepoRequest.typeName = "aiserver.v1.FinishUploadRepoRequest";
FinishUploadRepoRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        }
    ]);
var FinishUploadRepoResponse$Runtime = (()=>class _FinishUploadRepoResponse extends Message {
        constructor(data){
            super();
            this.status = FinishUploadRepoResponse_Status.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FinishUploadRepoResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FinishUploadRepoResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FinishUploadRepoResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FinishUploadRepoResponse, a, b2);
        }
    })();
var FinishUploadRepoResponse = FinishUploadRepoResponse$Runtime;
FinishUploadRepoResponse.runtime = proto3;
FinishUploadRepoResponse.typeName = "aiserver.v1.FinishUploadRepoResponse";
FinishUploadRepoResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(FinishUploadRepoResponse_Status)
        }
    ]);
(function(FinishUploadRepoResponse_Status2) {
    FinishUploadRepoResponse_Status2[FinishUploadRepoResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    FinishUploadRepoResponse_Status2[FinishUploadRepoResponse_Status2["SUCCESS"] = 1] = "SUCCESS";
    FinishUploadRepoResponse_Status2[FinishUploadRepoResponse_Status2["FAILURE"] = 2] = "FAILURE";
})(FinishUploadRepoResponse_Status || (FinishUploadRepoResponse_Status = {}));
proto3.util.setEnumType(FinishUploadRepoResponse_Status, "aiserver.v1.FinishUploadRepoResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_SUCCESS"
    },
    {
        no: 2,
        name: "STATUS_FAILURE"
    }
]);
var StartUpdateRepoRequest$Runtime = (()=>class _StartUpdateRepoRequest extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _StartUpdateRepoRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _StartUpdateRepoRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _StartUpdateRepoRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_StartUpdateRepoRequest, a, b2);
        }
    })();
var StartUpdateRepoRequest = StartUpdateRepoRequest$Runtime;
StartUpdateRepoRequest.runtime = proto3;
StartUpdateRepoRequest.typeName = "aiserver.v1.StartUpdateRepoRequest";
StartUpdateRepoRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        }
    ]);
var StartUpdateRepoResponse$Runtime = (()=>class _StartUpdateRepoResponse extends Message {
        constructor(data){
            super();
            this.status = StartUpdateRepoResponse_Status.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _StartUpdateRepoResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _StartUpdateRepoResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _StartUpdateRepoResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_StartUpdateRepoResponse, a, b2);
        }
    })();
var StartUpdateRepoResponse = StartUpdateRepoResponse$Runtime;
StartUpdateRepoResponse.runtime = proto3;
StartUpdateRepoResponse.typeName = "aiserver.v1.StartUpdateRepoResponse";
StartUpdateRepoResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(StartUpdateRepoResponse_Status)
        }
    ]);
(function(StartUpdateRepoResponse_Status2) {
    StartUpdateRepoResponse_Status2[StartUpdateRepoResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    StartUpdateRepoResponse_Status2[StartUpdateRepoResponse_Status2["SUCCESS"] = 1] = "SUCCESS";
    StartUpdateRepoResponse_Status2[StartUpdateRepoResponse_Status2["FAILURE"] = 2] = "FAILURE";
    StartUpdateRepoResponse_Status2[StartUpdateRepoResponse_Status2["NOT_FOUND"] = 3] = "NOT_FOUND";
    StartUpdateRepoResponse_Status2[StartUpdateRepoResponse_Status2["ALREADY_SYNCING"] = 4] = "ALREADY_SYNCING";
})(StartUpdateRepoResponse_Status || (StartUpdateRepoResponse_Status = {}));
proto3.util.setEnumType(StartUpdateRepoResponse_Status, "aiserver.v1.StartUpdateRepoResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_SUCCESS"
    },
    {
        no: 2,
        name: "STATUS_FAILURE"
    },
    {
        no: 3,
        name: "STATUS_NOT_FOUND"
    },
    {
        no: 4,
        name: "STATUS_ALREADY_SYNCING"
    }
]);
var UpdateFileRequest$Runtime = (()=>class _UpdateFileRequest extends Message {
        constructor(data){
            super();
            this.commitSha = "";
            this.queueId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UpdateFileRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UpdateFileRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UpdateFileRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UpdateFileRequest, a, b2);
        }
    })();
var UpdateFileRequest = UpdateFileRequest$Runtime;
UpdateFileRequest.runtime = proto3;
UpdateFileRequest.typeName = "aiserver.v1.UpdateFileRequest";
UpdateFileRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        },
        {
            no: 2,
            name: "added_file",
            kind: "message",
            T: File2
        },
        {
            no: 3,
            name: "deleted_file_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "queue_id",
            kind: "scalar",
            T: 9
        }
    ]);
var UpdateFileResponse$Runtime = (()=>class _UpdateFileResponse extends Message {
        constructor(data){
            super();
            this.status = UpdateFileResponse_Status.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UpdateFileResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UpdateFileResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UpdateFileResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UpdateFileResponse, a, b2);
        }
    })();
var UpdateFileResponse = UpdateFileResponse$Runtime;
UpdateFileResponse.runtime = proto3;
UpdateFileResponse.typeName = "aiserver.v1.UpdateFileResponse";
UpdateFileResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(UpdateFileResponse_Status)
        }
    ]);
(function(UpdateFileResponse_Status2) {
    UpdateFileResponse_Status2[UpdateFileResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    UpdateFileResponse_Status2[UpdateFileResponse_Status2["SUCCESS"] = 1] = "SUCCESS";
    UpdateFileResponse_Status2[UpdateFileResponse_Status2["FAILURE"] = 2] = "FAILURE";
    UpdateFileResponse_Status2[UpdateFileResponse_Status2["EXPECTED_FAILURE"] = 3] = "EXPECTED_FAILURE";
    UpdateFileResponse_Status2[UpdateFileResponse_Status2["QUEUE_BACKED_UP"] = 4] = "QUEUE_BACKED_UP";
})(UpdateFileResponse_Status || (UpdateFileResponse_Status = {}));
proto3.util.setEnumType(UpdateFileResponse_Status, "aiserver.v1.UpdateFileResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_SUCCESS"
    },
    {
        no: 2,
        name: "STATUS_FAILURE"
    },
    {
        no: 3,
        name: "STATUS_EXPECTED_FAILURE"
    },
    {
        no: 4,
        name: "STATUS_QUEUE_BACKED_UP"
    }
]);
var FinishUpdateRepoRequest$Runtime = (()=>class _FinishUpdateRepoRequest extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FinishUpdateRepoRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FinishUpdateRepoRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FinishUpdateRepoRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FinishUpdateRepoRequest, a, b2);
        }
    })();
var FinishUpdateRepoRequest = FinishUpdateRepoRequest$Runtime;
FinishUpdateRepoRequest.runtime = proto3;
FinishUpdateRepoRequest.typeName = "aiserver.v1.FinishUpdateRepoRequest";
FinishUpdateRepoRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        }
    ]);
var FinishUpdateRepoResponse$Runtime = (()=>class _FinishUpdateRepoResponse extends Message {
        constructor(data){
            super();
            this.status = FinishUpdateRepoResponse_Status.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FinishUpdateRepoResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FinishUpdateRepoResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FinishUpdateRepoResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FinishUpdateRepoResponse, a, b2);
        }
    })();
var FinishUpdateRepoResponse = FinishUpdateRepoResponse$Runtime;
FinishUpdateRepoResponse.runtime = proto3;
FinishUpdateRepoResponse.typeName = "aiserver.v1.FinishUpdateRepoResponse";
FinishUpdateRepoResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(FinishUpdateRepoResponse_Status)
        }
    ]);
(function(FinishUpdateRepoResponse_Status2) {
    FinishUpdateRepoResponse_Status2[FinishUpdateRepoResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    FinishUpdateRepoResponse_Status2[FinishUpdateRepoResponse_Status2["SUCCESS"] = 1] = "SUCCESS";
    FinishUpdateRepoResponse_Status2[FinishUpdateRepoResponse_Status2["FAILURE"] = 2] = "FAILURE";
})(FinishUpdateRepoResponse_Status || (FinishUpdateRepoResponse_Status = {}));
proto3.util.setEnumType(FinishUpdateRepoResponse_Status, "aiserver.v1.FinishUpdateRepoResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_SUCCESS"
    },
    {
        no: 2,
        name: "STATUS_FAILURE"
    }
]);
var BatchRepositoryStatusRequest$Runtime = (()=>class _BatchRepositoryStatusRequest extends Message {
        constructor(data){
            super();
            this.requests = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _BatchRepositoryStatusRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _BatchRepositoryStatusRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _BatchRepositoryStatusRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_BatchRepositoryStatusRequest, a, b2);
        }
    })();
var BatchRepositoryStatusRequest = BatchRepositoryStatusRequest$Runtime;
BatchRepositoryStatusRequest.runtime = proto3;
BatchRepositoryStatusRequest.typeName = "aiserver.v1.BatchRepositoryStatusRequest";
BatchRepositoryStatusRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "requests",
            kind: "message",
            T: RepositoryStatusRequest,
            repeated: true
        }
    ]);
var BatchRepositoryStatusResponse$Runtime = (()=>class _BatchRepositoryStatusResponse extends Message {
        constructor(data){
            super();
            this.responses = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _BatchRepositoryStatusResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _BatchRepositoryStatusResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _BatchRepositoryStatusResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_BatchRepositoryStatusResponse, a, b2);
        }
    })();
var BatchRepositoryStatusResponse = BatchRepositoryStatusResponse$Runtime;
BatchRepositoryStatusResponse.runtime = proto3;
BatchRepositoryStatusResponse.typeName = "aiserver.v1.BatchRepositoryStatusResponse";
BatchRepositoryStatusResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "responses",
            kind: "message",
            T: RepositoryStatusResponse,
            repeated: true
        }
    ]);
var UnsubscribeRepositoryRequest$Runtime = (()=>class _UnsubscribeRepositoryRequest extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UnsubscribeRepositoryRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UnsubscribeRepositoryRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UnsubscribeRepositoryRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UnsubscribeRepositoryRequest, a, b2);
        }
    })();
var UnsubscribeRepositoryRequest = UnsubscribeRepositoryRequest$Runtime;
UnsubscribeRepositoryRequest.runtime = proto3;
UnsubscribeRepositoryRequest.typeName = "aiserver.v1.UnsubscribeRepositoryRequest";
UnsubscribeRepositoryRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        }
    ]);
var UnsubscribeRepositoryResponse$Runtime = (()=>class _UnsubscribeRepositoryResponse extends Message {
        constructor(data){
            super();
            this.status = UnsubscribeRepositoryResponse_Status.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UnsubscribeRepositoryResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UnsubscribeRepositoryResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UnsubscribeRepositoryResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UnsubscribeRepositoryResponse, a, b2);
        }
    })();
var UnsubscribeRepositoryResponse = UnsubscribeRepositoryResponse$Runtime;
UnsubscribeRepositoryResponse.runtime = proto3;
UnsubscribeRepositoryResponse.typeName = "aiserver.v1.UnsubscribeRepositoryResponse";
UnsubscribeRepositoryResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(UnsubscribeRepositoryResponse_Status)
        }
    ]);
(function(UnsubscribeRepositoryResponse_Status2) {
    UnsubscribeRepositoryResponse_Status2[UnsubscribeRepositoryResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    UnsubscribeRepositoryResponse_Status2[UnsubscribeRepositoryResponse_Status2["NOT_FOUND"] = 1] = "NOT_FOUND";
    UnsubscribeRepositoryResponse_Status2[UnsubscribeRepositoryResponse_Status2["NOT_SUBSCRIBED"] = 2] = "NOT_SUBSCRIBED";
    UnsubscribeRepositoryResponse_Status2[UnsubscribeRepositoryResponse_Status2["SUCCESS"] = 3] = "SUCCESS";
})(UnsubscribeRepositoryResponse_Status || (UnsubscribeRepositoryResponse_Status = {}));
proto3.util.setEnumType(UnsubscribeRepositoryResponse_Status, "aiserver.v1.UnsubscribeRepositoryResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_NOT_FOUND"
    },
    {
        no: 2,
        name: "STATUS_NOT_SUBSCRIBED"
    },
    {
        no: 3,
        name: "STATUS_SUCCESS"
    }
]);
var LogoutRequest$Runtime = (()=>class _LogoutRequest extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _LogoutRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _LogoutRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _LogoutRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_LogoutRequest, a, b2);
        }
    })();
var LogoutRequest = LogoutRequest$Runtime;
LogoutRequest.runtime = proto3;
LogoutRequest.typeName = "aiserver.v1.LogoutRequest";
LogoutRequest.fields = proto3.util.newFieldList(()=>[]);
var LogoutResponse$Runtime = (()=>class _LogoutResponse extends Message {
        constructor(data){
            super();
            this.status = LogoutResponse_Status.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _LogoutResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _LogoutResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _LogoutResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_LogoutResponse, a, b2);
        }
    })();
var LogoutResponse = LogoutResponse$Runtime;
LogoutResponse.runtime = proto3;
LogoutResponse.typeName = "aiserver.v1.LogoutResponse";
LogoutResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(LogoutResponse_Status)
        }
    ]);
(function(LogoutResponse_Status2) {
    LogoutResponse_Status2[LogoutResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    LogoutResponse_Status2[LogoutResponse_Status2["SUCCESS"] = 1] = "SUCCESS";
    LogoutResponse_Status2[LogoutResponse_Status2["FAILURE"] = 2] = "FAILURE";
    LogoutResponse_Status2[LogoutResponse_Status2["NOT_LOGGED_IN"] = 3] = "NOT_LOGGED_IN";
})(LogoutResponse_Status || (LogoutResponse_Status = {}));
proto3.util.setEnumType(LogoutResponse_Status, "aiserver.v1.LogoutResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_SUCCESS"
    },
    {
        no: 2,
        name: "STATUS_FAILURE"
    },
    {
        no: 3,
        name: "STATUS_NOT_LOGGED_IN"
    }
]);
var RemoveRepositoryRequest$Runtime = (()=>class _RemoveRepositoryRequest extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RemoveRepositoryRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RemoveRepositoryRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RemoveRepositoryRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RemoveRepositoryRequest, a, b2);
        }
    })();
var RemoveRepositoryRequest = RemoveRepositoryRequest$Runtime;
RemoveRepositoryRequest.runtime = proto3;
RemoveRepositoryRequest.typeName = "aiserver.v1.RemoveRepositoryRequest";
RemoveRepositoryRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        }
    ]);
var RemoveRepositoryResponse$Runtime = (()=>class _RemoveRepositoryResponse extends Message {
        constructor(data){
            super();
            this.status = RemoveRepositoryResponse_Status.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RemoveRepositoryResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RemoveRepositoryResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RemoveRepositoryResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RemoveRepositoryResponse, a, b2);
        }
    })();
var RemoveRepositoryResponse = RemoveRepositoryResponse$Runtime;
RemoveRepositoryResponse.runtime = proto3;
RemoveRepositoryResponse.typeName = "aiserver.v1.RemoveRepositoryResponse";
RemoveRepositoryResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(RemoveRepositoryResponse_Status)
        }
    ]);
(function(RemoveRepositoryResponse_Status2) {
    RemoveRepositoryResponse_Status2[RemoveRepositoryResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    RemoveRepositoryResponse_Status2[RemoveRepositoryResponse_Status2["NOT_FOUND"] = 1] = "NOT_FOUND";
    RemoveRepositoryResponse_Status2[RemoveRepositoryResponse_Status2["NOT_AUTHORIZED"] = 2] = "NOT_AUTHORIZED";
    RemoveRepositoryResponse_Status2[RemoveRepositoryResponse_Status2["STARTED"] = 3] = "STARTED";
    RemoveRepositoryResponse_Status2[RemoveRepositoryResponse_Status2["SUCCESS"] = 4] = "SUCCESS";
})(RemoveRepositoryResponse_Status || (RemoveRepositoryResponse_Status = {}));
proto3.util.setEnumType(RemoveRepositoryResponse_Status, "aiserver.v1.RemoveRepositoryResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_NOT_FOUND"
    },
    {
        no: 2,
        name: "STATUS_NOT_AUTHORIZED"
    },
    {
        no: 3,
        name: "STATUS_STARTED"
    },
    {
        no: 4,
        name: "STATUS_SUCCESS"
    }
]);
var SubscribeRepositoryRequest$Runtime = (()=>class _SubscribeRepositoryRequest extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SubscribeRepositoryRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SubscribeRepositoryRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SubscribeRepositoryRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubscribeRepositoryRequest, a, b2);
        }
    })();
var SubscribeRepositoryRequest = SubscribeRepositoryRequest$Runtime;
SubscribeRepositoryRequest.runtime = proto3;
SubscribeRepositoryRequest.typeName = "aiserver.v1.SubscribeRepositoryRequest";
SubscribeRepositoryRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        }
    ]);
var SubscribeRepositoryResponse$Runtime = (()=>class _SubscribeRepositoryResponse extends Message {
        constructor(data){
            super();
            this.status = SubscribeRepositoryResponse_Status.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SubscribeRepositoryResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SubscribeRepositoryResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SubscribeRepositoryResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SubscribeRepositoryResponse, a, b2);
        }
    })();
var SubscribeRepositoryResponse = SubscribeRepositoryResponse$Runtime;
SubscribeRepositoryResponse.runtime = proto3;
SubscribeRepositoryResponse.typeName = "aiserver.v1.SubscribeRepositoryResponse";
SubscribeRepositoryResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(SubscribeRepositoryResponse_Status)
        }
    ]);
(function(SubscribeRepositoryResponse_Status2) {
    SubscribeRepositoryResponse_Status2[SubscribeRepositoryResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    SubscribeRepositoryResponse_Status2[SubscribeRepositoryResponse_Status2["NOT_FOUND"] = 1] = "NOT_FOUND";
    SubscribeRepositoryResponse_Status2[SubscribeRepositoryResponse_Status2["NOT_AUTHORIZED"] = 2] = "NOT_AUTHORIZED";
    SubscribeRepositoryResponse_Status2[SubscribeRepositoryResponse_Status2["ALREADY_SUBSCRIBED"] = 3] = "ALREADY_SUBSCRIBED";
    SubscribeRepositoryResponse_Status2[SubscribeRepositoryResponse_Status2["SUCCESS"] = 4] = "SUCCESS";
})(SubscribeRepositoryResponse_Status || (SubscribeRepositoryResponse_Status = {}));
proto3.util.setEnumType(SubscribeRepositoryResponse_Status, "aiserver.v1.SubscribeRepositoryResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_NOT_FOUND"
    },
    {
        no: 2,
        name: "STATUS_NOT_AUTHORIZED"
    },
    {
        no: 3,
        name: "STATUS_ALREADY_SUBSCRIBED"
    },
    {
        no: 4,
        name: "STATUS_SUCCESS"
    }
]);
var SearchRepositoryRequest$Runtime = (()=>class _SearchRepositoryRequest extends Message {
        constructor(data){
            super();
            this.query = "";
            this.topK = 0;
            this.rerank = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SearchRepositoryRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SearchRepositoryRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SearchRepositoryRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SearchRepositoryRequest, a, b2);
        }
    })();
var SearchRepositoryRequest = SearchRepositoryRequest$Runtime;
SearchRepositoryRequest.runtime = proto3;
SearchRepositoryRequest.typeName = "aiserver.v1.SearchRepositoryRequest";
SearchRepositoryRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        },
        {
            no: 3,
            name: "top_k",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "model_details",
            kind: "message",
            T: ModelDetails
        },
        {
            no: 5,
            name: "rerank",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "context_cache_request",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 7,
            name: "glob_filter",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "not_glob_filter",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "race_n_requests",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 10,
            name: "query_only_repo_access",
            kind: "message",
            T: QueryOnlyRepoAccess
        }
    ]);
var QueryOnlyRepoAccess$Runtime = (()=>class _QueryOnlyRepoAccess extends Message {
        constructor(data){
            super();
            this.ownerAuthId = "";
            this.accessToken = "";
            this.userRepoOwner = "";
            this.userRepoName = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _QueryOnlyRepoAccess().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _QueryOnlyRepoAccess().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _QueryOnlyRepoAccess().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_QueryOnlyRepoAccess, a, b2);
        }
    })();
var QueryOnlyRepoAccess = QueryOnlyRepoAccess$Runtime;
QueryOnlyRepoAccess.runtime = proto3;
QueryOnlyRepoAccess.typeName = "aiserver.v1.QueryOnlyRepoAccess";
QueryOnlyRepoAccess.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "owner_auth_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "access_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "user_repo_owner",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "user_repo_name",
            kind: "scalar",
            T: 9
        }
    ]);
var CodeResult$Runtime = (()=>class _CodeResult extends Message {
        constructor(data){
            super();
            this.score = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CodeResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CodeResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CodeResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CodeResult, a, b2);
        }
    })();
var CodeResult = CodeResult$Runtime;
CodeResult.runtime = proto3;
CodeResult.typeName = "aiserver.v1.CodeResult";
CodeResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "code_block",
            kind: "message",
            T: CodeBlock
        },
        {
            no: 2,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ]);
var FileResult$Runtime = (()=>class _FileResult extends Message {
        constructor(data){
            super();
            this.score = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _FileResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _FileResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _FileResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_FileResult, a, b2);
        }
    })();
var FileResult = FileResult$Runtime;
FileResult.runtime = proto3;
FileResult.typeName = "aiserver.v1.FileResult";
FileResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "file",
            kind: "message",
            T: File2
        },
        {
            no: 2,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ]);
var SearchRepositoryResponse$Runtime = (()=>class _SearchRepositoryResponse extends Message {
        constructor(data){
            super();
            this.codeResults = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SearchRepositoryResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SearchRepositoryResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SearchRepositoryResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SearchRepositoryResponse, a, b2);
        }
    })();
var SearchRepositoryResponse = SearchRepositoryResponse$Runtime;
SearchRepositoryResponse.runtime = proto3;
SearchRepositoryResponse.typeName = "aiserver.v1.SearchRepositoryResponse";
SearchRepositoryResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "code_results",
            kind: "message",
            T: CodeResult,
            repeated: true
        }
    ]);
var SemSearchRequest$Runtime = (()=>class _SemSearchRequest extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SemSearchRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SemSearchRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SemSearchRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SemSearchRequest, a, b2);
        }
    })();
var SemSearchRequest = SemSearchRequest$Runtime;
SemSearchRequest.runtime = proto3;
SemSearchRequest.typeName = "aiserver.v1.SemSearchRequest";
SemSearchRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "request",
            kind: "message",
            T: SearchRepositoryRequest
        }
    ]);
var CodeResultWithClassificationInfo$Runtime = (()=>class _CodeResultWithClassificationInfo extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CodeResultWithClassificationInfo().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CodeResultWithClassificationInfo().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CodeResultWithClassificationInfo().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CodeResultWithClassificationInfo, a, b2);
        }
    })();
var CodeResultWithClassificationInfo = CodeResultWithClassificationInfo$Runtime;
CodeResultWithClassificationInfo.runtime = proto3;
CodeResultWithClassificationInfo.typeName = "aiserver.v1.CodeResultWithClassificationInfo";
CodeResultWithClassificationInfo.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "code_result",
            kind: "message",
            T: CodeResult
        },
        {
            no: 2,
            name: "line_number_classification",
            kind: "message",
            T: CodeResultWithClassificationInfo_LineNumberClassification,
            opt: true
        }
    ]);
var CodeResultWithClassificationInfo_LineNumberClassification$Runtime = (()=>class _CodeResultWithClassificationInfo_LineNumberClassification extends Message {
        constructor(data){
            super();
            this.queryComputedFor = "";
            this.matchedStrings = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CodeResultWithClassificationInfo_LineNumberClassification().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CodeResultWithClassificationInfo_LineNumberClassification().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CodeResultWithClassificationInfo_LineNumberClassification().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CodeResultWithClassificationInfo_LineNumberClassification, a, b2);
        }
    })();
var CodeResultWithClassificationInfo_LineNumberClassification = CodeResultWithClassificationInfo_LineNumberClassification$Runtime;
CodeResultWithClassificationInfo_LineNumberClassification.runtime = proto3;
CodeResultWithClassificationInfo_LineNumberClassification.typeName = "aiserver.v1.CodeResultWithClassificationInfo.LineNumberClassification";
CodeResultWithClassificationInfo_LineNumberClassification.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "detailed_line",
            kind: "message",
            T: DetailedLine
        },
        {
            no: 2,
            name: "query_computed_for",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "matched_strings",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 4,
            name: "highlight_range",
            kind: "message",
            T: SimpleRange
        }
    ]);
var SemSearchResponse$Runtime = (()=>class _SemSearchResponse extends Message {
        constructor(data){
            super();
            this.codeResults = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SemSearchResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SemSearchResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SemSearchResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SemSearchResponse, a, b2);
        }
    })();
var SemSearchResponse = SemSearchResponse$Runtime;
SemSearchResponse.runtime = proto3;
SemSearchResponse.typeName = "aiserver.v1.SemSearchResponse";
SemSearchResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "response",
            kind: "message",
            T: SearchRepositoryResponse
        },
        {
            no: 2,
            name: "metadata",
            kind: "message",
            T: SemSearchResponse_SemSearchMetadata,
            opt: true
        },
        {
            no: 3,
            name: "code_results",
            kind: "message",
            T: CodeResultWithClassificationInfo,
            repeated: true
        }
    ]);
var SemSearchResponse_SemSearchMetadata$Runtime = (()=>class _SemSearchResponse_SemSearchMetadata extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SemSearchResponse_SemSearchMetadata().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SemSearchResponse_SemSearchMetadata().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SemSearchResponse_SemSearchMetadata().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SemSearchResponse_SemSearchMetadata, a, b2);
        }
    })();
var SemSearchResponse_SemSearchMetadata = SemSearchResponse_SemSearchMetadata$Runtime;
SemSearchResponse_SemSearchMetadata.runtime = proto3;
SemSearchResponse_SemSearchMetadata.typeName = "aiserver.v1.SemSearchResponse.SemSearchMetadata";
SemSearchResponse_SemSearchMetadata.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "query_embedding_model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "server_side_latency_ms",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 3,
            name: "embed_latency_ms",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 4,
            name: "knn_latency_ms",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
var LoginRequest$Runtime = (()=>class _LoginRequest extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _LoginRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _LoginRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _LoginRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_LoginRequest, a, b2);
        }
    })();
var LoginRequest = LoginRequest$Runtime;
LoginRequest.runtime = proto3;
LoginRequest.typeName = "aiserver.v1.LoginRequest";
LoginRequest.fields = proto3.util.newFieldList(()=>[]);
var LoginResponse$Runtime = (()=>class _LoginResponse extends Message {
        constructor(data){
            super();
            this.loginUrl = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _LoginResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _LoginResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _LoginResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_LoginResponse, a, b2);
        }
    })();
var LoginResponse = LoginResponse$Runtime;
LoginResponse.runtime = proto3;
LoginResponse.typeName = "aiserver.v1.LoginResponse";
LoginResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "login_url",
            kind: "scalar",
            T: 9
        }
    ]);
var IsLoggedInRequest$Runtime = (()=>class _IsLoggedInRequest extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _IsLoggedInRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _IsLoggedInRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _IsLoggedInRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_IsLoggedInRequest, a, b2);
        }
    })();
var IsLoggedInRequest = IsLoggedInRequest$Runtime;
IsLoggedInRequest.runtime = proto3;
IsLoggedInRequest.typeName = "aiserver.v1.IsLoggedInRequest";
IsLoggedInRequest.fields = proto3.util.newFieldList(()=>[]);
var IsLoggedInResponse$Runtime = (()=>class _IsLoggedInResponse extends Message {
        constructor(data){
            super();
            this.loggedIn = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _IsLoggedInResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _IsLoggedInResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _IsLoggedInResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_IsLoggedInResponse, a, b2);
        }
    })();
var IsLoggedInResponse = IsLoggedInResponse$Runtime;
IsLoggedInResponse.runtime = proto3;
IsLoggedInResponse.typeName = "aiserver.v1.IsLoggedInResponse";
IsLoggedInResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "logged_in",
            kind: "scalar",
            T: 8
        }
    ]);
var PollLoginRequest$Runtime = (()=>class _PollLoginRequest extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PollLoginRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PollLoginRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PollLoginRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PollLoginRequest, a, b2);
        }
    })();
var PollLoginRequest = PollLoginRequest$Runtime;
PollLoginRequest.runtime = proto3;
PollLoginRequest.typeName = "aiserver.v1.PollLoginRequest";
PollLoginRequest.fields = proto3.util.newFieldList(()=>[]);
var PollLoginResponse$Runtime = (()=>class _PollLoginResponse extends Message {
        constructor(data){
            super();
            this.status = PollLoginResponse_Status.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PollLoginResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PollLoginResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PollLoginResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PollLoginResponse, a, b2);
        }
    })();
var PollLoginResponse = PollLoginResponse$Runtime;
PollLoginResponse.runtime = proto3;
PollLoginResponse.typeName = "aiserver.v1.PollLoginResponse";
PollLoginResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(PollLoginResponse_Status)
        }
    ]);
(function(PollLoginResponse_Status2) {
    PollLoginResponse_Status2[PollLoginResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    PollLoginResponse_Status2[PollLoginResponse_Status2["LOGGED_IN"] = 1] = "LOGGED_IN";
    PollLoginResponse_Status2[PollLoginResponse_Status2["FAILURE"] = 2] = "FAILURE";
    PollLoginResponse_Status2[PollLoginResponse_Status2["CHECKING"] = 3] = "CHECKING";
})(PollLoginResponse_Status || (PollLoginResponse_Status = {}));
proto3.util.setEnumType(PollLoginResponse_Status, "aiserver.v1.PollLoginResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_LOGGED_IN"
    },
    {
        no: 2,
        name: "STATUS_FAILURE"
    },
    {
        no: 3,
        name: "STATUS_CHECKING"
    }
]);
var UpgradeScopeRequest$Runtime = (()=>class _UpgradeScopeRequest extends Message {
        constructor(data){
            super();
            this.scopes = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UpgradeScopeRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UpgradeScopeRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UpgradeScopeRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UpgradeScopeRequest, a, b2);
        }
    })();
var UpgradeScopeRequest = UpgradeScopeRequest$Runtime;
UpgradeScopeRequest.runtime = proto3;
UpgradeScopeRequest.typeName = "aiserver.v1.UpgradeScopeRequest";
UpgradeScopeRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 2,
            name: "scopes",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var UpgradeScopeResponse$Runtime = (()=>class _UpgradeScopeResponse extends Message {
        constructor(data){
            super();
            this.status = UpgradeScopeResponse_Status.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UpgradeScopeResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UpgradeScopeResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UpgradeScopeResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UpgradeScopeResponse, a, b2);
        }
    })();
var UpgradeScopeResponse = UpgradeScopeResponse$Runtime;
UpgradeScopeResponse.runtime = proto3;
UpgradeScopeResponse.typeName = "aiserver.v1.UpgradeScopeResponse";
UpgradeScopeResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(UpgradeScopeResponse_Status)
        }
    ]);
(function(UpgradeScopeResponse_Status2) {
    UpgradeScopeResponse_Status2[UpgradeScopeResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    UpgradeScopeResponse_Status2[UpgradeScopeResponse_Status2["SUCCESS"] = 1] = "SUCCESS";
    UpgradeScopeResponse_Status2[UpgradeScopeResponse_Status2["FAILURE"] = 2] = "FAILURE";
})(UpgradeScopeResponse_Status || (UpgradeScopeResponse_Status = {}));
proto3.util.setEnumType(UpgradeScopeResponse_Status, "aiserver.v1.UpgradeScopeResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_SUCCESS"
    },
    {
        no: 2,
        name: "STATUS_FAILURE"
    }
]);
var RepositoriesRequest$Runtime = (()=>class _RepositoriesRequest extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RepositoriesRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RepositoriesRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RepositoriesRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RepositoriesRequest, a, b2);
        }
    })();
var RepositoriesRequest = RepositoriesRequest$Runtime;
RepositoriesRequest.runtime = proto3;
RepositoriesRequest.typeName = "aiserver.v1.RepositoriesRequest";
RepositoriesRequest.fields = proto3.util.newFieldList(()=>[]);
var RepositoriesResponse$Runtime = (()=>class _RepositoriesResponse extends Message {
        constructor(data){
            super();
            this.repositories = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RepositoriesResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RepositoriesResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RepositoriesResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RepositoriesResponse, a, b2);
        }
    })();
var RepositoriesResponse = RepositoriesResponse$Runtime;
RepositoriesResponse.runtime = proto3;
RepositoriesResponse.typeName = "aiserver.v1.RepositoriesResponse";
RepositoriesResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "repositories",
            kind: "message",
            T: RepositoryInfo,
            repeated: true
        }
    ]);
var UploadRepositoryRequest$Runtime = (()=>class _UploadRepositoryRequest extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UploadRepositoryRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UploadRepositoryRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UploadRepositoryRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UploadRepositoryRequest, a, b2);
        }
    })();
var UploadRepositoryRequest = UploadRepositoryRequest$Runtime;
UploadRepositoryRequest.runtime = proto3;
UploadRepositoryRequest.typeName = "aiserver.v1.UploadRepositoryRequest";
UploadRepositoryRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        }
    ]);
var UploadRepositoryResponse$Runtime = (()=>class _UploadRepositoryResponse extends Message {
        constructor(data){
            super();
            this.status = UploadRepositoryResponse_Status.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _UploadRepositoryResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _UploadRepositoryResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _UploadRepositoryResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_UploadRepositoryResponse, a, b2);
        }
    })();
var UploadRepositoryResponse = UploadRepositoryResponse$Runtime;
UploadRepositoryResponse.runtime = proto3;
UploadRepositoryResponse.typeName = "aiserver.v1.UploadRepositoryResponse";
UploadRepositoryResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(UploadRepositoryResponse_Status)
        }
    ]);
(function(UploadRepositoryResponse_Status2) {
    UploadRepositoryResponse_Status2[UploadRepositoryResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    UploadRepositoryResponse_Status2[UploadRepositoryResponse_Status2["SUCCESS"] = 1] = "SUCCESS";
    UploadRepositoryResponse_Status2[UploadRepositoryResponse_Status2["FAILURE"] = 2] = "FAILURE";
    UploadRepositoryResponse_Status2[UploadRepositoryResponse_Status2["AUTH_TOKEN_BAD_PERMISSIONS"] = 3] = "AUTH_TOKEN_BAD_PERMISSIONS";
    UploadRepositoryResponse_Status2[UploadRepositoryResponse_Status2["ALREADY_EXISTS"] = 4] = "ALREADY_EXISTS";
})(UploadRepositoryResponse_Status || (UploadRepositoryResponse_Status = {}));
proto3.util.setEnumType(UploadRepositoryResponse_Status, "aiserver.v1.UploadRepositoryResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_SUCCESS"
    },
    {
        no: 2,
        name: "STATUS_FAILURE"
    },
    {
        no: 3,
        name: "STATUS_AUTH_TOKEN_BAD_PERMISSIONS"
    },
    {
        no: 4,
        name: "STATUS_ALREADY_EXISTS"
    }
]);
var RepositoryStatusRequest$Runtime = (()=>class _RepositoryStatusRequest extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RepositoryStatusRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RepositoryStatusRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RepositoryStatusRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RepositoryStatusRequest, a, b2);
        }
    })();
var RepositoryStatusRequest = RepositoryStatusRequest$Runtime;
RepositoryStatusRequest.runtime = proto3;
RepositoryStatusRequest.typeName = "aiserver.v1.RepositoryStatusRequest";
RepositoryStatusRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        }
    ]);
var RepositoryStatusResponse$Runtime = (()=>class _RepositoryStatusResponse extends Message {
        constructor(data){
            super();
            this.status = {
                case: void 0
            };
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RepositoryStatusResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RepositoryStatusResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RepositoryStatusResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RepositoryStatusResponse, a, b2);
        }
    })();
var RepositoryStatusResponse = RepositoryStatusResponse$Runtime;
RepositoryStatusResponse.runtime = proto3;
RepositoryStatusResponse.typeName = "aiserver.v1.RepositoryStatusResponse";
RepositoryStatusResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "not_found",
            kind: "message",
            T: RepositoryStatusResponse_NotFound,
            oneof: "status"
        },
        {
            no: 2,
            name: "uploading",
            kind: "message",
            T: RepositoryStatusResponse_Uploading,
            oneof: "status"
        },
        {
            no: 3,
            name: "syncing",
            kind: "message",
            T: RepositoryStatusResponse_Syncing,
            oneof: "status"
        },
        {
            no: 4,
            name: "synced",
            kind: "message",
            T: RepositoryStatusResponse_Synced,
            oneof: "status"
        },
        {
            no: 5,
            name: "not_subscribed",
            kind: "message",
            T: RepositoryStatusResponse_NotSubscribed,
            oneof: "status"
        },
        {
            no: 6,
            name: "too_big",
            kind: "message",
            T: RepositoryStatusResponse_TooBig,
            oneof: "status"
        },
        {
            no: 7,
            name: "auth_token_not_found",
            kind: "message",
            T: RepositoryStatusResponse_AuthTokenNotFound,
            oneof: "status"
        },
        {
            no: 8,
            name: "auth_token_not_authorized",
            kind: "message",
            T: RepositoryStatusResponse_AuthTokenNotAuthorized,
            oneof: "status"
        },
        {
            no: 10,
            name: "error_uploading",
            kind: "message",
            T: RepositoryStatusResponse_EmptyMessage,
            oneof: "status"
        },
        {
            no: 11,
            name: "error_syncing",
            kind: "message",
            T: RepositoryStatusResponse_EmptyMessage,
            oneof: "status"
        },
        {
            no: 9,
            name: "is_owner",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
var RepositoryStatusResponse_NotFound$Runtime = (()=>class _RepositoryStatusResponse_NotFound extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RepositoryStatusResponse_NotFound().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RepositoryStatusResponse_NotFound().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RepositoryStatusResponse_NotFound().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RepositoryStatusResponse_NotFound, a, b2);
        }
    })();
var RepositoryStatusResponse_NotFound = RepositoryStatusResponse_NotFound$Runtime;
RepositoryStatusResponse_NotFound.runtime = proto3;
RepositoryStatusResponse_NotFound.typeName = "aiserver.v1.RepositoryStatusResponse.NotFound";
RepositoryStatusResponse_NotFound.fields = proto3.util.newFieldList(()=>[]);
var RepositoryStatusResponse_NotSubscribed$Runtime = (()=>class _RepositoryStatusResponse_NotSubscribed extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RepositoryStatusResponse_NotSubscribed().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RepositoryStatusResponse_NotSubscribed().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RepositoryStatusResponse_NotSubscribed().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RepositoryStatusResponse_NotSubscribed, a, b2);
        }
    })();
var RepositoryStatusResponse_NotSubscribed = RepositoryStatusResponse_NotSubscribed$Runtime;
RepositoryStatusResponse_NotSubscribed.runtime = proto3;
RepositoryStatusResponse_NotSubscribed.typeName = "aiserver.v1.RepositoryStatusResponse.NotSubscribed";
RepositoryStatusResponse_NotSubscribed.fields = proto3.util.newFieldList(()=>[]);
var RepositoryStatusResponse_Uploading$Runtime = (()=>class _RepositoryStatusResponse_Uploading extends Message {
        constructor(data){
            super();
            this.progress = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RepositoryStatusResponse_Uploading().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RepositoryStatusResponse_Uploading().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RepositoryStatusResponse_Uploading().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RepositoryStatusResponse_Uploading, a, b2);
        }
    })();
var RepositoryStatusResponse_Uploading = RepositoryStatusResponse_Uploading$Runtime;
RepositoryStatusResponse_Uploading.runtime = proto3;
RepositoryStatusResponse_Uploading.typeName = "aiserver.v1.RepositoryStatusResponse.Uploading";
RepositoryStatusResponse_Uploading.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "progress",
            kind: "scalar",
            T: 2
        }
    ]);
var RepositoryStatusResponse_Syncing$Runtime = (()=>class _RepositoryStatusResponse_Syncing extends Message {
        constructor(data){
            super();
            this.branch = "";
            this.oldCommit = "";
            this.newCommit = "";
            this.progress = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RepositoryStatusResponse_Syncing().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RepositoryStatusResponse_Syncing().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RepositoryStatusResponse_Syncing().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RepositoryStatusResponse_Syncing, a, b2);
        }
    })();
var RepositoryStatusResponse_Syncing = RepositoryStatusResponse_Syncing$Runtime;
RepositoryStatusResponse_Syncing.runtime = proto3;
RepositoryStatusResponse_Syncing.typeName = "aiserver.v1.RepositoryStatusResponse.Syncing";
RepositoryStatusResponse_Syncing.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "branch",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "old_commit",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "new_commit",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "progress",
            kind: "scalar",
            T: 2
        }
    ]);
var RepositoryStatusResponse_Synced$Runtime = (()=>class _RepositoryStatusResponse_Synced extends Message {
        constructor(data){
            super();
            this.branch = "";
            this.commit = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RepositoryStatusResponse_Synced().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RepositoryStatusResponse_Synced().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RepositoryStatusResponse_Synced().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RepositoryStatusResponse_Synced, a, b2);
        }
    })();
var RepositoryStatusResponse_Synced = RepositoryStatusResponse_Synced$Runtime;
RepositoryStatusResponse_Synced.runtime = proto3;
RepositoryStatusResponse_Synced.typeName = "aiserver.v1.RepositoryStatusResponse.Synced";
RepositoryStatusResponse_Synced.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "branch",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "commit",
            kind: "scalar",
            T: 9
        }
    ]);
var RepositoryStatusResponse_TooBig$Runtime = (()=>class _RepositoryStatusResponse_TooBig extends Message {
        constructor(data){
            super();
            this.maxSize = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RepositoryStatusResponse_TooBig().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RepositoryStatusResponse_TooBig().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RepositoryStatusResponse_TooBig().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RepositoryStatusResponse_TooBig, a, b2);
        }
    })();
var RepositoryStatusResponse_TooBig = RepositoryStatusResponse_TooBig$Runtime;
RepositoryStatusResponse_TooBig.runtime = proto3;
RepositoryStatusResponse_TooBig.typeName = "aiserver.v1.RepositoryStatusResponse.TooBig";
RepositoryStatusResponse_TooBig.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "max_size",
            kind: "scalar",
            T: 5
        }
    ]);
var RepositoryStatusResponse_AuthTokenNotFound$Runtime = (()=>class _RepositoryStatusResponse_AuthTokenNotFound extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RepositoryStatusResponse_AuthTokenNotFound().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RepositoryStatusResponse_AuthTokenNotFound().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RepositoryStatusResponse_AuthTokenNotFound().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RepositoryStatusResponse_AuthTokenNotFound, a, b2);
        }
    })();
var RepositoryStatusResponse_AuthTokenNotFound = RepositoryStatusResponse_AuthTokenNotFound$Runtime;
RepositoryStatusResponse_AuthTokenNotFound.runtime = proto3;
RepositoryStatusResponse_AuthTokenNotFound.typeName = "aiserver.v1.RepositoryStatusResponse.AuthTokenNotFound";
RepositoryStatusResponse_AuthTokenNotFound.fields = proto3.util.newFieldList(()=>[]);
var RepositoryStatusResponse_AuthTokenNotAuthorized$Runtime = (()=>class _RepositoryStatusResponse_AuthTokenNotAuthorized extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RepositoryStatusResponse_AuthTokenNotAuthorized().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RepositoryStatusResponse_AuthTokenNotAuthorized().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RepositoryStatusResponse_AuthTokenNotAuthorized().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RepositoryStatusResponse_AuthTokenNotAuthorized, a, b2);
        }
    })();
var RepositoryStatusResponse_AuthTokenNotAuthorized = RepositoryStatusResponse_AuthTokenNotAuthorized$Runtime;
RepositoryStatusResponse_AuthTokenNotAuthorized.runtime = proto3;
RepositoryStatusResponse_AuthTokenNotAuthorized.typeName = "aiserver.v1.RepositoryStatusResponse.AuthTokenNotAuthorized";
RepositoryStatusResponse_AuthTokenNotAuthorized.fields = proto3.util.newFieldList(()=>[]);
var RepositoryStatusResponse_EmptyMessage$Runtime = (()=>class _RepositoryStatusResponse_EmptyMessage extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RepositoryStatusResponse_EmptyMessage().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RepositoryStatusResponse_EmptyMessage().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RepositoryStatusResponse_EmptyMessage().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RepositoryStatusResponse_EmptyMessage, a, b2);
        }
    })();
var RepositoryStatusResponse_EmptyMessage = RepositoryStatusResponse_EmptyMessage$Runtime;
RepositoryStatusResponse_EmptyMessage.runtime = proto3;
RepositoryStatusResponse_EmptyMessage.typeName = "aiserver.v1.RepositoryStatusResponse.EmptyMessage";
RepositoryStatusResponse_EmptyMessage.fields = proto3.util.newFieldList(()=>[]);
var RepositoryInfo$Runtime = (()=>class _RepositoryInfo extends Message {
        constructor(data){
            super();
            this.relativeWorkspacePath = "";
            this.remoteUrls = [];
            this.remoteNames = [];
            this.repoName = "";
            this.repoOwner = "";
            this.isTracked = false;
            this.isLocal = false;
            this.workspaceUri = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RepositoryInfo().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RepositoryInfo().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RepositoryInfo().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RepositoryInfo, a, b2);
        }
    })();
var RepositoryInfo = RepositoryInfo$Runtime;
RepositoryInfo.runtime = proto3;
RepositoryInfo.typeName = "aiserver.v1.RepositoryInfo";
RepositoryInfo.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "remote_urls",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "remote_names",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 4,
            name: "repo_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "repo_owner",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "is_tracked",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "is_local",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "num_files",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 9,
            name: "orthogonal_transform_seed",
            kind: "scalar",
            T: 1,
            opt: true
        },
        {
            no: 10,
            name: "preferred_embedding_model",
            kind: "enum",
            T: proto3.getEnumType(EmbeddingModel),
            opt: true
        },
        {
            no: 11,
            name: "workspace_uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "preferred_db_provider",
            kind: "enum",
            T: proto3.getEnumType(DatabaseProvider),
            opt: true
        }
    ]);
var SearchRepositoryDeepContextRequest$Runtime = (()=>class _SearchRepositoryDeepContextRequest extends Message {
        constructor(data){
            super();
            this.query = "";
            this.topK = 0;
            this.topReflectionsK = 0;
            this.indexIds = [];
            this.useModelOnFiles = false;
            this.useReflections = false;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SearchRepositoryDeepContextRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SearchRepositoryDeepContextRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SearchRepositoryDeepContextRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SearchRepositoryDeepContextRequest, a, b2);
        }
    })();
var SearchRepositoryDeepContextRequest = SearchRepositoryDeepContextRequest$Runtime;
SearchRepositoryDeepContextRequest.runtime = proto3;
SearchRepositoryDeepContextRequest.typeName = "aiserver.v1.SearchRepositoryDeepContextRequest";
SearchRepositoryDeepContextRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "top_k",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "top_reflections_k",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "index_ids",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "use_model_on_files",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "use_reflections",
            kind: "scalar",
            T: 8
        }
    ]);
var NodeResult$Runtime = (()=>class _NodeResult extends Message {
        constructor(data){
            super();
            this.score = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _NodeResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _NodeResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _NodeResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_NodeResult, a, b2);
        }
    })();
var NodeResult = NodeResult$Runtime;
NodeResult.runtime = proto3;
NodeResult.typeName = "aiserver.v1.NodeResult";
NodeResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "node",
            kind: "message",
            T: IndexFileData_NodeData
        },
        {
            no: 2,
            name: "file",
            kind: "message",
            T: File2
        },
        {
            no: 3,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ]);
var ReflectionResult$Runtime = (()=>class _ReflectionResult extends Message {
        constructor(data){
            super();
            this.score = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _ReflectionResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _ReflectionResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _ReflectionResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_ReflectionResult, a, b2);
        }
    })();
var ReflectionResult = ReflectionResult$Runtime;
ReflectionResult.runtime = proto3;
ReflectionResult.typeName = "aiserver.v1.ReflectionResult";
ReflectionResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "reflection",
            kind: "message",
            T: ReflectionData
        },
        {
            no: 2,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ]);
var SearchRepositoryDeepContextResponse$Runtime = (()=>class _SearchRepositoryDeepContextResponse extends Message {
        constructor(data){
            super();
            this.topNodes = [];
            this.reflections = [];
            this.indexId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SearchRepositoryDeepContextResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SearchRepositoryDeepContextResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SearchRepositoryDeepContextResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SearchRepositoryDeepContextResponse, a, b2);
        }
    })();
var SearchRepositoryDeepContextResponse = SearchRepositoryDeepContextResponse$Runtime;
SearchRepositoryDeepContextResponse.runtime = proto3;
SearchRepositoryDeepContextResponse.typeName = "aiserver.v1.SearchRepositoryDeepContextResponse";
SearchRepositoryDeepContextResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "top_nodes",
            kind: "message",
            T: NodeResult,
            repeated: true
        },
        {
            no: 2,
            name: "reflections",
            kind: "message",
            T: ReflectionResult,
            repeated: true
        },
        {
            no: 3,
            name: "index_id",
            kind: "scalar",
            T: 9
        }
    ]);
var GetLineNumberClassificationsRequest$Runtime = (()=>class _GetLineNumberClassificationsRequest extends Message {
        constructor(data){
            super();
            this.query = "";
            this.codeResults = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetLineNumberClassificationsRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetLineNumberClassificationsRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetLineNumberClassificationsRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetLineNumberClassificationsRequest, a, b2);
        }
    })();
var GetLineNumberClassificationsRequest = GetLineNumberClassificationsRequest$Runtime;
GetLineNumberClassificationsRequest.runtime = proto3;
GetLineNumberClassificationsRequest.typeName = "aiserver.v1.GetLineNumberClassificationsRequest";
GetLineNumberClassificationsRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "code_results",
            kind: "message",
            T: CodeResult,
            repeated: true
        }
    ]);
var GetLineNumberClassificationsResponse$Runtime = (()=>class _GetLineNumberClassificationsResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetLineNumberClassificationsResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetLineNumberClassificationsResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetLineNumberClassificationsResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetLineNumberClassificationsResponse, a, b2);
        }
    })();
var GetLineNumberClassificationsResponse = GetLineNumberClassificationsResponse$Runtime;
GetLineNumberClassificationsResponse.runtime = proto3;
GetLineNumberClassificationsResponse.typeName = "aiserver.v1.GetLineNumberClassificationsResponse";
GetLineNumberClassificationsResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "classified_result",
            kind: "message",
            T: CodeResultWithClassificationInfo
        }
    ]);
var GetCopyStatusRequest$Runtime = (()=>class _GetCopyStatusRequest extends Message {
        constructor(data){
            super();
            this.codebaseId = "";
            this.copyTaskHandle = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetCopyStatusRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetCopyStatusRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetCopyStatusRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetCopyStatusRequest, a, b2);
        }
    })();
var GetCopyStatusRequest = GetCopyStatusRequest$Runtime;
GetCopyStatusRequest.runtime = proto3;
GetCopyStatusRequest.typeName = "aiserver.v1.GetCopyStatusRequest";
GetCopyStatusRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "codebase_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "copy_task_handle",
            kind: "scalar",
            T: 9
        }
    ]);
var GetCopyStatusResponse$Runtime = (()=>class _GetCopyStatusResponse extends Message {
        constructor(data){
            super();
            this.phase = GetCopyStatusResponse_Phase.UNSPECIFIED;
            this.percentDone = 0;
            this.errorMessage = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetCopyStatusResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetCopyStatusResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetCopyStatusResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetCopyStatusResponse, a, b2);
        }
    })();
var GetCopyStatusResponse = GetCopyStatusResponse$Runtime;
GetCopyStatusResponse.runtime = proto3;
GetCopyStatusResponse.typeName = "aiserver.v1.GetCopyStatusResponse";
GetCopyStatusResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "phase",
            kind: "enum",
            T: proto3.getEnumType(GetCopyStatusResponse_Phase)
        },
        {
            no: 2,
            name: "percent_done",
            kind: "scalar",
            T: 2
        },
        {
            no: 3,
            name: "error_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "completed_status",
            kind: "enum",
            T: proto3.getEnumType(GetCopyStatusResponse_CompletedStatus),
            opt: true
        }
    ]);
(function(GetCopyStatusResponse_Phase2) {
    GetCopyStatusResponse_Phase2[GetCopyStatusResponse_Phase2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    GetCopyStatusResponse_Phase2[GetCopyStatusResponse_Phase2["INITIALIZING"] = 1] = "INITIALIZING";
    GetCopyStatusResponse_Phase2[GetCopyStatusResponse_Phase2["COPYING"] = 2] = "COPYING";
    GetCopyStatusResponse_Phase2[GetCopyStatusResponse_Phase2["COMPLETED"] = 3] = "COMPLETED";
    GetCopyStatusResponse_Phase2[GetCopyStatusResponse_Phase2["CREATING_SEARCH_FILTERS"] = 4] = "CREATING_SEARCH_FILTERS";
    GetCopyStatusResponse_Phase2[GetCopyStatusResponse_Phase2["COPYING_SEARCH_STATE"] = 5] = "COPYING_SEARCH_STATE";
    GetCopyStatusResponse_Phase2[GetCopyStatusResponse_Phase2["COPYING_TREE_STATE"] = 6] = "COPYING_TREE_STATE";
    GetCopyStatusResponse_Phase2[GetCopyStatusResponse_Phase2["SYNCING_COPY"] = 7] = "SYNCING_COPY";
})(GetCopyStatusResponse_Phase || (GetCopyStatusResponse_Phase = {}));
proto3.util.setEnumType(GetCopyStatusResponse_Phase, "aiserver.v1.GetCopyStatusResponse.Phase", [
    {
        no: 0,
        name: "PHASE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "PHASE_INITIALIZING"
    },
    {
        no: 2,
        name: "PHASE_COPYING"
    },
    {
        no: 3,
        name: "PHASE_COMPLETED"
    },
    {
        no: 4,
        name: "PHASE_CREATING_SEARCH_FILTERS"
    },
    {
        no: 5,
        name: "PHASE_COPYING_SEARCH_STATE"
    },
    {
        no: 6,
        name: "PHASE_COPYING_TREE_STATE"
    },
    {
        no: 7,
        name: "PHASE_SYNCING_COPY"
    }
]);
(function(GetCopyStatusResponse_CompletedStatus2) {
    GetCopyStatusResponse_CompletedStatus2[GetCopyStatusResponse_CompletedStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    GetCopyStatusResponse_CompletedStatus2[GetCopyStatusResponse_CompletedStatus2["UP_TO_DATE"] = 1] = "UP_TO_DATE";
    GetCopyStatusResponse_CompletedStatus2[GetCopyStatusResponse_CompletedStatus2["OUT_OF_SYNC"] = 2] = "OUT_OF_SYNC";
    GetCopyStatusResponse_CompletedStatus2[GetCopyStatusResponse_CompletedStatus2["FAILURE"] = 3] = "FAILURE";
})(GetCopyStatusResponse_CompletedStatus || (GetCopyStatusResponse_CompletedStatus = {}));
proto3.util.setEnumType(GetCopyStatusResponse_CompletedStatus, "aiserver.v1.GetCopyStatusResponse.CompletedStatus", [
    {
        no: 0,
        name: "COMPLETED_STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "COMPLETED_STATUS_UP_TO_DATE"
    },
    {
        no: 2,
        name: "COMPLETED_STATUS_OUT_OF_SYNC"
    },
    {
        no: 3,
        name: "COMPLETED_STATUS_FAILURE"
    }
]);
var IndexedFile$Runtime = (()=>class _IndexedFile extends Message {
        constructor(data){
            super();
            this.path = "";
            this.diff = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _IndexedFile().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _IndexedFile().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _IndexedFile().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_IndexedFile, a, b2);
        }
    })();
var IndexedFile = IndexedFile$Runtime;
IndexedFile.runtime = proto3;
IndexedFile.typeName = "aiserver.v1.IndexedFile";
IndexedFile.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "diff",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var IndexedPullRequest$Runtime = (()=>class _IndexedPullRequest extends Message {
        constructor(data){
            super();
            this.prNumber = 0;
            this.sha = "";
            this.message = "";
            this.changedFiles = [];
            this.generation = 0;
            this.commitSecret = "";
            this.unixTimestamp = protoInt64.zero;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _IndexedPullRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _IndexedPullRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _IndexedPullRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_IndexedPullRequest, a, b2);
        }
    })();
var IndexedPullRequest = IndexedPullRequest$Runtime;
IndexedPullRequest.runtime = proto3;
IndexedPullRequest.typeName = "aiserver.v1.IndexedPullRequest";
IndexedPullRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "pr_number",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "changed_files",
            kind: "message",
            T: IndexedFile,
            repeated: true
        },
        {
            no: 5,
            name: "generation",
            kind: "scalar",
            T: 13
        },
        {
            no: 6,
            name: "commit_secret",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "unix_timestamp",
            kind: "scalar",
            T: 3
        },
        {
            no: 8,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "author",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
var RepoHistoryInitHandshakeRequest$Runtime = (()=>class _RepoHistoryInitHandshakeRequest extends Message {
        constructor(data){
            super();
            this.origin = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RepoHistoryInitHandshakeRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RepoHistoryInitHandshakeRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RepoHistoryInitHandshakeRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RepoHistoryInitHandshakeRequest, a, b2);
        }
    })();
var RepoHistoryInitHandshakeRequest = RepoHistoryInitHandshakeRequest$Runtime;
RepoHistoryInitHandshakeRequest.runtime = proto3;
RepoHistoryInitHandshakeRequest.typeName = "aiserver.v1.RepoHistoryInitHandshakeRequest";
RepoHistoryInitHandshakeRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        },
        {
            no: 2,
            name: "origin",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "test_origin_commit",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "test_origin_commit_secret",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "send_copy_candidates",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
var RepoHistoryInfo$Runtime = (()=>class _RepoHistoryInfo extends Message {
        constructor(data){
            super();
            this.historyId = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RepoHistoryInfo().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RepoHistoryInfo().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RepoHistoryInfo().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RepoHistoryInfo, a, b2);
        }
    })();
var RepoHistoryInfo = RepoHistoryInfo$Runtime;
RepoHistoryInfo.runtime = proto3;
RepoHistoryInfo.typeName = "aiserver.v1.RepoHistoryInfo";
RepoHistoryInfo.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "history_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "branch_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "last_indexed_commit",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "last_indexed_commit_generation",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 5,
            name: "sync_bitmap",
            kind: "scalar",
            T: 12,
            opt: true
        }
    ]);
var RepoHistoryInitHandshakeResponse$Runtime = (()=>class _RepoHistoryInitHandshakeResponse extends Message {
        constructor(data){
            super();
            this.status = RepoHistoryInitHandshakeResponse_Status.UNSPECIFIED;
            this.histories = [];
            this.copyCandidates = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RepoHistoryInitHandshakeResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RepoHistoryInitHandshakeResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RepoHistoryInitHandshakeResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RepoHistoryInitHandshakeResponse, a, b2);
        }
    })();
var RepoHistoryInitHandshakeResponse = RepoHistoryInitHandshakeResponse$Runtime;
RepoHistoryInitHandshakeResponse.runtime = proto3;
RepoHistoryInitHandshakeResponse.typeName = "aiserver.v1.RepoHistoryInitHandshakeResponse";
RepoHistoryInitHandshakeResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(RepoHistoryInitHandshakeResponse_Status)
        },
        {
            no: 2,
            name: "histories",
            kind: "message",
            T: RepoHistoryInfo,
            repeated: true
        },
        {
            no: 3,
            name: "copy_candidate_nonce",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "copy_candidates",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "error_message",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
(function(RepoHistoryInitHandshakeResponse_Status2) {
    RepoHistoryInitHandshakeResponse_Status2[RepoHistoryInitHandshakeResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    RepoHistoryInitHandshakeResponse_Status2[RepoHistoryInitHandshakeResponse_Status2["FAILURE"] = 1] = "FAILURE";
    RepoHistoryInitHandshakeResponse_Status2[RepoHistoryInitHandshakeResponse_Status2["SUCCESS"] = 2] = "SUCCESS";
    RepoHistoryInitHandshakeResponse_Status2[RepoHistoryInitHandshakeResponse_Status2["TEST_CANDIDATES"] = 3] = "TEST_CANDIDATES";
    RepoHistoryInitHandshakeResponse_Status2[RepoHistoryInitHandshakeResponse_Status2["NO_INDEXING"] = 4] = "NO_INDEXING";
})(RepoHistoryInitHandshakeResponse_Status || (RepoHistoryInitHandshakeResponse_Status = {}));
proto3.util.setEnumType(RepoHistoryInitHandshakeResponse_Status, "aiserver.v1.RepoHistoryInitHandshakeResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_FAILURE"
    },
    {
        no: 2,
        name: "STATUS_SUCCESS"
    },
    {
        no: 3,
        name: "STATUS_TEST_CANDIDATES"
    },
    {
        no: 4,
        name: "STATUS_NO_INDEXING"
    }
]);
var RepoHistorySyncOneRequest$Runtime = (()=>class _RepoHistorySyncOneRequest extends Message {
        constructor(data){
            super();
            this.historyId = "";
            this.pullRequests = [];
            this.ignoreCommits = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RepoHistorySyncOneRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RepoHistorySyncOneRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RepoHistorySyncOneRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RepoHistorySyncOneRequest, a, b2);
        }
    })();
var RepoHistorySyncOneRequest = RepoHistorySyncOneRequest$Runtime;
RepoHistorySyncOneRequest.runtime = proto3;
RepoHistorySyncOneRequest.typeName = "aiserver.v1.RepoHistorySyncOneRequest";
RepoHistorySyncOneRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "history_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "pull_requests",
            kind: "message",
            T: IndexedPullRequest,
            repeated: true
        },
        {
            no: 3,
            name: "ignore_commits",
            kind: "scalar",
            T: 13,
            repeated: true
        }
    ]);
var RepoHistorySyncOneResponse$Runtime = (()=>class _RepoHistorySyncOneResponse extends Message {
        constructor(data){
            super();
            this.status = RepoHistorySyncOneResponse_Status.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RepoHistorySyncOneResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RepoHistorySyncOneResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RepoHistorySyncOneResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RepoHistorySyncOneResponse, a, b2);
        }
    })();
var RepoHistorySyncOneResponse = RepoHistorySyncOneResponse$Runtime;
RepoHistorySyncOneResponse.runtime = proto3;
RepoHistorySyncOneResponse.typeName = "aiserver.v1.RepoHistorySyncOneResponse";
RepoHistorySyncOneResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(RepoHistorySyncOneResponse_Status)
        }
    ]);
(function(RepoHistorySyncOneResponse_Status2) {
    RepoHistorySyncOneResponse_Status2[RepoHistorySyncOneResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    RepoHistorySyncOneResponse_Status2[RepoHistorySyncOneResponse_Status2["SUCCESS"] = 1] = "SUCCESS";
    RepoHistorySyncOneResponse_Status2[RepoHistorySyncOneResponse_Status2["FAILURE"] = 2] = "FAILURE";
    RepoHistorySyncOneResponse_Status2[RepoHistorySyncOneResponse_Status2["PARTIAL_SUCCESS"] = 3] = "PARTIAL_SUCCESS";
    RepoHistorySyncOneResponse_Status2[RepoHistorySyncOneResponse_Status2["NOT_INDEXING"] = 4] = "NOT_INDEXING";
})(RepoHistorySyncOneResponse_Status || (RepoHistorySyncOneResponse_Status = {}));
proto3.util.setEnumType(RepoHistorySyncOneResponse_Status, "aiserver.v1.RepoHistorySyncOneResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_SUCCESS"
    },
    {
        no: 2,
        name: "STATUS_FAILURE"
    },
    {
        no: 3,
        name: "STATUS_PARTIAL_SUCCESS"
    },
    {
        no: 4,
        name: "STATUS_NOT_INDEXING"
    }
]);
var RepoHistorySyncCompleteRequest$Runtime = (()=>class _RepoHistorySyncCompleteRequest extends Message {
        constructor(data){
            super();
            this.syncedHistories = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RepoHistorySyncCompleteRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RepoHistorySyncCompleteRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RepoHistorySyncCompleteRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RepoHistorySyncCompleteRequest, a, b2);
        }
    })();
var RepoHistorySyncCompleteRequest = RepoHistorySyncCompleteRequest$Runtime;
RepoHistorySyncCompleteRequest.runtime = proto3;
RepoHistorySyncCompleteRequest.typeName = "aiserver.v1.RepoHistorySyncCompleteRequest";
RepoHistorySyncCompleteRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "synced_histories",
            kind: "message",
            T: RepoHistorySyncCompleteRequest_SyncedHistory,
            repeated: true
        }
    ]);
(function(RepoHistorySyncCompleteRequest_Status2) {
    RepoHistorySyncCompleteRequest_Status2[RepoHistorySyncCompleteRequest_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    RepoHistorySyncCompleteRequest_Status2[RepoHistorySyncCompleteRequest_Status2["SUCCESS"] = 1] = "SUCCESS";
    RepoHistorySyncCompleteRequest_Status2[RepoHistorySyncCompleteRequest_Status2["FAILURE"] = 2] = "FAILURE";
    RepoHistorySyncCompleteRequest_Status2[RepoHistorySyncCompleteRequest_Status2["TOTAL_FAILURE"] = 3] = "TOTAL_FAILURE";
    RepoHistorySyncCompleteRequest_Status2[RepoHistorySyncCompleteRequest_Status2["INTERRUPTED"] = 4] = "INTERRUPTED";
})(RepoHistorySyncCompleteRequest_Status || (RepoHistorySyncCompleteRequest_Status = {}));
proto3.util.setEnumType(RepoHistorySyncCompleteRequest_Status, "aiserver.v1.RepoHistorySyncCompleteRequest.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_SUCCESS"
    },
    {
        no: 2,
        name: "STATUS_FAILURE"
    },
    {
        no: 3,
        name: "STATUS_TOTAL_FAILURE"
    },
    {
        no: 4,
        name: "STATUS_INTERRUPTED"
    }
]);
var RepoHistorySyncCompleteRequest_SyncedHistory$Runtime = (()=>class _RepoHistorySyncCompleteRequest_SyncedHistory extends Message {
        constructor(data){
            super();
            this.historyId = "";
            this.status = RepoHistorySyncCompleteRequest_Status.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RepoHistorySyncCompleteRequest_SyncedHistory().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RepoHistorySyncCompleteRequest_SyncedHistory().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RepoHistorySyncCompleteRequest_SyncedHistory().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RepoHistorySyncCompleteRequest_SyncedHistory, a, b2);
        }
    })();
var RepoHistorySyncCompleteRequest_SyncedHistory = RepoHistorySyncCompleteRequest_SyncedHistory$Runtime;
RepoHistorySyncCompleteRequest_SyncedHistory.runtime = proto3;
RepoHistorySyncCompleteRequest_SyncedHistory.typeName = "aiserver.v1.RepoHistorySyncCompleteRequest.SyncedHistory";
RepoHistorySyncCompleteRequest_SyncedHistory.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "history_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(RepoHistorySyncCompleteRequest_Status)
        },
        {
            no: 3,
            name: "last_indexed_commit",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "last_indexed_commit_secret",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "last_indexed_commit_generation",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
var RepoHistorySyncCompleteResponse$Runtime = (()=>class _RepoHistorySyncCompleteResponse extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RepoHistorySyncCompleteResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RepoHistorySyncCompleteResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RepoHistorySyncCompleteResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RepoHistorySyncCompleteResponse, a, b2);
        }
    })();
var RepoHistorySyncCompleteResponse = RepoHistorySyncCompleteResponse$Runtime;
RepoHistorySyncCompleteResponse.runtime = proto3;
RepoHistorySyncCompleteResponse.typeName = "aiserver.v1.RepoHistorySyncCompleteResponse";
RepoHistorySyncCompleteResponse.fields = proto3.util.newFieldList(()=>[]);
var SearchPRHistoryRequest$Runtime = (()=>class _SearchPRHistoryRequest extends Message {
        constructor(data){
            super();
            this.query = "";
            this.topK = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SearchPRHistoryRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SearchPRHistoryRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SearchPRHistoryRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SearchPRHistoryRequest, a, b2);
        }
    })();
var SearchPRHistoryRequest = SearchPRHistoryRequest$Runtime;
SearchPRHistoryRequest.runtime = proto3;
SearchPRHistoryRequest.typeName = "aiserver.v1.SearchPRHistoryRequest";
SearchPRHistoryRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        },
        {
            no: 2,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "top_k",
            kind: "scalar",
            T: 5
        }
    ]);
var PRDiffChunkPointer$Runtime = (()=>class _PRDiffChunkPointer extends Message {
        constructor(data){
            super();
            this.filePath = "";
            this.startLineNumberZeroIndexed = 0;
            this.endLineNumberZeroIndexedExclusive = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _PRDiffChunkPointer().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _PRDiffChunkPointer().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _PRDiffChunkPointer().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_PRDiffChunkPointer, a, b2);
        }
    })();
var PRDiffChunkPointer = PRDiffChunkPointer$Runtime;
PRDiffChunkPointer.runtime = proto3;
PRDiffChunkPointer.typeName = "aiserver.v1.PRDiffChunkPointer";
PRDiffChunkPointer.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line_number_zero_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "end_line_number_zero_indexed_exclusive",
            kind: "scalar",
            T: 5
        }
    ]);
var SearchPRHistoryResponse$Runtime = (()=>class _SearchPRHistoryResponse extends Message {
        constructor(data){
            super();
            this.results = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SearchPRHistoryResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SearchPRHistoryResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SearchPRHistoryResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SearchPRHistoryResponse, a, b2);
        }
    })();
var SearchPRHistoryResponse = SearchPRHistoryResponse$Runtime;
SearchPRHistoryResponse.runtime = proto3;
SearchPRHistoryResponse.typeName = "aiserver.v1.SearchPRHistoryResponse";
SearchPRHistoryResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: SearchPRHistoryResponse_PRSearchResult,
            repeated: true
        },
        {
            no: 2,
            name: "git_height",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
var SearchPRHistoryResponse_PRSearchResult$Runtime = (()=>class _SearchPRHistoryResponse_PRSearchResult extends Message {
        constructor(data){
            super();
            this.commitHash = "";
            this.score = 0;
            this.diffChunks = [];
            this.changedFiles = [];
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _SearchPRHistoryResponse_PRSearchResult().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _SearchPRHistoryResponse_PRSearchResult().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _SearchPRHistoryResponse_PRSearchResult().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_SearchPRHistoryResponse_PRSearchResult, a, b2);
        }
    })();
var SearchPRHistoryResponse_PRSearchResult = SearchPRHistoryResponse_PRSearchResult$Runtime;
SearchPRHistoryResponse_PRSearchResult.runtime = proto3;
SearchPRHistoryResponse_PRSearchResult.typeName = "aiserver.v1.SearchPRHistoryResponse.PRSearchResult";
SearchPRHistoryResponse_PRSearchResult.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "commit_hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "score",
            kind: "scalar",
            T: 2
        },
        {
            no: 3,
            name: "diff_chunks",
            kind: "message",
            T: PRDiffChunkPointer,
            repeated: true
        },
        {
            no: 4,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "summary",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "pr_number",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 7,
            name: "author",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "date",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "changed_files",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
var RemoveRepoHistoryRequest$Runtime = (()=>class _RemoveRepoHistoryRequest extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RemoveRepoHistoryRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RemoveRepoHistoryRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RemoveRepoHistoryRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RemoveRepoHistoryRequest, a, b2);
        }
    })();
var RemoveRepoHistoryRequest = RemoveRepoHistoryRequest$Runtime;
RemoveRepoHistoryRequest.runtime = proto3;
RemoveRepoHistoryRequest.typeName = "aiserver.v1.RemoveRepoHistoryRequest";
RemoveRepoHistoryRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        }
    ]);
var RemoveRepoHistoryResponse$Runtime = (()=>class _RemoveRepoHistoryResponse extends Message {
        constructor(data){
            super();
            this.status = RemoveRepoHistoryResponse_Status.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RemoveRepoHistoryResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RemoveRepoHistoryResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RemoveRepoHistoryResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RemoveRepoHistoryResponse, a, b2);
        }
    })();
var RemoveRepoHistoryResponse = RemoveRepoHistoryResponse$Runtime;
RemoveRepoHistoryResponse.runtime = proto3;
RemoveRepoHistoryResponse.typeName = "aiserver.v1.RemoveRepoHistoryResponse";
RemoveRepoHistoryResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(RemoveRepoHistoryResponse_Status)
        }
    ]);
(function(RemoveRepoHistoryResponse_Status2) {
    RemoveRepoHistoryResponse_Status2[RemoveRepoHistoryResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    RemoveRepoHistoryResponse_Status2[RemoveRepoHistoryResponse_Status2["NOT_FOUND"] = 1] = "NOT_FOUND";
    RemoveRepoHistoryResponse_Status2[RemoveRepoHistoryResponse_Status2["NOT_AUTHORIZED"] = 2] = "NOT_AUTHORIZED";
    RemoveRepoHistoryResponse_Status2[RemoveRepoHistoryResponse_Status2["PARTIAL_SUCCESS"] = 3] = "PARTIAL_SUCCESS";
    RemoveRepoHistoryResponse_Status2[RemoveRepoHistoryResponse_Status2["SUCCESS"] = 4] = "SUCCESS";
})(RemoveRepoHistoryResponse_Status || (RemoveRepoHistoryResponse_Status = {}));
proto3.util.setEnumType(RemoveRepoHistoryResponse_Status, "aiserver.v1.RemoveRepoHistoryResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_NOT_FOUND"
    },
    {
        no: 2,
        name: "STATUS_NOT_AUTHORIZED"
    },
    {
        no: 3,
        name: "STATUS_PARTIAL_SUCCESS"
    },
    {
        no: 4,
        name: "STATUS_SUCCESS"
    }
]);
var GetPRIndexingStatusRequest$Runtime = (()=>class _GetPRIndexingStatusRequest extends Message {
        constructor(data){
            super();
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetPRIndexingStatusRequest().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetPRIndexingStatusRequest().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetPRIndexingStatusRequest().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetPRIndexingStatusRequest, a, b2);
        }
    })();
var GetPRIndexingStatusRequest = GetPRIndexingStatusRequest$Runtime;
GetPRIndexingStatusRequest.runtime = proto3;
GetPRIndexingStatusRequest.typeName = "aiserver.v1.GetPRIndexingStatusRequest";
GetPRIndexingStatusRequest.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        }
    ]);
var GetPRIndexingStatusResponse$Runtime = (()=>class _GetPRIndexingStatusResponse extends Message {
        constructor(data){
            super();
            this.status = GetPRIndexingStatusResponse_Status.UNSPECIFIED;
            this.syncPercentage = 0;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _GetPRIndexingStatusResponse().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _GetPRIndexingStatusResponse().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _GetPRIndexingStatusResponse().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_GetPRIndexingStatusResponse, a, b2);
        }
    })();
var GetPRIndexingStatusResponse = GetPRIndexingStatusResponse$Runtime;
GetPRIndexingStatusResponse.runtime = proto3;
GetPRIndexingStatusResponse.typeName = "aiserver.v1.GetPRIndexingStatusResponse";
GetPRIndexingStatusResponse.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: proto3.getEnumType(GetPRIndexingStatusResponse_Status)
        },
        {
            no: 2,
            name: "sync_percentage",
            kind: "scalar",
            T: 2
        },
        {
            no: 3,
            name: "last_indexed_commit",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "last_indexed_generation",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 5,
            name: "total_commits",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 6,
            name: "indexing_rate",
            kind: "scalar",
            T: 2,
            opt: true
        },
        {
            no: 7,
            name: "last_updated_timestamp",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 8,
            name: "index_version",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
(function(GetPRIndexingStatusResponse_Status2) {
    GetPRIndexingStatusResponse_Status2[GetPRIndexingStatusResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    GetPRIndexingStatusResponse_Status2[GetPRIndexingStatusResponse_Status2["EMPTY"] = 1] = "EMPTY";
    GetPRIndexingStatusResponse_Status2[GetPRIndexingStatusResponse_Status2["SYNCING"] = 2] = "SYNCING";
    GetPRIndexingStatusResponse_Status2[GetPRIndexingStatusResponse_Status2["SYNCED"] = 3] = "SYNCED";
    GetPRIndexingStatusResponse_Status2[GetPRIndexingStatusResponse_Status2["PARTIAL"] = 4] = "PARTIAL";
})(GetPRIndexingStatusResponse_Status || (GetPRIndexingStatusResponse_Status = {}));
proto3.util.setEnumType(GetPRIndexingStatusResponse_Status, "aiserver.v1.GetPRIndexingStatusResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_EMPTY"
    },
    {
        no: 2,
        name: "STATUS_SYNCING"
    },
    {
        no: 3,
        name: "STATUS_SYNCED"
    },
    {
        no: 4,
        name: "STATUS_PARTIAL"
    }
]);
export { AdminRemoveRepositoryRequest, AdminRemoveRepositoryResponse, BatchRepositoryStatusRequest, BatchRepositoryStatusResponse, ChunkingStrategy, ClientRepositoryInfo, CodeResult, CodeResultWithClassificationInfo, CodeResultWithClassificationInfo_LineNumberClassification, DatabaseProvider, EnsureIndexCreatedRequest, EnsureIndexCreatedResponse, FastRepoInitHandshakeRequest, FastRepoInitHandshakeResponse, FastRepoInitHandshakeResponse_Status, FastRepoInitHandshakeV2Request, FastRepoInitHandshakeV2Response, FastRepoInitHandshakeV2Response_Status, FastRepoSyncCompleteRequest, FastRepoSyncCompleteResponse, FastUpdateFileRequest, FastUpdateFileRequest_LocalFile, FastUpdateFileRequest_UpdateType, FastUpdateFileResponse, FastUpdateFileResponse_Status, FastUpdateFileV2Request, FastUpdateFileV2Request_FileUpdate, FastUpdateFileV2Request_LocalFile, FastUpdateFileV2Request_UpdateType, FastUpdateFileV2Response, FastUpdateFileV2Response_Status, FileResult, FinishUpdateRepoRequest, FinishUpdateRepoResponse, FinishUpdateRepoResponse_Status, FinishUploadRepoRequest, FinishUploadRepoResponse, FinishUploadRepoResponse_Status, GetAvailableChunkingStrategiesRequest, GetAvailableChunkingStrategiesResponse, GetCopyStatusRequest, GetCopyStatusResponse, GetCopyStatusResponse_CompletedStatus, GetCopyStatusResponse_Phase, GetEmbeddingsRequest, GetEmbeddingsResponse, GetEmbeddingsResponse_Embedding, GetHighLevelFolderDescriptionRequest, GetHighLevelFolderDescriptionRequest_Readme, GetHighLevelFolderDescriptionResponse, GetLineNumberClassificationsRequest, GetLineNumberClassificationsResponse, GetNumFilesToSendRequest, GetNumFilesToSendResponse, GetPRIndexingStatusRequest, GetPRIndexingStatusResponse, GetPRIndexingStatusResponse_Status, GetUploadLimitsRequest, GetUploadLimitsResponse, IndexedFile, IndexedPullRequest, IsLoggedInRequest, IsLoggedInResponse, LocalCodebaseFileInfo, LoginRequest, LoginResponse, LogoutRequest, LogoutResponse, LogoutResponse_Status, NodeResult, PRDiffChunkPointer, PartialPathItem, PathKeyHashType, PollLoginRequest, PollLoginResponse, PollLoginResponse_Status, QueryOnlyRepoAccess, QueryOnlyRepositoryInfo, RechunkerChoice, ReflectionResult, RemoveRepoHistoryRequest, RemoveRepoHistoryResponse, RemoveRepoHistoryResponse_Status, RemoveRepositoryRequest, RemoveRepositoryResponse, RemoveRepositoryResponse_Status, RepoHistoryInfo, RepoHistoryInitHandshakeRequest, RepoHistoryInitHandshakeResponse, RepoHistoryInitHandshakeResponse_Status, RepoHistorySyncCompleteRequest, RepoHistorySyncCompleteRequest_Status, RepoHistorySyncCompleteRequest_SyncedHistory, RepoHistorySyncCompleteResponse, RepoHistorySyncOneRequest, RepoHistorySyncOneResponse, RepoHistorySyncOneResponse_Status, RepositoriesRequest, RepositoriesResponse, RepositoryCodebaseInfo, RepositoryCodebaseInfo_Status, RepositoryCodebaseSyncStatus, RepositoryCodebaseSyncStatus_Status, RepositoryInfo, RepositoryStatusRequest, RepositoryStatusResponse, RepositoryStatusResponse_AuthTokenNotAuthorized, RepositoryStatusResponse_AuthTokenNotFound, RepositoryStatusResponse_EmptyMessage, RepositoryStatusResponse_NotFound, RepositoryStatusResponse_NotSubscribed, RepositoryStatusResponse_Synced, RepositoryStatusResponse_Syncing, RepositoryStatusResponse_TooBig, RepositoryStatusResponse_Uploading, RerankerAlgorithm, SearchPRHistoryRequest, SearchPRHistoryResponse, SearchPRHistoryResponse_PRSearchResult, SearchRepositoryDeepContextRequest, SearchRepositoryDeepContextResponse, SearchRepositoryRequest, SearchRepositoryResponse, SemSearchRequest, SemSearchResponse, SemSearchResponse_SemSearchMetadata, SimilarityMetricType, StartUpdateRepoRequest, StartUpdateRepoResponse, StartUpdateRepoResponse_Status, StartUploadRepoRequest, StartUploadRepoResponse, StartUploadRepoResponse_Status, SubscribeRepositoryRequest, SubscribeRepositoryResponse, SubscribeRepositoryResponse_Status, SyncMerkleSubtreeRequest, SyncMerkleSubtreeResponse, SyncMerkleSubtreeResponse_Mismatch, SyncMerkleSubtreeV2Request, SyncMerkleSubtreeV2Response, SyncMerkleSubtreeV2Response_Mismatch, SyncMerkleSubtreeV2Response_PartialPathResult, SyncRepositoryRequest, SyncRepositoryResponse, UnsubscribeRepositoryRequest, UnsubscribeRepositoryResponse, UnsubscribeRepositoryResponse_Status, UpdateFileRequest, UpdateFileResponse, UpdateFileResponse_Status, UpgradeScopeRequest, UpgradeScopeResponse, UpgradeScopeResponse_Status, UploadFileRequest, UploadFileResponse, UploadFileResponse_Status, UploadRepositoryRequest, UploadRepositoryResponse, UploadRepositoryResponse_Status };
