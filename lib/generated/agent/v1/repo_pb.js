import { Message, proto3 } from "@bufbuild/protobuf";
var RepositoryIndexingInfo$Runtime = (()=>class _RepositoryIndexingInfo extends Message {
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
            this.pathEncryptionKey = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _RepositoryIndexingInfo().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _RepositoryIndexingInfo().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _RepositoryIndexingInfo().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_RepositoryIndexingInfo, a, b2);
        }
    })();
var RepositoryIndexingInfo = RepositoryIndexingInfo$Runtime;
RepositoryIndexingInfo.runtime = proto3;
RepositoryIndexingInfo.typeName = "agent.v1.RepositoryIndexingInfo";
RepositoryIndexingInfo.fields = proto3.util.newFieldList(()=>[
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
            name: "orthogonal_transform_seed",
            kind: "scalar",
            T: 1,
            opt: true
        },
        {
            no: 9,
            name: "workspace_uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "path_encryption_key",
            kind: "scalar",
            T: 9
        }
    ]);
export { RepositoryIndexingInfo };
