// Pagination.jsx
import React from 'react';
import ReactPaginate from 'react-paginate';
import ICNextPagination from '@/components/icon/ICNextPagination'
import ICPrevPagination from '@/components/icon/ICPrevPagination'

const PaginationOrder = ({ pageRangeDisplayed, pageCount=3, handleRouter, params,currentPage }) => (
  <ReactPaginate
    className='flex justify-center mt-5'
    activeClassName='!bg-blue-700 !text-white'
    pageClassName='size-[2.63543rem] bg-white rounded-full shadow-[-6px_2px_28px_0px_rgba(12,46,112,0.04),2px_4px_20px_0px_rgba(12,46,112,0.04)] flex justify-center items-center text-greyscale-30 font-svnGraphik button font-medium mx-[0.33rem] transition-all duration-200 select-none'
    breakLabel='...'
    previousLabel={<ICPrevPagination />}
    pageLinkClassName='size-full flex justify-center items-center'
    previousClassName='rounded-full bg-white size-[2.63543rem] flex justify-center items-center shadow-[2px_4px_20px_0px_rgba(12,46,112,0.04),-6px_2px_28px_0px_rgba(12,46,112,0.04)] mr-[1.43rem] xmd:mr-[0.43rem]'
    nextLabel={<ICNextPagination />}
    nextClassName='rounded-full bg-white size-[2.63543rem] flex justify-center items-center shadow-[2px_4px_20px_0px_rgba(12,46,112,0.04),-6px_2px_28px_0px_rgba(12,46,112,0.04)] ml-[1.43rem] xmd:ml-[0.43rem]'
    onPageChange={(e) => {
      handleRouter(Number(e?.selected) + 1)
    }}
    pageRangeDisplayed={pageRangeDisplayed}
    pageCount={pageCount}
    renderOnZeroPageCount={null}
    forcePage={currentPage-1}
  />
);

export default PaginationOrder;