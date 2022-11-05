import Meta from '../components/Meta'
import Header from '../components/Header'
import styles from '../styles/Projects.module.css'

export default function Projects () {
  return (
    <>
      <Meta
        title="Mohab's Projects"
        keywords='JavaScript, React, Projects'
        description="Mohab's recently developed projects."
      />

      <Header homeTitle='Home' />

      <main className={styles.projectsContainer}>
        <h1>Recently Developed</h1>
        <h2><a href='https://mohab.codeberg.page/currency-converter'>Currency Converter</a></h2>
        <p>ReactJS, JSX, CSS</p>
        <p>A currency conversion tool: EGP, USD, and EU.</p>
        <h2><a href='https://mohab.codeberg.page/whack-a-mole'>Whack-a-Mole</a></h2>
        <p>JavaScript, HTML, CSS</p>
        <p>An in-browser, mouse-driven Whack-a-Mole game.</p>
        <h2><a href='https://mohab.codeberg.page/drum-machine'>Drum Machine</a></h2>
        <p>JavaScript, HTML, CSS</p>
        <p>An in-browser, <a href='https://www.guiltygear.com/'>Guilty Gear</a>-themed drum machine.</p>
        <h2><a href='https://mohab.codeberg.page/cookie-joke'>Cookie Joke</a></h2>
        <p>JavaScript, JSX, CSS</p>
        <p>A parody of <a href='https://bravo3leek.netlify.app/'>Bravo 3leek</a>.</p>
      </main>
    </>
  )
}
