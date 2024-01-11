import type { LinkProps } from '@ui-kit/components/link/Link'
import { forwardRef } from 'react'

export const SectionTitleRight = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ color, className, title }) => (
    <div className={'w-screen flex ' + className}>
      <div className={color + ' w-9/12 h-20 flex shadow-lg rounded-s items-center justify-end'}>
        <p className={'flex pr-6 font-pygments font-normal text-white text-3xl'}>{title}</p>
      </div>
    </div>
  ),
)
