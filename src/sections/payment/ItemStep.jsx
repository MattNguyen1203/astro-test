'use client'

import Image from 'next/image'
import {usePathname} from 'next/navigation'

export default function ItemStep({item, status, index}) {
  const pathName = usePathname()
  const isThanhToan = pathName?.includes('/thanh-toan')
  return (
    <div className='flex items-center'>
      <div
        className={`${
          status || (isThanhToan && index === 0)
            ? 'bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)]'
            : ' bg-white'
        } size-[2.34261rem] rounded-full flex justify-center items-center`}
      >
        <Image
          className='w-[1.30146rem] h-auto object-contain'
          src={'/home/cart.svg'}
          alt='cart icon'
          width={24}
          height={24}
        />
      </div>
      <span className='body2 font-semibold text-greyscale-40 block w-fit ml-[0.59rem] whitespace-nowrap'>
        {item?.title}
      </span>
    </div>
  )
}
