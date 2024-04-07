import BreadCrumb from '@/components/breadcrumb'
import getData from '@/lib/getData'
import WrapperHandBook from '@/sections/news/WrapperHandBook'
import WrapperReview from '@/sections/news/WrapperReview'
import AllNews from '@/sections/news/allnews'

export default async function page({params}) {
  const [posts, categories] = await Promise.all([
    getData(
      `/okhub/v1/post/postsByCategory/${params?.category}?page=1&limit=6`,
    ),
    getData(`/okhub/v1/category/post`),
  ])
  return (
    <main className='pt-[9.76rem] bg-elevation-10'>
      <div className='container'>
        <BreadCrumb />
      </div>
      <WrapperHandBook />
      <WrapperReview />
      <div className='pt-[9.76rem] -mt-[9.76rem]'>
        <AllNews
          posts={posts}
          categories={categories}
        />
      </div>
    </main>
  )
}
