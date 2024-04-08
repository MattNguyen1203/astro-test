'use client'

import {useRef} from 'react'
import {useParams, useSearchParams} from 'next/navigation'

import useSWR from 'swr'
import {fetcher} from '@/lib/utils'

import PaginationIndex from '../account/components/pagination'
import GridProduct from './gridproduct'
import Sort from './sort'

export default function Wrapper({isMobile, products, children}) {
  const boxRef = useRef(null)
  const searchParams = useSearchParams()
  const params = useParams()

  const page = searchParams.get('page')
  const sort = searchParams.get('sort')
  const price = searchParams.get('orderby')
  const device = searchParams.get('device')

  const isFilter = () => {
    if (Number(page) > 1) return true
    if (params?.slug?.length > 1) return true
    if (price) return true
    if (sort === 'asc') return true
    if (device) return true
    return false
  }
  console.log('🚀 ~ isFilter ~ isFilter:', isFilter())

  const {data, isLoading, error} = useSWR(
    isFilter()
      ? process.env.NEXT_PUBLIC_API +
          `/okhub/v1/product/filter/products?${
            params?.slug?.length > 1
              ? 'category=' + [...params?.slug] + '&'
              : ''
          }limit=${isMobile ? 8 : 16}${price ? `&orderby=${price}` : ''}&page=${
            page ? page : 1
          }&order=${sort ? sort : 'desc'}`
      : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )

  const pageCount = Math.ceil(
    Number((isFilter() ? data?.count : products?.count) / 16),
  )

  return (
    <section
      ref={boxRef}
      className='container relative flex justify-between md:pb-[4.39rem] pt-[9.76rem] -mt-[9.76rem] xmd:flex-col xmd:full-mb'
    >
      {children}
      <div className='w-[69.91215rem] xmd:w-full xmd:bg-white xmd:rounded-[0.87848rem] xmd:shadow-[0px_0px_10px_0px_rgba(12,46,112,0.05)] xmd:pb-[1.46rem] xmd:pt-[1.46rem]'>
        <Sort
          isMobile={isMobile}
          products={isFilter() ? data : products}
        />
        <GridProduct
          products={isFilter() ? data : products}
          priority={true}
          indexPriority={8}
          isMobile={isMobile}
        />
        {pageCount > 0 && (
          <div className='flex justify-center mt-[2.34rem]'>
            <PaginationIndex
              pageCount={pageCount}
              page={page}
              ref={boxRef}
            />
          </div>
        )}
      </div>
    </section>
  )
}
