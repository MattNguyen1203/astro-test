'use server'

import getData from '@/lib/getData'

export const rePayment = async (api) => {
  const res = await getData(api)
  return res
}
