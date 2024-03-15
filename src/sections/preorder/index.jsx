import Image from 'next/image'
import BannerPreOrder from './components/banner'
import ProductPreOrder from './components/productpreorder'
import Shipper from './components/shipper'
import WatchReview from './components/watchreview'

export default function IndexPreOrder({isMobile}) {
  return (
    <>
      <main className='md:bg-[linear-gradient(95deg,#EEF8FF_0%,rgba(255,255,255,0.79)_100%)] xmd:bg-transparent relative z-10'>
        <BannerPreOrder isMobile={isMobile} />
        <ProductPreOrder />
        <div className='xmd:flex xmd:flex-col-reverse'>
          <WatchReview isMobile={isMobile} />
          <Shipper isMobile={isMobile} />
        </div>
      </main>
      {isMobile && (
        <Image
          className='fixed top-0 left-0 z-0 object-fill size-full'
          src={'/preorder/background-res.jpg'}
          alt='frame slide'
          width={380}
          height={900}
          priority
        />
      )}
    </>
  )
}
