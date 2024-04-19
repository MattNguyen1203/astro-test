'use client'
import {useState, useEffect} from 'react'

const CountdownTimer = ({isReCount}) => {
  // Khởi tạo state với giá trị ban đầu là 60 giây
  const [isClientSide, setIsClientSide] = useState(false)
  const [seconds, setSeconds] = useState(60)

  useEffect(() => {
    isClientSide && setSeconds(60)
  }, [isReCount])

  useEffect(() => {
    setIsClientSide(true)
    // Nếu seconds > 0, thì sau mỗi giây, giảm giá trị đi 1
    const timerId =
      isClientSide &&
      seconds > 0 &&
      setInterval(() => setSeconds(seconds - 1), 1000)

    // Dọn dẹp khi unmount
    return () => clearInterval(timerId)
  }, [seconds, isClientSide])

  return <span>{seconds}s</span>
}

export default CountdownTimer
