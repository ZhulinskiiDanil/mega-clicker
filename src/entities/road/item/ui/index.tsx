import styles from './main.module.scss'

// Hooks
import { useClicker } from '@/shared/hooks/useClicker'
import { join } from 'path'

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
      <img
        alt="Item"
        src={imageURL}
        className={styles.image}
      />
      <div className={styles.taked}>
        TAKED
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
            <div className={styles.tag}>
              { tag }
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : <></>
}