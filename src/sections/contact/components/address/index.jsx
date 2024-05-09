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
            <p className='sub1 xmd:body1 font-medium xmd:font-semibold text-[#454545] flex-1 xmd:w-[24.92679rem] tablet:text-[2rem] tablet:font-semibold'>
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
        <div className='flex justify-start items-center relative rounded-[0.87848rem] w-full h-[23.06003rem] tablet:h-[50rem]'>
          <iframe
            className='h-[23.06003rem] tablet:h-[50rem] w-full'
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d489.9388888643839!2d106.687698!3d10.772111!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ff7bdb7260d%3A0x28be00753ed31c8e!2sASTROMAZING!5e0!3m2!1sen!2s!4v1715189918792!5m2!1sen!2s'
            style={{border: '0'}}
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </div>
  )
}
