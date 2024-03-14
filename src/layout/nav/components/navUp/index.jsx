import Image from 'next/image'
import Link from 'next/link'
import BoxSearch from './BoxSearch'
import Account from './Account'
import MenuRes from './MenuRes'
import Cart from './Cart'

export default function NavUp({user, isMobile}) {
  return (
    <div
      id='nav_up'
      className='pt-[0.66rem] xmd:pt-[0.81rem] flex justify-between'
    >
      <Link
        id='logo_nav'
        className='w-[9rem] h-[2.31508rem] my-auto xmd:w-[9.66318rem] xmd:h-[2.56223rem]'
        href='/'
      >
        <Image
          className='object-cover size-full xmd:object-contain'
          src={'/layout/nav/logo-nav.svg'}
          alt='logo astromazing'
          width={123}
          height={32}
          priority
        />
      </Link>
      <BoxSearch isMobile={isMobile} />
      <div
        id='cart_and_user'
        className='flex items-center'
      >
        <Cart isMobile={isMobile} />
        <Account
          user={user}
          isMobile={isMobile}
        />
        {isMobile ? (
          <MenuRes />
        ) : (
          <>
            {user?.name ? (
              <span className='font-normal caption1 text-greyscale-80 py-[0.44rem] pl-[0.44rem]'>
                {user?.name}
              </span>
            ) : (
              <Link
                href={'/dang-nhap'}
                className='font-normal caption1 text-greyscale-80 py-[0.44rem] pl-[0.44rem]'
              >
                Đăng nhập
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  )
}
