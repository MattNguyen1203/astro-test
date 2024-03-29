import BreadCrumb from '@/components/breadcrumb'
import Image from 'next/image'
import Sort from './sort'
import GridProduct from './gridproduct'
import Aside from './aside'
import PaginationIndex from '../account/components/pagination'

export default function IndexProduct({products, categories, isMobile}) {
  const pageCount = Math.ceil(Number(products?.count / 16))
  return (
    <main className='bg-elevation-20 pt-[8rem]'>
      <section className='container'>
        <div className='my-[1.76rem]'>
          <BreadCrumb />
        </div>
        <div className='w-full h-[11.35747rem] rounded-[0.58565rem] shadow-[1.714px_3.429px_17.143px_0px_rgba(0,0,0,0.02),-5.143px_1.714px_27.429px_0px_rgba(0,0,0,0.06)] mb-[1.82rem]'>
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
      <section className='container relative flex justify-between pb-[4.39rem]'>
        <Aside categories={categories} />
        <div className='w-[69.91215rem]'>
          <Sort />
          <GridProduct
            products={products}
            priority={true}
            indexPriority={8}
          />
          {pageCount > 1 && <PaginationIndex pageCount={pageCount} />}
          <div className='flex justify-center mt-[2.34rem]'>
            <PaginationIndex pageCount={pageCount} />
          </div>
        </div>
      </section>
    </main>
  )
}
