import BreadCrumb from '@/components/breadcrumb'
import Image from 'next/image'
import Wrapper from './Wrapper'
import Aside, {AsideLoading} from './aside'
import {Suspense} from 'react'

export default function IndexProduct({products, isMobile, categories}) {
  return (
    <main className='bg-elevation-20 pt-[9.76rem] xmd:pt-[5.5rem]'>
      <section className='container'>
        <div className='mb-[1.76rem] xmd:mb-[1.16rem] xlg:hidden xmd:block'>
          <BreadCrumb name={'Sản phẩm'} />
        </div>
        <div className='w-full h-[11.35747rem] xmd:h-[9.9063rem] rounded-[0.58565rem] shadow-[1.714px_3.429px_17.143px_0px_rgba(0,0,0,0.02),-5.143px_1.714px_27.429px_0px_rgba(0,0,0,0.06)] mb-[1.82rem] xmd:mb-[1.18rem]'>
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
      <Wrapper
        isMobile={isMobile}
        products={products}
        categories={categories}
      >
        {!isMobile && (
          <Suspense fallback={<AsideLoading />}>
            <Aside />
          </Suspense>
        )}
      </Wrapper>
    </main>
  )
}
