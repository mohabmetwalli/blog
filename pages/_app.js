import '../styles/globals.css'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '../components/MDXComponents'
import Script from 'next/script'
import Layout from '../layouts/Layout'

export default function MyApp ({ Component, pageProps }) {
  return (
    <MDXProvider components={MDXComponents}>
      <Script src='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css' />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  )
}
