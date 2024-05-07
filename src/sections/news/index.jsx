import BreadCrumb from '@/components/breadcrumb'
import WrapperAllNew from './WrapperAllNew'
import WrapperHandBook from './WrapperHandBook'
import WrapperReview from './WrapperReview'

export default function IndexNews() {
  return (
    <main className='pt-[9.76rem] bg-white xmd:pt-[5.18rem]'>
      <div className='container'>
        <BreadCrumb
          category={'Tin tức'}
          categorySlg={'/tin-tuc'}
        />
      </div>
      <WrapperHandBook />
      <hr className='lg:hidden xmd:h-[0.07321rem] xmd:w-[26.28111rem] mx-auto mt-[0.5rem] bg-[rgba(218,218,218,0.70)]' />
      <WrapperReview />
      <WrapperAllNew before={'page/'} />
    </main>
  )
}
