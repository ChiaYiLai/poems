import { createContentLoader } from 'vitepress'

export interface Post {
  title: string
  fileName: string
  description: string
  tags: string[]
}

declare const data: Post[]
export { data }

export default createContentLoader('posts/*.md', {  // 注意路徑改回 posts/*.md
  excerpt: true,
  transform(rawData): Post[] {
    return rawData
      .map(({ url, frontmatter }) => {
        const fileName = url.split('/').pop()?.replace('.html', '') || ''
        
        return {
          title: frontmatter.title || fileName,
          fileName,
          description: frontmatter.description || '',
          tags: frontmatter.tags || []
        }
      })
      .sort((a, b) => a.title.localeCompare(b.title, 'zh-TW'))
  }
})