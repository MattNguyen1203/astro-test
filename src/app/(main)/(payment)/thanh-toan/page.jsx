import {auth} from '@/auth'
import getDataProxy from '@/lib/getDataProxy'
import PaymentIndex from '@/sections/payment'

export default async function page({searchParams}) {
  const session = await auth()
  const order = searchParams?.order
  const listIdItemCart = order?.split('--')
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
      listIdItemCart={listIdItemCart}
      session={session}
    />
  )
}
