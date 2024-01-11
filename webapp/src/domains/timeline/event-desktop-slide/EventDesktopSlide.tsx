import { Heading } from '@ui-kit/components/heading/Heading'
import React, { useEffect, useState } from 'react'
import styles from './EventDesktopSlide.module.css'
import dayjs from 'dayjs'
import { AnimatePresence, motion } from 'framer-motion'
import { SwiperSlide, useSwiperSlide } from 'swiper/react'
import { Badge } from '@ui-kit/components/badge/Badge'
import { Text } from '@ui-kit/components/text/Text'
import cx from 'classnames'
import { timelineNamespaces } from '../timelineNamespaces'
import { useTranslation } from '@core/i18n/useTranslation'
import { EventSlider } from './EventSlider'
import type { Event } from '@core/event/data/EventModel'
import { NextImage } from '@core/common/components/image/Image'

require('dayjs/locale/fr')
require('dayjs/locale/en')

type EventDesktopSlideProps = {
  event: Event
}

export const EventDesktopSlide = ({ event }: EventDesktopSlideProps) => {
  const { t, i18n } = useTranslation(timelineNamespaces)
  const [showDetails, setShowDetails] = useState(false)
  const swiperSlide = useSwiperSlide()

  useEffect(
    function resetSlide() {
      if (!swiperSlide.isActive && showDetails) {
        setShowDetails(false)
      }
    },
    [swiperSlide, showDetails],
  )

  return (
    <div className="h-full flex items-center justify-center mx-[64px]">
      <div className="flex-1 flex justify-center items-center relative">
        <motion.div
          className={styles['img-gallery']}
          initial={false}
          animate={{
            transform: showDetails ? 'translateX(-60%)' : 'translateX(0%)',
          }}
          transition={{ duration: 0.2, type: 'spring', damping: 30, stiffness: 80 }}
        >
          <EventSlider key="event-slider" hideNavigation={!showDetails}>
            {event.pictures.map((picture, index) => (
              <SwiperSlide key={`slider-img-${picture.url}-${index}`}>
                <NextImage
                  src={picture.url}
                  alt={picture.alt}
                  layout={'fill'}
                  objectFit={'cover'}
                  priority={index === 0}
                />
              </SwiperSlide>
            ))}
          </EventSlider>
        </motion.div>
        <motion.div
          className={cx(styles['event-title'], 'max-w-[500px]')}
          initial={false}
          animate={{ top: showDetails ? '-5%' : '50%' }}
          transition={{ duration: 0.2, type: 'spring', damping: 30, stiffness: 80 }}
        >
          <EventSlideTitle
            title={event.name}
            date={event.startDate}
            actionLabel={showDetails ? t('timeline:showLess') : t('timeline:showMore')}
            onActionClick={() => setShowDetails((prevState) => !prevState)}
          />
          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, transform: 'translateY(20px)' }}
                animate={{ opacity: 1, transform: 'translateY(0px)' }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex flex-col my-4">
                  <Text size="lg">
                    {dayjs(event.startDate).locale(i18n.language).format('dddd D MMMM YYYY')}
                  </Text>
                  <Text size="lg">{event.location.label}</Text>
                  <Text size="lg">{event.location.address}</Text>
                </div>
                <Heading as="p" size={7} className="mb-2">
                  {t('timeline:eventDetails.about')}
                </Heading>
                <Text size="lg" className="mb-4">
                  {event.description}
                </Text>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {event.categories.map((category) => (
                    <Badge
                      key={category}
                      label={category}
                      color="electricBlue"
                      outlined={true}
                      className="px-6 py-1"
                    />
                  ))}
                </div>
                {/* {event.artists.length > 0 && (
                  <>
                    <Heading as="p" size={7} className="mb-3">
                      {t("timeline:eventDetails.lineUp")}
                    </Heading>
                    <div className="mb-4">
                      <Swiper
                        autoHeight={true}
                        slidesPerView={"auto"}
                        spaceBetween={16}
                        freeMode={true}
                        slidesOffsetAfter={24}
                        className={styles["card-swiper"]}
                      >
                        {event.artists.map((artist) => (
                          <SwiperSlide key={artist.id}>
                            <ImageCard
                              label={artist.username}
                              imgSrc={artist.pictures[0] ?? ""}
                              className="h-[100px] w-[100px]"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </>
                )} */}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

export type EventSlideTitleProps = {
  title: string
  date: Date
  actionLabel?: string
  onActionClick?: () => void
}

const EventSlideTitle = ({ title, date, actionLabel, onActionClick }: EventSlideTitleProps) => {
  const heading = dayjs(date).format('DD/MM/YYYY')
  return (
    <div className="relative">
      <Heading as="p" size={3} className="absolute -translate-x-[110%]">
        #
      </Heading>
      <div>
        <div className="flex items-center gap-x-4">
          <Heading as="h2" size={3}>
            {heading}
          </Heading>
          <button
            onClick={onActionClick}
            className="py-1.5 px-6 border border-white rounded-full flex-shrink-0"
          >
            {actionLabel}
          </button>
        </div>
        <Heading as="h3" size={6}>
          {title}
        </Heading>
      </div>
    </div>
  )
}
