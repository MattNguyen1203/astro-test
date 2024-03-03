import Image from 'next/image'
import Link from 'next/link'

const listSocial = [
  {
    src: '/layout/footer/f-fb.svg',
    alt: 'icon facebook',
    href: '/',
  },
  {
    src: '/layout/footer/f-ins.svg',
    alt: 'icon instagram',
    href: '/',
  },
  {
    src: '/layout/footer/f-shop.svg',
    alt: 'icon shopee',
    href: '/',
  },
  {
    src: '/layout/footer/f-tik.svg',
    alt: 'icon tik tok',
    href: '/',
  },
]
export default function Social() {
  return (
    <div className='flex items-center'>
      <span className='font-medium text-white sub2'>
        Theo dõi chúng tôi qua
      </span>
      <ul className='flex *:ml-[0.88rem]'>
        {listSocial.map((e, index) => (
          <Link
            key={index}
            href={e.href}
            target='_blank'
            className='flex size-[2.63543rem]'
          >
            <Image
              className='flex-shrink-0 object-contain size-full'
              src={e.src}
              alt={e.alt}
              width={36}
              height={36}
            />
          </Link>
        ))}
      </ul>
    </div>
  )
}
