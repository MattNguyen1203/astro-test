'use client'

import {Autoplay} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import Image from 'next/image'
import {useRef} from 'react'
import NavigationCustom from '@/components/navigationcustom'

export default function PromotionSlide({data}) {
  const dataSlides = data?.acf?.banner_event
  const swiperRef = useRef(null)
  const handleNextSlide = () => {
    swiperRef.current?.slideNext()
  }
  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev()
  }
  return (
    <article className='h-[14.31545rem] container my-[4.29rem] relative tablet:h-[22.31545rem]'>
      <div className='relative overflow-hidden size-full'>
        <Swiper
          id='promotion_swiper'
          loop={true}
          slidesPerView={3}
          speed={500}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          grabCursor
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper
          }}
          modules={[Autoplay]}
          className='h-full w-[1212px] rounded-[0.75673rem] max-w-[1212px] absolute top-0 left-1/2 -translate-x-1/2'
        >
          {dataSlides?.map((item, index) => (
            <SwiperSlide
              key={index}
              className='px-[0.44rem]'
            >
              <div className='size-full bg-[linear-gradient(90deg,rgba(217,217,217,1)_0%,rgba(255,255,255,1)_100%)] rounded-[0.75673rem]'>
                <Image
                  className='object-cover size-full rounded-[0.75673rem] max-w-[calc((1200px-1.7rem)/3)]'
                  src={item?.url || '/home/promotion1.jpg'}
                  alt={item?.alt || item?.title}
                  priority
                  width={1200}
                  height={405}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <NavigationCustom
        handlePrevSlide={handlePrevSlide}
        handleNextSlide={handleNextSlide}
      />
    </article>
  )
}
