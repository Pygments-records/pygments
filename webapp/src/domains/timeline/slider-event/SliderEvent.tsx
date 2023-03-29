import React, { ReactNode } from "react";
import { Swiper } from "swiper/react";
import { Lazy, Navigation } from "swiper";
import cx from "classnames";
import styles from "./SliderEvent.module.css";
import arrowStyles from "../slider-arrow/SliderArrow.module.css";
import { SliderArrow } from "../slider-arrow/SliderArrow";
import { OutlinedButton } from "@ui-kit/components/buttons/OutlinedButton";
import { Text } from "@ui-kit/components/text/Text";
import { useTranslation } from "@core/i18n/useTranslation";
import { timelineNamespaces } from "../timelineNamespaces";

type SliderEventProps = {
  children: ReactNode;
  isMobile: boolean;
  hideNavigation?: boolean;
  onActionBtn?: () => void;
};

export const NAVIGATION_FOOTER_HEIGHT = 120;

export const SliderEvent = ({
  children,
  isMobile,
  hideNavigation = false,
  onActionBtn,
}: SliderEventProps) => {
  const { t } = useTranslation(timelineNamespaces);
  return (
    <div className="h-full w-full relative">
      <Swiper
        navigation={{
          prevEl: ".swiper-arrow-prev",
          nextEl: ".swiper-arrow-next",
          disabledClass: arrowStyles["slider-arrow-disabled"],
        }}
        modules={[Navigation, Lazy]}
        lazy={{
          enabled: true,
          checkInView: true,
          loadPrevNext: true,
          loadOnTransitionStart: true,
        }}
        className="h-full w-full relative"
      >
        <SliderEventNavigation
          isMobile={isMobile}
          actionBtn={
            isMobile && (
              <OutlinedButton onClick={onActionBtn} color="white" className="py-3 px-8">
                <Text size="xl">{t("timeline:showMore")}</Text>
              </OutlinedButton>
            )
          }
          className={cx({ ["!hidden"]: hideNavigation })}
        />
        {children}
      </Swiper>
    </div>
  );
};

type SliderEventNavigationProps = {
  isMobile: boolean;
  actionBtn?: ReactNode;
  className?: string;
};

export const SliderEventNavigation = ({
  isMobile,
  actionBtn,
  className,
}: SliderEventNavigationProps) => {
  return (
    <div
      className={cx(
        {
          [styles["slider-mobile-event"] as string]: isMobile,
          [styles["slider-desktop-event"] as string]: !isMobile,
        },
        className
      )}
    >
      <div
        className={cx("flex gap-4", {
          ["items-center"]: isMobile,
          ["flex-col justify-center"]: !isMobile,
        })}
      >
        <SliderArrow className="swiper-arrow-prev" position={isMobile ? "left" : "top"} />
        <SliderArrow className="swiper-arrow-next" position={isMobile ? "right" : "bottom"} />
      </div>
      {actionBtn}
    </div>
  );
};
