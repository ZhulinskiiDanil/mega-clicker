import styles from './main.module.scss'

// Hooks
import { useEffect, useRef } from 'react'
import { useClicker } from '@/shared/hooks/useClicker'

type BackgroundProps = {
  scrollProgress: number
}

export function Background({ scrollProgress }: BackgroundProps) {
  const bgRef = useRef<null | HTMLDivElement>(null)
  const { clicks } = useClicker()

  function afterElementMounted(
    cb: (elm: NonNullable<typeof bgRef.current>) => any
  ) {
    if (bgRef.current) {
      cb(bgRef.current)
    }
  }

  useEffect(() => {
    afterElementMounted(elm => {
      elm.style.setProperty('--scrollProgress', `${scrollProgress}`)
    })
  }, [bgRef, scrollProgress])

  useEffect(() => {
    let timeout = setTimeout(() => {}, 0)

    afterElementMounted(elm => {
      elm.setAttribute('data-clicked', '')
      elm.style.setProperty('--random', String(Math.random()))

      timeout = setTimeout(() => {
        elm.removeAttribute('data-clicked')
        elm.style.removeProperty('--random')
      }, 150) // 0.15s
    })

    return () => {
      clearTimeout(timeout)
    }
  }, [clicks])

  return <div
    ref={bgRef}
    className={styles.background}
  ></div>
}