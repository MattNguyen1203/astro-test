import getData from '@/lib/getData'
import GridAccessory from './components/gridaccessory'
import {auth} from '@/auth'

export default async function WrapperGridAccessory({isMobile}) {
  const [products, session] = await Promise.all([
    getData('/okhub/v1/product/filter/products?limit=19&page=1'),
    auth(),
  ])
  return (
    <GridAccessory
      isMobile={isMobile}
      products={products}
      session={session}
    />
  )
}
