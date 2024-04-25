import BreadCrumb from '@/components/breadcrumb'
import StepPayment from '@/sections/payment/StepPayment'
import {headers} from 'next/headers'

export default function PaymentLayout({children}) {
  const headersList = headers()
  const referer = headersList.get('referer')

  const categorySlg = referer?.includes('/thanh-toan')
    ? '/thanh-toan'
    : '/payment'
  const category = referer?.includes('/thanh-toan') ? 'Thanh toán' : 'Kết quả'

  return (
    <main className='bg-elevation-20 pt-[8.1rem]'>
      <div className='container mt-[1.17rem]'>
        <BreadCrumb
          category={category}
          categorySlg={categorySlg}
        />
      </div>
      <StepPayment />
      {children}
    </main>
  )
}
