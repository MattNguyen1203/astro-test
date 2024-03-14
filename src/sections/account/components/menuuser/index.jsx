'use client'
import {logout} from '@/actions/logout'
import Image from 'next/image'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

const menuOptions = [
  {
    title: 'Tài khoản cá nhân',
    src: '/layout/nav/user.svg',
    href: '/tai-khoan-ca-nhan',
  },
  {
    title: 'Đơn hàng',
    src: '/layout/nav/user.svg',
    href: '/don-hang',
  },
  {
    title: 'Sản phẩm yêu thích',
    src: '/layout/nav/user.svg',
    href: '/san-pham-yeu-thich',
  },
  {
    title: 'Voucher của bạn',
    src: '/layout/nav/user.svg',
    href: '/voucher',
  },
  {
    title: 'Sản phẩm đã mua',
    src: '/layout/nav/user.svg',
    href: '/san-pham-da-mua',
  },
  {
    title: 'Khách hàng thân thiết',
    src: '/layout/nav/user.svg',
    href: '/khach-hang-than-thiet',
  },
]

export default function MenuUser() {
  const pathName = usePathname()
  return (
    <div className='flex flex-col p-[0.88rem] mt-[0.6rem] *:mt-[0.44rem] *:first:mt-0 bg-white rounded-[0.58565rem] shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)]'>
      {menuOptions.map((e, index) => (
        <div
          key={index}
          className={`${
            pathName.includes(e.href)
              ? 'bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)]'
              : ''
          } w-full h-fit rounded-[0.58565rem] block`}
        >
          <Link
            href={e.href}
            className='flex items-center px-[0.88rem] py-[0.73rem]'
          >
            <Image
              className='size-[1.02489rem] object-contain'
              src={e.src}
              alt={e.title}
              width={14}
              height={14}
              priority
            />
            <span
              className={`${
                pathName.includes(e.href) ? 'text-white' : 'text-greyscale-20'
              } font-normal sub2 inline-block ml-[0.59rem]`}
            >
              {e.title}
            </span>
          </Link>
        </div>
      ))}
      <div
        onClick={() => logout()}
        className={`w-full h-fit rounded-[0.58565rem] block`}
      >
        <button className='flex items-center px-[0.88rem] py-[0.73rem]'>
          <Image
            className='size-[1.02489rem] object-contain'
            src={'/layout/nav/user.svg'}
            alt={'Đăng xuất'}
            width={14}
            height={14}
            priority
          />
          <span
            className={`text-greyscale-20 font-normal sub2 inline-block ml-[0.59rem]`}
          >
            Đăng xuất
          </span>
        </button>
      </div>
    </div>
  )
}
