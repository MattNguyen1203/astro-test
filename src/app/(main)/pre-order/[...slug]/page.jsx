import getData from '@/lib/getData'
import PreOrder from '@/sections/preorderdetail/PreOrder'

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

  const [dataProductDetail, dataProductVoucher, dataVariation] =
    await Promise.all([
      dataProductDetailReq,
      dataProductVoucherReq,
      dataVariationReq,
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
      <PreOrder
        isMobile={isMobile}
        data={dataProductDetail}
        voucher={dataProductVoucher}
        variations={dataVariation}
        relatedProduct={relatedProduct}
      />
    </main>
  )
}

export default page
