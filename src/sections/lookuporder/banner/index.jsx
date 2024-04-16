'use client'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import NavigationCustom from '@/components/navigationcustom'
import Image from 'next/image'
import {useRef} from 'react'
import {Autoplay, EffectFade, Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'

export default function BannerLookUpOrder({isMobile}) {
  const swiperRef = useRef(null)
  const handleNextSlide = () => {
    swiperRef.current?.slideNext()
  }
  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev()
  }
  return (
    <section className='h-[23.3rem] w-full relative xmd:h-[20.5rem] xmd:mt-[1.17rem]'>
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        grabCursor={true}
        effect={'fade'}
        loop={true}
        speed={200}
        pagination={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        modules={[EffectFade, Autoplay, Pagination]}
        className='size-full'
        id='swiper_tracking'
      >
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <SwiperSlide key={index}>
              <div className='flex items-start size-full'>
                <Image
                  className='w-full h-[21.5rem] xmd:h-[18.7rem]'
                  src={
                    index === 1
                      ? '/product/banner.jpg'
                      : isMobile
                      ? '/lookuporder/banner-res.jpg'
                      : '/lookuporder/banner.jpg'
                  }
                  alt='banner'
                  width={1400}
                  height={360}
                  priority={index === 0 ? true : false}
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      {!isMobile && (
        <div className='container absolute z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2'>
          <NavigationCustom
            handleNextSlide={handleNextSlide}
            handlePrevSlide={handlePrevSlide}
          />
        </div>
      )}
    </section>
  )
}
