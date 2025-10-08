import { defineConfig } from 'vitepress'
const base = '/poems/'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,
  title: "善使魔法的人",
  description: "Chia Yi Lai 詩集",
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: `${base}favicon.svg` }],
  ],
  sitemap: {
    hostname: `https://chiayilai.github.io${base}`
  },
})
