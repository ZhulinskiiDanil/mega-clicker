import { MutableRefObject, useEffect, useRef } from "react";

export function useClickableScroll<T>(
  cb?: (
    scrollLeft: number,
    scrollWidth: number
  ) => any
): MutableRefObject<T> {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const elm = ref.current as HTMLElement | null
    let lastMouseEvent: MouseEvent | null = null

    function onScroll() {
      console.log("Scroll");

      if (elm) {
        if (cb instanceof Function) {
          const scrollLeft = elm.scrollLeft >= 0 ? elm.scrollLeft : 0
          const scrollWidth = elm.scrollWidth
  
          cb(scrollLeft, scrollWidth)
        }
      }
    }

    if (elm) elm.onscroll = onScroll

    const mousemoveHandler = (e: MouseEvent) => {
      lastMouseEvent = e
      
      if (elm && elm?.scrollLeft >= 0) {
        elm.scrollLeft -= e.movementX
      }
    }

    const mouseupHandler = (e: MouseEvent) => {
      document.removeEventListener('mousemove', mousemoveHandler)
    }

    const mousedownHandler = (e: MouseEvent) => {
      e.preventDefault()

      document.addEventListener('mousemove', mousemoveHandler)
    }

    if (elm) {
      document.addEventListener('mousedown', mousedownHandler)
      document.addEventListener('mouseup', mouseupHandler)
    }

    return () => {
      document.removeEventListener('mousedown', mousedownHandler)
      document.removeEventListener('mousemove', mousemoveHandler)
      document.removeEventListener('mouseup', mouseupHandler)
    }
  }, [ref])

  return ref as MutableRefObject<T>
}