'use client'
import TemVoucher from './TemVoucher'
import SlideMultiple from '../slidemultiple'
import Variation from './Variation'
import ChangeQuantity from './ChangeQuantity'
import ProductPrice from './Price'
import Link from 'next/link'
import AddToCart from './AddToCart'

export default function ProductInfo({type, product, data = {}}) {
  const isAdd = type === 'add'
  return (
    <div className='xmd:flex-col xmd:flex px-[1.17rem] xmd:p-[0] xmd:pt-[0.73rem] xmd:pb-[9rem] pt-[1.17rem] pb-[1.14rem] rounded-[0.87848rem] bg-elevation-20 xmd:bg-white w-fit xmd:w-full h-fit flex xmd:overflow-hidden'>
      <SlideMultiple />

      <div className='w-[28.25769rem] relative xmd:w-full xmd:mt-[1.17rem]'>
        <div className='bg-white rounded-[0.87848rem] p-[0.88rem] xmd:p-[0.73rem]'>
          <Link
            href={`/san-pham/${data?.slug}`}
            className='capitalize sub2 xmd:text-[1.31772rem] text-greyscale-50 font-medium w-full h-[2.489402rem] md:line-clamp-2 mb-[0.88rem] xmd:w-full xmd:h-fit'
          >
            {data?.name}
          </Link>
          <ProductPrice
            regularPrice={data?.regular_price}
            price={data?.price}
          />
          <TemVoucher
            regularPrice={data?.regular_price}
            price={data?.price}
          />

          {data.type === 'variable' && <Variation data={data} />}
        </div>

        <div
          className={`${
            isAdd ? 'justify-center' : ''
          } mt-[0.88rem] flex xmd:w-full`}
        >
          <div className='flex xmd:px-[0.73rem] xmd:w-full'>
            <ChangeQuantity isAdd={isAdd} />
          </div>
          {isAdd ? (
            <AddToCart />
          ) : (
            <div className='flex xmd:flex-col-reverse xmd:fixed xmd:left-0 xmd:bottom-0 xmd:bg-white xmd:w-full z-10 xmd:p-[0.73rem] shadow-[-3px_-5px_20px_0px_rgba(0,0,0,0.10),2px_-2px_12px_0px_rgba(0,0,0,0.02)]'>
              <button className='w-[8.63836rem] xmd:w-full h-[2.34261rem] xmd:h-[2.928rem] p-[0.73206rem] xmd:px-[1.17rem] mx-[0.59rem] xmd:mx-0 flex items-center justify-center rounded-[0.43924rem] bg-white xmd:bg-[#ECECEC] caption1 font-semibold text-blue-800 xmd:text-greyscale-50 select-none xmd:uppercase'>
                Hủy bỏ
              </button>
              <button className='w-[8.63836rem] xmd:w-full h-[2.34261rem] xmd:h-[2.928rem] p-[0.73206rem] xmd:px-[1.17rem] xmd:mb-[0.59rem] flex items-center justify-center rounded-[0.43924rem] bg-blue-700 caption1 font-semibold text-white select-none xmd:uppercase'>
                Lưu thay đổi
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
