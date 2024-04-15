import './style.css'
import BannerLookUpOrder from './banner'
import SearchTracking from './search'

export default function IndexLookUpOrder() {
  return (
    <main className='pt-[8rem] bg-elevation-20 pb-[4.29rem]'>
      <BannerLookUpOrder />
      <section className='mt-[2.34261rem]'>
        <div className='flex flex-col items-center'>
          <SearchTracking />
        </div>
      </section>
    </main>
  )
}
