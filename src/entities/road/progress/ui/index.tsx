import styles from './main.module.scss'

// Components
import { Item } from '@/entities/road/progress/item/ui'

// Hooks
import { useEffect, useRef, useState } from 'react'
import { useClicker } from '@/shared/hooks/useClicker'

type ProgressProps = {
  from: number
  to: number
}

export function Progress({ from, to }: ProgressProps) {
  const { clicks } = useClicker()
  const fillRef = useRef<null | HTMLDivElement>(null)
  const [moved, setMoved] = useState(false)

  const fromToDiff = Math.abs(from - to)
  const clicksDiff = clicks - from
  const value = clicks > from ? clicksDiff / fromToDiff : 0

  if (fromToDiff === 4400) {
    console.log(fromToDiff);
  }
  
  useEffect(() => {
    const fillDOM  = fillRef.current

    if (fillDOM) {
      fillDOM.style.setProperty('--value', String(value > 1 ? 1 : value).substring(0, 5))
    }
  }, [value, fillRef])

  useEffect(() => {
    setMoved(true)

    const timeout = setTimeout(() => {
      setMoved(false)
    }, 5000)

    return () => {
      clearTimeout(timeout)
    }
  }, [clicks])
  
  return <div className={styles.progress}>
    <div className={styles.items}>
      {Array(9).fill(null).map((_, index) => {
        const fromActive = from + fromToDiff * ((index + 1) / 10)

        return <Item
          key={fromActive || 1}
          from={fromActive || 1}
        />
      })}
    </div>
    <div ref={fillRef} className={[
      styles.fill,
      moved && value > 0 && styles.moved,
      value === 1 && styles.filled,
      value <= 0 && styles.zero
    ].join(' ')}>
      <img src="/gifs/sparks.gif" />
      <img src="/gifs/sparks.gif" />
      <img src="/gifs/sparks.gif" />
    </div>
  </div>
}