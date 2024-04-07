import BreadCrumb from '@/components/breadcrumb'
import ActualProduct from '@/sections/postdetail/ActualProduct'
import RelatedArticle from '@/sections/postdetail/RelatedArticle'
import getData from '@/lib/getData'
import '@/sections/postdetail/postdetail.css'
import Share from '@/sections/postdetail/Share'
import MainPostdetail from '@/sections/postdetail/MainPostdetail'

export default async function PostDetailPage({params, searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  const data = await getData(`/okhub/v1/post/postsBySlug/${params?.slug[0]}`)
  return (
    <main className='md:p-[9.76rem] xmd:mt-[6rem] md:bg-elevation-20'>
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
