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
  const percent = 100 * value > 100 ? 100 : 100 * value

  useEffect(() => {
    const elm  = fillRef.current

    if (elm) {
      elm.style.setProperty('--percent', percent + '%')
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
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
    <div ref={fillRef} className={[
      styles.fill,
      moved && percent > 0 && styles.moved,
      percent === 100 && styles.filled
    ].join(' ')}>
      <img src="/gifs/sparks.gif" />
      <img src="/gifs/sparks.gif" />
      <img src="/gifs/sparks.gif" />
    </div>
  </div>
}