import styles from '../styles/Footer.module.css'

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <section className={styles.linksOfInterest}>
        <h1>Links of interest:</h1>
        <ul>
          <li><a href='https://keyoxide.org/hkp/e0c581838d09fd9c941bc9baa250c0b6cc8d071f'>PGP Key</a></li>
          <li><a href='https://codeberg.org/mohab'>Gitea</a></li>
          <li><a href='/hire-me#contact'>Contact</a></li>
        </ul>
      </section>
      <ul>
        <li>
          &#169; 2022-2022 Mohab Metwalli
        </li>
        <li>
          Powered by <a href='https://nextjs.org/'>NextJS</a>
        </li>
      </ul>
    </footer>
  )
}
