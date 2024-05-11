'use client'

import Image from 'next/image'
import {useEffect, useState} from 'react'

export default function CountDown({timecountdown}) {
  const [time, setTime] = useState({})
  const [isClientSide, setIsClientSide] = useState(false)

  // useEffect(() => {
  //   // Đánh dấu là đã ở phía client
  //   setIsClientSide(true)

  //   // Bắt đầu đồng hồ khi ở phía client
  //   const timer =
  //     isClientSide &&
  //     setInterval(() => {
  //       const now = new Date(new Date().getTime() + 0 * 3600 * 1000)
  //       setTime(now)
  //     }, 1000)

  //   return () => clearInterval(timer) // Dọn dẹp khi component unmount
  // }, [isClientSide])

  // Định dạng thời gian để hiển thị
  // fake thời gian
  // định dạng nhận vào "yyyy-mm-dd hh:mm:ss"
  const timeNew = timecountdown ? timecountdown : '2024-04-20 20:00:00'
  const calculateTimeLeft = () => {
    const difference = +new Date(timeNew.replace(' ', 'T')) - +new Date()
    let time = {}

    if (difference > 0) {
      time = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return time
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time
  }

  // {${formatTime(time.getHours())}:${formatTime(time.getMinutes())}:${formatTime(time.getSeconds())}}
  // background: radial-gradient(circle, rgba(233,233,233,0.6671918767507004) 22%, rgba(240,240,240,0) 65%);
  return (
    <div className='flex relative *:ml-[0.5rem] xmd:*:ml-[0.26rem]'>
      <div className='absolute size-full'>
        {/* <div className='bg-[radial-gradient(circle,rgba(233,214,105,0.6896008403361344)_2%,rgba(241,241,241,0.4010854341736695)_81%)]'></div> */}
      </div>
      <div className='w-[5.12445rem] h-[3.95315rem] xmd:w-[2.63543rem] xmd:h-[2.04525rem] flex justify-center items-center rounded-[0.29283rem] xmd:rounded-[0.58565rem] xmd:shadow-[0px_0.447px_8.491px_0px_rgba(255,255,255,0.22)] ml-0 shadow-[0px_1px_19px_0px_rgba(255,255,255,0.22)] relative'>
        <Image
          className='absolute top-0 left-0 size-full rounded-[0.29283rem] xmd:rounded-[0.58565rem]'
          src={'/home/border-left-fl.svg'}
          alt='border'
          width={70}
          height={54}
        />
        <Image
          className='absolute object-cover xmd:h-[1.653rem] xmd:w-[2.30124rem] size-[5.19766rem] -top-1/2 -left-1/2 md:translate-y-[-0.75rem] xmd:translate-y-[0.2rem] xmd:translate-x-[0.2rem]'
          alt=''
          src={'/home/line-star.png'}
          width={117}
          height={159.42}
        />
        <span className='text-[2.04978rem] xmd:text-[1.1713rem] leading-[1.2] font-bold bg-[linear-gradient(99deg,#FFF0D8_-58.6%,#E99207_95.15%)] bg-clip-text text-transparent relative z-10'>
          {time?.seconds
            ? time?.days > 0
              ? time.days * 24 + time.hours
              : formatTime(time?.hours)
            : '0'}
        </span>
      </div>
      <div className='w-[5.12445rem] h-[3.95315rem] xmd:w-[2.63543rem] xmd:h-[2.04525rem] flex justify-center items-center rounded-[0.29283rem] xmd:rounded-[0.58565rem] xmd:shadow-[0px_0.447px_8.491px_0px_rgba(255,255,255,0.22)] bg-white'>
        <span className='text-[2.04978rem] xmd:text-[1.1713rem] leading-[1.2] font-bold bg-[linear-gradient(99deg,#FFF0D8_-58.6%,#E99207_95.15%)] bg-clip-text text-transparent'>
          {time?.seconds ? formatTime(time?.minutes) : '0'}
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
        <Image
          className='absolute object-cover xmd:h-[1.653rem] xmd:w-[1.53734rem] size-[5.19766rem] -bottom-1/2 -right-1/2 md:translate-y-[0.75rem] xmd:translate-y-[-0.2rem] xmd:translate-x-[-0.8rem]'
          alt=''
          src={'/home/line-star-res.png'}
          width={117}
          height={159.42}
        />
        <span className='text-[2.04978rem] xmd:text-[1.1713rem] leading-[1.2] font-bold bg-[linear-gradient(99deg,#FFF0D8_-58.6%,#E99207_95.15%)] bg-clip-text text-transparent relative z-10'>
          {time?.seconds ? formatTime(time?.seconds) : '0'}
        </span>
      </div>
    </div>
  )
}
