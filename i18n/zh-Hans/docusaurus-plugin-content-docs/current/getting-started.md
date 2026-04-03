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

启动应用后，进入 **设置 > 服务商**，配置至少一个 AI 服务商的 API Key。支持的服务商包括：

- OpenAI
- Azure OpenAI
- Google Gemini
- 豆包

## 开始对话

点击主页的语音按钮，开始和 Rocky 对话。语音是主要输入方式 —— 自然地说出你想完成的任务即可。
