import '../styles/globals.css'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '../components/MDXComponents'
import Layout from '../layouts/Layout'

export default function MyApp ({ Component, pageProps }) {
  return (
    <MDXProvider components={MDXComponents}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  )
}
