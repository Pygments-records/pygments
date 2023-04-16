import React, { forwardRef, useState } from "react";
import { InstaIcon } from "@ui-kit/icons/InstaIcon";
import { MenuIcon } from "@ui-kit/icons/MenuIcon";
import { AnimatePresence, motion } from "framer-motion";
import { CloseIcon } from "@ui-kit/icons/Close2Icon";
import NextLink from "next/link";
import styles from "./Header.module.css";
import { IconButton } from "@ui-kit/components/buttons/IconButton";
import { Link } from "@ui-kit/components/link/Link";
import { FacebookIcon } from "@ui-kit/icons/FbIcon";
import { YoutubeIcon } from "@ui-kit/icons/YtIcon";
import { useLockBodyScroll } from "@core/common/hooks/useBlockScroll";
import { PygmentsIcon } from "@ui-kit/icons/PygmentsIcon";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="z-40 relative">
        <div className="h-header relative z-10 h-full flex items-center justify-center mx-4 lg:mx-12">
          <div className="absolute left-0 flex items-center">
            <Link
              href="https://www.instagram.com/pygments.records/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton icon={<InstaIcon />} className="w-14 h-14" />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100076739332122"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block"
            >
              <IconButton icon={<FacebookIcon />} className="w-14 h-14" />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCHhBg2Ks8-q3eQ94u2T7zoQ"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block"
            >
              <IconButton icon={<YoutubeIcon />} className="w-14 h-14" />
            </Link>
          </div>
          <PygmentsIcon className="w-[150px] lg:w-[200px]" />
          <div className="absolute right-0 flex items-center">
            <IconButton
              onClick={() => {
                setShowMenu((prevState) => !prevState);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              label="Menu"
              labelClassName="text-white tracking-[0.5em] text-sm font-text"
              className="w-14 h-14"
              icon={showMenu ? <CloseIcon /> : <MenuIcon />}
            />
          </div>
        </div>
      </header>
      <AnimatePresence>
        {showMenu && <HeaderMenu onClose={() => setShowMenu(false)} />}
      </AnimatePresence>
    </>
  );
};

type HeaderMenuProps = {
  onClose: () => void;
};

const HeaderMenu = ({ onClose }: HeaderMenuProps) => {
  useLockBodyScroll();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0.5 } }}
      transition={{ duration: 0.4, type: "spring" }}
      className={styles.menu}
    >
      <nav className="px-8 lg:ml-auto w-full lg:w-1/2 text-white">
        <motion.ul
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          className="flex flex-col gap-y-4 lg:gap-y-6"
        >
          <motion.li
            variants={menuItemVariants}
            className="font-text text-4xl lg:text-6xl font-light tracking-[0.2em]"
          >
            <MenuLink href="/" label="Home" onClick={onClose} />
          </motion.li>
          <motion.li
            variants={menuItemVariants}
            className="font-text text-4xl lg:text-6xl font-light tracking-[0.2em]"
          >
            <NextLink href="/timeline" passHref={true}>
              <MenuLink href="/timeline" label="Timeline" onClick={onClose} />
            </NextLink>
          </motion.li>
          <motion.div variants={menuItemVariants} className="grid grid-cols-2">
            <p className="font-text text-xs lg:text-base">pygments@gmail.com</p>
            <p className="font-text text-xs lg:text-base">75000 Paris, France</p>
          </motion.div>
        </motion.ul>
      </nav>
    </motion.div>
  );
};

type HeaderLinkProps = {
  href: string;
  label: string;
  onClick?: () => void;
};

const MenuLink = forwardRef<HTMLAnchorElement, HeaderLinkProps>(
  ({ href, label, onClick }: HeaderLinkProps, ref) => (
    <NextLink ref={ref} href={href} passHref={true}>
      <Link href={href} className={styles["menu-link"]} onClick={onClick}>
        <span className="font-text text-4xl lg:text-6xl font-light tracking-[0.2em]">{label}</span>
      </Link>
    </NextLink>
  )
);

const menuVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const menuItemVariants = {
  hidden: {
    opacity: 0,
    transform: "translateY(35px)",
    transition: { duration: 0.3, type: "spring", damping: 20, bounce: 0 },
  },
  visible: {
    opacity: 1,
    transform: "translateY(0px)",
    transition: { duration: 0.3, type: "spring", damping: 20, bounce: 0 },
  },
  exit: {
    opacity: 0,
    transform: "translateY(-35px)",
    transition: { duration: 0.3, type: "spring", damping: 20, bounce: 0 },
  },
};
