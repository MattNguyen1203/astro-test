'use client'

import {useState, useEffect} from 'react'
import CardRank from './CardRank'
import Image from 'next/image'
import ExpRank from './ExpRank'
import useStore from '@/app/(store)/store'

const arr = [
  {
    id: 0,
    namerank: 'MỚI',
    bg: 'linear-gradient(99deg, #28AC4D 9.91%, #55CF42 51.9%, #51AF07 100%)',
  },
  {
    id: 1,
    namerank: 'BẠC',
    bg: 'linear-gradient(99deg, #464646 0%, #535353 50.5%, #D7D7D7 100%)',
  },
  {
    id: 2,
    namerank: 'VÀNG',
    bg: 'linear-gradient(99deg, #FFA800 0%, rgba(254, 107, 0, 0.73) 51.5%, #FBC400 100%)',
  },
  {
    id: 3,
    namerank: 'KIM CƯƠNG',
    bg: 'linear-gradient(99deg, #058FF2 0%, #81AFFF 59%, #00E0FF 100%)',
  },
]

export default function RackAccount({dataRank, isMobile, profile}) {
  const [isActive, setIsActive] = useState(null)

  const setProgress = useStore((state) => state.setProgress)

  useEffect(() => {
    return () => {
      setProgress(100)
    }
  }, [])

  const handleDateRegister = () => {
    if (profile) {
      let date = new Date(Number(profile?.date_register) * 1000) // Phải nhân với 1000 vì timestamp được tính bằng mili giây

      // Lấy ngày, tháng và năm từ đối tượng Date
      let day = date.getDate()
      let month = date.getMonth() + 1 // Tháng bắt đầu từ 0 nên phải cộng thêm 1
      let year = date.getFullYear()

      // Đảm bảo ngày và tháng luôn có 2 chữ số
      if (day < 10) {
        day = '0' + day
      }
      if (month < 10) {
        month = '0' + month
      }

      // Trả về chuỗi ngày/tháng/năm
      return day + '/' + month + '/' + year
    }
  }

  const handleTitleRank = () => {
    for (let i = Object.keys(dataRank).length - 1; i >= 0; i--) {
      if (parseInt(profile?.member_level) >= parseInt(dataRank[i].sort)) {
        return dataRank[i].ten
      }
    }
  }

  const handleSrcRank = () => {
    switch (profile?.member_level) {
      case '0':
        return '/account/cup-start.svg'
      case '1':
        return '/account/cup-sivel.svg'
      case '2':
        return '/account/cup-gold.svg'
      case '3':
        return '/account/cup-kc.svg'
      default:
        return '/account/cup-start.svg'
    }
  }

  return (
    <div className='flex flex-col items-start w-full xmd:pl-[0.59rem]'>
      <div className='w-[50.87848rem] xmd:w-full flex flex-col p-[1.1713rem] justify-center items-start rounded-[0.58565rem] bg-white shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)]'>
        <div className='flex items-center justify-between w-full xmd:flex-col xmd:items-start'>
          <div className='flex items-center justify-center'>
            <Image
              width={36}
              height={36}
              alt='icon lich'
              src={'/account/icon_calendar.svg'}
            />
            <div className='flex flex-col justify-center items-start ml-[0.87848rem]'>
              <p className='mb-[0.29283rem] sub2 font-medium text-[#0D1F33]'>
                Ngày tham gia
              </p>
              <span className='font-normal body2 text-greyscale-40'>
                {handleDateRegister()}
              </span>
            </div>
          </div>
          <div className='lg:hidden w-[23.93851rem] h-[0.07321rem] my-[0.87848rem] bg-[rgba(236,236,236,0.70)]'></div>
          <div className='flex items-center justify-center xmd:hidden '>
            <Image
              width={36}
              height={36}
              alt='icon rank customer'
              src={handleSrcRank()}
            />
            <div className='flex flex-col justify-center items-start ml-[0.87848rem]'>
              <p className='mb-[0.29283rem] sub2 font-medium text-[#0D1F33]'>
                Hạng thành viên
              </p>
              <span className='font-normal body2 text-greyscale-40'>
                {handleTitleRank()}
              </span>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <Image
              width={36}
              height={36}
              alt='icon lich'
              src={'/account/icon-gold.svg'}
            />
            <div className='flex flex-col justify-center items-start ml-[0.87848rem]'>
              <p className='mb-[0.29283rem] sub2 font-medium text-[#0D1F33]'>
                Đã chi tiêu
              </p>
              <span className='font-normal body2 text-greyscale-40'>
                {parseInt(profile?.member_total_charge).toLocaleString('vi-VN')}
                đ
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white flex overflow-hidden xmd:flex-col my-[0.58565rem] justify-start relative items-center xmd:items-start w-[50.8784rem] xmd:w-full lg:h-[10.6881rem] rounded-[0.58565rem] xmd:shadow-[2px_2px_12px_0px_rgba(0, 0, 0, 0.02)_-3px_2px_20px_0px_rgba(0,0,0,0.04)]'>
        <ExpRank
          isMobile={isMobile}
          dataRank={dataRank}
          profile={profile}
        />
      </div>
      <div className='flex flex-col w-[50.87848rem] xmd:w-[26.28111rem] items-start py-[1.1713rem] rounded-[0.58565rem] bg-white'>
        <div className='flex items-start pl-[1.1713rem]'>
          <p className='font-medium sub2 text-greyscale-80'>
            Chính sách khách hàng thân thiết
          </p>
        </div>
        <div className='flex flex-col items-start'>
          {arr.map((items, index) => (
            <CardRank
              item={items}
              id={index}
              key={index}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
