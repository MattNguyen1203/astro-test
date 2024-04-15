'use client'
import MenuNews from '../MenuNews'
import useSWR from 'swr'
import {useSearchParams} from 'next/navigation'
import {fetcher} from '@/lib/utils'
import GridProductHandBook, {
  GridProductHandBookSkeleton,
} from './GridProductHandBook'

export default function HandBook({posts, categories}) {
  const searchParams = useSearchParams()
  const category = searchParams.get('cam-nang')
  const {data, error, isLoading} = useSWR(
    category
      ? process.env.NEXT_PUBLIC_API +
          `/okhub/v1/post/postsByCategory/${category}?page=1&limit=6`
      : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )

  return (
    <section className='mt-[1.76rem] container xmd:full-mb'>
      <div className='xmd:flex-col h-[4.97804rem]  xmd:h-[6.3rem] bg-white rounded-[0.87848rem] flex justify-between items-center xmd:items-start lg:px-[1.76rem] mb-[1.76rem] xmd:mb-[1.2rem]'>
        <h2 className='font-semibold text-blue-700 h5 whitespace-nowrap xmd:px-[0.59rem] xmd:mb-[0.88rem]'>
          Cẩm nang sử dụng
        </h2>
        <MenuNews
          categories={categories}
          searchParams={searchParams}
          categoryCurrent={category}
          nameCategory={'cam-nang'}
        />
      </div>
      {isLoading ? (
        <GridProductHandBookSkeleton />
      ) : (
        <GridProductHandBook posts={category ? data?.item : posts} />
      )}
    </section>
  )
}
