'use server'

import {postDataWishlist} from '@/lib/postDataWishlist'

export const addWishlist = async (request) => {
  const res = await postDataWishlist(request)
  return res
}
