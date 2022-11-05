import styles from '../styles/Header.module.css'

export default function Header ({ homeTitle, homeLinkFontSize }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} role='navigation' aria-label='main navigation'>
        <div className={styles.homeDiv} role='button' aria-label='home button'>
          <a href='/' style={{ fontSize: `${homeLinkFontSize}` }} className={`${styles.link} ${styles.homeLink}`}>{homeTitle}</a>
        </div>
        <a href='/blog' className={`${styles.link} ${styles.blogLink}`}>Blog</a>
        <a href='/projects' className={`${styles.link} ${styles.projectsLink}`}>Projects</a>
        <a href='/hire-me' className={`${styles.link} ${styles.hireMeLink}`}>Hire Me</a>
      </nav>
    </header>
  )
}
