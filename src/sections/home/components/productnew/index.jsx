import getData from '@/lib/getData'
import CategoryProduct from './CategoryProduct'
import CategoryProductRes from './CategoryProductRes'
import GridProductNewRes from './GridProductNewRes'
import SlideProduct from './SlideProduct'

export default async function ProductIndex({isMobile}) {
  const data = await getData(
    `/okhub/v1/product/allProduct?limit=${isMobile ? 8 : 20}&order=desc&page=1`,
  )
  console.log('🚀 ~ ProductIndex ~ data:', data)
  return (
    <>
      {isMobile ? (
        <div className='container'>
          <CategoryProductRes
            title='SẢN PHẨM MỚI NHẤT'
            href='/'
          />
        </div>
      ) : (
        <CategoryProduct
          title='SẢN PHẨM MỚI NHẤT'
          href='/'
        />
      )}
      {isMobile ? <GridProductNewRes /> : <SlideProduct data={data} />}
    </>
  )
}
