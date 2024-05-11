'use client'

import {useState, useEffect} from 'react'
import CardRank from './CardRank'
import Image from 'next/image'
import ExpRank from './ExpRank'
import useStore from '@/app/(store)/store'

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

export default function RackAccount({session, dataRank, isMobile}) {
  const [isActive, setIsActive] = useState(null)
  const [newFormat, setNewFormat] = useState('')
  const [rank, setRank] = useState('')
  const [linkRank, setLinkRank] = useState('')
  const setProgress = useStore((state) => state.setProgress)

  useEffect(() => {
    return () => {
      setProgress(100)
    }
  }, [])

  useEffect(() => {
    switch (session.memberlevel) {
      case '0':
        setLinkRank('/account/cup-start.svg')
        break
      case '1':
        setLinkRank('/account/cup-sivel.svg')
        break
      case '2':
        setLinkRank('/account/cup-gold.svg')
        break
      case '3':
        setLinkRank('/account/cup-kc.svg')
        break
      default:
        setLinkRank('/account/cup-start.svg')
    }

    if (session) {
      const dateObject = new Date(session.userRegistered)
      const day = String(dateObject.getDate()).padStart(2, '0')
      const month = String(dateObject.getMonth() + 1).padStart(2, '0')
      const year = dateObject.getFullYear()
      setNewFormat(`${day}/${month}/${year}`)
    }
    for (let i = Object.keys(dataRank).length - 1; i >= 0; i--) {
      if (parseInt(session.memberlevel) >= parseInt(dataRank[i].sort)) {
        setRank(dataRank[i].ten)
        break
      }
    }
  }, [session, dataRank])

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
                {newFormat}
              </span>
            </div>
          </div>
          <div className='lg:hidden w-[23.93851rem] h-[0.07321rem] my-[0.87848rem] bg-[rgba(236,236,236,0.70)]'></div>
          <div className='flex items-center justify-center xmd:hidden '>
            <Image
              width={36}
              height={36}
              alt='icon lich'
              src={linkRank}
            />
            <div className='flex flex-col justify-center items-start ml-[0.87848rem]'>
              <p className='mb-[0.29283rem] sub2 font-medium text-[#0D1F33]'>
                Hạng thành viên
              </p>
              <span className='font-normal body2 text-greyscale-40'>
                {rank}
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
                {parseInt(session.memberTotalCharge).toLocaleString('vi-VN')}đ
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white flex overflow-hidden xmd:flex-col my-[0.58565rem] justify-start relative items-center xmd:items-start w-[50.8784rem] xmd:w-full lg:h-[10.6881rem] rounded-[0.58565rem] xmd:shadow-[2px_2px_12px_0px_rgba(0, 0, 0, 0.02)_-3px_2px_20px_0px_rgba(0,0,0,0.04)]'>
        <ExpRank
          isMobile={isMobile}
          dataRank={dataRank}
          session={session}
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
