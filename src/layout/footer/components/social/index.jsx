import Image from 'next/image'
import Link from 'next/link'

export default function Social({isMobile, linkSocial}) {
  const listSocial = [
    {
      src: '/layout/footer/f-fb.svg',
      alt: 'icon facebook',
      href: linkSocial?.facebook,
      size: 'size-full',
    },
    {
      src: '/layout/footer/f-ins.svg',
      alt: 'icon instagram',
      href: linkSocial?.instagram,
      size: 'size-full',
    },
    {
      src: '/layout/footer/f-shop.svg',
      alt: 'icon shopee',
      href: linkSocial?.shoppee,
      size: 'size-full',
    },
    {
      src: '/layout/footer/f-tik.svg',
      alt: 'icon tik tok',
      href: linkSocial?.tiktok,
      size: 'size-full',
    },
  ]

  const listSocialRes = [
    {
      src: '/home/fb.svg',
      alt: 'icon facebook',
      href: linkSocial?.facebook,
      size: 'w-[1.69422rem] h-[1.8rem]',
    },
    {
      src: '/layout/footer/f-ins-v2.svg',
      alt: 'icon instagram',
      href: linkSocial?.instagram,
      size: 'size-[1.69422rem]',
    },
    {
      src: '/home/icon-shoppe.svg',
      alt: 'icon shoppe',
      href: linkSocial?.shoppee,
      size: 'size-[1.69422rem]',
    },
    {
      src: '/home/tiktok.svg',
      alt: 'icon tik tok',
      href: linkSocial?.tiktok,
      size: 'size-[1.69422rem]',
    },
    {
      src: '/home/lazada.svg',
      alt: 'icon lazada',
      href: linkSocial?.lazada,
      size: 'w-[2.07174rem] h-[2.07174rem]',
    },
  ]
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
            prefetch={false}
            className='flex size-[2.63543rem] xmd:size-[3.95315rem] xmd:justify-center xmd:items-center rounded-full xmd:bg-white xmd:first:ml-0 overflow-hidden'
          >
            <Image
              className={`${e.size} flex-shrink-0 object-contain hover:scale-125 transition-all duration-200`}
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
