import Meta from '../components/Meta'
import Header from '../components/Header'
import styles from '../styles/HireMe.module.css'

export default function HireMe () {
  return (
    <>
      <Meta
        title='Hire Mohab'
        keywords='Hiring, Hire Me, Developer, Contact'
        description="Mohab's hiring options and contact information."
      />

      <Header homeTitle='Home' />

      <main className={styles.hireMeSection}>
        <h1>
          <a
            className={styles.freelancerLink} href='https://www.freelancer.com/hireme/mohabmetwalli'
          >
            Hire Me on Freelancer
          </a>
        </h1>
        <p className={styles.hireMeDescription}>
          I'm open to writing and web development jobs. Pay <strong>zero</strong> commission to <a href='https://freelancer.com'>Freelancer</a> if you <a href='https://www.freelancer.com/hireme/mohabmetwalli'>hire me</a> through this link.
        </p>
      </main>
      <section id='contact' className={styles.contactSection}>
        <h2>Contact</h2>
        <p>If you have feedback, a question, or just want to chat, I'd love to hear from you!</p>
        <p><a href='mailto:mohabmetwalli@tutanota.com'>E-Mail</a> is the easiest way to reach me. Alternatively, you can <strong>@</strong> or follow me on the <a href='https://fosstodon.org/@mohab'>Fediverse</a>, or <strong>/msg mohab</strong> on <a href='irc://irc.libera.chat/mohab'>IRC</a>.</p>
      </section>
    </>
  )
}
