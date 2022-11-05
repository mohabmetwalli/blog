import styles from '../styles/ArticleList.module.css'

export default function PostItem ({ post }) {
  return (
    <div className={styles.postItem}>
      <h2>
        <a href={`/posts/${post.slug}`}>{post.data.title}</a>
      </h2>
      <p>{post.data.excerpt}</p>
      <a href={`/posts/${post.slug}`}>Read Article</a>
    </div>
  )
}
