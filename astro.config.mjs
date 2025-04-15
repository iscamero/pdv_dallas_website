import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://palabradevidausa.com', // Reemplaza con tu dominio real
  build: {
    assets: '_assets',
  },
  server: {
    port: 3000,
  },
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});