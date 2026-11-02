import type { IncomingMessage } from 'http'
import { describe, expect, it } from 'vitest'
import { getAbsoluteUrl } from './getAbsoluteUrl'

const request = (headers: IncomingMessage['headers']) => ({ headers }) as IncomingMessage

describe('getAbsoluteUrl', () => {
  it('uses http for localhost', () => {
    expect(getAbsoluteUrl(request({ host: 'localhost:3000' })).origin).toBe('http://localhost:3000')
  })

  it('uses https for any other host', () => {
    expect(getAbsoluteUrl(request({ host: 'pygments.fr' })).origin).toBe('https://pygments.fr')
  })

  it('falls back to the localhost address when the request has no host', () => {
    expect(getAbsoluteUrl(request({}), 'localhost:4000').origin).toBe('http://localhost:4000')
  })

  it('trusts the x-forwarded-* headers set by the reverse proxy', () => {
    const url = getAbsoluteUrl(
      request({
        host: 'webapp:3000',
        'x-forwarded-host': 'pygments.fr',
        'x-forwarded-proto': 'https',
      }),
    )
    expect(url).toEqual({ protocol: 'https:', host: 'pygments.fr', origin: 'https://pygments.fr' })
  })
})
