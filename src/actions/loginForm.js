'use server'

import {signIn} from '@/auth'

export const loginForm = async (values) => {
  const res = await signIn('credentials', {
    phone: values?.phone,
    password: values?.password,
    type: values?.type || 'default',
    redirectTo: '/',
  })
  return res
}
