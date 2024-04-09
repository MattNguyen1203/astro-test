'use client'

import {useParams, useRouter, useSearchParams} from 'next/navigation'
import {forwardRef} from 'react'

import useStore from '@/app/(store)/store'
import ReactPaginate from 'react-paginate'

import ICNextPagination from '@/components/icon/ICNextPagination'
import ICPrevPagination from '@/components/icon/ICPrevPagination'

const PaginationPosts = forwardRef(
  (
    {
      pageCount = 10,
      pageRangeDisplayed = 2,
      page = null,
      before = '',
      url = '/tin-tuc/',
    },
    ref,
  ) => {
    const searchParams = useSearchParams()
    const params = useParams()
    const router = useRouter()
    const setIsFilterPosts = useStore((state) => state.setIsFilterPosts)

    const pageCurrent = page
      ? page
      : params?.category?.length > 1
      ? params?.category[1]
      : params?.category?.length === 1 && Number(params?.category[0])
      ? Number(params?.category[0])
      : 1

    const handleRouter = (page) => {
      const paramNew = new URLSearchParams(searchParams)
      if (page <= 1) {
        if (params?.category?.length > 1) {
          const pathNameNew = url + before + params?.category[0]
          setIsFilterPosts(true)
          if (ref) {
            ref?.current?.scrollIntoView({behavior: 'smooth'})
          }
          router.push(pathNameNew + '?' + paramNew.toString(), {
            scroll: false,
          })
        } else {
          const pathNameNew = url?.slice(0, url?.length - 1)
          setIsFilterPosts(true)
          if (ref) {
            ref?.current?.scrollIntoView({behavior: 'smooth'})
          }
          router.push(pathNameNew + '?' + paramNew.toString(), {
            scroll: false,
          })
        }
      } else {
        if (params?.category?.length) {
          const pathNameNew = url + before + params?.category[0] + `/${page}`
          setIsFilterPosts(true)
          if (ref) {
            ref?.current?.scrollIntoView({behavior: 'smooth'})
          }
          router.push(pathNameNew + '?' + paramNew.toString(), {
            scroll: false,
          })
        } else {
          const pathNameNew = url + before + `${page}`
          setIsFilterPosts(true)
          if (ref) {
            ref?.current?.scrollIntoView({behavior: 'smooth'})
          }
          router.push(pathNameNew + '?' + paramNew.toString(), {
            scroll: false,
          })
        }
      }
    }
    return (
      <ReactPaginate
        activeClassName='!bg-blue-700 !text-white'
        pageClassName='size-[2.63543rem] bg-white rounded-full shadow-[-6px_2px_28px_0px_rgba(12,46,112,0.04),2px_4px_20px_0px_rgba(12,46,112,0.04)] flex justify-center items-center text-greyscale-30 font-svnGraphik button font-medium mx-[0.33rem] transition-all duration-200 select-none'
        breakLabel='...'
        previousLabel={<ICPrevPagination />}
        pageLinkClassName='size-full flex justify-center items-center'
        previousClassName='rounded-full bg-white size-[2.63543rem] flex justify-center items-center shadow-[2px_4px_20px_0px_rgba(12,46,112,0.04),-6px_2px_28px_0px_rgba(12,46,112,0.04)] mr-[1.43rem]'
        nextLabel={<ICNextPagination />}
        nextClassName='rounded-full bg-white size-[2.63543rem] flex justify-center items-center shadow-[2px_4px_20px_0px_rgba(12,46,112,0.04),-6px_2px_28px_0px_rgba(12,46,112,0.04)] ml-[1.43rem]'
        onPageChange={(e) => {
          handleRouter(Number(e?.selected) + 1)
        }}
        // hrefBuilder={(e) => `/tin-tuc/p/${e}`}
        pageRangeDisplayed={pageRangeDisplayed}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        forcePage={pageCurrent ? pageCurrent - 1 : 0}
        className={'flex justify-center items-center'}
      />
    )
  },
)
export default PaginationPosts
