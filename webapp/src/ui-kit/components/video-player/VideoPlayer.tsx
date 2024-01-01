import React from 'react'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

type VideoPlayerProps = {
  url: string
  className?: string
  width?: number | string
  height?: number | string
}

export const VideoPlayer = ({ url, width, height, className }: VideoPlayerProps) => {
  return (
    <ReactPlayer className={className} url={url} width={width} height={height} controls={true} />
  )
}
