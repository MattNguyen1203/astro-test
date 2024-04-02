'use client'
// component ui
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import Image from 'next/image'
// import SheetCategories from '../sheetcategories'
import dynamic from 'next/dynamic'
import {useState} from 'react'
import CheckDefault from '../sheetcategories/BoxCheck'
import {RadioGroup, RadioGroupItem} from '../ui/radio-group'
import {Label} from '../ui/label'
const SheetCategories = dynamic(() => import('../sheetcategories'))

export default function SheetSort({children, isMobile = false}) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        side='bottom'
        className='pt-[1.46rem] pb-[2.64rem] px-[1.17rem] bg-white xmd:data-[state=open]:duration-200 rounded-tl-[0.87848rem] rounded-tr-[0.87848rem] shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)]'
      >
        <SheetTitle className='h-[3.80673rem] flex justify-start items-center px-[2.92rem] xmd:px-[0.88rem] xmd:border-b xmd:border-solid xmd:border-[#EFEFEF]'>
          Bộ lọc tìm kiếm
        </SheetTitle>
        <div className='w-full space-y-[0.88rem]'>
          <button className='rounded-[0.43924rem] bg-[linear-gradient(180deg,#E0B181_0.72%,#BE9367_99.87%)] w-full flex justify-center items-center caption font-semibold text-white h-[2.63543rem]'>
            FLASHSALE
          </button>
          <SheetCategories
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          >
            <button className='flex justify-between items-center px-[0.88rem] rounded-[0.29283rem] bg-elevation-20 h-[2.92826rem] w-full'>
              <span className='font-semibold sub2 text-greyscale-80'>
                Bút cảm ứng
              </span>
              <Image
                className='size-[1.1713rem] object-contain'
                src={'/product/menu.svg'}
                alt='icon menu'
                width={24}
                height={24}
              />
            </button>
          </SheetCategories>
          <div className='pb-[0.88rem] border-b border-solid border-[#454545]/20'>
            <span className='block font-medium caption1 text-greyscale-70 mb-[0.15rem]'>
              Dành cho thiết bị:
            </span>
            <div className='flex flex-wrap'>
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className={`flex relative items-center mr-[0.73rem] p-[0.44rem] shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02),-6px_2px_32px_0px_rgba(0,0,0,0.06)] rounded-[0.29283rem] cursor-pointer border-[2px] border-solid border-transparent border-blue-500 mt-[0.73rem]`}
                  >
                    <Image
                      src={'/components/checkVar.svg'}
                      alt=''
                      width={12}
                      height={12}
                      className={`absolute top-[-0.43924rem] right-[-0.36603rem] z-10 hidden'
                      `}
                    />
                    <span className='font-normal caption1 text-greyscale-40'>
                      Ipad Air 5
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className='mt-[1.17rem] pb-[0.88rem] border-b border-solid border-[#454545]/20'>
          <span className='block font-medium caption1 text-greyscale-70'>
            Phân loại:
          </span>
          <div className='flex items-center mt-[0.88rem]'>
            <CheckDefault
              className='size-[1.46413rem]'
              isCheck={true}
            />
            <span className='font-normal caption text-greyscale-50 block w-fit ml-[0.59rem]'>
              Sản phẩm combo
            </span>
          </div>
          <div className='flex items-center mt-[0.88rem]'>
            <CheckDefault
              className='size-[1.46413rem]'
              isCheck={true}
            />
            <span className='font-normal caption text-greyscale-50 block w-fit ml-[0.59rem]'>
              Sản phẩm lẻ
            </span>
          </div>
        </div>
        <div className='mt-[1.17rem] '>
          <span className='block font-medium caption1 text-greyscale-70'>
            Sắp xếp theo:
          </span>
          <RadioGroup
            defaultValue='new'
            className='flex flex-col mt-[0.58rem]'
          >
            <Label
              htmlFor='new'
              className='flex items-center py-[0.295rem] cursor-pointer'
            >
              <RadioGroupItem
                className='size-[1.46413rem] rounded-full border-[2px] border-solid border-[#ECECEC]'
                value='new'
                id='new'
              />

              <span className='caption font-normal text-greyscale-50 block w-fit ml-[0.59rem]'>
                Mới nhất
              </span>
            </Label>
            <Label
              htmlFor='desc'
              className='flex items-center py-[0.295rem] cursor-pointer'
            >
              <RadioGroupItem
                className='size-[1.46413rem] rounded-full border-[2px] border-solid border-[#ECECEC]'
                value='desc'
                id='desc'
              />

              <span className='caption font-normal text-greyscale-50 block w-fit ml-[0.59rem]'>
                Giá cao đến thấp
              </span>
            </Label>
            <Label
              htmlFor='asc'
              className='flex items-center py-[0.295rem] cursor-pointer'
            >
              <RadioGroupItem
                className='size-[1.46413rem] rounded-full border-[2px] border-solid border-[#ECECEC]'
                value='asc'
                id='asc'
              />

              <span className='caption font-normal text-greyscale-50 block w-fit ml-[0.59rem]'>
                Giá thấp đến cao
              </span>
            </Label>
          </RadioGroup>
          <div className='grid grid-cols-2 gap-x-[0.59rem] mt-[1.16rem] h-[2.63543rem]'>
            <button className='text-white caption font-semibold flex justify-center items-center rounded-[0.43924rem] bg-greyscale-10'>
              THIẾP LẬP LẠI
            </button>
            <button className='rounded-[0.43924rem] bg-[#10273F] text-white flex justify-center items-center caption font-semibold'>
              LỌC
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
