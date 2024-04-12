import getData from '@/lib/getData'
import GridAccessory from './components/gridaccessory'

export default async function WrapperGridAccessory({isMobile}) {
  const [products] = await Promise.all([
    getData('/okhub/v1/product/filter/products?limit=19&page=1'),
  ])
  return (
    <GridAccessory
      isMobile={isMobile}
      products={products}
    />
  )
}
