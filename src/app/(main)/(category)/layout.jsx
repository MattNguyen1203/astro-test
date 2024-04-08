import BreadCrumb from '@/components/breadcrumb'
import WrapperHandBook from '@/sections/news/WrapperHandBook'
import WrapperReview from '@/sections/news/WrapperReview'

export default function CategoryLayout({children}) {
  return (
    <main className='pt-[9.76rem] bg-elevation-10'>
      <div className='container'>
        <BreadCrumb />
      </div>
      <WrapperHandBook />
      <WrapperReview />
      {children}
    </main>
  )
}
