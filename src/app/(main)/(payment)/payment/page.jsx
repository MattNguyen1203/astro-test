import {auth} from '@/auth'
import {getDataProfile} from '@/lib/getDataProfile'
import InfoOrderBill from '@/sections/payment/InfoOrderBill'
import ItemProductPayment from '@/sections/payment/ItemProductPayment'
import StatusPayment from '@/sections/payment/StatusPayment'

export default async function PaymentPage({searchParams}) {
  const tracking = searchParams?.tracking
  const session = await auth()
  const request = {
    api: `/okhub/v1/order/${tracking}`,
    token: session?.accessToken,
  }
  const detailOrder = session?.accessToken && (await getDataProfile(request))

  const handleCheckStatusOrder = () => {
    if (detailOrder?.status === 'processing') return true
    if (detailOrder?.status === 'completed') return true
    return false
  }

  return (
    <section className='container relative flex justify-between pb-[7.17rem]'>
      <article className='sticky top-[9.76rem] left-0 w-[50.87848rem] space-y-[0.88rem]'>
        <StatusPayment
          isSuccess={handleCheckStatusOrder()}
          idOrder={detailOrder?.id}
        />
        <div className='p-[1.46rem] rounded-[0.58565rem] bg-white'>
          <div className='flex items-center justify-between'>
            <span className='text-[0.87848rem] leading-[1.833] tracking-[0.0022rem] text-greyscale-40'>
              Danh sách sản phẩm :
            </span>
            {/* <span className='font-normal caption1 text-greyscale-30'>
              {detailOrder?.product?.length} sản phẩm
            </span> */}
          </div>
          <hr className='my-[0.59rem] bg-[#1E417C14] h-[0.07321rem]' />
          <div className='mt-[0.59rem]'>
            {detailOrder?.product?.map((item, index) => (
              <ItemProductPayment
                key={index}
                item={item}
                length={detailOrder?.product?.length}
                index={index}
              />
            ))}
          </div>
        </div>
      </article>
      <InfoOrderBill
        detailOrder={detailOrder}
        isSuccess={handleCheckStatusOrder()}
      />
    </section>
  )
}
