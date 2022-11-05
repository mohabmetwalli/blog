import { getPosts } from '../scripts/utils.js'
import PostItem from '../components/PostItem'
import Meta from '../components/Meta'
import Header from '../components/Header'
import styles from '../styles/ArticleList.module.css'

export async function getStaticProps () {
  const posts = getPosts()

  return {
    props: {
      posts
    }
  }
}

export default function Blog ({ posts }) {
  return (
    <>
      <Meta
        title="Mohab's Blog"
        keywords='Blog, JavaScript, React, Mohab'
        description="Mohab's blog&#8212;articles covering web technologies."
      />

      <Header homeTitle='Home' />

      <main className={styles.articleList}>
        <h1 style={{ marginBottom: '2.5vh' }}>Newly Published</h1>
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
