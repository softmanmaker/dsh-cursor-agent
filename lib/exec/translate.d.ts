export declare function translateNativeExec(exec: any): {
    tool: string;
    args: {
        file_path: any;
        content?: undefined;
    };
    field: 7;
    encode: (content: any, isError: any, extras?: any) => Uint8Array<ArrayBuffer>;
    reject?: undefined;
} | {
    field: 3;
    reject: Uint8Array<ArrayBuffer>;
    tool?: undefined;
    args?: undefined;
    encode?: undefined;
} | {
    tool: string;
    args: {
        file_path: any;
        content: any;
    };
    field: 3;
    encode: (result: any, isError: any) => Uint8Array<ArrayBuffer>;
    reject?: undefined;
} | {
    tool: string;
    args: {
        file_path: any;
        content?: undefined;
    };
    field: 4;
    encode: (content: any, isError: any) => Uint8Array<ArrayBuffer>;
    reject?: undefined;
};
