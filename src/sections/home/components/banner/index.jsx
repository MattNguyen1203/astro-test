'use client'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {Autoplay, Navigation, Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import Image from 'next/image'
import {handleViewPort} from '@/lib/utils'

export default function BannerHome({viewport}) {
  const pagination = {
    renderBullet: function (index, className) {
      return `<span class="${className} !w-[5.58rem] !h-[0.21962rem] !bg-[#82828263] !rounded-[0.73206rem]" ></span>`
    },
  }
  return (
    <article className='h-[29.55447rem] container mt-[1.17rem] relative'>
      <Swiper
        id='banner_swiper'
        loop={true}
        spaceBetween={16}
        slidesPerView={1}
        speed={500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        grabCursor
        navigation={{
          nextEl: '.banner_button_next',
          prevEl: '.banner_button_prev',
        }}
        pagination={pagination}
        modules={[Navigation, Pagination, Autoplay]}
        className='size-full rounded-[0.87848rem]'
      >
        <SwiperSlide>
          <div className='size-full bg-[linear-gradient(90deg,rgba(217,217,217,1)_0%,rgba(255,255,255,1)_100%)] rounded-[0.87848rem]'>
            <Image
              className='object-cover size-full rounded-[0.87848rem]'
              src={'/home/banner.jpg'}
              alt='ảnh banner'
              priority
              width={handleViewPort(viewport, 1200, 680, 360)}
              height={handleViewPort(viewport, 405, 300, 180)}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='size-full bg-[linear-gradient(90deg,rgba(217,217,217,1)_0%,rgba(255,255,255,1)_100%)] rounded-[0.87848rem]'>
            <Image
              className='object-cover size-full rounded-[0.87848rem]'
              src={'/home/banner.jpg'}
              alt='ảnh banner'
              priority
              width={handleViewPort(viewport, 1200, 680, 360)}
              height={handleViewPort(viewport, 405, 300, 180)}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='size-full bg-[linear-gradient(90deg,rgba(217,217,217,1)_0%,rgba(255,255,255,1)_100%)] rounded-[0.87848rem]'>
            <Image
              className='object-cover size-full rounded-[0.87848rem]'
              src={'/home/banner.jpg'}
              alt='ảnh banner'
              priority
              width={handleViewPort(viewport, 1200, 680, 360)}
              height={handleViewPort(viewport, 405, 300, 180)}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='size-full bg-[linear-gradient(90deg,rgba(217,217,217,1)_0%,rgba(255,255,255,1)_100%)] rounded-[0.87848rem]'>
            <Image
              className='object-cover size-full rounded-[0.87848rem]'
              src={'/home/banner.jpg'}
              alt='ảnh banner'
              priority
              width={handleViewPort(viewport, 1200, 680, 360)}
              height={handleViewPort(viewport, 405, 300, 180)}
            />
          </div>
        </SwiperSlide>
        <button className='banner_button_prev absolute top-1/2 -translate-y-1/2 left-[1.17rem] size-[2.63543rem] shadow-[2px_4px_20px_0px_rgba(12,46,112,0.04),-6px_2px_28px_0px_rgba(12,46,112,0.04)] bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] rounded-full z-[5] flex justify-center items-center group hover:shadow-[0px_0px_32px_0px_rgba(0, 0, 0, 0.08)] hover:bg-[linear-gradient(80deg,#FFE2B5_-133.34%,#E78E00_92.23%)] hover:backdrop-blur-[5px] transition-all duration-300'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              className='group-hover:stroke-white'
              d='M14 16L10 12L14 8'
              stroke='#BE9367'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
        <button className='banner_button_next absolute top-1/2 -translate-y-1/2 right-[1.17rem] size-[2.63543rem] shadow-[2px_4px_20px_0px_rgba(12,46,112,0.04),-6px_2px_28px_0px_rgba(12,46,112,0.04)] bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] rounded-full z-[5] flex justify-center items-center group hover:shadow-[0px_0px_32px_0px_rgba(0, 0, 0, 0.08)] hover:bg-[linear-gradient(80deg,#FFE2B5_-133.34%,#E78E00_92.23%)] hover:backdrop-blur-[5px] transition-all duration-300'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              className='group-hover:stroke-white'
              d='M10 16L14 12L10 8'
              stroke='#BE9367'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </Swiper>
    </article>
  )
}
