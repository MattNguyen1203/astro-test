'use client'

import Cardproduct from '@/components/cardproduct'
import {useSearchParams} from 'next/navigation'
import useSWR from 'swr'
import PaginationWishlist from './PaginationWishlist'
import SkeletonCardProduct from '@/components/cardproduct/SkeletonCardProduct'

export default function GridWishlist({wishList, isMobile, session}) {
  const searchParams = useSearchParams()
  const page = searchParams.get('page')

  const fetcher = (url) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
      },
    }).then((r) => r.json())

  const {data, error, isLoading} = useSWR(
    page
      ? process.env.NEXT_PUBLIC_API +
          `/custom/v1/wistlist/getWishlist?page=${page}&limit=12`
      : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )

  const dataWishList = page ? data?.item : wishList?.item

  const colsWishlist = Math.ceil(dataWishList?.length / 4)
  return (
    <>
      <div className='xmd:px-[0.59rem] w-full rounded-[0.58565rem] bg-white p-[1.17rem] xmd:bg-transparent xmd:p-0'>
        {!isMobile && (
          <>
            <span className='font-medium sub2 text-greyscale-80 inline-block mr-[0.44rem]'>
              Sản phẩm yêu thích
            </span>
            <span className='font-normal sub2 text-greyscale-20'>
              ({wishList?.count} sản phẩm)
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
          {isLoading
            ? Array(12)
                .fill(0)
                ?.map((_, index) => <SkeletonCardProduct key={index} />)
            : dataWishList?.map((item, index) => (
                <Cardproduct
                  key={index}
                  product={item?.product}
                  session={session}
                />
              ))}
        </div>
      </div>
      {wishList?.count > 30 && (
        <div className='mt-[1.25rem]'>
          <PaginationWishlist pageCount={Math.ceil(wishList?.count / 30)} />
        </div>
      )}
    </>
  )
}
