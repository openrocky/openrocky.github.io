---
sidebar_position: 1
slug: /
---

# 介绍

**Rocky** 是一个面向 iPhone、iPad 和 Android 的语音优先 AI Agent App。**OpenRocky** 是它背后的开源项目。

Rocky 不是移动端聊天壳，也不是把 Linux 容器直接搬进手机。它把**语音对话作为最核心的入口**，将语音交互、任务执行、系统桥接和结果回看组织成一个更适合 iOS、iPadOS 和 Android 的 agent 体验。

## 为什么语音优先？

大多数移动端 AI 应用是基于文本的聊天界面。Rocky 采用了完全不同的方式：

```mermaid
graph LR
    subgraph Traditional["传统 AI 应用"]
        T1["文本输入"] --> T2["聊天消息"] --> T3["阅读结果"]
    end

    subgraph Rocky["Rocky"]
        R1["🎤 语音"] --> R2["任务执行"] --> R3["语音 + 视觉结果"]
    end
```

- **语音是主入口** — 像和人说话一样和 Rocky 交流，无需打字。
- **文本是补充** — 在需要精确输入（如代码或链接）时使用。
- **执行任务，而非纯聊天** — Rocky 不仅仅回复，它执行任务并产出真实结果。

## 核心理念

- **语音为主** — 主页是语音界面，不是聊天列表。
- **任务执行** — 由 ROS 驱动，内部运行时负责规划和执行任务。
- **iPhone & iPad 原生** — 使用 SwiftUI 构建，利用 iOS 原生桥接和本地执行能力。
- **开源** — 透明开发，社区驱动。

## 平台支持

| 平台 | 状态 | 测试链接 |
|----------|--------|-----------|
| iOS (iPhone) | 测试中 | [TestFlight](https://testflight.apple.com/join/GZtbEpXN) |
| iPadOS (iPad) | 测试中 | [TestFlight](https://testflight.apple.com/join/GZtbEpXN) |
| Android | 测试中 | [Google Play 内部测试](https://play.google.com/apps/testing/com.xnu.rocky) |
| macOS | 暂无计划 | — |

## 标准表述

> Rocky 是产品，OpenRocky 是背后的开源项目。

## 链接

- **网站：** [openrocky.org](https://openrocky.org/)
- **iOS 开源：** [github.com/openrocky/openrocky](https://github.com/openrocky/openrocky)
- **Android 开源：** [github.com/openrocky/openrocky_android](https://github.com/openrocky/openrocky_android)
- **iOS 反馈：** [提交 Issue](https://github.com/openrocky/openrocky/issues/new)
- **Android 反馈：** [提交 Issue](https://github.com/openrocky/openrocky_android/issues/new)
- **Telegram：** [@openrocky](https://t.me/openrocky)
- **Discord：** [加入](https://discord.gg/SvvsaDA4nE)
- **作者 X / Twitter：** [@everettjf](https://x.com/everettjf)
