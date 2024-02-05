import { motion, useAnimation, useInView } from 'framer-motion'
import { ReactNode, useEffect, useRef } from 'react'
import cx from 'classnames'

type TitleProps = {
  children: ReactNode
  className?: string
}

export const Title = ({ children, className }: TitleProps) => {
  const ref = useRef(null)
  const textControls = useAnimation()
  const lineControls = useAnimation()
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    async function animateUnderline() {
      if (isInView) {
        await lineControls.start('visible')
      }
    }
    void animateUnderline()
  }, [lineControls, isInView])

  return (
    <div className={cx('flex justify-center items-center', className)}>
      <div className="flex flex-col justify-center items-center">
        <motion.h3
          ref={ref}
          animate={textControls}
          initial="hidden"
          variants={{
            visible: {
              opacity: 1,
              y: 0,
            },
            hidden: {
              opacity: 0,
              y: 20,
            },
          }}
          transition={{ type: 'spring', damping: 12, stiffness: 100 }}
          className="font-heading font-light tracking-[0.25em] text-center text-white text-3xl leading-10 lg:text-4xl lg:leading-11"
        >
          {children}
        </motion.h3>
        <motion.div
          animate={lineControls}
          variants={{
            visible: {
              width: '100%',
              left: '0%',
            },
            hidden: {
              width: '0%',
              left: '50%',
            },
          }}
          transition={{ duration: 0.5 }}
          initial="hidden"
          onAnimationComplete={() => void textControls.start('visible')}
          className="mt-4 h-[0.5px] opacity-50 bg-white"
        />
      </div>
    </div>
  )
}
