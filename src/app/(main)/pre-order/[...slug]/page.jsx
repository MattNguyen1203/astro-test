import getData from '@/lib/getData'
import PreOrder from '@/sections/preorderdetail/PreOrder'

const page = async ({searchParams, params: {slug}}) => {
  const {viewport} = searchParams
  const isMobile = viewport.includes('mobile')

  const dataProductDetail = await getData(
    `/okhub/v1/product/productByslug/${slug}`,
  )

  const dataProductVoucher = await getData(`/okhub/v1/product/coupon/${slug}`)
  return (
    <main className='bg-elevation-20'>
      <PreOrder
        isMobile={isMobile}
        data={dataProductDetail}
        voucher={dataProductVoucher}
      />
    </main>
  )
}

export default page
