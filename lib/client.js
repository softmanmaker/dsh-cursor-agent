window.__ModuleLoader__.load({
	id: "@ginojin/dsh-cursor-agent",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
"use strict";
var __webpack_require__ = {};
(()=>{
    __webpack_require__.d = (exports1, getters, values)=>{
        var define = (defs, kind)=>{
            for(var key in defs)if (__webpack_require__.o(defs, key) && !__webpack_require__.o(exports1, key)) Object.defineProperty(exports1, key, {
                enumerable: true,
                [kind]: defs[key]
            });
        };
        define(getters, "get");
        define(values, "value");
    };
})();
(()=>{
    __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop);
})();
(()=>{
    __webpack_require__.r = (exports1)=>{
        if ("u" > typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports1, Symbol.toStringTag, {
            value: 'Module'
        });
        Object.defineProperty(exports1, '__esModule', {
            value: true
        });
    };
})();
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
    apply: ()=>apply,
    inject: ()=>inject
});
const NS = "settings.cursorSubscription";
const CHANNEL = '/cursor-agent';
const zh = {
    nav: 'Cursor Agent',
    title: 'Cursor Agent',
    connected: '已登录',
    disconnected: '未登录',
    accountLoading: '正在读取账户状态…',
    login: '浏览器登录',
    logout: '退出登录',
    cancel: '取消',
    openLogin: '打开登录页',
    waiting: '正在等待登录完成…',
    failed: '登录失败，请重试。',
    loadFailed: '无法读取 Cursor 状态。',
    note: '登录 Cursor 账户（浏览器、API Key 或 Auth Token）后，即可在模型选择器中使用 Cursor Agent 模型。会话由 Cursor 服务端 Agent 驱动。凭据仅保存在本机，不会上传。',
    expiresAt: '有效至 {value}',
    apiKeyLogin: 'API Key 或 Token 登录',
    apiKeyPlaceholder: '粘贴 crsr_ API Key 或 Auth Token',
    apiKeySubmit: '登录',
    apiKeyBusy: '登录中…',
    apiKeyRequired: '请输入 API Key 或 Auth Token',
    methodBrowser: '浏览器登录',
    methodApiKey: 'API Key',
    methodToken: 'Token',
    signedInCredential: '{kind}: {value}',
    usage: '订阅用量',
    usageRefresh: '刷新',
    usageRefreshing: '刷新中…',
    usageNotSignedIn: '登录后可查看 Cursor 返回的用量。',
    usageLoading: '正在读取用量…',
    usageError: '无法读取用量',
    usageUpdated: '更新于 {value}',
    email: '账户',
    planName: '套餐',
    usagePlanMissing: '该账户未返回套餐额度（按量计费 / 企业账户请以 Cursor 面板为准）。',
    planTotalSpend: '套餐总消费',
    planIncluded: '包含已用',
    planBonus: 'Bonus 已用',
    planRemaining: '套餐剩余',
    planTotalLimit: '套餐总额度',
    planLimit: '包含额度',
    planBonusLimit: 'Bonus 额度',
    autoSpend: 'Cursor 模型用量',
    apiSpend: '其他模型用量',
    spendUsedOf: '已消费 ${used} / ${limit}',
    spendTotal: '总消费 ${value}',
    spendLimit: '消费上限',
    pooled: '共享额度',
    individual: '个人额度',
    billingCycle: '账单周期',
    billingDaysLeft: '剩余 {value} 天',
    grok: 'Grok 用量',
    grokAvailable: '可用 {value}%',
    grokReset: '下次重置：{value}',
    grokBanked: 'Banked 重置次数：{value}',
    models: '模型列表',
    modelsRefresh: '刷新模型列表',
    modelsRefreshing: '刷新中…',
    modelsEmpty: '暂无模型数据',
    modelsCount: '{value} 个模型',
    modelsLoading: '正在读取模型列表…',
    runtimeSettings: '运行设置',
    runtimeSettingsNote: '设置会保存到当前 DSH profile，并从下一次 Cursor 请求开始生效。',
    maxToolRounds: '最大工具轮次',
    maxToolRoundsHint: '单次 Cursor 任务允许的工具轮次，超过后以 TOOL_LIMIT 终止。默认 1000，范围 1–1000。',
    apiBaseUrl: 'Cursor API Base URL',
    apiBaseUrlHint: 'Cursor Agent / 鉴权 / 用量请求的 API 根地址。默认 https://api2.cursor.sh ，留空则恢复默认。',
    retryCount: '重试次数',
    retryCountHint: '匹配状态码时允许的额外请求次数。默认 0（关闭），启用后可能重复 Cursor 远端模型请求或用量。范围 0–10。',
    retryInterval: '重试间隔（毫秒）',
    retryIntervalHint: '每次 HTTP 重试前等待的固定时间。范围 0–300000。',
    retryStatuses: '重试 HTTP 状态码',
    retryStatusesHint: '使用逗号分隔，例如 408, 425, 429, 500, 502, 503, 504。',
    saveSettings: '保存设置',
    savingSettings: '保存中…',
    reloadSettings: '重新加载',
    loadingSettings: '加载中…',
    settingsSaved: '设置已保存。',
    settingsLoadFailed: '无法读取运行设置。',
    settingsSaveFailed: '无法保存运行设置。',
    settingsInvalid: '请检查工具轮次、API 地址、重试次数、间隔和 HTTP 状态码。'
};
const en = {
    nav: 'Cursor Agent',
    title: 'Cursor Agent',
    connected: 'Signed in',
    disconnected: 'Not signed in',
    accountLoading: 'Reading account status…',
    login: 'Browser sign-in',
    logout: 'Sign out',
    cancel: 'Cancel',
    openLogin: 'Open sign-in page',
    waiting: 'Waiting for sign-in to finish…',
    failed: 'Sign-in failed. Try again.',
    loadFailed: 'Could not read Cursor state.',
    note: "After signing in with a Cursor account (browser, API key, or auth token), Cursor Agent models become available in the model picker. The session runs Cursor's server-side agent. Credentials stay on this machine.",
    expiresAt: 'Valid until {value}',
    apiKeyLogin: 'API key or token sign-in',
    apiKeyPlaceholder: 'Paste a crsr_ API key or auth token',
    apiKeySubmit: 'Sign in',
    apiKeyBusy: 'Signing in…',
    apiKeyRequired: 'Enter an API key or auth token',
    methodBrowser: 'Browser sign-in',
    methodApiKey: 'API key',
    methodToken: 'Token',
    signedInCredential: '{kind}: {value}',
    usage: "Subscription usage",
    usageRefresh: 'Refresh',
    usageRefreshing: 'Refreshing…',
    usageNotSignedIn: 'Sign in to read usage reported by Cursor.',
    usageLoading: 'Reading usage…',
    usageError: 'Could not read usage',
    usageUpdated: 'Updated {value}',
    email: 'Account',
    planName: 'Plan',
    usagePlanMissing: 'No plan usage reported for this account (usage-based / enterprise accounts: check the Cursor dashboard).',
    planTotalSpend: 'Plan total spend',
    planIncluded: 'Included spend',
    planBonus: 'Bonus spend',
    planRemaining: 'Remaining',
    planTotalLimit: 'Plan total limit',
    planLimit: 'Included allowance',
    planBonusLimit: 'Bonus allowance',
    autoSpend: 'Cursor model usage',
    apiSpend: 'Other model usage',
    spendUsedOf: '${used} / ${limit} spent',
    spendTotal: '${value} total',
    spendLimit: 'Spend limit',
    pooled: 'Pooled',
    individual: 'Individual',
    billingCycle: 'Billing cycle',
    billingDaysLeft: '{value} days left',
    grok: 'Grok allowance',
    grokAvailable: '{value}% available',
    grokReset: 'Resets: {value}',
    grokBanked: 'Banked resets: {value}',
    models: 'Models',
    modelsRefresh: 'Refresh models',
    modelsRefreshing: 'Refreshing…',
    modelsEmpty: 'No model data yet',
    modelsCount: '{value} models',
    modelsLoading: 'Reading model list…',
    runtimeSettings: 'Runtime settings',
    runtimeSettingsNote: 'Settings are stored in the current DSH profile and apply from the next Cursor request.',
    maxToolRounds: 'Maximum tool rounds',
    maxToolRoundsHint: 'Tool rounds allowed in one Cursor task before TOOL_LIMIT stops it. Default: 1000. Range: 1–1000.',
    apiBaseUrl: 'Cursor API base URL',
    apiBaseUrlHint: 'Root URL for Cursor Agent, auth, and usage requests. Default: https://api2.cursor.sh. Leave blank to restore the default.',
    retryCount: 'Retry count',
    retryCountHint: 'Additional attempts for matching statuses. Default: 0 (off). Enabling retries may repeat remote Cursor model work or usage. Range: 0–10.',
    retryInterval: 'Retry interval (ms)',
    retryIntervalHint: 'Fixed delay before each HTTP retry. Range: 0–300000.',
    retryStatuses: 'Retry HTTP status codes',
    retryStatusesHint: 'Comma-separated, for example: 408, 425, 429, 500, 502, 503, 504.',
    saveSettings: 'Save settings',
    savingSettings: 'Saving…',
    reloadSettings: 'Reload',
    loadingSettings: 'Loading…',
    settingsSaved: 'Settings saved.',
    settingsLoadFailed: 'Could not read runtime settings.',
    settingsSaveFailed: 'Could not save runtime settings.',
    settingsInvalid: 'Check the tool rounds, API URL, retry count, interval, and HTTP status codes.'
};
function fill(text, values) {
    return Object.entries(values).reduce((next, [key, value])=>next.replace(`{${key}}`, String(value)), text);
}
const jsx_runtime_namespaceObject = require("react/jsx-runtime");
const external_react_namespaceObject = require("react");
const dsh_client_ui_primitives_namespaceObject = require("@deepseek-ai/dsh-client-ui-primitives");
function unwrap(response) {
    const envelope = response;
    if (!envelope?.ok) throw new Error(envelope?.error?.message ?? 'Cursor RPC failed');
    return envelope.value;
}
function callRpc(rpc, channel, endpoint, payload = {}) {
    return rpc.call(channel, endpoint, payload).then((response)=>unwrap(response));
}
function validDate(value) {
    const date = new Date(value);
    return Number.isFinite(date.getTime()) ? date : void 0;
}
function percent(value) {
    return Number(value).toLocaleString(void 0, {
        maximumFractionDigits: 1
    });
}
function money(value) {
    return Number(value).toLocaleString(void 0, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}
function AccountCard({ rpc, t, account, setAccount, onSignedOut }) {
    const [flow, setFlow] = (0, external_react_namespaceObject.useState)();
    const [busy, setBusy] = (0, external_react_namespaceObject.useState)(false);
    const [error, setError] = (0, external_react_namespaceObject.useState)();
    const [apiKeyValue, setApiKeyValue] = (0, external_react_namespaceObject.useState)('');
    const [apiKeyError, setApiKeyError] = (0, external_react_namespaceObject.useState)();
    const call = (endpoint, payload = {})=>callRpc(rpc, CHANNEL, endpoint, payload);
    (0, external_react_namespaceObject.useEffect)(()=>{
        if (flow?.id === void 0 || [
            'authenticated',
            'failed',
            'cancelled'
        ].includes(flow.phase ?? '')) return;
        const timer = window.setInterval(()=>{
            call('login/status', {
                id: flow.id
            }).then((next)=>{
                setFlow(next);
                if ('authenticated' === next.phase) call('status').then(setAccount).catch(()=>setError(t('failed')));
            }).catch(()=>setError(t('failed')));
        }, 1200);
        return ()=>window.clearInterval(timer);
    }, [
        flow?.id,
        flow?.phase
    ]);
    const begin = ()=>{
        setBusy(true);
        setError(void 0);
        call('login/start', {
            openExternal: true
        }).then(setFlow).catch(()=>setError(t('failed'))).finally(()=>setBusy(false));
    };
    const cancel = ()=>{
        if (flow?.id === void 0) return;
        setBusy(true);
        call('login/cancel', {
            id: flow.id
        }).then(setFlow).finally(()=>setBusy(false));
    };
    const logout = ()=>{
        setBusy(true);
        setError(void 0);
        call('logout').then((next)=>{
            setAccount(next);
            setFlow(void 0);
            onSignedOut();
        }).catch(()=>setError(t('failed'))).finally(()=>setBusy(false));
    };
    const submitApiKey = ()=>{
        const value = apiKeyValue.trim();
        if ('' === value) return void setApiKeyError(t('apiKeyRequired'));
        setBusy(true);
        setError(void 0);
        setApiKeyError(void 0);
        call('login/apikey', {
            apiKey: value
        }).then((next)=>{
            setAccount(next);
            setApiKeyValue('');
            onSignedOut();
        }).catch((err)=>setApiKeyError(err.message)).finally(()=>setBusy(false));
    };
    const signedIn = account?.authenticated === true;
    const accountReady = void 0 !== account;
    const expiresAt = account?.method === 'token' && Number.isFinite(account?.expiresAt) ? new Date(account.expiresAt) : void 0;
    const credentialKind = account?.method === 'api-key' ? t('methodApiKey') : account?.method === 'token' ? t('methodToken') : void 0;
    const credentialValue = account?.method === 'api-key' ? account.apiKeyLabel : account?.method === 'token' ? account.tokenLabel : void 0;
    return /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
        className: "cursorSubscriptionCard",
        children: [
            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                className: "cursorSubscriptionAccountRow",
                children: [
                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                        className: "cursorSubscriptionStatus",
                        role: "status",
                        "aria-live": "polite",
                        children: [
                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("span", {
                                className: "cursorSubscriptionDot",
                                "data-state": accountReady ? signedIn ? 'connected' : 'disconnected' : 'loading',
                                "aria-hidden": "true"
                            }),
                            accountReady ? signedIn ? t('connected') : t('disconnected') : t('accountLoading'),
                            signedIn && credentialKind && credentialValue ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("span", {
                                className: "cursorSubscriptionCredential",
                                children: fill(t('signedInCredential'), {
                                    kind: credentialKind,
                                    value: credentialValue
                                })
                            }) : null,
                            signedIn && void 0 !== expiresAt ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("time", {
                                className: "cursorSubscriptionFreshness",
                                dateTime: expiresAt.toISOString(),
                                children: fill(t('expiresAt'), {
                                    value: expiresAt.toLocaleString()
                                })
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                        className: "cursorSubscriptionActions",
                        children: signedIn ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(dsh_client_ui_primitives_namespaceObject.Button, {
                            type: "button",
                            variant: "outline",
                            disabled: busy,
                            onClick: logout,
                            children: t('logout')
                        }) : accountReady && (void 0 === flow || [
                            'failed',
                            'cancelled'
                        ].includes(flow.phase ?? '')) ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(dsh_client_ui_primitives_namespaceObject.Button, {
                            type: "button",
                            variant: "primary",
                            disabled: busy,
                            onClick: begin,
                            children: t('login')
                        }) : null
                    })
                ]
            }),
            !signedIn && accountReady ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                className: "cursorSubscriptionApiKey",
                children: [
                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                        className: "cursorSubscriptionApiKeyRow",
                        children: [
                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("input", {
                                className: "cursorSubscriptionApiKeyInput",
                                type: "password",
                                autoComplete: "off",
                                placeholder: t('apiKeyPlaceholder'),
                                value: apiKeyValue,
                                disabled: busy,
                                "aria-label": t('apiKeyLogin'),
                                onChange: (event)=>setApiKeyValue(event.target.value)
                            }),
                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(dsh_client_ui_primitives_namespaceObject.Button, {
                                type: "button",
                                variant: "primary",
                                disabled: busy,
                                onClick: submitApiKey,
                                children: busy ? t('apiKeyBusy') : t('apiKeySubmit')
                            })
                        ]
                    }),
                    void 0 !== apiKeyError ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("p", {
                        className: "cursorSubscriptionError",
                        role: "alert",
                        children: apiKeyError
                    }) : null
                ]
            }) : null,
            !signedIn && void 0 !== flow && [
                'starting',
                'waiting_browser',
                'waiting_input'
            ].includes(flow.phase ?? '') ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                className: "cursorSubscriptionFlow",
                children: [
                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("p", {
                        children: t('waiting')
                    }),
                    void 0 === flow.authUrl ? null : /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("a", {
                        href: flow.authUrl,
                        target: "_blank",
                        rel: "noreferrer",
                        children: t('openLogin')
                    }),
                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(dsh_client_ui_primitives_namespaceObject.Button, {
                        type: "button",
                        variant: "outline",
                        disabled: busy,
                        onClick: cancel,
                        children: t('cancel')
                    })
                ]
            }) : null,
            flow?.phase === 'failed' || void 0 !== error ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)(jsx_runtime_namespaceObject.Fragment, {
                children: [
                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("p", {
                        className: "cursorSubscriptionError",
                        role: "alert",
                        children: error ?? t('failed')
                    }),
                    flow?.detail ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("p", {
                        className: "cursorSubscriptionError",
                        children: flow.detail
                    }) : null
                ]
            }) : null
        ]
    });
}
function ModelsCard({ rpc, t, signedIn }) {
    const [data, setData] = (0, external_react_namespaceObject.useState)();
    const [busy, setBusy] = (0, external_react_namespaceObject.useState)(false);
    const [error, setError] = (0, external_react_namespaceObject.useState)();
    const request = (0, external_react_namespaceObject.useRef)(0);
    const load = (force)=>{
        if (!signedIn) return;
        const id = ++request.current;
        setBusy(true);
        setError(void 0);
        callRpc(rpc, CHANNEL, 'models', {
            force
        }).then((next)=>{
            if (request.current === id) setData(next);
        }).catch((err)=>{
            if (request.current === id) setError(err.message);
        }).finally(()=>{
            if (request.current === id) setBusy(false);
        });
    };
    (0, external_react_namespaceObject.useEffect)(()=>{
        if (signedIn) load(false);
        else {
            request.current += 1;
            setData(void 0);
            setError(void 0);
            setBusy(false);
        }
        return ()=>{
            request.current += 1;
        };
    }, [
        signedIn
    ]);
    const models = Array.isArray(data?.models) ? data.models : [];
    return /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
        className: "cursorSubscriptionCard",
        children: [
            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                className: "cursorSubscriptionSectionHead",
                children: [
                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                        className: "cursorSubscriptionSectionTitle",
                        children: [
                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("h3", {
                                children: t('models')
                            }),
                            models.length > 0 ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("span", {
                                className: "cursorSubscriptionFreshness",
                                children: fill(t('modelsCount'), {
                                    value: models.length
                                })
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(dsh_client_ui_primitives_namespaceObject.Button, {
                        className: "cursorSubscriptionRefresh",
                        type: "button",
                        variant: "outline",
                        disabled: !signedIn || busy,
                        "aria-busy": busy,
                        onClick: ()=>load(true),
                        children: busy ? t('modelsRefreshing') : t('modelsRefresh')
                    })
                ]
            }),
            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                className: "cursorSubscriptionModels",
                "aria-live": "polite",
                children: [
                    signedIn ? null : /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("p", {
                        className: "cursorSubscriptionEmpty",
                        children: t('usageNotSignedIn')
                    }),
                    signedIn && busy && 0 === models.length ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("p", {
                        className: "cursorSubscriptionEmpty",
                        role: "status",
                        children: t('modelsLoading')
                    }) : null,
                    void 0 === error ? null : /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("p", {
                        className: "cursorSubscriptionError",
                        role: "alert",
                        children: error
                    }),
                    models.length > 0 ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                        className: "cursorSubscriptionModelChips",
                        children: models.map((model)=>/*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("span", {
                                className: "cursorSubscriptionModelChip",
                                title: model.name,
                                children: model.id
                            }, model.id))
                    }) : null
                ]
            })
        ]
    });
}
const DEFAULT_API_BASE_URL = 'https://api2.cursor.sh';
function parseApiBaseUrl(value) {
    const raw = value.trim();
    const input = 0 === raw.length ? DEFAULT_API_BASE_URL : raw;
    const url = new URL(input);
    if ('http:' !== url.protocol && 'https:' !== url.protocol) throw new Error('invalid url');
    if (url.username || url.password) throw new Error('invalid url');
    url.hash = '';
    url.search = '';
    return url.href.endsWith('/') ? url.href.slice(0, -1) : url.href;
}
function RuntimeSettingsCard({ rpc, t }) {
    const [form, setForm] = (0, external_react_namespaceObject.useState)();
    const [baseline, setBaseline] = (0, external_react_namespaceObject.useState)();
    const [busy, setBusy] = (0, external_react_namespaceObject.useState)(false);
    const [error, setError] = (0, external_react_namespaceObject.useState)();
    const [saved, setSaved] = (0, external_react_namespaceObject.useState)(false);
    const request = (0, external_react_namespaceObject.useRef)(0);
    const show = (value)=>({
            maxToolRounds: String(value.maxToolRounds),
            apiBaseUrl: value.apiBaseUrl,
            retryCount: String(value.retryCount),
            retryIntervalMs: String(value.retryIntervalMs),
            retryHttpStatusCodes: value.retryHttpStatusCodes.join(', ')
        });
    const accept = (value)=>{
        setForm(show(value));
        setBaseline({
            maxToolRounds: value.maxToolRounds,
            apiBaseUrl: value.apiBaseUrl,
            retryCount: value.retryCount,
            retryIntervalMs: value.retryIntervalMs,
            retryHttpStatusCodes: [
                ...value.retryHttpStatusCodes
            ],
            revision: value.revision
        });
    };
    const load = ()=>{
        const id = ++request.current;
        setBusy(true);
        setError(void 0);
        setSaved(false);
        callRpc(rpc, CHANNEL, 'settings').then((value)=>{
            if (request.current === id) accept(value);
        }).catch(()=>{
            if (request.current === id) setError(t('settingsLoadFailed'));
        }).finally(()=>{
            if (request.current === id) setBusy(false);
        });
    };
    (0, external_react_namespaceObject.useEffect)(()=>{
        load();
        return ()=>{
            request.current += 1;
        };
    }, []);
    const change = (key)=>(event)=>{
            const value = event.target.value;
            setForm((current)=>current ? {
                    ...current,
                    [key]: value
                } : current);
            setError(void 0);
            setSaved(false);
        };
    const parse = ()=>{
        if (!form) throw new Error('missing form');
        const integer = (value, min, max)=>{
            if (!/^\d+$/.test(value.trim())) throw new Error('invalid integer');
            const parsed = Number(value);
            if (!Number.isSafeInteger(parsed) || parsed < min || parsed > max) throw new Error('integer out of range');
            return parsed;
        };
        const statusText = form.retryHttpStatusCodes.trim();
        if ('' !== statusText && !/^\d{3}(?:\s*,\s*\d{3})*$/.test(statusText)) throw new Error('invalid status list');
        const statuses = '' === statusText ? [] : statusText.split(',').map((value)=>integer(value, 400, 599));
        if (new Set(statuses).size !== statuses.length) throw new Error('duplicate status');
        const apiBaseUrl = parseApiBaseUrl(form.apiBaseUrl);
        return {
            maxToolRounds: integer(form.maxToolRounds, 1, 1000),
            apiBaseUrl,
            retryCount: integer(form.retryCount, 0, 10),
            retryIntervalMs: integer(form.retryIntervalMs, 0, 300000),
            retryHttpStatusCodes: statuses
        };
    };
    const save = ()=>{
        let value;
        try {
            value = parse();
        } catch  {
            setError(t('settingsInvalid'));
            setSaved(false);
            return;
        }
        if (void 0 === baseline) return;
        const patch = {};
        for (const key of [
            'maxToolRounds',
            'apiBaseUrl',
            'retryCount',
            'retryIntervalMs',
            'retryHttpStatusCodes'
        ])if (JSON.stringify(value[key]) !== JSON.stringify(baseline[key])) patch[key] = value[key];
        if (0 === Object.keys(patch).length) {
            setError(void 0);
            setSaved(true);
            return;
        }
        const id = ++request.current;
        setBusy(true);
        setError(void 0);
        setSaved(false);
        callRpc(rpc, CHANNEL, 'settings/update', {
            ...patch,
            revision: baseline.revision
        }).then((next)=>{
            if (request.current !== id) return;
            accept(next);
            setSaved(true);
        }).catch(()=>{
            if (request.current === id) setError(t('settingsSaveFailed'));
        }).finally(()=>{
            if (request.current === id) setBusy(false);
        });
    };
    const field = (key, label, hint, properties = {})=>/*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
            className: `cursorSubscriptionField${properties.wide ? " cursorSubscriptionFieldWide" : ''}`,
            children: [
                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("label", {
                    htmlFor: `cursor-agent-${key}`,
                    children: t(label)
                }),
                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("input", {
                    id: `cursor-agent-${key}`,
                    type: properties.type ?? 'number',
                    min: properties.min,
                    max: properties.max,
                    step: "1",
                    placeholder: properties.placeholder,
                    disabled: busy || void 0 === form,
                    value: form?.[key] ?? '',
                    onChange: change(key)
                }),
                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("span", {
                    className: "cursorSubscriptionFieldHint",
                    children: t(hint)
                })
            ]
        });
    return /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
        className: "cursorSubscriptionCard",
        children: [
            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                className: "cursorSubscriptionSectionTitle",
                children: [
                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("h3", {
                        children: t('runtimeSettings')
                    }),
                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("p", {
                        className: "cursorSubscriptionFreshness",
                        children: t('runtimeSettingsNote')
                    })
                ]
            }),
            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                className: "cursorSubscriptionSettingsGrid",
                children: [
                    field('maxToolRounds', 'maxToolRounds', 'maxToolRoundsHint', {
                        min: 1,
                        max: 1000
                    }),
                    field('apiBaseUrl', 'apiBaseUrl', 'apiBaseUrlHint', {
                        type: 'text',
                        wide: true,
                        placeholder: 'https://api2.cursor.sh'
                    }),
                    field('retryCount', 'retryCount', 'retryCountHint', {
                        min: 0,
                        max: 10
                    }),
                    field('retryIntervalMs', 'retryInterval', 'retryIntervalHint', {
                        min: 0,
                        max: 300000
                    }),
                    field('retryHttpStatusCodes', 'retryStatuses', 'retryStatusesHint', {
                        type: 'text',
                        wide: true
                    })
                ]
            }),
            void 0 === error ? null : /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("p", {
                className: "cursorSubscriptionError",
                role: "alert",
                children: error
            }),
            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                className: "cursorSubscriptionSettingsFoot",
                children: [
                    saved ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("p", {
                        className: "cursorSubscriptionSuccess",
                        role: "status",
                        children: t('settingsSaved')
                    }) : /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("span", {}),
                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(dsh_client_ui_primitives_namespaceObject.Button, {
                        type: "button",
                        variant: "primary",
                        disabled: busy || void 0 !== form && void 0 === baseline,
                        onClick: void 0 === form ? load : save,
                        children: busy ? void 0 === form ? t('loadingSettings') : t('savingSettings') : void 0 === form ? t('reloadSettings') : t('saveSettings')
                    })
                ]
            })
        ]
    });
}
function UsageRow({ label, used, limit, meta, footer }) {
    const available = 'number' == typeof used && Number.isFinite(used) && 'number' == typeof limit && Number.isFinite(limit) && limit > 0;
    const usedPct = available ? Math.min(100, Math.round(used / limit * 1000) / 10) : 0;
    const headline = available ? `${percent(usedPct)}%` : '—';
    return /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
        className: "cursorSubscriptionUsageRow",
        children: [
            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                className: "cursorSubscriptionUsageTop",
                children: [
                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("span", {
                        className: "cursorSubscriptionUsageLabel",
                        children: label
                    }),
                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("strong", {
                        children: headline
                    })
                ]
            }),
            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("progress", {
                max: "100",
                value: usedPct,
                "aria-label": `${label} ${headline}`
            }),
            meta || footer ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                className: "cursorSubscriptionUsageFoot",
                children: [
                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("span", {
                        children: meta
                    }),
                    footer ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("span", {
                        className: "cursorSubscriptionUsageFootRight",
                        children: footer
                    }) : null
                ]
            }) : null
        ]
    });
}
function UsageCard({ rpc, t, signedIn, resetKey }) {
    const [usage, setUsage] = (0, external_react_namespaceObject.useState)();
    const [busy, setBusy] = (0, external_react_namespaceObject.useState)(false);
    const [error, setError] = (0, external_react_namespaceObject.useState)();
    const request = (0, external_react_namespaceObject.useRef)(0);
    const load = (force)=>{
        if (!signedIn) return;
        const id = ++request.current;
        setBusy(true);
        setError(void 0);
        callRpc(rpc, CHANNEL, 'usage', {
            force
        }).then((next)=>{
            if (request.current === id) setUsage(next);
        }).catch((err)=>{
            if (request.current === id) setError(err.message);
        }).finally(()=>{
            if (request.current === id) setBusy(false);
        });
    };
    (0, external_react_namespaceObject.useEffect)(()=>{
        if (signedIn) load(false);
        else {
            request.current += 1;
            setUsage(void 0);
            setError(void 0);
            setBusy(false);
        }
        return ()=>{
            request.current += 1;
        };
    }, [
        signedIn,
        resetKey
    ]);
    const fetchedAt = 'number' == typeof usage?.fetchedAt ? validDate(usage.fetchedAt) : void 0;
    const plan = usage?.plan;
    const spendLimit = usage?.spendLimit;
    const grok = usage?.grok;
    const cycleStart = usage?.billingCycle?.start === void 0 ? void 0 : validDate(usage.billingCycle.start);
    const cycleEnd = usage?.billingCycle?.end === void 0 ? void 0 : validDate(usage.billingCycle.end);
    const grokReset = grok?.nextReset === void 0 ? void 0 : validDate(grok.nextReset);
    const moneyOf = (value)=>'number' == typeof value && Number.isFinite(value) ? money(value) : '—';
    const hasAutoUsage = void 0 !== plan && ('number' == typeof plan.autoPercentUsed || void 0 !== plan.autoSpend || void 0 !== plan.autoLimit);
    const hasApiUsage = void 0 !== plan && ('number' == typeof plan.apiPercentUsed || void 0 !== plan.apiSpend || void 0 !== plan.apiLimit);
    return /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
        className: "cursorSubscriptionCard",
        children: [
            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                className: "cursorSubscriptionSectionHead",
                children: [
                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                        className: "cursorSubscriptionSectionTitle",
                        children: [
                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("h3", {
                                children: t('usage')
                            }),
                            void 0 === fetchedAt ? null : /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("time", {
                                className: "cursorSubscriptionFreshness",
                                dateTime: fetchedAt.toISOString(),
                                children: fill(t('usageUpdated'), {
                                    value: fetchedAt.toLocaleString()
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(dsh_client_ui_primitives_namespaceObject.Button, {
                        className: "cursorSubscriptionRefresh",
                        type: "button",
                        variant: "outline",
                        disabled: !signedIn || busy,
                        "aria-busy": busy,
                        onClick: ()=>load(true),
                        children: busy ? t('usageRefreshing') : t('usageRefresh')
                    })
                ]
            }),
            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                "aria-live": "polite",
                children: [
                    signedIn ? null : /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("p", {
                        className: "cursorSubscriptionEmpty",
                        children: t('usageNotSignedIn')
                    }),
                    signedIn && busy && void 0 === usage ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("p", {
                        className: "cursorSubscriptionEmpty",
                        role: "status",
                        children: t('usageLoading')
                    }) : null
                ]
            }),
            void 0 === error ? null : /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("p", {
                className: "cursorSubscriptionError",
                role: "alert",
                children: error
            }),
            void 0 !== usage && signedIn ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)(jsx_runtime_namespaceObject.Fragment, {
                children: [
                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                        className: "cursorSubscriptionMetaRow",
                        children: [
                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("span", {
                                children: [
                                    usage.email ?? '—',
                                    usage.planName ? ` (${usage.planName})` : ''
                                ]
                            }),
                            usage.billingCycle?.daysLeft !== void 0 ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("span", {
                                title: void 0 !== cycleStart && void 0 !== cycleEnd ? `${t('billingCycle')}: ${cycleStart.toLocaleDateString()} – ${cycleEnd.toLocaleDateString()}` : void 0,
                                children: fill(t('billingDaysLeft'), {
                                    value: usage.billingCycle.daysLeft
                                })
                            }) : null
                        ]
                    }),
                    'string' == typeof usage.displayMessage && usage.displayMessage.length > 0 ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("p", {
                        className: "cursorSubscriptionMetaRow",
                        children: usage.displayMessage
                    }) : null,
                    hasAutoUsage || hasApiUsage ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                        className: "cursorSubscriptionUsageSplit",
                        children: [
                            hasAutoUsage ? void 0 !== plan.autoSpend || void 0 !== plan.autoLimit ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(UsageRow, {
                                label: t('autoSpend'),
                                used: plan.autoSpend,
                                limit: plan.autoLimit,
                                meta: `${moneyOf(plan.autoSpend)} / ${moneyOf(plan.autoLimit)}${'number' == typeof plan.autoPercentUsed ? ` · ${percent(plan.autoPercentUsed)}%` : ''}`
                            }) : /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(UsageRow, {
                                label: t('autoSpend'),
                                used: plan.autoPercentUsed,
                                limit: 100,
                                meta: `${percent(plan.autoPercentUsed)}%`
                            }) : null,
                            hasApiUsage ? void 0 !== plan.apiSpend || void 0 !== plan.apiLimit ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(UsageRow, {
                                label: t('apiSpend'),
                                used: plan.apiSpend,
                                limit: plan.apiLimit,
                                meta: `${moneyOf(plan.apiSpend)} / ${moneyOf(plan.apiLimit)}${'number' == typeof plan.apiPercentUsed ? ` · ${percent(plan.apiPercentUsed)}%` : ''}`
                            }) : /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(UsageRow, {
                                label: t('apiSpend'),
                                used: plan.apiPercentUsed,
                                limit: 100,
                                meta: `${percent(plan.apiPercentUsed)}%`
                            }) : null
                        ]
                    }) : null,
                    void 0 !== plan && (void 0 !== plan.totalLimit || void 0 !== plan.totalSpend || void 0 !== plan.remaining) ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                        className: "cursorSubscriptionMetaRow",
                        children: [
                            void 0 !== plan.totalLimit ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("span", {
                                children: `${t('planTotalLimit')}: ${moneyOf(plan.totalLimit)}`
                            }) : null,
                            void 0 !== plan.totalSpend ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("span", {
                                children: `${t('planTotalSpend')}: ${moneyOf(plan.totalSpend)}`
                            }) : null,
                            void 0 !== plan.remaining ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("span", {
                                children: `${t('planRemaining')}: ${moneyOf(plan.remaining)}`
                            }) : null
                        ]
                    }) : null,
                    void 0 !== plan && (void 0 !== plan.limit || void 0 !== plan.includedSpend || void 0 !== plan.bonusLimit || void 0 !== plan.bonusSpend) ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                        className: "cursorSubscriptionMetaRow",
                        children: [
                            void 0 !== plan.limit ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("span", {
                                children: `${t('planLimit')}: ${moneyOf(plan.limit)}`
                            }) : null,
                            void 0 !== plan.includedSpend ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("span", {
                                children: `${t('planIncluded')}: ${moneyOf(plan.includedSpend)}`
                            }) : null,
                            void 0 !== plan.bonusLimit ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("span", {
                                children: `${t('planBonusLimit')}: ${moneyOf(plan.bonusLimit)}`
                            }) : null,
                            void 0 !== plan.bonusSpend ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("span", {
                                children: `${t('planBonus')}: ${moneyOf(plan.bonusSpend)}`
                            }) : null
                        ]
                    }) : null,
                    void 0 !== spendLimit && ('number' == typeof spendLimit.pooledLimit && spendLimit.pooledLimit > 0 || 'number' == typeof spendLimit.individualLimit && spendLimit.individualLimit > 0 || void 0 !== spendLimit.totalSpend) ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                        className: "cursorSubscriptionUsageGroup",
                        children: [
                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("span", {
                                className: "cursorSubscriptionUsageGroupHead",
                                children: t('spendLimit')
                            }),
                            'number' == typeof spendLimit.pooledLimit && spendLimit.pooledLimit > 0 ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(UsageRow, {
                                label: t('pooled'),
                                used: spendLimit.pooledUsed,
                                limit: spendLimit.pooledLimit,
                                meta: fill(t('spendUsedOf'), {
                                    used: moneyOf(spendLimit.pooledUsed),
                                    limit: moneyOf(spendLimit.pooledLimit)
                                })
                            }) : null,
                            'number' == typeof spendLimit.individualLimit && spendLimit.individualLimit > 0 ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(UsageRow, {
                                label: t('individual'),
                                used: spendLimit.individualUsed,
                                limit: spendLimit.individualLimit,
                                meta: fill(t('spendUsedOf'), {
                                    used: moneyOf(spendLimit.individualUsed),
                                    limit: moneyOf(spendLimit.individualLimit)
                                })
                            }) : null,
                            void 0 !== spendLimit.totalSpend ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                                className: "cursorSubscriptionMetaRow",
                                children: fill(t('spendTotal'), {
                                    value: moneyOf(spendLimit.totalSpend)
                                })
                            }) : null
                        ]
                    }) : null,
                    void 0 === plan && void 0 === spendLimit ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("p", {
                        className: "cursorSubscriptionEmpty",
                        children: t('usagePlanMissing')
                    }) : null,
                    void 0 !== grok ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                        className: "cursorSubscriptionUsageGroup",
                        children: [
                            'number' == typeof grok.usagePercent ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(UsageRow, {
                                label: t('grok'),
                                used: grok.usagePercent,
                                limit: 100,
                                meta: fill(t('grokAvailable'), {
                                    value: percent(grok.usagePercent)
                                }),
                                footer: void 0 === grokReset ? void 0 : fill(t('grokReset'), {
                                    value: grokReset.toLocaleString()
                                })
                            }) : null,
                            'string' == typeof grok.availableBankedResetCount ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                                className: "cursorSubscriptionMetaRow",
                                children: fill(t('grokBanked'), {
                                    value: grok.availableBankedResetCount
                                })
                            }) : null
                        ]
                    }) : null,
                    void 0 !== cycleStart && void 0 !== cycleEnd && usage.billingCycle?.daysLeft === void 0 ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                        className: "cursorSubscriptionMetaRow",
                        children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("span", {
                            children: `${t('billingCycle')}: ${cycleStart.toLocaleDateString()} – ${cycleEnd.toLocaleDateString()}`
                        })
                    }) : null
                ]
            }) : null
        ]
    });
}
function CursorSection({ rpc, t }) {
    const [account, setAccount] = (0, external_react_namespaceObject.useState)();
    const [error, setError] = (0, external_react_namespaceObject.useState)();
    const [resetKey, setResetKey] = (0, external_react_namespaceObject.useState)(0);
    (0, external_react_namespaceObject.useEffect)(()=>{
        let live = true;
        callRpc(rpc, CHANNEL, 'status').then((next)=>{
            if (live) setAccount(next);
        }).catch(()=>{
            if (live) setError(t('loadFailed'));
        });
        return ()=>{
            live = false;
        };
    }, [
        resetKey
    ]);
    const signedIn = account?.authenticated === true;
    return /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("section", {
        className: "cursorSubscription",
        children: [
            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                className: "cursorSubscriptionHead",
                children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("h2", {
                    children: t('title')
                })
            }),
            void 0 === error ? null : /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("p", {
                className: "cursorSubscriptionError",
                role: "alert",
                children: error
            }),
            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(AccountCard, {
                rpc: rpc,
                t: t,
                account: account,
                setAccount: setAccount,
                onSignedOut: ()=>setResetKey((value)=>value + 1)
            }),
            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(UsageCard, {
                rpc: rpc,
                t: t,
                signedIn: signedIn,
                resetKey: resetKey
            }),
            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(ModelsCard, {
                rpc: rpc,
                t: t,
                signedIn: signedIn
            }),
            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(RuntimeSettingsCard, {
                rpc: rpc,
                t: t
            }),
            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("p", {
                className: "cursorSubscriptionNote",
                children: t('note')
            })
        ]
    });
}
const STYLE = `
.cursorSubscription{display:flex;flex-direction:column;gap:10px;max-width:720px;color:var(--dsw-alias-label-primary);container-type:inline-size}
.cursorSubscription h2,.cursorSubscription h3,.cursorSubscription p{margin:0}
.cursorSubscriptionHead{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.cursorSubscription h2{font-size:16px;line-height:24px;font-weight:500}
.cursorSubscription h3{font-size:14px;line-height:22px;font-weight:500}
.cursorSubscriptionCard{border:1px solid var(--dsw-alias-border-l2);border-radius:12px;background:var(--dsw-alias-bg-layer-1);padding:14px 16px;display:flex;flex-direction:column;gap:12px}
.cursorSubscriptionAccountRow{display:flex;align-items:center;justify-content:space-between;gap:12px}
.cursorSubscriptionStatus{display:flex;align-items:center;gap:8px;font-size:14px;line-height:22px;font-weight:500;min-width:0;flex-wrap:wrap}
.cursorSubscriptionDot{width:8px;height:8px;border-radius:50%;background:var(--dsw-alias-label-dimmed)}
.cursorSubscriptionDot[data-state=connected]{background:var(--dsw-alias-state-success-primary)}
.cursorSubscriptionDot[data-state=disconnected]{background:var(--dsw-alias-state-error-primary)}
.cursorSubscriptionActions{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.cursorSubscriptionFlow{display:flex;flex-direction:column;gap:10px;padding:12px 14px;border-radius:10px;background:var(--dsw-alias-bg-module-platform)}
.cursorSubscriptionFlow p{font-size:13px;line-height:20px;color:var(--dsw-alias-label-secondary)}
.cursorSubscriptionError{font-size:13px;line-height:20px;color:var(--dsw-alias-state-error-primary)}
.cursorSubscriptionNote{font-size:12px;line-height:18px;color:var(--dsw-alias-label-tertiary)}
.cursorSubscriptionFreshness{font-size:11px;line-height:17px;color:var(--dsw-alias-label-tertiary)}
.cursorSubscriptionSectionHead{display:flex;align-items:center;justify-content:space-between;gap:12px}
.cursorSubscriptionSectionTitle{display:flex;flex:1;min-width:0;flex-direction:column;gap:2px}
.cursorSubscriptionRefresh{flex:0 0 auto;min-width:72px;width:max-content;white-space:nowrap!important;word-break:keep-all!important;overflow-wrap:normal!important;writing-mode:horizontal-tb!important}
.cursorSubscriptionRefresh *{white-space:nowrap!important;word-break:keep-all!important;writing-mode:horizontal-tb!important}
.cursorSubscriptionEmpty{padding:18px;border:1px dashed var(--dsw-alias-border-l3);border-radius:10px;text-align:center;font-size:13px;line-height:20px;color:var(--dsw-alias-label-tertiary)}
.cursorSubscriptionUsageRow{display:flex;flex-direction:column;gap:6px}
.cursorSubscriptionUsageTop{display:flex;align-items:baseline;justify-content:space-between;gap:12px}
.cursorSubscriptionUsageLabel{flex:1;min-width:0;font-size:12px;line-height:18px;color:var(--dsw-alias-label-secondary)}
.cursorSubscriptionUsageTop strong{font:600 16px/22px ui-monospace,SFMono-Regular,Consolas,monospace;font-variant-numeric:tabular-nums}
.cursorSubscriptionUsageRow progress{width:100%;height:6px;border:0;border-radius:999px;overflow:hidden;background:var(--dsw-alias-border-l3);accent-color:var(--dsw-alias-brand-primary,#3964fe);-webkit-appearance:none;appearance:none}
.cursorSubscriptionUsageRow progress::-webkit-progress-bar{background:var(--dsw-alias-border-l3);border-radius:999px}
.cursorSubscriptionUsageRow progress::-webkit-progress-value{background:var(--dsw-alias-brand-primary,#3964fe);border-radius:999px}
.cursorSubscriptionUsageRow progress::-moz-progress-bar{background:var(--dsw-alias-brand-primary,#3964fe);border-radius:999px}
.cursorSubscriptionCredential{font:500 12px/18px ui-monospace,SFMono-Regular,Consolas,monospace;color:var(--dsw-alias-label-secondary);max-width:min(280px,100%);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.cursorSubscriptionUsageFoot{display:flex;justify-content:space-between;align-items:baseline;gap:10px;font-size:11px;line-height:17px;color:var(--dsw-alias-label-tertiary)}
.cursorSubscriptionUsageFootRight{margin-left:auto;text-align:right}
.cursorSubscriptionApiKey{display:flex;flex-direction:column;gap:8px}
.cursorSubscriptionApiKeyRow{display:flex;gap:8px;align-items:center}
.cursorSubscriptionApiKeyInput{box-sizing:border-box;flex:1;min-width:0;height:34px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-bg-layer-1);padding:6px 9px;color:var(--dsw-alias-label-primary);font:13px/20px ui-monospace,SFMono-Regular,Consolas,monospace;outline:none}
.cursorSubscriptionApiKeyInput:focus{border-color:var(--dsw-alias-brand-primary,#3964fe);box-shadow:0 0 0 2px color-mix(in srgb,var(--dsw-alias-brand-primary,#3964fe) 18%,transparent)}
.cursorSubscriptionApiKeyInput:disabled{opacity:.6}
.cursorSubscriptionUsageGroup{display:flex;flex-direction:column;gap:10px;padding-top:4px}
.cursorSubscriptionUsageGroupHead{font-size:12px;line-height:18px;font-weight:500;color:var(--dsw-alias-label-secondary)}
.cursorSubscriptionUsageSplit{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;padding-top:2px}
.cursorSubscriptionMetaRow{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;font-size:11px;line-height:17px;color:var(--dsw-alias-label-tertiary)}
.cursorSubscriptionModels{display:flex;flex-direction:column;gap:8px}
.cursorSubscriptionModelChips{display:flex;flex-wrap:wrap;gap:6px}
.cursorSubscriptionModelChip{border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-bg-module-platform);padding:3px 8px;font:500 12px/18px ui-monospace,SFMono-Regular,Consolas,monospace;color:var(--dsw-alias-label-secondary);max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.cursorSubscriptionSettingsGrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
.cursorSubscriptionField{display:flex;flex-direction:column;gap:5px;min-width:0}
.cursorSubscriptionFieldWide{grid-column:1/-1}
.cursorSubscriptionField label{font-size:12px;line-height:18px;font-weight:500;color:var(--dsw-alias-label-secondary)}
.cursorSubscriptionField input{box-sizing:border-box;width:100%;height:34px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-bg-layer-1);padding:6px 9px;color:var(--dsw-alias-label-primary);font:13px/20px ui-monospace,SFMono-Regular,Consolas,monospace;outline:none}
.cursorSubscriptionField input:focus{border-color:var(--dsw-alias-brand-primary,#3964fe);box-shadow:0 0 0 2px color-mix(in srgb,var(--dsw-alias-brand-primary,#3964fe) 18%,transparent)}
.cursorSubscriptionField input:disabled{opacity:.6}
.cursorSubscriptionFieldHint{font-size:11px;line-height:17px;color:var(--dsw-alias-label-tertiary)}
.cursorSubscriptionSettingsFoot{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}
.cursorSubscriptionSuccess{font-size:12px;line-height:18px;color:var(--dsw-alias-state-success-primary)}
@container (max-width:520px){.cursorSubscriptionSettingsGrid{grid-template-columns:1fr}.cursorSubscriptionFieldWide{grid-column:auto}.cursorSubscriptionUsageSplit{grid-template-columns:1fr}}
`;
const inject = [
    'slots',
    'locale',
    'connection'
];
function apply(ctx) {
    ctx.effect(()=>ctx.locale.register(NS, {
            zh: zh,
            en: en
        }), 'cursor-agent: copy');
    ctx.effect(()=>{
        const tag = document.createElement('style');
        tag.dataset.plugin = 'dsh-cursor-agent';
        tag.textContent = STYLE;
        document.head.append(tag);
        return ()=>tag.remove();
    }, 'cursor-agent: style');
    const connection = ctx.get('connection');
    const t = ctx.locale.bind(NS);
    ctx.slots.inject('settings.section', ()=>ctx.slots.register({
            name: 'settings.section',
            id: 'cursor-agent',
            order: 20,
            label: ()=>t('nav'),
            locale: NS,
            inject: ()=>({
                    rpc: connection?.rpc,
                    t
                })
        }, CursorSection));
}
exports.apply = __webpack_exports__.apply;
exports.inject = __webpack_exports__.inject;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "apply",
    "inject"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});

		return module.exports;
	},
});
