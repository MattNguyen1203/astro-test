import {fetchMetaData} from '@/lib/fetchMetaData'
import {getMeta} from '@/lib/getMeta'
import ResetPassIndex from '@/sections/resetpass'
import Image from 'next/image'
import {Suspense} from 'react'

export async function generateMetadata({params}) {
  const result = await fetchMetaData(`tai-khoan/`)
  return getMeta(result, `dat-lai-mat-khau`)
}

export default function ResetPage({searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport === 'mobile'

  return (
    <>
      {isMobile && (
        <Image
          className='h-[4.68521rem] object-contain z-50 w-full text-center absolute top-[-11vh]'
          src={'/auth/slogan.png'}
          alt='AstroMazing'
          width={250}
          height={70}
        />
      )}
      <div className='relative z-10 lg:mt-[8.13rem] mx-auto w-[23rem] xmd:w-full xmd:px-[1.76rem]'>
        <div className='w-full xmd:flex xmd:items-center'>
          {isMobile && (
            <div className='size-[2.92826rem] flex justify-center items-center mr-[0.59rem]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                className='size-[1.75695rem] flex-shrink-0'
              >
                <path
                  d='M19 12H5M5 12L11 18M5 12L11 6'
                  stroke='#102841'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          )}
          <h1 className='font-semibold text-blue-900 h5'>ĐẶT LẠI MẬT KHẨU</h1>
        </div>
        <p className='mt-[0.59rem] text-greyscale-50/50 caption1 font-normal'>
          Vui lòng nhập mật khẩu mới và xác nhận.
        </p>
        <Suspense>
          <ResetPassIndex />
        </Suspense>
      </div>
    </>
  )
}
