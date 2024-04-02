import getData from '@/lib/getData'
import IndexProduct from '@/sections/product'

export default async function CategoryProductPage({params, searchParams}) {
  const {slug} = params
  console.log('🚀 ~ CategoryProductPage ~ slug:', slug)
  const isFilter = slug?.length > 1
  const {viewport} = searchParams
  const isMobile = viewport === 'mobile'

  const [products, categories] = await Promise.all([
    getData(
      `/okhub/v1/product/${
        isFilter ? `productByCategory/${slug[0]}` : 'allProduct'
      }?limit=${isMobile ? 8 : 16}&order=desc&page=${
        isFilter ? slug[slug?.length - 1] : slug[0]
      }`,
    ),
    getData('/okhub/v1/category/category'),
  ])
  console.log('🚀 ~ CategoryProductPage ~ products:', products)

  return (
    <IndexProduct
      products={products}
      categories={categories}
      isMobile={isMobile}
      page={slug[0]}
    />
  )
}
