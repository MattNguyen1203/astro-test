import {auth} from '@/auth'
import getData from '@/lib/getData'
import {getDataProfile} from '@/lib/getDataProfile'
import PreOrder from '@/sections/preorderdetail/PreOrder'
import {notFound} from 'next/navigation'

const page = async ({searchParams, params: {slug}}) => {
  const {viewport} = searchParams
  const isMobile = viewport.includes('mobile')
  const dataProductDetailReq = getData(
    `/okhub/v1/product/productByslug/${slug}`,
  )
  const dataProductVoucherReq = getData(`/okhub/v1/product/coupon/${slug}`)

  const dataVariationReq = getData(
    `/okhub/v1/product/${slug}/attributes/detail`,
  )
  const mainDataReq = getData(`/wp/v2/product?slug=${slug}`)
  const FiveProductReq = getData(`/okhub/v1/product/allProduct?limit=5&page=1`)

  const [
    session,
    dataProductDetail,
    dataProductVoucher,
    dataVariation,
    mainData,
    FiveProduct,
  ] = await Promise.all([
    auth(),
    dataProductDetailReq,
    dataProductVoucherReq,
    dataVariationReq,
    mainDataReq,
    FiveProductReq,
  ])
  if (!dataProductDetail) return notFound()

  const productCat = dataProductDetail?.categories?.[0]

  let relatedProduct

  if (productCat && productCat?.length > 0) {
    relatedProduct = await getData(
      `/okhub/v1/product/productByCategory/${'but-cam-ung'}?limit=5&page=1`,
    )
  }
  const request = {
    api: '/custom/v1/wistlist/getWishlist',
    token: session?.accessToken,
  }
  const wishList = session?.accessToken && (await getDataProfile(request))

  return (
    <main className='bg-elevation-20'>
      <PreOrder
        isMobile={isMobile}
        data={dataProductDetail}
        voucher={dataProductVoucher}
        variations={dataVariation}
        relatedProduct={relatedProduct}
        mainData={mainData}
        FiveProduct={FiveProduct}
        wishList={wishList}
        session={session}
      />
    </main>
  )
}

export default page
