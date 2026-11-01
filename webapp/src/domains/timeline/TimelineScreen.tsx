import { PageLayout } from '@core/common/layouts/PageLayout/PageLayout'
import React from 'react'

// Import Swiper styles (used by the photo gallery of an opened event)
import 'swiper/css'
import { TimelinePiste } from './piste/TimelinePiste'
import type { Event } from '@core/event/data/EventModel'

type TimelineScreenProps = {
  events: Event[]
}

export const TimelineScreen = ({ events }: TimelineScreenProps) => {
  return (
    <PageLayout className="bg-darkPurple">
      <TimelinePiste events={events} />
    </PageLayout>
  )
}
