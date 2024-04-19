'use server'

import postData from '@/lib/postData'

export const signUpForm = async (body) => {
  try {
    const res = await postData('/okhub/v1/verify/otp', body)

    return res
  } catch (error) {
    return error
  }
}
