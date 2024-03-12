//import css global home page
import './style.css'

// import css swiper
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

// import components
import BannerStrength from './components/strength'
import FlashVoucher from './components/flashvoucher'
import Accessory from './components/accessory'
import BannerHome from './components/banner'
import PromotionSlide from './components/promotions'
import FeedBack from './components/feedback'
import TechnologyConner from './components/technologyconner'
import {DialogProduct} from './components/dialog'
import TabInit from './components/tabs'
import ProductIndex from './components/productnew'
import LevelUpYourTech from './components/levelup'
import PreOder from './components/preoder'
import SheetCart from '@/components/sheetcart'
import CategoriesProduct from './components/categoriesproduct'

export default function HomeIndex({viewport}) {
  const isMobile = viewport === 'mobile'
  return (
    <main className='relative bg-elevation-20 xmd:bg-white'>
      <section className='pt-[8rem] xmd:pt-[5.18rem] xmd:bg-elevation-20'>
        <BannerHome
          isMobile={isMobile}
          viewport={viewport}
        />
        {!isMobile && <BannerStrength />}
      </section>
      <section>
        <FlashVoucher isMobile={isMobile} />
        {isMobile && <CategoriesProduct />}
        <Accessory isMobile={isMobile} />
      </section>
      {!isMobile && (
        <section>
          <PromotionSlide />
        </section>
      )}
      <section>
        <ProductIndex />
      </section>
      <section className='mt-[3.22rem]'>
        <LevelUpYourTech />
      </section>
      <section className='mt-[5rem]'>
        <PreOder />
      </section>
      <section className='mt-[4.39rem]'>
        <FeedBack />
      </section>
      <section className='pb-[1.49rem]'>
        <TechnologyConner />
      </section>
      {/* <div className='flex items-center justify-center w-full h-screen'>
        <DialogProduct>
          <div className='text-2xl text-black mt-[10px] cursor-default'>
            Edit Profile
          </div>
        </DialogProduct>
        <TabInit />
        <SheetCart />
      </div> */}
      {/* <IndexSWR />
      <div className='w-full h-screen bg-black'></div>
      <div className='right-0 top-0 size-[4rem] bg-black absolute'></div>


      <div className='container flex justify-center h-screen text-2xl text-black'>
        <div>
          <NavigationMenuDemo className='mt-[3rem]' />
          <CarouselDemo />
        </div>
      </div> */}
    </main>
  )
}
