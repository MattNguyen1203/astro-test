import BreadCrumb from '@/components/breadcrumb'
import getData from '@/lib/getData'
import SlideAccessory from '@/sections/home/components/accessory/slideaccessory'
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

  const relatedProduct = await getData(
    '/okhub/v1/post/' + params?.slug[0] + '/product',
  )

  let productByCate
  if (data && data?.categories && data?.categories?.[0]) {
    productByCate = await getData(
      '/okhub/v1/post/postsByCategory/' +
        data?.categories?.[0]?.slug +
        '?page=1&limit=10',
    )
  }

  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  return (
    <main className='md:pb-[6rem] xmd:mt-[6rem] md:bg-elevation-20'>
      <div className='container pt-[10rem]'>
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
          {relatedProduct && (
            <div className='xmd:hidden sticky top-[9rem] left-0'>
              <ActualProduct relatedProduct={relatedProduct} />
            </div>
          )}
        </div>

        {productByCate?.item && (
          <RelatedArticle
            isMobile={isMobile}
            productByCate={productByCate?.item}
          />
        )}

        <div className='md:hidden w-full mt-[2.34rem]'>
          <h2 className='py-[0.73rem] px-[0.88rem] bg-[#F4F4F4] rounded-[0.58565rem] sub1 font-semibold text-greyscale-80'>
            Sản phẩm nổi bật
          </h2>
          <div className='xmd:h-[25.92rem]'>
            <SlideAccessory products={{item: relatedProduct}} />
          </div>
        </div>
      </div>
    </main>
  )
}
