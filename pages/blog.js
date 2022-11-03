import { getPosts } from '../scripts/utils.js'
import PostItem from '../components/PostItem'
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
      <Header homeTitle='Home' />
      <main className={styles.articleList}>
        <h1>Newly Published</h1>
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
