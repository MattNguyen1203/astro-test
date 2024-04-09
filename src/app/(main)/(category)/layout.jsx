import BreadCrumb from '@/components/breadcrumb'
import getData from '@/lib/getData'
import WrapperHandBook from '@/sections/news/WrapperHandBook'
import WrapperReview from '@/sections/news/WrapperReview'
import {headers} from 'next/headers'

export default async function CategoryLayout({children}) {
  const categories = await getData(`/okhub/v1/category/post`)
  const headersList = headers()
  const referer = headersList.get('referer')
  const params = referer?.split('/')

  let nameCategory = null

  ;(function handleGetNameCategory() {
    if (params?.length) {
      if (Number(params[params?.length - 1])) {
        return (nameCategory = categories?.find(
          (e) => e?.slug === params[params?.length - 2],
        )?.name)
      } else {
        return (nameCategory = categories?.find(
          (e) => e?.slug === params[params?.length - 1],
        )?.name)
      }
    }
  })()

  return (
    <main className='pt-[9.76rem] bg-elevation-10'>
      <div className='container'>
        <BreadCrumb
          category={'Danh Mục'}
          categorySlg={'/tin-tuc'}
          name={nameCategory}
        />
      </div>
      <WrapperHandBook />
      <WrapperReview />
      {children}
    </main>
  )
}
