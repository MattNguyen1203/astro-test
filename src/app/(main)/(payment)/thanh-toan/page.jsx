import {auth} from '@/auth'
import {getDataProfile} from '@/lib/getDataProfile'
import getDataProxy from '@/lib/getDataProxy'
import PaymentIndex from '@/sections/payment'

export default async function page({searchParams}) {
  const order = searchParams?.order
  const listIdItemCart = order?.split('--')

  const [session, province, district, commune] = await Promise.all([
    auth(),
    getDataProxy('/api/province'),
    getDataProxy('/api/district'),
    getDataProxy('/api/commune'),
  ])

  const request1 = {
    api: '/okhub/v1/cart',
    token: session?.accessToken || null,
  }
  const request2 = {
    api: '/custom/v1/customer/customer',
    token: session?.accessToken || null,
  }

  const [dataCarts, profile] =
    session?.accessToken &&
    (await Promise.all([getDataProfile(request1), getDataProfile(request2)]))

  const listCartNew = []

  if (dataCarts?.length && Array.isArray(dataCarts)) {
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
      dataCartsDefault={dataCarts}
      profile={profile}
    />
  )
}
