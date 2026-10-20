/**
 * Log-only Cursor checkpoint markers.
 *
 * Each persist writes protobuf/blob bytes to the plugin object directory and
 * appends a `cursor-agent/checkpoint` event that stores only pointers
 * (`conversationId` + `FileAttachmentRef`-shaped JSON). The event type is
 * outside DSH `KNOWN_SESSION_EVENT_TYPES`, so the envelope must carry
 * `ignorable: true` forever — otherwise persistence refuses the session.
 *
 * `Session.append()` cannot set `ignorable`. This module builds the envelope,
 * validates it through `session.surface.validateNext`, pushes onto `session.log`,
 * and publishes `session/event` so `dsh-session-persistence-jsonl` can enqueue.
 */
import { z } from "zod";
export declare const CURSOR_CHECKPOINT_EVENT_TYPE = "cursor-agent/checkpoint";
export declare const CURSOR_CHECKPOINT_SCHEMA_VERSION = 1;
export declare const cursorCheckpointEventDataSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<1>;
    conversationId: z.ZodString;
    checkpoint: z.ZodObject<{
        attachmentId: z.ZodString;
        name: z.ZodString;
        bytes: z.ZodNumber;
    }, z.core.$strip>;
    blobs: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodObject<{
        attachmentId: z.ZodString;
        name: z.ZodString;
        bytes: z.ZodNumber;
    }, z.core.$strip>>>;
    tokenDetails: z.ZodOptional<z.ZodObject<{
        usedTokens: z.ZodOptional<z.ZodNumber>;
        maxTokens: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare function isHumanUserMessage(event: any): boolean;
export declare function isCursorCheckpointEvent(event: any): boolean;
export declare function listCursorCheckpointEvents(events: any): any[];
/**
 * Choose the marker that matches the conversation the surface still shows.
 *
 * lastKeptHuman = last human `user/message` on `session.surface`.
 *
 * A trailing human with `surfaceOp.replace` is same-session rewind
 * (`dsh-rewind`): take the last marker before `replace.start`. Compaction's
 * replace is `source.kind === "plugin"`, so it does not take this path.
 *
 * Otherwise firstWithdrawnAfterKept = first later human still in the log but
 * not on the surface. If that exists, take the last marker before it.
 * Otherwise take the last marker (continue, official fork prefix,
 * message-edit seed, DSH compaction).
 *
 * `surfaceNodes === undefined` means the caller has no surface; use the last
 * marker. An actual empty array still runs the withdrawn-human walk.
 */
export declare function pickCursorCheckpointEvent(events: any, surfaceNodes: any): any;
/**
 * Append one ignorable checkpoint marker. Returns the logged event, the
 * existing last marker when the pointer is unchanged, or undefined on reject.
 */
export declare function appendCursorCheckpointEvent(session: any, data: any, publish: any): any;
