import Image from 'next/image'
import Link from 'next/link'
import SlideTechnology from './SlideTechnology'
import getData from '@/lib/getData'
import {IDGLOBALAPI} from '@/lib/IdPageAPI'

export default async function TechnologyConner({isMobile}) {
  const [posts, global] = await Promise.all([
    getData('/okhub/v1/post/postsByCategory/goc-cong-nghe'),
    getData(`/wp/v2/pages/${IDGLOBALAPI}`),
  ])

  const linkSocials = global?.acf?.link_social

  const listSocial = [
    {
      title: 'Facebook',
      src: '/home/fb.svg',
      href: linkSocials?.facebook,
      className:
        'w-[1.31772rem] h-[2.2694rem] xmd:h-[1.36493rem] xmd:w-[0.79253rem]',
    },
    {
      title: 'Lazada',
      src: '/home/lazada.svg',
      href: linkSocials?.lazada,
      className:
        'w-[2.82958rem] h-[2.32277rem] xmd:h-[1.36479rem] xmd:w-[1.66252rem]',
    },
    {
      title: 'TikTok',
      src: '/home/tiktok.svg',
      href: linkSocials?.tiktok,
      className: 'size-[2.34261rem] xmd:size-[1.36501rem]',
    },
  ]

  return (
    <div className='md:bg-elevation-20 pt-[4.39rem]'>
      <span className='block font-medium text-center text-blue-600 h6 xmd:sub1 xmd:tracking-[0.01464rem]'>
        Ghé xem gian hàng chúng tôi tại
      </span>
      <ul className='flex mt-[1.76rem] xmd:mt-[1.49rem] md:*:first:mr-0 md:*:mr-[1.76rem] justify-center mb-[4.39rem] xmd:mb-[2.39rem] xmd:grid xmd:grid-cols-3 xmd:gap-[0.59rem] xmd:container'>
        {listSocial.map((e, index) => (
          <li key={index}>
            <Link
              href={e.href}
              target='_blank'
              prefetch={false}
              className='py-[1.17rem] px-[1.76rem] xmd:px-[0.81rem] xmd:py-[0.73rem] bg-white md:hover:scale-[1.2] transition-all duration-500 rounded-[0.58565rem] shadow-[1px_4px_32px_0px_rgba(0,0,0,0.08)] flex items-center xmd:flex-col xmd:justify-between'
            >
              <Image
                className={`${e.className} object-contain`}
                src={e.src}
                alt={e.title}
                width={38}
                height={38}
              />
              <span className='inline-block md:ml-[1.46rem] sub1 font-medium xmd:font-semibold text-blue-600 xmd:mt-[0.59rem]'>
                {e.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className='bg-white h-[32.35725rem] xmd:h-[29.6rem] flex items-center'>
        <div className='w-[12.59rem] h-[23.20644rem] my-auto flex justify-center items-center relative overflow-hidden xmd:w-fit xmd:mt-[2.3rem] flex-shrink-0'>
          <div className='w-[63.46999rem] xmd:w-[18.46999rem] h-full absolute left-0 top-0 z-[1] bg-[linear-gradient(90deg,#02315D_0%,rgba(1,65,125,0.45)_33.79%,rgba(0,78,151,0.00)_45.29%)] xmd:bg-[linear-gradient(90deg,#02315D_0%,rgba(0,78,151,0.00)_49.99%)] backdrop-blur-[5px]'></div>
          <h2
            className='rotate-180 text-white text-[2.04978rem] font-semibold leading-[1.2] tracking-[0.00512rem] z-10 xmd:h5 xmd:font-bold xmd:px-[0.88rem]'
            style={{writingMode: 'vertical-lr'}}
          >
            GÓC CÔNG NGHỆ
          </h2>
        </div>
        <div className='relative overflow-hidden size-full'>
          <SlideTechnology
            isMobile={isMobile}
            posts={posts}
          />
        </div>
      </div>
    </div>
  )
}
