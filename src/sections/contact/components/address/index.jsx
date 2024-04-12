'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AddressContact() {
  return (
    <div
      className='flex justify-start tablet:mb-[2.75rem] mb-[8.49rem] xmd:mb-[0rem] xmd:w-full xmd:px-[0.54905rem] xmd:order-2 bg-white 
    xmd:mt-[1.46rem]
    tablet:justify-center'
    >
      <div className='flex flex-col lg:h-[36.45681rem] mt-[2.34rem] xmd:mb-[2.64rem] tablet:w-[94%] tablet:mt-[3rem]'>
        <div className='mb-[1.75695rem] tablet:mb-[2.6rem] flex flex-col items-start'>
          <div className='mb-[0.87848rem] tablet:mb-[2rem] lg:w-[38.10622rem] flex items-start px-[0.58565rem]'>
            <p className='sub1 font-medium text-[#454545] flex-1 xmd:w-[24.92679rem] tablet:text-[2rem] tablet:font-semibold'>
              CÔNG TY TNHH ASTROMAZING VIETNAM:
            </p>
          </div>
          <div className='flex flex-col items-start'>
            <div className='flex items-center lg:w-[36.96925rem]'>
              <Image
                className='object-cover'
                width={32}
                height={32}
                alt='add icon'
                src='/contact/address.svg'
              />
              <span
                className='flex-1 body2 ml-[0.58565rem] xmd:w-[22.06633rem] font-normal text-[#212529]
              tablet:text-[1.8rem]'
              >
                5376 đường Nguyễn Thị Minh Khai, Phường 5 Quận 3, Tp. Hồ Chí
                Minh
              </span>
            </div>
            <div className='flex items-center lg:w-[36.96925rem]'>
              <Image
                className='object-cover'
                width={32}
                height={32}
                alt='add icon'
                src='/contact/phone.svg'
              />
              <Link
                prefetch={false}
                href={'tel: 0947492020'}
                className='flex-1 body2 ml-[0.58565rem] font-normal text-[#212529] tablet:text-[1.8rem]'
              >
                +094 749 2020
              </Link>
            </div>
            <div className='flex items-center lg:w-[36.96925rem]'>
              <Image
                className='object-cover'
                width={32}
                height={32}
                alt='add icon'
                src='/contact/oclock.svg'
              />
              <span className='flex-1 body2 ml-[0.58565rem] font-normal text-[#212529] tablet:text-[1.8rem]'>
                09:00 - 21:00
              </span>
            </div>
            <div className='flex items-center lg:w-[36.96925rem]'>
              <Image
                className='object-cover'
                width={32}
                height={32}
                alt='add icon'
                src='/contact/book.svg'
              />
              <p className='flex-1 body2 ml-[0.58565rem] font-normal text-[#212529] tablet:text-[1.8rem]'>
                Mã số doanh nghiệp:{' '}
                <span className='body2 font-semibold text-[#212529] tablet:text-[1.8rem]'>
                  0317658292
                </span>
              </p>
            </div>
          </div>
        </div>
        <div
          className='flex justify-start items-center relative rounded-[0.87848rem] w-full h-[23.06003rem]
         tablet:h-[50rem]'
        >
          <Image
            className='lg:object-cover rounded-[0.87848rem] tablet:rounded-xl'
            fill
            alt='img map'
            src={'/contact/imagemap.png'}
          />
        </div>
      </div>
    </div>
  )
}
