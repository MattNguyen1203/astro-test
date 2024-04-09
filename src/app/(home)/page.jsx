import getData from '@/lib/getData'
import HomeIndex from '@/sections/home'

export default async function HomePage({searchParams}) {
  console.log('🚀 ~ HomePage ~ searchParams:', searchParams)
  const products = await getData('/okhub/v1/product/allProduct')
  const {viewport} = searchParams
  return (
    <HomeIndex
      viewport={viewport}
      products={products}
    />
  )
}
