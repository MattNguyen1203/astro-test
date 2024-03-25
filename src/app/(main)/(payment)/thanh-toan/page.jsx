import getDataProxy from '@/lib/getDataProxy'
import PaymentIndex from '@/sections/payment'

export default async function page() {
  const [province, district, commune] = await Promise.all([
    getDataProxy('/api/province'),
    getDataProxy('/api/district'),
    getDataProxy('/api/commune'),
  ])
  return (
    <PaymentIndex
      province={province}
      district={district}
      commune={commune}
    />
  )
}
