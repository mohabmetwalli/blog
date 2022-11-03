import styles from '../styles/Home.module.css'
import Meta from '../components/Meta'
import Header from '../components/Header'

export default function Home () {
  return (
    <>
      <Meta
        title='MOHAB | DEVELOPER'
        keywords='Developer, Web, HTML, CSS, JavaScript, React, ReactJS'
        description="Mohab's Blog&#8212;Articles About Web Development Technologies."
      />

      <Header
        homeTitle='Mohab Metwalli'
        homeLinkWidth='150%'
      />

      <main className={styles.greetings}>
        <h1 className={styles.selfDescription}>
          Hi! &#128075; <br />
          I'm <strong>Mohab</strong>, a writer and frontend web developer.
        </h1>

        <p>My interests include:</p>
        <ul className={styles.interests}>
          <li>Mobile-first, frontend web development.</li>
          <li>Search engine optimization.</li>
          <li>Linux-based system adminstration.</li>
          <li>Free and open-source software.</li>
        </ul>

        <p>On my <a href='/blog'>blog</a>, I write about web-related topics, and, occasionally, other personal interests&#8212;fighting games and music.</p>

        <p>I love meeting new people! If you have a question, a comment, or just want to chat, please, <a href='/hire-me#contact'>reach out</a>!</p>
      </main>

    </>
  )
}
