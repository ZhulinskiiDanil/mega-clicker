import styles from './main.module.scss'

// Types
import { IItem } from '@/app/store'

// Components
import Image from 'next/image'
import { useEffect, useState } from 'react'

export function CurrentItem({ item }: { item: IItem | null }) {
  const [currentItem, setCurrentItem] = useState(item)

  useEffect(() => {
    setTimeout(() => {
      setCurrentItem(item)
    }, 1500)
  }, [item])

  return currentItem?.id ? <div className={styles.currentItem}>
    <div className={styles.image}>
      <Image
        src={currentItem.imageURL}
        alt={currentItem.title}
        fill
      />
    </div>
    <div className={styles.data}>
      <div className={styles.title}>
        { currentItem.title }
      </div>
      <div className={styles.subtitle}>
        { currentItem.subtitle }
      </div>
    </div>
  </div> : <></>
}