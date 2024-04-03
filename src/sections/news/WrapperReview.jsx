import getData from '@/lib/getData'
import Review from './review'
import {slugCategoryReview} from '@/lib/constants'

export default async function WrapperReview() {
  const [posts, categories] = await Promise.all([
    getData(`/okhub/v1/post/postsByCategory/${slugCategoryReview}?limit=4`),
    getData('/okhub/v1/category/post'),
  ])
  const categoriesChildrenReview = categories?.find(
    (e) => e?.slug === slugCategoryReview,
  )?.children
  return (
    <Review
      posts={posts?.item}
      categories={categoriesChildrenReview}
    />
  )
}
