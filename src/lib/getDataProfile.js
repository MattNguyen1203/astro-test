export async function getDataProfile(request) {
  try {
    if (!request?.token) return null
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append('Authorization', `Bearer ${request?.token}`)

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    }
    const res = await fetch(`${process.env.API}${request?.api}`, requestOptions)

    // Check if the response was successful
    if (!res.ok) {
      return res.text()
      // throw new Error(`HTTP error! status: ${res.status}`)
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.error('Failed to fetch data:', `${process.env.API}${request?.api}`)
  }
}
