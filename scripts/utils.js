import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getPosts () {
  const artcilesDir = fs.readdirSync(path.join(process.cwd(), 'pages', 'posts'), {
    withFileTypes: true
  })

  const posts = artcilesDir
    .map(article => {
      const articleContent = fs.readFileSync(
        path.join(process.cwd(), 'pages', 'posts', article.name),
        'utf-8'
      )

      const { data, content } = matter(articleContent)

      const slug = article.name.replace(/.mdx$/, '')

      return { data, content, slug }
    })
    .filter(post => post)

  return posts
}
