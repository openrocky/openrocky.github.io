import type {ReactNode} from 'react';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
// import Translate, {translate} from '@docusaurus/Translate';
import {translate} from '@docusaurus/Translate';

// type CommunityLink = {
//   icon: string;
//   name: string;
//   description: string;
//   href: string;
// };

// const communityLinks: CommunityLink[] = [
//   {
//     icon: '\uD83D\uDCAC',
//     name: 'Discord',
//     description: 'Join the community',
//     href: 'https://discord.gg/SvvsaDA4nE',
//   },
//   {
//     icon: '\u2708\uFE0F',
//     name: 'Telegram',
//     description: '@openrocky',
//     href: 'https://t.me/openrocky',
//   },
//   {
//     icon: '\uD83D\uDC26',
//     name: 'X / Twitter',
//     description: '@everettjf',
//     href: 'https://x.com/everettjf',
//   },
//   {
//     icon: '\uD83D\uDCBB',
//     name: 'GitHub',
//     description: 'Star us on GitHub',
//     href: 'https://github.com/openrocky/OpenRocky',
//   },
// ];

// function HeroSection(): ReactNode {
//   return (
//     <header className="hero-rocky">
//       <div className="container">
//         <img
//           src="/img/logo.png"
//           alt="Rocky"
//           className="hero-logo"
//         />
//         <Heading as="h1" className="hero__title">
//           OpenRocky
//         </Heading>
//         <p className="hero__subtitle">
//           <Translate id="hero.subtitle">
//             Voice-First AI Agent for iPhone and iPad. Talk instead of type — Rocky executes
//             real tasks through natural voice conversation. Currently iOS and iPadOS only.
//           </Translate>
//         </p>
//         <div className="hero-buttons">
//           <Link className="button button--primary button--lg" to="/docs/getting-started">
//             <Translate id="hero.getStarted">Get Started</Translate>
//           </Link>
//           <Link
//             className="button button--outline button--lg"
//             href="https://github.com/openrocky/OpenRocky"
//           >
//             <Translate id="hero.viewOnGithub">View on GitHub</Translate>
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// function FeaturesSection(): ReactNode {
//   return (
//     <section className="features-section">
//       <div className="container">
//         <div className="row">
//           <div className={clsx('col col--4 feature-card-wrapper')} style={{marginBottom: '1.5rem'}}>
//             <div className="feature-card">
//               <span className="feature-icon">{'\uD83C\uDFA4'}</span>
//               <Heading as="h3">
//                 <Translate id="feature.voice.title">Voice-First Design</Translate>
//               </Heading>
//               <p>
//                 <Translate id="feature.voice.description">
//                   Voice is THE primary entry point. Talk to Rocky naturally on your iPhone or iPad. Text is just a supplement — this is a true voice agent.
//                 </Translate>
//               </p>
//             </div>
//           </div>
//           <div className={clsx('col col--4 feature-card-wrapper')} style={{marginBottom: '1.5rem'}}>
//             <div className="feature-card">
//               <span className="feature-icon">{'\u26A1'}</span>
//               <Heading as="h3">
//                 <Translate id="feature.task.title">Task Execution</Translate>
//               </Heading>
//               <p>
//                 <Translate id="feature.task.description">
//                   Rocky executes tasks, not just conversations. Powered by ROS — the internal runtime that organizes sessions, tools, memory, and artifacts.
//                 </Translate>
//               </p>
//             </div>
//           </div>
//           <div className={clsx('col col--4 feature-card-wrapper')} style={{marginBottom: '1.5rem'}}>
//             <div className="feature-card">
//               <span className="feature-icon">{'\uD83D\uDCF1'}</span>
//               <Heading as="h3">
//                 <Translate id="feature.native.title">iPhone Native</Translate>
//               </Heading>
//               <p>
//                 <Translate id="feature.native.description">
//                   Built with SwiftUI for iOS and iPadOS. Rocky is designed from the ground up for Apple mobile devices, not a ported desktop experience.
//                 </Translate>
//               </p>
//             </div>
//           </div>
//           <div className={clsx('col col--4 feature-card-wrapper')} style={{marginBottom: '1.5rem'}}>
//             <div className="feature-card">
//               <span className="feature-icon">{'\uD83D\uDD27'}</span>
//               <Heading as="h3">
//                 <Translate id="feature.runtime.title">Extensible Runtime</Translate>
//               </Heading>
//               <p>
//                 <Translate id="feature.runtime.description">
//                   Local execution layer with ios_system, Python and WASM support for extensions. Build skills and tools that run on-device.
//                 </Translate>
//               </p>
//             </div>
//           </div>
//           <div className={clsx('col col--4 feature-card-wrapper')} style={{marginBottom: '1.5rem'}}>
//             <div className="feature-card">
//               <span className="feature-icon">{'\uD83E\uDD16'}</span>
//               <Heading as="h3">
//                 <Translate id="feature.provider.title">Multi-Provider</Translate>
//               </Heading>
//               <p>
//                 <Translate id="feature.provider.description">
//                   Connect to OpenAI, Azure, Gemini, Doubao and more. Provider / account / model three-layer abstraction for maximum flexibility.
//                 </Translate>
//               </p>
//             </div>
//           </div>
//           <div className={clsx('col col--4 feature-card-wrapper')} style={{marginBottom: '1.5rem'}}>
//             <div className="feature-card">
//               <span className="feature-icon">{'\uD83D\uDD13'}</span>
//               <Heading as="h3">
//                 <Translate id="feature.opensource.title">Open Source</Translate>
//               </Heading>
//               <p>
//                 <Translate id="feature.opensource.description">
//                   OpenRocky is the open-source project behind Rocky. Transparent development, community-driven, and built in the open.
//                 </Translate>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function CommunitySection(): ReactNode {
//   return (
//     <section className="community-section">
//       <div className="container">
//         <div style={{textAlign: 'center', marginBottom: '3rem'}}>
//           <Heading as="h2">
//             <Translate id="community.title">Join the Community</Translate>
//           </Heading>
//           <p style={{color: 'rgba(180,195,220,0.6)', fontSize: '1.1rem'}}>
//             <Translate id="community.subtitle">
//               Connect with other developers and stay up to date.
//             </Translate>
//           </p>
//         </div>
//         <div className="row" style={{justifyContent: 'center'}}>
//           {communityLinks.map((link, idx) => (
//             <div key={idx} className="col col--3" style={{marginBottom: '1rem'}}>
//               <a href={link.href} target="_blank" rel="noopener noreferrer" className="community-card">
//                 <span className="community-icon">{link.icon}</span>
//                 <div className="community-info">
//                   <h4>{link.name}</h4>
//                   <p>{link.description}</p>
//                 </div>
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function OpenSourceSection(): ReactNode {
//   return (
//     <section className="opensource-section">
//       <div className="container">
//         <Heading as="h2">
//           <Translate id="opensource.title">Built in the Open</Translate>
//         </Heading>
//         <p>
//           <Translate id="opensource.subtitle">
//             Rocky is the app. OpenRocky is the open-source project behind it.
//             Contribute, explore, and build together.
//           </Translate>
//         </p>
//         <div className="hero-buttons">
//           <Link
//             className="button button--primary button--lg"
//             href="https://github.com/openrocky/OpenRocky"
//           >
//             <Translate id="opensource.starOnGithub">Star on GitHub</Translate>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function Home(): ReactNode {
  return (
    <Layout
      title={translate({id: 'home.title', message: 'Coming Soon'})}
      description="OpenRocky - Voice-First AI Agent for iPhone. Coming Soon."
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
        <Heading as="h1" className="hero__title" style={{fontSize: '3.5rem', marginBottom: '1.5rem'}}>
          OpenRocky
        </Heading>
        <p
          style={{
            fontSize: '2rem',
            fontWeight: 300,
            color: 'rgba(200, 210, 230, 0.8)',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            animation: 'fadeInUp 0.8s ease-out 0.5s both',
          }}
        >
          Coming Soon
        </p>
        <p
          style={{
            fontSize: '1.1rem',
            color: 'rgba(180, 195, 220, 0.5)',
            maxWidth: '500px',
            lineHeight: 1.7,
            marginTop: '1.5rem',
            animation: 'fadeInUp 0.8s ease-out 0.7s both',
          }}
        >
          Voice-First AI Agent for iOS/iPadOS and Android.
        </p>
        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            marginTop: '2.5rem',
            animation: 'fadeInUp 0.8s ease-out 0.9s both',
          }}
        >
          <a
            href="https://github.com/openrocky/OpenRocky"
            target="_blank"
            rel="noopener noreferrer"
            style={{color: 'rgba(200, 210, 230, 0.6)', fontSize: '1rem', textDecoration: 'none'}}
          >
            GitHub
          </a>
          <a
            href="https://discord.gg/SvvsaDA4nE"
            target="_blank"
            rel="noopener noreferrer"
            style={{color: 'rgba(200, 210, 230, 0.6)', fontSize: '1rem', textDecoration: 'none'}}
          >
            Discord
          </a>
          <a
            href="https://x.com/everettjf"
            target="_blank"
            rel="noopener noreferrer"
            style={{color: 'rgba(200, 210, 230, 0.6)', fontSize: '1rem', textDecoration: 'none'}}
          >
            X / Twitter
          </a>
        </div>
      </main>
    </Layout>
  );
}
