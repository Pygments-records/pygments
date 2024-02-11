import React, { useEffect, useState } from 'react'
import { SwiperSlide, useSwiper } from 'swiper/react'
import { SliderEvent } from '../slider-event/SliderEvent'
import { events } from '../constants/events'
import { EventModal, EventSlide as EventSlideMobile } from '../event-slide/EventSlide'
import styles from './TimelineMobileScreen.module.css'
import { EventSlideDetails } from '../event-slide/EventSlideDetails'
import type { TimelineEvent } from '../models/TimelineEvent'
import type { Event } from '@core/event/data/EventModel'

type TimelineMobileScreenProps = {
  events: Event[]
}

export const TimelineMobileScreen = ({ events }: TimelineMobileScreenProps) => {
  const [showMore, setShowMore] = useState(false)

  return (
    <>
      <div className={styles['mobile-swiper']}>
        <SliderEvent
          isMobile={true}
          hideNavigation={showMore}
          onActionBtn={() => setShowMore(true)}
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <EventSlideMobile event={event} />
            </SwiperSlide>
          ))}
          <EventSlideDetailsModal showMore={showMore} setShowMore={setShowMore} />
        </SliderEvent>
      </div>
    </>
  )
}

const EventSlideDetailsModal = ({
  showMore,
  setShowMore,
}: {
  showMore: boolean
  setShowMore: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const swiper = useSwiper()
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | undefined>(undefined)

  useEffect(() => {
    setSelectedEvent(showMore ? events[swiper.activeIndex] : undefined)
  }, [showMore, swiper])

  return (
    <>
      <EventModal key={showMore ? 'showEventModal' : 'closeEventModal'} show={showMore}>
        {selectedEvent !== undefined && (
          <EventSlideDetails event={selectedEvent} onClose={() => setShowMore(false)} />
        )}
      </EventModal>
    </>
  )
}
