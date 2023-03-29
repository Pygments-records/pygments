import { Heading } from "@ui-kit/components/heading/Heading";
import { Link } from "@ui-kit/components/link/Link";
import { FacebookIcon } from "@ui-kit/icons/FacebookIcon";
import { InstagramIcon } from "@ui-kit/icons/InstagramIcon";
import { YoutubeIcon } from "@ui-kit/icons/YoutubeIcon";

export const Footer = () => {
  return (
    <footer className="bg-purple font-pygments lg:text-left">
      <div className="container mx-auto py-8 px-4 lg:px-20">
        <div className="grid justify-center md:grid-cols-3">
          <div className="mb-6 text-center md:text-left">
            <ul className="text-white">
              <li className="mb-3 hover:underline">
                <Link href="#event">
                  <Heading as="span" size={7} extraBold={false}>
                    NEXT EVENT
                  </Heading>
                </Link>
              </li>
              <li className="mb-3 hover:underline">
                <Link href="#artist">
                  <Heading as="span" size={7} extraBold={false}>
                    ARTISTS
                  </Heading>
                </Link>
              </li>
              <li className="mb-3 hover:underline">
                <Link href="#project">
                  <Heading as="span" size={7} extraBold={false}>
                    THE PROJECT
                  </Heading>
                </Link>
              </li>
              <li>
                <Link href="#team" className="hover:underline">
                  <Heading as="span" size={7} extraBold={false}>
                    THE TEAM
                  </Heading>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-6 text-center md:text-left">
            <ul className="text-white list-none mb-0">
              <li className="mb-2">
                <Link
                  data-tooltip-target="tooltip-default"
                  href="https://pygments.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Heading as="span" size={7} extraBold={false}>
                    HISTORY
                  </Heading>
                </Link>
              </li>
              <div
                id="tooltip-default"
                role="tooltip"
                className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
              >
                Tooltip content
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <li className="mb-2">
                <Link href="mailto: pygments.records@gmail.com">
                  <Heading as="span" size={7} extraBold={false}>
                    CONTACT US
                  </Heading>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  data-tf-popup="wo6fZQMz"
                  data-tf-iframe-props="title=Join Pygments Records"
                  data-tf-medium="snippet"
                >
                  <Heading as="span" size={7} extraBold={false}>
                    JOIN THE PROJECT
                  </Heading>
                </Link>
                <Link>
                  <script src="//embed.typeform.com/next/embed.js" />
                </Link>
              </li>
              <li>
                <Link href="https://www.paypal.com/donate/?hosted_button_id=LYJW39SSR53P6">
                  <Heading as="span" size={7} extraBold={false}>
                    DONATION
                  </Heading>
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-white mb-6 last:mb-0 md:mb-0 text-center flex justify-end">
            <div className="flex flex-col">
              <Heading as="p" size={6}>
                FOLLOW US
              </Heading>
              <div className="flex justify-between items-start pt-3">
                <Link
                  href="https://www.facebook.com/profile.php?id=100076739332122"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon className="w-12 lg:w-16" />
                </Link>
                <Link
                  href="https://www.instagram.com/pygments.records/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon className="w-12 lg:w-16" />
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UCHhBg2Ks8-q3eQ94u2T7zoQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YoutubeIcon className="w-16 lg:w-20" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
