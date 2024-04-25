'use server'

import getData from '@/lib/getData'

export const applyCoupon = async (code) => {
  const res = await getData(`/okhub/v1/coupon/code?slug=${code}`)
  return res
}
