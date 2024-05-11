'use client'

import {Suspense, useEffect, useRef} from 'react'
import {useParams, useSearchParams} from 'next/navigation'

import useSWR from 'swr'
import {fetcher} from '@/lib/utils'
import useStore from '@/app/(store)/store'

import PaginationIndex from '../account/components/pagination'
import GridProduct, {GridProductLoading} from './gridproduct'
import Sort from './sort'

export default function Wrapper({
  isMobile,
  products,
  children,
  categories,
  devices,
  page,
}) {
  const boxRef = useRef(null)
  const searchParams = useSearchParams()
  const params = useParams()
  const sort = searchParams.get('sort') || ''
  const price = searchParams.get('orderby') || ''
  const device = searchParams.get('device')?.split('--') || ''
  const type = searchParams.get('type')?.split('--') || ''
  const search = decodeURI(searchParams.get('search') || '')
  const flashsale = searchParams.get('flashsale') || false
  const preorder = searchParams.get('preorder') || false

  const setIsFilterProduct = useStore((state) => state.setIsFilterProduct)

  const isFilter = () => {
    if (price) return true
    if (sort === 'asc') return true
    if (sort === 'desc') return true
    if (device?.length > 0) return true
    if (search) return true
    if (type) return true
    if (flashsale) return true
    if (preorder) return true
    return false
  }
  // const filterCategory = params?.category?.length && [...params?.category[0]]

  // if (device) {
  //   filterCategory.push(device)
  // }

  useEffect(() => {
    if (isMobile) {
      const dataQueryDefault = {
        sort: sort,
        orderby: sort ? 'price' : '',
        type: type?.length ? type?.join('--') : '',
        search: search,
        flashsale: flashsale,
        preorder: preorder,
        device: device?.length ? device?.join('--') : '',
        page: page,
      }
      localStorage.setItem('dataQuery', JSON.stringify(dataQueryDefault))
    }
  }, [])

  const {data, isLoading, error} = useSWR(
    isFilter()
      ? process.env.NEXT_PUBLIC_API +
          `/okhub/v1/product/filter/products?${
            params?.category?.length && !Number(params?.category[0])
              ? 'category=' + JSON.stringify(params?.category[0]) + '&'
              : ''
          }limit=50${type ? `&type=${type}` : ''}${
            device?.length > 0 ? `&device=${JSON.stringify(device)}` : ''
          }${flashsale ? `&is_flashsale=true` : ''}${
            preorder ? `&is_preorder=true` : ''
          }${price ? `&orderby=${price}` : ''}&page=${
            params?.category?.length > 1 ? params?.category?.[1] : 1
          }&order=${sort ? sort : 'desc'}${search ? `&keyword=${search}` : ''}`
      : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )

  useEffect(() => {
    setIsFilterProduct(false)
  }, [searchParams, isLoading])

  const pageCount = Math.ceil(
    Number((isFilter() ? data?.count : products?.count) / 50),
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
          devices={devices}
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
              pageCount={pageCount}
              ref={boxRef}
            />
          </div>
        )}
      </div>
    </section>
  )
}
