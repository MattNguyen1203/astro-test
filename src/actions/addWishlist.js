'use server'

import {postDataProfile} from '@/lib/postDataProfile'

export const addWishlist = async (request) => {
  const res = await postDataProfile(request)
  return res
}
