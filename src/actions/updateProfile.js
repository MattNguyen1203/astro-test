'use server'

import {postDataProfile} from '@/lib/postDataProfile'

export const updateProfile = async (request) => {
  const res = await postDataProfile(request)
  return res
}
