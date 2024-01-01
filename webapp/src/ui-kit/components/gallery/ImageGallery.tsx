import React, { useEffect, useRef, useState } from 'react'
import cx from 'classnames'
import type { ImageProps } from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import type { EventPicture } from '@core/event/data/EventModel'
import Image from 'next/image'

export type ImageGalleryProps = {
  images: EventPicture[]
  slideDuration?: number
  className?: string
  paused?: boolean
  imageConfig?: Pick<ImageProps, 'objectFit' | 'layout'>
}

const variants = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

export const ImageGallery = ({
  images,
  paused = false,
  slideDuration = 3000,
  className,
  imageConfig,
}: ImageGalleryProps) => {
  const [currentImg, setCurrentImg] = useState(0)
  const pauseRef = useRef<boolean>(false)

  useEffect(function autoplay() {
    const interval = setInterval(() => {
      if (pauseRef.current) {
        return
      }
      setCurrentImg((prevImg) => {
        const nextImg = prevImg + 1
        if (nextImg > images.length - 1) {
          return 0
        } else {
          return nextImg
        }
      })
    }, slideDuration)
    return () => {
      clearInterval(interval)
    }
  })

  useEffect(() => {
    pauseRef.current = paused
  }, [paused])

  return (
    <div className={cx('h-full w-full relative', className)}>
      <AnimatePresence initial={false}>
        <motion.div
          key={`image-gallery-${images[currentImg]?.url ?? -1}`}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ opacity: { duration: 0.8 } }}
          className={cx('h-full w-full', { ['blur-sm']: paused })}
        >
          <Image
            key={`img-${images[currentImg]?.url ?? 'default'}`}
            src={images[currentImg]?.url ?? ''}
            alt={images[currentImg]?.alt}
            layout={'fill'}
            objectFit={'contain'}
            {...imageConfig}
          />
          {images[currentImg + 1] !== undefined && (
            <Image
              key={`img-${images[currentImg + 1]?.url ?? 'default'}`}
              src={images[currentImg + 1]?.url ?? ''}
              alt={images[currentImg]?.alt}
              layout={'fill'}
              objectFit={'contain'}
              className="opacity-0"
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
