'use client'

import BreadCrumb from '@/components/breadcrumb'
import Image from 'next/image'

export default function NavContact() {
  return (
    <section className='pt-[8rem] xmd:pt-[4.09956rem] w-full bg-[#17395C]'>
      <div className='container flex lg:h-[16.54466rem] flex-col items-start xmd:mb-[2.63543rem]'>
        <div className='mt-[1.76rem] xmd:w-[27.45242rem]'>
          <BreadCrumb></BreadCrumb>
        </div>
        <h4 className='h4 xmd:h5 mt-[1.76rem] font-medium xmd:font-semibold text-white'>
          Liên hệ với AstroMazing
        </h4>
        <div className='mt-[2.34rem] xmd:mt-[1.17rem] flex flex-col items-start'>
          <p className='body2 text-white font-normal mb-[0.73206rem]'>
            Ghé gian hàng tại:
          </p>
          <div className='flex items-start'>
            <div className='flex justify-center w-[2.63543rem] xmd:w-[2.92826rem] h-[2.63543rem] xmd:h-[2.92826rem] rounded-[0.51245rem] bg-[rgba(255,255,255,0.20)]'>
              <Image
                className='object-contain'
                src={'/contact/fb.svg'}
                alt='icon fb'
                width={26.667}
                height={26.667}
              />
            </div>
            <div className='flex justify-center mx-[0.87848rem] w-[2.63543rem] xmd:w-[2.92826rem] h-[2.63543rem] xmd:h-[2.92826rem] rounded-[0.51245rem] bg-[rgba(255,255,255,0.20)]'>
              <Image
                className='object-contain'
                src={'/contact/heart.svg'}
                alt='icon fb'
                width={26.667}
                height={26.667}
              />
            </div>
            <div className='flex justify-center w-[2.63543rem] xmd:w-[2.92826rem] h-[2.63543rem] xmd:h-[2.92826rem] rounded-[0.51245rem] bg-[rgba(255,255,255,0.20)]'>
              <Image
                className='object-contain'
                src={'/contact/tiktok.svg'}
                alt='icon fb'
                width={26.667}
                height={26.667}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
