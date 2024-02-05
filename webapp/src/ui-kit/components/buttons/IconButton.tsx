import React, { ComponentPropsWithoutRef } from 'react'
import cx from 'classnames'

export type IconButtonProps = {
  icon?: React.ReactNode
  label?: string
  labelClassName?: string
} & ComponentPropsWithoutRef<'button'>
export const IconButton = ({
  icon,
  label,
  labelClassName,
  className,
  ...props
}: IconButtonProps) => {
  return (
    <button className={'relative flex items-center cursor-pointer group'} {...props}>
      <>
        {label !== undefined && (
          <p className={cx('hidden lg:block mr-1', labelClassName)}>{label}</p>
        )}
        <div className={cx('relative flex items-center justify-center', className)}>
          {icon}
          <div className="absolute inset-0 bg-white opacity-0 rounded-full group-hover:opacity-5 transition-all ease-out duration-300" />
        </div>
      </>
    </button>
  )
}
