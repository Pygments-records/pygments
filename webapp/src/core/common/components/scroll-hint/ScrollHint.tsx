import { Text } from '@ui-kit/components/text/Text'
import React, { useEffect, useState } from 'react'
import styles from './ScrollHint.module.css'
import cx from 'classnames'

export const ScrollHint = () => {
  const [hideHint, setHideHint] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHideHint(true)
    } else {
      setHideHint(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section
      className={cx('flex flex-col items-center gap-2', {
        ['hidden']: hideHint,
      })}
    >
      <div className={styles['scroll-hint-mouse-icon']} />
      <Text as="p" className="text-white">
        Scroll down
      </Text>
    </section>
  )
}
