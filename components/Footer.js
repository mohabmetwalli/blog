import styles from '../styles/Footer.module.css'

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerList}>
        <li>
          Copyright: @2021 Mohab
        </li>
        <li>
          Powered by <a href='/'>NextJS</a>
        </li>
      </ul>
    </footer>
  )
}
