import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    'getting-started',
    'architecture',
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/voice-interaction',
        'guides/providers',
        'guides/runtime',
      ],
    },
    'contributing',
  ],
};

export default sidebars;
