import styles from './main.module.scss'

// Components
import Image from 'next/image'

export function Item() {
  return <div className={styles.item}>
    <div className={styles.content}>
      <div className={styles.image}>
        <Image
          alt="Item"
          src="/images/skins/AK47_Vulcan.png"
          fill
        />
      </div>
    </div>
    <hr className={styles.line} />
  </div>
}