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

    subgraph Provider["AI Provider Layer"]
        OpenAI["OpenAI<br/>Realtime API"]
        Azure["Azure OpenAI"]
        Gemini["Google Gemini"]
        GLM["GLM"]
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

    Voice --> Provider
    Text --> Provider
    Provider --> ROS
    ROS --> Execution
    Execution --> Output
```

### Data Flow

```mermaid
sequenceDiagram
    participant User
    participant Voice as Voice Engine
    participant AI as AI Provider
    participant ROS as ROS Runtime
    participant Exec as Execution Layer
    participant UI as UI Layer

    User->>Voice: Speak
    Voice->>AI: Stream audio
    AI->>ROS: Process intent
    ROS->>ROS: Plan task
    ROS->>Exec: Execute actions
    Exec-->>ROS: Results
    ROS-->>AI: Generate response
    AI-->>Voice: Stream audio
    Voice-->>User: Speak response
    ROS-->>UI: Update visual state
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

## Provider Architecture

```mermaid
graph TD
    subgraph Providers["Provider Layer"]
        P1["OpenAI"]
        P2["Azure"]
        P3["Gemini"]
        P4["GLM"]
    end

    subgraph Accounts["Account Layer"]
        A1["API Key 1"]
        A2["API Key 2"]
        A3["API Key 3"]
    end

    subgraph Models["Model Layer"]
        M1["GPT-4o"]
        M2["GPT-4"]
        M3["Gemini Pro"]
    end

    P1 --> A1
    P1 --> A2
    P3 --> A3
    A1 --> M1
    A1 --> M2
    A3 --> M3
```

Rocky uses a three-layer abstraction for model providers:

1. **Provider** — The service (OpenAI, Azure, Gemini, etc.)
2. **Account** — Your credential / API key for a provider
3. **Model** — The specific model to use (GPT-4, Gemini Pro, etc.)

This allows connecting multiple accounts and switching between providers seamlessly.

## UI Architecture

- **SwiftUI** — The primary UI framework for iOS and iPadOS
- **LanguageModelChatUI** — Chat detail view component by [Lakr233](https://github.com/Lakr233/LanguageModelChatUI)
- **Voice Home** — The first screen; voice-first, not chat-list-first
- **Chat Detail** — Task execution detail page, not the primary interface

## Key Dependencies

| Library | Purpose |
|---------|---------|
| [SwiftOpenAI](https://github.com/jamesrochabrun/SwiftOpenAI) | OpenAI API & Realtime sessions |
| [LanguageModelChatUI](https://github.com/Lakr233/LanguageModelChatUI) | Chat detail view component |
| [MarkdownView](https://github.com/Lakr233/MarkdownView) | Markdown rendering |
| [ios_system](https://github.com/holzschu/ios_system) | Local execution layer |
| [Python-Apple-support](https://github.com/beeware/Python-Apple-support) | Python runtime on iOS |
