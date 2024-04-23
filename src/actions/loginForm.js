'use server'

import {signIn} from '@/auth'

export const loginForm = async (values) => {
  await signIn('credentials', {
    phone: values?.phone,
    password: values?.password,
    type: values?.type || 'default',
    redirectTo: '/',
  })
}
