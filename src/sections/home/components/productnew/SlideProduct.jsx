'use client'
import 'swiper/css'

import {Swiper, SwiperSlide} from 'swiper/react'
import {useRef, useState} from 'react'
import NavigationCustom from '@/components/navigationcustom'
import CardProduct from '@/components/cardproduct'

export default function SlideProduct() {
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
    <article className='h-[29.96rem] container relative'>
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        speed={1000}
        grabCursor
        onSlideChange={handleSlideChange}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        className='h-full'
      >
        {new Array(3).fill(0).map((_, index) => (
          <SwiperSlide
            key={index}
            className=''
          >
            <div className='flex items-center size-full'>
              <div className='grid grid-cols-5 gap-x-[0.88rem] h-[28.2rem]'>
                {new Array(5).fill(0).map((_, idx) => (
                  <CardProduct key={idx} />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <NavigationCustom
        indexSlider={indexSlider}
        length={3}
        handlePrevSlide={handlePrevSlide}
        handleNextSlide={handleNextSlide}
      />
    </article>
  )
}
