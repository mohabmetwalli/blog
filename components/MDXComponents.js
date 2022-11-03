import styles from '../styles/Markdown.module.css'

const MDXComponents = {
  p: props => <p {...props} className={styles.MDXelement} />,
  h1: props => <h1 {...props} className={styles.MDXelement} />,
  h2: props => <h2 {...props} className={styles.MDXelement} />,
  h3: props => <h3 {...props} className={styles.MDXelement} />,
  h4: props => <h4 {...props} className={styles.MDXelement} />,
  ol: props => <ol {...props} className={styles.MDXelement} />,
  pre: props => <pre {...props} className={styles.MDXelement} />
}

export default MDXComponents
