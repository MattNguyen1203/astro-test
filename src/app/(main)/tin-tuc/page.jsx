import getData from '@/lib/getData'
import IndexNews from '@/sections/news'

export default async function NewsPage() {
  const posts = await getData('/custom/v1/post/post')
  return <IndexNews posts={posts} />
}
