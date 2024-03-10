import './style.css'

import ICArrowRight from '@/components/icon/ICArrowRight'
import CategoriesIndex from './categories'
import SlideAccessory from './slideaccessory'
import Link from 'next/link'

export default function Accessory() {
  return (
    <section className='pt-[4.39rem] bg-elevation-20'>
      <div className='container flex py-[1.46rem] pr-[1.47rem] rounded-[1.1713rem] backdrop-blur-[5px] bg-blue-400'>
        <div className='px-[1.46rem] flex-1 flex flex-col'>
          <Link
            href={'/'}
            className='relative'
          >
            <span className='font-semibold text-white h6'>
              Phụ kiện hay cho thiết bị của bạn
            </span>
            <ICArrowRight className='absolute bottom-[0.5rem] right-[1.6rem]' />
          </Link>
          <CategoriesIndex />
        </div>
        <div className='w-[69.03367rem] h-[31.8448rem] rounded-[0.87848rem] bg-white overflow-hidden'>
          <SlideAccessory />
        </div>
      </div>
      <Link
        href={'/'}
        className='flex items-center mx-auto w-fit px-[1.76rem] h-[3.51391rem] rounded-[0.58565rem] border border-solid border-blue-800 mt-[2.34rem] group hover:bg-blue-800 transition-all duration-300'
      >
        <span className='font-semibold button text-blue-800 inline-block w-fit mr-[0.59rem] transition-all duration-300 group-hover:text-white'>
          Khám phá thêm
        </span>
        <ICArrowRight className='size-[1.1713rem] arrow-loop' />
      </Link>
    </section>
  )
}
