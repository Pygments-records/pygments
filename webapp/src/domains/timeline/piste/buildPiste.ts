import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import type { Event } from '@core/event/data/EventModel'

dayjs.extend(utc)
dayjs.extend(timezone)

export const BARS_PER_SLOT = 36
export const FALLBACK_COLOR = '#9D63C6'

// Nights happen in Paris: format dates in Paris time so server and browser render the same day
export const parisDate = (date: Date | string) => dayjs(date).tz('Europe/Paris')

export type PisteEvent = {
  event: Event
  color: string
  // Amplitude (0..1) of each waveform bar drawn behind this event
  wave: number[]
}

export type PisteYear = {
  year: number
  events: PisteEvent[]
}

// Deterministic pseudo-random generator so the waveform is identical on server and client
function seededRandom(seed: string) {
  let h = 2166136261
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(h ^ seed.charCodeAt(i), 16777619)
  }
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507)
    h = Math.imul(h ^ (h >>> 13), 3266489909)
    return ((h ^= h >>> 16) >>> 0) / 4294967296
  }
}

// A "beat" shaped envelope peaking at the middle of the slot. Events with more pictures get a
// taller peak, so the busiest nights stand out on the track.
export function buildWave(seed: string, intensity: number): number[] {
  const random = seededRandom(seed)
  return Array.from({ length: BARS_PER_SLOT }, (_, i) => {
    const distance = Math.abs(i - (BARS_PER_SLOT - 1) / 2) / (BARS_PER_SLOT / 2)
    const envelope = Math.exp(-3.5 * distance * distance)
    const noise = 0.35 + random() * 0.65
    const amp = Math.min(1, 0.08 + envelope * intensity * noise + random() * 0.08)
    // Rounded: Math.exp can differ in the last digit between Node and browsers (hydration mismatch)
    return Math.round(amp * 1000) / 1000
  })
}

// Groups events by year, oldest first: the track reads from the first night to the latest one.
export function buildPiste(events: Event[]): PisteYear[] {
  const sorted = [...events].sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
  )
  const years = new Map<number, PisteEvent[]>()
  for (const event of sorted) {
    const year = parisDate(event.startDate).year()
    const intensity = 0.55 + Math.min(event.pictures.length, 8) * 0.055
    const pisteEvent: PisteEvent = {
      event,
      color: event.pictures[0]?.color ?? FALLBACK_COLOR,
      wave: buildWave(event._id, intensity),
    }
    years.set(year, [...(years.get(year) ?? []), pisteEvent])
  }
  return Array.from(years, ([year, yearEvents]) => ({ year, events: yearEvents }))
}
