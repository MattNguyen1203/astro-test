'use server'

import {postDataProfile} from '@/lib/postDataProfile copy'

export const updateProfile = async (request) => {
  const res = await postDataProfile(request)
  console.log('🚀 ~ updateProfile ~ res:', res)
  return res
}
