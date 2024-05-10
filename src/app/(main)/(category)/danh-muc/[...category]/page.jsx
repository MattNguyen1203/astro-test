import getData from '@/lib/getData'
import AllNews from '@/sections/news/allnews'
import {notFound} from 'next/navigation'

export async function generateStaticParams() {
  const categories = await getData(`/okhub/v1/category/post/build`)
  const staticParams = []

  const handleRenderPage = (length, before = '') => {
    if (before) {
      staticParams.push({
        category: [before],
      })
    }

    for (let index = 0; index < length; index++) {
      if (index) {
        let newArr = []
        if (before) {
          newArr.push(before)
        }
        newArr.push((index + 1).toString())
        staticParams.push({
          category: [...newArr],
        })
      }
    }
  }

  categories?.forEach((category) => {
    handleRenderPage(Math.ceil(Number(category?.count) / 6), category?.slug)
  })

  return staticParams
}

export default async function page({params}) {
  const [posts, categories, products] = await Promise.all([
    getData(
      `/okhub/v1/post/postsByCategory/${params?.category[0]}?page=${
        Number(params?.category?.length) > 1 ? params?.category[1] : 1
      }&limit=6`,
    ),
    getData(`/okhub/v1/category/post`),
    getData('/okhub/v1/product/allProduct?limit=5&page=1'),
  ])

  if (!posts) return notFound()

  return (
    <div className='pt-[9.76rem] -mt-[9.76rem]'>
      <AllNews
        posts={posts}
        categories={categories}
        url='/danh-muc/'
        products={products}
      />
    </div>
  )
}
