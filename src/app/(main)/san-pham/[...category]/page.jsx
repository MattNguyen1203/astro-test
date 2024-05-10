import getData from '@/lib/getData'
import IndexProduct from '@/sections/product'
import {notFound} from 'next/navigation'

export async function generateStaticParams() {
  const categories = await getData('/okhub/v1/category/product/build')
  const staticParams = []

  const handleRenderPage = (length, before = '') => {
    if (before) {
      staticParams.push({
        category: [before],
      })
    }

    for (let index = 0; index < length; index++) {
      if (index) {
        let newArr = []
        if (before) {
          newArr.push(before)
        }
        newArr.push((index + 1).toString())
        staticParams.push({
          category: [...newArr],
        })
      }
    }
  }

  categories?.forEach((category) => {
    handleRenderPage(Math.ceil(Number(category?.count) / 16), category?.slug)
  })

  return staticParams
}

export default async function CategoryProductPage({params, searchParams}) {
  const {category} = params
  const {viewport} = searchParams
  const isMobile = viewport === 'mobile'
  const page = Number(category?.[0])
    ? Number(category?.[0])
    : Number(category?.[1])
    ? Number(category?.[1])
    : 1

  const [products, categories] = await Promise.all([
    getData(
      `/okhub/v1/product/filter/products?${
        !Number(category?.[0]) ? `category=${category?.[0]}&` : ''
      }limit=16&page=${page}&order=desc`,
    ),
    getData('/okhub/v1/category/category'),
  ])

  if (!products) return notFound()

  return (
    <IndexProduct
      isMobile={isMobile}
      products={products}
      params={params}
      categories={categories}
      page={page}
    />
  )
}
