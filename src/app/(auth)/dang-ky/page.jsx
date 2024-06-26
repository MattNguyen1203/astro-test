import {fetchMetaData} from '@/lib/fetchMetaData'
import {getMeta} from '@/lib/getMeta'
import SignUpIndex from '@/sections/signup'
import Image from 'next/image'

export async function generateMetadata({params}) {
  const result = await fetchMetaData(`tai-khoan/`)
  return getMeta(result, `dang-ky`)
}

export default function SignUpPage({searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport === 'mobile'
  // className='absolute top-0 -translate-y-[calc(100%+3.49rem)] left-1/2 -translate-x-1/2 w-[17.68755rem] h-[4.68521rem] object-contain z-50'
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
      <div className='relative z-10 lg:mt-[7.32rem] mx-auto w-[23rem] xmd:w-full xmd:px-[1.72rem]'>
        <span className='block font-normal text-center text-blue-900 h6'>
          Đăng ký tham gia
        </span>
        <h1 className='font-semibold text-center text-blue-900 h4 xmd:h5 xmd:mt-[0.29rem]'>
          Voucher thả ga
        </h1>
        <SignUpIndex />
      </div>
    </>
  )
}
