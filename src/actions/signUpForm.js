'use server'

import postData from '@/lib/postData'

export const signUpForm = async (values) => {
  const res = await postData(
    '/customer/v1/customer/registerCustomer',
    JSON.stringify({
      username: values.email.split('@')[0],
      email: values.email,
      phone: values,
      password: values.password,
    }),
  )
  console.log('🚀 ~ signUpForm ~ res:', res)

  return res
}
