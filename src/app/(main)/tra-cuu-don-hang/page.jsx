import IndexLookUpOrder from '@/sections/lookuporder'

export default function LookUpOrderPage({searchParams}) {
  const {viewport} = searchParams
  return <IndexLookUpOrder viewport={viewport} />
}
