export async function getDataNoCache(request) {
  try {
    if (!request?.token) return null
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append('Authorization', `Bearer ${request?.token}`)

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
      cache: 'no-store',
    }
    const res = await fetch(`${process.env.API}${request?.api}`, requestOptions)

    if (!res.ok) {
      console.log(`${process.env.API}${api}`)
      throw new Error('Failed!')
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.log(`fetch failed: ${process.env.API}${api}`)
    throw new Error('Failed!')
  }
}
