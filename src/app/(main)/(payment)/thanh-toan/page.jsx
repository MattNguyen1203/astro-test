import {auth} from '@/auth'
import {fetchMetaData} from '@/lib/fetchMetaData'
import getData from '@/lib/getData'
import {getDataProfile} from '@/lib/getDataProfile'
import getDataProxy from '@/lib/getDataProxy'
import {getMeta} from '@/lib/getMeta'
import PaymentIndex from '@/sections/payment'

export async function generateMetadata() {
  const result = await fetchMetaData(`thanh-toan/`)
  return getMeta(result, `thanh-toan`)
}

export default async function page({searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport === 'mobile'
  const order = searchParams?.order
  const id = searchParams?.id
  const listIdItemCart = order?.split('--')

  const coupons = await getData('/okhub/v1/coupon/category/flash-sale')

  const [session, province, district, commune, detailOrder] = await Promise.all(
    [
      auth(),
      getDataProxy('/api/province'),
      getDataProxy('/api/district'),
      getDataProxy('/api/commune'),
      id && getData(`/okhub/v1/order/${id}`),
    ],
  )

  const request1 = {
    api: '/okhub/v1/cart',
    token: session ? session?.accessToken : null,
  }
  const request2 = {
    api: '/custom/v1/customer/customer',
    token: session ? session?.accessToken : null,
  }

  const [dataCarts, profile] = await Promise.all([
    getDataProfile(request1),
    getDataProfile(request2),
  ])

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
      detailOrder={detailOrder}
      id={id}
      isMobile={isMobile}
      coupons={coupons}
    />
  )
}
