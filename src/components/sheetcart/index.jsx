'use client'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {Input} from '../ui/input'
import ItemCart from '../itemcart'

export default function SheetCart({children}) {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className='px-[2.92rem] py-0 bg-elevation-20'>
        <SheetHeader>
          <SheetTitle className='h-[3.80673rem] flex justify-start items-center'>
            GIỎ HÀNG:
          </SheetTitle>
          <div className='w-full absolute top-[3.80673rem] left-0 bg-[#EFEFEF] h-[1px] !my-0' />
          <SheetDescription>
            <div className='mt-[1.46rem] flex justify-between'>
              <div className='flex items-center'>
                <Input
                  type='checkbox'
                  className='size-[1.75695rem]'
                />
                <span>Chọn tất cả</span>
                <span>(5 sản phẩm)</span>
              </div>
              <div>
                <span>Xoá</span>
              </div>
            </div>

            <div className='grid grid-cols-1 gap-y-[0.88rem]'>
              <ItemCart />
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
