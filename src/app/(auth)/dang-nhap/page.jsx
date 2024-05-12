import {fetchMetaData} from '@/lib/fetchMetaData'
import {getMeta} from '@/lib/getMeta'
import SignInIndex from '@/sections/signin'
import Image from 'next/image'

export async function generateMetadata({params}) {
  const result = await fetchMetaData(`tai-khoan/`)
  return getMeta(result, `dang-nhap`)
}

export default function SignInPage({searchParams}) {
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
      <div className='relative z-10 lg:mt-[7.32rem] mx-auto w-[23rem] xmd:w-full xmd:px-[1.76rem]'>
        <span className='block font-normal text-center text-blue-900 h6'>
          Chào mừng bạn đến với
        </span>
        <h1 className='font-semibold text-center text-blue-900 h4 xmd:h5 xmd:mt-[0.29rem]'>
          AstroMazing
        </h1>
        <SignInIndex status={searchParams?.status} />
      </div>
    </>
  )
}
