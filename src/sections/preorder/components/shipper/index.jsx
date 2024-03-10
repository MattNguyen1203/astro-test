import ICArrowRightWhite from '@/components/icon/ICArrowRightWhite'
import Image from 'next/image'
import Link from 'next/link'

export default function Shipper() {
  return (
    <div className='py-[3.81rem]'>
      <div className='container rounded-[1.46413rem] bg-white h-[8.56515rem] relative flex items-center group hover:bg-[#EEB357] transition-all duration-200 select-none'>
        <div className='size-[5rem] absolute top-1/2 -translate-y-1/2 left-[3.5rem] bg-[#FFDF6B] blur-[10px] rounded-full'></div>
        <Image
          className='size-[20rem] object-cover absolute top-1/2 -translate-y-1/2 -left-[5rem] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none'
          src={'/home/circle-yellow.svg'}
          alt='circle'
          width={180}
          height={180}
        />
        <Image
          className='w-[9.51684rem] h-[14.05564rem] object-cover absolute bottom-0 left-[0.73rem] group-hover:scale-110 origin-bottom-left transition-all duration-300'
          src={'/preorder/shipper.png'}
          alt='shipper'
          width={130}
          height={200}
          quality={100}
        />
        <div className='flex flex-col w-[36.08565rem] ml-[15.45rem] h-fit relative z-10'>
          <h1 className='font-medium text-blue-600 transition-all duration-300 sub1 group-hover:text-white'>
            AstroMazing cam kết
          </h1>
          <h2 className='mt-[0.59rem] h5 font-bold text-blue-600 group-hover:text-white transition-all duration-300'>
            GIAO HÀNG ĐÚNG THỜI GIAN
          </h2>
          <ICArrowRightWhite className='absolute top-1/2 -translate-y-1/2 -left-[2.49rem] -translate-x-full group-hover:-left-[1rem] transition-all duration-300' />
        </div>
        <div className='absolute top-0 left-0 z-0 overflow-hidden size-full rounded-[1.46413rem]'>
          <div className='absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 w-[52.34905rem] h-[68.20769rem] pointer-events-none rounded-full bg-[#10273F] rotate-[54.632deg] scale-[10%] group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 opacity-0'></div>
        </div>
        <Link
          href='/'
          className='absolute top-1/2 -translate-y-1/2 z-10 flex items-center w-fit right-[7.32rem]'
        >
          <span className='font-medium transition-all duration-300 block w-fit mr-[0.66rem] sub1 text-greyscale-80 group-hover:text-white'>
            XEM CHI TIẾT
          </span>
          <Image
            className='size-[2.63543rem] object-contain transition-all duration-300  group-hover:brightness-0 group-hover:invert'
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
