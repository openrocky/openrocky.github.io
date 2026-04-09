---
sidebar_position: 10
---

# Contributing

OpenRocky is an open-source project and we welcome contributions.

## How to Contribute

1. **Fork** the repository on [GitHub](https://github.com/openrocky/OpenRocky)
2. **Clone** your fork locally
3. **Create a branch** for your changes
4. **Make your changes** and test them
5. **Submit a Pull Request**

## Development Setup

See the [Getting Started](./getting-started.md) guide for setting up the development environment.

## Areas for Contribution

- **iOS App** — SwiftUI features, UI improvements, bug fixes
- **Runtime** — Execution layer, skill/tool implementations
- **Documentation** — Improving docs, adding guides, translations
- **Testing** — Unit tests, UI tests, integration tests

## Communication

- [Discord](https://discord.gg/SvvsaDA4nE) — Community discussions
- [Telegram](https://t.me/openrocky) — Updates and chat
- [GitHub Issues](https://github.com/openrocky/OpenRocky/issues) — Bug reports and feature requests

## Code Style

- 4-space indentation, opening brace on same line
- PascalCase for types, camelCase for properties/methods
- All app types prefixed with `Rocky`
- SwiftUI for new UI, `@Observable` macro (not ObservableObject)
- async/await for concurrency (Swift 6.0 strict concurrency)
- Early returns and guard statements preferred
- Keep commits focused and well-described

## Pull Request Guidelines

- Keep PRs focused on a single change
- Include a clear description of what and why
- Ensure the project builds: `xcodebuild build -scheme Rocky -project Rocky/Rocky.xcodeproj -destination 'generic/platform=iOS'`
- Run tests if applicable: `xcodebuild test -scheme Rocky -project Rocky/Rocky.xcodeproj -destination 'platform=iOS Simulator,name=iPhone 16'`
- Reference related issues in the PR description

## License

By contributing, you agree that your contributions will be licensed under the Apache License 2.0.
