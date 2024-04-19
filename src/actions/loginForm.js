'use server'

import {signIn} from '@/auth'

export const loginForm = async (values) => {
  await signIn('credentials', {
    login: values?.login,
    password: values?.password,
    type: values?.type || 'default',
    redirectTo: '/',
  })
}
