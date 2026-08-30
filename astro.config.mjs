// @ts-check
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

import tailwindcss from '@tailwindcss/vite';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  integrations: [markdoc()],
  adapter: netlify(),
  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  }
});
