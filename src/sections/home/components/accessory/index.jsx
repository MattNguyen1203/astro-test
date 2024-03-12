import './style.css'

import ICArrowRight from '@/components/icon/ICArrowRight'
import CategoriesIndex from './categories'
import SlideAccessory from './slideaccessory'
import Link from 'next/link'

export default function Accessory({isMobile}) {
  return (
    <div className='pt-[4.39rem] md:bg-elevation-20 xmd:pt-[3rem]'>
      <div className='container md:flex md:py-[1.46rem] md:pr-[1.47rem] rounded-[1.1713rem] backdrop-blur-[5px] md:bg-blue-400'>
        <div className='md:px-[1.46rem] flex-1 flex flex-col'>
          <Link
            href={'/'}
            className='relative xmd:flex xmd:justify-between xmd:px-[0.88rem] xmd:py-[0.73rem] xmd:rounded-[0.58565rem] xmd:bg-[#F4F4F4]'
          >
            <span className='font-semibold text-white h6 xmd:sub2 xmd:text-greyscale-80'>
              {isMobile
                ? 'Tìm kiếm phụ kiện'
                : 'Phụ kiện hay cho thiết bị của bạn'}
            </span>
            {isMobile ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                className='size-[1.46413rem]'
              >
                <path
                  d='M1.66732 10.0013L18.334 10.0013M18.334 10.0013L11.6673 3.33464M18.334 10.0013L11.6673 16.668'
                  stroke='#262626'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            ) : (
              <ICArrowRight className='absolute bottom-[0.5rem] right-[1.6rem]' />
            )}
          </Link>
          <div className='relative w-full'>
            <CategoriesIndex isMobile={isMobile} />
          </div>
        </div>
        <div className='w-[69.03367rem] h-[31.8448rem] rounded-[0.87848rem] bg-white overflow-hidden'>
          <SlideAccessory />
        </div>
      </div>
      {!isMobile && (
        <Link
          href={'/'}
          className='flex items-center mx-auto w-fit px-[1.76rem] h-[3.51391rem] rounded-[0.58565rem] border border-solid border-blue-800 mt-[2.34rem] group hover:bg-blue-800 transition-all duration-300'
        >
          <span className='font-semibold button text-blue-800 inline-block w-fit mr-[0.59rem] transition-all duration-300 group-hover:text-white'>
            Khám phá thêm
          </span>
          <ICArrowRight className='size-[1.1713rem] arrow-loop' />
        </Link>
      )}
    </div>
  )
}
