import styles from './main.module.scss'

// Components
import Image from 'next/image'

// Hooks
import { useClicker } from '@/shared/hooks/useClicker'

type ItemProps = {
  from: number
}

export function Item({ from }: ItemProps) {
  const { clicks } = useClicker()
  const fromFloor = Math.floor(from)

  return <div className={[
    styles.item,
    clicks >= fromFloor && styles.active
  ].join(' ')}>
    <div className={styles.from}>
      { fromFloor }
    </div>
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