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
git clone https://github.com/OpenRocky/OpenRocky.git
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

## Configure a Provider

After launching the app, go to **Settings > Providers** and configure at least one AI provider with your API key. Supported providers include:

- OpenAI
- Azure OpenAI
- Google Gemini
- Doubao

## Start Talking

Tap the voice button on the home screen and start talking to Rocky. Voice is the primary input — just speak naturally about what you want to accomplish.
