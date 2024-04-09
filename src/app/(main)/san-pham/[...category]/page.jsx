import getData from '@/lib/getData'
import IndexProduct from '@/sections/product'

export default async function CategoryProductPage({params, searchParams}) {
  const {category} = params
  const {viewport} = searchParams
  const isMobile = viewport === 'mobile'

  const products = await getData(
    `/okhub/v1/product/filter/products?${
      !Number(category?.[0]) ? `category=${category?.[0]}&` : ''
    }limit=16&page=${
      Number(category?.[0])
        ? Number(category?.[0])
        : Number(category?.[1])
        ? Number(category?.[1])
        : 1
    }&order=desc`,
  )

  return (
    <IndexProduct
      isMobile={isMobile}
      products={products}
      params={params}
    />
  )
}
