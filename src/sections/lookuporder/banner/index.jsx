'use client'

import NavigationCustom from '@/components/navigationcustom'
import Image from 'next/image'
import {useRef} from 'react'
import {Autoplay, Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'

export default function BannerLookUpOrder() {
  const swiperRef = useRef(null)
  const handleNextSlide = () => {
    swiperRef.current?.slideNext()
  }
  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev()
  }
  return (
    <section className='h-[23.3rem] w-full relative'>
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        grabCursor={true}
        loop={true}
        speed={500}
        pagination={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        modules={[Autoplay, Pagination]}
        className='size-full'
      >
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <SwiperSlide key={index}>
              <div className='flex items-start size-full'>
                <Image
                  className='object-cover w-full h-[21.5rem]'
                  src='/lookuporder/banner.jpg'
                  alt='banner'
                  width={1400}
                  height={360}
                  priority={index === 0 ? true : false}
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className='container absolute z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2'>
        <NavigationCustom
          handleNextSlide={handleNextSlide}
          handlePrevSlide={handlePrevSlide}
        />
      </div>
    </section>
  )
}
