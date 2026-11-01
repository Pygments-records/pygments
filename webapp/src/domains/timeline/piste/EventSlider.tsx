import React, { ReactNode } from 'react'
import { Swiper } from 'swiper/react'
import { EffectFade, Lazy, Navigation } from 'swiper'
import arrowStyles from '../slider-arrow/SliderArrow.module.css'
import { SliderArrow } from '../slider-arrow/SliderArrow'
import cx from 'classnames'
import 'swiper/css/effect-fade'

type EventSliderProps = {
  children: ReactNode
  hideNavigation?: boolean
}

export const EventSlider = ({ children, hideNavigation = false }: EventSliderProps) => {
  return (
    <Swiper
      preloadImages={false}
      key="image-slider"
      navigation={{
        prevEl: '.event-slider-prev',
        nextEl: '.event-slider-next',
        disabledClass: arrowStyles['slider-arrow-disabled'],
      }}
      effect={'fade'}
      speed={500}
      lazy={{
        enabled: true,
        checkInView: true,
        loadPrevNext: true,
        loadOnTransitionStart: true,
      }}
      modules={[Lazy, Navigation, EffectFade]}
      className="h-full w-full relative"
    >
      <SliderEventNavigation className={cx({ ['!hidden']: hideNavigation })} />
      {children}
    </Swiper>
  )
}

type SliderEventNavigationProps = {
  className?: string
}

export const SliderEventNavigation = ({ className }: SliderEventNavigationProps) => {
  return (
    <div
      className={cx(
        'z-10 absolute flex items-center justify-center bottom-0 left-0 right-0 p-4',
        className,
      )}
    >
      <div className={cx('flex gap-4 justify-center')}>
        <SliderArrow
          className="event-slider-prev bg-[rgba(255,255,255,0.7)] text-black"
          position={'left'}
        />
        <SliderArrow
          className="event-slider-next bg-[rgba(255,255,255,0.7)] text-black"
          position={'right'}
        />
      </div>
    </div>
  )
}
