import BreadCrumb from '@/components/breadcrumb'
import getData from '@/lib/getData'
import WrapperAllNew from '@/sections/news/WrapperAllNew'
import WrapperHandBook from '@/sections/news/WrapperHandBook'
import WrapperReview from '@/sections/news/WrapperReview'

export async function generateStaticParams() {
  const posts = await getData('/okhub/v1/post/post')
  const staticParams = []

  const handleRenderPage = (length) => {
    for (let index = 0; index < length; index++) {
      if (index) {
        staticParams.push({
          page: (index + 1).toString(),
        })
      }
    }
  }

  handleRenderPage(Math.ceil(Number(posts?.count) / 6))
  return staticParams
}

export default function page({params}) {
  return (
    <main className='pt-[9.76rem] bg-elevation-10'>
      <div className='container'>
        <BreadCrumb />
      </div>
      <WrapperHandBook />
      <WrapperReview />
      <WrapperAllNew page={params?.page} />
    </main>
  )
}
