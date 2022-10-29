import styles from '../styles/Markdown.module.css'

const MDXComponents = {
  p: props => <p {...props} className={styles.paragraph} />,
  h1: props => <h1 {...props} className={styles.postTitle} />,
  h2: props => <h2 {...props} className={styles.subtitle} />,
  h3: props => <h3 {...props} className={styles.subtitle} />,
  h4: props => <h4 {...props} className={styles.subtitle} />,
  ol: props => <ol {...props} className={styles.list} />,
  pre: props => <pre {...props} className={styles.codeBlock} />
}

export default MDXComponents
