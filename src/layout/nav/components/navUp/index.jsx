import Image from 'next/image'
import Link from 'next/link'
import SheetCart from '@/components/sheetcart'
import BoxSearch from './BoxSearch'
import Account from './Account'

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
      <BoxSearch />
      <div
        id='cart_and_user'
        className='flex items-center'
      >
        <SheetCart>
          <div className='size-[2.63543rem] bg-elevation-20 rounded-[6.5vw] flex justify-center items-center cursor-pointer'>
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
        <Account user={user} />
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
