import ProductPreOrder from '../preorder/components/productpreorder'
import BannerFlashSale from './components/banner'

export default function IndexFlashSale() {
  return (
    <main className='pt-[8rem] '>
      <BannerFlashSale />
      <WrapperFlashSale />
    </main>
  )
}
