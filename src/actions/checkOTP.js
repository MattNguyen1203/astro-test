'use server'

import postData from '@/lib/postData'

export const checkOTP = async (body) => {
  const res = await postData('/okhub/v1/verify/otp', body)
  return res
}
