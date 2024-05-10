import Image from 'next/image'
import Link from 'next/link'

export default function SocialProduct({priority, linkSocials}) {
  const listSocial = [
    {
      src: '/product/shopee.svg',
      alt: 'icon shopee',
      href: linkSocials?.shoppee,
      className: 'size-[1.61054rem]',
    },
    {
      src: '/product/lazada.svg',
      alt: 'icon lazada',
      href: linkSocials?.lazada,
      className: 'w-[1.56281rem] h-[1.28287rem]',
    },
    {
      src: '/product/tiktok.svg',
      alt: 'icon tiktok',
      href: linkSocials?.tiktok,
      className: 'size-[1.39092rem]',
    },
    {
      src: '/product/facebook.svg',
      alt: 'icon facebook',
      href: linkSocials?.facebook,
      className: 'size-[1.61054rem]',
    },
  ]
  return (
    <ul className='flex mt-[0.59rem]'>
      {listSocial.map((e, index) => (
        <li
          className='first:ml-0 ml-[0.59rem] group'
          key={index}
        >
          <Link
            prefetch={false}
            className='size-[3.22108rem] flex justify-center items-center bg-white rounded-full'
            href={e?.href || ''}
          >
            <Image
              className={`${e?.className} object-contain group-hover:scale-125 origin-center transition-all duration-200`}
              src={e.src}
              alt={e.alt}
              width={30}
              height={30}
              priority={priority}
            />
          </Link>
        </li>
      ))}
    </ul>
  )
}
