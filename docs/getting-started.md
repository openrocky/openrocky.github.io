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

Rocky uses **two separate provider systems** — one for Chat (text) and one for Voice (realtime audio). You can configure them independently with different models and API keys.

After launching the app, go to **Settings > Providers** where you'll see two tabs:

### Chat Provider

Used for text-based conversations, task planning, and tool execution.

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

### Voice Provider

Used for real-time voice conversations — the primary interaction mode.

| Provider | Example Models | Notes |
|----------|---------------|-------|
| OpenAI Realtime | GPT Realtime Mini / GPT Realtime | Full-featured |
| GLM Realtime | GLM realtime voice models | Chinese optimized |

:::tip
Only **one Chat provider** and **one Voice provider** can be active at a time, but you can configure multiple instances of each and switch between them freely.
:::

### Setup Steps

1. Open Rocky app
2. Go to **Settings > Providers**
3. Switch between the **Chat** and **Voice** tabs
4. Tap **Add Provider**, select the provider type
5. Enter your API key and configure the endpoint if needed
6. Tap to activate the provider you want to use

## Start Talking

Tap the voice button on the home screen and start talking to Rocky. Voice is the primary input — just speak naturally about what you want to accomplish.
