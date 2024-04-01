import getData from '@/lib/getData'
import ComboDetail from '@/sections/productDetail/ComboDetail'

const ProductDetailPage = async ({searchParams, params: {slug}}) => {
  const {viewport} = searchParams
  const isMobile = viewport.includes('mobile')

  const dataProductDetail = await getData(
    `/okhub/v1/product/productByslug/${slug}`,
  )

  const dataProductVoucher = await getData(`/okhub/v1/product/coupon/${slug}`)

  return (
    <main className='bg-elevation-20'>
      <ComboDetail
        isMobile={isMobile}
        data={dataProductDetail}
        voucher={dataProductVoucher}
      />
    </main>
  )
}

export default ProductDetailPage
