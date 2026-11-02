import type { Event, EventPicture } from '@core/event/data/EventModel'
import { describe, expect, it } from 'vitest'
import { BARS_PER_SLOT, buildPiste, buildWave, FALLBACK_COLOR, parisDate } from './buildPiste'

const picture = (color?: string): EventPicture => ({ url: 'https://cdn/x.jpg', alt: '', color })

const makeEvent = (overrides: Partial<Event> & Pick<Event, '_id'>): Event =>
  ({
    startDate: '2023-06-01T20:00:00Z',
    endDate: '2023-06-02T04:00:00Z',
    name: overrides._id,
    description: '',
    location: { address: '', label: '' },
    pictures: [picture('#fc749c')],
    categories: [],
    ticket: '',
    ...overrides,
  }) as unknown as Event

describe('parisDate', () => {
  it('formats dates in Paris time, whatever the machine timezone', () => {
    // 23:30 UTC on Dec 31 is already New Year in Paris
    expect(parisDate('2023-12-31T23:30:00Z').year()).toBe(2024)
    expect(parisDate('2023-12-31T23:30:00Z').format('YYYY-MM-DD HH:mm')).toBe('2024-01-01 00:30')
  })
})

describe('buildWave', () => {
  it('returns one bar per slot, all within 0..1', () => {
    const wave = buildWave('event-1', 1)
    expect(wave).toHaveLength(BARS_PER_SLOT)
    for (const amp of wave) {
      expect(amp).toBeGreaterThanOrEqual(0)
      expect(amp).toBeLessThanOrEqual(1)
    }
  })

  it('is deterministic for a given seed (server and client render the same waveform)', () => {
    expect(buildWave('event-1', 0.8)).toEqual(buildWave('event-1', 0.8))
    expect(buildWave('event-1', 0.8)).not.toEqual(buildWave('event-2', 0.8))
  })

  it('rounds amplitudes to 3 decimals to avoid hydration mismatches', () => {
    for (const amp of buildWave('event-1', 0.8)) {
      expect(Math.round(amp * 1000) / 1000).toBe(amp)
    }
  })

  it('peaks in the middle of the slot', () => {
    const wave = buildWave('event-1', 1)
    const middle = Math.max(...wave.slice(BARS_PER_SLOT / 2 - 3, BARS_PER_SLOT / 2 + 3))
    expect(middle).toBeGreaterThan(wave[0] ?? 0)
    expect(middle).toBeGreaterThan(wave[BARS_PER_SLOT - 1] ?? 0)
  })
})

describe('buildPiste', () => {
  it('returns no year for no event', () => {
    expect(buildPiste([])).toEqual([])
  })

  it('groups events by year, oldest year and oldest event first', () => {
    const piste = buildPiste([
      makeEvent({ _id: 'c', startDate: new Date('2024-03-01T20:00:00Z') }),
      makeEvent({ _id: 'a', startDate: new Date('2022-05-01T20:00:00Z') }),
      makeEvent({ _id: 'b2', startDate: new Date('2023-09-01T20:00:00Z') }),
      makeEvent({ _id: 'b1', startDate: new Date('2023-02-01T20:00:00Z') }),
    ])

    expect(piste.map((y) => y.year)).toEqual([2022, 2023, 2024])
    expect(piste.map((y) => y.events.map((e) => e.event._id))).toEqual([['a'], ['b1', 'b2'], ['c']])
  })

  it('assigns New Year eve nights to the year they happen in Paris', () => {
    const piste = buildPiste([
      makeEvent({ _id: 'nye', startDate: new Date('2023-12-31T23:30:00Z') }),
    ])
    expect(piste[0]?.year).toBe(2024)
  })

  it('does not mutate the input array', () => {
    const events = [
      makeEvent({ _id: 'b', startDate: new Date('2024-01-01T20:00:00Z') }),
      makeEvent({ _id: 'a', startDate: new Date('2023-01-01T20:00:00Z') }),
    ]
    buildPiste(events)
    expect(events.map((e) => e._id)).toEqual(['b', 'a'])
  })

  it('uses the dominant colour of the first picture, or a fallback colour', () => {
    const [year] = buildPiste([
      makeEvent({
        _id: 'a',
        startDate: new Date('2023-01-01T20:00:00Z'),
        pictures: [picture('#123456'), picture('#abcdef')],
      }),
      makeEvent({ _id: 'b', startDate: new Date('2023-02-01T20:00:00Z'), pictures: [picture()] }),
      makeEvent({ _id: 'c', startDate: new Date('2023-03-01T20:00:00Z'), pictures: [] }),
    ])
    expect(year?.events.map((e) => e.color)).toEqual(['#123456', FALLBACK_COLOR, FALLBACK_COLOR])
  })

  it('draws a taller peak for events with more pictures', () => {
    const peak = (pictures: EventPicture[]) =>
      Math.max(
        ...(buildPiste([makeEvent({ _id: 'same-seed', pictures })])[0]?.events[0]?.wave ?? []),
      )
    expect(peak(Array.from({ length: 8 }, () => picture()))).toBeGreaterThan(peak([picture()]))
  })
})
