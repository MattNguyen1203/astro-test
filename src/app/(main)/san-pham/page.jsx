import {fetchMetaData} from '@/lib/fetchMetaData'
import getData from '@/lib/getData'
import {getMeta} from '@/lib/getMeta'
import IndexProduct from '@/sections/product'

export async function generateMetadata({params}) {
  const result = await fetchMetaData(`san-pham/`)
  return getMeta(result, `san-pham/`)
}

export default async function ProductPage({searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport === 'mobile'
  const [products, categories, devices] = await Promise.all([
    getData(`/okhub/v1/product/allProduct?limit=52&order=desc&page=1`),
    getData('/okhub/v1/category/category'),
    getData('/okhub/v1/product/devices'),
  ])
  return (
    <IndexProduct
      isMobile={isMobile}
      products={products}
      categories={categories}
      devices={devices}
      page={1}
    />
  )
}
