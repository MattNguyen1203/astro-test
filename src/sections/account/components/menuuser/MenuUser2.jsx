'use client'
import {logout} from '@/actions/logout'
import Image from 'next/image'
import Link from 'next/link'
import {usePathname, useRouter} from 'next/navigation'
import {getSession, useSession} from 'next-auth/react'
import {Fragment} from 'react'

const menuOptions = [
  {
    title: 'Tài khoản cá nhân',
    src: '/layout/nav/user.svg',
    href: '/tai-khoan-ca-nhan',
  },
  {
    title: 'Đơn hàng',
    src: '/layout/nav/bill.svg',
    href: '/don-hang',
  },
  {
    title: 'Sản phẩm yêu thích',
    src: '/layout/nav/product-like.svg',
    href: '/san-pham-yeu-thich',
  },
  {
    title: 'Voucher của bạn',
    src: '/layout/nav/ticket.svg',
    href: '/voucher',
  },
  {
    title: 'Sản phẩm đã mua',
    src: '/layout/nav/folder.svg',
    href: '/san-pham-da-mua',
  },
  {
    title: 'Khách hàng thân thiết',
    src: '/layout/nav/star.svg',
    href: '/khach-hang-than-thiet',
  },
]

export default function MenuUser2() {
  const session = useSession()
  const pathName = usePathname()
  const router = useRouter()

  return (
    <div className='flex flex-col p-[0.88rem] mt-[1rem] *:mt-[0.44rem] *:first:mt-0 bg-white rounded-[0.58565rem] shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)] xmd:p-[0.75rem] xmd:*:mt-0 select-none'>
      {menuOptions.map((e, index) => (
        <Fragment key={index}>
          <div
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
          {index < menuOptions?.length && (
            <hr className='w-full h-[0.06rem] !my-[0.38rem] bg-[#ECECECB2]' />
          )}
        </Fragment>
      ))}
      {session?.data?.accessToken ? (
        <div
          onClick={() => {
            logout()
            async function myFunction() {
              const session = await getSession()
              return session
            }
            myFunction()
            router.replace('/')
          }}
          className={`w-full h-fit rounded-[0.58565rem] block`}
        >
          <button className='flex items-center px-[0.88rem] py-[0.73rem] w-full'>
            <Image
              className='size-[1.02489rem] object-contain'
              src={'/layout/nav/log-out.svg'}
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
      ) : (
        <Link
          href={'/dang-nhap'}
          className={`w-full h-fit rounded-[0.58565rem] block`}
        >
          <button className='flex items-center px-[0.88rem] py-[0.73rem]'>
            <Image
              className='size-[1.02489rem] object-contain'
              src={'/layout/nav/log-out.svg'}
              alt={'Đăng xuất'}
              width={14}
              height={14}
              priority
            />
            <span
              className={`text-greyscale-20 font-normal sub2 inline-block ml-[0.59rem]`}
            >
              Đăng nhập
            </span>
          </button>
        </Link>
      )}
    </div>
  )
}
