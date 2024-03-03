import {auth} from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import {redirect} from 'next/navigation'

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
  {
    title: 'Đăng xuất',
    src: '/layout/nav/user.svg',
    href: '/',
  },
]

export default async function InfoAccountPage(props) {
  console.log('🚀 ~ InfoAccountPage ~ props:', props)
  const {user} = await auth()
  if (!user?.email) return redirect('/dang-Nhap')
  return (
    <aside className='w-[21.30307rem] h-fit sticky top-[9.52rem] left-0'>
      <div className='p-[1.17rem] rounded-[0.58565rem] bg-white shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)]'>
        <span className='font-medium sub2 text-greyscale-50'>
          Xin chào bạn!
        </span>
        <hr className='h-[0.07rem] w-full bg-[#ECECEC66] block my-[0.59rem]' />
        <div className='flex items-center'>
          <div className='size-[3.2rem] rounded-full border border-solid border-[#FFF0D8] shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02),-6px_2px_32px_0px_rgba(0,0,0,0.06)]'>
            {user?.image && (
              <Image
                className='object-cover rounded-full size-full'
                src={user?.image}
                alt={user?.name}
                width={44}
                height={44}
              />
            )}
          </div>
          <div className='flex flex-col ml-[0.88rem]'>
            {user?.name && (
              <span className='font-medium caption1 text-greyscale-50'>
                {user?.name}
              </span>
            )}
            <div className='flex items-center px-[0.6rem] py-[0.3rem] rounded-[7.4rem] bg-[linear-gradient(99deg,#058FF2_0%,#81AFFF_59%,#00E0FF_100%)] w-fit mt-[0.44rem]'>
              <Image
                className='size-[0.87848rem] object-contain'
                src={'/account/cup-kc.svg'}
                alt='cup kim cương'
                width={12}
                height={12}
                priority
              />
              <span className='block ml-[0.29rem] caption2 font-normal text-white w-fit'>
                Thành viên kim cương
              </span>
            </div>
          </div>
        </div>
      </div>

      <ul className='flex flex-col p-[0.88rem] mt-[0.6rem] *:mt-[0.44rem] *:first:mt-0 bg-white rounded-[0.58565rem] shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)]'>
        {menuOptions.map((e, index) => (
          <li
            key={index}
            className='w-full h-fit rounded-[0.58565rem]'
          >
            <Link
              href={e.href}
              className='flex items-center px-[0.88rem]] py-[0.73rem]'
            >
              <Image
                className='size-[1.02489rem] object-contain'
                src={e.src}
                alt={e.title}
                width={14}
                height={14}
                priority
              />
              <span className='font-normal sub2 text-greyscale-20 inline-block ml-[0.59rem]'>
                {e.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
