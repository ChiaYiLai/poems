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
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
      }
    ]
  ],
  sitemap: {
    hostname: `https://chiayilai.github.io${base}`
  },
})
