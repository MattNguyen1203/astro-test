export default async function postDataProxy(request) {
  try {
    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${request?.token}`)

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: request?.body,
      redirect: 'follow',
    }
    const res = await fetch(
      `${process.env.DOMAIN}${request?.api}`,
      requestOptions,
    )

    if (!res.ok) {
      return res.json()
    }

    const data = await res.json()
    return data
  } catch (error) {
    // Handle errors in fetching or data parsing
    console.error('Failed to fetch data:', error.message)
    throw error // Optionally re-throw the error if you want calling code to handle it
  }
}
