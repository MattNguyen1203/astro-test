import SkeletonCardProduct from '@/components/cardproduct/SkeletonCardProduct'
import ICArrowRightBlack from '@/components/icon/ICArrowRightBlack'
import PaginationIndex from '@/sections/account/components/pagination'
import { auth } from '@/auth'
import Link from 'next/link'
import ProductBuyed from '@/components/productBuyed/ProductBuyed'
export default async function BuyedPage({searchParams}) {
  const {viewport} = searchParams
  const session = await auth()
  const isMobile = viewport === 'mobile'
  return (
    <ProductBuyed session={session} isMobile={isMobile}/>
  )
}
