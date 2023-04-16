import type { ReactNode } from "react";
import cx from "classnames";
import { PreFooter } from "@core/common/layouts/RootLayout/PreFooter";
import { Footer } from "@core/common/layouts/RootLayout/Footer";
import { Header } from "../SectionHeader/Header";

type PageLayoutProps = {
  className?: string;
  withHeader?: boolean;
  withFooter?: boolean;
  children: ReactNode;
};
export const PageLayout = ({
  className = "bg-white",
  children,
  withHeader = true,
  withFooter = true,
}: PageLayoutProps) => {
  return (
    <main className={className}>
      {withHeader && <Header />}
      <div className="min-h-screen">{children}</div>
      {withFooter && (
        <>
          <PreFooter />
          <Footer />
        </>
      )}
    </main>
  );
};
