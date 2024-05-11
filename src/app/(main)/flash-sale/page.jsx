import 'swiper/css'

import IndexFlashSale from '@/sections/flashsale'

export default function FlashSalePage({searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  return <IndexFlashSale isMobile={isMobile} />
}
