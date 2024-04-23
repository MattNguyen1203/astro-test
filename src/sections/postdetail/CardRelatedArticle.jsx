import React from 'react'
import Image from 'next/image'
const CardRelatedArticle = () => {
  return (
    <div className='flex flex-col items-start overflow-hidden w-[11.49341rem] md:w-[28.11127rem] xmd:gap-[0.58565rem] rounded-[0.87848rem] bg-[#FFF] xmd:pb-[1rem]'>
      <Image
        alt='k'
        src='/postdetail/tintuc.png'
        className='xmd:rounded-[0.87848rem] w-[11.49341rem] md:w-[28.11127rem] h-[6.8879rem] md:h-[17.13031rem] shrink-0'
        width={999}
        height={999}
      />
      <div className=' flex xmd:flex-col-reverse flex-col xmd:self-stretch items-start xmd:w-[11.49341] md:w-[28.03807rem] md:py-[1.46413rem] md:p-[1.46413rem] xmd:gap-[0.58565rem] gap-[0.87848rem]'>
        <h2 className='self-stretch overflow-hidden font-medium sub1 xmd:sub2 line-clamp-2 text-ellipsis text-greyscale-80 font-svnGraphik'>
          Máy tính bị màn hình đen: Nguyên nhân và cách khắc phục hiệu quả
        </h2>
        <div className='overflow-hidden font-normal body2 xmd:hidden line-clamp-3 text-ellipsis text-greyscale-30 font-svnGraphik'>
          Mạng xã hội Facebook là môi trường tiềm năng để kinh doanh hay phát
          triển thương hiệu. Tuy nhiên, nhiều người vẫn chưa biết cách chạy
          quảng cáo Facebook để quảng bá sản phẩm và dịch vụ của mình. Trong bài
          viết này sẽ giới thiệu cho bạn các hình thức và phần mềm để chạy quảng
          cáo Facebook hiệu quả nhất.
        </div>
        <div className=' gap-[0.58565rem] flex items-start'>
          <Image
            alt='k'
            src='/postdetail/calendar.svg'
            className='w-[1.02489rem] h-[1.02489rem] shrink-0'
            width={999}
            height={999}
          />
          <div className='font-medium caption text-greyscale-20'>
            12/12/2023
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardRelatedArticle
