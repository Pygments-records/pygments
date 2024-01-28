import React from 'react'
import Image, { ImageProps } from 'next/image'
import cx from 'classnames'
import { Text, TextProps } from '@ui-kit/components/text/Text'

type ImageCardProps = {
  className?: string
  label: string
  imgSrc: string
  onClick?: () => void
  labelConfig?: TextProps
  imageConfig?: Pick<ImageProps, 'objectFit' | 'layout'>
}

export const ImageCard = ({
  label,
  imgSrc,
  className,
  onClick,
  labelConfig,
  imageConfig,
}: ImageCardProps) => {
  return (
    <div role="button" tabIndex={0} className="flex flex-col" onKeyDown={onClick} onClick={onClick}>
      <div className={cx('relative rounded overflow-hidden', className)}>
        <Image src={imgSrc} layout="fill" alt={`${label} image`} {...imageConfig} />
      </div>
      <Text size="base" {...labelConfig}>
        {label}
      </Text>
    </div>
  )
}
