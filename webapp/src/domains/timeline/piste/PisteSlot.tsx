import React, { CSSProperties } from 'react'
import { NextImage } from '@core/common/components/image/Image'
import { useTranslation } from '@core/i18n/useTranslation'
import { timelineNamespaces } from '../timelineNamespaces'
import { parisDate } from './buildPiste'
import type { PisteEvent } from './buildPiste'
import styles from './TimelinePiste.module.css'

type PisteSlotProps = {
  item: PisteEvent
  index: number
  onOpen: (eventId: string) => void
}

const TILTS = [-4, 3, -2, 5, -3, 2]

export const PisteSlot = ({ item, index, onOpen }: PisteSlotProps) => {
  const { t } = useTranslation(timelineNamespaces)
  const { event, color, wave } = item
  const side = index % 2 === 0 ? 'start' : 'end'
  const cover = event.pictures[0]

  return (
    <div className={styles['slot']} data-event-slot>
      <div className={styles['wave']} aria-hidden="true">
        {wave.map((amp, i) => (
          <span
            key={i}
            className={styles['bar']}
            style={
              {
                '--amp': amp,
                backgroundColor: color,
                opacity: Math.round((0.25 + amp * 0.55) * 100) / 100,
              } as CSSProperties
            }
          />
        ))}
      </div>
      <span className={styles['stem']} data-side={side} aria-hidden="true" />
      <span className={styles['pin']} aria-hidden="true" />
      <button
        type="button"
        className={styles['poster']}
        data-side={side}
        style={{ '--tilt': `${TILTS[index % TILTS.length]}deg` } as CSSProperties}
        onClick={() => onOpen(event._id)}
      >
        <div className={styles['frame']}>
          {cover && (
            <div className={styles['picture']}>
              <NextImage
                src={cover.url}
                alt={cover.alt || event.name}
                layout="fill"
                objectFit="cover"
                sizes="(min-width: 1024px) 200px, 45vw"
                placeholder={cover.lqip ? 'blur' : 'empty'}
                blurDataURL={cover.lqip}
              />
            </div>
          )}
          {event.pictures.length > 1 && (
            <span className={styles['photo-count']}>
              {t('timeline:photos', { count: event.pictures.length })}
            </span>
          )}
        </div>
        <span className={styles['caption']}>
          <span className={styles['caption-date']}>
            {parisDate(event.startDate).format('DD.MM.YYYY')}
          </span>
          {event.name}
        </span>
      </button>
    </div>
  )
}
