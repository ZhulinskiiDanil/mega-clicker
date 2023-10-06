import styles from './main.module.scss'

// Components
import Image from 'next/image'

// Hooks
import { useClicker } from '@/shared/hooks/useClicker'
import { TelegramIcon } from '@/shared/svg'
import { LDM } from './LDM/ui'

export default function Header() {
  const { clicks } = useClicker()

  return <header className={styles.header}>
    <h1 className={styles.title}>
      Mega Clicker
    </h1>
    <a className={styles.tg} href="https://t.me/ZhulinskyDanil">
      <TelegramIcon className={styles.icon} />
      <div className={styles.value}>
        <span data-opacity>@</span>ZhulinskyDanil
      </div>
    </a>
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
    <div className={styles.tools}>
      <LDM />
    </div>
  </header>
}