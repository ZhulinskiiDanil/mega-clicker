import styles from './main.module.scss'

// Components
import Image from 'next/image'
import { CheckIcon } from '@/shared/svg'

// Hooks
import { useClicker } from '@/shared/hooks/useClicker'

type ItemProps = {
  from: number
  title: string
  subtitle: string
  imageURL: string
  tags?: string[]
}

export function Item({
  title, subtitle, from, imageURL, tags
}: ItemProps) {
  const { clicks } = useClicker()

  return imageURL ? (
    <div className={[
      styles.item,
      clicks >= from && styles.active
    ].join(' ')}>
      <div className={styles.image}>
        <Image
          alt="Item"
          src={imageURL}
          fill
        />
      </div>
      <div className={styles.taked}>
        <CheckIcon className={styles.icon} />
      </div>
      <div className={styles.data}>
        <p className={styles.title}>
          { title }
        </p>
        <p className={styles.subtitle}>
          { subtitle }
        </p>
        <div className={styles.tags}>
          {(tags || []).map(tag => (
            <div key={tag} className={styles.tag}>
              { tag }
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : <></>
}