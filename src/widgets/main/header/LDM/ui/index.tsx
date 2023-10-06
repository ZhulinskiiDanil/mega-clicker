import styles from './main.module.scss'

// Hooks
import { useLDM } from '@/shared/hooks/useLDM'

export function LDM() {
  const { ldm, toggle } = useLDM()

  return <label className={styles.ldm}>
    <p>LDM</p>
    <div className={styles.checkbox}></div>
    <input onChange={toggle} type="checkbox" checked={ldm} />
  </label>
}