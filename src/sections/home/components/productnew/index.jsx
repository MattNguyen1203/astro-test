import CategoryProduct from './CategoryProduct'
import CategoryProductRes from './CategoryProductRes'
import GridProductNewRes from './GridProductNewRes'
import SlideProduct from './SlideProduct'

export default function ProductIndex({isMobile}) {
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
      {isMobile ? <GridProductNewRes /> : <SlideProduct />}
    </>
  )
}
