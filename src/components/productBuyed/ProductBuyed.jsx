'use client'

import SkeletonCardProduct from '../cardproduct/SkeletonCardProduct'
import CardProduct from '@/components/cardproduct'

const ProductBuyed = ({session, isMobile, products}) => {
  const handleProcessData = (products) => {
    const data = []
    products?.forEach((product) => {
      product?.product_name?.forEach((children) => {
        data.push(children)
      })
    })
    return data
  }

  const dataNew = handleProcessData(products?.data)

  const colsProduct = Math.ceil(dataNew?.length / 3)

  const isLoading = false

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
              ({dataNew?.length} sản phẩm)
            </span>
            <hr className='bg-[#ECECECB2] h-[0.07rem] w-full my-[1.17rem] block' />
          </>
        )}
        <div
          style={{
            gridTemplateRows: `repeat(${colsProduct}, minmax(0, 1fr))`,
          }}
          className='grid grid-cols-3 gap-x-[0.73rem] gap-y-[1.17rem] xmd:grid-cols-2'
        >
          {isLoading ? (
            new Array(12)
              .fill(0)
              .map((e, index) => <SkeletonCardProduct key={index} />)
          ) : (
            <>
              {dataNew?.length > 0 ? (
                dataNew?.slice(0, 12)?.map((e, index) => (
                  <CardProduct
                    key={index}
                    product={e}
                    session={session}
                  />
                ))
              ) : (
                <p>Không có sản phẩm nào.</p>
              )}
            </>
          )}
        </div>
      </section>
      {/* <div className='mt-[1.25rem]'>
        <PaginationOrder
          pageCount={Math.ceil(uniqueProductNames?.length / itemsPerPage)}
          currentPage={parseInt(page) || currentPage}
          handleRouter={handlePageChange}
        />
      </div> */}
    </>
  )
}

export default ProductBuyed
