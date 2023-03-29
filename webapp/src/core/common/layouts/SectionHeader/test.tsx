import { Link as RouterLink } from 'react-router-dom'
import { AuthMenu, NotificationBell } from '../Elements'
import { Logo } from '../Logo/Logo'
import { Button } from '../CallToAction/Button/Button'
import { icons, Icons } from '../Icons'
import clsx from 'clsx'
import ClickAwayListener from '@mui/material/ClickAwayListener'
type HeadMobileProps = {
  profileOn: boolean
  auth: any
  openMobileMenu: boolean
  setOpenMobileMenu: (openMobileMenu: boolean) => void
}
export const HeadMobile = ({
                             profileOn,
                             auth,
                             setOpenMobileMenu,
                             openMobileMenu,
                           }: HeadMobileProps) => {
  return (
    <ClickAwayListener
      onClickAway={() => setOpenMobileMenu(false)}
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
    >
      <nav
        className={clsx('mx-auto block h-full w-full p-6 md:hidden maxWidth:px-0')}
        aria-label="Top"
      >
        <div className="flex h-full w-full flex-col justify-start gap-6">
          <div className="flex items-center justify-between gap-6">
            <div className="flex gap-5">
              <button
                onClick={() => setOpenMobileMenu(!openMobileMenu)}
                className="relative w-[35px] "
              >
                <Icons
                  icon={icons.drawer}
                  width={35}
                  className={clsx(
                    openMobileMenu ? 'opacity-0' : 'opacity-100',
                    'absolute top-0 transition-opacity duration-300 ease-in'
                  )}
                />
                <Icons
                  icon={icons.xMark}
                  width={35}
                  className={clsx(
                    openMobileMenu ? 'opacity-100' : 'opacity-0',
                    'absolute top-0 transition-opacity duration-300 ease-in'
                  )}
                />
              </button>
              <RouterLink to="/">
                <Logo size="lg" variant="yumonWhiteOutline" />
              </RouterLink>
            </div>
            {profileOn ? (
              <div className="flex gap-5">
                <NotificationBell status={auth.user?.onboarding_completed} />
                <AuthMenu />
              </div>
            ) : (
              // <RouterLink to="/auth/login">
              <a
                href="https://pbdlfoc5z2u.typeform.com/to/BtB6AKyl"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="primary" size="sm">
                  Get Started
                </Button>
              </a>
              // </RouterLink>
            )}
          </div>
          <div
            className={clsx(
              'mx-auto flex h-screen w-full flex-col items-center justify-center divide-y-2 divide-neutral-black',
              openMobileMenu
                ? 'block'
                : setTimeout(() => {
                  return 'hidden'
                }, 300)
            )}
          >
            {/* <RouterLink
            to=""
            className="flex h-10 w-full items-center justify-center text-sm font-semibold text-white"
          >
            I am a creator
          </RouterLink> */}
            <a
              href="#genesis-season"
              className="flex h-10 w-full items-center justify-center text-sm font-semibold text-white"
            >
              Genesis Season
            </a>
            <a
              href="#roadmap"
              className="flex h-10 w-full items-center justify-center text-sm font-semibold text-white"
            >
              Roadmap
            </a>
            {profileOn && (
              <RouterLink
                to="/marketplace"
                className="flex h-10 w-full items-center justify-center text-sm font-semibold text-white"
              >
                Marketplace
              </RouterLink>
            )}
          </div>
        </div>
      </nav>
    </ClickAwayListener>
  )
}
