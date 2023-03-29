import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";

type HeadMobileProps = {
  openMobileMenu: boolean;
  setOpenMobileMenu: (openMobileMenu: boolean) => void;
};

const handleClick = (type: boolean) => {
  if (type) {
    document.body.classList.remove("overflow-hidden");
  }
  if (!type) {
    document.body.classList.add("overflow-hidden");
  }
};

export const HeadMobile = ({ setOpenMobileMenu, openMobileMenu }: HeadMobileProps) => {
  return (
    <nav className={clsx("mx-auto block h-full w-full maxWidth:px-0")} aria-label="Top">
      <div className="flex h-screen w-screen flex-col justify-start max-h-screen">
        <div className="flex items-center ">
          <div className="flex h-10">
            <button
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
              className="relative w-[35px] pl-2"
            >
              <img
                src={"./IconButton.svg"}
                width={35}
                className={clsx(
                  openMobileMenu ? "opacity-0" : "opacity-100",
                  "absolute top-0 transition-opacity duration-300 ease-in"
                )}
                alt={"button close menu"}
                onClick={() => handleClick(openMobileMenu)}
              />
              <img
                src={"./Close.svg"}
                width={35}
                className={clsx(
                  openMobileMenu ? "opacity-100" : "opacity-0",
                  "absolute top-0 transition-opacity duration-300 ease-in"
                )}
                alt={"button to open menu"}
                onClick={() => handleClick(openMobileMenu)}
              />
            </button>
          </div>
        </div>
        <div
          className={clsx(
            " z-10 flex h-screen w-screen items-center justify-center bg-white",
            openMobileMenu ? "flex" : "hidden"
          )}
        >
          <ul className="z-40">
            <a
              href="/#event"
              className="flex text-5xl w-full z-40 items-center justify-center  font-pygments text-orange mb-10"
            >
              Events
            </a>
            <a
              href="/#artists"
              className="flex text-5xl w-full items-center justify-center font-pygments text-yellow mb-10"
            >
              Artists
            </a>
            <a
              href="/#project"
              className="flex text-5xl w-full z-40 items-center justify-center font-pygments text-purple mb-10"
            >
              Project
            </a>
            <a
              href="/#team"
              className="flex text-5xl w-full items-center justify-center font-pygments text-blue"
            >
              Team
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};
