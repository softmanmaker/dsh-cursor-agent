/** Cloud Agent / CLI per-image byte cap. */
export declare const READ_IMAGE_MAX_BYTES: number;
/** Cloud Agent prompt.images maximum. */
export declare const MAX_USER_IMAGES = 5;
/** Request-version policy for DSH attachment projection. */
export declare const IMAGE_REQUEST_POLICY: Readonly<{
    maxPixels: number;
    maxBytes: number;
}>;
/** Workspace-read resize: DSH normalizeImage policy (via prepareImageFile). */
export declare const READ_IMAGE_NORMALIZATION: Readonly<{
    maxPixels: number;
    maxDimension: 8192;
    maxBytes: number;
}>;
/**
 * Decode and resize one workspace image with DSH's prepareImageFile
 * (detectImage + canPassThroughNormalization + normalizeImage).
 */
export declare function resizeReadImage(data: any, mediaType: any, name: any): Promise<{
    data: Uint8Array;
    mime: string;
    bytes: number;
    width?: number;
    height?: number;
    originalDimensions?: unknown;
}>;
/** Magic-byte sniff used by Cursor's getFormatForFile. */
export declare function sniffImageMime(bytes: any): "image/png" | "image/jpeg" | "image/webp" | "image/gif";
export declare function imageMimeFromPath(path: any): any;
export declare function isNotTextError(error: any): boolean;
export declare function binaryUnsupportedReason(path: any): string;
export declare function contentHasImages(content: any): any;
/** Top-level image blocks on human user messages (plugin injects excluded). */
export declare function collectImageBlocks(messages?: any[]): any[];
/**
 * Project DSH attachments into SelectedImage payloads (inline `data`).
 * Caps at {@link MAX_USER_IMAGES}.
 */
export declare function resolveSelectedImages(blocks: any, attachments: any, signal?: any): Promise<any[]>;
/**
 * SelectedImage { blob_id=1 | data=8 | …, uuid=2, path=3, dimension=4, mime_type=7 }.
 * Official SDK `agent.send({ images: [{ data, mimeType, dimension }] })` uses `data`.
 */
export declare function encodeSelectedImage(image: any): Uint8Array<ArrayBuffer>;
/** SelectedContext { selected_images=1 }. */
export declare function encodeSelectedContext(images?: any[]): Uint8Array<ArrayBuffer>;
export declare function formatImageReadJoinText(path: any, mime: any, bytes: any, dimensions: any): string;
