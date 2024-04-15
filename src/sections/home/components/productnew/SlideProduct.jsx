'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import {useRef, useState} from 'react'
import NavigationCustom from '@/components/navigationcustom'
import CardProduct from '@/components/cardproduct'
import {FreeMode} from 'swiper/modules'

export default function SlideProduct({isMobile, products}) {
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

  const pageSlidePc = Math.ceil(Number(products?.item?.length) / 5) || 0
  return (
    <article className='h-[29.96rem] xmd:h-[25.18rem] container xmd:full-mb relative'>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 'auto',
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
        }}
        freeMode={true}
        speed={1000}
        grabCursor
        onSlideChange={handleSlideChange}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        modules={[FreeMode]}
        className='size-full xmd:!px-[0.295rem]'
      >
        {new Array(isMobile ? 8 : Number(pageSlidePc))
          .fill(0)
          .map((_, index) => (
            <SwiperSlide
              key={index}
              className='xmd:!w-[13rem]'
            >
              <div className='flex items-center size-full xmd:px-[0.295rem]'>
                {isMobile ? (
                  <CardProduct />
                ) : (
                  <div className='grid grid-cols-5 gap-x-[0.88rem] h-[28.2rem]'>
                    {products?.item
                      ?.slice(index * 5, (index + 1) * 5)
                      ?.map((product, idx) => (
                        <CardProduct
                          key={idx}
                          product={product}
                        />
                      ))}
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      {!isMobile && (
        <NavigationCustom
          indexSlider={indexSlider}
          length={pageSlidePc}
          handlePrevSlide={handlePrevSlide}
          handleNextSlide={handleNextSlide}
        />
      )}
    </article>
  )
}
