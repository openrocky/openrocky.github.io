---
sidebar_position: 2
---

# Provider Configuration

Rocky supports multiple AI model providers through a flexible three-layer architecture.

## Provider / Account / Model

```
Provider (OpenAI, Azure, Gemini, ...)
  └── Account (your API key)
       └── Model (GPT-4, Gemini Pro, ...)
```

You can configure multiple accounts per provider and switch between models freely.

## Supported Providers

### OpenAI

The primary provider with full support including realtime voice.

- **Models**: GPT-4, GPT-4o, etc.
- **Voice**: Realtime API supported
- **API Key**: From [platform.openai.com](https://platform.openai.com)

### Azure OpenAI

Enterprise-grade OpenAI models through Azure.

- **Models**: Azure-deployed OpenAI models
- **Voice**: Supported via Azure Realtime
- **Setup**: Requires Azure endpoint + API key

### Google Gemini

Google's multimodal AI models.

- **Models**: Gemini Pro, etc.
- **Voice**: Text-only (no realtime voice)
- **API Key**: From Google AI Studio

### Doubao

Bytedance's AI model service.

- **Models**: Doubao series
- **Voice**: Realtime voice supported
- **API Key**: From Doubao platform

## Configuration

1. Open Rocky app
2. Go to **Settings > Providers**
3. Tap **Add Provider** and select your provider
4. Enter your API key and configure the endpoint if needed
5. Select the model you want to use
