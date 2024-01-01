import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Lazy, Navigation } from 'swiper'
import styles from './TimelineDesktopScreen.module.css'
import { Footer } from '@core/common/layouts/RootLayout/Footer'
import { EventDesktopSlide } from '../event-desktop-slide/EventDesktopSlide'
import { SliderEventNavigation } from '../slider-event/SliderEvent'
import arrowStyles from '../slider-arrow/SliderArrow.module.css'
import type { Event } from '@core/event/data/EventModel'

type TimelineDesktopScreenProps = {
  events: Event[]
}

export const TimelineDesktopScreen = ({ events }: TimelineDesktopScreenProps) => {
  return (
    <div className={styles['desktop-swiper']}>
      <Swiper
        key="desktop-slider"
        allowTouchMove={false}
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        navigation={{
          prevEl: '.swiper-arrow-prev',
          nextEl: '.swiper-arrow-next',
          disabledClass: arrowStyles['slider-arrow-disabled'],
        }}
        modules={[Navigation, Lazy]}
        lazy={{
          enabled: true,
          checkInView: true,
          loadPrevNext: true,
          loadOnTransitionStart: true,
        }}
        className="h-full w-full bg-darkPurple"
      >
        <SliderEventNavigation isMobile={false} />
        {events.map((event, index) => (
          <SwiperSlide key={`event-slide-${event.name}-${index}`}>
            <EventDesktopSlide event={event} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Footer />
    </div>
  )
}
