import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import cx from 'classnames'
import type { Event } from '@core/event/data/EventModel'
import { useTranslation } from '@core/i18n/useTranslation'
import { timelineNamespaces } from '../timelineNamespaces'
import { buildPiste } from './buildPiste'
import { PisteSlot } from './PisteSlot'
import { EventPanel } from './EventPanel'
import styles from './TimelinePiste.module.css'

const DESKTOP_QUERY = '(min-width: 1024px)'
const SCRUB_MAX = 1000
const DRAG_THRESHOLD = 5

type TimelinePisteProps = {
  events: Event[]
}

const isDesktop = () => window.matchMedia(DESKTOP_QUERY).matches

export const TimelinePiste = ({ events }: TimelinePisteProps) => {
  const { t } = useTranslation(timelineNamespaces)
  const router = useRouter()
  const years = useMemo(() => buildPiste(events), [events])
  const scrollerRef = useRef<HTMLDivElement>(null)
  const yearRefs = useRef(new Map<number, HTMLElement>())
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false })
  const [isDragging, setIsDragging] = useState(false)
  const [scrub, setScrub] = useState(SCRUB_MAX)
  const [activeYear, setActiveYear] = useState(years[years.length - 1]?.year)

  const selectedId = typeof router.query['event'] === 'string' ? router.query['event'] : undefined
  const selected = useMemo(() => {
    for (const { events: yearEvents } of years) {
      const found = yearEvents.find(({ event }) => event._id === selectedId)
      if (found) return found
    }
    return undefined
  }, [years, selectedId])

  // The open event lives in the URL (?event=<id>) so a night can be shared directly
  const openEvent = useCallback(
    (eventId: string) => {
      if (drag.current.moved) return
      void router.push({ pathname: router.pathname, query: { event: eventId } }, undefined, {
        shallow: true,
        scroll: false,
      })
    },
    [router],
  )
  const closeEvent = useCallback(() => {
    void router.push({ pathname: router.pathname }, undefined, { shallow: true, scroll: false })
  }, [router])

  const updateActiveYear = useCallback(() => {
    const scroller = scrollerRef.current
    if (!scroller) return
    const desktop = isDesktop()
    const anchor = desktop
      ? scroller.getBoundingClientRect().left + scroller.clientWidth / 2
      : window.innerHeight * 0.4
    for (const { year } of years) {
      const rect = yearRefs.current.get(year)?.getBoundingClientRect()
      if (!rect) continue
      const inside = desktop
        ? rect.left <= anchor && rect.right >= anchor
        : rect.top <= anchor && rect.bottom >= anchor
      if (inside) {
        setActiveYear(year)
        return
      }
    }
  }, [years])

  // Desktop: start at the latest night, on the right end of the track
  useEffect(() => {
    const scroller = scrollerRef.current
    if (scroller && isDesktop()) {
      scroller.scrollLeft = scroller.scrollWidth
    }
  }, [])

  useEffect(
    function trackScroll() {
      const scroller = scrollerRef.current
      if (!scroller) return
      let frame = 0
      const onScroll = () => {
        cancelAnimationFrame(frame)
        frame = requestAnimationFrame(() => {
          const max = scroller.scrollWidth - scroller.clientWidth
          if (isDesktop() && max > 0) {
            setScrub(Math.round((scroller.scrollLeft / max) * SCRUB_MAX))
          }
          updateActiveYear()
        })
      }
      scroller.addEventListener('scroll', onScroll, { passive: true })
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => {
        cancelAnimationFrame(frame)
        scroller.removeEventListener('scroll', onScroll)
        window.removeEventListener('scroll', onScroll)
      }
    },
    [updateActiveYear],
  )

  useEffect(function wheelScrollsTheTrack() {
    const scroller = scrollerRef.current
    if (!scroller) return
    const onWheel = (e: WheelEvent) => {
      if (!isDesktop() || Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return
      const max = scroller.scrollWidth - scroller.clientWidth
      const atStart = scroller.scrollLeft <= 0 && e.deltaY < 0
      const atEnd = scroller.scrollLeft >= max - 1 && e.deltaY > 0
      // Let the page scroll on to the footer once the end of the track is reached
      if (atStart || atEnd) return
      e.preventDefault()
      scroller.scrollLeft += e.deltaY
    }
    scroller.addEventListener('wheel', onWheel, { passive: false })
    return () => scroller.removeEventListener('wheel', onWheel)
  }, [])

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current
    if (!scroller || e.pointerType !== 'mouse' || !isDesktop()) return
    drag.current = {
      active: true,
      startX: e.clientX,
      startScroll: scroller.scrollLeft,
      moved: false,
    }
  }

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current
    if (!scroller || !drag.current.active) return
    const delta = e.clientX - drag.current.startX
    if (!drag.current.moved && Math.abs(delta) > DRAG_THRESHOLD) {
      drag.current.moved = true
      setIsDragging(true)
    }
    if (drag.current.moved) {
      scroller.scrollLeft = drag.current.startScroll - delta
    }
  }

  const endDrag = () => {
    drag.current.active = false
    setIsDragging(false)
    // Keep `moved` until the click that ends the drag has been ignored
    setTimeout(() => (drag.current.moved = false), 0)
  }

  const onScrub = (value: number) => {
    const scroller = scrollerRef.current
    if (!scroller) return
    setScrub(value)
    scroller.scrollLeft = ((scroller.scrollWidth - scroller.clientWidth) * value) / SCRUB_MAX
  }

  const jumpToYear = (year: number) => {
    const target = yearRefs.current.get(year)
    const scroller = scrollerRef.current
    if (!target || !scroller) return
    if (isDesktop()) {
      const offset = target.getBoundingClientRect().left - scroller.getBoundingClientRect().left
      scroller.scrollTo({ left: scroller.scrollLeft + offset - 40, behavior: 'smooth' })
    } else {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const eventCount = years.reduce((total, { events: yearEvents }) => total + yearEvents.length, 0)

  return (
    <div className={styles['piste']}>
      <div className={styles['toolbar']}>
        <span className="mr-4 flex-shrink-0 font-text text-sm">
          {t('timeline:count', { count: eventCount })}
        </span>
        {[...years].reverse().map(({ year }) => (
          <button
            key={year}
            type="button"
            className={cx(styles['year-chip'], {
              [styles['year-chip-active'] as string]: year === activeYear,
            })}
            onClick={() => jumpToYear(year)}
          >
            {year}
          </button>
        ))}
      </div>

      <div
        ref={scrollerRef}
        className={cx(styles['scroller'], { [styles['dragging'] as string]: isDragging })}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        <div className={styles['track']}>
          {years.map(({ year, events: yearEvents }, yearIndex) => (
            <section
              key={year}
              className={styles['year']}
              aria-label={String(year)}
              ref={(el) => {
                if (el) yearRefs.current.set(year, el)
                else yearRefs.current.delete(year)
              }}
            >
              <div className={styles['year-backdrop']} aria-hidden="true">
                <span className={styles['year-label']}>{year}</span>
              </div>
              {yearEvents.map((item, index) => (
                <PisteSlot
                  key={item.event._id}
                  item={item}
                  index={index + yearIndex}
                  onOpen={openEvent}
                />
              ))}
            </section>
          ))}
        </div>
      </div>

      <div className={styles['scrubber']}>
        <span className="font-text text-sm text-gray">{t('timeline:scrubHint')}</span>
        <input
          type="range"
          min={0}
          max={SCRUB_MAX}
          step={1}
          value={scrub}
          aria-label={t('timeline:scrubLabel')}
          onChange={(e) => onScrub(Number(e.target.value))}
        />
        <span className="w-12 text-right font-heading font-extrabold">{activeYear}</span>
      </div>

      <AnimatePresence>
        {selected && (
          <EventPanel
            key={selected.event._id}
            event={selected.event}
            color={selected.color}
            onClose={closeEvent}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
