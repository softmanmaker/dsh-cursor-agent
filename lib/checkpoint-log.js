import { z } from "zod";
import { fileAttachmentRefSchema, tokenDetailsSchema } from "./checkpoint-store.js";
const CURSOR_CHECKPOINT_EVENT_TYPE = "cursor-agent/checkpoint";
const CURSOR_CHECKPOINT_SCHEMA_VERSION = 1;
const BLOB_HEX = /^[0-9a-f]+$/;
const cursorCheckpointEventDataSchema = z.object({
    schemaVersion: z.literal(CURSOR_CHECKPOINT_SCHEMA_VERSION),
    conversationId: z.string().min(1),
    checkpoint: fileAttachmentRefSchema,
    blobs: z.record(z.string().regex(BLOB_HEX), fileAttachmentRefSchema).default({}),
    tokenDetails: tokenDetailsSchema.optional()
});
function isHumanUserMessage(event) {
    return event?.type === "user/message" && event.data?.source?.kind === "user";
}
function isCursorCheckpointEvent(event) {
    return null != event && event.type === CURSOR_CHECKPOINT_EVENT_TYPE && true === event.ignorable && cursorCheckpointEventDataSchema.safeParse(event.data).success;
}
function listCursorCheckpointEvents(events) {
    const out = [];
    for (const event of events ?? [])if (isCursorCheckpointEvent(event)) out.push(event);
    return out;
}
function replaceStartOf(event) {
    const op = event?.surfaceOp;
    if (null == op || "append" === op || "object" != typeof op) return;
    if ("replace" !== op.op) return;
    const start = op.startSeq ?? op.start;
    return Number.isSafeInteger(start) && start >= 0 ? start : void 0;
}
function lastMarkerBefore(markers, seq) {
    for(let i = markers.length - 1; i >= 0; i--)if (markers[i].seq < seq) return markers[i];
}
function pickCursorCheckpointEvent(events, surfaceNodes) {
    const markers = listCursorCheckpointEvents(events);
    if (0 === markers.length) return;
    if (null == surfaceNodes) return markers[markers.length - 1];
    const onSurface = new Set(surfaceNodes);
    let lastKeptHuman;
    for (const event of events ?? [])if (isHumanUserMessage(event)) {
        if (onSurface.has(event.seq)) lastKeptHuman = event;
    }
    const replaceStart = void 0 === lastKeptHuman ? void 0 : replaceStartOf(lastKeptHuman);
    if (void 0 !== replaceStart) return lastMarkerBefore(markers, replaceStart);
    const lastKeptSeq = lastKeptHuman?.seq ?? -1;
    let firstWithdrawnAfterKept;
    for (const event of events ?? [])if (isHumanUserMessage(event)) {
        if (!(event.seq <= lastKeptSeq)) {
            if (!onSurface.has(event.seq)) {
                firstWithdrawnAfterKept = event.seq;
                break;
            }
        }
    }
    if (void 0 === firstWithdrawnAfterKept) return markers[markers.length - 1];
    return lastMarkerBefore(markers, firstWithdrawnAfterKept);
}
function lastCursorCheckpointEvent(events) {
    const markers = listCursorCheckpointEvents(events);
    return 0 === markers.length ? void 0 : markers[markers.length - 1];
}
function sameCheckpointPointer(left, right) {
    return left?.conversationId === right?.conversationId && left?.checkpoint?.attachmentId === right?.checkpoint?.attachmentId;
}
function appendCursorCheckpointEvent(session, data, publish) {
    if (null == session || !Array.isArray(session.log)) return;
    const parsed = cursorCheckpointEventDataSchema.safeParse(data);
    if (!parsed.success) return;
    const last = lastCursorCheckpointEvent(session.log);
    if (void 0 !== last && sameCheckpointPointer(last.data, parsed.data)) return last;
    const event = Object.freeze({
        type: CURSOR_CHECKPOINT_EVENT_TYPE,
        seq: session.log.length,
        time: Date.now(),
        data: parsed.data,
        ignorable: true
    });
    try {
        session.surface?.validateNext?.(event);
    } catch  {
        return;
    }
    session.log.push(event);
    session.eventsSnapshot = void 0;
    try {
        publish?.(session, event);
    } catch  {}
    return event;
}
export { CURSOR_CHECKPOINT_EVENT_TYPE, CURSOR_CHECKPOINT_SCHEMA_VERSION, appendCursorCheckpointEvent, cursorCheckpointEventDataSchema, isCursorCheckpointEvent, isHumanUserMessage, listCursorCheckpointEvents, pickCursorCheckpointEvent };
