import Image from 'next/image'
import Link from 'next/link'
import VoucherSlide from './slidevoucher'
const listData = new Array(14).fill(0)
export default function FlashVoucher() {
  return (
    <article className='w-full bg-linearFlash backdrop-blur-[5px] h-fit'>
      <div className='container pt-[3.5rem] '>
        <div className='flex items-center justify-between pb-[2.05rem]'>
          <Image
            className='w-[32.91519rem] h-[1.87rem] flex-shrink-0 object-cover'
            src={'/home/flash-voucher.svg'}
            alt='flash voucher'
            width={530}
            height={30}
          />
          <div className='flex *:ml-[0.5rem]'>
            <div className='size-[4.375rem] flex justify-center items-center bg-white rounded-[0.25rem] ml-0'>
              <span className='text-[2.04978rem] leading-[1.2] font-bold bg-linearFlashText bg-clip-text text-transparent'>
                22
              </span>
            </div>
            <div className='size-[4.375rem] flex justify-center items-center bg-white rounded-[0.25rem]'>
              <span className='text-[2.04978rem] leading-[1.2] font-bold bg-linearFlashText bg-clip-text text-transparent'>
                22
              </span>
            </div>
            <div className='size-[4.375rem] flex justify-center items-center bg-white rounded-[0.25rem]'>
              <span className='text-[2.04978rem] leading-[1.2] font-bold bg-linearFlashText bg-clip-text text-transparent'>
                22
              </span>
            </div>
          </div>
        </div>
        <VoucherSlide data={listData} />
        <div className='mt-[7.91rem] flex h-[8.56515rem] relative'>
          <div className='bg-[#EEB357] size-full relative rounded-[1.1713rem]'>
            <Image
              className='absolute -top-[1.24rem] -left-[0.66rem] size-[11.49341rem] object-cover'
              src={'/home/circle-flash.svg'}
              alt='ware'
              width={157}
              height={157}
            />
            <Image
              className='absolute bottom-0 left-[0.33rem] w-[9.39971rem] h-[15.66618rem]'
              src={'/home/girl-voucher.png'}
              alt='girl voucher'
              width={130}
              height={215}
            />
            <Link
              href={'/'}
              className='w-[31.8448rem] absolute top-1/2 -translate-y-1/2 left-[12.08rem]'
            >
              <h4 className='font-normal text-white sub1'>Voucher dành cho</h4>
              <h3 className='font-medium text-white h5'>
                Khách hàng thân thiết
              </h3>
            </Link>
          </div>
          <div className='h6 font-semibold w-[41.142rem] h-[8.56515rem] flex justify-center items-center text-white absolute right-0 top-0 '>
            <Image
              className='absolute top-0 left-0 z-0 object-cover size-full rounded-tr-[1.1713rem] rounded-br-[1.1713rem]'
              src={'/home/bg-login.png'}
              alt='background elip'
              width={562}
              height={118}
            />
            <Link
              className='font-medium text-white h6'
              href={'/dang-ky'}
            >
              ĐĂNG KÝ /
            </Link>
            <Link
              className='ml-[0.3rem] flex items-center'
              href={'/dang-nhap'}
            >
              <span className='font-medium text-white h6 mr-[0.66rem] inline-block'>
                ĐĂNG NHẬP NGAY
              </span>
              <Image
                className='size-[2.63543rem] object-contain'
                src={'/home/touch-login.svg'}
                alt='icon touch'
                width={36}
                height={36}
              />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
