import styles from './main.module.scss'

export function Item() {
  return <div className={styles.item}>
    <div className={styles.content}>
      <img
        alt="Item"
        src="https://www.google.com/favicon.ico"
        className={styles.image}
      />
    </div>
    <hr className={styles.line} />
  </div>
}