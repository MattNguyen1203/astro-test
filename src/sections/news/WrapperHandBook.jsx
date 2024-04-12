import getData from '@/lib/getData'
import HandBook from './handbook'
import {slugCategoryHandBook} from '@/lib/constants'

export default async function WrapperHandBook() {
  const [posts, categories] = await Promise.all([
    getData(`/okhub/v1/post/postsByCategory/${slugCategoryHandBook}?limit=6`),
    getData('/okhub/v1/category/post'),
  ])
  const categoriesChildrenHandBook = categories?.find(
    (e) => e?.slug === slugCategoryHandBook,
  )?.children
  return (
    <HandBook
      posts={posts?.item}
      categories={categoriesChildrenHandBook}
    />
  )
}
