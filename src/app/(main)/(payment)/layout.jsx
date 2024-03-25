import BreadCrumb from '@/components/breadcrumb'
import StepPayment from '@/sections/payment/StepPayment'

export default function PaymentLayout({children}) {
  return (
    <main className='bg-elevation-20 pt-[8.1rem]'>
      <div className='container mt-[1.17rem]'>
        <BreadCrumb />
      </div>
      <StepPayment />
      {children}
    </main>
  )
}
