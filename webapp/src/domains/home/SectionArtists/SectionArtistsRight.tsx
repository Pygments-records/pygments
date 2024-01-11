import cx from 'classnames'

type SectionArtistsProps = {
  color: string
  title: string
  className?: string
  placement?: 'left' | 'right'
}

export const SectionArtistRight = ({
  color,
  title,
  className,
  placement = 'left',
}: SectionArtistsProps) => (
  <div className={cx('w-screen flex', className)}>
    <div className={cx('w-10/12 h-72 ml-auto justify-start shadow-lg flex rounded-s ')}>
      <div className={'w-1/2 h-full order-last'}>
        <img src={'/kojo_cover.jpg'} alt={'cover_kojo'} className={'w-full h-full bg-cover'} />
      </div>
      <div
        className={cx(
          color,
          'flex relative',
          {
            ['mr-auto justify-end pr-6']: placement === 'left',
            ['ml-auto justify-start pl-6']: placement === 'right',
          },
          'w-7/12 h-full',
        )}
      >
        <div
          className={
            'bg-orange h-1/6 w-40 sm:w-10 md:w-20 lg:w-40 absolute bottom-0 -right-20 sm:-right-5 md:-right-10 lg:-right-20'
          }
        ></div>
        <div className={'pt-20'}>
          <p className={'break-normal font-pygments font-normal text-white text-3xl text-left'}>
            {title}
          </p>
          <p className={'font-pygments font-normal text-white text-base text-left'}>05.05.2022</p>
        </div>
      </div>
    </div>
  </div>
)
