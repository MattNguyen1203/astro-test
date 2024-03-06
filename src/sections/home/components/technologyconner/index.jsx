import Image from 'next/image'
import Link from 'next/link'
import SlideTechnology from './SlideTechnology'
const listSocial = [
  {
    title: 'Facebook',
    src: '/home/fb.svg',
    href: '/',
    className: 'w-[1.31772rem] h-[2.2694rem]',
  },
  {
    title: 'Lazada',
    src: '/home/lazada.svg',
    href: '/',
    className: 'w-[2.82958rem] h-[2.32277rem]',
  },
  {
    title: 'TikTok',
    src: '/home/tiktok.svg',
    href: '/',
    className: 'size-[2.34261rem]',
  },
]

export default function TechnologyConner() {
  return (
    <div className='bg-elevation-20 pt-[4.39rem]'>
      <span className='block font-medium text-center text-blue-600 h6'>
        Ghé xem gian hàng chúng tôi tại
      </span>
      <ul className='flex mt-[1.76rem] *:first:mr-0 *:mr-[1.76rem] justify-center mb-[4.39rem]'>
        {listSocial.map((e, index) => (
          <li key={index}>
            <Link
              href={e.href}
              className='py-[1.17rem] px-[1.76rem] bg-white hover:bg-[#F4F4F4] transition-all duration-500 rounded-[0.58565rem] shadow-[1px_4px_32px_0px_rgba(0,0,0,0.08)] flex items-center'
            >
              <Image
                className={`${e.className} object-contain`}
                src={e.src}
                alt={e.title}
                width={38}
                height={38}
              />
              <span className='inline-block ml-[1.46rem] sub1 font-medium text-blue-600'>
                {e.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className='bg-white h-[32.35725rem] flex items-center'>
        <div className='w-[12.59rem] h-[23.20644rem] my-auto flex justify-center items-center relative overflow-hidden'>
          <div className='w-[63.46999rem] h-full absolute left-0 top-0 z-[1] bg-[linear-gradient(90deg,#02315D_0%,rgba(1,65,125,0.45)_33.79%,rgba(0,78,151,0.00)_45.29%)] backdrop-blur-[5px]'></div>
          <h2
            className='rotate-180 text-white text-[2.04978rem] font-semibold leading-[1.2] tracking-[0.00512rem] z-10'
            style={{writingMode: 'vertical-lr'}}
          >
            GÓC CÔNG NGHỆ
          </h2>
        </div>
        <div className='size-full overflow-hidden rounded-tl-[0.58565rem] relative'>
          <SlideTechnology />
        </div>
      </div>
    </div>
  )
}
