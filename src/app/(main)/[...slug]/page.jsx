import getData from '@/lib/getData'
import ProductDetail from '@/sections/productDetail'

const ProductDetailPage = async ({searchParams, params: {slug}}) => {
  const {viewport} = searchParams
  const isMobile = viewport.includes('mobile')

  const dataProductDetailReq = getData(
    `/okhub/v1/product/productByslug/${slug}`,
  )
  const dataProductVoucherReq = getData(`/okhub/v1/product/coupon/${slug}`)

  const dataVariationReq = getData(
    `/okhub/v1/product/${slug}/attributes/detail`,
  )

  const bestCouponReq = getData(`/okhub/v1/coupon/product-detail/${slug}/best`)

  const [dataProductDetail, dataProductVoucher, dataVariation, dataBestCoupon] =
    await Promise.all([
      dataProductDetailReq,
      dataProductVoucherReq,
      dataVariationReq,
      bestCouponReq,
    ])

  return (
    <main className='bg-elevation-20'>
      <ProductDetail
        isMobile={isMobile}
        data={dataProductDetail}
        voucher={dataProductVoucher}
        variations={dataVariation}
        bestCoupon={dataBestCoupon}
      />
    </main>
  )
}

export default ProductDetailPage
