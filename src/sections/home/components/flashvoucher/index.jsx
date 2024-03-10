import Image from 'next/image'
import Link from 'next/link'
import VoucherSlide from './slidevoucher'
const listData = new Array(14).fill(0)
export default function FlashVoucher() {
  return (
    <article className='w-full bg-linearFlash backdrop-blur-[5px] h-fit'>
      <div className='container pt-[3.5rem] relative'>
        <Image
          src={'/home/circle-flash-voucher1.png'}
          alt='logo astromazing circle'
          width={72}
          height={72}
          className='absolute top-0 right-0 z-10 object-contain translate-x-1/2 -translate-y-1/2 size-[5.24597rem]'
          quality={100}
        />
        <div className='flex items-center justify-between pb-[2.05rem]'>
          <div className='w-[32.91519rem] h-[1.87rem] relative'>
            <Image
              className='object-contain size-full'
              src={'/home/flash-voucher.png'}
              alt='flash voucher'
              width={530}
              height={30}
              quality={100}
            />
            <Image
              className='object-contain size-[7.5rem] absolute top-[45%] -translate-y-1/2 left-[1rem]'
              src={'/home/electric.svg'}
              alt='tia set'
              width={80}
              height={80}
            />
          </div>
          <div className='flex *:ml-[0.5rem]'>
            <div className='w-[5.12445rem] h-[3.95315rem] flex justify-center items-center rounded-[0.29283rem] ml-0 shadow-[0px_1px_19px_0px_rgba(255,255,255,0.22)] relative'>
              <Image
                className='absolute top-0 left-0 size-full'
                src={'/home/border-left-fl.svg'}
                alt='border'
                width={70}
                height={54}
              />
              <span className='text-[2.04978rem] leading-[1.2] font-bold bg-linearFlashText bg-clip-text text-transparent relative z-10'>
                22
              </span>
            </div>
            <div className='w-[5.12445rem] h-[3.95315rem] flex justify-center items-center rounded-[0.29283rem] bg-white'>
              <span className='text-[2.04978rem] leading-[1.2] font-bold bg-linearFlashText bg-clip-text text-transparent'>
                11
              </span>
            </div>
            <div className='w-[5.12445rem] h-[3.95315rem] flex justify-center items-center rounded-[0.29283rem] relative '>
              <Image
                className='absolute top-0 left-0 size-full'
                src={'/home/border-right-fl.svg'}
                alt='border'
                width={70}
                height={54}
              />
              <span className='text-[2.04978rem] leading-[1.2] font-bold bg-linearFlashText bg-clip-text text-transparent relative z-10'>
                22
              </span>
            </div>
          </div>
        </div>
        <VoucherSlide data={listData} />
        <div className='mt-[7.91rem] flex h-[8.56515rem] relative'>
          <div className='bg-[#EEB357] size-full relative rounded-[1.1713rem]'>
            <Image
              className='absolute -top-[4.24rem] -left-[3.66rem] size-[17.49341rem] object-cover '
              src={'/home/circle-yellow.svg'}
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
              className='relative z-10 font-medium text-white h6'
              href={'/dang-ky'}
            >
              ĐĂNG KÝ /
            </Link>
            <Link
              className='ml-[0.3rem] flex items-center relative z-10'
              href={'/dang-nhap'}
            >
              <span className='font-medium text-white h6 mr-[0.66rem] inline-block'>
                ĐĂNG NHẬP NGAY
              </span>
              <Image
                className='size-[2.63543rem] object-contain brightness-0 invert'
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
