import {auth} from '@/auth'
import getData from '@/lib/getData'
import {getDataProfile} from '@/lib/getDataProfile'
import PreOrder from '@/sections/preorderdetail/PreOrder'
import {notFound} from 'next/navigation'
import {IDGLOBALAPI} from '@/lib/IdPageAPI'
import {fetchMetaData} from '@/lib/fetchMetaData'
import {getMeta} from '@/lib/getMeta'

export async function generateStaticParams() {
  const products = await getData('/okhub/v1/product')
  const productsNew = products?.filter(
    (e) => e?.meta?.pre_order?._is_pre_order === 'yes',
  )

  return productsNew?.map((product) => ({
    slug: [product?.slug],
  }))
}

export async function generateMetadata({params: {slug}}) {
  const result = await fetchMetaData(`product/${slug?.[0]}/`)
  return getMeta(result, `pre-order/${slug?.[0]}`)
}
const page = async ({searchParams, params: {slug}}) => {
  const {viewport} = searchParams
  const isMobile = viewport.includes('mobile')
  const dataProductDetailReq = getData(
    `/okhub/v1/product/productByslug/${slug?.[0]}`,
  )
  const dataProductVoucherReq = getData(`/okhub/v1/product/coupon/${slug?.[0]}`)

  const dataVariationReq = getData(
    `/okhub/v1/product/${slug?.[0]}/attributes/detail`,
  )
  const mainDataReq = getData(`/wp/v2/product?slug=${slug?.[0]}`)
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
  const linkSocials = await getData(`/wp/v2/pages/${IDGLOBALAPI}`)
  return (
    <main className='bg-elevation-20'>
      <PreOrder
        linkSocials={linkSocials?.acf?.link_social}
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
