import { describe, expect, it } from 'vitest'
import { normalizeVideoUrl } from './normalizeVideoUrl'

describe('normalizeVideoUrl', () => {
  it.each([
    [
      'https://www.youtube.com/live/4GLj01TDz7o?si=_n4-jYrZ-MkIq9xd',
      'https://www.youtube.com/watch?v=4GLj01TDz7o',
    ],
    [
      'https://youtu.be/R-ahkZWVZ34?si=n5dir8fHArzr8Wyc',
      'https://www.youtube.com/watch?v=R-ahkZWVZ34',
    ],
    [
      'https://www.youtube.com/watch?v=M7SeRgd1atA&t=1685s',
      'https://www.youtube.com/watch?v=M7SeRgd1atA&t=1685s',
    ],
    [
      'https://www.youtube.com/watch?v=GI3-q1ma8W4&list=RDGI3-q1ma8W4&start_radio=1&t=10s',
      'https://www.youtube.com/watch?v=GI3-q1ma8W4&t=10s',
    ],
    ['https://www.youtube.com/shorts/abcdefghijk', 'https://www.youtube.com/watch?v=abcdefghijk'],
  ])('%s', (input, expected) => {
    expect(normalizeVideoUrl(input)).toBe(expected)
  })

  it('leaves non-YouTube URLs untouched', () => {
    expect(normalizeVideoUrl(' https://vimeo.com/123456 ')).toBe('https://vimeo.com/123456')
  })
})
