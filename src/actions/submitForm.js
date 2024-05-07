'use server'

import postData from '@/lib/postData'

export const submitForm = async (api, body) => {
  const res = await postData(api, body, {})
  return res
}
