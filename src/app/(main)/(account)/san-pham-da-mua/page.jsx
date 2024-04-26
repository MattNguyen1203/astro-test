import SkeletonCardProduct from '@/components/cardproduct/SkeletonCardProduct'
import ICArrowRightBlack from '@/components/icon/ICArrowRightBlack'
import PaginationIndex from '@/sections/account/components/pagination'
import {auth} from '@/auth'
import Link from 'next/link'
import ProductBuyed from '@/components/productBuyed/ProductBuyed'
import {getDataProfile} from '@/lib/getDataProfile'
export default async function BuyedPage({searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport === 'mobile'
  const session = await auth()
  const request = {
    api: '/okhub/v1/order?status=completed&page=1&limit=120',
    token: session?.accessToken,
  }
  const products = await getDataProfile(request)

  return (
    <ProductBuyed
      session={session}
      isMobile={isMobile}
      products={products}
    />
  )
}
