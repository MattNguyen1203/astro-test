'use client'

import Image from 'next/image'
import {useEffect, useState} from 'react'

export default function CardRank({item, id, isActive, setIsActive}) {
  const [width, setWidth] = useState('')
  useEffect(() => {
    window.innerWidth <= 768 ? setWidth(0) : setWidth('auto')
  })

  const handleClick = () => {
    if (window.innerWidth >= 768) {
      return
    }
    if (isActive === id) {
      setIsActive(null)
    } else {
      setIsActive(id)
    }
  }
  return (
    <>
      {id === 0 ? (
        <div className='w-[50.87848rem] xmd:w-[26.28111rem] h-[0.07321rem] bg-[rgba(218,218,218,0.70)] my-[1.1713rem]'></div>
      ) : (
        <div className='xmd:hidden w-[50.87848rem] xmd:w-[26.28111rem] h-[0.07321rem] bg-[rgba(218,218,218,0.70)] my-[1.76rem]'></div>
      )}
      <div className='flex w-full flex-col items-start px-[1.0981rem]'>
        <div
          onClick={handleClick}
          style={{
            background: `${item?.bg}`,
          }}
          className={`flex items-center w-full p-[0.87848rem] mb-[1.17rem] rounded-[0.43924rem] shadow-[4px_4px_8px_0px_rgba(83,118,209,0.10)] bg-gradient-to-l`}
        >
          <div className='w-[19.3631rem] flex flex-col justify-center items-start'>
            <span className='mb-[0.44rem] text-white font-svnGraphik font-semibold leading-[1.05417rem] text-[0.87848rem]'>
              THÀNH VIÊN
            </span>
            <p className='text-white font-svnGraphik font-bold leading-[1.46413rem ] text-[1.46413rem]'>
              {item?.namerank}
            </p>
          </div>
          <div className='lg:hidden flex w-[2.34261rem] h-[2.34261rem] p-[0.65871rem] justify-center items-center rounded-[0.29283rem]'>
            {isActive === id ? (
              <Image
                width={14}
                height={14}
                alt='icon remove'
                src={'/account/icon-remove.svg'}
              />
            ) : (
              <Image
                width={14}
                height={14}
                alt='icon add'
                src={'/account/icon-add.svg'}
              />
            )}
          </div>
        </div>
        <div
          style={{
            height: isActive === id ? '16rem' : `${width}`,
          }}
          className={`${
            isActive === id ? 'xmd:mb-[1.17rem]' : ''
          } flex flex-col items-start xmd:overflow-hidden transition-all duration-500`}
        >
          <div className='flex flex-col items-start mb-[1.17rem]'>
            <p className='sub2 text-black font-bold mb-[0.59rem]'>Điều kiện:</p>
            <div className='flex flex-col items-start justify-center'>
              <span className='font-normal body2 text-greyscale-40'>
                - Tổng giá trị hóa đơn từ 12.000.000/năm
              </span>
              <span className='my-[0.58565rem] body2 font-normal text-greyscale-40'>
                - Điều kiện nâng hạng thẻ GOLD MEMBERSHIP:
              </span>
              <span className='font-normal body2 text-greyscale-40'>
                - Điều kiện gia hạn thẻ GOLD MEMBERSHIP:
              </span>
            </div>
          </div>
          <div className='flex flex-col items-start'>
            <p className='sub2 text-black font-bold mb-[0.59rem]'>Quyền lợi:</p>
            <div className='flex flex-col items-start justify-center'>
              <span className='font-normal body2 text-greyscale-40'>
                - Tổng giá trị hóa đơn từ 12.000.000/năm
              </span>
              <span className='my-[0.58565rem] body2 font-normal text-greyscale-40'>
                - Điều kiện nâng hạng thẻ GOLD MEMBERSHIP:
              </span>
              <span className='font-normal body2 text-greyscale-40'>
                - Điều kiện gia hạn thẻ GOLD MEMBERSHIP:
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
