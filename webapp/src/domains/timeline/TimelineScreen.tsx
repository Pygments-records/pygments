import { PageLayout } from "@core/common/layouts/PageLayout/PageLayout";
import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { TimelineMobileScreen } from "./mobile/TimelineMobileScreen";
import { TimelineDesktopScreen } from "./desktop/TimelineDesktopScreen";
import { Header } from "@core/common/layouts/header/Header";
import { useResponsive } from "@core/common/hooks/useResponsive";

export const TimelineScreen = () => {
  const { isMobileSize } = useResponsive();
  if (isMobileSize === undefined) {
    return null;
  }
  return (
    <PageLayout withHeader={false} withFooter={false} className="bg-darkPurple">
      <Header />
      {isMobileSize ? (
        <div className="lg:hidden h-full">
          <TimelineMobileScreen />
        </div>
      ) : (
        <TimelineDesktopScreen />
      )}
    </PageLayout>
  );
};
