import styles from '../styles/Header.module.css'

export default function Header () {
  return (
    <header className={styles.header}>
      <h2 className={styles.homeLink}>
        <a href='/'>Home</a>
      </h2>
      <h2>
        <a href='/about'>About</a>
      </h2>
    </header>
  )
}
