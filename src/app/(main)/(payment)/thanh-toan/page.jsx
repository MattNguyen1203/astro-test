import {auth} from '@/auth'
import {getDataProfile} from '@/lib/getDataProfile'
import getDataProxy from '@/lib/getDataProxy'
import PaymentIndex from '@/sections/payment'

export default async function page({searchParams}) {
  const order = searchParams?.order
  const listIdItemCart = order?.split('--')
  const [province, district, commune, session] = await Promise.all([
    getDataProxy('/api/province'),
    getDataProxy('/api/district'),
    getDataProxy('/api/commune'),
    auth(),
  ])

  const request = {
    api: '/okhub/v1/cart',
    token: session?.accessToken,
  }
  const dataCarts = await getDataProfile(request)
  const listCartNew = []

  if (dataCarts?.length) {
    listIdItemCart?.forEach((e) => {
      listCartNew.push(dataCarts[Number(e)])
    })
  }
  return (
    <PaymentIndex
      province={province}
      district={district}
      commune={commune}
      listIdItemCart={listIdItemCart}
      session={session}
      dataCarts={listCartNew}
    />
  )
}
