import getData from '@/lib/getData'
import ComboDetail from '@/sections/productDetail/ComboDetail'

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
  const dataProductVoucherReq = getData(`/okhub/v1/product/coupon/${slug}`)
  const bestCouponReq = getData(`/okhub/v1/coupon/product-detail/${slug}/best`)
  const [dataProductDetail, dataProductVoucher, dataBestCoupon] =
    await Promise.all([
      dataProductDetailReq,
      dataProductVoucherReq,
      bestCouponReq,
    ])
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
            )?.find((item) => item.default)

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

  return (
    <main className='bg-elevation-20'>
      <ComboDetail
        isMobile={isMobile}
        data={newDataProduct}
        voucher={dataProductVoucher}
        bestCoupon={dataBestCoupon}
      />
    </main>
  )
}

export default ProductDetailPage
