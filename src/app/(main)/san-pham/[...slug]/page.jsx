import getData from '@/lib/getData'
import IndexProduct from '@/sections/product'

export default async function CategoryProductPage({params, searchParams}) {
  const {slug} = params
  const {viewport} = searchParams
  const isMobile = viewport === 'mobile'

  const products = await getData(
    `/okhub/v1/product/filter/products?category=${slug[0]}&limit=${
      isMobile ? 8 : 16
    }&page=1&order=desc`,
  )

  console.log('🚀 ~ CategoryProductPage ~ products:', products)
  return (
    <IndexProduct
      isMobile={isMobile}
      products={products}
      params={params}
    />
  )
}
