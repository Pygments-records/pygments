import { useEffect, useState } from 'react'
import type { Media } from '../data'
import dynamic from 'next/dynamic'
import cx from 'classnames'
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

type HomeMovieProps = {
  movie: Media
  className?: string
}

export const HomeMovie = ({ movie, className }: HomeMovieProps) => {
  const [videoWidth, setVideoWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      const newWindowDimensions = {
        width: window.innerWidth,
        height: window.innerHeight,
      }

      const viewportHeight = newWindowDimensions.height
      const aspectRatio = 16 / 9

      if (newWindowDimensions.width < viewportHeight * aspectRatio) {
        setVideoWidth(viewportHeight * aspectRatio)
      } else {
        setVideoWidth(newWindowDimensions.width)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={cx('h-screen relative overflow-hidden', className)}>
      <ReactPlayer
        height={(videoWidth / 16) * 9}
        width={videoWidth}
        url={movie.url}
        playing
        muted
        loop
        playsinline
        controls={false}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 1,
        }}
      />
    </div>
  )
}
