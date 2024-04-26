'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import ItemBannerPreOrder from './ItemBannerPreOrder'
import {FreeMode} from 'swiper/modules'
import {useRef, useState} from 'react'
import NavigationCustom from '@/components/navigationcustom'

export default function SlideBannerPreOrder({products}) {
  const swiperRef = useRef(null)
  const [indexSlider, setIndexSlider] = useState(0)

  const handleSlideChange = (swiper) => {
    setIndexSlider(swiper.realIndex)
  }

  const handleNextSlide = () => {
    swiperRef.current?.slideNext()
  }
  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev()
  }
  return (
    <div className='relative z-10 mt-[4.25rem]'>
      <Swiper
        slidesPerView={'auto'}
        grabCursor
        freeMode={true}
        modules={[FreeMode]}
        onSlideChange={handleSlideChange}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        className='size-full !pl-[3.07rem]'
      >
        {products?.map((product, index) => (
          <SwiperSlide
            key={index}
            className='!size-fit'
          >
            <ItemBannerPreOrder product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      {products?.length > 0 && (
        <div className='absolute h-full w-[calc(100%-6.14rem)] top-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none'>
          <NavigationCustom
            indexSlider={indexSlider}
            length={5}
            handlePrevSlide={handlePrevSlide}
            handleNextSlide={handleNextSlide}
          />
        </div>
      )}
    </div>
  )
}
