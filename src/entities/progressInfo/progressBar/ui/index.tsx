import styles from './main.module.scss'

// Types
import { IItem } from '@/app/store'

// Hooks
import { useEffect, useRef, useState } from 'react'
import { useClicker } from '@/shared/hooks/useClicker'

type ProgressBarProps = {
  prevItem: IItem | null
  nextItem: IItem | null
  onFilled?: Function,
  onItem?: Function
}

export function ProgressBar({
  prevItem, nextItem, onFilled, onItem
}: ProgressBarProps) {
  const { clicks } = useClicker()
  const [prev, setPrev] = useState(prevItem)
  const [next, setNext] = useState(nextItem)

  const fillRef = useRef<null | HTMLDivElement>(null)
  const from = parseFloat(prev?.from + '') || 0
  const to = parseFloat(next?.from + '') || 0
  const fromToDiff = Math.abs(from - to)
  const clicksDiff = clicks > from ? to - clicks : 0
  const fillValue = clicks > from ? 1 - clicksDiff / fromToDiff : 0

  useEffect(() => {
    const fillDOM = fillRef.current
    
    if (fillDOM) {
      fillDOM.style.setProperty('--value', String(
        fillValue
      ).substring(0, 4))
    }
  }, [fillRef, clicksDiff, fromToDiff])

  useEffect(() => {
    setTimeout(() => {
      setPrev(prevItem)
      setNext(nextItem)
    }, 1500)
  }, [prevItem, nextItem])

  useEffect(() => {
    if (fillValue >= 1) {
      if (onFilled instanceof Function) {
        onFilled()
      }
    }
    
    const timeout = setTimeout(() => {
      if (onItem instanceof Function) {
        onItem()
      }
    }, 1500)

    return () => {
      clearTimeout(timeout)
    }
  }, [onFilled, onItem, fillValue >= 1, next?.id])

  return <div className={styles.progressBar}>
    <div className={styles.data}>
      <span>{ from }</span>
      <span>{ to }</span>
    </div>
    <div className={styles.bar}>
      <div ref={fillRef} className={styles.fill}></div>
    </div>
  </div>
}