'use server'

import {signIn} from '@/auth'

export const loginForm = async (values) => {
  await signIn('credentials', {
    email: values?.email,
    password: values?.password,
    type: 'default',
    redirectTo: '/',
  })
}
