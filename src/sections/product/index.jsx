import BreadCrumb from '@/components/breadcrumb'
import Image from 'next/image'
import Sort from './sort'
import GridProduct from './gridproduct'
import Aside from './aside'
import PaginationIndex from '../account/components/pagination'
export default function IndexProduct({
  products,
  isMobile,
  page = null,
  params,
}) {
  const pageCount = Math.ceil(Number(products?.count / 16))

  let pathName = ''
  params?.slug?.map((e, index) => {
    if (index < params?.slug?.length - 1) {
      pathName += e + '/'
    }
  })

  return (
    <main className='bg-elevation-20 pt-[9.76rem] xmd:pt-[5.5rem]'>
      <section className='container'>
        <div className='mb-[1.76rem] xmd:mb-[1.16rem] xlg:hidden xmd:block'>
          <BreadCrumb name={'Sản phẩm'} />
        </div>
        <div className='w-full h-[11.35747rem] xmd:h-[9.9063rem] rounded-[0.58565rem] shadow-[1.714px_3.429px_17.143px_0px_rgba(0,0,0,0.02),-5.143px_1.714px_27.429px_0px_rgba(0,0,0,0.06)] mb-[1.82rem]'>
          <Image
            className='size-full object-cover rounded-[0.58565rem]'
            src={'/product/banner.jpg'}
            alt='banner'
            width={isMobile ? 420 : 1200}
            height={300}
            quality={100}
            priority
          />
        </div>
      </section>
      <section className='container relative flex justify-between md:pb-[4.39rem] pt-[9.76rem] -mt-[9.76rem] xmd:flex-col xmd:full-mb'>
        {!isMobile && <Aside />}
        <div className='w-[69.91215rem] xmd:w-full xmd:bg-white xmd:rounded-[0.87848rem] xmd:shadow-[0px_0px_10px_0px_rgba(12,46,112,0.05)] xmd:pb-[1.46rem] xmd:pt-[1.46rem]'>
          <Sort
            isMobile={isMobile}
            products={products}
          />
          <GridProduct
            products={products}
            priority={true}
            indexPriority={8}
            isMobile={isMobile}
          />
          {pageCount > 0 && (
            <div className='flex justify-center mt-[2.34rem]'>
              <PaginationIndex
                pageCount={pageCount}
                page={page}
                push={
                  params?.slug?.length > 1
                    ? `/san-pham/${pathName}`
                    : '/san-pham/'
                }
              />
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
