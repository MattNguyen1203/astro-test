'use client'

import Image from 'next/image'
import FormContact from './FormContact'

export default function IndexFormContact() {
  return (
    <div
      className='flex flex-col xmd:container xmd:order-1 lg:sticky h-fit w-[39.01903rem] xmd:w-[26.35432rem] lg:pt-[1.75695rem] pb-[3.51391rem] 
    items-start rounded-[0.87848rem] bg-white 
    shadow-[-3px_2px_20px_0px_rgba(0,0,0,0.04),2px_2px_12px_0px_rgba(0,0,0,0.02)] 
     top-[15rem] lg:translate-y-[-6.58858rem] 
    transition-all tablet:w-full tablet:bg-[#17395C] tablet:rounded-none tablet:items-center tablet:pb-[3rem]'
    >
      <div className='xmd:hidden absolute top-0 z-10 w-full h-[6.58858rem] rounded-tr-[0.87848rem] rounded-tl-[0.87848rem] bg-[rgba(232,235,239,0.80)]'></div>
      <div className='flex bg-white rounded-[0.87848rem] flex-col items-center lg:px-[1.46413rem] tablet:w-[94%]'>
        <div
          className='flex z-20 rounded-tl-[0.87848rem] rounded-tr-[0.87848rem] items-start 
        mb-[3.15rem] xmd:pt-[1.46413rem] xmd:px-[0.73206rem] xmd:pb-[1.1713rem] 
        xmd:bg-[#E8EBEF] xmd:mb-[1.76rem]
        tablet:p-[2rem] tablet:mb-[1.5rem] tablet:bg-[#E8EBEF] tablet:w-full'
        >
          <div className='mr-[0.87848rem] tablet:mr-[2rem] flex justify-center tablet:w-[4rem] tablet:h-[4rem] w-[3.07467rem] xmd:w-[2.92826rem] h-[3.07467rem] xmd:h-[2.92826rem] p-[0.73206rem] xmd:p-[0.4183rem] items-start rounded-[0.51245rem] xmd:rounded-[0.48807rem] bg-gradient-to-l from-[#102841] to-[#1359A1]'>
            <Image
              width={24.004}
              height={23.288}
              alt='mess icon'
              src={'/contact/mess.svg'}
            />
          </div>
          <p className='flex-1 font-medium sub1 xmd:body2 xmd:text-greyscale-50 text-greyscale-80 tablet:text-[2rem]'>
            Gửi thắc mắc của bạn tới AstroMazing, chúng tôi sẽ giúp bạn giải đáp
            thắc mắc trong thời gian sớm nhất
          </p>
        </div>
        <div className='flex flex-col items-start w-full xmd:px-[0.73rem]'>
          <FormContact />
        </div>
      </div>
    </div>
  )
}
