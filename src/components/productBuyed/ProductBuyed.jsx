'use client'
import React, {useState, useEffect} from 'react'
import {useRouter, useSearchParams} from 'next/navigation'
import SkeletonCardProduct from '../cardproduct/SkeletonCardProduct'
import useSWR from 'swr'
import PaginationIndex from '@/sections/account/components/pagination'
import PaginationOrder from '@/sections/account/components/pagination/PaginationOrder'
import CardProduct from '@/components/cardproduct'
const ProductBuyed = ({session, isMobile}) => {
  const router = useRouter()
  const page = useSearchParams().get('page') || 1
  console.log(page)
  const [currentPage, setCurrentPage] = useState()
  const itemsPerPage = 12
  const indexOfLastItem = parseInt(page) * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  useEffect(() => {
    ;(page && setCurrentPage(parseInt(page))) || setCurrentPage(1)
  }, [])
  const fetcher = (url) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
      },
    }).then((r) => r.json())
  const {data, error, isLoading} = useSWR(
    `${process.env.NEXT_PUBLIC_API}/okhub/v1/order?status=completed`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )
  const productNames = data?.data?.flatMap((item) => item?.product_name || [])
  const uniqueProductNames = productNames?.reduce((unique, item) => {
    return unique.findIndex((uniqueItem) => uniqueItem.id === item.id) < 0
      ? [...unique, item]
      : unique
  }, [])

  const currentItems = uniqueProductNames?.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = (page) => {
    setCurrentPage(page);
    router.push(`?page=${page}`);
  };
  return (
    <>
      {isMobile && (
        <>
          <Link
            href='/dash-board'
            className='flex items-center pl-[0.59rem] h-[2.93rem] relative'
          >
            <ICArrowRightBlack className='rotate-180 size-[1.75rem] mr-[0.59rem]' />
            <span className='font-medium h5 text-greyscale-50'>
              Sản phẩm đã mua
            </span>
          </Link>
          <hr className='h-[0.06rem] w-full mt-[0.5rem] mb-[1.25rem] bg-[#ECECEC]' />
        </>
      )}
      <section className='w-full rounded-[0.58565rem] bg-white p-[1.17rem] xmd:bg-transparent xmd:p-0'>
        {!isMobile && (
          <>
            <span className='font-medium sub2 text-greyscale-80 inline-block mr-[0.44rem]'>
              Sản phẩm đã mua
            </span>
            <span className='font-normal sub2 text-greyscale-20'>
              ({uniqueProductNames?.length} sản phẩm)
            </span>
            <hr className='bg-[#ECECECB2] h-[0.07rem] w-full my-[1.17rem] block' />
          </>
        )}
        <div className='grid grid-cols-3 grid-rows-4 gap-x-[0.73rem] gap-y-[1.17rem] xmd:grid-cols-2'>
          {isLoading ? (
            new Array(12)
              .fill(0)
              .map((e, index) => <SkeletonCardProduct key={index} />)
          ) : (
            <>
              {currentItems?.length > 0 ? (
                currentItems.map((e, index) => (
                  <CardProduct
                    key={index}
                    product={e}
                  />
                ))
              ) : (
                <p>Không có sản phẩm nào.</p>
              )}
            </>
          )}
        </div>
      </section>
      <div className='mt-[1.25rem]'>
        <PaginationOrder
          pageCount={Math.ceil(uniqueProductNames?.length / itemsPerPage)}
          currentPage={parseInt(page) || currentPage}
          handleRouter={handlePageChange}
        />
      </div>
    </>
  )
}

export default ProductBuyed
