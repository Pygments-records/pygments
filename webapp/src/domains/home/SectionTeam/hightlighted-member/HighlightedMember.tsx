import { CloseIcon } from '@ui-kit/icons/CloseIcon'
import { motion } from 'framer-motion'
import { useState, useRef, useMemo } from 'react'
import type { MemberCard } from './model'
import { useClickOutside } from '@core/common/hooks/useClickOutside'
import { useLockBodyScroll } from '@core/common/hooks/useBlockScroll'
import { Fade } from '@core/common/components/fade/Fade'
import { Heading } from '@ui-kit/components/heading/Heading'
import { Text } from '@ui-kit/components/text/Text'
import { ExternalImage } from '@core/common/components/external-image/ExternalImage'

export type HighlightedMemberProps = {
  member: MemberCard
  onClose: () => void
}

export const HighlightedMember = ({
  member: { username, imgUrl, color, role, description },
  onClose,
}: HighlightedMemberProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [showContent, setShowContent] = useState(false)
  useClickOutside(cardRef, onClose)
  useLockBodyScroll()

  const memberInformation = useMemo(
    () => (
      <>
        <Fade
          as="div"
          initial={{ translateY: -20 }}
          animate={{ translateY: 0 }}
          duration={0.3}
          delay={0.05}
          className="text-4xl font-pygments font-bold"
        >
          <Heading as="p" size={4}>
            {username}
          </Heading>
        </Fade>
        <Fade
          as="div"
          initial={{ translateY: -20 }}
          animate={{ translateY: 0 }}
          duration={0.3}
          delay={0.1}
          className="text-xl font-medium"
        >
          <Text as="p" size="lg">
            {role}
          </Text>
        </Fade>
        <Fade
          as="div"
          initial={{ translateY: -20 }}
          animate={{ translateY: 0 }}
          duration={0.3}
          delay={0.15}
          className="text-md font-normal mt-4"
        >
          <Text as="p" weight="light" size="lg">
            {description}
          </Text>
        </Fade>
      </>
    ),
    [username, role, description],
  )

  const memberPicture = useMemo(
    () => (
      <div className="relative z-10 h-full w-full bg-black border-2 border-black">
        <ExternalImage src={imgUrl} layout="fill" objectFit="cover" alt={`${username} picture`} />
      </div>
    ),
    [imgUrl, username],
  )

  return (
    <>
      <div className="z-50 fixed inset-0 lg:bg-[rgba(0,0,0,0.3)] lg:flex lg:justify-center lg:items-center lg:pb-0">
        <motion.div
          ref={cardRef}
          layoutId={username}
          className="bg-white lg:bg-none h-full lg:h-[unset]"
        >
          <div className="overflow-auto h-full flex flex-col lg:hidden">
            <div className="flex-shrink-0 relative h-[400px] w-full">{memberPicture}</div>
            <div className="p-6 pb-24">{memberInformation}</div>
            <div
              className="fixed bottom-0 left-0 right-0 flex justify-center items-center p-4"
              style={{ background: 'linear-gradient(0deg, white, transparent)' }}
            >
              <button
                onClick={onClose}
                className={`px-12 py-3 bg-${color} rounded-full text-white font-pygments`}
              >
                Close
              </button>
            </div>
          </div>
          <div className="hidden lg:flex lg:flex-row">
            <div className="relative h-[300px] w-[300px]">
              {memberPicture}
              <Fade
                type="out"
                initial={{ translateX: 0 }}
                animate={{ translateX: 20 }}
                delay={0.2}
                duration={0.3}
                className={`absolute border-8 border-${color} top-[10px] left-[10px] bottom-[-10px] right-[-10px]`}
              />
            </div>
            <Fade
              initial={{ width: 0 }}
              animate={{ width: 500 }}
              delay={0.1}
              duration={0.5}
              onAnimationComplete={() => setShowContent(true)}
              className={`bg-white relative border-8 border-${color} left-[-8px] bottom-[-10px] p-[20px]`}
            >
              {showContent && (
                <>
                  {memberInformation}
                  <button className="absolute top-5 right-5" onClick={onClose}>
                    <CloseIcon height={40} width={40} className={`text-${color}`} />
                  </button>
                </>
              )}
            </Fade>
          </div>
        </motion.div>
      </div>
    </>
  )
}
