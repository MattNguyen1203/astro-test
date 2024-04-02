import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import Image from 'next/image'
// import {PopoverCategory} from '../popovercategory'
import dynamic from 'next/dynamic'
const PopoverCategory = dynamic(() =>
  import('../popovercategory').then((mod) => mod.PopoverCategory),
)

export default function SheetCategories({
  children,
  isMobile = false,
  isOpen,
  setIsOpen,
}) {
  return (
    <Sheet
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        side='bottom'
        className='pt-[1.46rem] pb-[2.64rem] px-[1.17rem] bg-white xmd:data-[state=open]:duration-200 rounded-tl-[0.87848rem] rounded-tr-[0.87848rem] shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)] w-[97%] ml-[1.5%]'
      >
        <SheetTitle className='h-[3.80673rem] flex justify-start items-center px-[2.92rem] xmd:px-[0.88rem]'>
          Danh mục sản phẩm
        </SheetTitle>
        <div className='flex flex-col space-y-[0.59rem]'>
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <PopoverCategory key={index}>
                <button className='px-[0.88rem] rounded-[0.29283rem] bg-elevation-20 flex items-center h-[3.51391rem]'>
                  <Image
                    className='w-[1.21171rem] h-auto object-contain'
                    src={'/layout/nav/pen.svg'}
                    alt='icon pen'
                    width={24}
                    height={24}
                  />
                  <span className='font-semibold sub2 text-greyscale-80 block ml-[0.59rem]'>
                    Tai nghe - loa
                  </span>
                </button>
              </PopoverCategory>
            ))}
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className='w-full bg-[#10273F] flex justify-center items-center rounded-[0.43924rem] caption font-semibold text-white h-[2.63543rem] mt-[1.46rem]'
        >
          QUAY LẠI
        </button>
      </SheetContent>
    </Sheet>
  )
}
