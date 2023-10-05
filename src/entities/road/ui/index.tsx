import styles from './main.module.scss'

// Components
import Image from 'next/image'
import { Item } from '@/entities/road/item/ui'
import { Progress } from '@/entities/road/progress/ui'
import { Background } from '@/entities/road/background'

// Hooks
import { useState } from 'react'
import { useClickableScroll } from '@/shared/hooks/useClickableScroll'

export function Road() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const scrollRef = useClickableScroll<HTMLDivElement>((
    scrollLeft, scrollWidth
  ) => {
    setScrollProgress(
      scrollLeft / (scrollWidth - window.innerWidth)
    )
  })

  return <div ref={scrollRef} className={styles.road}>
    <Background scrollProgress={scrollProgress} />
    <div className={styles.content}>
      <Item
        from={1}
        title='M4A4 Dawn'
        subtitle='SUB M4A4 Dawn'
        imageURL='/images/skins/M4A4_Dawn.png'
        tags={['Редкий', 'Горячее Оружие']}
      />
      <Progress from={0} to={20} />
      <Item
        from={20}
        title='AK47 Vulcan'
        subtitle='SUB AK47 Vulcan'
        imageURL='/images/skins/AK47_Vulcan.png'
        tags={['Редкий', 'Горячее Оружие']}
      />
      <Progress from={20} to={40} />
      <Item
        from={40}
        title='Нож - Бабочка'
        subtitle='SUB Нож - Бабочка'
        imageURL='/images/skins/butterfly-knife.png'
        tags={['Редкий', 'Холодной оружие']}
      />
      <Progress from={40} to={60} />
    </div>
    <div className={styles.sparks}>
      <Image
        src="/gifs/footer_sparks.gif"
        alt="Sparks"
        fill
      />
    </div>
  </div>
}