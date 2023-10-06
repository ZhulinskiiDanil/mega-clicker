import styles from './main.module.scss'

// Functions
import { findItemByClicks } from '../currentItem/model/findItemByClicks'

// Components
import { CurrentItem } from '../currentItem/ui'
import { ProgressBar } from '../progressBar/ui'
import { useClicker } from '@/shared/hooks/useClicker'
import { useSelector } from 'react-redux'
import { IItem, RootState } from '@/app/store'

type ProgressInfoProps = {
  
}

export function ProgressInfo({  }: ProgressInfoProps) {
  const { clicks } = useClicker()
  const items = useSelector((state: RootState) => state.items.value)
  const { prev, next } = findItemByClicks(items, clicks)

  return <div className={styles.info}>
    <CurrentItem item={next} />
    <hr className={styles.hr} />
    <ProgressBar prevItem={prev} nextItem={next} />
  </div>
}