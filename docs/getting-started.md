---
sidebar_position: 2
---

# Getting Started

## Prerequisites

- macOS with Xcode installed
- iOS device (Simulator has limited support due to `ios_system` constraints)
- An API key from a supported provider (OpenAI, Azure, Gemini, etc.)

## Clone the Repository

```bash
git clone https://github.com/openrocky/OpenRocky.git
cd OpenRocky
```

## Open in Xcode

```bash
open Rocky/Rocky.xcodeproj
```

The project uses Swift Package dependencies located in the `Packages/` directory. Xcode will resolve them automatically.

## Build

Select your target device and build:

```bash
xcodebuild build -scheme Rocky -project Rocky/Rocky.xcodeproj -destination 'generic/platform=iOS'
```

:::note
The `ios_system` framework does not support iOS Simulator. For full functionality, build and run on a physical device.
:::

## Configure Providers

Rocky has a **two-tier provider model**: a single-track Realtime Voice (the live voice loop) and a multi-provider Chat backend (text chat *and* the back-end agent the voice model delegates complex work to). Both tiers live under one settings group.

Go to **Settings > Model**:

### Realtime Voice (required for voice)

Used for the live voice conversation on the home screen. There is exactly one realtime backend and one active configuration — it's a single instance, not a list.

| Provider | Models | Notes |
|----------|---------|-------|
| OpenAI Realtime | `gpt-realtime`, `gpt-realtime-mini` | The single voice entry-point |

### Chat (required for text chat and `delegate-task`)

Powers the chat detail screen *and* the back-end agent that the voice model calls via `delegate-task` for multi-step or research-heavy work.

| Provider | Example Models |
|----------|---------------|
| OpenAI | GPT-5, GPT-4o |
| Azure OpenAI | GPT-4o (deployment) |
| Anthropic | Claude Sonnet 4 |
| Google Gemini | Gemini 2.5 Pro / Flash |
| Groq | Llama 3.3 70B |
| xAI | Grok 3 Beta |
| OpenRouter | Multi-model proxy |
| DeepSeek | DeepSeek Chat |
| Doubao (Volcengine) | Doubao Seed |
| AIProxy | Proxy-based access |

:::tip
You can configure multiple Chat instances and switch the active one freely. Realtime Voice is single-instance — there's just one config to fill in.
:::

### Setup Steps

1. Open Rocky and go to **Settings > Model**
2. Tap **Realtime Voice**, enter your OpenAI API key and pick a `gpt-realtime` model
3. Tap **Chat**, add at least one Chat provider, enter the API key, activate it
4. Return to the home screen — the top-bar provider chip should show the active realtime model with a green status dot

## Start Talking

Tap the orb on the home screen and start talking. Voice is the primary input — speak naturally about what you want to accomplish. The status pill (`Listening`, `Thinking`, `Responding`) tracks where in the turn you are; recent transcript bubbles float above the orb.
