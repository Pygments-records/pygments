import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { SwiperSlide } from 'swiper/react'
import type { Event } from '@core/event/data/EventModel'
import { NextImage } from '@core/common/components/image/Image'
import { useLockBodyScroll } from '@core/common/hooks/useBlockScroll'
import { useTranslation } from '@core/i18n/useTranslation'
import { Badge } from '@ui-kit/components/badge/Badge'
import { Heading } from '@ui-kit/components/heading/Heading'
import { Text } from '@ui-kit/components/text/Text'
import { timelineNamespaces } from '../timelineNamespaces'
import { EventSlider } from './EventSlider'
import { parisDate } from './buildPiste'
import styles from './EventPanel.module.css'

require('dayjs/locale/fr')
require('dayjs/locale/en')

type EventPanelProps = {
  event: Event
  color: string
  onClose: () => void
}

export const EventPanel = ({ event, color, onClose }: EventPanelProps) => {
  const { t, i18n } = useTranslation(timelineNamespaces)
  useLockBodyScroll()

  useEffect(
    function closeOnEscape() {
      const onKeyDown = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
      window.addEventListener('keydown', onKeyDown)
      return () => window.removeEventListener('keydown', onKeyDown)
    },
    [onClose],
  )

  return (
    <motion.div
      className={styles['backdrop']}
      role="dialog"
      aria-modal="true"
      aria-label={event.name}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        className={styles['panel']}
        style={{ borderColor: color }}
        initial={{ y: 40, rotate: -2, opacity: 0 }}
        animate={{ y: 0, rotate: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ type: 'spring', damping: 26, stiffness: 220 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={styles['close']}
          onClick={onClose}
          aria-label={t('timeline:close')}
        >
          ×
        </button>
        <div className={styles['gallery']}>
          <EventSlider hideNavigation={event.pictures.length < 2}>
            {event.pictures.map((picture, index) => (
              <SwiperSlide key={`${picture.url}-${index}`}>
                <NextImage
                  src={picture.url}
                  alt={picture.alt || event.name}
                  layout="fill"
                  objectFit="cover"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  placeholder={picture.lqip ? 'blur' : 'empty'}
                  blurDataURL={picture.lqip}
                  priority={index === 0}
                />
              </SwiperSlide>
            ))}
          </EventSlider>
        </div>
        <div className={styles['details']}>
          <Text size="lg" className="text-yellow">
            {parisDate(event.startDate).locale(i18n.language).format('dddd D MMMM YYYY')}
          </Text>
          <Heading as="h2" size={6} className="mt-2">
            {event.name}
          </Heading>
          {event.location.label && (
            <Text className="mt-4">
              {event.location.label}
              {event.location.address && (
                <span className="block text-gray">{event.location.address}</span>
              )}
            </Text>
          )}
          {event.categories.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {event.categories.map((category) => (
                <Badge
                  key={category}
                  label={category}
                  color="electricBlue"
                  outlined={true}
                  className="px-4 py-0.5"
                />
              ))}
            </div>
          )}
          {event.description && (
            <>
              <Heading as="p" size={7} className="mt-6">
                {t('timeline:eventDetails.about')}
              </Heading>
              <Text className={styles['description']}>{event.description}</Text>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
