import styles from '../styles/Home.module.css'

export default function PostItem ({ post }) {
  return (
    <div className={styles.postItem}>
      <h3>
        <a href={`/posts/${post.slug}`}>{post.data.title}</a>
      </h3>
      <p>{post.data.excerpt}</p>
      <a href={`/posts/${post.slug}`}>Read More</a>
    </div>
  )
}
