---
sidebar_position: 3
---

# 架构

## 概览

Rocky 采用混合架构，将语音交互、AI 模型服务和本地执行整合为一个完整的 agent 体验，运行在 iOS 和 iPadOS 上。

### 系统架构

```mermaid
graph TB
    subgraph Input["输入层"]
        Voice["🎤 语音输入<br/>(主入口)"]
        Text["⌨️ 文本输入<br/>(补充)"]
    end

    subgraph Voice["实时语音"]
        OpenAIRT["OpenAI Realtime<br/>（单轨）"]
    end

    subgraph Chat["Chat 后端（10 个服务商）"]
        OpenAI["OpenAI"]
        Anthropic["Anthropic"]
        Gemini["Google Gemini"]
        Other["…"]
    end

    subgraph ROS["ROS (Rocky OS) 运行时"]
        Session["会话"]
        Task["任务"]
        Tools["工具"]
        Memory["记忆"]
        Artifacts["产物"]
    end

    subgraph Execution["执行层"]
        Bridge["iOS 原生桥接"]
        AITool["AI 工具动作"]
        Local["ios_system<br/>本地执行"]
    end

    subgraph Output["输出层"]
        VoiceOut["🔊 语音响应"]
        Visual["📱 视觉 UI"]
    end

    Voice --> Voice
    Text --> Chat
    Voice --> ROS
    ROS -->|delegate-task| Chat
    Chat --> ROS
    ROS --> Execution
    Execution --> Output
```

### 数据流

语音模型负责对延迟敏感的短回合。多步或研究类任务则通过 `delegate-task` 工具，转交给后端 **Chat 子 Agent**，由它跑完后返回一段总结，再由语音模型口播给用户。

```mermaid
sequenceDiagram
    participant User as 用户
    participant RT as OpenAI Realtime
    participant ROS as ROS 运行时
    participant Sub as Chat 子 Agent
    participant Tools as 原生工具

    User->>RT: 说话
    RT->>ROS: 直接工具调用
    ROS->>Tools: 例如 计时器 / 天气
    Tools-->>ROS: 结果
    ROS-->>RT: 结果
    RT-->>User: 口播简短回复

    Note over RT,Sub: 重型任务路径
    RT->>ROS: delegate-task("研究 X")
    ROS->>Sub: 用 Chat 服务商执行
    Sub->>Tools: 多步工具
    Tools-->>Sub: 结果
    Sub-->>ROS: 总结
    ROS-->>RT: 总结
    RT-->>User: 口播总结
```

## ROS — Rocky OS

ROS 是内部运行时核心，负责组织：

- **会话** — 对话和任务上下文
- **任务** — 已规划和正在执行的操作
- **工具** — 可用的能力和动作
- **记忆** — 跨会话的持久化上下文
- **产物** — 文件、结果和输出

### ROS 组件架构

```mermaid
graph LR
    subgraph ROS["ROS 核心"]
        SM["会话<br/>管理器"]
        TM["任务<br/>管理器"]
        TL["工具<br/>注册表"]
        MM["记忆<br/>存储"]
        AM["产物<br/>存储"]
    end

    SM --> TM
    TM --> TL
    TM --> MM
    TM --> AM
```

## 执行层

Rocky 有三个执行层：

### iOS 原生桥接

直接访问 iOS 和 iPadOS 系统能力 —— 通讯录、日历、通知、文件等。以原生 Swift 代码运行。

### AI 工具层

AI 模型请求的动作 —— 网页搜索、代码生成、分析等。通过服务商 API 分发。

### 本地执行 (ios_system)

使用 [ios_system](https://github.com/holzschu/ios_system) 的受控本地执行环境。支持 shell 命令、Python 脚本和 WASM 模块在沙盒环境中运行。

## 服务商架构 — 双层

Rocky 采用双层服务商模型，两层都在应用内的 **设置 → Model** 下：

```mermaid
graph TD
    subgraph Voice["实时语音（单轨）"]
        RT["OpenAI Realtime<br/>gpt-realtime · 单实例"]
    end

    subgraph Chat["Chat 后端（10 个服务商）"]
        C1["OpenAI"]
        C2["Azure"]
        C3["Anthropic"]
        C4["Gemini"]
        C5["…"]
    end

    Home["语音主页"] --> RT
    RT -->|delegate-task| Chat
    ChatScreen["聊天详情页"] --> Chat
```

**实时语音** 驱动主页的语音回合。只有一个 Realtime 后端（OpenAI Realtime），且只保留一份当前配置 —— 不是列表。

**Chat 后端** 仍采用经典三层抽象：

1. **服务商** — OpenAI、Azure、Anthropic、Gemini、Groq、xAI、OpenRouter、DeepSeek、豆包、AIProxy
2. **账户** — 你的凭证 / API Key（每个服务商可有多个账户）
3. **模型** — 实际使用的模型

Chat 后端承担两件事：聊天详情页的文本交互，以及语音模型通过 `delegate-task` 转交的复杂任务。

## UI 架构

- **SwiftUI** — iOS 和 iPadOS 的主要 UI 框架
- **LanguageModelChatUI** — 聊天详情视图组件，来自 [Lakr233](https://github.com/Lakr233/LanguageModelChatUI)
- **语音主页** — 应用首屏，语音优先而非聊天列表优先。单轨 Orb 画布：TimelineView 驱动的同心脉冲圈、收音中显示的实时波形条、iMessage 风格的对话气泡，以及顶栏显示当前 Realtime 模型 + 连接状态的 Provider 胶囊。
- **聊天详情** — 任务执行详情页，从主页顶栏进入，不是主界面。
- **设置** — Realtime Voice 与 Chat 合并在一个 **Model** 分组里，一个地方配置两层。

## 关键依赖

| 库 | 用途 |
|---------|---------|
| [SwiftOpenAI](https://github.com/jamesrochabrun/SwiftOpenAI) | OpenAI API 和 Realtime 会话 |
| [LanguageModelChatUI](https://github.com/Lakr233/LanguageModelChatUI) | 聊天详情视图组件 |
| [MarkdownView](https://github.com/Lakr233/MarkdownView) | Markdown 渲染 |
| [ios_system](https://github.com/holzschu/ios_system) | 本地执行层 |
| [Python-Apple-support](https://github.com/beeware/Python-Apple-support) | iOS Python 运行时 |
