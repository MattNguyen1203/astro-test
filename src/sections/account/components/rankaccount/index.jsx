'use client'

import {useState} from 'react'
import CardRank from './CardRank'
import Image from 'next/image'
import ExpRank from './ExpRank'

const arr = [
  {
    namerank: 'MỚI',
    bg: 'linear-gradient(99deg, #28AC4D 9.91%, #55CF42 51.9%, #51AF07 100%)',
  },
  {
    namerank: 'BẠC',
    bg: 'linear-gradient(99deg, #464646 0%, #535353 50.5%, #D7D7D7 100%)',
  },
  {
    namerank: 'VÀNG',
    bg: 'linear-gradient(99deg, #FFA800 0%, rgba(254, 107, 0, 0.73) 51.5%, #FBC400 100%)',
  },
  {
    namerank: 'KIM CƯƠNG',
    bg: 'linear-gradient(99deg, #058FF2 0%, #81AFFF 59%, #00E0FF 100%)',
  },
]

export default function RackAccount() {
  const [isActive, setIsActive] = useState(null)

  return (
    <div className='flex flex-col items-start'>
      <div className='w-[50.87848rem] xmd:w-[26.28111rem] flex flex-col p-[1.1713rem] justify-center items-start rounded-[0.58565rem] bg-white shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)]'>
        <div className='flex xmd:flex-col w-full justify-between items-center xmd:items-start'>
          <div className='flex justify-center items-center'>
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
              <span className='body2 font-normal text-greyscale-40'>
                15/01/2024
              </span>
            </div>
          </div>
          <div className='lg:hidden w-[23.93851rem] h-[0.07321rem] my-[0.87848rem] bg-[rgba(236,236,236,0.70)]'></div>
          <div className='xmd:hidden flex justify-center items-center '>
            <Image
              width={36}
              height={36}
              alt='icon lich'
              src={'/account/icon_rank.svg'}
            />
            <div className='flex flex-col justify-center items-start ml-[0.87848rem]'>
              <p className='mb-[0.29283rem] sub2 font-medium text-[#0D1F33]'>
                Hạng thành viên
              </p>
              <span className='body2 font-normal text-greyscale-40'>Vàng</span>
            </div>
          </div>
          <div className='flex justify-center items-center'>
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
              <span className='body2 font-normal text-greyscale-40'>
                2.650.000đ
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex overflow-hidden xmd:flex-col my-[0.58565rem] justify-start relative items-center xmd:items-start w-[50.8784rem] xmd:w-[26.86676rem] lg:h-[10.6881rem] rounded-[0.58565rem] xmd:shadow-[2px_2px_12px_0px_rgba(0, 0, 0, 0.02)_-3px_2px_20px_0px_rgba(0,0,0,0.04)]'>
        <ExpRank />
      </div>
      <div className='flex flex-col w-[50.87848rem] xmd:w-[26.28111rem] items-start py-[1.1713rem] rounded-[0.58565rem] bg-white'>
        <div className='flex items-start pl-[1.1713rem]'>
          <p className='sub2 font-medium text-greyscale-80'>
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
