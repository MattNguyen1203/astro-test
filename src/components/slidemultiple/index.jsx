'use client'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import {Swiper, SwiperSlide} from 'swiper/react'
import {FreeMode, Navigation, Thumbs} from 'swiper/modules'
import {useState} from 'react'
import Image from 'next/image'
import ICArrowRight from '../icon/ICArrowRight'
import ICChevron from '../icon/ICChevron'
export default function SlideMultiple() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  let dataSlide = new Array(5).fill()

  return (
    <>
      <div className='w-[21.81552rem] mr-[1.17rem] select-none xmd:w-full xmd:mr-0'>
        <div className='relative bg-white w-full h-[21.76764rem] xmd:h-[18.59444rem] rounded-[0.67818rem] overflow-hidden'>
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={{
              prevEl: '.productSlide-prev',
              nextEl: '.productSlide-next',
            }}
            thumbs={{swiper: thumbsSwiper}}
            modules={[FreeMode, Navigation, Thumbs]}
            className='productSlideMain size-full'
          >
            {dataSlide.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  src='/components/productImg.jpg'
                  alt='items'
                  width={500}
                  height={500}
                  className='w-full h-full object-cover'
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='xmd:hidden productSlide-prev absolute top-1/2 left-[0.56rem] z-10 flex items-center justify-center bg-white rounded-full p-[0.29rem] w-[1.7569rem] h-[1.7569rem] cursor-pointer shadow-[1px_2px_13px_0px_rgba(12,46,112,0.04),-4px_1px_18px_0px_rgba(12,46,112,0.04)]'>
            <ICChevron />
          </div>

          <div className='xmd:hidden productSlide-next absolute top-1/2 right-[0.56rem] z-10 flex rotate-180 items-center justify-center bg-white rounded-full p-[0.29rem] w-[1.7569rem] h-[1.7569rem] cursor-pointer shadow-[1px_2px_13px_0px_rgba(12,46,112,0.04),-4px_1px_18px_0px_rgba(12,46,112,0.04)]'>
            <ICChevron />
          </div>
        </div>
        <div className='w-full h-[4.0399rem] mt-[0.5rem] xmd:hidden'>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={6}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className='productSlideThumb size-full'
          >
            {dataSlide.map((item, index) => (
              <SwiperSlide
                className='bg-white overflow-hidden rounded-[0.46728rem]'
                key={index}
              >
                <Image
                  src='/components/productImg.jpg'
                  alt='items'
                  width={500}
                  height={500}
                  className='rounded-[0.46728rem] size-full'
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}
