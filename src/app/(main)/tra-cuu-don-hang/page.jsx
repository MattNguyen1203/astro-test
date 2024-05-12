import {fetchMetaData} from '@/lib/fetchMetaData'
import {getMeta} from '@/lib/getMeta'
import IndexLookUpOrder from '@/sections/lookuporder'

export async function generateMetadata({params}) {
  const result = await fetchMetaData(`tra-cuu-don-hang/`)
  return getMeta(result, `tra-cuu-don-hang`)
}
export default function LookUpOrderPage({searchParams}) {
  const {viewport} = searchParams
  return <IndexLookUpOrder viewport={viewport} />
}
