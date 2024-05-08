import getData from '@/lib/getData'
import IndexProduct from '@/sections/product'

export default async function ProductPage({searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport === 'mobile'
  const [products, categories, devices] = await Promise.all([
    getData(`/okhub/v1/product/allProduct?limit=16&order=desc&page=1`),
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
