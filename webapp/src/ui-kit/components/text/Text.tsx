import cx from 'classnames'
import type { ReactNode } from 'react'

export type TextSize = '2xl' | 'xl' | 'lg' | 'base' | 'sm' | 'xs'
export type TextWeight = 'light' | 'regular' | 'bold'

export type TextProps = {
  as?: 'p' | 'span' | 'h2' | 'h3' | 'h4' | 'h5'
  size?: TextSize
  weight?: TextWeight
  className?: string
  children: ReactNode
}

export const Text = ({
  as: Component = 'p',
  size = 'base',
  weight = 'regular',
  className,
  children,
}: TextProps) => (
  <Component className={cx('font-text', getTextStyles(size), getTextWeight(weight), className)}>
    {children}
  </Component>
)

function getTextWeight(weight: TextWeight): string {
  switch (weight) {
    case 'light': {
      return 'font-light'
    }
    case 'regular': {
      return 'font-normal'
    }
    case 'bold': {
      return 'font-bold'
    }
  }
}

function getTextStyles(size: TextSize): string {
  switch (size) {
    case '2xl': {
      return 'text-xl lg:text-2xl leading-10'
    }
    case 'xl': {
      return 'text-lg lg:text-xl leading-9'
    }
    case 'lg': {
      return 'text-base lg:text-lg leading-8'
    }
    case 'base': {
      return 'text-sm lg:text-base leading-7'
    }
    case 'sm': {
      return 'text-xs lg:text-sm leading-4.5'
    }
    case 'xs': {
      return 'text-xxs lg:text-xs leading-4'
    }
  }
}
