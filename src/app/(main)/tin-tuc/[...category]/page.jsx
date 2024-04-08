import BreadCrumb from '@/components/breadcrumb'
import getData from '@/lib/getData'
import WrapperHandBook from '@/sections/news/WrapperHandBook'
import WrapperReview from '@/sections/news/WrapperReview'
import AllNews from '@/sections/news/allnews'

export async function generateStaticParams() {
  const [categories, posts] = await Promise.all([
    getData(`/okhub/v1/category/post/build`),
    getData('/okhub/v1/post/post'),
  ])
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

  handleRenderPage(Math.ceil(Number(posts?.count) / 6))
  categories?.forEach((category) => {
    handleRenderPage(Math.ceil(Number(category?.count) / 6), category?.slug)
  })

  return staticParams
}

export default async function page({params, searchParams}) {
  const [posts, categories] = await Promise.all([
    getData(
      `/okhub/v1/post/${
        Number(params?.category[0])
          ? 'post'
          : 'postsByCategory/' + params?.category[0]
      }?page=${
        Number(params?.category[0]) > 1 ? params?.category[0] : 1
      }&limit=6`,
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
  // const {viewport} = searchParams
  // const isMobile = viewport?.includes('mobile')
  // return (
  //   <main className='md:p-[9.76rem] xmd:mt-[6rem] md:bg-elevation-20'>
  //     <div className='container'>
  //       <BreadCrumb
  //         category={'Tin tức'}
  //         categorySlg={'/tin-tuc'}
  //         name={data?.post_name}
  //       />
  //       <div className='flex xmd:flex-col items-start space-x-[2.6875rem] py-[1.5rem]'>
  //         <div className='flex flex-col items-start md:w-[62.4451rem] space-y-[1.39092rem]'>
  //           <MainPostdetail data={data} />
  //           <Share />
  //         </div>
  //         <div className='xmd:hidden sticky top-[9rem] left-0'>
  //           <ActualProduct />
  //         </div>
  //       </div>
  //       <RelatedArticle isMobile={isMobile} />
  //     </div>
  //   </main>
}
