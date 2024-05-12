import {fetchMetaData} from '@/lib/fetchMetaData'
import {getMeta} from '@/lib/getMeta'
import AccessoryIndex from '@/sections/accessory'

export async function generateMetadata({params}) {
  const result = await fetchMetaData(`tim-kiem-theo-phu-kien/`)
  return getMeta(result, `tim-kiem-theo-phu-kien`)
}

export default function AccessoryPage({searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  return <AccessoryIndex isMobile={isMobile} />
}
