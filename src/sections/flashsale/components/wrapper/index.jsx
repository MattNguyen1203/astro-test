import VoucherSlide from '@/sections/home/components/flashvoucher/slidevoucher'
import Image from 'next/image'
import GridProductFL from '../gridproduct'
import VoucherSlideRes from '@/sections/home/components/flashvoucher/slidevoucherres'

export default function WrapperFlashSale({isMobile}) {
  return (
    <section className='relative min-h-screen md:pt-[5.34rem] bg-[#08131e] pb-[4.66rem] xmd:bg-transparent'>
      {!isMobile && (
        <Image
          className='absolute top-0 left-0 w-full h-[70.13177rem] object-cover'
          src={'/flashsale/flash-voucher.jpg'}
          alt='flash voucher'
          width={1400}
          height={950}
        />
      )}
      <div className='relative z-10'>
        <div className='relative flex mx-auto w-fit mb-[1.76rem] xmd:mb-[1.46rem]'>
          <h1 className='text-[2.92826rem] xmd:text-[1.46413rem] xmd:tracking-[0.11713rem] font-bold text-white leading-[1.2] tracking-[0.23426rem] font-workSans fl mr-[0.44rem]'>
            FL SH VOUCHER{' '}
          </h1>
          <h2 className='text-[2.92826rem] xmd:text-[1.46413rem] xmd:tracking-[0.11713rem] font-bold text-white leading-[1.2] tracking-[0.23426rem] font-workSans fl'>
            12.12
          </h2>
        </div>
        {isMobile ? (
          <VoucherSlideRes data={new Array(Math.ceil(14)).fill(0)} />
        ) : (
          <VoucherSlide data={new Array(Math.ceil(14)).fill(0)} />
        )}
        <GridProductFL isMobile={isMobile} />
        <GridProductFL isMobile={isMobile} />
        <GridProductFL isMobile={isMobile} />
      </div>
    </section>
  )
}
