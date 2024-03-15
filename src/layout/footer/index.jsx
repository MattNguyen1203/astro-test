import Image from 'next/image'
import FormEmail from './components/formmail'
import Social from './components/social'
import InfoFooter from './components/infofooter'
import Link from 'next/link'
import MenuFooter from './components/menufooter'

export default function Footer({isMobile}) {
  return (
    <footer className='w-full overflow-x-hidden bg-elevation-20 xmd:bg-blue-800 xmd:rounded-tl-[0.87848rem] xmd:rounded-tr-[0.87848rem] xmd:pb-[3.22rem] relative z-10'>
      <div className='md:h-[4.46559rem] md:bg-[linear-gradient(0deg,#10273F_0%,#10273F_100%)] flex items-center'>
        <div className='container flex justify-between items-center md:pr-[0.95rem] xmd:flex-col xmd:full-mb'>
          <Social isMobile={isMobile} />
          {isMobile && (
            <>
              <Link
                href={'tel: 0947492020'}
                className='container px-[0.88rem] py-[0.51rem] rounded-[0.58565rem] bg-white mt-[2.05rem] flex justify-between items-center'
              >
                <div className='size-[2.63543rem] rounded-full bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)] flex justify-center items-center'>
                  <Image
                    className='size-[1.46413rem] object-contain'
                    src={'/layout/footer/icon-phone.svg'}
                    alt='icon phone'
                    height={24}
                    width={24}
                    quality={100}
                  />
                </div>
                <span className='font-semibold text-blue-500 body2'>
                  Tư vấn bán hàng (9h-21h)
                </span>
                <span className='font-bold text-blue-500 body2'>
                  094 749 2020
                </span>
              </Link>
              <hr className='h-[0.0366rem] bg-[#ECECEC66] w-full my-[2.05rem] opacity-40' />
            </>
          )}
          <FormEmail />
        </div>
      </div>
      {isMobile && (
        <>
          <hr className='h-[0.0366rem] bg-[#ECECEC66] w-full my-[2.05rem] opacity-40' />
          <div className='container'>
            <span className='caption1 font-semibold bg-[linear-gradient(44deg,#FFF0D8_52.89%,#FFD797_107.96%)] bg-clip-text'>
              AstroMazing lắng nghe bạn!
            </span>
            <p className='my-[0.88rem] caption1 font-normal text-greyscale-10'>
              Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng
              góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản
              phẩm tốt hơn nữa.
            </p>
            <Link
              href={'tel: 0947492020'}
              className='px-[0.88rem] py-[0.51rem] rounded-[0.58565rem] bg-white flex justify-between items-center'
            >
              <div className='size-[2.63543rem] rounded-full bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)] flex justify-center items-center'>
                <Image
                  className='size-[1.46413rem] object-contain'
                  src={'/layout/footer/icon-phone.svg'}
                  alt='icon phone'
                  height={24}
                  width={24}
                  quality={100}
                />
              </div>
              <span className='font-semibold text-blue-500 body2'>
                Tư vấn bán hàng (9h-21h)
              </span>
              <span className='font-bold text-blue-500 body2'>
                094 749 2020
              </span>
            </Link>
          </div>
          <hr className='h-[0.0366rem] bg-[#ECECEC66] w-full my-[2.05rem] opacity-40' />
          <MenuFooter />
          <hr className='h-[0.0366rem] bg-[#ECECEC66] w-full mt-[2.05rem] opacity-40' />
        </>
      )}

      <div className='container md:pr-[5.27rem] md:mb-[3.37rem] xmd:mt-[4.25rem]'>
        {!isMobile && (
          <Image
            className='w-[25.56245rem] h-[2.47262rem] object-cover block mt-[2.93rem] mb-[2.87rem]'
            src={'/layout/footer/t-astro.svg'}
            alt='text astromazing'
            width={350}
            height={35}
          />
        )}
        <InfoFooter isMobile={isMobile} />
      </div>

      <hr className='bg-[#E2E2E299] xmd:h-[0.0366rem] xmd:bg-[#ECECEC66] w-full xmd:my-[2.05rem] xmd:opacity-40' />
      {isMobile && (
        <>
          <div className='container'>
            <Image
              className='w-[15.5rem] h-[3.08rem] object-fill brightness-0 invert'
              src={'/layout/nav/logo-footer-res.svg'}
              alt='logo astromazing'
              width={220}
              height={50}
              quality={100}
            />
            <span className='block mt-[1.17rem] mb-[0.59rem] caption2 font-normal text-greyscaletext-5-div'>
              @ CÔNG TY TNHH ASTROMAZING VIETNAM:
            </span>
            <span className='block font-normal caption2 text-greyscaletext-5-div'>
              Mã số doanh nghiệp:{' '}
              <strong className='font-semibold'>0317658292</strong>
            </span>
            <div className='flex mt-[0.73rem]'>
              <div className='rounded-[0.51245rem] bg-[#FAFAFA] flex justify-center items-center shadow-[6.712px_3.661px_14.644px_0px_rgba(0,0,0,0.04),0px_1.22px_19.525px_0px_rgba(0,0,0,0.04)] h-[2.63539rem] w-[7.01283rem]'>
                <Image
                  className='w-[4.86881rem] h-[1.83141rem] object-contain'
                  src={'/layout/footer/bct.png'}
                  alt='bo cong thuong'
                  width={70}
                  height={30}
                  quality={100}
                />
              </div>
              <div className='mx-[0.44rem] rounded-[0.51245rem] bg-[#FAFAFA] flex justify-center items-center shadow-[6.712px_3.661px_14.644px_0px_rgba(0,0,0,0.04),0px_1.22px_19.525px_0px_rgba(0,0,0,0.04)] h-[2.63539rem] w-[6.68285rem]'>
                <Image
                  className='w-[4.5388rem] h-[1.46413rem] object-contain'
                  src={'/layout/footer/dmca.png'}
                  alt='dmca'
                  width={70}
                  height={30}
                  quality={100}
                />
              </div>
              <div className='rounded-[0.51245rem] bg-[#FAFAFA] flex justify-center items-center shadow-[6.712px_3.661px_14.644px_0px_rgba(0,0,0,0.04),0px_1.22px_19.525px_0px_rgba(0,0,0,0.04)] h-[2.63539rem] w-[5.78331rem]'>
                <Image
                  className='rounded-[0.51245rem] size-full object-fill'
                  src={'/layout/footer/ncsc.jpg'}
                  alt='ncsc'
                  width={80}
                  height={36}
                  quality={100}
                />
              </div>
            </div>
          </div>
          <hr className='h-[0.0366rem] bg-[#ECECEC66] w-full mt-[2.05rem] opacity-40' />
        </>
      )}

      <div className='container'>
        <div className='font-normal body2 text-greyscale-30 xmd:text-greyscaletext-5-div xmd:caption2 block md:mb-[1.02rem] md:mt-[1.39rem] xmd:pt-[0.44rem] xmd:mb-[1rem]'>
          Bản quyền thuộc về AstroMazing{' '}
          <Link
            target='_blank'
            href={'https://okhub.vn/'}
          >
            | Cung cấp bởi OkHub Agency
          </Link>
        </div>
      </div>
    </footer>
  )
}
