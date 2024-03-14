'use client'
import useStore from '@/app/(store)/store'
import SheetCart from '@/components/sheetcart'
import Image from 'next/image'

export default function Cart({isMobile}) {
  const isOpenMegaMenuRes = useStore((state) => state.isOpenMegaMenuRes)

  return (
    <SheetCart isMobile={isMobile}>
      <div
        className={`${
          isOpenMegaMenuRes ? 'opacity-0 pointer-events-none' : 'opacity-100'
        } transition-all duration-200 size-[2.63543rem] xmd:size-[2.34261rem] bg-elevation-20 rounded-[6.5vw] flex justify-center items-center cursor-pointer`}
      >
        <Image
          className='flex-shrink-0 object-cover size-[1.31772rem] xmd:w-[1.1713rem] xmd:h-auto'
          src={'/home/cart.svg'}
          alt='icon cart'
          width={18}
          height={18}
          priority
        />
      </div>
    </SheetCart>
  )
}
