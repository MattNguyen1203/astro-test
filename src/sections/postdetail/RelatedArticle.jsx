'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import {FreeMode} from 'swiper/modules'
import 'swiper/css'
import {useRef, useState} from 'react'
import Image from 'next/image'
import NavigationCustom from '@/components/navigationcustom'
import CardRelatedArticle from './CardRelatedArticle'
import RelatedButton from './RelatedButton'
const RelatedArticle = ({isMobile}) => {
  console.log({isMobile})
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
    <div className='inline md:inline-flex flex-col items-start space-y-[1.46413rem]'>
      <div className='md:py-[1.1713rem] md:px-[1.46413rem] bg-[#FFF] self-stretch rounded-[0.87848rem] '>
        <div
          className={
            isMobile ? 'flex justify-start flex-col space-y-[0.87848rem] ' : ' '
          }
        >
          <h2 className='font-medium h6 xmd:text-[2.34261rem] font-svnGraphik xmd:font-semibold xmd:text-blue-700 xmd:uppercase'>
            {isMobile ? 'Tin Tức Liên Quan' : 'Bài viết liên quan'}
          </h2>
          {isMobile && (
            <div className='w-full overflow-x-auto hidden-scrollbar'>
              <div className='w-max pb-2  flex items-start  gap-[0.87848rem]'>
                <RelatedButton
                  text='mới nhất'
                  bg='bg-[#153454]'
                  color='#fff'
                />
                <RelatedButton
                  text='ipad'
                  bg=''
                  color=''
                />
                <RelatedButton
                  text='bút cảm ứng'
                  bg=''
                  color=''
                />
                <RelatedButton
                  text='camara'
                  bg=''
                  color=''
                />
                <RelatedButton
                  text='camara'
                  bg=''
                  color=''
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='relative flex  md:container'>
        <Swiper
          slidesPerView={isMobile ? 2 : 3}
          grabCursor
          spaceBetween={20}
          // freeMode={true}
          // modules={[FreeMode]}
          onSlideChange={handleSlideChange}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper
          }}
          className='w-full xmd:!pr-[3.5rem]'
        >
          {new Array(8).fill(0).map((_, index) => (
            <SwiperSlide key={index}>
              <CardRelatedArticle />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='xmd:hidden absolute h-full w-[calc(100%)] -top-[4rem] left-1/2 -translate-x-1/2 z-50 pointer-events-none'>
          <NavigationCustom
            indexSlider={indexSlider}
            length={5}
            handlePrevSlide={handlePrevSlide}
            handleNextSlide={handleNextSlide}
          />
        </div>
      </div>
    </div>
  )
}

export default RelatedArticle
