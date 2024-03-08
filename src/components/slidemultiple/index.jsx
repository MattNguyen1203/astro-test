'use client'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import {Swiper, SwiperSlide} from 'swiper/react'
import {FreeMode, Navigation, Thumbs} from 'swiper/modules'
import {useState} from 'react'
import Image from 'next/image'
export default function SlideMultiple() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <>
      <div className='w-[21.81552rem] mr-[1.17rem] select-none'>
        <div className='bg-white w-[21.81552rem] h-[21.76764rem] rounded-[0.67818rem] overflow-hidden'>
          <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{swiper: thumbsSwiper}}
            modules={[FreeMode, Navigation, Thumbs]}
            className='mySwiper2 size-full'
          >
            <SwiperSlide>
              <Image
                src='https://swiperjs.com/demos/images/nature-1.jpg'
                alt='items'
                width={500}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src='https://swiperjs.com/demos/images/nature-2.jpg'
                alt='items'
                width={500}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src='https://swiperjs.com/demos/images/nature-3.jpg'
                alt='items'
                width={500}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src='https://swiperjs.com/demos/images/nature-4.jpg'
                alt='items'
                width={500}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src='https://swiperjs.com/demos/images/nature-5.jpg'
                alt='items'
                width={500}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src='https://swiperjs.com/demos/images/nature-6.jpg'
                alt='items'
                width={500}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src='https://swiperjs.com/demos/images/nature-7.jpg'
                alt='items'
                width={500}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src='https://swiperjs.com/demos/images/nature-8.jpg'
                alt='items'
                width={500}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src='https://swiperjs.com/demos/images/nature-9.jpg'
                alt='items'
                width={500}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src='https://swiperjs.com/demos/images/nature-10.jpg'
                alt='items'
                width={500}
                height={500}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className='w-full h-[4.0399rem] mt-[0.5rem]'>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className='mySwiper size-full'
          >
            <SwiperSlide>
              <Image
                src='https://swiperjs.com/demos/images/nature-1.jpg'
                alt='items'
                width={500}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src='https://swiperjs.com/demos/images/nature-2.jpg'
                alt='items'
                width={500}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src='https://swiperjs.com/demos/images/nature-3.jpg'
                alt='items'
                width={500}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src='https://swiperjs.com/demos/images/nature-4.jpg'
                alt='items'
                width={500}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src='https://swiperjs.com/demos/images/nature-5.jpg'
                alt='items'
                width={500}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src='https://swiperjs.com/demos/images/nature-6.jpg'
                alt='items'
                width={500}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src='https://swiperjs.com/demos/images/nature-7.jpg'
                alt='items'
                width={500}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src='https://swiperjs.com/demos/images/nature-8.jpg'
                alt='items'
                width={500}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src='https://swiperjs.com/demos/images/nature-9.jpg'
                alt='items'
                width={500}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src='https://swiperjs.com/demos/images/nature-10.jpg'
                alt='items'
                width={500}
                height={500}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}
