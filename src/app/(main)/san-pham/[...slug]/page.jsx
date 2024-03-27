import ProductDetail from '@/sections/productDetail'

const page = ({searchParams}) => {
  const {viewport} = searchParams
  const isMobile = viewport.includes('mobile')
  return (
    <main className='bg-elevation-20'>
      <ProductDetail isMobile={isMobile} />
    </main>
  )
}

export default page
