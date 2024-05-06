import {auth} from '@/auth'
import getData from '@/lib/getData'
import {getDataProfile} from '@/lib/getDataProfile'
import ProductDetail from '@/sections/productDetail'
export async function generateStaticParams() {
  const products = await getData('/okhub/v1/product')
  const productsNew = products?.item?.filter(
    (e) =>
      e?.type !== 'wooco' && e?.meta_detect?.pre_order?._is_pre_order !== 'yes',
  )

  return productsNew.map((product) => ({
    slug: [product.slug],
  }))
}

const ProductDetailPage = async ({searchParams, params: {slug}}) => {
  const {viewport} = searchParams
  const isMobile = viewport.includes('mobile')

  const dataProductDetailReq = getData(
    `/okhub/v1/product/productByslug/${slug}`,
  )
  const dataProductVoucherReq = getData(
    `/okhub/v1/coupon/product-detail/${slug}?limit=10`,
  )

  const dataVariationReq = getData(
    `/okhub/v1/product/${slug}/attributes/detail`,
  )

  const bestCouponReq = getData(`/okhub/v1/coupon/product-detail/${slug}/best`)
  const mainDataReq = getData(`/wp/v2/product?slug=${slug}`)

  // const FiveProductReq = getData(`/okhub/v1/product/allProduct?limit=5&page=1`)
  const callRelatedProduct = getData(
    `/okhub/v1/product/related-products/slug/${slug}`,
  )

  const [
    dataProductDetail,
    dataProductVoucher,
    dataVariation,
    dataBestCoupon,
    session,
    mainData,
    relatedProduct,
  ] = await Promise.all([
    dataProductDetailReq,
    dataProductVoucherReq,
    dataVariationReq,
    bestCouponReq,
    auth(),
    mainDataReq,
    callRelatedProduct,
  ])

  const request = {
    api: '/custom/v1/wistlist/getWishlist',
    token: session?.accessToken,
  }

  const [wishList] = await Promise.all([getDataProfile(request)])

  return (
    <main className='bg-elevation-20'>
      <ProductDetail
        isMobile={isMobile}
        data={dataProductDetail}
        voucher={dataProductVoucher}
        variations={dataVariation}
        bestCoupon={dataBestCoupon}
        relatedProduct={relatedProduct}
        session={session}
        wishList={wishList}
        mainData={mainData}
      />
    </main>
  )
}

export default ProductDetailPage
