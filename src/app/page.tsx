'use client'
import styles from './styles/page.module.scss'
import { PageLayout } from '@layout'

// Components
import { Header } from '@/shared/layout/components'
import { Road } from '@/entities/road/ui'

// Hooks
import { useClicker } from '@/shared/hooks/useClicker'

function Component() {
  useClicker({ withoutRender: true })
  
  return <div className={styles.container}>
    <Road />
  </div>
}

export default PageLayout(
  Component, {
    imports: [
      Header
    ]
  }
)