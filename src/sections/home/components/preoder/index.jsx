import ICArrowRightWhite from '@/components/icon/ICArrowRightWhite'
import Image from 'next/image'
import Link from 'next/link'
import SlideInfinity from './slideinfinity'

export default function PreOder() {
  return (
    <div className='xmd:flex-col container h-[8.05rem] xmd:h-[10.05rem] bg-white relative rounded-[0.87848rem] flex'>
      <div className='relative w-[48.16984rem] xmd:w-full h-full'>
        <div className='relative size-full group'>
          <Image
            className='xmd:absolute xmd:top-0 xmd:left-0 w-[11.9rem] h-[11.7rem] xmd:w-[9.46706rem] xmd:h-[9.68668rem] object-cover absolute -left-[2.12rem] bottom-0 z-50 group-hover:scale-110 origin-bottom transition-all duration-500'
            src={'/home/customer-preoders.png'}
            alt='customer'
            width={165}
            height={165}
          />
          <div className='xmd:p-0 relative z-10 size-full rounded-tr-[0.87848rem] rounded-br-[0.87848rem] bg-white before:absolute before:origin-bottom-right before:w-0 before:h-full before:bg-blue-700 before:rounded-tr-[0.87848rem] before:rounded-br-[0.87848rem] group-hover:before:size-full before:transition-all before:duration-700 before:right-0 before:bottom-0 before:opacity-0 group-hover:before:opacity-100 flex justify-end items-center pr-[2.49rem]'>
            <Link
              href={'/pre-order'}
              className='relative z-20 flex'
            >
              <ICArrowRightWhite className='absolute top-1/2 -translate-y-1/2 -left-[2.48rem] -translate-x-full opacity-0 group-hover:opacity-100 group-hover:-left-[1.24rem] transition-all duration-200 delay-300' />
              <div className='flex flex-col'>
                <h3 className='xmd:w-[15.81259rem] xmd:h-[1.1713rem] xmd:sub2 font-bold text-blue-600 transition-all duration-500 h5 group-hover:text-white'>
                  ĐẶT TRƯỚC SẢN PHẨM MỚI
                </h3>
                <span className='mt-[0.59rem] xmd:mt-[0.32rem] xmd:w-[14.12884rem] xmd:h-[0.85183rem] xmd:caption2 text-blue-600 font-medium group-hover:text-white transition-all duration-500'>
                  iPhone 14 pro max sắp ra mắt
                </span>
              </div>
              <div className='size-[3.51391rem] xmd:size-[2.34261rem] relative ml-[2.42rem] xmd:ml-0'>
                <Image
                  className='absolute top-0 left-0 z-10 object-contain transition-all duration-500 size-full group-hover:z-0 group-hover:opacity-0'
                  src={'/home/cart-preoder-blue.svg'}
                  alt='cart blue'
                  width={38}
                  height={48}
                />
                <Image
                  className='absolute top-0 left-0 z-0 object-contain transition-all duration-500 opacity-0 size-full group-hover:z-10 group-hover:opacity-100'
                  src={'/home/cart-preoder-white.svg'}
                  alt='cart blue'
                  width={38}
                  height={48}
                />
              </div>
            </Link>
          </div>
        </div>
        <div className='xmd:left-[-3.46706rem] xmd:top-full absolute top-0 w-[10.2rem] h-full right-[1rem] bg-[linear-gradient(90deg,#FFF_5.23%,rgba(255,255,255,0.00)_89%)] translate-x-full z-[5] pointer-events-none'></div>
      </div>
      <div className='xmd:w-[calc(100%-7.46706rem)] xmd:ml-[7.46706rem] w-[calc(100%-48.16984rem)] h-full bg-[#ffedd2] rounded-tr-[0.87848rem] rounded-br-[0.87848rem]'>
        <SlideInfinity />
      </div>
    </div>
  )
}
