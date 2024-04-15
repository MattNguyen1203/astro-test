'use server'

import postData from '@/lib/postData'

export const createOrder = async (body) => {
  const res = await postData('/okhub/v1/order', body)
  return res
}
