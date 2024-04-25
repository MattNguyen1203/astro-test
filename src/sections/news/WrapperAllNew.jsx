import getData from '@/lib/getData'
import AllNews from './allnews'

export default async function WrapperAllNew({page = 1, before}) {
  const [posts, categories, products] = await Promise.all([
    getData(`/okhub/v1/post/post?limit=6&page=${page}`),
    getData('/okhub/v1/category/post'),
    getData('/okhub/v1/product/allProduct?limit=5&page=1'),
  ])
  return (
    <AllNews
      posts={posts}
      categories={categories}
      before={before}
      products={products}
    />
  )
}
