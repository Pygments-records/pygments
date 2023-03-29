import { useEffect, useState } from "react";
import cx from "classnames";
import React from "react";
import { useAnimationControls } from "framer-motion";
import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";

export const Header = () => {
  const controls = useAnimationControls();
  const [isHeaderFixed, setIsHeaderFixed] = useState(() => {
    if (typeof window !== "undefined") {
      return window.pageYOffset > 200 ? false : true;
    }
    return true;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 200 && isHeaderFixed) {
          setIsHeaderFixed(false);
          void controls.start("scrolled");
        } else if (window.pageYOffset <= 200 && !isHeaderFixed) {
          setIsHeaderFixed(true);
          void controls.start("fixed");
        }
      });
    }
  }, [controls, isHeaderFixed]);

  return (
    <header className={cx("z-40 absolute md:relative")}>
      <HeaderDesktop isFixed={isHeaderFixed} headerControls={controls} />
      <HeaderMobile isFixed={isHeaderFixed} headerControls={controls} />
    </header>
  );
};
