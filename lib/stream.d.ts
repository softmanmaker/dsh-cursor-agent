import { ToolCallId } from "@deepseek-ai/dsh-llm";
/**
 * One assistant stream's content-block indexes. DSH assembles by index and
 * keeps one text/reasoning lane per index, so a tool batch must retire BOTH
 * lanes. Clearing only a shared `afterWork` flag is not enough: the next
 * thinking-delta consumes the flag and later process/answer text reuses the
 * old text index (session 28f42898 glued every narration into index 1).
 */
export declare function createStreamBlocks(): {
    markWork(): void;
    reasoning(text: any): ({
        type: string;
        index: any;
        blockType: any;
    } | {
        type: string;
        index: any;
        text: any;
    })[];
    text(text: any): ({
        type: string;
        index: any;
        blockType: any;
    } | {
        type: string;
        index: any;
        text: any;
    })[];
    toolCall(): number;
};
/** One official stream tool-call block (start + delta + end) at a fresh index. */
export declare function emitToolCall(streamBlocks: any, { id, name, args }: {
    id: any;
    name: any;
    args: any;
}): ({
    type: string;
    index: any;
    blockType: string;
    id?: undefined;
    name?: undefined;
    argumentsDelta?: undefined;
    block?: undefined;
} | {
    type: string;
    index: any;
    id: ToolCallId;
    name: any;
    argumentsDelta: string;
    blockType?: undefined;
    block?: undefined;
} | {
    type: string;
    index: any;
    block: {
        type: string;
        id: ToolCallId;
        name: any;
        arguments: string;
    };
    blockType?: undefined;
    id?: undefined;
    name?: undefined;
    argumentsDelta?: undefined;
})[];
