import React from 'react'
import cx from 'classnames'
import { Title } from '@core/common/components/title/Title'
import { useTranslation } from '@core/i18n/useTranslation'
import { homeNamespaces } from '@domains/home/homeNamespaces'
import { Text } from '@ui-kit/components/text/Text'
import type { Staff } from '@core/staff/data/StaffModel'
import { NextImage } from '@core/common/components/image/Image'
import { Heading } from '@ui-kit/components/heading/Heading'
import styles from './StaffList.module.css'

type StaffListProps = {
  className?: string
  staff: Staff[]
}

export const StaffList = ({ staff, className }: StaffListProps) => {
  const { t } = useTranslation(homeNamespaces)
  return (
    <section className={cx('flex flex-col', className)}>
      <Title className="mb-12 lg:mb-[120px]">{t('home:team-section.title')}</Title>
      <ul className={styles['team-container']}>
        {staff.map((staff) => (
          <li key={staff._id} className="w-[280px]">
            <article className={cx('flex-col h-[400px] relative rounded-sm overflow-hidden')}>
              <NextImage layout="fill" objectFit="cover" src={staff.picture.url} />
            </article>
            <footer className="py-4 px-2">
              <Heading as="p" size={4} className="text-white">
                {staff.name}
              </Heading>
              <Text as="p" size="lg" className="text-purple">
                {staff.role}
              </Text>
            </footer>
          </li>
        ))}
      </ul>
    </section>
  )
}
