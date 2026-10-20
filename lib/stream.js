import { ToolCallId } from "@deepseek-ai/dsh-llm";
function createStreamBlocks() {
    let next = 0;
    let textIndex;
    let reasoningIndex;
    const take = ()=>next++;
    const retireLanes = ()=>{
        textIndex = void 0;
        reasoningIndex = void 0;
    };
    const open = (kind, current)=>{
        const fresh = void 0 === current;
        const index = fresh ? take() : current;
        return {
            index,
            chunks: fresh ? [
                {
                    type: "block-start",
                    index,
                    blockType: kind
                }
            ] : []
        };
    };
    return {
        markWork () {
            retireLanes();
        },
        reasoning (text) {
            const opened = open("reasoning", reasoningIndex);
            reasoningIndex = opened.index;
            return [
                ...opened.chunks,
                {
                    type: "reasoning-delta",
                    index: opened.index,
                    text
                }
            ];
        },
        text (text) {
            const opened = open("text", textIndex);
            textIndex = opened.index;
            return [
                ...opened.chunks,
                {
                    type: "text-delta",
                    index: opened.index,
                    text
                }
            ];
        },
        toolCall () {
            retireLanes();
            return take();
        }
    };
}
function emitToolCall(streamBlocks, { id, name, args }) {
    const index = streamBlocks.toolCall();
    const argumentsText = JSON.stringify(args ?? {});
    return [
        {
            type: "block-start",
            index,
            blockType: "tool-call"
        },
        {
            type: "tool-call-delta",
            index,
            id: ToolCallId(id),
            name,
            argumentsDelta: argumentsText
        },
        {
            type: "block-end",
            index,
            block: {
                type: "tool-call",
                id: ToolCallId(id),
                name,
                arguments: argumentsText
            }
        }
    ];
}
export { createStreamBlocks, emitToolCall };
