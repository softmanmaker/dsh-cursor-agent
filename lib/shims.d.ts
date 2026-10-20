declare function identityRender(_args: any, value: any): {
    type: string;
    text: string;
}[];
declare function identityMeta(_args: any, value: any): any;
declare function joinExecute(_args: any, exec: any): Promise<{
    meta?: any;
    text: any;
}>;
export declare function searchViewFromMeta(meta: any): {
    card: string;
    shape: string;
    files: any;
    truncated: any;
    total: any;
    paths?: undefined;
} | {
    card: string;
    shape: string;
    paths: any;
    truncated: any;
    total: any;
    files?: undefined;
};
/** Cursor-named join shims registered on the preset-scoped tool runtime. */
export declare function cursorJoinShims(): {
    presentResult?: any;
    presentCall?: any;
    execute: typeof joinExecute;
    isConcurrencySafe?: () => boolean;
    name: any;
    description: any;
    parameters: Readonly<{
        type: "object";
        additionalProperties: true;
        properties: {};
    }>;
    timeoutMs: any;
    output: {
        schema: Readonly<{}>;
        render: typeof identityRender;
        presentationMeta: typeof identityMeta;
    };
}[];
export declare function registerCursorShims(ctx: any): void;
export {};
