import React from 'react'
import { motion, Target, MotionProps } from 'framer-motion'

type FadeProps = Omit<MotionProps, 'initial' | 'animate' | 'exit'> & {
  as?: 'p' | 'div'
  type?: 'in' | 'out'
  delay?: number
  duration?: number
  initial?: Omit<Target, 'opacity'>
  animate?: Omit<Target, 'opacity'>
  exit?: Omit<Target, 'opacity'>
  className?: string
  children?: React.ReactNode
}

export const Fade = ({
  as = 'div',
  type = 'in',
  className,
  initial,
  animate,
  exit,
  children,
  ...fadeProps
}: FadeProps) => {
  const Component = motion[as]
  return (
    <Component
      className={className}
      initial={{ opacity: type === 'in' ? 0 : 1, ...initial }}
      animate={{ opacity: type === 'in' ? 1 : 0, ...animate }}
      exit={{ opacity: type === 'in' ? 0 : 1, ...exit }}
      {...fadeProps}
    >
      {children}
    </Component>
  )
}
