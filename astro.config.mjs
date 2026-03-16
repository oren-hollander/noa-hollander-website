import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://oren-hollander.github.io',
  base: process.env.BUILD_BASE || '/',
  devToolbar: { enabled: false },
});
