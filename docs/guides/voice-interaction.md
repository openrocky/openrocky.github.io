---
sidebar_position: 1
---

# Voice Interaction

Voice is the primary input method in Rocky. This guide covers how voice interaction works.

## How It Works

Rocky uses the OpenAI Realtime API to enable natural voice conversations. When you tap the voice button:

1. Audio is captured from the device microphone
2. Streamed in real-time to the AI provider
3. The model processes speech directly (no intermediate transcription)
4. Response audio is streamed back and played

This creates a natural, low-latency conversation experience.

## Voice vs Text

| | Voice | Text |
|---|---|---|
| **Role** | Primary input | Supplement |
| **Use case** | Tasks, questions, commands | Precise editing, code input |
| **Interface** | Home screen voice button | Chat detail text field |

## Provider Support

Voice interaction currently supports providers with realtime streaming APIs:

- **OpenAI Realtime** — Full-featured, low-latency voice via Realtime API
- **Doubao Realtime** — Optimized for Chinese language via realtime voice protocol
- **Gemini Live** — Google's native audio model with Gemini 2.5 Flash

Other providers support text-based interaction only.

## Tips

- Speak naturally — Rocky understands conversational language
- Be specific about tasks — "Send a message to John" works better than "Do the thing"
- Voice works best in relatively quiet environments
