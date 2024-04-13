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

  return (
    <main className='bg-elevation-20'>
      <PreOrder
        isMobile={isMobile}
        data={dataProductDetail}
        voucher={dataProductVoucher}
        variations={dataVariation}
      />
    </main>
  )
}

export default page
