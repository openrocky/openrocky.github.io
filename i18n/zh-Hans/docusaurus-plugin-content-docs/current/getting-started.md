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
git clone https://github.com/OpenRocky/OpenRocky.git
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

Rocky 使用**两个独立的服务商系统** —— 一个用于聊天（文本），一个用于语音（实时音频）。你可以独立配置不同的模型和 API Key。

启动应用后，进入 **设置 > 服务商**，你会看到两个标签页：

### 聊天服务商（Chat Provider）

用于文本对话、任务规划和工具执行。

| 服务商 | 示例模型 |
|----------|---------------|
| OpenAI | GPT-5, GPT-4o |
| Azure OpenAI | GPT-4o（部署） |
| Anthropic | Claude 3.7 Sonnet |
| Google Gemini | Gemini 2.5 Pro / Flash |
| Groq | Llama 3.3 70B |
| xAI | Grok 3 Beta |
| OpenRouter | 多模型代理 |
| DeepSeek | DeepSeek Chat |
| 豆包（火山引擎） | Doubao Seed |
| AIProxy | 代理访问 |

### 语音服务商（Voice Provider）

用于实时语音对话 —— 这是 Rocky 的主要交互方式。

| 服务商 | 示例模型 | 说明 |
|----------|---------------|-------|
| OpenAI Realtime | GPT Realtime Mini / GPT Realtime | 功能最全 |
| 豆包 Realtime | Doubao E2E Voice | 中文优化 |
| Gemini Live | Gemini 2.5 Flash Native Audio | 原生音频 |

:::tip
同时只能激活**一个聊天服务商**和**一个语音服务商**，但你可以配置多个实例并自由切换。
:::

### 配置步骤

1. 打开 Rocky App
2. 进入 **设置 > 服务商**
3. 在 **聊天** 和 **语音** 标签页之间切换
4. 点击 **添加服务商**，选择服务商类型
5. 输入 API Key 并按需配置端点
6. 点击激活你想使用的服务商

## 开始对话

点击主页的语音按钮，开始和 Rocky 对话。语音是主要输入方式 —— 自然地说出你想完成的任务即可。
