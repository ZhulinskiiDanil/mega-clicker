import styles from './main.module.scss'

// Components
import { IItem } from '@/app/store'

// Components
import { Item } from '@/entities/road/progress/item/ui'

// Hooks
import { useEffect, useRef, useState } from 'react'
import { useClicker } from '@/shared/hooks/useClicker'
import { useLDM } from '@/shared/hooks/useLDM'

type ProgressProps = {
  items: IItem[]
  from: number
  to: number
}

export function Progress({ items, from, to }: ProgressProps) {
  const { ldm } = useLDM()
  const { clicks } = useClicker()
  const [moved, setMoved] = useState(false)
  const parentRef = useRef<null | HTMLDivElement>(null)
  const fillRef = useRef<null | HTMLDivElement>(null)

  const fromToDiff = Math.abs(from - to)
  const clicksDiff = clicks - from
  const value = clicks > from ? clicksDiff / fromToDiff : 0

  useEffect(() => {
    const fillDOM  = fillRef.current
    const parentDOM = parentRef.current

    if (ldm && parentDOM) {
      parentDOM.setAttribute("data-ldm", "")
    } else if (parentDOM) {
      parentDOM.removeAttribute("data-ldm")
    }

    if (fillDOM) {
      fillDOM.style.setProperty('--value', String(value > 1 ? 1 : value).substring(0, 5))
    }
  }, [value, fillRef, ldm])

  useEffect(() => {
    setMoved(true)

    const timeout = setTimeout(() => {
      setMoved(false)
    }, 5000)

    return () => {
      clearTimeout(timeout)
    }
  }, [clicks])
  
  if (!items?.length) return <></>
  return <div ref={parentRef} className={styles.progress}>
    <div className={styles.items}>
      {items.map((_, index) => {
        const fromActive = from + fromToDiff * ((index + 1) / (items.length + 1))

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