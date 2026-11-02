import { encodeSignatureHeader, SIGNATURE_HEADER_NAME } from '@sanity/webhook'
import type { NextApiRequest, NextApiResponse } from 'next'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const SECRET = 'test-secret'

const loadHandler = async () => (await import('./revalidate')).default

const makeRequest = (body: unknown, signature?: string) =>
  ({
    body,
    headers: signature ? { [SIGNATURE_HEADER_NAME]: signature } : {},
  }) as unknown as NextApiRequest

const sign = (body: unknown, secret = SECRET) =>
  encodeSignatureHeader(JSON.stringify(body), Date.now(), secret)

const makeResponse = () => {
  const res = {
    status: vi.fn(() => res),
    json: vi.fn(() => res),
    send: vi.fn(() => res),
    revalidate: vi.fn(() => Promise.resolve()),
  }
  return res
}

const call = async (req: NextApiRequest) => {
  const res = makeResponse()
  await (
    await loadHandler()
  )(req, res as unknown as NextApiResponse)
  return res
}

describe('POST /api/revalidate', () => {
  beforeEach(() => {
    vi.resetModules()
    vi.stubEnv('NEXT_PUBLIC_SANITY_WEBHOOK_SECRET', SECRET)
    vi.spyOn(console, 'log').mockImplementation(() => undefined)
  })

  afterEach(() => {
    vi.unstubAllEnvs()
    vi.restoreAllMocks()
  })

  it('rejects requests without a signature', async () => {
    const res = await call(makeRequest({ _type: 'event' }))
    expect(res.status).toHaveBeenCalledWith(401)
    expect(res.revalidate).not.toHaveBeenCalled()
  })

  it('rejects requests signed with another secret', async () => {
    const body = { _type: 'event' }
    const res = await call(makeRequest(body, sign(body, 'wrong-secret')))
    expect(res.status).toHaveBeenCalledWith(401)
    expect(res.revalidate).not.toHaveBeenCalled()
  })

  it('revalidates the timeline when an event changes', async () => {
    const body = { _type: 'event' }
    const res = await call(makeRequest(body, sign(body)))
    expect(res.revalidate).toHaveBeenCalledWith('/fr/timeline')
    expect(res.json).toHaveBeenCalledWith({ revalidated: true })
  })

  it('does not revalidate the timeline for other document types', async () => {
    const body = { _type: 'artist' }
    const res = await call(makeRequest(body, sign(body)))
    expect(res.revalidate).not.toHaveBeenCalled()
    expect(res.json).toHaveBeenCalledWith({ revalidated: true })
  })

  it('answers 500 when revalidation fails', async () => {
    const body = { _type: 'event' }
    const res = makeResponse()
    res.revalidate.mockRejectedValueOnce(new Error('boom'))
    await (
      await loadHandler()
    )(makeRequest(body, sign(body)), res as unknown as NextApiResponse)
    expect(res.status).toHaveBeenCalledWith(500)
  })
})
