'use client'
import CardProduct from '@/components/cardproduct'
import Image from 'next/image'
import AsideSort from './AsideSort'
import useSWR from 'swr'
import {fetcher} from '@/lib/utils'
import {useSearchParams} from 'next/navigation'

export default function GridAccessory({isMobile, products, session}) {
  const searchParams = useSearchParams()

  const sort = searchParams.get('sort')
  const orderby = !!searchParams.get('orderby')
  const search = decodeURI(searchParams.get('search') || '')

  const {data, error, isLoading} = useSWR(
    searchParams?.size
      ? process.env.NEXT_PUBLIC_API +
          `/okhub/v1/product/filter/products?limit=19&exclude=["retro-digital-camera"]&page=1&keyword=${search}${
            orderby ? `&orderby=price&order=${sort}` : '&order=desc'
          }`
      : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )

  const productsNew = searchParams?.size ? data?.item : products?.item
  return (
    <>
      {searchParams.size && !data?.item?.length ? (
        <p className='font-normal text-center body1 text-greyscale-80/80 mb-[4.3rem]'>
          Không tìm thấy sản phẩm phù hợp theo yêu cầu của bạn!
        </p>
      ) : (
        ''
      )}
      <section className='md:w-[77rem] mx-auto flex justify-between mt-[3.51rem] pb-[3.81rem] relative w-full'>
        <div className='md:w-[69.9rem] w-full'>
          <div className='w-full xmd:py-[0.59rem] xmd:px-[0.88rem] xmd:bg-white xmd:h-fit xmd:flex xmd:justify-between xmd:relative'>
            <h2 className='font-medium text-center h5 text-greyscale-80 md:mb-[2.34rem] xmd:text-[1.31772rem] xmd:tracking-[0.01318rem] xmd:font-semibold'>
              {search
                ? `Các Phụ Kiện "${search}" thiết yếu`
                : 'Phụ kiện nổi bật'}
            </h2>
            {isMobile && (
              <>
                <div className='w-[6.95461rem] h-[2.92826rem] pl-[0.29rem] pr-[0.88rem] flex justify-between items-center rounded-[0.58565rem] bg-elevation-20 relative'>
                  <div className='size-[2.34261rem] flex justify-center items-center'>
                    <Image
                      className='w-[1.14546rem] h-[1.19824rem] object-contain'
                      src={'/accessory/icon-filter.svg'}
                      alt='icon filter'
                      width={18}
                      height={18}
                    />
                  </div>
                  <span className='font-medium caption1 text-greyscale-70'>
                    Sắp xếp
                  </span>
                </div>
                <span className='absolute block w-fit bottom-[0.59rem] left-[0.88rem] caption1 font-normal tracking-[0.00439rem] text-greyscale-20'>
                  (222 sản phẩm)
                </span>
              </>
            )}
          </div>
          <div className='grid grid-cols-4 grid-rows-5 gap-x-[0.88rem] gap-y-[1.17rem] xmd:grid-cols-2 xmd:grid-rows-4'>
            {!isMobile && (
              <div className='w-full h-full select-none'>
                <Image
                  className='object-cover size-full rounded-[0.87848rem]'
                  src={'/accessory/item-first.jpg'}
                  alt='item accessory'
                  width={232}
                  height={382}
                />
              </div>
            )}
            {productsNew?.map((product, index) => (
              <CardProduct
                product={product}
                key={index}
                session={session}
              />
            ))}
          </div>
        </div>
        {!isMobile && <AsideSort />}
      </section>
    </>
  )
}
