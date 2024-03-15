import 'swiper/css'
// import 'swiper/css/scrollbar'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
// import 'swiper/css/free-mode'

import IndexFlashSale from '@/sections/flashsale'

export default function FlashSalePage({searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  return <IndexFlashSale isMobile={isMobile} />
}
