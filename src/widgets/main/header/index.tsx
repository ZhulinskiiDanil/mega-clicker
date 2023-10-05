import styles from './main.module.scss'

// Hooks
import { useClicker } from '@/shared/hooks/useClicker'

export default function Header() {
  const { clicks } = useClicker()

  return <header className={styles.header}>
    <h1 className={styles.title}>
      Mega Clicker
    </h1>
    <div className={styles.resources}>
      <div className={styles.resource}>
        <span>{ clicks }</span>
        <img
          src="/images/cursor.png"
          className={styles.icon}
          alt="Gold"
        />
      </div>
    </div>
  </header>
}