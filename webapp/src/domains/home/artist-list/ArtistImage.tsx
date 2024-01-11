import React from 'react'
import styles from './ArtistImage.module.css'
import cx from 'classnames'

type ArtistImageProps = {
  url: string
  index: number
  className?: string
}

export const ArtistImage = ({ className, url }: ArtistImageProps) => {
  return (
    <svg viewBox="0 0 100 100" className={cx('h-[450px] w-[450px]', className)}>
      <clipPath id="clip">
        <path className={styles['shape-anim']} transform="translate(50 50)"></path>
      </clipPath>
      <image
        height="100%"
        width="100%"
        preserveAspectRatio="xMinYMin slice"
        href={url}
        clipPath="url(#clip)"
      />
    </svg>
  )
}
