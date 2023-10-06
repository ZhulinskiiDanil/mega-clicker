import styles from './main.module.scss'

// Types
import { RootState } from '@/app/store'

// Components
import Image from 'next/image'
import { Item } from '@/entities/road/item/ui'
import { Progress } from '@/entities/road/progress/ui'
import { Background } from '@/entities/road/background'
import { ProgressInfo } from '@/entities/progressInfo/ui'

// Hooks
import { useLDM } from '@/shared/hooks/useLDM'
import { useState } from 'react'
import { useClickableScroll } from '@/shared/hooks/useClickableScroll'

// Redux
import { useSelector } from 'react-redux'

export function Road() {
  const { ldm } = useLDM()
  const items = useSelector((state: RootState) => (
    state.items.value || []
  ))
  const [scrollProgress, setScrollProgress] = useState(0)
  const scrollRef = useClickableScroll<HTMLDivElement>((
    scrollLeft, scrollWidth
  ) => {
    setScrollProgress(
      scrollLeft / (scrollWidth - window.innerWidth)
    )
  })

  const itemsList = items.map(item => (
    item.type === "item" ? (
      <Item
        key={item.value.id}
        from={item.value.from || 0}
        title={item.value.title}
        subtitle={item.value.subtitle}
        imageURL={item.value.imageURL}
        tags={item.value.tags}
      />
    ) : (
      <Progress
        key={item.value.id}
        items={item.value.items || []}
        from={item.value?.from || 0}
        to={item.value?.to || 0}
      />
    )
  ))

  return <div ref={scrollRef} className={styles.road}>
    <Background scrollProgress={scrollProgress} />
    <ProgressInfo />
    <div className={styles.content}>
      { itemsList }
    </div>
    {!ldm && (
      <div className={styles.sparks}>
        <Image
          src="/gifs/footer_sparks.gif"
          alt="Sparks"
          fill
        />
      </div>
    )}
  </div>
}