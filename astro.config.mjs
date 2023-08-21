import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  markdown: {
    drafts: true,
  },
  integrations: [react(), tailwind(), mdx()],
  experimental: {
    assets: true,
    viewTransitions: true,
  },
});
