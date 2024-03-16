'use client'

import Image from 'next/image'

export default function FormContact() {
  return (
    <div className='flex flex-col xmd:container xmd:order-1 lg:sticky h-fit w-[39.01903rem] xmd:w-[26.35432rem] lg:pt-[1.75695rem] pb-[3.51391rem] items-start rounded-[0.87848rem] bg-white shadow-[2px_2px_12px_0px_rgba(0,0,0,0.04)] right-[6.08rem] top-[15rem] lg:translate-x-[-6.08rem] lg:translate-y-[-6.58858rem] transition-all'>
      <div className='xmd:hidden absolute top-0 z-10 w-full h-[6.58858rem] rounded-[0.87848rem] bg-[rgba(232,235,239,0.80)]'></div>
      <div className='flex bg-white rounded-[0.87848rem] flex-col items-center lg:px-[1.46413rem]'>
        <div className='flex z-20 rounded-[0.87848rem] items-start mb-[3.15rem] xmd:pt-[1.46413rem] xmd:px-[0.73206rem] xmd:pb-[1.1713rem] xmd:bg-[#E8EBEF]'>
          <div className='mr-[0.87848rem] flex justify-center w-[3.07467rem] xmd:w-[2.92826rem] h-[3.07467rem] xmd:h-[2.92826rem] p-[0.73206rem] xmd:p-[0.4183rem] items-start rounded-[0.51245rem] xmd:rounded-[0.48807rem] bg-gradient-to-l from-[#102841] to-[#1359A1]'>
            <Image
              width={24.004}
              height={23.288}
              alt='mess icon'
              src={'/contact/mess.svg'}
            />
          </div>
          <p className='sub1 xmd:body2 xmd:text-greyscale-50 font-medium text-greyscale-80 flex-1'>
            Gửi thắc mắc của bạn tới AstroMazing, chúng tôi sẽ giúp bạn giải đáp
            thắc mắc trong thời gian sớm nhất
          </p>
        </div>
        <form className='flex flex-col items-start w-full'>
          <div className='flex p-[1.46413rem] flex-col items-start w-full h-[15rem] mb-[1.76rem]'></div>
          <div className='flex flex-col items-start px-[1.46413rem] xmd:px-[0.73206rem] w-full'>
            <button className='flex justify-center items-center w-full h-[3.51391rem] px-[3.51391rem] py-[1.75695rem] rounded-[0.58565rem] bg-gradient-to-l from-[#102841] to-[#1359A1]'>
              <p className='button font-semibold text-center text-white mr-[0.73206rem]'>
                GỬI NGAY
              </p>
              <Image
                width={16}
                height={16}
                alt='next icon'
                src={'/contact/next.svg'}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
