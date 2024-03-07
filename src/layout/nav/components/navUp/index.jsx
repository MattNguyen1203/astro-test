import Image from 'next/image'
import Link from 'next/link'
import InputSearchNav from './InputSearchNav'
import SheetCart from '@/components/sheetcart'

export default function NavUp({user}) {
  return (
    <div
      id='nav_up'
      className='pt-[0.66rem] flex justify-between'
    >
      <Link
        id='logo_nav'
        className='w-[9rem] h-[2.31508rem] my-auto'
        href='/'
      >
        <Image
          className='object-cover size-full'
          src={'/layout/nav/logo-nav.svg'}
          alt='logo astromazing'
          width={123}
          height={32}
          priority
        />
      </Link>
      <div
        id='container_search_nav'
        className='bg-blue-50 rounded-[6.5vw] p-[0.29rem] flex items-center h-[3.22108rem]'
      >
        <InputSearchNav />
        <ul
          id='categories_nav'
          className='flex ml-[0.58rem]'
        >
          <li>
            <Link
              className='caption1 font-medium text-blue-800 p-[0.88rem]'
              href='/tra-cuu'
            >
              Tra cứu đơn hàng
            </Link>
          </li>
          <li>
            <Link
              className='caption1 font-medium text-blue-800 p-[0.88rem]'
              href={'/goc-cong-nghe'}
            >
              Góc công nghệ
            </Link>
          </li>
          <li>
            <Link
              className='caption1 font-medium text-blue-800 p-[0.88rem]'
              href={'/cua-hang'}
            >
              Cửa hàng
            </Link>
          </li>
          <li>
            <Link
              className='caption1 font-medium text-blue-800 p-[0.88rem]'
              href={'/chinh-sach'}
            >
              Chính sách
            </Link>
          </li>
        </ul>
      </div>
      <div
        id='cart_and_user'
        className='flex items-center'
      >
        <SheetCart>
          <div className='size-[2.63543rem] bg-elevation-20 rounded-[6.5vw] flex justify-center items-center mr-[1.17rem] cursor-pointer'>
            <Image
              className='flex-shrink-0 object-cover size-[1.31772rem]'
              src={'/home/cart.svg'}
              alt='icon cart'
              width={18}
              height={18}
              priority
            />
          </div>
        </SheetCart>
        <Link
          href={'/tai-khoan-ca-nhan'}
          className='size-[2.63543rem] bg-elevation-20 rounded-[6.5vw] flex justify-center items-center mr-[0.44rem] overflow-hidden'
        >
          <Image
            className={`${
              user?.image ? 'size-full' : 'size-[1.31772rem]'
            } flex-shrink-0 object-cover `}
            src={user?.image || '/layout/nav/user.svg'}
            alt='icon user'
            width={18}
            height={18}
            priority
          />
        </Link>
        {user?.name ? (
          <span className='font-normal caption1 text-greyscale-80 py-[0.44rem] pl-[0.44rem]'>
            {user?.name}
          </span>
        ) : (
          <Link
            href={'/api/auth/signin'}
            className='font-normal caption1 text-greyscale-80 py-[0.44rem] pl-[0.44rem]'
          >
            Đăng nhập
          </Link>
        )}
      </div>
    </div>
  )
}
