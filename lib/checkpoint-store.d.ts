import { z } from "zod";
/** Domain / table names must match DSH `UNIT_NAME_RE`. */
export declare const CURSOR_AGENT_DOMAIN = "cursor_agent";
/** Content-addressed file pointer — same shape as DSH `FileAttachmentRef`. */
export declare const fileAttachmentRefSchema: z.ZodObject<{
    attachmentId: z.ZodString;
    name: z.ZodString;
    bytes: z.ZodNumber;
}, z.core.$strip>;
/** Session-lifecycle fence so a reused DSH session id cannot inherit the previous Cursor conversation. */
export declare const sessionIdentitySchema: z.ZodObject<{
    createdAt: z.ZodNumber;
    cwd: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const tokenDetailsSchema: z.ZodObject<{
    usedTokens: z.ZodOptional<z.ZodNumber>;
    maxTokens: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
/** One session's durable Cursor run pointer. Bytes stay in the object store. */
export declare const checkpointRecordSchema: z.ZodObject<{
    identity: z.ZodOptional<z.ZodObject<{
        createdAt: z.ZodNumber;
        cwd: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
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
/**
 * Spec object for `ctx.storageDomain.open`. Hand-built so this plugin does
 * not import `@deepseek-ai/dsh-storage-domain` (the host already mounts it).
 */
export declare const cursorAgentDomainSpec: {
    name: string;
    version: number;
    layout: string;
    invalidRecords: string;
    tables: {
        sessions: {
            valueSchema: z.ZodObject<{
                identity: z.ZodOptional<z.ZodObject<{
                    createdAt: z.ZodNumber;
                    cwd: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
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
        };
    };
};
/**
 * A stored row may be reused only when it is fenced to the live Session
 * lifecycle. No live header (tests, agents unset) accepts any row. A live
 * session with no stored fence is a reused id and must not inherit.
 */
export declare function identityMatches(stored: any, live: any): boolean;
/** Segments for `dshHomePath(...)`. Do not join these onto a resolved home. */
export declare const CHECKPOINT_OBJECTS_SEGMENTS: readonly string[];
/**
 * Content-addressed byte store under `root/<aa>/<sha256>`. Same
 * `saveFile` / `readFileStream` shape as DSH attachments, without
 * depending on the mounted provider.
 */
export declare function createLocalObjectStore(root: any): {
    saveFile({ data, name }: {
        data: any;
        name: any;
    }): Promise<{
        attachmentId: string;
        name: string;
        bytes: number;
    }>;
    readFileStream(ref: any, signal: any): AsyncGenerator<NonSharedBuffer, void, unknown>;
};
/** Concatenate `readFileStream` chunks into one buffer. */
export declare function readAttachmentBytes(attachments: any, ref: any, signal?: any): Promise<any>;
/**
 * Open-on-demand store. Missing `storageDomain` or `files` fail soft:
 * persist becomes a no-op and load returns undefined (cold start).
 */
export declare function createCheckpointStore(options?: any): {
    /**
     * Snapshot the live session state and write it. No checkpoint → no-op.
     * Concurrent calls share one write chain so load cannot race a persist.
     * Resolves to the pointer record (no identity, no bytes) so a log event
     * can be built; undefined when nothing was written.
     */
    persist(sessionId: any, persisted: any, identity: any): Promise<void>;
    /** Latest pointer + bytes for this DSH session, or undefined. */
    load(sessionId: any, identity: any): Promise<void>;
    /** Read bytes for a log-marker or table pointer record. */
    loadPointers(record: any): Promise<void>;
    flush(): Promise<void>;
    close(): Promise<void>;
};
