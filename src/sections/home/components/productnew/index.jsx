import CategoryProduct from './CategoryProduct'
import SlideProduct from './SlideProduct'

export default function ProductIndex() {
  return (
    <>
      <CategoryProduct
        title='SẢN PHẨM MỚI NHẤT'
        href='/'
      />
      <SlideProduct />
    </>
  )
}
