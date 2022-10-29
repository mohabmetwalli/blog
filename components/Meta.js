import Head from 'next/head'

const Meta = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name='keywords'
        content='react native, John, Doe, tutorial, react navigation'
      />
    </Head>
  )
}

export default Meta
