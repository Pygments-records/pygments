import { Title } from '@core/common/components/title/Title'
import { useTranslation } from '@core/i18n/useTranslation'
import { Heading } from '@ui-kit/components/heading/Heading'
import { Text } from '@ui-kit/components/text/Text'
import React from 'react'
import cx from 'classnames'
import { homeNamespaces } from '../homeNamespaces'

type ProjectDescriptionProps = {
  className?: string
}

export const ProjectDescription = ({ className }: ProjectDescriptionProps) => {
  const { t } = useTranslation(homeNamespaces)
  return (
    <section className={cx('flex flex-col', className)}>
      <Title className="mb-[120px]">{t('home:project-section.title')}</Title>
      <section className="grid grid-flow-col grid-rows-3 grid-cols-none lg:grid-rows-none lg:grid-cols-3 justify-center px-8 md:px-20 gap-12">
        <article className="max-w-[400px] border border-white p-8 flex flex-col gap-6">
          <Heading
            as="p"
            size={6}
            className="mb-20 md:mb-12 xl:mb-20 text-orange whitespace-nowrap	"
          >
            (Lab)el
          </Heading>
          <Text as="p" className="text-white">
            Un Jeu de mots, entre notre incubateur d’artistes sous le concept de Pygments Lab et notre label qui sera lancé en 2024.
          </Text>
        </article>
        <article className="max-w-[400px] border border-white p-8 flex flex-col gap-6">
          <Heading
            as="p"
            size={6}
            className="mb-20 md:mb-12 xl:mb-20 text-skyBlue whitespace-nowrap	"
          >
            Party Crew
          </Heading>
          <Text as="p" className="text-white">
            Organisations et création de concept d’événements.
          </Text>
        </article>
        <article className="max-w-[400px] border border-white p-8 flex flex-col gap-6">
          <Heading
            as="p"
            size={6}
            className="mb-20 md:mb-12 xl:mb-20 text-purple whitespace-nowrap	"
          >
            Live Stream
          </Heading>
          <Text as="p" className="text-white">
            L’élément audiovisuel qui inscrit notre projet dans la dimension digitale du monde d’aujourd’hui.
          </Text>
        </article>
      </section>
    </section>
  )
}
