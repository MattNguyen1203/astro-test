'use client'
import {formatToShortVND, formatToVND} from '@/lib/utils'
import Image from 'next/image'
import {useState} from 'react'

export default function CardVoucher({
  className = '',
  item,
  isPriority = false,
}) {
  const [isCopy, setCopy] = useState(false)

  return (
    <article
      className={`${className} w-[21.22987rem] h-[5.12rem] xmd:w-[18.66764rem] xmd:h-[4.1rem] rounded-[0.58565rem] bg-elevation-20 xmd:bg-white flex md:hover:bg-brown-50 transition-all duration-200 select-none xmd:shadow-[2px_2px_12px_0px_rgba(0,0,0,0.02),-3px_2px_20px_0px_rgba(0,0,0,0.04)]`}
    >
      <div className='w-[5.12rem] h-full xmd:w-[4.09956rem] flex flex-col justify-center items-center bg-[linear-gradient(44deg,#FFF5E6_50.63%,#FFE4B9_106.58%)] rounded-tl-[0.58565rem] rounded-bl-[0.58565rem]'>
        <Image
          className='size-[2.34261rem] xmd:size-[1.75695rem] object-contain'
          src='/layout/nav/pen.svg'
          alt='icon but cam ung'
          width={32}
          height={32}
          priority={isPriority}
        />
        <span className='inline-block mt-[0.44rem] xmd:mt-[0.29rem] text-brown-700 text-[0.65886rem] font-medium leading-[1.2] tracking-[0.00329rem] whitespace-nowrap xmd:caption3 xmd:text-brown-800'>
          Bút cảm ứng
        </span>
      </div>
      <div className='w-[9.6rem] xmd:w-[9.0776rem] h-full py-[0.59rem] px-[0.88rem] xmd:p-[0.59rem] flex flex-col justify-center'>
        <h3 className='font-medium button text-greyscale-80 mb-[0.29rem] xmd:mb-[0.15rem] xmd:caption xmd:font-semibold xmd:tracking-[0.00439rem] xmd:text-greyscale-60'>
          Giảm{' '}
          {item?.type === 'fixed_product'
            ? formatToVND(item?.amount)
            : item?.amount + '%'}
        </h3>
        <p className='font-normal caption2 tracking-[0.00732rem] text-greyscale-40 xmd:tracking-normal xmd:text-greyscale-30'>
          Đơn Tối thiểu {formatToShortVND(item?.maximum_amount)}
          <br />
          Giảm Tối đa {formatToShortVND(item?.minimum_amount)}
        </p>
      </div>
      <div className='flex items-center flex-1 md:justify-center size-full'>
        <button
          onClick={() => {
            if (!isCopy) {
              setCopy(true)
              const couponCode = item?.code?.toString()
              navigator.clipboard.writeText(couponCode)
            }
          }}
          className={`${
            isCopy
              ? 'bg-[linear-gradient(90deg,rgba(16,40,65,1)_100%,rgba(16,40,65,1)_100%)]'
              : 'bg-[linear-gradient(104deg,#E78C03_-3.95%,#FFB84F_106.72%)] xmd:bg-[linear-gradient(180deg,#E0B181_0.72%,#BE9367_99.87%)]'
          } rounded-[0.30476rem] caption2 font-medium text-white w-[4.45649rem] xmd:w-[4.90483rem] h-[1.75695rem] xmd:h-[1.97657rem] flex justify-center items-center transition-all duration-1000 origin-right xmd:text-[0.65886rem] xmd:tracking-[0.00329rem] xmd:font-semibold relative`}
        >
          COPY MÃ
        </button>
      </div>
    </article>
  )
}
