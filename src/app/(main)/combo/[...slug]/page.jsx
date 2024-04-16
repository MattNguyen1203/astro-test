import getData from '@/lib/getData'
import ComboDetail from '@/sections/productDetail/ComboDetail'

const ProductDetailPage = async ({searchParams, params: {slug}}) => {
  const {viewport} = searchParams
  const isMobile = viewport.includes('mobile')

  const dataProductDetailReq = getData(
    `/okhub/v1/product/productByslug/${slug}`,
  )
  const dataProductVoucherReq = getData(`/okhub/v1/product/coupon/${slug}`)
  const bestCouponReq = getData(`/okhub/v1/coupon/product-detail/${slug}/best`)
  const [dataProductDetail, dataProductVoucher, dataBestCoupon] =
    await Promise.all([
      dataProductDetailReq,
      dataProductVoucherReq,
      bestCouponReq,
    ])

  return (
    <main className='bg-elevation-20'>
      <ComboDetail
        isMobile={isMobile}
        data={dataProductDetail}
        voucher={dataProductVoucher}
        bestCoupon={dataBestCoupon}
      />
    </main>
  )
}

export default ProductDetailPage
