import cx from 'classnames'
import { useEffect, useState } from 'react'

type CountDownProps = {
  id: string
  countTo: string
  color: string
  title: string
  className?: string
  placement?: 'left' | 'right'
}

export const CountDown = ({ id, color, countTo, className }: CountDownProps) => {
  const [countdownDate] = useState(new Date(countTo).getTime())
  const [, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [stateDisplay] = useState({
    display_days: '',
    display_hours: '',
    display_minutes: '',
    display_seconds: '',
  })

  useEffect(() => {
    const tick = setInterval(() => setNewTime(), 1000)
    return () => clearInterval(tick)
  })

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime()

      const distanceToDate = countdownDate - currentTime

      const days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distanceToDate % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000)
      const numbersToAddZeroTo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      if (numbersToAddZeroTo.includes(days)) {
        stateDisplay.display_days = `0${days}`
      } else stateDisplay.display_days = `${days}`
      if (numbersToAddZeroTo.includes(hours)) {
        stateDisplay.display_hours = `0${hours}`
      } else stateDisplay.display_hours = `${hours}`
      if (numbersToAddZeroTo.includes(minutes)) {
        stateDisplay.display_minutes = `0${minutes}`
      } else stateDisplay.display_minutes = `${minutes}`
      if (numbersToAddZeroTo.includes(seconds)) {
        stateDisplay.display_seconds = `0${seconds}`
      } else {
        stateDisplay.display_seconds = `${seconds}`
      }
      setState({ days: days, hours: hours, minutes: minutes, seconds: seconds })
    }
  }

  return (
    <div id={id} className={className}>
      <div className="container text-center">
        <div
          className={cx(
            'w-screen font-pygments grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-3 place-items-center text-center flex mb-10',
            color,
          )}
        >
          <div className="float-left">
            <h1 className="text-7xl md:text-8xl">{stateDisplay.display_days || '00'}</h1>
            <p className="text-2xl md:text-3xl">Days</p>
          </div>
          <div className="float-left">
            <h1 className="text-7xl  md:text-8xl">{stateDisplay.display_hours || '00'}</h1>
            <p className="text-2xl md:text-3xl">Hours</p>
          </div>
          <div className="float-left">
            <h1 className="text-7xl md:text-8xl">{stateDisplay.display_minutes || '00'}</h1>
            <p className="text-2xl md:text-3xl">Minutes</p>
          </div>
          <div className="float-left">
            <h1 className="text-7xl md:text-8xl">{stateDisplay.display_seconds || '00'}</h1>
            <p className="text-2xl md:text-3xl">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  )
}
