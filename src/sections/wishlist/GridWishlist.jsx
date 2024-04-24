'use client'

import Cardproduct from '@/components/cardproduct'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'

export default function GridWishlist({wishList, isMobile, session}) {
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()

  const colsWishlist = Math.ceil(wishList?.length / 4)
  return (
    <section className='w-full rounded-[0.58565rem] bg-white p-[1.17rem] xmd:bg-transparent xmd:p-0'>
      {!isMobile && (
        <>
          <span className='font-medium sub2 text-greyscale-80 inline-block mr-[0.44rem]'>
            Sản phẩm yêu thích
          </span>
          <span className='font-normal sub2 text-greyscale-20'>
            ({wishList?.length} sản phẩm)
          </span>
          <hr className='bg-[#ECECECB2] h-[0.07rem] w-full my-[1.17rem] block' />
        </>
      )}
      <div
        style={{
          gridTemplateRows: `repeat(${colsWishlist}, minmax(0, 1fr))`,
        }}
        className='grid grid-cols-3 gap-x-[0.73rem] gap-y-[1.17rem] xmd:grid-cols-2'
      >
        {wishList?.map((item, index) => (
          <Cardproduct
            key={index}
            product={item?.product}
            session={session}
          />
        ))}
      </div>
    </section>
  )
}
