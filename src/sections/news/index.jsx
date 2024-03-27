import BreadCrumb from '@/components/breadcrumb'
import HandBook from './handbook'
import Review from './review'
import AllNews from './allnews'

export default function IndexNews({posts}) {
  return (
    <main className='pt-[9.76rem] bg-elevation-10'>
      <div className='container'>
        <BreadCrumb />
      </div>
      <HandBook />
      <Review />
      <AllNews posts={posts} />
    </main>
  )
}
