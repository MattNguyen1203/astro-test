import getData from '@/lib/getData'
import IndexProduct from '@/sections/product'

export default async function ProductPage({searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport === 'mobile'
  const products = await getData(
    `/okhub/v1/product/allProduct?limit=${isMobile ? 8 : 16}&order=desc&page=1`,
  )
  console.log('🚀 ~ ProductPage ~ products:', products)
  return (
    <IndexProduct
      isMobile={isMobile}
      products={products}
    />
  )
}
