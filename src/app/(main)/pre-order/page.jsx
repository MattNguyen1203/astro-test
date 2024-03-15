import 'swiper/css'
// import 'swiper/css/scrollbar'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import IndexPreOrder from '@/sections/preorder'

export default function PreOrderPage({searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  return <IndexPreOrder isMobile={isMobile} />
}
