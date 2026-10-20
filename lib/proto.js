function varintEncode(value) {
    const out = [];
    let n = Math.trunc(value);
    while(n > 0x7f){
        out.push(0x7f & n | 0x80);
        n = Math.floor(n / 128);
    }
    out.push(n);
    return Uint8Array.from(out);
}
function concatBytes(parts) {
    let total = 0;
    for (const part of parts)total += part.length;
    const out = new Uint8Array(total);
    let offset = 0;
    for (const part of parts){
        out.set(part, offset);
        offset += part.length;
    }
    return out;
}
class Writer {
    parts;
    constructor(){
        this.parts = [];
    }
    tag(field, wireType) {
        this.parts.push(varintEncode(field << 3 | wireType));
        return this;
    }
    bytes(field, data) {
        this.tag(field, 2);
        this.parts.push(varintEncode(data.length));
        this.parts.push(data);
        return this;
    }
    string(field, value) {
        return this.bytes(field, new TextEncoder().encode(value));
    }
    message(field, inner) {
        return this.bytes(field, inner);
    }
    varint(field, value) {
        this.tag(field, 0);
        this.parts.push(varintEncode(Math.trunc(value)));
        return this;
    }
    double(field, value) {
        this.tag(field, 1);
        const buffer = new ArrayBuffer(8);
        new DataView(buffer).setFloat64(0, value, true);
        this.parts.push(new Uint8Array(buffer));
        return this;
    }
    finish() {
        return concatBytes(this.parts);
    }
}
class Reader {
    data;
    pos;
    constructor(bytes){
        this.data = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
        this.pos = 0;
    }
    get done() {
        return this.pos >= this.data.length;
    }
    varint() {
        let result = 0;
        let shift = 0;
        while(true){
            if (this.pos >= this.data.length) throw new Error("protobuf: truncated varint");
            const byte = this.data[this.pos++];
            result += (0x7f & byte) * 2 ** shift;
            if ((0x80 & byte) === 0) break;
            shift += 7;
            if (shift > 63) throw new Error("protobuf: varint too long");
        }
        return result;
    }
    tag() {
        const raw = this.varint();
        return {
            field: Math.floor(raw / 8),
            wireType: raw % 8
        };
    }
    bytes() {
        const length = this.varint();
        if (this.pos + length > this.data.length) throw new Error("protobuf: truncated bytes");
        const out = this.data.subarray(this.pos, this.pos + length);
        this.pos += length;
        return out;
    }
    string() {
        return new TextDecoder().decode(this.bytes());
    }
    double() {
        if (this.pos + 8 > this.data.length) throw new Error("protobuf: truncated double");
        const view = new DataView(this.data.buffer, this.data.byteOffset + this.pos, 8);
        this.pos += 8;
        return view.getFloat64(0, true);
    }
    skip(wireType) {
        if (0 === wireType) this.varint();
        else if (1 === wireType) {
            if (this.pos + 8 > this.bytes.length) throw new Error("protobuf: truncated fixed64");
            this.pos += 8;
        } else if (2 === wireType) this.bytes();
        else if (5 === wireType) {
            if (this.pos + 4 > this.bytes.length) throw new Error("protobuf: truncated fixed32");
            this.pos += 4;
        } else throw new Error(`protobuf: unsupported wire type ${wireType}`);
    }
}
function encodeValue(value) {
    const writer = new Writer();
    if (null == value) writer.varint(1, 0);
    else if ("boolean" == typeof value) writer.varint(4, value ? 1 : 0);
    else if ("number" == typeof value) writer.double(2, value);
    else if ("string" == typeof value) writer.string(3, value);
    else if (Array.isArray(value)) {
        const list = new Writer();
        for (const item of value)list.message(1, encodeValue(item));
        writer.message(6, list.finish());
    } else if ("object" == typeof value) {
        const struct = new Writer();
        for (const [key, item] of Object.entries(value)){
            const entry = new Writer();
            entry.string(1, key);
            entry.message(2, encodeValue(item));
            struct.message(1, entry.finish());
        }
        writer.message(5, struct.finish());
    } else throw new Error(`cannot encode ${typeof value} as google.protobuf.Value`);
    return writer.finish();
}
function decodeValue(bytes) {
    const reader = new Reader(bytes);
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 0 === wireType) {
            reader.varint();
            break;
        }
        if (2 === field && 1 === wireType) return reader.double();
        if (3 === field && 2 === wireType) return reader.string();
        if (4 === field && 0 === wireType) return 0 !== reader.varint();
        if (5 === field && 2 === wireType) return decodeStruct(reader.bytes());
        if (6 === field && 2 === wireType) return decodeList(reader.bytes());
        reader.skip(wireType);
    }
    return null;
}
function decodeStruct(bytes) {
    const reader = new Reader(bytes);
    const result = {};
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 2 === wireType) {
            const entry = new Reader(reader.bytes());
            let key = "";
            let value = null;
            while(!entry.done){
                const tag = entry.tag();
                if (1 === tag.field && 2 === tag.wireType) key = entry.string();
                else if (2 === tag.field && 2 === tag.wireType) value = decodeValue(entry.bytes());
                else entry.skip(tag.wireType);
            }
            result[key] = value;
        } else reader.skip(wireType);
    }
    return result;
}
function decodeList(bytes) {
    const reader = new Reader(bytes);
    const result = [];
    while(!reader.done){
        const { field, wireType } = reader.tag();
        if (1 === field && 2 === wireType) result.push(decodeValue(reader.bytes()));
        else reader.skip(wireType);
    }
    return result;
}
export { Reader, Writer, concatBytes, decodeValue, encodeValue, varintEncode };
