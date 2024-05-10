import {auth} from '@/auth'
import getData from '@/lib/getData'
import {getDataProfile} from '@/lib/getDataProfile'
import ProductDetail from '@/sections/productDetail'
import {notFound} from 'next/navigation'
import {IDGLOBALAPI} from '@/lib/IdPageAPI'

export async function generateStaticParams() {
  const products = await getData('/okhub/v1/product')
  const productsNew = products?.filter(
    (e) => e?.type !== 'wooco' && e?.meta?.pre_order?._is_pre_order !== 'yes',
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

  const linkSocials = getData(`/wp/v2/pages/${IDGLOBALAPI}`)

  const [
    dataProductDetail,
    dataProductVoucher,
    dataVariation,
    dataBestCoupon,
    session,
    mainData,
    relatedProduct,
    datalinkSocials,
  ] = await Promise.all([
    dataProductDetailReq,
    dataProductVoucherReq,
    dataVariationReq,
    bestCouponReq,
    auth(),
    mainDataReq,
    callRelatedProduct,
    linkSocials,
  ])
  if (!dataProductDetail) return notFound()
  const request = {
    api: '/custom/v1/wistlist/getWishlist',
    token: session?.accessToken,
  }

  const [wishList] = await Promise.all([getDataProfile(request)])
  console.log(linkSocials?.acf?.link_social)
  return (
    <main className='bg-elevation-20'>
      <ProductDetail
        linkSocials={datalinkSocials?.acf?.link_social}
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
