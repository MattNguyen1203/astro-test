'use client'
import Image from 'next/image'
import ICArrowRightWhite from '../icon/ICArrowRightWhite'
import VoucherSlideRes from '@/sections/home/components/flashvoucher/slidevoucherres'
import {useState} from 'react'

export default function VoucherPin() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      className={`${
        isOpen ? 'translate-y-0 bottom-0' : 'translate-y-full bottom-[3.22rem]'
      } h-[13.2rem] fixed z-[999] left-0 w-screen transition-all duration-300`}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='h-[3.22rem] bg-[linear-gradient(180deg,#E0B181_0.72%,#BE9367_99.87%)] rounded-tr-[0.87848rem] rounded-tl-[0.87848rem] border-[2px] border-b-0 border-solid border-white shadow-[0px_0px_16px_0px_rgba(0,0,0,0.08)] flex justify-center items-center relative'
      >
        <Image
          className='size-[1.55359rem] object-cover'
          src={'/components/icon-voucher.svg'}
          alt='icon voucher'
          width={22}
          height={22}
          priority
        />
        <span className='text-white text-[0.87848rem] leading-[1.2] tracking-[0.00439rem] font-semibold inline-block ml-[0.44rem] w-fit'>
          VOUCHER
        </span>
        <ICArrowRightWhite
          className={`${
            isOpen ? 'rotate-90' : '-rotate-90'
          } absolute top-1/2 -translate-y-1/2 right-[1.32rem] size-[1.1713rem] object-cover transition-all duration-100`}
        />
      </div>
      <div className='flex items-center bg-white h-[calc(13.2rem-2.22rem)]'>
        <VoucherSlideRes data={new Array(14).fill(0)} />
      </div>
    </div>
  )
}
