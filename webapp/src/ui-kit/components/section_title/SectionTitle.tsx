import { useIntersection } from '@core/common/hooks/useIntersection'
import cx from 'classnames'
import { useRef } from 'react'
import { Heading } from '../heading/Heading'
import styles from './SectionTitle.module.css'

type SectionTitleProps = {
  id: string
  color: string
  title: string
  className?: string
  placement?: 'left' | 'right'
}

export const SectionTitle = ({
  id,
  color,
  title,
  className,
  placement = 'left',
}: SectionTitleProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useIntersection(ref)
  return (
    <div id={id} ref={ref} className={cx('flex', className)}>
      <div
        className={cx(styles.section, color, {
          [styles['section-left'] as string]: placement === 'left',
          [styles['section-right'] as string]: placement === 'right',
          [styles.animated as string]: isInView,
        })}
      >
        <Heading
          as="h3"
          size={5}
          className={cx(styles.title, {
            [styles['title-left'] as string]: placement === 'left',
            [styles['title-right'] as string]: placement === 'right',
            [styles.animated as string]: isInView,
          })}
        >
          {title}
        </Heading>
      </div>
    </div>
  )
}
