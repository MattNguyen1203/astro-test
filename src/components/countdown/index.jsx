'use client'

import {useState, useEffect, memo} from 'react'

function CountDown({endTime}) {
  const parseDateString = (dateStr) => {
    // Assuming the format is "YYYYMMDD"
    const year = parseInt(dateStr.substring(0, 4), 10)
    const month = parseInt(dateStr.substring(4, 6), 10) - 1 // month index starts from 0 in JS
    const day = parseInt(dateStr.substring(6, 8), 10)
    return new Date(year, month, day)
  }

  const calculateTimeLeft = () => {
    const difference = parseDateString(endTime) - new Date()
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / 1000 / 60) % 60)
      const seconds = Math.floor((difference / 1000) % 60)
      return {
        days: days < 10 ? `0${days} ngày` : `${days} ngày`,
        hours: hours < 10 ? `0${hours}:` : `${hours}:`,
        minutes: minutes < 10 ? `0${minutes}:` : `${minutes}:`,
        seconds: seconds < 10 ? `0${seconds}` : `${seconds}`,
      }
    }
    return {days: '', hours: '', minutes: '', seconds: ''}
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft()
      setTimeLeft(newTimeLeft)
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
