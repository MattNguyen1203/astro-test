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
import CategoriesProduct from './components/categoriesproduct'

import ProductIndex from './components/productnew'
import LevelUpYourTech from './components/levelup'
import PreOder from './components/preoder'
import FeedBack from './components/feedback'
import TechnologyConner from './components/technologyconner'
import ListStrength from '@/components/liststrength'
import WrapperPromotionSlide from './components/promotions/WrapperPromotionSlide'

export default function HomeIndex({viewport}) {
  const isMobile = viewport === 'mobile'
  const isTablet = viewport === 'tablet'
  return (
    <main className='relative bg-elevation-20 xmd:bg-white'>
      <section className='pt-[8rem] xmd:pt-[4.1rem] xmd:bg-elevation-20 tablet:pb-[5rem]'>
        <BannerHome
          isMobile={isMobile}
          viewport={viewport}
        />
        {!isMobile && !isTablet && <BannerStrength />}
      </section>
      <section>
        <FlashVoucher isMobile={isMobile} />
        {isMobile && <CategoriesProduct />}
        <Accessory isMobile={isMobile} />
      </section>
      {!isMobile && (
        <section>
          <WrapperPromotionSlide />
        </section>
      )}
      <section>
        <ProductIndex isMobile={isMobile} />
      </section>
      <section className='mt-[3.22rem] xmd:mt-[1.17rem]'>
        <LevelUpYourTech isMobile={isMobile} />
      </section>
      <section className='mt-[5rem] xmd:mt-[2.34rem]'>
        <PreOder />
      </section>
      <section className='mt-[4.39rem] xmd:mt-[2.34rem]'>
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
