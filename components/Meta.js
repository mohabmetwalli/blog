import Head from 'next/head'

export default function Meta ({ title, keywords, description, stylesheet }) {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet='UTF-8' />
      <meta
        name='description'
        content={description}
      />
      <meta name='keywords' content={keywords} />
      <meta name='author' content='Mohab Metwalli' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0'
      />
      {stylesheet}
    </Head>
  )
}
