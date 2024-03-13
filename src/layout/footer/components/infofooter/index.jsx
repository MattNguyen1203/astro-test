import Image from 'next/image'
import Link from 'next/link'

export default function InfoFooter({isMobile}) {
  return (
    <div>
      {!isMobile && (
        <>
          <div className='flex items-center'>
            <span className='font-semibold caption1 text-greyscale-50 mr-[0.88rem]'>
              CÔNG TY TNHH ASTROMAZING VIETNAM:
            </span>
            <Link
              href={'/'}
              target='_blank'
              className='font-medium sub2 text-greyscale-30 bg-[linear-gradient(90deg,rgba(255,255,255,1)_100%,rgba(255,255,255,1)_100%)] rounded-[0.29283rem] shadow-[11px_6px_24px_0px_rgba(0,0,0,0.04)] group hover:bg-[linear-gradient(99deg,#FFE2B5_-58.6%,#E78E00_95.15%)] hover:shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] hover:text-white transition-all duration-200 py-[0.88rem] px-[1.02rem] block w-fit'
            >
              376 đường Nguyễn Thị Minh Khai, Phường 5 Quận 3, Tp. Hồ Chí Minh
            </Link>
          </div>
          <div className='flex items-center mt-[1.17rem]'>
            <span className='font-semibold caption1 text-greyscale-50 mr-[0.88rem]'>
              TỔNG ĐÀI HỖ TRỢ:
            </span>
            <Link
              href={'/'}
              target='_blank'
              className='font-medium sub2 text-greyscale-30 bg-[linear-gradient(90deg,rgba(255,255,255,1)_100%,rgba(255,255,255,1)_100%)] rounded-[0.29283rem] shadow-[11px_6px_24px_0px_rgba(0,0,0,0.04)] group hover:bg-[linear-gradient(99deg,#FFE2B5_-58.6%,#E78E00_95.15%)] hover:shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] hover:text-white transition-all duration-200 py-[0.88rem] px-[1.02rem] block w-fit mr-[0.29rem]'
            >
              Tư vấn bán hàng (9h-21h):{' '}
              <span className='font-bold text-blue-500'>094 749 2020</span>
            </Link>
            <Link
              href={'/'}
              target='_blank'
              className='font-medium sub2 text-greyscale-30 bg-[linear-gradient(90deg,rgba(255,255,255,1)_100%,rgba(255,255,255,1)_100%)] rounded-[0.29283rem] shadow-[11px_6px_24px_0px_rgba(0,0,0,0.04)] group hover:bg-[linear-gradient(99deg,#FFE2B5_-58.6%,#E78E00_95.15%)] hover:shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] hover:text-white transition-all duration-200 py-[0.88rem] px-[1.02rem] block w-fit'
            >
              Góp ý khiếu nại (9h-21h):{' '}
              <span className='font-bold text-blue-500'>094 649 2020</span>
            </Link>
          </div>
          <div className='flex items-center mt-[1.17rem]'>
            <span className='font-semibold caption1 text-greyscale-50 mr-[0.88rem]'>
              THÔNG TIN:
            </span>
            <Link
              href={'/'}
              target='_blank'
              className='font-medium sub2 text-greyscale-30 bg-[linear-gradient(90deg,rgba(255,255,255,1)_100%,rgba(255,255,255,1)_100%)] rounded-[0.29283rem] shadow-[11px_6px_24px_0px_rgba(0,0,0,0.04)] group hover:bg-[linear-gradient(99deg,#FFE2B5_-58.6%,#E78E00_95.15%)] hover:shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] hover:text-white transition-all duration-200 py-[0.88rem] px-[1.02rem] block w-fit mr-[0.29rem]'
            >
              Về AstroMazing
            </Link>
            <Link
              href={'/'}
              target='_blank'
              className='font-medium sub2 text-greyscale-30 bg-[linear-gradient(90deg,rgba(255,255,255,1)_100%,rgba(255,255,255,1)_100%)] rounded-[0.29283rem] shadow-[11px_6px_24px_0px_rgba(0,0,0,0.04)] group hover:bg-[linear-gradient(99deg,#FFE2B5_-58.6%,#E78E00_95.15%)] hover:shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] hover:text-white transition-all duration-200 py-[0.88rem] px-[1.02rem] block w-fit mr-[0.29rem]'
            >
              Shopee
            </Link>
            <Link
              href={'/'}
              target='_blank'
              className='font-medium sub2 text-blue-500 bg-[linear-gradient(90deg,rgba(255,255,255,1)_100%,rgba(255,255,255,1)_100%)] rounded-[0.29283rem] shadow-[11px_6px_24px_0px_rgba(0,0,0,0.04)] group hover:bg-[linear-gradient(99deg,#FFE2B5_-58.6%,#E78E00_95.15%)] hover:shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] hover:text-white transition-all duration-200 py-[0.88rem] px-[1.02rem] block w-fit mr-[0.29rem]'
            >
              Lazada
            </Link>
            <Link
              href={'/'}
              target='_blank'
              className='font-medium sub2 text-blue-500 bg-[linear-gradient(90deg,rgba(255,255,255,1)_100%,rgba(255,255,255,1)_100%)] rounded-[0.29283rem] shadow-[11px_6px_24px_0px_rgba(0,0,0,0.04)] group hover:bg-[linear-gradient(99deg,#FFE2B5_-58.6%,#E78E00_95.15%)] hover:shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] hover:text-white transition-all duration-200 py-[0.88rem] px-[1.02rem] block w-fit mr-[0.29rem]'
            >
              Tiktok
            </Link>
            <Link
              href={'/'}
              target='_blank'
              className='font-medium sub2 text-blue-500 bg-[linear-gradient(90deg,rgba(255,255,255,1)_100%,rgba(255,255,255,1)_100%)] rounded-[0.29283rem] shadow-[11px_6px_24px_0px_rgba(0,0,0,0.04)] group hover:bg-[linear-gradient(99deg,#FFE2B5_-58.6%,#E78E00_95.15%)] hover:shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] hover:text-white transition-all duration-200 py-[0.88rem] px-[1.02rem] block w-fit'
            >
              Liên hệ hợp tác
            </Link>
          </div>
          <div className='flex items-center mt-[1.17rem]'>
            <span className='font-semibold caption1 text-greyscale-50 mr-[0.88rem]'>
              CHÍNH SÁCH:
            </span>
            <Link
              href={'/'}
              target='_blank'
              className='font-medium sub2 text-greyscale-30 bg-[linear-gradient(90deg,rgba(255,255,255,1)_100%,rgba(255,255,255,1)_100%)] rounded-[0.29283rem] shadow-[11px_6px_24px_0px_rgba(0,0,0,0.04)] group hover:bg-[linear-gradient(99deg,#FFE2B5_-58.6%,#E78E00_95.15%)] hover:shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] hover:text-white transition-all duration-200 py-[0.88rem] px-[1.02rem] block w-fit mr-[0.29rem]'
            >
              Tích điểm thành viên
            </Link>
            <Link
              href={'/'}
              target='_blank'
              className='font-medium sub2 text-greyscale-30 bg-[linear-gradient(90deg,rgba(255,255,255,1)_100%,rgba(255,255,255,1)_100%)] rounded-[0.29283rem] shadow-[11px_6px_24px_0px_rgba(0,0,0,0.04)] group hover:bg-[linear-gradient(99deg,#FFE2B5_-58.6%,#E78E00_95.15%)] hover:shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] hover:text-white transition-all duration-200 py-[0.88rem] px-[1.02rem] block w-fit mr-[0.29rem]'
            >
              Hướng dẫn sử dụng
            </Link>
            <Link
              href={'/'}
              target='_blank'
              className='font-medium sub2 text-greyscale-30 bg-[linear-gradient(90deg,rgba(255,255,255,1)_100%,rgba(255,255,255,1)_100%)] rounded-[0.29283rem] shadow-[11px_6px_24px_0px_rgba(0,0,0,0.04)] group hover:bg-[linear-gradient(99deg,#FFE2B5_-58.6%,#E78E00_95.15%)] hover:shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] hover:text-white transition-all duration-200 py-[0.88rem] px-[1.02rem] block w-fit mr-[0.29rem]'
            >
              Giao hàng & Thanh toán
            </Link>
            <Link
              href={'/'}
              target='_blank'
              className='font-medium sub2 text-greyscale-30 bg-[linear-gradient(90deg,rgba(255,255,255,1)_100%,rgba(255,255,255,1)_100%)] rounded-[0.29283rem] shadow-[11px_6px_24px_0px_rgba(0,0,0,0.04)] group hover:bg-[linear-gradient(99deg,#FFE2B5_-58.6%,#E78E00_95.15%)] hover:shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] hover:text-white transition-all duration-200 py-[0.88rem] px-[1.02rem] block w-fit mr-[0.29rem]'
            >
              Bảo hành & Đổi trả
            </Link>
            <Link
              href={'/'}
              target='_blank'
              className='font-medium sub2 text-greyscale-30 bg-[linear-gradient(90deg,rgba(255,255,255,1)_100%,rgba(255,255,255,1)_100%)] rounded-[0.29283rem] shadow-[11px_6px_24px_0px_rgba(0,0,0,0.04)] group hover:bg-[linear-gradient(99deg,#FFE2B5_-58.6%,#E78E00_95.15%)] hover:shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] hover:text-white transition-all duration-200 py-[0.88rem] px-[1.02rem] block w-fit mr-[0.29rem]'
            >
              Chính sách bán sỉ & CTV
            </Link>
            <Link
              href={'/'}
              target='_blank'
              className='font-medium sub2 text-greyscale-30 bg-[linear-gradient(90deg,rgba(255,255,255,1)_100%,rgba(255,255,255,1)_100%)] rounded-[0.29283rem] shadow-[11px_6px_24px_0px_rgba(0,0,0,0.04)] group hover:bg-[linear-gradient(99deg,#FFE2B5_-58.6%,#E78E00_95.15%)] hover:shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] hover:text-white transition-all duration-200 py-[0.88rem] px-[1.02rem] block w-fit'
            >
              Hợp tác KOL & KOC
            </Link>
          </div>
        </>
      )}
      <div className='flex md:items-center mt-[1.17rem] xmd:mt-[2.2rem] relative'>
        <span className='font-semibold caption1 text-greyscale-50 mr-[0.88rem] xmd:bg-[linear-gradient(44deg,#FFF0D8_52.89%,#FFD797_107.96%)] xmd:bg-clip-text xmd:block xmd:absolute xmd:-top-[1.17rem] xmd:left-0 xmd:-translate-y-full'>
          PHƯƠNG THỨC THANH TOÁN:
        </span>
        <div className='w-[4.1194rem] h-[2.92826rem] xmd:w-[3.70747rem] xmd:h-[2.63543rem] rounded-[0.59561rem] bg-white shadow-[7.458px_4.068px_16.271px_0px_rgba(0,0,0,0.04),0px_1.356px_21.695px_0px_rgba(0,0,0,0.04)] mr-[0.29rem] xmd:mr-[0.49rem] flex justify-center items-center'>
          <Image
            className='w-[2.63053rem] h-[2.01288rem] object-contain'
            src={'/layout/footer/visa.png'}
            alt='payment visa'
            width={36}
            height={28}
            quality={100}
          />
        </div>
        <div className='w-[4.1194rem] h-[2.92826rem] xmd:w-[3.70747rem] xmd:h-[2.63543rem] rounded-[0.59561rem] bg-white shadow-[7.458px_4.068px_16.271px_0px_rgba(0,0,0,0.04),0px_1.356px_21.695px_0px_rgba(0,0,0,0.04)] mr-[0.29rem] xmd:mr-[0.49rem] flex justify-center items-center'>
          <Image
            className='w-[2.63053rem] h-[2.01288rem] object-contain'
            src={'/layout/footer/master-card.png'}
            alt='payment master card'
            width={36}
            height={36}
            quality={100}
          />
        </div>
        <div className='w-[4.1194rem] h-[2.92826rem] xmd:w-[3.70747rem] xmd:h-[2.63543rem] rounded-[0.59561rem] bg-white shadow-[7.458px_4.068px_16.271px_0px_rgba(0,0,0,0.04),0px_1.356px_21.695px_0px_rgba(0,0,0,0.04)] mr-[0.29rem] xmd:mr-[0.49rem] flex justify-center items-center'>
          <Image
            className='w-[1.55944rem] h-[2.01288rem] object-contain'
            src={'/layout/footer/momo.png'}
            alt='payment momo'
            width={22}
            height={28}
            quality={100}
          />
        </div>
        <div className='w-[4.1194rem] h-[2.92826rem] xmd:w-[3.70747rem] xmd:h-[2.63543rem] rounded-[0.59561rem] bg-white shadow-[7.458px_4.068px_16.271px_0px_rgba(0,0,0,0.04),0px_1.356px_21.695px_0px_rgba(0,0,0,0.04)] flex justify-center items-center mr-[1.46rem]'>
          <Image
            className='w-[2.47936rem] h-[2.01288rem] object-contain'
            src={'/layout/footer/cod.png'}
            alt='payment cod'
            width={34}
            height={28}
            quality={100}
          />
        </div>
        {!isMobile && (
          <div className='w-[7.78rem] h-[2.92826rem] rounded-[0.59561rem] bg-white shadow-[7.458px_4.068px_16.271px_0px_rgba(0,0,0,0.04),0px_1.356px_21.695px_0px_rgba(0,0,0,0.04)] flex justify-center items-center'>
            <Image
              className='w-[5.40981rem] h-[2.03492rem] object-contain'
              src={'/layout/footer/bct.png'}
              alt='bộ công thương'
              width={100}
              height={28}
            />
          </div>
        )}
      </div>
    </div>
  )
}
