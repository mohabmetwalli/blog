import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function MyDocument () {
  return (
    <Html lang='en'>
      <Head>
        <Script src='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
