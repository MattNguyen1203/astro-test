import {auth} from '@/auth'
import getData from '@/lib/getData'
import ProductDetail from '@/sections/productDetail'
export async function generateStaticParams() {
  const products = await getData('/okhub/v1/product')
  const productsNew = products?.filter((e) => e?.type !== 'grouped')

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
  const dataProductVoucherReq = getData(`/okhub/v1/product/coupon/${slug}`)

  const dataVariationReq = getData(
    `/okhub/v1/product/${slug}/attributes/detail`,
  )

  const bestCouponReq = getData(`/okhub/v1/coupon/product-detail/${slug}/best`)

  const [
    dataProductDetail,
    dataProductVoucher,
    dataVariation,
    dataBestCoupon,
    session,
  ] = await Promise.all([
    dataProductDetailReq,
    dataProductVoucherReq,
    dataVariationReq,
    bestCouponReq,
    auth(),
  ])

  const productCat = dataProductDetail?.categories?.[0]

  let relatedProduct

  if (productCat && productCat?.length > 0) {
    relatedProduct = await getData(
      `/okhub/v1/product/productByCategory/${'but-cam-ung'}?limit=5&page=1`,
    )
  }

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
      />
    </main>
  )
}

export default ProductDetailPage
