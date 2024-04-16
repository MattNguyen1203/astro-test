import SkeletonCardProduct from '@/components/cardproduct/SkeletonCardProduct'
import ICArrowRightBlack from '@/components/icon/ICArrowRightBlack'
import PaginationIndex from '@/sections/account/components/pagination'
import Link from 'next/link'

export default function BuyedPage({searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport === 'mobile'
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
              (3 sản phẩm)
            </span>
            <hr className='bg-[#ECECECB2] h-[0.07rem] w-full my-[1.17rem] block' />
          </>
        )}
        <div className='grid grid-cols-3 grid-rows-4 gap-x-[0.73rem] gap-y-[1.17rem] xmd:grid-cols-2'>
          {new Array(12).fill(0).map((e, index) => (
            <SkeletonCardProduct key={index} />
          ))}
        </div>
      </section>
      <div className='mt-[1.25rem]'>
        <PaginationIndex />
      </div>
    </>
  )
}
