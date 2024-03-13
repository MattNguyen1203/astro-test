import Image from 'next/image'
import Link from 'next/link'

const listSocial = [
  {
    src: '/layout/footer/f-fb.svg',
    alt: 'icon facebook',
    href: '/',
    size: 'size-full',
  },
  {
    src: '/layout/footer/f-ins.svg',
    alt: 'icon instagram',
    href: '/',
    size: 'size-full',
  },
  {
    src: '/layout/footer/f-shop.svg',
    alt: 'icon shopee',
    href: '/',
    size: 'size-full',
  },
  {
    src: '/layout/footer/f-tik.svg',
    alt: 'icon tik tok',
    href: '/',
    size: 'size-full',
  },
]

const listSocialRes = [
  {
    src: '/home/fb.svg',
    alt: 'icon facebook',
    href: '/',
    size: 'w-[1.69422rem] h-[1.8rem]',
  },
  {
    src: '/layout/footer/f-ins-v2.svg',
    alt: 'icon instagram',
    href: '/',
    size: 'size-[1.69422rem]',
  },
  {
    src: '/home/icon-shoppe.svg',
    alt: 'icon shoppe',
    href: '/',
    size: 'size-[1.69422rem]',
  },
  {
    src: '/home/tiktok.svg',
    alt: 'icon tik tok',
    href: '/',
    size: 'size-[1.69422rem]',
  },
  {
    src: '/home/lazada.svg',
    alt: 'icon lazada',
    href: '/',
    size: 'w-[2.07174rem] h-[2.07174rem]',
  },
]
export default function Social({isMobile}) {
  const data = isMobile ? [...listSocialRes] : [...listSocial]
  return (
    <div className='flex items-center'>
      {!isMobile && (
        <span className='font-medium text-white sub2'>
          Theo dõi chúng tôi qua
        </span>
      )}
      <div className='flex *:ml-[0.88rem] xmd:*:ml-[1.34rem] xmd:mt-[1.68rem]'>
        {data.map((e, index) => (
          <Link
            key={index}
            href={e.href}
            target='_blank'
            className='flex size-[2.63543rem] xmd:size-[3.95315rem] xmd:justify-center xmd:items-center xmd:rounded-full xmd:bg-white first:ml-0'
          >
            <Image
              className={`${e.size} flex-shrink-0 object-contain`}
              src={e.src}
              alt={e.alt}
              width={36}
              height={36}
              quality={100}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
