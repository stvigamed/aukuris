import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://aukuris.lt',
  base: '/',
  outDir: 'dist',
  integrations: [sitemap()],
})
