'use client'
import Image from 'next/image'
import {useState} from 'react'

export default function CardVoucher({className = '', item}) {
  const [isCopy, setCopy] = useState(false)
  return (
    <article className='w-[21.22987rem] h-[5.12rem] rounded-[0.58565rem] bg-elevation-20 flex hover:bg-brown-50 transition-all duration-200 select-none'>
      <div className='w-[5.12rem] h-full flex flex-col justify-center items-center bg-[linear-gradient(44deg,#FFF5E6_50.63%,#FFE4B9_106.58%)] rounded-tl-[0.58565rem] rounded-bl-[0.58565rem]'>
        <Image
          className='size-[2.34261rem]'
          src='/layout/nav/pen.svg'
          alt='icon but cam ung'
          width={32}
          height={32}
        />
        <span className='inline-block mt-[0.44rem] text-brown-700 text-[0.65886rem] font-medium leading-[1.2] tracking-[0.00329rem] whitespace-nowrap'>
          Bút cảm ứng
        </span>
      </div>
      <div className='w-[9.6rem] h-full py-[0.59rem] px-[0.88rem] flex flex-col justify-center'>
        <h3 className='font-medium button text-greyscale-80 mb-[0.29rem]'>
          Giảm 15%
        </h3>
        <p className='font-normal caption2 tracking-[0.00732rem] text-greyscale-40'>
          Đơn Tối thiểu đ500k <br /> Giảm Tối đa đ30K
        </p>
      </div>
      <div className='flex items-center justify-center flex-1 size-full'>
        <button
          onClick={() => {
            if (!isCopy) {
              setCopy(true)
            }
          }}
          className={`${
            isCopy
              ? 'bg-blue-700'
              : 'bg-[linear-gradient(104deg,#E78C03_-3.95%,#FFB84F_106.72%)]'
          } rounded-[0.30476rem] caption2 font-medium text-white w-[4.45649rem] h-[1.75695rem] flex justify-center items-center transition-all duration-200`}
        >
          COPY MÃ
        </button>
      </div>
    </article>
  )
}
