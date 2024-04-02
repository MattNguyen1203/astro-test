import getData from '@/lib/getData'
import IndexProduct from '@/sections/product'

export default async function ProductPage({searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport === 'mobile'
  const [products, categories] = await Promise.all([
    getData(
      `/okhub/v1/product/allProduct?limit=${
        isMobile ? 8 : 16
      }&order=desc&page=1`,
    ),
    getData('/okhub/v1/category/category'),
  ])

  return (
    <IndexProduct
      products={products}
      categories={categories}
      isMobile={isMobile}
    />
  )
}
