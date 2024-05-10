import 'swiper/css'
import 'swiper/css/free-mode'

import IndexPreOrder from '@/sections/preorder'
import getData from '@/lib/getData'
import {IDPREORDER} from '@/lib/IdPageAPI'

export default async function PreOrderPage({searchParams}) {
  const [datavideo, products] = await Promise.all([
    getData(`/wp/v2/pages/${IDPREORDER}`),
    getData(
      '/okhub/v1/product/filter/products?limit=10&page=1&is_preorder=true',
    ),
  ])
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  return (
    <IndexPreOrder
      isMobile={isMobile}
      datavideo={datavideo?.acf?.video}
      products={products}
    />
  )
}
