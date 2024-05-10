import {auth} from '@/auth'
import getData from '@/lib/getData'
import {getDataProfile} from '@/lib/getDataProfile'
import ComboDetail from '@/sections/productDetail/ComboDetail'
import {notFound} from 'next/navigation'
import {IDGLOBALAPI} from '@/lib/IdPageAPI'

export async function generateStaticParams() {
  const products = await getData('/okhub/v1/product')
  const productsNew = products?.filter((e) => e?.type === 'wooco')

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

  const linkSocials = await getData(`/wp/v2/pages/${IDGLOBALAPI}`)

  const bestCouponReq = getData(`/okhub/v1/coupon/product-detail/${slug}/best`)
  const mainDataReq = getData(`/wp/v2/product?slug=${slug}`)
  const FiveProductReq = getData(`/okhub/v1/product/allProduct?limit=5&page=1`)

  const [
    dataProductDetail,
    dataProductVoucher,
    dataBestCoupon,
    session,
    mainData,
    FiveProduct,
  ] = await Promise.all([
    dataProductDetailReq,
    dataProductVoucherReq,
    bestCouponReq,
    auth(),
    mainDataReq,
    FiveProductReq,
  ])

  if (!dataProductDetail) return notFound()

  let newDataProduct = {}
  if (dataProductDetail) {
    await Promise.all(
      dataProductDetail?.grouped_products?.map((item) => {
        if (item.type === 'variable') {
          return getData(`/okhub/v1/product/${item.slug}/attributes/detail`)
        } else {
          return null
        }
      }),
    ).then((result) => {
      const groupPrd = dataProductDetail?.grouped_products?.map(
        (item, index) => {
          if (result?.[index] !== null) {
            const defaultValue = Object.values(
              result?.[index]?.variations,
            )?.find((item) => item?.default)

            return {
              ...item,
              listVariations: result[index],
              variation: defaultValue || {},
            }
          } else return item
        },
      )

      newDataProduct = {...dataProductDetail, grouped_products: groupPrd}
    })
  }
  const request = {
    api: '/custom/v1/wistlist/getWishlist',
    token: session?.accessToken,
  }
  const wishList = session?.accessToken && (await getDataProfile(request))

  return (
    <main className='bg-elevation-20'>
      <ComboDetail
        linkSocials={linkSocials?.acf?.link_social}
        wishList={wishList}
        isMobile={isMobile}
        data={newDataProduct}
        voucher={dataProductVoucher}
        bestCoupon={dataBestCoupon}
        session={session}
        mainData={mainData}
        FiveProduct={FiveProduct}
      />
    </main>
  )
}

export default ProductDetailPage
