import './style.css'
import BannerLookUpOrder from './banner'
import SearchTracking from './search'
import BreadCrumb from '@/components/breadcrumb'

export default function IndexLookUpOrder({viewport}) {
  const isMobile = viewport === 'mobile'
  return (
    <main className='pt-[8rem] bg-elevation-20 pb-[4.29rem] xmd:pt-[5.18rem] xmd:bg-elevation-10 xmd:pb-[2.34rem]'>
      {isMobile && (
        <div className='w-full xmd:px-[1.17rem]'>
          <BreadCrumb
            category='Tra cứu đơn hàng'
            categorySlg='/tra-cuu-don-hang'
            classNameCat='xmd:w-full xmd:max-w-full'
          />
        </div>
      )}
      <BannerLookUpOrder isMobile={isMobile} />
      <section className='mt-[2.34261rem] xmd:mt-0'>
        <div className='flex flex-col items-center'>
          <SearchTracking />
        </div>
      </section>
    </main>
  )
}
