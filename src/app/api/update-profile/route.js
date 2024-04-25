import {updateProfile} from '@/actions/updateProfile'

export async function POST(request) {
  const res = await updateProfile(request)

  return Response.json(res)
}
