import getData from '@/lib/getData'
import IndexProduct from '@/sections/product'

export default async function CategoryProductPage({params, searchParams}) {
  const {slug} = params
  const isFilter = slug?.length > 1
  const {viewport} = searchParams
  const isMobile = viewport === 'mobile'
  const isSort = slug?.includes('asc') || slug?.includes('desc')
  const indexCategory = isSort ? slug?.length - 3 : slug?.length - 2
  const isConditionCategory = isSort ? slug?.length > 2 : slug?.length > 1

  const products = await getData(
    `/okhub/v1/product/filter/products?${
      isConditionCategory ? 'category=' + slug[indexCategory] + '&' : ''
    }limit=${isMobile ? 8 : 16}&${isSort ? 'orderBy=price&' : ''}page=${
      isFilter
        ? Number(slug[slug?.length - 1])
          ? Number(slug[slug?.length - 1])
          : 1
        : slug[0]
    }&order=${slug?.includes('asc') ? 'asc' : 'desc'}`,
  )

  return (
    <IndexProduct
      isMobile={isMobile}
      page={slug[slug?.length - 1]}
      products={products}
      params={params}
    />
  )
}
