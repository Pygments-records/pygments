import { ExternalLink } from '@ui-kit/components/external-link/ExternalLink'
import { Text } from '@ui-kit/components/text/Text'

export const Footer = () => {
  return (
    <footer className="px-8 py-4 font-pygments flex justify-end" style={{ background: '#7F95D1' }}>
      <ExternalLink href="mailto:pygments.records@gmail.com">
        <Text className="text-darkPurple hover:underline">Contactez-nous!</Text>
      </ExternalLink>
    </footer>
  )
}
