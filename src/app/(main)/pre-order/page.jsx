import 'swiper/css'
// import 'swiper/css/scrollbar'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import IndexPreOrder from '@/sections/preorder'
import getData from '@/lib/getData'

export default async function PreOrderPage({searchParams}) {
  const datavideo = await getData('/wp/v2/pages/289')
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  return (
    <IndexPreOrder
      isMobile={isMobile}
      datavideo={datavideo?.acf?.video}
    />
  )
}
