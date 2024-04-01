import BreadCrumb from '@/components/breadcrumb'
import HandBook from '@/sections/news/handbook'
import Review from '@/sections/news/review'

export default function PageLayout({children}) {
  return (
    <main className='pt-[9.76rem] bg-elevation-10'>
      <div className='container'>
        <BreadCrumb />
      </div>
      <HandBook />
      <Review />
      {children}
    </main>
  )
}
