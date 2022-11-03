import styles from '../styles/Layout.module.css'
import Footer from '../components/Footer'

export default function Layout ({ children }) {
  return (
    <div className={styles.mainDiv}>
      <main className={styles.mainContainer}>{children}</main>
      <Footer />
    </div>
  )
}
