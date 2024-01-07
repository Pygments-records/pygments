import type { ReactNode } from 'react'
import { Footer } from '@core/common/layouts/RootLayout/Footer'
import { Header } from '@core/common/layouts/header/Header'
import styles from './PageLayout.module.css'

type PageLayoutProps = {
<<<<<<< HEAD
  className?: string
  withHeader?: boolean
  withFooter?: boolean
  children: ReactNode
}
=======
  className?: string;
  withHeader?: boolean;
  withFooter?: boolean;
  children: ReactNode;
  transparentHeader: boolean;
};
>>>>>>> a3cd0c3 (add image on artists page)
export const PageLayout = ({
  className = 'bg-white',
  children,
  transparentHeader,
  withHeader = true,
  withFooter = true,
}: PageLayoutProps) => {
  return (
    <main className={className}>
<<<<<<< HEAD
      {withHeader && <Header />}
      <div className={styles['page-body']}>{children}</div>
=======
      {withHeader && <Header/>}
      <div className={styles["page-body"]}>{children}</div>
>>>>>>> a3cd0c3 (add image on artists page)
      {withFooter && <Footer />}
    </main>
  )
}
