import BannerPreOrder from './components/banner'
import ProductPreOrder from './components/productpreorder'
import Shipper from './components/shipper'
import WatchReview from './components/watchreview'

export default function IndexPreOrder() {
  return (
    <main className='bg-[linear-gradient(95deg,#EEF8FF_0%,rgba(255,255,255,0.79)_100%)]'>
      <BannerPreOrder />
      <ProductPreOrder />
      <WatchReview />
      <Shipper />
    </main>
  )
}
