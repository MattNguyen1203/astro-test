'use client'

import Image from 'next/image'
import {useEffect, useState} from 'react'

export default function BannerFlashSale({isMobile}) {
  const [timeLeft, setTimeLeft] = useState({})
  // feka thời gian
  const time = '2024-04-30 00:00:00'

  const calculateTimeLeft = () => {
    const difference = +new Date(time.replace(' ', 'T')) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time
  }

  return (
    <section className='relative'>
      <Image
        className='w-full object-cover h-[41.28843rem] 3xl:h-[56.28843rem] xmd:h-[22.98682rem]'
        src={isMobile ? '/flashsale/banner-res.jpg' : '/flashsale/banner.jpg'}
        alt='banner'
        width={isMobile ? 380 : 1400}
        height={isMobile ? 320 : 600}
        quality={100}
        priority
      />
      <div className='absolute top-0 left-0 size-full'>
        <div className='flex size-full justify-center items-center space-x-[1.17rem]'>
          <div className='flex flex-col justify-center items-center size-[4.68521rem] rounded-[0.58565rem] bg-gradient-to-b from-[#FFF0D8] to-[#FFD797] shadow-[2px_2px_4px_0px_rgba(25,22,18,0.20)_inset]'>
            <span className='h5 font-bold text-[#17395C]'>
              {timeLeft?.days && formatTime(timeLeft?.days)}
            </span>
            <span className='sub2 font-medium bg-clip-text bg-gradient-to-t from-[#102841] to-[#1359A1]'>
              ngày
            </span>
          </div>
          <div className='flex flex-col justify-center space-y-[0.59rem] h-[4.68521rem]'>
            <div className='size-[0.58565rem] bg-gradient-to-t from-[#FFF0D8] to-[#FFD797] rounded-full'></div>
            <div className='size-[0.58565rem] bg-gradient-to-t from-[#FFF0D8] to-[#FFD797] rounded-full'></div>
          </div>
          <div className='flex flex-col justify-center items-center size-[4.68521rem] rounded-[0.58565rem] bg-gradient-to-b from-[#FFF0D8] to-[#FFD797] shadow-[2px_2px_4px_0px_rgba(25,22,18,0.20)_inset]'>
            <span className='h5 font-bold text-[#17395C]'>
              {timeLeft?.hours && formatTime(timeLeft?.hours)}
            </span>
            <span className='sub2 font-medium bg-clip-text bg-gradient-to-t from-[#102841] to-[#1359A1]'>
              giờ
            </span>
          </div>
          <div className='flex flex-col justify-center space-y-[0.59rem] h-[4.68521rem]'>
            <div className='size-[0.58565rem] bg-gradient-to-t from-[#FFF0D8] to-[#FFD797] rounded-full'></div>
            <div className='size-[0.58565rem] bg-gradient-to-t from-[#FFF0D8] to-[#FFD797] rounded-full'></div>
          </div>
          <div className='flex flex-col justify-center items-center size-[4.68521rem] rounded-[0.58565rem] bg-gradient-to-b from-[#FFF0D8] to-[#FFD797] shadow-[2px_2px_4px_0px_rgba(25,22,18,0.20)_inset]'>
            <span className='h5 font-bold text-[#17395C]'>
              {timeLeft?.minutes && formatTime(timeLeft?.minutes)}
            </span>
            <span className='sub2 font-medium bg-clip-text bg-gradient-to-t from-[#102841] to-[#1359A1]'>
              phút
            </span>
          </div>
          <div className='flex flex-col justify-center space-y-[0.59rem] h-[4.68521rem]'>
            <div className='size-[0.58565rem] bg-gradient-to-t from-[#FFF0D8] to-[#FFD797] rounded-full'></div>
            <div className='size-[0.58565rem] bg-gradient-to-t from-[#FFF0D8] to-[#FFD797] rounded-full'></div>
          </div>
          <div className='flex flex-col justify-center items-center size-[4.68521rem] rounded-[0.58565rem] bg-gradient-to-b from-[#FFF0D8] to-[#FFD797] shadow-[2px_2px_4px_0px_rgba(25,22,18,0.20)_inset]'>
            <span className='h5 font-bold text-[#17395C]'>
              {timeLeft?.seconds && formatTime(timeLeft?.seconds)}
            </span>
            <span className='sub2 font-medium bg-clip-text bg-gradient-to-t from-[#102841] to-[#1359A1]'>
              giây
            </span>
          </div>
        </div>
      </div>
      {/* <div className='flex justify-center md:py-[1.54rem] bg-[#0A1A29] xmd:h-[5.49048rem] relative xmd:overflow-x-auto hidden-scrollbar'>
        <ul className='flex xmd:absolute xmd:top-0 xmd:left-0 xmd:items-center xmd:h-full xmd:w-fit xmd:px-[0.59rem]'>
          {new Array(isMobile ? 6 : 4).fill(0).map((_, index) => (
            <li
              className='first:ml-0 ml-[2.64rem] py-[0.88rem] px-[1.76rem] rounded-[7.5rem] w-fit button font-medium text-white border border-solid border-white xmd:ml-[0.59rem]'
              key={index}
            >
              Ipad
            </li>
          ))}
        </ul>
      </div> */}
    </section>
  )
}
