'use client'

import CardProduct from '@/components/cardproduct'
import {FreeMode, Scrollbar} from 'swiper/modules'
import {SwiperSlide, Swiper} from 'swiper/react'

export default function SlideAccessory({products}) {
  console.log('🚀 ~ SlideAccessory ~ products:', products)
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
      {products?.item?.map((product, index) => (
        <SwiperSlide
          key={index}
          className='md:!w-[17.64428rem] !w-[13rem] h-full pt-[1.17rem]'
        >
          <div className='size-full md:px-[0.44rem] px-[0.295rem] flex items-start'>
            <CardProduct product={product} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
