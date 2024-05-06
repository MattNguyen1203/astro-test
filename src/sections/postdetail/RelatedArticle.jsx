'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import {useRef, useState} from 'react'
import NavigationCustom from '@/components/navigationcustom'
import CardRelatedArticle from './CardRelatedArticle'
import Image from 'next/image'
import Link from 'next/link'
const RelatedArticle = ({isMobile, productByCate}) => {
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
            isMobile
              ? 'flex justify-start xmd:items-center xmd:justify-between lg:flex-col lg:space-y-[0.87848rem] '
              : 'flex justify-between'
          }
        >
          <h2 className='font-medium h6 xmd:text-[1.34261rem] font-svnGraphik xmd:font-semibold xmd:text-blue-700 xmd:uppercase'>
            {isMobile ? 'Tin Tức Liên Quan' : 'Bài viết liên quan'}
          </h2>
          <div className='group h-[2.92826rem] cursor-pointer flex items-center py-[0.29283rem] px-[0.87848rem] bg-elevation-20 rounded-[0.43924rem]'>
            <Link
              href={'/tin-tuc'}
              className='p-[0.58565rem] group-hover:border-[1px] group-hover:border-solid group-hover:border-blue-400 rounded-[0.43924rem] flex items-center'
            >
              <span className='caption1 font-medium text-blue-200 mr-[0.29rem] group-hover:text-blue-500'>
                Xem tất cả
              </span>
              <Image
                src='/components/arrow.svg'
                alt='arrow icon'
                width={20}
                height={20}
                className='object-contain size-[0.87848rem]'
              />
            </Link>
          </div>
          {/* {isMobile && (
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
          )} */}
        </div>
      </div>
      <div className='relative flex md:container'>
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
          {productByCate?.map((item, index) => (
            <SwiperSlide key={index}>
              <CardRelatedArticle data={item} />
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
