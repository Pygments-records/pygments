import type { ReactNode } from "react";
import { Footer } from "@core/common/layouts/RootLayout/Footer";
import { Header } from "@core/common/layouts/header/Header";
import styles from "./PageLayout.module.css";

type PageLayoutProps = {
  className?: string;
  withHeader?: boolean;
  withFooter?: boolean;
  children: ReactNode;
  transparentHeader: boolean;
};
export const PageLayout = ({
  className = "bg-white",
  children,
  transparentHeader,
  withHeader = true,
  withFooter = true,
}: PageLayoutProps) => {
  return (
    <main className={className}>
      {withHeader && <Header/>}
      <div className={styles["page-body"]}>{children}</div>
      {withFooter && <Footer />}
    </main>
  );
};
