import getData from '@/lib/getData'
import HomeIndex from '@/sections/home'

export default async function HomePage({searchParams}) {
  const products = await getData('/custom/v1/product/allProduct')
  console.log('🚀 ~ HomePage ~ products:', products)
  const {viewport} = searchParams
  return (
    <HomeIndex
      viewport={viewport}
      products={products}
    />
  )
}
