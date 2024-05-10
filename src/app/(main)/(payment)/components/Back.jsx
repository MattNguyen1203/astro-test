'use client'

import ICArrowRightBlack from '@/components/icon/ICArrowRightBlack'
import {useRouter} from 'next/navigation'

export default function Back() {
  const router = useRouter()
  return (
    <div className='lg:hidden my-[0.88rem] ml-[0.66rem]'>
      <button
        onClick={() => router.back()}
        className='flex items-center pl-[0.59rem] h-[2.93rem] relative'
      >
        <ICArrowRightBlack className='rotate-180 size-[1.75rem] mr-[0.59rem]' />
        <span className='font-medium h5 text-greyscale-50'>Thanh Toán</span>
      </button>
      <hr className='h-[0.06rem] w-full mt-[0.5rem] mb-[1.25rem] bg-[#ECECEC]' />
    </div>
  )
}
