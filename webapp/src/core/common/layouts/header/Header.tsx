import React, { forwardRef, useEffect, useState } from 'react'
import { InstaIcon } from '@ui-kit/icons/InstaIcon'
import { MenuIcon } from '@ui-kit/icons/MenuIcon'
import { AnimatePresence, motion } from 'framer-motion'
import { CloseIcon } from '@ui-kit/icons/Close2Icon'
import NextLink from 'next/link'
import styles from './Header.module.css'
import { IconButton } from '@ui-kit/components/buttons/IconButton'
import { Link } from '@ui-kit/components/link/Link'
import { FacebookIcon } from '@ui-kit/icons/FbIcon'
import { YoutubeIcon } from '@ui-kit/icons/YtIcon'
import { useLockBodyScroll } from '@core/common/hooks/useBlockScroll'
import { PygmentsIcon } from '@ui-kit/icons/PygmentsIcon'
import cx from 'classnames'
import { Fade } from '@core/common/components/fade/Fade'
import { AnimateGroup } from '@core/common/components/animate-group/AnimateGroup'
import { headerMenuItemVariants } from './Header.animation'
import { ExternalLink } from '@ui-kit/components/external-link/ExternalLink'
import { useTranslation } from '@core/i18n/useTranslation'

const SWITCH_BACKGROUND_COLOR_Y_POS = 64

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [menuBgColor, setMenuBgColor] = useState<'black' | 'darkPurple' | 'none'>('none')

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      if (window.scrollY > SWITCH_BACKGROUND_COLOR_Y_POS) {
        setMenuBgColor('darkPurple')
      } else {
        setMenuBgColor('none')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  console.log({ scrollY, menuBgColor })
  return (
    <>
      <motion.header
        className={cx(`z-40 flex flex-col fixed top-0 left-0 right-0 bg-${menuBgColor}`, {
          ['shadow-2xl']: menuBgColor === 'darkPurple',
        })}
      >
        <div className="h-header relative z-10 h-full flex items-center justify-center mx-4 lg:mx-12">
          <div className="absolute left-0 flex items-center">
            <ExternalLink href="https://www.instagram.com/pygments.records/">
              <IconButton icon={<InstaIcon />} className="w-14 h-14" />
            </ExternalLink>
            <ExternalLink
              href="https://www.facebook.com/profile.php?id=100076739332122"
              className="hidden lg:block"
            >
              <IconButton icon={<FacebookIcon />} className="w-14 h-14" />
            </ExternalLink>
            <ExternalLink
              href="https://www.youtube.com/channel/UCHhBg2Ks8-q3eQ94u2T7zoQ"
              className="hidden lg:block"
            >
              <IconButton icon={<YoutubeIcon />} className="w-14 h-14" />
            </ExternalLink>
          </div>
          <PygmentsIcon className="w-[150px] lg:w-[200px]" />
          <div className="absolute right-0 flex items-center">
            <IconButton
              onClick={() => {
                setShowMenu((prevState) => !prevState)
                setMenuBgColor('black')
              }}
              label="Menu"
              labelClassName="text-white tracking-[0.5em] text-sm font-text"
              className="w-14 h-14"
              icon={showMenu ? <CloseIcon /> : <MenuIcon />}
            />
          </div>
        </div>
        <AnimatePresence onExitComplete={() => setMenuBgColor('darkPurple')}>
          {showMenu && <HeaderMenu className="h-menu" onClose={() => setShowMenu(false)} />}
        </AnimatePresence>
      </motion.header>
    </>
  )
}

type HeaderMenuProps = {
  className?: string
  onClose: () => void
}

const HeaderMenu = ({ onClose, className }: HeaderMenuProps) => {
  const { t } = useTranslation('common')
  useLockBodyScroll()
  return (
    <Fade transition={{ duration: 1, type: 'spring' }} className={cx(styles.menu, className)}>
      <nav className="px-8 lg:ml-auto w-full lg:w-1/2 text-white">
        <AnimateGroup as="ul" className="flex flex-col gap-y-4 lg:gap-y-6">
          <AnimateGroup.Item
            as="li"
            variants={headerMenuItemVariants}
            className="font-text text-4xl lg:text-6xl font-light tracking-[0.2em]"
          >
            <MenuLink href="/" label="Home" onClick={onClose} />
          </AnimateGroup.Item>
          <AnimateGroup.Item
            as="li"
            variants={headerMenuItemVariants}
            className="font-text text-4xl lg:text-6xl font-light tracking-[0.2em]"
          >
            <NextLink href="/timeline" passHref={true}>
              <MenuLink href="/timeline" label="Timeline" onClick={onClose} />
            </NextLink>
          </AnimateGroup.Item>
          <AnimateGroup.Item as="li" variants={headerMenuItemVariants} className="grid grid-cols-2">
            <p className="font-text text-xs lg:text-base">{t('contact.mail')}</p>
            <p className="font-text text-xs lg:text-base">{t('contact.location')}</p>
          </AnimateGroup.Item>
        </AnimateGroup>
      </nav>
    </Fade>
  )
}

type HeaderLinkProps = {
  href: string
  label: string
  onClick?: () => void
}

const MenuLink = forwardRef<HTMLAnchorElement, HeaderLinkProps>(
  ({ href, label, onClick }: HeaderLinkProps, ref) => (
    <NextLink ref={ref} href={href} passHref={true}>
      <Link href={href} className={styles['menu-link']} onClick={onClick}>
        <span className="font-text text-4xl lg:text-6xl font-light tracking-[0.2em]">{label}</span>
      </Link>
    </NextLink>
  ),
)
