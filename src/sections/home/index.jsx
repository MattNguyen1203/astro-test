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
import CategoriesProduct from './components/categoriesproduct'

import ProductIndex from './components/productnew'
import LevelUpYourTech from './components/levelup'
import PreOder from './components/preoder'
import FeedBack from './components/feedback'
import TechnologyConner from './components/technologyconner'
import ListStrength from '@/components/liststrength'

export default function HomeIndex({viewport, products}) {
  const isMobile = viewport === 'mobile'
  return (
    <main className='relative bg-elevation-20 xmd:bg-white'>
      <section className='pt-[8rem] xmd:pt-[4.1rem] xmd:bg-elevation-20'>
        <BannerHome
          isMobile={isMobile}
          viewport={viewport}
        />
        {!isMobile && <BannerStrength />}
      </section>
      <section>
        <FlashVoucher isMobile={isMobile} />
        {isMobile && <CategoriesProduct />}
        <Accessory
          isMobile={isMobile}
          products={products}
        />
      </section>
      {!isMobile && (
        <section>
          <PromotionSlide />
        </section>
      )}
      <section>
        <ProductIndex isMobile={isMobile} />
      </section>
      <section className='mt-[3.22rem] xmd:mt-[1.17rem]'>
        <LevelUpYourTech isMobile={isMobile} />
      </section>
      {!isMobile && (
        <section className='mt-[5rem]'>
          <PreOder />
        </section>
      )}
      <section className='mt-[4.39rem]'>
        <FeedBack isMobile={isMobile} />
      </section>
      <section className='md:pb-[1.49rem]'>
        <TechnologyConner isMobile={isMobile} />
      </section>
      {isMobile && (
        <section>
          <ListStrength />
        </section>
      )}
    </main>
  )
}
