'use client'
import Image from 'next/image'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
export default function ExpRank() {
  return (
    <Swiper
      slidesPerView={'auto'}
      className='lg:w-[101.7568rem] xmd:w-full h-[10.68rem]'
    >
      <SwiperSlide>
        <div className='flex lg:w-[101.7568rem] absolute py-[1.1713rem] px-[0.87848rem] flex-col justify-center items-start rounded-[0.58565rem] bg-white shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)]'>
          <div className='flex justify-between items-center w-full xmd:w-[53.73352rem]'>
            <div className='flex relative flex-col justify-center items-center w-[8.56515rem] xmd:w-[7.39385rem]'>
              <div className='flex justify-center items-center w-[1.75695rem] h-[1.75695rem] pr-[0.00117rem]'>
                <Image
                  width={23.984}
                  height={24}
                  alt='icon rank'
                  src={'/account/icon-rank-1.svg'}
                />
              </div>
              <div className='absolute h-[1.1713rem] w-[1.1713rem] bottom-[-2.35rem] z-10'>
                <Image
                  width={16}
                  height={16}
                  alt='elli'
                  src={'/account/elli.svg'}
                />
              </div>
            </div>
            <div className='flex relative flex-col justify-center items-center w-[8.56515rem]'>
              <div className='flex justify-center items-center w-[1.75695rem] h-[1.75695rem] pr-[0.00117rem]'>
                <Image
                  width={23.984}
                  height={24}
                  alt='icon rank'
                  src={'/account/icon-rank-1.svg'}
                />
              </div>
              <div className='absolute h-[1.1713rem] w-[1.1713rem] bottom-[-2.35rem] z-10'>
                <Image
                  width={16}
                  height={16}
                  alt='elli'
                  src={'/account/elli.svg'}
                />
              </div>
            </div>
            <div className='flex relative flex-col justify-center items-center w-[8.56515rem]'>
              <div className='flex justify-center items-center w-[1.75695rem] h-[1.75695rem] pr-[0.00117rem]'>
                <Image
                  width={23.984}
                  height={24}
                  alt='icon rank'
                  src={'/account/icon-rank-1.svg'}
                />
              </div>
              <div className='absolute h-[1.1713rem] w-[1.1713rem] bottom-[-2.35rem] z-10'>
                <Image
                  width={16}
                  height={16}
                  alt='elli'
                  src={'/account/elli.svg'}
                />
              </div>
            </div>
            <div className='flex relative flex-col justify-center items-center w-[8.56515rem]'>
              <div className='flex justify-center items-center w-[1.75695rem] h-[1.75695rem] pr-[0.00117rem]'>
                <Image
                  width={23.984}
                  height={24}
                  alt='icon rank'
                  src={'/account/icon-rank-1.svg'}
                />
              </div>
              <div className='absolute h-[1.1713rem] w-[1.1713rem] bottom-[-2.35rem] z-10'>
                <Image
                  width={16}
                  height={16}
                  alt='elli'
                  src={'/account/elli.svg'}
                />
              </div>
            </div>
          </div>
          <div className='flex my-[0.87848rem] justify-start items-center h-[1.75695rem] pl-[1.31772rem] pr-[3.3675rem]'>
            <div className='w-[90%] xmd:w-[53.73352rem] h-[1.75695rem] absolute rounded-[1.0981rem] bg-[#F0F0F0]'></div>
            <div className='w-[32.06442rem] h-[1.75695rem] absolute z-10 rounded-[0.43924rem] bg-gradient-to-l from-[#407F0F] to-[#29AA4D] shadow-[4px_4px_8px_0px_rgba(83,118,209,0.10)]'></div>
          </div>
          <div className='flex items-center justify-between w-full'>
            <div className='flex flex-col items-center w-[8.56515rem]'>
              <p className='w-[8.56515rem] mb-[0.29283rem] text-center sub2 font-semibold bg-gradient-to-l from-[#E0B181] to-[#BE9367] bg-clip-text'>
                0đ
              </p>
              <p className='font-normal body2 text-greyscale-40'>
                Thành viên mới
              </p>
            </div>
            <div className='flex flex-col items-center w-[8.56515rem]'>
              <p className='w-[8.56515rem] mb-[0.29283rem] text-center sub2 font-semibold bg-gradient-to-l from-[#E0B181] to-[#BE9367] bg-clip-text'>
                0đ
              </p>
              <p className='font-normal body2 text-greyscale-40'>
                Thành viên mới
              </p>
            </div>
            <div className='flex flex-col items-center w-[8.56515rem]'>
              <p className='w-[8.56515rem] mb-[0.29283rem] text-center sub2 font-semibold bg-gradient-to-l from-[#E0B181] to-[#BE9367] bg-clip-text'>
                0đ
              </p>
              <p className='font-normal body2 text-greyscale-40'>
                Thành viên mới
              </p>
            </div>
            <div className='flex flex-col items-center w-[8.56515rem]'>
              <p className='w-[8.56515rem] mb-[0.29283rem] text-center sub2 font-semibold bg-gradient-to-l from-[#E0B181] to-[#BE9367] bg-clip-text'>
                0đ
              </p>
              <p className='font-normal body2 text-greyscale-40'>
                Thành viên mới
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide></SwiperSlide>
    </Swiper>
  )
}
