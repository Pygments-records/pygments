import React from 'react'
import cx from 'classnames'
import { Text } from '@ui-kit/components/text/Text'

export type BadgeProps = {
  label: string
  color: string
  outlined?: boolean
  className?: string
}

export const Badge = ({ label, color, outlined = false, className }: BadgeProps) => (
  <div
    className={cx(
      'border-2 rounded-full',
      {
        [`text-white bg-${color}`]: !outlined,
        [`border-${color} text-${color}`]: outlined,
      },
      className,
    )}
  >
    <Text>{label}</Text>
  </div>
)
