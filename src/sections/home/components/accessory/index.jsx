import './style.css'

import ICArrowRight from '@/components/icon/ICArrowRight'
import CategoriesIndex from './categories'
import SlideAccessory from './slideaccessory'
import Link from 'next/link'
import ICArrowRightBlack from '@/components/icon/ICArrowRightBlack'

export default function Accessory({isMobile, products}) {
  return (
    <div className='pt-[4.39rem] md:bg-elevation-20 xmd:pt-[3rem]'>
      <div className='container md:flex md:py-[1.46rem] md:pr-[1.47rem] rounded-[1.1713rem] backdrop-blur-[5px] md:bg-blue-400 xmd:full-mb'>
        <div className='md:px-[1.46rem] flex-1 flex flex-col'>
          <Link
            href={'/'}
            className='relative xmd:flex xmd:justify-between xmd:px-[0.88rem] xmd:py-[0.73rem] xmd:rounded-[0.58565rem] xmd:bg-[#F4F4F4] xmd:container'
          >
            <span className='font-semibold text-white h6 xmd:sub2 xmd:text-greyscale-80'>
              {isMobile
                ? 'Tìm kiếm phụ kiện'
                : 'Phụ kiện hay cho thiết bị của bạn'}
            </span>
            {isMobile ? (
              <ICArrowRightBlack className='size-[1.46413rem]' />
            ) : (
              <ICArrowRight className='absolute bottom-[0.5rem] right-[1.6rem]' />
            )}
          </Link>
          <div className='relative w-full xmd:overflow-x-auto xmd:h-[5.24rem] hidden-scrollbar z-10'>
            <CategoriesIndex isMobile={isMobile} />
          </div>
        </div>
        <div className='md:w-[69.03367rem] h-[31.8448rem] xmd:h-[25.92rem] md:rounded-[0.87848rem] bg-white overflow-hidden relative xmd:top-[-1.17rem]'>
          <SlideAccessory products={products} />
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
