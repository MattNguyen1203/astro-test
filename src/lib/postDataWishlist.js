export async function postDataWishlist(request) {
  try {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append('Authorization', `Bearer ${request?.token}`)

    const requestOptions = {
      method: request?.method || 'POST',
      headers: myHeaders,
      body: request?.body,
      redirect: 'follow',
    }
    const res = await fetch(`${process.env.API}${request?.api}`, requestOptions)

    // Check if the response was successful
    if (!res.ok) {
      return res.json()
      // throw new Error(`HTTP error! status: ${res.status}`)
    }

    const data = await res.json()
    return data
  } catch (error) {
    // Handle errors in fetching or data parsing
    console.error('Failed to fetch data:', error.message)
    throw error // Optionally re-throw the error if you want calling code to handle it
  }
}
