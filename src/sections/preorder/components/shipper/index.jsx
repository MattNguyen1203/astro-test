import ICArrowRightWhite from '@/components/icon/ICArrowRightWhite'
import Image from 'next/image'
import Link from 'next/link'

export default function Shipper({isMobile}) {
  return (
    <div className='py-[3.81rem] xmd:pt-[2.34rem] xmd:pb-[3.51rem]'>
      <div className='container rounded-[1.46413rem] bg-white h-[8.56515rem] relative flex md:items-center group hover:bg-[#EEB357] transition-all duration-200 select-none xmd:bg-[linear-gradient(44deg,#FFF0D8_52.89%,#FFD797_107.96%)] xmd:pt-[1.1rem] xmd:px-[0.88rem] xmd:pb-[0.73rem] xmd:rounded-[0.58565rem] xmd:flex-col xmd:justify-between xmd:h-[7.9063rem]'>
        {!isMobile && (
          <>
            <div className='size-[5rem] absolute top-1/2 -translate-y-1/2 left-[3.5rem] bg-[#FFDF6B] blur-[10px] rounded-full'></div>
            <Image
              className='size-[20rem] object-cover absolute top-1/2 -translate-y-1/2 -left-[5rem] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none'
              src={'/home/circle-yellow.svg'}
              alt='circle'
              width={180}
              height={180}
            />
          </>
        )}

        <Image
          className='w-[9.51684rem] h-[14.05564rem] xmd:w-[6.07613rem] xmd:h-[9.0776rem] object-cover absolute bottom-0 left-[0.73rem] group-hover:scale-110 origin-bottom-left transition-all duration-300 xmd:bottom-[0.73rem] xmd:left-auto xmd:right-[1.54rem] xmd:scale-x-[-1] xmd:origin-center xmd:z-20 xmd:pointer-events-none'
          src={'/preorder/shipper.png'}
          alt='shipper'
          width={130}
          height={200}
          quality={100}
        />
        <div className='flex flex-col md:w-[36.08565rem] md:ml-[15.45rem] h-fit relative z-10'>
          <h1 className='font-medium text-blue-600 transition-all duration-300 sub1 group-hover:text-white xmd:caption2 xmd:tracking-[0.00732rem] xmd:text-brown-800'>
            AstroMazing cam kết
          </h1>
          <h2 className='md:mt-[0.59rem] h5 font-bold text-blue-600 group-hover:text-white transition-all duration-300 xmd:sub2 xmd:font-semibold xmd:text-greyscale-80'>
            GIAO HÀNG ĐÚNG THỜI GIAN
          </h2>
          {!isMobile && (
            <ICArrowRightWhite className='absolute top-1/2 -translate-y-1/2 -left-[2.49rem] -translate-x-full group-hover:-left-[1rem] transition-all duration-300' />
          )}
        </div>
        <div className='absolute top-0 left-0 z-0 overflow-hidden size-full rounded-[1.46413rem]'>
          <div className='absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 w-[52.34905rem] h-[68.20769rem] pointer-events-none rounded-full bg-[#10273F] rotate-[54.632deg] scale-[10%] group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 opacity-0'></div>
        </div>
        <Link
          href='/'
          className='md:absolute md:top-1/2 md:-translate-y-1/2 z-10 flex items-center w-fit md:right-[7.32rem] xmd:h-[3.22108rem] xmd:rounded-[0.58565rem] xmd:px-[0.88rem] xmd:bg-blue-700 xmd:w-full xmd:mt-auto'
        >
          <span className='font-medium transition-all duration-300 block w-fit mr-[0.66rem] sub1 text-greyscale-80 group-hover:text-white xmd:text-white xmd:caption1 xmd:font-semibold'>
            XEM CHI TIẾT
          </span>
          <Image
            className='size-[2.63543rem] object-contain transition-all duration-300  md:group-hover:brightness-0 md:group-hover:invert xmd:brightness-0 xmd:invert xmd:size-[1.75695rem] xmd:opacity-70'
            src={'/home/touch-login.svg'}
            alt='touch icon'
            width={36}
            height={36}
          />
        </Link>
      </div>
    </div>
  )
}
