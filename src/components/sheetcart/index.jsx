'use client'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import ItemCart from '../itemcart'
import ICBoxCheck from '../icon/ICBoxCheck'
import {useState} from 'react'
import ICCheck from '../icon/ICCheck'
import ICDelete from '../icon/ICDelete'
import {ScrollArea} from '../ui/scroll-area'

export default function SheetCart({children}) {
  const [isCheck, setIsCheck] = useState(false)
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className='p-0 bg-white'>
        <SheetHeader>
          <SheetTitle className='h-[3.80673rem] flex justify-start items-center px-[2.92rem] '>
            GIỎ HÀNG:
          </SheetTitle>
          <div className='w-full absolute top-[3.80673rem] left-0 bg-[#EFEFEF] h-[1px] !my-0' />
          <div>
            <div className='px-[2.92rem]'>
              <div className='mt-[1.46rem] flex justify-between bg-[#F5F5F5] rounded-[0.58565rem] px-[1.17rem] py-[0.88rem] mb-[0.88rem]'>
                <div
                  onClick={() => setIsCheck(!isCheck)}
                  className='flex items-center cursor-pointer w-fit'
                >
                  <div className='size-[1.75695rem] relative overflow-hidden cursor-pointer '>
                    <ICBoxCheck className='size-full' />
                    {isCheck && (
                      <div className='absolute top-0 left-0 flex items-center justify-center bg-blue-700 size-full rounded-[0.25rem]'>
                        <ICCheck className='w-[0.61493rem] h-auto' />
                      </div>
                    )}
                  </div>
                  <span className='text-[1.02489rem] text-[#262626] leading-[1.2] tracking-[0.01025rem] font-semibold w-fit ml-[0.88rem] mr-[0.29rem]'>
                    Chọn tất cả
                  </span>
                  <span className='text-[1.02489rem] tracking-[0.01025rem] leading-[1.2] font-semibold text-brown-500'>
                    (5 sản phẩm)
                  </span>
                </div>
                <div className='flex cursor-pointer items w-fit pl-[0.5rem]'>
                  <ICDelete className='w-[0.83272rem] h-auto' />
                  <span className='w-fit ml-[0.46rem] leading-[1.2] tracking-[0.00878rem] font-semibold text-[0.87848rem] text-[#262626] block translate-y-[22.5%]'>
                    Xoá
                  </span>
                </div>
              </div>
            </div>

            <div className='pr-[1.42rem]'>
              <ScrollArea
                type='always'
                className='w-full h-[calc(100vh-10.17rem-4.84rem)] pl-[2.92rem] pr-[1.5rem]'
              >
                <div className='grid grid-cols-1 gap-y-[0.88rem]'>
                  <ItemCart />
                  <ItemCart />
                  <ItemCart />
                  <ItemCart />
                  <ItemCart />
                  <ItemCart />
                  <ItemCart />
                  <ItemCart />
                  <ItemCart />
                </div>
              </ScrollArea>
            </div>
            <div className='border-t border-solid border-[#EFEFEF] mt-auto h-[4.39239rem] px-[2.92rem] flex justify-between items-center'>
              <span className='text-[#6A6A6A] text-[1.02489rem] leading-[1.2] tracking-[0.01025rem]'>
                TỔNG TIỀN HÀNG:
              </span>
              <div className='flex items-center'>
                <span className='text-[#D48E43] font-bold h6'>480.000đ</span>
                <button className='h-[2.92826rem] w-[12.15227rem] rounded-[0.58565rem] shadow-[2px_1px_12px_0px_rgba(0,0,0,0.06),2px_2px_20px_0px_rgba(0,0,0,0.04)] bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)] text-white caption1 font-semibold flex justify-center items-center ml-[0.88rem]'>
                  THANH TOÁN
                </button>
              </div>
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}