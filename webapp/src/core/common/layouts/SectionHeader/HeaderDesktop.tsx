import { AnimationControls, motion } from "framer-motion";
import { headerVariants, HEADER_SIZE, links, scrollToSection } from "./constants";
import { Link } from "@ui-kit/components/link/Link";
import styles from "./Header.module.css";
import cx from "classnames";

type HeaderDesktopProps = {
  isFixed: boolean;
  headerControls: AnimationControls;
};

export const HeaderDesktop = ({ isFixed, headerControls }: HeaderDesktopProps) => {
  return (
    <motion.nav
      className="md:fixed hidden md:block md:z-20 mt-0 w-full top-0 font-pygments"
      initial={isFixed ? "fixed" : "scrolled"}
      transition={{ duration: 0.1 }}
      animate={headerControls}
      variants={headerVariants}
    >
      <ul
        className="z-50 px-6 py-4 flex justify-evenly items-center"
        style={{ height: HEADER_SIZE }}
      >
        {links.map(({ title, href, color }) => (
          <li key={href}>
            <Link
              className={cx(
                styles["hover-underline-animation"],
                `cursor-pointer hover:after:bg-${color} font-heading font-extrabold text-xl lg:text-3xl text-${color}`
              )}
              onClick={() => scrollToSection(href)}
            >
              {title.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};
