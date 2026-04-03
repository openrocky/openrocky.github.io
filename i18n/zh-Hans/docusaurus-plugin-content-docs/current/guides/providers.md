---
sidebar_position: 2
---

# 服务商配置

Rocky 通过灵活的三层架构支持多个 AI 模型服务商。

## 服务商 / 账户 / 模型

```
服务商（OpenAI、Azure、Gemini 等）
  └── 账户（你的 API Key）
       └── 模型（GPT-4、Gemini Pro 等）
```

你可以为每个服务商配置多个账户，并在模型之间自由切换。

## 支持的服务商

### OpenAI

主要服务商，完整支持包括实时语音。

- **模型**: GPT-4、GPT-4o 等
- **语音**: 支持 Realtime API
- **API Key**: 来自 [platform.openai.com](https://platform.openai.com)

### Azure OpenAI

通过 Azure 提供的企业级 OpenAI 模型。

- **模型**: Azure 部署的 OpenAI 模型
- **语音**: 通过 Azure Realtime 支持
- **配置**: 需要 Azure 端点 + API Key

### Google Gemini

Google 的多模态 AI 模型。

- **模型**: Gemini Pro 等
- **语音**: 仅文本（无实时语音）
- **API Key**: 来自 Google AI Studio

### 豆包

字节跳动的 AI 模型服务。

- **模型**: 豆包系列
- **语音**: 支持实时语音
- **API Key**: 来自豆包平台

## 配置方法

1. 打开 Rocky App
2. 进入 **设置 > 服务商**
3. 点击 **添加服务商** 并选择你的服务商
4. 输入 API Key 并按需配置端点
5. 选择要使用的模型
