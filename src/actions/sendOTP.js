'use server'

import postData from '@/lib/postData'

export const sendOTP = async (body) => {
  const res = await postData('/okhub/v1/send/otp', body)
  return res
}
