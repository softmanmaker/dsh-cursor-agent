const CURSOR_BASE_URL = "https://api2.cursor.sh";
function resolveCursorApiBaseUrl(value) {
    const raw = "string" == typeof value ? value.trim() : "";
    const input = 0 === raw.length ? CURSOR_BASE_URL : raw;
    if (input.length > 2048) throw new Error("cursor-agent: apiBaseUrl must be an absolute http(s) URL");
    let url;
    try {
        url = new URL(input);
    } catch  {
        throw new Error("cursor-agent: apiBaseUrl must be an absolute http(s) URL");
    }
    if ("http:" !== url.protocol && "https:" !== url.protocol) throw new Error("cursor-agent: apiBaseUrl must be an absolute http(s) URL");
    if (url.username || url.password) throw new Error("cursor-agent: apiBaseUrl must not include credentials");
    url.hash = "";
    url.search = "";
    let href = url.href;
    if (href.endsWith("/")) href = href.slice(0, -1);
    return href;
}
export { CURSOR_BASE_URL, resolveCursorApiBaseUrl };
