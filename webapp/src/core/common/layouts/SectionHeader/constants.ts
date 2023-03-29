export type HeaderLink = {
  title: string;
  href: string;
  color: string;
};

export const links: HeaderLink[] = [
  {
    title: "news",
    href: "#news",
    color: "orange",
  },
  {
    title: "artists",
    href: "#artist",
    color: "yellow",
  },
  {
    title: "project",
    href: "#project",
    color: "blue",
  },
  {
    title: "team",
    href: "#team",
    color: "purple",
  },
];

export const headerVariants = {
  fixed: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    boxShadow: "none",
  },
  scrolled: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)",
  },
};

export const HEADER_SIZE = 64;
export const HEADER_OFFSET = HEADER_SIZE + 16;

export const scrollToSection = (anchor: string, cb?: () => void) => {
  const id = anchor.replace("#", "");
  const element = document.getElementById(id);
  if (element !== null) {
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - HEADER_OFFSET;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    cb !== undefined && cb();
  }
};
