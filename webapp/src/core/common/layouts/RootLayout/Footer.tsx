import { ExternalLink } from '@ui-kit/components/external-link/ExternalLink'
import { Text } from '@ui-kit/components/text/Text'
import {PygmentsIcon} from "@ui-kit/icons/PygmentsIcon";

export const Footer = () => {
  return (
    <footer className="font-pygments" style={{ background: '#408BB5', color: '#2E2E38' }}>
      <div className="container mx-auto px-8 py-4 flex justify-between text-white">
        <div>
          <Text className="font-bold">Network</Text>
          <ExternalLink href="https://www.instagram.com/pygments.records/"><Text>Instagram</Text></ExternalLink>
          <ExternalLink href="https://www.youtube.com/@pygmentsrecords"><Text>You-Tube</Text></ExternalLink>
          <ExternalLink href="https://www.facebook.com/profile.php?id=100076739332122"><Text>Facebook</Text></ExternalLink>
          <ExternalLink href="https://soundcloud.com/pygments-records"><Text>SoundCloud</Text></ExternalLink>
          <ExternalLink href="https://www.tiktok.com/@pygments"><Text>TikTok</Text></ExternalLink>
        </div>
        <div>
          <Text className="font-bold">PartyCrew</Text>
          <ExternalLink href="https://shotgun.live/fr/venues/pygments-records"><Text>Shotgun</Text></ExternalLink>
          <ExternalLink href="https://fr.ra.co/promoters/121656"><Text>RA</Text></ExternalLink>
          <ExternalLink href="http://pygments.io/timeline"><Text>Timeline</Text></ExternalLink>
        </div>
        <div>
          <Text className="font-bold">Artists</Text>
          <ExternalLink href="#"><Text>Residents</Text></ExternalLink>
          <ExternalLink href="#"><Text>Agency</Text></ExternalLink>
        </div>
        <div>
          <Text className="font-bold">(Lab)el</Text>
          <Text>Coming soon</Text>
        </div>
        <div>
          <ExternalLink href="mailto:pygments.records@gmail.com">
            <Text className="text-darkPurple hover:underline  text-white">Contact us !</Text>
          </ExternalLink>
        </div>
      </div>
      <PygmentsIcon className="w-[150px] lg:w-[200px] cursor-pointer justify-center" />
      <div className="text-center text-white">
        <Text className="text-sm">© 2024 All rights reserved to Pygments Records. Website by @Ruben de Andrade</Text>
      </div>
    </footer>
  )
}
