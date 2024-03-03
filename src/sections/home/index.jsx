import './style.css'

import BannerStrength from './components/strength'
import FlashVoucher from './components/flashvoucher'
import Accessory from './components/accessory'
import BannerHome from './components/banner'
import PromotionSlide from './components/promotions'

export default function HomeIndex({viewport}) {
  return (
    <main className='relative'>
      <section className='bg-elevation-20 pt-[8rem]'>
        <BannerHome viewport={viewport} />
        <BannerStrength />
      </section>
      <section>
        <FlashVoucher />
        <Accessory />
      </section>
      <section>
        <PromotionSlide />
      </section>
      <section className='h-screen'></section>

      {/* <IndexSWR />
      <div className='w-full h-screen bg-black'></div>
      <div className='right-0 top-0 size-[4rem] bg-black absolute'></div>
      <div className='flex items-center justify-center w-full h-screen'>
        <SonnerDemo />
        <DialogDemo />
        <TabInit />
      </div>

      <div className='container flex justify-center h-screen text-2xl text-black'>
        <div>
          <NavigationMenuDemo className='mt-[3rem]' />
          <CarouselDemo />
        </div>
      </div> */}
    </main>
  )
}
