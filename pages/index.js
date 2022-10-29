import styles from '../styles/Home.module.css'
import { getPosts } from '../scripts/utils.js'
import Meta from '../components/Meta'
// import Image from 'next/image'
import PostItem from '../components/PostItem.js'

export async function getStaticProps () {
  const posts = getPosts()

  return {
    props: {
      posts
    }
  }
}

export default function Home ({ posts }) {
  return (
    <>
      <Meta
        title="Mohab's Blog"
        keywords='Developer, Web, HTML, CSS, JavaScript, React, ReactJS'
        description="Mohab's Blog&#8212;Articles About Web Development Technologies."
      />

      <section className={styles.meetMe}>
        <h1 className={styles.selfDescription}>
          Hi! &#128075; I'm <strong>Mohab</strong>&#8212;I develop websites, play drums, fighting games, and I share my room with a cat.
        </h1>
        <a href='/about'>More About Me</a>
      </section>

      <main className={styles.articleList}>
        <h2>Newly Published</h2>
        {posts.map((post, index) => (
          <PostItem
            key={index}
            post={post}
          />
        ))}
      </main>
    </>
  )
}

/*
<Image
  src='/../public/avatar.webp'
  alt="Mohab's avatar."
  width={150}
  height={150}
  className={styles.avatar}
/>
*/
