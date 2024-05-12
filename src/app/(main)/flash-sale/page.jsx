import 'swiper/css'

import IndexFlashSale from '@/sections/flashsale'
import {fetchMetaData} from '@/lib/fetchMetaData'
import {getMeta} from '@/lib/getMeta'

export async function generateMetadata({params}) {
  const result = await fetchMetaData(`flash_sale/`)
  return getMeta(result, `flash-sale/`)
}

export default function FlashSalePage({searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  return <IndexFlashSale isMobile={isMobile} />
}
