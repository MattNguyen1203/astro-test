'use client'

import CardProduct from '@/components/cardproduct'
import {fetcher} from '@/lib/utils'
import {useSearchParams} from 'next/navigation'
import {FreeMode, Scrollbar} from 'swiper/modules'
import {SwiperSlide, Swiper} from 'swiper/react'
import useSWR from 'swr'

export default function SlideAccessory({products, session}) {
  const searchParams = useSearchParams()
  const device = searchParams.get('device')

  const {data, error, isLoading} = useSWR(
    device
      ? process.env.NEXT_PUBLIC_API +
          `/okhub/v1/product/filter/products?device=${device}&page=1&limit=20`
      : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )

  const productNew = device ? data?.item : products?.item

  return (
    <Swiper
      id='accessory_swiper'
      grabCursor={true}
      freeMode={true}
      scrollbar={{
        hide: false,
      }}
      slidesPerView={'auto'}
      modules={[Scrollbar, FreeMode]}
      className='size-full md:!px-[0.73rem] !px-[0.295rem]'
    >
      {productNew?.map((product, index) => (
        <SwiperSlide
          key={index}
          className='md:!w-[17.64428rem] !w-[13rem] h-full pt-[1.17rem]'
        >
          <div className='size-full md:px-[0.44rem] px-[0.295rem] flex items-start'>
            <CardProduct
              product={product}
              session={session}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
