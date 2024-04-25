import Image from 'next/image'
import Link from 'next/link'
import BoxSearch from './BoxSearch'
import Account from './Account'
import MenuRes from './MenuRes'
import Cart from './Cart'
import getData from '@/lib/getData'

export default async function NavUp({
  session,
  isMobile,
  referer,
  categories,
  linkSocial,
}) {
  const productSuggest = await getData(
    '/okhub/v1/product/allProduct?limit=6&order=desc&page=1',
  )
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
      <BoxSearch
        isMobile={isMobile}
        productSuggest={productSuggest}
        categories={categories}
        linkSocial={linkSocial}
        session={session}
      />
      <div
        id='cart_and_user'
        className='flex items-center'
      >
        <Cart
          session={session}
          isMobile={isMobile}
        />
        <Account
          session={session}
          isMobile={isMobile}
        />
        {isMobile ? (
          <MenuRes
            categories={categories}
            referer={referer}
          />
        ) : (
          <>
            {session?.accessToken ? (
              <span className='font-normal caption1 text-greyscale-80 py-[0.44rem] pl-[0.44rem]'>
                {session?.nickname || session?.lastname || session?.firstname}
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
