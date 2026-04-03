---
sidebar_position: 3
---

# Runtime & Execution

Rocky includes a local execution layer that enables on-device task execution beyond just AI conversations.

## ios_system

[ios_system](https://github.com/holzschu/ios_system) provides a controlled local execution environment on iOS. Rocky uses it to:

- Initialize the runtime environment
- Set up a mini-root filesystem
- Execute controlled shell commands
- Run Python scripts

:::note
`ios_system` does not support iOS Simulator. Test on a physical device for full execution capabilities.
:::

## Python Support

Rocky includes Python runtime support via [Python-Apple-support](https://github.com/beeware/Python-Apple-support). This allows:

- Running Python scripts on-device
- Using Python packages for data processing
- Building extensions in Python

## WASM Extensions

WebAssembly (WASM) support is planned for safe, portable extensions that run in a sandboxed environment.

## Skills & Tools

Rocky's runtime organizes capabilities as **skills** and **tools**:

- **Skills** — Higher-level capabilities that combine multiple actions
- **Tools** — Individual functions the AI can invoke

These are managed by ROS (Rocky OS), the internal runtime that coordinates sessions, tasks, memory, and artifacts.

## Workspace

Rocky provides a workspace for file management — files created during task execution, downloaded content, and generated artifacts are organized here.
