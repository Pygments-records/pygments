import { useState, useEffect, RefObject } from 'react'

export function useIntersection(
  element: RefObject<Element> | undefined,
  rootMargin = '0px',
  threshold = 1.0,
) {
  const [isVisible, setState] = useState(false)

  useEffect(() => {
    if (element === undefined) {
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry !== undefined) {
          setState(entry.isIntersecting)
        }
      },
      { rootMargin, threshold },
    )
    element.current !== null && observer.observe(element.current)
    return () => {
      if (element.current !== null) {
        observer.unobserve(element.current)
      }
    }
  }, [])

  return isVisible
}
