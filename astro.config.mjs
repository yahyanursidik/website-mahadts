// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import netlify from '@astrojs/netlify';
import keystatic from '@keystatic/astro';

import tailwindcss from '@tailwindcss/vite';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), keystatic(), markdoc()],
  adapter: netlify(),
  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  }
});