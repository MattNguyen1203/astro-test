export async function getDataAuth(request) {
  const accessToken = `Bearer ${request.token}`
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ['Authorization']: accessToken,
    },
    redirect: 'follow',
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}${request.api}`,
    requestOptions,
  )
  const data = await res.json()
  return data
}
