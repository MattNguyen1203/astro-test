export default async function getData(api, revalidate = 60) {
  try {
    const res = await fetch(`${process.env.API}${api}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // next: {revalidate},
      // next: { tags: ["products"] },
    })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      // throw new Error('Failed to fetch data')
      console.log(`${process.env.API}${api}`)
      return null
    }

    return res.json()
  } catch (error) {
    console.log(`${process.env.API}${api}`)
  }
}
