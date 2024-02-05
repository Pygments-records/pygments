import type { ReactNode } from 'react'
import { Footer } from '@core/common/layouts/RootLayout/Footer'
import { Header } from '@core/common/layouts/header/Header'
import styles from './PageLayout.module.css'
import { ScrollHint } from '@core/common/components/scroll-hint/ScrollHint'

type PageLayoutProps = {
  className?: string
  withHeader?: boolean
  withFooter?: boolean
  withScrollHint?: boolean
  children: ReactNode
}
export const PageLayout = ({
  className = 'bg-white',
  children,
  withScrollHint = false,
  withHeader = true,
  withFooter = true,
}: PageLayoutProps) => {
  return (
    <main className={className}>
      {withHeader && <Header />}
      <div className={styles['page-body']}>
        {children}
        {withScrollHint && (
          <div className="hidden md:block absolute top-[88vh] right-12">
            <ScrollHint />
          </div>
        )}
      </div>

      {withFooter && <Footer />}
    </main>
  )
}
