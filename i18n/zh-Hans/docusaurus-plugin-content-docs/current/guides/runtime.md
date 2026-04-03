---
sidebar_position: 3
---

# 运行时与执行

Rocky 包含本地执行层，能够在设备上执行任务，超越纯 AI 对话。

## ios_system

[ios_system](https://github.com/holzschu/ios_system) 在 iOS 上提供受控的本地执行环境。Rocky 使用它来：

- 初始化运行环境
- 设置 mini-root 文件系统
- 执行受控 shell 命令
- 运行 Python 脚本

:::note
`ios_system` 不支持 iOS 模拟器。请在真机上测试以获得完整的执行能力。
:::

## Python 支持

Rocky 通过 [Python-Apple-support](https://github.com/beeware/Python-Apple-support) 包含 Python 运行时支持：

- 在设备上运行 Python 脚本
- 使用 Python 包进行数据处理
- 用 Python 构建扩展

## WASM 扩展

WebAssembly (WASM) 支持计划中，用于安全、可移植的扩展，在沙盒环境中运行。

## 技能与工具

Rocky 的运行时将能力组织为 **技能** 和 **工具**：

- **技能** — 组合多个动作的高级能力
- **工具** — AI 可以调用的单个函数

这些由 ROS (Rocky OS) 管理，即协调会话、任务、记忆和产物的内部运行时。

## 工作区

Rocky 提供工作区用于文件管理 —— 任务执行中创建的文件、下载的内容和生成的产物都组织在这里。
