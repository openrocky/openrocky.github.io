import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {translate} from '@docusaurus/Translate';

type LinkItem = {
  label: string;
  href: string;
};

function LinkButton({label, href}: LinkItem): ReactNode {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-block',
        padding: '0.6rem 1.5rem',
        borderRadius: '8px',
        border: '1px solid rgba(74, 199, 227, 0.3)',
        color: 'rgba(200, 210, 230, 0.9)',
        textDecoration: 'none',
        fontSize: '0.95rem',
        transition: 'all 0.2s ease',
        background: 'rgba(74, 199, 227, 0.05)',
      }}
    >
      {label}
    </a>
  );
}

function SectionTitle({children}: {children: ReactNode}): ReactNode {
  return (
    <h3
      style={{
        fontSize: '0.85rem',
        fontWeight: 500,
        color: 'rgba(74, 199, 227, 0.7)',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        marginBottom: '1rem',
      }}
    >
      {children}
    </h3>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={translate({id: 'home.title', message: 'Voice-First AI Agent'})}
      description="OpenRocky - Voice-First AI Agent for iOS and Android."
    >
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 'calc(100vh - 60px)',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <img
          src="/img/logo.png"
          alt="Rocky"
          className="hero-logo"
        />
        <Heading as="h1" className="hero__title" style={{fontSize: '3.5rem', marginBottom: '1rem'}}>
          OpenRocky
        </Heading>
        <p
          style={{
            fontSize: '1.15rem',
            color: 'rgba(180, 195, 220, 0.6)',
            maxWidth: '520px',
            lineHeight: 1.7,
            marginBottom: '0.5rem',
            animation: 'fadeInUp 0.8s ease-out 0.5s both',
          }}
        >
          {translate({
            id: 'home.subtitle',
            message: 'Voice-First AI Agent for iOS, iPadOS and Android.',
          })}
        </p>
        <p
          style={{
            fontSize: '1.3rem',
            fontWeight: 400,
            color: 'rgba(74, 199, 227, 0.85)',
            letterSpacing: '0.05em',
            animation: 'fadeInUp 0.8s ease-out 0.6s both',
            marginBottom: '2.5rem',
          }}
        >
          {translate({
            id: 'home.testing',
            message: 'Now available for testing on both iOS and Android.',
          })}
        </p>

        {/* Download / Test */}
        <div style={{animation: 'fadeInUp 0.8s ease-out 0.7s both', marginBottom: '2rem'}}>
          <SectionTitle>
            {translate({id: 'home.section.download', message: 'Download'})}
          </SectionTitle>
          <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center'}}>
            <LinkButton label="iOS TestFlight" href="https://testflight.apple.com/join/GZtbEpXN" />
            <LinkButton label="Android Testing" href="https://play.google.com/apps/testing/com.xnu.rocky" />
          </div>
        </div>

        {/* Open Source */}
        <div style={{animation: 'fadeInUp 0.8s ease-out 0.8s both', marginBottom: '2rem'}}>
          <SectionTitle>
            {translate({id: 'home.section.opensource', message: 'Open Source'})}
          </SectionTitle>
          <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center'}}>
            <LinkButton label="iOS (GitHub)" href="https://github.com/openrocky/openrocky" />
            <LinkButton label="Android (GitHub)" href="https://github.com/openrocky/openrocky_android" />
          </div>
        </div>

        {/* Feedback */}
        <div style={{animation: 'fadeInUp 0.8s ease-out 0.9s both', marginBottom: '2rem'}}>
          <SectionTitle>
            {translate({id: 'home.section.feedback', message: 'Feedback'})}
          </SectionTitle>
          <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center'}}>
            <LinkButton label="iOS Feedback" href="https://github.com/openrocky/openrocky/issues/new" />
            <LinkButton label="Android Feedback" href="https://github.com/openrocky/openrocky_android/issues/new" />
          </div>
        </div>

        {/* Community */}
        <div style={{animation: 'fadeInUp 0.8s ease-out 1.0s both'}}>
          <SectionTitle>
            {translate({id: 'home.section.community', message: 'Community'})}
          </SectionTitle>
          <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center'}}>
            <LinkButton label="Telegram" href="https://t.me/openrocky" />
            <LinkButton label="Discord" href="https://discord.gg/SvvsaDA4nE" />
          </div>
        </div>
      </main>
    </Layout>
  );
}
