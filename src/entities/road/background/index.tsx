import styles from './main.module.scss'

// Hooks
import { useEffect, useRef } from 'react'
import { useClicker } from '@/shared/hooks/useClicker'
import { useLDM } from '@/shared/hooks/useLDM'

type BackgroundProps = {
  scrollProgress: number
}

export function Background({ scrollProgress }: BackgroundProps) {
  const { ldm } = useLDM()
  const { clicks } = useClicker()
  const bgRef = useRef<null | HTMLDivElement>(null)

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
      if (ldm) {
        elm.setAttribute('data-ldm', '')
        elm.removeAttribute('data-clicked')
      } else {
        elm.removeAttribute('data-ldm')
      }

      if (!ldm) {
        elm.setAttribute('data-clicked', '')
        elm.style.setProperty('--random', String(Math.random()))
  
        timeout = setTimeout(() => {
          elm.removeAttribute('data-clicked')
          elm.style.removeProperty('--random')
        }, 150) // 0.15s
      }
    })

    return () => {
      clearTimeout(timeout)
    }
  }, [clicks, ldm])

  return <div
    ref={bgRef}
    className={styles.background}
  ></div>
}