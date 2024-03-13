'use client'

import './style.css'

import ICArrowRightWhite from '@/components/icon/ICArrowRightWhite'
import Image from 'next/image'
import Link from 'next/link'
import {Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
export default function SlideTechnology({isMobile}) {
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
      {new Array(12).fill(0).map((_, index) => (
        <SwiperSlide
          key={index}
          className='!w-[21.38063rem] pr-[0.59rem]'
        >
          <Link
            href={'/'}
            className={`${
              index === 11
                ? 'before:absolute before:size-full before:rounded-[0.58565rem] before:bg-[#D9D9D9] before:z-10 before:pointer-events-none before:opacity-40 hover:before:opacity-0 before:transition-all before:duration-200'
                : ''
            } w-full h-[30.38067rem] rounded-[0.58565rem] relative group !overflow-hidden block select-none`}
          >
            <Image
              className='absolute top-0 left-0 z-0 transition-all duration-300 size-full group-hover:scale-110'
              src='/home/item-post-tech.jpg'
              alt='item post tech'
              width={285}
              height={415}
            />
            <div className='relative z-10 size-full px-[0.59rem] pb-[1.54rem] pt-[0.59rem] flex flex-col justify-between'>
              <div className='flex items-center rounded-[0.29283rem] p-[0.59rem] bg-white/85 backdrop-blur-[2.5px] w-fit'>
                <Image
                  className='size-[1.02489rem] object-contain'
                  src={'/home/calendar.svg'}
                  alt='icon calendar'
                  width={16}
                  height={16}
                />
                <span className='caption1 ml-[0.29rem] text-greyscale-80 font-medium block w-fit -mb-[0.4px]'>
                  12/12/2023
                </span>
              </div>
              <div className='p-[1.46rem] rounded-[0.58565rem] backdrop-blur-[15px] bg-[linear-gradient(101deg,rgba(0,0,0,0.31)_0.17%,rgba(0,0,0,0.26)_87.85%)] relative'>
                <div className='absolute z-[1] size-full bottom-0 left-1/2 -translate-x-1/2 group-hover:border-t-[2px] group-hover:border-r-[2px] rounded-[0.58565rem] group-hover:border-l-[2px] group-hover:border-white group-hover:border-solid transition-all duration-200 '></div>
                <h2 className='line-clamp-2 h-[2.78184rem] sub1 font-medium text-white mb-[0.88rem] relative z-10'>
                  iPhone 15 có thể sạc ngược cho thiết bị khác
                </h2>
                <p className='h-[3.00146rem] line-clamp-3 body2 font-normal text-greyscaletext-5-div relative z-10'>
                  Cổng USB-C trên iPhone 15 có thể sạc cho tai nghe AirPods Pro
                  2, đồng hồ với công suất đầu ra 4,5W. Tính năng này được Apple
                  nêu trong bản hướng dẫn sử dụng cổng USB-C của iPhone 15 mới
                  công bố. Ngoài việc được nhận sạc từ các thiết bị hoặc bộ sạc
                  cổng USB-C, Apple cho biết bản thân iPhone 15 cũng có thể sạc
                  cho các thiết bị khác qua cổng này. "Bạn có thể sử dụng iPhone
                  để sạc AirPods, Apple Watch hoặc một thiết bị nhỏ khác hỗ trợ
                  USB Power Delivery với công suất lên tới 4,5 W", tài liệu của
                  Apple viết.
                </p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
      <SwiperSlide className='!w-[10.54rem] h-[30.38067rem]'>
        <div className='size-full pr-[1.76rem] flex justify-end items-center select-none'>
          <Link
            href={'/'}
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
