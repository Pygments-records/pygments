import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "@ui-kit/components/link/Link";
import { toggleBodyScroll } from "@core/common/utils/toggleBodyScroll";
import styles from "./Header.module.css";
import { AnimatePresence, AnimationControls, motion, useAnimationControls } from "framer-motion";
import { headerVariants, HEADER_SIZE, links, scrollToSection } from "./constants";
import cx from "classnames";

const sidebarVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    transform: "translateX(-30px)",
    transition: { duration: 0.2 },
  },
  visible: {
    opacity: 1,
    transform: "translateX(0px)",
    transition: { duration: 0.2 },
  },
};

type HeaderMobileProps = {
  isFixed: boolean;
  headerControls: AnimationControls;
};

export const HeaderMobile = ({ isFixed, headerControls }: HeaderMobileProps) => {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  const controls = useAnimationControls();

  useEffect(() => {
    toggleBodyScroll(openMobileMenu);
  }, [openMobileMenu]);

  const handleMobileMenu = () => {
    setOpenMobileMenu((prevState) => {
      if (!prevState) {
        void controls.start("visible");
      } else {
        void controls.start("hidden");
      }
      return !prevState;
    });
  };

  return (
    <motion.nav
      className="z-20 fixed top-0 left-0 right-0 md:hidden"
      initial={isFixed ? "fixed" : "scrolled"}
      transition={{ duration: 0.1 }}
      animate={headerControls}
      variants={headerVariants}
    >
      <div className="flex items-center px-2" style={{ height: HEADER_SIZE }}>
        <button onClick={handleMobileMenu} className="relative">
          {openMobileMenu ? (
            <Image
              src={"/Close.svg"}
              height={35}
              width={35}
              alt={"button to open menu"}
              className="z-50"
            />
          ) : (
            <Image
              src={"/IconButton.svg"}
              height={35}
              width={35}
              alt={"button close menu"}
              className="z-50"
            />
          )}
        </button>
      </div>
      <AnimatePresence>
        {openMobileMenu && (
          <motion.div
            initial={{ transform: "translateX(-100vw)" }}
            animate={{ transform: "translateX(0vw)", transition: { type: "linear" } }}
            exit={{ transform: "translateX(-100vw)", transition: { delay: 0.5, duration: 0.3 } }}
            className="absolute h-screen inset-0 bg-white z-40 pt-[56px] flex"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={sidebarVariants}
              className="flex-1 flex flex-col items-center justify-evenly"
            >
              {links.map(({ title, href, color }) => (
                <motion.li variants={itemVariants} key={href} className="list-none">
                  <Link
                    className={cx(
                      styles["hover-underline-animation"],
                      `cursor-pointer hover:after:bg-${color} font-heading font-extrabold text-4xl lg:text-3xl text-${color}`
                    )}
                    onClick={() => scrollToSection(href, () => setOpenMobileMenu(false))}
                  >
                    {title.toUpperCase()}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
