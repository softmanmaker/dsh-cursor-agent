import { homedir } from "node:os";
import { dirname, join, resolve, sep } from "node:path";
import { lstat, readFile, readdir } from "node:fs/promises";
import { Writer } from "./proto.js";
const RULE_DESCRIPTION_CAP = 1536;
const MAX_RULE_SOURCE_BYTES = 1048576;
const MAX_RULES = 256;
const SKIP_DIR_NAMES = new Set([
    ".git",
    ".hg",
    ".svn",
    ".cache",
    ".dsh",
    ".next",
    ".nuxt",
    ".turbo",
    ".venv",
    "__pycache__",
    "coverage",
    "node_modules",
    "venv"
]);
const defaultIo = {
    async readFile (path) {
        return readFile(path, "utf8");
    },
    async isFile (path) {
        try {
            return (await lstat(path)).isFile();
        } catch  {
            return false;
        }
    },
    async isDirectory (path) {
        try {
            return (await lstat(path)).isDirectory();
        } catch  {
            return false;
        }
    },
    async readdir (path) {
        return readdir(path, {
            withFileTypes: true
        });
    }
};
function parseFrontmatterScalar(value) {
    const trimmed = String(value ?? "").trim();
    if ("true" === trimmed) return true;
    if ("false" === trimmed) return false;
    if (trimmed.length >= 2 && (trimmed.startsWith('"') && trimmed.endsWith('"') || trimmed.startsWith("'") && trimmed.endsWith("'"))) return trimmed.slice(1, -1);
    return trimmed;
}
function splitGlobList(value) {
    const items = [];
    let start = 0;
    let depth = 0;
    for(let i = 0; i < value.length; i++){
        const ch = value[i];
        if ("{" === ch) depth++;
        else if ("}" === ch && depth > 0) depth--;
        else if ("," === ch && 0 === depth) {
            const part = value.slice(start, i).trim();
            if (part.length > 0) items.push(part);
            start = i + 1;
        }
    }
    const last = value.slice(start).trim();
    if (last.length > 0) items.push(last);
    return items;
}
function normalizeRuleGlobs(value) {
    if ("string" == typeof value) {
        const items = splitGlobList(value);
        return items.length > 0 ? items : void 0;
    }
    if (Array.isArray(value)) {
        const items = value.filter((item)=>"string" == typeof item).map((item)=>item.trim()).filter(Boolean);
        return items.length > 0 ? items : void 0;
    }
}
function parseCursorRuleFrontmatter(text) {
    const trimmed = String(text ?? "").trimStart();
    if (!trimmed.startsWith("---")) return;
    const parts = trimmed.split("---").filter(Boolean);
    if (parts.length < 2) return;
    const raw = parts[0].trim();
    const body = parts.slice(1).join("---").trim();
    const frontmatter = {};
    let metadataBlock = null;
    let listKey = null;
    for (const rawLine of raw.split("\n")){
        const line = rawLine.replace(/\r$/, "");
        const listItem = line.match(/^\s+-\s+(.*)$/);
        if (listItem && listKey) {
            let item = listItem[1].trim();
            if (item.startsWith('"') && item.endsWith('"') || item.startsWith("'") && item.endsWith("'")) item = item.slice(1, -1);
            const existing = frontmatter[listKey];
            if (Array.isArray(existing)) existing.push(item);
            continue;
        }
        const indented = line.startsWith("  ") || line.startsWith("\t");
        if (metadataBlock && indented) {
            const inner = line.trim();
            const colon = inner.indexOf(":");
            if (-1 === colon) continue;
            const key = inner.slice(0, colon).trim();
            const rest = inner.slice(colon + 1).trim();
            const parsed = parseFrontmatterScalar(rest);
            const path = `${metadataBlock}.${key}`;
            if ("" === rest) {
                frontmatter[path] = [];
                listKey = path;
            } else if ("metadata.environments" === path || "metadata.disabledEnvironments" === path || "metadata.scopedTo" === path) {
                frontmatter[path] = String(parsed).split(",").map((part)=>part.trim()).filter(Boolean);
                listKey = null;
            } else {
                frontmatter[path] = parsed;
                listKey = null;
            }
            continue;
        }
        metadataBlock = null;
        listKey = null;
        const colon = line.indexOf(":");
        if (-1 === colon) continue;
        const key = line.slice(0, colon).trim();
        const rest = line.slice(colon + 1).trim();
        if ("" === rest && "metadata" === key) {
            metadataBlock = key;
            continue;
        }
        if ("globs" === key && "" === rest) {
            frontmatter.globs = [];
            listKey = "globs";
            continue;
        }
        const parsed = parseFrontmatterScalar(rest);
        if ("metadata.environments" === key || "metadata.disabledEnvironments" === key || "metadata.scopedTo" === key) {
            frontmatter[key] = String(parsed).split(",").map((part)=>part.trim()).filter(Boolean);
            continue;
        }
        frontmatter[key] = parsed;
    }
    return {
        frontmatter,
        rawFrontmatter: `---\n${raw}\n---`,
        body
    };
}
function cursorRuleKindFromFrontmatter(frontmatter = {}) {
    if (true === frontmatter.alwaysApply) return {
        kind: "global"
    };
    const globs = normalizeRuleGlobs(frontmatter.globs);
    if (void 0 !== globs) return {
        kind: "fileGlobbed",
        globs
    };
    if ("string" == typeof frontmatter.description && frontmatter.description.trim().length > 0) return {
        kind: "agentFetched",
        description: frontmatter.description.trim().slice(0, RULE_DESCRIPTION_CAP)
    };
    return {
        kind: "manuallyAttached"
    };
}
function stringList(value) {
    return Array.isArray(value) ? value.filter((item)=>"string" == typeof item) : [];
}
function toRule({ path, body, frontmatter = {}, rawFrontmatter = "", source = 0 }) {
    const kind = cursorRuleKindFromFrontmatter(frontmatter);
    return {
        fullPath: path,
        content: body,
        kind: kind.kind,
        ...void 0 !== kind.globs ? {
            globs: kind.globs
        } : {},
        ...void 0 !== kind.description ? {
            description: kind.description
        } : {},
        environments: stringList(frontmatter["metadata.environments"]),
        disabledEnvironments: stringList(frontmatter["metadata.disabledEnvironments"]),
        scopedTo: stringList(frontmatter["metadata.scopedTo"]),
        frontmatter: rawFrontmatter,
        source
    };
}
function alwaysApplyMarkdownRule(path, body, source = 0) {
    return {
        fullPath: path,
        content: body,
        kind: "global",
        environments: [],
        disabledEnvironments: [],
        scopedTo: [],
        frontmatter: "",
        source
    };
}
const DSH_SYSTEM_RULE_PATH = "dsh://system-prompt";
function dshSystemPromptRule(text) {
    const rule = alwaysApplyMarkdownRule(DSH_SYSTEM_RULE_PATH, String(text ?? ""));
    rule.plugin = "dsh";
    rule.required = true;
    return rule;
}
function mergeDshSystemRule(rules, systemText) {
    const text = String(systemText ?? "").trim();
    if (0 === text.length) return rules ?? [];
    return [
        dshSystemPromptRule(text),
        ...rules ?? []
    ].slice(0, MAX_RULES);
}
function encodeCursorRuleType(rule) {
    const writer = new Writer();
    if ("fileGlobbed" === rule.kind) {
        const inner = new Writer();
        for (const glob of rule.globs ?? [])inner.string(1, glob);
        writer.message(2, inner.finish());
    } else if ("agentFetched" === rule.kind) writer.message(3, new Writer().string(1, rule.description ?? "").finish());
    else if ("manuallyAttached" === rule.kind) writer.message(4, new Uint8Array());
    else writer.message(1, new Uint8Array());
    return writer.finish();
}
function encodeCursorRule(rule) {
    const writer = new Writer();
    writer.string(1, rule.fullPath ?? "");
    writer.string(2, rule.content ?? "");
    writer.message(3, encodeCursorRuleType(rule));
    if (Number.isSafeInteger(rule.source) && rule.source > 0) writer.varint(4, rule.source);
    for (const value of rule.environments ?? [])writer.string(7, value);
    for (const value of rule.disabledEnvironments ?? [])writer.string(8, value);
    if ("string" == typeof rule.plugin && rule.plugin.length > 0) writer.string(9, rule.plugin);
    for (const value of rule.scopedTo ?? [])writer.string(13, value);
    if ("string" == typeof rule.frontmatter && rule.frontmatter.length > 0) writer.string(14, rule.frontmatter);
    if (true === rule.required) writer.varint(15, 1);
    return writer.finish();
}
async function readBounded(io, path) {
    const text = await io.readFile(path);
    if (Buffer.byteLength(text, "utf8") > MAX_RULE_SOURCE_BYTES) return;
    return text;
}
async function loadAlwaysApplyMarkdown(io, dir, name) {
    const path = join(dir, name);
    if (!await io.isFile(path)) return;
    const body = await readBounded(io, path);
    if (void 0 === body) return;
    return alwaysApplyMarkdownRule(path, body);
}
async function loadMdc(io, path, source = 0) {
    if (!await io.isFile(path)) return;
    const text = await readBounded(io, path);
    if (void 0 === text) return;
    const parsed = parseCursorRuleFrontmatter(text);
    if (void 0 === parsed) return;
    return toRule({
        path,
        body: parsed.body,
        frontmatter: parsed.frontmatter,
        rawFrontmatter: parsed.rawFrontmatter,
        source
    });
}
async function loadMdcTree(io, dir, source = 0, out) {
    if (!await io.isDirectory(dir)) return;
    const stack = [
        dir
    ];
    while(stack.length > 0){
        const current = stack.pop();
        let entries;
        try {
            entries = await io.readdir(current);
        } catch  {
            continue;
        }
        for (const entry of entries){
            const name = "string" == typeof entry.name ? entry.name : String(entry);
            const path = join(current, name);
            const isDir = "function" == typeof entry.isDirectory ? entry.isDirectory() : false;
            const isFile = "function" == typeof entry.isFile ? entry.isFile() : false;
            const isSymlink = "function" == typeof entry.isSymbolicLink ? entry.isSymbolicLink() : false;
            if (!isSymlink) {
                if (isDir) {
                    if (!SKIP_DIR_NAMES.has(name)) stack.push(path);
                    continue;
                }
                if (isFile && name.endsWith(".mdc")) {
                    const rule = await loadMdc(io, path, source);
                    if (void 0 !== rule) out.set(rule.fullPath, rule);
                }
            }
        }
    }
}
async function findGitRoot(io, start) {
    let dir = start;
    for(;;){
        if (await io.isDirectory(join(dir, ".git")) || await io.isFile(join(dir, ".git"))) return dir;
        const parent = dirname(dir);
        if (parent === dir) return;
        dir = parent;
    }
}
function ancestorDirs(start) {
    const dirs = [];
    let dir = start;
    for(;;){
        dirs.push(dir);
        const parent = dirname(dir);
        if (parent === dir) break;
        dir = parent;
    }
    return dirs;
}
async function walkNestedMarkdown(io, root, out) {
    const stack = [
        root
    ];
    while(stack.length > 0){
        const current = stack.pop();
        let entries;
        try {
            entries = await io.readdir(current);
        } catch  {
            continue;
        }
        for (const entry of entries){
            const name = "string" == typeof entry.name ? entry.name : String(entry);
            const path = join(current, name);
            const isDir = "function" == typeof entry.isDirectory ? entry.isDirectory() : false;
            const isFile = "function" == typeof entry.isFile ? entry.isFile() : false;
            const isSymlink = "function" == typeof entry.isSymbolicLink ? entry.isSymbolicLink() : false;
            if (!isSymlink) {
                if (isDir) {
                    if (!SKIP_DIR_NAMES.has(name)) stack.push(path);
                    continue;
                }
                if (isFile && "AGENTS.md" === name) {
                    const body = await readBounded(io, path);
                    if (void 0 !== body) out.set(path, alwaysApplyMarkdownRule(path, body));
                } else if (isFile && name.endsWith(".mdc") && path.includes(`${sep}.cursor${sep}rules${sep}`)) {
                    const rule = await loadMdc(io, path);
                    if (void 0 !== rule) out.set(rule.fullPath, rule);
                }
            }
        }
    }
}
async function collectCursorRules(options = {}) {
    const io = options.fs ?? defaultIo;
    const cwd = resolve(options.cwd ?? process.cwd());
    const includeClaude = true === options.includeClaude;
    const byPath = new Map();
    const gitRoot = await findGitRoot(io, cwd);
    const projectRoot = gitRoot ?? cwd;
    const cursorrules = join(projectRoot, ".cursorrules");
    if (await io.isFile(cursorrules)) {
        const body = await readBounded(io, cursorrules);
        if (void 0 !== body) byPath.set(cursorrules, alwaysApplyMarkdownRule(cursorrules, body));
    }
    for (const dir of ancestorDirs(cwd)){
        const agents = await loadAlwaysApplyMarkdown(io, dir, "AGENTS.md");
        if (void 0 !== agents) byPath.set(agents.fullPath, agents);
        if (includeClaude) for (const name of [
            "CLAUDE.md",
            "CLAUDE.local.md"
        ]){
            const extra = await loadAlwaysApplyMarkdown(io, dir, name);
            if (void 0 !== extra) byPath.set(extra.fullPath, extra);
        }
        await loadMdcTree(io, join(dir, ".cursor", "rules"), 0, byPath);
    }
    await walkNestedMarkdown(io, cwd, byPath);
    if (false !== options.userRulesDir) {
        const userDir = options.userRulesDir ?? join(homedir(), ".cursor", "rules");
        await loadMdcTree(io, userDir, 2, byPath);
    }
    return [
        ...byPath.values()
    ].slice(0, MAX_RULES);
}
export { DSH_SYSTEM_RULE_PATH, MAX_RULES, MAX_RULE_SOURCE_BYTES, RULE_DESCRIPTION_CAP, collectCursorRules, cursorRuleKindFromFrontmatter, dshSystemPromptRule, encodeCursorRule, encodeCursorRuleType, mergeDshSystemRule, normalizeRuleGlobs, parseCursorRuleFrontmatter };
