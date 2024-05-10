import BreadCrumb from '@/components/breadcrumb'
import StepPayment from '@/sections/payment/StepPayment'
import {headers} from 'next/headers'
import Image from 'next/image'
import Back from './components/Back'

export default function PaymentLayout({children}) {
  const headersList = headers()
  const referer = headersList.get('referer')

  const userAgent = headersList.get('user-agent')
  const isMobile =
    /Android|webOS|iPhone|BlackBerry|IEMobile|ZaloTheme|FB_IAB|Opera Mini/i.test(
      userAgent,
    )

  const categorySlg = referer?.includes('/thanh-toan')
    ? '/thanh-toan'
    : '/payment'
  const category = referer?.includes('/thanh-toan') ? 'Thanh toán' : 'Kết quả'

  return (
    <main className='bg-elevation-20 pt-[8.1rem] xmd:pt-[4.1rem]'>
      {!isMobile ? (
        <div className='container mt-[1.17rem]'>
          <BreadCrumb
            category={category}
            categorySlg={categorySlg}
          />
        </div>
      ) : (
        <Back />
      )}
      {!isMobile ? (
        <StepPayment />
      ) : (
        <div className='container rounded-[0.58565rem] bg-[#F9F4F0] mt-[1.17rem] flex justify-center items-center h-[5.7101rem] px-[1.46rem] mb-[1.46rem]'>
          <div className='flex justify-center items-center flex-col'>
            <div
              className={`bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)] size-[2.34261rem] rounded-full flex justify-center items-center`}
            >
              <Image
                className='w-[1.30146rem] h-auto object-contain'
                src={'/home/cart.svg'}
                alt='cart icon'
                width={24}
                height={24}
              />
            </div>
            <span className='body2 font-semibold text-greyscale-40 block w-fit ml-[0.59rem] whitespace-nowrap'>
              Thông tin đặt hàng
            </span>
          </div>
        </div>
      )}
      {children}
    </main>
  )
}
