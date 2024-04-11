'use client'

import {Suspense, useEffect, useRef} from 'react'
import {useParams, useSearchParams} from 'next/navigation'

import useSWR from 'swr'
import {fetcher} from '@/lib/utils'
import useStore from '@/app/(store)/store'

import PaginationIndex from '../account/components/pagination'
import GridProduct, {GridProductLoading} from './gridproduct'
import Sort from './sort'

export default function Wrapper({isMobile, products, children, categories}) {
  const boxRef = useRef(null)
  const searchParams = useSearchParams()
  const params = useParams()
  const sort = searchParams.get('sort')
  const price = searchParams.get('orderby')
  const device = searchParams.get('device')
  const type = searchParams.get('type')
  const flashsale = searchParams.get('flashsale')

  const isFilterProduct = useStore((state) => state.isFilterProduct)
  const setIsFilterProduct = useStore((state) => state.setIsFilterProduct)
  console.log('🚀 ~ Wrapper ~ isFilterProduct:', isFilterProduct)

  const isFilter = () => {
    if (price) return true
    if (sort === 'asc') return true
    if (sort === 'desc') return true
    if (device) return true
    if (type) return true
    if (flashsale) return true
    return false
  }
  // const filterCategory = params?.category?.length && [...params?.category[0]]

  // if (device) {
  //   filterCategory.push(device)
  // }

  const {data, isLoading, error} = useSWR(
    isFilter()
      ? process.env.NEXT_PUBLIC_API +
          `/okhub/v1/product/filter/products?${
            params?.category?.length && !Number(params?.category[0])
              ? 'category=' + JSON.stringify(params?.category[0]) + '&'
              : ''
          }limit=16${type ? `&type=${type}` : ''}${
            flashsale ? `&is_flashsale=true` : ''
          }${price ? `&orderby=${price}` : ''}&page=${
            params?.category?.length > 1 ? params?.category?.[1] : 1
          }&order=${sort ? sort : 'desc'}`
      : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )

  useEffect(() => {
    if (!isLoading) {
      setIsFilterProduct(false)
    }
  }, [searchParams])

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
          categories={categories}
          isMobile={isMobile}
          products={isFilter() ? data : products}
        />
        <Suspense fallback={<GridProductLoading />}>
          <GridProduct
            isLoading={isLoading}
            products={isFilter() ? data : products}
            priority={true}
            indexPriority={8}
            isMobile={isMobile}
          />
        </Suspense>
        {pageCount > 1 && (
          <div className='flex justify-center mt-[2.34rem]'>
            <PaginationIndex
              pageRangeDisplayed={isMobile ? 1 : 2}
              pageCount={pageCount}
              ref={boxRef}
            />
          </div>
        )}
      </div>
    </section>
  )
}
