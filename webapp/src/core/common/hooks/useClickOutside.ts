import { RefObject, useEffect } from 'react'

type Handler = (event: MouseEvent) => void

export function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
) {
  const handleClick = (e: MouseEvent) => {
    if (ref.current !== null && !ref.current.contains(e.target as Node)) {
      handler(e)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  })
}
