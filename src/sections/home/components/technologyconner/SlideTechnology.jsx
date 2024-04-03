'use client'

import './style.css'

import ICArrowRightWhite from '@/components/icon/ICArrowRightWhite'
import Link from 'next/link'
import {Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import ItemTechnology from './ItemTechnology'
export default function SlideTechnology({isMobile, posts = []}) {
  return (
    <Swiper
      slidesPerView={'auto'}
      speed={500}
      grabCursor
      pagination={{
        type: 'progressbar',
      }}
      modules={[Pagination]}
      id='technology_swiper'
      className='size-full '
    >
      {posts?.item?.map((post, index) => (
        <SwiperSlide
          key={index}
          className='!w-[21.38063rem] pr-[0.59rem]'
        >
          <ItemTechnology
            className='md:h-[30.4rem] xmd:h-[27.6rem]'
            index={index}
            post={post}
          />
        </SwiperSlide>
      ))}
      <SwiperSlide className='!w-[10.54rem] h-[30.38067rem]'>
        <div className='size-full pr-[1.76rem] flex justify-end items-center select-none'>
          <Link
            href={'/tin-tuc'}
            className='size-[7.61347rem] rounded-full bg-[#10273F] flex flex-col justify-center items-center'
          >
            <span className='sub2 font-semibold text-white block w-fit mb-[0.29rem]'>
              XEM THÊM
            </span>
            <div className='size-[1.75695rem] flex justify-center items-center'>
              <ICArrowRightWhite className='object-contain size-[1.5rem]' />
            </div>
          </Link>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
