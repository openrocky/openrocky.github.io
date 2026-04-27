---
sidebar_position: 2
---

# 快速开始

## 前提条件

- 安装了 Xcode 的 macOS
- iOS 真机（模拟器对 `ios_system` 支持有限）
- 支持的服务商 API Key（OpenAI、Azure、Gemini 等）

## 克隆仓库

```bash
git clone https://github.com/openrocky/OpenRocky.git
cd OpenRocky
```

## 在 Xcode 中打开

```bash
open Rocky/Rocky.xcodeproj
```

项目使用位于 `Packages/` 目录的 Swift Package 依赖，Xcode 会自动解析。

## 构建

选择目标设备并构建：

```bash
xcodebuild build -scheme Rocky -project Rocky/Rocky.xcodeproj -destination 'generic/platform=iOS'
```

:::note
`ios_system` 框架不支持 iOS 模拟器。要获得完整功能，请在真机上构建和运行。
:::

## 配置服务商

Rocky 采用**双层服务商模型**：单轨的 Realtime 语音（驱动主页语音回合），加上多服务商的 Chat 后端（驱动文本聊天，同时也是语音模型 `delegate-task` 转交复杂任务时使用的后端 Agent）。两层都在同一个设置分组里。

进入 **设置 → Model**：

### Realtime 语音（语音必备）

驱动主页的语音对话回合。Realtime 后端只有一个，且只保留一份当前配置 —— 不是列表。

| 服务商 | 模型 | 说明 |
|----------|---------|-------|
| OpenAI Realtime | `gpt-realtime`、`gpt-realtime-mini` | 唯一的语音入口 |

### Chat（文本聊天与 `delegate-task` 必备）

驱动聊天详情页，同时也是语音模型通过 `delegate-task` 转交多步 / 研究类任务时使用的后端 Agent。

| 服务商 | 示例模型 |
|----------|---------------|
| OpenAI | GPT-5, GPT-4o |
| Azure OpenAI | GPT-4o（部署） |
| Anthropic | Claude Sonnet 4 |
| Google Gemini | Gemini 2.5 Pro / Flash |
| Groq | Llama 3.3 70B |
| xAI | Grok 3 Beta |
| OpenRouter | 多模型代理 |
| DeepSeek | DeepSeek Chat |
| 豆包（火山引擎） | Doubao Seed |
| AIProxy | 代理访问 |

:::tip
Chat 可以配置多个实例并自由切换激活态；Realtime 语音是单实例 —— 只填一份配置即可。
:::

### 配置步骤

1. 打开 Rocky，进入 **设置 → Model**
2. 点击 **Realtime Voice**，填入 OpenAI API Key 并选择 `gpt-realtime` 模型
3. 点击 **Chat**，添加至少一个 Chat 服务商实例，填 Key 并激活
4. 回到主页 —— 顶栏的 Provider 胶囊会显示当前 Realtime 模型，状态点变绿即就绪

## 开始对话

点击主页的 Orb 开始对话。语音是主要输入方式 —— 自然地说出你想完成的任务即可。状态胶囊（`Listening`、`Thinking`、`Responding`）显示当前所处阶段；最近的对话气泡会在 Orb 上方浮动显示。
