'use client'

import Link from 'next/link'
import SkeletonCardProduct from '../cardproduct/SkeletonCardProduct'
import CardProduct from '@/components/cardproduct'
import ICArrowRightBlack from '../icon/ICArrowRightBlack'
import {useEffect, useRef, useState} from 'react'
import PaginationOrder from '@/sections/account/components/pagination/PaginationOrder'
import useStore from '@/app/(store)/store'

const ProductBuyed = ({session, isMobile, products}) => {
  const [listProduct, setListProduct] = useState([])
  const productRef = useRef()

  const [pagination, setPagination] = useState({
    page: 1,
    perpage: 30,
  })
  const setProgress = useStore((state) => state.setProgress)

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    return () => {
      setProgress(100)
    }
  }, [])

  useEffect(() => {
    setIsLoading(true)
    const data =
      products?.data?.flatMap((product) => product?.product_name || []) || []

    const uniqueData = data?.filter((item, index, self) => {
      return self?.findIndex((t) => t?.id === item?.id) === index
    })

    setListProduct(uniqueData)
    setIsLoading(false)
  }, [products])

  const handlePageChange = (p) => {
    setPagination((prev) => ({...prev, page: p}))
    productRef.current.scrollIntoView({
      behavior: 'smooth',
    })
  }

  function paginate(array, page_number, page_size) {
    // Calculate starting index of the items for the current page
    const start = (page_number - 1) * page_size
    // Slice the array to get only items for the current page
    return array.slice(start, start + page_size)
  }
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
      <section
        className='xmd:px-[0.59rem] w-full rounded-[0.58565rem] bg-white p-[1.17rem] xmd:bg-transparent xmd:p-0'
        ref={productRef}
      >
        {!isMobile && (
          <>
            <span className='font-medium sub2 text-greyscale-80 inline-block mr-[0.44rem]'>
              Sản phẩm đã mua
            </span>
            <span className='font-normal sub2 text-greyscale-20'>
              ({listProduct?.length} sản phẩm)
            </span>
            <hr className='bg-[#ECECECB2] h-[0.07rem] w-full my-[1.17rem] block' />
          </>
        )}
        <div className='grid grid-cols-3 gap-x-[0.73rem] gap-y-[1.17rem] xmd:grid-cols-2'>
          {isLoading ? (
            new Array(12)
              .fill(0)
              .map((e, index) => <SkeletonCardProduct key={index} />)
          ) : (
            <>
              {listProduct?.length > 0 ? (
                paginate(listProduct, pagination.page, pagination.perpage)?.map(
                  (e, index) => (
                    <CardProduct
                      key={index}
                      product={e}
                      session={session}
                    />
                  ),
                )
              ) : (
                <p>Không có sản phẩm nào.</p>
              )}
            </>
          )}
        </div>
      </section>
      {listProduct?.length > pagination.perpage && (
        <div className='mt-[1.25rem]'>
          <PaginationOrder
            pageCount={Math.ceil(listProduct?.length / pagination.perpage)}
            currentPage={pagination.page || 1}
            handleRouter={handlePageChange}
          />
        </div>
      )}
    </>
  )
}

export default ProductBuyed
