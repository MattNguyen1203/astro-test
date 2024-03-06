'use client'

import ReactPaginate from 'react-paginate'

export default function PaginationIndex() {
  return (
    <ReactPaginate
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
      previousClassName='rounded-full bg-white flex justify-center items-center shadow-[2px_4px_20px_0px_rgba(12,46,112,0.04),-6px_2px_28px_0px_rgba(12,46,112,0.04)]'
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
      nextClassName='rounded-full bg-white flex justify-center items-center shadow-[2px_4px_20px_0px_rgba(12,46,112,0.04),-6px_2px_28px_0px_rgba(12,46,112,0.04)]'
      // onPageChange={(e) => {
      //   router.replace(
      //     pathName + '?' + createQueryString('page', e?.selected + 1),
      //     {
      //       scroll: false,
      //     },
      //   )
      //   projectsRef?.current?.scrollIntoView({behavior: 'smooth'})
      // }}
      pageRangeDisplayed={5}
      // pageCount={Math.ceil(data?.meta?.pageCount) || 1}
      pageCount={10}
      renderOnZeroPageCount={null}
      // forcePage={page ? page - 1 : 0}
      // pageClassName={classes.page}
      // activeClassName={classes.selected}
      className={'flex justify-center items-center'}
    />
  )
}
