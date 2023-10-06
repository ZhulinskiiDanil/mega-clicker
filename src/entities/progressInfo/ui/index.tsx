import styles from './main.module.scss'

// Functions
import { findItemByClicks } from '../currentItem/model/findItemByClicks'

// Hooks
import { useCallback, useState } from 'react'

// Components
import { CurrentItem } from '../currentItem/ui'
import { ProgressBar } from '../progressBar/ui'
import { useClicker } from '@/shared/hooks/useClicker'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/store'

export function ProgressInfo() {
  const items = useSelector((state: RootState) => state.items.value)
  const { clicks } = useClicker()
  const { prev, next } = findItemByClicks(items, clicks)
  const [hidden, setHidden] = useState(false)

  const onFilled = useCallback(() => {
    setHidden(true)
  }, [setHidden])

  const onItem = useCallback(() => {
    setHidden(false)
  }, [setHidden])

  return <div className={[
    styles.info,
    hidden && styles.hidden
  ].join(' ')}>
    <CurrentItem item={next} />
    <hr className={styles.hr} />
    <ProgressBar
      onFilled={onFilled}
      onItem={onItem}
      prevItem={prev}
      nextItem={next}
    />
  </div>
}