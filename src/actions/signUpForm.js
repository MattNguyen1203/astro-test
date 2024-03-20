'use server'

import postData from '@/lib/postData'

export const signUpForm = async (values) => {
  try {
    const res = await postData(
      '/customer/v1/customer/registerCustomer',
      JSON.stringify({
        username: values.email.split('@')[0],
        email: values.email,
        phone: values.phone,
        password: values.password,
      }),
    )
    return res
  } catch (error) {
    return error
  }
}
