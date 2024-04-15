'use client'
import useSWR from 'swr'
import MenuNews from '../MenuNews'
import GridProductReview, {GridProductReviewSkeleton} from './GridProductReview'
import {useSearchParams} from 'next/navigation'
import {fetcher} from '@/lib/utils'

export default function Review({posts, categories}) {
  const searchParams = useSearchParams()
  const category = searchParams.get('review')
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
    <section className='mt-[3.51rem] container xmd:full-mb'>
      <div className='h-[4.97804rem] xmd:h-[6.3rem] bg-white rounded-[0.87848rem] flex xmd:flex-col justify-between items-center xmd:items-start lg:px-[1.76rem] xmd:mb-[1.2rem] mb-[0.88rem] '>
        <h2 className='font-semibold text-blue-700 h5 xmd:mb-[0.88rem] whitespace-nowrap xmd:px-[0.59rem]'>
          Review sản phẩm
        </h2>
        <MenuNews
          categories={categories}
          searchParams={searchParams}
          categoryCurrent={category}
          nameCategory={'review'}
        />
      </div>
      {isLoading ? (
        <GridProductReviewSkeleton />
      ) : (
        <GridProductReview posts={category ? data?.item : posts} />
      )}
    </section>
  )
}
