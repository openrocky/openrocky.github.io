import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'OpenRocky',
  tagline: 'Voice-First AI Agent for iPhone & iPad',
  favicon: 'img/logo.png',

  future: {
    v4: true,
  },

  url: 'https://openrocky.org',
  baseUrl: '/',

  organizationName: 'OpenRocky',
  projectName: 'OpenRocky',

  onBrokenLinks: 'throw',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
        label: 'English',
      },
      'zh-Hans': {
        htmlLang: 'zh-Hans',
        label: '简体中文',
      },
    },
  },

  clientModules: [
    './src/clientModules/starryBackground.ts',
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/openrocky/OpenRocky/tree/main/website/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'OpenRocky',
      logo: {
        alt: 'OpenRocky Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/openrocky/OpenRocky',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Download',
          items: [
            {
              label: 'iOS TestFlight',
              href: 'https://testflight.apple.com/join/GZtbEpXN',
            },
            {
              label: 'Android Testing',
              href: 'https://play.google.com/apps/testing/com.xnu.rocky',
            },
          ],
        },
        {
          title: 'Open Source',
          items: [
            {
              label: 'iOS (GitHub)',
              href: 'https://github.com/openrocky/openrocky',
            },
            {
              label: 'Android (GitHub)',
              href: 'https://github.com/openrocky/openrocky_android',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/SvvsaDA4nE',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/openrocky',
            },
            {
              label: 'Author (X / Twitter)',
              href: 'https://x.com/everettjf',
            },
          ],
        },
        {
          title: 'Feedback',
          items: [
            {
              label: 'iOS Feedback',
              href: 'https://github.com/openrocky/openrocky/issues/new',
            },
            {
              label: 'Android Feedback',
              href: 'https://github.com/openrocky/openrocky_android/issues/new',
            },
          ],
        },
      ],
      copyright: `Copyright &copy; ${new Date().getFullYear()} OpenRocky. Built with Docusaurus.`,
    },
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['swift', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
