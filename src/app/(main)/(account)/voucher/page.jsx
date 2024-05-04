import {auth} from '@/auth'
import ICArrowRightBlack from '@/components/icon/ICArrowRightBlack'
import {TabsVoucher} from '@/components/tabvoucher'
import getData from '@/lib/getData'
import {getDataAuth} from '@/lib/getDataAuth'
import IndexVoucher from '@/sections/account/components/voucher'
import Link from 'next/link'

export default async function VoucherPage({searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport === 'mobile'

  const [session, couponCategories] = await Promise.all([
    auth(),
    getData('/okhub/v1/coupon/category'),
  ])

  const request = {
    api: '/okhub/v1/coupon/member',
    token: session?.accessToken,
  }

  const couponRank = await getDataAuth(request)

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
              Voucher của bạn
            </span>
          </Link>
          <hr className='h-[0.06rem] w-full mt-[0.5rem] mb-[1.25rem] bg-[#ECECEC]' />
        </>
      )}
      {isMobile ? (
        <TabsVoucher
          couponCategories={couponCategories}
          couponRank={couponRank}
        />
      ) : (
        <IndexVoucher
          couponCategories={couponCategories}
          couponRank={couponRank}
        />
      )}
    </>
  )
}
