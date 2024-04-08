'use client'

import {useParams, useRouter, useSearchParams} from 'next/navigation'
import {forwardRef} from 'react'
import ReactPaginate from 'react-paginate'

const PaginationPosts = forwardRef(
  ({pageCount = 10, pageRangeDisplayed = 2}, ref) => {
    const searchParams = useSearchParams()
    const params = useParams()
    const router = useRouter()

    const page =
      params?.category?.length > 1
        ? params?.category[1]
        : params?.category?.length === 1 && Number(params?.category[0])
        ? Number(params?.category[0])
        : 1

    const handleRouter = (page) => {
      const paramNew = new URLSearchParams(searchParams)
      if (page <= 1) {
        if (params?.category?.length > 1) {
          const pathNameNew = '/tin-tuc/' + params?.category[0]
          if (ref) {
            ref?.current?.scrollIntoView({behavior: 'smooth'})
          }
          router.push(pathNameNew + '?' + paramNew.toString(), {
            scroll: false,
            shallow: true,
          })
        } else {
          const pathNameNew = '/tin-tuc'
          if (ref) {
            ref?.current?.scrollIntoView({behavior: 'smooth'})
          }
          router.push(pathNameNew + '?' + paramNew.toString(), {
            scroll: false,
            shallow: true,
          })
        }
      } else {
        if (params?.category?.length) {
          const pathNameNew = '/tin-tuc/' + params?.category[0] + `/${page}`
          if (ref) {
            ref?.current?.scrollIntoView({behavior: 'smooth'})
          }
          router.push(pathNameNew + '?' + paramNew.toString(), {
            scroll: false,
            shallow: true,
          })
        } else {
          const pathNameNew = '/tin-tuc/' + `${page}`
          if (ref) {
            ref?.current?.scrollIntoView({behavior: 'smooth'})
          }
          router.push(pathNameNew + '?' + paramNew.toString(), {
            scroll: false,
            shallow: true,
          })
        }
      }
    }
    return (
      <ReactPaginate
        activeClassName='!bg-blue-700 !text-white'
        pageClassName='size-[2.63543rem] bg-white rounded-full shadow-[-6px_2px_28px_0px_rgba(12,46,112,0.04),2px_4px_20px_0px_rgba(12,46,112,0.04)] flex justify-center items-center text-greyscale-30 font-svnGraphik button font-medium mx-[0.33rem] transition-all duration-200 select-none'
        breakLabel='...'
        previousLabel={
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='24'
            viewBox='0 0 25 24'
            fill='none'
          >
            <path
              d='M14.5 16L10.5 12L14.5 8'
              stroke='#BE9367'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        }
        pageLinkClassName='size-full flex justify-center items-center'
        previousClassName='rounded-full bg-white size-[2.63543rem] flex justify-center items-center shadow-[2px_4px_20px_0px_rgba(12,46,112,0.04),-6px_2px_28px_0px_rgba(12,46,112,0.04)] mr-[1.43rem]'
        nextLabel={
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='24'
            viewBox='0 0 25 24'
            fill='none'
          >
            <path
              d='M10.5 16L14.5 12L10.5 8'
              stroke='#BE9367'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        }
        nextClassName='rounded-full bg-white size-[2.63543rem] flex justify-center items-center shadow-[2px_4px_20px_0px_rgba(12,46,112,0.04),-6px_2px_28px_0px_rgba(12,46,112,0.04)] ml-[1.43rem]'
        onPageChange={(e) => {
          handleRouter(Number(e?.selected) + 1)
        }}
        // hrefBuilder={(e) => `/tin-tuc/p/${e}`}
        pageRangeDisplayed={pageRangeDisplayed}
        // pageCount={Math.ceil(data?.meta?.pageCount) || 1}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        forcePage={page ? page - 1 : 0}
        // pageClassName={classes.page}
        // activeClassName={classes.selected}
        className={'flex justify-center items-center'}
      />
    )
  },
)
export default PaginationPosts
