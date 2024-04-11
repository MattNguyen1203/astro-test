import Image from 'next/image'
import Link from 'next/link'
import VoucherSlide from './slidevoucher'
import VoucherSlideRes from './slidevoucherres'
import CountDown from './countdown'

const listData = new Array(14).fill(0)
export default function FlashVoucher({isMobile}) {
  return (
    <article className='w-full bg-[linear-gradient(180deg,#02315D_26.21%,rgba(246,187,145,0.55)_68.35%,rgba(255,255,255,0.00)_105.67%)] xmd:bg-[linear-gradient(180deg,#002C54_0%,#02315D_16.27%,#02315D_30.03%,rgba(92,100,112,0.83)_48.06%,rgba(246,187,145,0.55)_78.73%,rgba(255,255,255,0.00)_94.11%)] backdrop-blur-[5px] h-fit xmd:mt-[0.88rem] xmd:rounded-tl-[1.1713rem] xmd:rounded-tr-[1.1713rem]'>
      <div className='container pt-[3.5rem] relative xmd:full-mb'>
        {!isMobile && (
          <Image
            src={'/home/circle-flash-voucher1.png'}
            alt='logo astromazing circle'
            width={72}
            height={72}
            className='absolute top-0 right-0 z-10 object-contain translate-x-1/2 -translate-y-1/2 size-[5.24597rem]'
            quality={100}
          />
        )}
        <div className='flex items-center justify-between pb-[2.05rem] xmd:px-[0.55rem]'>
          <div className='relative flex w-fit'>
            <Image
              className='object-contain size-[10rem] absolute top-[45%] -translate-y-1/2 -left-[0.2rem] xmd:size-[5rem] xmd:-left-[0.2rem] pointer-events-none'
              src={'/home/electric.svg'}
              alt='tia set'
              width={80}
              height={80}
            />
            <h2 className='text-[2.92826rem] font-bold text-white leading-[1.2] tracking-[0.23426rem] xmd:text-[1.1713rem] xmd:tracking-[0.0937rem] font-workSans fl mr-[1.6rem] xmd:mr-[1.2rem]'>
              FL{' '}
            </h2>
            <h2 className='text-[2.92826rem] font-bold text-white leading-[1.2] tracking-[0.23426rem] xmd:text-[1.1713rem] xmd:tracking-[0.0937rem] font-workSans fl mr-[0.44rem] xmd:whitespace-nowrap'>
              SH VOUCHER{' '}
            </h2>
            <h2 className='text-[2.92826rem] font-bold text-white leading-[1.2] tracking-[0.23426rem] xmd:text-[1.1713rem] xmd:tracking-[0.0937rem] font-workSans fl'>
              12.12
            </h2>
          </div>
          <CountDown />
        </div>
        {isMobile ? (
          <VoucherSlideRes data={listData} />
        ) : (
          <VoucherSlide data={listData} />
        )}
        <div className='mt-[7.91rem] xmd:mt-[1.46rem] flex h-[8.56515rem] relative'>
          <div className='bg-[#EEB357] size-full relative rounded-[1.1713rem] xmd:rounded-[0.58565rem] xmd:w-[96%] xmd:mx-auto xmd:bg-[linear-gradient(44deg,#FFF0D8_52.89%,#FFD797_107.96%)]'>
            {!isMobile && (
              <Image
                className='absolute -top-[4.24rem] -left-[3.66rem] size-[17.49341rem] object-cover '
                src={'/home/circle-yellow.svg'}
                alt='ware'
                width={157}
                height={157}
              />
            )}
            <Image
              className='absolute bottom-0 left-[0.33rem] w-[9.39971rem] h-[15.66618rem] xmd:w-[4.1142rem] xmd:h-[6.85695rem] xmd:bottom-[0.76rem] xmd:left-auto xmd:right-[1.71rem] z-20'
              src={'/home/girl-voucher.png'}
              alt='girl voucher'
              width={130}
              height={215}
              priority={isMobile ? true : false}
            />
            <Link
              href={'/khach-hang-than-thiet'}
              className='w-[31.8448rem] absolute top-1/2 -translate-y-1/2 left-[12.08rem] xmd:w-fit xmd:top-[1.1rem] xmd:left-[1.68rem] xmd:translate-y-0'
            >
              <h4 className='font-normal text-white sub1 xmd:text-brown-800 xmd:caption2'>
                Voucher dành cho
              </h4>
              <h3 className='font-medium text-white h5 xmd:text-greyscale-80 xmd:sub2'>
                Khách hàng thân thiết
              </h3>
            </Link>
          </div>
          <div className='h6 font-semibold w-[41.142rem] h-[8.56515rem] xmd:h-[3.22108rem] xmd:left-1/2 xmd:-translate-x-1/2 flex justify-center items-center text-white absolute right-0 top-0 xmd:rounded-[0.58565rem] xmd:bg-blue-700 xmd:p-[0.88rem] xmd:top-auto xmd:bottom-[0.73rem] xmd:w-[calc(100%-(1.39rem*2))] xmd:justify-start'>
            {!isMobile && (
              <Image
                className='absolute top-0 left-0 z-0 object-cover size-full rounded-tr-[1.1713rem] rounded-br-[1.1713rem]'
                src={'/home/bg-login.png'}
                alt='background elip'
                width={562}
                height={118}
              />
            )}
            <Link
              className='relative z-10 font-medium text-white h6 xmd:caption1'
              href={'/dang-ky'}
            >
              ĐĂNG KÝ /
            </Link>
            <Link
              className='ml-[0.3rem] flex items-center relative z-10'
              href={'/dang-nhap'}
            >
              <span className='font-medium text-white h6 xmd:caption1 mr-[0.66rem] inline-block'>
                ĐĂNG NHẬP NGAY
              </span>
              {!isMobile && (
                <Image
                  className='size-[2.63543rem] object-contain brightness-0 invert'
                  src={'/home/touch-login.svg'}
                  alt='icon touch'
                  width={36}
                  height={36}
                />
              )}
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
