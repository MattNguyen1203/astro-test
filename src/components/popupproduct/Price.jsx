import {formatToVND} from '@/lib/utils'
import React from 'react'

const ProductPrice = ({regularPrice, price, bestCoupon}) => {
  const finalPrice = Number(price) - Number(bestCoupon?.amount_discount || 0)
  const savingMoney =
    regularPrice - finalPrice > 0 ? regularPrice - finalPrice : 0

  return (
    <>
      <div className='relative group before:size-full before:absolute before:top-0 before:left-0 hover:before:opacity-100 before:opacity-0 before:transition-all before:duration-500 md:before:bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)] md:bg-[linear-gradient(100deg,#E9940B_46.57%,#FFDBA3_100.64%)] overflow-hidden transition duration-500 ease-in flex items-center w-[19rem] xmd:w-fit h-[2.78rem] xmd:h-fit rounded-[0.58565rem]'>
        <div className='flex items-center w-full h-full relative z-10 px-[0.59rem] py-[0.44rem] xmd:p-0'>
          <span className='sub1 text-white font-bold mr-[0.59rem] xmd:text-[1.31772rem] xmd:text-[#0D1F33]'>
            {formatToVND(finalPrice || '')}
          </span>

          {regularPrice && regularPrice != finalPrice && (
            <span className='md:group-hover:hidden caption1 font-normal text-white line-through xmd:text-greyscale-30 leading-normal'>
              {formatToVND(regularPrice)}
            </span>
          )}

          {savingMoney > 0 && (
            <>
              <span className='w-[2.855rem] md:group-hover:w-0 md:opacity-1 md:group-hover:opacity-0 z-10  md:absolute md:top-1/2 md:-translate-y-1/2 md:right-[0.59rem] h-[1.9rem] md:transition-all md:duration-500 ml-auto p-[0.43924rem] rounded-[0.43924rem] bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)] xmd:bg-[linear-gradient(278deg,#102841_-67.59%,#1359A1_93.68%)] text-white flex items-center justify-center caption1 font-semibold xmd:text-[0.73206rem] xmd:ml-[1rem]'>
                <span className=''>
                  -{Math.ceil((savingMoney / regularPrice) * 100) || 0}%
                </span>
              </span>
              <span className='xmd:hidden w-0 group-hover:w-[9rem] opacity-0 group-hover:opacity-100  z-10 flex absolute top-1/2 -translate-y-1/2 right-[0.59rem] h-[1.9rem] transition-all duration-500 ml-auto p-[0.43924rem] rounded-[0.43924rem] bg-[linear-gradient(104deg,#E78C03_-3.95%,#FFB84F_106.72%)] xmd:bg-[linear-gradient(278deg,#102841_-67.59%,#1359A1_93.68%)] text-white items-center justify-center caption1 font-semibold xmd:text-[0.73206rem] xmd:ml-[1rem]'>
                <span className='group-hover:opacity-100 opacity-0 delay-300 transition-all duration-500 flex'>
                  Tiết kiệm{' '}
                  <p className='ml-[0.25rem]'>{formatToVND(savingMoney)}</p>
                </span>
              </span>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default ProductPrice
