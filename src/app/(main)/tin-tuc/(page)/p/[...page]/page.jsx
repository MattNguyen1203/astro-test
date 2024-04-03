import getData from '@/lib/getData'
import AllNews from '@/sections/news/allnews'

export default async function page({params}) {
  const [posts, categories] = await Promise.all([
    getData(`/okhub/v1/post/post?limit=6&page=${params?.page}`),
    getData(`/okhub/v1/category/post`),
  ])
  return (
    <div className='pt-[9.76rem] -mt-[9.76rem]'>
      <AllNews
        posts={posts}
        categories={categories}
      />
    </div>
  )
}
