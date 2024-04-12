import getData from '@/lib/getData'
import AllNews from './allnews'

export default async function WrapperAllNew({page = 1, before}) {
  const [posts, categories] = await Promise.all([
    getData(`/okhub/v1/post/post?limit=6&page=${page}`),
    getData('/okhub/v1/category/post'),
  ])
  return (
    <AllNews
      posts={posts}
      categories={categories}
      before={before}
    />
  )
}
