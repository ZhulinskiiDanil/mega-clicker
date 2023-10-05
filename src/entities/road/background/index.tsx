import styles from './main.module.scss'

// Hooks
import { useEffect, useRef } from 'react'

type BackgroundProps = {
  scrollProgress: number
}

export function Background({ scrollProgress }: BackgroundProps) {
  const bgRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    const elm = bgRef.current

    if (elm) {
      elm.style.setProperty('--scrollProgress', `${scrollProgress}`)
    }
  }, [bgRef, scrollProgress])

  return <div
    ref={bgRef}
    className={styles.background}
  ></div>
}