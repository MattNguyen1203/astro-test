'use client'

import Image from 'next/image'
import {useEffect, useState} from 'react'

export default function CountDown() {
  const [time, setTime] = useState(null)
  const [isClientSide, setIsClientSide] = useState(false)

  useEffect(() => {
    // Đánh dấu là đã ở phía client
    setIsClientSide(true)

    // Bắt đầu đồng hồ khi ở phía client
    const timer =
      isClientSide &&
      setInterval(() => {
        const now = new Date(new Date().getTime() + 0 * 3600 * 1000)
        setTime(now)
      }, 1000)

    return () => clearInterval(timer) // Dọn dẹp khi component unmount
  }, [isClientSide])

  // Định dạng thời gian để hiển thị
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time
  }

  // {${formatTime(time.getHours())}:${formatTime(time.getMinutes())}:${formatTime(time.getSeconds())}}

  return (
    <div className='flex *:ml-[0.5rem] xmd:*:ml-[0.26rem]'>
      <div className='w-[5.12445rem] h-[3.95315rem] xmd:w-[2.63543rem] xmd:h-[2.04525rem] flex justify-center items-center rounded-[0.29283rem] xmd:rounded-[0.58565rem] xmd:shadow-[0px_0.447px_8.491px_0px_rgba(255,255,255,0.22)] ml-0 shadow-[0px_1px_19px_0px_rgba(255,255,255,0.22)] relative'>
        <Image
          className='absolute top-0 left-0 size-full rounded-[0.29283rem] xmd:rounded-[0.58565rem]'
          src={'/home/border-left-fl.svg'}
          alt='border'
          width={70}
          height={54}
        />
        <span className='text-[2.04978rem] xmd:text-[1.1713rem] leading-[1.2] font-bold bg-[linear-gradient(99deg,#FFF0D8_-58.6%,#E99207_95.15%)] bg-clip-text text-transparent relative z-10'>
          {time && formatTime(time.getHours())}
        </span>
      </div>
      <div className='w-[5.12445rem] h-[3.95315rem] xmd:w-[2.63543rem] xmd:h-[2.04525rem] flex justify-center items-center rounded-[0.29283rem] xmd:rounded-[0.58565rem] xmd:shadow-[0px_0.447px_8.491px_0px_rgba(255,255,255,0.22)] bg-white'>
        <span className='text-[2.04978rem] xmd:text-[1.1713rem] leading-[1.2] font-bold bg-[linear-gradient(99deg,#FFF0D8_-58.6%,#E99207_95.15%)] bg-clip-text text-transparent'>
          {time && formatTime(time.getMinutes())}
        </span>
      </div>
      <div className='w-[5.12445rem] h-[3.95315rem] xmd:w-[2.63543rem] xmd:h-[2.04525rem] flex justify-center items-center rounded-[0.29283rem] xmd:rounded-[0.58565rem] xmd:shadow-[0px_0.447px_8.491px_0px_rgba(255,255,255,0.22)] relative '>
        <Image
          className='absolute top-0 left-0 size-full rounded-[0.29283rem] xmd:rounded-[0.58565rem]'
          src={'/home/border-right-fl.svg'}
          alt='border'
          width={70}
          height={54}
        />
        <span className='text-[2.04978rem] xmd:text-[1.1713rem] leading-[1.2] font-bold bg-[linear-gradient(99deg,#FFF0D8_-58.6%,#E99207_95.15%)] bg-clip-text text-transparent relative z-10'>
          {time && formatTime(time.getSeconds())}
        </span>
      </div>
    </div>
  )
}
