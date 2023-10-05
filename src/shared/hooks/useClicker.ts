import { useEffect, useState } from "react"

type UseClickerProps = {
  withoutRender?: boolean
}

export function useClicker(props?: UseClickerProps) {
  const [clicks, setClicks] = useState(0)

  const methods = {
    increment() {
      setClicks(pre => pre + 1)
    },
    decrement() {
      setClicks(pre => pre > 0 ? pre - 1 : 0)
    }
  }

  useEffect(() => {
    if (!props?.withoutRender) {
      document.addEventListener('mousedown', methods.increment)
  
      return () => {
        document.removeEventListener('mousedown', methods.increment)
      }
    }
  }, [])

  return { clicks }
}