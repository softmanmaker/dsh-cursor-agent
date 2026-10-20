import node_http from "node:http";
import node_https from "node:https";
async function nativeFetch(url, init = {}) {
    const target = new URL(url);
    const client = "https:" === target.protocol ? node_https : node_http;
    const method = (init.method ?? "GET").toUpperCase();
    const body = void 0 === init.body ? void 0 : isBytes(init.body) ? Buffer.from(init.body) : String(init.body);
    const request = (u, redirect)=>new Promise((resolve, reject)=>{
            const req = client.request(u, {
                method,
                headers: sanitizeHeaders(init.headers),
                signal: init.signal
            }, (res)=>{
                const chunks = [];
                res.on("data", (chunk)=>chunks.push(chunk));
                res.on("end", ()=>{
                    const data = Buffer.concat(chunks);
                    const status = res.statusCode ?? 0;
                    if (("error" === redirect || "manual" === redirect) && status >= 300 && status < 400) return void reject(new Error(`HTTP ${status} from ${u.origin}${u.pathname}`));
                    const location = res.headers.location;
                    if ((redirect ?? "follow") === "follow" && location && status >= 300 && status < 400) {
                        const next = new URL(location, u);
                        resolve({
                            redirect: next
                        });
                        return;
                    }
                    resolve({
                        response: makeResponse(status, res, data)
                    });
                });
            });
            req.on("error", reject);
            if (void 0 !== body) req.write(body);
            req.end();
        });
    let u = target;
    for(let hops = 0;; hops++){
        const result = await request(u, init.redirect);
        if (void 0 !== result.redirect) {
            if (hops >= 6) throw new Error(`too many redirects from ${target.href}`);
            u = result.redirect;
            continue;
        }
        return result.response;
    }
}
function isBytes(value) {
    return value instanceof Uint8Array || "string" != typeof value && ArrayBuffer.isView(value);
}
function sanitizeHeaders(headers) {
    if (void 0 === headers) return;
    const out = {};
    for (const [key, value] of Object.entries(headers))if (void 0 !== value) out[key] = value;
    return out;
}
function makeResponse(status, res, data) {
    const text = ()=>data.toString("utf8");
    return {
        ok: status >= 200 && status < 300,
        status,
        statusText: res.statusMessage ?? "",
        headers: {
            get: (name)=>res.headers[String(name).toLowerCase()] ?? null
        },
        text,
        json: async ()=>JSON.parse(text()),
        arrayBuffer: async ()=>data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength)
    };
}
export { nativeFetch };
