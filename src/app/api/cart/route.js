export async function GET(request) {
  const accessToken = request.headers.get('Authorization')
  if (!accessToken) {
    return new Response('Unauthorized', {status: 401})
  }
  const myHeaders = new Headers()
  myHeaders.append('Authorization', accessToken)

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  }

  const res = await fetch(`${process.env.API}/wc/store/v1/cart`, requestOptions)
  const data = await res.json()
  return Response.json(data)
}
