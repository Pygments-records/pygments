import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'
import type { NextApiRequest, NextApiResponse } from 'next'

const SANITY_WEBHOOK_SECRET = process.env.NEXT_PUBLIC_SANITY_WEBHOOK_SECRET ?? ''

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const signature = req.headers[SIGNATURE_HEADER_NAME] as string
  const isValid = isValidSignature(JSON.stringify(req.body), signature, SANITY_WEBHOOK_SECRET)

  console.log(`body: ${JSON.stringify(req.body)}`)
  console.log(`signature: ${signature}`)
  console.log(`secret: ${SANITY_WEBHOOK_SECRET}`)
  console.log(`===== Is the webhook request valid? ${isValid}`)

  // Validate signature
  if (!isValid) {
    res.status(401).json({ success: false, message: 'Invalid signature' })
    return
  }

  try {
    const body = req.body as unknown as { _type: string }
    const contentType = body._type

    console.log(`===== Revalidating: ${contentType}`)

    if (contentType === 'event') {
      console.log(`===== Revalidating: timeline`)
      await res.revalidate('/fr/timeline')
    }
    return res.json({ revalidated: true })
  } catch (err) {
    // Could not revalidate. The stale page will continue to be shown until
    // this issue is fixed.
    return res.status(500).send('Error while revalidating')
  }
}
