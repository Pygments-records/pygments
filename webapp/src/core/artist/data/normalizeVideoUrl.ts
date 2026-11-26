const YOUTUBE_ID =
  /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|live\/|shorts\/|watch\/|watch\?(?:.*&)?v=))([\w-]{11})/

/**
 * react-player 2.10 can't read every YouTube URL people paste in the CMS:
 * - `youtube.com/live/<id>` isn't recognised, so nothing is rendered;
 * - `&list=RD…` (YouTube "mix") is loaded as a playlist, which can't be embedded.
 * We rebuild a plain `watch?v=<id>` URL and keep only the start time.
 */
export const normalizeVideoUrl = (rawUrl: string): string => {
  const url = rawUrl.trim()
  const match = url.match(YOUTUBE_ID)
  if (!match) return url

  const start = url.match(/[?&](?:t|start)=(\d+)s?(?:&|$)/)
  return `https://www.youtube.com/watch?v=${match[1]}${start ? `&t=${start[1]}s` : ''}`
}
