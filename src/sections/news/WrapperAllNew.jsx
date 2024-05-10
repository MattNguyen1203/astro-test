import getData from '@/lib/getData'
import AllNews from './allnews'
import {IDGLOBALAPI} from '@/lib/IdPageAPI'

export default async function WrapperAllNew({page = 1, before}) {
  const [posts, categories, products, global] = await Promise.all([
    getData(`/okhub/v1/post/post?limit=6&page=${page}`),
    getData('/okhub/v1/category/post'),
    getData('/okhub/v1/product/allProduct?limit=5&page=1'),
    getData(`/wp/v2/pages/${IDGLOBALAPI}`),
  ])
  return (
    <AllNews
      linkSocials={global}
      posts={posts}
      categories={categories}
      before={before}
      products={products}
    />
  )
}
