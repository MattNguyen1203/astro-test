'use client'
import useStore from '@/app/(store)/store'
// import SheetCart from '@/components/sheetcart'
import Image from 'next/image'

import dynamic from 'next/dynamic'
const SheetCart = dynamic(() => import('@/components/sheetcart'))

export default function Cart({isMobile, session}) {
  const isOpenMegaMenuRes = useStore((state) => state.isOpenMegaMenuRes)

  return (
    <SheetCart
      isMobile={isMobile}
      session={session}
    >
      <div
        className={`${
          isOpenMegaMenuRes ? 'opacity-0 pointer-events-none' : 'opacity-100'
        } transition-all duration-200 size-[2.63543rem] xmd:size-[2.34261rem] bg-elevation-20 rounded-[6.5vw] flex justify-center items-center cursor-pointer relative`}
      >
        <Image
          className='flex-shrink-0 object-cover size-[1.31772rem] xmd:w-[1.1713rem] xmd:h-auto'
          src={'/home/cart.svg'}
          alt='icon cart'
          width={18}
          height={18}
          priority
        />
        <div className='absolute top-0 -translate-y-[0.22rem] right-0 translate-x-1/2 rounded-full bg-blue-600 border border-solid border-white flex justify-center items-center size-fit z-10 py-[0.05rem] px-[0.29rem] caption2 font-normal text-white'>
          10
        </div>
      </div>
    </SheetCart>
  )
}
