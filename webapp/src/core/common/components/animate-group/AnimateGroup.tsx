import React, { ReactNode } from 'react'
import { motion, Variant } from 'framer-motion'

const INTERNAL_ANIMATE_ITEM_NAME_IDENTIFIER = '__AnimateGroup.Item__'

type AnimateGroupProps = {
  as?: 'div' | 'ul' | 'li' | 'section'
  className?: string
  children: ReactNode
}

type AnimateGroupComposition = {
  Item: typeof Item
}

export const AnimateGroup: React.FC<AnimateGroupProps> & AnimateGroupComposition = ({
  as = 'div',
  className,
  children,
}) => {
  const Component = motion[as]

  const variants = {
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
  }

  return (
    <Component
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      className={className}
    >
      {React.Children.map(children, (child) => {
        if (
          React.isValidElement(child) &&
          typeof child !== 'string' &&
          // cheat to avoid ts error
          (child.type as { _name?: string })?._name === INTERNAL_ANIMATE_ITEM_NAME_IDENTIFIER
        ) {
          return child
        } else if (child === null) {
          return null
        } else {
          throw new Error('You must pass a AnimateGroup.Item as a child of AnimateGroup.')
        }
      })}
    </Component>
  )
}

type ItemVariantKey = 'hidden' | 'visible' | 'exit'

type ItemVariants = {
  [key in ItemVariantKey]: Variant
}

type ItemProps = {
  as?: 'div' | 'ul' | 'li' | 'section'
  children: ReactNode
  variants: ItemVariants
  className?: string
}

export const Item = ({ as = 'div', children, variants, className }: ItemProps) => {
  const Component = motion[as]
  return (
    <Component variants={variants} className={className}>
      {children}
    </Component>
  )
}

Item._name = INTERNAL_ANIMATE_ITEM_NAME_IDENTIFIER
AnimateGroup.Item = Item
