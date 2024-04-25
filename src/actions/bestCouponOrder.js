'use server'

import postData from '@/lib/postData'

export const bestCouponOrder = async (request) => {
  const res = await postData(request?.api, request?.body)
  return res
}
