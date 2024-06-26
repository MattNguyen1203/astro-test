'use client'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import {Swiper, SwiperSlide} from 'swiper/react'
import {FreeMode, Navigation, Thumbs} from 'swiper/modules'
import {memo, useEffect, useRef, useState} from 'react'
import Image from 'next/image'
import ICChevron from '../icon/ICChevron'
import dynamic from 'next/dynamic'
const Video = dynamic(() => import('../video/Video'), {ssr: false})

import {cn} from '@/lib/utils'
import useStore from '@/app/(store)/store'
function SlideMultiple({listGallery = [], activeImage, data}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const slideRef = useRef()

  const [isPlaying, setIsPlaying] = useState(false)
  const setProgress = useStore((state) => state.setProgress)

  useEffect(() => {
    return () => {
      setProgress(100)
    }
  }, [])

  useEffect(() => {
    let activeIndex = 0
    activeIndex = listGallery.findIndex((item) => item === activeImage)
    if (activeIndex >= 0 && slideRef.current) {
      if (data?.video_type) {
        slideRef.current.slideTo(activeIndex + 1)
      } else {
        slideRef.current.slideTo(activeIndex)
      }
    } else {
      slideRef.current.slideTo(0)
    }
  }, [activeImage])

  return (
    <>
      {/* w-[21.81552rem] */}
      <div className='w-[32.9429rem] mr-[1.17rem] select-none xmd:w-full xmd:mr-0 overflow-hidden xmd:px-[0.73rem]'>
        <div className='relative bg-white w-full h-[32.9429rem] xmd:h-[18.59444rem] rounded-[0.67818rem] xmd:rounded-0 overflow-hidden'>
          <Swiper
            loop={true}
            slidesPerView={1.5}
            spaceBetween={10}
            navigation={{
              prevEl: '.productSlide-prev',
              nextEl: '.productSlide-next',
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
            thumbs={{swiper: thumbsSwiper}}
            modules={[FreeMode, Navigation, Thumbs]}
            onBeforeInit={(swiper) => {
              slideRef.current = swiper
            }}
            className='productSlideMain size-full'
          >
            {data?.video_type && data?.link_video?.url && (
              <SwiperSlide className='relative'>
                <Video
                  className='!w-full !h-full object-cover'
                  type={data?.video_type}
                  url={data?.link_video?.url}
                  options={{
                    isControl: true,
                    isPlaying: isPlaying,
                  }}
                />

                <div
                  className={cn(
                    'w-full h-full absolute top-0 left-0 overflow-hidden bg-white',
                    isPlaying && 'hidden',
                  )}
                >
                  <Image
                    width={500}
                    height={500}
                    src={data?.link_video?.thumbnail?.url || '/no-image.jpg'}
                    alt={data?.link_video?.thumbnail?.alt || 'astromazing'}
                    className='w-full h-full object-cover xmd:rounded-[0.5rem]'
                  />

                  <Image
                    width={50}
                    height={50}
                    src={'/components/play.svg'}
                    alt={'astromazing'}
                    className='size-[2.12123rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'
                    onClick={() => setIsPlaying(true)}
                  />
                </div>
              </SwiperSlide>
            )}

            {listGallery?.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={item || '/no-image.jpg'}
                  alt='ảnh sp'
                  width={800}
                  height={800}
                  className='w-full h-full object-cover xmd:border xmd:border-[#ECECEC] xmd:rounded-[0.5rem]'
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
            slidesPerView={5}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className='productSlideThumb size-full'
          >
            {data?.video_type && (
              <SwiperSlide className='relative bg-white overflow-hidden rounded-[0.46728rem] cursor-pointer'>
                <Image
                  width={100}
                  height={100}
                  src={data?.link_video?.thumbnail?.url || '/no-image.jpg'}
                  alt={data?.link_video?.thumbnail?.alt || 'astromazing'}
                  className='w-full h-full rounded-[0.46728rem]'
                />

                <Image
                  width={50}
                  height={50}
                  src={'/components/play.svg'}
                  alt={'astromazing'}
                  className='size-[1.12123rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'
                />
              </SwiperSlide>
            )}

            {listGallery?.map((item, index) => (
              <SwiperSlide
                className='bg-white overflow-hidden rounded-[0.46728rem] cursor-pointer'
                key={index}
              >
                <Image
                  src={item || '/no-image.jpg'}
                  alt='items'
                  width={200}
                  height={200}
                  className='rounded-[0.46728rem] size-full object-cover'
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}
export default memo(SlideMultiple)
