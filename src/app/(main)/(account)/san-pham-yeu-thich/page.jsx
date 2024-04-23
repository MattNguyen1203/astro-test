import {auth} from '@/auth'
import CardProduct from '@/components/cardproduct'
import ICArrowRightBlack from '@/components/icon/ICArrowRightBlack'
import {getDataProfile} from '@/lib/getDataProfile'
import PaginationIndex from '@/sections/account/components/pagination'
import GridWishlist from '@/sections/wishlist/GridWishlist'
import PaginationWishlist from '@/sections/wishlist/PaginationWishlist'
import Link from 'next/link'

export default async function LikePage({searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport === 'mobile'

  const session = await auth()
  const request = {
    api: '/custom/v1/wistlist/getWishlist',
    token: session?.accessToken,
  }
  const wishList = await getDataProfile(request)

  return (
    <>
      {isMobile && (
        <>
          <Link
            href='/dash-board'
            className='flex items-center pl-[0.59rem] h-[2.93rem] relative'
          >
            <ICArrowRightBlack className='rotate-180 size-[1.75rem] mr-[0.59rem]' />
            <span className='font-medium h5 text-greyscale-50'>
              Sản phẩm yêu thích
            </span>
          </Link>
          <hr className='h-[0.06rem] w-full mt-[0.5rem] mb-[1.25rem] bg-[#ECECEC]' />
        </>
      )}
      <GridWishlist
        wishList={wishList}
        isMobile={isMobile}
      />
      <div className='mt-[1.25rem]'>
        <PaginationWishlist pageCount={Math.ceil(wishList?.length / 12)} />
      </div>
    </>
  )
}
