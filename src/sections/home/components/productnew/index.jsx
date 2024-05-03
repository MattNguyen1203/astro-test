import getData from '@/lib/getData'
import CategoryProduct from './CategoryProduct'
import CategoryProductRes from './CategoryProductRes'
import GridProductNewRes from './GridProductNewRes'
import SlideProduct from './SlideProduct'

export default async function ProductIndex({isMobile}) {
  const products = await getData(
    `/okhub/v1/product/allProduct?limit=${isMobile ? 8 : 20}&order=desc&page=1`,
  )
  return (
    <>
      {isMobile ? (
        <div className='container'>
          <CategoryProductRes
            title='Sản phẩm mới nhất'
            href='/san-pham'
          />
        </div>
      ) : (
        <CategoryProduct
          title='SẢN PHẨM MỚI NHẤT'
          href='/san-pham'
        />
      )}
      {isMobile ? (
        <GridProductNewRes products={products} />
      ) : (
        <SlideProduct products={products} />
      )}
    </>
  )
}
