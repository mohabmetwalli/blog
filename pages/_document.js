import { Html, Head, Main, NextScript } from 'next/document'

export default function MyDocument () {
  return (
    <Html lang='en'>
      <Head>
        <link rel='preload' href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css' as='style' onload="this.onload=null;this.rel='stylesheet'" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
