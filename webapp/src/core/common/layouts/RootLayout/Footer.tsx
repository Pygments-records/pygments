import { ExternalLink } from '@ui-kit/components/external-link/ExternalLink'
import { Text } from '@ui-kit/components/text/Text'
import { PygmentsIcon } from '@ui-kit/icons/PygmentsIcon'
import styles from './Footer.module.css'
import { Link } from '@ui-kit/components/link/Link'
import { useTranslation } from '@core/i18n/useTranslation'
import NextLink from 'next/link'

export const Footer = () => {
  const { t } = useTranslation('common')
  return (
    <footer className={styles['footer']}>
      <section className={styles['navigation']}>
        <div>
          <Text size="lg" weight="bold">
            {t('footer.nav.network.label')}
          </Text>
          <ul className={styles['navigation-list']}>
            <li>
              <ExternalLink href="https://www.instagram.com/pygments.records/">
                <Text>{t('footer.nav.network.instagram')}</Text>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://www.youtube.com/@pygmentsrecords">
                <Text>{t('footer.nav.network.youtube')}</Text>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://www.facebook.com/profile.php?id=100076739332122">
                <Text>{t('footer.nav.network.facebook')}</Text>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://soundcloud.com/pygments-records">
                <Text>{t('footer.nav.network.soundcloud')}</Text>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://www.tiktok.com/@pygments">
                <Text>{t('footer.nav.network.tiktok')}</Text>
              </ExternalLink>
            </li>
          </ul>
        </div>
        <div>
          <Text size="lg" weight="bold">
            {t('footer.nav.party-crew.label')}
          </Text>
          <ul className={styles['navigation-list']}>
            <li>
              <ExternalLink href="https://shotgun.live/fr/venues/pygments-records">
                <Text>{t('footer.nav.party-crew.shotgun')}</Text>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://fr.ra.co/promoters/121656">
                <Text>{t('footer.nav.party-crew.ra')}</Text>
              </ExternalLink>
            </li>
            <li>
              <NextLink passHref={true} href="/timeline">
                <Link>
                  <Text>{t('footer.nav.party-crew.timeline')}</Text>
                </Link>
              </NextLink>
            </li>
            <li>
              <NextLink passHref={true} href="https://shop.pygments.fr/">
                <Link>
                  <Text>{t('footer.nav.party-crew.shop')}</Text>
                </Link>
              </NextLink>
            </li>
          </ul>
        </div>
        <div>
          <Text size="lg" weight="bold">
            {t('footer.nav.artists.label')}
          </Text>
          <ul className={styles['navigation-list']}>
            <li>
              <Link href="javascript:void(0)" className={styles['disabled']} aria-disabled="true">
                <Text>{t('footer.nav.artists.residents')}</Text>
              </Link>
            </li>
            <li>
              <Link href="javascript:void(0)" className={styles['disabled']} aria-disabled="true">
                <Text>{t('footer.nav.artists.agency')}</Text>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Text size="lg" weight="bold">
            {t('footer.nav.label.label')}
          </Text>
          <ul className={styles['navigation-list']}>
            <li>
              <Text className={styles['disabled']}>{t('footer.coming-soon')}</Text>
            </li>
          </ul>
        </div>
        <div className="lg:ml-auto">
          <ExternalLink href="mailto:contact@pygments.fr">
            <Text size="lg" weight="bold" className="text-darkPurple hover:underline text-white">
              {t('footer.contact-us')}
            </Text>
          </ExternalLink>
        </div>
      </section>
      <section className="flex flex-col items-center mt-4">
        <PygmentsIcon className="w-[150px] lg:w-[200px]" />
        <div className="text-white">
          <Text size="sm">{t('footer.copyright')}</Text>
        </div>
      </section>
    </footer>
  )
}
