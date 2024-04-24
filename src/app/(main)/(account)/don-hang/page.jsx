import ICArrowRightBlack from '@/components/icon/ICArrowRightBlack'
import {TabsBill} from '@/components/tabsbill'
import { auth } from '@/auth'
import { getDataAuth } from '@/lib/getDataAuth'
import Link from 'next/link'

export default async function BillPage({searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport === 'mobile'
  const session = await auth()
  let dataOrder = await getDataAuth({
    token: session?.accessToken,
    api: `/okhub/v1/order`,
  })
  return (
    <>
      {isMobile && (
        <>
          <Link
            href='/dash-board'
            className='flex items-center pl-[0.59rem] h-[2.93rem] relative'
          >
            <ICArrowRightBlack className='rotate-180 size-[1.75rem] mr-[0.59rem]' />
            <span className='font-medium h5 text-greyscale-50'>Đơn hàng</span>
            <div className='absolute right-0 font-medium -translate-y-1/2 sub2 text-greyscale-40 top-1/2'>
              {dataOrder?.data?.length} đơn hàng
            </div>
          </Link>
          <hr className='h-[0.06rem] w-full mt-[0.5rem] mb-[1.25rem] bg-[#ECECEC]' />
        </>
      )}
      <TabsBill isMobile={isMobile} dataOrder={dataOrder}/>
    </>
  )
}
