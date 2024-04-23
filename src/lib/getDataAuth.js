export async function getDataAuth(request) {
  try {
    const accessToken = `Bearer ${request?.token}`
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ['Authorization']: accessToken,
      },
      redirect: 'follow',
      revalidate: request?.revalidate || 60,
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}${request?.api}`,
      requestOptions,
    )

    // Check if the response was successful
    if (!res.ok) {
      return res.text()
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
