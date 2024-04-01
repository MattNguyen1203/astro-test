import Image from 'next/image'
import React from 'react'

const SubInfo = () => {
  return (
    <div className='flex justify-between xmd:hidden'>
      <div className='flex items-center'>
        <Image
          src={'/components/productIcon1.svg'}
          alt='7 Ngày miễn phí trả hàng'
          width={20}
          height={20}
          className='w-[1.46413rem] h-[1.46413rem] object-contain mr-[0.59rem]'
        />
        <span className='font-semibold caption2 tracking-0 text-greyscale-80'>
          7 Ngày miễn phí trả hàng
        </span>
      </div>

      <div className='flex items-center'>
        <Image
          src={'/components/productIcon2.svg'}
          alt='Hàng chính hãng 100%'
          width={20}
          height={20}
          className='w-[1.46413rem] h-[1.46413rem] object-contain mr-[0.59rem]'
        />
        <span className='font-semibold caption2 tracking-0 text-greyscale-80'>
          Hàng chính hãng 100%
        </span>
      </div>

      <div className='flex items-center'>
        <Image
          src={'/components/productIcon3.svg'}
          alt='Miễn phí vận chuyển'
          width={20}
          height={20}
          className='w-[1.46413rem] h-[1.46413rem] object-contain mr-[0.59rem]'
        />
        <span className='font-semibold caption2 tracking-0 text-greyscale-80'>
          Miễn phí vận chuyển
        </span>
      </div>

      <div className='flex items-center'>
        <Image
          src={'/components/productIcon4.svg'}
          alt='Hỗ trợ 24/7'
          width={20}
          height={20}
          className='w-[1.46413rem] h-[1.46413rem] object-contain mr-[0.59rem]'
        />
        <span className='font-semibold caption2 tracking-0 text-greyscale-80'>
          Hỗ trợ 24/7
        </span>
      </div>
    </div>
  )
}

export default SubInfo
