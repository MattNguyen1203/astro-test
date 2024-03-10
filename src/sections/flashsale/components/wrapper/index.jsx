import VoucherSlide from '@/sections/home/components/flashvoucher/slidevoucher'
import Image from 'next/image'
import GridProdutcFL from '../gridproduct'

export default function WrapperFlashSale() {
  return (
    <section className='relative min-h-screen pt-[5.34rem] bg-[#08131e] pb-[4.66rem]'>
      <Image
        className='absolute top-0 left-0 w-full h-[70.13177rem] object-cover'
        src={'/flashsale/flash-voucher.jpg'}
        alt='flash voucher'
        width={1400}
        height={950}
      />
      <div className='relative z-10'>
        <div className='relative flex mx-auto w-fit mb-[1.76rem]'>
          <h1 className='text-[2.92826rem] font-bold text-white leading-[1.2] tracking-[0.23426rem] font-workSans fl mr-[0.44rem]'>
            FL SH VOUCHER{' '}
          </h1>
          <h2 className='text-[2.92826rem] font-bold text-white leading-[1.2] tracking-[0.23426rem] font-workSans fl'>
            12.12
          </h2>
        </div>
        <VoucherSlide data={new Array(Math.ceil(14)).fill(0)} />
        <GridProdutcFL />
        <GridProdutcFL />
        <GridProdutcFL />
      </div>
    </section>
  )
}
