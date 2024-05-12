import {fetchMetaData} from '@/lib/fetchMetaData'
import getData from '@/lib/getData'
import {getMeta} from '@/lib/getMeta'
import InfoOrderBill from '@/sections/payment/InfoOrderBill'
import ItemProductPayment from '@/sections/payment/ItemProductPayment'
import StatusPayment from '@/sections/payment/StatusPayment'

export async function generateMetadata({params}) {
  const result = await fetchMetaData(`thank-you/`)
  return getMeta(result, `thank-you`)
}

export default async function PaymentPage({searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport === 'mobile'
  const tracking = searchParams?.tracking

  const detailOrder = tracking && (await getData(`/okhub/v1/order/${tracking}`))

  const handleCheckStatusOrder = () => {
    if (detailOrder?.status === 'processing') return true
    if (detailOrder?.status === 'completed') return true
    return false
  }

  const dataCartNew = detailOrder?.product?.filter((item) => {
    if (!Array.isArray(item?.meta)) return true
    return !item?.meta?.find((e) => e?.key?.includes('parent'))
  })

  return (
    <section className='container xmd:w-full relative flex xmd:flex-col justify-between pb-[7.17rem] xmd:pb-0'>
      <article className='md:sticky top-[9.76rem] left-0 w-[50.87848rem] xmd:w-full space-y-[0.88rem]'>
        <StatusPayment
          isSuccess={handleCheckStatusOrder()}
          idOrder={detailOrder?.id}
        />
        {!isMobile && (
          <div className='p-[1.46rem] xmd:px-[0.58565rem] rounded-[0.58565rem] bg-white'>
            <div className='flex items-center justify-between'>
              <span className='text-[0.87848rem] leading-[1.833] tracking-[0.0022rem] text-greyscale-40'>
                Danh sách sản phẩm :
              </span>
              <span className='font-normal caption1 text-greyscale-30'>
                {dataCartNew?.length} sản phẩm
              </span>
            </div>
            <hr className='my-[0.59rem] bg-[#1E417C14] h-[0.07321rem]' />
            <div className='mt-[0.59rem]'>
              {dataCartNew?.map((item, index) => (
                <ItemProductPayment
                  key={index}
                  item={item}
                  length={dataCartNew?.length}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}
      </article>
      <InfoOrderBill
        isMobile={isMobile}
        dataCartNew={dataCartNew}
        detailOrder={detailOrder}
        isSuccess={handleCheckStatusOrder()}
      />
    </section>
  )
}
