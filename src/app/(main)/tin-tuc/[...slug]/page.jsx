import BreadCrumb from '@/components/breadcrumb'
import getData from '@/lib/getData'
import ActualProduct from '@/sections/postdetail/ActualProduct'
import MainPostdetail from '@/sections/postdetail/MainPostdetail'
import RelatedArticle from '@/sections/postdetail/RelatedArticle'
import Share from '@/sections/postdetail/Share'

export async function generateStaticParams() {
  const posts = await getData('/okhub/v1/post/post')
  return posts?.item?.map((post) => {
    return {
      slug: [post?.post_slug],
    }
  })
}

export default async function page({params, searchParams}) {
  const data = await getData('/okhub/v1/post/postsBySlug/' + params?.slug[0])

  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  return (
    <main className='md:p-[9.76rem] md:pb-[6rem] xmd:mt-[6rem] md:bg-elevation-20'>
      <div className='container'>
        <BreadCrumb
          category={'Tin tức'}
          categorySlg={'/tin-tuc'}
          name={data?.post_name}
        />
        <div className='flex xmd:flex-col items-start space-x-[2.6875rem] py-[1.5rem]'>
          <div className='flex flex-col items-start md:w-[62.4451rem] space-y-[1.39092rem]'>
            <MainPostdetail data={data} />
            <Share />
          </div>
          <div className='xmd:hidden sticky top-[9rem] left-0'>
            <ActualProduct />
          </div>
        </div>
        <RelatedArticle isMobile={isMobile} />
      </div>
    </main>
  )
}
