import BreadCrumb from '@/components/breadcrumb'
import WrapperAllNew from './WrapperAllNew'
import WrapperHandBook from './WrapperHandBook'
import WrapperReview from './WrapperReview'

export default function IndexNews() {
  return (
    <main className='pt-[9.76rem] bg-elevation-10'>
      <div className='container'>
        <BreadCrumb />
      </div>
      <WrapperHandBook />
      <WrapperReview />
      <WrapperAllNew />
    </main>
  )
}
