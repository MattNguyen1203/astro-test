'use client'

import ICBoxCheck from '@/components/icon/ICBoxCheck'
import ICCheck from '@/components/icon/ICCheck'
import {formatToVND} from '@/lib/utils'
import {DialogProduct} from '@/sections/home/components/dialog'
import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'

const ItemProduct = (props) => {
  const {data = {}, setIsOpen, setActiveId} = props
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div className='flex xmd:flex-col xmd:justify-start xmd:items-start justify-between items-center bg-white p-[1.17rem] xmd:p-[0.73rem] rounded-[0.58565rem] shadow-[-3px_2px_20px_0px_rgba(0,0,0,0.04),2px_2px_12px_0px_rgba(0,0,0,0.02)]'>
      <div className='flex items-center relative'>
        <div className='relative size-[1.75695rem] xmd:size-[1.46413rem] mr-[0.88rem] xmd:absolute xmd:bottom-[0.4rem] xmd:left-[0.4rem] xmd:mr-0'>
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
          src={data?.featuredImage?.url || '/no-image.jpg'}
          alt=''
          width={200}
          height={200}
          className='size-[7.32rem] mr-[0.88rem] rounded-[0.5rem] xmd:border xmd:border-greyscale-10 xmd:rounded-[0.5rem] xmd:size-[5.27086rem] object-cover'
        />

        <div className=''>
          <Link
            href={`/san-pham/${data?.slug}`}
            className='caption1 font-medium text-greyscale-40 mb-[0.29rem] xmd:text-[1.02489rem] xmd:font-semibold line-clamp-3'
          >
            {data?.name}
          </Link>

          <div className='flex items-center mb-[0.44rem]'>
            <span className='sub2 font-semibold text-blue-600 mr-[0.59rem] xmd:text-[1.1713rem] xmd:leading-normal'>
              {formatToVND(data?.price)}
            </span>

            {data?.regular_price && (
              <span className='caption1 line-through text-greyscale-40 xmd:font-medium xmd:text-greyscale-30 xmd:leading-normal'>
                {formatToVND(data?.regular_price)}
              </span>
            )}
          </div>

          {data?.type === 'variable' && (
            <div className='flex xmd:hidden'>
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
          )}
        </div>
      </div>

      <div className='flex xmd:justify-between xmd:items-center xmd:w-full xmd:mt-[0.73rem]'>
        {data?.type === 'variable' && (
          <div className='hidden xmd:flex'>
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
        )}

        <div
          className='size-fit transition-all duration-300 p-[0.66rem] bg-elevation-20 hover:bg-[linear-gradient(151deg,#17395C_-0.57%,rgba(35,101,170,0.89)_57.41%)] rounded-full flex items-center justify-center cursor-pointer group'
          onClick={() => {
            setIsOpen(true)
            setActiveId(data?.id)
          }}
        >
          <Image
            src={'/components/edit.svg'}
            alt=''
            width={15}
            height={15}
            className='size-[1.19524rem] group-hover:hidden'
          />
          <Image
            src={'/components/edit2.svg'}
            alt=''
            width={15}
            height={15}
            className='size-[1.19524rem] hidden group-hover:block'
          />
        </div>
      </div>
    </div>
  )
}

export default ItemProduct
