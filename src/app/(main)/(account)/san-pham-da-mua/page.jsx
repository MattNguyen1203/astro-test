import {auth} from '@/auth'
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
