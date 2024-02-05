import { useLayoutEffect } from 'react'

export function useLockBodyScroll(): void {
  useLayoutEffect((): (() => void) => {
    document.body.style.overflow = 'hidden'
    return () => (document.body.style.overflow = 'auto')
  }, [])
}
