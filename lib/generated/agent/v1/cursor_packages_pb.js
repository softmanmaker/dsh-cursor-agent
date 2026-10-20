import { Message, proto3 } from "@bufbuild/protobuf";
var PackageType;
(function(PackageType2) {
    PackageType2[PackageType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    PackageType2[PackageType2["CURSOR_PROJECT"] = 1] = "CURSOR_PROJECT";
    PackageType2[PackageType2["CURSOR_PERSONAL"] = 2] = "CURSOR_PERSONAL";
    PackageType2[PackageType2["CLAUDE_SKILL"] = 3] = "CLAUDE_SKILL";
    PackageType2[PackageType2["CLAUDE_PLUGIN"] = 4] = "CLAUDE_PLUGIN";
})(PackageType || (PackageType = {}));
proto3.util.setEnumType(PackageType, "agent.v1.PackageType", [
    {
        no: 0,
        name: "PACKAGE_TYPE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "PACKAGE_TYPE_CURSOR_PROJECT"
    },
    {
        no: 2,
        name: "PACKAGE_TYPE_CURSOR_PERSONAL"
    },
    {
        no: 3,
        name: "PACKAGE_TYPE_CLAUDE_SKILL"
    },
    {
        no: 4,
        name: "PACKAGE_TYPE_CLAUDE_PLUGIN"
    }
]);
var CursorPackagePrompt$Runtime = (()=>class _CursorPackagePrompt extends Message {
        constructor(data){
            super();
            this.name = "";
            this.filePath = "";
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CursorPackagePrompt().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CursorPackagePrompt().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CursorPackagePrompt().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CursorPackagePrompt, a, b2);
        }
    })();
var CursorPackagePrompt = CursorPackagePrompt$Runtime;
CursorPackagePrompt.runtime = proto3;
CursorPackagePrompt.typeName = "agent.v1.CursorPackagePrompt";
CursorPackagePrompt.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_path",
            kind: "scalar",
            T: 9
        }
    ]);
var CursorPackage$Runtime = (()=>class _CursorPackage extends Message {
        constructor(data){
            super();
            this.name = "";
            this.description = "";
            this.folderPath = "";
            this.enabled = false;
            this.prompts = [];
            this.readmeFilePath = "";
            this.packageType = PackageType.UNSPECIFIED;
            proto3.util.initPartial(data, this);
        }
        static fromBinary(bytes, options) {
            return new _CursorPackage().fromBinary(bytes, options);
        }
        static fromJson(jsonValue, options) {
            return new _CursorPackage().fromJson(jsonValue, options);
        }
        static fromJsonString(jsonString, options) {
            return new _CursorPackage().fromJsonString(jsonString, options);
        }
        static equals(a, b2) {
            return proto3.util.equals(_CursorPackage, a, b2);
        }
    })();
var CursorPackage = CursorPackage$Runtime;
CursorPackage.runtime = proto3;
CursorPackage.typeName = "agent.v1.CursorPackage";
CursorPackage.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
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
            name: "folder_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "parse_error",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "prompts",
            kind: "message",
            T: CursorPackagePrompt,
            repeated: true
        },
        {
            no: 7,
            name: "readme_file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "package_type",
            kind: "enum",
            T: proto3.getEnumType(PackageType)
        }
    ]);
export { CursorPackage, CursorPackagePrompt, PackageType };
