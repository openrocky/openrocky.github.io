---
sidebar_position: 3
---

# Architecture

## Overview

Rocky uses a hybrid architecture that combines voice interaction, AI model services, and on-device execution into a cohesive agent experience on iOS and iPadOS.

### System Architecture

```mermaid
graph TB
    subgraph Input["Input Layer"]
        Voice["🎤 Voice Input<br/>(Primary)"]
        Text["⌨️ Text Input<br/>(Supplement)"]
    end

    subgraph Voice["Realtime Voice"]
        OpenAIRT["OpenAI Realtime<br/>(single track)"]
    end

    subgraph Chat["Chat Backend (10 providers)"]
        OpenAI["OpenAI"]
        Anthropic["Anthropic"]
        Gemini["Google Gemini"]
        Other["…"]
    end

    subgraph ROS["ROS (Rocky OS) Runtime"]
        Session["Sessions"]
        Task["Tasks"]
        Tools["Tools"]
        Memory["Memory"]
        Artifacts["Artifacts"]
    end

    subgraph Execution["Execution Layer"]
        Bridge["iOS Native Bridge"]
        AITool["AI Tool Actions"]
        Local["ios_system<br/>Local Execution"]
    end

    subgraph Output["Output Layer"]
        VoiceOut["🔊 Voice Response"]
        Visual["📱 Visual UI"]
    end

    Voice --> Voice
    Text --> Chat
    Voice --> ROS
    ROS -->|delegate-task| Chat
    Chat --> ROS
    ROS --> Execution
    Execution --> Output
```

### Data Flow

The voice model handles low-latency turns directly. For multi-step or research-heavy work it calls the `delegate-task` tool, which spins up a back-end **Chat sub-agent** that runs to completion and returns a single summary the voice model speaks back.

```mermaid
sequenceDiagram
    participant User
    participant RT as OpenAI Realtime
    participant ROS as ROS Runtime
    participant Sub as Chat Sub-agent
    participant Tools as Native Tools

    User->>RT: Speak
    RT->>ROS: Tool call (direct)
    ROS->>Tools: e.g. timer / weather
    Tools-->>ROS: Result
    ROS-->>RT: Result
    RT-->>User: Speak short answer

    Note over RT,Sub: Heavy task path
    RT->>ROS: delegate-task("research X")
    ROS->>Sub: Run with Chat provider
    Sub->>Tools: Multi-step tools
    Tools-->>Sub: Results
    Sub-->>ROS: Summary
    ROS-->>RT: Summary
    RT-->>User: Speak summary
```

## ROS — Rocky OS

ROS is the internal runtime core that organizes:

- **Sessions** — Conversation and task contexts
- **Tasks** — Planned and executing operations
- **Tools** — Available capabilities and actions
- **Memory** — Persistent context across sessions
- **Artifacts** — Files, results, and outputs

### ROS Component Architecture

```mermaid
graph LR
    subgraph ROS["ROS Core"]
        SM["Session<br/>Manager"]
        TM["Task<br/>Manager"]
        TL["Tool<br/>Registry"]
        MM["Memory<br/>Store"]
        AM["Artifact<br/>Store"]
    end

    SM --> TM
    TM --> TL
    TM --> MM
    TM --> AM
```

## Execution Layers

Rocky has three execution layers:

### iOS Native Bridge

Direct access to iOS and iPadOS system capabilities — contacts, calendar, notifications, files, and more. These run as native Swift code.

### AI Tool Layer

Actions requested by the AI model — web search, code generation, analysis, etc. These are dispatched through the provider API.

### Local Execution (ios_system)

A controlled local execution environment using [ios_system](https://github.com/holzschu/ios_system). Supports shell commands, Python scripts, and WASM modules in a sandboxed environment.

## Provider Architecture — Two Tiers

Rocky uses a two-tier provider model. Both tiers live under **Settings → Model** in the app.

```mermaid
graph TD
    subgraph Voice["Realtime Voice (single track)"]
        RT["OpenAI Realtime<br/>gpt-realtime · single instance"]
    end

    subgraph Chat["Chat Backend (10 providers)"]
        C1["OpenAI"]
        C2["Azure"]
        C3["Anthropic"]
        C4["Gemini"]
        C5["…"]
    end

    Home["Voice Home"] --> RT
    RT -->|delegate-task| Chat
    ChatScreen["Chat detail screen"] --> Chat
```

**Realtime Voice** drives the home-screen voice loop. There's exactly one realtime backend (OpenAI Realtime) and one active configuration — it's not a list.

**Chat backend** uses the classic three-layer abstraction:

1. **Provider** — OpenAI, Azure, Anthropic, Gemini, Groq, xAI, OpenRouter, DeepSeek, Doubao, AIProxy
2. **Account** — your credential / API key (multiple accounts allowed per provider)
3. **Model** — the specific model to use

The Chat backend serves two purposes: the chat detail screen (text-mode interaction) and the back-end agent that the voice model delegates complex tasks to.

## UI Architecture

- **SwiftUI** — primary UI framework for iOS and iPadOS
- **LanguageModelChatUI** — chat detail view component by [Lakr233](https://github.com/Lakr233/LanguageModelChatUI)
- **Voice Home** — the first screen, voice-first not chat-list-first. Single-orb canvas with TimelineView-driven pulse rings, a live waveform during listening, an iMessage-style transcript feed, and a top-bar provider chip showing the live realtime model + connection state.
- **Chat Detail** — task execution detail page, reachable from the home top-bar. Not the primary interface.
- **Settings** — Realtime Voice and Chat live under a single **Model** group (one place to look, two halves to set up).

## Key Dependencies

| Library | Purpose |
|---------|---------|
| [SwiftOpenAI](https://github.com/jamesrochabrun/SwiftOpenAI) | OpenAI API & Realtime sessions |
| [LanguageModelChatUI](https://github.com/Lakr233/LanguageModelChatUI) | Chat detail view component |
| [MarkdownView](https://github.com/Lakr233/MarkdownView) | Markdown rendering |
| [ios_system](https://github.com/holzschu/ios_system) | Local execution layer |
| [Python-Apple-support](https://github.com/beeware/Python-Apple-support) | Python runtime on iOS |
