import { ChevronIcon } from '@ui-kit/icons/ChevronIcon'
import cx from 'classnames'
import React from 'react'

type SliderArrowProps = {
  className?: string
  position: 'top' | 'bottom' | 'left' | 'right'
}

export const SliderArrow = ({ className, position }: SliderArrowProps) => {
  return (
    <div
      className={cx(
        'flex justify-center items-center text-white border border-white rounded-full p-4 cursor-pointer hover:bg-opacity-5 hover:bg-white transition-all ease-out duration-300',
        className,
      )}
    >
      <ChevronIcon
        height={32}
        width={32}
        className={cx({
          ['-rotate-90']: position === 'top',
          ['rotate-90']: position === 'bottom',
          ['rotate-180']: position === 'left',
          ['rotate-0']: position === 'right',
        })}
      />
    </div>
  )
}
