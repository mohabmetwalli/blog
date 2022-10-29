/** @type {import('next').NextConfig}
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
}

module.exports = nextConfig
*/

import remarkFrontmatter from 'remark-frontmatter'
import rehypeHighlight from 'rehype-highlight'

export default {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            providerImportSource: '@mdx-js/react',
            remarkPlugins: [remarkFrontmatter],
            rehypePlugins: [rehypeHighlight]
          }
        }
      ]
    })

    return config
  },

  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  images: {
    loader: 'imgix',
    path: 'https://images.unsplash.com/'
  }
}
