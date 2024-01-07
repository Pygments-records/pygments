import { PageLayout } from '@core/common/layouts/PageLayout/PageLayout'
import React from 'react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { TimelineMobileScreen } from './mobile/TimelineMobileScreen'
import { TimelineDesktopScreen } from './desktop/TimelineDesktopScreen'
import { useResponsive } from '@core/common/hooks/useResponsive'
import type { Event } from '@core/event/data/EventModel'

type TimelineScreenProps = {
  events: Event[]
}

export const TimelineScreen = ({ events }: TimelineScreenProps) => {
  const { isMobileSize } = useResponsive()
  if (isMobileSize === undefined) {
    return null
  }
  return (
    <PageLayout withFooter={false} className="bg-darkPurple" transparentHeader={false}>
      {isMobileSize ? (
        <div className="lg:hidden h-full">
          <TimelineMobileScreen events={events} />
        </div>
      ) : (
        <TimelineDesktopScreen events={events} />
      )}
    </PageLayout>
  )
}
