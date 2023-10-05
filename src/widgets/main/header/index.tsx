import styles from './main.module.scss'

// Components
import Image from 'next/image'

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
        <div className={styles.icon}>
          <Image
            src="/images/money.png"
            alt="Gold"
            fill
          />
        </div>
      </div>
    </div>
  </header>
}