import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

function PrivacySection({title, children}: {title: string; children: ReactNode}) {
  return (
    <div style={{marginBottom: '2rem'}}>
      <Heading as="h2" style={{fontSize: '1.5rem', marginBottom: '0.75rem'}}>
        {title}
      </Heading>
      {children}
    </div>
  );
}

export default function Privacy(): ReactNode {
  return (
    <Layout
      title="Privacy Policy"
      description="OpenRocky Privacy Policy for iOS and Android"
    >
      <main
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '2rem',
          lineHeight: 1.8,
        }}
      >
        <Heading as="h1" style={{marginBottom: '0.5rem'}}>
          Privacy Policy
        </Heading>
        <p style={{color: 'var(--ifm-color-emphasis-600)', marginBottom: '2rem'}}>
          Last updated: April 9, 2026
        </p>

        <PrivacySection title="Introduction">
          <p>
            Rocky ("we", "our", or "the app") is a voice-first AI agent available on iOS and Android.
            This Privacy Policy explains how we collect, use, and protect your information when you use
            Rocky on any supported platform.
          </p>
        </PrivacySection>

        <PrivacySection title="Information We Collect">
          <Heading as="h3" style={{fontSize: '1.15rem'}}>Voice and Text Input</Heading>
          <p>
            Rocky processes voice and text input to execute tasks on your behalf. Voice audio is
            transmitted to third-party AI providers (such as OpenAI, Google Gemini, or Doubao) for
            speech recognition and response generation. We do not store your voice recordings on our
            servers.
          </p>

          <Heading as="h3" style={{fontSize: '1.15rem'}}>Device Permissions (iOS and Android)</Heading>
          <p>
            Rocky may request access to the following device features depending on the tasks you perform:
          </p>
          <ul>
            <li>Microphone - for voice interaction</li>
            <li>Contacts - to help manage contacts via voice commands</li>
            <li>Calendar - to create and manage calendar events</li>
            <li>Reminders / Tasks - to set reminders</li>
            <li>Location - for weather and location-based queries</li>
            <li>Health data (iOS) - to read and log health information</li>
            <li>Notifications - to deliver task results and reminders</li>
          </ul>
          <p>
            These permissions are requested only when needed and can be revoked at any time through
            your device settings.
          </p>

          <Heading as="h3" style={{fontSize: '1.15rem'}}>AI Provider API Keys</Heading>
          <p>
            Rocky allows you to configure your own API keys for AI providers. These keys are stored
            locally on your device and are never transmitted to our servers.
          </p>
        </PrivacySection>

        <PrivacySection title="How We Use Your Information">
          <p>Your information is used solely to:</p>
          <ul>
            <li>Process your voice and text commands to execute requested tasks</li>
            <li>Communicate with AI providers to generate responses</li>
            <li>Access device features you have explicitly permitted</li>
          </ul>
          <p>
            We do not use your data for advertising, analytics profiling, or any purpose beyond
            providing the app's core functionality.
          </p>
        </PrivacySection>

        <PrivacySection title="Third-Party AI Providers">
          <p>
            Rocky connects to third-party AI services to process your requests. Each provider has
            its own privacy policy governing how they handle data:
          </p>
          <ul>
            <li>OpenAI - <a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer">openai.com/privacy</a></li>
            <li>Google (Gemini) - <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></li>
            <li>Anthropic - <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer">anthropic.com/privacy</a></li>
            <li>Other providers as configured by you</li>
          </ul>
          <p>
            You choose which providers to use and provide your own API keys. We encourage you to
            review the privacy policies of the providers you connect to.
          </p>
        </PrivacySection>

        <PrivacySection title="Data Storage and Security">
          <ul>
            <li>
              <strong>Local-first:</strong> Conversation history, settings, API keys, and task data
              are stored locally on your device.
            </li>
            <li>
              <strong>No cloud storage:</strong> We do not operate servers that store your personal data.
            </li>
            <li>
              <strong>Encryption:</strong> Sensitive data such as API keys are stored using the
              platform's secure storage (iOS Keychain / Android Keystore).
            </li>
          </ul>
        </PrivacySection>

        <PrivacySection title="Local Code Execution">
          <p>
            Rocky supports on-device code execution (Python, shell commands) within a sandboxed
            environment. All execution happens locally on your device and no code or execution
            results are transmitted externally unless required by a task you initiate.
          </p>
        </PrivacySection>

        <PrivacySection title="Children's Privacy">
          <p>
            Rocky is not directed at children under 13. We do not knowingly collect personal
            information from children under 13. If you believe a child has provided us with personal
            information, please contact us so we can take appropriate action.
          </p>
        </PrivacySection>

        <PrivacySection title="Your Rights">
          <p>You have the right to:</p>
          <ul>
            <li>Revoke any device permission at any time through your device settings</li>
            <li>Delete all local app data by uninstalling the app</li>
            <li>Choose which AI providers to connect to</li>
            <li>Remove your API keys at any time within the app</li>
          </ul>
        </PrivacySection>

        <PrivacySection title="Platform-Specific Notes">
          <Heading as="h3" style={{fontSize: '1.15rem'}}>iOS and iPadOS</Heading>
          <p>
            Rocky uses iOS system frameworks to access contacts, calendar, health data, reminders,
            and other device features. The app supports on-device execution via ios_system. Health
            data access follows Apple HealthKit guidelines and is never shared with third parties.
          </p>

          <Heading as="h3" style={{fontSize: '1.15rem'}}>Android</Heading>
          <p>
            Rocky uses Android system APIs to access contacts, calendar, reminders, and other
            device features. Permissions follow the Android runtime permission model and are
            requested only when needed.
          </p>
        </PrivacySection>

        <PrivacySection title="Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this
            page with an updated revision date. Continued use of the app after changes constitutes
            acceptance of the updated policy.
          </p>
        </PrivacySection>

        <PrivacySection title="Contact Us">
          <p>
            If you have questions about this Privacy Policy, please reach out:
          </p>
          <ul>
            <li>GitHub: <a href="https://github.com/openrocky/OpenRocky" target="_blank" rel="noopener noreferrer">github.com/openrocky/OpenRocky</a></li>
            <li>Discord: <a href="https://discord.gg/SvvsaDA4nE" target="_blank" rel="noopener noreferrer">discord.gg/SvvsaDA4nE</a></li>
          </ul>
        </PrivacySection>
      </main>
    </Layout>
  );
}
