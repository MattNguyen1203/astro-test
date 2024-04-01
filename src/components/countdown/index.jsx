'use client'

import React, {useState, useEffect, memo} from 'react'

function CountDown({endTime}) {
  const calculateTimeLeft = () => {
    const difference = +new Date(endTime) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      let timeLeftRes = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }

      const dayRes =
        timeLeftRes.days < 10
          ? '0' + timeLeftRes.days + ' ngày'
          : timeLeftRes.days + ' ngày'
      const hourRes =
        timeLeftRes.hours < 10
          ? '0' + timeLeftRes.hours + ':'
          : timeLeftRes.hours + ':'

      const minRes =
        timeLeftRes.minutes < 10
          ? '0' + timeLeftRes.minutes + ':'
          : timeLeftRes.minutes + ':'

      const seconds =
        timeLeftRes.seconds < 10
          ? '0' + timeLeftRes.seconds
          : timeLeftRes.seconds

      timeLeft = {
        days: dayRes,
        hours: hourRes,
        minutes: minRes,
        seconds: seconds,
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearTimeout(timer)
  }, [timeLeft])

  return (
    <span>
      [ {timeLeft.days} {timeLeft.hours}
      {timeLeft.minutes}
      {timeLeft.seconds} ]
    </span>
  )
}

export default CountDown
