import type { ReactNode } from 'react'
import cx from 'classnames'
import styles from './RootLayout.module.css'

type RootLayoutProps = {
  className?: string
  children: ReactNode
}
export const RootLayout = ({ className, children }: RootLayoutProps) => {
  return <div className={cx(styles.container, className)}>{children}</div>
}
