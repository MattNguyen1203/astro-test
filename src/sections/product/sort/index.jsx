'use client'
// import BoxSort from './BoxSort'
import SortRes from './sortRes/SortRes'
import dynamic from 'next/dynamic'
const BoxSort = dynamic(() => import('./BoxSort'), {ssr: false})

export default function Sort({isMobile, products, categories}) {
  return (
    <div className='h-[5.27086rem] xmd:h-[4.1rem] rounded-[0.87848rem] bg-white md:shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)] px-[1.17rem] flex items-center justify-between mb-[1.17rem] relative z-20'>
      <div className='w-fit'>
        <h2 className='sub2 xmd:text-[1.31772rem] xmd:font-semibold xmd:leading-[1.2] xmd:tracking-[0.01318rem] xmd:font-svnGraphik xmd:mb-[0.29rem] font-medium text-greyscale-80 mb-[0.44rem]'>
          Tất cả sản phẩm
        </h2>
        <span className='xmd:caption xmd:font-medium text-[1.02489rem] font-medium leading-[1.2] tracking-[0.01025rem] text-greyscale-20'>
          {`(${products?.count || 0} sản phẩm)`}
        </span>
      </div>
      {isMobile ? <SortRes categories={categories} /> : <BoxSort />}
    </div>
  )
}
