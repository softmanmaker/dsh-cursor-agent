/**
 * Minimal protobuf wire-format helpers for the Cursor Agent protocol.
 *
 * Only the subset of protobuf needed by `dsh-cursor-agent` is
 * implemented: varints, length-delimited fields, fixed64/double, and nested
 * messages. Map fields are encoded as repeated entry messages, exactly like
 * the official protobuf runtime.
 *
 * @module dsh-cursor-agent/proto
 */
/** Encode one unsigned varint into a Uint8Array. */
export declare function varintEncode(value: any): Uint8Array<ArrayBuffer>;
/** Combine byte arrays. */
export declare function concatBytes(parts: any): Uint8Array<ArrayBuffer>;
/** A streaming protobuf message writer. */
export declare class Writer {
    parts: Uint8Array[];
    constructor();
    /** Append a raw field tag. */
    tag(field: any, wireType: any): this;
    /** Append a length-delimited payload. */
    bytes(field: any, data: any): this;
    /** Append a UTF-8 string field. */
    string(field: any, value: any): this;
    /** Append a nested message field. */
    message(field: any, inner: any): this;
    /** Append a varint field (uint32/int32/bool/enum). */
    varint(field: any, value: any): this;
    /** Append a double (fixed64, little-endian) field. */
    double(field: any, value: any): this;
    finish(): Uint8Array<ArrayBuffer>;
}
/** A streaming protobuf message reader. */
export declare class Reader {
    data: Uint8Array;
    pos: number;
    constructor(bytes: any);
    get done(): boolean;
    varint(): number;
    /** Read the tag and return { field, wireType }. */
    tag(): {
        field: number;
        wireType: number;
    };
    bytes(): Uint8Array<ArrayBufferLike>;
    string(): string;
    double(): number;
    /** Skip a field of the given wire type (length-delimited or varint or fixed64). */
    skip(wireType: any): void;
}
/**
 * Encode a JSON value as `google.protobuf.Value` (the wire format Cursor uses
 * for MCP tool input schemas and MCP argument values).
 */
export declare function encodeValue(value: any): Uint8Array<ArrayBuffer>;
/**
 * Decode `google.protobuf.Value` bytes back into a JSON value.
 * @param {Uint8Array} bytes - serialized google.protobuf.Value message.
 * @returns {unknown} the decoded JSON value.
 */
export declare function decodeValue(bytes: any): any;
