import VoucherSlide from '@/sections/home/components/flashvoucher/slidevoucher'
import Image from 'next/image'
import GridProductFL from '../gridproduct'
import VoucherSlideRes from '@/sections/home/components/flashvoucher/slidevoucherres'
import BtnScroll from '../btnscroll'

export default function WrapperFlashSale({isMobile}) {
  return (
    <section className='relative min-h-screen bg-[#08131e] pb-[4.66rem] xmd:bg-transparent'>
      <div className='flex justify-center md:py-[1.54rem] bg-[#0A1A29] xmd:h-[5.49048rem] z-[50] xmd:overflow-x-auto hidden-scrollbar sticky top-[8.1rem] xmd:top-[4.1rem] left-0'>
        <BtnScroll isMobile={isMobile} />
      </div>
      {!isMobile && (
        <Image
          className='sticky z-[5] top-[8.1rem] left-0 w-full h-screen object-cover'
          src={'/flashsale/flash-voucher.jpg'}
          alt='flash voucher'
          width={1400}
          height={950}
        />
      )}
      <div className='relative z-10 md:-mt-[calc(100vh-5.34rem)] xmd:mt-[2.34rem]'>
        <div className='relative flex mx-auto w-fit mb-[1.76rem] xmd:mb-[1.46rem] font-workSans'>
          <div className='text-[2.92826rem] xmd:text-[1.46413rem] xmd:tracking-[0.11713rem] font-bold text-white leading-[1.2] tracking-[0.23426rem] font-workSans fl mr-[1rem] relative'>
            FL
            <div className='size-[10rem] absolute top-[50%] left-[-0.3rem] -translate-y-1/2 xmd:size-[5rem] xmd:-left-[0.2rem] pointer-events-none'>
              <Image
                className='size-full'
                src={'/home/electric.svg'}
                alt='tia set'
                width={80}
                height={80}
              />
            </div>
          </div>
          <h2 className='text-[2.92826rem] xmd:text-[1.46413rem] xmd:tracking-[0.11713rem] font-bold text-white leading-[1.2] tracking-[0.23426rem] font-workSans fl'>
            SH VOUCHER 12.12
          </h2>
        </div>
        {isMobile ? (
          <VoucherSlideRes data={new Array(Math.ceil(14)).fill(0)} />
        ) : (
          <VoucherSlide data={new Array(Math.ceil(14)).fill(0)} />
        )}
        <GridProductFL
          isMobile={isMobile}
          id='ipad1'
          title={'Phụ kiện iPad 1'}
        />
        <GridProductFL
          isMobile={isMobile}
          id='ipad2'
          title={'Phụ kiện iPad 2'}
        />
        <GridProductFL
          isMobile={isMobile}
          id='ipad3'
          title={'Phụ kiện iPad 3'}
        />
      </div>
    </section>
  )
}
