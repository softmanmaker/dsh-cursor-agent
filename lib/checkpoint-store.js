import { createHash, randomBytes } from "node:crypto";
import { mkdir, readFile, rename, unlink, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { z } from "zod";
import { cursorAgentDebug } from "./constants.js";
const CURSOR_AGENT_DOMAIN = "cursor_agent";
const BLOB_HEX = /^[0-9a-f]+$/;
const nonNegativeInt = z.number().int().nonnegative();
const fileAttachmentRefSchema = z.object({
    attachmentId: z.string().min(1),
    name: z.string(),
    bytes: nonNegativeInt
});
const sessionIdentitySchema = z.object({
    createdAt: nonNegativeInt,
    cwd: z.string().optional()
});
const tokenDetailsSchema = z.object({
    usedTokens: nonNegativeInt.optional(),
    maxTokens: nonNegativeInt.optional()
});
const checkpointRecordSchema = z.object({
    identity: sessionIdentitySchema.optional(),
    conversationId: z.string().min(1),
    checkpoint: fileAttachmentRefSchema,
    blobs: z.record(z.string().regex(BLOB_HEX), fileAttachmentRefSchema).default({}),
    tokenDetails: tokenDetailsSchema.optional()
});
const cursorAgentDomainSpec = {
    name: CURSOR_AGENT_DOMAIN,
    version: 1,
    layout: "per-record",
    invalidRecords: "backup-and-skip",
    tables: {
        sessions: {
            valueSchema: checkpointRecordSchema
        }
    }
};
function identityMatches(stored, live) {
    if (null == live) return true;
    if (null == stored) return false;
    if (stored.createdAt !== live.createdAt) return false;
    if (void 0 !== stored.cwd && void 0 !== live.cwd && stored.cwd !== live.cwd) return false;
    return true;
}
const CHECKPOINT_OBJECTS_SEGMENTS = Object.freeze([
    "storages",
    "cursor_agent",
    "objects"
]);
const SHA256_ID = /^sha256:([0-9a-f]{64})$/;
function createLocalObjectStore(root) {
    if ("string" != typeof root || 0 === root.length) throw new Error("checkpoint object store root is required");
    return {
        async saveFile ({ data, name }) {
            const bytes = data instanceof Uint8Array ? data : Uint8Array.from(data);
            const sha256 = createHash("sha256").update(bytes).digest("hex");
            const objectPath = join(root, sha256.slice(0, 2), sha256);
            await mkdir(dirname(objectPath), {
                recursive: true
            });
            const tmp = `${objectPath}.${process.pid}.${randomBytes(8).toString("hex")}.tmp`;
            await writeFile(tmp, bytes);
            try {
                await rename(tmp, objectPath);
            } catch (error) {
                await unlink(tmp).catch(()=>{});
                if (error?.code !== "EEXIST") throw error;
            }
            return {
                attachmentId: `sha256:${sha256}`,
                name: "string" == typeof name && name.length > 0 ? name : "file.bin",
                bytes: bytes.byteLength
            };
        },
        async *readFileStream (ref, signal) {
            signal?.throwIfAborted?.();
            const match = SHA256_ID.exec(String(ref?.attachmentId ?? ""));
            if (null == match) throw new Error("invalid checkpoint object ref");
            const objectPath = join(root, match[1].slice(0, 2), match[1]);
            const data = await readFile(objectPath);
            if (Number.isInteger(ref.bytes) && data.byteLength !== ref.bytes) throw new Error("checkpoint object length mismatch");
            yield data;
        }
    };
}
async function readAttachmentBytes(attachments, ref, signal) {
    if (null == attachments || "function" != typeof attachments.readFileStream) throw new Error("attachments cannot read verbatim files");
    const chunks = [];
    let total = 0;
    for await (const chunk of attachments.readFileStream(ref, signal)){
        const bytes = chunk instanceof Uint8Array ? chunk : new Uint8Array(chunk);
        chunks.push(bytes);
        total += bytes.byteLength;
    }
    if (0 === chunks.length) return new Uint8Array(0);
    if (1 === chunks.length) return chunks[0];
    const out = new Uint8Array(total);
    let offset = 0;
    for (const part of chunks){
        out.set(part, offset);
        offset += part.byteLength;
    }
    return out;
}
function snapshotTokenDetails(value) {
    if (null == value) return;
    const details = {};
    if (Number.isInteger(value.usedTokens) && value.usedTokens >= 0) details.usedTokens = value.usedTokens;
    if (Number.isInteger(value.maxTokens) && value.maxTokens >= 0) details.maxTokens = value.maxTokens;
    return Object.keys(details).length > 0 ? details : void 0;
}
function snapshotIdentity(identity) {
    if (null == identity || !Number.isInteger(identity.createdAt) || identity.createdAt < 0) return;
    return {
        createdAt: identity.createdAt,
        ..."string" == typeof identity.cwd && identity.cwd.length > 0 ? {
            cwd: identity.cwd
        } : {}
    };
}
function logPersistError(message, error) {
    const detail = error instanceof Error ? error.message : String(error);
    cursorAgentDebug(`${message}: ${detail}`);
}
function createCheckpointStore(options = {}) {
    const filesOf = "function" == typeof options.files ? options.files : ()=>options.files;
    const facility = options.storageDomain;
    let domain;
    let closed = false;
    let tail = Promise.resolve();
    const enqueue = (task)=>{
        const run = tail.then(task, task);
        tail = run.then(()=>void 0, ()=>void 0);
        return run;
    };
    const ensureDomain = async ()=>{
        if (closed) return;
        if (void 0 !== domain) return domain;
        if (null == facility || "function" != typeof facility.open) return;
        domain = await facility.open(cursorAgentDomainSpec);
        return domain;
    };
    const pointersOf = (record)=>({
            conversationId: record.conversationId,
            checkpoint: record.checkpoint,
            blobs: record.blobs,
            ...void 0 === record.tokenDetails ? {} : {
                tokenDetails: record.tokenDetails
            }
        });
    const readSnapshot = async (record)=>{
        const files = filesOf();
        if (null == files) return;
        try {
            const checkpoint = await readAttachmentBytes(files, record.checkpoint);
            const blobs = new Map();
            for (const [hex, ref] of Object.entries(record.blobs))blobs.set(hex, await readAttachmentBytes(files, ref));
            return {
                ...pointersOf(record),
                checkpoint,
                blobs
            };
        } catch (error) {
            logPersistError("checkpoint load failed", error);
            return;
        }
    };
    const persistSnapshot = async (sessionId, snapshot, identity)=>{
        if (closed || void 0 === snapshot.checkpoint || null == snapshot.conversationId) return;
        const files = filesOf();
        if (null == files || "function" != typeof files.saveFile) return;
        try {
            const checkpoint = await files.saveFile({
                data: snapshot.checkpoint,
                name: "cursor-checkpoint.bin"
            });
            const blobs = {};
            for (const [hex, data] of snapshot.blobs)if (BLOB_HEX.test(hex) && null != data) blobs[hex] = await files.saveFile({
                data: data instanceof Uint8Array ? data : Uint8Array.from(data),
                name: `cursor-blob-${hex.slice(0, 16)}.bin`
            });
            const record = checkpointRecordSchema.parse({
                conversationId: String(snapshot.conversationId),
                checkpoint,
                blobs,
                ...void 0 === snapshot.tokenDetails ? {} : {
                    tokenDetails: snapshot.tokenDetails
                },
                ...void 0 === identity ? {} : {
                    identity
                }
            });
            if ("string" == typeof sessionId && sessionId.length > 0) try {
                const table = (await ensureDomain())?.table("sessions");
                if (void 0 !== table) await table.put(sessionId, record);
            } catch (error) {
                logPersistError("checkpoint domain open failed", error);
            }
            return pointersOf(record);
        } catch (error) {
            logPersistError("checkpoint persist failed", error);
        }
    };
    const loadNow = async (sessionId, liveIdentity)=>{
        if (closed || "string" != typeof sessionId || 0 === sessionId.length) return;
        let table;
        try {
            table = (await ensureDomain())?.table("sessions");
        } catch (error) {
            logPersistError("checkpoint domain open failed", error);
            return;
        }
        if (void 0 === table) return;
        const raw = table.get(sessionId);
        if (void 0 === raw) return;
        const parsed = checkpointRecordSchema.safeParse(raw);
        if (!parsed.success) return;
        const record = parsed.data;
        if (!identityMatches(record.identity, liveIdentity)) return;
        return readSnapshot(record);
    };
    const loadFromPointers = async (raw)=>{
        if (closed || null == raw) return;
        const parsed = checkpointRecordSchema.safeParse({
            conversationId: raw.conversationId,
            checkpoint: raw.checkpoint,
            blobs: raw.blobs ?? {},
            ...void 0 === raw.tokenDetails ? {} : {
                tokenDetails: raw.tokenDetails
            }
        });
        if (!parsed.success) return;
        return readSnapshot(parsed.data);
    };
    return {
        persist (sessionId, persisted, identity) {
            const snapshot = {
                checkpoint: persisted?.checkpoint === void 0 ? void 0 : Uint8Array.from(persisted.checkpoint),
                blobs: new Map(persisted?.blobs ?? []),
                conversationId: persisted?.conversationId,
                tokenDetails: snapshotTokenDetails(persisted?.tokenDetails)
            };
            return enqueue(()=>persistSnapshot(sessionId, snapshot, snapshotIdentity(identity)));
        },
        load (sessionId, identity) {
            return enqueue(()=>loadNow(sessionId, snapshotIdentity(identity)));
        },
        loadPointers (record) {
            return enqueue(()=>loadFromPointers(record));
        },
        async flush () {
            await tail;
        },
        async close () {
            closed = true;
            await tail;
            const handle = domain;
            domain = void 0;
            try {
                await handle?.close?.();
            } catch (error) {
                logPersistError("checkpoint domain close failed", error);
            }
        }
    };
}
export { CHECKPOINT_OBJECTS_SEGMENTS, CURSOR_AGENT_DOMAIN, checkpointRecordSchema, createCheckpointStore, createLocalObjectStore, cursorAgentDomainSpec, fileAttachmentRefSchema, identityMatches, readAttachmentBytes, sessionIdentitySchema, tokenDetailsSchema };
