import getData from '@/lib/getData'
import AllNews from '@/sections/news/allnews'
import {notFound} from 'next/navigation'
import {IDGLOBALAPI} from '@/lib/IdPageAPI'
import {getMeta} from '@/lib/getMeta'
import {fetchMetaData} from '@/lib/fetchMetaData'

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

export async function generateMetadata({params}) {
  function getSlugHierarchy(data, targetSlug) {
    for (const item of data) {
      if (item.slug === targetSlug) {
        return item.slug
      }
      if (item.children && item.children.length > 0) {
        const result = getSlugHierarchy(item.children, targetSlug)
        if (result) {
          return `${item.slug}/${result}`
        }
      }
    }
    return null
  }

  const allCate = await getData(`/okhub/v1/category/post`)
  const targetParams = params?.category[params?.category?.length - 1]

  const combineCate = getSlugHierarchy(allCate, targetParams)
  const result = await fetchMetaData(`category/${combineCate}/`)
  return getMeta(result, `danh-muc/${targetParams}`)
}

export default async function page({params}) {
  const [posts, categories, products, linkSocials] = await Promise.all([
    getData(
      `/okhub/v1/post/postsByCategory/${params?.category[0]}?page=${
        Number(params?.category?.length) > 1 ? params?.category[1] : 1
      }&limit=6`,
    ),
    getData(`/okhub/v1/category/post`),
    getData('/okhub/v1/product/allProduct?limit=5&page=1'),
    getData(`/wp/v2/pages/${IDGLOBALAPI}`),
  ])

  if (!posts) return notFound()

  return (
    <div className='pt-[9.76rem] -mt-[9.76rem]'>
      <AllNews
        linkSocials={linkSocials}
        posts={posts}
        categories={categories}
        url='/danh-muc/'
        products={products}
      />
    </div>
  )
}
