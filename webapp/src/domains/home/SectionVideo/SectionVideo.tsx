import { VideoPlayer } from '@ui-kit/components/video-player/VideoPlayer'
import styles from './SectionVideo.module.css'

type SectionVideoProps = {
  className?: string
}
const MAIN_VIDEO_URL = 'https://youtu.be/yvuq1dqI8q8'

export const SectionVideo = ({ className }: SectionVideoProps) => {
  return (
    <div className={className}>
      <div className={styles['video-container']}>
        <VideoPlayer
          className={styles['video-player']}
          url={MAIN_VIDEO_URL}
          width={'100%'}
          height={'100%'}
        />
      </div>
    </div>
  )
}
