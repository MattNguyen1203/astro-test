import {cn} from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const AddToCartBtn = ({className}) => {
  return (
    <button
      className={cn(
        'flex items-center justify-center w-[11rem] h-full rounded-[0.58565rem] border-2 border-solid border-[#102841] hover:border-[#FFF0D8] relative before:size-full before:absolute before:top-0 before:left-0 px-[1.17rem] py-[0.73rem] mx-[0.88rem] ',
        className?.wrapper,
      )}
    >
      <Image
        src='/components/btnCartIcon.png'
        alt='button cart icon'
        width={100}
        height={100}
        className={cn(
          'w-[1.1713rem] h-[1.1713rem] object-contain mr-[0.59rem] xmd:mr-0',
          className?.img,
        )}
      />
      <span
        className={cn(
          'font-semibold uppercase caption1 text-greyscale-80',
          className?.text,
        )}
      >
        Thêm vào giỏ
      </span>
    </button>
  )
}

export default AddToCartBtn
