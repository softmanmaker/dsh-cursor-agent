# DSH Cursor Agent

在 DeepSeek Harness 中获得和 Cursor 一致的速度与体验。


直接登录 Cursor 账户或绑定 API Key / Auth Token，
在使用 Cursor 原生 Agent Loop（`agent.v1.AgentService/Run`）、标准工具、上下文压缩、自动标题等功能时，
保留 DSH 的会话、执行器和沙箱功能，

> ⚠️ 本插件接入的是 Cursor 未公开的 Agent 协议（`agent.v1.AgentService/Run`），
> 属于社区逆向工程成果，可能随 Cursor 服务端变化而失效。本项目与 Anysphere /
> Cursor 无任何关系，请遵守 Cursor 的服务条款。

## 能做什么

- 在 DSH 中直接使用 Cursor 原生 Agent Loop
- 自动发现并允许选择 Cursor 的可用模型以及思考强度、上下文等配置
- 保留 Cursor 原生工具，支持如下功能：
   - 文件读写
   - 网络请求与搜索
   - Question交互
   - 前后台Shell
   - 其他DSH工具自动被映射为mcp
- 暂未支持的：
   - PlanMode切换
   - Subagent/Task
- 使用 Cursor 原生的自动标题和上下文压缩能力，会在 Cursor Preset 里自动禁用DSH自带的自动标题、压缩，以及`billion-context-dsh` ACP
- 设置页可查看登录状态与订阅用量
- 支持修改BaseURL来使用部分中转站（不建议）

## 安装

本仓库是 `@xytoki/dsh-cursor-agent` 适配 **DSH 0.2.1（0.2.1-rc.2）** 的分支，发布为 **`@ginojin/dsh-cursor-agent`**。npm 上的 `@xytoki/dsh-cursor-agent@0.6.0` 只兼容 DSH 0.1.x，不要使用。

构建（需要 pnpm / Node 22.19+ 或 24+）：

```sh
pnpm install
pnpm build
pnpm pack        # 产出 ginojin-dsh-cursor-agent-<version>.tgz
```

目标机器（同样要求 DSH 0.2.1-rc.2）：

1. 把 tgz 放到一个稳定路径（例如 `~/.dsh/plugins/`，profile 会记录该绝对路径，别放下载目录后删掉）。
2. Sidebar → **Plugins** → **Add plugin** → 填入 tgz 的绝对路径 → **Install** → **Enable**。
3. 重启 DSH（preset 声明行不在插件列表的管理范围内，热更新到不了，安装结果会提示 `restart-required`）。
4. Settings → **Cursor Agent** 完成 Cursor 登录；每台机器的凭据独立保存。

同一台机器升级：Plugins 里卸载旧版本再安装新 tgz（本地包没有 Update 按钮）。

从 Git 或 Release tarball 安装（推荐，见下方 GitHub 发布）：

```sh
# 目标机 Plugins → Add plugin 任选其一：
git+https://github.com/softmanmaker/dsh-cursor-agent.git#v0.7.0
https://github.com/softmanmaker/dsh-cursor-agent/releases/download/v0.7.0/ginojin-dsh-cursor-agent-0.7.0.tgz
```

从 Git 安装不会执行构建，因此 `lib/` 已随仓库提交。若再次改名，需同步 `cordis.patch.yml` 三处 `name:`（宿主行、preset 的 `cursor-tools` 与 `cursor-compaction`）；客户端模块 id 与 preset 行名会自动跟随 `package.json` 的包名。

## 调试

使用`CURSOR_AGENT_DEBUG=1` 开启debug log

## DSH 版本兼容

- `0.6.3` 起适配 **DSH 0.2.1**（`0.2.1-rc.2`）：设置页改用 `settings.describe()`/`settings.update()`（0.2 移除了 `settings.installSection`），历史消息适配 0.2 的 `role: "tool"` 工具结果与逐生产者 `source.kind`，压缩检查点改用官方 `compact-checkpoint` 标记。
- 客户端模块 id 必须是完整包名（`@ginojin/dsh-cursor-agent`），否则页面的模块加载器会拒绝注册。
- Agent preset 在 0.2.1 里是 bundle patch 行（`preset-cursor-agent` → `@deepseek-ai/dsh-agent-preset`），旧的 `~/.dsh/.agent-presets/` 目录已不再被读取；本插件改为在自身的 `cordis.patch.yml` 中声明该行。
- 本地构建安装：先 `pnpm run build`，再 `pnpm pack`，用产出的 tarball 通过插件管理器安装。

## 致谢

修改自 [dsh-cursor-subscription](https://github.com/orrinzeng/dsh-cursor-subscription)

[MIT](LICENSE)
