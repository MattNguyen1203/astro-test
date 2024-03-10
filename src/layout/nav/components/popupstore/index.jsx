import ICMaker from '@/components/icon/ICMaker'
import ICOclock from '@/components/icon/ICOclock'
import ICPhone from '@/components/icon/ICPhone'
import Image from 'next/image'
import Link from 'next/link'

export default function PopupStore() {
  return (
    <div className='absolute -bottom-[0.8rem] translate-y-full left-0 w-[29.4rem] h-fit p-[1.17rem] rounded-[0.58565rem] bg-white shadow-[2px_2px_12px_0px_rgba(0,0,0,0.02),-3px_2px_20px_0px_rgba(0,0,0,0.04)] z-50 hidden group-hover:block'>
      <h2 className='sub1 font-medium text-[#212529] before:absolute before:left-[0.88rem] before:size-[0.8rem] before:bg-white before:top-0 before:-translate-y-1/2 before:rotate-45 '>
        Cửa hàng Nguyễn Thị Minh Khai
      </h2>
      <div className='flex'>
        <div className='pt-[0.29rem] pr-[0.73rem] flex-1'>
          <div className='flex'>
            <ICMaker className='size-[1.02489rem] flex-shrink-0 mt-[6px]' />
            <address className='font-normal body2 text-greyscale-80 ml-[0.73rem] block'>
              5376 đường Nguyễn Thị Minh Khai, Phường 5 Quận 3, Tp. Hồ Chí Minh
            </address>
          </div>
          <div className='flex items-center my-[0.73rem]'>
            <ICPhone className='size-[1.02489rem] flex-shrink-0' />
            <Link
              prefetch={false}
              href={'tel: 0123123123'}
              className='block w-fit ml-[0.73rem] body2 font-normal text-greyscale-80'
            >
              0123123123
            </Link>
          </div>
          <div className='flex items-center '>
            <ICOclock className='size-[1.02489rem] flex-shrink-0' />
            <span className='block w-fit ml-[0.73rem] body2 font-normal text-greyscale-80'>
              09:00 - 21:00
            </span>
          </div>
          <span className='button font-medium block mt-[0.88rem] mb-[0.73rem]'>
            Ghé gian hàng tại:
          </span>
          <ul className='flex'>
            <li className='group'>
              <Link
                href={'/'}
                className='flex p-[0.44rem] justify-center items-center rounded-[0.51245rem] bg-[rgba(228,228,228,0.30)]'
              >
                <Image
                  className='size-[1.75695rem] object-contain group-hover:scale-110 transition-all duration-200'
                  src={'/product/facebook.svg'}
                  alt='icon facebook'
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li className='mx-[0.88rem] group'>
              <Link
                href={'/'}
                className='flex p-[0.44rem] justify-center items-center rounded-[0.51245rem] bg-[rgba(228,228,228,0.30)]'
              >
                <Image
                  className='size-[1.75695rem] object-contain group-hover:scale-110 transition-all duration-200'
                  src={'/product/lazada.svg'}
                  alt='icon lazada'
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li className='group'>
              <Link
                href={'/'}
                className='flex p-[0.44rem] justify-center items-center rounded-[0.51245rem] bg-[rgba(228,228,228,0.30)]'
              >
                <Image
                  className='size-[1.75695rem] object-contain group-hover:scale-110 transition-all duration-200'
                  src={'/product/tiktok.svg'}
                  alt='icon tiktok'
                  width={24}
                  height={24}
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-col mt-[0.66rem] w-[7.46706rem]'>
          <Image
            className='w-full h-[6.88141rem] rounded-[0.58565rem] object-cover'
            src={'/layout/nav/map.jpg'}
            alt='map'
            width={100}
            height={100}
          />
          <Link
            prefetch={false}
            href='/'
            className='block text-center whitespace-nowrap caption1 font-normal text-[#0468FF] mt-[0.73rem]'
          >
            Chỉ đường đến
            <br /> cửa hàng
          </Link>
        </div>
      </div>
    </div>
  )
}
