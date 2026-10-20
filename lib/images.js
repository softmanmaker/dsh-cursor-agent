import { randomUUID } from "node:crypto";
import { extname } from "node:path";
import { LlmError } from "@deepseek-ai/dsh-llm";
import { DEFAULT_MAX_IMAGES_PER_MESSAGE, DEFAULT_MAX_IMAGE_BYTES, DEFAULT_MAX_IMAGE_DIMENSION, DEFAULT_MAX_IMAGE_PIXELS, DEFAULT_MAX_MESSAGE_IMAGE_BYTES, DEFAULT_NORMALIZED_IMAGE_MAX_BYTES, DEFAULT_NORMALIZED_IMAGE_MAX_DIMENSION, DEFAULT_NORMALIZED_IMAGE_MAX_PIXELS, prepareImageFile } from "@deepseek-ai/dsh-attachment-local";
import { Writer } from "./proto.js";
import { isInjectionMessage } from "./messages.js";
const READ_IMAGE_MAX_BYTES = 15728640;
const MAX_USER_IMAGES = 5;
const IMAGE_REQUEST_POLICY = Object.freeze({
    maxPixels: 4194304,
    maxBytes: READ_IMAGE_MAX_BYTES
});
const READ_IMAGE_NORMALIZATION = Object.freeze({
    maxPixels: DEFAULT_NORMALIZED_IMAGE_MAX_PIXELS,
    maxDimension: DEFAULT_NORMALIZED_IMAGE_MAX_DIMENSION,
    maxBytes: DEFAULT_NORMALIZED_IMAGE_MAX_BYTES
});
const READ_IMAGE_LIMITS = Object.freeze({
    maxImageBytes: DEFAULT_MAX_IMAGE_BYTES,
    maxImagesPerMessage: DEFAULT_MAX_IMAGES_PER_MESSAGE,
    maxMessageImageBytes: DEFAULT_MAX_MESSAGE_IMAGE_BYTES,
    maxImagePixels: DEFAULT_MAX_IMAGE_PIXELS,
    maxImageDimension: DEFAULT_MAX_IMAGE_DIMENSION,
    mediaTypes: Object.freeze([
        "image/png",
        "image/jpeg",
        "image/webp",
        "image/gif"
    ])
});
async function resizeReadImage(data, mediaType, name) {
    const bytes = data instanceof Uint8Array ? data : new Uint8Array(data ?? []);
    const prepared = await prepareImageFile({
        data: bytes,
        mediaType,
        ...name ? {
            name
        } : {}
    }, READ_IMAGE_LIMITS, READ_IMAGE_NORMALIZATION);
    return {
        data: prepared.data,
        mime: prepared.ref.mediaType,
        bytes: prepared.ref.bytes,
        width: prepared.ref.width,
        height: prepared.ref.height,
        originalDimensions: prepared.ref.originalDimensions
    };
}
const IMAGE_EXT = Object.freeze({
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".webp": "image/webp"
});
function sniffImageMime(bytes) {
    const data = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes ?? []);
    if (data.length >= 8 && 137 === data[0] && 80 === data[1] && 78 === data[2] && 71 === data[3] && 13 === data[4] && 10 === data[5] && 26 === data[6] && 10 === data[7]) return "image/png";
    if (data.length >= 3 && 255 === data[0] && 216 === data[1] && 255 === data[2]) return "image/jpeg";
    if (data.length >= 3 && 71 === data[0] && 73 === data[1] && 70 === data[2]) return "image/gif";
    if (data.length >= 12 && 82 === data[0] && 73 === data[1] && 70 === data[2] && 70 === data[3] && 87 === data[8] && 69 === data[9] && 66 === data[10] && 80 === data[11]) return "image/webp";
}
function imageMimeFromPath(path) {
    return IMAGE_EXT[extname(String(path ?? "")).toLowerCase()];
}
function isNotTextError(error) {
    const code = error?.code;
    if ("FS_NOT_TEXT" === code) return true;
    return /binary file|invalid UTF-8 text/i.test(String(error?.message ?? ""));
}
function binaryUnsupportedReason(path) {
    const ext = extname(String(path ?? "")).toLowerCase();
    if ("" === ext) return "Binary files without an extension are not supported by the read executor";
    return `Binary files of type ${ext} are not supported by the read executor`;
}
function contentHasImages(content) {
    return (content ?? []).some((block)=>block?.type === "image" && void 0 !== block.attachment);
}
function collectImageBlocks(messages = []) {
    const blocks = [];
    for (const message of messages ?? [])if (!isInjectionMessage(message)) {
        for (const block of message?.content ?? [])if (block?.type === "image" && void 0 !== block.attachment) blocks.push(block);
    }
    return blocks;
}
async function resolveSelectedImages(blocks, attachments, signal) {
    if (!Array.isArray(blocks) || 0 === blocks.length) return [];
    if (void 0 === attachments || "function" != typeof attachments.readImageRequest) throw new LlmError("Cursor image input requires the DSH attachment service", "UNSUPPORTED_CONTENT");
    const selected = [];
    for (const block of blocks.slice(0, MAX_USER_IMAGES)){
        const attachment = block.attachment;
        const stored = await attachments.readImageRequest(attachment, IMAGE_REQUEST_POLICY, signal);
        if (void 0 === stored) throw new LlmError("Could not read an attached image", "INVALID_REQUEST");
        selected.push({
            uuid: randomUUID(),
            path: attachment.name || String(attachment.attachmentId ?? "image"),
            mimeType: stored.mediaType || attachment.mediaType || "image/png",
            width: stored.width,
            height: stored.height,
            data: stored.data instanceof Uint8Array ? stored.data : new Uint8Array(stored.data ?? [])
        });
    }
    return selected;
}
function encodeSelectedImageDimension(width, height) {
    return new Writer().varint(1, width).varint(2, height).finish();
}
function encodeSelectedImage(image) {
    const writer = new Writer();
    if (image?.data instanceof Uint8Array && image.data.length > 0) writer.bytes(8, image.data);
    if (image?.uuid) writer.string(2, image.uuid);
    if (image?.path) writer.string(3, image.path);
    if (Number.isFinite(image?.width) && Number.isFinite(image?.height) && image.width > 0 && image.height > 0) writer.message(4, encodeSelectedImageDimension(image.width, image.height));
    if (image?.mimeType) writer.string(7, image.mimeType);
    return writer.finish();
}
function encodeSelectedContext(images = []) {
    const writer = new Writer();
    for (const image of images)writer.message(1, encodeSelectedImage(image));
    return writer.finish();
}
function formatImageReadJoinText(path, mime, bytes, dimensions) {
    const name = String(path ?? "").trim() || "image";
    const kind = mime || "image";
    const size = Number.isFinite(bytes) ? `${bytes} bytes` : "image";
    const px = Number.isFinite(dimensions?.width) && Number.isFinite(dimensions?.height) ? `${dimensions.width}x${dimensions.height}` : void 0;
    const original = dimensions?.originalDimensions;
    const scaled = void 0 !== original ? `; downscaled from ${original.width}x${original.height}` : "";
    if (void 0 !== px) return `${name} (${kind}, ${px}, ${size}${scaled})`;
    return `${name} (${kind}, ${size}${scaled})`;
}
export { IMAGE_REQUEST_POLICY, MAX_USER_IMAGES, READ_IMAGE_MAX_BYTES, READ_IMAGE_NORMALIZATION, binaryUnsupportedReason, collectImageBlocks, contentHasImages, encodeSelectedContext, encodeSelectedImage, formatImageReadJoinText, imageMimeFromPath, isNotTextError, resizeReadImage, resolveSelectedImages, sniffImageMime };
