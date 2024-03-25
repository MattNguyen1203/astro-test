'use client'

import ICBoxCheck from '@/components/icon/ICBoxCheck'
import ICCheck from '@/components/icon/ICCheck'
import {DialogProduct} from '@/sections/home/components/dialog'
import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'

const ItemProduct = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  return (
    <div className='flex justify-between items-center bg-white p-[1.17rem] rounded-[0.58565rem] shadow-[-3px_2px_20px_0px_rgba(0,0,0,0.04),2px_2px_12px_0px_rgba(0,0,0,0.02)]'>
      <div className='flex items-center'>
        <div className='relative w-[1.75695rem] h-[1.75695rem] mr-[0.88rem]'>
          <ICBoxCheck className='size-full' />
          {isChecked && (
            <div className='absolute top-0 left-0 flex items-center justify-center bg-blue-700 size-full rounded-[0.25rem]'>
              <ICCheck className='w-[0.8rem] h-auto' />
            </div>
          )}

          <input
            type='checkbox'
            name='product'
            className='opacity-0 absolute top-0 left-0 w-full h-full z-10'
            onClick={() => setIsChecked((prev) => !prev)}
          />
        </div>

        <Image
          src='/components/productImg.jpg'
          alt=''
          width={90}
          height={90}
          className='size-[7.32rem] mr-[0.88rem]'
        />

        <div className=''>
          <Link
            href='/san-pham'
            className='caption1 font-medium text-greyscale-40 mb-[0.29rem]'
          >
            Bút cảm ứng AstroMazing Pencil GD cho iPad
          </Link>

          <div className='flex items-center mb-[0.44rem]'>
            <span className='sub2 font-semibold text-blue-600 mr-[0.59rem]'>
              65.000đ
            </span>
            <span className='caption1 line-through text-greyscale-40'>
              130.000đ
            </span>
          </div>

          <div className='flex'>
            {Array(2)
              .fill()
              .map((tag, index) => (
                <div
                  key={index}
                  className='caption1 text-greyscale-40 py-[0.44rem] px-[0.59rem] rounded-[0.43924rem] bg-elevation-20 mr-[0.59rem]'
                >
                  xanh min
                </div>
              ))}
          </div>
        </div>
      </div>

      <DialogProduct
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <div
          className='size-fit p-[0.66rem] bg-elevation-20 rounded-full flex items-center justify-center cursor-pointer'
          // onClick={() => setIsOpen(true)}
        >
          <Image
            src={'/components/edit.svg'}
            alt=''
            width={15}
            height={15}
            className='size-[1.19524rem]'
          />
        </div>
      </DialogProduct>
    </div>
  )
}

export default ItemProduct
