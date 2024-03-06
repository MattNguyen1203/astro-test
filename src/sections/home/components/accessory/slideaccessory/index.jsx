'use client'

import CardProduct from '@/components/cardproduct'
import {FreeMode, Scrollbar} from 'swiper/modules'
import {SwiperSlide, Swiper} from 'swiper/react'

export default function SlideAccessory() {
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
      className='size-full !px-[0.73rem]'
    >
      {new Array(16).fill(0).map((_, index) => (
        <SwiperSlide
          key={index}
          className='!w-[17.64428rem] h-full pt-[1.17rem]'
        >
          <div className='h-[28.2rem] w-full px-[0.44rem] flex items-center'>
            <CardProduct />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
